import * as THREE from 'three';
import { CutoutStage, THEMES } from './clones.js';

// ---------- GPU particle pool (additive glowing points) ----------
class Particles {
  constructor(scene, capacity = 9000) {
    this.cap = capacity;
    this.next = 0;
    this.pos = new Float32Array(capacity * 3);
    this.col = new Float32Array(capacity * 3);
    this.size = new Float32Array(capacity);
    this.alpha = new Float32Array(capacity);
    // CPU-side state
    this.vel = new Float32Array(capacity * 2);
    this.life = new Float32Array(capacity);
    this.maxLife = new Float32Array(capacity);
    this.s0 = new Float32Array(capacity);
    this.s1 = new Float32Array(capacity);
    this.c0 = new Float32Array(capacity * 3);
    this.c1 = new Float32Array(capacity * 3);
    this.grav = new Float32Array(capacity);
    this.drag = new Float32Array(capacity);

    const g = new THREE.BufferGeometry();
    this.attrs = {
      position: new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage),
      pcolor: new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage),
      psize: new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage),
      palpha: new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage),
    };
    for (const [k, a] of Object.entries(this.attrs)) g.setAttribute(k, a);
    this.uniforms = { pixelRatio: { value: window.devicePixelRatio || 1 } };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: `
        attribute vec3 pcolor; attribute float psize; attribute float palpha;
        uniform float pixelRatio; varying vec3 vC; varying float vA;
        void main() { vC = pcolor; vA = palpha; gl_PointSize = psize * pixelRatio;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `
        varying vec3 vC; varying float vA;
        void main() { float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d);
          a = a * a * vA; if (a < 0.003) discard; gl_FragColor = vec4(vC * a, a); }`,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    });
    this.points = new THREE.Points(g, mat);
    this.points.frustumCulled = false;
    scene.add(this.points);
  }

  emit(x, y, { vx = 0, vy = 0, life = 0.6, size = 10, endSize = 0, color = [1, 1, 1], endColor, gravity = 0, drag = 1 }) {
    const i = this.next;
    this.next = (this.next + 1) % this.cap;
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = 0;
    this.vel[i * 2] = vx; this.vel[i * 2 + 1] = vy;
    this.life[i] = this.maxLife[i] = life;
    this.s0[i] = size; this.s1[i] = endSize;
    const ec = endColor ?? color;
    for (let c = 0; c < 3; c++) { this.c0[i * 3 + c] = color[c]; this.c1[i * 3 + c] = ec[c]; }
    this.grav[i] = gravity; this.drag[i] = drag;
  }

  update(dt) {
    for (let i = 0; i < this.cap; i++) {
      if (this.life[i] <= 0) { this.alpha[i] = 0; this.size[i] = 0; continue; }
      this.life[i] -= dt;
      const k = Math.max(0, this.life[i] / this.maxLife[i]); // 1 -> 0
      const dragF = Math.pow(this.drag[i], dt);
      this.vel[i * 2] *= dragF;
      this.vel[i * 2 + 1] = this.vel[i * 2 + 1] * dragF + this.grav[i] * dt;
      this.pos[i * 3] += this.vel[i * 2] * dt;
      this.pos[i * 3 + 1] += this.vel[i * 2 + 1] * dt;
      this.size[i] = this.s1[i] + (this.s0[i] - this.s1[i]) * k;
      this.alpha[i] = Math.pow(k, 0.6);
      for (let c = 0; c < 3; c++) this.col[i * 3 + c] = this.c1[i * 3 + c] + (this.c0[i * 3 + c] - this.c1[i * 3 + c]) * k;
    }
    for (const a of Object.values(this.attrs)) a.needsUpdate = true;
  }
}

// ---------- helpers ----------
const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[(Math.random() * arr.length) | 0];
const hex = (h) => [((h >> 16) & 255) / 255, ((h >> 8) & 255) / 255, (h & 255) / 255];
const mid = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });

/** Jagged lightning path between two points (midpoint displacement). */
function boltPath(a, b, depth = 5, rough = 0.35) {
  let pts = [a, b];
  for (let d = 0; d < depth; d++) {
    const out = [pts[0]];
    for (let i = 0; i < pts.length - 1; i++) {
      const p = pts[i], q = pts[i + 1];
      const len = Math.hypot(q.x - p.x, q.y - p.y);
      const nx = -(q.y - p.y) / (len || 1), ny = (q.x - p.x) / (len || 1);
      const off = rand(-1, 1) * len * rough;
      out.push({ x: (p.x + q.x) / 2 + nx * off, y: (p.y + q.y) / 2 + ny * off }, q);
    }
    pts = out;
  }
  return pts;
}

// ---------- effect definitions (original styles) ----------
// Each returns { duration, start(ctx), tick(ctx, t, dt) }. ctx.lm = current screen landmarks.
const EFFECTS = {
  jump: {
    duration: 0.25,
    color: '#ffffff',
    start({ ps, lm, scale }) {
      const feet = mid(lm[27], lm[28]);
      for (let i = 0; i < 140; i++) {
        const a = rand(0, Math.PI * 2), s = rand(250, 520) * scale;
        ps.emit(feet.x, feet.y, { vx: Math.cos(a) * s, vy: Math.sin(a) * s * 0.25, life: rand(0.35, 0.6), size: rand(6, 12) * scale, color: [0.9, 0.95, 1], endColor: [0.3, 0.4, 0.6], drag: 0.05 });
      }
    },
    tick() {},
  },

  flame: {
    duration: 1.4,
    color: '#ff7a2b',
    start({ ps, lm, scale, flash, shake }) {
      flash('#ff5a1a'); shake();
      const c = mid(lm[23], lm[24]);
      for (let i = 0; i < 380; i++) {
        const a = rand(0, Math.PI * 2), s = rand(200, 700) * scale;
        ps.emit(c.x, c.y - 60 * scale, { vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: rand(0.4, 0.9), size: rand(14, 30) * scale, color: [1, 0.85, 0.3], endColor: [0.8, 0.1, 0.0], gravity: -300 * scale, drag: 0.1 });
      }
    },
    tick({ ps, lm, scale }) {
      for (const w of [lm[15], lm[16]]) {
        for (let i = 0; i < 26; i++) {
          ps.emit(w.x + rand(-12, 12) * scale, w.y + rand(-12, 12) * scale, { vx: rand(-60, 60) * scale, vy: rand(-260, -80) * scale, life: rand(0.35, 0.7), size: rand(14, 28) * scale, color: [1, 0.9, 0.4], endColor: [0.7, 0.05, 0.0], gravity: -400 * scale, drag: 0.3 });
        }
      }
    },
  },

  water: {
    duration: 1.6,
    color: '#4fc3ff',
    start({ flash, ps, lm, scale }) {
      flash('#2a7dff');
      const c = mid(lm[11], lm[24]);
      for (let i = 0; i < 260; i++) {
        const a = rand(0, Math.PI * 2), r = rand(80, 200) * scale;
        ps.emit(c.x + Math.cos(a) * r, c.y + Math.sin(a) * r, { vx: -Math.sin(a) * 500 * scale, vy: Math.cos(a) * 500 * scale, life: rand(0.5, 0.9), size: rand(8, 18) * scale, color: [0.7, 0.95, 1], endColor: [0.05, 0.25, 0.9], drag: 0.2 });
      }
    },
    tick({ ps, lm, scale }, t) {
      const blues = [[0.6, 0.9, 1], [0.3, 0.7, 1], [0.9, 1, 1]];
      for (const w of [lm[15], lm[16]]) {
        for (let i = 0; i < 22; i++) {
          ps.emit(w.x + rand(-8, 8) * scale, w.y + rand(-8, 8) * scale, { vx: rand(-40, 40) * scale, vy: rand(-40, 40) * scale, life: rand(0.6, 1.1), size: rand(10, 22) * scale, color: pick(blues), endColor: [0.0, 0.15, 0.6], drag: 0.05 });
        }
      }
      // spiral around the body
      const c = mid(mid(lm[11], lm[12]), mid(lm[23], lm[24]));
      const R = (120 + t * 160) * scale;
      for (let k = 0; k < 3; k++) {
        const a = t * 9 + (k * Math.PI * 2) / 3;
        for (let i = 0; i < 6; i++) {
          const aa = a + i * 0.05;
          ps.emit(c.x + Math.cos(aa) * R, c.y + Math.sin(aa) * R * 0.8, { life: 0.5, size: rand(10, 18) * scale, color: [0.8, 0.97, 1], endColor: [0.1, 0.3, 0.9] });
        }
      }
    },
  },

  thunder: {
    duration: 0.9,
    color: '#ffe14d',
    start({ flash, shake }) { flash('#fff6c0'); shake(); this._next = 0; },
    tick(ctx, t) {
      if (t < this._next) return;
      this._next = t + 0.07;
      const { ps, lm, W, scale } = ctx;
      const target = pick([lm[15], lm[16], mid(lm[11], lm[12])]);
      const path = boltPath({ x: target.x + rand(-0.3, 0.3) * W, y: -20 }, target, 6, 0.3);
      for (let i = 0; i < path.length - 1; i++) {
        const p = path[i], q = path[i + 1];
        const steps = Math.max(1, Math.hypot(q.x - p.x, q.y - p.y) / (4 * scale));
        for (let s = 0; s < steps; s++) {
          const u = s / steps;
          ps.emit(p.x + (q.x - p.x) * u, p.y + (q.y - p.y) * u, { life: rand(0.12, 0.22), size: rand(7, 12) * scale, color: [1, 1, 0.85], endColor: [1, 0.75, 0.1] });
        }
      }
      for (let i = 0; i < 40; i++) {
        const a = rand(0, Math.PI * 2), s = rand(150, 500) * scale;
        ps.emit(target.x, target.y, { vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: rand(0.2, 0.45), size: rand(4, 9) * scale, color: [1, 1, 0.7], endColor: [1, 0.6, 0], gravity: 600 * scale, drag: 0.2 });
      }
    },
  },

  wind: {
    duration: 1.3,
    color: '#b8ffd9',
    start({ flash }) { flash('#9cffd0'); },
    tick({ ps, lm, scale, W }, t) {
      const c = mid(mid(lm[11], lm[12]), mid(lm[23], lm[24]));
      const dir = lm[15].x + lm[16].x > 2 * c.x ? 1 : -1;
      for (let i = 0; i < 30; i++) {
        const y = c.y + rand(-260, 260) * scale;
        const x = c.x - dir * rand(0, 0.25) * W;
        ps.emit(x, y, { vx: dir * rand(700, 1300) * scale, vy: Math.sin(t * 12 + y * 0.02) * 120 * scale, life: rand(0.25, 0.5), size: rand(4, 9) * scale, color: [0.85, 1, 0.92], endColor: [0.2, 0.7, 0.5], drag: 0.6 });
      }
      for (const w of [lm[15], lm[16]]) {
        for (let i = 0; i < 10; i++) ps.emit(w.x, w.y, { vx: rand(-80, 80) * scale, vy: rand(-80, 80) * scale, life: 0.6, size: rand(8, 14) * scale, color: [0.9, 1, 0.95], endColor: [0.1, 0.5, 0.35] });
      }
    },
  },

  // Akaza's Destructive Death – Final Form (built-in move only): snowflake floor + four delayed
  // copies in a V; animation runs in CutoutStage.update (see clones.js)
  akaza: {
    duration: 6.5,
    color: '#9ff6ff',
    bannerImg: '/effects/title-ice.png',
    exclusive: true, // don't restart while it's already playing
    start({ stages, lm, W, H, flash, shake }) { flash('#9ff6ff'); shake(); stages.akaza.start(lm, W, H); },
    tick() {},
  },

  // Strength in Numbers (built-in move only): Warriors crest floor + two mirrored Steph Curry jump
  // shots whose balls meet above the person; animation runs in CutoutStage.update (see clones.js)
  warriors: {
    duration: 6.5,
    color: '#ffc72c',
    title: 'STRENGTH IN NUMBERS',
    bannerClass: 'hold gold',
    exclusive: true,
    start({ stages, lm, W, H, flash, shake }) { flash('#ffc72c'); shake(); stages.warriors.start(lm, W, H); },
    tick() {},
  },
};

export const EFFECT_NAMES = Object.keys(EFFECTS).filter((k) => k !== 'jump');

// ---------- manager ----------
export class Effects {
  constructor(canvas, stageEl, flashEl, bannerEl) {
    this.stage = stageEl; this.flashEl = flashEl; this.bannerEl = bannerEl;
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, premultipliedAlpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    this.renderer.setClearColor(0x000000, 0);
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(0, 1, 0, 1, -10, 10); // y down, pixel units
    this.ps = new Particles(this.scene);
    this.ps.points.renderOrder = 10; // particles above the clone layer
    this.stages = Object.fromEntries(Object.entries(THEMES).map(([k, th]) => [k, new CutoutStage(this.scene, this.renderer, th)]));
    this.active = [];
    this.resize();
    new ResizeObserver(() => this.resize()).observe(stageEl);
  }

  resize() {
    const r = this.stage.getBoundingClientRect();
    this.W = r.width; this.H = r.height;
    this.renderer.setSize(this.W, this.H, false);
    Object.assign(this.camera, { left: 0, right: this.W, top: 0, bottom: this.H });
    this.camera.updateProjectionMatrix();
  }

  flash(color) {
    const el = this.flashEl;
    el.style.transition = 'none';
    el.style.background = `radial-gradient(circle, ${color}cc, ${color}33 70%)`;
    el.style.opacity = '0.85';
    requestAnimationFrame(() => { el.style.transition = 'opacity 0.45s ease-out'; el.style.opacity = '0'; });
  }

  shake() {
    this.stage.classList.remove('shake');
    void this.stage.offsetWidth;
    this.stage.classList.add('shake');
  }

  banner(text, color, img, cls = '') {
    const el = this.bannerEl;
    el.className = 'banner' + (cls ? ' ' + cls : '');
    if (img) {
      const im = new Image();
      im.src = img;
      im.alt = text;
      el.replaceChildren(im);
    } else {
      el.textContent = text;
    }
    el.classList.toggle('img', !!img);
    el.style.color = color;
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
  }

  /** @param lm landmarks already in stage pixel coords [{x,y}] */
  trigger(effectName, lm, label) {
    const def = EFFECTS[effectName];
    if (!def || !lm) return;
    if (def.exclusive && this.active.some((a) => a.def === def)) return;
    const inst = Object.create(def);
    const ctx = this._ctx(lm);
    inst.start(ctx);
    this.active.push({ inst, def, t: 0 });
    if (label || def.bannerImg || def.title) this.banner(def.title ?? label, def.color, def.bannerImg, def.bannerClass);
  }

  _ctx(lm) {
    return {
      ps: this.ps, lm, W: this.W, H: this.H, scale: this.H / 720,
      flash: (c) => this.flash(c), shake: () => this.shake(), stages: this.stages,
    };
  }

  /** Per detected video frame: hands the segmentation mask to the clone layer while it runs. */
  setFrame(video, mask, lm) {
    for (const st of Object.values(this.stages)) if (st.wantsMask) st.capture(video, mask, lm, this.W, this.H);
  }

  update(dt, lm) {
    for (const st of Object.values(this.stages)) st.update(dt, this.W, this.H, this.ps, this.H / 720);
    const ctx = lm ? this._ctx(lm) : null;
    for (const a of this.active) {
      a.t += dt;
      if (ctx) a.inst.tick(ctx, a.t, dt);
    }
    this.active = this.active.filter((a) => a.t < a.inst.duration);
    this.ps.update(dt);
    this.renderer.render(this.scene, this.camera);
  }
}
