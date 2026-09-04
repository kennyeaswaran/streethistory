# CLAUDE.md — orientation for AI instances

Read this first, then go to the doc that matches the task. This file is a map
plus the rules that have actually been broken; it deliberately doesn't repeat
what the other docs say. Keep it short when you update it.

## What this is

**Streetymology** — a zoomable, clickable map of street-name history, keyed to
real OSM geometry. Prototype coverage: Downtown Los Angeles. Static site
(Leaflet + `streets-data.js`), deployed to GitHub Pages, where a push runs
`node check-data.js` and deploys only if the data validates.

Kenny Easwaran is the project owner and reviewer. He does the steps instances
can't: downloading map scans, aligning them by hand, browsing authenticated or
JavaScript-only archives, and committing to git.

## Where to look

| You are… | Read |
|---|---|
| reading a map into the corpus | **handbook/MAP-TOOL-GUIDE.md** (the tool, end to end) |
| researching who a street was named after | **handbook/NAME-RESEARCH.md** (sources, and what may be claimed) |
| extending coverage to a new area | handbook/ADDING-A-NEIGHBORHOOD.md |
| chasing one subdivision's platted names | **handbook/TRACT-RESEARCH.md** (NavigateLA → Map-Ref → DPW scan → transcription) |
| after name-change dates across a neighborhood | **handbook/SERIAL-SOURCES.md** (Sanborn atlases, city directories) |
| wanting the shape of the whole thing | **handbook/PIPELINE.md** (four stages, and which two need a human) |
| holding an unverified hunch | **handbook/research-leads.md** (dated parking lot; sweep it before a street pass) |
| publishing / git | **handbook/PUBLISHING.md** |
| looking at the proposed names/documents/generator model | **handbook/MODEL-SPEC.md** (the contract) + **handbook/MODEL-IMPLEMENTATION.md** (built 2026-08-24; 3rd St acceptance diff clean; NOT live) |
| executing the switchover to generated data | **MODEL-IMPLEMENTATION.md → "Switchover checklist"** (every known required change, incl. two code traps marked ⚠ in generate.js) |
| **using** the map tool (Kenny) | **handbook/MAP-TOOL-GUIDE.md** — serve the folder, open via localhost, align, draw coverage, save |
| building the map tool | **handbook/MAP-TOOL-SPEC.md** (align → AI proposals → review). Built end to end in `map-tool.html`; run `node browser-test.js` after any change |
| curious how the data got this shape | the git history — the 2026-07 segment migration and the 2026-08 move to documents are both in it |

Everything about one document lives in its own folder under `documents/` —
including any verbatim transcription, which is now optional and kept only where
a sheet's *text* is worth having separately (handbook/TRANSCRIPTION-TEMPLATE.md).
The 1897 council minutes and the omnibus renaming files are in
`documents/ord-4093/`.

## Folder layout (reorganised 2026-08-26)

```
  README.md  CLAUDE.md          the two files tools look for by name
  utilities/                    double-click these; more will arrive as other
    start-map-tools.command     kinds of document get tools of their own
    new-map.command             inbox/ scan -> documents/<id>/
  *.html                        index (live map), preview (its successor),
                                map-tool (align + bound a scan)
  *.js                          the runnable pieces: generate, the checkers,
                                doc-geometry, intersect
  names.js  streets-data.js     the authored name layer; the live map data
  names-new.js                  entities minted in the tool, awaiting research
                                and a move into names.js (rewritten by the tool)
  handbook/                     every guide, spec and standing decision
  documents/<id>/               ONE FOLDER PER DOCUMENT — its .js, its
                                alignment, its render, its scan, its Part A.
                                This is the unit you hand to another AI system.
  inbox/                        raw downloads not yet made into documents
  generated/  legacy/           generator output; the frozen pre-model data
  attic/                        superseded but kept (align.html)
```

A folder named `_something` is **parked**: on disk, ignored by the model.

**Adding a document is creating its folder** — `documents/index.js` discovers
them, so there is no registry line to remember. The folder name and the `id`
inside the file must match; the checker says so if they drift.


## The rules that have actually been broken

1. **Never estimate pixel coordinates on a scan.** Every georeferencing error
   in this project's history came from an instance eyeballing pixels. Humans
   do it in seconds in `map-tool.html`; instances read the pixel coordinates
   the tool has already written into `<id>-streets.json`.
   (handbook/TRACT-RESEARCH.md, "Alignment.")
2. **Match drawn streets to modern ones by geometry, never by name.** The
   benchmark case: on M.R. 66-35 the plat's "Third St" is modern Miramar and
   its "Arnold St" is modern 3rd. Name continuity is a trap, not evidence.
3. **Never let a claim outrun the document's extent.** A name on a tract map
   proves that name on *those blocks* by that date — not along the whole
   street, and not that the tract coined it. The model now enforces this: a row
   carries its own extent and the generator segments the street from the rows,
   so the failure mode is no longer over-claiming but a *wrong extent*. Get the
   two ends right and the rest follows.
4. **Every dated claim carries a linked source, and unknowns stay unknown.**
   "not yet researched", "no namesake documented", `namedAfter: null` + the
   `unknown` category are all legitimate, preferred values. A partial entry
   beats a confident guess.
5. **Confirming a row means you checked it against the sheet.** The AI pass
   writes rows `confirmed: false`; a human clears that, and clearing it without
   looking is the one way to get a false claim onto the map through the front
   door. The same goes for a transcription somebody else made.
6. **Never hand-write a coordinate.** Cross-street extents come from the
   street's own `crossings` in `<id>-streets.json`; a mid-block extent is a
   pixel you clicked in the tool. `node intersect.js "A Street" "B Street"`
   answers "where do these two meet" when you need it in prose.
7. **Run the checker for the layer you touched, as you go.** `node
   check-model.js` for `documents/` and the name files; `node check-data.js`
   for the hand-authored `streets-data.js`, which still gates the deploy, so a
   red checker there means a stale public site.
8. **Popups state facts, not process.** No methodology narration in the data;
   the one exception is "(identified by map alignment)" in a source title.

## Working environment

- **Where the files live:** this folder is on Kenny's machine, reachable
  through the remote-devices bridge, and synced by both git and Dropbox.
- **Network reality** (don't waste turns rediscovering it):
  - `pw.lacounty.gov` (tract scans) — unreachable from the sandbox shell;
    fetch tools can existence-check a URL, but downloads are Kenny's click.
  - `loc.gov` (Sanborn) — item pages fetch fine; the collection search, the
    JSON API and IIIF manifests return 403 to automated fetching.
  - NavigateLA, CDNC, ResCarta (LAPL directories) — JavaScript apps; fetch
    tools see nothing. Browser (Claude in Chrome) or human only.
  - **Downloads first:** if a map is already in `inbox/` or `documents/<id>/`,
    read it locally (`pdftoppm -png -r 150`, then Read the PNGs). Never squint
    at a PDF in a browser viewer when a local copy exists.
- **Git through the bridge — use `git --no-optional-locks`.** The bridge shell
  cannot delete files, so an ordinary `git status` or `git diff` creates
  `.git/index.lock` and then fails to remove it. The stale lock blocks Kenny's
  next commit in GitHub Desktop until he deletes it by hand. `git
  --no-optional-locks status` reads the tree without ever taking the lock —
  use it for every read-only git call. (The `maintenance.lock`, `probe.tmp`
  and orphaned `tmp_obj_*` files in `.git/` are older debris from the same
  cause.) **Don't run `git add`/`git commit` here at all** — committing is
  Kenny's step in GitHub Desktop; instances leave the working tree ready and
  list what changed.
- **What isn't committed:** the source scans and the 100 dpi renders, both
  re-derivable from the recorder's PDF with `utilities/new-map.command`. Carved
  back in because they are *not* reproducible: the transcriptions and the
  hand-made alignments. Check `.gitignore` before adding a new class of file.

## Division of labor

| step | who |
|---|---|
| harvest Map-Refs (NavigateLA), browse CDNC/ResCarta | browser instance or Kenny |
| download scans | Kenny |
| align a scan to the modern grid, trace its coverage | **Kenny** (map-tool.html) — the bottleneck |
| read rows off the sheet | instance or another AI system, from `<id>-streets.json` + `TASK.md` |
| confirm the rows and sweep the document | **Kenny**, in review mode — the other bottleneck |
| research a namesake | any instance (handbook/NAME-RESEARCH.md) |
| commit and push | Kenny |

End a batch by listing what changed, so Kenny can spot-check the boldest claim
in it against its source.

## State as of 2026-09

**Two data paths, and only one of them is live.** The public site still renders
the hand-authored `streets-data.js`: 107 streets / 140 entries, 72 of them with
a primary-record anchor, one neighbourhood (`dtla`). All the actual work now
goes into the document corpus, which generates a much larger map that is not
switched on yet: **26 documents, 2937 rows, 82 curated name entities → 273
streets and 557 entries**, plus 228 stub entities minted from OSM that nobody
has researched. Those stubs are the queue; `generated/report.md` lists them.

- **Reading a sheet is routine now.** A human aligns and traces coverage, an AI
  pass reads rows off the render plus `<id>-streets.json`, a human confirms and
  sweeps. MR066-035 is the sheet to test a new assistant on: its "Third St" is
  modern Miramar, so name-matching fails visibly.
- **The 1897 citywide renaming** (the single richest document for this data) is
  identified at last: Ordinance No. 4093 (New Series), Ordinance Book IV
  p. 337. Council minutes are transcribed; the ordinance text itself is
  pending a request to the City Archivist. An apply pass naming the ordinance
  in the seven affected entries is owed — see research-leads.md.
- **Newly available and unexercised:** Sanborn atlases and city directories
  (handbook/SERIAL-SOURCES.md), which bracket renamings wholesale rather than one
  subdivision at a time.
- **The generated data model is built and passes its 3rd Street acceptance
  test** (2026-08-24): `names.js` + `documents/` + `generate.js` →
  `generated/streets-data.gen.js`; every 3rd St difference vs `legacy/` is
  accounted in MODEL-IMPLEMENTATION.md. **Not live**: `streets-data.js` stays
  hand-authored until the full corpus is encoded, the
  street-by-street diff is clean, and Kenny approves the §10 switchover
  (checklist: MODEL-IMPLEMENTATION.md). Validate authored layers with
  `node check-model.js`; diff a street with `node diff-street.js "3rd Street"`.
  `preview.html` renders the generated data and is the future index.html —
  a standing file, edited directly, NOT regenerated from index.html.
- **The map tool is built end to end** (2026-08-30): align → coverage →
  drag `documents/<id>/` into an assistant → review, name, confirm, sweep.
  handbook/MAP-TOOL-GUIDE.md is the how-to, handbook/MAP-TOOL-SPEC.md the
  design. Four test suites, and they see different things: `node
  test-doc-geometry.js` (pure geometry), `node test-review.js` (the review
  model, extracted from the page rather than copied so it cannot drift), and
  `node browser-test.js` (the real page in Playwright — which is NOT installed
  on Kenny's machine, so that one runs in the assistant's sandbox). Two bugs
  that shipped were invisible to anything but the third: a stylesheet rule that
  hid the review panel and every popup, and stale indices that made buttons
  silently do nothing. **If you change the tool, run the browser suite.**
  `node preview-test.js` is the same idea for the MAP — it drives
  `preview.html` over the generated data and reads the colours back off the
  polylines, which is the only way to check a claim like "this stretch is
  grey". It needs `npm install leaflet@1.9.4 --no-save` first, and it too runs
  in the assistant's sandbox.
- **`TASK.md` is generated by the tool**, so it goes stale silently every time
  the model gains a way to say something. It is the brief the AI pass reads and
  the only thing standing between a new row kind and a hundred rows in the old
  shape. If you add a kind or a field, update `taskMarkdown()` in
  `map-tool.html` in the same change — `browser-test.js` asserts it names
  every kind.
- **Sweep state is read, never stored twice.** It lives in each document's
  `sweptFully`; the tool's Open box reads the folder every time it is shown. Do not
  encode it in folder names, and do not move folders between an inbox /
  in-progress / done tree — the paths inside each file are project-relative
  and every move breaks them.
- **`note` on a name entity is PUBLIC**; working notes go in `internalNote`
  (MODEL-SPEC §3). This was got backwards once and put "Kenny: worth a look"
  on the site.
