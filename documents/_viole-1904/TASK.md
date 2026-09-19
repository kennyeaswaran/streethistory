# Violé 1904 — parked, and what it needs to go live

**Parked (`_` prefix) on 2026-09-19**: the folder is on disk and ignored by
`documents/index.js` until it has a valid `viole-1904.js`. Rename the folder to
`viole-1904` at the same moment that file lands — not before, or every build
prints a warning.

## What is here

- `photos/` — 17 phone photos of a laminated original, **both sides**. 9 show the
  verso INDEX TO STREETS, 8 show the map face. Rotations differ per photo; see
  NOTES.md §1. `11.26.23` captures the whole index in one frame and is the
  fallback whenever a close-up is obscured.
- `index.tsv` — **1,089 entries**, `name · grid · source_photo · confidence`.
  1,004 certain, 76 probable, 9 uncertain. Transcribed 2026-09-19.
- `NOTES.md` — photo triage, structural notes, the illegible list, and a
  corpus comparison (200 entries match existing entities; **889 do not appear in
  the corpus in any form**).

## The map

*Map of Los Angeles, compiled & drawn by Félix Violé, Licensed Surveyor, for the
Chamber of Commerce.* Copyright Félix Violé 1903; published 1904.
⭐ The title cartouche carries a certification: *"I hereby certify that this map
has been carefully compiled from the records of the City Engineer's Office. Los
Angeles, December 22nd 1903 — Stafford, City Engineer."* That lifts it above a
commercial street map: it is the City Engineer's own record, at one date.
Advertiser: Los Angeles Abstract and Trust Co., 110 S. Broadway. A bank
advertisement on the face promises removal from 162 N. Spring "after March 1,
1904", fixing the printing to before that date.

## To promote it

1. ⭐ **Georeference the grid.** The index is useless as geometry until the
   letter/number grid (letters I–R along the bottom, numbers 15–23 down the
   right on the photographed corner) maps to coordinates. One affine fit from a
   handful of known intersections should do it — then **every one of the 1,089
   entries becomes a placeable `state` row at a known date**, which is the whole
   value of this sheet.
2. Write `viole-1904.js`. It is a **map** attesting names at Dec 1903 / 1904.
   Model the shape on an existing map document, not on `newmark-1916`.
3. ⚠ **Scope limit to record in the .js**: the index covers streets **inside the
   1903 city limits**. Absence from it is evidence only for ground inside those
   limits — several of the virtue-name streets (Faith, Joy, Bethel, Beulah) sit
   south of the old city boundary on the map face and are not indexed.
4. ⚠ **Two entries could not be read in any photo** — `Park A.` and `Park Iw`,
   both L 8, recorded as *Park Ave.* / *Park Row*, `uncertain`. A crease and ink
   abrasion runs through the top ~45 rows of column 6 (the P–R names). Raking
   light on the physical sheet, or a re-shoot of that one spot, closes it.
5. ⚠ `Fresno St.` — one photo reads `R 15`, another `E 15`. Recorded `E 15`,
   uncertain.

## What it already settled (see NOTES.md and handbook/research-leads.md)

- **Lemon St. and Wilson St. are BOTH present, both L 17** — refuting this
  project's reading that Lemon became Wilson in 1887.
- **Mill Street absent** — so the `mill-st-arts-district` reading stands.
- **Charity absent** — Ord. 286 took the whole length to Grand Avenue.
- **Alabama absent**; **Georgia St. present (G 15), Georgia Bell absent**.
- One Everett, one St. Paul (Avenue only), one Ida, and the sheet prints
  **Stephenson** Ave. with a *ph*.
