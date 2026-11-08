// Templates live in localStorage, with JSON export/import as the durable copy.
const KEY = 'anime-move-effects.v1';

export function emptyData() { return { moves: [], idle: [] }; }

export function load() {
  try {
    const d = JSON.parse(localStorage.getItem(KEY));
    if (d && Array.isArray(d.moves)) return { moves: d.moves, idle: d.idle ?? [] };
  } catch { /* ignore */ }
  return emptyData();
}

export function save(data) {
  try { localStorage.setItem(KEY, JSON.stringify(data)); return true; }
  catch (e) { console.warn('Could not save templates', e); return false; }
}

/** Clip frames are stored as {t, f:number[]} with t starting at 0 (ms). */
export function packClip(frames) {
  const t0 = frames[0].t;
  return frames.map((p) => ({ t: Math.round(p.t - t0), f: Array.from(p.f, (v) => Math.round(v * 1000) / 1000) }));
}

export function download(data) {
  const blob = new Blob([JSON.stringify(data, null, 1)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'anime-moves.json';
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
