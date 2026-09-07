# Download shopping list

Opened 2026-09-06 for Georgia/Mott/Maple/Wall/San Julian, closed the same day,
reopened for Los Angeles Street. The Los Angeles Street batch is at the top;
the closed batch and its outcomes follow.

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

### The four 20th-century Map Book sheets, if wanted

These letter Los Angeles Street but late, so they are worth less for naming.
Filenames taken from each book's own `List.aspx` listing rather than guessed.

| Near | Tract | Map-Ref | PDF |
|---|---|---|---|
| 7th | TR 1489 | M B 20-3 | https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0020/TR0020-003.pdf |
| 6th | 6th St. Terminal Tract | M B 9-100 | `TR0009-100.pdf` **or** `TR0009-100a.pdf` |
| 5th-6th | Sumner and Garibaldi Tract | M B 12-129 | `TR0012-129.pdf` **or** `TR0012-129a.pdf` |
| 2nd | Perry-Hellman Property | M B 5-49 | `TR0005-049a.pdf` **or** `TR0005-049b.pdf` |

Three of the four hit the suffix gotcha: the page number holds more than one
filing and the listing gives two files with no way to tell them apart from
outside. Note book 5 page 49 has **no** plain `TR0005-049.pdf` at all — only
`a` and `b`. Open and check the title block before keeping either; the pair may
be unrelated subdivisions in another city entirely.
Base: `https://pw.lacounty.gov/sur/nas/landrecords/tract/MB{book}/`

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
