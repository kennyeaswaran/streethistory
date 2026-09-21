# Roadmap: the changes we want, sized and sequenced

Written 2026-09-10 from a list of Kenny's, checked against what the code and
the spec already do; trimmed 2026-09-21 to what is still to do. This is the
standing home for **wanted changes that are not yet specified**; MODEL-SPEC.md
§13 is the index into it. When an item is designed properly, its design moves
into the spec (or MAP-TOOL-SPEC.md) and the entry here shrinks to a pointer.
When an item ships, delete it — git keeps the old text. **Section numbers are
stable** (code comments and other handbook files cite them), so an emptied
section keeps its heading and a one-line pointer.

Each item carries a size:

- **quick** — an afternoon, no model change, no decision needed from Kenny.
- **medium** — a generator or tool feature, mostly already specified.
- **project** — needs a design decision first, then a migration or a sweep.
- **someday** — worth wanting, not worth starting until something else lands.

Suggested order is at the end (§10).

---

## 1. Fewer segments on the map, with nothing lost — *project, in three steps*

### What the map does, measured 2026-09-07 (112 streets); re-measure

That build had 112 streets with entries and 483 segments — Main Street 17
pieces, 2nd Street 18, Los Angeles Street 18. The corpus has grown since (272
streets at the 2026-09-19 switchover; CLAUDE.md, "State"), so the numbers below
want re-measuring — ideally by the segmentation report in §9 — but the
proportions are the argument.
Classifying all 371 adjacent-segment boundaries by what differs across them:

| what differs across the boundary | boundaries |
|---|---|
| a different name lineage on each side (the only kind a reader cares about) | 23 |
| same lineage; a document letters the name on one side and **nothing** speaks about the other (OSM-only) | 176 |
| same names and same name dates; only `planned` / `built` / `absentAsOf` differ | 105 |
| same names; the same names carry different dates ("1849" one side, "by 1873" the other) | 40 |
| nothing differs but geometry (2nd Street ×2, Bixel) — pavement gaps | 3 |
| other (different entity bound to the roadway, etc.) | 24 |

So **about one boundary in sixteen marks a change of name**; the rest mark
where one document's coverage ends. Every one of those is real information —
"this sheet stops here" — but it is information about the *evidence*, and the
map is presenting it as if it were information about the *street*. That is the
thing to fix, and it says what "without losing information" has to mean: the
evidence extents must survive somewhere the reader can reach; they need not be
the unit the reader clicks.

The merge key is in `tools/generate.js` (`entryKey`): timeline signature (entity,
form, start, start-kind, end, end-kind, `how`) + `planned` text + `built` text
+ `attested`. Everything above follows from that key.

### Step A — separate the display unit from the evidence unit — *medium*

Keep the fine-grained intervals the generator already computes, but emit them
as **stretches inside a coarser segment** rather than as segments. The coarse
merge key is the name lineage only: the sequence of entities and forms and
`how`. Dates, `planned`, `built`, `absentAsOf`, `attested`, `knownFraction`
and sources move down a level:

```js
{ label: "Alameda to Santa Fe (Georgia St)",
  nameHistory: [ … as today, dated from the BEST evidence across the stretches … ],
  stretches: [
    { from, to, attested: true,  planned: {text:"1875", url}, knownFraction: 0.9, sources: […] },
    { from, to, attested: false, planned: "not yet researched" },
    { from, to, attested: true,  planned: {text:"by 1893", url}, knownFraction: 0.7, sources: […] }
  ] }
```

The map draws each stretch in its own colour (grey / blue ramp — so scheme 1
loses nothing and the research queue stays visible), but the click target and
the popup are the segment, and the popup prints the stretch table beneath the
name history: *"documented 1875 (Thomas Tract) west of Hewitt; nothing yet
between Hewitt and Garey; by 1893 (M.R. 53-65) east of Garey."* Nothing that a
fine segment carried goes away; what changes is that a reader clicking
anywhere on Georgia-Street-era 3rd gets one story instead of five fragments.

Where a segment's periods carry different dates in different stretches ("1849"
here, "by 1873" there), the segment-level period shows the earliest exact
date, or the earliest "by" if no exact one exists, and the stretch table shows
the rest. That is the same choice `knownFraction` already makes per segment.

This is generator + `index.html` only — no model change, no re-reading of any
sheet — and `tests/preview-test.js` can assert the colours per stretch as it
does per segment today. Do it first, because it is the one step whose result
cannot be wrong about history: it changes nothing about what is claimed, only
how it is grouped.

### Step B — the rectangle rule and the existence hull — *medium; specified*

MODEL-SPEC §6.2a is specified and unbuilt (§12). Step A groups the fragments;
§6.2a is what would actually *bridge* them — fill Georgia across the block no
sheet letters, and (the existence hull, same section) fill `planned: 1849`
across a middle stretch when both ends show 1849. It collapses most of the 176
and the 105 above into claims, each carrying its grade: attested /
swept-silent / unexamined. The bridging report §6.2a asks for is the guard
(§9 here), and with Step A in place it has a natural home — a bridged part is
just a stretch with grade 2 or 3, and the popup already prints the stretch
table.

Two things §6.2a leaves open and this item needs settled before it lands:

- `knownFraction` must count grade-3 years fractionally (MODEL-SPEC §8 already
  says so).
- **Vacation.** The hull is monotone. Fine for now; note it in the report.

### Step C — "runs off the sheet" — *project; not yet in the model*

Kenny's phrase — "bits of history that are just out of frame of many of the
maps" — names a kind of evidence the model does not have. A street drawn to the
edge of a sheet and cut by the sheet's border is testimony that it *continues*;
a street drawn ending in a lot line or a T is testimony that it *ends*. Today
both are just "the row's extent stops here", and the rectangle rule treats the
ground beyond as unexamined.

Proposal, to be argued out before it is built: an extent end may carry
`continues: true`, set by the map tool when the traced end lies on the
coverage ring rather than inside it. The generator treats it as a *weak
sighting* a short distance beyond the ring — enough to let §6.2a bridge to
the next sheet, graded separately ("off-sheet continuation"), never enough to
create a segment on its own. The open question is the "short distance": to
the next cross-street is the obvious answer and probably the right one.

### What would lose information (do not do these)

- Merging on entity alone and dropping the dates — "Main Street since 1849"
  along ground that only a 1893 map reaches is exactly the over-claim rule 3
  in CLAUDE.md exists to stop.
- Merging across a pavement gap, an `absent` row, or a `change` boundary.
- Hiding "not yet researched" stretches inside a documented street. Grey inside
  blue is the research queue; Step A keeps it visible as a stretch colour.
- Raising the snap tolerance to swallow mid-block ends. A mid-block extent is a
  pixel somebody clicked (MODEL-SPEC §5.4); rounding it to the block is a false
  claim.

---

## 2. Organising a renaming's paper trail — *project; the biggest open modelling question*

### Where it stands

186 textual documents were in `documents/` at 2026-09-10 — Herald, Examiner,
Daily News clippings and six sets of minutes — and **179 of them carried no
rows.** Seven carried change rows: the four instruments (`ord-1613`,
`ord-1874-02-26`, `ord-1887-08-22`, `ord-4093`) and three Herald reports
standing in for instruments not yet found. Everything that connects a clipping
to the change it reports about lives in **comments at the top of the file** —
see `documents/lae-1924-04-12` for the five-document, sixteen-year Orange →
Wilshire arc, written out by hand, with the model knowing nothing of it.
Meanwhile the minutes worklist (then MINUTES-TO-CHECK.md; its meetings are now
WANTED.md §4) invented a stage vocabulary on the fly
(§1 asked, §2 ordered drafted, §3 adopted, §3+ approved, ✔TEXT), and the
change-rows design (MODEL-SPEC §5.8) found that two of its six statement forms are not change rows at
all. All the pieces of a design exist; none is in the model.

### The object that is missing: a *proceeding*

A renaming is not a document. It is a **proceeding** — a petition, a referral,
a committee report, a draft, an adoption, sometimes a veto and a reconsideration,
an approval, a publication, occasionally a repeal — and any number of documents
report on any number of its steps, some of them proposing things that did not
happen. The map wants exactly one thing out of all that: the change rows that
took effect, dated to when they took effect, citing everything that shows it.

Proposed shape (authored, one file per proceeding, `proceedings/<id>.js`,
discovered by folder like documents):

```js
module.exports = {
  id: "orange-to-wilshire-1924",
  title: "Orange Street (Alvarado–Figueroa) becomes Wilshire Boulevard, 1924",
  outcome: "enacted",              // enacted | repealed | failed | unknown
  instrument: null,                // doc id of the ordinance when in hand
  instrumentWanted: "council minutes c. 1924-04-01 should carry the number",
  steps: [                         // in date order; each cites one document
    { doc: "lae-1924-04-04", stage: "adopted",  says: ["expected"],
      date: { about: "1924-04-01" } },
    { doc: "lae-1924-04-07", stage: "deferred", says: ["viaduct"] },
    { doc: "lae-1924-04-12", stage: "approved", says: ["signed"],
      date: { on: "1924-04-11" } }
  ],
  precededBy: "orange-to-wilshire-1908",   // the 1908 attempt, outcome: repealed
  rows: [                          // the change rows that TOOK EFFECT — the
    { kind: "change", from: "orange-st", to: "wilshire", scope: "extent",
      street: "Wilshire Boulevard", fromCross: "Alvarado Street", toCross: "Figueroa Street",
      says: [{ doc: "lae-1924-04-12", excerpt: "signed" }],
      confirmed: false }
  ]
};
```

Decisions this forces, with a recommendation for each:

- **Where the change rows live.** On the instrument document when the
  instrument is in hand (as now); on the proceeding when it is not. Never on a
  news report. `tools/check-model.js` should warn on a `change` row in a
  `news-report` document (today `news-report` is one of its
  `TRANSITION_TYPES`, so it is allowed) — the three that exist are the
  migration list. The generator reads rows from both places; the proceeding's
  rows carry `says` that cross documents, which answers the cross-document
  excerpt-citation question below.
- **Effective date.** Approval (or publication where the law required it),
  not adoption, not the report's date. The proceeding computes it from its
  steps; a row inherits it. That is what the worklist's "§3+ approved" stage was
  reaching for.
- **Proposals that differ from the outcome.** A step may carry `proposes:`
  (the names that report floated — Alpine was first to be Eighth). They
  never reach the map's timeline. They do reach the popup narrative (§4
  below) and the names tool, where a proposed-never-enacted name is a
  legitimate sighting of a *proposal*, not of a name.
- **Stage vocabulary** — closed list, checked: `petition`, `referral`,
  `committee-report`, `draft`, `adopted`, `vetoed`, `reconsidered`,
  `approved`, `published`, `repealed`, `report` (a paper simply reporting the
  state of things). The old worklist's asked / ordered drafted / adopted / approved
  stages map onto it directly.
- **`attests`.** A proceeding whose rows are qualified attests `built-by` at
  the effective date on that stretch; unqualified rows attest nothing about
  ground, as now.

### Open questions carried from the change-rows design

Moved here from `change-rows-amendment.md` (§§5, 9, 12) when it was folded into
MODEL-SPEC; none is settled.

- **`basis` for a resolved extent.** A qualified change's resolved extent is a
  researched row carrying a `basis`, but the row vocabulary is lot-level /
  label / alignment / position, and "a human read an ordinance against a map"
  is none of them.
- **`attests: "built-by"` on `ord-4093`.** Defensible — you do not rename a
  street that is not there — but an existence claim with no extent. Under the
  change-row rules it is right for qualified/resolved rows and inert for the
  others, so it can probably stay; make it a conscious decision, not drift.
- **`completeness: "exhaustive-in-scope"` as negative evidence.** If an
  ordinance really lists everything in scope, a name it does not mention did
  not change that day. Potentially strong; do not design it out (MODEL-SPEC
  §6.2a's open questions say the same for the rectangle rule).
- **`annotation` rows still count toward `attested`.** MODEL-SPEC §6.2a's
  table says they should only if the row asserts existence, which nothing
  encodes. Flagged so it is not forgotten.
- **An excerpt that quotes another document.** The committee report is quoted
  inside the council minutes, and `ord-4093`'s two real excerpts are really the
  minutes quoting the committee. Whether such an excerpt wants its own
  citation — a proceeding's cross-document `says` is one answer.
- **A clipping for every textual document?** Piloted on `lah-1874-02-27`, whose
  `scan` is a 20 KB crop from CDNC's page-image cropper, committed because a
  crop behind a bot-verification wall cannot be re-derived. It costs a manual
  crop per document; it buys an excerpt checkable without leaving the repo.

### The 1908 Orange → Wilshire pair is held back

From the 2026-09-18 change-rows audit: with the 1908 change, its December
repeal and the 1924 change all written, Wilshire Boulevard's timeline came out
as *Wilshire July 1908 → Dec. 1908 | Orange Dec. 1908 → July 1908* and the 1878
Orange lettering disappeared; the revival check did not fire. **The generator
cannot hold A → B → A → B on one stretch.** The 1924 row is written (Orange by
1878 → Wilshire Apr. 1924, correct); `lah-1908-07-14` and `lah-1908-12-05` are
ready but not written until `tools/generate.js` can give a name two separate
periods in that shape. The Orange → Wilshire pilot below meets the same wall.

### What can happen without the tool

All of it, in fact — the file above is hand-writable today, and the two pilots
should be written by hand before any tool exists so the tool is built to a
shape that has survived contact with real material:

1. **Orange → Wilshire** (five documents, two instruments, one repeal): the
   best-documented arc in the corpus, and the one the file comments already
   narrate.
2. **Ordinance No. 48 (N.S.), 1889** — 212 changes, a veto, a reconsideration,
   a rewrite before enrolment: the stress test. Its full text is in hand
   (`documents/lah-1889-05-10`).

Then migrate the 1897 arc onto `ord-4093`, which is already half there, and
Buena Vista and the Miramar chain (accepted at the switchover as proceedings
work rather than quick rows; research-leads.md, "Settled and open at the
switchover").

### The tool

§9 asks for a review tool for textual documents: excerpt beside clip, `says`
made navigable, `scope` made visible. A proceeding is the right *list item* for
that tool rather than a document: open one, see every step's clip and excerpt
in date order down one column, and the resulting rows in the other, and write
the rows while looking at all of the evidence at once. Same surgical file
editing as `utilities/names-tool.html`, no canvas. Build it after the two
hand-written pilots, not before. It is also the **confirmation tool for the 61
held-back audit rows** (`tools/generate.js` prints the count on every run).

---

## 3. Historic maps on the public site — *someday; a cheap first step exists*

The alignments Kenny has made (MODEL-SPEC §4.6: two-point similarity or
least-squares affine, stored on each document) are enough to draw a sheet on
the modern base. What stands between that and the site:

- **Leaflet draws only axis-aligned image overlays.** So either pre-warp each
  render at build time into a north-up Web-Mercator PNG plus bounds (a
  `generate`-side script; the affine is already there), or use a rotated-overlay
  plugin, which handles similarity fits and not general affines. Pre-warping is
  the safer route and lets the build also **mask the image to its coverage
  polygon**, so what the reader sees is exactly the ground the document
  testifies about — a much better thing to show than the whole sheet with its
  margins and title block.
- **The scans are not committed.** `.gitignore` already anticipates this: a
  viewer-facing derivative is to be named `<id>-web.jpg` and excepted. The
  100 dpi renders were none over 3 MB at 2026-09-10; web-sized and masked they
  would be a few hundred KB each. Repo size is a Kenny decision.
- **Rights.** County recorder scans and LOC Sanborn sheets are public records /
  public domain; the Huntington items (`11824`, `12017`, `12685`) need their
  terms checked before publication.
- **UI.** A layer picker listing documents by date, an opacity slider, and
  "show this sheet" from a segment's source line. Fit to the sheet on select.

**The cheap first step, worth doing regardless:** have the generator emit
`generated/documents.js` — every document's id, title, date, url and its
coverage ring in world coordinates — and draw the rings as an optional layer
on `index.html`. No imagery, no rights question, and it makes visible the
distinction the whole model rests on: ground somebody has looked at versus
ground nobody has. It is also the precondition for §5a's year slider and for
the imagery when it comes.

## 4. Historic text on the map — *medium, once §2 exists*

Given proceedings, a segment whose timeline contains a `change` can open a
"how it happened" disclosure in the popup: the steps in date order, one
excerpt each, each linking to its CDNC / minutes page, with the
never-enacted proposals shown struck through. On the map this is the popup;
off it, the same data renders a per-proceeding page, which is probably how
most readers would actually want to read Ordinance 48. Nothing to do here
until §2 has a shape.

---

## 5. Display modes — *one quick, one medium*

### 5a. The grid as of year Y — *medium*

A year slider. At Y, every modern segment is one of three things — **known
present** (existence hull reaches it by Y), **known absent** (an `absent` row
dated ≥ Y covers it, or its first planning act is after Y), **unknown** — and
each is drawn differently: full, hidden, dim. Vanished streets (MODEL-SPEC
§5.3) appear when Y falls in their attested window. Labels and colour show the
name in force at Y, which the timeline already answers.

What the generator must add: per stretch, `exists: { from: year, kind:
"exact"|"by"|"after", absentUntil: year|null }`; per vanished trace, its
sighting dates (it carries one `doc` today). What the map adds: the slider,
and a third drawing state. The subtle rule is Kenny's own — "attested near
then, but not lines that were absent then": a vanished line has sightings, not
an interval, so show it from its earliest to its latest sighting, widened by a
visible tolerance (say ±5 years), and never across an `absent` row on its
ground. Make the tolerance a labelled control rather than a constant.

This wants §1 Step A first (stretches are the unit that carries existence
dates) and reads naturally off §3's `documents.js`.

### 5b. Colour by age of oldest attestation — *quick*

MODEL-SPEC §8 scheme 3, specified and not built ("Age: earliest document
showing the segment existed"). The generator already computes the date for the
`planned` / `built` text; emit it once more as a number (`earliestYear`, with
`kind` exact/by) and give `index.html` a sequential ramp from 1849 to the
extract date. Scheme 4 (latest document showing it did *not* yet exist) is the
mirror and needs only `absentAsOf` as a number; build both in the same
afternoon, and the gap between them is the "how well pinned" scheme MODEL-SPEC
§12 defers.

---

## 6. Search: "eleventh" must find "11th" — *quick*

Root cause, not a missing table: the search box is a native `<datalist>`, so
matching is done by the browser against the option *text*. The generator's
canonicalisation (`canonTokens`: ordinals, number words, type abbreviations)
folds "Eleventh" to "11th" when it builds the index, but the browser never sees
the canonical key — it sees "11th Street" and the user typed "eleventh".

Fix: replace the datalist with a small custom list (a `<ul>` under the box)
matched in script on canonical tokens — canon(query) tokens each a prefix of
some canon(form) token, order-free, so "20" reaches "Avenue 20" and "chavez"
reaches "Cesar E Chavez", both of which MODEL-SPEC §6.5 already asks for. The
generator emits the canonical key per row and ships its three tables in
`search-index.js` so the browser folds the query identically (§12 notes this
requirement). Apply to `index.html`. An hour or two; `tests/preview-test.js`
gets a case.

---

## 7. Categories — *built 2026-09-15; a few loose ends*

**Built:** the checked vocabulary, the tree, the `object` branch, the `nature`
split, descendant matching, derived `unknown` / `unresearched` / `renamed` /
`disputed`, and the `basis` node on the map. The vocabulary and the reasoning
behind each node are in the header and node comments of `CATEGORIES` in
`data/site-config.js`; `basis`, `searched` and the flags are MODEL-SPEC §3.1;
the current-and-former counts are MODEL-SPEC §6.0a. Code comments that say
"ROADMAP §7" mean this section and those places.

### Rationale recorded nowhere else

- **Tree versus plant: what the namer would have pointed at.** `tree` is a
  sibling of `plant`, not a synonym for it, and the boundary is genuinely
  fuzzy — myrtle is a shrub, mesquite a shrub or a small tree, and a tulip is a
  flower on a bulb but a tulip *tree* is not. As graded 2026-09-15:
  `alameda-st` (álamo, the cottonwood), `poplar-st`, `olive`, `spruce`,
  `willow`, `mesquit`, `maple-dtla`, `palm-st-arts-district` → **tree**;
  `flower`, `tulip`, `myrtle` → **plant**; `chapules`, `hornet`, `bull` →
  **animal**; `crown-hill-ave`, `hill-street-downtown` → **landform**.
- **`descriptive` is the residual of a group, not a peer.** `number` (position
  in a grid), `destination` (where it goes) and `descriptive` (role or position
  otherwise) all say *the name describes the street*; `descriptive` is what is
  left when the other two do not apply. At 2026-09-15 all 8 members described
  the roadway itself: Main, Central, Short, Commercial, College, Court House,
  Alameda, Traction.
- **The `descriptive` category and the `lexical` basis point opposite ways.**
  Of those 8, three grade `intrinsic` and four `attested`: a name that
  describes the street can be checked against the street, so the category
  predicts a *strong* basis. `lexical` means the word's meaning is all we have
  — the opposite. (The basis value was renamed to `lexical` so the category
  could keep its name.)
- **`history` is retired.** A historical people goes under `person` as
  `people`; an event goes under `abstract`. Olympic Boulevard's legacy entry is
  the only `event` there is; if a second turns up and the grouping reads wrong,
  revisit.

### Still open

- **Empty nodes.** A religious figure or saint was in the original sketch and
  has no node; `mayor`, `event` and `system` have no member in the generated
  model, some legitimately (the freeways are legacy-only ground).
- **`witmer-street` is tagged `landowner` on a judgment call.** The sheet reads
  "Witmer's Subdivision", which makes Henry Clayton Witmer the subdivider, but
  the `namedAfter` says the land was his *family's*. Either tag is arguable.
- **Say that `descriptive` is a residual where authors will see it** — in its
  node comment in `data/site-config.js` — *quick*.

---

## 8. Widening coverage: a new neighbourhood, and the big sheets — *process; Kenny-heavy*

`handbook/ADDING-A-NEIGHBORHOOD.md` has the steps and `SERIAL-SOURCES.md` the
sources. What neither says yet, because nobody has done it:

- **A large sheet may not take one affine.** A directory map or a Sanborn key
  sheet covers miles; paper stretch and a scan stitched from tiles mean a
  single least-squares fit will have residuals that put a street a block off at
  the far corner. The map tool assumes one image, one alignment. Two ways out:
  cut the scan into tiles and make each a document (the `copies` mechanism,
  MODEL-SPEC §4.4a, already lets several documents share one url), or store
  several alignments per document with the tool choosing by nearest control
  points. Tiling is the one that needs no tool change; try it first on one
  sheet.
- **A sheet touching forty streets** is what the model was built for, so the
  data side is fine; the *review* is the bottleneck. Before a Sanborn sweep,
  the map tool's review mode should be exercised on a 20-street tract sheet to
  see what forty feels like.
- **Sanborn downloads are Kenny's click** (LOC's IIIF refuses automation);
  1888 and 1894 are the clean anchors, 1906 volumes are palimpsests
  (SERIAL-SOURCES).
- **Choosing the neighbourhood** comes before any of that, and is the only
  decision here: the candidates that share the most documents with downtown
  (so the existing corpus already speaks about them) are the cheap ones.
  Bunker Hill / Westlake to the west and Boyle Heights to the east are the
  obvious pair; `tools/coverage-report.js` can say which existing sheets already
  reach into each.

---

## 9. Things not on Kenny's list that fit alongside it

- **Permalinks.** Encode the selected entity, segment, colour scheme and (when
  it exists) the year in the URL hash. Trivial, and it is what makes the
  `[[name:<id>]]` cross-links shareable, lets a proceeding page link to its
  stretch, and lets Kenny send a colleague a particular view. *Quick.*
- **A segmentation report in `generated/report.md`** printing the boundary
  breakdown in §1's table, every build. Then the effect of Steps A–C is a
  diff in a report rather than an impression from the map. *Quick.*
- **`documents.js` and the coverage layer** (§3's first step) as its own
  item — it serves §1's grades, §3, §5a, and the "what has been looked at"
  question, and it costs an afternoon.
- **The bridging report** MODEL-SPEC §6.2a asks for, before the rule lands.
- **Two gaps in the map tool** (MAP-TOOL-SPEC §4). *Export notes for the next
  AI pass* — the unconfirmed and rejected rows with the human's comments,
  formatted as a prompt for another round, which is what makes the AI pass and
  review alternate rather than being one-shot — is specified and not built.
  And a row's `basis` is still file-only: review mode cannot set it.

Not proposed: anything that changes what a row can claim. Every item above is
about how claims are grouped, shown, found or connected; the evidence rules in
MODEL-SPEC §§4–5 and CLAUDE.md's broken-rules list stay as they are.

---

## 10. Suggested order

1. **Quick fixes:** the search matcher (§6); add the two similar projects
   Kenny named to `SIMILAR_PROJECTS` in `data/site-config.js` —
   https://lax-skyline.parcelscope.net/ and https://maps.bristol.gov.uk/kyp/ ;
   the segmentation report and permalinks (§9); scheme 3/4 colours (§5b);
   style-budget warnings once per entity and `report.notes` in the report
   (§11).
2. **Legacy cleanup** (§11), and the decision whether `tools/check-legacy.js`
   has done its job.
3. **The Orange → Wilshire proceeding, written by hand** (§2) — a day, and it
   settles the shape before anything is built to it. It needs the A → B → A → B
   fix (§2) to carry the 1908 pair.
4. **§1 Step A**, display unit vs evidence unit — the largest single
   improvement to the map for the least risk to the claims.
5. **`documents.js` and the coverage layer** (§3, first step).
6. **The bridging report, then the rectangle rule and existence hull** (§1B).
7. **Ordinance 48 as a proceeding**; migrate `ord-4093`, Buena Vista and the
   Miramar chain; **then the textual review tool**, which also clears the 61
   held-back rows (§2). If those rows start to matter, the tool can move ahead
   of Ordinance 48.
8. **The year slider** (§5a); the imagery overlay (§3) once the rights and
   repo-size questions have answers; "runs off the sheet" (§1C) once §1B has
   shown what the bridging actually produces.
9. A new neighbourhood (§8), when Kenny wants to spend the alignment time.

---

## 11. Left over from the switchover (2026-09-19)

The flip left a short list, formerly in handbook/SWITCHOVER.md (retired
2026-09-20). The research notes behind it are in research-leads.md, "Settled
and open at the switchover". The research errands it also left (the Misc
Records half of the 17b list, Olympic's 1935 ordinance, the Chavez exhibit map
in council file 93-0907) are in **WANTED.md**; the proceedings work it left is
in §2.

- **Cleanup the flip left on purpose:** the `only: "legacy"` rows in
  `data/site-config.js`, and the legacy branches of `tools/check-data.js`,
  `utilities/names-tool.html` and `tools/generate.js`'s `NAME_CATEGORY_INDEX`
  (`unknown` / `unresearched`). Also the `documents/tr0002-008b`,
  `tr0002-062a` and `tr0012-088a` folders with no `.js` yet, which
  `tools/generate.js` skips with a warning.
- **What `tools/check-data.js` is for after the flip.** The authored layers
  have `tools/check-model.js`; the generated file is the output of a
  deterministic program. What is still worth checking there is the contract
  the map relies on — labels, vocabulary, sources with URLs, bands tiling,
  timelines ending in the current name (it caught three rows on the wrong
  street before the flip). Decide, and trim it to that.
- **Style-budget warnings** (note / namedAfter / origin length): they fire in
  `tools/check-data.js` on the generated file, 70-odd per build, and belong in
  `tools/check-model.js` or the names tool, once per entity. *Quick.*
- **`report.notes` is never printed.** An unqualified change that lands nowhere
  pushes a note there, but `generated/report.md` does not render the list, so
  the note is dead code. The `check-model` warning covers the same ground;
  print the notes or drop them. *Quick.*

The one standing rule from the flip, to commit the regenerated
`generated/streets-data.js` and `generated/search-index.js` with every change
to `documents/` or the name files, is in PUBLISHING.md and CLAUDE.md rule 7.
The guard against the generated map having lost something the hand-made one
said is `node tools/check-legacy.js` (legacy/README.md). It is temporary: the
first time it fails on a difference that was intended, consider retiring it,
along with `legacy/` and `tools/diff-street.js`, instead of adding an accept.
