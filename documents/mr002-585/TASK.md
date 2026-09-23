# Identify the streets on mr002-585



- **Date:** on 
- **Sheet:** `mr002-585-100dpi.png` (100 dpi; every pixel coordinate below is
  measured against this render)
- **Alignment:** `mr002-585-alignment.json` — control points mapping scan pixels
  to lat/lng, already fitted by a human
- **Coverage:** the polygon in `mr002-585.js`, in scan pixels — the ground this
  document testifies about
- **Modern streets:** `mr002-585-streets.json` — where every modern street inside
  the coverage polygon runs today, **in pixels on the render above** as well as
  in lat/lng, with the intersections along it. This is the file that lets you
  answer the question: overlay those pixel polylines on the image and see what
  the sheet has drawn there.

## The job

For each modern street listed below, decide what this sheet shows along it:
the plat's own label for that corridor, or that the sheet shows nothing there.
Then list any street DRAWN on the plat that matches none of them.

Modern streets inside the coverage polygon (14):

- 4th Street
- 5th Street
- 5th Street (south branch)
- 6th Street
- Beaudry Avenue
- Figueroa Street
- Flower Street
- Fremont Avenue
- Grand Avenue
- Grand Avenue Lower Level
- Harbor Freeway
- Hope Place
- Hope Street
- Olive Street

## Rules that decide the answer

1. **Geometry only, never names.** A corridor labelled X on the plat
   frequently corresponds to a modern street named Y — that mismatch is the
   whole reason this project exists, and it is not rare. In particular, do
   **not** assume the plat's numbered streets are the modern numbered streets
   of the same number; renumbering and renaming have moved them. Decide every
   match from where the lines are, using `mr002-585-streets.json`, and only then
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

**Edit `mr002-585.js` directly.** Replace its empty `rows: []` with the rows
below. Do not put them in a new file: a separate file has to be merged in by
hand, and the review tool only ever reads `mr002-585.js`. Leave the rest of that
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
(The same list is in `mr002-585-streets.json` under `nameCandidates`.)

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

### 4th Street

- `fourth-street` — 4th Street: attested on 4th Street by another sheet; carries the street's present name; ink seen: “4TH ST”, “4TH ST.”, “4TH STREET”, “CALLE 4a”, “FOURTH ST.”, “FOURTH STREET”, “Fourth St”, “Fourth Street” [12685, mr001-489, mr003-046-p1, mr005-005, mr006-427, mr007-096-p2, mr012-026, mr030-009-p4, mr030-009-p5, mr053-068, mr053-069, mr053-071, tr0012-186, tr0013-168-p1, tr0122-053-p3, tr0751-038]
- `huber-st` — Huber Street: attested on 4th Street by another sheet; ink seen: “HUBER ST.”, “Huber St”, “Huber St.” [mr012-042, mr013-087-p1, mr030-009-p4]
- `third-street` — 3rd Street: attested on 4th Street by another sheet; ink seen: “THIRD” [mr013-087-p1]
- `acacia-st` — Acacia Street: attested on 4th Street by another sheet; ink seen: “ACACIA ST.”, “Acacia St” [mr007-036-p2, tr0024-055]

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

### Beaudry Avenue

- `beaudry-avenue` — Beaudry Avenue: attested on Beaudry Avenue by another sheet; carries the street's present name; ink seen: “BEAUDRY AVE.”, “BEAUDRY AVENUE”, “Beaudry”, “Beaudry avenue” [mr006-115, mr007-026-p1, mr007-026-p2, tr0001-052, tr0006-150a, tr0010-175a, tr0035-092, tr0588-055, tr0713-093-p2]
- `canal-street-beaudry` — Canal Street: attested on Beaudry Avenue by another sheet; ink seen: “Canal Street” [mr016-059]

### Figueroa Street

- `pearl` — Pearl Street: attested on Figueroa Street by another sheet; ink seen: “PEARL ST”, “PEARL STR.”, “PEARL STREET”, “Pearl”, “Pearl St”, “Pearl Street” [mr003-016, mr003-032, mr003-569, mr005-307-a, mr007-026-p1, mr007-026-p2, mr007-062-p2, mr010-030, mr021-087]
- `figueroa-gov` — Figueroa Street: attested on Figueroa Street by another sheet; carries the street's present name; ink seen: “FIGUEROA ST.”, “FIGUEROA STREET”, “Figueroa St”, “Figueroa Street” [mr007-021, mr010-077, mr021-032, tr0034-004, tr1397-017-p5]
- `chapules` — Grasshopper Street: attested on Figueroa Street by another sheet; ink seen: “CALLE DE LAS CHAPULAS”, “CALLE DE LAS CHAPULES”, “GRASSHOPPER ST”, “GRASSHOPPER ST.”, “GRASSHOPPER STREET”, “Grasshopper St.” [12685, mr001-462, mr053-067, mr053-068]

### Flower Street (runs straight into 3rd Street)

- `flower` — Flower Street: attested on Flower Street by another sheet; carries the street's present name; ink seen: “CALLE DE LAS FLORES”, “FLOWER”, “FLOWER STR.”, “FLOWER STREET”, “Flower St”, “Flower St.”, “Flower Street” [12685, mr001-462, mr003-016, mr003-032, mr003-033, mr007-021, mr021-032, mr053-067, mr053-068]
- `arnold` — Arnold Street: attested on 3rd Street, which Flower Street runs straight into; ink seen: “ARNOLD ST”, “ARNOLD ST.”, “Arnold St”, “Arnold Street” [mr003-046-p1, mr006-427, mr007-036-p2, mr007-096-p2, mr037-078, mr066-035, tr0001-057a]
- `morgan-lane` — Morgan Lane: attested on 3rd Street, which Flower Street runs straight into; ink seen: “Morgan Lane” [mr005-005]
- `georgia-east` — Georgia Street: attested on 3rd Street, which Flower Street runs straight into; ink seen: “GEORGIA ST”, “Georgia St”, “Georgie Street.” [mr002-092-p2, mr003-060-p2, mr013-087-p1, mr030-009-p5]
- `third-street` — 3rd Street: attested on 3rd Street, which Flower Street runs straight into; ink seen: “3RD ST”, “3RD ST.”, “3RD STREET”, “3d Street”, “CALLE 3a”, “THIRD ST.”, “THIRD STREET”, “Third St”, “Third Street” [12685, mr001-489, mr016-059, mr030-009-p5, mr053-069, mr053-071, tr0001-052, tr0006-150a, tr0013-168-p1, tr0021-144a, tr0116-085-p1, tr0122-053-p3, tr0926-086-p2]
- `crown-hill-ave` — Crown Hill Avenue: attested on 3rd Street, which Flower Street runs straight into; ink seen: “CROWN HILL AVE.” [tr0015-166a-p1, tr0015-166a-p2]
- `atchison-st` — Atchison Street: attested on 3rd Street, which Flower Street runs straight into; ink seen: “ATCHISON ST.” [mr024-081]

### Fremont Avenue (runs straight into 6th Street)

- `beaudry-st` — Beaudry Street: attested on Fremont Avenue by another sheet; ink seen: “Beaudry St” [mr007-026-p1, mr007-026-p2]
- `sixth-street` — 6th Street: attested on 6th Street, which Fremont Avenue runs straight into; ink seen: “6TH ST”, “6TH ST.”, “6TH STREET”, “6th St”, “CALLE 6a”, “SIXTH”, “SIXTH ST.”, “SIXTH STR.”, “SIXTH STREET”, “Sixth St”, “Sixth St Extension.”, “Sixth St.”, “proposed line of Sixth Street.” [mr001-462, mr003-016, mr003-166-p1, mr003-569, mr006-033, mr011-042, mr030-009-p1, mr030-009-p2, mr030-009-p3, mr052-085, mr053-068, mr053-071, mr078-055, mr084-053, tr0002-037a, tr0007-078a, tr0009-075, tr0009-100a, tr0010-175a, tr0012-101, tr0014-087a, tr0023-066, tr0159-032-p2, tr0273-017, tr0319-001-p1]
- `ward-st` — Ward Street: attested on 6th Street, which Fremont Avenue runs straight into; ink seen: “WARD ST”, “WARD ST.”, “Ward St”, “Ward Street” [mr003-046-p2, mr003-569, mr006-427, mr007-036-p2, mr007-096-p2, mr018-063]

### Grand Avenue (runs straight into Grand Avenue Lower Level)

- `philadelphia-st` — Philadelphia Street: attested on Grand Avenue by another sheet; ink seen: “Philadelphia St” [mr007-026-p1, mr007-062-p2]
- `grand-ave` — Grand Avenue: attested on Grand Avenue by another sheet; carries the street's present name; ink seen: “GRAND AV.” [mr084-053]
- `charity` — Charity Street: attested on Grand Avenue by another sheet; attested on Grand Avenue Lower Level, which Grand Avenue runs straight into; ink seen: “CALLE DE CARIDAD”, “CHARITY”, “CHARITY ST.”, “CHARITY STREET”, “Charity St”, “Charity St.”, “Charity Street” [12685, mr001-462, mr001-489, mr003-038-p1, mr005-573, mr007-021, mr053-067, mr053-068]

### Grand Avenue Lower Level (runs straight into Grand Avenue)

- `charity` — Charity Street: attested on Grand Avenue Lower Level by another sheet; attested on Grand Avenue, which Grand Avenue Lower Level runs straight into; ink seen: “CALLE DE CARIDAD”, “CHARITY”, “CHARITY ST.”, “CHARITY STREET”, “Charity St”, “Charity St.”, “Charity Street” [12685, mr001-462, mr001-489, mr003-038-p1, mr005-573, mr007-021, mr053-067, mr053-068]
- `philadelphia-st` — Philadelphia Street: attested on Grand Avenue, which Grand Avenue Lower Level runs straight into; ink seen: “Philadelphia St” [mr007-026-p1, mr007-062-p2]
- `grand-ave` — Grand Avenue: attested on Grand Avenue, which Grand Avenue Lower Level runs straight into; ink seen: “GRAND AV.” [mr084-053]

### Harbor Freeway

- no entity attested here yet — leave `name` out

### Hope Place (runs straight into Hope Street)

- `hope` — Hope Street: attested on Hope Street, which Hope Place runs straight into; ink seen: “CALLE DE LAS ESPERANZAS”, “HOPE ST.”, “HOPE STREET”, “Hope St”, “Hope St.”, “Hope Street” [12685, mr001-462, mr001-489, mr003-033, mr007-021, mr021-032, mr053-067, mr053-068]

### Hope Street (runs straight into Hope Place)

- `hope` — Hope Street: attested on Hope Street by another sheet; carries the street's present name; ink seen: “CALLE DE LAS ESPERANZAS”, “HOPE ST.”, “HOPE STREET”, “Hope St”, “Hope St.”, “Hope Street” [12685, mr001-462, mr001-489, mr003-033, mr007-021, mr021-032, mr053-067, mr053-068]

### Olive Street

- `olive` — Olive Street: attested on Olive Street by another sheet; carries the street's present name; ink seen: “CALLE ACEYTUNA”, “OLIVE ST.”, “OLIVE STREET”, “Olive St.”, “Olive Street” [12685, mr001-462, mr001-489, mr005-573, mr053-067, mr053-068]
- `elm-street` — Elm Street: attested on Olive Street by another sheet; ink seen: “ELM STREET” [mr003-038-p1]

`asWritten` is verbatim ink, typos and abbreviations included — a string, or
an array of them where the sheet letters the stretch more than once. `trace`
is scan pixels against the render above.

`street` must be one of the names listed above, spelled exactly. `from` and
`to` must be names from that street's `crossings` in `mr002-585-streets.json`,
or `null` for the street's own end within the coverage — anything else is
rejected downstream. If the stretch ends mid-block, give a point instead:
`from: { px: [x, y] }`.

Put your reasoning in each row's `note` field rather than in comments around
it: the tool rewrites this file when the document is re-saved, and `note` is
data that survives while comments inside the object do not.
