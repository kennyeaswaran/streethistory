# The generator, built: how it went live

**Status (2026-09-19): live.** `tools/generate.js` writes
`generated/streets-data.js`, `index.html` renders it, and the deploy gates on
`tools/check-data.js --require-generated`, `tools/check-model.js` and a
regeneration diff. MODEL-SPEC.md is the contract and describes everything
that was built; ROADMAP.md §11 is what the switchover left owed; the
switchover commit in git is the record of what changed.

*Trimmed 2026-09-20.* This file used to carry the build report (2026-08-24),
the pre-switchover to-do list and the full switchover checklist. What was
lasting has moved:

| what | now in |
|---|---|
| `shortTitle`, `copies`, `type: "news-report"`, OSM geometric extents, the East West Bank Plaza exclusion — the places the build went beyond the spec's letter | MODEL-SPEC §4, §4.1 |
| respelling rows (`from === to` plus `toForm`), canonical row-extent order | MODEL-SPEC §5, §5.4 |
| `planned`/`built` ignoring `osm` | MODEL-SPEC §6.4 |
| why `extension` and "presumably folded in" hedges were dropped (the 3rd Street acceptance test) | MODEL-SPEC §6.3 |
| a revived name resumes its entity (decided 2026-08-24, built 2026-09-17) | MODEL-SPEC §12 |
| way-keyed branches and the lateral-separation test; OSM refresh and coverage-polygon aftercare | ADDING-A-NEIGHBORHOOD.md |
| the subsumption check that replaced the street-by-street diff | `tools/check-legacy.js`, legacy/README.md |

**The acceptance test, in one paragraph.** On 2026-08-24, 3rd Street
generated and hand-made agreed on everything the model computes — seven
segments, same labels, extents, bands and name periods — and each of the 12
differing fields was accounted: two presumptions dropped (§6.3), `planned:
"1849"` for the Ord survey's `planned-on` row, the Miramar-caution notes moved
to rows on Miramar itself, a rail-yard note owed back as an annotation row
once it has a citation, and generated prose replacing bespoke prose with the
same facts and links. A street-by-street diff of the whole corpus could not
come clean (the generator cuts at every coverage edge: 3rd Street 7 → 15
segments, Main 1 → 18), so on 2026-09-15 the bar became *every legacy segment
subsumed or accepted* — `tools/check-legacy.js`.

## Switchover checklist, A–G

Code comments cite these letters, so each keeps a short entry: what was done,
and where it is described now.

**A. Break the config bootstrap.** ✔ 2026-09-15. `NEIGHBORHOODS`,
`CATEGORIES` and `SIMILAR_PROJECTS` moved out of the generated data file into
an authored `data/site-config.js` (plain `const`s and a `module.exports`
guard, loaded by `<script src>` and by `require`), so the generator no longer
reads its own output to learn the vocabulary. One lesson from it worth
keeping: `tools/check-model.js` and `utilities/names-tool.html` used to wrap
that read in a `try/catch` that returned `null` on failure, which *silently
disabled* the category check — the worst failure a migration can have,
because everything passes. Both now fail out loud. Copy that shape.

**B. Unify name aliasing.** ✔ 2026-09-15. One `normalizeName` and one
`NAME_ALIASES` table in `data/site-config.js`, called by every consumer that
keys ways by name; the 2nd Street Tunnel's rows were re-keyed to `2nd Street`
and its mid-street gap closed. Extended 2026-09-18 with `WAY_STREET_KEYS` for
same-name branches (ADDING-A-NEIGHBORHOOD.md, step 3).

**C. Flip the artifact.** ✔ 2026-09-19. The generator writes
`generated/streets-data.js` with a DO-NOT-EDIT header and no build date;
output is byte-deterministic (the one `localeCompare` in the sort keys became
a code-point compare, so an ICU difference cannot reorder it); the harnesses
were retargeted, the vocabulary is no longer re-emitted into the data file,
and deploy.yml runs the three gates and no longer rebuilds.

**D. Promote the preview page to `index.html`.** ✔ 2026-09-19. The old
`index.html`, `preview.html` and `generated/streets-data.gen.js` were deleted,
not parked — git is the archive. Left on purpose: the `only: "legacy"` rows in
`data/site-config.js` and the legacy branches of `tools/check-data.js`
(ROADMAP §11).

**E. Checker and CI.** ✔ 2026-09-15 to 19. `tools/check-data.js` accepts
`{ px }` extents and the model-shaped entries, `--require-generated` is the
hand-edit tripwire, `tools/check-model.js` gates the deploy, and the
regeneration diff runs in CI. The checker's first run on generated output
found real bugs — rows bound to the wrong street, a stretch linked to the
wrong namesake, `disputed` not reaching `categories` — all fixed before the
flip. Revived names (one entity, two periods) were built along the way
(2026-09-17).

**F. Rewrite the authoring docs.** ✔ 2026-09, finished 2026-09-19. The
handbook was reorganised around the document model: NAME-RESEARCH.md and
ADDING-A-NEIGHBORHOOD.md replaced ADDING-STREETS.md, PIPELINE.md became a
four-stage orientation, TRANSCRIPTION-TEMPLATE.md lost Part B, and
PUBLISHING.md, README.md, CLAUDE.md, legacy/README.md and MODEL-SPEC were
updated for the flip.

**G. Aftercare.** Re-run the generator after every OSM geometry refresh, and
replace hand-estimated coverage rectangles with measured footprints before any
large document is marked swept — both in ADDING-A-NEIGHBORHOOD.md. Approved
text (MODEL-SPEC §3.2) was deliberately not a gate (Kenny, 2026-09-15): the
site already carried agent-drafted prose the old model never distinguished,
and the approval fields exist to answer "which sentences did a person write"
afterwards.
