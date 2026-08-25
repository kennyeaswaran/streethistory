# The generator, built: acceptance results and implementation notes

**Status (2026-08-24): built; the §11 acceptance test passes on 3rd Street.**
The live `streets-data.js` is untouched — generator output goes to
`generated/streets-data.gen.js` until the full-corpus diff (§11's last step)
is done and Kenny approves the switchover. Written by the instance that built
it, for Kenny's review; MODEL-SPEC.md is unedited and remains the contract.

## What exists now

| file | role |
|---|---|
| `names.js` | authored name entities (§3) — 18 curated so far |
| `documents/*.js` | one file per document (§4–§5); `documents/index.js` is the registry; `documents/osm.js` derives the OSM pseudo-document from `streets-geometry.js` at load time, so it can't go stale |
| `generate.js` | the generator (§6): segmentation, timelines, `how`, planned/built, labels, bands, search index, reports |
| `check-model.js` | validates the authored layers (§9): ids resolve, extents lie on their streets, change rows only on transition-attesting documents, prose-dated spellings carry sources, shared forms produce distinct labels |
| `diff-street.js` | the acceptance harness: structural per-field diff of one street, legacy vs generated |
| `generated/` | `streets-data.gen.js` (today's consumable shape — the existing `check-data.js` passes on it unmodified), `search-index.js`, `report.md` |

Documents encoded (§11's list, plus what 3rd Street's evidence base needed):
`ord-1849` (Ord survey; partial — 2nd, 3rd, Chapules rows), `mr003-060`
(Thomas Tract), `mr030-009` (Wolfskill Orchard), `mr066-035`
(Washington/Compromise, including its adversarial Third-St-is-Miramar row),
`tr0015-166a` (Crownwood), `ord-4093` (the 1897 renaming — the deferred apply
pass now lives here as change rows), `lah-1874-02-27` (Chapules→Pearl), `osm`.

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
   rows on *Miramar itself* (mr066-035, tr0015-166a), where the generated
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
2. **Street-by-street full diff** (`diff-street.js` over every legacy key),
   accounting for every difference as above. Expect legacy's 4-segment 2nd
   Street vs generated 10 (pavement-gap segmentation is stricter than the
   hand data; some gaps — the 2nd St tunnel — need OSM-side investigation or
   a gap-threshold call).
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
hand-estimated rectangles pending georef-derived footprints (harmless while
`sweptFully: false` gates negative inference, load-bearing after); the
`extension`-derivation rule above is the one place the generator is *more*
conservative than the hand data chose to be.
