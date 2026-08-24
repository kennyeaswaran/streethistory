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
| adding or editing street data | **ADDING-STREETS.md** (the authoring guide; schema, segments, field conventions) |
| chasing one subdivision's platted names | **TRACT-RESEARCH.md** (NavigateLA → Map-Ref → DPW scan → transcription) |
| after name-change dates across a neighborhood | **SERIAL-SOURCES.md** (Sanborn atlases, city directories) |
| wondering what's automatable and what isn't | **PIPELINE.md** (three stages; stage 2 is the open problem) |
| holding an unverified hunch | **research-leads.md** (dated parking lot; sweep it before a street pass) |
| publishing / git | **PUBLISHING.md** |
| looking at the proposed names/documents/generator model | **MODEL-SPEC.md** (proposed, not built — nothing in it is live) |
| curious how the data got this shape | migration-2026-07.md (historical; that pass is done) |

Documents already transcribed live in `tracts/transcriptions/` (one recorded
map each, Part A/Part B per TEMPLATE.md) and `omnibus-*.md` (one council action
or newspaper report each, many streets at once).

## The rules that have actually been broken

1. **Never estimate pixel coordinates on a scan.** Every georeferencing error
   in this project's history came from an instance eyeballing pixels. Humans
   do it in seconds in `align.html`; instances run `georef.py` on the human's
   alignment. (TRACT-RESEARCH.md, "Alignment.")
2. **Match drawn streets to modern ones by geometry, never by name.** The
   benchmark case: on M.R. 66-35 the plat's "Third St" is modern Miramar and
   its "Arnold St" is modern 3rd. Name continuity is a trap, not evidence.
3. **Never let a claim outrun the document's extent.** A name on a tract map
   proves that name on *those blocks* by that date — not along the whole
   street, and not that the tract coined it. When the evidence covers less
   than the segment, flag it in research-leads.md rather than quietly
   widening the claim.
4. **Every dated claim carries a linked source, and unknowns stay unknown.**
   "not yet researched", "no namesake documented", `namedAfter: null` + the
   `unknown` category are all legitimate, preferred values. A partial entry
   beats a confident guess.
5. **Spot-check before trusting a transcription you didn't make.** Whoever
   applies a Part A file verifies at least one of its claims against the scan
   first — including transcriptions made by other AI systems.
6. **Never hand-write a band boundary.** Every `minLat`/`maxLng` comes from
   `node intersect.js "A Street" "B Street"`; report the value you used.
7. **Run `node check-data.js` after every street**, not at the end of a batch.
   It gates the deploy, so a red checker means a stale public site.
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
  - **Downloads first:** if a map is already in `tracts/`, read it locally
    (`pdftoppm -png -r 150`, then Read the PNGs). Never squint at a PDF in a
    browser viewer when a local copy exists.
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
- **What isn't committed:** downloaded scans (`tracts/*`, re-downloadable) and
  derived overlay renders (`overlay-trial/**/*.png`, regenerable via
  `georef.py`). Carved back in because they are *not* reproducible: the
  transcriptions, the hand-made `tracts/renders/*-alignment.json`, and the
  overlay-trial instructions/answer key/results. Check `.gitignore` before
  adding a new class of file.

## Division of labor

| step | who |
|---|---|
| harvest Map-Refs (NavigateLA), browse CDNC/ResCarta | browser instance or Kenny |
| download scans | Kenny |
| transcribe a scan (Part A) | any instance or AI system |
| align a scan to the modern grid | **Kenny** (align.html) — the bottleneck |
| trace/verdict from an alignment | instance running georef.py |
| apply a document to streets-data.js (Part B) | instance, then Kenny reviews |
| commit and push | Kenny |

End a data batch by listing every new or substantially changed entry, so Kenny
can type each into the map's search box and eyeball the popup.

## State as of 2026-08

- 107 streets / 140 entries, all checks passing; 72/140 carry a primary-record
  anchor. Coverage is one neighborhood (`dtla`).
- **The live problem** is PIPELINE.md's stage 2 — visual grounding on scans.
  The current attack is verification-instead-of-generation: `overlay-trial/`
  holds the benchmark, and the v2 single-street images have been generated but
  **not yet run**.
- **The 1897 citywide renaming** (the single richest document for this data) is
  identified at last: Ordinance No. 4093 (New Series), Ordinance Book IV
  p. 337. Council minutes are transcribed; the ordinance text itself is
  pending a request to the City Archivist. An apply pass naming the ordinance
  in the seven affected entries is owed — see research-leads.md.
- **Newly available and unexercised:** Sanborn atlases and city directories
  (SERIAL-SOURCES.md), which bracket renamings wholesale rather than one
  subdivision at a time.
- **A data-model change is specced but not built** (MODEL-SPEC.md): authored
  name entities + per-document files, with segments *generated* from them
  rather than hand-maintained. Until its acceptance test passes,
  `streets-data.js` stays hand-authored exactly as ADDING-STREETS.md
  describes — a frozen copy for diffing lives in `legacy/`.
