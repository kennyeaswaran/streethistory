# Using the document tool

How to turn a scanned map into a `documents/<id>.js` file. Written for Kenny;
the design reasoning is in TOOL-SPEC.md and the data contract in MODEL-SPEC.md.

**Phase 1 is what exists today**: align the scan, draw the coverage polygon,
fill the header, save. Rows — which street was called what — come later, from
the AI pass and phase 2 review.

---

## Before you start: make the document's folder

Every document lives in `documents/<id>/`, holding everything about it — the
document file, the alignment, the render, the source scan and the Part A
transcription. That folder is the unit you can drag whole into another AI
system, which is what the next stage of the workflow needs.

A fresh download lands in `inbox/`. To start work on one:

```
mkdir -p documents/mr066-035
mv inbox/MR066-035.pdf documents/mr066-035/mr066-035.pdf
pdftoppm -png -r 100 documents/mr066-035/mr066-035.pdf \
         documents/mr066-035/mr066-035-100dpi
```

That writes `mr066-035-100dpi-1.png` (one file per page — the `-1` is the page
number, and multi-page maps give you `-2`, `-3`…). **Use 100 dpi**:
it is the project's alignment convention, and every stored pixel coordinate is
meaningless against a render at a different resolution. Re-render at `-r 300`
if you need to *read* fine label text, but align against the 100 dpi one.

## Starting the tool

**Double-click `start-tools.command`** in the project folder. It serves the
folder, opens the document tool in Chrome, and prints the URLs of the other
pages (preview, live map, old aligner) in case you want them. Leave the
Terminal window it opens alone while you work — that window *is* the server,
and closing it stops serving.

It picks a free port if 8000 is busy, and if a server is already running on
this folder it reuses that one instead of starting a second.

The manual equivalent, if you ever need it, is `python3 -m http.server 8000`
from the project folder and then http://localhost:8000/document-tool.html.

**Do not double-click `document-tool.html` itself.** Opening it as `file://`
looks like it works and then fails in two ways that are hard to diagnose: the
save dialog never appears (the File System Access API needs a secure context,
and localhost counts as one but `file://` does not), and loading a document by
id silently 404s. If Save starts dropping files into Downloads instead of
asking where to put them, that's the symptom.

## Opening something

The **Start** section at the top left has three ways in:

- **Resume a document** — type an id (`mr066-035`, no `.js`) and click Load.
  This is the main path once a document exists: it restores the header fields,
  the coverage ring, fetches the render named in the file, and puts the scan
  back exactly where you left it. Any rows already in the file are left
  untouched.
- **Start fresh from a render** — type the path
  (`documents/mr066-035/mr066-035-100dpi-1.png`) and click Load. Anything under the project folder works, since the page is
  being served from there.
- **Pick a file** — the ordinary file chooser, for a render that lives
  somewhere else.

## Aligning

The scan sits over the live modern street network, drawn in red with purple
labels. In **Align** mode:

| gesture | effect |
|---|---|
| drag | move the scan |
| wheel | scale the scan |
| shift+drag | pan the view (scan stays put on the ground) |
| shift+wheel | zoom the view |
| rotation slider / ↺ ↻ buttons | rotate the scan (the buttons nudge 0.1°) |
| opacity slider | see through the scan while matching lines |

**Fit scan** re-centres the view on the scan if you lose it. The readout along
the bottom gives the cursor's lat/lng, the scan pixel under it, the current
scale in metres per pixel and the rotation.

What a good alignment looks like: the drawn streets sit *on* the red lines
along their whole length. Expect up to about a street's width of offset —
1890s surveying, paper stretch, later regrading — but a *systematic* misfit
that grows across the sheet means something is wrong, usually rotation or
scale rather than position.

**One trap worth naming.** Do not align by making names match. On M.R. 66-35
the plat's "Third St" is modern **Miramar**, and its "Arnold St" is modern
**3rd** — a sheet aligned so that the two Thirds coincide is wrong by a block,
and the misfit is small enough to look plausible. Align on the *shape* of the
street network: corners, angles, block sizes, where things bend.

## Drawing the coverage polygon

Switch to **Coverage** mode. The scan locks (so you can't nudge the alignment
while tracing), drag pans, wheel zooms, and each click drops a vertex.

Trace **the area the document actually informs about** — for a tract map, the
drawn tract boundary, *not* the edge of the sheet. This matters more than it
looks: coverage is what will later license the claim "this document shows no
street here," so a polygon that includes blank margin paper would eventually
license that claim over blocks the map never depicted.

Undo point / Clear are under the counter. The **Write** section on the right
tells you how many modern streets currently fall inside the ring — check that
number against what you can see on the scan before saving. If it says 2 and
the plat clearly draws five streets, the polygon or the alignment is wrong.

## Filling the header

Right-hand panel, top to bottom:

- **id** — the file name, lowercase: `mr066-035`, `sanborn-1894-v1-s12`.
- **title** — the full citation, as it will appear as a source on the map.
- **shortTitle** — a few words for generated prose ("…on the 1875 Thomas
  Tract map").
- **url** — where the scan lives online.
- **scan** — the source file, `documents/<id>/<id>.pdf`. Optional.
- **transcription** — the Part A file, `documents/<id>/<id>-partA.md`, if one
  exists.
- **date** — *on* for a known date, *after*/*before* for a range. A Sanborn
  sheet from a volume corrected over decades is `after: "1906"`.
- **type** — tract-map, survey, sanborn, directory, ordinance, news-report.
- **attests** — what the document proves about the *roadway*:
  - `planned-on` — the document **is** the planning act. A recorded plat
    dedicates the streets it creates.
  - `planned-by` — it merely shows a street that already existed. Safer
    default for a tract map, since plats routinely draw the roads they abut.
  - `built-by` — physically existed by then. Sanborn and directories.
  - This is the document's default; individual streets can override it later.
- **completeness** — `exhaustive-in-scope` only if the document claims to list
  *everything* in its scope (an ordinance does; a map doesn't). It is what
  makes the document's silence meaningful, so don't set it loosely.
- **readBy** — human, instance, or instance+alignment.

## Saving

**Connect the project folder first** — the button is in the Write section, and
it only has to be done once. Chrome remembers the folder between sessions (it
will ask you to re-confirm access the first time you save in a new session).
After that, Save puts both files exactly where they belong and you never pick
a location.

**Save document + alignment** writes three files into `documents/<id>/`:

1. `<id>.js` — the document itself.
2. `<id>-alignment.json` — the control points, in the schema `georef.py`
   reads. Written separately as well as inside the document because these
   hand fits are the benchmark for any future automatic aligner.
3. `TASK.md` — the brief for the AI pass: what the sheet is, which modern
   streets fall inside the coverage polygon, the rules that decide a match,
   and the row format to hand back. It exists so that dragging the folder
   into an assistant is the whole instruction.

Without a connected folder it falls back to asking where to put each file
(or downloading them, outside Chrome), and then you move them yourself.

Re-saving an existing document **preserves the prose comment block at the top
of the file** and any rows already in it. Comments *inside* the object are not
preserved — if a caveat matters, it belongs in a row's `note` field, which is
data.

Then, back in the terminal:

```
node check-model.js     # the header and any rows are valid
node generate.js        # rebuild generated/
```

## What happens next — and what phase 2 is

Phase 1 never writes rows, and always saves `sweptFully: false`. A document
with its coverage drawn and no streets identified is a complete, correct
intermediate state, not an unfinished one.

**Phase 2 does not exist yet** — there is no button to press and nothing to
look for in the tool. When it is built it will live in this same page, as a
second mode, and the sequence will be:

1. **Phase 1** (today) — align, bound, save the header.
2. **The AI pass** — drag `documents/<id>/` into an assistant; `TASK.md` in it
   is the brief. Eventually the tool will also export one image per in-bounds
   modern street,
   an AI system proposes which plat street each corresponds to, and those
   arrive as rows marked `confirmed: false`. The instructions for that already
   exist in `overlay-trial/INSTRUCTIONS-v2.md`, and `ANSWER-KEY.md` is the
   benchmark for deciding which AI system to trust with it.
3. **Phase 2** — the in-bounds segments are drawn over the scan in colours for
   identified / no-counterpart / unaccounted, you click through them, correct
   what is wrong, tick what is right, and when nothing is unaccounted the
   document can finally be marked `sweptFully: true`.

So for now, the useful thing to do with a finished phase-1 document is simply
to have it: the coverage polygon and the alignment are what make everything
downstream possible, and neither can be produced any other way.

## When something looks wrong

| symptom | cause |
|---|---|
| Save downloads instead of asking where | opened as `file://`, not through localhost — or a browser other than Chrome |
| Save asks where to put files every time | the project folder isn't connected — use the button in the Write section |
| "remembered — Save will ask to re-confirm" | normal at the start of a session; the first Save re-grants access |
| Scan drifts off the streets as you zoom | fixed 2026-08-26; if you still see it, reload — an old copy of the page may be cached |
| `start-tools.command` opens in a text editor | it lost its executable bit; `chmod +x start-tools.command` in Terminal, once |
| "Ports 8000-8010 are all busy" | an old server is still running; close its Terminal window |
| "could not load …" on a render path | path is relative to the project folder: `tracts/renders/X.png` |
| Load by id does nothing | no `documents/<id>.js` yet — use the render path instead |
| No red streets at all | `streets-geometry.js` missing or the view is far from downtown; try Set view with `34.0570, -118.2590, 0.55` |
| Alignment restores in the wrong place | the render is a different page or resolution than the one the alignment was made against — check `alignment.image` |
| Streets-in-coverage count looks too low | polygon drawn over the sheet edge rather than the tract, or the alignment is off |
