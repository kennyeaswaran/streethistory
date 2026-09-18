# Change-row audit of the textual documents — 2026-09-18

> **Third pass, same day.** (1) *Geary/Garey:* no Geary Street anywhere in the corpus or on lastreetnames (Garey used as a positive control); Garey Street was already lettered in 1875 crossing Guadalupe's line (mr003-060-p2), and Ord. 48 starts Topeka "from near Garey street" — so a compositor's transposition, with an unrecorded Geary as the only live alternative. (2) *Entity ids:* extinct names minted today now carry their successor, following the `willow-golden` / `lafayette-bixel` convention, and a `disambiguation`: `davies-2nd`, `sepulveda-jackson`, `shaw-winston`, `duplex-cecelia`, `farragut-bixel`, `ionia-boston`. Kept plain because they are the names on the ground today (and so what the OSM stub would be called anyway): `golden-avenue`, `huntley-drive`, `rockwood-street`, `toluca-street`. Davies in particular needed it — there is also the 1933 Davies Drive for Marion Davies (dnla-1933-09-06). (3) *Were Ord. 207 or Ord. 48 not law?* Both are printed with the clerk's certificate and the mayor's approval (Spence, Jan. 14, 1886; Hazard, May 8, 1889), and each says it takes effect on that publication — so both were law. And both demonstrably took: Santee Street is still Santee, and Ord. 48's Witmer, Bixel, Toluca, Maryland, Crocker, Decatur, Mimosa, Ingraham, Commercial, San Julian, Edgeware and Beaudry Avenue are all on the map today. The two oddities are clause-level, not instrument-level: Elm → Olive in 1889 may be the committee (working from maps that still lettered Elm) re-enacting a done change, or may reach Elm south of California, which Ord. 207 did not; and Myrtle → Prospect is a change that was law but never took in use — in Oct. 1893 the council is still calling the street Myrtle and renames it Wall. (4) *`william` split* into `william-santee` (Childs tract; keeps the Ozro William Childs research) and `william-farragut` (lot 1, block 37; new, unresearched). A third William (L.A. Improvement Co., lot 2 block 38 → Goss, Ord. 207) still has no entity.

> **⚠ SECOND PASS, same day (Kenny's three asks) — read this before the tables below, which are the first pass and are partly superseded.**
>
> 1. **The "1915" on M.R. 3-38/3-39 was a misreading.** The certificate on 3-39 reads "Recorded May 4th A.D. 1875", J. W. Gillette, County Recorder; 3-38 has no certificate of its own but sits between p. 33 (Apr. 29, 1875) and p. 46 (May 6, 1875) of a book recorded in page order. Both sheets are redated (`on: 1875-05-04`; `after: 1875-04-29, before: 1875-05-06`), and 3-38's title is corrected from "Norris" to **Morris** ("Plan of the MORRIS … Main & Pico Streets") in the document and in 17 places in `names.js`. research-leads.md's "still Pine in 1915" is corrected. **Effect in the what-if build: the Olive/Elm and 15th/Laurel false revivals are gone**, and California → 14th (Nov. 1889) now lands, because California is lettered by 1875.
> 2. **The two rows on the vetoed Oct. 1890 ordinance (lah-1890-10-28) are withdrawn** — walters-street → ord-street and second-street → stephenson-avenue — with a comment in the document saying why and what instrument to look for (the amended ordinance of late 1890/1891). The notes on `walters-street`, `stephenson-avenue` and `guadalupe` no longer say the 1890 ordinance made anything; both entities' internalNotes record the withdrawal. (`ord-street` and `high-street-chinatown` still say "Ord Street in 1890" from Kines — left alone, but no document in the corpus supports the year now.)
> 3. **Ordinance No. 48 is transcribed** — all 207 clauses, excerpts `c001`–`c207` on `documents/lah-1889-05-10`, read from the clip in 28 full-resolution tiles; not yet checked by a human. **37 change rows** from it (11 resolved extents, 19 whole-name, 7 extent-unresolved), plus **one on Ord. 242** (guadalupe → davies-2nd, 2nd Street Alameda → Garey), which Ord. 48 made safe: its Topeka → Davies clause begins "from near Garey street", so Ord. 242's "Geary" is Garey. **Seven entities minted** for the `to` side: `sepulveda-jackson`, `rockwood-street`, `shaw-winston`, `ionia-boston`, `duplex-cecelia`, `toluca-street`, `farragut-bixel`. `check-model`: 317 entities, 4240 rows, passing.
>
> **What the what-if build of the second pass showed.** One more rule-2 row caught and fixed: Huber Street "east from Alameda to Third streets" was first resolved to 4th Street, Alameda → 3rd Street, both 0 m — but modern 4th and 3rd meet west of downtown, so it painted Huber over 4th Street's whole middle; now whole-name. New revival flags, both explained and neither a wrong street: **3rd Street east of Alameda, Georgia → Atchison → Georgia** is genuine (the Bigelow tract lettered Atchison in 1887 over ground earlier sheets letter Georgia; Ord. 48 put Georgia back — the reverse of the 1888 draft); **Witmer Street, Witmer → Nichols** comes from mr037-078, recorded Oct. 1889 but still lettering Nichols Avenue five months after the ordinance. One cosmetic oddity: on Georgia Street the Nevada → Georgia Bell row (Apr. 22, 1889, the adoption date) and `georgia-bell`'s prose spelling period ("from 1889", Forman's May 10) leave a sliver of "Georgia Street Apr. 1889 → 1889"; now that Ord. 48 is a document, those prose periods could be retired in favour of the rows.
>
> **What Ord. 48 settles about the 1888 draft (bin D above).** The draft was not the law: Atchison → Georgia is the *reverse* of the draft; Cummings → **Ionia**, not Modoc; Lafayette → **Bixel**, not Contra Costa; Los Angeles Street south of Washington → **Maple**, the reverse of the draft's Maple → Regent; Crescent → Beaudry St. is **not in it at all**. Warren → Decatur, Virginia → Rouland/Toluca/De Long, Consuelo → California, Sainsevain → Commercial, Earl → San Julian, Nevada/Bennett → Georgia Bell, Canal → Beaudry Avenue and Weill → Sepulveda are.
>
> **New traps it exposes.** (a) `william` conflates two streets — the Childs-tract William on Santee (Ord. 207, 1886) and the lot-1-block-37 William on Bixel (Ord. 48 → Farragut); the Farragut row is an extent so it stays off Santee, but the entity wants splitting. (b) **Elm → Olive is enacted twice** (Ord. 207 in 1886 and Ord. 48 c058 in 1889); the 1889 row is left `extent-unresolved` so the two do not fight. (c) **Myrtle** from Ninth to Pico → *Prospect* (c086, no row) contradicts Ord. 1915's confirmed Myrtle → Wall of 1893. (d) There are two Aztecs: c001's Aztec Avenue between 12th and Pico → Girard is not `aztec-avenue` on Belmont. (e) c002's "Broadway" from Eleventh to Pico near Union Avenue → Vernon is the pre-1890 Broadway, not Fort's successor. (f) `stanford-ave` carries ground on both modern Stanford and modern Crocker, so Stanford → Crocker (Wolfskill Orchard tract) is `extent-unresolved`. (g) The 1889 names are not modern names: Figueroa = Boylston, Ward = 6th, Seminary = Miramar, Rouland = Venice, Diamond = 1st/Beverly, Union Avenue (Colina Park) = Burlington — the document header lists them.
>
> **Not rowed from Ord. 48, and why:** ~140 clauses name streets with no entity, most outside the OSM extract (Boyle Heights, East Los Angeles, Highland View, the southwest); suffix regularisations (Avenue → Street) change no name; Bennett (Georgia Street 11th → 10th) and Clara Bell (Council Street) would need minting and their anchors do not resolve (Georgia × 11th 204 m; Council × Burlington 168 m); Grace → Mono and Pacific → Violet have entities lettered only as vanished traces; Belmont (Pico–Eleventh) → Trenton is `belmont-kincaid`, vanished only. `sweptFully` stays false on purpose: the document is read through, but it is the first citywide "exhaustive-in-scope" instrument to switch negative inference on across the whole corpus, and that wants a deliberate decision.

**Bins, counted by renaming statement** (a list item is one statement; a table
line below may stand for several — the `n` column):

| bin | statements | rows written | meaning |
|---|---|---|---|
| **A** | **9** | 9 | ready, unqualified, both entities exist, `from` lettered — `scope: "whole-name"` |
| **B** | **13** | 10 (2 resolved, 8 `extent-unresolved`) | ready but qualified — 2 more are ready and **held back** because the generator mis-renders them |
| **C** | **170** | 0 | needs an entity (or an identity decision) first — 3 entities minted |
| **D** | **357** | 0 | not drawable / not a change |
| total | 549 | 19 | plus 19 change rows already in the corpus (table below) and 43 documents that report a renaming without naming a pair |

Every new row is `confirmed: false`, so none of it reaches the map until Kenny
passes it. `node check-model.js` passed after each document; the final count is
310 entities, 4206 rows. `node generate.js` output is unchanged except the three
minted entities replacing OSM stubs (136 → 134 stubs; Golden Avenue and Huntley
Drive) — which is expected, because unconfirmed rows are held back.

**The boldest claim** is the Elm Street row on Ordinance No. 207
(`documents/lah-1886-01-15`): *Olive Street from Pico Boulevard to 14th Street
was Elm Street until Jan. 1886.* It rests on reading the ordinance's "California
street" as modern 14th Street, which is `california-street-14th`'s alignment on
the Morris plan (mr003-038) rather than anything the ordinance says. Check that
first.

## How this was done

- **Scope.** All 190 folders whose file has `form: "textual"` (166 news reports,
  15 ordinances, 6 minutes, 3 histories), every excerpt read. **No parked (`_`)
  folder is textual** — the parked ones are all sheets. `ord-4093`'s transcription
  (`omnibus-1897-renaming-council-minutes.md`) was read too, since the document
  names it; its lines are not yet excerpts, so any row from them would need one
  added first. The two Herald omnibus files beside it quote articles that are not
  corpus documents and were not audited as documents.
- **Stage** follows RENAMING-SOURCES.md: only *adopted / passed / approved /
  published* may carry a row. After a Board of Public Works recommendation,
  "Adopted." means the recommendation (lah-1883-08-19 says so), not an ordinance.
- **Entities** were resolved against `names.js` (`names-new.js` is empty),
  checking the traps: the two Georgias (plus a possible third in Bell's addition),
  the two Belmonts (`belmont-ave` vs `belmont-kincaid`), the two Willows
  (`willow` vs `willow-golden`), Beaudry Street vs Avenue, and — new — two or
  three Williams, two Coopers, two Californias, four Pines, three Jacksons.
- **A what-if build.** Unconfirmed rows never reach the generator, so reading
  `generated/report.md` after `node generate.js` would have tested nothing. A copy
  of the tree in the device shell's scratch space was built with only *these*
  rows let through. It caught one wrong-street row and one generator limitation
  (below); the real `generate.js` was not touched.

## What the what-if build found

- **A wrong-street row, caught and demoted (rule 2).** Ordinance No. 482's
  "Second street … between Lucas avenue and Figueroa street" was first written as
  2nd Street, Lucas Avenue → Figueroa Street — both 0 m, perfectly clean on the
  checker. The build painted Lake Shore Avenue over 2nd Street ground lettered
  "Second" since 1869. The 1889 Figueroa is `figueroa-gov`, today's Boylston, and
  modern 2nd Street never meets Boylston (203 m). The row is now
  `extent-unresolved`. **This is the Miramar trap on a textual document, and
  `check-model` cannot see it** — only a build can.
- **The generator cannot hold A → B → A → B on one stretch.** With the 1908
  Orange → Wilshire change, its December repeal and the 1924 change all let
  through, Wilshire Boulevard's timeline came out as *Wilshire July 1908 → Dec.
  1908 | Orange Dec. 1908 → July 1908* and the 1878 Orange lettering disappeared.
  The revival check did not fire. With the 1924 row alone it is right (Orange by
  1878 → Wilshire Apr. 1924). So the 1924 row is written and **the 1908 pair is
  held back** (bin B, not written) until `generate.js` can give a name two separate
  periods — the other session's file, so reported rather than touched.
- **Two false revivals from one sheet's date, not from a wrong street.** Olive
  Street (Elm by 1915 after Olive from 1886) and 15th Street (Laurel by 1915 after
  15th from 1889) both come from the Morris plan, mr003-038-p1/-p2, which carries
  `before: 1915-05-04` / `on: 1915-05-04` although it letters names that the 1886
  and 1889 ordinances abolished. The rows are on the right street; the sheet's date
  is the problem (15th Street's revival is already in the current report for the
  same reason). Worth a better date bound on those two sheets.
- **Row problems:** none new (still the 9 from 12685, mr001-489, mr010-008,
  tr0856-050-p2).
- **Landed as intended:** Texas St → Belmont Ave (Jan. 1887); Philadelphia St →
  Grand Ave (July 1895) on the Park-tract stretches only; Lincoln Place → 8th St
  (Sept. 1893), including the stretch that is 8th Place today; Consuelo → 14th,
  Laurel → 15th, Rouland and Pine → 16th (Nov. 1889); Orange → Wilshire (Apr. 1924).
  California → 14th and the Georgia respelling land nowhere (their only lettering
  postdates the change).

## Bin A — ready, unqualified (9)

| document | excerpt | wording (verbatim) | from → to | form | stage | n | what's missing / what was done |
|---|---|---|---|---|---|---|---|
| lah-1887-01-04 | texas-belmont | an ordinance changing the name of Texas street to Belmont avenue. Ordinance adopted. | `texas-st` ✓ → `belmont-ave` ✓ | 1 | adopted | 1 | Row written. `belmont-ave` is the Crown Hill Belmont whose 1886 row begins where Texas's ends — not `belmont-kincaid`. What-if build: Texas St → Belmont Ave, Jan. 1887. |
| lah-1895-07-02 | philadelphia-grand-adopted | An ordinance changing the name of Philadelphia street to Grand avenue. Adopted. | `philadelphia-st` ✓ → `grand-ave` ✓ | 1 | adopted | 1 | Row written. Step 2c risk (one-line report); the June 22 recommendation is also bare. What-if: Philadelphia → Grand Ave, July 1895, on the three Park-tract stretches only. |
| lah-1893-09-17 | sec-1, certification | the name of that certain street heretofore known as Lincoln Place is hereby changed to Eighth street | `lincoln-place` ✓ → `eighth-street` ✓ | 1 | published | 1 | Row written. Carries 8th Street onto the Kennedy-tract stretch that is 8th PLACE today — the ordinance's claim; the later 8th Place is undocumented. |
| lah-1889-11-06 (+ lah-1889-11-13) | laid-over, the-list | From California, Consuelo, Greenwell and Vejar to Fourteenth street; from Laurel and Adele to Fifteenth street; from Pine and Rowland to Sixteenth street | `california-street-14th` ✓, `consuelo` ✓ → `fourteenth-street` ✓; `laurel-dtla` ✓ → `fifteenth-street` ✓; `pine-street-venice` ✓, `rouland-street` ✓ → `sixteenth-street` ✓ | 1 | adopted (two documents) | 5 | 5 rows written. ⚠ Two-document warrant: the list is here (read and laid over); lah-1889-11-13 adopts it “as published a week ago” and names no street — so the rows' date is a week early. California's only lettering is the 1915-dated Morris plan, so that row lands nowhere; the other four pin Nov. 1889 in the what-if build. |
| lah-1897-02-24 | passed-as-amended | A compromise on the Georgia Bell-Nevada street tangle was reached by naming that thoroughfare Georgia street. | `georgia-bell` → `georgia-bell` (toForm Georgia Street) | 1 (respelling) | adopted | 1 | Row written — the first real warrant for ord-4093's PLACEHOLDER respelling row, which it duplicates; retiring the placeholder is Kenny's call. Lands on no ground: `georgia-bell`'s only lettering is 1915. |

## Bin B — ready, qualified (13)

Resolved extents use the street's own crossings (0 m, via `intersect.js`);
`fromCross: null` on Wilshire is the OSM extract's west edge, inside the stated
stretch. Kenny verifies every one — the two resolved rows first.

| document | excerpt | wording (verbatim) | from → to | form | stage | n | what's missing / what was done |
|---|---|---|---|---|---|---|---|
| lah-1886-01-15 | sec-1-elm-olive, certification | that certain street known as Elm street, and extending from Pico street to California street | `elm-street` ✓ → `olive` ✓ | 2 | published | 1 | Row written, RESOLVED: Olive Street, Pico Boulevard → 14th Street (both 0 m). California = 14th by `california-street-14th`'s alignment (the header's “NO ROWS” predates it). ⚠ What-if shows a false revival on Olive (Elm “by 1915”) — the Morris plan's `before: 1915` date, not a wrong street. |
| lah-1886-01-15 | sec-2-william-santee, certification | that certain street known as William street, situated in the Childs Tract | `william` ✓ → `santee-street` ✓ | 2 (tract) | published | 1 | Row written, extent-unresolved: a tract bound, not cross streets. ⚠ `william` also carries 1888–89 Bixel Street sightings — a second or third William. |
| lah-1889-09-19 | sec-1-diamond-first, certification | that portion of Diamond street from Canal street to Lakeshore avenue | `diamond-street` ✓ → `first-street` ✓ | 2 | published | 1 | Row written, extent-unresolved. Canal = `canal-street-beaudry` (1st × Beaudry 0 m); the Lakeshore end is probably 1st Street's west end at Glendale Blvd, via the cable franchise — an inference, so not authored. |
| lah-1889-12-14 | sec-1-lakeshore, certification | that portion of Second street (formerly Lakeshore avenue) between Lucas avenue and Figueroa street | `second-street` ✓ → `lake-shore-ave` ✓ | 2 | published | 1 | Row written, extent-unresolved — ★ RULE-2 CATCH. First written as 2nd St, Lucas → Figueroa (0 m both); the what-if build painted Lake Shore over 2nd Street lettered “Second” since 1869. The 1889 Figueroa is `figueroa-gov` (modern Boylston), which does not meet modern 2nd Street (203 m). An enacted re-change, not §10 form 4. |
| lah-1889-12-14 | sec-1-regent-maple, certification | all that portion of Regent street, from Fifth street to the present southern terminus of said Regent street | `regent-street` ✓ → `maple-dtla` ✓ | 3 (anchor + terminus) | published | 1 | Row written, extent-unresolved. Maple × 5th 0 m; the south end is Regent's own 1889 terminus, which no document states (the 1876 sheet's 6th Street would be derived evidence). |
| lah-1893-10-29 | sec-1, certification | "Elysian Park avenue," from Beaudry avenue to Reservoir street; … "Elysian Park avenue" through the Washington Heights tract, Augusta Heights and Golden Gate tract | `elysian-park-ave` ✓ (unlettered) → `sunset-boulevard` ✓ | 2 + tract | published | 2 | One row for both clauses, extent-unresolved. Sunset × Beaudry 0 m; Reservoir Street is outside the OSM extract. ⚠ Identity to confirm: the 1893 Elysian Park Avenue taken as the lineage of the surviving stretch. |
| lah-1894-07-24 | castelar-hill | an ordinance changing the name of a portion of Castelar street to Hill street. Passed. | `castelar` ✓ → `hill-street-downtown` ✓ | 2 (unspecified portion) | adopted | 1 | Row written, extent-unresolved. ⚠ `hill-street-downtown`'s note dates Hill's arrival on Castelar to 1960; this 1894 portion needs reconciling with that. |
| lah-1896-06-16 | lemon-and-others | Lemon street, from Wilson street easterly to Hiscock & Smith's second addition, to Eighth street | `lemon-st-arts-district` ✓ → `eighth-street` ✓ | 2 (cross + tract) | adopted (item closes “Adopted.”) | 1 | Row written, extent-unresolved: 8th Street does not meet Wilson Street in the extract (495 m); the other anchor is a tract. |
| lah-1896-09-03 | mateo-molino, lede | Mateo, or Shafer, street, from Palmetto to Short, be changed to Molino street | `mateo` ✓ → `molino-st` ✓ | 2 | adopted (Ord. 3829) | 1 | Row written, extent-unresolved: Molino × Palmetto 0 m; “Short” is not in the extract. A whole-name reading would have renamed modern Mateo. |
| lae-1924-04-12 | signed | the ordinance changing the name of Orange street between Alvarado and Figueroa streets to Wilshire boulevard | `orange-st-wilshire` ✓ → `wilshire` ✓ | 2 | approved (signed) | 1 | Row written, RESOLVED: Wilshire Boulevard, `fromCross: null` (Alvarado is past the extract's west edge, ~0.5 km) → Figueroa Street (0 m). What-if: Orange by 1878 → Wilshire Apr. 1924 on every stretch. ⚠ Written against the header's “only the instrument” note (step 2a allows it). |
| lah-1908-07-14 | the-ordinance | an ordinance changing the name of Orange street, from Figueroa to Alvarado, to Wilshire boulevard | `orange-st-wilshire` ✓ → `wilshire` ✓ | 2 | adopted (reported two weeks after) | 1 | READY BUT NOT WRITTEN — blocked by the generator. With it and the repeal, the what-if build collapsed Orange → Wilshire → Orange → Wilshire into “Wilshire July 1908 → Dec. 1908 \| Orange Dec. 1908 → July 1908” and lost the 1878 lettering. Same extent as 1924. |
| lah-1908-12-05 | the-arc, repealed | The ordinance changing the name of Orange street was repealed and Orange street is still Orange street. | `wilshire` ✓ → `orange-st-wilshire` ✓ | 2 (extent of the repealed act) | adopted (repeal) | 1 | READY BUT NOT WRITTEN — same generator block. A genuine revival, not a wrong-street one. |

## Bin C — needs an entity or an identity decision first (170)

"in" = the ground is inside the OSM extract (lat 34.030–34.071, lng −118.275 to
−118.212); "out" = an entity would draw nothing yet. **Minted** (`basis: "none"`,
`searched: "none"`, `internalNote` naming the document): `davies-2nd`,
`golden-avenue`, `huntley-drive` — the three where the document gives the name
*and* the ground, and the ground is in the extract. Their rows are not written.

| document | excerpt | wording (verbatim) | from → to | form | stage | n | what's missing / what was done |
|---|---|---|---|---|---|---|---|
| lah-1883-05-13 | turner-jackson | an ordinance changing the name of Turner street, from First to Alameda, to Jackson street | `turner-street` ✓ → `jackson-st` / `jackson-st-little-tokyo` ? | 2 | adopted | 1 | in. Entity identity, not absence: which Jackson is open (`possiblySameAs`), and `turner-street`'s note withholds a row until its 1928 “Turner” sighting is explained. Modern Jackson meets neither 1st (289 m) nor Alameda (338 m). |
| lah-1883-09-02 | ordinance-five-streets | Georgia to Georgia Bell street | `georgia-bell`? → `georgia-bell` (toForm Georgia Bell Street) | 1 | adopted | 1 | in. Identity: `georgia-bell`'s own note says the 1883 act may be a different Georgia (“in same addition”, Bell's) and conflicts with the May 1889 date; no row until that is settled. |
| lah-1883-09-02 | ordinance-five-streets | Pine to Cherry street | — (a Pine in Bell's addition) → `cherry-street` ✓ | 1 | adopted | 1 | in. Needs a Pine entity; the doc gives the name but the ground only as “in same addition” (lah-1883-08-19). ★ Answers `cherry-street`'s worry that its Jan. 1884 lettering predates any Pine→Cherry act: the act is Sept. 1883. |
| lah-1883-09-02 | ordinance-five-streets | Turner street to Sonora street; Elm to Bush street; Rose street, East Los Angeles, to Kuhrts street | a second Turner (west of Main), a second Elm, a Lincoln Heights Rose → — | 1 | adopted | 3 | Three entities on each side; ground only “west of Main” / “in same addition” / “East Los Angeles”. Rose: out. |
| lah-1886-01-15 | sec-3-william-goss | that certain street known as William street, and situated in the Los Angeles Improvement Company's subdivision of lots … changed to Goss street | a second William → — | 2 (tract) | published | 1 | Needs a Goss entity and a second William; the subdivision is not located in the corpus. |
| lah-1886-07-23 | sec-1-guadalupe-davies | that certain street, extending from Alameda street to Geary street and known as Guadalupe street, … changed to Davies street | `guadalupe` ✓ → `davies-2nd` (MINTED) | 2 | published (Ord. 242) | 1 | in. ENTITY MINTED. Row not written: if “Geary” is modern Garey (2nd × Garey 0 m — a spelling inference) the row is extent on 2nd Street, Alameda → Garey. |
| lah-1886-07-23 | sec-2-cemetery-castelar | that certain street, extending from Temple street to Bellevue avenue and known as Cemetery avenue, … changed to Castelar street | — → `castelar` ✓ | 2 | published (Ord. 242) | 1 | Needs a Cemetery Avenue entity, and the ground is unplaced (RENAMING-SOURCES: a second street, not Bull's). Not minted. |
| lah-1887-06-14 | deep-water-bartlett-adopted | an ordinance changing the name of Deep Water street to Bartlett street. Adopted. | — → — | 1 in the report; 2 in the recommendation | adopted | 1 | Needs Deep Water and Bartlett. Step 2c: the adopting line is bare but the recommendation it enacts said “from Beaudry avenue to Philadelphia street” — read as qualified. Bunker Hill ground, probably vanished. |
| lah-1889-07-27 | sec-1 | Friend street, is hereby changed … Montague street | — → — | 1 | published (Ord. 285) | 1 | out (Montague became 28th Street in Nov. 1889). |
| lah-1889-09-19 | sec-1-diamond-first | the name of that portion of Second street from Lakeshore avenue to the west city line … changed to First street | `second-street`? → `first-street` ✓ | 3 | published (Ord. 364) | 1 | Identity: which entity this 1889 “Second street” is — the downtown lineage extended west along the cable route (the 1888 committee's “Diamond St., Lake Shore Ave. and Stevenson Ave., changed to Second St.”) or not. Probably modern Beverly Blvd. |
| lah-1889-11-06 | the-list | Greenwell and Vejar (→14th); Morris and Montgomery (→17th); Pacheco and Ocean (→18th); Queen … Church street to Lyon street | — → numbered streets | 1 | adopted (two documents) | 35 | Needs a from entity each. Greenwell, Vejar, Morris, Montgomery, Pacheco, Ocean may be in; 20th–39th are out. Grace and Keller have entities but not these streets (Clement Tract Grace; Wingerter Keller); Ruby likewise. |
| lah-1889-12-14 | sec-1-downey-olympia | all that portion of Downey avenue west of the Los Angeles river, is hereby changed … Olympia street | — → — | 3 | published (Ord. 482) | 1 | out. |
| lah-1890-02-18 | broadway-toberman-fort-broadway | changing the name of Broadway street to Toberman street | — (a pre-1890 “Broadway street”) → — | 1 | adopted | 1 | Needs two entities; NOT `broadway`, which is the name Fort took the same night. Ground unknown. |
| lah-1890-03-04 | pleasant-restored | An ordinance changing the name of a portion of Aliso street back to Pleasant avenue | — → — | 2 (unspecified portion) | adopted | 1 | out (across the river). A genuine revival on the ground, not §10 form 4. |
| lah-1891-10-06 | mott-center-passed | An ordinance changing the name of Mott alley to Center place. Passed. | — → — | 1 | adopted | 1 | Location unknown; not `center-street`. |
| lah-1893-05-04 | sec-1 | that portion of Schuyler street between Echandia street and Bridge street … Pennsylvania avenue | — → — | 2 | published (Ord. 1654) | 1 | out (Boyle Heights). |
| lah-1893-09-17 | sec-1 | Balboa → Norwood; Crescent avenue → Crescent Road; Clement → Seventeenth; Old Compere or Compere → Eighteenth; Shorb → Twenty-fifth | — → (17th, 18th exist) | 1 | published (Ord. 1834) | 5 | Needs from entities. Which Crescent is open — `crescent-park-tract` may already have been folded into Beaudry by Ord. 48. |
| lah-1893-10-22 | sec-1 | Adeline → Twenty-first; Pandora → Twenty-second; Oleander → Twenty-third | — → — | 1 | published (Ord. 1880) | 3 | out. |
| lah-1893-10-29 | sec-1 | "Reservoir street," from Elysian Park avenue to Pasadena boulevard; "Childs avenue," in the Childs Heights tract; "Effie street," from Hyperion avenue to the north city boundary → Sunset boulevard | — → `sunset-boulevard` ✓ | 2 / tract | published (Ord. 1888) | 3 | out. |
| lah-1894-01-26 (+ lah-1894-01-30, lah-1894-02-06) | echo-park-road | Loomis street, Laguna avenue …, Montana avenue …, Utah street …, and Morton street … to Echo Park road | (`loomis-st`?, `utah-st` is Boyle Heights) → — | 2 | adopted (list from the motion) | 5 | out. The list is the motion's; the ordinance was repassed after a Morton/Montaña error — the adopted text is not in hand. |
| lah-1894-02-13 | willow-golden | an ordinance changing the name of Willow street, between Eighth and Ninth streets, to Golden avenue. Adopted. | `willow-golden` ✓ → `golden-avenue` (MINTED) | 2 | adopted | 1 | in. ENTITY MINTED (replaces the OSM stub). Row would be extent-unresolved: Golden Ave meets 8th at ~110 m and never reaches 9th in the extract. NOT `willow`. |
| lah-1894-03-27 | providence-westlake | An ordinance changing the name of Providence street to Westlake avenue. Adopted. | — → `westlake-avenue` ✓ | 1 | adopted | 1 | in. Needs Providence; the document gives no ground beyond the name, so not minted. |
| lah-1895-02-19 | kansas-green-passed | The ordinance changing the name of Kansas to Green street finally passed. | — → — | 1 | adopted | 1 | Location unknown. |
| lah-1895-11-05 | west-beacon-beacon | An ordinance changing the name of West Beacon street to Beacon street. Adopted. | — → — | 1 | adopted | 1 | Location unknown. |
| lah-1896-05-05 | bunker-hill-california | An ordinance changing the name of a portion of Bunker Hill avenue and Sand street to California street. Adopted. | `bunker-hill-ave`, `sand-st` (unlettered) → — (a Bunker Hill California, NOT `california-street-14th`) | 2 (portion) | adopted | 2 | in. Needs a second California entity; extent unresolved. |
| lah-1896-06-16 | lemon-and-others | Lemon (Seventh to Wilson junction) → Wilson; Lemon (Eleventh to Santa Clara) → Santa Clara; Lemon (Santa Clara to Santa Fe) → Kercheval; South (Santa Fe easterly) → Tenth; Cooper (Santa Fe easterly) → Eleventh | `lemon-st-arts-district` ✓ / — → Wilson —, Santa Clara —, Kercheval —, `tenth-street` ✓, `eleventh-street` ✓ | 2 / 3 | adopted | 5 | in. Needs Wilson, Santa Clara, Kercheval, an Arts-District South and a second Cooper (`cooper-street` is the Scott Avenue one). |
| lah-1896-08-11 | mateo-shafer | Ordinance changing the name of Mateo street, from Palmetto street to Short street, to Shafer street. Adopted. | `mateo` ✓ → — | 2 | adopted | 1 | in. Needs Shafer; superseded three weeks later by Molino (row in B). |
| lah-1896-09-03 | various | McConnell → Darwin; South (Sixth to Acacia) → Western; Bellevue (Orange to Seventh) → Little; Campus → 35th; Olin or Jefferson → Jefferson; Childs or Vermont → Vermont; Asbury, Haven → 36th; Hellman → Athena; Simpson → 37th; Janes → 38th | mostly — → — | 2 | adopted (Ord. 3829) | 11 | South→Western and Bellevue→Little are in (Union Ave 4th–6th if Acacia = 4th; Little Street vs Bellevue unsettled); the rest out. |
| lah-1896-09-09 | all | Freeman … Kenwood avenue, from Vermont avenue to Palm street, change to Twenty-fifth street. Adopted. | — → — | 2 | adopted (Ord. 3847, printed) | 9 | out. |
| lah-1896-12-29 | western-union | Western avenue (formerly South street) between Acacia street and Sixth street, to Union avenue. Adopted. | — → `union-avenue` ✓ | 2 | adopted | 1 | in. Needs the South/Western entity for Union Ave between 4th (Acacia) and 6th; then resolvable (both 0 m). The Dec. 15 item is a first adoption of the same change. |
| ord-4093 transcription (Feb. 23 committee report) | — (not excerpted) | Larkin Street \| Fourth Street; Lugo Street \| Fifth Street; Kino → Killarney; Dana → Compton Avenue; Holborn → Avenue 34 | — → (`fourth-street`, `fifth-street` ✓) | 1 | adopted with Ord. 4093 | 5 | §10's open question: left column may be a real street or a draft coinage; needs the ordinance text. Larkin, Lugo in; others out. |
| ord-4093 transcription | — | Ash Street from Main to Date to Queirolo | — → — | 2 | adopted with Ord. 4093 | 1 | Date Street is outside the extract. |
| ord-4093 transcription | — | Short Street from Fourth to Santa Fe Grounds \| Fourth Street | — (Arts District Short, not `short-street-chavez`) → `fourth-street` ✓ | 2 (landmark anchor) | adopted with Ord. 4093 | 1 | in. Needs the entity; “Santa Fe Grounds” is a landmark, not a crossing. |
| ord-4093 transcription | — | Park Lane \| Lebanon | `park-lane` (vanished trace only) → — | 1 | adopted with Ord. 4093 | 1 | in. Needs Lebanon; Park Lane is lettered only as a vanished trace, so a whole-name row would land nowhere. |
| ord-4093 transcription | — | Hawkins → Manitou; Water → Avenue 18 … Swain → Avenue 35 (the urgent-request list, less Wolfskill and Lacy) | — → — | 1 / 3 | adopted with Ord. 4093 | 17 | out (Lincoln Heights). |
| ord-4093 transcription | — | That the name of that certain street known as and called Stanley Avenue, is hereby changed to Tropico Avenue; … Wood Avenue from Morrison Road to Soto Street, is hereby changed to Griffin Avenue | — → — | 1 / 2 | adopted (operative words inserted on the floor) | 2 | out. |
| lah-1898-08-02 | bullard-rosedale | changing the names of Bullard street and Rosedale avenue to Court street and Normandie avenue respectively | — → `court-street`? / — | 1 | adopted | 2 | Which Court is unknown; Rosedale out. |
| lah-1898-11-08 | delgado-cecilia | An ordinance changing the name of Delgado street to Cecilia street was adopted. | — → — | 1 | adopted | 1 | Probably in (Cecelia Street); no ground given, not minted. |
| lah-1901-03-13, lah-1901-08-07 | west-pacific; colorado-grand | West street to Pacific avenue; Colorado Court to North Grand avenue | — → — | 1 | adopted | 2 | Location unknown. |
| lah-1903-02-17 | three-names | East Jefferson street, Virginia street or Thirtieth street, between Eureka street and Central avenue, to Thirty-eighth street | — → — | 2 | adopted | 3 | out. |
| lah-1905-03-14 | five-changes, passed | Murdock → 48th; Woodmen → 49th; Waco avenue and Waco street → 50th; 49th (Main to Moneta) → 48th; 50th (Main to Moneta) → 49th | — → — | 1 / 2 | adopted | 6 | out. |
| lah-1908-10-27 | three-changes | Portions of Macy, Prospect place, Yosemite and Pennsylvania avenue are changed to Bridge street … Brooklyn … to Prospect place | — → — | 2 (unspecified portions) | adopted | 8 | out (Boyle Heights). |
| lah-1919-11-27 | sapphire-huntley, full-item | the name of that part of Boyleston avenue and Sapphire street, from north of Third, changed to Huntley drive | `boylston` ✓, `sapphire` (unlettered) → `huntley-drive` (MINTED) | 3 | “ordered … changed” — instruction or adoption? | 2 | in. ENTITY MINTED (replaces the OSM stub). Rows not written until the ordinance itself is seen. |
| lah-1919-11-27 | reservoir-descanso | the name of Reservoir street, from Sunset boulevard to Micheltorena street, changed to Descanso drive | — → — | 2 | as above | 1 | out. |
| lah-1920-08-12, lae-1923-05-02, dnla-1924-01-04, laevex-1925-10-16, dnla-1926-08-05, lae-1926-07-23, lah-1926-06-17, dnla-1926-09-30 | various | Cleland → Cynthia; Bluff (Grand View to Coronado) → Fourth; Concord → Pasa Hambra; Childs → Griffith Park Blvd; Pruess → Robertson; South Park and Canal → Avalon; Wooddale → Hollywood Way; Moneta (93rd to 113th) → Broadway | — → mostly — | 1 / 2 | adopted | 9 | All out of the extract. |
| lae-1930-05-03, lae-1930-06-11, dnla-1932-03-23 | gage; crenshaw; override | five streets → Gage Avenue; Angeles Mesa Drive (Adams to the south city limits) → Crenshaw Boulevard; Pasadena Avenue and Annandale Boulevard → North Figueroa Street | — → mostly — | 1 / 2 | adopted (Pasadena Ave: over the veto) | 8 | All out. |

## Bin D — not drawable, or not a change (357)

| document | excerpt | wording (verbatim) | form | stage | n | why not a row |
|---|---|---|---|---|---|---|
| lah-1874-02-13 | petition | Grasshopper street be changed to Union Avenue, Bull street to Castelar, and Wasp street to Yale street | 1 | petition → referred | 3 | Proceeding. Union Avenue lost to Pearl (lah-1874-02-27). |
| lah-1874-02-27 | petition | others for Union Avenue | 1 | proposed, lost | 1 | A rejected name (§12). |
| lah-1883-06-17 | polyxena-clay-draft | draft an ordinance changing the name of Polyxena-street to Clay-street | 1 | instruction | 1 | Proceeding. |
| lah-1883-08-19 | all | Turner west of Main → Sonora; Pacific → Montgomery; Pine → Cherry; Georgia → Alabama; Elm → Bush; Rose → Kuhrts; Chavez → Main | 1 | recommendation / referred | 7 | “Adopted” here is the Board's recommendation. Georgia→Alabama and Pacific→Montgomery did not carry. |
| lah-1883-10-21 | morgan-lane-mayo | draft an ordinance changing the name of Morgan Lane to Mayo street — `morgan-lane` ✓ → — | 1 | instruction | 1 | Proceeding; no adopting report in the corpus. |
| lah-1887-06-07 | deep-water-bartlett | changing its name to Bartlett street from Beaudry avenue to Philadelphia street | 2 | recommendation | 1 | Proceeding (its adoption is in C). |
| lah-1887-06-14 | ozier-winston-postponed | An ordinance changing the name of Ozier Lane to Winston street. Action postponed. — `ozier-lane` ✓ → `winston-st` ✓ | 1 | postponed | 1 | Proceeding. Both entities exist and the change evidently happened — the adopting item is WANTED. |
| lah-1888-01-04, lah-1888-01-24 |  | Le Convieur street to Ashland street | 1 | referred; then lost 8–5 | 2 | Defeated. |
| lah-1888-10-11 | all 27 pair-bearing excerpts | Botiller St. and Santee St., changed to Martin St. … Koster Ave., changed to Koster St. | 1 / 2 | proposed (committee draft) | 38 | Draft of what became Ord. 48 (Apr. 1889, body untranscribed); several lines did not hold (Maple→Regent reversed, Lafayette→Contra Costa lost, Cummings→Modoc). |
| lah-1889-02-06 | duplicates-adopted | the ordinance, changing the names of the numerous streets … in duplicate | — | adopted, then vetoed | 1 | Vetoed Feb. 18 (lah-1889-02-19); names none. |
| lah-1889-07-23, lah-1889-12-10, lah-1890-02-18 (Fort), lah-1886-07-20, lah-1893-04-04, lah-1893-09-12, lah-1893-10-17, lah-1893-11-14, lah-1896-12-15, laevex-1924-04-01, lae-1924-04-04, lae-1924-04-07, min-1896-09-08 |  | second reports of acts whose row (or bin) belongs to the instrument | — | witness | 30 | Witnesses. One row per event, on the most final document. lah-1890-02-18 dates the Fort→Broadway adoption to Feb. 17 — worth adding to that row's note. min-1896-09-08 is the ABRIDGED minutes copy of Ord. 3847 (step 2c). |
| lah-1890-02-21 | pleasant-restoration-asked | the old name, Pleasant avenue, to be restored | 1 | petition | 1 | Proceeding (adopted Mar. 4 — in C). |
| lah-1890-06-07, lah-1891-08-25 |  | Sepulveda street … changed to Jackson street | 1 | petition filed; instruction | 2 | Proceedings. |
| lah-1890-10-28 | the-list | Canal street to Beaudry avenue; … Davies street to Second street (18 of 20; two already rowed) | 1 / 2 / 3 | passed, then vetoed (Nov. 8) | 18 | Vetoed; the council referred it back for amendment (lah-1890-11-11) and no override is in the corpus. Several did happen later (Collado→Union, Waters→Douglas, Canal→Beaudry) under instruments not in hand. |
| lah-1890-12-20 | breed-bird | change the name on the sign … from Breed to Bird street; … petition … be held | 1 | sign correction; petition held | 2 | Not a renaming (a sign fixed to the legal name) and a held petition. |
| lah-1891-09-29 | mott-center | directed to prepare an ordinance changing the name of Mott alley to Center place | 1 | instruction | 1 | Proceeding (passed Oct. 6 — in C). |
| lah-1892-01-19, lah-1892-01-23 |  | Martin street and Botello (Botiller) street to Santee street — `botiller-street` ✓ → `santee-street` ✓ | 1 | motion; recommendation | 4 | Proceedings; no adoption in the corpus. |
| lah-1892-11-29, lah-1892-12-07 |  | Adobe street to Harvard street — `adobe` ✓ → — | 1 | presented; returned unsigned | 1 | Vetoed (a Harvard Avenue already existed). |
| lah-1893-02-21, lah-1893-03-07 |  | a portion of Loomis street to Sixth street — `loomis-st` → `sixth-street` | 2 | adopted, returned, reconsidered, tabled | 1 | Withdrawn. |
| lah-1893-10-17 | wall-myrtle-postponed | Wall street to Myrtle avenue | 1 | postponed | 1 | The reverse was enacted (lah-1893-11-21). |
| lah-1894-02-06 | morton-montana-corrected | an error by which Morton street was called Montaña street was corrected | 5 | draft correction | 1 | Edits the instrument, not the city. |
| lah-1894-04-21 | hope-euclid | Hope street to Euclid avenue | 1 | recommendation | 1 | Proceeding; not downtown Hope. |
| lah-1894-08-19 | lazard-ducommun | Lazard street to Ducommun street … Barrone street to Coronado street — `lazard-street` ✓ → `ducommun` ✓ | 1 | recommendation | 2 | Proceeding. Lazard→Ducommun is in the extract and both entities exist — the adopting ordinance is WANTED. |
| lah-1894-10-03 | gillette-mitchell | Gillette street to Mitchell street for one block between Mitchell and Bridge streets | 2 | instruction | 1 | Proceeding. |
| lah-1895-02-12 | kansas-green-introduced |  | 1 | introduced | 1 | Witness to lah-1895-02-19 (C). |
| lah-1895-06-22 | philadelphia-grand | Philadelphia street to Grand avenue | 1 | recommendation | 1 | Proceeding (adopted July 1 — A). |
| lah-1895-07-02 | hoover-rule | Milton and Wheaton streets to Hoover street | 1 | instruction | 2 | Proceeding; plus a standing rule binding unnamed ground. |
| lah-1895-08-20 | terrace-hurlburt | Terrace avenue to Hurlburt street | 1 | first reading | 1 | Proceeding. |
| lah-1896-05-12 | engineer-request | South street to Tenth street | 1 | referred | 1 | Proceeding. |
| lah-1896-05-16 | proposal, the-avenues | Buena Vista street … and Pasadena avenue … to Pasadena boulevard; Ord street to Seventh avenue … Garvanza to Fifty-second avenue | 1 / 2 | argued before the Board | 54 | Proposal; Alpine → Eighth avenue and most of the lettered streets never happened. |
| lah-1897-02-02 | PARTIAL-report | Pearl street has been changed to Figueroa street … the Figueroa street on the northwest side has been changed to De La Guerra street | 1 / 5 | commission draft (vetoed version) | 2 | Pearl→Figueroa is rowed on ord-4093; De La Guerra never was law. |
| lah-1897-02-05 | bell-account, bell-account-tail | Georgia → Georgia Bell; Nevada → Georgia Bell “to make it uniform”; Virginia → DeLong; the draft's Georgia Bell → Nevada | 1 | reported-after / draft | 4 | Bell's recollection of past acts (the instruments: 1883 and Ord. 48) and the vetoed draft. Nevada→Georgia Bell waits on Ord. 48's body. |
| ord-4093 transcription | — | Primero, Alcantara, Escalon, Moameta, Negrete, Chicote, Zaragoza, Way 15–24 and 30–38 → … | 5 | committee amendments to the draft | 26 | Form 5: draft coinages (the mayor's objected list; the vetoed “ways”). |
| ord-4093 transcription | — | Canada Street \| Avenue 33 … Lacy Street \| Avenue 33 | 6 | committee amendments | 2 | Form 6: one number assigned twice. |
| ord-4093 transcription | — | The name Moore Street reinstated. / Marion Avenue restored. / Ruth Avenue restored. / Yolande Street restored. — `moore-st`, `marion-ave`, `ruth-ave` ✓ | 4 | committee amendments | 4 | Form 4: dates a negative, not a change. |
| ord-4093 transcription | — | “De La Guerra Street” → “Boylston Street”; “Manitou Street” → “Manitou Avenue”; “Broadway Street” → “Canal Street”; “Dana Street” → “Stanley Avenue”; “Nevada Street” → “Georgia Street” (in the draft) | 5 | floor amendments to the draft | 5 | Form 5. |
| lah-1897-12-07 | referred-list, de-celis-main, reasons-list, tail-list | Ward street from Hoover to Bautista, changed to Sixth street … Rocksbury street … should be changed to Roxbury avenue | 1 / 2 | engineer's report, referred | 34 | Proceeding. ⚠ `wilshire`'s note dates the naming to this referral (“Sixth street … changed to Wilshire boulevard”) — a proposal, not an act. |
| lah-1898-05-28, lah-1898-06-12, lah-1898-11-29, lah-1899-03-14, lah-1899-05-06, lah-1899-06-28, lah-1900-10-23 |  | Niza → Lee; Mission road and Bauchet → Mission boulevard; Yolande → Thirtieth Place; Covarrubias → Effie; Moneta back to Main; Stanley → San Pedro; Mission Road ↔ Alhambra; Concord Court → Green; Leahy → Sacramento | 1 / 2 | referral / recommendation / first reading / presented | 12 | Proceedings. |
| lah-1899-07-26, lah-1899-10-11 |  | Arlington court → drive … West Columbia and Hill → Columbia (Pasadena); “[?]tle avenue” → Broadway | 1 | Pasadena's council; one illegible | 13 | Out of jurisdiction (Pasadena), and one old name illegible. |
| lah-1905-05-13 | renumbering | what has been known as Forty-ninth street … will be changed to Forty-first street | 1 | passed, recalled from the mayor | 1 | Withdrawn (lah-1905-05-16). |
| lah-1908-09-22 | the-vote | Fort street, from First to Bellevue, Buena Vista, from Bellevue to the river, and Downey avenue … to Broadway | 2 | instruction | 3 | Proceeding. ★ Says Fort north of First was never officially Broadway. |
| lah-1908-12-05 | sunset-petition | Orange street between Hoover and Wilshire boulevard … to Sunset place | 2 | petition | 1 | Proceeding. |
| lah-1910-09-30, lah-1911-02-08, lah-1917-01-29 |  | Newman → Duin; Wesley (Jefferson to Santa Monica) → University; Valley → Hughes | 1 / 2 | instruction; reconsidered and committed; held up | 3 | Proceedings. |
| dnla-1925-07-16 | venice-blvd | the ordinance changing the name of Sixteenth Street, from Main Street to the west city limits, to Venice Boulevard, was laid over — `sixteenth-street` ✓ → `venice-boulevard` ✓ | 3 | laid over | 1 | ★ In the extract, both entities exist — the adoption a week later is WANTED. |
| dnla-1926-05-06, lae-1926-06-08, lah-1926-06-08, lae-1927-06-22, lae-1927-06-29, lah-1927-06-29, dnla-1927-06-30, lae-1927-10-18, dnla-1927-07-27, lae-1928-08-06, lae-1928-08-18, lae-1929-08-21, lae-1929-10-21, dnla-1930-03-21, dnla-1930-08-05, lae-1930-11-13, dnla-1932-02-17, dnla-1932-03-22, dnla-1933-09-06, dnla-1934-02-03, dnla-1935-09-10 |  | Sherman Ways → Zahn / Van Nuys; Waverly Drive; Main → Huntington (five items); First → Beverly; Adams Blvd; Sunset → Hollywood Blvd; Country Club → Olympic; Esmeralda → East Rose Hill; Third → Camarillo; 128th → El Segundo; Hollenbeck → Eighth; Pasadena Ave (blocked, vetoed); Claire and Linda → Davies Drive (and Clairaly); Beverly → Sunset; Freitas → Londonderry | 1 / 2 / 3 | submitted / hearing / drafted / defeated / withheld / agenda / recommended / referred / instructed / vetoed / authorized / pending | 28 | Proceedings, plus the vetoed Pasadena Ave item whose override is in C. Main→Huntington never became law. |
| min-1890-02-03 | petition-126 | asking that the name of Fort street be changed to Broadway — `fort-street` ✓ → `broadway` ✓ | 1 | petition, referred | 1 | Proceeding — stage 1 of the change rowed on lah-1890-02-20. |
| min-1896-09-21 | petition-829-albion-stearns | asking that the name of Stearns Avenue be changed to Albion Street, and Albion Street from Stearns Avenue to east Main Street be changed to West Albion Street | 1 / 2 | petition, referred | 2 | Proceeding; a name moving sideways between two streets. |
| guinn-1895 | ord-street-names, los-angeles-street-lineage, spring-street-charity | Calle de Las Caridad … (now Grand avenue) … Calle de Los Chapules … (now Pearl street) … Zanja … dignified into the Calle Principal … Calle de Los Huertos … (now San Pedro) … Calle Cuidado | — | history | 6 | `type: "history"` may not carry a change row. |
| guinn-1912 | most excerpts | Libertad → Requena → East Market; Buena Vista → North Broadway; Corta and Alta → Sunset; Forten, Caridad, Chapules → Broadway, Grand, Figueroa; Zanja → Vinas → Huertas → Principal; Upper Main → San Fernando; Alegro/Junction → North Main; Iglesias → Pan → Panaderia → Corta → Marchessault; Trinidad → Marchessault; Eternidad → Buena Vista; Salvation → Temple; Jail → Franklin; Moran's lane → East Ninth; Lovers' Lane → Date; Georgia Bell → Georgia | — | history | 26 | History; several are leads for instruments (Moran's Lane → 9th; Requena → East Market). |
| lah-1889-11-06 | the-list | from Laurel and Adele to Fifteenth street — `adele-st` (vanished trace only) → `fifteenth-street` ✓ | 1 | adopted (two documents) | 1 | Unattested from: a whole-name row would land nowhere. |

## Change rows already in the corpus (19) — re-read

| document | row | verdict |
|---|---|---|
| lah-1874-02-27 | chapules → pearl | ✔ witness to ord-1874-02-26, kept for the argument it records |
| ord-1874-02-26 | chapules → pearl, bull → castelar, hornet → yale | ✔ |
| lah-1886-09-21 | high-street-chinatown → walters-street | ✔ adopted; unconfirmed |
| ord-1887-08-22 | virgin → alpine | ✔ |
| lah-1890-02-20 | fort-street → broadway | ✔ — add the adoption date, Feb. 17 (lah-1890-02-18). ⚠ lah-1908-09-22 says Fort north of First "has never officially been named Broadway": harmless today because `fort-street` is lettered only south of First, but a sheet lettering Fort north of First would be renamed wrongly by this whole-name row |
| **lah-1890-10-28** | walters-street → ord-street; second-street → stephenson-avenue | **⚠ bin D by this audit's own rule: Mayor Hazard vetoed the ordinance (lah-1890-11-09) and the council referred it back for amendment (-11-11); no override is in the corpus.** Both rows were added 2026-09-18 by another instance and say so in their notes. Recommend they stay unconfirmed until the instrument that actually made Walters into Ord is found |
| lah-1893-11-21 | myrtle → wall-street | ✔ confirmed |
| lah-1896-09-03 | tulip → santa-fe-ave; cincinnati → jesse | ✔ |
| ord-1613 | wyoming-avenue, cooper-street → scott-avenue | ✔ (unlettered from; warns) |
| ord-4093 | pearl → figueroa-gov; figueroa-gov → boylston; georgia-bell respelling | placeholders. The respelling now has a real warrant on lah-1897-02-24 |
| ord-4093 | vine-central → central-ave (extent); wolfskill-ave → central-ave (whole-name) | ✔ — though §10 says a committee-report line is "at best qualified, unresolved"; the whole-name reading of Wolfskill was Kenny's call and stands |

## Documents that report a renaming but name no pair (43)

Not counted in the bins. Each is a pointer to a list that is somewhere else:
lah-1883-08-26 (six old names, no new ones), lah-1886-01-06, lah-1889-02-19,
lah-1889-02-26, lah-1889-04-22, lah-1889-04-23, **lah-1889-05-10 (Ordinance No. 48 — 212 changes, body
untranscribed: the single largest unread source in the corpus)**, lah-1890-10-07,
lah-1890-10-14, lah-1890-11-09, lah-1890-11-11, lah-1892-02-13, lah-1893-04-25,
lah-1893-08-08, lah-1893-10-24, lah-1894-01-30, lah-1894-06-26, lah-1894-08-15,
lah-1896-03-31 (a portion of Arnold — in the extract), lah-1896-09-01,
lah-1896-10-07, lah-1897-02-03, lah-1897-02-09, lah-1897-02-16, lah-1897-02-27,
lah-1897-10-26, lah-1897-12-28, lah-1899-08-09, lah-1900-01-06, lah-1900-01-09,
lah-1901-07-31, lah-1905-05-16, lah-1905-05-17, lah-1905-05-18, lah-1907-12-27 (Reservoir, Hermosa, South avenue — old names only),
lah-1908-03-13, lah-1917-02-14, lah-1919-09-30, laevex-1925-09-15, min-1893-04-10,
min-1896-08-31, min-1896-09-14, newmark-1916.

## Patterns worth knowing

**Where the statements are.** Six instruments or drafts hold most of them: the
1896 Allen avenue proposal (54, all proposed), the Nov. 1889 numbering ordinance
(41), the Oct. 1888 committee draft (38 of its 199), the Dec. 1897 engineer's
report (34, referred), Ord. 4093's transcribed committee report and floor motions (66), and the 1890 omnibus
(20, vetoed). Only the numbering ordinance and Ord. 4093 were adopted; the
first now carries five rows, the second still five (three on placeholders).

**The two transcriptions that would move the most rows.** (1) **Ordinance No. 48's
body** (lah-1889-05-10, clip already on disk): the 1888 draft shows it touching
at least a dozen pairs where *both* entities already exist — nevada-1886 →
georgia-bell, warren-st-arts-district → decatur-st, consuelo →
california-street-14th, beaudry-avenue → canal-street-beaudry, crescent-park-tract
→ beaudry-st, earl-st → san-julian-st, morgan-lane → Mayo, sainsevain-street →
commercial-street, virginia-st-angeleno-hgts → Toluca, georgia-east →
atchison-st, castelar → hill-street-downtown, and Lake Shore → Second. (2) **The
Ord. 4093 text** (still with the City Archivist).

**Vetoed, recalled or withdrawn.** Feb. 1889 (Bryson; became Ord. 48), Oct. 1890
(Hazard; two rows sit on it), Dec. 1892 Adobe → Harvard, Mar. 1893 Loomis →
Sixth (returned at the council's own request and tabled), Feb. 1897 (the first
Ord. 4093), May 1905 (the ninety streets, recalled), 1927 Main → Huntington
(drafted, withheld, postponed indefinitely), 1932 Pasadena Avenue (vetoed and
overridden). A veto is a reason to look for a *later* instrument, not evidence the
change never happened: Collado → Union, Waters → Douglas and Canal → Beaudry all
came true after 1890's veto.

**Enacted re-changes are not §10's form 4.** Form 4 withdraws a change a draft
would have made. Ord. 482's "Second street (formerly Lakeshore avenue) … hereby
changed … Lakeshore avenue", the 1890 "portion of Aliso street back to Pleasant
avenue" and the 1908 Orange repeal are instruments changing the name on the
ground back again. They are ordinary change rows that produce a genuine revival.
The header of lah-1889-12-14 reads Ord. 482 as a form the model cannot express;
this audit disagrees.

**Recurring names — each a trap.** Pine (four streets), Virginia (four), Georgia
(two, maybe three), William (two or three; `william` already carries sightings on
both Santee and Bixel), Belmont (two, plus Aztec on the same corridor), Willow
(two), Cooper (two — the one in 1896 is not ord-1613's), California (two — the
1896 Bunker Hill one is not `california-street-14th`), Jackson (three or four),
South Street (at least three), Short (two), Crescent (two), and Broadway (Fort,
Buena Vista, Downey, Moneta, *and* a pre-1890 "Broadway street" that became
Toberman the same night Fort became Broadway).

**Stage words that fooled earlier readings.** "Adopted" after a Board report
(the recommendation, not an ordinance); "ordered … changed" in 1919 (possibly an
instruction); "carried 6 to 3, then reconsidered" in one 1911 meeting; a list
printed on first reading (Nov. 1889, Jan. 1894) whose adoption is reported
elsewhere without the names.

**Prose that runs ahead of its source** (worth a look; not edited here):
`wilshire`'s note says the name was given in Dec. 1897, but lah-1897-12-07 is a
referral; `hill-street-downtown` dates Hill's arrival on Castelar to 1960, but an
1894 ordinance moved "a portion"; `cherry-street` worries that its Jan. 1884
lettering predates any Pine → Cherry act, and the act is Sept. 1883 (lah-1883-09-02).

**Two in-extract changes whose adopting item is missing** (cheap CDNC wins):
Ozier Lane → Winston (postponed June 1887; both entities exist) and 16th Street →
Venice Boulevard (laid over July 1925, "Main Street to the west city limits";
both entities exist). Also Lazard → Ducommun (recommended Aug. 1894).

## Header notes this audit wrote against (Kenny's call)

- lah-1908-07-14, lah-1908-12-05, lae-1924-04-12 say only the instrument may carry
  the Orange → Wilshire row. RENAMING-SOURCES step 2a says an unambiguous press
  report of an enacted ordinance is a source, and TRANSITION_TYPES admits
  news-reports. The 1924 row is written on the report of the mayor's signature.
- lah-1886-01-15 says "NO ROWS" because no California Street was in the extract;
  `california-street-14th` has since been aligned to 14th Street.
- lah-1889-12-14 reads Ord. 482's Lakeshore restoration as inexpressible (above).
- lah-1889-09-19 leaves the Diamond identity open; the row written there is
  `extent-unresolved` and changes nothing on the map.

## Files changed by this audit

- `handbook/change-rows-audit-2026-09-18.md` — this report (new).
- `names.js` — three entities appended at the end: `davies-2nd`,
  `golden-avenue`, `huntley-drive`.
- Rows added (all `confirmed: false`, each headed "Audit 2026-09-18"):
  `documents/lah-1887-01-04`, `lah-1895-07-02`, `lah-1893-09-17`,
  `lah-1889-11-06` (5), `lah-1897-02-24`, `lah-1886-01-15` (2),
  `lah-1889-09-19`, `lah-1889-12-14` (2), `lah-1893-10-29`, `lah-1894-07-24`,
  `lah-1896-06-16`, `lah-1896-09-03` (appended after the two existing rows),
  `lae-1924-04-12`.
- `generated/` — rebuilt by `node generate.js`, as asked.
- Not touched: `generate.js`, `check-*.js`, `site-config.js`, SWITCHOVER.md,
  MODEL-IMPLEMENTATION.md. The 1908 documents were edited and then restored
  byte-for-byte.
