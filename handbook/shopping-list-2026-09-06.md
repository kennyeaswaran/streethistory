# Download shopping list — outstanding only

Started 2026-09-06, pruned the same day. **Everything that has become a
`documents/<id>/` folder has been removed from this file.** What is left is
either not downloaded, or downloaded and parked pending a decision.

Cleared out on the prune (all now in `documents/`): the Mott Tract (M R 1-489),
Moreno Vineyard (M R 3-166, both sheets in the one PDF as predicted), Orchard
(M R 5-5), Nordholdt (M R 6-33), O. W. Childs (M R 6-378), Maple Avenue Tract
(M R 11-63), Moran (M R 16-27), Widow Botiller Resub (M R 29-26), Miguel Sub /
Celis Vineyard (M R 53-16).

## San Julian Street, 5th to 9th

Looked up 2026-09-06. All PDFs existence-checked: real scans, no OCR layer.

| Near | Tract | Map-Ref | Sampled at | PDF |
|---|---|---|---|---|
| 5th | **Hamilton's Subdivision of part of the Urquidez Garden** | **M R 5-307** | 506 S San Julian, Lot 5 (APN 5148012020) | https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-307.pdf |
| 5th-6th | **Whisler Subdivision** | **M R 12-64** | 520 S San Julian, Lot 8 (APN 5148012016) | https://pw.lacounty.gov/sur/nas/landrecords/misc/MR012/MR012-064.pdf |
| 6th-7th | **Beck Tract** | **M R 14-34** | 640 S San Julian, Lot 17 (APN 5148025014) | https://pw.lacounty.gov/sur/nas/landrecords/misc/MR014/MR014-034.pdf |
| 7th | **Rowan Tract** | **M R 6-39** | 710 S San Julian / 500 E 7th, Lot 1 (APN 5145007018) | https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-039.pdf |
| 8th | **Goldsworthy 8th St. Tract** | **M R 11-8** | 820 S San Julian, Lot 37 (APN 5145009017) | https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-008.pdf |

Notes before reading these in:

- **The 9th Street end was dropped (2026-09-06, Kenny).** That parcel reports
  the City Lands of Los Angeles — an unsubdivided remnant of the original city
  survey, unnumbered lot, 167 addresses — and the sheet has nothing usable on
  it. Recorded here so nobody looks it up again: M R 2-504/505 is not worth
  fetching for this street.
- **M R 5-307 is two maps on one sheet.** Split into `documents/mr005-307-a`
  (top) and `-b` (bottom); see below.
- **Urquidez** joins Moreno Vineyard (Wall St) and Celis Vineyard (Maple Ave) as
  a third Californio-era landholding name in these blocks. Hamilton's sheet
  names the garden it subdivided, which is the kind of title that dates the
  older name as well as the new one.
- **Rowan** — compare V. J. Rowan, the surveyor of the 1887 city map already
  cited in this project, and George D. Rowan, who held Block P of the Mott
  Tract. Same family is plausible and unverified.
- 600 and 680 S San Julian geocode fine but return no parcel report, so those
  two frontages are unsampled rather than known-empty.


## M R 5-307 — one sheet, two filings (done 2026-09-06)

The scan carries **two unrelated recorded maps stacked on one sheet of paper**,
surveyed by the same engineer (E. T. Wright) two months apart and recorded for
different people. Two titles, two recording dates, two pieces of ground — so
two documents, for the same reason a multi-page scan becomes one document per
page: the model holds one alignment and one coverage polygon each.

- `documents/mr005-307-a` — **Map of Block W, Mott Tract**, as subdivided by
  E. T. Wright at the request of M. L. Wicks, June 1883. Scale 60 ft = 1 in.
  Recorded at the request of M. I. Wicks, June 25, 1883. Bounded by **Flower
  Street** (N), **Pearl Street** (S), **First Street** (W), **Second Street**
  (E); lots 1-16.
- `documents/mr005-307-b` — **Map of Hamilton's Subdivision of part of the
  Urquidez Garden**, surveyed by E. T. Wright, Aug. 25, 1883, scale 100 ft = 1
  in. Recorded at the request of A. N. Hamilton, Sept. 12, 1883. Fronts
  **Fifth Street** and **San Pedro Street**; lots 1-9. This is the San Julian
  sheet.
- The original single folder is parked at `documents/_mr005-307/`.

Each folder carries a `SPLIT-NOTE.md` recording how the cut was made: the
render was cut at row 1020 of 1759, the midpoint of the widest blank band on
the sheet (rows 940-1099, found from a row ink profile rather than by eye).
Both halves stay at 100 dpi so the alignment convention holds; `-b`'s pixel
y=0 is the full sheet's y=1020. Each folder holds the unaltered whole-sheet
PDF, matching how the `mr030-009-p*` folders each hold the full multi-page PDF.

**The top half is a windfall and has nothing to do with San Julian.** It is a
Mott Tract block up at Flower and Pearl between 1st and 2nd — so it extends the
Mott Tract's own coverage (M R 1-489 is already read in), and it puts a dated
1883 attestation of **Pearl Street**, Figueroa's predecessor, on a specific
block. That is a lead the project already had open. It also shows M. L. / M. I.
Wicks subdividing a Mott block, alongside the Mills and Wicks filing already
noted in `research-leads.md` at M.R. 13-87/88.

## Downloaded but parked — `inbox/out of neighborhood/`

Both were harvested for Georgia Street and both fall outside the coverage
bounding box, so they are sitting in the inbox rather than becoming documents.
No need to re-download; the open question is whether the neighborhood expands
to reach them (handbook/ADDING-A-NEIGHBORHOOD.md).

- `mr002-467.pdf` — **Bell's Addition**, M R 2-467. The founding plat for
  Georgia Street's ground, sampled at 702 W 17th St (Lot 1, Block 5). This is
  the sheet that would put `georgia-bell` on actual pavement.
- `mr029-031.pdf` — **Robertson's Subdivision of Lots 3 and 4, Block 3, Bell's
  Addition**, M R 29-31. The later recut that modern Georgia St parcels report.

## Not downloaded — Huntington / Solano-Reeve

Surveyor's working maps (George Hansen, H. Pickel), not recorded county plats:
street names, lot and block numbers, courses and distances, but no Recorder's
block. Cite as Huntington/Solano-Reeve, never as an M.R. reference. All URLs
existence-checked at full resolution.

IIIF pattern: `https://hdl.huntington.org/digital/iiif/p15150coll4/<id>/full/full/0/default.jpg`
Catalog record: `https://hdl.huntington.org/digital/collection/p15150coll4/id/<id>`

### Georgia Street (historic Georgia Bell Street)

| id | Call no. | Title / coverage | Date | Pixels |
|---|---|---|---|---|
| 11897 | SR_Map_0486.01A | **Bell's Addition** — west from Figueroa St., Ninth to Washington St. (sheet A; A and B align at Pico). George Hansen. | 1879-12-03 | 7888x8587 |
| 12963 | SR_Map_0486.01B | **Bell's Addition** — sheet B, same survey | 1879-12-03 | 7947x8607 |
| 11863 | SR_Map_0455 | Bell's Addition & Robertson's Subdivision — "Eighteenth (Ocean) St. from Figueroa to **Georgia Bell St.**"; copy of Map Book 3 p. 6, City Engineer's Office | 1870s | 9864x7696 |
| 12199 | SR_Map_0711 | Block between Figueroa and **Georgia Bell Streets**, Ocean to Montgomery; pencil note "Eaton 1889" | 1884-1894 | 8766x7395 |
| 12450 | SR_Box_26(31).04 | Bell's Addition — blocks between Figueroa & Georgia Streets | 1886-1896 | 4399x6000 |

The naming evidence is the point: SR_Map_0455 and SR_Map_0711 are catalogued
with the street written **"Georgia Bell St."**, which brackets the 1889-1897
spelling period that `georgia-bell` currently dates from the Feb. 19, 1897
Herald alone.

### Mott Tract

Not the "Johnson and Mott Tract" east of Alameda (parent of the Thomas Tract,
M.R. 3-60/61). This one is west downtown: Grasshopper (Figueroa) to Fort
(Broadway), Temple to Fifth. Whether the two Motts are one landowner is still
open. The recorded plat (M R 1-489) is already read in; these are the
surveyor's sheets behind it.

| id | Call no. | Title / coverage | Date | Pixels |
|---|---|---|---|---|
| 11792 | SR_Map_0392 | **Map of the Mott Tract** — numbered lots, lettered sections, color highlighting. H. Pickel. *Best overview sheet.* | 1868-1869 | 9098x8317 |
| 12685 | SR_Box_30(24).01 | Mott Tract subdivided & Surveyed — p. 5 of the bound Mott Tract document; **names the lot owners** | 1869 | 6000x4774 |
| 11781 | SR_Map_0382 | Mott Tract: Lands granted to the L.A. Canal & Reservoir Co.; annotations re: Capt. Wm. Moore's tract | 1868-12 | 8585x8107 |
| 11791 / 12875 / 12876 | SR_Map_0391.01/.02/.03 | Three tracings of the same reduced plat, Grasshopper to Hope | 1869 | ~9000x8300 |

Also in the collection: `SR_Box_30(24).02A`-`.02ZA` (ids 12686, 13055-13080),
~30 sheets of individual Mott Tract blocks, 1872-1875. Pull if a specific block
needs settling.

### Maple Avenue / O. W. Childs companions

- id 12499 — `Childs - Childs Tract : Spring to Grasshopper Sts., 6th to 12th Sts.`
  The downtown Childs tract at full extent.
- id 11616 `Childs Tract` (Nov. 1882); id 12017 `O.W. Childs' Tract` (Apr. 1883),
  with enlarged portions at ids 12018 and 12019.
- id 11824 `Botiller and Reyes lots east side of Main Street` (1873) — Botiller
  land, though not the Maple Ave parcel.

Beware a decoy: there is a separate **Childs Tract in the Rancho San Rafael**
(Glendale) in the same collection. Not ours.

## Closed — Dunigan Tract, and the reason is the finding

Carleton and Summerfield's Sub of the Dunigan Tract has **no Map-Ref obtainable
from NavigateLA, and never will**. Every parcel the assessor holds in that tract
is DELETED, struck off the roll between September 1987 and March 1988:

    5134004003  1317 GEORGIA ST   deleted 09/24/1987
    5134004006  1355 GEORGIA ST   deleted 11/17/1987
    5134004009  1407 GEORGIA ST   deleted 03/28/1988
    5134006003  1358 GEORGIA ST   deleted 03/28/1988

That is the Convention Center expansion eating the block. A Map-Ref lookup
resolves a live parcel; with none left in the tract there is nothing to answer
with. The addresses geocode to nothing — 1317 and 1355 Georgia both snap back
to 1099 Georgia St, the last addressed parcel on the street.

So the `nevada-1886` stretch of Georgia Street is pavement that no longer
exists: it can never be confirmed by a modern parcel, and its extent has to come
from plats and directories alone. The Huntington has no Dunigan, Carleton or
Summerfield map either (checked 2026-09-06), so the recorded sheet would need
another route entirely.

## Method

The URL patterns and gotchas found while doing this — the direct
`nlaby_pin.cfm` report URL, the `qType` requirement, the assessor's JSON legal
search, and the deleted-parcel trap — are written up in
`handbook/TRACT-RESEARCH.md`.
