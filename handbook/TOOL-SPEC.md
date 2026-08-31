# Spec: the document tool (align → propose → review)

**Status (2026-08-25): specified, not built.** Target file:
`document-tool.html`, a single self-contained page served from the project
folder. `align.html` was retired to `attic/` when this superseded it (2026-08-26).

Written against MODEL-SPEC.md as amended 2026-08-25 (§4.4, §4.6, §5.2–§5.5).
Read §0 of that file first if you don't know the project.

---

## 1. The problem it solves

A document reaches `documents/<id>.js` today by a chain of hand steps: a human
aligned the scan in `align.html`, exported control points, an instance ran
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

Essentially the old `align.html` plus one step.

1. **Load** a render (`documents/<id>/<id>-100dpi.png`) and, if resuming, an
   existing `documents/<id>/<id>.js`.
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
   The alignment is also written beside it as `<id>-alignment.json`, because
   `georef.py` reads it and the four committed alignment files are the
   stage-2 benchmark.

Phase 1 ends with a document that knows where it sits on the earth and what
ground it speaks about — which is exactly enough for a machine to enumerate
the modern segments inside it.

## 3. The step between — proposals from an AI pass

Not part of the tool; the tool's job is to make it possible and to consume the
result.

**What is exported, as built** (the per-street overlay images below remain the
plan; this is what phase 1 writes today). Saving a document produces a folder
meant to be handed over whole:

| file | what it is for |
|---|---|
| `<id>-100dpi.png` | the sheet, at the resolution every pixel coordinate is measured against |
| `<id>.js` | the document — **the AI pass edits this directly**, replacing `rows: []` |
| `<id>-alignment.json` | the human's control points |
| `<id>-streets.json` | every modern street inside coverage, **in render pixels** as well as lat/lng, with its intersections — and the names excluded as slivers or overshoot, so they read as ruled out rather than missed |
| `TASK.md` | the brief: the traps, the row shapes, the closed vocabulary for `street` / `from` / `to` |

`<id>-streets.json` is what makes the folder self-sufficient: without modern
geometry in the scan's own pixel space, an assistant has a picture and no way
to know where anything modern is, which is the one thing the task turns on.
`TASK.md` is regenerated on every save, so it must never carry answers — it is
handed to the system being tested. It says to write reasoning into each row's
`note`, since the tool rewrites the file and comments do not survive.

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
| NONE / CROSSING | `absent` on that street's in-bounds extent |
| a plat corridor no modern street matched | `vanished`, traced in scan pixels |

**Which model does it is an empirical question with an answer already in the
repo.** Four sheets in `overlay-trial/` have known answers in `ANSWER-KEY.md`,
including the ★ rows where name continuity gives the wrong result. Run the
benchmark before trusting any system on a fresh sheet; a system that gets the
unchanged names right and the ★ rows wrong is name-matching, not reading
geometry.

**Everything returned lands `confirmed: false`** (§5.5). Proposals are never
data until a human says so, and `generate.js` holds them back from the map
entirely until the flag is gone.

**And nothing returned carries a `name`.** The pass is told to leave it out and
put the ink in `asWritten`: identity needs the whole corpus in view, not one
sheet (MODEL-SPEC §5.5). It is assigned in review.

## 4. Phase 2 — review, correct, confirm

The screen shows the scan with the alignment applied, and **only** the modern
segments inside the coverage polygon, coloured:

| colour | meaning |
|---|---|
| green | a `state` row: the sheet letters a name along this stretch |
| amber | an `unnamed` row: the sheet draws the roadway and letters nothing |
| grey | an `absent` row: the sheet draws no street on this ground |
| red | unaccounted — no row speaks for it |
| purple | a `vanished` trace: drawn pavement with no modern successor |



Proposals render dashed, so unconfirmed work is findable at a glance. Ghost
traces sit in place on the scan; clutter is managed by zooming, not by hiding
them. Nothing is lettered on the map: the point of the mode is to compare a
coloured line against the ink beneath it, and writing the plat's own label
over its own drawing hides the thing being judged.

**Unaccounted is a stretch, not a street.** A document can name one stretch of
a street and say nothing about the next, and that is the normal case. Colour
by street would paint the whole of it "identified" the moment one row existed
— which is what happened, and the missing 152 m of Douglas Street on
MR006-138 sat invisible as background until this was fixed. What no row speaks
for is computed per run in metres and drawn over exactly the part that is
missing (`runGaps`, §6).

**Clicking a stretch** opens a popup about **that stretch only**, showing
everything in its row — modern
name and bounds, the name entity and its display form, `asWritten`, `basis`,
`attests`, `note` — because all of it is what the human is confirming. The
popup offers:

- **Confirm** (the checkbox that matters).
- **Change the kind** — `state` / `unnamed` / `absent`, with what each claims
  written beside it. This is the correction the AI pass most often needs, and
  it can only be made looking at the ink. Changing a kind drops the fields the
  new kind cannot carry and un-confirms the row, because it now says something
  else.
- **Delete the row** — the stretch goes back to unaccounted, and the sweep gate
  notices.
- **Re-trace a `vanished` row** — replaces the polyline and keeps the label,
  the entity and everything else.
- **Change the identification** — type to search name entities across all
  recorded forms, with the same disambiguation labels the map's search uses,
  plus *create a new entity*. Creating one must show any existing entity with
  a matching form and where it sits, so the conservative default (§3: separate
  entities unless spelling *and* extent match) is visible rather than
  remembered.
- **Edit `asWritten`** — verbatim ink, typos included; never auto-promoted
  into the entity's spellings (§5.1).
- **Split the stretch in two** — click a point along the segment; it becomes
  a cross-street name when one is within 40 m, a scan pixel otherwise (§5.4).
  One row goes in, two come out, meeting at that point, and **both come back
  unconfirmed**: the reason to split is that the original claim was wrong
  about part of its ground, and which part is what has not been decided. The
  half that keeps `from` keeps the canonical direction, so both stay in the
  order §5.4 reads them in. The boundary can only land on a vertex of the
  modern geometry — extents resolve by snapping to the nearest one — so where
  a stretch has no vertex between its ends the tool says so rather than
  storing a boundary it cannot honour. This is the alternative to narrowing an
  extent, which would silently drop the other half out of the accounting.
- **Mark as absent** — flip a `state` row to a `absent` one.
- **On an unaccounted stretch, three offers and no default**: *sheet shows
  nothing here*, which writes an `absent` row with the extents worked out by
  snapping; *outside coverage — this stretch*; or *outside coverage — all of
  this street*. The first is a claim about the map, the other two about the
  polygon. They are different claims and only the first is evidence
  (MODEL-SPEC §4.4).
- **Set `basis` and the `attests` override** — whether this map *dedicates*
  the street (`planned-on`) or merely draws one already there (`planned-by`)
  is a judgement best made looking at the plat.

**Tracing a vanished street**: draw a polyline along the drawn corridor and
type `asWritten` verbatim. Stored in scan pixels (§4.6), so a later
re-alignment moves the ghost with the map. It lands `confirmed: false` with no
entity, and the popup opens on it — an unnamed trace cannot be confirmed and
blocks the sweep, which is how it avoids being forgotten.

**The other stretches of the same street** are listed under the row as links,
not as more forms. Showing every row on a street at once made the controls
ambiguous the moment there were three of them — "which stretch am I excluding?"
had no answer.

**Export notes for the next AI pass**: rather than retyping, the tool emits
the unconfirmed and rejected rows with the human's comments, formatted as a
prompt for another round. That is what makes phase 3–4 alternate rather than
being one-shot.

**The sweep gate**: `sweptFully` may be set only when no *stretch* is
unaccounted, every row is confirmed, and every naming row has an entity.
Setting it is what licenses negative inference from this document (§4.5), so
it is a gate that states what is still missing — in metres and street names —
rather than a status field. It fills `sweptFor` with the streets in coverage
when it goes through. It also **lists the rows it is waiting on**, each with
its length and each a way to get to that row: a count is a dead end when the
blocker is a 30 m duplicate drawn underneath a 200 m row on the same street,
which is a shape the AI pass produces. Whatever the popup is about is drawn
haloed and last, so a stretch buried under a longer one becomes visible the
moment it is the subject. The list is shown for an already-swept document too:
editing one leaves proposals behind, and `sweptFully: true` standing over
unconfirmed rows claims a silence the rows no longer back.

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
they are where absent wrongness would hide:

- `scanToWorld` / `worldToScan` — pixel ↔ lat/lng through the alignment.
  Round-tripping a point must return it within a pixel.
- `pointInPolygon` — is a coordinate inside coverage.
- `segmentsInBounds` — which geometry ways intersect the coverage polygon,
  and where they enter and leave it. Clipped at the **boundary**: a way whose
  next vertex is outside must still contribute the part that is inside, and a
  way that crosses with no vertex inside must not vanish.
- `stitchRuns` — OSM splits a street into many ways; join the in-bounds pieces
  back into continuous polylines before measuring or clipping anything.
- `runGaps` — given a run and the ranges rows speak for, the stretches nothing
  speaks for, above the 25 m floor. This is what makes the sweep gate a claim
  about ground rather than about street names.
- `zoomView` — zoom about a fixed screen point. A sign error here does not look
  like a broken zoom; it looks like the map scrolling away under you.
- `nearestCrossStreet` — given a point on street X, the nearest street
  intersecting X, and the distance. This is `intersect.js`'s job in the
  browser; reuse its logic rather than reimplementing.
- `snapOrPoint` — cross-street name if one is within tolerance, else a pixel
  point (§5.4).

Test with fixtures from the real data: MR066-035's committed alignment (frozen
in `fixtures/`, so a document being edited cannot break the tests), and known
intersections (`node intersect.js "3rd Street" "Bixel Street"`) as expected
values for the snapping.

Three suites, and they catch different things:

| suite | what it runs | what it can see |
|---|---|---|
| `node test-doc-geometry.js` | `doc-geometry.js` | the pure geometry: alignment round-trips, polygon clipping, snapping |
| `node test-review.js` | the review model, **extracted from `document-tool.html`** rather than copied, so it cannot drift | gaps, the confirm and sweep gates, extents, slivers |
| `node browser-test.js` | the real page in a real browser (Playwright) | everything the other two structurally cannot: whether a panel is on screen, whether a click reaches it, whether a button does anything |
| `node preview-test.js` | `preview.html` on generated data, in a real browser | what the MAP says: which stretches are blue, what a popup prints. Needs `npm install leaflet@1.9.4 --no-save` to stand in for the CDN copy |

The last two exist because two shipped bugs were invisible to unit tests — a
stylesheet rule that made the review panel and every popup `display:none`, and
a stale index that made the gap buttons silently do nothing. Playwright is not
installed on Kenny's machine; that suite runs in the assistant's sandbox.

## 7. What the tool must not do

- **Decide name identity.** It offers candidates and shows their extents; a
  human picks or creates.
- **Promote `asWritten` into a name's spellings.** That is a judgement about
  what was a real form versus a scribal error (§5.1).
- **Infer dates.** Dates come from the document header and the generator.
- **Write `names.js`.** New entities go to `names-new.js`, quarantined and
  marked `pendingResearch` (MODEL-SPEC §3); the authored file stays a human's.
  The tool re-reads `names-new.js` from disk before rewriting it, so a hand
  edit made while the page was open is merged rather than overwritten.
- **Set `sweptFully` on its own**, ever. A human presses it, and only once
  nothing in coverage is unaccounted, no proposal is outstanding, and every
  naming row has an entity — the tool states what is missing rather than
  choosing for you.
- **Decide whether a stretch is `absent` or outside coverage.** Both are
  offered on an unaccounted stretch and neither is default: one is a claim
  about the map, the other about the polygon (MODEL-SPEC §4.4).

## 8. First subject: MR066-035

The adversarial benchmark, deliberately. Its answers are known
(`overlay-trial/ANSWER-KEY.md`), a human alignment is already committed
(`documents/mr066-035/mr066-035-alignment.json`), it is small, and two of its rows
are already encoded. Finishing it means roughly four to six rows — adding
Bixel, and the plat's "Figueroa St" which is modern **Boylston** — and
flipping it to `sweptFully: true`.

The first run therefore tests the tool as much as the sheet: if it leads to
Third = Miramar and Arnold = 3rd, the gesture works. If it nudges toward name
continuity, the interface has a bug and the sheet has told us so.
