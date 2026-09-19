# Violé 1904 "Map of Los Angeles" — INDEX TO STREETS: transcription notes

**Source sheet.** *Map of Los Angeles, compiled & drawn by Félix Violé, Licensed Surveyor,
for the Chamber of Commerce.* Copyright 1903; certified by the City Engineer 22 December 1903;
published 1904. A single laminated sheet, printed both sides: map face on one side, a large
letterpress **INDEX TO STREETS** on the other.

Transcribed from 17 phone photographs in `inbox/` dated 2026-09-18.
Output: `inbox/viole-1904/index.tsv` — **1089 entries**, every one with a grid reference.

---

## 1. Photo triage

The index side is a single block of **7 narrow columns**, read top-to-bottom, left-to-right.
Nine of the seventeen photos show the index; eight show the map face.

| Photo | Side | Coverage |
|---|---|---|
| `2026-09-18 11.25.43.jpg` | map face | full-sheet view incl. title block / Santa Monica inset |
| `2026-09-18 11.25.48.jpg` | map face | full-sheet view |
| `2026-09-18 11.25.55.jpg` | map face | half-sheet, west |
| `2026-09-18 11.25.58.jpg` | map face | half-sheet, east |
| `2026-09-18 11.26.04.jpg` | map face | NW corner: "Clearing House Banks" / bank ad panels, grid letters A–R along top |
| `2026-09-18 11.26.07.jpg` | map face | N-centre: Security Savings / Equitable ad panels + map, grid numbers 1–10 at right |
| `2026-09-18 11.26.26.jpg` | map face | ad panels only (Title Insurance & Trust, Pacific Transfer Van & Storage, Peerless Wine) |
| `2026-09-18 11.26.32.jpg` | map face | oblique edge shot; shows the loose newsprint scraps trapped in the lamination |
| `2026-09-18 11.39.47.jpg` | **index** | upright; header + cols 1–4, upper third (A start, B, C start, E, H start) |
| `2026-09-18 11.26.23.jpg` | **index** | **whole index in one frame** (rotate 90° CCW). Lower resolution but glare-free where others are not; the loose newsprint scrap sits in a *different* position here than in the 11.29/11.30 series — this is what recovers the Centennial–Ceres block |
| `2026-09-18 11.29.31.jpg` | **index** | cols 1–3, top ~55% (A; B start; E–F start) |
| `2026-09-18 11.29.42.jpg` | **index** | cols 1–3, middle band (Ave. numbers; C; F–G) |
| `2026-09-18 11.29.51.jpg` | **index** | cols 1–3, lower band (B end; C end–D; G–H) |
| `2026-09-18 11.30.09.jpg` | **index** | cols 4–7, top (H–J; L–M; P–R; S–T) |
| `2026-09-18 11.30.21.jpg` | **index** | cols 4–7, middle (I–L; M–O; R–S; T–W) — the single most productive photo |
| `2026-09-18 11.30.27.jpg` | **index** | cols 4–7, bottom (L end; O–P; S end; U–Z) |
| `2026-09-18 11.30.36.jpg` | **index** | upright (no rotation needed); oblique wide shot of the lower-middle of all 7 columns; best source for col. 3's G section |

Rotation: the 11.29.x / 11.30.09 / 11.30.21 / 11.30.27 photos need **90° clockwise**;
11.26.23 needs **90° counter-clockwise**; 11.30.36 and 11.39.47 are already upright.

## 2. Column structure

| Col | First entry | Last entry |
|---|---|---|
| 1 | Abe Ave. | Boulder St. |
| 2 | Bouett St. | Duarte St. |
| 3 | Ducommun St. | Hancock St. |
| 4 | Hannon St. | Lovelace Ave. |
| 5 | Lucas Ave. | Palo Alto St. |
| 6 | Paloma Ave. | St. James St. |
| 7 | St. James Park | Zalvidea |

Grid references are `LETTER. NUMBER`, letters **A–T** (A–R are the map-face edge letters seen on
11.26.04; a handful of entries carry S/T/R beyond the printed run) and numbers **1–23**.
In `index.tsv` they are normalised to `LETTER NUMBER` (the printed period after the letter dropped);
nothing else about the grid ref is altered.

## 3. Structural observations

- The index is **alphabetical throughout, in one sequence** — no sub-sections. Streets, avenues,
  boulevards, places, drives, lanes, roads, alleys, courts, terraces and parks are **all interfiled**
  under one alphabet. There is no separate avenue or boulevard list.
- Single-letter headings (`A.`, `B.` … `Z.`) break the sequence. There is no `X.` heading.
- The alphabetisation is **imperfect and should not be relied on**. Clear examples:
  `Avablaza St.` between `Antonia Ave.` and `Aragon St.`; `Carillo St.` after `Carr St.`;
  `Bautista Ave.` between `Boston St.` and `Boulder St.`; `Bouett St.` *after* `Boulder St.`
  (column break); `Lee Ave.` (N 22) after `Los Angeles St.`; `Ave. 48` between `Ave. 44` and
  `Ave. 45`; `Von Keithian Ave.` before `Van Buren Pl.`; `Wisconsin St.` before `Wilshire Boulevard`.
- **Numbered avenues** run `Ave. 18` … `Avenue 66` with 27, 30, 46, 47, 62 absent. The abbreviation
  is inconsistent in print — mostly `Ave. 33`, occasionally `Avenue 56` / `Avenue 63`; transcribed
  as printed.
- **Numbered streets** run First … Twenty-ninth, Thirtieth … Thirty-ninth, Fortieth … Forty-ninth,
  Fiftieth … Fifty-eighth. Missing: Twenty-sixth, Thirty-fourth, Fifty-ninth+.
- Some grid refs are plainly **misprints in the original** and are transcribed as printed:
  `Reno ... F. 90`, `Vallejo ... O. P.`, `Hill St. ... A. 15` (Hill Street downtown should be J/K 13;
  `Hermosa St.` immediately above is also A 15, so a line of type was probably repeated).
- Two **identical adjacent entries**: `Belmont Ave. H 10` appears twice, separated by `Belvedere F 6`.
- `Georgia St.` exists; `George St.` immediately precedes it. `Palmer St.` (col. 5, J 8) and
  `Palmer Ave.` (col. 6, J 8) both appear with the same grid ref.

## 4. Confidence

| | count |
|---|---|
| certain | 1004 |
| probable | 76 |
| uncertain | 9 |
| **total** | **1089** |

No entry was recorded without a grid reference.

### Entries flagged `uncertain`

- `Alergo St.` — F 19 (11.29.31.jpg, probable)
- `Avablaza St.` — L 12 (11.29.31.jpg, probable)
- `Arlington St.` — A 15 (11.29.31.jpg, uncertain)
- `Atlantic St.` — L 16 (11.29.31.jpg, uncertain)
- `Ave 20.` — N 8 (11.29.42.jpg, probable)
- `Ave. 21.` — N 8 (11.29.42.jpg, probable)
- `Ave. 41` — O 5 (11.29.42.jpg, probable)
- `Ave. 42` — P 6 (11.29.42.jpg, probable)
- `Ave. 43` — P 5 (11.29.42.jpg, probable)
- `Ave. 44` — P 5 (11.29.42.jpg, probable)
- `Ave. 48` — Q 4 (11.29.42.jpg, probable)
- `Ave. 45` — P 4 (11.29.42.jpg, probable)
- `Ave. 49` — Q 4 (11.29.42.jpg, probable)
- `Ave. 50` — P 3 (11.29.42.jpg, probable)
- `Ave. 51` — Q 3 (11.29.42.jpg, probable)
- `Ave. 52` — Q 3 (11.29.42.jpg, probable)
- `Ave. 53` — Q 3 (11.29.42.jpg, probable)
- `Ave 54` — Q 3 (11.29.42.jpg, probable)
- `Ave. 55` — R 3 (11.29.42.jpg, probable)
- `Baredon` — M 17 (11.29.51.jpg, probable)
- `Bauchet St.` — L 11 (11.29.51.jpg, probable)
- `Bandera St.` — K 23 (11.29.51.jpg, probable)
- `Bouett St.` — L 8 (11.29.31.jpg, probable)
- `Budlong Ave.` — C 15 (11.29.31.jpg, probable)
- `Bunkerhill Ave.` — J 12 (11.29.31.jpg, probable)
- `Cadina St.` — K 23 (11.29.31.jpg, probable)
- `Casnora St.` — M 9 (11.29.31.jpg, probable)
- `Concha St.` — L 12 (11.29.42.jpg, uncertain)
- `Concord St.` — Q 16 (11.29.42.jpg, probable)
- `Elthea St.` — M 6 (11.29.31.jpg, probable)
- `Fifty-second St.` — H 22 (11.26.23.jpg, probable)
- `Fresno St.` — E 15 (11.30.36.jpg, uncertain)
- `Husted St.` — J 6 (11.39.47.jpg, probable)
- `Hyans St.` — F 9 (11.39.47.jpg, probable)
- `Johnston St.` — Q 20 (11.30.09.jpg, probable)
- `Lewis St.` — T 1 (11.30.21.jpg, probable)
- `Longfellow` — R 3 (11.26.23.jpg, probable)
- `Macea` — O 5 (11.30.09.jpg, probable)
- `Marion` — T 1 (11.30.09.jpg, probable)
- `Masenta` — H 9 (11.30.09.jpg, probable)
- `Mission Road` — O 11 (11.30.21.jpg, probable)
- `Nand St.` — M 10 (11.30.21.jpg, probable)
- `Olympian Ave.` — J 6 (11.30.27.jpg, probable)
- `Paloma Ave.` — J 17 (11.30.09.jpg, probable)
- `Palmer Ave.` — J 8 (11.30.09.jpg, uncertain)
- `Park Ave.` — L 8 (11.30.09.jpg, uncertain)
- `Park Row` — L 8 (11.30.09.jpg, uncertain)
- `Park Grove Ave.` — F 16 (11.30.09.jpg, probable)
- `Park View Ave.` — F 11 (11.30.09.jpg, probable)
- `Pasadena Ave.` — Q 3 (11.30.09.jpg, probable)
- `Pavilion Pl.` — K 11 (11.30.09.jpg, probable)
- `Pennsylvania Ave.` — O 13 (11.30.09.jpg, probable)
- `Philleo St.` — G 8 (11.30.09.jpg, probable)
- `Piedmont Ave.` — M 4 (11.30.09.jpg, probable)
- `Plata St.` — G 9 (11.30.09.jpg, probable)
- `Plaza St.` — K 12 (11.30.09.jpg, probable)
- `Pleasant Ave.` — N 13 (11.30.09.jpg, probable)
- `Plymouth St.` — P 12 (11.30.09.jpg, probable)
- `Pomero Ave.` — Q 12 (11.30.09.jpg, probable)
- `Portia St.` — J 8 (11.30.09.jpg, probable)
- `Portland St.` — E 16 (11.30.09.jpg, probable)
- `Potter Pl.` — I 13 (11.30.09.jpg, probable)
- `Prichard St.` — Q 9 (11.30.09.jpg, probable)
- `Princeton Ave.` — J 6 (11.30.09.jpg, probable)
- `Prospect Drive` — P 3 (11.30.09.jpg, probable)
- `Prospect Place` — N 12 (11.30.09.jpg, probable)
- `Prudent St.` — L 10 (11.30.09.jpg, probable)
- `Queirol St.` — L 11 (11.30.09.jpg, probable)
- `Ramirez St.` — L 12 (11.30.09.jpg, probable)
- `Radcliff St.` — G 6 (11.30.21.jpg, probable)
- `Reid St.` — D 14 (11.30.21.jpg, probable)
- `Reno` — F 90 (11.26.23.jpg, probable)
- `Republo` — K 12 (11.30.21.jpg, probable)
- `Requena St.` — K 12 (11.30.21.jpg, probable)
- `Riecher Ave.` — R 6 (11.30.21.jpg, uncertain)
- `Schleffelin` — M 10 (11.30.21.jpg, probable)
- `Tableton St.` — K 13 (11.30.09.jpg, probable)
- `Thorne St.` — N 4 (11.30.09.jpg, probable)
- `Toluca St.` — T 11 (11.30.21.jpg, probable)
- `Tivy` — K 18 (11.30.21.jpg, probable)
- `Vallejo` — O P (11.30.27.jpg, uncertain)
- `Vithard` — M 10 (11.30.27.jpg, probable)
- `Wevse St.` — L 10 (11.30.27.jpg, probable)
- `Yorba St.` — R 6 (11.26.23.jpg, probable)
- `Zalvidea` — G 3 (11.26.23.jpg, probable)

## 5. Things that could not be read cleanly in ANY photo

The defects below are **in the sheet / lamination**, not in a single exposure, so re-shooting the
same angle will not help; they need raking light, a different angle, or examination of the physical
sheet.

1. **Vertical crease / ink abrasion through the upper half of column 6** (the P–R names).
   Position: column 6, from `Paloma Ave.` down to about `Redwood St.`. It removes or squashes two
   to four characters in the middle of each name — e.g. the sheet reads `PalomAve.`, `Park A.`,
   `Park Iw`, `Park Gve Ave.`, `Park Vw Ave.`, `Pasado Ave.`, `PavilioPl.`, `Pennsyania Ave.`,
   `Piedmo: Ave.`, `Plasa 3`, `Pleasar Ave.`, `Plymou St.`, `Prichar St.`, `Princeta Ave.`,
   `Prospec Drive`, `Prospec Place`, `PrudenfSt.`, `Onebeo St.`, `Oneirol St.`, `Ouincy St.`.
   Present identically in 11.30.09, 11.26.23 and 11.30.36. My readings (Park Grove Ave.,
   Park View Ave., Pasadena Ave., Pavilion Pl., Pennsylvania Ave., Piedmont Ave., Plaza St.,
   Pleasant Ave., Plymouth St., Prichard St., Princeton Ave., Prospect Drive, Prospect Place,
   Prudent St., Quebec St., Queirol St., Quincy St.) are reconstructions and are flagged
   `probable`/`uncertain`. **Worth a raking-light re-shoot of column 6, rows 1–45.**
   Two entries I could not reconstruct at all: **`Park A.` (L 8)** and **`Park Iw` (L 8)** —
   recorded as *Park Ave.* and *Park Row*, both `uncertain`. These need the physical sheet.
2. **Newsprint scrap over column 2, `Centennial St.`–`Center Place`** in the 11.29.x/11.30.x
   series. Recovered from 11.26.23, where the scrap had shifted. *No action needed.*
3. **Newsprint scrap over column 2, `Brent St.`–`Brook`** in 11.29.31. Recovered from 11.39.47.
   *No action needed.*
4. **Scrap corner over the first letter of `Budlong Ave.` and `Bunkerhill Ave.`** (column 2).
   Present in both 11.29.31 and 11.39.47; the scrap covers the initial `B` in every index photo.
   Readings are certain from context but flagged `probable`.
5. **Glare over column 4, the I section** (`Ida St.`–`Illinois St.`) in 11.30.09, and over
   column 6, `San Julian`–`Saratoga` in 11.30.21. Both recovered from other photos.
   *No action needed.*
6. **`Fresno St.` grid letter** (column 3, last F entry). 11.26.23 reads `R. 15`; 11.30.36 reads
   `E. 15`. Recorded as `E 15`, `uncertain`. **Worth a close re-shoot.**
7. **`Concha` (column 2)** — the street-type suffix after the name is under glare in 11.29.42 and
   11.29.51 and too small in 11.26.23. Recorded `Concha St. L 12`, `uncertain`.
8. Individual glyph ambiguities (u/n, C/G/O, 6/8, 2/9) noted per entry in the `probable` flags;
   the most consequential are `Bouett St.`, `Bandera St.`, `Bauchet St.`, `Cadina St.`,
   `Casnora St.`, `Avablaza St.`, `Baredon`, `Masenta`, `Macea`, `Vithard`, `Wevse St.`, `Tivy`.
   These are unusual names that this project cares about, so they are transcribed as printed
   rather than normalised — but they are the ones to verify against the physical sheet.

## 6. The map face (not transcribed)

For a future job:

- The map face carries **grid letters A–R left-to-right along the top edge** and **numbers 1–10
  down the right edge in the photographed portion** — but index grid numbers go to 23, so the
  number run continues down the full sheet and the photos here only cover the top band.
  A complete map-face shoot needs to capture the whole right edge.
- The margins are filled with 1903–04 advertising, which is itself datable evidence: Clearing
  House Banks table; Security Savings Bank; Equitable Savings Bank; National Bank of Long Beach;
  Munger's Laundry (814-818 So. Main St.); Southern California Savings Bank ("will remove from
  present location 162 N. Spring St. after March 1, 1904"); C. E. Crary Co., 302 South Broadway;
  Title Insurance and Trust Co.; Pacific Transfer Van and Storage Co., 209 West Second St.;
  Southern California Wine Co., 220 West Fourth St. ("Peerless Brand"); The Ascot Saddle;
  Cawston Ostrich Farm, 803 S. Raymond Ave., Pasadena.
  The Southern California Savings Bank ad fixes the printing to **before 1 March 1904**.
- A Santa Monica / "by the Sea" inset appears at one corner (11.25.43).

---

# Analysis against `names.js`

The corpus (`names.js`, 319 name entities) was read but **not modified**.

## 7. Index entries the corpus already knows — 200 of 1089

Acacia St., Adobe St., Agatha St., Alameda St., Alpine, Amelia St., Anderson St., Arnold St., Atlantic St., Azusa St., Banning St., Beaudry Ave., Bellevue Ave., Belmont Ave., Belmont Ave., Bixel St., Boston St., Boyd St., Boylston St., Broadway, Brook, Bryan St., California St., Carolina St., Castelar St., Centennial St., Center St., Center Place, Central Ave., Ceres Ave., Channing St., Cherry St., Cincinnati St., Clarence St., Cleveland St., Colina Ave., College St., Colton St., Columbia Ave., Colyton St., Commercial St., Cooper St., Corto St., Council St., Crescent St., Crocker St., Cummings St., Custer Ave., Decatur St., Diamond St., Ducommun St., Easton St., Edgeware Road, Eighth St., Eighteenth St., Eleventh St., Elysian St., Elysian Park, Elysian Park Ave., Emerald St., Everett St., Farmer St., Fifth St., Fifteenth St., Figueroa St., Fireman St., First St., Florida St., Flower St., Fourth St., Fourteenth St., Francisco St., Freight St., Garey St., Garland Ave., Georgia St., Gladys Ave., Golden Ave., Grand Ave., Gravilla St., Hartford Ave., Hewitt St., Hill St., Hobart Bld., Holliday St., Hope St., Ida St., Ingraham, Ionia, Jackson St., James St., Jesse St., Keller St., Kip St., Kohler St., Labory Lane, Lafayette St., Lake St., Lake Shore Ave., Lawrence St., Laurel St., Lemon St., Lincoln St., Logan St., Loma Drive, Loomis St., Los Angeles St., Lucas Ave., Macy St., Marion, Main St., Maple Ave., Marion Ave., Market St., Maryland St., Mateo St., Merchant, Mesquit St., Metcalf St., Mignonette St., Mimosa St., Miramar St., Mission Road, Molino St., Myers St., Myrtle St., New Depot St., Nina St., Ninth St., Ohio St., Olive St., Olive Court, Omar Ave., Orange St., Ord St., Pacific Ave., Palm St., Palm Drive, Palmetto St., Patton St., Philadelphia St., Pico St., Requena St., Rio St., Rockwood St., Rose St., Ruby St., Ruth Ave., San Julian St., San Pedro St., Santa Fe Ave., Santee St., Sapphire St., Scott Ave., Seaton St., Second St., Sepulveda, Seventh St., Seventeenth St., Shatto St., Short St., Silver St., Sixth St., Sixteenth St., Spring St., St. James St., St. James Park, St. Paul Ave., Stanford Ave., State St., Stephenson Ave., Sumner Pl., Sunset Bld., Teed St., Temple St., Tenth St., Third St., Toluca St., Topeka, Towne Ave., Turner St., Twelfth St., Union Ave., Utah St., Vernon Ave., Victor St., Vignes St., Wall St., Warren St., Welcome St., Western Ave., Westlake Ave., Wilde St., Willow St., Wilshire Boulevard, Winston St., Witmer St., Woodworth Court, Wright St., Yale St.

## 8. Index entries with no corresponding entity in the corpus — 889 of 1089

This is the list of 1903-era Los Angeles street names the Streetymology corpus does not
currently carry in any form. Names are exactly as printed.

Abe Ave., Abbott Pl., Abington, Acton St., Adair St., Adams St., Adelaide St., Adrian St., Agate St., Agnes St., Agricultural Ave., Alamo St., Alba St., Albany St., Albertine St., Albion St., Alcazar St., Aldama St., Alergo St., Alessandro St., Alhambra Ave., Alice, Aliso, Allegheny Ave., Allison St., Alosta St., Alta St., Altura St., Alvarado St., Alvarado Tr., Alvise St., Amabel St., Amador St., Amey St., Andrew St., Angelino, Angelica St., Ann St., Antonia Ave., Avablaza St., Aragon St., Arrapahoe St., Arcadia St., Arlington St., Arroyo Seco Drive, Ash St., Ashland Ave., Aubrey St., Augusta St., Aurora St., Austin St., Avalon St., Ave. 18, Ave. 19, Ave 20., Ave. 21., Ave. 22, Ave. 23, Ave. 24, Ave. 25, Ave. 26, Ave. 28, Ave 29, Ave. 31, Ave. 32, Ave. 33, Ave. 34, Ave. 35, Ave. 36, Ave. 37, Ave. 38, Ave 39, Ave. 40, Ave. 41, Ave. 42, Ave. 43, Ave. 44, Ave. 48, Ave. 45, Ave. 49, Ave. 50, Ave. 51, Ave. 52, Ave. 53, Ave 54, Ave. 55, Avenue 56, Ave. 57, Ave. 58, Ave. 59, Ave. 60, Ave. 61, Avenue 63, Avenue 64, Avenue 65, Avenue 66, Avery St., Avila St., Avon Ave., B St., Bailey St., Baker St., Baldwin St., Baltimore, Bandini St., Barbee St., Barlow St., Barnard Park, Barranca St., Baredon, Bartlett St., Bartol St., Bauchet St., Bandera St., Baxter St., Bay St., Beacon St., Beale St., Beaver Ave., Beech St., Bell St., Belvedere, Benton Boulevard, Benjamin, Berendo St., Berkeley Ave., Bernardo St., Bigby St., Birch St., Bird St., Bishop Road, Blaine St., Bloom St., Bluff St., Bolsa, Bonanza St., Bond St., Bonita Ave., Bonnie Brae St., Bonsallo Ave., Booth St., Bautista Ave., Boulder St., Bouett St., Boyle Ave., Branch St., Breed St., Brent St., Bridge St., Brighton Ave., Britannia St., Brooks Ave., Brooklyn Ave., Bruno St., Buchanan, Buena Vista St., Budlong Ave., Bunkerhill Ave., Burlington Ave., Burtz, Bush St., Butte St., Byram St., C St., Cadina St., Cahuenga St., Calumet Ave., Cambria St., Cambridge St., Camulos St., Cardillo St., Cardinal St., Carlton St., Carlota Boulevard, Carmona St., Carondelet St., Carr St., Carillo St., Carroll Ave., Casnora St., Casco St., Castle St., Catalina St., Cavetano St., Cecilia St., Cedar St., Cemetery St., Cerro Gordo, Chapman St., Charlotte St., Chavez St., Chavez Ravine Rd., Cheesborough Lane, Chelsea St., Cheney St., Chester Pl., Chester St., Chicago St., Childs St., Church Ave., Cimarron St., City View Ave., Clanton St., Clara St., Clay St., Cliff St., Clifton St., Clinton St., Clover St., Colby Ave., Collie St., Colusa St., Commonwealth Ave, Compton Ave., Concha St., Concord St., Confidence St., Congress Ave., Constance St., Connecticut St., Cordova St., Cornwell St., Corona St., Coronado St., Coronel St., Cortez St., Cosmo St., Cottage Home, Cottage Pl., Court St., Cortland St., Court Circle St., Crittenden St., Crosby Pl., Curtis St., Cypress Ave., D St., Dacotah St., Daly St., Dana St., Darien Pl., Dartmouth St., Darwin Ave., Date St., Dauphin St., Dawn St., Dayton Ave., DeFrees St., Del Mar Ave., Del Monte St., De Long St., Del Norte, Delta St., Denker Ave., Denver Ave., Dewey St., Diana St., Dillon St., Dixon, Dobinson St., Dominiquez Ave., Don Abel St., Donahoe St., Donalson St., Dora St., Dorchester St., Douglas St., Douillard St., Downey Ave., Duarte St., Durango St., E St., Eagle St., Eagle Rock Ave., East Lake Ave., E. Side Boulevard, Echandia St., Echo St., Echo Park Road, Edgar St., Edwin St., Effie St., Ella Ave., Elden Ave., Eldorado St., Elgin St., Elizabeth St., Ellendale Pl., Ellery St., Elliot St., Ellsworth St., El Molino St., Elmyra St., Elthea St., Elwood St., Emerson St., Emma Ave., Emmet St., Encino St., Ensenada St., Enterprise St., Esperanza St., Essex St., Estrade St., Estrella Ave., Etta St., Euclid Ave., Eureka St., Eva Terrace St., Evergreen Ave., Ezra St., F St., Fair View, Fairman St., Fairmount St., Fanita Pl., Fanning St., Fayette, Fedora St., Felicia St., Felipe St., Ferguson Alley, Fern St., Fickett St., Fiftieth St., Fifty-first St., Fifty-second St., Fifty-third St., Fifty-fourth St., Fifty-fifth St., Fifty-sixth St., Fifty-seventh St., Fifty-eighth St., Flora Ave., Folsom St., Fort Moore Pl., Fortieth St., Forty-first St., Forty-second St., Forty-third St., Forty-fourth St., Forty-fifth St., Forty-sixth St., Forty-seventh St., Forty-eighth St., Forty-ninth St., Fortuna St., Foster St., Francis St., Franklin St., Fredonia Ave., Fremont Ave., French Ave., Fresno St., Gallardo St., Galveston St., Ganahl St., Garcia St., Garibaldi St., Garnet, Gates St., Geneva St., George St., Gertrude St., Gibbons St., Gillette, Gillig Ave., Gillitte St., Girard St., Gladstone St., Glassell St., Gleason Ave., Glen Terrace St., Glen Albyn Drive, Glenn Ave., Gless St., Golden Gate Ave., Goss St., Grafton St., Grahm St., Gramercy Pl., Granada St., Grand View St., Grant St., Grattan St., Griffin Ave., Griffith Ave., Grotto Ave., Grove Ave., Grover St., Guava St., Guirado St., Hamlet St., Halladie Ave., Hancock St., Hannon St., Harriet St., Harrison Ave., Harvard Boulevard, Hawley St., Hawthorne St., Hayden St., Hays Ave., Hazlip, Helen St., Hemlock St., Henderson, Henry St., Hermosa St., Hidalgo St., Hinton Ave., Hobson St., Hollenbeck Ave., Hollister Ave., Holly, Honduras St., Hooper Ave., Hoover St., Horticultural Ave., Hostetter St., Hough Ave., Houston St., Howard St., Hub, Hubbard St., Hudson Ave., Humboldt St., Hunter St., Huron St., Husted St., Hyans St., Hyperian Ave., Idell St., Idlewild Ave., Illinois St., Imogene Ave., Inez St., Inlet St., Innes Ave., Inyo St., Iowa St., Irolo St., Irving St., Isabel St., Ivers Ave., Ivy St., Ivanhoe, Jarvis St., Jasmine St., Jeanette St., Jefferson St., John St., Johnston St., Jonlin St., Juan St., Juanita Ave., Judson St., Julian St., Juliet St., Juniper St., Kane St., Kansas Ave., Kearney St., Keith St., Kellam Ave., Kensington Rd., Kent St., Kercheval, Kern, Kenwood St., Keys, Keywest St., King, Kingsley St., Kingston St., Kirby St., La Bondad St., Lacy Ave., Laguna Ave., Lamar St., Lambie St., Lancaster Ave., Landa St., Lanfranco St., Lara St., La Salle Ave., Latham St., Lathrop Ave., Lauder St., La Veta Place, Lebanon St., Legrand St., Lee Ave., Lemoyne St., Leonard St., Leon St., Leonis St., Leoti Ave., Lerdo St., Leroy St., Lewis St., Liberty St., Lima St., Linda Vista St., Linden St., Linwood St., Little St., Little Rock Ave., Live Oak St., Livingstone Ave., London Ave., Longfellow, Longbeach Ave., Lookout Drive, Loosemore, Lord St., Lorena Ave., Loreto St., Lee Ave., Lovelace Ave., Lucile Ave., Lyons, Macea, Magdalena St., Magneta St., Malvern, Magnolia Ave., Maines Ave., Malabar St., Malcolmson St., Mallard, Malta St., Maltman Ave., Manitou Ave., Manhattan, Mann St., Manzanita Ave., Marathon Ave., Marchessault St., Marengo Ave., Marietta St., Marmion Way, Mary Lane, Mason St., Masenta, Mathews St., Mattison St., May St., Mayberry St., McAllister St., McClintock Ave., McCullom St., McDuff St., McGary St., McKinley Ave., McLean Road, McPherson St., Medford St., Mellus St., Melvin St., Menlo Ave., Merced St., Merrick St., Merwin St., Mesa Ave., Mesnager Ave., Miami Ave., Micheltoreno St., Michigan Ave., Midland, Millard Ave., Milton St., Milwaukee St., Minerva St., Minnesota St., Miranda St., Miriam St., Mitchell Place, Moffet Alley, Mohawk St., Moneta Ave., Monmouth Ave., Mono St., Montrose St., Montana St., Monrovia St., Montevista St., Montecito, Montezuma St., Mountain Ave., Mora St., Morton St., Morcom Ave., Morning Ave., Mott St., Moulton Ave., Mozart, Murdock Ave., Nadeau St., Naomi Ave., Napa St., Nand St., Navarro St., Negro Alley, Newell St., New England St., Newhall St., Newland St., New Hampshire St., New High St., New Jersey St., New Orleans St., Newton St., New York Ave., Nob Hill Ave., Norfolk St., Normandie Ave., Norwood St., Ocean View Ave., Occidental, Ogier St., Oak St., Old Temple Road, Olvera St., Olney St., Olympian Ave., Omaha St., Ontario St., Opal St., Orchard Ave., Oregon, Orme Ave., Oro St., Ortega St., Ottawa St., Otter St., Outlet St., Overton St., Oxford Ave., Pacheo St., Paige, Palmer St., Palo Alto St., Paloma Ave., Palmer Ave., Park Ave., Park Row, Park Grove Ave., Park View Ave., Pasadena Ave., Pavilion Pl., Pecan, Pennsylvania Ave., Pepper Ave., Percy St., Perris St., Philleo St., Piedmont Ave., Plata St., Plaza St., Pleasant Ave., Plymouth St., Poe, Pollard St., Pomero Ave., Pomona St., Porter St., Portia St., Portland St., Post St., Potter Pl., Poydras St., Preston Ave., Prichard St., Princeton Ave., Prospect Drive, Prospect Place, Prudent St., Putnam St., Quebec St., Queirol St., Quincy St., Quinter St., Railroad St., Ramirez St., Ramona Ave., Rampart St., Raymond Ave., Radcliff St., Redondo St., Redwood St., Reid St., Reed St., Reno, Repton St., Republo, Reservoir St., Reynolds Ave., Ricardo St., Rich St., Richmond St., Ridge St., Riecher Ave., Remick, Rinehart St., Rio Vista Ave., River St., Rivera St., Robinson St., Rogers Ave., Romeo St., Romulo St., Rosabell St., Rosalind St., Roosevelt Ave., Rosecrans Way, Roselawn Pl., Rosemont St., Rossini, Rowan St., Rowland St., Roxbury St., Royal St., Rubio, Ruth Upham Ave., Sabina St., Sacramento St., Safford, San Benito St., Sanchez, San Diego St., San Fernando St., San Fernando Rd., San Leandro St., San Marino St., San Pablo St., San Pasqual Ave, Santa Barbara Ave., Santa Clara St., Santa Cruz St., Santa Monica Ave., Santiago, Saratoga St., Savannah St., Savoy St., Scarff St., Schleffelin, Schlesinger, Semple St., Seneca Ave., Sentous, Severance St., Seville, Shearer St., Sheridan St., Sherman St., Sichel St., Sierra St., Sinova St., Siskiyou St., Slauson Ave., Sloat St., Smith St., Sobieski St., Solano St., Sonoma St., Sotello St., S. Park, Soto St., Spence St., St. Andrews Pl., St. Charles St., St. Elmo St., St. John St., St. Louis St., St. Vincent Pl., Stanislaus St., Star St., Staunton Ave., Stevens Pl., Stewart St., Stockton St., Story St., Sullivan Ave., Sulphur, Summit Ave., Sunbury Ave., Sunrise, Sutter St., Swift St., Sylvan Ave., Tableton St., Tallman St., Taylor St., Tehama St., Tejon St., Tennessee St., Thalia St., Thirtieth St., Thirty-first St., Thirty-second St., Thirty-third St., Thirty-fifth St., Thirty-sixth St., Thirty-seventh St., Thirty-eighth St., Thirty-ninth St., Thomas St., Thompson St., Thorne St., Thornton Ave., Thorp St., Toberman St., Toledo St., Transit St., Tremont Ave., Trenton St., Trinity St., Tropico St., Tivy, Turtle Ave., Twentieth St., Twenty-first St., Twenty-second St., Twenty-third St., Twenty-fourth St., Twenty-fifth St., Twenty-seventh St., Twenty-eighth St., Twenty-ninth St., Upper Boulevard, Valencia St., Valentine, Vallejo, Valley, Valverde St., Vargas St., Velasco St., Vendome St., Verde St., Vermont Ave., Vestal Ave., Victoria St., Vithard, Vineland St., Viola St., Violet St., Virgil Ave., Viscaino St., Von Keithian Ave., Van Buren Pl., Walton, Wabash Ave., Waco Ave., Wadsworth St., Walnut St., Walnut Drive, Wallace St., Walrath, Warner St., Washington St., Waterloo St., Weldon St., Wesley Ave., West Albion, West End Ave., West Side Ave., Wevse St., Widney St., Whittier St., Wilhardt St., Willard Ave., Wisconsin St., Wilson St., Wilton Pl., Windsor St., Winfield St., Wood Ave., Woodlawn St., Woodman Ave., Workman St., Yorba St., York St., Yosemite St., Yuba St., Yolo Drive, Zonal Ave., Zamora, Zalvidea

## 9. The eleven open questions

| # | Question | Answer |
|---|---|---|
| 1 | **Mill Street** | **ABSENT.** The M sequence runs `Mignonette St. J 11` → `Millard Ave. D 14` → `Milton St. I 7`. No Mill. (Corpus has `mill-st-arts-district`.) |
| 2 | **Lemon St. / Wilson St.** | **BOTH present, and both at L 17.** `Lemon St. ... L. 17` (col. 4) and `Wilson St. ... L. 17` (col. 7). Also at L 17: `Kercheval`, `La Bondad St.`, `Santa Clara St.`. |
| 3 | **Orange Street** | **Present, ONE entry only: `Orange St. ... G. 12`** (col. 5). It does not span several grid squares in this index. |
| 4 | **Alabama Street** | **ABSENT.** The A sequence runs `Alameda St. L 14` → `Alamo St. M 18` → `Alba St. K 23`. (Corpus has `alabama-street`.) |
| 5 | **Everett** | **ONE entry: `Everett St. ... J. 9`** (col. 3, between `Eva Terrace St. Q 8` and `Evergreen Ave. Q 14`). No Everett Place. (Corpus has `everett-place`.) |
| 6 | **St. Paul** | **ONE entry: `St. Paul Ave. ... H. 12`** (col. 7, between `St. Louis St. O 13` and `St. Vincent Pl. I 14`). No St. Paul Place. |
| 7 | **Stevenson Avenue** | **ABSENT as "Stevenson".** The sheet prints **`Stephenson Ave. ... L. 14`** (ph, not v), between `Staunton Ave. K 17` and `Stevens Pl. K 11`. Exactly one Steph/Stev-enson entry; `Stevens Pl. K 11` is the only other near-match. The corpus carries both `stephenson-avenue` and `stevenson-ave`; the 1903 sheet supports only the first. |
| 8 | **Georgia** | **`Georgia St. ... G. 15` present; `Georgia Bell` ABSENT.** The G run is `George St. P 8` → `Georgia St. G 15` → `Gertrude St. N 11`, with nothing between. (Corpus has `georgia-bell` and `georgia-east`.) |
| 9 | **Mimosa Street** | **Present: `Mimosa St. ... L. 15`** (col. 5, between `Milwaukee St. L 3` and `Minerva St. M 18`). |
| 10 | **Ida Street** | **ONE entry: `Ida St. ... G. 8`**, the first entry under the `I.` heading (col. 4). The corpus carries two (`ida-street`, `ida-street-fourth`); the 1903 index lists one. |
| 11 | **Charity Street** | **ABSENT.** The C run is `Chapman St. F 10` → `Charlotte St. P 11` → `Chavez St. L 11`. No Charity survived to the 1903 index. (Corpus has `charity`.) |

### Corpus entities the 1903 index does *not* contain

Worth noting alongside the above: `mill-st-arts-district`, `alabama-street`, `charity`,
`everett-place`, `georgia-bell`, `stevenson-ave`, `wilmington-street`, `nevada-1886`,
`chapules`, `guadalupe`, `botiller-street`, `sainsevain-street`, `wolfskill-ave`,
`melendrez-st`, `collado-st`, `rosas-street`, `lazard-street`, `messer-street` and the other
pre-1900 names in the corpus are all absent from this 1903 index — i.e. by the end of 1903
they had already been renamed or vacated.
