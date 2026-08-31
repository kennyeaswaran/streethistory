# Identify the streets on mr066-035



- **Date:** on 
- **Sheet:** `mr066-035-100dpi.png` (100 dpi; every pixel coordinate below is
  measured against this render)
- **Alignment:** `mr066-035-alignment.json` — control points mapping scan pixels
  to lat/lng, already fitted by a human
- **Coverage:** the polygon in `mr066-035.js`, in scan pixels — the ground this
  document testifies about

## The job

For each modern street listed below, decide what this sheet shows along it:
the plat's own label for that corridor, or that the sheet shows nothing there.
Then list any street DRAWN on the plat that matches none of them.

Modern streets inside the coverage polygon (6):

- 3rd Street
- 4th Street
- Bixel Street
- Boylston Street
- Huntley Drive
- Miramar Street

## Rules that decide the answer

1. **Geometry only, never names.** These sheets are chosen because old names
   mislead. A corridor labelled X
   frequently corresponds to a modern street named Y.
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

## What to hand back

Rows to paste into `mr066-035.js`, in this shape — all of them
`confirmed: false`, since a human confirms them afterwards:

```js
// the plat labels this stretch of a modern street
{ kind: "state", name: "<name-entity-id>", asWritten: "<label exactly as lettered>",
  street: "<modern street>", from: "<cross street>", to: "<cross street>",
  basis: "alignment", confirmed: false },

// the sheet covers this stretch and shows no street there
{ kind: "absent", street: "<modern street>", from: "<cross street>", to: "<cross street>",
  confirmed: false },

// drawn on the plat, no modern counterpart at all
{ kind: "vanished", name: "<name-entity-id>", asWritten: "<label as lettered>",
  trace: [[x, y], [x, y]], basis: "alignment", confirmed: false }
```

`asWritten` is verbatim ink, typos included. `trace` is scan pixels against
the render above. If you cannot name a `name` entity, leave it as a comment
describing the label — inventing an id is worse than leaving the gap.
