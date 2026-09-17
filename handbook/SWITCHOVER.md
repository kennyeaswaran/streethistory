# Switchover — what is left, and whose it is

*Rewritten 2026-09-17 (evening) after the sheet-conflict pass. Numbers are
from that tree; `node check-legacy.js` and `node check-data.js` reprint them.
Instance mechanics: MODEL-IMPLEMENTATION.md's checklist.*

## Where things stand

| | |
|---|---|
| A vocabulary, B aliasing, E checker/CI | ✔ done |
| C — generator writes `streets-data.js` | vocabulary no longer re-emitted, preview loads site-config.js; **output path, header date, CI regeneration check still to do** |
| D — preview → index, old index deleted | not done; the three edits are listed at the top of preview.html |
| F — docs | pending the flip |
| gates today | `check-model.js` clean · `check-data.js` on generated: **1 error** (§1) · `check-legacy.js`: **57 hard** (22 coverage, 10 names, 25 namesakes), 30 accepted |

Done today: Everett (other instance), `test-review.js` (140/140, other
instance), St. Paul's (you kept the 6th Street row — right, it letters SIXTH
STREET), the Nichols trace, the Beaudry pair; Ward St's *vanished* trace
moved. The generator now handles a **revived name** (MODEL-SPEC §12's
decision, built): 9th Street (1849) → Moran's Lane (1873) → 9th (by 1893) is
three periods, not an error, and every such split is listed in
`generated/report.md` under "Revived names" because a row on the wrong
street looks the same — five are listed, and the two you did not know about
(15th/Laurel, Miramar/Seminary) want a glance. Also fixed: an unpinned later
spelling period sorted after the current name (Bixel's Lafayette Avenue).
Accepts written for the six streets, the freeways, the ExpressLanes and the
plazas (coverage, dates, the freeway names).

## 1. One conflict left, and one row to confirm — *you*

- **5th Street::3 (part of, "Ward St")** — `mr003-046-p2` (P. Beaudry
  Subdivision B, 1875) still has a `state` row WARD ST. → 5th Street
  (px 600,946 → 985,932, note "the southeastern modern branch follows the old
  Ward Street corridor") whose extent overlaps the same sheet's FIFTH ST. row
  on [−118.2609, −118.2595]. Same sheet, same date, two names on one
  interval: the trace move did not touch this row. Either the state row's
  extent ends where FIFTH begins, or Ward here is the vanished trace only.
- **`lah-1893-11-21` — Ord. 1915, Myrtle Avenue → Wall Street.** I added
  the change row (`whole-name`, says title / sec-1 / certification) but wrote
  it `confirmed: false`, so the generator holds it back until you read the
  excerpt and clear it. Until then Wall Street's return on the Myrtle stretch
  is "undated"; after, it is Nov. 13, 1893. Wall (1884, Nordholdt) → Myrtle
  (1886, Maple Avenue Tract) → Wall (1893) is in the revived list — worth
  checking the Nordholdt row is on the right street, since Wall predating
  Myrtle by two years is odd.

## 2. Coverage — *the tract-map instance, then accepts*

22 hard entries remain, and they are two holes, not twenty-two:

```
0%  3rd Street — east of Mission Rd (discontinuous)
  6%  3rd Street — Boylston to Figueroa
  6%  17th Street
 10%  Georgia Street
 13%  Boyd Street
 14%  8th Street — west of Figueroa
 18%  4th Street — west of Figueroa
 18%  James M Wood Boulevard
 19%  5th Street — west of Figueroa
 19%  6th Street — west of Figueroa
 20%  4th Street — east of Hewitt
 22%  7th Street — west of Figueroa
 27%  Willow Street
 29%  Cesar E Chavez Avenue
 31%  2nd Street — east of Alameda (Guadalupe St)
 32%  3rd Street — west of Bixel
 35%  Jesse Street
 40%  Vignes Street
 41%  2nd Street — west of Figueroa
 42%  7th Place
 43%  10th Street
```

- **Figueroa → Bixel / Crown Hill** on 2nd, 3rd (both stretches), 4th, 5th,
  6th, 7th, 8th, plus Georgia and 17th.
- **East of Hewitt / Alameda / Mission Rd** on 2nd, 3rd, 4th, plus Jesse,
  Vignes, Willow, Boyd, 7th Place, 10th, James M Wood, Cesar Chavez.

Whatever the instance's sheets do not reach: accept, one line each, with the
sheet you would have wanted as the reason.

## 3. Names the old map recorded that the new map does not — *fix or accept*

10 findings. What the corpus already holds for each:

| finding | evidence in the corpus | do |
|---|---|---|
| Boylston: "De La Guerra Street" | `ord-4093` note: the name was in the DRAFT only; Toll's motion changed it to Boylston before adoption | **accept** — never in force |
| Spring: "Calle Cuidado", "Calle de Caridad" | legacy itself says "unverified"; the Ord sheets letter PRIMAVERA. But `guinn-1912` (oldest-streets): "North Spring street, in the early years of the last century Calle Caridad" | Cuidado: **accept**. Caridad: a `state` row on *North* Spring from `guinn-1912`, if you want a secondary source drawing on the map — else accept |
| Main: "Calle Real" | nothing; legacy said "standard colonial designation", c. 1781 | **accept** |
| Los Angeles St: "Calle de los Negros" | not lettered on the recorder's copy of Ord sheet 53-69 (I looked: the plaza alley is drawn, unlabeled). `lah-1917-02-14` (rows 0): council orders the alley renamed | a change row in `lah-1917-02-14` needs a `calle-de-los-negros` entity and a sheet that letters it — none does. **accept** for now, with the 1917 doc as the reason |
| Broadway N: "Buena Vista" | `lah-1896-05-16`, `min-1893-04-10`, `lah-1899-05-06`, `lah-1908-09-22`, `guinn-1912` all mention it; none has rows | a real lineage (Eternidad → Buena Vista → North Broadway 1909) — **proceedings work** (ROADMAP §2), not a quick row |
| Traction: "Stephenson Avenue"; Ord: "Walters Street" | `lah-1890-10-28` (the ordinance), `lah-1890-11-09` / `-11-11` (the **mayor's veto**, "The Old Names Best") | a vetoed 1890 ordinance — was it re-passed? Proceedings work; **accept** until then, citing the veto |
| Cesar Chavez: "Macy Street" | `lah-1908-10-27` (Macy in a 1908 rearrangement); the 1994 renaming has no document | see §4 |
| Miramar: "Ocean View", "Nob Hill" | `lah-1896-05-16` "Avenues North of First St", `min-1893-04-10` mention Ocean View | see §4 |
| Court Street | on `mr006-138`, `mr007-026-p2`, `mr005-069`, `tr0014-097b` — all with rows | the name IS lettered; the finding is that no row lands on the legacy ground — check which street those Court rows are keyed to |

## 4. Legacy namesakes — *an instance*

25 findings, three groups:

**(a) Make the entity, nothing to rename — 13.** 4th Place, 7th Place,
Santee Alley, Toriumi Plaza, 14th Street, 18th Street, and the seven
freeways / ExpressLanes (their `namedAfter` prose and links are in the legacy
file; the ground is accepted, the namesake is not).

**(b) Existing entity, fill `namedAfter` — 5.** `grand-ave` ("Nothing
specific — chosen as a pleasant replacement for Charity"), `boylston`
("Boston's Boylston Street, suggested in 1897 by O. T. Johnson"), Delong
(George W. De Long), San Julian (possibly St. Julian the Hospitaller,
disputed), Court (descriptive, disputed).

**(c) A renaming the legacy file dates and sources, with no document in the
corpus — 7.** These are the "temporary renaming row" question:

| street | legacy claim | source | nearest primary |
|---|---|---|---|
| Judge John Aiso | San Pedro St → 1997 | lastreetnames | none |
| Onizuka | Weller St → 1988 | lastreetnames, lapl.org | none |
| Olympic (west of Central) | 10th St → 1935 | lastreetnames | none |
| James M Wood | 9th St → 1997 | lastreetnames | none |
| Cesar Chavez | Macy St → Mar. 31, 1994 | laist, Wikipedia | none |
| Venice | W. 16th St → 1938 | **CDNC** | a newspaper — encode it as a `news-report` with a real change row |
| Miramar | Ocean View 1886 → Nob Hill 1896 → Ocean View 1897 → Miramar 1915 | lastreetnames, two tract sheets | `lah-1896-05-16` / `min-1893-04-10` for Ocean View |

`history`-type documents cannot carry change rows (check-model, §5), and a
web page is not an ordinance. Two honest ways to draw these: (i) a new
document type for a **secondary compilation** (lastreetnames, Wikipedia),
allowed change rows with `basis: "secondary"` that the popup cites as such
— a MODEL-SPEC amendment for you to approve; or (ii) leave them as
entities with a namesake and no former name until a primary source turns
up, and accept the `names` finding. Venice and Miramar have primary leads
either way. Nothing "temporary" is needed: whichever you pick is the model's
real answer.

## 5. Accepts — *done for coverage; names next*

`legacy/accepted-differences.js` has 30 entries (six streets, freeways,
ExpressLanes, plazas; the freeway names). From §3, the next lines write
themselves: De La Guerra, Calle Cuidado, Calle Real, Calle de los Negros,
Stephenson, Walters.

## 6. Prose — *you, names tool*

`{{span}}` with no link: Spring, Angelina, Industrial, Wilde. Link with no
span: Mesquit.

## 7. Instance work, in order

1. §4 (a) and (b) — 18 entities, a names-tool session.
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
