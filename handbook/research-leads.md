# Research leads

A dated parking lot for hunches, open questions and cautions that are not yet solid enough to be data.
A lead that gets solved moves into the data (rows on a document in `documents/`, or an entity in `data/names.js`) and is deleted from this file. Git keeps the history.
Documents and searches still to *obtain* are listed in WANTED.md, and library trips in IN-PERSON.md. This file only points to them.
Before a street pass, sweep this file for that street, and keep every entry dated with its document and entity ids.
Trimmed 2026-09-21 from 3,866 lines. The full log, including every solved finding and its reasoning, is in git history before that date. Entity notes that say "research-leads.md records…" refer to that log.

---

## Open: archives and instruments

- **Ord. 4093 (N.S.), Ordinance Book IV p. 337, adopted Feb. 23, 1897** (the
  Feb. 2 version was vetoed; it is on p. 331). The text is with the City Archivist (Kenny,
  2026-08; see WANTED.md §1). The council-minutes transcription in
  `documents/ord-4093/` is a ChatGPT reading that has not been spot-checked, so the first
  use of any line owes a check against the scan. **An apply pass is owed:** the
  in-coverage lines (Figueroa/Boylston, Georgia, Central, 4th, 5th, Marion,
  Stanford/Ruth) should name the instrument. `ord-4093` carries 5 rows, and 3 of them are
  placeholders. `lah-1897-02-24` now warrants the Georgia respelling placeholder, and
  whether to retire that placeholder is Kenny's call. (2026-08, 2026-09-18)
- **The Dec. 27, 1897 supplementary renaming ordinance** (the city engineer's
  cleanup batch; its list was never printed; reported in `lah-1897-12-28`). It follows the same
  ledger trail as 4093. (2026-08)
- **Georgia → Georgia Bell: Sept. 1883 or May 10, 1889?** `lah-1883-09-02`
  reports it adopted in 1883. Forman (`lah-1897-02-19`) and Ord. 48
  (`lah-1889-05-10`) give 1889, and 1889 may be the act that folded the Nevada stretches
  (`nevada-1886`) into the name. The conflict is recorded on `georgia-bell` and `georgia-east`.
  It is settled by the minutes of Sept. 1, 1883, and by a rule-2 check that the Georgia in
  "Bell's addition" is ours. The 1883 Board had proposed *Alabama*
  (`lah-1883-08-19`). ⚠ A 2026-07 note read Forman as "Sept. 11, 1890", so re-read the
  Feb. 19 text before quoting him. (2026-09-06)
- **Ord. 48 (`lah-1889-05-10`)**: all 207 clauses were transcribed 2026-09-18 and have not been
  checked by a human; its 37 change rows are unconfirmed. `sweptFully` stays false **on
  purpose**. Setting it would switch negative inference on citywide for the first
  time, and that is Kenny's decision to make deliberately. About 140 clauses
  name streets with no entity, most of them outside the extract. (change-rows audit 2026-09-18)
- **Elm → Olive, Pico–14th, Ord. 207 (`lah-1886-01-15`): check this first.** It
  was the change-rows audit's boldest row. It rests on reading the ordinance's "California
  street" as modern 14th Street, via `california-street-14th`'s alignment on the
  Morris plan (`mr003-038`), not on anything the ordinance says. Elm →
  Olive is also **enacted twice**: Ord. 48 c058 (1889) repeats it. That row is left
  `extent-unresolved` so the two do not fight. It is either a re-enactment of a done change, or
  it reaches Elm south of California. (2026-09-18)
- **Clause-level oddities left by the audit** (2026-09-18):
  - Myrtle, Ninth to Pico → *Prospect* (Ord. 48 c086, no row) contradicts
    Ord. 1915's confirmed Myrtle → Wall (`lah-1893-11-21`). It was law but never took in use.
  - A **third William** (L.A. Improvement Co. subdivision, lot 2 block 38 → Goss,
    Ord. 207) has no entity. `william-santee` and `william-farragut` are the other two.
  - **Two Aztecs.** c001's Aztec Avenue, 12th to Pico → Girard, is not `aztec-avenue`
    on Belmont.
  - `lah-1908-09-22`: Fort north of First "has never officially been named
    Broadway". This is harmless while `fort-street` is lettered only south of First. A sheet
    lettering Fort north of First would be renamed wrongly by the whole-name row on
    `lah-1890-02-20`. That row's note should also carry the adoption date, Feb. 17
    (`lah-1890-02-18`).
- **The amended Oct. 1890 omnibus probably passed in early 1891.** It was vetoed Nov. 8,
  1890 (`lah-1890-11-09`) and referred back (`-11-11`). CDNC has "Ord street" in print by
  1891 and "Walters street" as late as 1896. The Herald's "the ordinance changing the names of
  certain streets, as amended" (Nov. 1890 to spring 1891) would date Walters → Ord and
  2nd → Stephenson, and whichever of the other nineteen survived. Against it:
  Sepulveda → Jackson was prepared singly in Aug. 1891 (`lah-1891-08-25`). No
  row until the instrument is in hand (see WANTED.md §2a). (2026-09-18)
- **Seven MR006-138 renamings, all undated**: State → Colton, Home → Rockwood,
  Hobart → Lake Shore Terrace, Waters → Douglas, Lake → Glendale, Aztec → Belmont,
  and Diamond → Beverly. None is in Ord. 4093's text. One source would date all seven.
  (2026-08-30)
- **Undated absorptions east of Main, 3rd to 12th**: Ida → Cecelia (not
  `lah-1898-11-08`'s Delgado → Cecilia, which has no ground), Clark → Crocker,
  Court House → Community Terrace, and Morgan Lane → Mayo → 3rd (`lah-1883-10-21` is
  only the instruction to draft; there is no adopting item and no `mayo` entity). Also Botiller →
  Santee, where `lah-1892-01-19` and `-01-23` are a motion and a recommendation with no adoption.
  (2026-09-06)
- **Orange/Wilshire ordinance numbers** read off `mr005-566` and `mr055-014`:
  16790 (June 1908), 16915/16916 (the Dec. 1908 repeal) and 48435 (Apr. 1924). Which is
  which is inferred from where the pen struck. The City Clerk's index settles all four
  (see WANTED.md §1). Two numbers for one repeal may be two consecutive acts. The
  1908 pair of rows is held back, because the generator cannot hold A → B → A → B (see
  Tooling). (2026-09-18)
- **Cheap CDNC searches for adoptions that are missing**, all in the extract with both
  entities present:
  - Ozier Lane → Winston, postponed June 1887 (`lah-1887-06-14`).
  - 16th Street → Venice Boulevard, laid over July 1925 (`dnla-1925-07-16`).
  - Lazard → Ducommun, recommended Aug. 1894 (`lah-1894-08-19`).
  
  (2026-09-18)
- **Fred L. Alles, petition No. 465, Apr. 10, 1893** (`min-1893-04-10`, ledger
  p. 555). He asked for $25,000 to open Broadway north to Buena Vista Street: the same man who
  petitioned for Fort → Broadway in 1890 (`min-1890-02-03`). The Board of Public Works'
  report back is the lead (see WANTED.md §4, no. 25). (2026-09-06)
- **Modern ordinances** (from the switchover, 2026-09-18):
  - Olympic 1935 is still unfound. By 1999, 9th became Olympic at **Gladys**
    (CF 97-1566), so look there as well as east of Central (see WANTED.md §1, 1.5).
  - The Chavez exhibit map (CF 93-0907) would resolve the three `extent-unresolved` rows on
    `ord-169111`.
  - Onizuka (`ord-162010`) is described as "west of Los Angeles Street", but the modern
    street is east of it. Its ground history runs San Pedro (by 1868) → Wilmington
    (by 1910) → Weller, and wants a rule-2 look.
- **The 1905 ninety-street ordinance** (`lah-1905-05-13` to `-05-18`): passed May 8,
  recalled from the mayor May 15. **Write no rows from it** until the May 22,
  1905 meeting is read. Its probable successor is the ordinance signed Mar. 12, 1908
  (`lah-1908-03-13`). (2026-09-06)
- **`tr0009-075`** (Power Plant Tract No. 1, 1906) letters "EASTON ST." with
  "Industrial" and **an ordinance number** handwritten beside it. Reading the number off the
  scan dates Easton → Industrial exactly, with no download needed. (2026-09-15)
- **Stevenson 1884** (`stevenson-1884`): harvest its rows in passes (WANTED.md §3c).
  Check Macy and Buena Vista around the Plaza, and Stephenson, Ocean View and Nob Hill.
  It is a landownership map first, so it attests only what it letters. (2026-09-18)
- **Untranscribed or unreadable**:
  - The Oct. 1888 committee list (`lah-1888-10-11`, 199 proposals) is transcribed only
    where it touches our entities. It is a draft, so it is never a source of rows.
  - The Feb. 2, 1897 commission report (`lah-1897-02-02`) was read from an 84-px crop
    (see WANTED.md §2c).
  
  (2026-09-06)

## Open: by street or entity

Alphabetical. Each entry gives the date it was raised.

- **`agatha`**: the birth year is 1871 (Kines) or 1881 (the Find a Grave Sabichi plot). On 1881,
  Agatha and Ruth are first cousins born the same year, each with a street on her
  father's land, and that would make a pattern. (2026-09-14)
- **`alpine`, `fifteenth-street`, `sixteenth-street`, `diamond-street`**: the extent rows
  from `min-1893-04-10` are owed once their soft ends settle: "Upper Main", "Centennial
  avenue", 16th Street "ordered opened", and Ocean View Ave from Alvarado to Bonnie Brae. A sheet
  of the Alvarado/Bonnie Brae block would also settle where Diamond gave way to Ocean
  View. (2026-09-06)
- **`aztec-avenue`, Belmont**: there are four accounts of a Belmont's origin: Texas →
  Belmont (`lah-1887-01-04`, rowed), the 1888 draft's and Ord. 48 c001's Aztec →
  Girard (a different Aztec), Kines's Aztec → Belmont, and `belmont-kincaid` (1886).
  **Montezuma Avenue = Dawson Street** has no entity (Dawson was dropped from MR006-138 as
  polygon overshoot) and needs a document. Pizarro Street has no Kines page. How
  "Glassell's Subdivision No. 2" relates to M.R. 6-138 is unchecked. (2026-08-30)
- **`beaudry-st` and `beaudry-avenue`**: are they one street or two by geometry? The 1868 row is
  `vanished`, and Kines treats Beaudry as one street. Separately, Ord. 48 has Canal → Beaudry
  Avenue, `canal-street-beaudry` does not cite Ord. 48, and the direction of the
  change needs reconciling. (2026-09-13, 2026-09-18)
- **`boyd-street`**: no origin. The Orchard Tract (`mr005-005`) names the Chapman, Hunter
  and Damisch tracts as its predecessors, and none of them is in the corpus. Any would date the ground
  before 1882 and might account for Boyd. (2026-09-06)
- **`bunker-hill-ave`**: the 1874 avenue "defining the lines … public avenue"
  (`lah-1874-02-27`) is placeable only west of Fort along Temple (Hill, Olive, Grand
  or Hope), and a row on name alone breaks rule 2. The 1874 minutes would give its metes and
  bounds. In May 1896 a portion of it, with Sand Street, became **California Street**
  (`lah-1896-05-05`, 0 rows). That needs a second California entity: it is not
  `california-street-14th`. (2026-09-04, 2026-09-06)
- **`castelar` and `hill-street-downtown`**: "a portion of Castelar street" → Hill, July
  1894 (`lah-1894-07-24`, `extent-unresolved`), against Hill's note dating its
  arrival on Castelar to 1960. Reconcile the two. (2026-09-18)
- **Cemetery Avenue** (→ Castelar, Ord. 242, `lah-1886-07-23`): no entity, and its
  Temple–Bellevue ground is unplaced. It is not Eternity (2026-09-07). The city-cemetery
  location behind it comes from general knowledge, so confirm it before it reaches public prose.
- **`charity` and the Caridads**: the third Calle Caridad (North Spring, pre-Ord,
  `guinn-1912`, and "Charity St / Calle de Caridad" on M.R. 53-68) is unminted, and minting it is
  Kenny's call. The same sentence gives **Upper Main → San Fernando** and **Alegro /
  Junction → North Main**. Both lineages are unminted, and `san-fernando-st-spring` is
  pending. `guinn-1895` contradicts itself on Caridad (Grand in one place, Spring in another), so no entity
  should lean on it. (2026-09-18)
- **`cherry-street`**: the act is Sept. 1883 (`lah-1883-09-02`, "Pine to Cherry",
  in Bell's addition), which answers the note's worry about its Jan. 1884 lettering. It needs
  a Pine (Bell's addition) entity before a row. (2026-09-18)
- **`clark-ave`**: Wesley Clark's dates. A city directory of the early 1890s should
  have them. (2026-09-06)
- **`cleveland-st`**: which street? A legacy positional guess ties it to the Ord
  Survey's "Calle de las Adobes", while Kines dates the name to a fresh 1886 Beaudry
  tract. If they are two streets, they are two entities. If the tract's Americana names number
  three or more, consider `pattern`. (2026-09-15)
- **`consuelo`**: Josefa de Celis's parentage. Wikipedia makes her a daughter of Gov.
  Luís Antonio Argüello; her son's LAT obituary (26 May 1903) calls both parents
  "natives of Spain". (2026-09-15)
- **`court-street`**: Kenny's hunch (2026-07) is that Court Street (Angelino Heights) is a lost
  eastern stretch of Temple. Its own alignment runs straight to Temple and Fremont. Pull tract
  maps for Temple between Fremont and downtown.
- **`diamond-street`**: Ord. 364's "Second street from Lakeshore avenue to the west
  city line" (`lah-1889-09-19`). Which entity that 1889 Second Street is (the downtown lineage
  carried west along the cable route?) is open. (2026-09-18)
- **Easton → Industrial**: see `tr0009-075` above.
- **`fourth-place`**: was it "Third St" **west** of Hewitt? M.R. 13-87 puts the
  "Third" band entirely east of Hewitt. The west half has no source; look at the Bliss
  Tract (`mr012-042`, now a swept document). (2026-07)
- **`georgia-bell`**: Rouland Street bounds both 1889–90 extents, and Rouland = the
  Venice corridor (Greenwell Tract, `mr012-070`). Tract 2713 puts Georgia's
  centreline 425.27 ft west of Figueroa, which is the first foothold on its extent. Now that
  Ord. 48 is a document, the prose spelling periods could give way to the rows.
  (2026-09-15, 2026-09-18)
- **`gladys-ave`**: there is no Gladys in the Wolfskill family. About 40 US girls were named Gladys in 1881,
  so the name probably honours a specific person. Next:
  - **George W. Frink's household.** He was president of the Los Angeles Land Bureau, and the Huntington holds a
    Central Pacific deed to him dated 19 Mar. 1888, in the Shorb Papers. Identity is not established.
  - Whether the San Francisco auctioneers **Easton, Eldridge & Co.** carried the name
    from SF's own Gladys Street.
  
  (2026-09-14)
- **`guadalupe`**: nothing found anywhere. Do not guess between a Marian dedication and a
  given name. (2026-09-13)
- **`hewitt`**: namesake not found. Start from the owner and surveyor of the 1871 Johnston
  Tract (`mr002-092`), which also carries the equally blank `messer-street` and
  `rose-street`. (2026-09-13)
- **Home → Rockwood** (`home-street` to `rockwood-street`): a real correspondence about 43 m
  off, because the block was recut. When it was realigned needs a map between 1884 and today.
  (2026-07)
- **`lake-avenue`**: Echo Park Lake is the simple reading. The recorded coincidence is that
  Patton married Ruth Wilson in 1884, and Pasadena's Lake Avenue is named for her
  father's Lake Vineyard. It wants a contemporary source. (2026-08-30)
- **Lebanon Street**: no entity. Park Lane (1897, Ord. 4093's list) and
  `alexander-lane` (1917) were both folded into it. (2026-09-13)
- **`lemon-st-arts-district` → Wilson**: Kines's three 1887 facts make Lemon the
  predecessor of Wilson, **but** a Lemon Street survives at 1212 Lemon St, 90021, just
  south of the extract. **Widen the extract one block south** before any change row.
  (2026-09-15)
- **`loomis-st`**: one street or three? The candidates are the withdrawn 1893 Sixth Street ordinance
  (`lah-1893-02-21`), the 1894 Echo Park Road list (`lah-1894-01-26`) and the Nichols
  Addition row (`vanished`). (2026-09-13)
- **`mateo` and `molino-st`**: Ord. 3829's "from Palmetto to Short". "Short" is in no
  geometry, and the row is `extent-unresolved`. Molino's namesake is untraced. Whether Mill Street
  echoes Molino (1896) is settled in one look at the 1903/04 Violé map (IN-PERSON.md).
  (2026-09-15)
- **Millar, E. B.** (E. B. Millar Tract, `mr013-091`): given name and dates unknown.
  He is identified through Guinn as George D. Rowan's brother-in-law and partner. Nothing links him
  to the 1887 tract. (2026-09-15)
- **Mills, H. W.** (third owner of the Orchard Tract, `mr005-005`): is he the Mills of
  "Mills and Wicks" (M.R. 13-87/88)? That is a five-minute check. (2026-09-06)
- **Morris and Montgomery Streets**: the Nov. 1889 ordinance gives them as the predecessors of 17th Street
  (`lah-1889-11-06`). They are absent from every reachable source. (2026-09-17)
- **`ozier-lane` → `winston-st`**: Wikipedia spells it "Ogier", while our ordinance and our 1881 sheet
  say "Ozier". Mills' Tract (`mr012-026`) letters Winston in Nov. 1886, seven months
  before the ordinance was even postponed, so check its recording date against its survey date. (2026-09-13)
- **`palm-st-arts-district`**: the likely chain is Palm → Mimosa → Imperial. Garrigues has "Mimosa St.,
  bet. E. 6th & Jesse St., is Imperial St." from the 1903 map. Neither step is dated
  and the corridors are unchecked block by block. (2026-09-15)
- **Park Tract date**: Kines dates the Park tract's names (Centennial, Custer, Boston,
  Philadelphia) to 1876. M.R. 7-26 in this corpus is Jan. 1885, and a dealer's catalogue
  gives c. 1884 with E. T. Wright as surveyor. Is it probably an 1885 re-recording of an 1876
  layout? Nothing checked says so. (2026-09-17)
- **`parker-drive`**: who J. B. Parker was. (2026-09-13)
- **`pine-street-venice` and `rouland-street`**: did the *city* ever recognise Pine or
  Rouland? The plats are subdividers' usage, and Forman is a witness. Also open: when Pine became
  Venice (Pine and Rowland → 16th, Nov. 1889, then 16th → Venice, 1925), and **who Rouland
  was**. Start from F. Bouton, at whose request the Greenwell Tract (`mr012-070`) was
  recorded. (2026-09-15)
- **`poplar-st` and Lugo**: Huber → 4th is sourced (Kines, Colyton page), but Poplar →
  Lugo → 5th is not. Also, two "Lugo street" mentions in the 1897 sources may be two streets
  (the Feb. 21 committee report and the Feb. 18 rejected coinage for Boyle Heights' Second).
  (2026-07)
- **Prose that runs ahead of its sources** (change-rows audit, 2026-09-18):
  - `wilshire` dates the naming to Dec. 1897, but `lah-1897-12-07` is an engineer's report that was
    only referred.
  - `hill-street-downtown`: see `castelar` above.
  - `cherry-street`: see above.
- **`ruth-ave`**: Phase 1 is not finished until the **1900 census** household is read. It
  would test Elena's children born/living counts for a child who died young in 1885–88,
  the only place a Gladys could hide. Ruth now rests on Find a Grave. (2026-09-14)
- **`san-pedro` and `wilmington-street`**: **when did San Pedro's name move onto the
  Wilmington line?** The 1868 Garden of J. Murat sheet (`mr010-008`) letters San Pedro
  on today's Onizuka and Wilmington on today's Judge John Aiso Street. (2026-09-13)
- **`santa-fe-ave`**: whether the Tulip-era name ran north of 6th, toward the depots,
  is unchecked. (2026-07)
- **`st-paul-avenue`**: church or school? `mr005-566` (1889) was made for the Vestry of
  St. Paul's P.E. Church, while `mr052-085` and `mr078-055` are St. Paul's School sheets, and the School's
  replat first letters the avenue (1900). **Page 2 of the church subdivision** may letter it
  earlier. **St. Paul Place** wants an entity, and minting it is Kenny's call. Whether an
  institution can be an `eponymous` namesake is a ROADMAP question, and this is the entity to test it
  on. (2026-09-18)
- **Stanford Street before Ruth**: see Traps.
- **`stevenson-ave`**: still has no row and no ground. Look for Stevenson Avenue on
  Stevenson's own 1884 map. The 1888 list's Stevenson is on the cable route west of
  downtown, while this entity came from a Boyle Heights sheet. (2026-09-17, 2026-09-18)
- **Thomas Tract** (`mr003-060`, north sheet): a second unnamed N–S street between
  Guadalupe and Georgia (lots 13–22) is unidentified. (2026-07)
- **`turner-street`**: our 1928 sheet still letters Turner 45 years after the May 1883
  Turner → Jackson change (`lah-1883-05-13`). Which Jackson it is remains open (`possiblySameAs`).
  Modern Jackson meets neither 1st nor Alameda. (2026-09-13)
- **`weill`**: the **A. Weill tract** is 56.64 acres south-east of downtown on Stevenson 1884,
  next to O. J. Mairs, J. Philbin, Goetz and H. Niemaier. Still no first name. It is the best open
  lead among the title blocks (IN-PERSON.md §4). (2026-09-17, 2026-09-18)
- **Subdividers and title-block names** (all title-block or directory questions, not web
  ones; the seven people are in IN-PERSON.md §5):
  - M.R. 6-115 (the gems), M.R. 5-69 (the states), M.R. 10-77 (the Harvey Tract, for
    Adele), Tract No. 320 (for Nina), the Industrial Center Tract, and Tract No. 1836
    (Warren → Decatur).
  - The seven names off the title blocks: B. E. Day, E. W. Jones, E. Bouton,
    W. A. Boring, N. W. Stowell, Mrs M. A. Hoadley and W. J. Bradshaw.
  
  (2026-09-15, 2026-09-17)
- **Who was J. Murat?** (`mr010-008`, 1868): absent from the Homestead Museum's
  winemakers and from LA Revisited's French community. Try the directories and the *Star*.
  (2026-09-13)
- **The 1849 grid's angle**: `lah-1905-05-18` says Hancock laid the pueblo out
  "on an angle of twenty-eight degrees". Test it against our geometry. (2026-09-06)
- **Smaller council items not yet followed**:
  - Polyxena → Clay, ordered drafted June 1883 (`lah-1883-06-17`).
  - Stearns → Albion and Albion → West Albion, petition 829 (`min-1896-09-21`); its outcome is unknown.
  - The pre-1890 "Broadway street" → Toberman, the same night as Fort → Broadway
    (`lah-1890-02-18`). It needs two entities, and its ground is unknown.
  
  (2026-09-06)

## Open: outside coverage (banked)

Nothing to do on these until the neighbourhood exists.

- **Moneta → Broadway**, 93rd to 113th, 1926 (`dnla-1926-09-30`), plus its sibling ordinances and
  the earlier Main ↔ Moneta tangle (`lah-1899-03-14`). (2026-07)
- **Wolfskill Ave / original Central Ave boundary**, south of Vernon. When that stretch
  is added, Central Avenue's 20th-century history as the heart of Black Los Angeles wants a proper
  mention. (2026-07)
- **Ord. 3847 (Sept. 8, 1896)**, nine southwest changes (`min-1896-09-08`,
  `lah-1896-09-09`), and Ord. 3829's nine out-of-extract changes (`lah-1896-09-03`) are
  quoted verbatim, so each is a transcription away from a row once the ground is encoded. (2026-09-06)
- **Childs avenue → Griffith Park Boulevard** (`laevex-1925-10-16`): is this Childs O. W.
  Childs? Check it against the Childs Heights tract geometry (rule 2); see also Ord. 1888's
  "Childs avenue, in the Childs Heights tract" (`lah-1893-10-29`). The predicted Griffin →
  Montecito change did not follow. (2026-09-06)
- **Esmeralda**: the earlier East Rose Hill → Esmeralda change is not in hand. The reversal
  is `lae-1929-10-21`. (2026-09-06)
- **Adams Boulevard** (`lae-1928-08-06`): did it pass? `lae-1930-06-11` still says
  "Adams street". (2026-09-06)
- **Robertson Boulevard** is for G. F. Robertson, "as a compliment to"
  (`dnla-1926-08-05`). It is a clean `namedAfter` once the ground is in. (2026-09-06)

## Traps: name collisions

Match by geometry, never by name (rule 2). Each of these has already caught someone.

- **Vine**: two lineages. The Central Avenue Vine (→ Central, Feb. 1897,
  `vine-central`) is not the southwest Vine (Vermont to Rosedale → 24th, Sept. 1896). Olvera's
  *Calle de las Viñas* ("Wine/Vine") was Olvera by 1877 and is neither of them.
- **Stanford**: before writing Ruth → Stanford, locate the "Stanford street" of Mar.
  1896 (`lah-1896-03-31`) and the Stanford made from Bellard Street in the
  Washington-street tract (`lah-1897-12-07`).
- **Palm**: the west-side Palm (`lah-1896-05-16`, `lah-1896-09-09`) is not the Goodwin
  Tract Palm that became Imperial.
- **Pine** (four streets), **Virginia** (four), **Georgia** (two, maybe three),
  **William** (three), **Belmont** (two, plus Aztec on the same corridor), **Willow** (two),
  **Cooper** (two: the 1896 one is not `ord-1613`'s), **California** (two), **Jackson**
  (three or four), **South Street** (three or more), **Short** (two), **Crescent** (two), and
  **Broadway** (Fort, Buena Vista, Downey, Moneta, and the pre-1890 "Broadway street").
- **Turner**: two in 1883. Ours is First to Alameda → Jackson. The other, west of Main, →
  Sonora.
- **Rose**: three. Ours survives in the Arts District; the East L.A. Rose → Kuhrts (1883); the Highland
  Park Rose → Thorne.
- **Kohler**: Kines puts the *original* Kohler Street on today's 9th, San Pedro to
  Alameda. None of our four sightings has been checked against it.
- **Ruby** (two) and **Ward** (two, probably). **Messer** is not Mesmer. **Helena Avenue** is not Helena
  Drive or the Modjeska streets. **John P. Moran** is not the Moran of Moran's Lane.
- **Lugo**: see `poplar-st`.
- **Mono / Moore, 3rd Street east of Mission Rd**: the Feb. 19, 1897 Herald's "Mono
  street" reads **Moore** in the council manuscript, so it is probably OCR. Build no segment
  story on it until a Mono Street is independently located. (2026-08)
- **Pasadena documents**: `lah-1899-07-26` and `lah-1899-10-11` are Pasadena council
  news. L.A. has its own Locust, Columbia and Union.
- **The 1889 names are not modern names**: Figueroa = Boylston, Ward = 6th, Seminary =
  Miramar, Rouland = Venice, Diamond = 1st/Beverly, and Union Avenue (Colina Park) = Burlington.
  Ord. 482's "Second street … Lucas to Figueroa" does not reach modern 2nd.
- **`lah-1917-02-14`** transcribes a racial slur as `asWritten`. The document header says it
  must never reach a public `note`, and any public wording is Kenny's.

## Don't re-run (negatives)

- **The 1897 and 1898 city directories as a route to Ord. 4093**: the 1898 has no list, and the 1897
  says it absorbed the 326 changes without a table (Kenny, 2026-08; also in SERIAL-SOURCES.md).
- **The Herald of Feb. 19 and 21, 1897** (`LAH18970219.2.24`, `LAH18970221.2.28`): nothing for the
  renaming data (Kenny, 2026-09-04).
- **July 1850 council minutes**, all eight meetings and 50 pages: no street named. See
  RENAMING-SOURCES.md. (2026-09-05)
- **Dunigan Tract / NavigateLA** (2026-09-06): every parcel was deleted by the Convention Center
  expansion (1987–88), so no Map-Ref can be returned. The Huntington has no Dunigan, Carleton or
  Summerfield sheet either.
- **Molino Street / NavigateLA** (2026-07): a single modern parcel (TR 060507-C) has erased the old
  fabric.
- **San Julian below Ninth** (2026-09-06): City Lands remnant (M R 2-504/505), never
  platted by a subdivider, so no tract map exists.
- **Kines, Garrigues and the city street registry, for the 43-entity batch of 2026-09-17**: every search
  had a nonsense control. Kines had no page for, and Garrigues no entry for, Loma, Collado, Arch, Shenandoah,
  Artemus, Clementina, Myers, Anderson, Ingraham, Hartford, Logan, Nichols, Kennedy,
  Strelitz and others. The registry has retired Clementina, Shenandoah (east), Strelitz, Collado,
  Gravilla, Atchison, Freight and Topeka. Full lists are in each entity's `internalNote`.
- **"Genuinely unattributed" names, 2026-09-13**: Ingraham, Kip, Turner, Melendrez, Elmore,
  Helena, Florida, Ruby, Ward, Loomis, Merchant, Moran's Lane and others were searched across Kines, LA
  Revisited, Wikipedia's etymology list, LAPL and Garrigues. Results are in each `internalNote`.

## Tooling nits

- `tools/check-data.js`'s `PRIMARY` regex lacks `loc.gov` and `rescarta.lapl.org`,
  so the primary-anchor count under-reports once Sanborn or directory sources land. (2026-08)
- `tools/generate.js` cannot give a name two separate periods on one stretch
  (A → B → A → B). The 1908 Orange → Wilshire and repeal rows (`lah-1908-07-14`,
  `lah-1908-12-05`) are held back until it can. (2026-09-18)

---

## Settled and open at the switchover (2026-09-17 to 19)

*Moved here from handbook/SWITCHOVER.md when that file was retired on
2026-09-20. It is the record of what the pre-switchover audit found for each
legacy name and coverage question, and what it left open. The open items:
Calle de los Negros (LAPL scan of Ord's original, or the 1872–75
directories), the Boyle Heights stretches of Willow, Jesse and 7th Place for
`coverage`, the Walters / Stephenson single ordinances, the Chavez extents
(council file 93-0907's exhibit map), Olympic 1935, and the prose fixes at
the end.*

### The checkers

`oldplaza1873` has its Huntington record as `url` (Kenny, 2026-09-18) and the
35 citation errors are gone; `stevenson-1884-hi-res` (partially processed:
alignment and coverage in, title block and rows not) has its record page,
the IIIF full-size image as a `copies` entry, and an interim title. Also
that day: an entity minted in the tool and not yet researched derives
`basis-none` / `searched-none` instead of an empty category list.

### Coverage — done

The last ten were compared stretch by stretch with the old map on
2026-09-19 and accepted: on every one the old claim was the whole-street
entity claim, which the entity still carries onto the grey stretch. The
corridors now in WANTED.md §5 (the Misc Records half, §5.11, still to run
when the City service is back) are work for after the flip.

### Names — done (two deferred to proceedings)

Buena Vista and the Miramar chain were accepted 2026-09-19 as proceedings
work; the rest cleared or were accepted as recorded below. What the corpus
held for each, at the time:

| finding | evidence in the corpus | do |
|---|---|---|
| Los Angeles St: "Calle de los Negros" | not lettered on the recorder's copy of Ord sheet 53-69 (I looked: the plaza alley is drawn, unlabeled). `lah-1917-02-14` (rows 0): council orders the alley renamed | a change row in `lah-1917-02-14` needs a `calle-de-los-negros` entity and a sheet that letters it — none does. **accept** for now, with the 1917 doc as the reason |
| Broadway N: "Buena Vista" | `lah-1896-05-16`, `min-1893-04-10`, `lah-1899-05-06`, `lah-1908-09-22`, `guinn-1912` all mention it; none has rows | a real lineage (Eternidad → Buena Vista → North Broadway 1909) — **proceedings work** (ROADMAP §2), not a quick row |
| Traction: "Stephenson Avenue"; Ord: "Walters Street" | Entities `walters-street`, `stephenson-avenue` exist. **High → Walters** (Sept. 1886) is a change row on `lah-1886-09-21`, unconfirmed. **Walters → Ord and 2nd → Stephenson were in the Oct. 1890 omnibus, which the mayor vetoed** (`lah-1890-11-09`, `-11-11`; referred back to Public Works; its items were re-passed singly in 1891 — Sepulveda → Jackson, Aug. 1891). The audit thread withdrew the two rows I had put on it and rewrote the entities' notes; that is the right reading. | confirm the 1886 row; CDNC for the single ordinances: "Walters street" Nov. 1890 – 1892, "Stephenson avenue" 1890 – 1900; or accept both names with the veto as the reason |
| Cesar Chavez: "Macy Street" | `lah-1908-10-27` (Macy in a 1908 rearrangement); the 1994 renaming has no document | see §4 |
| Miramar: "Ocean View", "Nob Hill" | `lah-1896-05-16` "Avenues North of First St", `min-1893-04-10` mention Ocean View | see §4 |
| Court Street | on `mr006-138`, `mr007-026-p2`, `mr005-069`, `tr0014-097b` — all with rows | the name IS lettered: on these four sheets, and on the Stevenson 1884 map, whose full-resolution reading (2026-09-18) confirms COURT ST and closes this name finding. What remains is to check which street those Court rows are keyed to, and to add the Stevenson row when that sheet is harvested (WANTED.md §3c) |


**Where a map might letter the five (Cuidado, Calle Real, Negros, Stephenson,
Walters), 2026-09-17.** There is no street-labelled plan of the pueblo before
Ord: the 1786/1793 plats show the plaza and fields, and the 1847 military
sketches and Hutton's drawings (Huntington) are views, not surveys. Pre-1849
names live in TEXT — the ayuntamiento records in the City Archives, deeds —
which is proceedings work, not a sheet. So:
- *Calle de los Negros*: first look at the **LAPL scan of Ord's original**
  (already a `copies` entry on the Ord documents) at the plaza block — the
  recorder's 1893 copy draws the alley unlabelled, the original may not.
  Failing that, the **1872–1875 city directories** (street sections; the
  alley was absorbed into Los Angeles Street in 1877, so the 1888 Sanborn is
  too late). A directory year is one textual document; no coverage change.
- *Stephenson Avenue*, *Walters Street*: 1880s names inside the present
  coverage — **recorded tract maps** (NavigateLA Map-Refs for the Arts
  District and north of the plaza) will letter them, cheaper than Sanborn.
- *Calle Cuidado*, *Calle Real*: nothing will; accept.
- Sanborn (1888, 1894) and the directories as serial sources stay deferred,
  as planned; nothing above needs the neighbourhood expanded.

### Legacy namesakes — done

The 13 carried-over entities are in; the five empty fields are settled
(2026-09-18: grand-ave and Delong accepted, Boylston / San Julian graded
`guess`, Court `inferred` — Kenny's calls). **Four of the modern renamings
now have their ordinances** — `ord-162010` (Weller → Onizuka, Feb. 1987),
`ord-169111` (Macy and two Sunset stretches → Cesar E. Chavez, Oct. 1993, in
force Mar. 31, 1994), `ord-171586` (San Pedro → Aiso, Apr. 1997), `ord-172590`
(9th → Wood, May 1999) — from the City Clerk's PDFs, **rows confirmed by Kenny 2026-09-18** and on the map.
Two dates correct the legacy file (1987 not 1988; 1999 not 1997). The three
Chavez rows are `extent-unresolved` on purpose: the ordinance's stretches
("Macy between Bridge and New High", "Sunset between North Main and
Figueroa") overlap by a block on the modern alignment and Bridge Street is
off the extract, so they record the act and draw nothing until the
Engineer's exhibit map in council file 93-0907 settles the ground. Olympic
1935 is still to find (WANTED.md §1).

**Left: nothing.** The freeways and ExpressLanes are accepted for `namesake` too (shallow research, reconstructible in minutes).

### Accepts

`legacy/accepted-differences.js`: coverage for the six streets, freeways,
ExpressLanes, plazas; names for the freeways, De La Guerra, Spring's two
pre-Ord names, Calle Real. Still open: Calle de los Negros (after the LAPL
Ord original / 1872–75 directories), and the Boyle Heights stretches of
Willow, Jesse and 7th Place for `coverage`.

### Prose — still open, not a gate

`{{span}}` with no link: Spring, Angelina, Industrial, Wilde. Link with no
span: Mesquit.
