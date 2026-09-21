# Wanted: documents, and what each one unblocks

A standing shopping list, unlike `research-leads.md`, which is a dated log of
hunches. An entry here names a **document we do not have**, says what it would
unblock, and says where to look. Delete an entry when the document lands in
`documents/`.

Ordered by what it costs the map today, not by how interesting it is.

---

## P1 — a sheet lettering Georgia Bell Street (west downtown)

> ★★★ **SUPERSEDED IN PART, 2026-09-18 — WE NOW HAVE AN ORDINANCE NUMBER.**
> **Robinson 1884, Ordinance 97, p. 293: "Changing name of Turner, Pine,
> GEORGIA, Elm, Pacific and Rose streets."** Read off the volume's own list of
> ordinances (handbook/COMPILED-ORDINANCES.md). The page itself is not yet
> pulled, and it is the cheapest high-value page in this whole file: it names
> what Georgia became, and does the same for Elm and Rose in passing.
> ⚠ A renaming ordinance still does not PLACE the street — the sheet asked for
> below is what puts it on ground — but it dates and bounds the lineage, and it
> may name a successor street the corpus already holds.


**What it unblocks:** modern Georgia Street currently carries **no name entity
at all** and no history.

**Why.** `georgia-bell` is attested only in prose — Kines and the Herald's
Feb. 19, 1897 "A Storm of Words", which date the name but do not place it. It
has no `state` row anywhere in the corpus. Since the Feb. 1897 respelling row is
unqualified (§4 of the change-rows amendment), it applies wherever Georgia Bell
ran — and nothing says where that was, so it lands on nothing. Until 2026-09-04
the row carried `street: "Georgia Street"`, and that one authored field was
doing all the work: it put the entity on the pavement with no evidence behind
it, and it was also the only thing resolving the OSM bind, which is ambiguous
because `georgia-east` spells the same. Removing the fiction removed the street.

**Accepted, not a bug** (Kenny, 2026-09-04): the entity is simply not on any
pavement until a document puts it there.

**Where to look.** A tract map or survey covering the west-downtown blocks
between roughly 11th and Pico, west of Figueroa — the ground modern Georgia
Street runs on. Any sheet from 1874–1897 that letters *either* "Georgia" or
"Georgia Bell" there does it; the entity spans all three spelling periods, so
even a post-1897 sheet lettering "Georgia" on that ground would place it. A
Sanborn sheet or a city directory would serve too (handbook/SERIAL-SOURCES.md).

**Also fixed by the same sheet:** the `georgia-east` / `georgia-bell` OSM
ambiguity, which is reported on every build.

## P1 — Four ordinances by number: 16790, 16915/16916 and 48435 (Orange → Wilshire)

**Found as numbers 2026-09-18, off plat annotations. Never yet read as text.**

| Ordinance | What it should say | Status |
|---|---|---|
| **16790** | Orange Street, Figueroa to Alvarado → Wilshire Boulevard, ~June 1908 | struck off both plats after the repeal |
| **16915** and **16916** | the repeal; Orange restored, Dec. 1908 | unstruck on the plats, beside the surviving Orange |
| **48435** | Orange Street, Alvarado to Figueroa → Wilshire Boulevard, April 1924 | the one that held |

**What they unblock.** The change row `orange-st-wilshire` → `wilshire`, which is
still unwritten. Six newspaper documents report this renaming
(`lah-1908-07-14`, `lah-1908-12-05`, `laevex-1924-04-01`, `lae-1924-04-04`,
`lae-1924-04-07`, `lae-1924-04-12`) and **not one of them is the instrument** —
by RENAMING-SOURCES.md step 3, only the ordinance may carry the row. Ord. 48435
is the document that finally does it.

**Why this is unusually cheap.** We are not searching for an unknown document.
We have four numbers. The City Clerk's ordinance index turns them into dates and
Ordinance Book pages in one lookup, and the same lookup resolves the one thing
the plats cannot: **which number is which.** The assignment above is read off
where the pen struck, not from any index.

**Where to look.** Los Angeles City Archives & Records Center (Erwin Piper
Technical Center) — Ordinance Books, New Series. Same visit as Ordinance No.
4093 below.

⭐ **And the technique generalises**, which may matter more than these four
ordinances: **county plat copies carry ordinance numbers as marginal annotations**.
Where a newspaper gives a date and no number, the plat over that ground may give
the number. See handbook/RENAMING-SOURCES.md. Three more numbers were sitting on
the same two sheets unexamined — Kip Street established by **Ord. 36214**, a
portion of Kip Street vacated by **Ord. 46278** (both on `mr005-566`), and an
alley vacated by **Ord. 33107** with **Ord. 5347** beside it (on `mr055-014`).

## P1 — Ordinance No. 4093 (N.S.), Ordinance Book IV p. 337

The standing ⭐ target; request with the City Archivist since 2026-08.

**What it unblocks:** the 326-or-350-odd changes themselves, and specifically —

- **Boylston's extent.** `figueroa-gov → boylston` is `scope:
  "extent-unresolved"` and draws nothing, because read as unqualified it would
  rename the 1885 stretch south of Pico too. The ordinance says which stretch.
- **Three placeholder excerpts** in `documents/ord-4093/` (§12), which cite
  `PLACEHOLDER-` ids because there is no text to quote yet.
- **Whether the committee report's left column is ground or draft.** "Larkin
  Street | Fourth Street" is read by this repo as a real renaming, while
  "Alcantara Street | Taylor Street" from the same table names a street the
  commission only *proposed*. Both readings cannot hold; only the ordinance
  settles which line is which (amendment §10, form 5).

## P2 — the four compiled-ordinance volumes, 1878–1889 ⭐ NEW 2026-09-18

**Nobody on this project has ever looked at these, and they cover the corpus's
densest period.** Found while answering Kenny's question about whether UCLA
holds ordinance books in print.

| Volume | Compiler | Where |
|---|---|---|
| **1878** Revised charter and compiled ordinances and resolutions | Wm. M. Caswell | UCLA Law `KFX1621 .A6 1878`; SRLF→LSC `JS1001 .A8 1878`; **also a licensed e-book** |
| **1884** Compiled ordinances and resolutions | W. W. Robinson | UCLA Law `KFX1621 .A6 1884`; SRLF→LSC `JS1001.A9 A3 1884` |
| **1887** Compiled ordinances and resolutions, Vol. III | Freeman G. Teed | SRLF→LSC `JS1001.A9 A3 1887`; **also a licensed e-book** |
| **1889** Charter and compiled ordinances and resolutions, Vol. IV | Freeman G. Teed | UCLA Law `KFX1621 .A6 1889`; SRLF→LSC `JS1001 .A8 1889` |

**What they unblock — potentially a lot.** These are the ordinances *in force*,
indexed, published by order of the Council, covering 1850–1889. A compiled
volume of that era normally carries a streets chapter: opening, grading,
widening, vacating and **naming**. If the Feb. 1874 renaming ordinance, or any
of the 1870s–80s changes this project keeps dating by inference, was still in
force at compilation, the text is in one of these four books — with a number.

⚠ **WHAT THEY WILL NOT DO** is answer the outstanding numbers. They are
compilations of what was in force, not a register by number, and the series (as
UCLA holds it) stops at 1889. Ordinances **3829 / 3847 / 4093** (1896) and
**16790 / 16915 / 16916 / 48435** (1908, 1924) are still a City Clerk errand.
There is no published series anywhere that prints every LA ordinance by number.

⭐ **THE CHEAP SHOT FIRST:** the 1878 and 1887 volumes appear in UC Library
Search as electronic books with no holdings attached — probably Gale's *Making
of Modern Law*, which would open in a browser on the UCLA network with no
reading room and no request. Unverified; one click on campus settles it.

⚠ **Access is the annoying part**, and it is set out in handbook/IN-PERSON.md
§1b: the `KFX` copies are in the Law Library, which is closed to the public by
policy; the `JS` copies are off-site at SRLF **and** non-circulating, so they
need a Library Special Collections request **two business days ahead**, and LSC
is weekday-only. Request all four at once.

## P2 — Ordinance Book 11: No. 3829 at p. 460, No. 3847 at p. 496

**NEW 2026-09-06.** The Aug. 31, 1896 renaming ordinance — fourteen changes,
every one of them qualified by a stretch. The minutes give the number and the
book-and-page (documents/min-1896-08-31); the Herald of Sept. 3 gives the list
(documents/lah-1896-09-03). What the ordinance's own text would add:

- **The wording of each extent**, which is what the rows need. Four of the
  fourteen are on ground this project has but name a cross street it does not
  ("Short", "Orange", "Mesquite"); the ordinance may describe them differently,
  or by metes and bounds.
- **Whether the Herald's list is complete.** It reads like the whole ordinance
  and may be — but the same paper reported the Feb. 1874 ordinance as one
  renaming when it made three.
- It is one book away from Ord. 4093 in the same series and the same campaign:
  the article ends by saying another ordinance "making numerous changes" was
  already in preparation. Asking for all of them at once costs nothing extra.

**And the next one is thirty-six pages later in the same book.** Ordinance
**No. 3847**, adopted Sept. 8, 1896 and recorded at **Book 11 p. 496**, renames
nine streets in the southwest portion of the city. Its text is now in hand from
the Herald, with extents (documents/lah-1896-09-09) — which DROPPED its priority
but did not zero it: the minute book's copy of that same ordinance turned out to
be an abridgement, so the two secondary versions disagree about how much the
instrument said, and only Book 11 p. 496 settles what its wording actually was.
Ordinance Book 11 pp. 460 and 496, plus Ordinance Book IV p. 337, is one errand.

## P2 — a sheet lettering Vine Street (1st–2nd, Central Avenue)

`vine-central` has no `state` row either, and survives only because its 1897 row
is `scope: "extent"` — the committee minutes name the stretch ("Vine Street from
Second to First"). It is one re-reading away from Georgia's situation. A sheet
lettering Vine on that block would put it on evidence rather than on a quoted
extent.

⚠ **THERE ARE TWO VINE STREETS, five months apart (2026-09-06).** Ordinance
No. 3847 of Sept. 8, 1896 renames "Vine street, from Vermont avenue to Rosedale
avenue" to Twenty-fourth Street, in the southwest (documents/lah-1896-09-09).
That is a different street from this one and a different lineage; whoever
searches for a sheet lettering Vine must check which ground it is on before
binding anything.

## P3 — a pre-1890 map naming Bunker Hill Avenue

The Feb. 1874 council column mentions "the grade of Temple from Fort to Bunker
Hill Avenue" and an item "defining the lines of Bunker Hill Avenue". Fort Street
is modern Broadway, so it is west of Broadway along Temple — Hill, Olive, Grand
or Hope, and the text goes no further. "Declaring it a public avenue" would date
the pavement as well as the name. See `research-leads.md`.

## P2 — three renaming ordinances with a month to search on

The Feb. 1874 hunt showed the method works (handbook/RENAMING-SOURCES.md): a
month plus the City Clerk's date-filtered browser at
<https://clerkapps.lacity.org/oldcfidocs/> finds the ordinance, and the ordinance
settles mechanism, wording and scope at once. ✔ **Virgin → Alpine** (Aug. 22, 1887) and ✔ **Fort → Broadway** (by Feb. 20,
1890) both **FOUND 2026-09-04** — the first in the minutes at the first try, the
second in the Herald after the minutes for those dates turned out to be missing
(handbook/RENAMING-SOURCES.md §2a). One left.

**None of the incoming entities exists yet.** `alpine`, `broadway`,
`buena-vista` and `north-broadway` are all unminted, so each found ordinance
mints one — as `castelar` and `yale` were on 2026-09-04. Expect the same shape:
`scope: "whole-name"` unless the ordinance names a stretch, and the old entity's
public note losing its renaming sentence once a document carries it.

| renaming | month | what the data says now |
|---|---|---|
| **`eternity` → Buena Vista → North Broadway** | 1888, then Nov. 1909 | "Renamed Buena Vista in 1888, and folded into North Broadway in November 1909." Two changes, and only the second has a month. The 1909 one is late enough that the minutes may be typed rather than handwritten. |

Each of these currently rests on a public `note` sentence with no document
behind it — the same footing `bull` and `hornet` were on until the Feb. 1874
ordinance turned up and the sentences came out.

**NEW THREAD, 2026-09-06.** The Apr. 10, 1893 council minutes carry petition
No. 465, *"From Fred L. Alles et al. asking Council to appropriate the sum of
$25,000. to assist in the Opening of Broadway North to Buena Vista street"* —
the same petitioner who asked for Fort → Broadway in Feb. 1890. So the 1909
renaming had a sixteen-year run-up and a named advocate, and the physical
opening of Broadway northward is the thing that made Buena Vista's name
expendable. Two places to look next: the Board of Public Works' report back on
petition 465 in the weeks after Apr. 10, 1893, and the same paper trail around
Nov. 1909. (handbook/research-leads.md, 2026-09-06.)

## P3 — instruments for the remaining undated renamings

**2026-09-06: the CDNC phrase search reached 1883 and found five of these in a
morning** (documents/lah-1883-*). It finds council-proceedings items in the news
columns as well as published ordinances in the legal notices, which is more than
Step 2b predicted — so it is worth running across 1884–1895 before anything
else on this list is hunted street by street.

**★ TRY THE NEWSPAPER FIRST NOW, 2026-09-06.** Every renaming ordinance in this
corpus makes publication in a named paper a condition of taking effect (1874,
1887 and 1893 all say so), so each of these, if it was enacted, was PRINTED in
full over the City Clerk's certification — number, adoption date, mayor's
approval and operative sentence. Ordinance No. 1613 (documents/ord-1613) was
found that way after its minutes turned out to be missing. CDNC's Herald is
OCR'd; the minutes are not. Search the ordinance's own formula rather than the
street: "AN ORDINANCE CHANGING THE NAME", "changing the names of", "are hereby
abolished", "shall hereafter be known as". Full method, with caveats, in
handbook/RENAMING-SOURCES.md § Step 2b.

| renaming | date | as recorded |
|---|---|---|
| Charity → Grand | 1886–87 | petition by residents — ⚠ **"Charity" occurs zero times in 176 newspaper documents** under either name, though 1886–87 is inside the swept window. Either an unsearched paper, or the date is wrong. Note that Grand Avenue GREW: "changing the name of Philadelphia street to Grand avenue, as petitioned for by J. E. Fay et al., No. 639" (documents/lah-1895-07-02). So the name did not arrive in one act, and the Charity change may be a smaller piece of a longer assembly. |
| High → Walters | **1886-09-20, found** | "Presented an ordinance changing name of High street to Walters street. Adopted" (Herald, Sept. 21, 1886). Text not in hand; minutes not checked — handbook/MINUTES-TO-CHECK.md. |
| Georgia → Georgia Bell | **1889-05-10, resolved** | **Ordinance No. 48 (New Series)**, adopted Apr. 22, 1889, approved May 8, in force on publication May 10 — text in hand from the Herald of May 10, 1889, 212 changes. Forman's date exactly. Still unexplained: the Herald of Sept. 2, 1883 reports an ordinance adopted using the same new name six years earlier (documents/lah-1883-09-02). Pull the Sept. 1, 1883 minutes. |
| Walters → Ord | 1890–91 | ⚠ found in the Oct. 1890 21-change omnibus (documents/lah-1890-10-28) — **which Mayor Hazard vetoed on Nov. 8** and the council referred back to Public Works for amendment (lah-1890-11-11). **Kenny, CDNC 2026-09-18: "Ord street" is in print by 1891, "Walters street" as late as 1896, with "High or Walters street" and "Walter (Ord) street" in between** — the shape of an amended omnibus re-passed in early 1891, with the old names lingering in use. The instrument to find: the amended ordinance's passage, Herald Nov. 1890 – spring 1891 ("changing the names of certain streets"). Walters was in official use in May 1890 (documents/lah-1890-05-22). |
| Ruth ↔ Stanford / Crocker | after Feb. 1897 | unresearched — ⚠ **and there are other Stanfords.** "Stanford street" already exists in Mar. 1896 (documents/lah-1896-03-31), and in Dec. 1897 "Bellard street, in the Washington-street tract, should be changed to Stanford" (documents/lah-1897-12-07). Locate those two by geometry before assuming either is Ruth's. Crocker appears nowhere in 176 newspaper documents. |
| 10th → Olympic | 1935 (asked 1929) | the ask is found: the Tenth Street Improvement Association's petition, referred Aug. 20, 1929 (documents/lae-1929-08-21). The 1935 act is not. |

## Re-crops wanted (added 2026-09-06) — ✔ ALL RESOLVED 2026-09-06

- **LAH19110208.1.6** — "Plan to Rename Wesley Ave. Goes to Committee." The clip
  in hand is **93 pixels wide** (page crop 743 px, saved downsampled ×8). Only
  the headline is legible. Wanted at native width.
  (`documents/lah-1911-02-08`)
- **LAH19270629.1.9** — "Final Action Due on Main St. Change." Legible but faint;
  the cross street at the Wilmington end of the Huntington drive extent cannot be
  read. (`documents/lah-1927-06-29`)
- **LAH18990726.1.5** — the old name in "an ordinance changing the name of
  [?]tle avenue to Broadway" is in faded ink. (Pasadena; low priority.)
  (`documents/lah-1899-07-26`)
- **LAH18991011.1.7** — the clip ends mid-sentence after "South Fair Oaks and
  Marengo avenues"; the resolution of the two San Pasqual streets is on the page
  but outside the crop. (Pasadena; low priority.) (`documents/lah-1899-10-11`) [Kenny observes: this is actually the end of the sentence, and the next line begins a new paragraph.]

## Minutes wanted, highest value first (added 2026-09-06)

1. **1905-05-22** — disposition of the ninety-street ordinance after its recall
   from the mayor. Nothing from that ordinance can be used until this is read.
2. **1905-05-08** — the ninety-street ordinance as passed, if the book carries
   the list.
3. **1908-03-09..12** — the southwestern-district ordinance that Mayor Harper
   signed and that *did* take effect (~11 Apr. 1908).
4. **1900-01-08** — Garvanza renamed and renumbered entire.
5. **1919-09-30** — Sawtelle streets renamed for Civil War battles.
6. **1910-10-05 ff.** — the harbor and Hollywood annexation renaming ordinance.

Full worklist in `handbook/MINUTES-TO-CHECK.md § Third pass`.

## Provenance question (added 2026-09-06) — ✔ ANSWERED BY KENNY

**Confirm the CDNC paper codes.** 34 documents in the corpus are titled from three
codes that were never checked against a masthead:

- `DNLA` — read as the **Daily News (Los Angeles)**. 15 documents, 1924–1935.
- `LAE` — read as the **Los Angeles Evening Express**. 16 documents, 1923–1930. [THIS IS ACTUALLY THE LOS ANGELES EXAMINER]
- `LAEVEX` — also read as the **Los Angeles Evening Express**. 3 documents, 1924–1925.

Two codes for one paper is suspicious; `LAE` and `LAEVEX` may be two distinct titles.
One look at a CDNC title page settles all 34 document titles at once.

## Re-crop wanted (added 2026-09-06, second batch) — ✔ RESOLVED 2026-09-06

- **LAE19271018.1.9** — "1500 Fight New Main St. Name." Supplied at **120 pixels wide**;
  the headline and three paragraphs are legible, the rest is a best reading. This is the
  document that proves the 1927 Main Street ordinance was withheld, so it is worth
  having clean. (`documents/lae-1927-10-18`)

### ✔ Resolutions, 2026-09-06 (same day)

**Paper codes — answered by Kenny.** `LAE` is the **Los Angeles Examiner**, not the
Evening Express. `LAEVEX` is the **Los Angeles Evening Express**. Two codes, two
papers. All 15 `lae-*` documents were retitled; the three `laevex-*` documents were
already right. `DNLA` (Daily News, Los Angeles) is still unconfirmed but nothing has
contradicted it.

**Three re-crops supplied and applied.** Full-resolution scans replaced the
downsampled clips in `lah-1911-02-08` (93 px → 743 px), `lah-1927-06-29` (→ 660 px)
and `lae-1927-10-18` (120 px → 839 px). All three documents were rewritten from the
new scans. **Every low-confidence reading in the earlier versions turned out to be
correct**, and two things were gained:

- `lah-1927-06-29` — the illegible Wilmington cross street is **S street**. The full
  proposed extent was Main street from the northeast city limits at Mission road to S
  street, Wilmington. And the Herald really does say Huntington **drive** twice, so
  the drive/boulevard split against the Examiner and Daily News is genuine, not a
  misreading.
- `lah-1911-02-08` — the body was never readable before. Wesley avenue, Jefferson to
  Santa Monica, to University avenue, petitioned by USC; the **city engineer opposed
  it because the name had been on the street 30 years** (so since about 1881); the
  council carried it **6 to 3**, then O'Brien talked for fifteen or twenty minutes and
  got it reconsidered and committed — **all in one meeting**. A minute book showing
  only that vote would mislead.

**The 1899-10-11 clip is not truncated** (Kenny). The excerpt ends at a full stop and
the next line starts a new paragraph; which of the two San Pasqual streets kept the
name is simply not in the clipped column. Note corrected in the document.

**LAH18990726 is faded ink, not a bad crop** (Kenny). Corrected in the document.

## P2 — instruments for eight renamings dated only by secondary sources (added 2026-09-13)

The 34-name batch of 2026-09-13 turned up eight renamings that this corpus can now
*name* but cannot *source*. Each rests on Kines, Wikipedia or Los Angeles Revisited
with no instrument behind it, and each has a month or a year to search on — which is
exactly the shape Step 2b handles best (`handbook/RENAMING-SOURCES.md`). Remember
Step 2d: **search the successor name first.**

| renaming | date given | by whom | note |
|---|---|---|---|
| **Charity → Grand Avenue** | council vote **May 10, 1886**; official **Feb. 15, 1887** | Kines; Wikipedia | The best-dated of the eight and the oldest outstanding claim in this file. Kines quotes the *Los Angeles Daily Times* of May 11, 1886 — so the Herald of the same week should carry it too. |
| **Ozier Lane → Winston Street** | 1887 | Wikipedia | We have the June 1887 ordinance being **postponed** (`documents/lah-1887-06-14`). The act that carried it is later in 1887. |
| **Moore + Okey Streets → Francisco Street** | 1903 | Kines | Two streets in one act; Okey Street has no entity here. |
| **Requena Street → Market Street** | July 1904 petition | Los Angeles Revisited | Petition from the North Main Street merchants, approved by the council. |
| **Stephenson Avenue → Traction Avenue** | 1915 | Kines | Entity `stephenson-avenue` exists (2026-09-18). **Its origin is the same Oct. 1890 omnibus**: "Second street, from Alameda to east city line, to Stephenson avenue" (documents/lah-1890-10-28; the veto message, lah-1890-11-11, says the name "had been suggested in open council … because of its deflection to the south in Boyle Heights"). So the Traction end and the *other* Stephenson that became Whittier Boulevard are the two ends of one 1890 renaming, and the same amended-omnibus instrument that made Walters into Ord is what adopted it. Kenny found nothing further on Stephenson in CDNC (2026-09-18); a post-1891 sheet on Traction would letter it (shopping-list-2026-09-17b.md). |
| **Park Lane → Lebanon Street** | 1897 | Los Angeles Revisited | Pairs with Alexander Lane → Lebanon in 1917, already in `data/names.js`. No Lebanon Street entity yet. |
| **Turner Street (First to Alameda) → Jackson Street** | May 1883 | **we have it** — `documents/lah-1883-05-13` | Listed only because our 1928 sheet still letters Turner; the conflict needs settling before a row. |
| **Orange Street → Wilshire Boulevard** | Apr. 1924 | **we have it** — `documents/laevex-1924-04-01`, `lae-1924-04-12` | Fully documented; awaiting Kenny's confirmation, not more evidence. |

## P3 — three identity questions from the same batch (added 2026-09-13)

1. **Is the 1868 Beaudry Street the same street as modern Beaudry Avenue?** Our row on
   the Beaudry Tract (`documents/mr001-462`) is `vanished`; modern Beaudry Avenue
   survives to the west and north and is the cross street in
   `documents/ord-1887-08-22`. Kines treats them as one; the geometry has not been
   tested. A sheet covering both would settle it.
2. **Which Kohler Street is on our sheets?** Kines says the original ran where 9th
   Street now runs between San Pedro and Alameda; our four sightings (1887–1927) all
   look like the current street.
3. **When was Wilmington Street absorbed into North San Pedro Street?** Undocumented
   anywhere checked. Also resolve the Judge John Aiso date: Kines says 1997,
   Wikipedia 1999, and `data/names.js` currently says 1997 at `san-pedro`.
