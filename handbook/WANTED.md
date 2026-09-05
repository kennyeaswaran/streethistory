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

## P2 — a sheet lettering Vine Street (1st–2nd, Central Avenue)

`vine-central` has no `state` row either, and survives only because its 1897 row
is `scope: "extent"` — the committee minutes name the stretch ("Vine Street from
Second to First"). It is one re-reading away from Georgia's situation. A sheet
lettering Vine on that block would put it on evidence rather than on a quoted
extent.

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

## P3 — instruments for the remaining undated renamings

| renaming | date | as recorded |
|---|---|---|
| Charity → Grand | 1886–87 | petition by residents |
| High → Walters | 1886 | — |
| Georgia → Georgia Bell | 1889 | — |
| Walters → Ord | 1890 | — |
| Ruth ↔ Stanford / Crocker | after Feb. 1897 | unresearched |
| 10th → Olympic | 1935 (asked 1929) | — |
