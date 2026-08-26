# Spec: the document tool (align → propose → review)

**Status (2026-08-25): specified, not built.** Target file:
`document-tool.html`, a single self-contained page served from the project
folder. `align.html` stays until this supersedes it, then retires — the same
pattern `preview.html` is using for `index.html`.

Written against MODEL-SPEC.md as amended 2026-08-25 (§4.4, §4.6, §5.2–§5.5).
Read §0 of that file first if you don't know the project.

---

## 1. The problem it solves

A document reaches `documents/<id>.js` today by a chain of hand steps: a human
aligns the scan in `align.html`, exports control points, an instance runs
`georef.py` to overlay and trace, someone reads a verdict table, and someone
writes the rows. It works, and it produced the 3rd Street evidence base, but
it is slow, it loses the human's judgement into prose, and it cannot be
resumed halfway.

The tool collapses that into two sittings at one screen with an AI pass
between, and — this is the point — makes the human's gesture *be* the data
entry. Clicking a drawn street and then the modern line it corresponds to
records an identification. No pixel coordinates are typed by anyone.

**Why clicking is not just faster but safer.** The project's hardest rule is
match by geometry, never by name (M.R. 66-35's "Third St" is modern Miramar).
A human clicking a red line on an aligned scan is doing geometry by
construction; there is no point in the gesture where a name could stand in for
a match. The interface enforces the rule that instances keep breaking.

## 2. Phase 1 — align, then bound

Essentially today's `align.html` plus one step.

1. **Load** a render (`tracts/renders/*.png`) and, if resuming, an existing
   `documents/<id>.js`.
2. **Align** — drag to move, wheel to scale, slider to rotate the scan over
   the live modern street network drawn from `streets-geometry.js`. Separate
   controls pan and zoom the *view* without disturbing the alignment, so the
   human can check a corner up close and come back out.
3. **Draw the coverage polygon** — click a ring around the area the document
   informs about. For a tract map that is the drawn tract boundary, **not** the
   sheet edge (MODEL-SPEC §4.4: claiming blank paper would license negative
   inference over blocks the map never depicted).
4. **Fill the header** — id, title, shortTitle, url, transcription path, date,
   type, `attests` default, `completeness`, `readBy`.
5. **Write** `documents/<id>.js` with the header, `alignment` (§4.6) and the
   `coverage` polygon **in scan pixels**, `sweptFully: false`, no rows yet.
   Also write the `tracts/renders/<name>-alignment.json` sidecar, because
   `georef.py` reads it and the four committed alignment files are the
   stage-2 benchmark.

Phase 1 ends with a document that knows where it sits on the earth and what
ground it speaks about — which is exactly enough for a machine to enumerate
the modern segments inside it.

## 3. The step between — proposals from an AI pass

Not part of the tool; the tool's job is to make it possible and to consume the
result.

**Export**: for each modern street with geometry inside the coverage polygon,
one image with that street drawn in bold red over the scan and the rest of the
network in faint grey. This is `georef.py overlay-one` driven from the stored
alignment, and it is the format the `overlay-trial/` benchmark already tests.

**Instructions to the model**: `overlay-trial/INSTRUCTIONS-v2.md` is written
for exactly this task — verdict vocabulary (FULL / PARTIAL / CROSSING / NONE),
the corridor-centreline rule, the ban on reasoning from names. It needs only
an appendix mapping verdicts to row kinds:

| verdict | row |
|---|---|
| FULL / PARTIAL | `state` on that street, extent from the matched portion |
| NONE / CROSSING | `silent` on that street's in-bounds extent |
| a plat corridor no modern street matched | `vanished`, traced in scan pixels |

**Which model does it is an empirical question with an answer already in the
repo.** Four sheets in `overlay-trial/` have known answers in `ANSWER-KEY.md`,
including the ★ rows where name continuity gives the wrong result. Run the
benchmark before trusting any system on a fresh sheet; a system that gets the
unchanged names right and the ★ rows wrong is name-matching, not reading
geometry.

**Everything returned lands `confirmed: false`** (§5.5). Proposals are never
data until a human says so.

## 4. Phase 2 — review, correct, confirm

The screen shows the scan with the alignment applied, and **only** the modern
segments inside the coverage polygon, coloured:

| colour | meaning |
|---|---|
| identified | a `state` row covers this segment |
| no counterpart | a `silent` row covers it — the map shows nothing here |
| unaccounted | in bounds, no row either way |
| vanished | a `vanished` trace: drawn pavement with no modern successor |

Confirmed rows render in a stronger tone of their colour, so unconfirmed work
is findable at a glance. Ghost traces sit in place on the scan; clutter is
managed by zooming, not by hiding them.

**Clicking a segment** opens a popup showing everything in its row — modern
name and bounds, the name entity and its display form, `asWritten`, `basis`,
`attests`, `note` — because all of it is what the human is confirming. The
popup offers:

- **Confirm** (the checkbox that matters).
- **Change the identification** — type to search name entities across all
  recorded forms, with the same disambiguation labels the map's search uses,
  plus *create a new entity*. Creating one must show any existing entity with
  a matching form and where it sits, so the conservative default (§3: separate
  entities unless spelling *and* extent match) is visible rather than
  remembered.
- **Edit `asWritten`** — verbatim ink, typos included; never auto-promoted
  into the entity's spellings (§5.1).
- **Split the extent** — click a point along the segment. Snap to a
  cross-street when one is near, otherwise store the point in scan pixels
  (§5.4).
- **Mark as silent** — flip a `state` row to a `silent` one.
- **Set `basis` and the `attests` override** — whether this map *dedicates*
  the street (`planned-on`) or merely draws one already there (`planned-by`)
  is a judgement best made looking at the plat.

**Tracing a vanished street**: draw a polyline along the drawn corridor,
attach an entity and `asWritten`. Stored in scan pixels (§4.6), so a later
re-alignment moves the ghost with the map.

**Export notes for the next AI pass**: rather than retyping, the tool emits
the unconfirmed and rejected rows with the human's comments, formatted as a
prompt for another round. That is what makes phase 3–4 alternate rather than
being one-shot.

**The sweep gate**: `sweptFully` may be set only when no segment is
unaccounted and every row is confirmed. Setting it is what licenses negative
inference from this document (§4.5), so the tool should say so at the moment
of ticking it rather than treating it as a status field.

## 5. Reading and writing `documents/<id>.js`

The files are CommonJS modules with prose comments worth keeping —
`mr066-035.js` opens by explaining that it is the adversarial benchmark. So:

- **Read** by fetching the file, stripping `module.exports =`, and evaluating
  the object (`new Function("return " + body)`, the same trick `check-data.js`
  uses on `streets-data.js`).
- **Preserve** everything before `module.exports` verbatim as an opaque
  prefix, and re-emit it unchanged.
- **Regenerate** the object body with the tool's own serializer. Row-level
  commentary survives as the `note` field (§5.5), which is data; JS comments
  inside the object do not survive, and the tool should say so once, plainly,
  rather than silently eating them.

**File access**: use the File System Access API — `showOpenFilePicker` /
`showSaveFilePicker` return a handle the page can write through repeatedly
without re-prompting, and handles can be kept in IndexedDB across sessions.
It requires a secure context, so the tool must be served (`python3 -m
http.server`), not opened as `file://`. Fall back to download-and-move if the
API is unavailable.

## 6. The geometry core, and how to test it without a browser

Put these in a plain module the page imports and Node can require, because
they are where silent wrongness would hide:

- `scanToWorld` / `worldToScan` — pixel ↔ lat/lng through the alignment.
  Round-tripping a point must return it within a pixel.
- `pointInPolygon` — is a coordinate inside coverage.
- `segmentsInBounds` — which geometry ways intersect the coverage polygon,
  and where they enter and leave it.
- `nearestCrossStreet` — given a point on street X, the nearest street
  intersecting X, and the distance. This is `intersect.js`'s job in the
  browser; reuse its logic rather than reimplementing.
- `snapOrPoint` — cross-street name if one is within tolerance, else a pixel
  point (§5.4).

Test with fixtures from the real data: MR066-035's committed alignment, and
known intersections (`node intersect.js "3rd Street" "Bixel Street"`) as
expected values for the snapping.

## 7. What the tool must not do

- **Decide name identity.** It offers candidates and shows their extents; a
  human picks or creates.
- **Promote `asWritten` into a name's spellings.** That is a judgement about
  what was a real form versus a scribal error (§5.1).
- **Infer dates.** Dates come from the document header and the generator.
- **Write `names.js`.** New entities created in the tool are emitted as a
  patch for review, not merged silently into the authored file.
- **Set `sweptFully` on its own**, ever.

## 8. First subject: MR066-035

The adversarial benchmark, deliberately. Its answers are known
(`overlay-trial/ANSWER-KEY.md`), a human alignment is already committed
(`tracts/renders/MR066-035-alignment.json`), it is small, and two of its rows
are already encoded. Finishing it means roughly four to six rows — adding
Bixel, and the plat's "Figueroa St" which is modern **Boylston** — and
flipping it to `sweptFully: true`.

The first run therefore tests the tool as much as the sheet: if it leads to
Third = Miramar and Arnold = 3rd, the gesture works. If it nudges toward name
continuity, the interface has a bug and the sheet has told us so.
