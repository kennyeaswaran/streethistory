# Placing tr0024-055 — Tract No. 2473

Worked out 2026-09-17 from the sheet plus assessor parcels citing `M B 24-55`
and the County's own recorded footprint (layer 8, `REFERENCE='TR0024-055'`).

## The sheet

"TRACT NO. 2473 — Being a subdivision of portions of Blocks 2 & 3 and portions
of Lots 2-3 & 4 Blk. L, **Colina Park** as recorded in Book 7 page 37
Miscellaneous Records … and a portion of Lot 6 of the Resubdivision of
**Mitchell's Sub of Block P, Colina Park** as recorded in Book 39 page 66 …
Also a portion of **Colina Avenue as vacated by Ordinance No. 7571 N.S.** and
portions of **Gravillia St as vacated by Ordinance No. 7570 N.S. and
No. 13130 N.S.**" Daniel S. Halladay C.E. — Scale 1″ = 50′. Recorded Dec. 16,
1913. Owners: William M. Humphreys, Amelia M. Humphreys.

The sheet is marked **"Sht. 3"**, so there are almost certainly companion
sheets — check `M B 24-53` and `M B 24-54`.

## Where it goes

| | |
|---|---|
| Footprint | lat **34.05913 – 34.06114**, lon **−118.26837 – −118.26692** |
| Size | about **134 × 222 m** |
| Scale at 100 dpi | 1″ = 50′ → **0.152 m/px** nominal |
| Up-page bearing | **≈ 28.4°** |

The rotation can be taken from the sheet directly: it letters **N 28°24′45″ E**
along its long axis and **N 61°35′15″ W** across, and it cites city centre-line
field books throughout, so these are true courses, not magnetic. That agrees
with West 3rd Street measuring 296.6° on this ground (= 26.6° + 270°).

**Recorded corner coordinates** (County footprint, lat/lon):

    34.05977, -118.26692      34.05913, -118.26729
    34.06042, -118.26724      34.06114, -118.26729
    34.06005, -118.26837      34.05964, -118.26788

## Street correspondences

| On the sheet (1913) | Today | Evidence |
|---|---|---|
| **UNION AVE** (west edge) | **South Union Avenue** | keeps the name |
| north edge | **West 3rd Street** | lots 2, 3, 5 are 1631–1660 W 3rd St |
| **ACACIA ST** (south edge) | **West 4th Street** | lots 10, 11, 12 are 1629–1643 W 4th St |
| — | **Union Place** runs through the tract | lot 1 is 283 Union Pl |
| **COLINA AVENUE** | *vacated by Ordinance 7571 N.S.* | stated on the sheet |
| **GRAVILLIA STREET** | *vacated by Ordinances 7570 N.S. and 13130 N.S.* | stated on the sheet |

Colina, Gravillia and Acacia are all absent from streets-geometry.js. The two
vacations come with ordinance numbers on the face of the plat, which is about as
good as a vanished-street citation gets.

## Cross-references the sheet makes

- **J. W. Ellis Sub of a part of Lot 3, Block 38, Hancock's Survey — M.R. 10-62**
  (on the 2026-09-17 shopping list, Tier 1)
- **Colina Park — M.R. 7-37** (also Tier 1)
- **Resubdivision of part of Block 1, Colina Park — M.R. 16-52**
- **Oscar B. Smith's Crown Hill Tract — M.B. 8-169**

Reading those together is the way into the Crown Hill grey.

## The alignment.json in this folder is a SEED (written 2026-09-17)

It exists so the sheet opens in the map tool already at roughly the right place,
scale and angle — **it has not been verified against the scan and is not a
finished alignment.**

What is solid and should not need touching:

- **Scale — 0.1524 m/px at 100 dpi**, from the sheet's own printed scale (read
  the warning above about which printed scale actually applies). Expect the true
  figure to sit 1–5% higher: every DPW scan checked so far is very slightly
  enlarged against its nominal scale.
- **Rotation — up-page 28.4°**, from the sheet's own courses cross-checked
  against the modern street bearings on this ground.

What is only approximate:

- **Position.** The seed simply puts the **centre of the scanned page** on the
  **centre of the tract's recorded footprint**. It makes no attempt to find
  where the drawing sits within the page, so the sheet will be off by however
  far the drawing is from the page centre — normally tens of metres, one drag.

To check it, lot 1 (283 Union Pl) lands at about px (628, 432); lot 11 (1635 W 4th St) at (582, 1365). If those fall on the lots the assessor names, the
placement is right; if they are displaced but the displacement is the same for
both, drag by that offset and nothing else needs changing.

### Update, later on 2026-09-17 — the seed now lives in `tr0024-055.js`

A standalone `tr0024-055-alignment.json` is **never read by the map tool**. The tool
restores an alignment only in its `loadDoc` handler, which fetches
`documents/<id>/<id>.js` and reads `doc.alignment`; a folder with no `<id>.js`
takes an earlier branch in `openDocument()` that just loads the render and
switches to align mode. So the seed has been written into a minimal `tr0024-055.js`
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
