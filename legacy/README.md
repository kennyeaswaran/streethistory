# legacy/ — the hand-authored data, frozen

`streets-data-2026-08.js` is the map data (then `streets-data.js` at the root,
now `generated/streets-data.js`) as it stood on 2026-08-23: 107
streets, 140 entries, all hand-authored under the segment model of the
retired ADDING-STREETS.md. On **2026-09-19 the generator took over**:
`generated/streets-data.js` is now written by `tools/generate.js` from
`data/names.js` + `documents/`, and this file is the last state of the data it
replaced. (The two differ only by the vocabulary move to `data/site-config.js`
and one category rename; git history has every step between.)

It is kept for one purpose: **the subsumption gate.** `node tools/check-legacy.js`
checks that every entry in here is either reproduced by the generated
output — its ground covered, its names, namesake, dates and sources carried
— or explicitly accepted as a difference in `accepted-differences.js`, each
acceptance with a reason. The gate was green (0 unaccepted, 54 accepts) at
the switchover, and stays useful: an entity edit that loses a namesake, or a
sheet re-key that loses a stretch, trips it. `tools/diff-street.js <street>` is the
field-by-field comparison for one street.

**This folder is temporary (Kenny, 2026-09-20).** Its job is to catch
accidents in the period right after the switchover, while the generated map
still ought to say everything the hand-made one did. As the corpus grows, a
failure is increasingly likely to mean the project has deliberately moved on:
a stretch re-read, a namesake revised, a name moved to another street. So
**when `check-legacy.js` fails, first ask whether the difference was
intended.** If it was an accident, fix it. If it was intended, the default is
not to add another accept. Consider retiring the check instead: delete
`legacy/` (this file, `streets-data-2026-08.js`, `accepted-differences.js`)
together with `tools/check-legacy.js` and `tools/diff-street.js`, which
exist only to compare against it, and drop their mentions from CLAUDE.md,
tools/README.md and ROADMAP.md §11. The deploy never ran it, so nothing
else changes.

Nothing loads this file. `index.html`, `tools/check-data.js`, `tools/coverage-report.js`
and `tools/intersect.js` all read the generated `generated/streets-data.js` in the project
root.

Not snapshotted, and why:
- `data/streets-geometry.js` — regenerable from OSM via the map's "Save geometry
  file" button; not hand-authored content.
- `tracts/transcriptions/`, `omnibus-*.md` — not superseded. These are the
  source documents the new model reads from; they stay where they are.
- the old `index.html` — deleted at the switchover, not parked (decision
  2026-09-15: it could not render `{px}` extents and Pages would have
  published it anyway). Git history is the archive.
