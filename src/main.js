import { createPoseLandmarker, LandmarkSmoother, CONNECTIONS } from './pose.js';
import { normalizePose } from './normalize.js';
import { JumpDetector } from './jump.js';
import { Matcher } from './matcher.js';
import { Effects } from './effects.js';
import * as store from './store.js';

const $ = (id) => document.getElementById(id);
const video = $('video'), stage = $('stage'), skel = $('skeleton'), sctx = skel.getContext('2d');
const statusEl = $('status'), countdownEl = $('countdown');

const effects = new Effects($('fx'), stage, $('flash'), $('banner'));
const smoother = new LandmarkSmoother();
const jump = new JumpDetector();
const matcher = new Matcher();
let data = store.load();
let landmarker = null;
let buffer = []; // rolling [{t, f}] of normalized frames
let screenLm = null; // latest landmarks in stage pixels (mirrored for display)
let rec = null; // active recording state
let frameCount = 0, fpsT = performance.now(), fps = 0;

// ---------------- setup ----------------
$('startBtn').onclick = async () => {
  $('startBtn').disabled = true;
  try {
    statusEl.textContent = 'Requesting camera…';
    const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720, facingMode: 'user' }, audio: false });
    video.srcObject = stream;
    await video.play();
    const ar = video.videoWidth / video.videoHeight;
    stage.style.aspectRatio = `${video.videoWidth} / ${video.videoHeight}`;
    stage.style.width = `min(100%, calc((100vh - 24px) * ${ar}))`;
    statusEl.textContent = 'Loading pose model…';
    landmarker = await createPoseLandmarker();
    statusEl.textContent = 'Step back until your whole body is in frame';
    $('startBtn').textContent = 'Camera on';
  } catch (e) {
    console.error(e);
    statusEl.textContent = 'Camera/model error: ' + e.message;
    $('startBtn').disabled = false;
  }
};

$('sens').oninput = (e) => { matcher.sensitivity = +e.target.value; $('sensVal').textContent = (+e.target.value).toFixed(2); };
$('mirrorInv').onchange = (e) => { matcher.mirror = e.target.checked; };
$('recordBtn').onclick = () => startRecording('move');
$('idleBtn').onclick = () => startRecording('idle');
$('exportBtn').onclick = () => store.download(data);
$('importFile').onchange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    const d = JSON.parse(await file.text());
    if (!Array.isArray(d.moves)) throw new Error('missing "moves"');
    data = { moves: d.moves, idle: d.idle ?? [] };
    persist();
  } catch (err) { alert('Import failed: ' + err.message); }
  e.target.value = '';
};
let testIdx = 0;
$('testBtn').onclick = () => {
  const names = ['flame', 'water', 'thunder', 'wind', 'ice', 'jump'];
  const name = names[testIdx++ % names.length];
  effects.trigger(name, screenLm ?? fakePose(), name.toUpperCase());
};

function persist() {
  store.save(data);
  matcher.setMoves(data.moves, data.idle);
  renderMoveList();
}

function renderMoveList() {
  const el = $('moveList');
  el.innerHTML = '';
  if (!data.moves.length) el.innerHTML = '<p class="hint">No moves yet.</p>';
  for (const m of data.moves) {
    const row = document.createElement('div');
    row.className = 'move';
    row.innerHTML = `<span><b></b> <small></small></span><span><button data-a="undo">Undo last</button> <button data-a="del">Delete</button></span>`;
    row.querySelector('b').textContent = m.name;
    row.querySelector('small').textContent = `${m.effect} · ${m.templates.length} clip(s) · ${m.durationMs / 1000}s`;
    row.querySelector('[data-a=undo]').onclick = () => { m.templates.pop(); if (!m.templates.length) data.moves = data.moves.filter((x) => x !== m); persist(); };
    row.querySelector('[data-a=del]').onclick = () => { if (confirm(`Delete "${m.name}"?`)) { data.moves = data.moves.filter((x) => x !== m); persist(); } };
    el.appendChild(row);
  }
  const idle = document.createElement('p');
  idle.className = 'hint';
  idle.textContent = `Idle clips: ${data.idle.length}`;
  if (data.idle.length) {
    const clr = document.createElement('button');
    clr.textContent = 'Clear idle';
    clr.style.marginLeft = '8px';
    clr.onclick = () => { data.idle = []; persist(); };
    idle.appendChild(clr);
  }
  el.appendChild(idle);
}

// ---------------- recording ----------------
function startRecording(kind) {
  if (!landmarker) { alert('Start the camera first.'); return; }
  if (rec) return;
  const name = $('moveName').value.trim();
  if (kind === 'move' && !name) { alert('Enter a move name first.'); return; }
  const durationMs = kind === 'idle' ? 6000 : +$('moveDur').value;
  rec = { kind, name, effect: $('moveEffect').value, durationMs, start: performance.now() + 3000, frames: [] };
}

function updateRecording(now, frame) {
  if (!rec) return;
  if (now < rec.start) {
    countdownEl.className = 'countdown';
    countdownEl.textContent = Math.ceil((rec.start - now) / 1000);
    return;
  }
  const elapsed = now - rec.start;
  countdownEl.className = 'countdown rec';
  countdownEl.textContent = `● REC ${rec.kind === 'idle' ? 'idle' : rec.name} ${(elapsed / 1000).toFixed(1)}s`;
  if (frame) rec.frames.push(frame);
  if (elapsed < rec.durationMs) return;

  countdownEl.textContent = '';
  const r = rec;
  rec = null;
  if (r.frames.length < 10) { statusEl.textContent = 'Recording failed: body not detected'; return; }
  const clip = store.packClip(r.frames);
  if (r.kind === 'idle') {
    data.idle.push(clip);
  } else {
    let m = data.moves.find((x) => x.name.toLowerCase() === r.name.toLowerCase());
    if (!m) { m = { id: crypto.randomUUID(), name: r.name, effect: r.effect, durationMs: r.durationMs, templates: [] }; data.moves.push(m); }
    m.effect = r.effect;
    m.templates.push(clip);
  }
  persist();
  statusEl.textContent = `Saved ${r.kind === 'idle' ? 'idle clip' : `"${r.name}" clip`} (${r.frames.length} frames)`;
}

// ---------------- main loop ----------------
let lastVideoTime = -1, lastNow = performance.now();
function loop() {
  const now = performance.now();
  const dt = Math.min(0.05, (now - lastNow) / 1000);
  lastNow = now;

  if (landmarker && video.readyState >= 2 && video.currentTime !== lastVideoTime) {
    lastVideoTime = video.currentTime;
    const res = landmarker.detectForVideo(video, now);
    processPose(res.landmarks?.[0], now);
    effects.setFrame(video, res.segmentationMasks?.[0], screenLm);
    res.segmentationMasks?.forEach((m) => m.close()); // free mask memory every frame
    frameCount++;
  }
  if (now - fpsT > 500) { fps = (frameCount * 1000) / (now - fpsT); frameCount = 0; fpsT = now; $('fps').textContent = fps.toFixed(0); }

  effects.update(dt, screenLm);
  requestAnimationFrame(loop);
}

let matchTick = 0;
function processPose(raw, now) {
  drawSkeleton(null);
  if (!raw) {
    smoother.reset();
    screenLm = null;
    updateRecording(now, null);
    return;
  }
  const lm = smoother.smooth(raw, now);
  const W = effects.W, H = effects.H;
  screenLm = lm.map((p) => ({ x: (1 - p.x) * W, y: p.y * H, v: p.v }));
  drawSkeleton(screenLm);

  const norm = normalizePose(lm, video.videoWidth / video.videoHeight);
  if (!norm) return;
  const frame = { t: now, f: norm.feat };
  buffer.push(frame);
  while (buffer.length && buffer[0].t < now - 3000) buffer.shift();
  updateRecording(now, frame);

  if (jump.update(lm, norm.hipY, norm.torso, now)) effects.trigger('jump', screenLm, 'JUMP!');
  $('lift').textContent = jump.lift.toFixed(2);

  // Skip matching while recording; run every other frame to save CPU
  if (!rec && matchTick++ % 2 === 0) {
    const hit = matcher.update(buffer, now);
    if (hit) effects.trigger(hit.effect, screenLm, hit.name);
    renderScores();
  }
}

function drawSkeleton(lm) {
  const dpr = window.devicePixelRatio || 1;
  const w = Math.round(effects.W * dpr), h = Math.round(effects.H * dpr);
  if (skel.width !== w || skel.height !== h) { skel.width = w; skel.height = h; }
  sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  sctx.clearRect(0, 0, effects.W, effects.H);
  if (!lm || !$('showSkeleton').checked) return;
  sctx.lineWidth = 3;
  sctx.strokeStyle = 'rgba(120, 220, 255, 0.8)';
  for (const [a, b] of CONNECTIONS) {
    if (lm[a].v < 0.4 || lm[b].v < 0.4) continue;
    sctx.beginPath(); sctx.moveTo(lm[a].x, lm[a].y); sctx.lineTo(lm[b].x, lm[b].y); sctx.stroke();
  }
  sctx.fillStyle = '#fff';
  for (const p of lm) if (p.v >= 0.4) { sctx.beginPath(); sctx.arc(p.x, p.y, 3, 0, Math.PI * 2); sctx.fill(); }
}

function renderScores() {
  const el = $('scores');
  const rows = matcher.scores();
  if (!rows.length) { el.innerHTML = '<p class="hint">Record a move to see match scores (lower = closer).</p>'; return; }
  if (el.children.length !== rows.length || el.querySelector('.hint')) {
    el.innerHTML = rows.map(() => '<div class="score"><span></span><div class="bar"><div class="fill"></div></div></div>').join('');
  }
  rows.forEach((r, i) => {
    const row = el.children[i];
    const s = isFinite(r.score) ? r.score : 0;
    // Bar shows closeness: full when score is 0, threshold at 50%
    const pct = isFinite(r.score) ? Math.max(0, Math.min(100, 100 - (s / (r.threshold * 2)) * 100)) : 0;
    row.classList.toggle('hit', isFinite(r.score) && r.score < r.threshold);
    row.querySelector('span').textContent = `${r.move.name}: ${isFinite(r.score) ? s.toFixed(3) : '–'} / ${r.threshold.toFixed(3)}`;
    row.querySelector('.fill').style.width = pct + '%';
  });
}

/** Rough standing pose in stage pixels, so "Test FX" works without a person. */
function fakePose() {
  const W = effects.W, H = effects.H, cx = W / 2;
  const lm = Array.from({ length: 33 }, () => ({ x: cx, y: H * 0.5, v: 1 }));
  const set = (i, dx, y) => { lm[i] = { x: cx + dx * H, y: y * H, v: 1 }; };
  set(0, 0, 0.18); set(11, -0.1, 0.3); set(12, 0.1, 0.3); set(13, -0.17, 0.42); set(14, 0.17, 0.42);
  set(15, -0.2, 0.52); set(16, 0.2, 0.52); set(23, -0.07, 0.58); set(24, 0.07, 0.58);
  set(25, -0.08, 0.75); set(26, 0.08, 0.75); set(27, -0.08, 0.92); set(28, 0.08, 0.92);
  return lm;
}

persist();
requestAnimationFrame(loop);
