# TEMPLATE — map transcription (Part A)

One file per recorded map, living beside it as `documents/<id>/<id>-partA.md`
and named in the document's `transcription` field.

Filled in by whoever READS the scan — a human, ChatGPT, or a Claude instance.
**Verbatim only**: what is drawn and written on the map, with no modern-street
identifications. Matching old streets to modern ones is the error-prone step,
and it is done separately against geometry (`map-tool.html`), never by
eyeballing a transcription.

Transcription is optional. Most documents in the corpus have none: the AI pass
reads the render directly, guided by the `TASK.md` the map tool writes into
each folder, and produces rows rather than prose. A Part A file earns its place
where the sheet carries text worth having verbatim and separately searchable —
a title block, a dedication, an ordinance annotation, a long street table — or
where the reading and the row-writing are done by different parties at
different times.

> **Part B is gone.** This file used to carry a second half recording modern
> identifications and what was applied where. That is now the document itself:
> each row names its modern `street`, carries its `basis` (MODEL-SPEC §5), and
> is confirmed in review. A separate application record would be the same fact
> in two places.

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
