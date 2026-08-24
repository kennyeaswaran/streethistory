# legacy/ — frozen snapshots of the hand-authored data

`streets-data-2026-08.js` is a copy of `streets-data.js` as it stood on
2026-08-23: 107 streets, 140 entries, all hand-authored under the segment
model described in ADDING-STREETS.md.

It is kept for one purpose: **to diff against generated output** while the
name/document/generator model is built (see the spec doc). The generator's
acceptance test is that it reproduces the segmentation and name timelines in
here — starting with 3rd Street, the exemplar.

Nothing loads this file. `index.html`, `check-data.js`, `coverage-report.js`
and `intersect.js` all continue to read the live `streets-data.js` in the
project root, which stays hand-edited until the generator replaces it.

Not snapshotted, and why:
- `streets-geometry.js` — regenerable from OSM via the map's "Save geometry
  file" button; not hand-authored content.
- `tracts/transcriptions/`, `omnibus-*.md` — not superseded. These are the
  source documents the new model reads from; they stay where they are.
- the docs — ADDING-STREETS.md and friends describe the current working
  process and get revised in place, only once the generator takes over.
