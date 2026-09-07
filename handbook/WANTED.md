# Wanted: documents, and what each one unblocks

A standing shopping list, unlike `research-leads.md`, which is a dated log of
hunches. An entry here names a **document we do not have**, says what it would
unblock, and says where to look. Delete an entry when the document lands in
`documents/`.

Ordered by what it costs the map today, not by how interesting it is.

---

## P1 — a sheet lettering Georgia Bell Street (west downtown)

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
| Walters → Ord | 1890 | ⚠ found in the Oct. 1890 21-change omnibus (documents/lah-1890-10-28) — **which Mayor Hazard vetoed on Nov. 8.** A different instrument is needed for the 1890 date. |
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
