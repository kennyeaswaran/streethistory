# Using the document tool

How to turn a scanned map into a `documents/<id>.js` file. Written for Kenny;
the design reasoning is in TOOL-SPEC.md and the data contract in MODEL-SPEC.md.

**Phase 1** is align the scan, draw the coverage polygon, fill the header,
save. Rows — which street was called what — come from the AI pass in between.
**Phase 2 is the Review mode**, which today *shows* you what those rows claim
but does not yet let you confirm or correct them; corrections still go into
the `.js` by hand.

---

## Before you start: make the document's folder

Every document lives in `documents/<id>/`, holding everything about it — the
document file, the alignment, the render, the source scan and the Part A
transcription. That folder is the unit you can hand whole to another AI
system, which is what the next stage of the workflow needs.

A fresh download goes into `inbox/`. Then **double-click
`new-document.command`**: it lists what's waiting, asks which one and what id
to give it, creates `documents/<id>/`, moves the scan in, renders it at 100
dpi, and prints the render path to paste into the tool. `inbox/` empties as
you work, which is the point of it.

*(100 dpi is the project's alignment convention — every stored pixel
coordinate is meaningless against a render at another resolution. Re-render at
`-r 300` if you need to* read *fine label text, but align against the 100 dpi
one.)*

If you'd rather do it by hand:

```
mkdir -p documents/mr066-035
mv inbox/MR066-035.pdf documents/mr066-035/mr066-035.pdf
pdftoppm -png -r 100 documents/mr066-035/mr066-035.pdf \
         documents/mr066-035/mr066-035-100dpi
```

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

**Rotation is the easiest thing to leave undone**, and the most likely reason
a nearly-right alignment is wrong: getting position and scale right while the
sheet sits at 0° will put the corners a street-width out even though the middle
looks perfect. Check the corners, not the centre.

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
  Leave it blank if you would rather have it transcribed from the sheet's own
  title block: `TASK.md` will ask for it, and the checker treats a document
  with no rows as a stub and only warns.
- **shortTitle** — a few words for generated prose ("…on the 1875 Thomas
  Tract map").
- **url** — where the scan lives online.
- **scan** — the source file, `documents/<id>/<id>.pdf`. Optional.
- **transcription** — the Part A file, `documents/<id>/<id>-partA.md`, if one
  exists.
- **date** — *on* for a known date, *after*/*before* for a range. A Sanborn
  sheet from a volume corrected over decades is `after: "1906"`. Blank is
  allowed, and gets asked for in `TASK.md` like the title.
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

The first Save asks you to choose the project folder — once, ever. Chrome
remembers it between sessions (re-confirming access on the first save of each
session), and after that Save writes silently into `documents/<id>/`. There is
a *Connect project folder* button in the Write section if you would rather do
it up front.

**Save document + alignment** writes four files into `documents/<id>/`:

1. `<id>.js` — the document itself.
2. `<id>-alignment.json` — the control points, in the schema `georef.py`
   reads. Written separately as well as inside the document because these
   hand fits are the benchmark for any future automatic aligner.
3. `<id>-streets.json` — where every modern street inside the coverage polygon
   runs today, **in pixels on the render** as well as in lat/lng, with the
   intersections along each one. This is what makes the folder self-sufficient:
   an assistant given only this folder can lay those pixel polylines over the
   image and see what the sheet draws along them. Without it, it has a scan and
   no idea where anything modern is — which is the one thing the task turns on.
4. `TASK.md` — the brief for the AI pass: what the sheet is, which modern
   streets fall inside the coverage polygon, the rules that decide a match,
   the name entities that already exist, and the row format to hand back. It
   exists so that dragging the folder into an assistant is the whole
   instruction.

`TASK.md` is regenerated on every save, so edits to it are lost — and it must
stay free of answers, since it is handed to the assistant being tested. If you
ever need to add standing guidance for the AI pass, it belongs in the generator
in `document-tool.html`, not in the file.

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

## The AI pass, and reviewing what it says

Phase 1 never writes rows, and always saves `sweptFully: false`. A document
with its coverage drawn and no streets identified is a complete, correct
intermediate state, not an unfinished one. The rest of the sequence:

1. **Phase 1** — align, bound, save the header.
2. **The AI pass** — drag `documents/<id>/` into an assistant; `TASK.md` in it
   is the brief, and it already restates the traps and the row shapes. What
   comes back is rows marked `confirmed: false`. Paste them into the `rows: []`
   array in `documents/<id>/<id>.js`. (`overlay-trial/INSTRUCTIONS-v2.md` and
   `ANSWER-KEY.md` are the benchmark for deciding which assistant to trust
   with this.)
3. **Review** — read below.

### Review mode

Press **Review**, the third mode button. If you loaded the document by id and
it already had rows, the tool goes there by itself.

It draws the modern streets *inside the coverage polygon* over the aligned
scan, each in the colour of what the rows say about it:

| colour | meaning |
|---|---|
| green | the document names this stretch (`state`) |
| blue | a renaming happens here (`change`) |
| grey | covered, and the sheet draws nothing there (`silent`) |
| **red** | **unaccounted** — in coverage, and no row says anything |
| purple | drawn on the plat with no modern counterpart (`vanished`) |

Solid means authored or confirmed; **dashed means proposed** — a
`confirmed: false` row nobody has checked. The plat's own label is lettered
along each stretch, so you can read the AI's claim against the ink underneath
it without opening the file.

Click any coloured street for the rows behind it in full — entity id,
`asWritten`, extent, `attests`, `basis`, note. The panel on the left lists every
street in coverage with unaccounted ones first, and ends with a **"Wants a
look"** section: rows naming a street that is not in the coverage polygon, name
entity ids that are not in `names.js`, cross streets that do not actually meet
the street they are given as an extent for. Those are the errors worth catching
before anything else, because each one means a row that will not survive
`node check-model.js`.

Red is the number that matters. `sweptFully: true` says every street in
coverage has been accounted for, so while anything is still red the document
is not swept — and the tool will not let you claim otherwise, because it does
not write that field at all yet.

**"Re-read rows from disk"** re-fetches just the rows from the document file,
so the loop is: paste the AI's rows into the `.js`, press the button, look.
The alignment and coverage stay exactly where they are.

### What Review deliberately does not do

There is no confirm button and no editing. Correcting a row means editing
`documents/<id>/<id>.js` and pressing Re-read. That is on purpose for now: an
edit that silently rewrites what a document says is a much more dangerous
operation than moving a scan around, and it wants the same care the alignment
got. When it is built, the rule from TOOL-SPEC §7 still holds — confirming a
row must never be easier than reading it.

## When something looks wrong

| symptom | cause |
|---|---|
| Save downloads instead of asking where | opened as `file://`, not through localhost — or a browser other than Chrome |
| Save asks where to put files every time | the project folder isn't connected — use the button in the Write section |
| "remembered — Save will ask to re-confirm" | normal at the start of a session; the first Save re-grants access |
| Save says the remembered folder "is not the project folder" | it was pointing somewhere stale and has been forgotten; press Save again and pick the folder containing `documents/`. Nothing was written |
| Scan drifts off the streets as you zoom | fixed 2026-08-26; if you still see it, reload — an old copy of the page may be cached |
| `start-tools.command` opens in a text editor | it lost its executable bit; `chmod +x start-tools.command` in Terminal, once |
| "Ports 8000-8010 are all busy" | an old server is still running; close its Terminal window |
| "could not load …" on a render path | path is relative to the project folder: `tracts/renders/X.png` |
| Load by id does nothing | no `documents/<id>.js` yet — use the render path instead |
| No red streets at all | `streets-geometry.js` missing or the view is far from downtown; try Set view with `34.0570, -118.2590, 0.55` |
| Alignment restores in the wrong place | the render is a different page or resolution than the one the alignment was made against — check `alignment.image` |
| Streets-in-coverage count looks too low | polygon drawn over the sheet edge rather than the tract, or the alignment is off |
| Review mode is empty / all red | the document has no rows yet — that is what the AI pass produces |
| "Re-read rows from disk" errors | the `.js` no longer parses; a pasted row is probably missing a comma or a brace |
| A row you pasted does not appear | check "Wants a look" — its `street` is probably misspelled or outside coverage |
