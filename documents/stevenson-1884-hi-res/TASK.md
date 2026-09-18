# Identify the streets on stevenson-1884-hi-res



- **Date:** on 
- **Sheet:** `stevenson-1884-hi-res-100dpi.png` (100 dpi; every pixel coordinate below is
  measured against this render)
- **Alignment:** `stevenson-1884-hi-res-alignment.json` — control points mapping scan pixels
  to lat/lng, already fitted by a human
- **Coverage:** the polygon in `stevenson-1884-hi-res.js`, in scan pixels — the ground this
  document testifies about
- **Modern streets:** `stevenson-1884-hi-res-streets.json` — where every modern street inside
  the coverage polygon runs today, **in pixels on the render above** as well as
  in lat/lng, with the intersections along it. This is the file that lets you
  answer the question: overlay those pixel polylines on the image and see what
  the sheet has drawn there.

## The job

For each modern street listed below, decide what this sheet shows along it:
the plat's own label for that corridor, or that the sheet shows nothing there.
Then list any street DRAWN on the plat that matches none of them.

Modern streets inside the coverage polygon (136):

- 1st Street
- 2nd Place
- 2nd Street
- 3rd Street
- 4th Street
- 5th Street
- 5th Street (south branch)
- 6th Street
- 7th Street
- 8th Place
- 8th Street
- 9th Street
- Adobe Street
- Aliso Street
- Alpine Street
- Alvarado Street
- Angelina Street
- Arcadia Street
- Arroyo Seco Parkway
- Astronaut Ellison S Onizuka Street
- Bamboo Lane
- Bartlett Street
- Beaudry Avenue
- Bellevue Avenue
- Belmont Avenue
- Beverly Boulevard
- Bixel Street
- Bonnie Brae Street
- Boston Street
- Boyd Street
- Boylston Street
- Broad Plaza
- Broadway
- Bunker Hill Avenue
- Burlington Avenue
- Centennial Street
- Cesar E Chavez Avenue
- Chavez Ravine Place
- Chung King Court
- Chung King Road
- Cleveland Street
- College Street
- Colton Street
- Columbia Avenue
- Community Terrace
- Cortez Street
- Council Street
- Court Street
- Crown Hill Avenue
- Custer Avenue
- Dewap Road
- Diamond Street
- Douglas Street
- Edgeware Road
- Emerald Drive
- Emerald Street
- Figueroa Street
- Figueroa Terrace
- Firmin Street
- Flower Street
- Fort Moore Place
- Frances K. Hashimoto Plaza
- Francisco Street
- Fremont Avenue
- Garland Avenue
- General Thaddeus Kosciuszko Way
- Georgia Street
- Gin Ling Way
- Glendale Boulevard
- Golden Avenue
- Grand Avenue
- Grand Avenue Lower Level
- Harbor Freeway
- Hartford Avenue
- Hill Place
- Hill Street
- Hollywood Freeway
- Hope Place
- Hope Street
- Huntley Drive
- Ingraham Street
- James M Wood Boulevard
- Jerry Moss Plaza
- Kensington Road
- Lake Shore Terrace
- Laveta Terrace
- Lei Min Way
- Linwood Avenue
- Loma Drive
- Loma Place
- Los Angeles Street
- Lucas Avenue
- Main Street
- Marketplace
- Maryland Street
- Mei Ling Way
- Metro Red/Purple Lines Entrance
- Mignonette Street
- Miramar Street
- Mountain View Avenue
- New Depot Street
- New High Street
- Olive Court
- Olive Street
- Olympic Boulevard
- Ord Street
- Patton Street
- Pizarro Street
- Rockwood Street
- Saint Paul Avenue
- Saint Paul Place
- San Pedro Street
- Santa Ana Freeway
- Shatto Street
- Spring Street
- Stadium Way
- Sunbury Street
- Sunset Boulevard
- Sunvue Place
- Temple Street
- Toluca Street
- Toriumi Plaza
- Union Avenue
- Union Drive
- Union Place
- Valencia Street
- Valley Street
- Victor Street
- Wall Street
- Welcome Street
- West Bank Plaza at The Broad
- Westlake Avenue
- Wilshire Boulevard
- Winston Street
- Witmer Street
- Yale Street

## Rules that decide the answer

1. **Geometry only, never names.** A corridor labelled X on the plat
   frequently corresponds to a modern street named Y — that mismatch is the
   whole reason this project exists, and it is not rare. In particular, do
   **not** assume the plat's numbered streets are the modern numbered streets
   of the same number; renumbering and renaming have moved them. Decide every
   match from where the lines are, using `stevenson-1884-hi-res-streets.json`, and only then
   look at what the plat calls it.
2. **Streets are drawn as corridors** — two parallel edge lines with the name
   lettered between them. A correct match runs down the MIDDLE, which on a
   wide street looks far from both edges. Judge whether the line stays inside
   the corridor, not whether it touches ink.
3. **A diagonal crossing is not a match** unless it tracks the corridor along
   its length.
4. **Small offsets are normal** (1890s surveying, paper stretch, regrading) —
   up to about half a corridor width. Systematic drift out of the corridor is
   a non-match.
5. **Maps are often not north-up.** Orient by the shape of the network.
6. If unsure between two readings, give both and say what would decide it. A
   wrong confident answer is the worst outcome; an honest "two candidates, low
   confidence" is fine.

## Where to put the answer

**Edit `stevenson-1884-hi-res.js` directly.** Replace its empty `rows: []` with the rows
below. Do not put them in a new file: a separate file has to be merged in by
hand, and the review tool only ever reads `stevenson-1884-hi-res.js`. Leave the rest of that
file alone — the coverage polygon and the alignment are a human's work.

**Leave `sweptFully: false` exactly as it is.** That flag is not a note that
you finished; it says this document's SILENCE can be argued from — that where
these rows say nothing, nothing was there. Only a human who has checked every
row against the sheet can say that, and setting it here would make their check
optional in practice. The same goes for `sweptFor`: leave it empty.

For the same reason every row you write carries `confirmed: false`. That is
not a hedge about your reading; it is what keeps a proposal out of the map
until somebody has looked at it.

Rows take these shapes, all of them `confirmed: false`, since a human checks
them afterwards:

```js
// the plat LETTERS A NAME along this stretch
{ kind: "state", asWritten: "<label exactly as lettered>",
  street: "<modern street>", from: "<cross street>", to: "<cross street>",
  basis: "alignment", confirmed: false, note: "<why, if it is not obvious>" },

// the plat DRAWS THE ROADWAY here but letters no name on it
{ kind: "unnamed", street: "<modern street>", from: "<cross street>", to: "<cross street>",
  basis: "alignment", confirmed: false, note: "<what is drawn>" },

// the plat covers this ground and draws NO STREET here at all
{ kind: "absent", street: "<modern street>", from: "<cross street>", to: "<cross street>",
  confirmed: false, note: "<what is there instead>" },

// drawn on the plat, no modern counterpart at all
{ kind: "vanished", asWritten: "<label as lettered>",
  trace: [[x, y], [x, y]], basis: "alignment", confirmed: false },

// drawn on the plat, no modern counterpart, AND no name lettered on it
{ kind: "vanished-unnamed",
  trace: [[x, y], [x, y]], basis: "alignment", confirmed: false,
  note: "<what is drawn>" }
```

### The kinds are different claims. Read this twice.

| what you see on the sheet | kind |
|---|---|
| a corridor with a name lettered along it | `state` |
| a corridor, edge lines, an alley or a right-of-way — but no name on it | `unnamed` |
| lot interiors, blank paper, a block with no street through it | `absent` |
| a corridor no modern street follows, with a name on it | `vanished` |
| a corridor no modern street follows, with no name on it | `vanished-unnamed` |

`absent` is the strong one: it says the sheet **shows there was no street
here**, and the project later argues from that. If the sheet draws lines you
think are a street but cannot find a name for, that is `unnamed`, not
`absent`. If you are unsure whether the lines are a street at all, say so in
`note` and use `unnamed` — it claims less.

Neither `unnamed` nor `absent` nor `vanished-unnamed` may carry `name` or
`asWritten`. There is no ink to quote. **Do not write
`asWritten: "unnamed"`** — that says the sheet letters the word *unnamed*,
which is false; use the kind that means it.

### A stretch lettered twice is ONE row

Some sheets letter the same street more than once — the 1849 Ord survey letters
most of its streets in English and in Spanish at once, "GRASSHOPPER ST." beside
"CALLE DE LAS CHAPULES". That is one row carrying both forms, in reading order:

```js
{ kind: "state", asWritten: ["GRASSHOPPER ST.", "CALLE DE LAS CHAPULES"],
  street: "Figueroa Street", from: "...", to: "...",
  basis: "alignment", confirmed: false }
```

Two rows for one label double-count the ground and come out as two overlapping
periods on the map. Joining the forms with a slash records punctuation the
sheet does not have, in a field whose whole point is that it is verbatim.

Two labels along *different stretches* of one street are still two rows — that
is two pieces of testimony about two pieces of ground.

### Which end is `from`

`from` is the **west** end of an east-west street and the **north** end of a
north-south one. `to` is the other end. This is fixed, and it is not the order
you happened to read the sheet in — a row written the other way round produces
a mislabelled segment or, if both ends land in the same place, no segment at
all.

### `null` is almost never what you want

`null` means **the modern street's own end**, which for a street like 3rd
Street is miles outside this sheet. Writing `from: null` on a stretch that
merely runs off the edge of the coverage claims the document testifies about
every block between here and the far end of the city.

Use `null` only when the modern street genuinely ends inside the coverage
polygon. Where a stretch runs to the edge of coverage, end it at the last
crossing inside, or give a point: `to: { px: [x, y] }`.

**Do not invent a `date` shape.** If you can read the survey or recording date
off the sheet, give it as `date: { on: "1886-05" }` — or `after` / `before`
for a range. Never write the string `"undefined"`.

**`name` comes last, and only from the candidate list** in the section
"Assigning `name`" below — never from your own knowledge of Los Angeles, and
never as an id you made up. Put the ink in `asWritten` first; when in any doubt
about identity, leave `name` out and review will assign it.

## Assigning `name` — LAST, and only from the list below

Do this only after every row is written and its `kind`, `street`, extents
and `asWritten` are settled. `name` is a claim about which naming *lineage* a
label belongs to — whether this "Figueroa" is the same Figueroa as the one three
blocks east, or a different street that spells alike — and one sheet cannot
settle that. What CAN settle the easy cases is the rest of the corpus, and the
part of it that bears on these streets is below: for each modern street, the
entities that confirmed rows on other sheets have already placed on that
street, or on a street it runs straight into, with the ink those sheets used.
(The same list is in `stevenson-1884-hi-res-streets.json` under `nameCandidates`.)

For a `state` row, set `name` to a candidate's id when **all** of these hold:

1. the candidate is listed for that row's `street` (not for some other street);
2. the row's `asWritten`, read as a name, is the same name as the candidate's
   display form or one of its recorded ink forms — ignoring case, punctuation,
   "St."/"Street"/"Ave."/"Avenue" and the like, and ordinal spellings
   ("FIRST" = "1st"); a different word is a different name, however similar;
3. no other candidate for that street also satisfies 2.

Otherwise **leave `name` out** — including when two candidates both fit,
when the ink is partly illegible, when the only match is on a street listed as
a continuation rather than this one and the stretch does not actually reach
that street, or when you are weighing it at all. A blank is cheap to fill in
review; a wrong lineage is a false claim on the map. **Never invent an id**
and never use one that is not in the list for that street: those fail the
checker. Rows stay `confirmed: false` either way — a human still checks.

### 1st Street (runs straight into Beverly Boulevard, Metro Red/Purple Lines Entrance)

- `first-street` — 1st Street: attested on 1st Street by another sheet; attested on Beverly Boulevard, which 1st Street runs straight into; carries the street's present name; ink seen: “1ST ST”, “1ST STREET”, “1st ST”, “1st STREET”, “CALLE 1a”, “FIRST ST”, “FIRST ST.”, “FIRST STREET”, “FIRST STREET.”, “First Street” [12685, mr001-489, mr002-092-p1, mr003-060-p1, mr003-146-p1, mr004-012-p2, mr005-307-a, mr006-308, mr010-008, mr017-041, mr024-081, mr053-069, mr053-071, tr0012-023a, tr0013-168-p1, tr0043-032, tr0096-062, tr0116-085-p1, tr0122-053-p3, tr0221-009-p2, tr0417-049-p2, tr0713-093-p2, tr0856-050-p2, tr0885-030-p2, tr1339-069-p3]
- `diamond-street` — Diamond Street: attested on 1st Street by another sheet; attested on Beverly Boulevard, which 1st Street runs straight into; ink seen: “DIAMOND ST”, “DIAMOND STREET”, “Diamond”, “Diamond St”, “Diamond St.”, “Diamond Street” [mr005-069, mr006-115, mr006-138, mr007-026-p2, mr007-036-p2, mr007-056, mr010-062, mr010-088]

### 2nd Place (runs straight into General Thaddeus Kosciuszko Way)

- no entity attested here yet — leave `name` out

### 2nd Street (runs straight into Glendale Boulevard, Loma Drive, Lucas Avenue)

- `second-street` — 2nd Street: attested on 2nd Street by another sheet; carries the street's present name; ink seen: “2D ST”, “2ND ST.”, “2ND STREET”, “2nd STREET”, “CALLE 2a”, “SECOND ST.”, “SECOND STREET”, “Second Street”, “W. 2ND ST.”, “W. 2ND STREET” [12685, mr001-489, mr005-307-a, mr007-056, mr053-069, mr053-071, tr0001-052, tr0006-150a, tr0015-166a-p1, tr0015-166a-p2, tr0016-005, tr0017-001b, tr0034-065, tr0035-022, tr0062-063, tr0116-085-p1, tr0417-049-p2, tr0713-093-p2, tr0856-050-p2, tr0885-030-p2, tr0926-086-p2, tr0938-051-p3, tr1339-069-p3]
- `lake-shore-ave` — Lake Shore Avenue: attested on 2nd Street by another sheet; ink seen: “Lake Shore Ave” [mr010-081]
- `guadalupe` — Guadalupe Street: attested on 2nd Street by another sheet; ink seen: “GUADALUPE ST”, “Guadalupe Street” [mr002-092-p1, mr002-092-p2, mr003-060-p1, mr003-060-p2]
- `silver-st` — Silver Street: attested on 2nd Street by another sheet; ink seen: “Silver St” [mr007-036-p2, mr007-056]
- `clementina-street` — Clementina Street: attested on 2nd Street by another sheet; ink seen: “Clementina Street” [mr017-041]
- `topeka-st` — Topeka Street: attested on 2nd Street by another sheet; ink seen: “TOPEKA ST.” [mr024-081]
- `northern-ave` — Northern Avenue: attested on 2nd Street by another sheet; ink seen: “Northern Ave” [mr010-062]
- `north-ave` — North Avenue: attested on 2nd Street by another sheet; ink seen: “North Ave” [mr007-036-p2]
- `lake-avenue` — Lake Avenue: attested on Glendale Boulevard, which 2nd Street runs straight into; ink seen: “Lake Avenue” [mr006-138]
- `belmont-ave` — Belmont Avenue: attested on Loma Drive, which 2nd Street runs straight into; ink seen: “Belmont Ave” [mr010-088]
- `loma-drive` — Loma Drive: attested on Loma Drive, which 2nd Street runs straight into; ink seen: “LOMA DRIVE”, “Loma Drive” [mr007-036-p2, tr0015-179a]
- `lucas-avenue` — Lucas Avenue: attested on Lucas Avenue, which 2nd Street runs straight into; ink seen: “LUCAS”, “LUCAS AVE.”, “LUCAS AVENUE”, “Lucas”, “Lucas Ave”, “Lucas Avenue” [mr006-115, mr006-427, mr007-056, mr007-096-p2, mr010-081, mr018-063, mr052-085, mr055-014, tr0001-057a, tr0002-037a, tr0014-087a, tr0015-166a-p2, tr0030-069, tr0034-065]

### 3rd Street (runs straight into 4th Street, Flower Street, Miramar Street)

- `third-street` — 3rd Street: attested on 3rd Street by another sheet; attested on 4th Street, which 3rd Street runs straight into; attested on Miramar Street, which 3rd Street runs straight into; carries the street's present name; ink seen: “3RD ST”, “3RD ST.”, “3RD STREET”, “3d Street”, “CALLE 3a”, “THIRD”, “THIRD ST.”, “THIRD STREET”, “Third St”, “Third Street”, “W. 3RD STREET” [12685, mr001-489, mr003-046-p1, mr013-087-p1, mr016-059, mr030-009-p5, mr053-069, mr053-071, mr066-035, tr0001-052, tr0006-150a, tr0013-168-p1, tr0015-166a-p1, tr0015-166a-p2, tr0035-092, tr0062-063, tr0116-085-p1, tr0122-053-p3, tr0926-086-p2]
- `arnold` — Arnold Street: attested on 3rd Street by another sheet; ink seen: “ARNOLD ST”, “ARNOLD ST.”, “Arnold St”, “Arnold Street” [mr003-046-p1, mr006-427, mr007-036-p2, mr007-096-p2, mr037-078, mr066-035, tr0001-057a]
- `crown-hill-ave` — Crown Hill Avenue: attested on 3rd Street by another sheet; ink seen: “CROWN HILL AVE.” [tr0015-166a-p1, tr0015-166a-p2]
- `georgia-east` — Georgia Street: attested on 3rd Street by another sheet; ink seen: “GEORGIA ST”, “Georgia St”, “Georgie Street.” [mr002-092-p2, mr003-060-p2, mr013-087-p1, mr030-009-p5]
- `atchison-st` — Atchison Street: attested on 3rd Street by another sheet; ink seen: “ATCHISON ST.” [mr024-081]
- `morgan-lane` — Morgan Lane: attested on 3rd Street by another sheet; ink seen: “Morgan Lane” [mr005-005]
- `fourth-street` — 4th Street: attested on 4th Street, which 3rd Street runs straight into; ink seen: “4TH ST”, “4TH ST.”, “4TH STREET”, “CALLE 4a”, “FOURTH ST.”, “FOURTH STREET”, “Fourth St”, “Fourth Street” [12685, mr001-489, mr003-046-p1, mr005-005, mr006-427, mr007-096-p2, mr012-026, mr030-009-p4, mr030-009-p5, mr053-068, mr053-069, mr053-071, tr0012-186, tr0013-168-p1, tr0122-053-p3, tr0751-038]
- `huber-st` — Huber Street: attested on 4th Street, which 3rd Street runs straight into; ink seen: “HUBER ST.”, “Huber St”, “Huber St.” [mr012-042, mr013-087-p1, mr030-009-p4]
- `acacia-st` — Acacia Street: attested on 4th Street, which 3rd Street runs straight into; ink seen: “ACACIA ST.”, “Acacia St” [mr007-036-p2, tr0024-055]
- `flower` — Flower Street: attested on Flower Street, which 3rd Street runs straight into; ink seen: “CALLE DE LAS FLORES”, “FLOWER”, “FLOWER STR.”, “FLOWER STREET”, “Flower St”, “Flower St.”, “Flower Street” [12685, mr001-462, mr003-016, mr003-032, mr003-033, mr007-021, mr021-032, mr053-067, mr053-068]
- `seminary` — Seminary Street: attested on Miramar Street, which 3rd Street runs straight into; ink seen: “Seminary Street” [mr006-115]

### 4th Street (runs straight into 3rd Street, Loma Drive, Union Avenue)

- `fourth-street` — 4th Street: attested on 4th Street by another sheet; carries the street's present name; ink seen: “4TH ST”, “4TH ST.”, “4TH STREET”, “CALLE 4a”, “FOURTH ST.”, “FOURTH STREET”, “Fourth St”, “Fourth Street” [12685, mr001-489, mr003-046-p1, mr005-005, mr006-427, mr007-096-p2, mr012-026, mr030-009-p4, mr030-009-p5, mr053-068, mr053-069, mr053-071, tr0012-186, tr0013-168-p1, tr0122-053-p3, tr0751-038]
- `huber-st` — Huber Street: attested on 4th Street by another sheet; ink seen: “HUBER ST.”, “Huber St”, “Huber St.” [mr012-042, mr013-087-p1, mr030-009-p4]
- `acacia-st` — Acacia Street: attested on 4th Street by another sheet; ink seen: “ACACIA ST.”, “Acacia St” [mr007-036-p2, tr0024-055]
- `third-street` — 3rd Street: attested on 4th Street by another sheet; attested on 3rd Street, which 4th Street runs straight into; ink seen: “3RD ST”, “3RD ST.”, “3RD STREET”, “3d Street”, “CALLE 3a”, “THIRD”, “THIRD ST.”, “THIRD STREET”, “Third St”, “Third Street” [12685, mr001-489, mr013-087-p1, mr016-059, mr030-009-p5, mr053-069, mr053-071, tr0001-052, tr0006-150a, tr0013-168-p1, tr0116-085-p1, tr0122-053-p3, tr0926-086-p2]
- `arnold` — Arnold Street: attested on 3rd Street, which 4th Street runs straight into; ink seen: “ARNOLD ST”, “ARNOLD ST.”, “Arnold St”, “Arnold Street” [mr003-046-p1, mr006-427, mr007-036-p2, mr007-096-p2, mr037-078, mr066-035, tr0001-057a]
- `crown-hill-ave` — Crown Hill Avenue: attested on 3rd Street, which 4th Street runs straight into; ink seen: “CROWN HILL AVE.” [tr0015-166a-p1, tr0015-166a-p2]
- `georgia-east` — Georgia Street: attested on 3rd Street, which 4th Street runs straight into; ink seen: “GEORGIA ST”, “Georgia St”, “Georgie Street.” [mr002-092-p2, mr003-060-p2, mr013-087-p1, mr030-009-p5]
- `atchison-st` — Atchison Street: attested on 3rd Street, which 4th Street runs straight into; ink seen: “ATCHISON ST.” [mr024-081]
- `morgan-lane` — Morgan Lane: attested on 3rd Street, which 4th Street runs straight into; ink seen: “Morgan Lane” [mr005-005]
- `belmont-ave` — Belmont Avenue: attested on Loma Drive, which 4th Street runs straight into; ink seen: “Belmont Ave” [mr010-088]
- `loma-drive` — Loma Drive: attested on Loma Drive, which 4th Street runs straight into; ink seen: “LOMA DRIVE”, “Loma Drive” [mr007-036-p2, tr0015-179a]
- `union-avenue` — Union Avenue: attested on Union Avenue, which 4th Street runs straight into; ink seen: “UNION AVE.” [tr0024-055]
- `collado-st` — Collado Street: attested on Union Avenue, which 4th Street runs straight into; ink seen: “Collado St” [mr007-036-p2, mr010-062]
- `union-st` — Union Street: attested on Union Avenue, which 4th Street runs straight into; ink seen: “Union St” [mr007-036-p2]

### 5th Street (runs straight into 5th Street (south branch))

- `fifth-street` — 5th Street: attested on 5th Street by another sheet; carries the street's present name; ink seen: “5TH ST”, “5TH ST.”, “CALLE 5a”, “FIFTH ST.”, “FIFTH STREET”, “Fifth St”, “Fifth St.”, “Fifth St. (Extension)” [mr001-462, mr003-046-p2, mr003-166-p2, mr005-307-b, mr006-427, mr007-096-p2, mr030-009-p3, mr030-009-p4, mr039-069, mr053-068, mr053-071, tr0002-037a, tr0007-078a, tr0010-175a, tr0588-055, tr0751-038]
- `poplar-st` — Poplar Street: attested on 5th Street by another sheet; ink seen: “Poplar St”, “Poplar St.” [mr012-042, mr030-009-p2]
- `ward-st` — Ward Street: attested on 5th Street (south branch), which 5th Street runs straight into; ink seen: “WARD ST.” [mr003-046-p2]

### 5th Street (south branch) (runs straight into 5th Street, 6th Street)

- `ward-st` — Ward Street: attested on 5th Street (south branch) by another sheet; attested on 6th Street, which 5th Street (south branch) runs straight into; ink seen: “WARD ST”, “WARD ST.”, “Ward St”, “Ward Street” [mr003-046-p2, mr003-569, mr006-427, mr007-036-p2, mr007-096-p2, mr018-063]
- `fifth-street` — 5th Street: attested on 5th Street, which 5th Street (south branch) runs straight into; ink seen: “5TH ST”, “5TH ST.”, “CALLE 5a”, “FIFTH ST.”, “FIFTH STREET”, “Fifth St”, “Fifth St.”, “Fifth St. (Extension)” [mr001-462, mr003-046-p2, mr003-166-p2, mr005-307-b, mr006-427, mr007-096-p2, mr030-009-p3, mr030-009-p4, mr039-069, mr053-068, mr053-071, tr0002-037a, tr0007-078a, tr0010-175a, tr0588-055, tr0751-038]
- `poplar-st` — Poplar Street: attested on 5th Street, which 5th Street (south branch) runs straight into; ink seen: “Poplar St”, “Poplar St.” [mr012-042, mr030-009-p2]
- `sixth-street` — 6th Street: attested on 6th Street, which 5th Street (south branch) runs straight into; ink seen: “6TH ST”, “6TH ST.”, “6TH STREET”, “6th St”, “CALLE 6a”, “SIXTH”, “SIXTH ST.”, “SIXTH STR.”, “SIXTH STREET”, “Sixth St”, “Sixth St Extension.”, “Sixth St.”, “proposed line of Sixth Street.” [mr001-462, mr003-016, mr003-166-p1, mr003-569, mr006-033, mr011-042, mr030-009-p1, mr030-009-p2, mr030-009-p3, mr052-085, mr053-068, mr053-071, mr078-055, mr084-053, tr0002-037a, tr0007-078a, tr0009-075, tr0009-100a, tr0010-175a, tr0012-101, tr0014-087a, tr0023-066, tr0159-032-p2, tr0273-017, tr0319-001-p1]

### 6th Street (runs straight into 5th Street (south branch), Fremont Avenue)

- `sixth-street` — 6th Street: attested on 6th Street by another sheet; carries the street's present name; ink seen: “6TH ST”, “6TH ST.”, “6TH STREET”, “6th St”, “CALLE 6a”, “SIXTH”, “SIXTH ST.”, “SIXTH STR.”, “SIXTH STREET”, “Sixth St”, “Sixth St Extension.”, “Sixth St.”, “proposed line of Sixth Street.” [mr001-462, mr003-016, mr003-166-p1, mr003-569, mr006-033, mr011-042, mr030-009-p1, mr030-009-p2, mr030-009-p3, mr052-085, mr053-068, mr053-071, mr078-055, mr084-053, tr0002-037a, tr0007-078a, tr0009-075, tr0009-100a, tr0010-175a, tr0012-101, tr0014-087a, tr0023-066, tr0159-032-p2, tr0273-017, tr0319-001-p1]
- `ward-st` — Ward Street: attested on 6th Street by another sheet; attested on 5th Street (south branch), which 6th Street runs straight into; ink seen: “WARD ST”, “WARD ST.”, “Ward St”, “Ward Street” [mr003-046-p2, mr003-569, mr006-427, mr007-036-p2, mr007-096-p2, mr018-063]
- `beaudry-st` — Beaudry Street: attested on Fremont Avenue, which 6th Street runs straight into; ink seen: “Beaudry St” [mr007-026-p1, mr007-026-p2]

### 7th Street

- `seventh-street` — 7th Street: attested on 7th Street by another sheet; carries the street's present name; ink seen: “7TH ST.”, “7TH STREET”, “7th ST”, “7th Street”, “CALLE 7a”, “SEVENTH ST”, “SEVENTH ST.”, “SEVENTH STR.”, “SEVENTH STREET”, “Seventh St”, “Seventh St.”, “Seventh Street”, “Seventh Street.” [11824, mr003-016, mr003-569, mr005-566, mr006-033, mr006-039, mr009-095, mr011-063, mr013-091, mr014-034, mr015-052, mr018-025, mr018-063, mr018-092, mr021-046, mr030-009-p1, mr030-009-p2, mr053-068, mr053-071, mr054-051, mr055-014, mr055-081, mr060-088, mr066-064, mr070-084, tr0001-046, tr0005-042b, tr0005-056a, tr0009-100a, tr0011-196, tr0023-054c, tr0030-069, tr0718-007-p2, tr1397-017-p5]

### 8th Place (runs straight into 8th Street, James M Wood Boulevard)

- `ninth-street` — 9th Street: attested on 8th Place by another sheet; attested on James M Wood Boulevard, which 8th Place runs straight into; ink seen: “NINTH ST”, “NINTH STREET”, “Ninth Street” [mr003-569, mr005-405, mr006-193, tr0001-037, tr0001-038a]
- `ruby-st` — Ruby Street: attested on 8th Place by another sheet; ink seen: “RUBY ST” [mr003-569]
- `lincoln-place` — Lincoln Place: attested on 8th Place by another sheet; attested on 8th Street, which 8th Place runs straight into; ink seen: “Lincoln Place” [mr006-193]
- `lincoln-street` — Lincoln Street: attested on 8th Place by another sheet; ink seen: “Lincoln Street” [mr021-087]
- `eighth-street` — 8th Street: attested on 8th Street, which 8th Place runs straight into; ink seen: “8TH ST”, “8TH STREET”, “8th St”, “8th St.”, “8th Street”, “CALLE 8a”, “EAST EIGHTH STREET”, “EIGHTH ST”, “EIGHTH ST.”, “EIGHTH STREET”, “Eighth St”, “Eighth St.”, “Eighth Street”, “new 8th Street” [11824, mr003-569, mr011-008, mr018-092, mr021-046, mr021-087, mr026-060, mr029-026, mr029-085, mr053-065, mr053-068, mr054-051, mr055-086, mr060-088, mr070-051, pm017-045, tr0001-037, tr0005-042b, tr0005-156a, tr0007-085, tr0013-048, tr0105-001-p2, tr0141-011]

### 8th Street (runs straight into 8th Place)

- `eighth-street` — 8th Street: attested on 8th Street by another sheet; carries the street's present name; ink seen: “8TH ST”, “8TH STREET”, “8th St”, “8th St.”, “8th Street”, “CALLE 8a”, “EAST EIGHTH STREET”, “EIGHTH ST”, “EIGHTH ST.”, “EIGHTH STREET”, “Eighth St”, “Eighth St.”, “Eighth Street”, “new 8th Street” [11824, mr003-569, mr011-008, mr018-092, mr021-046, mr021-087, mr026-060, mr029-026, mr029-085, mr053-065, mr053-068, mr054-051, mr055-086, mr060-088, mr070-051, pm017-045, tr0001-037, tr0005-042b, tr0005-156a, tr0007-085, tr0013-048, tr0105-001-p2, tr0141-011]
- `lincoln-place` — Lincoln Place: attested on 8th Street by another sheet; attested on 8th Place, which 8th Street runs straight into; ink seen: “Lincoln Place” [mr006-193]
- `ninth-street` — 9th Street: attested on 8th Place, which 8th Street runs straight into; ink seen: “NINTH STREET” [tr0001-037, tr0001-038a]
- `ruby-st` — Ruby Street: attested on 8th Place, which 8th Street runs straight into; ink seen: “RUBY ST” [mr003-569]
- `lincoln-street` — Lincoln Street: attested on 8th Place, which 8th Street runs straight into; ink seen: “Lincoln Street” [mr021-087]

### 9th Street (runs straight into James M Wood Boulevard)

- `ninth-street` — 9th Street: attested on 9th Street by another sheet; attested on James M Wood Boulevard, which 9th Street runs straight into; carries the street's present name; ink seen: “9TH STREET”, “9th St.”, “9th Street”, “CALLE 9a”, “East 9th Street”, “NINTH ST”, “NINTH STREET”, “Ninth St.”, “Ninth Street”, “Ninth Street Extension” [11824, mr003-569, mr005-405, mr006-193, mr011-008, mr016-027, mr026-059, mr029-085, mr053-063, mr053-065, mr053-067, mr053-068, mr055-086, tr0001-037, tr0001-038a, tr0005-065]
- `moran-s-lane` — Moran's Lane: attested on 9th Street by another sheet; ink seen: “Moran's Lane” [11824]

### Adobe Street (runs straight into New Depot Street)

- `adobe` — Adobe Street: attested on Adobe Street by another sheet; carries the street's present name; ink seen: “ADOBE ST.”, “CALLE DE LAS ADOBES” [mr053-073, tr0026-074]
- `new-depot-st` — New Depot Street: attested on New Depot Street, which Adobe Street runs straight into; ink seen: “New Depot St” [mr007-062-p2]

### Aliso Street

- no entity attested here yet — leave `name` out

### Alpine Street (runs straight into Beaudry Avenue, Figueroa Street, White Knoll Drive)

- `virgin` — Virgin Street: attested on Alpine Street by another sheet; ink seen: “CALLE DE LAS VIRGENES”, “VIRGIN ST”, “Virgin St”, “Virgin street” [mr007-062-p2, mr053-073, ord-1887-08-22]
- `alpine` — Alpine Street: attested on Alpine Street by another sheet; carries the street's present name; ink seen: “ALPINE STREET” [tr0771-036-p2]
- `beaudry-avenue` — Beaudry Avenue: attested on Beaudry Avenue, which Alpine Street runs straight into; ink seen: “BEAUDRY AVE.”, “BEAUDRY AVENUE”, “Beaudry”, “Beaudry avenue” [mr006-115, mr007-026-p1, mr007-026-p2, tr0001-052, tr0006-150a, tr0010-175a, tr0035-092, tr0588-055, tr0713-093-p2]
- `canal-street-beaudry` — Canal Street: attested on Beaudry Avenue, which Alpine Street runs straight into; ink seen: “Canal Street” [mr016-059]
- `figueroa-gov` — Figueroa Street: attested on Figueroa Street, which Alpine Street runs straight into; ink seen: “FIGUEROA ST.”, “FIGUEROA STREET”, “Figueroa St”, “Figueroa Street” [mr007-021, mr010-077, mr021-032, tr0034-004, tr1397-017-p5]
- `pearl` — Pearl Street: attested on Figueroa Street, which Alpine Street runs straight into; ink seen: “PEARL ST”, “PEARL STR.”, “PEARL STREET”, “Pearl”, “Pearl St”, “Pearl Street” [mr003-016, mr003-032, mr003-569, mr005-307-a, mr007-026-p1, mr007-026-p2, mr007-062-p2, mr010-030, mr021-087]
- `chapules` — Grasshopper Street: attested on Figueroa Street, which Alpine Street runs straight into; ink seen: “CALLE DE LAS CHAPULAS”, “CALLE DE LAS CHAPULES”, “GRASSHOPPER ST”, “GRASSHOPPER ST.”, “GRASSHOPPER STREET”, “Grasshopper St.” [12685, mr001-462, mr053-067, mr053-068]

### Alvarado Street

- no entity attested here yet — leave `name` out

### Angelina Street

- `angelina-st` — Angelina Street: attested on Angelina Street by another sheet; carries the street's present name; ink seen: “Angelina St” [mr007-026-p2]

### Arcadia Street

- no entity attested here yet — leave `name` out

### Arroyo Seco Parkway (runs straight into Harbor Freeway)

- no entity attested here yet — leave `name` out

### Astronaut Ellison S Onizuka Street

- `wilmington-street` — Wilmington Street: attested on Astronaut Ellison S Onizuka Street by another sheet; ink seen: “WILMINGTON ST.”, “WILMINGTON STREET”, “Wilmington Street” [tr0016-005, tr0017-001b, tr0035-022]
- `weller-street` — Weller Street: attested on Astronaut Ellison S Onizuka Street by another sheet; ink seen: “WELLER STREET” [tr0856-050-p2]
- `san-pedro` — San Pedro Street: attested on Astronaut Ellison S Onizuka Street by another sheet; ink seen: “San Pedro St.” [mr010-008]
- `astronaut-ellison-s-onizuka-street` — Astronaut Ellison S Onizuka Street: carries the street's present name

### Bamboo Lane

- no entity attested here yet — leave `name` out

### Bartlett Street

- no entity attested here yet — leave `name` out

### Beaudry Avenue (runs straight into Alpine Street)

- `beaudry-avenue` — Beaudry Avenue: attested on Beaudry Avenue by another sheet; carries the street's present name; ink seen: “BEAUDRY AVE.”, “BEAUDRY AVENUE”, “Beaudry”, “Beaudry avenue” [mr006-115, mr007-026-p1, mr007-026-p2, tr0001-052, tr0006-150a, tr0010-175a, tr0035-092, tr0588-055, tr0713-093-p2]
- `canal-street-beaudry` — Canal Street: attested on Beaudry Avenue by another sheet; ink seen: “Canal Street” [mr016-059]
- `virgin` — Virgin Street: attested on Alpine Street, which Beaudry Avenue runs straight into; ink seen: “CALLE DE LAS VIRGENES”, “VIRGIN ST”, “Virgin St”, “Virgin street” [mr007-062-p2, mr053-073, ord-1887-08-22]
- `alpine` — Alpine Street: attested on Alpine Street, which Beaudry Avenue runs straight into; ink seen: “ALPINE STREET” [tr0771-036-p2]

### Bellevue Avenue (runs straight into Marion Avenue)

- `bellevue-ave` — Bellevue Avenue: attested on Bellevue Avenue by another sheet; carries the street's present name; ink seen: “BELLEVUE AVENUE”, “Bellevue Ave” [mr012-025, tr0063-098-p1]
- `canal-and-reservoir-st` — Canal and Reservoir Street: attested on Bellevue Avenue by another sheet; ink seen: “Canal and Reservoir St” [mr007-026-p1]
- `marion-ave` — Marion Avenue: attested on Marion Avenue, which Bellevue Avenue runs straight into; ink seen: “Marion Ave” [mr012-025]

### Belmont Avenue (runs straight into Loma Drive)

- `aztec-avenue` — Aztec Avenue: attested on Belmont Avenue by another sheet; ink seen: “Aztec Avenue” [mr006-138]
- `texas-st` — Texas Street: attested on Belmont Avenue by another sheet; ink seen: “TEXAS ST” [mr007-036-p2]
- `belmont-ave` — Belmont Avenue: attested on Loma Drive, which Belmont Avenue runs straight into; ink seen: “Belmont Ave” [mr010-088]
- `loma-drive` — Loma Drive: attested on Loma Drive, which Belmont Avenue runs straight into; ink seen: “LOMA DRIVE”, “Loma Drive” [mr007-036-p2, tr0015-179a]

### Beverly Boulevard (runs straight into 1st Street)

- `diamond-street` — Diamond Street: attested on Beverly Boulevard by another sheet; attested on 1st Street, which Beverly Boulevard runs straight into; ink seen: “DIAMOND ST”, “DIAMOND STREET”, “Diamond”, “Diamond St”, “Diamond St.”, “Diamond Street” [mr005-069, mr006-115, mr006-138, mr007-026-p2, mr007-036-p2, mr007-056, mr010-062, mr010-088]
- `first-street` — 1st Street: attested on Beverly Boulevard by another sheet; attested on 1st Street, which Beverly Boulevard runs straight into; ink seen: “1ST ST”, “1ST STREET”, “1st ST”, “1st STREET”, “CALLE 1a”, “FIRST ST”, “FIRST ST.”, “FIRST STREET”, “FIRST STREET.”, “First Street” [12685, mr001-489, mr002-092-p1, mr003-060-p1, mr003-146-p1, mr004-012-p2, mr005-307-a, mr006-308, mr010-008, mr017-041, mr024-081, mr053-069, mr053-071, tr0012-023a, tr0013-168-p1, tr0043-032, tr0096-062, tr0116-085-p1, tr0122-053-p3, tr0221-009-p2, tr0417-049-p2, tr0713-093-p2, tr0856-050-p2, tr0885-030-p2, tr1339-069-p3]

### Bixel Street

- `lafayette-bixel` — Lafayette Avenue: attested on Bixel Street by another sheet; ink seen: “LAFAYETTE AVENUE”, “LAFAYETTE ST.”, “Lafayette Av.” [mr003-046-p1, mr003-046-p2, mr006-115, mr006-427]
- `bixel` — Bixel Street: attested on Bixel Street by another sheet; carries the street's present name; ink seen: “BIXEL ST”, “BIXEL ST.”, “BIXEL STREET”, “Bixel St”, “Bixel Street” [mr052-085, mr066-035, tr0001-057a, tr0002-037a, tr0007-078a, tr0417-049-p2, tr0588-055, tr0713-093-p2]
- `william-farragut` — William Street: attested on Bixel Street by another sheet; ink seen: “WILLIAM ST.”, “William St.” [mr005-566, mr009-095]
- `ohio-street` — Ohio Street: attested on Bixel Street by another sheet; ink seen: “OHIO ST.”, “Ohio Street” [mr005-069, tr0014-097b]
- `metcalf-st` — Metcalf Street: attested on Bixel Street by another sheet; ink seen: “Metcalf St” [mr007-026-p2]

### Bonnie Brae Street

- no entity attested here yet — leave `name` out

### Boston Street (runs straight into Boylston Street)

- `cummings-ave` — Cummings Avenue: attested on Boston Street by another sheet; ink seen: “Cummings ave.” [mr012-025]
- `figueroa-gov` — Figueroa Street: attested on Boylston Street, which Boston Street runs straight into; ink seen: “FIGUEROA ST.”, “FIGUEROA STREET”, “Figueroa St”, “Figueroa Street” [mr003-046-p1, mr003-046-p2, mr005-069, mr006-115, mr006-391, mr006-429, mr007-026-p1, mr007-026-p2, mr012-025, mr016-059, mr066-035]
- `boylston` — Boylston Street: attested on Boylston Street, which Boston Street runs straight into; ink seen: “BOYLSTON ST.”, “BOYLSTON STREET” [tr0010-175a, tr0014-097b, tr0017-143b, tr0021-136b, tr0035-092, tr0063-098-p1, tr0588-055]
- `boston-street` — Boston Street: carries the street's present name

### Boyd Street

- `boyd-street` — Boyd Street: attested on Boyd Street by another sheet; carries the street's present name; ink seen: “BOYD STREET”, “Boyd Street” [mr005-005, mr012-026, tr0122-053-p3]

### Boylston Street (runs straight into Boston Street, Huntley Drive)

- `figueroa-gov` — Figueroa Street: attested on Boylston Street by another sheet; attested on Huntley Drive, which Boylston Street runs straight into; ink seen: “FIGUEROA ST.”, “FIGUEROA STREET”, “Figueroa St”, “Figueroa St.”, “Figueroa Street” [mr003-046-p1, mr003-046-p2, mr005-069, mr006-115, mr006-391, mr006-429, mr007-026-p1, mr007-026-p2, mr012-025, mr016-059, mr066-035]
- `boylston` — Boylston Street: attested on Boylston Street by another sheet; attested on Huntley Drive, which Boylston Street runs straight into; carries the street's present name; ink seen: “BOYLSTON ST.”, “BOYLSTON STREET” [tr0001-052, tr0006-150a, tr0010-175a, tr0014-097b, tr0017-143b, tr0021-136b, tr0035-092, tr0063-098-p1, tr0588-055]
- `cummings-ave` — Cummings Avenue: attested on Boston Street, which Boylston Street runs straight into; ink seen: “Cummings ave.” [mr012-025]

### Broad Plaza

- no entity attested here yet — leave `name` out

### Broadway

- `eternity` — Eternity Street: attested on Broadway by another sheet; ink seen: “CALLE DE LA ETERNIDAD”, “ETERNITY ST.” [mr053-073]
- `fort-street` — Fort Street: attested on Broadway by another sheet; ink seen: “CALLE FORTIN”, “FORT STREET”, “Fort Street” [12685, mr001-489, mr053-067, mr053-068, mr053-069]
- `broadway` — Broadway: carries the street's present name

### Bunker Hill Avenue

- `montreal-st` — Montreal Street: attested on Bunker Hill Avenue by another sheet; ink seen: “Montreal St” [mr007-026-p1, mr007-062-p2]
- `bunker-hill-ave` — Bunker Hill Avenue: carries the street's present name

### Burlington Avenue

- `union-avenue` — Union Avenue: attested on Burlington Avenue by another sheet; ink seen: “Union Avenue” [mr007-036-p2]

### Centennial Street

- no entity attested here yet — leave `name` out

### Cesar E Chavez Avenue (runs straight into Sunset Boulevard)

- `short-street-chavez` — Short Street: attested on Cesar E Chavez Avenue by another sheet; ink seen: “C CORTA”, “SHORT ST”, “Short St” [mr003-240, mr053-073]
- `canal-and-reservoir-st` — Canal and Reservoir Street: attested on Cesar E Chavez Avenue by another sheet; attested on Sunset Boulevard, which Cesar E Chavez Avenue runs straight into; ink seen: “Canal and Reservoir Street” [mr007-026-p1]
- `sunset-boulevard` — Sunset Boulevard: attested on Sunset Boulevard, which Cesar E Chavez Avenue runs straight into; ink seen: “SUNSET BOULEVARD” [tr0063-098-p1]
- `cesar-e-chavez-avenue` — Cesar E Chavez Avenue: carries the street's present name

### Chavez Ravine Place

- no entity attested here yet — leave `name` out

### Chung King Court

- no entity attested here yet — leave `name` out

### Chung King Road

- no entity attested here yet — leave `name` out

### Cleveland Street

- `cleveland-st` — Cleveland Street: attested on Cleveland Street by another sheet; carries the street's present name; ink seen: “CLEVELAND ST.”, “CLEVELAND STREET”, “Cleveland St” [mr007-062-p2, tr0014-101a, tr0026-074, tr0771-036-p2]

### College Street

- `college` — College Street: attested on College Street by another sheet; carries the street's present name; ink seen: “CALLE DEL COLEGIO”, “COLLEGE ST”, “COLLEGE ST.”, “College St” [mr007-062-p2, mr053-073, tr0014-101a, tr0026-074]

### Colton Street

- `state-colton` — State Street: attested on Colton Street by another sheet; ink seen: “STATE STREET”, “State Street” [mr005-069, mr006-138]
- `colton-st` — Colton Street: attested on Colton Street by another sheet; carries the street's present name; ink seen: “COLTON ST.” [tr0014-097b, tr0017-143b, tr0021-136b]

### Columbia Avenue (runs straight into Crown Hill Avenue)

- `columbia-avenue` — Columbia Avenue: attested on Columbia Avenue by another sheet; carries the street's present name; ink seen: “COLUMBIA AVENUE”, “Columbia Ave”, “Columbia Avenue” [mr007-036-p2, mr037-078, tr0015-166a-p1, tr0015-179a, tr0062-063]
- `western-ave-colina-park` — Western Avenue: attested on Crown Hill Avenue, which Columbia Avenue runs straight into; ink seen: “Western Ave” [mr010-088]
- `crown-hill-ave` — Crown Hill Avenue: attested on Crown Hill Avenue, which Columbia Avenue runs straight into; ink seen: “CROWN HILL AVE.”, “Crown Hill Ave” [tr0015-166a-p1, tr0015-179a]
- `arch-st` — Arch Street: attested on Crown Hill Avenue, which Columbia Avenue runs straight into; ink seen: “Arch St” [mr007-036-p2]

### Community Terrace

- `court-house-street` — Court House Street: attested on Community Terrace by another sheet; ink seen: “COURT HOUSE STREET”, “Court House Street” [12685, mr001-489]

### Cortez Street

- no entity attested here yet — leave `name` out

### Council Street

- `council-street` — Council Street: attested on Council Street by another sheet; carries the street's present name; ink seen: “Council Street” [mr006-138]

### Court Street

- `court-street` — Court Street: attested on Court Street by another sheet; carries the street's present name; ink seen: “COURT ST.”, “COURT STREET”, “Court Street” [mr005-069, mr006-138, tr0014-097b]

### Crown Hill Avenue (runs straight into Columbia Avenue, Union Place)

- `western-ave-colina-park` — Western Avenue: attested on Crown Hill Avenue by another sheet; attested on Union Place, which Crown Hill Avenue runs straight into; ink seen: “Western Ave” [mr007-036-p2, mr010-062, mr010-088]
- `crown-hill-ave` — Crown Hill Avenue: attested on Crown Hill Avenue by another sheet; carries the street's present name; ink seen: “CROWN HILL AVE.”, “Crown Hill Ave” [tr0015-166a-p1, tr0015-179a]
- `arch-st` — Arch Street: attested on Crown Hill Avenue by another sheet; ink seen: “Arch St” [mr007-036-p2]
- `columbia-avenue` — Columbia Avenue: attested on Columbia Avenue, which Crown Hill Avenue runs straight into; ink seen: “COLUMBIA AVENUE”, “Columbia Ave”, “Columbia Avenue” [mr007-036-p2, mr037-078, tr0015-166a-p1, tr0015-179a, tr0062-063]
- `colina-ave` — Colina Avenue: attested on Union Place, which Crown Hill Avenue runs straight into; ink seen: “COLINA AVE.” [tr0024-055]

### Custer Avenue

- `custer-ave` — Custer Avenue: attested on Custer Avenue by another sheet; carries the street's present name; ink seen: “Custer ave” [mr007-026-p1]

### Dewap Road (runs straight into Figueroa Street)

- `figueroa-gov` — Figueroa Street: attested on Figueroa Street, which Dewap Road runs straight into; ink seen: “FIGUEROA ST.”, “FIGUEROA STREET”, “Figueroa St”, “Figueroa Street” [mr007-021, mr010-077, mr021-032, tr0034-004, tr1397-017-p5]
- `pearl` — Pearl Street: attested on Figueroa Street, which Dewap Road runs straight into; ink seen: “PEARL ST”, “PEARL STR.”, “PEARL STREET”, “Pearl”, “Pearl St”, “Pearl Street” [mr003-016, mr003-032, mr003-569, mr005-307-a, mr007-026-p1, mr007-026-p2, mr007-062-p2, mr010-030, mr021-087]
- `chapules` — Grasshopper Street: attested on Figueroa Street, which Dewap Road runs straight into; ink seen: “CALLE DE LAS CHAPULAS”, “CALLE DE LAS CHAPULES”, “GRASSHOPPER ST”, “GRASSHOPPER ST.”, “GRASSHOPPER STREET”, “Grasshopper St.” [12685, mr001-462, mr053-067, mr053-068]

### Diamond Street

- `diamond-street` — Diamond Street: attested on Diamond Street by another sheet; carries the street's present name; ink seen: “Diamond St”, “Diamond St.” [mr006-115, mr007-026-p2]

### Douglas Street

- `waters-street` — Waters Street: attested on Douglas Street by another sheet; ink seen: “Waters Street” [mr006-138]

### Edgeware Road

- `new-cincinnati-st` — New Cincinnati Street: attested on Edgeware Road by another sheet; ink seen: “New Cincinnati St” [mr012-025]
- `alabama-street` — Alabama Street: attested on Edgeware Road by another sheet; ink seen: “ALABAMA STREET”, “Alabama Street” [mr005-069]
- `edgeware` — Edgeware Road: carries the street's present name

### Emerald Drive

- `farmer` — Farmer Street: attested on Emerald Drive by another sheet; ink seen: “FARMER ST.”, “Farmer St.” [mr006-115, tr0015-166a-p2]

### Emerald Street

- `emerald` — Emerald Street: attested on Emerald Street by another sheet; carries the street's present name; ink seen: “EMERALD ST.”, “EMERALD STREET”, “Emerald St”, “Emerald St.” [mr006-115, mr010-081, tr0417-049-p2, tr0713-093-p2]

### Figueroa Street (runs straight into Alpine Street, Dewap Road)

- `figueroa-gov` — Figueroa Street: attested on Figueroa Street by another sheet; carries the street's present name; ink seen: “FIGUEROA ST.”, “FIGUEROA STREET”, “Figueroa St”, “Figueroa Street” [mr007-021, mr010-077, mr021-032, tr0034-004, tr1397-017-p5]
- `pearl` — Pearl Street: attested on Figueroa Street by another sheet; ink seen: “PEARL ST”, “PEARL STR.”, “PEARL STREET”, “Pearl”, “Pearl St”, “Pearl Street” [mr003-016, mr003-032, mr003-569, mr005-307-a, mr007-026-p1, mr007-026-p2, mr007-062-p2, mr010-030, mr021-087]
- `chapules` — Grasshopper Street: attested on Figueroa Street by another sheet; ink seen: “CALLE DE LAS CHAPULAS”, “CALLE DE LAS CHAPULES”, “GRASSHOPPER ST”, “GRASSHOPPER ST.”, “GRASSHOPPER STREET”, “Grasshopper St.” [12685, mr001-462, mr053-067, mr053-068]
- `virgin` — Virgin Street: attested on Alpine Street, which Figueroa Street runs straight into; ink seen: “CALLE DE LAS VIRGENES”, “VIRGIN ST”, “Virgin St”, “Virgin street” [mr007-062-p2, mr053-073, ord-1887-08-22]
- `alpine` — Alpine Street: attested on Alpine Street, which Figueroa Street runs straight into; ink seen: “ALPINE STREET” [tr0771-036-p2]

### Figueroa Terrace

- `pearl` — Pearl Street: attested on Figueroa Terrace by another sheet; ink seen: “Pearl St” [mr007-062-p2]

### Firmin Street

- `fireman-st` — Fireman Street: attested on Firmin Street by another sheet; ink seen: “Fireman St” [mr007-026-p2]

### Flower Street (runs straight into 3rd Street, Hope Street)

- `flower` — Flower Street: attested on Flower Street by another sheet; carries the street's present name; ink seen: “CALLE DE LAS FLORES”, “FLOWER”, “FLOWER STR.”, “FLOWER STREET”, “Flower St”, “Flower St.”, “Flower Street” [12685, mr001-462, mr003-016, mr003-032, mr003-033, mr007-021, mr021-032, mr053-067, mr053-068]
- `third-street` — 3rd Street: attested on 3rd Street, which Flower Street runs straight into; ink seen: “3RD ST”, “3RD ST.”, “3RD STREET”, “3d Street”, “CALLE 3a”, “THIRD ST.”, “THIRD STREET”, “Third St”, “Third Street” [12685, mr001-489, mr016-059, mr030-009-p5, mr053-069, mr053-071, tr0001-052, tr0006-150a, tr0013-168-p1, tr0116-085-p1, tr0122-053-p3, tr0926-086-p2]
- `arnold` — Arnold Street: attested on 3rd Street, which Flower Street runs straight into; ink seen: “ARNOLD ST”, “ARNOLD ST.”, “Arnold St”, “Arnold Street” [mr003-046-p1, mr006-427, mr007-036-p2, mr007-096-p2, mr037-078, mr066-035, tr0001-057a]
- `crown-hill-ave` — Crown Hill Avenue: attested on 3rd Street, which Flower Street runs straight into; ink seen: “CROWN HILL AVE.” [tr0015-166a-p1, tr0015-166a-p2]
- `georgia-east` — Georgia Street: attested on 3rd Street, which Flower Street runs straight into; ink seen: “GEORGIA ST”, “Georgia St”, “Georgie Street.” [mr002-092-p2, mr003-060-p2, mr013-087-p1, mr030-009-p5]
- `atchison-st` — Atchison Street: attested on 3rd Street, which Flower Street runs straight into; ink seen: “ATCHISON ST.” [mr024-081]
- `morgan-lane` — Morgan Lane: attested on 3rd Street, which Flower Street runs straight into; ink seen: “Morgan Lane” [mr005-005]
- `hope` — Hope Street: attested on Hope Street, which Flower Street runs straight into; ink seen: “CALLE DE LAS ESPERANZAS”, “HOPE ST.”, “HOPE STREET”, “Hope St”, “Hope St.”, “Hope Street” [12685, mr001-462, mr001-489, mr003-033, mr007-021, mr021-032, mr053-067, mr053-068]

### Fort Moore Place

- no entity attested here yet — leave `name` out

### Frances K. Hashimoto Plaza

- no entity attested here yet — leave `name` out

### Francisco Street

- `francisco` — Francisco Street: attested on Francisco Street by another sheet; carries the street's present name; ink seen: “FRANCISCO STREET” [tr0718-007-p2, tr1397-017-p5]
- `moore-st` — Moore Street: attested on Francisco Street by another sheet; ink seen: “MOORE ST”, “Moore Street” [mr003-569, mr021-087]

### Fremont Avenue (runs straight into 6th Street)

- `beaudry-st` — Beaudry Street: attested on Fremont Avenue by another sheet; ink seen: “Beaudry St” [mr007-026-p1, mr007-026-p2]
- `sixth-street` — 6th Street: attested on 6th Street, which Fremont Avenue runs straight into; ink seen: “6TH ST”, “6TH ST.”, “6TH STREET”, “6th St”, “CALLE 6a”, “SIXTH”, “SIXTH ST.”, “SIXTH STR.”, “SIXTH STREET”, “Sixth St”, “Sixth St Extension.”, “Sixth St.”, “proposed line of Sixth Street.” [mr001-462, mr003-016, mr003-166-p1, mr003-569, mr006-033, mr011-042, mr030-009-p1, mr030-009-p2, mr030-009-p3, mr052-085, mr053-068, mr053-071, mr078-055, mr084-053, tr0002-037a, tr0007-078a, tr0009-075, tr0009-100a, tr0010-175a, tr0012-101, tr0014-087a, tr0023-066, tr0159-032-p2, tr0273-017, tr0319-001-p1]
- `ward-st` — Ward Street: attested on 6th Street, which Fremont Avenue runs straight into; ink seen: “WARD ST”, “WARD ST.”, “Ward St”, “Ward Street” [mr003-046-p2, mr003-569, mr006-427, mr007-036-p2, mr007-096-p2, mr018-063]

### Garland Avenue

- `holmes-st` — Holmes Street: attested on Garland Avenue by another sheet; ink seen: “Holmes St.” [mr006-193]
- `garland` — Garland Avenue: attested on Garland Avenue by another sheet; carries the street's present name; ink seen: “GARLAND AVENUE” [mr060-088, tr0030-069]

### General Thaddeus Kosciuszko Way (runs straight into 2nd Place)

- no entity attested here yet — leave `name` out

### Georgia Street

- `nevada-1886` — Nevada Street: attested on Georgia Street by another sheet; ink seen: “Nevada”, “Nevada St”, “Nevado St” [mr010-030, mr010-077]
- `georgia-bell` — Georgia Street: attested on Georgia Street by another sheet; ink seen: “Georgia Street” [tr0030-086]

### Gin Ling Way

- no entity attested here yet — leave `name` out

### Glendale Boulevard (runs straight into 2nd Street, Lucas Avenue, Patton Street)

- `lake-avenue` — Lake Avenue: attested on Glendale Boulevard by another sheet; ink seen: “Lake Avenue” [mr006-138]
- `second-street` — 2nd Street: attested on 2nd Street, which Glendale Boulevard runs straight into; ink seen: “2D ST”, “2ND ST.”, “2ND STREET”, “2nd STREET”, “CALLE 2a”, “SECOND ST.”, “SECOND STREET”, “Second Street”, “W. 2ND ST.”, “W. 2ND STREET” [12685, mr001-489, mr005-307-a, mr007-056, mr053-069, mr053-071, tr0001-052, tr0006-150a, tr0015-166a-p1, tr0015-166a-p2, tr0016-005, tr0017-001b, tr0034-065, tr0035-022, tr0062-063, tr0116-085-p1, tr0417-049-p2, tr0713-093-p2, tr0856-050-p2, tr0885-030-p2, tr0926-086-p2, tr0938-051-p3, tr1339-069-p3]
- `lake-shore-ave` — Lake Shore Avenue: attested on 2nd Street, which Glendale Boulevard runs straight into; ink seen: “Lake Shore Ave” [mr010-081]
- `guadalupe` — Guadalupe Street: attested on 2nd Street, which Glendale Boulevard runs straight into; ink seen: “GUADALUPE ST”, “Guadalupe Street” [mr002-092-p1, mr002-092-p2, mr003-060-p1, mr003-060-p2]
- `silver-st` — Silver Street: attested on 2nd Street, which Glendale Boulevard runs straight into; ink seen: “Silver St” [mr007-036-p2, mr007-056]
- `clementina-street` — Clementina Street: attested on 2nd Street, which Glendale Boulevard runs straight into; ink seen: “Clementina Street” [mr017-041]
- `topeka-st` — Topeka Street: attested on 2nd Street, which Glendale Boulevard runs straight into; ink seen: “TOPEKA ST.” [mr024-081]
- `northern-ave` — Northern Avenue: attested on 2nd Street, which Glendale Boulevard runs straight into; ink seen: “Northern Ave” [mr010-062]
- `north-ave` — North Avenue: attested on 2nd Street, which Glendale Boulevard runs straight into; ink seen: “North Ave” [mr007-036-p2]
- `lucas-avenue` — Lucas Avenue: attested on Lucas Avenue, which Glendale Boulevard runs straight into; ink seen: “LUCAS”, “LUCAS AVE.”, “LUCAS AVENUE”, “Lucas”, “Lucas Ave”, “Lucas Avenue” [mr006-115, mr006-427, mr007-056, mr007-096-p2, mr010-081, mr018-063, mr052-085, mr055-014, tr0001-057a, tr0002-037a, tr0014-087a, tr0015-166a-p2, tr0030-069, tr0034-065]
- `patton-street` — Patton Street: attested on Patton Street, which Glendale Boulevard runs straight into; ink seen: “Patton Street” [mr006-138]

### Golden Avenue

- `willow-golden` — Willow Street: attested on Golden Avenue by another sheet; ink seen: “Willow Street” [mr005-405]
- `golden-avenue` — Golden Avenue: carries the street's present name

### Grand Avenue (runs straight into Grand Avenue Lower Level)

- `charity` — Charity Street: attested on Grand Avenue by another sheet; attested on Grand Avenue Lower Level, which Grand Avenue runs straight into; ink seen: “CALLE DE CARIDAD”, “CHARITY”, “CHARITY ST.”, “CHARITY STREET”, “Charity St”, “Charity St.”, “Charity Street” [12685, mr001-462, mr001-489, mr003-038-p1, mr005-573, mr007-021, mr053-067, mr053-068]
- `grand-ave` — Grand Avenue: attested on Grand Avenue by another sheet; carries the street's present name; ink seen: “GRAND AV.” [mr084-053]
- `philadelphia-st` — Philadelphia Street: attested on Grand Avenue by another sheet; ink seen: “Philadelphia St” [mr007-026-p1, mr007-062-p2]

### Grand Avenue Lower Level (runs straight into Grand Avenue)

- `charity` — Charity Street: attested on Grand Avenue Lower Level by another sheet; attested on Grand Avenue, which Grand Avenue Lower Level runs straight into; ink seen: “CALLE DE CARIDAD”, “CHARITY”, “CHARITY ST.”, “CHARITY STREET”, “Charity St”, “Charity St.”, “Charity Street” [12685, mr001-462, mr001-489, mr003-038-p1, mr005-573, mr007-021, mr053-067, mr053-068]
- `grand-ave` — Grand Avenue: attested on Grand Avenue, which Grand Avenue Lower Level runs straight into; ink seen: “GRAND AV.” [mr084-053]
- `philadelphia-st` — Philadelphia Street: attested on Grand Avenue, which Grand Avenue Lower Level runs straight into; ink seen: “Philadelphia St” [mr007-026-p1, mr007-062-p2]

### Harbor Freeway (runs straight into Arroyo Seco Parkway)

- no entity attested here yet — leave `name` out

### Hartford Avenue

- `fourth-street` — 4th Street: attested on Hartford Avenue by another sheet; ink seen: “Fourth St” [mr007-096-p2]
- `hartford-ave` — Hartford Avenue: carries the street's present name

### Hill Place

- `rosas-street` — Rosas Street: attested on Hill Place by another sheet; ink seen: “Rosas St”, “Rosas Street” [mr003-240, mr007-062-p2]
- `hill-place` — Hill Place: attested on Hill Place by another sheet; carries the street's present name; ink seen: “HILL PLACE” [tr0771-036-p2]

### Hill Street (runs straight into Castelar Street)

- `castelar` — Castelar Street: attested on Hill Street by another sheet; ink seen: “Castellar Street” [mr003-240]
- `bull` — Bull Street: attested on Hill Street by another sheet; ink seen: “BULL ST.”, “CALLE DEL TORO” [mr053-073]
- `hill-street-downtown` — Hill Street: attested on Hill Street by another sheet; carries the street's present name; ink seen: “CALLE LOMA”, “HILL ST”, “HILL STREET”, “Hill Street” [12685, mr001-489, mr003-038-p1, mr003-038-p2, mr005-105, mr005-573, mr053-067, mr053-068, mr053-069]

### Hollywood Freeway (runs straight into Santa Ana Freeway)

- no entity attested here yet — leave `name` out

### Hope Place (runs straight into Hope Street)

- `hope` — Hope Street: attested on Hope Street, which Hope Place runs straight into; ink seen: “CALLE DE LAS ESPERANZAS”, “HOPE ST.”, “HOPE STREET”, “Hope St”, “Hope St.”, “Hope Street” [12685, mr001-462, mr001-489, mr003-033, mr007-021, mr021-032, mr053-067, mr053-068]

### Hope Street (runs straight into Flower Street, Hope Place)

- `hope` — Hope Street: attested on Hope Street by another sheet; carries the street's present name; ink seen: “CALLE DE LAS ESPERANZAS”, “HOPE ST.”, “HOPE STREET”, “Hope St”, “Hope St.”, “Hope Street” [12685, mr001-462, mr001-489, mr003-033, mr007-021, mr021-032, mr053-067, mr053-068]
- `flower` — Flower Street: attested on Flower Street, which Hope Street runs straight into; ink seen: “CALLE DE LAS FLORES”, “FLOWER”, “FLOWER STR.”, “FLOWER STREET”, “Flower St”, “Flower St.”, “Flower Street” [12685, mr001-462, mr003-016, mr003-032, mr003-033, mr007-021, mr021-032, mr053-067, mr053-068]

### Huntley Drive (runs straight into Boylston Street)

- `boylston` — Boylston Street: attested on Huntley Drive by another sheet; attested on Boylston Street, which Huntley Drive runs straight into; ink seen: “BOYLSTON ST.”, “BOYLSTON STREET” [tr0001-052, tr0006-150a, tr0010-175a, tr0014-097b, tr0017-143b, tr0021-136b, tr0035-092, tr0063-098-p1, tr0588-055]
- `figueroa-gov` — Figueroa Street: attested on Huntley Drive by another sheet; attested on Boylston Street, which Huntley Drive runs straight into; ink seen: “FIGUEROA ST.”, “FIGUEROA STREET”, “Figueroa St”, “Figueroa St.”, “Figueroa Street” [mr003-046-p1, mr003-046-p2, mr005-069, mr006-115, mr006-391, mr006-429, mr007-026-p1, mr007-026-p2, mr012-025, mr016-059, mr066-035]
- `huntley-drive` — Huntley Drive: carries the street's present name

### Ingraham Street

- `ingraham` — Ingraham Street: attested on Ingraham Street by another sheet; carries the street's present name; ink seen: “INGRAHAM ST.”, “INGRAHAM STREET”, “INGRAM STREET”, “Ingraham Street” [mr005-566, mr009-095, mr055-014, tr0030-069]
- `ventura-ingraham` — Ventura Street: attested on Ingraham Street by another sheet; ink seen: “Ventura Street” [mr018-063]

### James M Wood Boulevard (runs straight into 8th Place, 9th Street)

- `ninth-street` — 9th Street: attested on James M Wood Boulevard by another sheet; attested on 8th Place, which James M Wood Boulevard runs straight into; attested on 9th Street, which James M Wood Boulevard runs straight into; ink seen: “9TH STREET”, “9th St.”, “9th Street”, “CALLE 9a”, “East 9th Street”, “NINTH ST”, “NINTH STREET”, “Ninth St.”, “Ninth Street”, “Ninth Street Extension” [11824, mr003-569, mr005-405, mr006-193, mr011-008, mr016-027, mr026-059, mr029-085, mr053-063, mr053-065, mr053-067, mr053-068, mr055-086, tr0001-037, tr0001-038a, tr0005-065]
- `ruby-st` — Ruby Street: attested on 8th Place, which James M Wood Boulevard runs straight into; ink seen: “RUBY ST” [mr003-569]
- `lincoln-place` — Lincoln Place: attested on 8th Place, which James M Wood Boulevard runs straight into; ink seen: “Lincoln Place” [mr006-193]
- `lincoln-street` — Lincoln Street: attested on 8th Place, which James M Wood Boulevard runs straight into; ink seen: “Lincoln Street” [mr021-087]
- `moran-s-lane` — Moran's Lane: attested on 9th Street, which James M Wood Boulevard runs straight into; ink seen: “Moran's Lane” [11824]
- `james-m-wood-boulevard` — James M Wood Boulevard: carries the street's present name

### Jerry Moss Plaza

- no entity attested here yet — leave `name` out

### Kensington Road

- `holliday-st` — Holliday Street: attested on Kensington Road by another sheet; ink seen: “Holliday St” [mr012-025]

### Lake Shore Terrace

- `hobart-street` — Hobart Street: attested on Lake Shore Terrace by another sheet; ink seen: “Hobart Street” [mr006-138]

### Laveta Terrace

- no entity attested here yet — leave `name` out

### Lei Min Way

- no entity attested here yet — leave `name` out

### Linwood Avenue

- no entity attested here yet — leave `name` out

### Loma Drive (runs straight into 2nd Street, 4th Street, Belmont Avenue)

- `belmont-ave` — Belmont Avenue: attested on Loma Drive by another sheet; ink seen: “Belmont Ave” [mr010-088]
- `loma-drive` — Loma Drive: attested on Loma Drive by another sheet; carries the street's present name; ink seen: “LOMA DRIVE”, “Loma Drive” [mr007-036-p2, tr0015-179a]
- `second-street` — 2nd Street: attested on 2nd Street, which Loma Drive runs straight into; ink seen: “2D ST”, “2ND ST.”, “2ND STREET”, “2nd STREET”, “CALLE 2a”, “SECOND ST.”, “SECOND STREET”, “Second Street”, “W. 2ND ST.”, “W. 2ND STREET” [12685, mr001-489, mr005-307-a, mr007-056, mr053-069, mr053-071, tr0001-052, tr0006-150a, tr0015-166a-p1, tr0015-166a-p2, tr0016-005, tr0017-001b, tr0034-065, tr0035-022, tr0062-063, tr0116-085-p1, tr0417-049-p2, tr0713-093-p2, tr0856-050-p2, tr0885-030-p2, tr0926-086-p2, tr0938-051-p3, tr1339-069-p3]
- `lake-shore-ave` — Lake Shore Avenue: attested on 2nd Street, which Loma Drive runs straight into; ink seen: “Lake Shore Ave” [mr010-081]
- `guadalupe` — Guadalupe Street: attested on 2nd Street, which Loma Drive runs straight into; ink seen: “GUADALUPE ST”, “Guadalupe Street” [mr002-092-p1, mr002-092-p2, mr003-060-p1, mr003-060-p2]
- `silver-st` — Silver Street: attested on 2nd Street, which Loma Drive runs straight into; ink seen: “Silver St” [mr007-036-p2, mr007-056]
- `clementina-street` — Clementina Street: attested on 2nd Street, which Loma Drive runs straight into; ink seen: “Clementina Street” [mr017-041]
- `topeka-st` — Topeka Street: attested on 2nd Street, which Loma Drive runs straight into; ink seen: “TOPEKA ST.” [mr024-081]
- `northern-ave` — Northern Avenue: attested on 2nd Street, which Loma Drive runs straight into; ink seen: “Northern Ave” [mr010-062]
- `north-ave` — North Avenue: attested on 2nd Street, which Loma Drive runs straight into; ink seen: “North Ave” [mr007-036-p2]
- `fourth-street` — 4th Street: attested on 4th Street, which Loma Drive runs straight into; ink seen: “4TH ST”, “4TH ST.”, “4TH STREET”, “CALLE 4a”, “FOURTH ST.”, “FOURTH STREET”, “Fourth St”, “Fourth Street” [12685, mr001-489, mr003-046-p1, mr005-005, mr006-427, mr007-096-p2, mr012-026, mr030-009-p4, mr030-009-p5, mr053-068, mr053-069, mr053-071, tr0012-186, tr0013-168-p1, tr0122-053-p3, tr0751-038]
- `huber-st` — Huber Street: attested on 4th Street, which Loma Drive runs straight into; ink seen: “HUBER ST.”, “Huber St”, “Huber St.” [mr012-042, mr013-087-p1, mr030-009-p4]
- `acacia-st` — Acacia Street: attested on 4th Street, which Loma Drive runs straight into; ink seen: “ACACIA ST.”, “Acacia St” [mr007-036-p2, tr0024-055]
- `third-street` — 3rd Street: attested on 4th Street, which Loma Drive runs straight into; ink seen: “THIRD” [mr013-087-p1]
- `aztec-avenue` — Aztec Avenue: attested on Belmont Avenue, which Loma Drive runs straight into; ink seen: “Aztec Avenue” [mr006-138]
- `texas-st` — Texas Street: attested on Belmont Avenue, which Loma Drive runs straight into; ink seen: “TEXAS ST” [mr007-036-p2]

### Loma Place

- no entity attested here yet — leave `name` out

### Los Angeles Street

- `los-angeles-street` — Los Angeles Street: attested on Los Angeles Street by another sheet; carries the street's present name; ink seen: “LOS ANGELES ST.”, “LOS ANGELES STREET”, “Los Angeles St.”, “Los Angeles Street” [12017, mr003-146-p2, mr005-005, mr005-110, mr006-308, mr006-378, mr011-063, mr011-094, mr012-026, mr029-026, mr039-069, mr053-016, mr053-063, oldplaza1873, tr0009-100a, tr0016-005, tr0856-050-p2]

### Lucas Avenue (runs straight into 2nd Street, Glendale Boulevard)

- `lucas-avenue` — Lucas Avenue: attested on Lucas Avenue by another sheet; carries the street's present name; ink seen: “LUCAS”, “LUCAS AVE.”, “LUCAS AVENUE”, “Lucas”, “Lucas Ave”, “Lucas Avenue” [mr006-115, mr006-427, mr007-056, mr007-096-p2, mr010-081, mr018-063, mr052-085, mr055-014, tr0001-057a, tr0002-037a, tr0014-087a, tr0015-166a-p2, tr0030-069, tr0034-065]
- `second-street` — 2nd Street: attested on 2nd Street, which Lucas Avenue runs straight into; ink seen: “2D ST”, “2ND ST.”, “2ND STREET”, “2nd STREET”, “CALLE 2a”, “SECOND ST.”, “SECOND STREET”, “Second Street”, “W. 2ND ST.”, “W. 2ND STREET” [12685, mr001-489, mr005-307-a, mr007-056, mr053-069, mr053-071, tr0001-052, tr0006-150a, tr0015-166a-p1, tr0015-166a-p2, tr0016-005, tr0017-001b, tr0034-065, tr0035-022, tr0062-063, tr0116-085-p1, tr0417-049-p2, tr0713-093-p2, tr0856-050-p2, tr0885-030-p2, tr0926-086-p2, tr0938-051-p3, tr1339-069-p3]
- `lake-shore-ave` — Lake Shore Avenue: attested on 2nd Street, which Lucas Avenue runs straight into; ink seen: “Lake Shore Ave” [mr010-081]
- `guadalupe` — Guadalupe Street: attested on 2nd Street, which Lucas Avenue runs straight into; ink seen: “GUADALUPE ST”, “Guadalupe Street” [mr002-092-p1, mr002-092-p2, mr003-060-p1, mr003-060-p2]
- `silver-st` — Silver Street: attested on 2nd Street, which Lucas Avenue runs straight into; ink seen: “Silver St” [mr007-036-p2, mr007-056]
- `clementina-street` — Clementina Street: attested on 2nd Street, which Lucas Avenue runs straight into; ink seen: “Clementina Street” [mr017-041]
- `topeka-st` — Topeka Street: attested on 2nd Street, which Lucas Avenue runs straight into; ink seen: “TOPEKA ST.” [mr024-081]
- `northern-ave` — Northern Avenue: attested on 2nd Street, which Lucas Avenue runs straight into; ink seen: “Northern Ave” [mr010-062]
- `north-ave` — North Avenue: attested on 2nd Street, which Lucas Avenue runs straight into; ink seen: “North Ave” [mr007-036-p2]
- `lake-avenue` — Lake Avenue: attested on Glendale Boulevard, which Lucas Avenue runs straight into; ink seen: “Lake Avenue” [mr006-138]

### Main Street

- `main-street-dtla` — Main Street: attested on Main Street by another sheet; carries the street's present name; ink seen: “CALLE PRINCIPAL”, “MAIN ST.”, “MAIN STREET”, “Main St.”, “Main Street” [11824, 12017, mr003-038-p2, mr005-105, mr005-110, mr006-378, mr011-094, mr012-026, mr029-026, mr053-016, mr053-063, mr053-068, mr053-069, mr053-071, oldplaza1873, tr0014-200a]

### Marketplace

- no entity attested here yet — leave `name` out

### Maryland Street

- `potts-st` — Potts Street: attested on Maryland Street by another sheet; ink seen: “POTTS ST.” [mr003-046-p1, mr003-046-p2]
- `strelitz-st` — Strelitz Street: attested on Maryland Street by another sheet; ink seen: “STRELITZ ST.” [mr006-427]
- `maryland-street` — Maryland Street: attested on Maryland Street by another sheet; carries the street's present name; ink seen: “MARYLAND STREET” [tr0588-055]

### Mei Ling Way

- no entity attested here yet — leave `name` out

### Metro Red/Purple Lines Entrance (runs straight into 1st Street)

- `first-street` — 1st Street: attested on 1st Street, which Metro Red/Purple Lines Entrance runs straight into; ink seen: “1ST ST”, “1ST STREET”, “1st ST”, “1st STREET”, “CALLE 1a”, “FIRST ST”, “FIRST ST.”, “FIRST STREET”, “FIRST STREET.”, “First Street” [12685, mr001-489, mr002-092-p1, mr003-060-p1, mr003-146-p1, mr004-012-p2, mr005-307-a, mr006-308, mr010-008, mr017-041, mr024-081, mr053-069, mr053-071, tr0012-023a, tr0013-168-p1, tr0043-032, tr0116-085-p1, tr0122-053-p3, tr0221-009-p2, tr0417-049-p2, tr0713-093-p2, tr0856-050-p2, tr0885-030-p2, tr1339-069-p3]
- `diamond-street` — Diamond Street: attested on 1st Street, which Metro Red/Purple Lines Entrance runs straight into; ink seen: “DIAMOND STREET”, “Diamond”, “Diamond St”, “Diamond St.” [mr005-069, mr006-115, mr007-026-p2, mr007-056]

### Mignonette Street

- `mignonette-st` — Mignonette Street: attested on Mignonette Street by another sheet; carries the street's present name; ink seen: “Mignonette St” [mr007-026-p2]

### Miramar Street (runs straight into 3rd Street)

- `third-street` — 3rd Street: attested on Miramar Street by another sheet; attested on 3rd Street, which Miramar Street runs straight into; ink seen: “3RD ST”, “3RD ST.”, “3RD STREET”, “3d Street”, “CALLE 3a”, “THIRD ST.”, “THIRD STREET”, “Third St”, “Third Street”, “W. 3RD STREET” [12685, mr001-489, mr003-046-p1, mr016-059, mr030-009-p5, mr053-069, mr053-071, mr066-035, tr0001-052, tr0006-150a, tr0013-168-p1, tr0015-166a-p1, tr0015-166a-p2, tr0035-092, tr0062-063, tr0116-085-p1, tr0122-053-p3, tr0926-086-p2]
- `seminary` — Seminary Street: attested on Miramar Street by another sheet; ink seen: “Seminary Street” [mr006-115]
- `arnold` — Arnold Street: attested on 3rd Street, which Miramar Street runs straight into; ink seen: “ARNOLD ST”, “ARNOLD ST.”, “Arnold St”, “Arnold Street” [mr003-046-p1, mr006-427, mr007-036-p2, mr007-096-p2, mr037-078, mr066-035, tr0001-057a]
- `crown-hill-ave` — Crown Hill Avenue: attested on 3rd Street, which Miramar Street runs straight into; ink seen: “CROWN HILL AVE.” [tr0015-166a-p1, tr0015-166a-p2]
- `georgia-east` — Georgia Street: attested on 3rd Street, which Miramar Street runs straight into; ink seen: “GEORGIA ST”, “Georgia St”, “Georgie Street.” [mr002-092-p2, mr003-060-p2, mr013-087-p1, mr030-009-p5]
- `atchison-st` — Atchison Street: attested on 3rd Street, which Miramar Street runs straight into; ink seen: “ATCHISON ST.” [mr024-081]
- `morgan-lane` — Morgan Lane: attested on 3rd Street, which Miramar Street runs straight into; ink seen: “Morgan Lane” [mr005-005]
- `miramar-street` — Miramar Street: carries the street's present name

### Mountain View Avenue

- no entity attested here yet — leave `name` out

### New Depot Street (runs straight into Adobe Street)

- `new-depot-st` — New Depot Street: attested on New Depot Street by another sheet; carries the street's present name; ink seen: “New Depot St” [mr007-062-p2]
- `adobe` — Adobe Street: attested on Adobe Street, which New Depot Street runs straight into; ink seen: “ADOBE ST.”, “CALLE DE LAS ADOBES” [mr053-073, tr0026-074]

### New High Street (runs straight into Spring Street)

- `main-street-dtla` — Main Street: attested on Spring Street, which New High Street runs straight into; ink seen: “CALLE PRINCIPAL”, “MAIN STREET” [mr053-073, oldplaza1873]
- `spring` — Spring Street: attested on Spring Street, which New High Street runs straight into; ink seen: “CALLE PRIMAVERA”, “SPRING STREET”, “Spring Street” [11824, mr053-067, mr053-068, mr053-069]

### Olive Court

- `olive` — Olive Street: attested on Olive Court by another sheet; ink seen: “OLIVE STREET”, “Olive Street” [12685, mr001-489]

### Olive Street

- `olive` — Olive Street: attested on Olive Street by another sheet; carries the street's present name; ink seen: “CALLE ACEYTUNA”, “OLIVE ST.”, “OLIVE STREET”, “Olive St.”, “Olive Street” [12685, mr001-462, mr001-489, mr005-573, mr053-067, mr053-068]
- `elm-street` — Elm Street: attested on Olive Street by another sheet; ink seen: “ELM STREET” [mr003-038-p1]

### Olympic Boulevard

- `tenth-street` — 10th Street: attested on Olympic Boulevard by another sheet; ink seen: “TENTH STREET”, “Tenth Street” [mr003-032, mr003-033, mr016-027, mr053-063, tr0001-038a]
- `ninth-street` — 9th Street: attested on Olympic Boulevard by another sheet; ink seen: “East 9th Street”, “NINTH STREET” [mr026-059, mr037-087, tr0105-001-p2, tr0141-011]
- `olympic-boulevard` — Olympic Boulevard: carries the street's present name

### Ord Street (runs straight into Yale Street)

- `high-street-chinatown` — High Street: attested on Ord Street by another sheet; ink seen: “CALLE ALTA”, “HIGH ST”, “High St” [mr003-240, mr053-073, oldplaza1873]
- `ord-street` — Ord Street: attested on Ord Street by another sheet; carries the street's present name; ink seen: “ORD ST.”, “ORD STREET” [tr0014-200a, tr0771-036-p2]
- `yale` — Yale Street: attested on Yale Street, which Ord Street runs straight into; ink seen: “YALE ST.”, “YALE STREET”, “Yale St”, “Yale Street” [mr003-240, mr007-062-p2, tr0014-101a, tr0026-074, tr0771-036-p2]
- `hornet` — Hornet Street: attested on Yale Street, which Ord Street runs straight into; ink seen: “CALLE DE LAS AVISPAS”, “HORNET ST.” [mr053-073]

### Patton Street (runs straight into Glendale Boulevard)

- `patton-street` — Patton Street: attested on Patton Street by another sheet; carries the street's present name; ink seen: “Patton Street” [mr006-138]
- `lake-avenue` — Lake Avenue: attested on Glendale Boulevard, which Patton Street runs straight into; ink seen: “Lake Avenue” [mr006-138]

### Pizarro Street

- no entity attested here yet — leave `name` out

### Rockwood Street

- `home-street` — Home Street: attested on Rockwood Street by another sheet; ink seen: “Home Street” [mr006-138]
- `rockwood-street` — Rockwood Street: carries the street's present name

### Saint Paul Avenue

- `st-paul-avenue` — St. Paul Avenue: attested on Saint Paul Avenue by another sheet; ink seen: “ST. PAUL AVENUE” [mr078-055]

### Saint Paul Place

- no entity attested here yet — leave `name` out

### San Pedro Street (runs straight into Judge John Aiso Street)

- `san-pedro` — San Pedro Street: attested on San Pedro Street by another sheet; attested on Judge John Aiso Street, which San Pedro Street runs straight into; carries the street's present name; ink seen: “SAN PEDRO ST”, “SAN PEDRO ST.”, “SAN PEDRO STREET”, “San Pedro Ave”, “San Pedro St.”, “San Pedro Street” [12017, mr005-005, mr005-307-b, mr006-039, mr006-378, mr011-008, mr012-064, mr014-034, mr030-009-p2, mr030-009-p3, mr030-009-p4, mr030-009-p5, mr053-065, mr066-064, tr0012-023a, tr0013-048, tr0017-001b, tr0035-022, tr0938-051-p3]
- `wilmington-street` — Wilmington Street: attested on Judge John Aiso Street, which San Pedro Street runs straight into; ink seen: “WILMINGTON”, “WILMINGTON ST.”, “Wilmington” [mr003-146-p1, mr003-146-p2, mr006-308, mr010-008]

### Santa Ana Freeway (runs straight into Hollywood Freeway)

- no entity attested here yet — leave `name` out

### Shatto Street

- `sixth-street` — 6th Street: attested on Shatto Street by another sheet; ink seen: “Sixth Street” [mr018-063]
- `shatto-st` — Shatto Street: carries the street's present name

### Spring Street (runs straight into New High Street)

- `main-street-dtla` — Main Street: attested on Spring Street by another sheet; ink seen: “CALLE PRINCIPAL”, “MAIN STREET” [mr053-073, oldplaza1873]
- `spring` — Spring Street: attested on Spring Street by another sheet; carries the street's present name; ink seen: “CALLE PRIMAVERA”, “SPRING STREET”, “Spring Street” [11824, mr053-067, mr053-068, mr053-069]

### Stadium Way

- no entity attested here yet — leave `name` out

### Sunbury Street

- no entity attested here yet — leave `name` out

### Sunset Boulevard (runs straight into Cesar E Chavez Avenue)

- `sunset-boulevard` — Sunset Boulevard: attested on Sunset Boulevard by another sheet; carries the street's present name; ink seen: “SUNSET BOULEVARD” [tr0063-098-p1]
- `canal-and-reservoir-st` — Canal and Reservoir Street: attested on Sunset Boulevard by another sheet; attested on Cesar E Chavez Avenue, which Sunset Boulevard runs straight into; ink seen: “Canal and Reservoir Street” [mr007-026-p1]
- `short-street-chavez` — Short Street: attested on Cesar E Chavez Avenue, which Sunset Boulevard runs straight into; ink seen: “C CORTA”, “SHORT ST”, “Short St” [mr003-240, mr053-073]

### Sunvue Place

- `sunvue-place` — Sunvue Place: attested on Sunvue Place by another sheet; carries the street's present name; ink seen: “SUNVUE PLACE” [tr0063-098-p1]

### Temple Street

- `turner-street` — Turner Street: attested on Temple Street by another sheet; ink seen: “TURNER ST.”, “Turner” [mr002-526-p2, tr0201-001-p2]
- `temple` — Temple Street: attested on Temple Street by another sheet; carries the street's present name; ink seen: “TEMPLE ST.”, “TEMPLE STREET”, “Temple St”, “Temple Street” [12685, mr001-489, mr006-391, mr006-429, mr007-026-p1, mr012-025]
- `requena-street` — Requena Street: attested on Temple Street by another sheet; ink seen: “REQUENA STREET” [mr003-146-p2]

### Toluca Street

- `brook-st` — Brook Street: attested on Toluca Street by another sheet; ink seen: “Brook St” [mr010-081]
- `virginia-st-angeleno-hgts` — Virginia Street: attested on Toluca Street by another sheet; ink seen: “Virginia St” [mr005-069]
- `toluca-street` — Toluca Street: carries the street's present name

### Toriumi Plaza

- `toriumi-plaza` — Toriumi Plaza: carries the street's present name

### Union Avenue (runs straight into 4th Street)

- `union-avenue` — Union Avenue: attested on Union Avenue by another sheet; carries the street's present name; ink seen: “UNION AVE.” [tr0024-055]
- `collado-st` — Collado Street: attested on Union Avenue by another sheet; ink seen: “Collado St” [mr007-036-p2, mr010-062]
- `union-st` — Union Street: attested on Union Avenue by another sheet; ink seen: “Union St” [mr007-036-p2]
- `fourth-street` — 4th Street: attested on 4th Street, which Union Avenue runs straight into; ink seen: “4TH ST”, “4TH ST.”, “4TH STREET”, “CALLE 4a”, “FOURTH ST.”, “FOURTH STREET”, “Fourth St”, “Fourth Street” [12685, mr001-489, mr003-046-p1, mr005-005, mr006-427, mr007-096-p2, mr012-026, mr030-009-p4, mr030-009-p5, mr053-068, mr053-069, mr053-071, tr0012-186, tr0013-168-p1, tr0122-053-p3, tr0751-038]
- `huber-st` — Huber Street: attested on 4th Street, which Union Avenue runs straight into; ink seen: “HUBER ST.”, “Huber St”, “Huber St.” [mr012-042, mr013-087-p1, mr030-009-p4]
- `acacia-st` — Acacia Street: attested on 4th Street, which Union Avenue runs straight into; ink seen: “ACACIA ST.”, “Acacia St” [mr007-036-p2, tr0024-055]
- `third-street` — 3rd Street: attested on 4th Street, which Union Avenue runs straight into; ink seen: “THIRD” [mr013-087-p1]

### Union Drive

- no entity attested here yet — leave `name` out

### Union Place (runs straight into Crown Hill Avenue)

- `western-ave-colina-park` — Western Avenue: attested on Union Place by another sheet; attested on Crown Hill Avenue, which Union Place runs straight into; ink seen: “Western Ave” [mr007-036-p2, mr010-062, mr010-088]
- `colina-ave` — Colina Avenue: attested on Union Place by another sheet; ink seen: “COLINA AVE.” [tr0024-055]
- `crown-hill-ave` — Crown Hill Avenue: attested on Crown Hill Avenue, which Union Place runs straight into; ink seen: “CROWN HILL AVE.”, “Crown Hill Ave” [tr0015-166a-p1, tr0015-179a]
- `arch-st` — Arch Street: attested on Crown Hill Avenue, which Union Place runs straight into; ink seen: “Arch St” [mr007-036-p2]

### Valencia Street

- `vernon-ave` — Vernon Avenue: attested on Valencia Street by another sheet; ink seen: “Vernon Av”, “Vernon Ave” [mr007-036-p2, mr018-063]

### Valley Street

- no entity attested here yet — leave `name` out

### Victor Street

- `fireman-st` — Fireman Street: attested on Victor Street by another sheet; ink seen: “FIREMAN ST.” [mr006-391]
- `victor-ave` — Victor Avenue: attested on Victor Street by another sheet; ink seen: “Victor ave” [mr007-026-p1]

### Wall Street

- `wall-street` — Wall Street: attested on Wall Street by another sheet; carries the street's present name; ink seen: “WALL STREET”, “Wall Street” [mr003-166-p1, mr003-166-p2, mr005-005, mr006-033, mr012-026, mr029-026]
- `myrtle` — Myrtle Avenue: attested on Wall Street by another sheet; ink seen: “Myrtle Ave.”, “Myrtle Avenue”, “Wall Street” [12017, mr006-378, mr011-063, mr016-027]

### Welcome Street

- `welcome-street` — Welcome Street: attested on Welcome Street by another sheet; carries the street's present name; ink seen: “Welcome Street” [mr006-138]

### West Bank Plaza at The Broad

- no entity attested here yet — leave `name` out

### Westlake Avenue

- `westlake-avenue` — Westlake Avenue: attested on Westlake Avenue by another sheet; carries the street's present name; ink seen: “WESTLAKE AVENUE” [tr0096-062]

### Wilshire Boulevard

- `orange-st-wilshire` — Orange Street: attested on Wilshire Boulevard by another sheet; ink seen: “ORANGE”, “ORANGE ST”, “ORANGE ST.”, “ORANGE STREET”, “Orange Street”, “Wilshire Blvd” [mr003-569, mr005-566, mr009-095, mr018-063, mr052-085, mr055-014]
- `wilshire` — Wilshire Boulevard: attested on Wilshire Boulevard by another sheet; carries the street's present name; ink seen: “WILSHIRE BOULEVARD” [tr0718-007-p2, tr1397-017-p5]

### Winston Street

- `winston-st` — Winston Street: attested on Winston Street by another sheet; carries the street's present name; ink seen: “WINSTON ST”, “Winston Street” [mr012-026, mr039-069]
- `ozier-lane` — Ozier Lane: attested on Winston Street by another sheet; ink seen: “Ozier Lane” [mr005-110]

### Witmer Street

- `witmer-street` — Witmer Street: attested on Witmer Street by another sheet; carries the street's present name; ink seen: “WITMER”, “WITMER STREET”, “Witmer St” [mr007-056, tr0015-166a-p1, tr0015-166a-p2, tr0030-069, tr0062-063]
- `logan-ave` — Logan Avenue: attested on Witmer Street by another sheet; ink seen: “Logan Ave” [mr018-063]
- `nichols-ave` — Nichols Avenue: attested on Witmer Street by another sheet; ink seen: “Nichols Ave”, “Nichols Avenue” [mr007-036-p2, mr007-096-p2, mr037-078]
- `bryan-st` — Bryan Street: attested on Witmer Street by another sheet; ink seen: “Bryan St.” [mr006-193]

### Yale Street (runs straight into Ord Street)

- `yale` — Yale Street: attested on Yale Street by another sheet; carries the street's present name; ink seen: “YALE ST.”, “YALE STREET”, “Yale St”, “Yale Street” [mr003-240, mr007-062-p2, tr0014-101a, tr0026-074, tr0771-036-p2]
- `hornet` — Hornet Street: attested on Yale Street by another sheet; ink seen: “CALLE DE LAS AVISPAS”, “HORNET ST.” [mr053-073]
- `high-street-chinatown` — High Street: attested on Ord Street, which Yale Street runs straight into; ink seen: “CALLE ALTA”, “HIGH ST”, “High St” [mr003-240, mr053-073, oldplaza1873]
- `ord-street` — Ord Street: attested on Ord Street, which Yale Street runs straight into; ink seen: “ORD ST.”, “ORD STREET” [tr0014-200a, tr0771-036-p2]

`asWritten` is verbatim ink, typos and abbreviations included — a string, or
an array of them where the sheet letters the stretch more than once. `trace`
is scan pixels against the render above.

`street` must be one of the names listed above, spelled exactly. `from` and
`to` must be names from that street's `crossings` in `stevenson-1884-hi-res-streets.json`,
or `null` for the street's own end within the coverage — anything else is
rejected downstream. If the stretch ends mid-block, give a point instead:
`from: { px: [x, y] }`.

Put your reasoning in each row's `note` field rather than in comments around
it: the tool rewrites this file when the document is re-saved, and `note` is
data that survives while comments inside the object do not.
