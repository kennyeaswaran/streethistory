# Identify the streets on mr053-071



- **Date:** on 
- **Sheet:** `mr053-071-100dpi.png` (100 dpi; every pixel coordinate below is
  measured against this render)
- **Alignment:** `mr053-071-alignment.json` — control points mapping scan pixels
  to lat/lng, already fitted by a human
- **Coverage:** the polygon in `mr053-071.js`, in scan pixels — the ground this
  document testifies about
- **Modern streets:** `mr053-071-streets.json` — where every modern street inside
  the coverage polygon runs today, **in pixels on the render above** as well as
  in lat/lng, with the intersections along it. This is the file that lets you
  answer the question: overlay those pixel polylines on the image and see what
  the sheet has drawn there.

## The job

For each modern street listed below, decide what this sheet shows along it:
the plat's own label for that corridor, or that the sheet shows nothing there.
Then list any street DRAWN on the plat that matches none of them.

Modern streets inside the coverage polygon (55):

- 1st Street
- 2nd Street
- 3rd Street
- 4th Place
- 4th Street
- 5th Street
- 6th Street
- 7th Street
- Alameda Street
- Astronaut Ellison S Onizuka Street
- Avery Street
- Boyd Street
- Broad Plaza
- Central Avenue
- Ceres Avenue
- Channing Street
- Colyton Street
- Conway Place
- Crocker Street
- Factory Place
- Frances K. Hashimoto Plaza
- Garey Street
- Gladys Avenue
- Hewitt Street
- Imperial Street
- Industrial Street
- Japanese Village Plaza Mall
- Judge John Aiso Street
- Kohler Street
- Lawrence Street
- Los Angeles Street
- Main Street
- Maple Avenue
- Mateo Street
- Merchant Street
- Merrick Street
- Mesquit Street
- Mill Street
- Molino Street
- Omar Street
- Palmetto Street
- Rose Street
- San Julian Street
- San Pedro Street
- Santa Fe Avenue
- Seaton Street
- Stanford Avenue
- Toriumi Plaza
- Towne Avenue
- Traction Avenue
- Vignes Street
- Wall Street
- Wilde Street
- Willow Street
- Winston Street

## Rules that decide the answer

1. **Geometry only, never names.** A corridor labelled X on the plat
   frequently corresponds to a modern street named Y — that mismatch is the
   whole reason this project exists, and it is not rare. In particular, do
   **not** assume the plat's numbered streets are the modern numbered streets
   of the same number; renumbering and renaming have moved them. Decide every
   match from where the lines are, using `mr053-071-streets.json`, and only then
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

**Edit `mr053-071.js` directly.** Replace its empty `rows: []` with the rows
below. Do not put them in a new file: a separate file has to be merged in by
hand, and the review tool only ever reads `mr053-071.js`. Leave the rest of that
file alone — the coverage polygon and the alignment are a human's work.

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
  trace: [[x, y], [x, y]], basis: "alignment", confirmed: false }
```

### The three kinds are three different claims. Read this twice.

| what you see on the sheet | kind |
|---|---|
| a corridor with a name lettered along it | `state` |
| a corridor, edge lines, an alley or a right-of-way — but no name on it | `unnamed` |
| lot interiors, blank paper, a block with no street through it | `absent` |

`absent` is the strong one: it says the sheet **shows there was no street
here**, and the project later argues from that. If the sheet draws lines you
think are a street but cannot find a name for, that is `unnamed`, not
`absent`. If you are unsure whether the lines are a street at all, say so in
`note` and use `unnamed` — it claims less.

Neither `unnamed` nor `absent` may carry `name` or `asWritten`. There is
no ink to quote.

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

**Do not write a `name` field.** You are reading one sheet; `name` is a
claim about which naming *lineage* a label belongs to, and that can only be
decided against the whole corpus — whether this "Figueroa" is the same Figueroa
as the one three blocks east, or a different street that spells alike. Put the
ink in `asWritten` and leave identity to the human review step, which has the
project's name list in front of it.

`asWritten` is verbatim ink, typos and abbreviations included. `trace` is
scan pixels against the render above.

`street` must be one of the names listed above, spelled exactly. `from` and
`to` must be names from that street's `crossings` in `mr053-071-streets.json`,
or `null` for the street's own end within the coverage — anything else is
rejected downstream. If the stretch ends mid-block, give a point instead:
`from: { px: [x, y] }`.

Put your reasoning in each row's `note` field rather than in comments around
it: the tool rewrites this file when the document is re-saved, and `note` is
data that survives while comments inside the object do not.
