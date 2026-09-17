# Placing tr0004-092b-p1 — Salt Lake Depot Tract No. 2

Worked out 2026-09-17 from the sheet, the County's recorded footprint
(`REFERENCE='TR0004-092B'`) and assessor parcels.

## The sheet

"Map of the SALT LAKE DEPOT TRACT No 2 … Being a re-subdivision of the following
Lots of the '**Fourth Street Bridge Tract**' as same is recorded in **Map Book 3,
Page 67**" — i.e. of `documents/tr0003-067`, and "Note: Lots are numbered the
same as in Fourth Street Bridge Tract." **True Courses, Dec. 9th 1903.
Scale 1″ = 100 ft.** Fremont Ackerman C.E. Recorded Dec. 16, 1903. Proprietors:
C. F. Schumacher (Vice Pres.), Geo. W. Lichtenberger (Secr'y).

Sheet 1 carries **blocks A and B** (the Pecan / Kolster strip between Third and
Fourth). Sheet 2 carries **blocks C, D, E, F and G** (Clarence, Gless and Pecan
between Third and Fifth) and notes the earlier **Salt Lake Depot Tract** at
Maps 3-75 along its north edge.

No reduction note on either page, so the stated scale stands.

## Where it goes

| | |
|---|---|
| Footprint (whole tract) | lat **34.04106 – 34.04528**, lon **−118.22450 – −118.22086** |
| Size | about **336 × 467 m** |
| Scale at 100 dpi | 1″ = 100 ft → **0.305 m/px** nominal |
| Up-page bearing | **≈ 352.9°** (see below) |

## ⚠ Both of these are outside the neighbourhood

The footprints run lon −118.2245 to −118.2208. The project's Overpass bbox has
its **eastern edge at −118.225**, so this ground is beyond it: there is no
modern geometry loaded here, and no row drawn on these sheets will find a
street to attach to until the bbox is widened. They are in Boyle Heights, east
of the river. Worth aligning anyway — see the Wilcox/Eagle note — but expect
the coverage report to show nothing.

## The Boyle Heights grid is NOT the downtown grid

**Up-page ≈ 352.9°** — about 7° *west* of north, where every downtown sheet has
been ~28° east of north. Three independent confirmations:

- both sheets letter the N–S streets as **N 7°04′ W** (= 352.93°);
- 305 → 363 South Clarence Street measures **352.88°** from assessor centroids;
- Salt Lake Depot No. 2 gives Boyle Avenue as **S 2°04′15″ E**, and Fourth
  Street Bridge Tract says "**True Courses, Variation 14°30′ East**" and takes
  all its bearings from Boyle Avenue at Fourth Street.

## Street correspondences — nearly all still there

| On the sheets (1903) | Today |
|---|---|
| Third St | **East 3rd Street** |
| Fourth St (80 ft wide) | **East 4th Street** |
| Fifth St (50 ft wide) | **East 5th Street** |
| Clarence St | **South Clarence Street** |
| Gless St | **South Gless Street** |
| Pecan St (60 ft wide) | **South Pecan Street** |
| Kolster St (50 ft wide) | **Kolster Street** |
| Boyle Ave | **South Boyle Avenue** |
| **WILCOX ST** | **Eagle Street** — "WILCOX ST. CHANGED TO EAGLE ST. — ORD. 26069", lettered on tr0003-067 |
| Bluff St | *gone* — the Santa Ana Freeway runs through here |
| Bodie (Pl?) | *vacated, Ord. 107,077* (noted on the Salt Lake sheet) |

Two more vacations are lettered on tr0003-067: "Por. Alley extending sly. from
Eagle St. vacated — Ord. 62024" and "Alley adj. lots 439 to 448 estab. as
**Pecan Terrace** — Ord. 73729".

## Lot-level anchors (assessor, lat/lon)

    lot 85   1625 E 4th St      34.043248, -118.221960
    lot 200  363 S Clarence St  34.043479, -118.224082
    lot 93   360 S Gless St     34.043481, -118.222511
    lot 53   314 S Pecan St     34.044820, -118.221571
    lot 401  1622 E 4th St      34.042664, -118.221941

Both sheets also dimension the same survey point — the intersection of the
centre lines of **Boyle Avenue and Fourth Street** — so that corner is the
natural thing to pin: "N 86°58′45″ E 343.52 to Center of Boyle Ave" along
Fourth, and "N 85°04′ E 317.95 to center of Boyle Ave" along Third.

## Its parent

`documents/tr0003-067` is the Fourth Street Bridge Tract this re-subdivides,
and it shares the lot numbering — so once either sheet is placed, the other can
be checked against it lot for lot.

## The alignment.json in this folder is a SEED (written 2026-09-17)

It exists so the sheet opens in the map tool already at roughly the right place,
scale and angle — **it has not been verified against the scan and is not a
finished alignment.**

What is solid and should not need touching:

- **Scale — 0.3048 m/px at 100 dpi**, from the sheet's own printed scale (read
  the warning above about which printed scale actually applies). Expect the true
  figure to sit 1–5% higher: every DPW scan checked so far is very slightly
  enlarged against its nominal scale.
- **Rotation — up-page 352.9°**, from the sheet's own courses cross-checked
  against the modern street bearings on this ground.

What is only approximate:

- **Position.** The seed simply puts the **centre of the scanned page** on the
  **centre of the tract's recorded footprint**. It makes no attempt to find
  where the drawing sits within the page, so the sheet will be off by however
  far the drawing is from the page centre — normally tens of metres, one drag.

To check it, lot 53 (314 S Pecan St) lands at about px (988, 368); lot 93 (360 S Gless St) at (646, 815). If those fall on the lots the assessor names, the
placement is right; if they are displaced but the displacement is the same for
both, drag by that offset and nothing else needs changing.

### Update, later on 2026-09-17 — the seed now lives in `tr0004-092b-p1.js`

A standalone `tr0004-092b-p1-alignment.json` is **never read by the map tool**. The tool
restores an alignment only in its `loadDoc` handler, which fetches
`documents/<id>/<id>.js` and reads `doc.alignment`; a folder with no `<id>.js`
takes an earlier branch in `openDocument()` that just loads the render and
switches to align mode. So the seed has been written into a minimal `tr0004-092b-p1.js`
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
