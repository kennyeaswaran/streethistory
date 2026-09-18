# `clippings/` — newspaper cuttings that back a NAME but are not a DOCUMENT

## What lives here, and why it is not in `documents/`

A file in `documents/` is a thing the map reads: it has an id, a date, a
coverage polygon and usually rows, and `check-model.js` will complain if it does
not. These cuttings have none of that. They are **biographical or
circumstantial evidence for a namesake** — an advertisement, a court decree, a
council roll, a property transfer — that says nothing about where a street ran
or what it was called. Making each one a rowless document would add a dozen
entries to the corpus that draw nothing and assert nothing about the ground.

So they sit here instead, and `names.js` cites them the way it cites any source:
by **title and CDNC URL**, not by local path. The file is the working copy, the
URL is the citation.

**Filenames keep the CDNC article id** (`LAH<YYYYMMDD>`), so the source URL is
always reconstructible as
`https://cdnc.ucr.edu/?a=d&d=<id>.<page>.<article>` — the page and article
numbers are in the index below.

**If one of these ever turns out to bear on the ground** — a cutting that names
a cross street, or dates a renaming — it should be promoted to a proper
`documents/<id>/` folder with a `.js`, and removed from here. That is what
happened to the four 1888–1919 items Kenny clipped in the same batch.

## Index

| File | CDNC | What it says | Supports |
|---|---|---|---|
| `LAH18731003-teed-advertisement.jpg` | `LAH18731003.1.1` | *"M. TEED, CONTRACTOR AND BUILDER, Shop on First Street, Between Main and Spring, Los Angeles. Jobbing done neatly and with Dispatch."* | ★★ `teed-street` |
| `LAH18731010-city-council-teed.jpg` | `LAH18731010.1.3` | City Council, Oct. 9 1873: *"The following members were present: F. Sabichi, Mullaly, Beaudery, **Teed**, Workman, De Celis, and Dockweiler."* — the same man, on the council, sitting with Beaudry | ★★ `teed-street` |
| `LAH18740304-labory-sheep-sale.jpg` | `LAH18740304.1.4` | *"Simon Levy has bought 4,000 sheep of **Antonio Labory**, and has also rented his ranch for a year."* | ★★ `labory-lane` |
| `LAH18870520-labory-reunion.jpg` | `LAH18870520.1.1` | "A Reunion of Old Friends" at the Vignes house: **Antonio Labory**, *"a hale looking Frenchman, over whose head sixty-eight summers have passed"*, schoolmate of Vital F. Vignes in **Bordeaux**, San Francisco 1844, Los Angeles ever since | ★★ `labory-lane` — the identification |
| `LAH18870803-vignes-biography.jpg` | `LAH18870803.1.11` | A Vignes biography: *"Here Mr. Vignes engaged in the vintage business in company with such men as Pedro Sansevine and **H. Labory**"* — a second Labory, in the trade, at the Aliso | ★ `labory-lane`, `sainsevain-street`, `vignes-st` |
| `LAH18870205-millar-property-for-sale.jpg` | `LAH18870205.1.4` | *"For Sale. The E. B. Millar Property"* — 26 lots bounded by **Seventh Street, Alameda St. and Lemon St.**, "first-class vineyard", "Just near the famous Wolfskill Orchard"; agents **Byram & Poindexter, 27 W. First St.** Eleven days after `mr013-091` was recorded | ★ `warren-st-arts-district`, `channing-st` — confirms the tract's alignment. ⭐ **Byram & Poindexter is an unfollowed lead** |
| `LAH18861019-bliss-tract-decree.jpg` | `LAH18861019.1.6` | *"Oliver H Bliss vs Joseph Wolfskill, administrator of Lewis Wolfskill, deceased … Decree quieting title to part of **O H Bliss tract on E side Alameda street**."* | no entity yet — but the Oct. 1888 committee list names a Bliss tract independently |
| `LAH18860504-chadwick-transfers.jpg` | `LAH18860504.1.4` | Real-estate transfers: **J. S. Chadwick** buying Hollenbeck Tract lots from Myron H. Raymond, and 14 acres in the **Blow tract** from W. R. Huff and R. A. Ling for $14,000 | thin — context for the Chadwick Subdivision (`mr016-059`, `canal-street-beaudry`) |
| `LAH18870617-kiefer-tract-lots.jpg` | `LAH18870617.1.4` | For-sale column: *"Pacific avenue, **Kiefer tract**, lot 40x140 to an alley; $750, one-half cash"*, beside **Goodwin** and **Weisendanger** tract lots | thin — confirms the Kiefer tract existed and was selling; the man is still untraced |
| `LAH18870405-pacific-coast-land-bureau.jpg` | `LAH18870405.1.7` | The Pacific Coast Land Bureau's auction colophon — San Francisco, Wendell Easton president, Geo. W. Frink general manager, Easton & Eldridge auctioneers | ✘ **nothing yet.** Kept because boom-era auction houses named streets, and none of these four surnames has been checked against the corpus |

## Not newspaper cuttings

Two more things live here because they are the same KIND of evidence — they back
a namesake and say nothing about the ground — and neither warrants a document.

| File | What it is | Supports |
|---|---|---|
| `1889-la-railway-map.jpg` | ★★ A published **"Map of Los Angeles Railway and Railroad circa 1889"**, supplied 2026-09-17 with the Echo Park History thread on Diamond Street. It glosses each cable-line street with its modern name: *"Texas St. (Belmont Ave.)"*, *"Diamond St. (Beverly Blvd.)"*, *"Lake Shore Ave. (Glendale Blvd.)"*, *"Fort St. (Broadway)"*, *"San Fernando St. (N. Spring)"*, *"Downey Ave. (N. Broadway)"*, *"Pritchard St. (Lincoln Park Ave.)"*, and shows the Temple Street and Second Street cable lines entire. ⚠ The parentheses are a modern author's annotation, not an 1889 fact. | ★★ `diamond-street`, `texas-st`, `lake-shore-ave` |
| `crown-hill-chronicles/` (5 PDFs) | Saved pages of **crownhillchronicles.blogspot.com** (2009), a neighbourhood blog, supplied 2026-09-17 after the site refused automated fetching. ⚠⚠ **HANDLE WITH TONGS.** Its own commenters correct the dating of its photographs by a decade, and its claim that the Witmers arrived in 1850 contradicts Kines's November 1884. Kenny flagged it as unreliable when supplying it. The one durable thing in it is `the-real-o.g.pdf`: *"Henry and his two siblings constructed large Victorian estates next door to one another on a dirt road and named it 'Witmer Street'"* — which is consistent with everything else here. ✘ It does **not** name the Colina Park subdividers, which was the reason for wanting it; the sheet's own title block did that instead. | `witmer-street` |

## Provenance

All ten supplied by **Kenny, 2026-09-17**, from CDNC phrase searches run against
`handbook/CDNC-QUERIES.md`. Read at full size and applied to `names.js` the same
day; see the 2026-09-17 entry in `handbook/research-leads.md`.
