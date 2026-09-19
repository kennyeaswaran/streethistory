# Switchover — done 2026-09-19; what is owed after it

*The flip ran on 2026-09-19 on a clean, fully committed tree (Kenny's
"documents from UCLA added" commit was the last corpus commit before it).
All three gates were green before and after: `node check-model.js` (328
entities, 418 documents, 4322 rows), `node check-data.js
--require-generated` on the generated `streets-data.js` (272 streets, 941
entries, 770 anchored), `node check-legacy.js` (every legacy entry subsumed
or accepted; 54 accepts, 0 hard). The generated map is the site once the
flip commit is pushed and Actions goes green.*

## What the flip changed (one commit)

| | |
|---|---|
| `generate.js` | writes `streets-data.js` at the root (was `generated/streets-data.gen.js`); no `Built:` date in the header; the one locale-collated sort is now code-point order, so CI's rebuild is byte-identical to Kenny's |
| `streets-data.js` | now generated — 2.5 MB, `GENERATED FILE — DO NOT EDIT` header; the hand-authored file it replaces is `legacy/streets-data-2026-08.js` (differs from it only by the vocabulary move and one category rename) |
| `generated/` | `search-index.js` and `report.md` only; `streets-data.gen.js` deleted |
| `index.html` | the former preview.html: title prefix, purple banner and back-link gone, header comment rewritten, `<script src="streets-data.js">`; old index.html and preview.html deleted (git history is the archive) |
| `.github/workflows/deploy.yml` | check job: `check-data.js --require-generated`, `check-model.js`, then the regeneration diff (`node generate.js`, then `git diff --exit-code -- streets-data.js generated/search-index.js`; row problems tolerated, a crash not). Deploy job just uploads — no rebuild, since the committed file is proven current |
| `diff-street.js`, `preview-test.js`, `check-legacy.js`, `check-data.js` | retargeted / comments |
| `site-config.js` | comments; the two `only: "legacy"` rows stay, marked dead (post-flip cleanup) |
| `utilities/start-*.command` | print "the map" instead of preview + live; the names-tool one now says to run `generate.js` after a save |
| docs | PUBLISHING.md (the three gates; commit the output with the change), MODEL-SPEC §0/§10/§12, MODEL-IMPLEMENTATION (status, C/D/F marked), README, CLAUDE.md (What this is, rule 7, layout, State), legacy/README.md, MAP-TOOL-SPEC, ROADMAP, this file |

## The standing rule from here

**Every change to `documents/` or the name files is two things in the
commit: the change, and the regenerated output.** `node check-model.js &&
node generate.js`, then commit `streets-data.js` and
`generated/search-index.js` with it. The deploy's regeneration check fails
the push otherwise — and the red X is the whole safety net, so do not push
around it.

## After the flip — the list

1. **Kenny: commit and push the flip** as one commit; watch the Actions
   tab. Before committing, delete `_to_delete/` in Finder — its contents
   (scratch, old index.html and preview.html, `streets-data.gen.js`) were
   committed in an earlier "commit all", so the deletion has to be committed
   too. If the regeneration check fails on the first run, the most likely
   reason is a Node-version difference in output; the Actions log shows the
   diff, and the fix is a follow-up commit, not a revert.
2. The **Misc Records half** of `shopping-list-2026-09-17b.md` when the City
   service is back.
3. The **confirmation tool** for the 61 held-back audit rows (MAP-TOOL-SPEC
   §9) — `generate.js` prints the count on every run.
4. The **proceedings model** (ROADMAP §2) for Buena Vista and the Miramar
   chain, which were accepted as proceedings work.
5. **Olympic's 1935 ordinance** (`shopping-list-2026-09-18-council-files.md`);
   the Chavez extents from council file 93-0907's exhibit map.
6. **Cleanup the flip left on purpose:** the `only: "legacy"` rows in
   site-config.js and the legacy branches of check-data.js, names-tool.html
   and generate.js's `NAME_CATEGORY_INDEX` (`unknown` / `unresearched`); the
   three `documents/tr0002-008b`, `tr0002-062a`, `tr0012-088a` folders that
   have no `.js` yet (generate.js skips them with a warning).
7. **`preview-test.js`:** ran at the flip in the sandbox — page loads with
   zero errors, 41 pass, 5 fail on segment labels the grown corpus no longer
   produces ("Belmont to Toluca (State St)" is now "beyond Belmont (State
   St)", etc.). Refresh the expectations; the map is fine.
8. Style-budget warnings (note / namedAfter / origin length) → check-model
   or the names tool, once per entity, instead of 70-odd per build.

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
3. ~~Checklist C, then D and F.~~ Done 2026-09-19.
4. Browser suites in a sandbox (`browser-test.js` was edited by the other
   instance; `preview-test.js` run at the flip — see the after-list).
5. Style-budget warnings → check-model / names tool, once per entity.
6. `tmp/ord-069-plaza*.png` are crops I rendered to look at the plaza; delete.

### The gate, as it was phrased

`node check-model.js && node generate.js; node check-data.js
--require-generated && node check-legacy.js` — all three clean, then C, D, F.
