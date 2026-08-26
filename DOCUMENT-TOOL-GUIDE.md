# Using the document tool

How to turn a scanned map into a `documents/<id>.js` file. Written for Kenny;
the design reasoning is in TOOL-SPEC.md and the data contract in MODEL-SPEC.md.

**Phase 1 is what exists today**: align the scan, draw the coverage polygon,
fill the header, save. Rows — which street was called what — come later, from
the AI pass and phase 2 review.

---

## Before you start: get a render

The tool wants a PNG, not a PDF. From the project folder:

```
pdftoppm -png -r 100 "tracts/MR066-035.pdf" tracts/renders/MR066-035
```

That writes `tracts/renders/MR066-035-1.png` (one file per page — the `-1` is
the page number, and multi-page maps give you `-2`, `-3`…). **Use 100 dpi**:
it is the project's alignment convention, and every stored pixel coordinate is
meaningless against a render at a different resolution. Re-render at `-r 300`
if you need to *read* fine label text, but align against the 100 dpi one.

## Starting the tool

Two steps, both from the project folder:

```
python3 -m http.server 8000
```

then open **http://localhost:8000/document-tool.html** in Chrome.

**Do not double-click the HTML file.** Opening it as `file://` looks like it
works and then fails in two ways that are hard to diagnose: the save dialog
never appears (the File System Access API needs a secure context, and
localhost counts as one but `file://` does not), and loading a document by id
silently 404s. If the Save button starts downloading files to your Downloads
folder instead of asking where to put them, that's the symptom.

## Opening something

The **Start** section at the top left has three ways in:

- **Resume a document** — type an id (`mr066-035`, no `.js`) and click Load.
  This is the main path once a document exists: it restores the header fields,
  the coverage ring, fetches the render named in the file, and puts the scan
  back exactly where you left it. Any rows already in the file are left
  untouched.
- **Start fresh from a render** — type the path (`tracts/renders/MR066-035-1.png`)
  and click Load. Anything under the project folder works, since the page is
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
- **scan** — the local source file, `tracts/MR066-035.pdf`. Optional.
- **transcription** — the Part A file, if one exists.
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

**Save document + alignment** writes two files:

1. `<id>.js` — the document. Put it in `documents/` and add a line for it in
   `documents/index.js`.
2. `<render>-alignment.json` — the control points. Put it in
   `tracts/renders/`. `georef.py` reads this, and the committed alignment
   files are the benchmark for any future automatic aligner.

Chrome asks where to save each one, so you can navigate straight to the right
folder. If the API isn't available they land in Downloads and you move them.

Re-saving an existing document **preserves the prose comment block at the top
of the file** and any rows already in it. Comments *inside* the object are not
preserved — if a caveat matters, it belongs in a row's `note` field, which is
data.

Then, back in the terminal:

```
node check-model.js     # the header and any rows are valid
node generate.js        # rebuild generated/
```

## What phase 1 does not do

It never writes rows, and it always saves `sweptFully: false`. A document
whose coverage is drawn but whose streets are unidentified is a perfectly good
intermediate state — that's the handoff to the AI pass (TOOL-SPEC.md §3) and
then to phase 2 review, where rows get confirmed and the sweep gate finally
flips.

## When something looks wrong

| symptom | cause |
|---|---|
| Save downloads instead of asking where | opened as `file://`, not through localhost |
| "could not load …" on a render path | path is relative to the project folder: `tracts/renders/X.png` |
| Load by id does nothing | no `documents/<id>.js` yet — use the render path instead |
| No red streets at all | `streets-geometry.js` missing or the view is far from downtown; try Set view with `34.0570, -118.2590, 0.55` |
| Alignment restores in the wrong place | the render is a different page or resolution than the one the alignment was made against — check `alignment.image` |
| Streets-in-coverage count looks too low | polygon drawn over the sheet edge rather than the tract, or the alignment is off |
