# Anime Move Effects

**Live demo: https://min-chipchip.github.io/demon_slayer_effect/** (allow camera access, then step back until your whole body is in frame)

Webcam toy that watches your body and fires anime-style visual effects when you do a move it knows. It comes with two signature moves already trained, and you can teach it your own: record a move a few times, pick an effect, and from then on doing that move sets off flame, water, thunder or wind on top of the live video. Jumping triggers its own effect.

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

## Built-in moves

Two moves are always present. They come pre-trained with recorded footage, so they work straight away for anyone who opens the app.

| Move | Effect |
| ---- | ------ |
| **Akaza's Destructive Death – Final Form: Blue Silver Chaotic Afterglow** | Ice-blue flash, spinning snowflake floor, red backdrop and four delayed, red-tinted copies of you fanned out in a V, with a title banner |
| **Strength in Numbers** | Gold flash, Warriors crest on the floor, gold backdrop and two mirrored Steph Curry jump shots, with a "STRENGTH IN NUMBERS" banner |

You can't rename or delete them or change their effect, but you can edit their footage with **Record footage**, **Undo last** and **Clear**.

## Teaching it a move

1. Type a name (e.g. "Rising Slash"), pick an effect (Flame, Water, Thunder or Wind) and a length (1.0–2.5 s).
2. Click **Record template**. After a 3-second countdown, perform the move.
3. Repeat 3–5 times under the same name. More clips make matching more reliable.
4. Click **Record idle / random movement** and move around normally for 6 seconds. This teaches the matcher what *not* to fire on.
5. Do the move. When it matches, the effect plays and the move's name flashes on screen.

Other controls:

- **Sensitivity**: scales every move's match threshold. Raise it if moves don't fire, lower it if they fire by accident.
- **Match either side**: also matches the mirror image of a move, so a left-handed version counts.
- **Skeleton**: toggles the pose overlay.
- **Test FX**: plays every effect in turn so you can preview them without moving.
- **Export / Import JSON**: save your moves to a file, or load them in another browser.

## Effects

| Effect   | Look                                                                    |
| -------- | ----------------------------------------------------------------------- |
| Flame    | Orange flash, screen shake, fire rising from both hands                 |
| Water    | Blue flash, water spiralling around the body                            |
| Thunder  | Flash, shake, lightning bolts striking your hands and chest             |
| Wind     | Green flash, gusts streaking across the body in the direction you push  |
| Akaza    | Built-in move only (see above)                                          |
| Warriors | Built-in move only (see above)                                          |
| Jump     | Burst of dust at your feet; fires whenever you jump, no recording needed |

## Saved moves and the bundled defaults

Moves and idle clips are saved in the browser's `localStorage`, so each visitor's recordings stay in their own browser.

Anyone with nothing saved yet (a first-time visitor, or a private window) gets the moves bundled in [src/default-moves.json](src/default-moves.json). That file is what ships the pre-trained footage for the built-in moves, plus some idle clips.

To update the bundled moves after retraining:

1. In the browser where you trained, click **Export JSON**. This downloads `anime-moves.json`.
2. Replace the contents of `src/default-moves.json` with that file.
3. Rebuild (`npm run build`) and redeploy.

Your own browser keeps using its saved copy, so open a private window to see what new visitors get.

Matching works best for the person who recorded the footage. Other people may need to raise **Sensitivity**.

## How it works

```
webcam ─▶ MediaPipe Pose ─▶ One Euro smoothing ─▶ normalize ─▶ DTW matcher ─▶ effects (three.js)
                    └─ segmentation mask ──────────────────────────────────────▶ cutout copies
```

- **Pose** ([src/pose.js](src/pose.js)): MediaPipe `PoseLandmarker` (lite model, GPU with CPU fallback) gives 33 landmarks and a person mask per frame. A One Euro filter smooths jitter without lagging fast motion.
- **Normalize** ([src/normalize.js](src/normalize.js)): 13 joints are centred on the hips and scaled by torso length, so it doesn't matter where you stand or how far from the camera you are.
- **Match** ([src/matcher.js](src/matcher.js)): the last N ms of live frames are resampled to 32 steps and compared to each template with dynamic time warping. Each move gets its own threshold, calibrated from how alike its templates are and kept below the closest match found in your idle clips. A move needs two consecutive hits and has a 1.5 s cooldown.
- **Jump** ([src/jump.js](src/jump.js)): no ML. Compares hip (and ankle) height to a slowly adapting standing baseline.
- **Effects** ([src/effects.js](src/effects.js), [src/clones.js](src/clones.js)): a pooled GPU particle system with additive blending, plus screen flash, shake and a name banner. The built-in moves composite the video through the segmentation mask to draw delayed copies of you (Akaza) or image cutouts (Warriors) over a spinning floor emblem.
- **Storage** ([src/store.js](src/store.js)): built-in move definitions, `localStorage` persistence, bundled defaults and JSON export/import.

## Design choices

- **Template matching instead of a trained classifier.** A classifier would need hundreds of labelled examples per move and a training step. DTW over normalized poses works from 3–5 recordings made in the browser. That's what makes "teach it your own move" possible, and DTW copes with doing the move faster or slower than you recorded it.
- **Pose landmarks, not raw pixels.** Matching on 13 normalized joints ignores clothing, lighting and background, and keeps a whole clip to under a thousand numbers (13 joints × 2 coordinates × 32 steps). That is cheap enough to run against every template on every frame.
- **Idle clips set the threshold.** A fixed threshold either misses the move or fires on random movement. Each move's threshold comes from how consistent its own templates are, and is then capped just below the closest match found in normal movement. Two consecutive hits and a cooldown stop it from flickering.
- **Everything runs on the device.** Inference runs in WebAssembly/WebGL in the browser, so no video leaves the machine, and the app can be hosted as static files with no backend.
- **Segmentation mask for the Akaza effect.** The anime's afterimages are copies of the character himself, so the effect cuts *you* out of the video with MediaPipe's person mask and replays delayed copies of you, instead of drawing generic particles.

## Limitations and next steps

- Matching is tuned to whoever recorded the templates. Other body types and camera angles may need a higher **Sensitivity** or their own recordings.
- It needs the full body in frame and decent lighting. Close-up laptop webcams struggle.
- Only one person is tracked.
- The JS bundle is about 1 MB because three.js and MediaPipe are bundled in. Loading three.js lazily, on the first effect, would speed up the first load.
- Ideas: pose-independent features such as joint angles to match people of different builds better, sound effects, and recording a clip of the effect to share.

## Project layout

```
index.html              UI shell
src/main.js             camera setup, frame loop, recording, UI wiring
src/pose.js             MediaPipe setup + landmark smoothing
src/normalize.js        pose features + mirroring
src/matcher.js          resampling, DTW, threshold calibration
src/jump.js             jump detector
src/effects.js          particle system and effect definitions
src/clones.js           cutout effects for the built-in moves
src/store.js            built-in moves, persistence, defaults
src/default-moves.json  pre-trained moves bundled into the build
public/effects/         textures and images (snowflake, title banner, Warriors crest, Curry cutout)
```

## Build and deploy

```bash
npm run build
```

Output goes to `dist/`, which is the only folder you need to host. Serve it over HTTPS (or `localhost`), because browsers only allow camera access in a secure context. `npm run preview` serves the build locally.

The live site is on GitHub Pages. [.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds and deploys it on every push to `main`. [vite.config.js](vite.config.js) sets a relative `base` and the effect images are referenced through `import.meta.env.BASE_URL`, so the same build works under the `/demon_slayer_effect/` subpath or at a domain root.

## Tips

- Light the room well and keep your full body, including feet, in frame.
- Record templates at roughly the speed you'll actually perform the move.
- If random movement keeps setting off a move, record more idle clips. The threshold recalibrates automatically.
