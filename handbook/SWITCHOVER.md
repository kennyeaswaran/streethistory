# Switchover — what is left, and whose it is

*Updated 2026-09-17, late, after commit 6ec2c6a (377 documents, 292
entities, 64 namesakes approved). Numbers are from that tree;
`node check-legacy.js` and `node check-data.js` reprint them. Instance
mechanics: MODEL-IMPLEMENTATION.md's checklist.*

## Where things stand

| | |
|---|---|
| A vocabulary, B aliasing, E checker/CI | ✔ done |
| C — generator writes `streets-data.js` | vocabulary no longer re-emitted, preview loads site-config.js; **output path, header date, CI regeneration check, `--require-generated` — untouched** |
| D — preview → index, old index deleted | untouched; the three edits are listed at the top of preview.html |
| F — docs | pending the flip |
| gates | `check-model.js` clean · `check-data.js` on generated: **clean** · `check-legacy.js`: **12 hard** (10 coverage, 2 names), 42 accepted |

**C, D and F are one sitting, and they ARE the flip**: the moment the
generator writes `streets-data.js`, the old index.html is rendering a file it
cannot read (`{px}` extents), so C cannot be done "early" — it lands together
with D. An instance does the three in an hour once the gates below are
clean. What is left before that sitting is all corpus and decisions:

1. ~~`oldplaza1873` source URL~~ — done.
2. Coverage: 10 hard entries (§2) — two shopping lists cover them:
   `shopping-list-2026-09-17.md` (Crown Hill, east of Alameda) and
   `shopping-list-2026-09-17b.md` (north of the plaza, Traction, the
   southwest; query ready to paste). Three are bbox edges, three are Boyle
   Heights (accept).
3. Names: 2 (§3) — Buena Vista and the Miramar chain, both proceedings
   work; Negros, Stephenson and Macy cleared by your sheets 2026-09-18.
4. ~~Namesakes~~ — done 2026-09-18: the four ordinance rows confirmed, the
   freeways accepted. The audit's 58 held-back rows wait for the confirmation
   tool.
5. The §4(c) decision: how a renaming with only a secondary source is drawn.
6. Your read of the 13 new entities (§4) — they are on the site the day of
   the flip.
7. Confirm the High → Walters row (§3); the 1890 pair waits on its single ordinances.
8. The corpus-wide renaming audit runs in its own thread
   (`handbook/PROMPT-change-rows-audit.md`); its bin-B rows come back to you
   for extent verification.

Since the last rewrite: Belmont Avenue went unbound (two entities share the
name; one is a ghost street) and left its documented stretches without a
current name — the binder now drops vanished-only entities from a tie and
says so in the report; **check that modern Belmont Avenue is `belmont-ave`'s
lineage** (moved north onto Aztec's ground), because that is what it now
assumes. "Revived names" in `generated/report.md` has ten entries now
(Wilshire/Orange and 7th/Orange are new); each is either a real revival or
a row on the wrong street.

## 1. The checkers are clean

`oldplaza1873` has its Huntington record as `url` (Kenny, 2026-09-18) and the
35 citation errors are gone; `stevenson-1884-hi-res` (partially processed:
alignment and coverage in, title block and rows not) has its record page,
the IIIF full-size image as a `copies` entry, and an interim title. Also
that day: an entity minted in the tool and not yet researched derives
`basis-none` / `searched-none` instead of an empty category list.

## 2. Coverage — *10 left*

```
  6%  3rd Street — Boylston to Figueroa
  6%  17th Street
 27%  Willow Street
 29%  Georgia Street
 35%  Jesse Street
 40%  Vignes Street
 41%  Cesar E Chavez Avenue
 42%  3rd Street — west of Bixel
 42%  7th Place
  —   Olympic Boulevard — east of Central Ave (bbox edge; no segment)
```

Willow, Jesse and 7th Place are the Boyle Heights stretches (accept); Olympic
east of Central is the neighbourhood's southern edge (accept or widen the
bbox); the Misc Records half of `shopping-list-2026-09-17b.md` is still to
run for the rest. Whatever the sheets do not reach: accept, one line each.

## 3. Names the old map recorded that the new map does not — *fix or accept*

7 findings (De La Guerra, Cuidado/Caridad and Calle Real are accepted).
What the corpus already holds for each:

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

## 4. Legacy namesakes — *7 left, all freeways*

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

## 5. Accepts — *33 in; Negros after the look*

`legacy/accepted-differences.js`: coverage for the six streets, freeways,
ExpressLanes, plazas; names for the freeways, De La Guerra, Spring's two
pre-Ord names, Calle Real. Still open: Calle de los Negros (after the LAPL
Ord original / 1872–75 directories), and the Boyle Heights stretches of
Willow, Jesse and 7th Place for `coverage`.

## 6. Prose — *you, names tool*

`{{span}}` with no link: Spring, Angelina, Industrial, Wilde. Link with no
span: Mesquit.

## 7. Instance work, in order

1. §4 — the five `namedAfter` fields, and the freeways if wanted.
2. The tract maps for §2.
3. Checklist C, then D and F.
4. Browser suites in a sandbox (`browser-test.js` was edited by the other
   instance; `preview-test.js` not run since preview.html gained
   site-config.js).
5. Style-budget warnings → check-model / names tool, once per entity.
6. `tmp/ord-069-plaza*.png` are crops I rendered to look at the plaza; delete.

## 8. Gate

`node check-model.js && node generate.js; node check-data.js
--require-generated && node check-legacy.js` — all three clean, then C, D, F.
