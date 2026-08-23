# Historic map identification task

You are given four pairs of images. Each pair shows a recorded Los Angeles
subdivision map from the 1880s–1900s:

- `<NAME>.png` — a clean render of the scanned map.
- `<NAME>-overlay.png` — the same render with the MODERN street network
  projected onto it via a georeferenced alignment: modern streets are drawn
  as RED LINES, each labeled once in PURPLE with its modern name. Green
  crosses are alignment control points; ignore them.

The pairs:
1. MR066-035.png / MR066-035-overlay.png
2. TR0015-166a.png / TR0015-166a-overlay.png
3. MR011-042.png / MR011-042-overlay.png
4. MR059-060.png / MR059-060-overlay.png

## Your task, for each sheet

1. List every street-name label you can read on the CLEAN scan, verbatim
   (including partial/uncertain readings, marked with (?)).
2. For each labeled street (and any prominent drawn-but-unlabeled street),
   determine which MODERN street it corresponds to — by finding the red
   line in the overlay that runs along that drawn street's corridor.
3. Report one markdown table per sheet:

| label on scan | modern street | confidence (high/med/low) | evidence (one line) |
|---|---|---|---|

If no red line follows a corridor, write "no modern counterpart visible".
If the sheet annotates a street with an ordinance or renaming note,
transcribe it and identify that stretch too.

## Rules — these matter more than they look

- **Identify by geometry only.** A matching name is NOT evidence: some
  sheets contain streets whose old name matches a DIFFERENT modern street
  than the one the corridor corresponds to. The red line that lies in the
  drawn corridor along its WHOLE length wins, whatever the names say.
- **Purple labels sit at arbitrary points on each modern street** — often
  far from where that street crosses this map, sometimes near a different
  corridor entirely. Identify by following the LINE, never by grabbing the
  nearest label.
- **A red line crossing a corridor diagonally** (a later boulevard cut
  slicing the old grid) is not a correspondence unless it tracks the
  corridor for its whole length.
- **Small offsets are normal** — up to roughly a street's width between red
  line and drawn corridor (1890s surveying, paper stretch, regrading). A
  systematic large misfit means it's not the same street.
- **If two red lines plausibly fit one corridor**, name both, mark low
  confidence, and say what would disambiguate — don't silently pick one.
- The maps are often NOT north-up and lot lettering may be rotated; orient
  yourself by the street network's shape, not by text direction.

Work sheet by sheet. Accuracy matters more than completeness: a wrong
confident identification is the worst outcome, an honest "low confidence,
two candidates" is fine.
