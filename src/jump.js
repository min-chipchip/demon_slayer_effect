/**
 * Jump detection without ML: compares the hip (and ankle, when visible) height
 * to a slowly adapting standing baseline, measured in torso lengths.
 */
export class JumpDetector {
  constructor({ rise = 0.22, land = 0.08, ankleRise = 0.12, cooldownMs = 450 } = {}) {
    Object.assign(this, { rise, land, ankleRise, cooldownMs });
    this.reset();
  }
  reset() { this.hipBase = null; this.ankleBase = null; this.air = false; this.last = 0; this.lift = 0; }

  /** @returns {boolean} true on the frame a jump starts */
  update(lm, hipY, torso, tMs) {
    const ankVis = Math.min(lm[27].v, lm[28].v) > 0.5;
    const ankY = (lm[27].y + lm[28].y) / 2;
    if (this.hipBase === null) { this.hipBase = hipY; this.ankleBase = ankY; return false; }

    const lift = (this.hipBase - hipY) / torso;
    const ankLift = (this.ankleBase - ankY) / torso;
    this.lift = lift;

    if (!this.air) {
      // Adapt the baseline only while standing still-ish (not during squats or lifts)
      if (Math.abs(lift) < 0.15) {
        this.hipBase += (hipY - this.hipBase) * 0.03;
        if (ankVis) this.ankleBase += (ankY - this.ankleBase) * 0.03;
      }
      const feetOk = !ankVis || ankLift > this.ankleRise;
      if (lift > this.rise && feetOk && tMs - this.last > this.cooldownMs) {
        this.air = true;
        this.last = tMs;
        return true;
      }
    } else if (lift < this.land) {
      this.air = false;
    }
    return false;
  }
}
