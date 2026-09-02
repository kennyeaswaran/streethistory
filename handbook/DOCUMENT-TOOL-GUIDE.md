# Using the document tool

How to turn a scanned map into a `documents/<id>.js` file. Written for Kenny;
the design reasoning is in TOOL-SPEC.md and the data contract in MODEL-SPEC.md.

**Phase 1** is align the scan, draw the coverage polygon, fill the header,
save. Rows — which street was called what — come from the AI pass in between.
**Phase 2 is the Review mode**: it draws what those rows claim on the sheet
they were read from, lets you give each one a name entity, tick it off, and
mark the document swept.

---

## Before you start: make the document's folder

**Double-click `new-document.command`.** Pick a scan from `inbox/`, give it an
id, and it creates `documents/<id>/` holding the scan and a 100 dpi PNG render.
Use 100 dpi: it is the project's alignment convention, and every stored pixel
coordinate is meaningless against a render at another resolution. Re-render at
300 dpi if you need to *read* fine label text, but align against the 100 dpi
one.

### A multi-page scan becomes one document per page

A recorded map of two sheets gives you `documents/<id>-p1/` and
`documents/<id>-p2/`, each with its own copy of the PDF and its own render.
That is not a filing preference — **a document carries one alignment and one
coverage polygon**, and two sheets have two of each. Both pages in one folder
means the second sheet's `<id>.js`, alignment and streets bundle overwrite the
first sheet's. The two sheets share a `title` and a `url`, which is what makes
them one recorded map; give each its own `shortTitle` ("… sheet 2").

The script tells you the page count and asks which pages you want, because a
sheet with nothing worth recording on it is common — index sheets, certificate
pages, blocks that were never built. Press return for all of them.

**A sheet you decide to skip later** goes in `documents/_<id>-p2/` — the
leading underscore is the parking convention, so the checker and generator
ignore it while the render stays on disk. M.R. 13-87's sheet 2 is the worked
example.

If you ever paste a page-suffixed render into a folder that already has an
alignment for a different image, Save will stop and say so rather than
silently replacing it.

## Starting the tool

**Double-click `start-tools.command`** in the project folder. It serves the
folder, opens the document tool in Chrome, and prints the URLs of the other
pages in case you want them. Leave the Terminal window it opens alone while you
work — that window *is* the server, and closing it stops serving.

It picks a free port if 8000 is busy, reuses a server already running on this
folder, and writes `project-info.json` so the tool can tell you by name which
folder to connect.

The manual equivalent is `python3 -m http.server 8000` from the project folder,
then http://localhost:8000/document-tool.html.

**Do not double-click `document-tool.html` itself.** Opening it as `file://`
looks like it works and then fails in two ways that are hard to diagnose: the
save dialog never appears (the File System Access API needs a secure context,
and localhost counts as one but `file://` does not), and loading a document by
id silently 404s. If Save starts dropping files into Downloads instead of
asking where to put them, that is the symptom.

## The panel

One panel, top left. The three mode buttons are at the top and **everything
below them belongs to the mode you are in** — the alignment sliders in Align,
the polygon controls and the document header in Coverage, the row list and the
sweep in Review. Only two things sit outside that: the **Open** box at the top,
and the **Project folder** control at the bottom, which both saves need.

## Opening something

The **Open** box at the top of the panel. It is open while nothing is loaded and
folds itself away afterwards; the line under it says what you have open.

- **A saved document** — type an id (`mr066-035`, no `.js`) and Load. This is
  the main path: it restores the header, the coverage ring, the render and the
  alignment, and if the document already has rows it goes straight to Review.
- **A bare scan** — type a path (`documents/mr066-035/mr066-035-100dpi.png`) and
  Load, or pick a file from anywhere. This is how a new document starts.

### What's left to do

**Open → "What's left to do"** reads every folder under `documents/` and sorts
them by what they still need:

- **needs aligning** — no `alignment` block saved yet
- **needs a first pass** — aligned, but no rows; this is the state in which you
  hand the folder to an assistant
- **needs your review** — rows are in, with the count
- **swept** — folded away, since its only job is to be countable

Clicking one opens it. The list is read, not stored: sweep state already lives
in each document file, and putting it in the folder NAME as well — or moving
folders between an inbox / in-progress / done tree — would be the same fact in
two places, free to disagree. Moving a folder is worse than duplication: the
paths inside the file (`alignment.image`, `scan`, `transcription`) are
project-relative, and every move would break them. That bug has happened here
once already.

It needs the project folder connected, since it reads the folder rather than
the served copy. Each document file is read as text and pattern-matched, not
evaluated, so one malformed file shows as "no .js" instead of taking the list
down with it.

## Aligning

The scan sits over the live modern street network, drawn in red with purple
labels. **Drag moves** is a switch at the top of the Align controls: the scan,
or the map under it. Which one you want changes minute to minute, and shift
inverts whichever way it is set.

| gesture | with "the scan" | with "the map under it" |
|---|---|---|
| drag | move the scan | slide the map under it |
| wheel | scale the scan | zoom the map |
| shift + either | acts on the map | acts on the scan |

The scan is anchored to the *ground*, not the screen, so moving the map never
disturbs an alignment you have already made. **Find the scan** re-centres on it
if you lose it. Coordinates can still be typed under *Jump to coordinates*, but
you will rarely know them; the readout along the bottom gives the cursor's
lat/lng, the scan pixel under it, the current scale in metres per pixel and the
rotation.

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
2. **The AI pass** — drag `documents/<id>/` into an assistant. `TASK.md` in it
   is the whole brief: the traps, the row shapes, and an instruction to edit
   `<id>.js` **directly** rather than hand back a separate file to be merged.
   `<id>-streets.json` beside it carries the modern street geometry in render
   pixels, so the folder is self-sufficient. What comes back is rows marked
   `confirmed: false` and no `name` field. (`overlay-trial/INSTRUCTIONS-v2.md`
   and `ANSWER-KEY.md` are the benchmark for deciding which assistant to trust
   with this.)
3. **Review** — read below.

### Review mode

Press **Review**, the third mode button. If you loaded the document by id and
it already had rows, the tool goes there by itself.

It draws the modern streets *inside the coverage polygon* over the aligned
scan, each in the colour of what the rows say about it:

| colour | meaning |
|---|---|
| green | the sheet **letters a name** along this stretch (`state`) |
| amber | the sheet **draws the roadway** and letters nothing on it (`unnamed`) |
| grey | the sheet covers this ground and draws **no street** here (`absent`) |
| **red** | **unaccounted** — no row speaks for it |
| purple | drawn on the plat with no modern counterpart (`vanished`) |

Those first three are three different claims, and an AI pass will conflate the
middle and the last one every time. `absent` is the strong one — it is what
later licenses arguing no street was there. Drawn linework with no name on it
is `unnamed`, which dates the pavement and says nothing about the name.

Solid means confirmed; **dashed means proposed** — a `confirmed: false` row
nobody has checked. Nothing is lettered on the map on purpose: the point is to
compare a coloured line against the ink underneath it, and writing the plat's
own label over its own drawing hides the thing you are judging.

**Click a street** and the popup shows every field of every row on it, exactly
as the file has them — not a summary, because a field a summary omitted would
be a field nobody ever checks.

### Giving a row its name entity

The AI pass is told *not* to fill in `name`. That is deliberate: `name` says
which naming **lineage** a label belongs to, and that can only be decided
against the whole corpus — whether a plat's "Figueroa" is the same Figueroa as
the one three blocks east or a different street that spells alike. One sheet
does not contain the answer. So the assistant records the ink in `asWritten`
and identity is assigned here, where the name list is in front of you.

In the popup, each `state` or `vanished` row gets a **name** box. Type and it
matches on both id and display name (`3rd` and `third` both find
`third-street`). Only ids that exist are accepted.

**＋ new** mints one. It asks for an id and a display name and writes the
entity to **`names-new.js`**, not `names.js` — a browser tool has no business
writing into the file that holds the namesake research. Entities there work
everywhere `names.js` entities do, and `check-model.js` lists them every run as
awaiting research. When you have looked one up, move it into `names.js` and
delete it from `names-new.js`.

Two things to know about that file. **The tool rewrites it whole on every
review save** — it re-reads it from disk first, so a hand edit made while the
page was open is merged rather than lost, but an entity you are actively
working on is safer moved into `names.js` first. And what it writes about
provenance goes in **`internalNote`**, never `note`: `note` is *published* —
the generator prints it as a former name's origin line on the public site —
while `internalNote` is not rendered anywhere. Identity decisions, dead-end
searches and who decided what all belong in `internalNote`.

### Editing what a row says

The popup is about **one stretch** — the one you clicked. The rest of the
street is listed underneath as links to jump to. It used to show every row on
the street at once, which made it impossible to tell which stretch a button
belonged to.

Each row offers:

- **kind** — `state` / `unnamed` / `absent`, with what each claims written
  beside it. Changing it drops the fields the new kind cannot carry and
  un-confirms the row, since it now says something else.
- **asWritten** — the label exactly as the sheet letters it, abbreviations and
  typos kept: "THIRD St", not "3rd Street". A row reclassified *into* `state`
  starts with this empty, and cannot be confirmed until it is filled — the ink
  is what makes the row evidence. Editing it un-confirms the row.
  **One form per line** where the sheet letters the same stretch more than
  once: the Ord survey letters most of its streets in English and in Spanish,
  and that is one row with two forms, not two rows (MODEL-SPEC §5.1). The box
  is a text area, so Enter starts a second form and the edit commits when you
  click away.
- **name** — the entity picker, under the ink, because that is the order the
  judgement happens in: read the label, then decide which lineage it belongs
  to.
- **Confirm this row**, and **Delete this row**.
- **Split this stretch in two…** — see below.
- **Re-trace on the scan**, on a `vanished` row: draw a new polyline, keep the
  label and the entity.

Under the fields the popup says how much ground the row speaks for, in metres.
That is the answer to "is this thing a stray?" — a 30 m row on a street that
also carries a 200 m one is almost always the AI pass having written the same
label twice, and a row shorter than the 25 m sliver rule is flagged as such.

### When a row is right about only part of its stretch

A row is one claim about one stretch. When the claim holds for part of it and
not the rest — the sheet's corridor leaves the modern street half way along,
the lettering covers less ground than the row was given — the repair is two
rows, not a narrowed extent. Narrowing drops the other half out of the
accounting entirely, and the sweep gate would then pass with nothing decided
about that ground.

**Split this stretch in two…** puts the canvas into split mode: the row stays
highlighted, and you click the point along it where one claim stops and the
other starts. The boundary is expressed the way every extent is (MODEL-SPEC
§5.4) — a cross street when one is within 40 m, a scan pixel otherwise. The
first half keeps `from` and takes the point as `to`; the second starts at the
point and keeps `to`, so both stay in canonical order (west, or north, first).

**Both halves come back unconfirmed.** The reason to split is that the original
claim was wrong about part of its ground, and which part is exactly what has
not been decided yet.

Then say something different about each half: change the kind, retype the ink,
give it a different entity — or delete the half that is wrong, which turns it
red, and answer it as an unaccounted stretch (`absent`, or out of coverage).

One limit: the boundary can only land on a **vertex of the modern street**.
Extents resolve by snapping to the nearest vertex, so a point chosen between
two of them would be drawn at one of them anyway. Where a stretch has no vertex
between its ends, the tool says so rather than storing a boundary it cannot
honour; a finer split has to go into the file by hand.

### Confirming, and the sweep

**Confirm this row** removes `confirmed: false`. Until then, `generate.js`
holds the row back entirely — a proposal is not evidence, and one that reached
the map would make review optional in practice. `generate` says how many it is
holding on each run.

A row cannot be confirmed without a name entity and without `asWritten` — where
its kind needs them.

**Tab goes to the next row that is waiting**, shift-Tab to the previous, and
the list wraps. On a sheet with a hundred rows and a dozen unconfirmed ones,
hunting for a dashed line across a city block is most of the work. Inside the
popup's boxes Tab still moves between fields, which is what anyone typing
expects — the jump only happens when focus is not in a field.

**Mark fully swept** sets `sweptFully: true`, which is the strongest claim the
model makes: it licenses arguing from this document's *silence*. So it is a
gate rather than a checkbox, and it says in words what is missing — how many
metres across how many stretches are still unaccounted, any row still proposed,
any row without a name. When it goes through it also fills `sweptFor`.

Under that, the rows it is waiting on are **listed one by one**, with their
length, and clicking one goes to it: the map recentres on it and the popup
opens, where it can be named, confirmed or deleted. A count on its own is a
dead end when the row is 30 m long and drawn underneath a 200 m one on the same
street — which is what a duplicate from the AI pass looks like. Whatever the
popup is about is drawn haloed and on top, so it is visible however small it is
and whatever is over it.

**A row whose two ends land in the same place** now blocks the sweep and shows
up in that list, badged "spans nothing". It makes no segment, accounts for no
metres, and leaves the stretch it was meant to cover unaccounted — while
looking, in the file, like a row somebody has dealt with. The generator has
complained about these since Colton Street, but only after a save and a build.

The tool finds them and explains them; it does **not** delete them. The usual
cause is not a junk row but a real claim whose ends are the wrong way round —
`from` is the *west* end of an east-west street and the *south* end of a
north-south one, so `from: null, to: X` where X sits at that same end is
empty, while `from: X, to: null` is the whole street. Colton Street's naming
would have been lost outright if the tool had quietly dropped it. Swap the ends
first; delete only if the row really has nothing to say.

**Editing a swept document takes the sweep back.** The gate used to run only
on the way in, so an edit afterwards — tracing a new vanished street,
splitting a row, deleting one — could leave `sweptFully: true` standing over
rows that no longer supported it, and only `check-model.js` would notice.
(M.R. 53-68 was saved exactly that way.) Now whatever would refuse the sweep
also withdraws it, the panel says it has been withdrawn, and the rows waiting
are listed underneath.

### Red is a stretch, not a street

Review accounts for **ground, not street names**. A street can be named along
one stretch and unaccounted along the next — that is the normal case, not an
edge case — so anything no row speaks for is drawn red over the part that is
missing, and the panel counts it in metres. A street in that state reads
*partial*.

Clicking a red stretch offers exactly two answers, and they are different
claims:

- **Sheet shows nothing here** — the document covers this ground and draws no
  street on it. This is *evidence*: it becomes a `absent` row and it is what
  later licenses arguing that no street was there. The extents are worked out
  for you, snapping to a cross street where one is close and falling back to a
  scan pixel mid-block.
- **Outside coverage — this stretch**, or **all of this street** — the document
  never spoke about that ground; the traced boundary just strayed onto it. Both
  record it in `coverageExcept`. The stretch form is usually what you want: a
  polygon typically overshoots *past a crossing* onto a street that is squarely
  in scope elsewhere.

Guessing between them by hand is how a traced boundary's slop turns into a
false historical claim, which is why the tool will not choose for you. The
panel lists what has been dropped, with an undo, and `check-model.js` refuses a
document that both excludes a street and carries rows for it.

### Slivers

Some overshoot is caught automatically. A street that clips the polygon by
less than 25 m — shorter than the junction it leaves from — is not treated as
in bounds at all: no plat could draw a distinguishable corridor there, and
counting it would leave a permanently red stretch that can never be resolved.
The panel lists what was excluded and how long it was, so it is clear they were
ruled out rather than missed. `coverageExcept` is for the overshoot that is too
big for that rule to catch.

### Streets the plat draws and the city has lost

**Trace a vanished street** puts the canvas into tracing: click along the
corridor's centre line, press Finish, and type the label exactly as the plat
letters it — one form per line if it is lettered more than once, and **leave
the box empty if the plat draws the corridor with no name on it at all**. An
empty box is not a cancelled trace: it makes a `vanished-unnamed` row
(MODEL-SPEC §5.3a), which carries no ink and no entity because there is none
to carry, and which can be confirmed straight away. Recording that case as a
`vanished` row labelled "unnamed" says the sheet letters the word *unnamed*,
which is false. It writes a `vanished` row whose `trace` is in scan pixels, so it
rides on the alignment like everything else stored against a scan, and opens
the popup so you can give it a name entity. Until it has one it cannot be
confirmed, and the document cannot be swept.

### What Review still does not do

It cannot change a row's `street`, or move an extent to somewhere the split
tool cannot reach. If the AI matched a corridor to
the wrong street, that is an edit to `documents/<id>/<id>.js` followed by
**Re-read rows from disk** — which discards unsaved review edits, so save
first.

## When something looks wrong

| symptom | cause |
|---|---|
| Save downloads instead of asking where | opened as `file://`, not through localhost — or a browser other than Chrome |
| Save asks where to put files every time | the project folder isn't connected — use the button at the bottom of the panel |
| The panel doesn't name the folder to connect | you opened the tool without `start-tools.command`, so there is no `project-info.json` |
| "remembered — Save will ask to re-confirm" | normal at the start of a session; the first Save re-grants access |
| Save says the remembered folder "is not the project folder" | it was pointing somewhere stale and has been forgotten; press Save again and pick the folder containing `documents/`. Nothing was written |
| Scan drifts off the streets as you zoom | fixed 2026-08-26; if you still see it, reload — an old copy of the page may be cached |
| `start-tools.command` opens in a text editor | it lost its executable bit; `chmod +x start-tools.command` in Terminal, once |
| Renders came out as `-100dpi-1.png`, `-100dpi-2.png` | an old multi-page render; `new-document.command` now makes one folder per page |
| "already holds an alignment for …" on Save | you are aligning a second image into a document that has one — if it is another page, it needs its own document |
| "Ports 8000-8010 are all busy" | an old server is still running; close its Terminal window |
| "could not load …" on a render path | path is relative to the project folder: `tracts/renders/X.png` |
| Load by id does nothing | no `documents/<id>.js` yet — use the render path instead |
| No red streets at all | `streets-geometry.js` missing or the view is far from downtown; try Set view with `34.0570, -118.2590, 0.55` |
| Alignment restores in the wrong place | the render is a different page or resolution than the one the alignment was made against — check `alignment.image` |
| Streets-in-coverage count looks too low | polygon drawn over the sheet edge rather than the tract, or the alignment is off |
| Review mode is empty / all red | the document has no rows yet — that is what the AI pass produces |
| "Re-read rows from disk" errors | the `.js` no longer parses; a pasted row is probably missing a comma or a brace |
| A row you pasted does not appear | check "Wants a look" — its `street` is probably misspelled or outside coverage |
| A street you expect is missing from Review | it may be a sliver, or in `coverageExcept` — the panel lists both under the street list |
| A named street still shows red | only part of it is covered by a row; click the red part |
| Clicking a street in the list seems to do nothing | it now pans to the stretch — if not, the document may have no geometry there |
| "Save review" is greyed out | there are no unsaved edits |
| Review edits vanished | "Re-read rows from disk" discards them; save first |
| `check-model` warns about names-new.js | those entities still need their namesake researched and moving into `names.js` |
