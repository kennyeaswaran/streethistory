# Finding the original recorded map for a street or segment

Verified workflow (walked end-to-end 2026-07 with Wolfskill Orchard Tract).
Recorded subdivision maps give: the recording date, the original platted
street names, the subdivider, and the surveyor — often the single best
primary anchor for `planned` and for pre-newspaper street names.

Scope note: this file is the *origin-document* pipeline — one subdivision at
a time. For the *serial* sources (Sanborn atlases, city directories), which
bracket a renaming across whole neighborhoods at once but never name a
namesake, see SERIAL-SOURCES.md. A cheap serial sweep is usually the right
way to decide which streets deserve the lookup below.

REQUIRES A BROWSER for HARVESTING ONLY (NavigateLA and the Assessor portal are
JavaScript apps; fetch tools see nothing). READING maps is different:

**Harvesting no longer means clicking, either.** Both apps sit on plain ArcGIS
layers that answer polygon queries — a whole corridor in one script, page-letter
suffixes included. See "Skip the UI entirely" below; the click-through pipeline
that follows is the fallback and the explanation of what the fields mean.

**RULE — downloads first.** Before opening any map PDF in a browser viewer,
`ls inbox/ documents/*/` — if the map is already downloaded, read it locally
(`pdftoppm -png -r 150`, then Read the PNGs; re-render at `-r 300` for fine
labels). If it is NOT there, add its verified URL to a shopping list for
Kenny to download rather than reading it online; only read online when it's a
single map the session genuinely can't wait for. Local reading is faster, the
resolution is under your control, side-by-side comparison across maps is easy,
and it avoids the Chrome-PDF-viewer and Google-viewer flakiness documented
below. Browser time is for collecting Map-Refs, not for squinting at plats.

## The pipeline

1. **Pick an address on the stretch you care about.** Any building address on
   the relevant block (OSM/Google). For a segmented street, pick addresses on
   the specific segment.

2. **NavigateLA** (https://navigatela.lacity.org/navigatela/ — slow to load;
   wait for the spinner):
   - Type the address in the search box, Enter. If "ADDRESS NOT FOUND", pick
     the closest neighbor from the offered list (fine for our purpose).
   - In the Report Window that opens, scroll the report list and click
     **"Parcel Description Report"**.
   - Read off: **Tract** (name), **Map-Ref**, Lot/Block. Map-Ref formats:
     - `M R 30-9/13` = **Miscellaneous Records** book 30, pages 9–13 — the
       series where 1870s–1890s subdivisions live (most of downtown).
     - `M B 52-13` = tract **Map Book** — the post-~1900 tract-map series.
   - (The report window also offers "Cadastral Map" and "Assessor Map" —
     engineering sheets that annotate tract references; useful as backup.)

3. **Get the scanned map** (DPW Land Records):
   - **M R (Misc Records) refs** — URL pattern is reliable, construct it directly:
     `https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf`
     (book folder `MR030`, book+page both 3-digit zero-padded). Multi-page refs
     like 9/13 = pages 009 through 013 — try them all; the title/recording
     block is usually on the first page. **But a two-page filing is often ONE
     PDF filed under the first page**, and the second page's filename 404s:
     M.R. 3-166/167 and M.R. 2-504/505 both behave this way, as M.R. 3-60/61
     already did (`MR003-060.pdf` carries both sheets, which is why
     `documents/mr003-060-p1` and `-p2` came out of a single download). A 404
     on the continuation page is therefore normal and not a sign you have the
     reference wrong — open the first page and count the sheets inside. You can sanity-check a guessed URL
     with the fetch tool (WebFetch) before opening a
     browser: a real file reports `Content-Type: application/pdf`, a wrong
     guess reports the DPW "Page Not Found" HTML page. The fetch tool reaches
     this domain fine — but see the network note below before assuming more.
   - **M B (Map Book / Tract) refs** — do NOT guess the plain
     `TR{book}-{page}.pdf` pattern; it 404s more often than not, because the
     real filename frequently carries a letter suffix (`056a`, `056b`, `081A`)
     for reasons that have nothing to do with your tract (see gotcha below).
     Instead, get the exact filename from the book's own page-listing:
     `https://pw.lacounty.gov/smpm/landrecords/List.aspx?type=Tract&book=0159`
     (4-digit book number) — this is a plain page (no login/postback needed)
     that lists every real filename in that book, e.g. `TR0159-032`. Click the
     link (or read its `.href` via `javascript_tool` — see gotcha below) to
     get the real URL, which follows
     `https://pw.lacounty.gov/sur/nas/landrecords/tract/MB{4-digit book}/TR{4-digit book}-{3-digit page}{suffix}.pdf`.
     The TractMaps.aspx browse-by-range page (Map Book table → book →
     individual page) gets you to the same List.aspx URL two clicks slower;
     going straight to `List.aspx?type=Tract&book=XXXX` is faster once you
     know the book number.
   - **If the tract has a NUMBER, skip all of that.** `TractMaps.aspx` has a
     "Search by Tract Map Number" box (`ctl00_main_bookTextBox` +
     `ctl00_main_tractMapSearchButton`) that redirects straight to the correct
     PDF, suffix and all — typing `1101` lands on
     `.../MB0020/TR0020-196B.pdf`. It resolves the suffix ambiguity outright,
     so use it whenever NavigateLA gave you a `TR nnnnn` rather than a tract
     name. Named tracts (the early Map Book filings, e.g. "Perry-Hellman
     Property") carry no number and still need the listing plus a look.
   - **Reading a Map Book sheet to settle which suffix is yours.** The
     browser pane's own PDF viewer renders these as a blank grey page. The
     Google-viewer workaround below does work and is the cheap way to check a
     title block:
     `https://docs.google.com/viewer?url={URL-encoded PDF URL}&embedded=true`,
     wait ~8s, screenshot. Three of four suffix ambiguities in the 2026-09-06
     batch were settled this way in about a minute each, and in two of them the
     guessable filename was the WRONG map (`TR0005-049a` = Formosa Tract,
     Hollywood; `TR0009-100` = Dunning Tract, Hollywood) while in the third the
     plain filename was right — the rule genuinely cannot be guessed.
   - Note the site's warning: scans may be hand-drawn copies of the originals;
     the originals are at the Registrar-Recorder.

4. **Make it a document.** Double-click `utilities/new-map.command`, pick the
   scan out of `inbox/`, give it an id. One document per page: it writes
   `documents/<id>/` with the PDF and a 100 dpi render.

5. **Read it in.** MAP-TOOL-GUIDE.md, end to end — align, trace the coverage,
   save, hand the folder to an AI pass, confirm the rows, sweep. What this file
   gives you is the map; everything after it belongs to the tool.

## A late plat is a later stage of the name, not a worse source

Kenny's call, 2026-09-06: a 20th-century Map Book sheet is worth having even
when a 19th-century M.R. sheet covers the same ground, because it letters the
street at ITS date and so marks a different stage in the name's history. The
batch that prompted this bore it out — those sheets carried a street-renaming
ordinance note in the margin ("Jackson Way changed to St Andrews Place, Ord.
25382"), an explicit citation of the earlier plat they resubdivide ("a portion
of Block B, Rivara and Vignolo Tract, as per map recorded in Book 5 Page 110
Misc. Rec."), and a preamble chaining back through four earlier filings by book
and page. So don't filter a batch down to the oldest sheet per block.

## Read the whole sheet

A map opened for any reason gets read in full — the sweep gate enforces it, so
this is now a property of the system rather than a discipline to remember. One
reason it is worth the trouble anyway: a single subdivision map routinely names
four to six streets at once (the Bliss Tract alone gives Seaton, Colyton,
Carolina/Hewitt, Huber, Poplar and Palmetto), and re-opening a scan months
later to catch the ones you skipped costs far more than reading it through now.

## Direct report URLs — skip most of the UI (2026-09-06)

Found by reading the app's own DOM. NavigateLA is an ArcGIS JS 4.28 SPA, but its
reports are still plain ColdFusion pages under
`https://navigatela.lacity.org/navigatela/reports/`, keyed by **PIN** (the BOE
parcel key, e.g. `124-5A205-29`), not by APN:

- **Parcel Description Report** — the Tract/Map-Ref/Lot/Block sheet, the one
  step 2 of the pipeline is really after:
  `reports/nlaby_pin.cfm?pin=124-5A205-29`
- The menu of every report for a parcel: `reports/dc_parcel_reports.cfm?PK=<PIN>`
  (also gives the Cadastral Map PDF, the Assessor Map link, and the APN)
- Others on the same key: `parcel_isin.cfm`, `fema_s_report.cfm`,
  `lupams_report.cfm` (County Assessor Report)

These are same-origin fetches, so `javascript_tool` can pull and parse them
without any screenshot round-trips — much faster than clicking through the
Report Window.

**Getting the PIN.** Only the map app knows it, so one search has to go through
the app. Searching an APN (plain 10 digits, no hyphens) or a street address
resolves to one parcel and loads its report:

    window.qType = ''; window.qBlank = 0;      // REQUIRED, see below
    const i = document.getElementById('searchbox');
    i.value = '800 MAPLE AVE'; i.dispatchEvent(new Event('input',{bubbles:true}));
    doSearch();                                 // app's own global
    // then poll document.getElementById('report_frame').src for PK=<PIN>

`qType` is a global the search UI sets, and it is undefined until a person has
actually used the search controls — calling `doSearch()` before that throws
`ReferenceError: qType is not defined`. Setting it to `''` yourself makes
`doSearch` fall through to its own type-sniffing, which is what you want.

The geocoder underneath is callable on its own, which is the cheap way to test
whether a query resolves at all before spending a search on it:

    POST https://navigatela.lacity.org/cfc/geocode_services/boe_universal_locator.cfc
         ?method=boeGeocodingService
    body: qType=any&qSearch=800+MAPLE+AVE

It answers `singleMatch` / `noMatch` and echoes the matched address, but it
returns only coordinates — no PIN — so it screens queries rather than replacing
the step above.

Two more caveats. The report frame stops responding after roughly half a dozen
searches in one page session (`report_frame.src` goes null and stays there);
reload and carry on. And the app's viewport matters: in a narrow pane it lays
out at phone width and the search never fires, so emulate ~1400x900 first.

**A `noMatch` usually means the parcel is dead, not that you mistyped.** The
assessor's `api/search/legal` returns parcels struck off the roll decades ago
right alongside live ones, with nothing marking the difference. Feed one of
those to NavigateLA and it answers `noMatch`, because a Map-Ref lookup resolves
a *live* parcel. Check first:

    https://portal.assessor.lacounty.gov/api/parceldetail?ain=5134004003
    -> ParcelStatus "DELETED", DeleteDate 09/24/1987

When every parcel in a tract is deleted, the tract has been erased from the
ground (redevelopment, a freeway, a civic project) and NO Map-Ref is obtainable
this way at all — Carleton and Summerfield's Sub of the Dunigan Tract, wiped by
the Convention Center expansion in 1987-88, is the worked example. That is a
finding about the street, not a dead end: it means the stretch can never be
confirmed by a modern parcel and has to be carried by plats and directories.
The deleted records are still worth reading, since they preserve the tract name
and lot numbers for ground that no longer exists.

**The disclaimer splash.** NavigateLA opens on a "Welcome / Accept" modal in any
browser profile that hasn't dismissed it. Tick "Do not show this message in the
future" before accepting. An AI instance should ask before clicking through
terms; a profile where a person has already dismissed it never shows the modal,
which is why earlier sessions in Kenny's own Chrome never hit this.

## Skip the UI entirely — the two layers behind it (2026-09-11)

Neither app has to be *used*. Both sit on plain ArcGIS layers that answer
polygon queries, so a whole corridor or neighbourhood costs one script instead
of one search per address — and no disclaimer splash is involved at all.

**Layer 1 — the Parcel Description Report, as data.**

    https://maps.lacity.org/arcgis/rest/services/Core/Master_landbase/MapServer/2

Fields: `TRACT`, `MAP_REF`, `BLOCK`, `LOT`, `PIN`, `MAPSHEET`, `BOOK`, `PAGE`,
`PARCEL`. That is the report of step 2, per parcel, spatially queryable. It is
NOT public-CORS, but NavigateLA proxies it for its own use and the proxy takes
any URL:

    https://navigatela.lacity.org/esriproxysvc/proxy.ashx?<the full layer URL>

So: open any page on `navigatela.lacity.org` (the PIN report is a light one),
then `fetch` through the proxy from that page. No PIN needed, no `qType`, no
report frame going null after six searches.

**Layer 2 — the County's tract-map footprints, with the filenames.**

    https://dpw.gis.lacounty.gov/dpw/rest/services/landrecords_mapviewer/MapServer/8

Fields: `SUB_NAME`, `REFERENCE`, `RCRD_DATE`. **`REFERENCE` carries the
page-letter suffix** — `TR0014-129B`, `TR0005-156A` — which kills the guessing
problem outright: no `List.aspx`, no Google viewer, no tract-number search.
Either query it by geometry, or by attribute once a Map-Ref is in hand:

    where=REFERENCE LIKE 'TR0014-129%'

and read off which filing is `A` and which is `B`. In the 2026-09-11 batches,
eleven of the Map Book pages held two unrelated filings, and the plain
un-suffixed filename was the wrong map in six of them. This layer is CORS-open,
so it answers from any origin, including a NavigateLA page.

**The recipe.** Get the block corners from `node tools/intersect.js` (never eyeball
them), build one polygon per block or per half-block strip, shrink it ~14%
toward its centroid so the query doesn't reach across the street, and query
layer 2 for `TRACT,MAP_REF` and layer 8 for `REFERENCE,SUB_NAME,RCRD_DATE`.
Group by `MAP_REF`, then build and existence-check the PDF URLs.

**Skip the proxy — POST instead (2026-09-15).** The `esriproxysvc` route above
**404s on a long URL**: a 66-point polygon in the query string exceeds IIS's
URL limit and the proxy answers with its own Page-Not-Found HTML, which looks
like a dead endpoint but is not. Two fixes, and take both:

- `maps.lacity.org` answers **CORS-open** from a `navigatela.lacity.org` page,
  so the proxy is not needed at all — fetch the layer directly.
- Send the query as a **POST** with the parameters as a form body. No URL-length
  limit, and an arbitrarily detailed polygon goes through.

With that, a whole neighbourhood is one query rather than one per block: the
Alameda-to-the-river sweep (4th to 7th Place, ~1 km × 1 km) returned all 929
parcels and 35 Map-Refs in a single call, with `exceededTransferLimit` false.
Set `resultRecordCount` high (3000) and check that flag rather than assuming.

`returnCentroid=true` is NOT supported on this service (10.71 reports the
parameter but returns no centroid). To get a per-Map-Ref footprint, request
geometry with `maxAllowableOffset=0.0004` and take the bounding box of each
group — cheap, and enough to say which streets a sheet covers.

**Where it runs.** Both layers are blocked from the sandbox shell AND from the
fetch tool (`navigatela.lacity.org` refuses it by robots.txt; the ArcGIS query
string does not survive it). They answer fine from the browser pane. Keep each
`javascript_tool` call to two or three queries — the NavigateLA proxy is slow,
a 45 s timeout is easy to hit, and firing the queries in parallel through it
returns an HTML error page instead of JSON.

**What it does not give you.**

- **The County layer has no Misc Records index.** Layers 0-19 cover tract,
  parcel, record-of-survey, official and patent maps — there is no M.R. layer,
  and downtown's founding plats are nearly all M.R. The city parcel layer is
  what reaches those, because `MAP_REF` reports whatever series the parcel
  cites. Where layer 2 gives an M.R. ref, the URL is constructed by the
  ordinary `misc/MR{bbb}/MR{bbb}-{ppp}.pdf` pattern and checked by hand.
- **Still the latest plat, not the founding one** — same caveat as the report
  it is drawn from.
- **The data has typos.** A Denison Tract parcel at Towne and 9th reports
  `M R 29-851`; the tract is M R 29-85 and the trailing 1 is noise. Sanity-check
  a ref that no other parcel in the block shares.
- **Parcels with an empty `TRACT`** are freeway right-of-way and vacated
  street. That is a finding, not a gap: those lots can only ever be carried by
  plats and directories.

## Sweeping for sheets: corridors, suffixes and dead ends (2026-09-15 to -18)

What the download batches of September taught, kept here so the shopping lists
themselves can go.

### One ±80 m corridor per grey segment, not an area

A first attempt used area polygons (a 560 m band west of Figueroa, an 800 m box
over Crown Hill). They returned 648 and 592 parcels and 45 new sheets — far more
than needed, because a band catches every filing in every block it crosses, most
of which never touch the street. Re-run as **one ±80 m corridor per grey street
segment** (the segments `node tools/check-legacy.js --verbose` or
`generated/report.md` name), it gave 37, each attributable to the corridors it
actually fronts. Do it this way whenever the target is a street rather than a
district.

**Before listing, check `documents/` by prefix**, parked folders included: the
folder may be `mr003-046-p1`, `tr0015-166a-p2` or `_mr005-400`. In one sweep 15
of the sheets found were already held.

### The query, as a reusable recipe

Paste into the DevTools console on any `https://navigatela.lacity.org/` page (the
PIN report is a light one). One corridor at a time, about 2 s each. Each `ring` is
a closed polygon of `[lon, lat]` pairs; build it from the segment's geometry
buffered ±80 m, never by eye. The sixteen rings below are the 2026-09-17b sweep
(Georgia, Traction, Vignes, 8th, 10th, 17th, James M. Wood, Ord and Cesar E.
Chavez): its Map Book half ran on 2026-09-18, and its **Misc Records half is
still to run** (WANTED.md). For a new sweep, replace them with your own.

```js
const CORRIDORS = [
  {name:"Georgia Street — part of (discontinuous)", ring:[[-118.26885,34.04452],[-118.26873,34.04469],[-118.26822,34.04545],[-118.26815,34.04556],[-118.26802,34.04576],[-118.26771,34.04616],[-118.26755,34.04634],[-118.26747,34.04641],[-118.26738,34.04652],[-118.26726,34.04671],[-118.2671,34.04696],[-118.26671,34.04755],[-118.26652,34.04783],[-118.265,34.04714],[-118.26519,34.04686],[-118.26557,34.04627],[-118.26574,34.04602],[-118.26588,34.04579],[-118.26607,34.04555],[-118.26621,34.04543],[-118.26626,34.04537],[-118.26653,34.04501],[-118.26664,34.04485],[-118.2667,34.04476],[-118.26721,34.044],[-118.26734,34.04381],[-118.26885,34.04452]]},
  {name:"Traction Avenue — part of", ring:[[-118.23789,34.04753],[-118.23772,34.0475],[-118.23749,34.04741],[-118.23734,34.04733],[-118.23662,34.04686],[-118.2377,34.04573],[-118.23842,34.0462],[-118.23837,34.04617],[-118.2382,34.04611],[-118.23832,34.04614],[-118.23789,34.04753]]},
  {name:"Vignes Street — part of (discontinuous)", ring:[[-118.23388,34.05309],[-118.23286,34.05619],[-118.23264,34.05696],[-118.23263,34.05735],[-118.23269,34.05769],[-118.23276,34.05801],[-118.23288,34.0583],[-118.23296,34.05843],[-118.23387,34.05927],[-118.23435,34.05964],[-118.23495,34.06021],[-118.23475,34.06019],[-118.23525,34.0605],[-118.23569,34.06073],[-118.23476,34.06195],[-118.23423,34.06167],[-118.23343,34.06113],[-118.23345,34.06093],[-118.23311,34.06065],[-118.23262,34.06026],[-118.23161,34.05934],[-118.23128,34.05887],[-118.23108,34.05837],[-118.23098,34.05792],[-118.2309,34.05741],[-118.23093,34.05674],[-118.23118,34.05582],[-118.2322,34.05271],[-118.23388,34.05309]]},
  {name:"8th Street — part of", ring:[[-118.27178,34.05295],[-118.27147,34.05282],[-118.27117,34.05269],[-118.2707,34.05248],[-118.27046,34.05233],[-118.27024,34.05208],[-118.27013,34.05184],[-118.27007,34.0517],[-118.27002,34.05157],[-118.27,34.05152],[-118.26987,34.05137],[-118.26976,34.05133],[-118.2696,34.05126],[-118.26952,34.05123],[-118.26924,34.0511],[-118.26964,34.05047],[-118.26964,34.05047],[-118.27004,34.04983],[-118.27032,34.04995],[-118.27039,34.04998],[-118.27064,34.05009],[-118.27107,34.05033],[-118.27146,34.05074],[-118.27165,34.05107],[-118.27171,34.05125],[-118.27175,34.05132],[-118.27181,34.05145],[-118.27169,34.05131],[-118.27157,34.05123],[-118.272,34.05143],[-118.27227,34.05154],[-118.27258,34.05168],[-118.27178,34.05295]]},
  {name:"8th Street — beyond Francisco", ring:[[-118.26632,34.05045],[-118.266,34.05046],[-118.26564,34.05044],[-118.2653,34.05039],[-118.26489,34.0503],[-118.26475,34.05027],[-118.26443,34.05021],[-118.26412,34.05014],[-118.2637,34.05002],[-118.26344,34.04992],[-118.26335,34.04988],[-118.26308,34.04977],[-118.26288,34.04968],[-118.2627,34.04959],[-118.26246,34.04945],[-118.26242,34.04943],[-118.26226,34.04934],[-118.26274,34.04874],[-118.26274,34.04874],[-118.26321,34.04814],[-118.26338,34.04823],[-118.26347,34.04828],[-118.26367,34.0484],[-118.26372,34.04842],[-118.26387,34.04849],[-118.26412,34.04859],[-118.26418,34.04862],[-118.26433,34.04868],[-118.26464,34.04877],[-118.26485,34.04881],[-118.26517,34.04887],[-118.26533,34.04891],[-118.26568,34.04898],[-118.26585,34.04901],[-118.26601,34.04902],[-118.26624,34.04901],[-118.26632,34.05045]]},
  {name:"8th Street — part of", ring:[[-118.24227,34.03376],[-118.24216,34.03368],[-118.24115,34.03285],[-118.241,34.03273],[-118.23981,34.03174],[-118.23908,34.03112],[-118.23889,34.03095],[-118.23896,34.03101],[-118.24005,34.02989],[-118.24014,34.02996],[-118.24032,34.03011],[-118.24105,34.03073],[-118.24223,34.03171],[-118.24237,34.03183],[-118.24338,34.03266],[-118.24336,34.03264],[-118.24227,34.03376]]},
  {name:"10th Street — part of", ring:[[-118.24746,34.03394],[-118.24681,34.03361],[-118.24679,34.0336],[-118.24665,34.03353],[-118.24649,34.03345],[-118.24636,34.03338],[-118.24616,34.03328],[-118.24573,34.03306],[-118.2441,34.03216],[-118.24399,34.0321],[-118.24496,34.0309],[-118.24507,34.03096],[-118.24668,34.03186],[-118.24707,34.03205],[-118.24727,34.03215],[-118.24739,34.03222],[-118.24756,34.0323],[-118.2477,34.03237],[-118.24772,34.03238],[-118.24836,34.03271],[-118.24746,34.03394]]},
  {name:"17th Street — beyond Figueroa", ring:[[-118.27143,34.03754],[-118.27103,34.03736],[-118.27069,34.03721],[-118.27069,34.03721],[-118.27044,34.0371],[-118.27127,34.03583],[-118.27153,34.03595],[-118.27153,34.03595],[-118.27186,34.0361],[-118.27226,34.03628],[-118.27143,34.03754]]},
  {name:"17th Street — east of Hope (discontinuous)", ring:[[-118.27048,34.0371],[-118.26771,34.0363],[-118.26735,34.036],[-118.26658,34.03564],[-118.26638,34.03554],[-118.26629,34.0355],[-118.26552,34.03508],[-118.26539,34.03501],[-118.26498,34.03477],[-118.26465,34.0346],[-118.26454,34.03454],[-118.26428,34.03439],[-118.26392,34.03417],[-118.26374,34.03407],[-118.26367,34.03402],[-118.26298,34.03362],[-118.26267,34.03345],[-118.26365,34.03226],[-118.26397,34.03244],[-118.26467,34.03285],[-118.26475,34.0329],[-118.26493,34.033],[-118.26529,34.03321],[-118.26554,34.03336],[-118.26556,34.03338],[-118.26594,34.03357],[-118.26639,34.03383],[-118.26647,34.03388],[-118.26723,34.03429],[-118.26729,34.03432],[-118.26745,34.0344],[-118.26837,34.03483],[-118.26837,34.03497],[-118.27105,34.03574],[-118.27048,34.0371]]},
  {name:"James M Wood Boulevard — part of", ring:[[-118.27237,34.0513],[-118.27229,34.05127],[-118.27189,34.05109],[-118.2718,34.05105],[-118.27155,34.05094],[-118.27101,34.05069],[-118.27092,34.05065],[-118.27039,34.05041],[-118.27039,34.05041],[-118.2701,34.05028],[-118.2701,34.05028],[-118.26964,34.05007],[-118.26966,34.05008],[-118.26953,34.05002],[-118.26994,34.04939],[-118.26994,34.04939],[-118.27034,34.04875],[-118.27047,34.0488],[-118.27048,34.04881],[-118.27094,34.04902],[-118.27094,34.04902],[-118.27122,34.04915],[-118.27122,34.04915],[-118.27176,34.04939],[-118.27183,34.04943],[-118.27238,34.04967],[-118.27263,34.04978],[-118.2727,34.04981],[-118.27311,34.05],[-118.27318,34.05003],[-118.27237,34.0513]]},
  {name:"James M Wood Boulevard — part of", ring:[[-118.26629,34.04769],[-118.26594,34.04834],[-118.26549,34.04818],[-118.26541,34.04815],[-118.26534,34.04812],[-118.26529,34.0481],[-118.26519,34.04805],[-118.26519,34.04805],[-118.26506,34.04799],[-118.26506,34.04799],[-118.265,34.04796],[-118.26491,34.04792],[-118.26429,34.04764],[-118.26471,34.04701],[-118.26471,34.04701],[-118.26513,34.04638],[-118.26575,34.04666],[-118.26584,34.0467],[-118.2659,34.04673],[-118.2659,34.04673],[-118.26603,34.04679],[-118.26603,34.04679],[-118.26613,34.04683],[-118.26618,34.04686],[-118.26612,34.04683],[-118.2662,34.04686],[-118.26665,34.04703],[-118.26629,34.04769],[-118.26629,34.04769]]},
  {name:"Ord Street — beyond Spring", ring:[[-118.23748,34.06047],[-118.23712,34.06034],[-118.23701,34.0603],[-118.23683,34.06024],[-118.23679,34.06022],[-118.23681,34.06023],[-118.23661,34.06016],[-118.23647,34.06012],[-118.23711,34.05878],[-118.23727,34.05883],[-118.23748,34.05891],[-118.23751,34.05891],[-118.2375,34.05891],[-118.23768,34.05897],[-118.23782,34.05902],[-118.23818,34.05916],[-118.23748,34.06047]]},
  {name:"Cesar E Chavez Avenue — part of", ring:[[-118.24347,34.06035],[-118.24296,34.06093],[-118.24273,34.06079],[-118.24275,34.0608],[-118.24263,34.06074],[-118.24264,34.06074],[-118.24243,34.06062],[-118.24292,34.06003],[-118.24292,34.06003],[-118.24342,34.05944],[-118.24362,34.05955],[-118.24362,34.05955],[-118.24373,34.05962],[-118.24375,34.05963],[-118.24398,34.05977],[-118.24347,34.06035],[-118.24347,34.06035]]},
  {name:"Cesar E Chavez Avenue — beyond Broadway", ring:[[-118.24088,34.05891],[-118.24039,34.0595],[-118.24027,34.05943],[-118.24029,34.05944],[-118.23994,34.05926],[-118.23991,34.05924],[-118.23977,34.05917],[-118.24022,34.05856],[-118.24022,34.05856],[-118.24068,34.05795],[-118.24082,34.05802],[-118.24086,34.05804],[-118.24122,34.05823],[-118.24125,34.05824],[-118.24138,34.05831],[-118.24088,34.05891],[-118.24088,34.05891]]},
  {name:"Cesar E Chavez Avenue — beyond Lyon", ring:[[-118.23899,34.05895],[-118.23873,34.05895],[-118.23801,34.05898],[-118.23757,34.05896],[-118.2371,34.05885],[-118.23682,34.05878],[-118.23661,34.05872],[-118.23607,34.05856],[-118.23448,34.05811],[-118.2329,34.05765],[-118.23248,34.05753],[-118.23242,34.05752],[-118.23155,34.05727],[-118.23063,34.057],[-118.23092,34.05632],[-118.23092,34.05632],[-118.23121,34.05564],[-118.23212,34.05591],[-118.23298,34.05615],[-118.23304,34.05617],[-118.23347,34.05629],[-118.23505,34.05675],[-118.23664,34.0572],[-118.23719,34.05736],[-118.23734,34.05741],[-118.23759,34.05747],[-118.23788,34.05754],[-118.23798,34.05754],[-118.23867,34.05751],[-118.23895,34.05751],[-118.23899,34.05895]]},
  {name:"Cesar E Chavez Avenue — part of", ring:[[-118.23034,34.05612],[-118.23001,34.05679],[-118.22943,34.05659],[-118.22919,34.05651],[-118.22917,34.05651],[-118.22802,34.05609],[-118.22802,34.05609],[-118.22739,34.05586],[-118.22701,34.05571],[-118.22642,34.05545],[-118.2257,34.05513],[-118.2257,34.05513],[-118.22536,34.05497],[-118.22536,34.05498],[-118.22471,34.05469],[-118.22458,34.05463],[-118.22539,34.05336],[-118.22552,34.05342],[-118.22618,34.0537],[-118.22618,34.05371],[-118.22653,34.05386],[-118.22653,34.05386],[-118.22724,34.05418],[-118.2278,34.05443],[-118.22811,34.05455],[-118.22872,34.05477],[-118.22872,34.05477],[-118.22986,34.05519],[-118.22984,34.05518],[-118.23009,34.05526],[-118.23066,34.05545],[-118.23034,34.05612],[-118.23034,34.05612]]}
];
const out = {};
for (const c of CORRIDORS) {
  const body = new URLSearchParams({ f: "json",
    geometry: JSON.stringify({ rings: [c.ring], spatialReference: { wkid: 4326 } }),
    geometryType: "esriGeometryPolygon", inSR: "4326", spatialRel: "esriSpatialRelIntersects",
    outFields: "TRACT,MAP_REF", returnGeometry: "false", resultRecordCount: "3000" });
  const j = await (await fetch("https://maps.lacity.org/arcgis/rest/services/Core/Master_landbase/MapServer/2/query", { method: "POST", body })).json();
  const refs = {};
  for (const f of j.features || []) { const k = (f.attributes.MAP_REF || "?") + " | " + (f.attributes.TRACT || "?"); refs[k] = (refs[k] || 0) + 1; }
  out[c.name] = { parcels: (j.features || []).length, exceeded: j.exceededTransferLimit, error: j.error, refs };
  console.log(c.name, out[c.name]);
}
copy(JSON.stringify(out, null, 1)); // → clipboard
```

This is the only route to the **Misc Records** refs (the 1870s–90s founding
plats), because the County layer has no M.R. index. Then, per new Map-Ref, group
by `MAP_REF`, skip what is held, and build the URL: `misc/MR{bbb}/MR{bbb}-{ppp}.pdf`
for M.R.; for Map Book refs take the suffix and recording date from the County
layer (CORS-open):

    https://dpw.gis.lacounty.gov/dpw/rest/services/landrecords_mapviewer/MapServer/8/query?f=json&where=REFERENCE+LIKE+'TR0014-129%25'&outFields=REFERENCE,SUB_NAME,RCRD_DATE

Existence-check each URL. Record the byte count too: it is the only cheap signal
of a multi-sheet filing.

Layer 8's suffixes have held up: on 2026-09-22 all 33 Map Book filenames from
the §5.11 sweep (WANTED.md) opened on the filename as recorded, with no
letter-swapping needed. So if a layer-8 filename 404s, suspect a typo or a
changed URL pattern before you start trying other letters.

### Map Book pages that hold two filings — the decoys

The un-suffixed filename is often the wrong map, and it cannot be guessed in
either direction. Take the suffix from layer 8's `REFERENCE`, or open the title
block. Found so far:

| Map Book page | no suffix | `A` | `B` |
|---|---|---|---|
| M B 1-46 | Coronel | Tutt | |
| M B 1-53 | Cribb and Sinclair | W. G. Nevin Tract | |
| M B 3-44 | | Normal Tract | Peck's Addition |
| M B 3-72 | | Tichenor | Dan Morris |
| M B 5-49 | (no such file) | See Tract, part of Block F, Formosa Tract — Hollywood | Perry-Hellman Property |
| M B 5-56 | | Industrial Tract | J. W. Boyd Tract — Long Beach |
| M B 5-156 | | Culver's | L.A. Canal and Reservoir Co. resub |
| M B 6-152 | | Alamitos Park | Block 21, Ord's Survey |
| M B 7-85 | Niosi | Valley Vista | |
| M B 9-100 | Dunning Tract — Hollywood | 6th St. Terminal Tract | |
| M B 11-52 | Manchester Place | Brill Property | |
| M B 11-196 | Slauson | Idlewild No. 1 | |
| M B 12-21 | Hoisington and Royer's No. 1 | Rohde | |
| M B 12-129 | Sumner and Garibaldi (the plain name is right) | | |
| M B 14-27 | | TR 46 | Cooney's |
| M B 14-129 | | TR 157 | TR 406 |

Adjacent pages are no safer: `TR0005-057a` is another unrelated Long Beach tract.

### A footprint touching a corridor is not a sheet lettering the street

Layer 8 gives a filing's footprint and date, and it is tempting to predict what
the sheet letters from them. `TR0015-037A`, the Tononi Main and Olvera Street
tract (1909), sits on the Cesar E. Chavez / Macy corridor at the plaza and was
flagged as sure to letter MACY; Kenny opened it (2026-09-18) and it letters only
Main and Olvera. Treat every such flag as a guess until someone opens the PDF.

### Series with no URL

The DPW land-records site exposes only `misc/` (M.R.) and `tract/` (M.B.). Refs in
other series have no constructible URL:

- **`DM`** — e.g. `DM 630-191`, S. P. R. R. Co's Arcade Depot Grounds (4th and
  Alameda); `DM 42-409/410`, Subdivision of Lots 500–503 of the Reservoir Lands
  (the Woolen Mill tract); `DM 569-52`, northerly portion of the Satter Tract.
- **`L S`** — `L S 1-65`, Blanchard's Re-subdivision of Block 5, Woolen Mill
  Tract.
- **`BK` / parcel maps** — `BK 154-54/55`, P M 5297-C: the guesses
  `/parcel/PM0154/…` and `/pm/PM0154/…` both return the Page-Not-Found HTML. The
  corpus holds `documents/pm017-045`, so check how that one was obtained.

The Woolen Mill names recur across sweeps, so that series is worth solving once.

### Dead ends — don't retry

- **No addressed parcels:** 100–200 E Temple, 100–150 E 1st, and 100–300, 500 and
  700–800 E 2nd — the Civic Center, Federal Courthouse and Little Tokyo
  superblocks. No parcel, so no lookup.
- **North of 2nd Street on Los Angeles Street** (103 S, 100 N, 300 N) every
  parcel reports **City Lands of Los Angeles**, M R 2-504/505 with Patent 3-64/65,
  an unnumbered lot — the same unsubdivided sheet that is useless for San Julian
  below Ninth. The Plaza end was never privately platted; its names come from
  Ord's 1849 survey, the minutes and the directories.
- **Parcels with an empty `TRACT`** are freeway right-of-way and vacated street
  (5th between Figueroa and the freeway; Wilshire west of Francisco). Those lots
  can only be carried by plats and directories.
- **A same-named collection item:** there is a second **Childs Tract**, in the
  Rancho San Rafael (Glendale), in the Huntington's collection.
- **A grey segment on the neighbourhood's edge may be a geometry gap, not a
  document gap.** Olympic east of Central is not in `data/streets-geometry.js`
  at all, because it drops below the bbox's southern edge; the same holds for
  the south ends of 8th and 10th and for 2nd and 5th west of the bbox. Check
  the geometry file before spending a download; the fix is a wider bbox
  (ADDING-A-NEIGHBORHOOD.md).

## Before you plan a trip: read the title blocks already on disk

On 2026-09-17 five title blocks were written down as in-person leads, on the
reasoning that the subdivider was not on the open web and the sheet would name
him. **Four of the five sheets were already in `documents/` as PDFs** and were
read that afternoon in about ten minutes. The "downloads first" rule above covers
this; it was broken anyway. **List the folder before writing down a trip.**

What those title blocks gave is the general lesson: **a title block names the
surveyor and the person who requested recording, not necessarily the person the
tract is named for.** Colina Park (M.R. 7-36) named six owners; the Bigelow
Tract (M.R. 24-81) was recorded at the request of A. W. Francisco, not Bigelow;
the Clement Tract (M.R. 17-41) and the Kennedy Tract (M.R. 6-193) name no
Clement and no Kennedy. The requester is a lead to run down, not the namesake
(FAMILY-NAMES.md, Phase 0: "tract namesake ≠ namer").

## Tract name → footprint: the Assessor's legal search (2026-09-06)

The **Assessor Portal Legal Search** (https://portal.assessor.lacounty.gov/ →
LEGAL SEARCH tab) searches parcels by legal-description text: typing
`WOLFSKILL` lists every parcel in the Wolfskill Orchard Tract with addresses,
which shows a tract's footprint at once. Use it when a source names a tract
("Downey Harvey tract") and you need to know which streets it touched. It has an
undocumented JSON endpoint that needs no browser, no login and no splash:

    https://portal.assessor.lacounty.gov/api/search/legal?legaldesc=MOTT
    https://portal.assessor.lacounty.gov/api/parceldetail?ain=5126001005

The first returns AIN, situs address and the full legal description for every
matching parcel — enough to place a tract named in a source ("Mott Tract",
"Bell's Addition") on the ground, and to pick the AIN to run through NavigateLA
for its Map-Ref. Note it matches loosely: `legaldesc=BELL` returns Bell Canyon
subdivisions too, so read the descriptions rather than trusting the count.

It does NOT carry the Map-Ref. NavigateLA is still the step for that.

### The same endpoint as assumption-free ground truth for an ALIGNMENT (2026-09-15)

This is the strongest check we have on whether a plat is placed right, because
it never asks which historic street is which modern street — the failure mode
that has bitten us repeatedly.

The parcel's legal description carries **the plat's own lot and block numbers**.
So: pull every parcel of the tract, keep the ones whose `Latitude`/`Longitude`
are populated, invert the document's alignment (`ll` -> `px`) and draw each
parcel's position on the scan. If the alignment is right, each marker lands on
the lot the description names. Nothing about street identification enters the
argument at any point. Four sheets were checked this way on 2026-09-15; two
passed with markers sitting inside their named lots, two failed by hundreds of
metres (the notes were in research-leads.md until 2026-09-21; git history).

Three traps, all met on that run:

- **The endpoint caps at 501 results and matches loosely.** Adding words makes
  it *worse*: `legaldesc=GREENWELL TRACT BLK 6` returns 501 mostly-unrelated
  parcels, while the bare `legaldesc=GREENWELL` returns 131, all of them the
  tract. Query the shortest distinctive word and filter locally. Until you have
  done that, an **absence** (e.g. "block 6 has no surviving parcels") proves
  nothing — with the cap in play it is probably truncation.
- **`ParcelStatus: "DELETED"` parcels usually return null coordinates**, and
  they cluster exactly where you most want them (freeway takings, street
  widenings). Pull a dozen anchors, not one.
- **Read the long metes-and-bounds descriptions.** Assembled parcels spell out
  their bounding streets in prose — "SW on NW line of Harbor Frwy and NW on NE
  line of 14th St" settled both a street identification and what the freeway
  took, in one line. These are the most informative thing the API returns and
  they are easy to skip past.

A second, cheaper check to run alongside it: the scan's own **printed scale and
lot dimensions**. Detect the drawn lot lines by column/row ink profile, take the
modal spacing, and divide the labelled footage by it — that gives m/px directly
from the sheet. On these four the scans ran 1–5% larger than their nominal
"200 feet to one inch" etc. (the DPW copies are close to but not exactly 1:1),
so treat the printed scale as a sanity band, not a target, and let the ruler and
the parcels decide.

## Network access

Which hosts answer which tool changes, and CLAUDE.md ("Network reality") is the
one place that is kept current. What matters for this pipeline:

- `pw.lacounty.gov` (the scans) cannot be downloaded from the sandbox shell; the
  fetch tool can existence-check a URL (`application/pdf` = real, the DPW "Page
  Not Found" HTML = wrong guess), but the scans have no text layer, so reading
  one means getting the PDF into `inbox/` (Kenny's click) or the Google-viewer
  route in step 3.
- NavigateLA and the two ArcGIS layers answer only from a browser page ("Skip
  the UI entirely").
- A 502 from the City parcel layer carries no CORS header, so the browser
  console reports it as a **CORS failure**. It is the service being down, not a
  blocked request; wait and retry later (it was down on 2026-09-18).

## Batch mode — the fast path (recommended after 2026-07 experience)

The slow part of the browser pipeline is READING maps: browser round-trips
through the Google-viewer workaround, screenshot by screenshot. Skip all of
that by getting the PDFs into the project folder, where any instance can read
them directly as images — no browser needed for the reading step at all:

1. An instance prepares the shopping list: NavigateLA lookups (browser,
   unavoidable, but fast — it's the PDF reading that was slow) to collect
   Map-Refs for a batch of target streets, then constructs candidate PDF URLs
   and existence-checks them with the fetch tool (Content-Type
   `application/pdf` = real; HTML = wrong guess). Output: a list of verified
   URLs, presented as clickable links.
2. **Kenny downloads the batch** — click each link, save into `inbox/` in the
   project folder (gitignored; they're re-downloadable). A dozen PDFs is a
   couple of minutes of human clicking, versus ~10 browser-minutes each for
   an instance.
3. `utilities/new-map.command` turns each one into `documents/<id>/` with its
   100 dpi render; from there it is MAP-TOOL-GUIDE.md.

This decouples the roles: a browser session harvests Map-Refs, a human clicks
download and aligns, and the reading can go to whichever system reads plats
best — the folder is self-sufficient, which is what makes handing it over
safe.

## Alignment: a human does the fitting

Hard-won division of labour (2026-07, MR006-138): instances are unreliable at
estimating pixel coordinates on a scan — every georeferencing error in this
project's history came from one eyeballing pixels. A person does it in seconds
by sight. That is why the map tool is shaped the way it is, and why alignment
is the one step that has not been automated.

The mechanics are MAP-TOOL-GUIDE.md's. What matters here is the consequence:
**an instance never estimates a pixel coordinate.** It reads
`<id>-streets.json`, which the tool writes at save time and which gives every
modern street inside the coverage polygon in the scan's own pixel space.

## Matching drawn streets to modern ones: by geometry, never by name

Old plats routinely show names that DON'T match modern streets in the obvious
way — MR066-035's block reads Bixel/Third/Figueroa/Arnold but is today's
Bixel/Miramar/Boylston/3rd, and naive label-matching (old Third = modern 3rd)
is geometrically impossible there.

The map tool does this now, and `TASK.md` — which it writes into every
document's folder — is the current brief. What follows is the reasoning behind
it, which still holds.

> **Retired 2026-09.** This section used to give a command-line recipe built on
> `georef.py` (`grid` → estimate pixel coords → `fit` → `overlay` → `locate` →
> `trace`). That program is gone; a human aligns in `utilities/map-tool.html` and the
> tool emits `<id>-streets.json`, so nobody has to estimate a pixel coordinate
> or re-fit a transform. Findings that cite "georeferenced via
> georef.py" were made that way and stand as recorded.

Read a candidate match against the whole corridor, not one point: fit every
hypothesis you are unsure between and keep the one that superposes
EVERYWHERE, not just where you anchored it. Expect up to a street-width of
offset (corner-vs-centerline, 1890s surveying, regrades); a systematic large
misfit means the hypothesis is wrong.

### What MR006-138 cost, in two lessons

That sheet's first pass got three streets wrong. Both errors are now designed
out — the map tool gives the AI pass `<id>-streets.json` rather than letting it
sample pixels, and `TASK.md` carries the rules for judging a corridor — so what
follows is only what neither of those says.

- **A real correspondence can be 40 m off.** Old Home Street against modern
  Rockwood tracked convincingly along its length but sat about 43 m away,
  because the block really was recut at a different angle. Distance alone does
  not decide a match; whether the line tracks the corridor *along its length*
  does. Under about 15 m with a clear margin is a plain match; 20–50 m that
  still tracks is "corresponds, but realigned or regraded" and deserves a note
  saying so; beyond that, with nothing tracking, the street is gone and the row
  is `vanished`.
- **Never identify from a junction.** A point where two streets meet matches
  whichever is nearest, which is meaningless — a sample at old State × Hobart
  matched three unrelated streets within 21 m. This is why a row carries an
  extent rather than a point, and why the tool refuses to snap a cross-street
  beyond its tolerance.

## Gotchas found the hard way

- **Page-number suffixes are common and not guessable.** A single page number
  in a Map Book can hold several unrelated filings: `TR0005-056a` was the
  Industrial Tract we wanted; `TR0005-056b` on the very same page number was
  an unrelated Long Beach subdivision (J.W. Boyd Tract), and `TR0005-057a`
  was yet another unrelated Long Beach tract (Palm Island Tract). **Adjacent
  or same-numbered pages are NOT guaranteed to continue or relate to the
  tract you want** — always check the title block of whatever you actually
  load.
- **A single PAGE can carry two unrelated filings too, printed one above the
  other on one sheet.** M.R. 5-307 is one scan holding both *Block W of the
  Mott Tract* (recorded June 25, 1883, for M. I. Wicks) and *Hamilton's
  Subdivision of part of the Urquidez Garden* (recorded Sept. 12, 1883, for
  A. N. Hamilton) — different ground, different clients, a mile apart. A
  parcel lookup names only the one its block sits in, so the other map arrives
  unannounced and is easy to miss if you stop reading at the tract you came
  for. Split the render in two and make two document folders, for the same
  reason a multi-page scan becomes one document per page: one alignment and one
  coverage polygon per document. Worked example, including how to place the cut
  without eyeballing it (row ink profile, cut at the midpoint of the widest
  blank band): `documents/mr005-307-a/SPLIT-NOTE.md`.
- **ASP.NET postback links** (`href="javascript:__doPostBack(...)"`, seen on
  `TractMaps.aspx`'s book-range table) usually do NOT respond to normal
  clicks (coordinate-based or `ref`-based) — many attempts produced no visible
  change. Two working fixes: (1) skip the picker entirely and go straight to
  `List.aspx?type=Tract&book=XXXX` once you know the book number (see above),
  or (2) if you must use the picker, call
  `mcp__claude-in-chrome__javascript_tool` and execute the postback directly,
  e.g. `__doPostBack('ctl00$main$DataListTM$ctl00$LinkButtonTM','')`, then
  read the resulting page. Note that reading a real anchor's `.href` via
  `javascript_tool` sometimes comes back `[BLOCKED: Cookie/query string data]`
  (the tool redacts values that look like session/viewstate data) — if that
  happens, use `find`/`read_page` to get an element `ref` and click it via
  the `computer` tool instead of reading `.href` in JS.
- **NavigateLA search box sometimes drops typed text** if you click+type
  before the page has fully finished loading — retry the click+type+Enter
  sequence once if the box comes back empty.
- **A block's modern NavigateLA Map-Ref can silently stop matching the
  historic tract map you're citing.** Later resubdivisions overwrite the
  Tract/Map-Ref a parcel reports — the county records the LATEST plat, not
  the founding one. Found this checking 3rd St east of Alameda: the block is
  clearly shown as part of the Wolfskill Orchard Tract (M.R. 30-9/13, 1888) on
  the map itself, but a 2026 NavigateLA lookup nearby returned a 20th-century
  resubdivision tract (M.B. 851-82/83) instead — not because the read is
  wrong, but because that block has been replatted since 1888. **Don't treat
  a non-matching modern Tract/Map-Ref as refuting an old map's own drawn
  content** — it only tells you the land was resubdivided later. When this
  happens, cite the historic map on its own evidence and say so explicitly in
  the note (what it shows directly) rather than leaning on a parcel match
  that isn't there.
- **The Assessor's "Lot" field is a free cross-check, and it's easy to
  ignore.** NavigateLA's Parcel Description Report includes a `Lot` field
  (e.g. `LT F`) alongside Tract/Map-Ref — this is the SAME lot lettering
  used on the recorded map itself, and it tells you whether the parcel you
  clicked is actually a labeled lot on the plat (an ordinary building
  parcel) or something else. Cross-checking it against the map BEFORE
  writing up a finding would have caught a real mistake (see next section).

## Verifying a map-feature guess against reality

The riskiest kind of claim in this whole workflow is "this feature on the old
map = this modern street," when the match is inferred from alignment/shape
rather than a literal label. That's exactly where an error happened: a
NavigateLA parcel for a Conway Place address came back with `Tract TR 10542`,
`Lot F` — but the write-up jumped past the `Lot F` field, noticed a *street*
labeled "Industrial Street" running along roughly the right alignment a bit
further south on the same map, and guessed Conway Place was that street
renamed. Kenny caught it by looking at the map himself: `Lot F` is a large,
landlocked interior building lot with no street on it or along it in 1928 at
all; "Industrial Street" is a distinct, separate street on the tract's south
edge. The real (still open) finding is that Conway Place doesn't appear under
any name on the 1928 map — it was evidently cut through later.

Lessons for next time:
- **Check the `Lot` field first, and treat it as authoritative** — it's
  usually a one-letter/one-number match against the map's own lot labels,
  and confirms or refutes a hypothesis in seconds.
- **When the best available evidence is still an eyeballed alignment match**
  (no label, no lot-number confirmation), don't write it into the document
  as a stated fact. Either flag it explicitly as an unconfirmed inference in
  the row's `note` (NAME-RESEARCH.md asks for the same), or — better, when the
  claim is the actual new finding rather than incidental context — crop and
  zoom a screenshot of the disputed area and show it to the human before
  committing to the interpretation. A human glancing at the plat catches
  mismatches an instance narrating its own reasoning can talk itself past.

## Caveats

- A street usually crosses MANY tracts; the tract containing a parcel tells
  you about that block, not the whole street. Sample 2–3 addresses per
  stretch, and expect different answers along the way — that's segment
  evidence, not noise.
- A street may predate the tract fronting it (tracts subdivide land along an
  existing road). A name on the tract map proves the name existed BY the
  recording date, not that the tract coined it.
- NavigateLA sometimes needs a second search attempt after first load;
  waits of 4–6 seconds between actions are normal.

## What to run this on next

Two queues, and they answer different questions:

- `generated/report.md`, rebuilt by every `node tools/generate.js`, lists the streets
  no document speaks about yet — the ones drawn grey on the map. That is the
  coverage queue, and it is where a tract lookup pays best.
- `handbook/research-leads.md` holds the specific open questions: extents
  nobody has pinned, namesakes nobody has traced, documents identified but not
  yet obtained.
