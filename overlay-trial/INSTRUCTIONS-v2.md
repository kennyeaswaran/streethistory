# Historic map identification task — v2 (one street per image)

You are given, for each of several recorded Los Angeles subdivision maps
(1880s–1900s):

- `<SHEET>.png` — a clean render of the scanned map.
- A set of images `<SHEET>-only-<modern street name>.png` — the same render
  with exactly ONE modern street drawn in BOLD RED (projected via a
  georeferenced alignment), and the rest of the modern street network in
  faint grey for orientation. No text labels appear on these by design.

## Your task — for EACH single-street image

Answer four things:

1. **Verdict** — does the red line coincide with a street drawn on the map?
   - **FULL**: it runs along a drawn street corridor for that corridor's
     whole length in frame.
   - **PARTIAL**: it tracks a corridor for a stretch, then diverges or bends
     away — describe exactly where.
   - **CROSSING**: it passes through the map at an angle without tracking
     any corridor.
   - **NONE**: it doesn't meaningfully relate to any drawn street.
2. **Which plat street(s)** — the corridor's label as lettered on the clean
   scan, verbatim ("unlabeled corridor between Blocks A and B" if unnamed).
3. **Portion matched**, in plat terms ("from the Buckley St edge to the bend
   at the block corner; not beyond").
4. **Confidence** (high/med/low) + one line of evidence.

Report one markdown table per sheet, one row per image:

| modern street (from filename) | verdict | plat corridor(s) | portion matched | confidence | evidence |
|---|---|---|---|---|---|

After finishing a sheet, add a line listing any plat-labeled corridors NOT
matched by any modern street — those are vanished-street candidates.

## Rules

- **Streets on these plats are drawn as corridors: TWO parallel edge lines,
  with the name lettered in the space between them.** A correct modern match
  runs down the MIDDLE of the corridor — on a wide street the red line will
  look "far from" both edge lines, and that's exactly right. Judge whether
  the line stays inside the corridor, not whether it touches ink.
- **One modern street may match different plat corridors in sequence** —
  following corridor A for two blocks, then bending at a junction onto
  corridor B. Report each part; that's a PARTIAL for each corridor, and it's
  valuable structure, not noise. The reverse also happens: one plat corridor
  matched by different modern streets on different stretches.
- **Never reason from names.** These sheets are chosen because old names
  mislead: a corridor labeled with one name frequently corresponds to a
  modern street with a different name, and vice versa. Geometry only.
- **A diagonal crossing is not a match** unless the line tracks the corridor
  along its length.
- **Small offsets are normal** (1890s surveying, paper stretch) — up to
  roughly half a corridor width. A systematic misfit, or drifting out of the
  corridor, is a non-match.
- Maps are often not north-up; orient by the street network's shape.
- If unsure between verdicts, pick the weaker one and say what would decide it.

Accuracy over completeness: a wrong FULL is the worst outcome; an honest
PARTIAL/low is fine.
