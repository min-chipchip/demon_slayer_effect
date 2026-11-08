import { PoseLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';

const WASM_URL = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm';
const MODEL_URL =
  'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task';

export async function createPoseLandmarker() {
  const vision = await FilesetResolver.forVisionTasks(WASM_URL);
  const opts = (delegate) => ({
    baseOptions: { modelAssetPath: MODEL_URL, delegate },
    runningMode: 'VIDEO',
    numPoses: 1,
    minPoseDetectionConfidence: 0.5,
    minPosePresenceConfidence: 0.5,
    minTrackingConfidence: 0.5,
  });
  try {
    return await PoseLandmarker.createFromOptions(vision, opts('GPU'));
  } catch (e) {
    console.warn('GPU delegate failed, falling back to CPU', e);
    return await PoseLandmarker.createFromOptions(vision, opts('CPU'));
  }
}

// --- One Euro filter: smooths jitter while keeping fast motion responsive ---
class LowPass {
  constructor() { this.y = null; }
  filter(x, a) { this.y = this.y === null ? x : a * x + (1 - a) * this.y; return this.y; }
}

class OneEuro {
  constructor(minCutoff = 1.7, beta = 5, dCutoff = 1) {
    this.minCutoff = minCutoff; this.beta = beta; this.dCutoff = dCutoff;
    this.x = new LowPass(); this.dx = new LowPass(); this.t = null;
  }
  static alpha(cutoff, dt) { const tau = 1 / (2 * Math.PI * cutoff); return 1 / (1 + tau / dt); }
  filter(v, tMs) {
    if (this.t === null) { this.t = tMs; this.dx.filter(0, 1); return this.x.filter(v, 1); }
    const dt = Math.max((tMs - this.t) / 1000, 1e-3);
    this.t = tMs;
    const dv = (v - this.x.y) / dt;
    const edv = this.dx.filter(dv, OneEuro.alpha(this.dCutoff, dt));
    const cutoff = this.minCutoff + this.beta * Math.abs(edv);
    return this.x.filter(v, OneEuro.alpha(cutoff, dt));
  }
}

export class LandmarkSmoother {
  constructor(n = 33) { this.n = n; this.reset(); }
  reset() { this.filters = Array.from({ length: this.n }, () => [new OneEuro(), new OneEuro()]); }
  smooth(landmarks, tMs) {
    return landmarks.map((p, i) => ({
      x: this.filters[i][0].filter(p.x, tMs),
      y: this.filters[i][1].filter(p.y, tMs),
      v: p.visibility ?? 1,
    }));
  }
}

// Skeleton connections for drawing
export const CONNECTIONS = [
  [11, 12], [11, 13], [13, 15], [12, 14], [14, 16],
  [11, 23], [12, 24], [23, 24], [23, 25], [25, 27], [24, 26], [26, 28],
  [27, 31], [28, 32], [15, 19], [16, 20], [0, 11], [0, 12],
];
