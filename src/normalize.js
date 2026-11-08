// Joints used for move matching: nose, shoulders, elbows, wrists, hips, knees, ankles
export const FEATURE_IDX = [0, 11, 12, 13, 14, 15, 16, 23, 24, 25, 26, 27, 28];
export const DIM = FEATURE_IDX.length * 2;

// Left/right partner of each feature slot (used for mirror-invariant matching)
const PAIRS = { 0: 0, 11: 12, 12: 11, 13: 14, 14: 13, 15: 16, 16: 15, 23: 24, 24: 23, 25: 26, 26: 25, 27: 28, 28: 27 };
const MIRROR_SLOT = FEATURE_IDX.map((idx) => FEATURE_IDX.indexOf(PAIRS[idx]));

/**
 * Translate to mid-hip, scale by torso length, and correct for aspect ratio,
 * so the features don't depend on where you stand or how far from the camera.
 * Units are "torso lengths"; y points down.
 */
export function normalizePose(lm, aspect) {
  const hx = (lm[23].x + lm[24].x) / 2, hy = (lm[23].y + lm[24].y) / 2;
  const sx = (lm[11].x + lm[12].x) / 2, sy = (lm[11].y + lm[12].y) / 2;
  const torso = Math.hypot((sx - hx) * aspect, sy - hy);
  if (torso < 1e-3) return null;
  const feat = new Float32Array(DIM);
  FEATURE_IDX.forEach((idx, k) => {
    feat[2 * k] = ((lm[idx].x - hx) * aspect) / torso;
    feat[2 * k + 1] = (lm[idx].y - hy) / torso;
  });
  return { feat, torso, hipY: hy };
}

export function mirrorFeat(f) {
  const out = new Float32Array(DIM);
  for (let k = 0; k < MIRROR_SLOT.length; k++) {
    const m = MIRROR_SLOT[k];
    out[2 * k] = -f[2 * m];
    out[2 * k + 1] = f[2 * m + 1];
  }
  return out;
}
