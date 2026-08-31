# Identify the streets on mr006-138



- **Date:** on 
- **Sheet:** `mr006-138-100dpi.png` (100 dpi; every pixel coordinate below is
  measured against this render)
- **Alignment:** `mr006-138-alignment.json` — control points mapping scan pixels
  to lat/lng, already fitted by a human
- **Coverage:** the polygon in `mr006-138.js`, in scan pixels — the ground this
  document testifies about
- **Modern streets:** `mr006-138-streets.json` — where every modern street inside
  the coverage polygon runs today, **in pixels on the render above** as well as
  in lat/lng, with the intersections along it. This is the file that lets you
  answer the question: overlay those pixel polylines on the image and see what
  the sheet has drawn there.

## The job

For each modern street listed below, decide what this sheet shows along it:
the plat's own label for that corridor, or that the sheet shows nothing there.
Then list any street DRAWN on the plat that matches none of them.

Modern streets inside the coverage polygon (12):

- Belmont Avenue
- Beverly Boulevard
- Colton Street
- Council Street
- Court Street
- Douglas Street
- Glendale Boulevard
- Lake Shore Terrace
- Laveta Terrace
- Patton Street
- Rockwood Street
- Welcome Street

## Rules that decide the answer

1. **Geometry only, never names.** A corridor labelled X on the plat
   frequently corresponds to a modern street named Y — that mismatch is the
   whole reason this project exists, and it is not rare. In particular, do
   **not** assume the plat's numbered streets are the modern numbered streets
   of the same number; renumbering and renaming have moved them. Decide every
   match from where the lines are, using `mr006-138-streets.json`, and only then
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

**Edit `mr006-138.js` directly.** Replace its empty `rows: []` with the rows
below. Do not put them in a new file: a separate file has to be merged in by
hand, and the review tool only ever reads `mr006-138.js`. Leave the rest of that
file alone — the coverage polygon and the alignment are a human's work.

Rows take these shapes, all of them `confirmed: false`, since a human checks
them afterwards:

```js
// the plat labels this stretch of a modern street
{ kind: "state", asWritten: "<label exactly as lettered>",
  street: "<modern street>", from: "<cross street>", to: "<cross street>",
  basis: "alignment", confirmed: false, note: "<why, if it is not obvious>" },

// the sheet covers this stretch and shows no street there
{ kind: "absent", street: "<modern street>", from: "<cross street>", to: "<cross street>",
  confirmed: false },

// drawn on the plat, no modern counterpart at all
{ kind: "vanished", asWritten: "<label as lettered>",
  trace: [[x, y], [x, y]], basis: "alignment", confirmed: false }
```

**Do not write a `name` field.** You are reading one sheet; `name` is a
claim about which naming *lineage* a label belongs to, and that can only be
decided against the whole corpus — whether this "Figueroa" is the same Figueroa
as the one three blocks east, or a different street that spells alike. Put the
ink in `asWritten` and leave identity to the human review step, which has the
project's name list in front of it.

`asWritten` is verbatim ink, typos and abbreviations included. `trace` is
scan pixels against the render above.

`street` must be one of the names listed above, spelled exactly. `from` and
`to` must be names from that street's `crossings` in `mr006-138-streets.json`,
or `null` for the street's own end within the coverage — anything else is
rejected downstream. If the stretch ends mid-block, give a point instead:
`from: { px: [x, y] }`.

Put your reasoning in each row's `note` field rather than in comments around
it: the tool rewrites this file when the document is re-saved, and `note` is
data that survives while comments inside the object do not.
