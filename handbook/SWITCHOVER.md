# Switchover — what is left, and whose it is

*Updated 2026-09-19. **All three gates are green**: `node check-model.js`
clean (328 entities, 392 documents, 4312 rows); `node check-data.js` on the
generated output clean; `node check-legacy.js` — "Every legacy entry is
subsumed or accepted" (140 entries, 54 accepts, 0 hard). The flip is ready
to schedule.*

## Where things stand

| | |
|---|---|
| A vocabulary, B aliasing (+ branches), E checker/CI | ✔ done |
| C — generator writes `streets-data.js` | vocabulary no longer re-emitted and preview loads site-config.js; **output path, header date, CI regeneration check, `--require-generated` — the flip** |
| D — preview → index, old index deleted | **the flip** |
| F — docs | **the flip** |
| the corpus | gates green; growing before and after, which is the design |

## How to run the flip (Kenny + one instance, one sitting)

1. **Commit first.** Every sheet, ordinance and entity in progress goes in
   as its own commit, so the flip's diff is readable and revertible. Any
   instance mid-batch (the UCLA material) reaches a point where
   `check-model.js` passes, and that gets committed too.
2. **Nobody edits `index.html`, `preview.html`, `generate.js`, `check-*.js`,
   `site-config.js` or `.github/workflows/deploy.yml` while it runs.**
   `documents/` and `names.js` are fair game throughout.
3. **The instance does C, D, F** from MODEL-IMPLEMENTATION.md's checklist,
   in that order: point the generator at `streets-data.js`, drop the
   `Built:` date from the header, retarget `diff-street.js`,
   `preview-test.js`, `check-legacy.js` and deploy.yml's parse step; add
   `node generate.js && git diff --exit-code streets-data.js` and
   `check-data.js --require-generated` to deploy.yml; make preview.html the
   new index.html (add the `site-config.js` script line, delete the
   `[PREVIEW]` title prefix and the purple banner with its back-link) and
   delete the old index.html and preview.html; then the doc list under F —
   README, CLAUDE.md, legacy/README.md, PUBLISHING.md, MODEL-SPEC §0, the
   `preview.html` mentions in ROADMAP and MAP-TOOL-SPEC, the utilities'
   printed lines. It ends with the three gates run once more and the list of
   files changed.
4. **You commit the flip as one commit and push.** Watch the Actions tab:
   the deploy now runs `check-data.js --require-generated`, `check-model.js`
   and the regeneration check before it uploads. Green, and the generated
   map is the site.
5. **After:** the Misc Records half of `shopping-list-2026-09-17b.md` when
   the City service is back; the confirmation tool for the 58 held-back
   audit rows (MAP-TOOL-SPEC §9); the proceedings model (ROADMAP §2) for
   Buena Vista and the Miramar chain; Olympic's 1935 ordinance
   (`shopping-list-2026-09-18-council-files.md`); the Chavez extents from
   council file 93-0907's exhibit map.

## What was decided along the way (for the record)

### The checkers

`oldplaza1873` has its Huntington record as `url` (Kenny, 2026-09-18) and the
35 citation errors are gone; `stevenson-1884-hi-res` (partially processed:
alignment and coverage in, title block and rows not) has its record page,
the IIIF full-size image as a `copies` entry, and an interim title. Also
that day: an entity minted in the tool and not yet researched derives
`basis-none` / `searched-none` instead of an empty category list.

### Coverage — done

The last ten were compared stretch by stretch with the old map on
2026-09-19 and accepted: on every one the old claim was the whole-street
entity claim, which the entity still carries onto the grey stretch. The
corridors in `shopping-list-2026-09-17b.md` (Misc Records half still to run
when the City service is back) are work for after the flip.

### Names — done (two deferred to proceedings)

Buena Vista and the Miramar chain were accepted 2026-09-19 as proceedings
work; the rest cleared or were accepted as recorded below. What the corpus
held for each, at the time:

| finding | evidence in the corpus | do |
|---|---|---|
| Los Angeles St: "Calle de los Negros" | not lettered on the recorder's copy of Ord sheet 53-69 (I looked: the plaza alley is drawn, unlabeled). `lah-1917-02-14` (rows 0): council orders the alley renamed | a change row in `lah-1917-02-14` needs a `calle-de-los-negros` entity and a sheet that letters it — none does. **accept** for now, with the 1917 doc as the reason |
| Broadway N: "Buena Vista" | `lah-1896-05-16`, `min-1893-04-10`, `lah-1899-05-06`, `lah-1908-09-22`, `guinn-1912` all mention it; none has rows | a real lineage (Eternidad → Buena Vista → North Broadway 1909) — **proceedings work** (ROADMAP §2), not a quick row |
| Traction: "Stephenson Avenue"; Ord: "Walters Street" | Entities `walters-street`, `stephenson-avenue` exist. **High → Walters** (Sept. 1886) is a change row on `lah-1886-09-21`, unconfirmed. **Walters → Ord and 2nd → Stephenson were in the Oct. 1890 omnibus, which the mayor vetoed** (`lah-1890-11-09`, `-11-11`; referred back to Public Works; its items were re-passed singly in 1891 — Sepulveda → Jackson, Aug. 1891). The audit thread withdrew the two rows I had put on it and rewrote the entities' notes; that is the right reading. | confirm the 1886 row; CDNC for the single ordinances: "Walters street" Nov. 1890 – 1892, "Stephenson avenue" 1890 – 1900; or accept both names with the veto as the reason |
| Cesar Chavez: "Macy Street" | `lah-1908-10-27` (Macy in a 1908 rearrangement); the 1994 renaming has no document | see §4 |
| Miramar: "Ocean View", "Nob Hill" | `lah-1896-05-16` "Avenues North of First St", `min-1893-04-10` mention Ocean View | see §4 |
| Court Street | on `mr006-138`, `mr007-026-p2`, `mr005-069`, `tr0014-097b` — all with rows | the name IS lettered; the finding is that no row lands on the legacy ground — check which street those Court rows are keyed to |


**Where a map might letter the five (Cuidado, Calle Real, Negros, Stephenson,
Walters), 2026-09-17.** There is no street-labelled plan of the pueblo before
Ord: the 1786/1793 plats show the plaza and fields, and the 1847 military
sketches and Hutton's drawings (Huntington) are views, not surveys. Pre-1849
names live in TEXT — the ayuntamiento records in the City Archives, deeds —
which is proceedings work, not a sheet. So:
- *Calle de los Negros*: first look at the **LAPL scan of Ord's original**
  (already a `copies` entry on the Ord documents) at the plaza block — the
  recorder's 1893 copy draws the alley unlabelled, the original may not.
  Failing that, the **1872–1875 city directories** (street sections; the
  alley was absorbed into Los Angeles Street in 1877, so the 1888 Sanborn is
  too late). A directory year is one textual document; no coverage change.
- *Stephenson Avenue*, *Walters Street*: 1880s names inside the present
  coverage — **recorded tract maps** (NavigateLA Map-Refs for the Arts
  District and north of the plaza) will letter them, cheaper than Sanborn.
- *Calle Cuidado*, *Calle Real*: nothing will; accept.
- Sanborn (1888, 1894) and the directories as serial sources stay deferred,
  as planned; nothing above needs the neighbourhood expanded.

### Legacy namesakes — done

The 13 carried-over entities are in; the five empty fields are settled
(2026-09-18: grand-ave and Delong accepted, Boylston / San Julian graded
`guess`, Court `inferred` — Kenny's calls). **Four of the modern renamings
now have their ordinances** — `ord-162010` (Weller → Onizuka, Feb. 1987),
`ord-169111` (Macy and two Sunset stretches → Cesar E. Chavez, Oct. 1993, in
force Mar. 31, 1994), `ord-171586` (San Pedro → Aiso, Apr. 1997), `ord-172590`
(9th → Wood, May 1999) — from the City Clerk's PDFs, **rows confirmed by Kenny 2026-09-18** and on the map.
Two dates correct the legacy file (1987 not 1988; 1999 not 1997). The three
Chavez rows are `extent-unresolved` on purpose: the ordinance's stretches
("Macy between Bridge and New High", "Sunset between North Main and
Figueroa") overlap by a block on the modern alignment and Bridge Street is
off the extract, so they record the act and draw nothing until the
Engineer's exhibit map in council file 93-0907 settles the ground. Olympic
1935 is still to find (`shopping-list-2026-09-18-council-files.md`).

**Left: nothing.** The freeways and ExpressLanes are accepted for `namesake` too (shallow research, reconstructible in minutes).

### Accepts

`legacy/accepted-differences.js`: coverage for the six streets, freeways,
ExpressLanes, plazas; names for the freeways, De La Guerra, Spring's two
pre-Ord names, Calle Real. Still open: Calle de los Negros (after the LAPL
Ord original / 1872–75 directories), and the Boyle Heights stretches of
Willow, Jesse and 7th Place for `coverage`.

### Prose — still open, not a gate

`{{span}}` with no link: Spring, Angelina, Industrial, Wilde. Link with no
span: Mesquit.

### Instance work that was listed

1. §4 — the five `namedAfter` fields, and the freeways if wanted.
2. The tract maps for §2.
3. Checklist C, then D and F.
4. Browser suites in a sandbox (`browser-test.js` was edited by the other
   instance; `preview-test.js` not run since preview.html gained
   site-config.js).
5. Style-budget warnings → check-model / names tool, once per entity.
6. `tmp/ord-069-plaza*.png` are crops I rendered to look at the plaza; delete.

### The gate, as it was phrased

`node check-model.js && node generate.js; node check-data.js
--require-generated && node check-legacy.js` — all three clean, then C, D, F.
