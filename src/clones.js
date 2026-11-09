import * as THREE from 'three';

// Cutout stage effects: a big emblem grows from the chest, drops to become the floor, the person is
// cut out of the camera with the PoseLandmarker segmentation mask, and copies stand beside them.
//  - akaza:    snowflake floor, red backdrop, four delayed red-tinted copies of the person in a V
//  - warriors: gold Warriors crest floor, gold backdrop, two mirrored Steph Curry jump shots

const DURATION = 6.5;
const HISTORY = 8; // ring of past cutout frames (for the delayed copies)
const RT_W = 640;

const rand = (a, b) => a + Math.random() * (b - a);
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const lerp = (a, b, t) => a + (b - a) * t;
const easeOut = (t) => 1 - Math.pow(1 - clamp01(t), 3);
const easeInOut = (t) => { t = clamp01(t); return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };

const GOLD = [1, 0.78, 0.17];

// slot (delayed copy): delay in captured frames, x offset / lift in body heights, scale, max opacity
// slot (sprite): image cutout; bodyFrac = share of the image height that matches the person's bodyH
// (nose->feet), handX/handY = ball release point in the image (0..1, y down), flip = mirrored
export const THEMES = {
  akaza: {
    floorTex: import.meta.env.BASE_URL + 'effects/snowflake.png', floorAdditive: true, floorSpin: [3, 0.6], floorSquash: 0.28,
    backdrop: { hot: [0.95, 0.16, 0.06], dark: [0.10, 0.0, 0.02] },
    realRim: [0.6, 0.97, 1], copyRim: [1, 0.3, 0.1], copyTint: [1.0, 0.22, 0.12], tintAmt: 0.65,
    slots: [
      { delay: 6, dx: -1.0, lift: 0.16, s: 0.72, op: 0.45, fadeAt: 2.0, order: 2 },
      { delay: 6, dx: 1.0, lift: 0.16, s: 0.72, op: 0.45, fadeAt: 2.0, order: 2 },
      { delay: 3, dx: -0.55, lift: 0.08, s: 0.85, op: 0.65, fadeAt: 1.6, order: 3 },
      { delay: 3, dx: 0.55, lift: 0.08, s: 0.85, op: 0.65, fadeAt: 1.6, order: 3 },
      { delay: 0, dx: 0, lift: 0, s: 1, op: 1, fadeAt: 0, order: 4, real: true },
    ],
    particles(ps, st, W, H, scale) {
      for (let i = 0; i < 12; i++) {
        ps.emit(rand(0, W), rand(-20, 0), { vx: rand(-30, 30) * scale, vy: rand(60, 150) * scale, life: rand(3.5, 5.5), size: rand(3, 8) * scale, color: [0.92, 0.98, 1], endColor: [0.55, 0.85, 1], gravity: 15 * scale, drag: 0.9 });
      }
      if (st.t > 1.9) st.floorSparks(6, [0.85, 1, 1], [0.3, 0.8, 1]);
    },
  },

  warriors: {
    floorTex: import.meta.env.BASE_URL + 'effects/warriors-logo.png', floorAdditive: false, floorSpin: [2.4, 0], floorSquash: 0.3,
    backdrop: { hot: [1.0, 0.8, 0.16], dark: [0.16, 0.09, 0.0] },
    realRim: [1, 0.86, 0.3], copyRim: [1, 0.8, 0.2], copyTint: [1.0, 0.82, 0.3], tintAmt: 0.25,
    slots: [
      // Original photo leans left, so it stands on the right; the mirrored one on the left.
      { sprite: import.meta.env.BASE_URL + 'effects/curry.png', bodyFrac: 0.72, handX: 0.3, handY: 0.0, flip: true, dx: -0.95, lift: 0.1, s: 0.95, op: 1, fadeAt: 1.6, order: 3 },
      { sprite: import.meta.env.BASE_URL + 'effects/curry.png', bodyFrac: 0.72, handX: 0.3, handY: 0.0, flip: false, dx: 0.95, lift: 0.1, s: 0.95, op: 1, fadeAt: 1.6, order: 3 },
      { delay: 0, dx: 0, lift: 0, s: 1, op: 1, fadeAt: 0, order: 4, real: true },
    ],
    particles(ps, st, W, H, scale) {
      // gold glitter raining down
      for (let i = 0; i < 10; i++) {
        ps.emit(rand(0, W), rand(-20, 0), { vx: rand(-40, 40) * scale, vy: rand(90, 200) * scale, life: rand(3, 4.5), size: rand(3, 8) * scale, color: [1, 0.92, 0.45], endColor: [1, 0.6, 0.05], gravity: 20 * scale, drag: 0.9 });
      }
      if (st.t > 1.9) st.floorSparks(6, [1, 0.95, 0.5], [1, 0.65, 0.05]);
      // both Currys release at once; the balls arc in and meet above the person's head
      const RELEASE = 2.5, FLIGHT = 1.05;
      const u = (st.t - RELEASE) / FLIGHT;
      if (u >= 0 && u <= 1) {
        const target = { x: st.floorX, y: Math.max(H * 0.07, st.floorY - st.bodyH * 1.2) };
        for (const f of st.figures) {
          if (!f.hand) continue;
          const apex = st.bodyH * 0.45;
          const x = lerp(f.hand.x, target.x, u), y = lerp(f.hand.y, target.y, u) - 4 * apex * u * (1 - u);
          ps.emit(x, y, { life: 0.05, size: 30 * scale, color: [1, 0.55, 0.12] });
          ps.emit(x, y, { life: 0.05, size: 16 * scale, color: [1, 0.9, 0.6] });
          for (let i = 0; i < 4; i++) ps.emit(x + rand(-5, 5) * scale, y + rand(-5, 5) * scale, { vx: rand(-25, 25) * scale, vy: rand(-25, 25) * scale, life: rand(0.35, 0.6), size: rand(6, 12) * scale, color: GOLD, endColor: [1, 0.45, 0], drag: 0.3 });
        }
      }
      if (!st.swished && st.t >= RELEASE + FLIGHT) {
        st.swished = true;
        const x = st.floorX, y = Math.max(H * 0.07, st.floorY - st.bodyH * 1.2);
        for (let i = 0; i < 260; i++) {
          const a = rand(0, Math.PI * 2), s = rand(150, 650) * scale;
          ps.emit(x, y, { vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: rand(0.6, 1.3), size: rand(6, 16) * scale, color: Math.random() < 0.75 ? [1, 0.88, 0.3] : [0.35, 0.55, 1], endColor: [1, 0.5, 0], gravity: 300 * scale, drag: 0.25 });
        }
      }
    },
  },
};

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

export class CutoutStage {
  constructor(scene, renderer, theme) {
    this.scene = scene;
    this.renderer = renderer;
    this.theme = theme;
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

    // --- backdrop ---
    const v3 = (c) => new THREE.Vector3(...c);
    this.backdrop = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.ShaderMaterial({
        uniforms: { opacity: { value: 0 }, time: { value: 0 }, hot: { value: v3(theme.backdrop.hot) }, dark: { value: v3(theme.backdrop.dark) } },
        vertexShader: FULL_VERT,
        fragmentShader: `
          uniform float opacity; uniform float time; uniform vec3 hot; uniform vec3 dark; varying vec2 vUv;
          void main() {
            vec2 p = vUv - vec2(0.5, 0.35);       // vUv.y grows downward on screen
            float r = length(p * vec2(1.0, 1.3));
            float flick = 0.06 * sin(time * 9.0 + vUv.x * 14.0) * sin(time * 5.0 + vUv.y * 9.0);
            vec3 c = mix(hot, dark, smoothstep(0.0, 0.75, r + flick));
            gl_FragColor = vec4(c, opacity);
          }`,
        transparent: true, depthTest: false, depthWrite: false, side: THREE.DoubleSide,
      })
    );
    this.backdrop.renderOrder = 0;

    // --- emblem (outer group = position + floor squash, inner = spin) ---
    // keep non-square images (the Warriors logo) at their own aspect ratio; height = emblem size
    const tex = new THREE.TextureLoader().load(theme.floorTex, (t) => { this.flakeSpin.scale.x = t.image.width / t.image.height; });
    tex.colorSpace = THREE.SRGBColorSpace;
    this.flakeMat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, blending: theme.floorAdditive ? THREE.AdditiveBlending : THREE.NormalBlending, depthTest: false, depthWrite: false, side: THREE.DoubleSide, opacity: 0 });
    this.flakeSpin = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), this.flakeMat);
    this.flake = new THREE.Group();
    this.flake.add(this.flakeSpin);
    this.flakeSpin.renderOrder = 1;
    this.flakeSpin.scale.y = -1; // camera is y-down: flip so images (the logo text) read upright

    // --- figures ---
    this.figures = theme.slots.map((slot) => {
      let sprite = null;
      if (slot.sprite) {
        sprite = new THREE.TextureLoader().load(slot.sprite);
        sprite.colorSpace = THREE.SRGBColorSpace;
      }
      const mat = new THREE.ShaderMaterial({
        uniforms: {
          tex: { value: sprite }, crop: { value: new THREE.Vector4(0, 0, 1, 1) },
          opacity: { value: 0 }, tint: { value: slot.real ? 0 : theme.tintAmt }, flip: { value: slot.flip ? 1 : 0 },
          tintColor: { value: v3(theme.copyTint) },
          rim: { value: v3(slot.real ? theme.realRim : theme.copyRim) },
          px: { value: new THREE.Vector2(0.004, 0.004) },
        },
        vertexShader: FULL_VERT,
        fragmentShader: `
          uniform sampler2D tex; uniform vec4 crop; uniform float opacity; uniform float tint; uniform float flip;
          uniform vec3 tintColor; uniform vec3 rim; uniform vec2 px; varying vec2 vUv;
          vec4 at(vec2 s) { return texture2D(tex, vec2(s.x, 1.0 - s.y)); }
          void main() {
            float u = mix(vUv.x, 1.0 - vUv.x, flip);
            vec2 s = vec2(mix(crop.x, crop.z, u), mix(crop.y, crop.w, vUv.y));
            vec4 c = at(s);
            float n = 0.0;
            for (int i = 0; i < 8; i++) {
              float a = float(i) * 0.785398;
              n += at(s + vec2(cos(a), sin(a)) * px * 3.0).a;
            }
            n /= 8.0;
            float edge = clamp(n * (1.0 - c.a) * 3.0, 0.0, 1.0);   // glow just outside the silhouette
            float lum = dot(c.rgb, vec3(0.299, 0.587, 0.114));
            vec3 tc = tintColor * (0.35 + lum * 1.3);
            vec3 col = mix(c.rgb, tc, tint);
            vec3 outc = mix(rim, col, c.a);
            float a = max(c.a, edge * 0.85);
            gl_FragColor = vec4(outc, a * opacity);
          }`,
        transparent: true, depthTest: false, depthWrite: false, side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
      mesh.renderOrder = slot.order;
      mesh.visible = false;
      return { slot, mesh, mat, sprite, hand: null };
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
    this.swished = false;
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

  /** Floor-level sparkles skimming the emblem. */
  floorSparks(n, color, endColor) {
    const { ps, scale } = this._frameCtx;
    for (let i = 0; i < n; i++) {
      const a = rand(0, Math.PI * 2);
      const r = this.floorSize * 0.45 * Math.sqrt(Math.random());
      ps.emit(this.floorX + Math.cos(a) * r, this.floorY + Math.sin(a) * r * this.theme.floorSquash, { vx: rand(-20, 20) * scale, vy: rand(-90, -30) * scale, life: rand(0.5, 1.1), size: rand(4, 9) * scale, color, endColor, drag: 0.5 });
    }
  }

  /** Called every animation frame, with or without a detected person. */
  update(dt, W, H, ps, scale) {
    if (!this.active) return;
    this.t += dt;
    const t = this.t;
    if (t >= DURATION) { this.active = false; this.root.visible = false; return; }
    const th = this.theme;

    const out = 1 - clamp01((t - 5.8) / 0.7); // global fade-out
    const m = this.lastM;
    const bodyH = m?.bodyH ?? H * 0.6;
    this.bodyH = bodyH;
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

    // emblem: grow to fill screen -> drop to floor
    const chest = m?.chest ?? { x: W / 2, y: H * 0.4 };
    const big = Math.hypot(W, H) * (th.floorAdditive ? 1.15 : 0.95);
    const floorSize = Math.min(W * 1.05, bodyH * 2.9);
    this.floorSize = floorSize;
    const [spin0, spin1] = th.floorSpin;
    let x, y, size, squash, spin;
    if (t < 1.1) {
      const p = easeOut(t / 1.1);
      x = lerp(chest.x, W / 2, p); y = lerp(chest.y, H / 2, p);
      size = lerp(H * 0.15, big, p); squash = 1; spin = spin0;
    } else {
      const q = easeInOut((t - 1.1) / 0.8);
      x = lerp(W / 2, this.floorX, q); y = lerp(H / 2, this.floorY, q);
      size = lerp(big, floorSize, q); squash = lerp(1, th.floorSquash, q); spin = lerp(spin0, spin1, q);
    }
    this.flake.position.set(x, y, 0);
    this.flake.scale.set(size, size * squash, 1);
    if (spin1 === 0 && t >= 1.1) {
      // non-spinning emblem (a logo): ease back upright as it lands
      const r = this.flakeSpin.rotation.z % (Math.PI * 2);
      const target = r > Math.PI ? Math.PI * 2 : 0;
      this.flakeSpin.rotation.z = lerp(r, target, 1 - Math.pow(0.0005, dt));
    } else {
      this.flakeSpin.rotation.z += spin * dt;
    }
    this.flakeMat.opacity = Math.min(1, t / 0.25) * out;

    // figures
    for (const f of this.figures) {
      const { slot, mesh, mat } = f;
      f.hand = null;
      const op = (slot.real ? bOp : easeOut((t - slot.fadeAt) / 0.5) * out) * slot.op;
      if (slot.sprite) {
        const img = f.sprite.image;
        if (!img || !img.width || op <= 0.001) { mesh.visible = false; continue; }
        mesh.visible = true;
        mat.uniforms.opacity.value = op;
        mat.uniforms.px.value.set(1 / img.width, 1 / img.height);
        const h = (bodyH * slot.s) / slot.bodyFrac, w = (h * img.width) / img.height;
        // jump: rise off the floor into the shot, hang in the air
        const rise = easeOut((t - slot.fadeAt) / 0.6);
        const footY = this.floorY - (slot.lift + 0.12 * rise) * bodyH;
        const cx = this.floorX + slot.dx * bodyH;
        const top = footY - h;
        mesh.position.set(cx, top + h / 2, 0);
        mesh.scale.set(w, h, 1);
        const hx = slot.flip ? 1 - slot.handX : slot.handX;
        f.hand = { x: cx - w / 2 + hx * w, y: top + slot.handY * h };
        continue;
      }
      const fr = this._frame(slot.delay);
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

    if (out > 0.05) {
      this._frameCtx = { ps, scale };
      th.particles(ps, this, W, H, scale);
    }
  }
}
