# Adding street history: the document-first pattern

How `streets-data.js` grows. After any edit, run `node check-data.js` — it
enforces most of these rules.

## Philosophy

- **The unit of evidence is the document; the unit of data is the segment.**
  A recorded tract map, a renaming ordinance, or a newspaper report of a
  council action typically speaks about several streets at once, and about
  specific *stretches* of them. So research proceeds document-by-document
  ("pick a document, apply it to every stretch it touches"), not
  street-by-street. A street's entry is the accumulation of what documents
  say about its segments. 3rd Street is the exemplar of the full model.
- Boxes are fact-focused: years, names, and links. No narrative prose — that
  is the specialty of L.A. Street Names (Kines), which we cite instead of
  duplicating. And no methodology narration: a box states what a document
  shows and links it, not the process by which it was read (the one
  exception: an identification resting on map *alignment* rather than a label
  or lot match gets a short "(identified by map alignment)" flag in the
  source title).
- Every year and name claim must be justified by a linked source. Uncertainty
  is stated, never papered over: "unverified", "no namesake documented",
  "not yet researched" are all legitimate values.

## The core loop: one document at a time

1. **Pick the next document.** Where they come from: the shopping list in
   `research-leads.md` (Map-Refs awaiting download), omnibus files with
   unapplied items, PDFs in `tracts/` not yet transcribed, or a fresh
   NavigateLA/CDNC harvest (map pipeline: TRACT-RESEARCH.md; archive list:
   README).
2. **Transcribe it once, fully** — even the parts about streets you don't
   care about yet. The document was hard to find; re-reading it later is
   expensive.
   - Recorded map → `tracts/transcriptions/<MAPREF>.md` (see the template
     there): tract name, Map-Ref, recording date, subdivider, surveyor, then
     EVERY street name drawn on the plat with its extent within the tract,
     plus unlabeled platted streets worth noting. The reading step can be
     done by a human or by another instance/AI system — the transcription
     file is the handoff; whoever *applies* it spot-checks at least one
     claim against the scan.
   - Council action / newspaper report covering many streets →
     `omnibus-<year>-<slug>.md` (permalink at top; every renaming/creation/
     extension one line each, keeping the document's extent language
     verbatim — the extents are what later decide segmentation).
   - Sanborn sheet or city-directory street guide → see SERIAL-SOURCES.md.
     These are *serial* sources: what they contribute is a name-and-extent
     bracket ("Palm in 1894, Imperial by 1906"), never a namesake.
3. **Apply it to every street it touches.** For each street the document
   names, `grep` streets-data.js:
   - Stretch already covered by a segment with the same name lineage → add
     the document as a source on that segment — UNLESS an earlier-dated
     source already covers the same claim (don't let a later document crowd
     out an earlier one; add both if the later one adds real information,
     e.g. a narrower date, an extent, or a subdivider name).
   - Document shows a different name or extent than the current segmentation
     implies → split segments ("Executing a split", below).
   - No entry yet → create one, even partial: the platted name, the date,
     and the source are enough; everything else can be "not yet researched".
   - A name with no modern counterpart (street vanished or absorbed) → it
     lives on as a `nameHistory` item of whatever modern pavement matches
     (cf. Arnold, Georgia), or in `research-leads.md` if no match is
     established.
4. **Bank what you can't apply.** Unsourced inferences and open questions →
   `research-leads.md` (dated, one bullet). Out-of-coverage items stay in
   the transcription/omnibus file, marked, for when coverage grows.
5. `node check-data.js`, reload the map, and list all new or substantially
   changed entries in the final message/commit description so the reviewer
   (usually Kenny) can eyeball each popup via the map's search box.

**Caveats when applying maps** (details in TRACT-RESEARCH.md): a name on a
tract map proves the name existed BY the recording date on THOSE blocks —
not that the tract coined it (streets often predate the tracts fronting
them), and not that the whole street carried it. Match drawn streets to
modern ones by geometry, not by name; flag alignment-based identifications.

## Segments (the data model)

Streets whose stretches have different histories — which, on the segment
model, is eventually most streets — are split:

- Top level becomes `{ name, orientation, segments: [...] }`.
- `orientation`: "NS" or "EW" (dominant axis; pick the dominant one for diagonals).
- **Canonical segment order = chip order:**
  - N–S streets: north to south (descending latitude)
  - E–W streets: west to east (ascending longitude)
- **`from`/`to`: the bounding cross-streets, by name** (null = coverage edge or
  the street's physical end). This is the authoritative definition of a
  segment — tract maps and ordinances state extents in cross-streets, so the
  data does too. Adjacent segments share the boundary street (`seg[i].to ===
  seg[i+1].from`); where the street is physically discontinuous (rail yards,
  river), set `gapAfter: true` on the earlier segment and let the numeric band
  boundary fall anywhere in the gap (no pavement there to classify).
- Bands: `minLat`/`maxLat` for NS, `minLng`/`maxLng` for EW, derived from
  `from`/`to` via `node intersect.js "X Street" "Y Street"`. Bands must tile the
  street with no gaps or overlaps (checker verifies). Boundaries are way-midpoint
  approximations of the historical dividing cross-street.
- `label`: a few words, e.g. "Alameda to Santa Fe (Georgia St)" — bounding
  streets, plus the former name when there is one.
- Each segment is a complete entry (its own namedAfter, dates, nameHistory,
  categories, sources) containing ONLY what is documented about that stretch —
  no borrowing a neighboring segment's sources or history. A stretch we
  haven't researched yet still gets a segment with "not yet researched" —
  that's more honest than letting one stretch's history silently claim the
  whole street.
- **`how` on nameHistory items — the origin/extension model.** Every name
  arrived on a segment somehow; when the record (or a clearly flagged
  presumption) says how, encode it: `how: "origin"` (the name's earliest
  documented appearance anywhere is on this segment — at most one segment per
  name carries this; upgradeable when an earlier record surfaces),
  `"extension"` (the name spread along the same roadway onto this stretch),
  `"renaming"` (an existing street under another name was renamed), or
  `"transfer"` (the name moved from a different roadway, e.g. Figueroa 1897).
  A never-renamed segment may carry a single-item nameHistory just to state
  its `how` — this is how the origin segment of a name is marked. Rendered as
  a small badge in the popup.
- When a name moved between roadways (Figueroa 1897), record the transfer as an
  origin line in BOTH roadways' histories: the receiving segment ("name
  transferred from …", `how: "transfer"`) and, when we add it, the donor street
  ("renamed …, its name passing to …").

### Executing a split

1. Confirm the extent from the document ("Vine street, south of First" — you
   need the bounding cross-street, not a vague "north end"). If only part of
   a boundary is known, split where you CAN and note that a segment may split
   again — don't wait for perfect knowledge.
2. `node intersect.js "3rd Street" "Alameda Street"` prints the intersection
   and the band value; set `from`/`to` and the band boundary.
3. Restructure: canonical order, each segment complete, honest unknowns for
   the stretches the document doesn't cover.
4. `node check-data.js` (tiling, order, from/to adjacency are verified),
   reload the map, click the stretches, check the chips jump correctly.

## Field conventions

- **namedAfter** — one line, with life dates for people. Link the namesake's
  Wikipedia page via `namedAfterLink` when one exists; otherwise null.
  If the origin is uncertain, write "Possibly …" and set `disputed: true` plus
  the "disputed" category.
  By default `namedAfterLink` wraps the *entire* namedAfter string. To link only
  part of it — the normal case — wrap just that part in `{{...}}`, e.g.
  `"{{José Figueroa}} (1792–1835), governor of Alta California 1833–1835"`.
  Link the name itself (plus life dates, for people), not the job description
  or other trailing detail. For a borrowed-name case, link just the place name,
  e.g. `"The port town of {{San Pedro}}, which the street ran toward"`. Same
  marker syntax works in `nameHistory[].origin` / `originLink`; when a source
  only justifies part of the sentence rather than being the namesake's own
  page, put the link on a trailing `{{(source)}}` instead of the whole clause.
- **planned / built** — a string, or `{ text, url }` to link the evidence.
  Convention for old downtown streets: "by 1849" linking the Ord/Hutton survey
  (use the shared `ORD_SURVEY` constant). The 1786 pueblo plan has no street
  names, and no official record exists in between — so 1849 is usually the
  earliest citable date. Remember the survey was partly aspirational: appearing
  on it does not prove the street was built (Hope St existed only on paper until
  the late 1860s). Use "not yet researched" rather than guessing.
- **nameHistory** — chronological; each item `{ from, until, name, origin,
  originLink, how }`; the final item is the current name with `until: null`.
  Include it for any segment that has been renamed, and (as a single item)
  for a segment documenting how its current name arrived — the origin
  segment of a name always gets one. Each former name gets an origin
  sub-bullet; "no specific namesake documented" is a valid origin. A
  never-renamed segment whose name originated elsewhere may omit nameHistory
  until its own arrival story is researched.
- **note** — optional, one line, real content only, about THIS segment. No
  cross-references to other stretches of the same street (chips handle that),
  no restating of nameHistory, no methodology narration, no lists of what
  else a cited document shows (that lives in the transcription file).
  Cross-references to OTHER streets use `[[Street Key]]` or
  `[[Street Key|display label]]` — rendered as a link that jumps the map to
  that street and opens its box (the checker verifies targets exist).
  Clearly-labeled speculation is fine ("a prior name here is plausible — not
  yet checked").
- **categories** — at least one. Add new categories to `CATEGORIES` freely, but
  check whether an existing one fits first. Current set: person, alive, governor,
  destination, aspiration, renamed, borrowed, disputed, nature, descriptive,
  place, number, event, unresearched. Use "unresearched" for an entry with
  `namedAfter: null` and genuinely nothing found yet (not simply an uncertain
  candidate — that's "disputed"). Swap it out once research lands.
- **sources** — every entry needs at least one; include the Kines page whenever
  one exists, plus whatever justifies each specific year/name claim — and
  nothing that doesn't (a source that documents a neighboring segment but not
  this one doesn't belong here). Source titles describe what the document
  shows about this segment, briefly.
- **When research comes up empty** — a street you've genuinely looked into but
  whose origin no source explains gets `namedAfter: null` plus the "unknown"
  category ("Researched — origin not yet found"; renders violet on the map,
  distinct from grey = not yet researched at all). The checker enforces that
  `namedAfter: null` and "unknown" travel together. Keep sources as the record
  of what WAS found, and use the note for clearly-labeled leads.
- **internalNote** — everything that is *about the work* rather than about the
  street. `note` is published: for a former name with no `namedAfter`, the
  generator prints it as that name's origin line. So identity decisions and who
  made them, which sources were checked and came up empty, why two similarly
  spelled entities were kept apart — all of that goes in `internalNote`, which
  nothing renders. A recorded negative result is worth keeping; it stops the
  next pass repeating the search. The checker warns when a `note` reads like a
  working note.
- **Entities minted by the review tool** arrive in **`names-new.js`**, not
  here, marked `pendingResearch`, and `check-model.js` lists them every run.
  Researching one means filling in `namedAfter` / `categories` / `sources` and
  **moving it into `names.js`**, then deleting it from `names-new.js`. Do the
  move before doing real work on the entry: the tool rewrites that file on
  every review save.

## Street-first passes (when a specific street needs answering)

Sometimes the question IS a street or segment (a gap a user will notice, a
lead worth closing). That's still document-first underneath: pick addresses
on the stretch → NavigateLA → Map-Refs → obtain the documents
(TRACT-RESEARCH.md) — and then apply each document FULLY via the core loop,
not just to the street you came for. The payoff of any lookup is the
document, and the document usually pays for several streets.

## Scaling research: batches, leads, and review

- **A batch is a set of documents**, not a set of streets — e.g. the
  Map-Refs harvested for a neighborhood, downloaded together (batch mode in
  TRACT-RESEARCH.md), then transcribed and applied one by one. Don't research
  streets one-at-a-time in isolation: renaming petitions covered several
  streets at once, families named clusters of streets, and one document
  routinely documents its neighbors.
- **Sourced beats complete.** A claim that arrives incidentally goes straight
  into the data with its citation, even for a street that hasn't had a full
  pass — partial entries with "not yet researched" fields are fine. Only
  UNSOURCED material (inferences, patterns, recollections) waits in
  `research-leads.md`.
- **research-leads.md** is the parking lot for hunches and open questions,
  dated, one bullet each. Consume relevant leads when applying a document;
  sweep the file periodically; move closed items to its Resolved section.
- **Separate author from reviewer.** Draft in one session (or sub-agent),
  review in another: run `node check-data.js`, spot-check the boldest claim
  of the batch against its source, and check keys against geometry via
  `node coverage-report.js` (orphan section). For large sweeps, one sub-agent
  per document batch — handed this guide and the leads file.
- **Batch verification (for humans).** End every batch by listing all new or
  substantially changed entries; the reviewer types each into the map's
  search box — it lists every entry, including segments — and eyeballs the
  popup: links work, dates read right, chips point the right way.

## Official records: where documents come from

**The primary-anchor principle: every entry should ultimately carry at least
one primary-record source** — the Ord/Hutton survey, a Council
ordinance/minutes, a contemporary newspaper report of the action, or a
recorded tract map. Not every name had a Council action (organic pre-1849
names, tract-map names), but every *dated claim* traces to one of these
trails. Secondary sources (Kines, blogs) are fine as interim citations;
upgrading to a primary anchor is standing work — `node check-data.js` reports
how many entries have one. The trails:

- **City Council ordinances and minutes** — every official renaming (e.g.
  Wolfskill→Central 1897, Castelar→Hill 1960) was a Council action. The L.A.
  City Archives & Records Center (Erwin Piper Technical Center) holds minutes
  and indexes back to 1850; recent decades are searchable online via the City
  Clerk's Council File Index.
- **Newspaper reports of Council actions** — often the easiest linkable proxy
  for the ordinance itself. The California Digital Newspaper Collection
  (cdnc.ucr.edu) has the Herald from the 1870s–1900s free; the L.A. Times
  archive via LAPL/ProQuest covers the rest. NOTE for automated instances:
  CDNC pages are JavaScript-rendered, so fetch tools see empty pages —
  reading them requires a browser (Claude in Chrome) or a human; prepared
  search recipes live in research-leads.md.
- **Tract maps** — new streets (and their first names) appear on recorded
  subdivision maps. Full verified street→tract→scanned-map workflow:
  **TRACT-RESEARCH.md** (NavigateLA Parcel Description Report gives tract
  name + Map-Ref; DPW Land Records serves the scan; Assessor Legal Search
  goes tract-name→location).
- **Sanborn fire insurance atlases** (1888, 1894, 1906, 1950 …) — the same
  ground re-surveyed every few years, so a pair of editions brackets a
  renaming on the exact blocks each sheet covers. Free at LOC; volume street
  indexes make a per-year name gazetteer. Workflow and the paste-on dating
  caveat: **SERIAL-SOURCES.md**.
- **City directories** (LAPL, 1873–1907) — annual street guides listing each
  street's extent in cross-streets: the tightest brackets available for a
  renaming, and the likeliest surviving home for a mass-renaming concordance.
  Also SERIAL-SOURCES.md; ResCarta is JavaScript-rendered, so browser or
  human only.
- **Bernice Kimball, “Street Names of Los Angeles” (Bureau of Engineering,
  1988)** — the BOE's own compendium of name changes, compiled from city
  records; not online, but LAPL holds it, and Kines relies on it. Worth
  consulting to pin dates the web can't.

## Freeways and numbered streets

- Freeways are in scope. For most, `namedAfter` is the route number's meaning in
  its numbering system — the 5, the 10, and the 405 are meaningful Interstate
  identifiers even on stretches with no other name. Link the system's page and
  add a "system" category when the first such entry lands. The older routes
  (Arroyo Seco Parkway, Harbor/Hollywood/Santa Ana freeways) predate the
  Interstate plan and have genuine name histories deserving full entries.
- Numbered streets share a template via the `numberedStreet(name, opts)` helper
  in streets-data.js: `namedAfter` = ordinal position in the downtown grid,
  numbering in place by 1849 (1846 claims are doubtful — see 1st Street, the
  anchor entry). Category "number"; streets south of the survey's edge (14th+)
  override planned with "not yet researched". On the segment model the ordinal
  meaning only *originates* on the Ord-grid stretch — every other segment of a
  numbered street joined by extension or renaming, and renamings flow both
  ways (10th → Olympic Blvd 1935; 9th west of Figueroa → James M. Wood Blvd
  1997), so a numbered street can be a donor or absorber like any other.

## Adding a neighborhood

Coverage grows neighborhood by neighborhood via the `NEIGHBORHOODS` array at the
top of `streets-data.js` (rough bbox rectangles; use L.A. Times Mapping L.A.
boundaries as the reference for what counts as the neighborhood).

1. Add the neighborhood `{ id, name, bbox }` to `NEIGHBORHOODS`.
2. Open the map. The saved geometry file no longer matches the new coverage, so
   the map refetches from Overpass automatically. Click "Save geometry file" and
   replace `streets-geometry.js` with the download.
3. **Sweep the banked documents first** — transcription and omnibus files may
   already contain citations for the new area's streets; apply those before
   any fresh research.
4. Run `node coverage-report.js`. It prints, per neighborhood, which streets
   have entries and which still need research, longest first. It also prints
   an **extension review** section: single-entry streets that now span
   multiple neighborhoods. For each, decide explicitly: same name lineage
   along the new stretch → nothing to do; different lineage (or unknown) →
   split into segments, the new stretch getting its own entry or a "not yet
   researched" placeholder — never let the old entry silently claim the new
   stretch.
5. `node check-data.js`, reload the map, commit, push.

## Validation

`node check-data.js` checks: schema completeness, defined categories, source
URLs, nameHistory ends at the present, `how` values, single-item nameHistory
only with `how`, no obsolete fields, segment band tiling, from/to adjacency
(unless `gapAfter`), canonical chip order, label length, and notes that smell
like cross-references. It exits nonzero on error, so it can gate a future
CI/deploy step.
