# Placing mr006-193 — Kennedy Tract

Worked out 2026-09-17 from the sheet plus assessor parcels citing `M R 6-193`.

## The sheet

"Map of the Kennedy Tract, Los Angeles, Cal. Surveyed May 1884 by E. T. Wright.
Scale 60 ft per inch." Lots 1–23.

**⚠ The scan is NOT at 60 ft/inch.** The recorder's note reads: "A full, true
and correct copy of the original **reduced to the scale of 100 feet per inch**",
recorded Jan. 14th 1885 at 59 min past 2 PM at the request of E. W. Jones,
Chas. E. Miles Co Recorder. Use 100 ft to the inch.

## Where it goes

| | |
|---|---|
| Footprint | lat **34.0485 – 34.0501**, lon **−118.26956 – −118.26725** |
| Size | about **213 × 178 m** (31 parcels still cite this map) |
| Scale at 100 dpi | 100 ft to the inch → **0.305 m/px** nominal |
| Up-page bearing | **≈ 28.5°** (Garland Avenue measures 28.47° on this ground) |

## Street correspondences

| On the sheet (1884) | Today | Evidence |
|---|---|---|
| **Lincoln Place** (north edge) | **West 8th Street** | even lots 2–16 are 1202–1238 W 8th St |
| **Ninth Street** (south edge) | **James M Wood Boulevard** | odd lots 1–7 are 1301–1315 James M Wood Blvd |
| **Holmes St** (the internal N–S street) | **Garland Avenue** | lots 20, 21, 23 are 806–810 Garland Ave, and Garland crosses at about −118.2678, exactly between lot 16 and lot 20 |
| **Bryan St** (west edge) | *gone as a name* — the footprint's west edge is where **Blaine Street** (south of 8th) and **Witmer Street** (north of 8th) run today | positional |

Lincoln Place, Holmes and Bryan are all absent from streets-geometry.js, so this
one sheet carries three lost names.

## Watch out

- **The name "Kennedy Tract" is reused.** The assessor's legal search returns a
  second Kennedy Tract at W 20th St / Orchard Ave / Ellendale Place in
  University Park. Filter by coordinates before trusting any parcel list.
- A **ZANJA** is drawn crossing the block diagonally, entering near Bryan St and
  leaving near Holmes — worth its own row once the sheet is read in.

## The alignment.json in this folder is a SEED (written 2026-09-17)

It exists so the sheet opens in the map tool already at roughly the right place,
scale and angle — **it has not been verified against the scan and is not a
finished alignment.**

What is solid and should not need touching:

- **Scale — 0.3048 m/px at 100 dpi**, from the sheet's own printed scale (read
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

To check it, lot 2 (1238 W 8th St) lands at about px (255, 767); lot 7 (1301 James M Wood Blvd) at (412, 939); lot 21 (806 Garland Ave) at (778, 768). If those fall on the lots the assessor names, the
placement is right; if they are displaced but the displacement is the same for
both, drag by that offset and nothing else needs changing.

### Update, later on 2026-09-17 — the seed now lives in `mr006-193.js`

A standalone `mr006-193-alignment.json` is **never read by the map tool**. The tool
restores an alignment only in its `loadDoc` handler, which fetches
`documents/<id>/<id>.js` and reads `doc.alignment`; a folder with no `<id>.js`
takes an earlier branch in `openDocument()` that just loads the render and
switches to align mode. So the seed has been written into a minimal `mr006-193.js`
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
