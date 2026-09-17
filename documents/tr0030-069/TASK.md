# Identify the streets on tr0030-069



- **Date:** on 
- **Sheet:** `tr0030-069-100dpi.png` (100 dpi; every pixel coordinate below is
  measured against this render)
- **Alignment:** `tr0030-069-alignment.json` — control points mapping scan pixels
  to lat/lng, already fitted by a human
- **Coverage:** the polygon in `tr0030-069.js`, in scan pixels — the ground this
  document testifies about
- **Modern streets:** `tr0030-069-streets.json` — where every modern street inside
  the coverage polygon runs today, **in pixels on the render above** as well as
  in lat/lng, with the intersections along it. This is the file that lets you
  answer the question: overlay those pixel polylines on the image and see what
  the sheet has drawn there.

## The job

For each modern street listed below, decide what this sheet shows along it:
the plat's own label for that corridor, or that the sheet shows nothing there.
Then list any street DRAWN on the plat that matches none of them.

Modern streets inside the coverage polygon (5):

- 7th Street
- Garland Avenue
- Ingraham Street
- Lucas Avenue
- Witmer Street

## Rules that decide the answer

1. **Geometry only, never names.** A corridor labelled X on the plat
   frequently corresponds to a modern street named Y — that mismatch is the
   whole reason this project exists, and it is not rare. In particular, do
   **not** assume the plat's numbered streets are the modern numbered streets
   of the same number; renumbering and renaming have moved them. Decide every
   match from where the lines are, using `tr0030-069-streets.json`, and only then
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

**Edit `tr0030-069.js` directly.** Replace its empty `rows: []` with the rows
below. Do not put them in a new file: a separate file has to be merged in by
hand, and the review tool only ever reads `tr0030-069.js`. Leave the rest of that
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
(The same list is in `tr0030-069-streets.json` under `nameCandidates`.)

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

### 7th Street

- `seventh-street` — 7th Street: attested on 7th Street by another sheet; carries the street's present name; ink seen: “7TH ST.”, “7TH STREET”, “7th ST”, “7th Street”, “CALLE 7a”, “SEVENTH ST”, “SEVENTH ST.”, “SEVENTH STR.”, “SEVENTH STREET”, “Seventh St”, “Seventh St.”, “Seventh Street”, “Seventh Street.” [11824, mr003-016, mr003-569, mr006-033, mr006-039, mr011-063, mr013-091, mr014-034, mr015-052, mr018-025, mr018-092, mr021-046, mr030-009-p1, mr030-009-p2, mr053-068, mr053-071, mr054-051, mr055-081, mr066-064, mr070-084, tr0001-046, tr0005-056a, tr0009-100a, tr0011-196, tr0023-054c, tr0718-007-p2, tr1397-017-p5]

### Garland Avenue

- no entity attested here yet — leave `name` out

### Ingraham Street

- `ingraham` — Ingraham Street: carries the street's present name

### Lucas Avenue

- `lucas-avenue` — Lucas Avenue: attested on Lucas Avenue by another sheet; carries the street's present name; ink seen: “LUCAS AVENUE”, “Lucas Ave” [mr006-115, mr010-081, tr0015-166a-p2]

### Witmer Street

- `witmer-street` — Witmer Street: attested on Witmer Street by another sheet; carries the street's present name; ink seen: “WITMER”, “WITMER STREET” [tr0015-166a-p1, tr0015-166a-p2]

`asWritten` is verbatim ink, typos and abbreviations included — a string, or
an array of them where the sheet letters the stretch more than once. `trace`
is scan pixels against the render above.

`street` must be one of the names listed above, spelled exactly. `from` and
`to` must be names from that street's `crossings` in `tr0030-069-streets.json`,
or `null` for the street's own end within the coverage — anything else is
rejected downstream. If the stretch ends mid-block, give a point instead:
`from: { px: [x, y] }`.

Put your reasoning in each row's `note` field rather than in comments around
it: the tool rewrites this file when the document is re-saved, and `note` is
data that survives while comments inside the object do not.
