# Research leads

> **Path note.** This is a dated log, so old entries name things that have
> since moved or gone: `align.html` (now `attic/align.html`), `georef.py` and
> `overlay-trial/` (retired 2026-09), `tracts/` (now `inbox/` and
> `documents/<id>/`), and the loose `omnibus-*.md` files (now inside
> `documents/ord-4093/`). Left as written rather than rewritten.
>
> **Where a finding lands.** This file predates the document model, so it talks
> about `streets-data.js`. A finding now goes to one of two places: *where* a
> name applied becomes rows on a document in `documents/`, read in with the map
> tool; *who or what* it was named after becomes an entity in `names.js`
> (NAME-RESEARCH.md). `names-new.js` is the queue of names waiting on the
> second.


Unverified hunches, patterns, and open questions — things NOT yet solid enough
for streets-data.js. Rule of thumb: a claim with a citable source goes straight
into the data (partial entries are fine); anything inferred, remembered, or
pattern-based waits here until verified.

Workflow: when doing a street's full pass, check here first and consume its
leads (verify → into the entry; debunk → delete, noting why if instructive).
Periodically sweep the whole file. Keep entries dated.

## The 1897 ordinance — status as of 2026-08

- **✔ IDENTIFIED: Ordinance No. 4093 (New Series), Ordinance Book IV p. 337**
  (adopted Feb. 23, 1897; the vetoed Feb. 2 version is at p. 331). From City
  Council minutes, Record Series R05.557, transcribed in
  `omnibus-1897-renaming-council-minutes.md` (ChatGPT transcription of the
  City Clerk's scans, obtained by Kenny 2026-08; not yet spot-checked against
  the images — the first application of any line from it owes that check). The
  ⭐ target is no longer "find the ordinance" but "get two known ledger
  pages": **request with the City Archivist is in flight (Kenny, 2026-08).**
- **Directory route — NEGATIVE (2026-08):** the 1898 city directory carries no
  list of changes; the 1897 directory says it already incorporates the 326
  council changes but doesn't print them as a table. Don't re-run this.
  Recorded in SERIAL-SOURCES.md too.
- **Still open, unchanged:** the Dec. 27, 1897 supplementary renaming
  ordinance (city engineer's cleanup batch, list never printed) — same
  archives trail, and presumably findable the same way now, by ordinance
  number in the same books.
- **What the minutes changed in what was already banked** (full table in the
  new file): a dozen Herald OCR corrections, the Escalon/Zaragoza conflict
  settled, the "Lacy vs. Canada → Avenue 33" conflict resolved as a genuine
  duplicate, and the Feb. 23 floor amendments recorded for the first time
  (De La Guerra→Boylston, Nevada→Georgia, Manitou St→Ave, Broadway St→Canal
  St, Stanley→Tropico, Dana→Stanley, Wood Ave→Griffin Ave).
- **⚠ Downgrade — 3rd Street, east of Mission Rd:** the "Mono street … had
  been changed to Third … restored" HOT LEAD below rests on the Feb. 19
  Herald. The manuscript's corresponding line reads **Moore**, not Mono, so
  the lead is probably an OCR artifact. Don't build a segment story on it
  until a Mono Street is independently located.
- **Apply pass owed:** the in-coverage lines (Figueroa/Boylston, Georgia,
  Central, 4th, 5th, Marion, Stanford/Ruth) are already in the data from the
  Herald; what the manuscript adds is that each can now name the instrument —
  Ordinance No. 4093 (N.S.) — and cite a manuscript record. Not yet applied
  as of 2026-08.

## Castelar and Yale: requested Feb. 1874, enacted where? (2026-09-04)

`documents/lah-1874-02-13/` is the Herald's report of a property owners'
petition asking that **Grasshopper → Union Avenue, Bull → Castelar, and Wasp →
Yale**, referred to a special committee to draft an ordinance.

**One of the three did not happen.** Two weeks later
(`documents/lah-1874-02-27/`) a rival petition wins and Grasshopper becomes
**Pearl**, not Union Avenue — so this petition is a request, not an outcome,
and the corpus now has proof of that in the same pair of documents.

Which leaves Castelar and Yale **unattested by any instrument we have read**.
The Feb. 27 item records one ordinance carrying, for one street: "An ordinance
changing Grasshopper street to Pearl street was carried." Castelar Street and
Yale Street plainly exist, so an instrument exists; nothing in hand names it.

Where to look:
- the rest of the Feb. 27 column, and the council reports between Feb. 13 and
  Feb. 27 — the committee was told to draft *an* ordinance for all three, so
  it may have carried in parts;
- the 1874 council minutes themselves (Record Series R05.557, the series that
  produced the 1897 transcription), which would give the ordinance a number.

⚠ **`names.js` currently overclaims this.** `bull` says "Renamed Castelar
Street by petition in February 1874" and `hornet` "Renamed Yale in February
1874, by the same petition", both citing the Feb. 14 article — which is the
petition, and the petition is exactly what we now know does not settle the
outcome. Both notes are PUBLIC. They want softening to "petitioned in February
1874; the enacting ordinance has not been found" until it is. Left for Kenny
rather than rewritten here, since the prose is his and he may know more.

(Both entities also cite that article as a `source`, which `check-model.js`
now flags — "cites documents/lah-1874-02-13/, which does NOT letter this
name". That flag is correct and is the same finding arriving by machine.)

## Bunker Hill Avenue, 1874 — an unplaced name (2026-09-04)

The same Herald column that reports the Grasshopper → Pearl renaming
(`documents/lah-1874-02-27/`, CDNC `LAH18740227.2.10`) carries three other
council items, read off the scan by Kenny:

- "the grade of **Fort street** from Temple street to Second street"
- "the grade of **Temple** from Fort to **Bunker Hill Avenue**"
- "defining the lines of **Bunker Hill Avenue** and declaring it a public avenue"

Fort Street is modern Broadway (renamed Feb. 1890), so the second item puts
Bunker Hill Avenue somewhere west of Broadway along Temple — which in modern
terms is Hill, Olive, Grand or Hope. **That is as far as the text goes.**
Hill Street is the tempting reading and is not the only one, and settling it by
which name sounds right is the failure mode rule 2 exists to stop.

Deliberately NOT entered as an attestation from that document: the document is
`sweptFully` for the one renaming it reports, and a row here would claim a name
on ground the text does not identify. What would settle it: a pre-1890 map or
survey of the Temple/Fort block naming the avenue, or the 1874 council minutes
themselves (Record Series R05.557 — the same series that produced the 1897
transcription), which would give the "defining the lines" item its metes and
bounds.

Also worth noting for whoever picks this up: "declaring it a public avenue" in
1874 dates the pavement, so whichever modern street it is gains an existence
claim as well as a name one.

## Serial-source leads (Sanborn atlases & city directories, 2026-08)

Two source families new to the project, brought in by Kenny 2026-08 and
written up in SERIAL-SOURCES.md. Nothing below has been run yet.

- **~~⭐ The 1897 and 1898 city directories as a route to the renaming
  ordinance~~ — RUN, NEGATIVE (Kenny, 2026-08):** the 1898 directory has no
  list of changes, and the 1897 directory states it already incorporates the
  326 council changes without printing them as a table. The hypothesis was
  that a publisher absorbing 326 changes would print a concordance; it didn't.
  Don't re-run. (The directories remain valuable for their annual street
  guides — the extent-and-bracket use below — just not for the ordinance.)
- **Sanborn index-sheet gazetteer, 1888 / 1894 / 1906 / 1950** (2026-08):
  each volume carries a street index and a key map, so the indexes read
  across editions give a per-year existence timeline for every street in the
  city — from roughly a dozen images, all of them text rather than plat ink.
  Do this BEFORE reading any Sanborn sheets: it is the prioritization tool,
  and it says which streets have a question at all. Needs a human/browser
  download step (LOC returns 403 to automated fetching of its search, JSON
  API and IIIF manifests; item pages read fine).
- **The 1894 + 1906 Sanborn pair as the bracket for the "presumably folded in
  during the Feb. 1897 renaming" hedges** (2026-08): three nameHistory items
  currently rest on that presumption with no source naming the stretch —
  2nd Street (east-of-Alameda/Guadalupe lineage) and 3rd Street's
  "Bixel to Boylston (Arnold St)" and "Alameda to Santa Fe (Georgia St)"
  segments. Sanborn sheets covering those blocks in 1894 and 1906 would
  replace the presumption with a dated bracket on the exact blocks, whether
  or not the ordinance itself ever turns up. Same trick applies wholesale to
  the 96 "not yet researched" field values in streets-data.js as of 2026-08
  (34 `planned`, 59 `built`, 3 elsewhere).
- **ProQuest Digital Sanborn Maps (1867–1970), via an LAPL card** (2026-08):
  many more L.A. years than LOC has online, including the 1929/1930 and
  1960s editions. Authenticated, so it is a human-only path — worth a session
  of Kenny's time if the LOC editions leave a bracket too wide.
- **Annexed-city Sanborn volumes** (2026-08): Hollywood, Highland Park,
  San Pedro, Venice, Eagle Rock and the rest were published under their OWN
  city names before annexation — search LOC that way when coverage grows past
  Downtown. Annexation is itself a renaming event class (duplicate names with
  existing L.A. streets had to be resolved), so the pre- and post-annexation
  editions of an annexed town are a natural bracket for that whole class.
- **Checker follow-up** (2026-08): `check-data.js`'s `PRIMARY` regex doesn't
  recognize `loc.gov` or `rescarta.lapl.org`, so the primary-anchor count will
  under-report once Sanborn/directory sources land. Add them with the first
  such source.

## Segment-review flags (2026-07) — obsolete by construction

> **Closed 2026-09.** Seven flags lived here — Figueroa south of Pico, Hill
> south of Cesar Chavez, Garey, Mateo, Olive, Santa Fe and Pico — and every one
> of them said the same thing: *a citation had been applied to more of a street
> than the document actually covers, so the entry was hedged with prose and
> might want a split later.*
>
> That whole class of problem no longer exists. A row carries its own extent, a
> document carries its own coverage polygon, and the generator segments a
> street from the rows. A sheet that documents 200 m of Santa Fe Avenue now
> produces a segment covering 200 m; the rest of the street stays grey, because
> nothing speaks about it. There is nothing left to hedge and no split to
> schedule — the geometry does it.
>
> Two of the seven asked a real question underneath the bookkeeping: **how far
> south of the Plaza did the 1849 grid actually reach**, for Hill Street and for
> Olive Street? That is now a lookup rather than a research task. The six
> Hutton/Ord sheets are all swept, so what the survey attests about any street
> is exactly what their rows say and their coverage polygons reach — including
> `absent` rows where the survey covers ground and draws nothing. Read
> `documents/mr053-06*/` rather than researching it afresh.

## Findings from the first alignments (2026-07)

> **Applied and closed.** The georeferenced identifications this section used
> to list — MR066-035's Third→Miramar and Arnold→3rd, and MR006-138's State→
> Colton, Home→Rockwood, Hobart→Lake Shore Terrace, Waters→Douglas, Lake→
> Glendale and Aztec→Belmont — are all rows in `documents/` now, with the
> sheets swept. The reading of them is in git if it is ever wanted. Two things
> that were open then are still open and kept below.

- **Old Home Street ≈ modern Rockwood Street** — a real correspondence about
  43 m off, because the block was recut at a different angle. When it was
  realigned is unpinned; it needs a map between 1884 and today.
- **Montezuma Avenue = Dawson Street** has no entity: Dawson was dropped from
  MR006-138 as polygon overshoot, so it needs its own document.


- **MR006-138 name entities — research pass** (2026-08-30). Eleven entities
  were minted in review; ten remain in `names-new.js`. What was checked:
  - **Patton Street — SOLVED, moved into `names.js`.** Kines: "This 1883 street
    was named for its developer, attorney George Smith Patton (1856-1927)."
    Patton was **Andrew Glassell's nephew** and replaced George Hugh Smith in
    Glassell's firm (Kines's Glassell Street page; Wikipedia). Glassell
    subdivided this tract the following year, so the tract name really did
    lead somewhere.
  - **Hobart Street — NOT Hobart Boulevard.** Kines dates Koreatown's Hobart
    Blvd to 1887 and names it for Hobart Addison Stewart (1868-1915), a Flint
    dairy farmer, on someone else's subdivision. Different roadway, three years
    later. Kept separate; noted in the entity.
  - **Lake Avenue — two candidates, neither sourced.** Echo Park Lake (the
    reservoir predates 1884 and the street runs at it) is the simple reading.
    The other is a coincidence worth recording: Patton married **Ruth Wilson**
    in 1884, and Pasadena's Lake Avenue is named for her father's **Lake
    Vineyard** (Kines). Wants a contemporary source.
  - **Aztec Avenue — SOLVED, moved into `names.js`.** Kenny noticed that a block
    outside coverage the same street meets **Cortez Street**, with **Pizarro
    Street** 206 m away — a naming scheme, not a coincidence. Kines's Cortez
    Street page confirms it: Cortez (1884, *Glassell's Subdivision No. 2*,
    Andrew Glassell) is Hernán Cortés, and "what is now **Belmont Avenue** was
    called **Aztec Avenue** and what is now **Dawson Street** was called
    **Montezuma Avenue** … Glassell was clearly going for a theme here." That
    also confirms Aztec = Belmont **independently of our alignment**, which is
    the first outside check the AI pass has had. Follow-ups: *Montezuma Avenue =
    Dawson Street* has no entity yet (Dawson was dropped from MR006-138 as
    polygon overshoot, so it needs its own document); Pizarro has no Kines page;
    and it is worth pinning down how "Glassell's Subdivision No. 2" relates to
    M.R. 6-138's "Glassell's Subdivision of Lot 7 etc."
  - **Council, Home, Waters, Welcome, Diamond, Court** — not covered by Kines.
    His Echo Park index (34 streets, both pages read) contains none of them;
    Patton is the only one of ours he has. Web search found nothing usable.
  - The 1897 omnibus in `documents/ord-4093/` does **not** cover these
    renamings — grepped, no hits. The full 326-change list was never printed,
    so State→Colton, Home→Rockwood, Hobart→Lake Shore Terrace, Waters→Douglas,
    Lake→Glendale, Aztec→Belmont and Diamond→Beverly are all still undated.
    **That is the next real target**: one source would date seven renamings.
    The city engineer's Oct. 26, 1897 second list is a candidate; so are the
    city directories and Sanborn sheets.
  - **Identity decisions taken** (Kenny): `diamond-street` is ONE entity
    spanning the plat's Diamond (modern Beverly Blvd here) and the modern
    Diamond Street 869 m east — roughly collinear, ~30 m apart, one naming that
    lost its middle. `state-street` was **renamed `state-colton`** so it cannot
    collide with Boyle Heights' State Street, which is a different naming and
    must get its own disambiguated id when that area is encoded.

## Open leads — extents and dates

- **Moneta Avenue → Broadway (1925–26)** (2026-07): much of Moneta Ave. was
  renamed Broadway in 1925–26, well south of current coverage. Banked for
  whenever that area is added — it will want its own documents and a
  `moneta-avenue` entity; nothing to do until the neighbourhood exists.

- **Arts District warehouse-pocket streets** (2026-07): two batch passes done.
  Batch 1 — Mateo, Traction, Colyton, Santa Fe (full Kines sources); Hewitt
  (partial: formerly Carolina Street per the Colyton page, own namesake/rename
  date open); Palmetto, Factory Place, Willow, Molino, Merrick, Imperial
  (`unknown`, web search exhausted, not covered by Kines). Batch 2 — Seaton
  (full Kines source, shares the Colyton/Howard-tract page); Myers, Anderson,
  Mill, Utah, Decatur, Jesse, Mesquit (`unknown`, same story — nothing found,
  not covered by Kines; Mill/Utah/Decatur/Mesquit each carry a flagged
  speculative note — mill history, state-name tract pattern, Stephen Decatur,
  mesquite — none confirmed). Next step for all `unknown` entries in this
  pocket: a CDNC sweep (Feb.–Apr. 1897 renaming ordinance is the top target
  already flagged above; also try 1880s Herald tract-sale notices) and/or
  L.A. County tract-map lookups via NavigateLA — both need a real browser,
  not fetch tools.
- **Arts District warehouse-pocket streets, batch 3** (2026-07): Keller Street
  now has a full source (L.A. Revisited: promoted by Matthew Keller — the same
  "Don Mateo" of Mateo Street — as part of the 1869 Aliso Tract; geographically
  just north of the Arts District core, near Ramirez St/Piper Tech, not inside
  the Arts District bbox proper but thematically tied to Mateo). 4th Place and
  7th Place entered as spurs of the numbered grid (category "number"), not
  distinct namesakes. Channing St, Conway Place, Lawrence St, Avery St, Plaza
  Del Sol all `unknown` — web search exhausted, not covered by Kines. Same
  CDNC/tract-map follow-up as the rest of the pocket applies.

- **Larkin/Short St extent (4th St) and Lugo St extent (5th St)** (2026-07,
  partially resolved 2026-07, segments split 2026-07): Kenny's hunch — check
  828 E 4th St (the building now SCI-Arc) and 1129 E 5th St (Frederick
  Preston Howard tract, which also produced Seaton/Colyton) — paid off
  geographically. Both addresses land in the same recorded tract, F.P.
  Howard & Co.'s Subdivision of the Bliss Tract (M.R. 12-42, 1886, between
  Alameda and the Santa Fe grounds): 828 E 4th St's parcel fronted "Huber
  Street," 1100 E 5th St's parcel (1129 doesn't currently exist as an
  address; 1100 is the same block) fronted "Poplar Street," one block apart
  — the right spacing and corridor for Larkin/Short and Lugo respectively.
  Both streets have now been split into segments (west of Alameda / Alameda–
  Hewitt / east of Hewitt) with the Huber→4th and Poplar→5th story living in
  the middle segment's nameHistory. NOT yet proven: no source directly
  documents Huber→Larkin/Short or Poplar→Lugo by name — that link still needs
  a CDNC or city-directory search from the 1890s (search for "Huber street"
  and "Poplar street" renamed, or for "Larkin street"/"Lugo street" with a
  cross-street to confirm the same location). The "east of Hewitt" segments
  on both streets are still "not yet researched" placeholders — the Boyle
  Heights 2nd St→4th and 4th St→5th transfers (see below) belong somewhere
  further east than Hewitt, exact extent unknown.
  Complication found while reading the omnibus files: there appear to be *two*
  distinct "Lugo street" mentions in the 1897 sources — the Feb. 21 committee
  report's "Lugo street → Fifth street" (an existing street elsewhere), versus
  the Feb. 18 joint-session item where the ordinance had floated "Lugo street"
  as the new name for Boyle Heights' Second St (rejected after Workman's
  protest, which became Fourth St instead). These may or may not be the same
  street — worth keeping in mind when the CDNC search is done.
- **Wolfskill Ave / original-Central Ave boundary**: still open — this stretch
  is south of Vernon, outside current map coverage (NEIGHBORHOODS bbox ends at
  lat 34.033). Not actionable until a South L.A. neighborhood is added.
  (2026-07 migration: trimmed a duplicate of this same open question from the
  segment's own note; also displaced from that note — Central Ave's stretch
  through South L.A. became the heart of Black Los Angeles in the 20th
  century, a history outside current coverage, worth a proper mention once
  that stretch is added.)
- **9th→Olympic renaming date, east of Central** (2026-07): Olympic absorbed
  9th's continuation east of Central Ave sometime 1935–1945. Pin the ordinance
  (City Archives / L.A. Times archive) — this one is L.A. Times, 1935–1945
  (LAPL ProQuest access), not CDNC.
- **Figueroa south of Pico, pre-1897** (2026-07): Pearl ended at Pico; the
  entry's southern segment is open. Old maps (1880s Baist/Sanborn) should show
  what that stretch was called.
- **Georgia St → Georgia Bell renaming date** (2026-07): unsettled — Kines says
  1883; Forman's 1897 testimony says Sept. 11, 1890 (or 1880, OCR unclear).
  Council ordinance books would settle it. (Trimmed from Georgia Street's note;
  re-trimmed 2026-07 migration — a duplicate of this same sentence had crept
  back into the entry's note.)
- **Santa Fe Ave "Tulip" extent** (2026-07): the Goodwin Tract citation covers
  only the stretch south of 6th. Whether the same "Tulip"-era name applied
  further north (toward 1st/3rd, where the depots sat) is unchecked. (Trimmed
  from Santa Fe Avenue's note.)
- **Court Street (Angelino Heights) as a lost eastern stretch of Temple
  Street?** (2026-07, Kenny's hunch): Temple Street has two visible bends on
  the map — one at Fremont Ave, one at Edgeware Rd. Continue Court Street's
  own alignment straight past its eastern end and it lines up with the
  Temple/Fremont intersection, closer to matching the eastern stretch of
  Temple than anything Court currently connects to. Worth pulling tract maps
  for that stretch of Temple (between Fremont and downtown) to check whether
  it was ever platted as "Court Street" before Temple absorbed it — same
  Glassell's Subdivision (M.R. 6-138, sourced into Court Street's entry this
  pass) or an adjacent tract might show it. Not yet checked.
## Sourced finds awaiting entries

Also of note in the Feb. 27, 1874 article
(https://cdnc.ucr.edu/?a=d&d=LAH18740227.2.10): the same council session
established Fort Street's grade and declared Bunker Hill Avenue a public
street (40 ft wide, ~3,000 ft) — context for Broadway/Hill-area entries.

## Open leads — Arts District, and the undated renamings

> Three bullets closed here (2026-09): the Court/Olympic/Pico tract batch and
> the MR066-035 Third↔Arnold correction are both applied and encoded — the
> correction is now Rule 2 in CLAUDE.md and the reason MR066-035 is the
> benchmark sheet. Spruce Street is answered: `names.js` records it as modern
> Mateo Street, with a row on `documents/mr011-042/`.

- **Goodwin/Thomas/Mills-Wicks batch, loose ends** (2026-07): reading the three
  downloaded tracts closely (Kenny's tip — read the local PDFs directly rather
  than the browser viewer, much easier for side-by-side comparison) confirmed
  Hewitt's segment split, 2nd St's "Guadalupe" stretch, Traction Ave's "Second
  St" predecessor, and Imperial/Santa Fe's "Palm"/"Tulip" predecessors (all
  now in streets-data.js). Three loose ends remain:
  - **Second unnamed "STREET" on the Thomas Tract's north sheet (M.R. 3-61)**:
    the sheet shows TWO unlabeled N-S streets between "Guadalupe" and
    "Georgia." One is very likely [[Rose Street|Rose]] (flagged in that
    entry, geographically plausible but not a literal label match — confirmed
    Rose St crosses E 2nd St right at the Guadalupe/Georgia band, and a
    nearby parcel at Alameda/Traction/Rose shows all three streets meeting,
    though that parcel's own Tract/Map-Ref is a 20th-century resubdivision,
    not the 1875 Thomas Tract, so it's positional evidence only). The OTHER
    unnamed street (further east, lots 13-22 on that sheet) is still
    completely unidentified — not checked against any modern street yet.
  - **4th Place west of Hewitt**: Kenny's read of the downloaded Mills and
    Wicks tract suggested 4th Place (west of Hewitt) AND 4th St (east of
    Hewitt) were both once "Third St." Close re-examination of M.R. 13-87
    (the Apr.–May 1886 sheet) shows the "Third" band — including Lot 77,
    confirmed via NavigateLA as 813 E 4th Place — sitting entirely EAST of
    Hewitt (Lot B/C/D, the area west of Hewitt on this same sheet, are large
    unsubdivided lots with no through street drawn at all). Applied the part
    that checks out (4th Place AND 4th St's "east of Hewitt" segment both
    trace to this same "Third" band, immediately adjacent to Hewitt) to both
    entries. The "west of Hewitt" half of the claim doesn't have a source in
    the three tracts on hand — possibly it's on the Bliss Tract (M.R. 12-42,
    already cited elsewhere for Huber/Poplar/Carolina/Colyton/Seaton/
    Palmetto but not re-examined this pass) or possibly a mix-up given how
    disorienting the diagonal, non-north-up plat pages are. Worth Kenny
    double-checking directly, or downloading MR012-042.pdf for a fresh look,
    before treating "west of Hewitt" as resolved either way.


- **"Mills and Wicks Subdn."** (2026-07, partially resolved 2026-07): while
  re-checking the F.P. Howard/Bliss Tract map (M.R. 12-42) for Molino/Hewitt
  content, its margin note names the neighboring subdivision immediately east
  of Carolina St (now Hewitt) as "Mills and Wicks Subdn." Found via an
  unrelated NavigateLA lookup (813 E 4th Place, tract-batch pass): this is the
  "Mills and Wicks Extension of Second St. and adjoining subdivision," M.R.
  13-87/88 — a big two-page filing. Page 87 (Apr.–May 1886) covers the
  Georgia/Second/Third/Hewitt/Huber grid, north of the Bliss Tract; page 88
  (the "additional subdivisions," Jan. 1887) covers the block bordering "O.H.
  Bliss," and DOES show Mateo Street directly, right against a "Keller Est."
  label — added as Mateo's primary source. Molino still doesn't appear on
  either page — that lead stays open; the only remaining unexplored angle is
  whatever lies between this sheet and the Bliss Tract's own drawn extent.
  Also: the same page 87 shows Hewitt St by name directly (Apr.–May 1886,
  same year as but a few months before the Bliss Tract's "Carolina Street" —
  added to Hewitt's entry as a complication, since the two tracts apparently
  used different names for the same street corridor in the same year).
- **Molino Street tract lookup — blocked by modern redevelopment** (2026-07):
  tried multiple addresses (530 S Molino St and others); NavigateLA returns
  only one giant modern parcel, Tract TR 060507-C / M.B. 1313-4/5 (the
  "Molino Street Lofts" apartment complex, 91 old APNs merged into one lot
  spanning the entire 5th–Palmetto block front). The original small-lot
  fabric and any old M.R./tract reference for this block have been erased by
  that development — this street can't be dated via NavigateLA. The "Mills
  and Wicks" lead above is the next avenue, not another NavigateLA pass.
