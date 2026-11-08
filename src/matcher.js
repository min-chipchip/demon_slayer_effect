import { DIM, mirrorFeat } from './normalize.js';

export const SAMPLES = 32; // every clip is resampled to this many frames before DTW

/** Resample a clip [{t, f}] (t in ms, f = feature array) to n frames, evenly in time. */
export function resample(frames, n = SAMPLES) {
  if (frames.length < 2) return null;
  const t0 = frames[0].t, t1 = frames[frames.length - 1].t;
  const out = [];
  let j = 0;
  for (let i = 0; i < n; i++) {
    const t = t0 + ((t1 - t0) * i) / (n - 1);
    while (j < frames.length - 2 && frames[j + 1].t < t) j++;
    const a = frames[j], b = frames[j + 1];
    const u = b.t === a.t ? 0 : Math.min(1, Math.max(0, (t - a.t) / (b.t - a.t)));
    const f = new Float32Array(DIM);
    for (let d = 0; d < DIM; d++) f[d] = a.f[d] + (b.f[d] - a.f[d]) * u;
    out.push(f);
  }
  return out;
}

function frameDist(a, b) {
  let s = 0;
  for (let k = 0; k < DIM; k += 2) s += Math.hypot(a[k] - b[k], a[k + 1] - b[k + 1]);
  return s / (DIM / 2);
}

/** Dynamic time warping with a Sakoe-Chiba band; returns mean per-step joint distance. */
export function dtw(a, b, bandFrac = 0.25) {
  const n = a.length, m = b.length;
  const w = Math.max(Math.round(bandFrac * Math.max(n, m)), Math.abs(n - m));
  let prev = new Float64Array(m + 1).fill(Infinity);
  let cur = new Float64Array(m + 1);
  prev[0] = 0;
  for (let i = 1; i <= n; i++) {
    cur.fill(Infinity);
    const j0 = Math.max(1, i - w), j1 = Math.min(m, i + w);
    for (let j = j0; j <= j1; j++) {
      cur[j] = frameDist(a[i - 1], b[j - 1]) + Math.min(prev[j], cur[j - 1], prev[j - 1]);
    }
    [prev, cur] = [cur, prev];
  }
  return prev[m] / (n + m);
}

const DEFAULT_THRESHOLD = 0.3;

/** Thresholds per move from how similar its templates are and how far idle movement is. */
export function calibrate(move, idleClips) {
  const tpl = move.templates.map((c) => resample(c)).filter(Boolean);
  let thr = DEFAULT_THRESHOLD;
  if (tpl.length >= 2) {
    const d = [];
    for (let i = 0; i < tpl.length; i++) for (let j = i + 1; j < tpl.length; j++) d.push(dtw(tpl[i], tpl[j]));
    const mean = d.reduce((s, x) => s + x, 0) / d.length;
    thr = Math.max(0.15, mean * 1.5);
  }
  // Slide a window over idle recordings; stay safely below the closest idle match
  let idleMin = Infinity;
  for (const clip of idleClips) {
    const t0 = clip[0].t, tEnd = clip[clip.length - 1].t;
    for (let s = t0; s + move.durationMs <= tEnd; s += 200) {
      const win = resample(clip.filter((p) => p.t >= s && p.t <= s + move.durationMs));
      if (!win) continue;
      for (const t of tpl) idleMin = Math.min(idleMin, dtw(win, t), dtw(win.map(mirrorFeat), t));
    }
  }
  if (isFinite(idleMin)) thr = Math.min(thr, idleMin * 0.85);
  return { templates: tpl, threshold: thr, idleMin };
}

export class Matcher {
  constructor() {
    this.moves = []; // [{move, templates, threshold}]
    this.sensitivity = 1;
    this.mirror = true;
    this.hitsNeeded = 2;
    this.cooldownMs = 1500;
    this.state = new Map(); // id -> {hits, last, score}
  }

  setMoves(moves, idleClips) {
    this.moves = moves
      .filter((m) => m.templates.length > 0)
      .map((m) => ({ move: m, ...calibrate(m, idleClips) }));
    this.state.clear();
  }

  /** @param buffer rolling [{t, f}] of live frames. @returns triggered move or null */
  update(buffer, now) {
    let fired = null;
    for (const entry of this.moves) {
      const { move } = entry;
      const st = this.state.get(move.id) ?? { hits: 0, last: 0, score: Infinity };
      this.state.set(move.id, st);
      const recent = [];
      for (let i = buffer.length - 1; i >= 0 && buffer[i].t >= now - move.durationMs; i--) recent.push(buffer[i]);
      if (recent.length < 8 || now - recent[recent.length - 1].t < move.durationMs * 0.85) { st.score = Infinity; continue; }
      const live = resample(recent.reverse());
      const liveM = this.mirror ? live.map(mirrorFeat) : null;
      let best = Infinity;
      for (const t of entry.templates) {
        best = Math.min(best, dtw(live, t));
        if (liveM) best = Math.min(best, dtw(liveM, t));
      }
      st.score = best;
      const thr = entry.threshold * this.sensitivity;
      if (best < thr) st.hits++; else st.hits = 0;
      if (st.hits >= this.hitsNeeded && now - st.last > this.cooldownMs && !fired) {
        st.last = now;
        st.hits = 0;
        fired = move;
      }
    }
    return fired;
  }

  scores() {
    return this.moves.map((e) => ({
      move: e.move,
      score: this.state.get(e.move.id)?.score ?? Infinity,
      threshold: e.threshold * this.sensitivity,
    }));
  }
}
