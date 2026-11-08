import * as THREE from 'three';

// Ice Clones: giant snowflake -> snowflake floor, the person cut out of the camera with the
// PoseLandmarker segmentation mask, and four delayed, red-tinted copies in a V behind them.

const DURATION = 6.5;
const HISTORY = 8; // ring of past cutout frames (for the delayed copies)
const RT_W = 640;

// slot: delay in captured frames, x offset / lift in body heights, scale, max opacity
const SLOTS = [
  { delay: 6, dx: -1.0, lift: 0.16, s: 0.72, op: 0.45, fadeAt: 2.0, order: 2 },
  { delay: 6, dx: 1.0, lift: 0.16, s: 0.72, op: 0.45, fadeAt: 2.0, order: 2 },
  { delay: 3, dx: -0.55, lift: 0.08, s: 0.85, op: 0.65, fadeAt: 1.6, order: 3 },
  { delay: 3, dx: 0.55, lift: 0.08, s: 0.85, op: 0.65, fadeAt: 1.6, order: 3 },
  { delay: 0, dx: 0, lift: 0, s: 1, op: 1, fadeAt: 0, order: 4, real: true },
];

const rand = (a, b) => a + Math.random() * (b - a);
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const lerp = (a, b, t) => a + (b - a) * t;
const easeOut = (t) => 1 - Math.pow(1 - clamp01(t), 3);
const easeInOut = (t) => { t = clamp01(t); return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };

const FULL_VERT = `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;

/** Body measurements in stage pixels from screen landmarks. */
function measure(lm, W, H) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const p of lm) {
    if ((p.v ?? 1) < 0.3) continue;
    x0 = Math.min(x0, p.x); x1 = Math.max(x1, p.x); y0 = Math.min(y0, p.y); y1 = Math.max(y1, p.y);
  }
  if (!isFinite(x0)) return null;
  const feetY = Math.min((lm[27].y + lm[28].y) / 2, H * 0.97);
  const bodyH = Math.max(H * 0.2, feetY - lm[0].y + 0.12 * (y1 - y0));
  const cx = (lm[23].x + lm[24].x) / 2;
  const h = y1 - y0;
  // padded crop (head top, outstretched hands) in screen-normalized coords
  const crop = {
    x0: clamp01((x0 - 0.18 * h) / W), x1: clamp01((x1 + 0.18 * h) / W),
    y0: clamp01((y0 - 0.2 * h) / H), y1: clamp01((y1 + 0.06 * h) / H),
  };
  return { cx, feetY, bodyH, chest: { x: (lm[11].x + lm[12].x) / 2, y: (lm[11].y + lm[12].y) / 2 }, crop };
}

export class IceClones {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.t = DURATION;
    this.active = false;
    this.history = []; // [{ rt, m }]
    this.head = -1;
    this.count = 0;

    // --- cutout compositor: video * mask -> render target (screen orientation, mirrored) ---
    this.maskData = null;
    this.maskTex = null;
    this.videoTex = null;
    this.compMat = new THREE.ShaderMaterial({
      uniforms: { video: { value: null }, mask: { value: null } },
      vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
      fragmentShader: `
        uniform sampler2D video; uniform sampler2D mask; varying vec2 vUv;
        void main() {
          float sx = vUv.x, sy = 1.0 - vUv.y;      // screen coords, y down
          vec2 img = vec2(1.0 - sx, sy);           // camera image is mirrored on screen
          vec3 c = texture2D(video, vec2(img.x, 1.0 - img.y)).rgb;
          float m = texture2D(mask, img).r;
          gl_FragColor = vec4(c, smoothstep(0.3, 0.7, m));
        }`,
      depthTest: false, depthWrite: false, blending: THREE.NoBlending,
    });
    this.compScene = new THREE.Scene();
    this.compScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.compMat));
    this.compCam = new THREE.Camera();

    // --- red backdrop ---
    this.backdrop = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.ShaderMaterial({
        uniforms: { opacity: { value: 0 }, time: { value: 0 } },
        vertexShader: FULL_VERT,
        fragmentShader: `
          uniform float opacity; uniform float time; varying vec2 vUv;
          void main() {
            vec2 p = vUv - vec2(0.5, 0.35);       // vUv.y grows downward on screen
            float r = length(p * vec2(1.0, 1.3));
            vec3 hot = vec3(0.95, 0.16, 0.06), dark = vec3(0.10, 0.0, 0.02);
            float flick = 0.06 * sin(time * 9.0 + vUv.x * 14.0) * sin(time * 5.0 + vUv.y * 9.0);
            vec3 c = mix(hot, dark, smoothstep(0.0, 0.75, r + flick));
            gl_FragColor = vec4(c, opacity);
          }`,
        transparent: true, depthTest: false, depthWrite: false, side: THREE.DoubleSide,
      })
    );
    this.backdrop.renderOrder = 0;

    // --- snowflake (outer group = position + floor squash, inner = spin) ---
    const tex = new THREE.TextureLoader().load('/effects/snowflake.png');
    tex.colorSpace = THREE.SRGBColorSpace;
    this.flakeMat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, blending: THREE.AdditiveBlending, depthTest: false, depthWrite: false, side: THREE.DoubleSide, opacity: 0 });
    this.flakeSpin = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), this.flakeMat);
    this.flake = new THREE.Group();
    this.flake.add(this.flakeSpin);
    this.flakeSpin.renderOrder = 1;

    // --- figures ---
    this.figures = SLOTS.map((slot) => {
      const mat = new THREE.ShaderMaterial({
        uniforms: {
          tex: { value: null }, crop: { value: new THREE.Vector4(0, 0, 1, 1) },
          opacity: { value: 0 }, tint: { value: slot.real ? 0 : 1 },
          rim: { value: slot.real ? new THREE.Vector3(0.6, 0.97, 1) : new THREE.Vector3(1, 0.3, 0.1) },
          px: { value: new THREE.Vector2(0.004, 0.004) },
        },
        vertexShader: FULL_VERT,
        fragmentShader: `
          uniform sampler2D tex; uniform vec4 crop; uniform float opacity; uniform float tint;
          uniform vec3 rim; uniform vec2 px; varying vec2 vUv;
          vec4 at(vec2 s) { return texture2D(tex, vec2(s.x, 1.0 - s.y)); }
          void main() {
            vec2 s = vec2(mix(crop.x, crop.z, vUv.x), mix(crop.y, crop.w, vUv.y));
            vec4 c = at(s);
            float n = 0.0;
            for (int i = 0; i < 8; i++) {
              float a = float(i) * 0.785398;
              n += at(s + vec2(cos(a), sin(a)) * px * 3.0).a;
            }
            n /= 8.0;
            float edge = clamp(n * (1.0 - c.a) * 3.0, 0.0, 1.0);   // glow just outside the silhouette
            float lum = dot(c.rgb, vec3(0.299, 0.587, 0.114));
            vec3 red = vec3(1.0, 0.22, 0.12) * (0.35 + lum * 1.3);
            vec3 col = mix(c.rgb, red, 0.65 * tint);
            vec3 outc = mix(rim, col, c.a);
            float a = max(c.a, edge * 0.85);
            gl_FragColor = vec4(outc, a * opacity);
          }`,
        transparent: true, depthTest: false, depthWrite: false, side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
      mesh.renderOrder = slot.order;
      mesh.visible = false;
      return { slot, mesh, mat };
    });

    this.root = new THREE.Group();
    this.root.add(this.backdrop, this.flake, ...this.figures.map((f) => f.mesh));
    this.root.visible = false;
    scene.add(this.root);
  }

  get wantsMask() { return this.active; }

  start(lm, W, H) {
    this.active = true;
    this.t = 0;
    this.count = 0;
    this.lastM = measure(lm, W, H);
    this.floorX = this.lastM?.cx ?? W / 2;
    this.floorY = Math.min(this.lastM?.feetY ?? H, H * 0.88);
    this.root.visible = true;
  }

  /** Called once per detected video frame while active: stores a cutout + measurements. */
  capture(video, mask, lm, W, H) {
    if (!this.active || !mask || !lm) return;
    const m = measure(lm, W, H);
    if (!m) return;
    this.lastM = m;

    if (!this.videoTex) {
      this.videoTex = new THREE.VideoTexture(video);
      this.compMat.uniforms.video.value = this.videoTex;
    }
    const mw = mask.width, mh = mask.height;
    if (!this.maskTex || this.maskTex.image.width !== mw || this.maskTex.image.height !== mh) {
      this.maskTex?.dispose();
      this.maskData = new Uint8Array(mw * mh);
      this.maskTex = new THREE.DataTexture(this.maskData, mw, mh, THREE.RedFormat, THREE.UnsignedByteType);
      this.maskTex.minFilter = this.maskTex.magFilter = THREE.LinearFilter;
      this.compMat.uniforms.mask.value = this.maskTex;
    }
    const f = mask.getAsFloat32Array();
    for (let i = 0; i < f.length; i++) this.maskData[i] = f[i] * 255;
    this.maskTex.needsUpdate = true;

    if (!this.history.length) {
      const rtH = Math.round((RT_W * H) / W);
      for (let i = 0; i < HISTORY; i++) {
        this.history.push({ rt: new THREE.WebGLRenderTarget(RT_W, rtH, { depthBuffer: false }), m: null });
      }
    }
    this.head = (this.head + 1) % HISTORY;
    const slot = this.history[this.head];
    slot.m = m;
    const prev = this.renderer.getRenderTarget();
    this.renderer.setRenderTarget(slot.rt);
    this.renderer.render(this.compScene, this.compCam);
    this.renderer.setRenderTarget(prev);
    this.count++;
  }

  _frame(delay) {
    if (!this.count) return null;
    const d = Math.min(delay, this.count - 1, HISTORY - 1);
    return this.history[(this.head - d + HISTORY) % HISTORY];
  }

  /** Called every animation frame, with or without a detected person. */
  update(dt, W, H, ps, scale) {
    if (!this.active) return;
    this.t += dt;
    const t = this.t;
    if (t >= DURATION) { this.active = false; this.root.visible = false; return; }

    const out = 1 - clamp01((t - 5.8) / 0.7); // global fade-out
    const m = this.lastM;
    const bodyH = m?.bodyH ?? H * 0.6;
    if (m) {
      this.floorX = lerp(this.floorX, m.cx, 1 - Math.pow(0.001, dt));
      this.floorY = lerp(this.floorY, Math.min(m.feetY, H * 0.88), 1 - Math.pow(0.001, dt));
    }

    // backdrop
    const bOp = clamp01(t / 0.6) * out;
    this.backdrop.position.set(W / 2, H / 2, 0);
    this.backdrop.scale.set(W, H, 1);
    this.backdrop.material.uniforms.opacity.value = bOp;
    this.backdrop.material.uniforms.time.value = t;

    // snowflake: grow to fill screen -> drop to floor
    const chest = m?.chest ?? { x: W / 2, y: H * 0.4 };
    const big = Math.hypot(W, H) * 1.15;
    const floorSize = Math.min(W * 1.05, bodyH * 2.9);
    let x, y, size, squash, spin;
    if (t < 1.1) {
      const p = easeOut(t / 1.1);
      x = lerp(chest.x, W / 2, p); y = lerp(chest.y, H / 2, p);
      size = lerp(H * 0.15, big, p); squash = 1; spin = 3;
    } else {
      const q = easeInOut((t - 1.1) / 0.8);
      x = lerp(W / 2, this.floorX, q); y = lerp(H / 2, this.floorY, q);
      size = lerp(big, floorSize, q); squash = lerp(1, 0.28, q); spin = lerp(3, 0.6, q);
    }
    this.flake.position.set(x, y, 0);
    this.flake.scale.set(size, size * squash, 1);
    this.flakeSpin.rotation.z += spin * dt;
    this.flakeMat.opacity = Math.min(1, t / 0.25) * out;

    // figures
    for (const { slot, mesh, mat } of this.figures) {
      const fr = this._frame(slot.delay);
      const op = (slot.real ? bOp : easeOut((t - slot.fadeAt) / 0.5) * out) * slot.op;
      if (!fr || !fr.m || op <= 0.001) { mesh.visible = false; continue; }
      const fm = fr.m, c = fm.crop;
      const cw = (c.x1 - c.x0) * W, ch = (c.y1 - c.y0) * H;
      if (cw < 2 || ch < 2) { mesh.visible = false; continue; }
      mesh.visible = true;
      mat.uniforms.tex.value = fr.rt.texture;
      mat.uniforms.crop.value.set(c.x0, c.y0, c.x1, c.y1);
      mat.uniforms.opacity.value = op;
      mat.uniforms.px.value.set(1 / RT_W, 1 / fr.rt.height);
      const s = slot.real ? 1 : slot.s * (bodyH / fm.bodyH);
      const w = cw * s, h = ch * s;
      if (slot.real) {
        mesh.position.set((c.x0 + c.x1) / 2 * W, (c.y0 + c.y1) / 2 * H, 0);
      } else {
        // feet of the copy stand on the floor, raised a bit for the V
        const feetFrac = (fm.feetY - c.y0 * H) / ch;
        const footY = this.floorY - slot.lift * bodyH;
        const top = footY - feetFrac * h;
        const tx = this.floorX + slot.dx * bodyH;
        const cropCx = (c.x0 + c.x1) / 2 * W;
        mesh.position.set(tx + (cropCx - fm.cx) * s, top + h / 2, 0);
      }
      mesh.scale.set(w, h, 1);
    }

    // falling snow + sparkles skimming the snowflake floor
    if (out > 0.05) {
      for (let i = 0; i < 12; i++) {
        ps.emit(rand(0, W), rand(-20, 0), { vx: rand(-30, 30) * scale, vy: rand(60, 150) * scale, life: rand(3.5, 5.5), size: rand(3, 8) * scale, color: [0.92, 0.98, 1], endColor: [0.55, 0.85, 1], gravity: 15 * scale, drag: 0.9 });
      }
      if (t > 1.9) {
        for (let i = 0; i < 6; i++) {
          const a = rand(0, Math.PI * 2);
          const r = floorSize * 0.45 * Math.sqrt(Math.random());
          ps.emit(this.floorX + Math.cos(a) * r, this.floorY + Math.sin(a) * r * 0.28, { vx: rand(-20, 20) * scale, vy: rand(-90, -30) * scale, life: rand(0.5, 1.1), size: rand(4, 9) * scale, color: [0.85, 1, 1], endColor: [0.3, 0.8, 1], drag: 0.5 });
        }
      }
    }
  }
}
