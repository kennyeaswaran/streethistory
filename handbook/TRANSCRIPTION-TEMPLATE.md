# TEMPLATE — map transcription + application record

One file per recorded map, living beside it as `documents/<id>/<id>-partA.md`.
Two halves, filled in by different parties at different times:

- **Part A (transcription)** — filled in by whoever READS the scan (a human,
  ChatGPT, or a Claude instance). Verbatim only: what is drawn and written on
  the map. NO modern-street identifications — matching old streets to modern
  ones is the error-prone step, and it's done separately with geometry tools
  (document-tool.html / georef.py), never by eyeballing a transcription.
- **Part B (application)** — filled in by a Claude instance applying the
  document to streets-data.js per ADDING-STREETS.md's core loop. Records the
  modern identifications, their basis, and what was applied where.

Spot-check rule: whoever fills Part B verifies at least one Part A claim
against the scan before trusting the rest.

---

## Part A — Transcription (verbatim; no modern identifications)

- **Full title (verbatim from title block):**
- **Map-Ref:** M.R. or M.B. book–page(s)
- **Scan file(s):** `documents/<id>/<id>.pdf` / URL
- **Recording block (verbatim):** date, "at the request of …", recorder
- **Subdivider / requester:**
- **Surveyor (and survey date, if different from recording):**
- **Orientation:** which way is north on the sheet (plats are often not
  north-up); note the north arrow / bearings if present
- **Sheets:** how many pages, and what each covers

### Streets drawn on the plat

| # | Label as written (verbatim) | Sheet | Where on sheet | Runs between (tract features, as drawn) | Legibility |
|---|---|---|---|---|---|
| 1 | e.g. GEORGIA ST | 2 | diagonal, right edge | from the [unlabeled gap] at lower left to the tract boundary at upper right | clear |
| 2 | e.g. STREET (no name) | 1 | top | between Blocks A and B | clear |
| 3 | e.g. HU?ER ST | 1 | center | … | 3rd letter unclear — B or D |

Rules: copy spelling/abbreviation exactly (Ave vs Avenue, St, Calle …);
include UNLABELED platted streets as their own rows ("STREET (no name)");
mark shaky letters with (?) and unreadable stretches with [illegible]; note
streets that run to the sheet edge or tract boundary (that's extent
evidence). List every street, even ones that look unimportant.

### Blocks and lots

- Block labels (letters/numbers) and roughly where each sits relative to the
  streets above — this is what makes NavigateLA "Lot" cross-checks fast later.
- Lot numbering scheme (e.g. "Lots 1–24 per block, ~40 ft frontages").

### Anything else written on the map

Annotations, adjoining-tract names in margins ("O.H. Bliss"), ordinance
notes ("Name establ. … Ord. …"), certifications — verbatim, with sheet + location.

---

## Part B — Application (filled in by a Claude instance; geometry-based)

| # (from Part A) | Modern identity | Basis (label match / lot-level match / alignment / position) | Applied to |
|---|---|---|---|
| 1 | 3rd Street, Alameda–Santa Fe segment | alignment + grid position | ✔ segment's nameHistory + sources |
| 2 | unresolved | — | ⏸ research-leads.md bullet |

- Basis vocabulary, strongest to weakest: **lot-level match** (NavigateLA
  Lot/Tract fields match the plat), **label match** (unchanged name),
  **alignment** (document-tool.html / georef.py fit), **position** (grid reasoning
  only — always flag in the entry). Anything below lot-level gets a short
  parenthetical in the source title, e.g. "(identified by map alignment)".
- Every street from Part A gets a row, even if the outcome is "out of
  coverage" or "unresolved" — that's what makes the file reusable when
  coverage grows.
- Note here anything Part A got wrong on spot-check, and correct Part A in
  place with a dated note.

---

## Prompt to give the map reader (paste this + the images/PDF)

> Transcribe this recorded subdivision map for a street-history archive.
> Report ONLY what is written and drawn on the map itself — do not guess at
> modern street names or locations, and do not add outside knowledge.
> Produce markdown with these sections:
> 1. Full title, verbatim from the title block.
> 2. The recording block verbatim (date recorded, at whose request, recorder's
>    name), plus surveyor and survey date if shown.
> 3. Sheet orientation: which way is north (use the north arrow or bearings).
> 4. A table of EVERY street drawn on the plat: the label exactly as written
>    (preserve spelling and abbreviations), which sheet it's on, where on the
>    sheet it sits, and what it runs between as drawn (blocks, other streets,
>    the sheet edge, the tract boundary). Include unlabeled streets as
>    "STREET (no name)". Mark uncertain letters with (?) and unreadable text
>    as [illegible] — do not silently guess.
> 5. Block letters/numbers and the lot numbering scheme.
> 6. Any other text on the map (margin notes, adjoining tract names,
>    ordinance annotations), verbatim.
> If two readings of a label are plausible, give both. Accuracy matters more
> than completeness: flag doubt rather than resolving it.
