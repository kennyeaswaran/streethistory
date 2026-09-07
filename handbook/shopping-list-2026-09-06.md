# Download shopping list

Opened 2026-09-06 for Georgia/Mott/Maple/Wall/San Julian, closed the same day,
reopened for Los Angeles Street and then for Temple/First/Second. Newest batch
first; the closed batch and its outcomes follow.

## Temple, First and Second Streets, Main to Alameda

Sampled 2026-09-06. **Only First Street has anything.** Temple and Second are
covered entirely by 20th-century filings; large stretches of all three have no
addressed parcel at all, because the ground is civic superblocks.

### The two worth having — new, 19th century, M.R.

| Street | Tract | Map-Ref | Sampled at | PDF |
|---|---|---|---|---|
| 1st, Los Angeles-San Pedro | **Subdivision of the Garden of J. Murat** | **M R 10-8** and **M R 1-616** | 250 E 1st St, Lot 15D (APN 5161016014) | https://pw.lacounty.gov/sur/nas/landrecords/misc/MR010/MR010-008.pdf and https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-616.pdf |
| 1st, near Alameda | **Johnston Tract** | **M R 2-92/93** | 600 E 1st St, Lot 1 (APN 5163002030) | https://pw.lacounty.gov/sur/nas/landrecords/misc/MR002/MR002-092.pdf |

All three PDFs existence-checked: real scans, no OCR layer. M R 2-92/93 is a
two-sheet filing, so expect both sheets inside `MR002-092.pdf` (the pattern
confirmed at 3-166 and 2-504).

- **The Murat parcel reports TWO Map-Refs**, M R 10-8 *and* M R 1-616 — the
  only parcel in any of these batches to do so. Book 1 is among the earliest
  filings in the series and book 10 much later, so this is very likely an
  original and a resubdivision of the same garden, both still cited. Worth
  fetching both and reading them against each other.
- **"Garden of J. Murat"** puts a French name beside the Californio garden and
  vineyard tracts this project has been accumulating — Urquidez Garden (San
  Julian), Moreno Vineyard (Wall), Celis Vineyard (Maple), Rivara and Vignolo
  (Los Angeles St). A named garden rather than a surname tract; the title dates
  the older land use as well as the subdivision.

### Already covered

700 E 1st St is the **Thomas Tract**, M R 3-60/61 — `documents/mr003-060-p1`
and `-p2`, already swept. That is the sheet whose full title reads "being a
portion of the Johnson and Mott Tract".

### 20th-century Map Book sheets — filenames resolved

These letter the streets at their own dates, which is a later stage of the same
names rather than nothing. All six filenames resolved.

| Street | At | Tract | Map-Ref | PDF |
|---|---|---|---|---|
| Temple | 255 E | TR 1101 | M B 20-196 | https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0020/TR0020-196B.pdf |
| Temple | 450 E | TR 9771 | M B 145-62 | https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0145/TR0145-062.pdf |
| 1st | 350 E | TR 30211 | M B 885-30/31 | https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0885/TR0885-030.pdf |
| 2nd | 350 E | TR 36511 | M B 938-51/53 | https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0938/TR0938-051.pdf |
| 2nd | 450 E | TR 35332 | M B 926-86/87 | https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0926/TR0926-086.pdf |
| 2nd | 601 E | TR 62057-C | M B 1339-69/71 | https://pw.lacounty.gov/sur/nas/landrecords/tract/MB1339/TR1339-069.pdf |

`TR0020-196B` was pinned by the **tract-number search** rather than the book
listing — see TRACT-RESEARCH.md.

**TR0020-196B is the one that letters MARKET STREET.** Sampled at 255 E Temple
St, so the sheet sits at Temple and San Pedro on the Little Tokyo edge. Its
title block: *"Tract No. 1101, being a Resubdivision of Lots 62, 63, 64, 65,
66, 71, 72 and 73, Property of Don Manuel Requena, as per map recorded in Book
3, pages 146-147 of Miscellaneous Records; Lot 8 of the Requena Tract as per
map recorded in Book 737, page 155 of Deeds; also a portion of the City Lands
of Los Angeles as per map recorded in Book 3, pages 64 and 65 of Patents …
Surveyed July 1912 by Felix Viole C.E. … Owner — Edward Lloyd. Recorded July
24, 1912."* It draws **MARKET ST** running diagonally with **SAN PEDRO ST**
alongside, Lot A between them, and cites the neighbouring Tract No. 3
(M B 13-105).

**Market Street is gone.** No addressed parcel survives on it: the only Market
St the city geocoder knows is in Venice (90291), an unrelated street, and the
project's own OSM geometry has no Market Street either — only "Marketplace",
the modern spur off Broadway that `mr001-489` already excludes from coverage.
So this 1912 sheet is a dated attestation of a street that no longer exists,
and the pipeline can never reach it from a modern parcel.

**Worth pulling next — the Requena sheet the tract resubdivides:**

| Tract | Map-Ref | PDF |
|---|---|---|
| **Property of Don Manuel Requena** | **M R 3-146/147** | https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-146.pdf |

Existence-checked; a real scan. Two-sheet ref, so expect both pages inside the
one file. This is the 19th-century ancestor of the Market Street block and
should letter the street far earlier than 1912. Manuel Requena is also a
Solano-Reeve subject — "Los Angeles : Manuel Requena parcel" is in the
Huntington collection — and Requena Street survives downtown. The multi-page refs (885-30/31, 938-51/53,
1339-69/71) each resolve to a single file at the first page, the same pattern
as the M.R. books.

**Second Street between Main and Alameda has no 19th-century plat left.** Every
sample returns a late Little Tokyo redevelopment tract, and between Main and
San Pedro there is no addressed parcel at all. Same species as the Molino
Street and Dunigan blockages: the original small-lot fabric was consolidated
away, so the street can't be dated from a 19th-century parcel here — but the
sheets above still letter it in the 1960s-80s.

### No addressed parcels — NEGATIVE

The geocoder returns nothing for 100-200 E Temple, 100-150 E 1st, and 100-300
plus 500 and 700-800 E 2nd. These are the Civic Center and Federal Courthouse
superblocks and the Little Tokyo redevelopment: no parcel, so no lookup is
possible. Don't retry these addresses.

## Los Angeles Street, 7th up to the Plaza

Sampled 2026-09-06 at 700, 600, 540, 500, 430, 400, 300, 200 and 103 S and
100 N / 300 N. **The street changes character halfway up**: 19th-century
Miscellaneous Records filings from 7th to about 2nd, then nothing at all.

### The three worth having — new, 19th century, M.R.

| Near | Tract | Map-Ref | Sampled at | PDF |
|---|---|---|---|---|
| 5th | **Rivara and Vignolo Tract** | **M R 5-110** | 500 S Los Angeles St, Lot 8 (APN 5148018026) | https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-110.pdf |
| 4th-5th | **Jones and Ponet Block** | **M R 39-69** | 430 S Los Angeles St, Lot 2 (APN 5148010027) | https://pw.lacounty.gov/sur/nas/landrecords/misc/MR039/MR039-069.pdf |
| 4th | **Mills' Tract** | **M R 12-26** | 400 S Los Angeles St, Lot 15 (APN 5148007001) | https://pw.lacounty.gov/sur/nas/landrecords/misc/MR012/MR012-026.pdf |

All three existence-checked: real scans, no OCR layer. Rivara and Vignolo is a
fourth Californio/immigrant landholding name in this district, alongside
Urquidez, Moreno and Celis.

**Mills' Tract is a live lead, not just coverage.** `research-leads.md` carries
an open question about H. W. Mills, third owner of the Orchard Tract, and
whether he is the Mills of the "Mills and Wicks Subdn." at M.R. 13-87/88. This
sheet is a *third* Mills datapoint: M.R. 12-26 sits one block from the Orchard
Tract's own frontage (M R 5-5, at 3rd), and it is in the same book as the
Bliss Tract sheet M.R. 12-42 where the Mills and Wicks margin note was found.
Reading its title block may settle the question outright.

### The four 20th-century Map Book sheets — filenames resolved

| Near | Tract | Map-Ref | PDF |
|---|---|---|---|
| 7th | TR 1489 | M B 20-3 | https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0020/TR0020-003.pdf |
| 6th | **6th St. Terminal Tract** | M B 9-100 | https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0009/TR0009-100a.pdf |
| 5th-6th | **Sumner and Garibaldi Tract** | M B 12-129 | https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0012/TR0012-129.pdf |
| 2nd | **Perry-Hellman Property** | M B 5-49 | https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0005/TR0005-049b.pdf |

Three of these hit the suffix gotcha and were settled by opening the sheets
through the Google viewer and reading the title blocks. The decoys are worth
recording, because the guessable filename was wrong in both cases:

- `TR0005-049a` is *See Tract, a subdivision of part of Block F, Formosa Tract*
  — Hollywood. There is no plain `TR0005-049.pdf` at all.
- `TR0009-100` is the *Dunning Tract*, also Hollywood, and carries the marginal
  note "Jackson Way changed to St Andrews Place, Ord. 25382".
- `TR0012-129` was the plain filename and IS the right sheet — so the suffix
  rule cuts both ways and cannot be guessed either direction.

**What these three actually give.** They are not just late coverage:

- **`TR0005-049b` — Perry-Hellman Property.** "Map of Lot A … being the
  property of H. W. Hellman and W. H. Perry, surveyed in July 1903 … Recorded
  Mar. 7, 1904." Letters **LOS ANGELES ST** and **SECOND ST** at the corner
  directly. Surveyor: **V. J. Rowan** — the same name as the 1887 city map
  already cited here and the Rowan Tract on San Julian.
- **`TR0012-129` — Sumner and Garibaldi Tract**, V. J. Rowan & **E. T. Wright**,
  March 1907, recorded May 6 1907. Its title says it is "a subdivision of a
  portion of Block B, **Rivara and Vignolo Tract**, as per map recorded in Book
  5 Page 110 Misc. Rec." — which independently confirms M R 5-110 above, and
  gives the two plats as an explicit before/after pair on the same ground.
  E. T. Wright also surveyed both halves of M R 5-307.
- **`TR0009-100a` — 6th St. Terminal Tract**, recorded Mar. 2 1906, proprietors
  the Huntington Land & Improvement Company and the Pacific Electric Land
  Company, with a "Widening of Sixth St." note. Its preamble chains back through
  a run of earlier filings worth chasing on their own: the **Maria Antonia
  Machado Reyes Tract** (Book 1 page 298 M.R.), the **Kerckhoff Tract** (Book 4
  page 122), a **Cox Bros. subdivision** (Book 5 page 198), and **Reyes Vineyard
  Property** (Book 39 page 92), all naming Refugia Dominguez de Reyes.

### North of 2nd Street there is no tract map — NEGATIVE

103 S, 100 N and 300 N Los Angeles Street all report the same thing: **City
Lands of Los Angeles**, M R 2-504/505 with Patent 3-64/65, an *unnumbered* lot.
That is the identical unsubdivided sheet already ruled unusable for San Julian
below Ninth. So the whole Plaza end of Los Angeles Street — the oldest ground
on the street — is not reachable by tract map at all. It was never platted by a
private subdivider, and its naming has to come from Ord's 1849 survey
(`documents/_ord-1849`, currently parked), council minutes and directories.
Don't re-run the NavigateLA pass on that stretch.

### Already covered

300 S Los Angeles St is the **Orchard Tract**, M R 5-5 — already a swept
document. Twelve documents already carry rows on Los Angeles Street, so this
batch is filling gaps rather than opening the street.


Every county sheet it listed is now a swept `documents/<id>/`, and Kenny has
worked through the Huntington URLs. **One item is still outstanding — the
wrong file was downloaded for it (see below).** Everything else here is a
record of what was tried, so nobody harvests it a second time.

## Still outstanding

**Bell's Addition, sheet B — id 12963, not 12693.** `inbox/out of neighborhood/
bells addition/` holds `12693.jpg`, which is a different map entirely:
*Property of Gentry & Norris* (SR_Box_30(40).01, William White Jr., with the
survey note "Potter protests against this survey"). A digit transposition. The
sheet actually wanted is the southern half of Hansen's Bell's Addition survey,
which pairs with `11897.jpg` and aligns with it at Pico Street:

    https://hdl.huntington.org/digital/iiif/p15150coll4/12963/full/full/0/default.jpg

`12693.jpg` is not useless — it is a Solano-Reeve parcel survey like the rest —
but it belongs to no street this project is working, so bin it unless it turns
up in a later search on its own merits.

## Harvested — outcomes

### Georgia Bell (Bell's Addition), 5 files → `inbox/out of neighborhood/bells addition/`

11897, 11863, 12199, 12450 (plus the mistaken 12693). Kenny's read: **thin
metadata, and all of them include at least some land outside the current
bounds.** They stay parked with `mr002-467.pdf` and `mr029-031.pdf`, which are
in the same folder for the same reason. Nothing here becomes a document until
the coverage expands to reach Georgia Street's ground
(handbook/ADDING-A-NEIGHBORHOOD.md). That is the gate on `georgia-bell`, which
`check-model.js` still reports as lettered by no document.

### Mott Tract — 1 of 6 kept

`documents/12685` (SR_Box_30(24).01, Pickel). **The other five are duplicates**
and were not kept: 11791 / 12875 / 12876 are three tracings of one reduced
plat, 11792 and 11781 cover the same ground again. Even 12685 is largely
duplicated by `mr001-489`, which the sheet itself points at — see the note in
`12685/12685.js`. Do not re-harvest the Mott set; the ~30 individual-block
sheets at `SR_Box_30(24).02A`-`.02ZA` (ids 12686, 13055-13080) remain unfetched
and are the only part of it that would add anything, and only for settling a
specific block.

### O. W. Childs companions — 2 of 4 kept

`documents/12017` (the tract survey) and `documents/11824` (Botiller and Reyes
lots). **12499 and 11616 were not usable.** The decoy still stands for anyone
searching the collection later: there is a separate **Childs Tract in the
Rancho San Rafael** (Glendale) under the same name.

## What the three kept sheets turned out to carry

Metadata written into their `.js` files 2026-09-06, titles transcribed from the
sheets themselves rather than taken from the catalogue.

- **`12685`** — *Map of the Mott Tract, Subdivided & Surveyed 1868 & 1869 by
  H. Pickel.* The manuscript note at top right is dated 11 December 1868 and
  reads "Thomas D. Mott to … Map Record in Book of Miscellaneous Records at
  page 489" — a direct documentary tie to `documents/mr001-489`, and the first
  thing in this corpus to give the Mott Tract's namesake a full name,
  **Thomas D. Mott**. The sheet letters **Grasshopper**, **Flower**, **Hope**,
  **Charity**, **Olive**, **Hill** and **Fort** Streets against Fourth, Third,
  Second, First, **Court House** and Temple, with blocks A-Z and lot owners
  named in every block (Tiffany, Burns, Keller, Mott, Hansen, Dolan, Allen …).
  Grasshopper, Charity and Court House are all predecessor names worth rows.
- **`12017`** — *Map of O. W. Childs Tract in the city of Los Angeles, Cal.
  Surveyed April 9 & 10 - 1883 by Hansen & Solano.* Eleventh and Twelfth
  Streets against Main, Los Angeles, **William Street**, **Myrtle Avenue**,
  San Julian and San Pedro. William and Myrtle are the interesting labels —
  they sit in the corridor that is Maple Avenue and Wall Street today, and the
  Maple Avenue Tract (M R 11-63) is on Wall Street rather than Maple. Match by
  geometry, not by label; the corridor is evidently unsettled in 1883.
- **`11824`** — no title on the sheet at all; the Huntington's is a
  cataloguer's. All the sheet says is "Scale 100 feet per inch. Drawn by Joe
  Bernal." It shows the **REYES** and **BOTILLER** parcels between Main Street
  and **Moore's Lane**, against 7th, 8th and 9th Streets and Spring Street.
  **The scan is mirror-reversed** — every label reads backwards, so the
  geography is flipped with it and an alignment fitted to the image as-is will
  be wrong. Flip horizontally before aligning. Flagged in `11824/11824.js`.

## Findings moved out of this file

- The Dunigan Tract closure and the San Julian-below-Ninth negative are now in
  `handbook/research-leads.md`, beside the Molino Street entry they resemble.
- The URL patterns and gotchas (direct `nlaby_pin.cfm` reports, the `qType`
  requirement, the assessor's JSON legal search, the deleted-parcel trap,
  two filings on one sheet) are in `handbook/TRACT-RESEARCH.md`.
