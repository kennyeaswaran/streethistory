# The generator, built: acceptance results and implementation notes

**Status (2026-08-24): built; the §11 acceptance test passes on 3rd Street.**
The live `streets-data.js` is untouched — generator output goes to
`generated/streets-data.gen.js` until the full-corpus diff (§11's last step)
is done and Kenny approves the switchover. Written by the instance that built
it, for Kenny's review; MODEL-SPEC.md is unedited and remains the contract.

**Re-checked 2026-09-15** against the live tree (checklist item A had just
landed). Findings folded in below, each marked *(2026-09-15)*: the claim that
`check-data.js` passes on generated output is no longer true (item E), the
structural street-by-street diff cannot come clean and has been replaced by a
subsumption check ("What remains" §2), item B touches three documents' rows
and not only code, and item C has two traps of its own.

## What exists now

| file | role |
|---|---|
| `names.js` | authored name entities (§3) — 18 curated so far |
| `documents/*.js` | one file per document (§4–§5); `documents/index.js` is the registry; `documents/osm.js` derives the OSM pseudo-document from `streets-geometry.js` at load time, so it can't go stale |
| `generate.js` | the generator (§6): segmentation, timelines, `how`, planned/built, labels, bands, search index, reports |
| `check-model.js` | validates the authored layers (§9): ids resolve, extents lie on their streets, change rows only on transition-attesting documents, prose-dated spellings carry sources, shared forms produce distinct labels |
| `diff-street.js` | the acceptance harness: structural per-field diff of one street, legacy vs generated |
| `generated/` | `streets-data.gen.js` (today's consumable shape — `check-data.js` passed on it unmodified on 2026-08-24; **no longer**, see item E), `search-index.js`, `report.md` |

Documents encoded — **24 plus `osm`, of which 23 are fully swept** (2026-09-01;
`node check-model.js` prints the live count, and the tool's Open → "What's left
to do" lists what is not). Rather than a list that goes stale every week, the
shape of the corpus:

- **The Ord/Hutton survey, Aug. 1849** — `mr053-063`, `-067`, `-068`, `-069`,
  `-071`, `-073`, the county recorder's 1893 copies, one document per sheet.
  The corpus's floor: most downtown streets get their first attestation here,
  and most are lettered in English and Spanish at once (§5.1).
- **Boom-era tract maps** — `mr003-032`/`-033` (Ord blocks 72/73),
  `mr003-060-p1`/`-p2` (Thomas Tract), `mr006-138` (Glassell),
  `mr007-021` (Cameron Tract), `mr011-042` (Goodwin Tract),
  `mr013-087-p1` (Mills and Wicks), `mr030-009-p1`…`-p5` (Wolfskill Orchard),
  `mr066-035` (Washington/Compromise, with its adversarial
  Third-St-is-Miramar row), `tr0015-166a-p1`/`-p2` (Crownwood).
- **Transitions** — `ord-4093` (the 1897 citywide renaming; the only document
  not swept, and partial by design) and `lah-1874-02-27` (Chapules→Pearl).
- **`osm`** — the base map, a document like any other (§4.1).

`ord-1849`, the hand-written stand-in for the survey, was retired once the
sheets themselves were encoded.

Decision recorded (closes a §12 item, per Kenny 2026-08-24): **a revived name
resumes its old entity** — Georgia's 1897 revert is one entity, three ordered
spelling periods, the 2→3 boundary pinned by ord-4093's respelling row.

## Acceptance: 3rd Street, difference by difference

Generated and legacy agree on everything the model computes: **7 segments,
same order, same labels, same from/to, same band values to four decimals,
same gapAfter, same name-periods (names, dates, `how`)**. `node
diff-street.js "3rd Street"` reports 12 differing fields, every one accounted:

1. **"presumably folded in during the Feb. 1897 renaming" hedges (segs 1, 5)**
   — legacy asserted a presumption with a citation to an article that does not
   name these stretches. The generator emits "arrival on this stretch not
   directly documented" and no date. This is the honest value (§6.3: never
   guess) — and when the ordinance's full text arrives from the City Archivist
   and `ord-4093` flips to `sweptFully: true`, its exhaustive-in-scope silence
   or listing will *settle* each stretch mechanically, which is strictly
   better than a presumption.
2. **Main to Alameda loses `how: "extension"` (seg 4)** — legacy's item was
   explicitly "presumably an eastward extension". The generator derives
   extension only from a dated sighting adjacent to earlier dated ground;
   an undated arrival next to older ground is exactly the presumption that is
   a trap on this street's *western* reach (the 1894 "Third St" is Miramar),
   so the rule is deliberately symmetric and this hedge goes too.
3. **`planned: "1849"` vs legacy `"by 1849"` (seg 3)** — the Ord survey row is
   `planned-on`: the survey *is* the planning act, and Aug. 29, 1849 is its
   date (§4.2, §6.4). Legacy's "by" hedged a date that isn't actually
   uncertain. If Kenny prefers the hedge, flip the row to `planned-by`.
4. **Segment notes dropped (segs 0, 1, 6)** — the two Miramar-caution notes
   are cross-street disambiguation: in the new model that testimony lives as
   rows on *Miramar itself* (mr066-035, tr0015-166a-p1), where the generated
   Miramar entry now shows its "3rd St" periods — the fact moved to the ground
   it's about. The seg-6 note (rail yards, no bridge) is a place fact that
   should return as an **annotation row** with a citation when one is found;
   the hand note carried none. The Crownwood source on seg 0 moved to Miramar
   with its row.
5. **Prose wording of namedAfter/built/origin lines (segs 1, 5, 6)** — the
   generator composes these from formulas (entity claim + arrival kind + doc
   registry titles); legacy's were bespoke. Same facts, same links; each
   document is now described once and cited everywhere (§6.6 — legacy's 329
   source rows resolve to 148 URLs, and e.g. the Ord survey was re-described
   31 times).

No unexplained differences. Bonus behaviors verified on neighbors: the two
Georgias stay separate entities and the search index labels them "(east of
Alameda)" / "(west downtown)"; Figueroa is one entity across Boylston (origin
roadway) and Figueroa (received 1897, `how: "transfer"` derived from the
paired ord-4093 rows); Central's three segments and the Vine/Wolfskill
predecessors reproduce; OSM binding minted 265 grey stubs with zero hand
entry.

## Where implementation had to go beyond the spec's letter

All small; flagging them so they get ratified or reversed consciously:

- **`shortTitle` and `copies` on documents.** `shortTitle` feeds generated
  prose ("…on the 1875 Map of the Thomas Tract"); `copies` carries the
  recorder's certified Ord copy into sources wherever the survey is cited,
  without a second row-bearing document.
- **`type: "news-report"`.** §5 already said a dated newspaper report may
  carry change rows; the §4 type enum just lacked a value for it
  (`lah-1874-02-27`).
- **Respelling rows: `change` with `from === to` plus `toForm`.** How a
  document attests a spelling transition *within* one entity (Georgia Bell →
  Georgia, 1897). Pins the boundary between spelling periods; §3's derived
  spelling dating needed exactly this.
- **Row-extent orientation.** `from`/`to` on rows follow canonical order
  (N→S / W→E), matching segment `from`/`to`; a null end means the street's
  end on that side.
- **OSM rows carry geometric extents** (the way itself) instead of
  cross-street names — for OSM the geometry *is* the identification.
- **`planned`/`built` ignore the osm document** — otherwise every segment
  would claim "built by 2026". OSM is tertiary (§4.1); it anchors "current",
  nothing else.
- **`unresearched` category** added to the generated CATEGORIES for stubs
  (grey ≠ violet "unknown"); the old checker's namedAfter-null warning
  predates it and fires on stubs — a checker rule to relax at switchover.
- **One OSM name excluded**: "East West Bank Plaza at The Broad", where the
  leading token isn't a directional prefix; `normalizeName`, the checker's
  key rule and the map's click lookup all misparse it (§1 cost 4 in the
  flesh). Listed in `generated/report.md`.

## What remains before the switchover (§10–§11)

1. **Encode the rest of the corpus** — every document the 140 legacy entries
   cite (the omnibus files, the remaining tract transcriptions, Kines-anchored
   entities for the ~100 researched streets). The 18-entity file covers 3rd
   Street's evidence base and the 1897 ordinance's in-coverage rows only.
2. ~~**Street-by-street full diff** (`diff-street.js` over every legacy key),
   accounting for every difference as above.~~ **Replaced 2026-09-15 by a
   subsumption check.** Measured that day: all 107 legacy keys exist in the
   generated output, but 77 of them have a different segment count (3rd
   Street 7 → 15, 2nd 4 → 18, Main 1 → 18), because the generator cuts at
   every coverage edge (ROADMAP §1: 23 of 371 boundaries are name changes).
   The structural diff will only get further from clean as documents land, so
   "every difference accounted" is no longer the bar. The bar is now:
   **every legacy segment is either subsumed or accepted.** A legacy segment
   is *subsumed* when the generated segments overlapping its ground carry, in
   union, at least what it carried — every name in its `nameHistory` with a
   date no vaguer, `namedAfter` non-null wherever legacy's was, `planned` /
   `built` no vaguer, and every source URL — and *accepted* when a person has
   listed it, with a reason, in an accepted-differences file the harness
   reads (the 2026-08-24 3rd Street list above is the seed: the dropped
   hedges and the Miramar notes are accepted, not lost). Ground is matched
   by geometry (legacy cross-street `from`/`to` resolved through the
   street's crossings; generated `{px}` extents are already positions), never
   by label. This is a new harness beside `diff-street.js`, which stays as
   the per-street microscope; nothing of it is built yet. It reports the
   unsubsumed, unaccepted legacy segments, and the switch waits for that list
   to be empty. It should then be kept and run on every build — it is the
   only check that will ever notice a document row *removing* a claim the
   old map made. **Built 2026-09-15 as `check-legacy.js`** with
   `legacy/accepted-differences.js` as the waiver file; first run: 121 hard
   findings (70 coverage, 15 names, 36 namesake), 219 soft. The human-facing
   reading of that output is **handbook/SWITCHOVER.md**.
3. **Map/checker migration** (§8) — now underway in **`preview.html`**, which
   as of 2026-08-25 is a STANDING file (no longer auto-derived from
   index.html; it is the future index.html and is edited directly). Already
   in it: entity search over all recorded forms with fit-on-select and
   three-way coloring (bears / formerly bore / neither), the grey =
   OSM-only base scheme with the violet base retired, single-select radio
   category filters folded under a caret, former-CATEGORY matches shown
   violet (via the generated per-segment `formerCategories` field), and
   OSM ways split at band boundaries (with boundary-sliver suppression) so
   segments finer than way-breaks stay clickable. Still to do: entity
   cross-links as saved searches (`[[name:<id>]]`), the two age color
   schemes, match-count stepping, and retiring the checker's stub-hostile
   warning.
4. Then the big-bang switchover per §10: generate into `streets-data.js`,
   do-not-edit header, CI regeneration check.

Known soft spots worth eyes: coverage polygons for the tract documents are
hand-estimated rectangles pending measured footprints (harmless while
`sweptFully: false` gates negative inference, load-bearing after); the
`extension`-derivation rule above is the one place the generator is *more*
conservative than the hand data chose to be.

## Switchover checklist — for the instance that flips it (§10)

Everything below is a KNOWN change the switchover requires, gathered while
building. Do not start until the prerequisites in "What remains" §§1–2 above
are done (full corpus encoded; street-by-street diff accounted) and Kenny has
approved. Work through this in order; most items have a ⚠ comment at the code
site too.

**~~A. Break the config bootstrap first (circularity trap).~~ Done 2026-09-15.**
`NEIGHBORHOODS`, `CATEGORIES` and `SIMILAR_PROJECTS` now live in an authored
**`site-config.js`** with a `module.exports` guard, so it loads three ways: a
`<script src>` in `index.html` and `names-tool.html`, a `require` in
`generate.js` / `check-model.js` / `check-data.js`, and re-emitted verbatim into
`generated/streets-data.gen.js` for `preview.html`. `unresearched` is declared
there, so nothing injects it any more, and the `new Function(src + "; return
{...}")` trick is gone from every Node consumer.

One thing worth keeping in mind for the rest of this checklist: `check-model.js`
and `names-tool.html` both used to wrap that read in a `try/catch` that returned
`null` on failure — which SILENTLY DISABLED the category check. For a migration
that is the worst possible failure, because everything passes. Both now say so
out loud instead. Copy that shape, not the old one.

**B. Unify name aliasing (the 2nd Street Tunnel).** ✔ **Done 2026-09-15**, as
the amended plan below says: `NAME_ALIASES` and one `normalizeName` in
`site-config.js`, every consumer calling it (generate.js, documents/osm.js,
check-model.js, map-tool.html, intersect.js, coverage-report.js, index.html,
preview.html — the maps' local copies deleted), the four tunnel rows re-keyed
to `2nd Street` and their `sweptFor` trimmed. The tunnel stub is gone and 2nd
Street's mid-street gap at Hope closed (18 → 17 segments; the four gaps left
are Westlake's real discontinuities and the river). `coverage-report.js`, which
had been crashing since item A, reads NEIGHBORHOODS from site-config.js again.
Not yet run: the two Playwright suites (sandbox only).
**Addendum 2026-09-18 — branches.** The same table now has a sibling,
`WAY_STREET_KEYS` in site-config.js, keyed by OSM way id: two roadways under
one name that run side by side (West 5th Street's one-way southern branch,
the old Ward Street corridor; the East 4th Street viaduct over the surface
street) are keyed as their own streets — `"5th Street (south branch)"` — so a
sheet that letters them differently no longer puts two names on one interval.
`normalizeName(name, wayId)` consults it; every way loop passes the id (the
same eight consumers plus check-legacy.js). The suffix is a label: the
generator binds and displays the base name (`streetDisplayName`), so the
branch is still 5th Street, bound to `fifth-street`. Rows on the branch are
keyed to the branch (`mr003-046-p2`'s WARD row, `mr003-569`'s and
`mr001-462`'s absent rows, a Saint Paul Avenue crossing). Candidates are
found by the lateral-separation test (same name, overlapping along the axis,
> 40 m apart across it; `$HOME/sw/branches.js` was the script — same name,
project on the street's principal axis, compare mean across-offsets where
the along-ranges overlap). Twin motorway carriageways, the 4th Street
bridges over the 110 and a hook-shaped Fort Moore Place also trip the test
and are deliberately not in the table: nothing will letter them differently.
The map's `NAME_ALIASES` ("2nd Street Tunnel" → "2nd Street") exists only in
index.html/preview.html; the generator doesn't know it. Consequences today:
the generated data has an orphan "2nd Street Tunnel" stub entry the map never
reaches, and — worse — the tunnel's pavement reads as a GAP in 2nd Street,
which is part of why generated 2nd has 18 segments vs legacy's 4. ~~Move the
alias table into the generator (next to `EXCLUDE_NAMES`)~~ *(2026-09-15:)*
**put the alias table in `site-config.js`**, which item A made the one
authored file every consumer already loads (browser `<script>`, Node
`require`, re-emitted for the preview), and have every place that keys ways
by name apply it. That is more places than the ⚠ comment says — the
normalisation is copied, not shared, in each of: `generate.js` (line ~88, the
`streets` map), `documents/osm.js` (its `street` field — the tunnel's ways
must become rows of "2nd Street", with the way's own geometry as extent, so
the pavement joins), `check-model.js` (~58, the geometry index that validates
extents), `map-tool.html` (~348), `intersect.js`, `coverage-report.js`, and
the two maps (which then read the table instead of declaring it). One shared
`normalizeName` in site-config.js that applies the table is the cheapest way
to make them agree (ROADMAP §9 already asks for this retirement).
**Data, not only code:** three documents already carry rows keyed to the
tunnel as a street — `12685`, `mr001-489`, `mr005-307-a` each have a
`state` row with `street: "2nd Street Tunnel"` (asWritten SECOND STREET,
`{px}` extents, bound to `second-street`), and `sweptFor` lists naming it.
After B those rows must say `street: "2nd Street"` (the px extents are
positions and survive unchanged) and the `sweptFor` entries must drop the
tunnel, or `check-model.js` will reject a street the geometry index no
longer has. The `2nd-street-tunnel` stub entity then stops being minted;
confirm nothing in `names.js` / `names-new.js` refers to it (nothing did on
2026-09-15). Then re-run the segment count on 2nd Street: the tunnel gap
should close, and what remains of 4 → 18 is coverage edges for ROADMAP §1.

**C. Flip the artifact.**
Point the generator's output at `streets-data.js` itself (keep emitting
`generated/search-index.js` and `generated/report.md` where they are). Give
it the DO-NOT-EDIT header §10 specifies. Commit the generated file during the
transition so the git diff stays a safety net; `legacy/streets-data-2026-08.js`
stays as the frozen pre-model archive; `diff-street.js` remains the
comparison harness (retarget its "generated" path).
*(2026-09-15)* Two traps and a list. **The second trap is closed** (done with
B: generate.js no longer re-emits the vocabulary, preview.html loads
site-config.js like index.html). The rest is open.
- **The header carries `Built: <date>`.** Item E's regeneration check
  (`node generate.js && git diff --exit-code streets-data.js`) will fail on
  every push made on a different day than the last commit. Drop the date
  from the header (the git log has it) or have the check ignore that line.
  While there, confirm the output is byte-deterministic — same input, same
  file — or the check is noise.
- **The re-emitted vocabulary collides with `site-config.js`.** The
  generated file re-declares `const NEIGHBORHOODS`, `CATEGORIES`,
  `SIMILAR_PROJECTS` for preview.html, which loads it *instead of*
  site-config.js; index.html loads site-config.js and a data file that does
  not declare them. After the flip the map has to do one or the other: a
  page loading both gets a duplicate-`const` SyntaxError and a blank map.
  Simplest: stop re-emitting, and give the new index.html the same
  `<script src="site-config.js">` line the old one has. `check-data.js`
  already `require`s site-config.js and only pulls `STREET_DATA` from the
  data file, so it is indifferent. Keep `NAME_CATEGORY_INDEX` and
  `VANISHED_STREETS` in the generated file; they are derived.
- **Everything that names `generated/streets-data.gen.js`** and needs
  retargeting: `diff-street.js`, `preview-test.js` (its existence check and
  the page it opens), `.github/workflows/deploy.yml` (the parse step),
  `generate.js`'s own header comment, `site-config.js`'s header comment,
  the subsumption harness from "What remains" §2, and the `preview.html`
  mentions in CLAUDE.md, README.md, MAP-TOOL-SPEC.md §399, PUBLISHING.md,
  and ROADMAP.md (§§1, 3, 5, 9 refer to preview.html as the map to change).
  `coverage-report.js` and `intersect.js` read `streets-data.js` and are
  unaffected by name, but check they survive `{px}` extents.

**D. Promote preview.html to index.html.**
preview.html IS the future index.html (standing file; decision 2026-08-25).
At the flip: change its data `<script src>` to `streets-data.js` (and add
`site-config.js` before it, per C), delete the purple PREVIEW banner and the
`[PREVIEW]` title prefix and the "back to live version" link, then replace
index.html with it and delete preview.html. **The old index.html is deleted,
not parked** — confirmed 2026-09-15: keeping it would mean a frozen data
snapshot it could still render (the generated file's `{px}` extents would
break it), a second copy of the legacy-only categories, and a page GitHub
Pages would publish anyway; git history is the archive. With it go the
`only: "legacy"` rows in site-config.js and the legacy branches of
`check-data.js` (ROADMAP §7 says the same). Also update the two lines in
`utilities/start-map-tools.command` and `utilities/start-names-tool.command`
that print "map preview … preview.html" / "live map … index.html". Map features still owed before or after the flip (§8): entity
cross-links as saved searches (`[[name:<id>]]` / `[[street:<key>]]` — note
generated origin lines do not yet emit any `[[...]]` links), the two age
color schemes (needs coverage polygons), and match-count next/previous
stepping instead of union-fit when a transferred name highlights two places.

**E. Checker and CI.** *(2026-09-15 — was the blocker; mostly done the same
day.)* `check-data.js` gates the deploy, and run against that morning's
generated output it reported **678 errors**: 334 of 556 segments have
mid-block extents (`from: { px: [x, y] }`, §5.4, which landed after the
2026-08-24 "passes unmodified" note) and the checker accepted only a
cross-street string or null. The first push after the flip would have taken
the site down. Done, in `check-data.js` — which now passes on BOTH shapes,
so the flip needs no edit to it:
- ✔ `from`/`to` may be a string, null, or `{ px: [x, y] }`; the adjacency
  warning compares names only (two pixels are on two renders; their agreement
  is the band-tiling check, which the generator satisfies by construction).
- ✔ The `'unknown'` conventions apply only to entries that are not
  model-shaped (no `basis-*` / `stub` category); a model-shaped entry that
  carries `unknown` or `unresearched` is an ERROR, since generate.js must
  never emit them. (The old text said "relax for `unresearched`" — stale:
  the output carries neither.)
- ✔ `--require-generated`: a missing GENERATED header is an error. **Item C
  passes this flag in deploy.yml** — the hand-edit tripwire; not before.
- ✔ Cross-links: `[[street:<key>]]` and `[[name:<id>]]` are checked as well
  as the legacy `[[Key]]`; entity ids resolve through the generated file's
  `NAME_CATEGORY_INDEX` when present.
- ✔ deploy.yml: `node check-model.js` now GATES in the `check` job (it was a
  non-blocking warning in the rebuild step). Still owed at C: the
  regeneration check (`node generate.js && git diff --exit-code
  streets-data.js`, see C's header trap) and retargeting the parse step.
- ✔ Two generator bugs the checker exposed, fixed in `generate.js`: a
  non-origin stretch kept the entity's `namedAfterLink` after cutting the
  `{{span}}` off with the tail, so "The virtue" linked to Alexander W. Hope;
  and `disputed: true` never reached `categories`, so the popup and the
  Highlight list disagreed. `disputed` is now `derived: true` in
  site-config.js like `renamed` (nobody authored it; one entity carries the
  flag).
- After all that, the checker reports **3 errors on the generated output,
  and they are real** — rows bound to the wrong street, each making a
  timeline end in a former name (`until: "?"` after the current name):
  `5th Street::8` (M.R. 84-53, Longley property 1902, "SIXTH ST."),
  `9th Street::1` (Botiller and Reyes lots 1873, "Moran's Lane",
  documents/11824), `Main Street::9` (Jones and Ponet Block 1889, "Los
  Angeles St."). Rule 2: geometry, not name. **These block the flip until
  swept** — the deploy would refuse the file.
- *(2026-09-17)* Two generator fixes the checker forced, both in
  `generate.js`: an interval now takes any OSM row that overlaps it (the
  eps tolerance is for document rows; a way shorter than eps at a street's
  end, or a bridged pavement gap, was left with a former name and no current
  period — 3 of 8 `until` errors that day), and OSM binding matches any form
  of the current spelling period, display form first (so `pico` with forms
  ["Pico Street", "Pico Boulevard"] binds instead of minting a stub).
- *(2026-09-17, evening)* **Revived names built** (closes the §12 item
  decided 2026-08-24). In `timelineFor`, an entity with dated evidence on an
  interval both before and after another entity's gets two periods: the
  earlier ending "?", the later starting from the change that brought it
  back, else "by" its next sighting, else undated. Every split goes to
  `generated/report.md` → "Revived names", because a row on the wrong street
  produces the same shape. Also: spelling periods carry `bracketStart` so an
  unpinned later spelling sorts with its entity, not after the current name.
- Still to decide: what `check-data.js` is *for* after the flip. The
  authored layers have `check-model.js`; the generated file is the output
  of a deterministic program. What is still worth checking there is the
  contract the map relies on (labels, vocabulary, sources with URLs, bands
  tiling, timelines ending in the current name — the three above show why).
  The style-budget warnings (note / namedAfter / origin length) now fire on
  `names.js` prose via the generator, 70-odd of them; they belong in
  `check-model.js` or the names tool, on the entity, once.

**F. Rewrite the authoring docs.** ✔ **Done ahead of the switchover, 2026-09.**
The handbook was reorganised around the document model rather than waiting for
it: `ADDING-STREETS.md` was retired into **NAME-RESEARCH.md** and
**ADDING-A-NEIGHBORHOOD.md**, **PIPELINE.md** was rewritten as a four-stage
orientation, **TRANSCRIPTION-TEMPLATE.md** lost Part B, and CLAUDE.md's rules
6 and 7 now say what they should (extents come from `<id>-streets.json` or a
pixel you clicked; run the checker for the layer you touched). Two items are
still genuinely pending, because they depend on the flip itself:

- **PUBLISHING.md** — note the extra CI gates from item E, and its two
  mentions of preview.html / index.html.
- **MODEL-SPEC.md** — the status line (§0), and the §12 items resolved along
  the way.
- *(2026-09-15)* Also stale at the flip: **README.md** ("Data, next"
  paragraph; the `index.html` lines under "Adding history");
  **CLAUDE.md** (the "What this is" deploy sentence, rule 7, the folder-layout
  `*.html` line, and the whole "generated data model … Not live" bullet under
  "State"); **legacy/README.md** ("Nothing loads this file. `index.html` …
  continue to read the live `streets-data.js`", and its "the docs get revised
  … once the generator takes over" note); **ADDING-A-NEIGHBORHOOD.md**'s
  callout that `NEIGHBORHOODS` still lives in `streets-data.js` (already
  wrong since item A — fix now, not at the flip); **site-config.js**'s header
  comment about re-emission (goes with C).

**G. Aftercare.**
- Refreshing OSM coverage now has one more step: after replacing
  `streets-geometry.js` (map's "Save geometry file" button), re-run
  `node generate.js` — the osm document derives from that file at load time.
- Coverage polygons: replace the hand-estimated rectangles in `documents/`
  with measured footprints before flipping any big document to
  `sweptFully: true` — negative inference makes them load-bearing (§4.4).
- The Wolfskill south-extent caveat in `documents/mr030-009.js` and the
  other ⚠ row comments are the first candidates for the post-switch sweep.
- *(2026-09-15)* **Approved text (§3.2) is not a gate.** `check-model.js`
  counted 2/151 `namedAfter` and 1/151 `note` approved that day, and the
  flip puts all of it on the site. Kenny's call: the live site already
  carries agent-drafted prose the old model never distinguished, so this
  changes nothing about what readers see; the approval fields are for
  answering "which sentences did a person write" afterwards, at whatever
  pace the names tool is used.
