// Templates live in localStorage, with JSON export/import as the durable copy.
const KEY = 'anime-move-effects.v1';

// Permanent moves: always present, can't be deleted or renamed, effect is fixed.
// Only their footage (recorded template clips) can be edited.
export const BUILTIN_MOVES = [
  {
    id: 'akaza-final-form',
    name: 'Akaza’s Destructive Death – Final Form: Blue Silver Chaotic Afterglow',
    effect: 'akaza',
    durationMs: 2000,
  },
  {
    id: 'strength-in-numbers',
    name: 'Strength in Numbers',
    effect: 'warriors',
    durationMs: 2000,
  },
];

export function emptyData() { return withBuiltins({ moves: [], idle: [] }); }

/** Ensures every built-in move exists (keeping its recorded clips) and sits at the top of the list. */
export function withBuiltins(data) {
  const builtins = BUILTIN_MOVES.map((b) => {
    const saved = data.moves.find((m) => m.id === b.id);
    return { ...b, builtin: true, templates: saved?.templates ?? [] };
  });
  const ids = new Set(BUILTIN_MOVES.map((b) => b.id));
  const builtinFx = new Set(BUILTIN_MOVES.map((b) => b.effect));
  const custom = data.moves.filter((m) => !ids.has(m.id) && !builtinFx.has(m.effect));
  return { moves: [...builtins, ...custom], idle: data.idle ?? [] };
}

export function load() {
  try {
    const d = JSON.parse(localStorage.getItem(KEY));
    if (d && Array.isArray(d.moves)) return withBuiltins({ moves: d.moves, idle: d.idle ?? [] });
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
