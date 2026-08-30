# Research leads

> **Path note (2026-08-26):** this file is a dated log, so its references to
> `align.html`, `tracts/` and the loose `omnibus-*.md` files are left as they
> were written. Those things now live at `attic/align.html`, `inbox/` or
> `documents/<id>/`, and the omnibus files are inside `documents/ord-4093/`.


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

## Open leads (2026-07 migration additions)

- **Moneta Avenue → Broadway (1925–26)** (2026-07, displaced from Broadway's
  "south of Cesar Chavez" segment note during the segment-model migration):
  farther south of current map coverage, much of Moneta Ave. was renamed
  Broadway 1925–26. No Moneta Avenue entry exists yet and this stretch is
  outside current NEIGHBORHOODS coverage — bank for whenever that area is
  added, rather than a segment split now.

## Segment-review flags (2026-07 migration)

- **Figueroa Street, "south of Pico" segment** (2026-07): the segment's only
  built-date source is the Edgar's Subdivision resubdivision map (M.R. 59-56,
  surveyed Aug. 1895), which documents "Figueroa Street" near 20th & Flower —
  roughly the southern half of this short Pico-to-coverage-edge stretch (Pico
  at lat 34.0406 down to the coverage edge at 34.0343). The block immediately
  south of Pico itself isn't separately evidenced. (hedged; split candidate
  when more of the stretch is documented — the built text already scoped the
  claim to "near 20th & Flower," so no further data change was needed in the
  2026-07 split pass.)

- **Hill Street, "south of Cesar Chavez (downtown)" segment** (2026-07 review
  pass): carries a 1849 Ord-survey origin claim on a band whose southern edge
  is unpinned — the survey attests "Calle Loma" within the grid, but how far
  south of the Plaza area that grid reached here isn't established, so the
  claim as it stood over-ran the survey's actual coverage. (hedged; split
  pending survey south-edge research — 2026-07 split pass reworded `planned`,
  `built`, and the nameHistory origin item to state the survey attests the
  name only within the 1849 grid, whose southern extent here isn't pinned
  down; no split yet since the actual boundary cross-street isn't known.)

- **Garey Street — single 1875 tract-map citation for a ~790 m street whose
  own note says it "later absorbed the former Amelia and Messer streets"**
  (2026-07 single-entry migration): the entry's only dated claim ("already
  'Garey' by May 19, 1875") comes from the Thomas Tract map, which documents
  the name on whatever stretch that tract fronts (per its transcription: "east
  of Alameda, around today's Garey/Hewitt/Traction blocks, 2nd–3rd Sts") — not
  the parts later folded in from Amelia and Messer (dates/extents for that
  absorption aren't researched here). Geometry: Garey Street spans lat
  34.0459–34.0531 in current coverage. (hedged; split candidate when more of
  the stretch is documented — 2026-07 split pass added "on the blocks near
  Garey/Hewitt (2nd–3rd Sts, east of Alameda)" to the built text.)

- **Mateo Street — single 1887 tract-sheet citation for a ~1,385 m street;
  entry's own note flags a gap in that sheet's coverage** (2026-07 single-
  entry migration): the only source for the "already 'Mateo' by Jan. 1887"
  claim is the Mills and Wicks Extension of Second St. tract's additional-
  lots sheet, which the note itself says "confirms Mateo, labeled right
  against 'Keller Est.,' but still doesn't mention Molino" — i.e. the source
  is scoped to the blocks near the Keller estate, not necessarily the whole
  modern street (lat 34.0296–34.0421 in current coverage). (hedged; split
  candidate when more of the stretch is documented — 2026-07 split pass
  reworded the built text to state the claim is "on the tract's blocks
  directly bordering the 'Keller Est.' label ... not separately documented
  along the rest of the modern street.")

- **Olive Street — blanket "by 1849" Ord-survey `planned` date on a street
  that runs well south of the surveyed grid** (2026-07 single-entry
  migration): the entry cites `ORD_SURVEY`/sheet 68 ("Calle Accytuna") for
  the whole street, but the recorded copy's numbered cross-streets only ran
  Calle 1ª–8ª. `node intersect.js "Olive Street" "8th Street"` → lat 34.0452
  (8th, the grid's south edge); `node intersect.js "Olive Street" "9th
  Street"` → lat 34.0437; `node intersect.js "Olive Street" "Pico Boulevard"`
  → lat 34.0381. Olive Street's own geometry spans lat 34.0324–34.0550 in
  current coverage, i.e. it continues a full 8 blocks (~1,400 m) south of
  8th, past 9th and Pico, with no survey coverage at all for that stretch.
  (hedged; split pending survey south-edge research — 2026-07 split pass
  reworded `planned` to state the survey attests the name only within the
  Calle 1ª–8ª grid, with how far south of 8th the name extended by 1849 not
  pinned down; a 3rd-Street-style split at 8th remains the obvious next move
  once that stretch's own join date is researched.)

- **Santa Fe Avenue — "Tulip Street" origin item covers a couple of blocks,
  applied as the whole street's pre-1887 history** (2026-07 single-entry
  migration): the nameHistory's own text already scopes the 1886 Goodwin
  Tract citation to "the stretch south of 6th St, between Imperial (then
  'Palm') and Mesquit" — `node intersect.js "Santa Fe Avenue" "6th Street"` →
  lat 34.0384; `"Imperial Street"` → lat 34.0364; `"Mesquit Street"` → lat
  34.0381, so the attested band is roughly 34.0364–34.0384 (~200 m). Santa Fe
  Avenue's own geometry spans lat 34.0306–34.0496 (~2,100 m) in current
  coverage — the "Tulip Street" item is presented as this single-entry
  street's one and only former name, but the tract map backing it covers
  under a tenth of the street's length. (hedged; split candidate when more of
  the stretch is documented — 2026-07 split pass added a note sentence
  stating "Tulip" is documented only on the Goodwin Tract's own frontage,
  with no former name documented north of 6th or south of Imperial.)

- **Pico Boulevard — `built` date sourced to a single tract map at one
  intersection, applied to the whole boulevard** (2026-07 single-entry
  migration): "already 'Pico' by Oct. 1885" cites the Cameron Tract survey,
  whose source description itself says it "labels this street 'Pico'
  directly, at Figueroa" — `node intersect.js "Pico Boulevard" "Figueroa
  Street"` → lat 34.0406. Pico Boulevard's own geometry spans lat
  34.0328–34.0425 in current coverage (and the real street continues miles
  further west/east beyond the map), so the 1885 date is only directly
  attested at that one cross-street, not along the boulevard generally. The
  `planned` field's "by 1855 (most likely 1853)" is a secondary (lastreetnames.com)
  claim about the name generally, not tied to a single document, so it isn't
  part of this flag. (hedged; split candidate when more of the stretch is
  documented — 2026-07 split pass added "near the Figueroa Street
  intersection — not separately documented along the rest of the boulevard"
  to the built text.)

### Resolved (2026-07 split pass)

- **Central Avenue, "north of 2nd" segment**: split at 1st Street
  (`node intersect.js "Central Avenue" "1st Street"` → lat 34.0492) into
  "north of 1st" (not yet researched — the Vine St evidence is explicitly
  scoped south of 1st) and "1st to 2nd (former Vine St)" (the segment's
  existing Vine St → Central Avenue content, unchanged).

- **4th Street & 5th Street, "west of Alameda" segments**: each split at
  Figueroa and Main into three segments — "west of Figueroa" (not yet
  researched), "Figueroa to Main (original Nth St)" (the existing 1849
  Ord-survey origin item, with the "when the rest of this stretch joined is
  not yet researched" hedge removed since the flanking segments now say so
  directly), and "Main to Alameda" (extension, not yet researched, hedged
  like 3rd Street's own "Main to Alameda" segment). 4th Street bands:
  `node intersect.js "4th Street" "Figueroa Street"` → lng -118.2560;
  `node intersect.js "4th Street" "Main Street"` → lng -118.2472. 5th Street
  bands: `node intersect.js "5th Street" "Figueroa Street"` → lng -118.2571;
  `node intersect.js "5th Street" "Main Street"` → lng -118.2486. The
  "Alameda to Hewitt" and "east of Hewitt" segments on both streets are
  unchanged.

- **Olympic Blvd, "west of Central Ave (former 10th St)" segment**: the
  nameHistory item's `from: "by 1849"` for "10th Street" was changed to `"?"`
  and its origin text hedged to "ordinal position in the downtown grid; the
  1849 survey's numbered streets ran only to 8th, so when 10th was laid out
  is not yet researched," and the segment's `planned` field (which carried
  the same "by 1849 (as 10th Street)" claim) was changed to "not yet
  researched" for consistency — see the 9th–12th Street resolution below.
  The segment's real built evidence (the 1875 Williams subdivision showing
  "Tenth") is untouched.

- **2nd Street, "west of Figueroa" segment**: `planned` changed from `{text:
  "by 1849", url: ORD_SURVEY.url}` to "not yet researched"; the ORD_SURVEY
  and ORD_RECORDED source entries were removed (they only backed the 1849
  claim); the 1909 Crownwood built citation is untouched.

- **2nd Street, "east of Alameda (Guadalupe St)" segment**: removed the
  carried-over `ORD_SURVEY` source entry (it never documented this
  post-Alameda stretch).

- **1st, 6th, 7th, 8th Street — single-entry streets split 3rd-Street-style**:
  each converted from a flat `numberedStreet()`-style entry into three
  segments — "west of Figueroa" (not yet researched, no nameHistory),
  "Figueroa to Main (original Nth St)" (the Ord-grid core, `planned: {text:
  "by 1849", url: ORD_SURVEY.url}`, single-item origin nameHistory), and
  "east of Main" (extension, not yet researched, hedged like 3rd Street's
  "Main to Alameda"). Bands via `node intersect.js`: 1st × Figueroa →
  lng -118.2520, 1st × Main → lng -118.2434; 6th × Figueroa → lng -118.2585,
  6th × Main → lng -118.2499; 7th × Figueroa → lng -118.2599, 7th × Main →
  lng -118.2514; 8th × Figueroa → lng -118.2612, 8th × Main → lng -118.2532.
  Geometry extents confirmed all four run west of Figueroa and east of Main
  before splitting (1st: -118.2604 to -118.2248; 6th: -118.2732 to -118.2246;
  7th: -118.2729 to -118.2248; 8th: -118.2722 to -118.2395).

- **9th, 10th, 11th, 12th Street — "by 1849" claim removed**: added `planned:
  "not yet researched"` to each street's `numberedStreet()` opts, mirroring
  14th/15th/17th/18th's existing override (the shared helper itself was not
  touched). 9th and 10th Street's own explicit `sources` arrays (they already
  overrode `sources` for other reasons) had their `ORD_SURVEY` entry removed,
  since it only backed the false 1849 claim; 11th and 12th, which didn't
  previously override `sources`, were left on the helper's default source
  list, matching how 14th/15th/17th/18th already handle it.

- **James M Wood Boulevard — "by 1849 (as 9th Street)" claim removed**:
  `planned` changed to "not yet researched" (no Ord source was present to
  remove — this entry never had one in its `sources` array, only via the
  `planned.url` link). For consistency with the Olympic Blvd fix above, the
  nameHistory's first item (`from: "by 1849"`, "9th Street") was also changed
  to `from: "?"` with the same hedge wording, since it carried the identical
  false claim and the task's own Olympic Blvd instruction established the
  pattern for fixing it.

## 3rd Street segment-model pilot — shopping list (2026-07)

3rd Street is now the pilot of the full segment model (7 segments, `from`/`to`
cross-streets, `how` on nameHistory items — see ADDING-STREETS.md). Four
segments are honest unknowns; what each needs:

- **West of Bixel (Crown Hill)** — NavigateLA Parcel Description Reports for
  2–3 blocks, e.g. ~1245 W 3rd St (Bixel–Lucas) and ~1500 W 3rd St (toward
  Union); collect Tract + Map-Refs, then existence-check PDF URLs and add to
  the download list. Caution baked into the entry: the 1909 Crownwood sheet's
  "por. of 3rd St. Ord. 39,578" stretch is modern Miramar, not 3rd, and 3rd's
  modern alignment here isn't its 1894 one — Ordinance 39,578's actual text
  (City Archives) is the other lead worth pulling.
- **Boylston to Figueroa** — short stretch (2 blocks); NavigateLA at ~900 and
  ~1000 W 3rd St. The 1894 Washington Tract ends at old Figueroa (modern
  Boylston), so whatever subdivision sits east of it is unexamined.
- **Main to Alameda** — NavigateLA at ~150, ~250, ~350 E 3rd St. Known
  complications from the 2026-07 pass: 501 E 3rd → TR 30212 (M.B. 851-82/83,
  a 20th-c. resubdivision, useless for the founding plat) and 701 E 3rd →
  Tract JOHNSTON (M.R. 2-92/93) — the latter may actually be the right series
  for the Main-side blocks too. When was Third cut through east of Main, and
  under what name?
- **East of Mission Rd (discontinuous)** — NavigateLA at 2–3 addresses on
  E 3rd between Mission Rd and the coverage edge (~1300–1900 E 3rd St).
  ⚠ **DOWNGRADED 2026-08 — the manuscript reads "Moore," not "Mono"** (see
  "The 1897 ordinance" at the top of this file); what follows is probably an
  OCR artifact. Former HOT LEAD from omnibus-1897-renaming-full.md (Feb. 18
  session): "The name of
  Mono street, which had been changed to Third, was restored" — the Feb. 2
  ordinance evidently renamed a Mono St to Third and the council took it
  back. If Mono St was this east-of-the-river stretch, that's the segment's
  whole 1897 story (briefly Third, restored to Mono, presumably folded into
  3rd later) — locate Mono St first (Sanborn/CDNC), then the later ordinance.
- **Alameda to Santa Fe (Georgia St), further attestation** — research-leads
  elsewhere says Mills & Wicks M.R. 13-87 (Apr.–May 1886) covers "the
  Georgia/Second/Third/Hewitt/Huber grid"; the sheet is already in `tracts/`
  — a local read could add an 1886 Georgia citation between the 1875 Thomas
  and 1888 Wolfskill anchors, and pin how far east Georgia St's platted name
  ran (the segment's `to: Santa Fe` end is currently Kenny's read, uncited).
- **Schema follow-up** — the other segmented streets (Figueroa, 2nd, 4th,
  Broadway, Central, …) still use band-only segments; migrate them to
  `from`/`to` + `how` as each gets touched, no big-bang rewrite needed.

## align.html findings awaiting follow-up

- **TR0015-166a ("Crownwood," Witmer's Subdivision of parts of Lots 2 & 7,
  Block 38 Hancock Survey; M.B. 15-166, surveyed Nov. 1909)** (2026-07):
  align.html batch 2, a deliberately more complex test case (rotated,
  multi-street sheet in Crown Hill). Verified via multiple points per line
  (not just one), per the MR066-035 lesson:
  - **2nd Street**: confirmed — the plat's own "W. 2nd" label, traced at 3
    points along its curve, matches modern 2nd Street to within 4-16m.
    Applied to 2nd Street's "west of Figueroa" segment as a `built` date
    (Nov. 1909) and source, upgrading it from "not yet researched."
  - **Columbia Avenue**: confirmed — 2 points match modern Columbia Avenue
    to within 7-8m. No streets-data.js entry exists yet for Columbia Ave;
    banking this tract as a future source (labels it directly, so this
    would be a strong "planned/built by Nov. 1909" anchor whenever it gets
    an entry).
  - **Crown Hill Avenue**: confirmed — 2 points match modern Crown Hill
    Avenue to within 3-20m. Same as Columbia: no entry yet, banking this
    tract as a future source.
  - **Witmer Street**: confirmed, and a bonus find — the plat shows Witmer
    running straight from the top of the sheet, then terminating/jogging
    around (34.0599, -118.2622) into a second, disconnected-looking OSM
    Witmer segment ~50m further southwest. Both pixel-traced segments
    matched their respective real segments to within 1-9m, meaning the
    plat itself directly explains why modern Witmer's OSM geometry looks
    like two separate ways with a gap: it's a real jog, not a data gap.
    No entry yet either; banking as a future source.
  - **"3rd St" ordinance stub — RESOLVED 2026-07, turned out to be
    Miramar**: the sheet has an explicit annotation, "Name establ. por. of
    3rd St. Ord. 39,578," next to a short stub connecting the 2nd St curve
    area down toward Witmer. Every point sampled along that stub transforms
    to real-world coordinates ~100-145m off modern 3rd Street's known Crown
    Hill alignment — too far to be pixel-picking noise, given every other
    street on this sheet fit within tens of meters. Kenny asked to check
    whether some OTHER modern street fit those same coordinates better:
    it does — **Miramar Street**, within ~18-27m at every point (vs. 3rd
    Street's 100m+), using Miramar's known westward extension through Crown
    Hill (the same way already used for the Bixel–Boylston "Third St"
    finding above). So this 1909 ordinance-named "3rd St" stretch is a
    THIRD pre-1915 name/designation Miramar absorbed, on top of Ocean View
    Ave. and the "Third St" Bixel–Boylston stretch. Applied to Miramar
    Street's entry (note + new source). No mystery about 3rd Street moving
    twice after all — it just never included this stretch.

## Georeferenced findings awaiting sources (georef.py)

- **MR066-035 (Compromise Subdivision / Washington Tract, surveyed Mar.–Apr.
  1894, recorded May 1, 1897)** (2026-07, Third/Miramar line VERIFIED and
  applied 2026-07 via align.html precise re-check — see the align.html
  entry under Resolved for the full story): georeferenced against OSM —
  block bounded by Bixel/Third/Figueroa/Arnold in 1894 = modern
  Bixel/Miramar/Boylston/3rd.
  - Old "Third St" alignment = modern **Miramar Street** — confirmed, applied
    to Miramar's entry. Miramar's nameHistory still only sources Ocean View
    Ave/Nob Hill Ave/Miramar for a different portion; whether/how "Third"
    fits into a dated sequence for this specific Bixel–Boylston stretch is
    still open — noted in the entry as a match without a full naming
    timeline for this block.
  - Old "Arnold St" alignment = modern **3rd Street** here (confirmed,
    reverse of the pairing first guessed) — 3rd's modern Crown Hill
    alignment isn't its 1894 one; segment implications for 3rd west of
    downtown, which has no entry yet. Also: who was Arnold? Not yet
    researched.
  - Old "Figueroa St" edge = modern **Boylston** ✓ (documented 1897 transfer;
    NB this map was recorded May 1, 1897, months AFTER the renaming, with
    stale survey-date labels — recorded maps preserve survey-date names, a
    dating caveat worth remembering).
  - Signatories: O.T. Johnson, Pinney, Cleveland, Libby, Hodgkins, Chase,
    Heizman, L.A. Improvement Co. (N.M./H.C. Witmer) — namesake candidates
    for small streets in this area (cf. Witmer, Bixel entries).

- **MR006-138 (Glassell's Subdivision, Lot 7 etc. Block 39 Hancock Survey,
  recorded Dec. 27, 1884)** (2026-07): georeferenced via georef.py (anchors:
  Court×Patton, Council×Welcome; scale 0.55 m/px). Echo Park/Filipinotown
  edge. Findings to verify and apply:
  - Unchanged since 1884 (citable primary for all): **Court, Council,
    Welcome, Patton, Diamond** — an 1884 "planned" anchor for each entry.
  - Old **State St** = modern **Colton Street** along its length (5.7 m at
    midspan; the earlier "Rockwood west of Glendale" reading was a
    junction-sampling artifact — see TRACT-RESEARCH.md precision protocol).
  - Old **Home St** ≈ modern **Rockwood Street** — wins the trace vote (7/9)
    but sits ~43 m off: the block was recut at a different angle, so treat as
    "renamed AND realigned"; needs a map between 1884 and today to pin when.
  - Old **Hobart St** = modern **Lake Shore Terrace** (21.9 m at midspan).
  - Old **Waters St** = modern **Douglas Street** (3.0 m).
  - Old **Lake St** = modern **Glendale Boulevard** alignment (1.9 m!) — old
    Lake's diagonal is today's Glendale Blvd through here.
  - Old **Aztec Ave**: UNRESOLVED. Automated traces put Belmont ~90 m off and
    favored "vacated," but the trace endpoints were Claude-estimated pixels —
    the same failure mode that misplaced other lines on this map — and the
    attempted falsification fit was itself misplaced (its Belmont line missed
    the Aztec drawing entirely). Redo with a human alignment via align.html
    before concluding anything; Kenny's hunch is Aztec = Belmont.
  - "Glendale Boulevard" lands at Patton's north continuation — Patton may be
    a Glendale Blvd donor stretch; check.
  - A. Glassell = Andrew Glassell (Glassell Park namesake) — this map is a
    primary tie of the family to Filipinotown-area streets.

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
  - **Court Street** — Kines's Court Street page is Monrovia's (Bonita Court,
    renamed 1966 over postal confusion). Nothing for the L.A. one.
  - **Aztec, Council, Home, Waters, Welcome, Diamond** — not covered by Kines.
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

## Omnibus documents

- **omnibus-1897-renaming.md** (Herald, Feb. 21, 1897 committee report):
  ~50 items transcribed; 6 applied to in-coverage streets; rest parked for
  Lincoln Heights / Highland Park / other neighborhoods.
- **⭐ TOP TARGET: the full 1897 renaming ordinance (350+ changes).** The
  Feb. 21 article is only the committee's amendments to it. The commission's
  complete ordinance — six weeks of work, 350+ renamings, the city's great
  anglicization moment (final tally ≈1,250 English vs. 150 Spanish names) —
  was presumably printed in full as a legal notice and passed in early 1897.
  Search CDNC Herald, Jan.–Apr. 1897, for the ordinance text; also City
  Archives. One document ≈ citations for dozens of coverage streets.
- **omnibus-1897-renaming-full.md** (2026-07): CDNC hunt DONE — full text (326
  changes, signed Feb. 26, 1897) confirmed NOT printed in the Herald/CDNC;
  companion docs banked there (Feb. 2/3/9/19/24/27, Mar. 5 permalinks + all
  itemized changes); next trail = City Archives ordinance book, L.A. Times
  Feb. 3 & 24 1897 (ProQuest), Express/Record legal ads, Burks map — and
  (added 2026-08) the 1897/1898 city directories, see Serial-source leads at
  the top of this file.

## Open leads

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

## CDNC sweep recipes (ready to run)

CDNC (cdnc.ucr.edu) is JavaScript-rendered: automated fetch tools see empty
pages, so these searches need a real browser — either the Claude in Chrome
extension, or ~15 minutes of manual searching. Article permalinks look like
`https://cdnc.ucr.edu/?a=d&d=LAH18740214.2.12` (paper+date+page.article) and
make ideal primary-anchor citations.

(All five original recipes have been run — see Resolved below. New recipes
can be added here as future leads warrant a CDNC sweep.)

## Open leads (continued)

- **Goodwin/Thomas/Mills-Wicks batch, loose ends** (2026-07): reading the three
  downloaded tracts closely (Kenny's tip — read the local PDFs directly rather
  than the browser viewer, much easier for side-by-side comparison) confirmed
  Hewitt's segment split, 2nd St's "Guadalupe" stretch, Traction Ave's "Second
  St" predecessor, and Imperial/Santa Fe's "Palm"/"Tulip" predecessors (all
  now in streets-data.js). Three loose ends remain:
  - **Spruce Street** (Goodwin Tract, immediately west of Imperial/"Palm"):
    no modern street identified yet. Might be gone entirely (industrial
    redevelopment south of 6th is heavy here), might survive under another
    name. Not yet checked via NavigateLA.
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
  - **Tract maps for Court St, Olympic Blvd, and Pico Blvd (downtown)**
    (2026-07, resolved 2026-07): Kenny downloaded the batch found via
    NavigateLA. Court Street: Glassell's Subdivision of Lot No. 7 etc., Block
    39, Hancock's Survey No. 1 (M.R. 6-138, recorded Dec. 27, 1884, at request
    of A. Glassell) labels the street "Court Street" directly — a gently
    curving street, consistent with a descriptive "court"-shape origin rather
    than a namesake. Olympic Blvd (former 10th St, west-of-Central segment):
    TWO independent recorded maps both label it "Tenth" — W.M. Williams's
    subdivision of Blocks 72 & 73 of Ord's Survey itself (M.R. 3-32/33, Apr.
    1875) and, a block further west, Thomas S. Ewing's Replat of part of Block
    B, Dunkelberger Tract (M.R. 59-60, surveyed Mar. 1896) — the first ties
    "Tenth" directly to the Ord Survey grid, 21 years before the second
    confirms the same name still held. Pico Blvd (downtown, near Flower St):
    the Cameron Tract (M.R. 7-21, surveyed by H.J. Stevenson Oct. 1885,
    recorded Nov. 23, 1885) labels it "Pico" directly at Figueroa — earlier
    than the previously-cited 1903 Herald item. All three applied as primary
    sources. Miramar's two candidate tracts ("Crownwood" M.B. 15-166 and
    "Compromise Subdivision" M.R. 66-35) were pulled too; neither labels
    "Miramar" directly, but see the "align.html" entry below for how the
    Compromise Subdivision one paid off anyway.
  - **"align.html" map-alignment tool, batch 1 (MR066-035)** (2026-07,
    resolved 2026-07, CORRECTED 2026-07): Kenny built a tool that overlays a
    rotated tract-map image on the modern street map and exports a 3-point
    pixel↔lat/lng alignment (`tracts/renders/*-alignment.json`). First run,
    on the Compromise Subdivision/Washington Tract map (M.R. 66-35, surveyed
    Mar. 1894): computed the affine transform from the 3 corner points and
    initially checked only the plat's "Arnold St" label, concluding (wrongly)
    that Arnold = modern Miramar St. Kenny caught this from his own careful
    alignment — the sheet's "Third St" (north side of the block) and "Arnold
    St" (south side) had been swapped. Re-verified by sampling multiple
    points along each drawn boundary line (not just label positions) and
    transforming all of them: the "Third St" line matches modern **Miramar
    Street** to within single-digit meters at three independent points
    (including landing almost exactly on Bixel's own recorded vertex next to
    the real Miramar×Bixel corner), while the "Arnold St" line matches
    modern **3rd Street** to within ~3-30m — both a much tighter fit than the
    reverse pairing (~90-100m off). This also matches the independent
    georef.py finding for this same sheet (see above) that had reached the
    same conclusion. Corrected in Miramar Street's entry: the "Arnold St"
    note/source was replaced with "Third St," and a note added that the
    sheet's actual "Arnold St" is modern 3rd Street (which has no entry yet).
    Bixel and Figueroa on the same sheet are unchanged names, already
    anchored elsewhere or not yet due for their own entries. Lesson for the
    next five alignment files: always cross-check a label match against
    multiple points along the line, not just the label's own position, and
    check both plausible pairings before concluding — see
    TRACT-RESEARCH.md's "verifying a map-feature guess against reality"
    caveat, which this repeats almost exactly.
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

## Resolved

- **Gladys/Wolfskill-family pattern, Ruth Ave 1887 tract, Agatha St tract**
  (2026-07, resolved 2026-07): full TRACT-RESEARCH.md workflow run via
  NavigateLA + DPW scans. The 1887 Wolfskill Orchard Tract map (M.R. 30-9/13,
  surveyed by J.H. Dockweiler) shows San Pedro/Stanford/Towne/Ruth/Gladys as
  consecutive platted streets — confirming Gladys was part of the same 1887
  package as Towne, Crocker (platted "Stanford"), and Stanford Ave (platted
  "Ruth"), one block from Ruth (an 1895 Halfpenny resubdivision, M.R. 54-84,
  shows them bounding the same block). The adjoining Frank Sabichi Tract
  (Wilde and Strong's Subdivision, M.R. 66-64, recorded Sept. 21, 1897, owners
  Frank & Magdalena Sabichi) shows Ruth/Towne/Crocker/Gladys continuing south
  with Agatha added as a new cross street — matching Agatha Sabichi's
  parentage. Still no source names an actual Gladys, so the entry stays
  `unknown`, but the pattern now carries three linked primary citations.
  Towne/Crocker/Stanford Ave entries also gained the primary tract-map source.
- **Wolfskill Orchard Tract: Omar St, Ceres Ave, Central Ave cross-links**
  (2026-07, resolved 2026-07): re-read the whole Wolfskill Orchard Tract map
  (M.R. 30-9/13) prompted by Kenny's tip — it covers a much bigger area than
  just Towne/Crocker/Stanford/Gladys, roughly the block bounded by modern
  3rd, San Pedro, 7th, and Central. Found and verified (via NavigateLA
  Tract/Map-Ref match, not just eyeballing) three more streets on it:
  **Omar Street** (platted "Omar Ave," confirmed via 312 Omar St → Tract
  WOLFSKILL ORCHARD TRACT / M.R. 30-9/13 — new entry added, `unknown`
  category, no namesake found); **Ceres Avenue** (already had an entry with
  an unconfirmed "goddess of agriculture" theory — now has the tract
  citation, and the theory reads as more than coincidence given the street
  really was platted on a subdivided orchard, though still not asserted as
  proven intent); and **Central Avenue**'s "south of 2nd (former Wolfskill
  Ave)" segment — the map itself labels this street "Wolfskill" along the
  tract's edge nearest Alameda, confirmed by checking a Central Ave address
  in the same area (450 S Central Ave → same Tract/Map-Ref) — giving the
  Wolfskill Avenue nameHistory entry a primary source a decade before the
  1897 rename, instead of only the Herald renaming report. Gladys Avenue
  already had this citation from an earlier pass.
- **3rd Street east of Alameda — "Georgia St"** (2026-07, resolved 2026-07):
  Kenny spotted that the Wolfskill Orchard Tract map's final sheet (page 5 of
  5, M.R. 30-9/13) shows Third St's platted extent running to the tract
  boundary, an unplatted gap (almost certainly Alameda St, unlabeled on this
  sheet), and "Georgia St" resuming in direct alignment on the far side.
  Split 3rd Street into segments (west/east of Alameda, boundary lng
  -118.2381) with the eastern segment citing this map. Tried to verify
  geographically via NavigateLA the same way as Omar/Ceres/Central, but this
  block didn't cooperate: 701 E 3rd St came back Tract JOHNSTON (M.R. 2-92/93,
  too far east) and 501 E 3rd St came back Tract 30212 (M.B. 851-82/83, a
  20th-century resubdivision) — i.e. this particular block has evidently been
  replatted at least once since 1888, so no modern parcel confirms the
  Wolfskill tract directly here. Went with the map's own drawn geometry
  instead (unambiguous on inspection, and matching Kenny's independent
  reading), flagged in the entry's note as resting on the map rather than a
  matching present-day parcel. Also updated the existing "Georgia Street"
  entry's note to point at this as the likely identity of the "another,
  now-defunct Georgia Street" its own history already mentions as the reason
  for its 1880s rename to Georgia Bell — the two are unrelated streets at
  opposite ends of downtown. New gotcha for TRACT-RESEARCH.md: don't expect
  every block a historic tract map covers to still carry that tract's name in
  NavigateLA today — later resubdivisions silently overwrite the Map-Ref a
  parcel reports, even though the original map's drawn content remains valid
  evidence for what stood there at recording time.
- **Cross-linking tract maps to every street that first appears on them**
  (2026-07, resolved 2026-07): swept all tract maps used so far for streets
  missing the citation. Bliss Tract (M.R. 12-42) added to Seaton and Colyton
  (had only secondary Kines sources) and to Palmetto (upgraded from "not yet
  researched" to a sourced 1886 built date — the map explicitly calls out
  "Palmetto St... wholly within the Bliss Tract"). Halfpenny resubdivision
  (M.R. 54-84) added to Stanford Avenue (Ruth), which names Ruth as a
  bounding street same as Gladys. Tract No. 10542 (M.B. 159-32/33) added to
  Jesse Street, which appears labeled on that map's SE corner. 4th and 5th
  Streets split into segments (see the Larkin/Short/Lugo entry above) so the
  Bliss Tract citation could live with the specific Huber/Poplar block
  instead of a general note on the whole numbered street.
- **Mill St / Conway Place tracts, and Howard tract re-check** (2026-07,
  resolved 2026-07): re-read the F.P. Howard/Bliss Tract map (M.R. 12-42) in
  full — it does NOT mention Molino, Mill, or Conway (only confirms Alameda,
  Huber, Poplar, Seaton, Colyton, Carolina, Palmetto, already in use). Mill
  St's own tract, hunted separately via NavigateLA (1300/1737 E 7th St, 691 S
  Mill St), turned out to be the "Industrial Tract" (M.B. 5-56a, surveyed
  Dec. 1903 by L. Friel & R.G. Miller for the Industrial Realty Co., recorded
  Mar. 15, 1904), lying between Alameda and Mateo north of 7th St — already
  shows Mill St as an existing named street, with an internal cross street
  called "Industrial Street." Conway Place's tract (found via 1800 Conway Pl)
  is Tract No. 10542 (M.B. 159-32/33, Dec. 1928), a resubdivision explicitly
  built from "parts of Lots K, L, N, O & Q of the INDUSTRIAL TRACT... Book 5
  of Maps, Page 56" plus Tract No. 1879 — i.e. Conway Place's block is a
  documented direct descendant of Mill St's Industrial Tract, one tract
  removed. Both entries updated with primary tract-map sources; Hewitt St's
  existing Carolina-St claim also gained the Howard
  tract map itself as a second (primary) source alongside lastreetnames.com.
  **Correction (2026-07):** the first pass here also guessed that Conway
  Place was the renamed "Industrial Street" shown on the 1928 map, reasoning
  from alignment alone. Kenny caught the error by looking at the map himself:
  the actual NavigateLA parcel for a Conway Place address is recorded as
  "Lot F" (20,129 sq. ft.) — a large interior lot with no street through it
  on the 1928 map at all, sitting between the Sixth-St-fronting row and the
  Industrial-St-fronting row. "Industrial Street" is a distinct street on the
  tract's south edge (fronting Lots A/9/10), geographically separate from
  Lot F. Conway Place isn't on the 1928 map under any name — it must have
  been cut through (or dedicated along) Lot F sometime after 1928; name and
  date still unconfirmed. streets-data.js corrected; see TRACT-RESEARCH.md's
  new "Verifying a map-feature guess" section for the general lesson.
  Molino remains unresolved (see Open leads above — blocked by modern
  redevelopment, new "Mills and Wicks" lead banked instead).
- **Figueroa south of Pico** (2026-07, resolved 2026-07): a recorded tract map
  near 20th & Flower (Resubdivision of Edgar's Subdivision, M.R. 59-56,
  surveyed Aug. 31, 1895, recorded Mar. 9, 1896) already labels the street
  "Figueroa Street" — a year before the 1897 renaming. This stretch wasn't
  renamed in 1897 at all; it's the older, southern continuation of the
  pre-1897 Figueroa Street (whose downtown stretch became De La Guerra),
  simply left alone south of Pico.



- **Pearl Street namesake** (2026-07, resolved 2026-07): CDNC sweep found the
  Herald's report of the Feb. 26, 1874 council debate ("City and Suburbs,"
  Feb. 27, 1874: https://cdnc.ucr.edu/?a=d&d=LAH18740227.2.10). Property
  owners along Grasshopper Street petitioned for "Pearl street"; a rival
  faction wanted "Union Avenue"; Pearl won after "a heavy discussion." No
  petitioner or namesake is named — confirms "no specific namesake documented"
  with a primary source rather than the earlier secondary (PBS SoCal) citation.
  The aside about the same session also covering Bull→Castelar was checked and
  not found in this article.
- **Wolfskill→Central ordinance, 1897** (2026-07, resolved 2026-07): found in
  the Herald's "Talking Retrenchment" report on the city's special street-
  renaming committee (Feb. 21, 1897: https://cdnc.ucr.edu/?a=d&d=LAH18970221.2.28).
  "Wolfskill avenue changed to Central avenue" is listed among changes made "in
  response to urgent requests made before the committee." (Note: contemporary
  sources consistently call it "Wolfskill Avenue," not "Wolfskill Street" —
  streets-data.js corrected accordingly.)
- **Figueroa transfer & De La Guerra/Boylston** (2026-07, resolved 2026-07):
  two Herald articles nail down the whole sequence. "Work for Unemployed"
  (Feb. 2, 1897: https://cdnc.ucr.edu/?a=d&d=LAH18970202.2.34) reports Pearl
  Street renamed Figueroa "being a continuation of that thoroughfare," while
  the older Figueroa Street (c. 1853–1857) was renamed De La Guerra Street.
  "Party Lines Knocked Out in the Council" (Feb. 24, 1897:
  https://cdnc.ucr.edu/?a=d&d=LAH18970224.2.20) reports that at the Feb. 23
  council session, Mr. Mitchell (representing O.T. Johnson) protested the
  De La Guerra name and asked for Boylston instead, "granted" on Councilman
  Toll's motion. Both streets-data.js entries updated with dated, primary
  citations.
- **Boylston's "muddled reasons"** (2026-07, resolved 2026-07): not muddled
  after all — see the Figueroa/De La Guerra/Boylston resolution above. The
  reassignment was driven by wanting one continuous "Figueroa" name along the
  Pearl corridor, freeing the old Figueroa Street for a new name; Johnson's
  on-the-spot objection swapped the committee's "De La Guerra" pick for
  "Boylston."
- **Missing 13th and 16th Streets downtown** (2026-07, resolved 2026-07):
  both absorption guesses confirmed. A 1903 Herald item places "Christ
  Protestant Episcopal Church, Flower street, corner Pico (Thirteenth) street"
  (https://cdnc.ucr.edu/?a=d&d=LAH19030308.2.145) — Pico absorbed 13th. A 1927
  Herald item locates a business at "the southeast corner of Figueroa street
  and Venice boulevard, formerly Sixteenth street"
  (https://cdnc.ucr.edu/?a=d&d=LAH19270226.1.9) — Venice Blvd absorbed 16th.
  Entries for both Pico Boulevard and Venice Boulevard written 2026-07 using
  these citations (see the batch note below).
- **Ord's Survey recorded copy — M.R. 53-66/73** (2026-07, applied 2026-07):
  809 N Hill St came back Tract ORD'S SURVEY, M-R 53-66/73, Lot 6, Block 37 —
  the county's recorded copy of E.O.C. Ord's Aug. 29, 1849 "Plan de la Ciudad
  de Los Angeles" ("Los Angeles City Map No.1"). Certification on sheet 73:
  **"A full true and correct copy of original … recorded Dec. 2, 1893"**
  (Arthur Bray, County Recorder, by W.W. Mills, Deputy) — a linkable primary
  record distinct from the LAPL/tessa scan the ORD_SURVEY constant points at,
  now the `ORD_RECORDED` constant in streets-data.js. Recorder's note on sheet
  67 splits the plat: **WEST of Main St on pp. 67-69, EAST of Main on pp.
  70-72, NORTH of the Plaza on p. 73.** Kenny downloaded 68, 69, 73 (the rest
  are hills/fields) into tracts/; read locally via pdftoppm.
  - **Applied (recorded-map source added):** downtown named streets with their
    recorded 1849 names — Hill (Calle Loma), Broadway/Fort (Calle Fortin),
    Spring (Calle Primavera), Main (Calle Principal), Grand (Charity St / Calle
    de Caridad), Olive (Calle Accytuna), Hope (Hope St), Flower (Flower);
    numbered 1st–8th Streets (Calle 1ª–8ª); and the two Chinatown segments
    (N Hill = Calle del Toro/Block 37, N Broadway = Calle de Eternidad).
  - **Sheet-68 note:** the survey shows Spring as "Calle Primavera" and a
    *separate* "Charity St / Calle de Caridad" (= Grand Ave). So Spring Street's
    hedged former-name "Calle de Caridad" (still flagged unverified in the
    entry) looks like a mix-up with Grand — the map assigns Caridad to Grand.
  - **Chinatown (sheet 73) modern-street correspondences** (Kenny's reading,
    map-checked): Calle del Toro = Bull St → N Hill (in data ✓); Calle de
    Eternidad = Eternity → N Broadway (in data ✓); Calle de las Virgenes /
    Virgin St = W Alpine St (confirmed at lot level — Block 37 = 809 N Hill /
    427 W Alpine, bounded by Toro and Virgenes); Calle del Colegio / College
    St = College St (name persists); Calle de las Avispas / Hornet St = Wasp
    St → Yale St. All entries now written (2026-07) — see the batch note
    below. Calle Alta / High St = Ord St turned out to be independently
    confirmed by Kines's own Ord Street page (renamed Walters St 1886, then
    Ord 1890) rather than just a positional guess. Calle de las Adobes =
    Cleveland St and Short St = part of Cesar Chavez Ave remain unconfirmed
    positional guesses only — flagged as such in both entries' notes; Kines's
    Cleveland Street page actually dates that name to a fresh 1886 Beaudry
    tract with no mention of an Ord-survey predecessor, casting some doubt on
    the Adobes match.

- **Streets with research leads but no entry — batch sweep** (2026-07,
  resolved 2026-07): swept research-leads.md and TRACT-RESEARCH.md for streets
  already discussed here that had never gotten a streets-data.js entry. Twelve
  found, all in coverage, all now entered:
  - **Marion Avenue, Court Street, Miramar Street** — the three 1897-ordinance
    finds above. Marion and Miramar had full Kines pages (Marion: namesake myth
    debunked, `unknown`; Miramar: the Ocean View/Nob Hill/Miramar 1886–1915
    tangle, `renamed`). **Court Street turned out to be a false match**: the
    in-coverage OSM "Court Street" sits in Angelino Heights/Echo Park (lat
    34.063–34.069, lng -118.268/-118.254), nowhere near the demolished Bunker
    Hill "Court Street" the 1897 Bradbury-rename citation actually describes
    (which no longer exists in current OSM data at all). Entered as `unknown`
    with a note warning off that citation for future passes — don't apply the
    Bradbury/1897 material here.
  - **Alpine, College, Yale, Cleveland, Ord, Cesar E Chavez Avenue** — the
    Chinatown sheet-73 correspondences above, all written this pass; see that
    entry for what's confirmed vs. still a positional guess.
  - **Pico Boulevard, Venice Boulevard** — used the 13th/16th-absorption
    citations from the "Missing 13th and 16th Streets" resolution above.
  - **2nd Street Tunnel** — its own entry, cross-linked to [[2nd Street]];
    construction began 1916 (delayed by property/access lawsuits), opened
    July 25, 1924.
  - General lesson banked for next sweep: always check a candidate street's
    actual OSM geometry (lat/lng bounds) against the historical claim before
    writing the entry — name collisions between demolished/relocated streets
    and present-day streets of the same name are real (see Court Street).
