# Placing mr005-405 — Truman Tract

Worked out 2026-09-17 from the sheet's own title block plus assessor parcels
whose legal descriptions cite `M R 5-405` (so no street identification is
assumed — see TRACT-RESEARCH.md, "The same endpoint as assumption-free ground
truth for an ALIGNMENT").

## The sheet

"Plan of the Truman Tract of Los Angeles City. Surveyed 18 June 1883 by
Geo. Butler Griffin C.E. Re-arranged 11th January 1884 by W. R. Blackman.
**Scale 1/600. Mag. Courses.**" Recorded 12 January 1884 at the request of
E. Bouton. Lots 1–22.

## Where it goes

| | |
|---|---|
| Footprint | lat **34.0481 – 34.0493**, lon **−118.26771 – −118.26682** |
| Size | about **82 × 135 m** (10 parcels still cite this map) |
| Scale at 100 dpi | 1/600 = 50 ft to the inch → **0.152 m/px** nominal |
| Up-page bearing | **≈ 28.5°** — see the warning below |

**⚠ Do not set the rotation from the sheet's own figures.** The courses are
lettered "Mag. Courses" and give Jones/Willow/Mallard as **N 14°15′ E**. The
modern grid on this ground runs **28.5°** (Garland Avenue measures 28.47°,
Sunbury Street 28.78°), so the sheet's implied magnetic declination is about
14¼° east — which is right for Los Angeles in 1884, and is confirmed
independently by the Fourth Street Bridge Tract of 1903 stating "Variation
14°30′ East". Set up-page to ~28.5°, not 14°.

## Street correspondences

| On the sheet (1884) | Today | Evidence |
|---|---|---|
| **Ninth Street** (south edge) | **James M Wood Boulevard** | lots 1, 2, 3, 6 are 1111–1121 James M Wood Blvd |
| **Willow Street** (middle, 60 ft) | **Golden Avenue** | lot 8 is 841 Golden Ave, and Golden runs through the footprint |
| **Jones Street** (west edge) | *gone as a name* — the footprint's west edge sits where **Sunbury Street** now runs | positional only; Sunbury has just two nodes in this band, so treat as likely, not settled |
| **Mallard** (east edge) | *no modern counterpart* | "Mallard" appears nowhere in streets-geometry.js; the ground east of Golden runs into the Harbor Freeway approach |

`Ninth Street → James M Wood Boulevard` also agrees with `documents/mr003-569`
(Nichols Addition), which letters James M Wood Blvd as NINTH ST.

## Also on the sheet

- A **Ditch** along the north-east boundary, with bearings N 72° E 162 and
  N 85°45′ E 67.60.
- The adjoining owners are lettered on the north line: **H. C. Sigler** and
  **Nichols** — the latter is the Nichols Addition, `documents/mr003-569`,
  which adjoins this tract. Worth reading the two together.

## The alignment.json in this folder is a SEED (written 2026-09-17)

It exists so the sheet opens in the map tool already at roughly the right place,
scale and angle — **it has not been verified against the scan and is not a
finished alignment.**

What is solid and should not need touching:

- **Scale — 0.1524 m/px at 100 dpi**, from the sheet's own printed scale (read
  the warning above about which printed scale actually applies). Expect the true
  figure to sit 1–5% higher: every DPW scan checked so far is very slightly
  enlarged against its nominal scale.
- **Rotation — up-page 28.5°**, from the sheet's own courses cross-checked
  against the modern street bearings on this ground.

What is only approximate:

- **Position.** The seed simply puts the **centre of the scanned page** on the
  **centre of the tract's recorded footprint**. It makes no attempt to find
  where the drawing sits within the page, so the sheet will be off by however
  far the drawing is from the page centre — normally tens of metres, one drag.

To check it, lot 6 (1111 James M Wood Blvd) lands at about px (862, 1018); lot 8 (841 Golden Ave) at about (534, 773). If those fall on the lots the assessor names, the
placement is right; if they are displaced but the displacement is the same for
both, drag by that offset and nothing else needs changing.

### Update, later on 2026-09-17 — the seed now lives in `mr005-405.js`

A standalone `mr005-405-alignment.json` is **never read by the map tool**. The tool
restores an alignment only in its `loadDoc` handler, which fetches
`documents/<id>/<id>.js` and reads `doc.alignment`; a folder with no `<id>.js`
takes an earlier branch in `openDocument()` that just loads the render and
switches to align mode. So the seed has been written into a minimal `mr005-405.js`
as well, and the sheet now opens already placed.

Two consequences:

- The folder still sits under **"Needs aligning and coverage"**, because
  `<id>-streets.json` and `TASK.md` are still missing — which is where it
  belongs.
- The **coverage ring is provisional**, not a human trace. `check-model.js`
  rejects a document with fewer than three coverage points, so the ring was
  filled with the tract's recorded footprint projected into scan pixels through
  the seed alignment. Re-trace it once the placement is confirmed: coverage is
  stored in scan pixels, so dragging the sheet carries the ring with it and it
  will not fix itself.
