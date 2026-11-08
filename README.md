# Anime Move Effects

Webcam toy that watches your body and fires anime-style visual effects when you do a move you've taught it. You record a move a few times, pick an effect, and from then on doing that move sets off flame, water, thunder, wind or ice-clone effects on top of the live video. Jumping triggers its own effect.

Everything runs in the browser. No video leaves your machine.

## Quick start

Requires Node.js 18+ and a webcam.

```bash
npm install
```

```bash
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173), click **Start camera**, and step back until your whole body is in frame.

The first load downloads the MediaPipe WASM runtime and pose model from public CDNs, so you need an internet connection the first time.

## Teaching it a move

1. Type a name (e.g. "Rising Slash"), pick an effect and a length (1.0–2.5 s).
2. Click **Record template**. After a 3-second countdown, perform the move.
3. Repeat 3–5 times under the same name. More clips make matching more reliable.
4. Click **Record idle / random movement** and move around normally for 6 seconds. This teaches the matcher what *not* to fire on.
5. Do the move. When it matches, the effect plays and the move's name flashes on screen.

Other controls:

- **Sensitivity**: scales every move's match threshold. Raise it if moves don't fire, lower it if they fire by accident.
- **Match either side**: also matches the mirror image of a move, so a left-handed version counts.
- **Skeleton**: toggles the pose overlay.
- **Test FX**: plays every effect so you can preview them without moving.
- **Export / Import JSON**: templates are saved in `localStorage`. Export them to keep a copy or move them to another browser.

## Effects

| Effect  | Look                                                                 |
| ------- | -------------------------------------------------------------------- |
| Flame   | Orange flash, screen shake, fire rising from both hands              |
| Water   | Blue flash, water spiralling around the body                         |
| Thunder | Flash, shake, lightning bolts striking your hands and chest          |
| Wind    | Green flash, gusts streaking across the body in the direction you push |
| Ice     | Snowflake floor plus four delayed, tinted copies of you cut out of the video |
| Jump    | Burst of dust at your feet; fires whenever you jump, no recording needed |

## How it works

```
webcam ─▶ MediaPipe Pose ─▶ One Euro smoothing ─▶ normalize ─▶ DTW matcher ─▶ effects (three.js)
                    └─ segmentation mask ──────────────────────────────────────▶ ice clones
```

- **Pose** ([src/pose.js](src/pose.js)): MediaPipe `PoseLandmarker` (lite model, GPU with CPU fallback) gives 33 landmarks and a person mask per frame. A One Euro filter smooths jitter without lagging fast motion.
- **Normalize** ([src/normalize.js](src/normalize.js)): 13 joints are centred on the hips and scaled by torso length, so it doesn't matter where you stand or how far from the camera you are.
- **Match** ([src/matcher.js](src/matcher.js)): the last N ms of live frames are resampled to 32 steps and compared to each template with dynamic time warping. Each move gets its own threshold, calibrated from how alike its templates are and kept below the closest match found in your idle clips. A move needs two consecutive hits and has a 1.5 s cooldown.
- **Jump** ([src/jump.js](src/jump.js)): no ML. Compares hip (and ankle) height to a slowly adapting standing baseline.
- **Effects** ([src/effects.js](src/effects.js), [src/clones.js](src/clones.js)): a pooled GPU particle system with additive blending, plus screen flash, shake and a name banner. Ice clones composite the video through the segmentation mask and replay past frames as delayed copies.
- **Storage** ([src/store.js](src/store.js)): templates and idle clips in `localStorage`, with JSON export/import.

## Project layout

```
index.html          UI shell
src/main.js         camera setup, frame loop, recording, UI wiring
src/pose.js         MediaPipe setup + landmark smoothing
src/normalize.js    pose features + mirroring
src/matcher.js      resampling, DTW, threshold calibration
src/jump.js         jump detector
src/effects.js      particle system and effect definitions
src/clones.js       ice-clone cutout effect
src/store.js        persistence
public/effects/     static textures (snowflake)
```

## Build

```bash
npm run build
```

Output goes to `dist/`. Serve it over HTTPS (or `localhost`), because browsers only allow camera access in a secure context. `npm run preview` serves the build locally.

## Tips

- Light the room well and keep your full body, including feet, in frame.
- Record templates at roughly the speed you'll actually perform the move.
- If random movement keeps setting off a move, record more idle clips. The threshold recalibrates automatically.
