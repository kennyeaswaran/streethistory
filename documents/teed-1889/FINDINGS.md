# Teed 1889, Vol. IV — findings

Read 2026-09-19 by a Claude instance. 744 PDF pages, no text layer: rendered at
200 dpi and OCR'd whole with tesseract, then every line that appears in
`teed-1889-contents.md` re-read by eye against a 300 dpi render, and every
sentence quoted anywhere in these files read by eye at 300 dpi before quoting.

---

## 1. The October 1888 cull is not in this volume, and it never could have been

**The question the volume was opened to answer.** `documents/lah-1888-10-11`
holds the special committee's duplicate-name list of Oct. 11, 1888, and by
`handbook/RENAMING-SOURCES.md` step 3 it cannot carry a row because it is a
committee report, not an instrument. The hope was that an ordinance in this
volume enacted it.

**It does not, and the negative is airtight rather than merely empty.** The
volume prints a complete LIST OF ORDINANCES at PDF 81-84, Nos. 318-432, each
with a title. It is transcribed line by line in `teed-1889-contents.md` section 2.
Exactly three of the 115 ordinances touch a street's name, and each renames one
street:

| No. | change | adopted |
|---|---|---|
| 320 | Ogier lane to Winston street | July 5, 1887 |
| 345 | Virgin street to Alpine street | Aug. 22, 1887 |
| 381 | New Cincinnati street, Temple to Bellevue, to Edgeware road | Mar. 12, 1888 |

There is no ordinance titled anything like "changing the names of certain
streets". A full-text search of the OCR of all 744 pages returns the phrase
"changing the name" on five pages only, and all five are those three ordinances
and their two list entries. The volume's own subject index has a **"Streets"**
heading with two lines under it — "regulating the tearing up of" and "grading of
certain, accepted and ordered paid for" — and nothing else.

**The window is not the problem.** Ordinances 414-421 run from Sept. 11 to
Nov. 5, 1888; 428 is Nov. 30; 430 is Dec. 10; 431 is Dec. 17; 432 was adopted
Dec. 7 and approved Jan. 3, 1889. The volume sits squarely across October 1888.

**And here is why it could not have been here.** The charter this volume prints
was ratified Oct. 20, 1888 and approved by the Legislature in January 1889, and
it restarted the ordinance numbering. The cull was enacted under the **New
Series**, as **Ordinance No. 48 (N.S.)**, adopted Apr. 22, 1889, approved May 8
and in force on publication May 10 — which this project **already holds**, fully
transcribed on 2026-09-18, as `documents/lah-1889-05-10`, 207 clauses and 212
changes, with rows. The chain in that file's header is: committee list Oct. 11,
1888 → adopted Feb. 5, 1889 → vetoed by Mayor Bryson Feb. 18 → reconsidered and
re-referred Feb. 25 → re-adopted Apr. 22 → in force May 10.

So: **Vol. IV is the last volume of the old series, and the cull is the new
series' first big act.** The prize was claimed the day before this pass began.
What this volume adds is the *proof of the boundary* — the old series ends at
No. 432 and nothing in it renames streets in bulk — which is worth having,
because it closes the search rather than leaving it open.

**Practical consequence for `handbook/COMPILED-ORDINANCES.md`:** its priority
list should be updated. Teed 1887 (Vol. III) Ords. 207, 242 and 314 — the three
omnibus renamings — remain the best unread targets in the series. Vol. IV can be
struck from the hunt.

## 2. What was found instead

### Ordinance No. 320 — the act `names.js` says is WANTED

`winston-st`'s `internalNote` ends: *"No change row written: the June ordinance
was postponed and the act that carried it has not been found (WANTED)."*

It is Ordinance No. 320, "An Ordinance changing the name and establishing the
lines of Ogier lane", adopted July 5, 1887, approved July 7 by Mayor W. H.
Workman, published in the Los Angeles Daily Tribune July 8. Full text and a
change row in `documents/ord-320/`. The row draws, because `ozier-lane` is
lettered on `documents/mr005-110` along modern Winston Street.

⚠ It is also a **re-location**: Sec. 2 vacates whatever of the old lane falls
outside the new lines, which are defined by a map — "Plat showing proposed
re-location of Ogier lane, said lane to be called and designated in the future
Winston street" — **filed with the Clerk of the Council June 13, 1887**. That
plat is not in this corpus. It is a precise, dated, citable thing to ask the
City Archivist for, and it would say how far the corridor moved.

### Ordinance No. 345 — the number the ledger left blank

`documents/ord-1887-08-22` is the minute-ledger copy of the Virgin Street
ordinance and records "Ordinance No. —". The printed copy at p. 117 gives
**345**, plus the approval (Aug. 30, 1887, L. N. Breed, Mayor pro tem.) and the
publication date (Sept. 2, 1887 — the day it took effect). `documents/ord-345/`,
with **no rows** and a `TASK.md` explaining the decision that belongs to Kenny.

★ It also settles a methodological worry. `RENAMING-SOURCES.md` section 2c warns
that a minutes copy can be an abridgement, on the evidence of Ord. 3847 in 1896,
and says of the 1874 and 1887 minutes copies: "Nothing disproves it, and nothing
supports it either." This is the first direct comparison in the corpus of a
ledger copy against the official print of the same ordinance, and **they agree
word for word**. The ledger was not abridging; Virgin to Alpine really is
unqualified.

### Ordinance No. 381 — a qualified renaming with both ends on the modern map

"That the name of New Cincinnati street in the City of Los Angeles **between
Temple street and Bellevue avenue** be, and the same is, hereby changed to
Edgeware road." Adopted Mar. 12, 1888; published in the Los Angeles Evening
Express Mar. 21. `documents/ord-381/`, with a `scope: "extent"` row: Edgeware
Road, Temple Street to Bellevue Avenue, both crosses 0 m in the OSM extract.

## 3. Names the shortlist was told to hunt, and what the volume says about each

| name | what Vol. IV has |
|---|---|
| **Lemon** | Alive on **Nov. 30, 1888**: Ordinance No. 428 is indexed "Ninth street, lines of, **west of Lemon street**, changed and defined". ⚠ Ninth-and-Lemon is west-side ground, not the Arts District, so this may well be a *different* Lemon from `lemon-st-arts-district`. It does not by itself contradict the Lemon → Wilson reading. |
| **Wilson** | Absent. No Wilson street anywhere in the index of a volume that indexes every street the council touched in eighteen months. ⚠ Weak evidence (a street with no council business does not appear), and the same caveat COMPILED-ORDINANCES.md already records for 1878 and 1884. But it is a third silence in a row. |
| **Charity** | Absent. Consistent with Teed 1887 Ord. 286 having already made it Grand Avenue. Nothing here decides the Viole 1904 "Charity St." question. |
| **Texas / Belmont** | Texas absent — consistent with Teed 1887 Ord. 275 having made it Belmont. **Belmont avenue** is alive and busy: graded Temple to Bellevue (Res. 940), Diamond to Silver (Res. 1266), and **Ordinance No. 368 vacates part of it** at the Diamond street corner, described against J. W. Ellis' subdivision of lots 2 and 3 of block 38, Hancock's Survey (M.R. 10-38). |
| **High** | Absent as "High street". **New High street** is present (Res. 1270, grade of east side, Temple to Sonora, changed). |
| **Short** | Absent — consistent with Teed 1887 Ord. 152 having folded it into Bellevue avenue. **Canal and Reservoir** are *not* absent: **Ordinance No. 390 vacates a portion of the "Canal and Reservoir ditch"**, which is the water feature the same 1887 ordinance named. |
| **Georgia** | Two of them, both alive in 1888, and see section 6. (a) **Georgia Bell street**, graded Rouland to Washington, Res. 850, Apr. 16, 1888. (b) A plain **Georgia street** in the Arts District, as a terminus of Hewitt street: "Hewitt street, resolution of intention to grade, **between First and Georgia streets**" (Res. 1086). That is `georgia-east`, the name modern 3rd Street east of Alameda carried, still in force at the end of 1888. |
| **Alabama** | Present: graded "from Lake Shore avenue to State street" (Res. 682, changed by Res. 1229). That is the Angeleno Heights Alabama of `alabama-street`, beside State Street exactly as the 1883 Hancock sheet has it. |
| **Virginia** | Present as **Virginia avenue**, Boyle avenue to Soto street (Res. 647, 654, 767, 808, 855). Boyle Heights, not the Angeleno Heights `virginia-st-angeleno-hgts`. |
| **Fort** | Alive and much-worked: **Ordinance No. 415** provides for widening and improving it between Second and Ninth streets; graded, paved, sewered and sidewalked under a dozen resolutions. Its 1888 extent as a name is therefore Second to Ninth at least, which brackets the Feb. 1890 Fort → Broadway change. |
| **Pearl** | Alive. **Ordinance No. 367 vacates certain portions** of it north of College street, described against the **Victor Heights tract** and a V. Beaudry deed (Book 177, p. 381), and distinguishing "Old Pearl street" from "Pearl street as at present located". That is a re-location on the Pearl corridor eight years before Pearl became Figueroa. |
| **Court** | Alive: Court street and **Court circle** both graded (Res. 1050, 1051, 1054, 694, 875, 922, 992, 1277). |
| **Teed** | ⚠ **No Teed Street.** Freeman G. Teed signs every certification in the volume as Clerk of the Council and compiled it, and there is no street of that name in the city he clerked for in 1887-89. That is a real, dated negative for `teed-street`, whose naming is `inferred`: whoever Teed Street honours, the street did not exist under that name while this Teed was City Clerk. |

## 4. Things I could not settle, and one I could not read

- **Ogier or Ozier?** The city's own printing says **Ogier** — in the ordinance
  twice, in the LIST OF ORDINANCES once and in the index twice. The corpus's ink
  says **Ozier** — the 1881 Rivara and Vignolo plat (`mr005-110`) and the Herald
  of June 14, 1887. `names.js` → `ozier-lane` currently says "our ordinance and
  our 1881 sheet both say 'Ozier'", which was true of the Herald's report and is
  not true of the ordinance. **Recommendation (names.js is yours):** add "Ogier
  Lane" as a second spelling, or at minimum correct that sentence in the
  `internalNote`. It also weakens the refutation logged there — the Judge Ogier
  attribution was rejected partly because "our" spelling was Ozier.
- **The June 13, 1887 re-location plat** for Ogier lane, cited by Ord. 320 and
  filed with the Clerk. Not in the corpus, not in this volume, and the only
  thing that would say how far the lane moved.
- **The fold on PDF 121.** The Gale scan of the leaf carrying Ord. 345 has a
  corner of paper lying across the right third of the text block. Every word is
  still legible and the transcription is complete, but the affected words are
  listed in `ord-345-transcription.md` so a second reader knows where to look
  hardest.
- **I did not transcribe the LIST OF RESOLUTIONS** (PDF 238-249, Res. 543-1303).
  Every entry in it is reachable under its street's name in the index, which is
  transcribed in full, and the index states extents while the list does not.
  That was a judgement about value, and it is reversible.
- **I did not read the 1889 charter itself** (PDF 9-79), beyond the ward
  boundaries. ★ Those *are* worth someone's time: Article II describes the four
  wards street by street ("Main street, from Marchessault street to First
  street; southerly by First street, from Main street to Canal street; thence
  along Canal street to Diamond street…"), which is a dated, official statement
  of which streets ran where in 1888. It is the single best unexploited thing
  left in the volume and it belongs in `documents/_charters/`.
- **No second reader.** Everything here was read by one instance. The type is
  clean 1889 roman and nothing was doubtful at 300 dpi, but rule 5 is not
  satisfied on any of it.

## 5. ⚠ Decide: two instruments renaming New Cincinnati street

`documents/ord-381` (this pass) and `documents/lah-1889-05-10` clause c041 both
change New Cincinnati street to Edgeware road, fourteen months apart, over
different stretches:

| instrument | date | stretch |
|---|---|---|
| **Ord. 381** | Mar. 12, 1888 | Temple street to Bellevue avenue |
| Ord. 48 (N.S.) c041 | Apr. 22, 1889 | "from or near **Court** street" to Bellevue avenue |

Court Street is south of Temple Street, so 1889 carried the change further
south rather than repeating it. The corpus now holds two change rows with the
same `from` and `to` at two dates — mine `scope: "extent"`, the 1889 one
`scope: "whole-name"`.

**What needs deciding:** whether the 1889 row should become `scope: "extent"`
(Court to Bellevue) so the two do not fight, or whether the 1888 ordinance
should be read as having been ineffective and the 1889 one left as the single
act. The corpus already carries one flagged re-enactment of exactly this shape —
Ord. 48 clause c058, Elm to Olive, which Ord. 207 had already done in 1886 — and
that one was parked as `extent-unresolved` for the same reason. I have not
touched `lah-1889-05-10`.

## 6. ⭐ Decide: Georgia Bell Street exists in April 1888, and that explains the 1883 report

This is the biggest thing in the volume after the three ordinances, and it comes
out of a grading resolution.

**Resolution No. 850**, adopted **April 16, 1888**, approved April 21, published
April 24 (PDF 449, printed p. 431), read by eye at 300 dpi:

> "A RESOLUTION of the Mayor and Council of the City of Los Angeles to establish
> the grade of **Georgia Bell street, from Rouland street to Washington
> street**. … SECTION 1. That the grade of Georgia Bell street, from Rouland
> street to Washington street, be and the same is hereby established as follows:
> At the intersection with **Rouland** street … at the intersection with
> **Montgomery** street … at the intersection with **Ocean** street … at the
> intersection with **Washington** street …"

`names.js` → `georgia-bell` → `internalNote` ends on precisely this puzzle:

> "What is now unexplained is the 1883 item, which is a contemporary report of an
> adopted ordinance using the same new name six years earlier — either it did not
> take effect, or it was later undone, or it is a different Georgia."

**Res. 850 answers it: it took effect.** The city was officially grading a
Georgia Bell Street in April 1888, thirteen months before Ordinance No. 48. And
the same index shows what lay immediately north of it: **Nevada street**, graded
"between Pico and Rowland streets" (Res. 874, 923, 990). Rouland is modern
Venice Boulevard; Washington is south of it and Pico north of it. So in 1888 the
corridor was **Georgia Bell south of Venice, Nevada north of it** — and Ord. 48
of 1889 did exactly what this entity's own comment guessed: it folded the Nevada
stretches into a name that already existed.

**What that changes.** `georgia-bell`'s second spelling period is dated
`from: "1889"` on Gen. Forman's 1897 recollection. On this evidence 1889 is the
date the name reached its full length, not the date it was coined; the 1883
Herald report is the coinage. ⚠ **I have not touched `names.js`.** The date
change is a judgement, and there is a real alternative reading — that the 1883
name held only on the southern blocks and the entity should be split.

**A row is available and I deliberately did not write it.** `georgia-bell` is
the worst HARD coverage item on the switchover list at 10% attested, and this
would be a dated `state` row with four cross streets. I stopped because I cannot
say *which modern street* carries the 1888 Georgia Bell between Venice and
Washington: the entity's only lettering in the corpus is `tr0030-086`, where
part of it is a `vanished` trace, and resolving Rouland-to-Washington onto
modern pavement is a map-tool job, not a transcription. Writing it blind would
be exactly the unqualified row the brief warns against. **The draft, ready to
place once the corridor is identified:**

```js
{ kind: "state", name: "georgia-bell", asWritten: "Georgia Bell street",
  street: "<modern street>", from: "Venice Boulevard", to: "Washington Boulevard",
  says: ["res-850-georgia-bell"],
  note: "Res. 850, Apr. 16, 1888. Crosses Rouland (modern Venice), Montgomery, "
      + "Ocean and Washington. The earliest dated official use of the name." }
```

**Same shape, same reason, for Winston.** **Resolution No. 624** (PDF 307,
printed p. 290; the resolution before it was adopted Sept. 26, 1887) establishes
"the grade of **Winston street from Main street to San Pedro street**", naming
the intersections of Main, **Los Angeles**, **Wall** and San Pedro. That is a
clean extent on a street that still exists under that name, weeks after
Ordinance No. 320 created it. ⚠⚠ And it makes trouble for Ord. 48's clause c081,
which has Shaw street running "from Wall street to San Pedro, between Fourth and
Fifth streets" until April 1889 — the city was already grading that block as
Winston street in the autumn of 1887. Another name in use before it was
official, like Winston itself on Mills' Tract in 1886.

```js
{ kind: "state", name: "winston-st", asWritten: "Winston street",
  street: "Winston Street", from: "Main Street", to: "San Pedro Street",
  says: ["res-624-winston"],
  note: "Res. 624, autumn 1887. Names the intersections of Main, Los Angeles, "
      + "Wall and San Pedro — so the whole downtown run was Winston within weeks "
      + "of Ord. 320, including the Wall-to-San Pedro block Ord. 48 calls Shaw in 1889." }
```

⚠ **Why neither is written.** Both excerpts are on `teed-1889`, which this pass
was told to keep rowless, and a grading resolution is not an `ord-<number>`
folder. Both rows want a folder of their own — `documents/res-624/` and
`documents/res-850/` — or a decision to let `teed-1889` carry rows after all.
That is Kenny's call. The excerpts are already in `teed-1889.js` with the
verbatim text, so placing the rows is a copy step, not a re-reading.

## 7. Recommendations, in order

1. **Update `handbook/COMPILED-ORDINANCES.md`.** Vol. IV is read; the cull is
   Ord. 48 (N.S.) and is already in the corpus. The remaining targets in the
   series are Teed 1887 Ords. 207, 242, 314 (the omnibus renamings) and 286
   (Charity to Grand), and Robinson 1884 p. 293 (Ord. 97).
2. **Decide ord-345 vs ord-1887-08-22** (`documents/ord-345/TASK.md`), and put
   "Ordinance No. 345" into whichever document ends up the instrument of record.
3. **Decide section 6** — the Georgia Bell date — and place the two `state` rows.
4. **Decide section 5** — the two New Cincinnati instruments.
5. **`names.js`, all of it yours:** `ozier-lane` (the Ogier spelling, section 4);
   `winston-st` (strike "WANTED", cite Ord. 320); `alpine` (cite Ord. 345);
   `georgia-bell` (section 6); `teed-street` (the 1887-89 negative, section 3).
6. **Read the charter's ward boundaries** (PDF 12-14) into
   `documents/_charters/`. Dated official street geography, 1888, free.
7. **Ask the City Archivist for the June 13, 1887 Ogier lane re-location plat**,
   cited by name and filing date in Ord. 320 section 1.

## 8. What is on disk from this pass

```
documents/teed-1889/teed-1889-contents.md          offset table, LIST OF ORDINANCES, full INDEX
documents/teed-1889/teed-1889-street-ordinances.md the shortlist
documents/teed-1889/teed-1889.js                   the volume, rowless, 12 excerpts
documents/teed-1889/FINDINGS.md                    this file
documents/ord-320/ord-320.js                       1 change row  (ozier-lane -> winston-st)
documents/ord-320/ord-320-transcription.md
documents/ord-345/ord-345.js                       0 rows, by decision
documents/ord-345/ord-345-transcription.md
documents/ord-345/TASK.md
documents/ord-381/ord-381.js                       1 change row  (new-cincinnati-st -> edgeware, extent)
documents/ord-381/ord-381-transcription.md
```

**Two rows written. Four deliberately not written:** the duplicate
virgin-to-alpine (section 2, already carried by `ord-1887-08-22`), the two
`state` rows of section 6 (no modern corridor established for one, no sanctioned
folder for either), and nothing at all on the thirty-odd vacation, widening and
lines-defining ordinances of section 2 of the shortlist, whose extents are metes
and bounds against 1888 monuments and lot corners that this corpus cannot place.

A scratch directory of renders and OCR is at `tmp/teed1889/` (744 JPEGs at
200 dpi, 744 OCR text files, and the 300 dpi pages used for the by-eye pass).
It is ~350 MB and can be deleted; nothing in the documents depends on it.

`node check-model.js` passes: 328 entities, 404 documents, 4318 rows, no errors.
