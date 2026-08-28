# The tract-map pipeline: three stages, and what's actually unsolved

The end-to-end job: from "this street segment needs its record" to "its
entry in streets-data.js cites the recorded map that documents it." Three
stages. Stages 1 and 3 are solved and specified below so they can be run by
any instance at scale; stage 2 contains the one genuinely unsolved primitive,
and its required inputs/outputs are pinned down here so candidate solutions
can be tested against a benchmark we already have.

Resolution convention: every pixel coordinate in this pipeline is
meaningless without the render it was measured on. Renders are produced with
`pdftoppm -png -r <dpi>`; every file that carries pixel coords MUST state the
render filename and dpi. Default: 100 dpi for alignment work.

---

## Stage 1 — HARVEST (solved; browser instance or human)

**Input:** a research target — a segment with `planned/built: "not yet
researched"`, a segment-review flag, or a neighborhood batch from
coverage-report.js.

**Process** (details in TRACT-RESEARCH.md): pick 1–3 addresses on the target
stretch → NavigateLA Parcel Description Report → read Tract name, Map-Ref,
Lot → construct the scan URL (M.R. refs: direct pattern; M.B. refs: via
`List.aspx?type=Tract&book=NNNN`, never guessed) → existence-check with the
fetch tool (`Content-Type: application/pdf` = real).

**Output contract — one shopping-list row per lookup**, appended to the
shopping-list section of research-leads.md:

| field | example |
|---|---|
| target | 3rd Street, "Main to Alameda" segment |
| address used | 250 E 3rd St |
| tract (as reported) | JOHNSTON |
| map-ref | M.R. 2-92/93 |
| lot | LT 4 |
| verified URL(s) | https://pw.lacounty.gov/sur/nas/landrecords/misc/MR002/MR002-092.pdf (+ -093) |
| caveat | modern ref may postdate the founding plat (resubdivision) — see TRACT-RESEARCH gotchas |

A human downloads the batch into `tracts/` (sandbox can't reach the domain).

**Serial-source variant (2026-08, not yet exercised).** For Sanborn atlases
and city directories (SERIAL-SOURCES.md) stage 1 is cheaper and skips
NavigateLA entirely: the volume's own street index and key map say which
sheet covers a street, so the harvest is index → sheet number → LOC item
page, and the shopping list is a list of sheets rather than Map-Refs. The
download-by-human step is the same (LOC returns 403 to automated fetching of
its search, JSON API and IIIF manifests; item pages read fine). What changes
downstream: one sheet yields many Part B rows instead of a handful, and the
evidence it produces is a *bracket* between editions rather than a single
recording date.

**Also solved, part of stage 1's tail:** Part A transcription of the
downloaded scan — verbatim labels, title block, recording block — per
`tracts/transcriptions/TEMPLATE.md`. Every model tested is reliable at this.
Output: `tracts/transcriptions/<MAPREF>.md`, Part A filled.

---

## Stage 2 — IDENTIFY (the unsolved middle)

**Job:** for each street drawn on the plat, decide which modern street (and
which stretch of it) it corresponds to — or that it has no modern
counterpart.

**What's already solved inside stage 2:**
- The math: `georef.py fit` (control points → similarity/affine transform),
  `trace` (pixel endpoints → nearest-modern-street votes + median distances),
  `overlay` (project every modern street onto the scan), `locate`.
- The interpretation protocol: verdict bands (median <15 m with clear vote
  margin = match; 20–50 m = corresponds but realigned, flag it; >60 m or
  split votes = no counterpart), junction contamination, diagonal-cut traps —
  all in TRACT-RESEARCH.md's precision protocol.
- The human path: align.html (human drags/rotates the scan onto the modern
  grid in seconds; exports `<name>-alignment.json` = three virtual control
  points in the same schema georef.py consumes).

**The unsolved primitive — visual grounding.** Two instances of the same task:

(a) *Control points:* given the render and a description ("intersection
    center of the drawn streets labeled Bixel and Third"), return `[x, y]`.
    Needed: 2–3 ironclad points per sheet, accuracy within ~±20 px @ 100 dpi
    (≈ half a street width).
(b) *Street polylines:* given the render and a label ("the drawn street
    labeled ARNOLD ST"), return endpoint (or polyline) pixels ON THE INK.
    Feeds `trace`. Same accuracy bar; off-the-ink points flip verdicts
    (documented failure).

All current models (Claude, ChatGPT, Gemini) are unreliable at generating
these coordinates; humans are reliable but don't scale.

**Required I/O for any candidate solver** (so it plugs into georef.py as-is):

```json
{
  "render": "tracts/renders/MR066-035-1.png",
  "dpi": 100,
  "controls": [
    {"px": [1310, 2270], "ll": [34.05731, -118.26343], "note": "Bixel x 3rd"}
  ],
  "streets": [
    {"label": "ARNOLD ST", "endpoints": [[585, 1810], [1310, 2270]]}
  ]
}
```
(`controls` is exactly georef.py's control-file schema; `streets` rows feed
`trace`.)

**Two reductions worth testing before treating this as unsolved at full
strength:**

1. **Verification instead of generation.** Once an alignment exists (human
   for now), `georef.py overlay` draws every modern street, labeled, onto
   the scan. The model task becomes yes/no: "does the red MIRAMAR line run
   along the drawn corridor labeled THIRD ST?" Models are far more reliable
   at verifying a drawn overlay than at emitting coordinates. If this holds,
   the human's role shrinks to one align.html drag per sheet, and everything
   downstream automates.
2. **Classical CV auto-alignment.** The modern street graph is known
   (streets-geometry.js); plats are high-contrast line drawings. Extracting
   the drawn line network (skeletonize/Hough) and fitting the
   similarity/affine transform that best matches it to the OSM graph is a
   well-posed optimization needing no vision-model pixel-picking at all. If
   auto-alignment works, reduction 1 covers the rest. Label→corridor
   association can then use the label's position from Part A plus the
   detected lines.
   **Sanborn sheets are the friendliest target for this** (2026-08): north-up,
   consistent scale, contiguous coverage, and a street network far closer to
   the modern graph than a rotated 1890s plat — so if auto-alignment is going
   to work anywhere it works there first, and one fit covers many streets.
   Conversely, a serial-source pass makes the bottleneck bite harder in
   aggregate, since there are many more sheets than tract maps.

**Benchmark (already in the repo).** Human ground truth exists for scoring
any candidate: `tracts/renders/*-alignment.json` (MR011-042, MR059-060,
MR066-035, TR0015-166a, plus the MR006-138 session records) and the resolved
identifications in streets-data.js. Acceptance for a candidate solver:
- reproduces each human alignment (agreement <15 m across the whole sheet,
  not just at control points);
- reproduces the known verdicts, INCLUDING the adversarial case MR066-035,
  where naive label-continuity is geometrically wrong (its "Third St" =
  modern Miramar; its "Arnold St" = modern 3rd) — any solver that matches by
  name instead of geometry fails this on purpose.

**Output contract of stage 2** (whatever solves it): Part B rows in the
transcription file — per Part A street: modern identity (normalized OSM
name + which stretch), basis (lot-level / label / alignment / position),
and the trace stats (votes, median m) when the basis is alignment.

---

## Stage 3 — APPLY (solved; any Claude instance)

**Input:** a transcription file with Part A + Part B filled.

**Process:** ADDING-STREETS.md's core loop — for every Part B row: add the
map as a source on the matching segment(s) (unless an earlier-dated source
covers the same claim); split segments where the documented extent demands
(from/to cross-streets, intersect.js bands, `how` tags, 3rd Street as
exemplar); create partial entries for streets with none; bank unresolved
rows in research-leads.md; `node check-data.js` after every street.

**Spot-check obligation:** stage 3 verifies at least one Part A claim
against the scan, and treats any alignment-based Part B row as flaggable —
"(identified by map alignment)" goes in the source title.

**Output:** edits to streets-data.js + research-leads.md, the transcription
file's Part B marked applied, and a change list for human review (map search
box spot-checks).

---

## Division of labor, today

| stage | who | scale |
|---|---|---|
| 1 harvest | browser instance (NavigateLA) + human download click | batch |
| 1 transcribe | any model (TEMPLATE.md prompt) | batch |
| 2 align | **human** (align.html, seconds per sheet) | bottleneck |
| 2 trace/verdict | instance running georef.py on human alignment, or human | bottleneck |
| 3 apply | Claude instance (agent batches, reviewed) | batch |

The bottleneck row is the research target: reductions 1 and 2 above are the
two candidate attacks, and the benchmark section defines "solved."
