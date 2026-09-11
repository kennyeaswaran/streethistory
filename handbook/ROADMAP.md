# Roadmap: the changes we want, sized and sequenced

Written 2026-09-10 from a list of Kenny's, checked against what the code and
the spec already do. This is the standing home for **wanted changes that are
not yet specified**; MODEL-SPEC.md §13 is the index into it. When an item is
designed properly, its design moves into the spec (or MAP-TOOL-SPEC.md) and the
entry here shrinks to a pointer. When an item ships, delete it.

Each item carries a size:

- **quick** — an afternoon, no model change, no decision needed from Kenny.
- **medium** — a generator or tool feature, mostly already specified.
- **project** — needs a design decision first, then a migration or a sweep.
- **someday** — worth wanting, not worth starting until something else lands.

Suggested order is at the end (§10).

---

## 1. Fewer segments on the map, with nothing lost — *project, in three steps*

### What the map does today, measured

The generated data (2026-09-07 build) has 112 streets with entries and 483
segments — Main Street is 17 pieces, 2nd Street 18, Los Angeles Street 18 —
against 140 entries for 107 streets in the hand-authored file. Classifying
all 371 adjacent-segment boundaries by what differs across them:

| what differs across the boundary | boundaries |
|---|---|
| a different name lineage on each side (the only kind a reader cares about) | 23 |
| same lineage; a document letters the name on one side and **nothing** speaks about the other (OSM-only) | 176 |
| same names and same name dates; only `planned` / `built` / `absentAsOf` differ | 105 |
| same names; the same names carry different dates ("1849" one side, "by 1873" the other) | 40 |
| nothing differs but geometry (2nd Street ×2, Bixel) — pavement gaps, see MODEL-IMPLEMENTATION checklist B | 3 |
| other (different entity bound to the roadway, etc.) | 24 |

So **about one boundary in sixteen marks a change of name**; the rest mark
where one document's coverage ends. Every one of those is real information —
"this sheet stops here" — but it is information about the *evidence*, and the
map is presenting it as if it were information about the *street*. That is the
thing to fix, and it says what "without losing information" has to mean: the
evidence extents must survive somewhere the reader can reach; they need not be
the unit the reader clicks.

The merge key is in `generate.js` (`entryKey`): timeline signature (entity,
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
fine segment carried today goes away; what changes is that a reader clicking
anywhere on Georgia-Street-era 3rd gets one story instead of five fragments.

Where a segment's periods carry different dates in different stretches ("1849"
here, "by 1873" there), the segment-level period shows the earliest exact
date, or the earliest "by" if no exact one exists, and the stretch table shows
the rest. That is the same choice `knownFraction` already makes per segment.

This is generator + `preview.html` only — no model change, no re-reading of any
sheet — and `preview-test.js` can assert the colours per stretch as it does per
segment today. Do it first, because it is the one step whose result cannot be
wrong about history: it changes nothing about what is claimed, only how it is
grouped.

### Step B — the rectangle rule and the existence hull — *medium; specified*

§6.2a is specified and unbuilt (§12). Step A groups the fragments; §6.2a is what
would actually *bridge* them — fill Georgia across the block no sheet letters,
and (the existence hull, same section) fill `planned: 1849` across a middle
stretch when both ends show 1849. It collapses most of the 176 and the 105
above into claims, each carrying its grade: attested / swept-silent /
unexamined. The bridging report §6.2a asks for is the guard, and with Step A
in place it has a natural home — a bridged part is just a stretch with grade 2
or 3, and the popup already prints the stretch table.

Two things §6.2a leaves open and this item needs settled before it lands:

- `knownFraction` must count grade-3 years fractionally (§8 already says so).
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
  pixel somebody clicked (§5.4); rounding it to the block is a false claim.

---

## 2. Organising a renaming's paper trail — *project; the biggest open modelling question*

### Where it stands

186 textual documents are in `documents/` — Herald, Examiner, Daily News
clippings and six sets of minutes — and **179 of them carry no rows.** Seven
carry change rows: the four instruments (`ord-1613`, `ord-1874-02-26`,
`ord-1887-08-22`, `ord-4093`) and three Herald reports standing in for
instruments not yet found. Everything that connects a clipping to the change it
reports about lives in **comments at the top of the file** — see
`documents/lae-1924-04-12` for the five-document, sixteen-year Orange → Wilshire
arc, written out by hand, with the model knowing nothing of it. Meanwhile
`handbook/MINUTES-TO-CHECK.md` invented a stage vocabulary on the fly (§1 asked,
§2 ordered drafted, §3 adopted, §3+ approved, ✔TEXT), and
`change-rows-amendment.md` §10 found that two of its six statement forms are
not change rows at all. All the pieces of a design exist; none is in the model.

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
  news report. `check-model.js` should warn on a `change` row in a
  `news-report` document — the three that exist today are the migration list.
  The generator reads rows from both places; the proceeding's rows carry
  `says` that cross documents, which is the excerpt-citation question
  change-rows §12 left open, answered.
- **Effective date.** Approval (or publication where the law required it),
  not adoption, not the report's date. The proceeding computes it from its
  steps; a row inherits it. That is what §3+ in MINUTES-TO-CHECK was reaching
  for.
- **Proposals that differ from the outcome.** A step may carry `proposes:`
  (the names that report floated — Alpine was first to be Eighth). They
  never reach the map's timeline. They do reach the popup narrative (§4
  below) and the names tool, where a proposed-never-enacted name is a
  legitimate sighting of a *proposal*, not of a name.
- **Stage vocabulary** — closed list, checked: `petition`, `referral`,
  `committee-report`, `draft`, `adopted`, `vetoed`, `reconsidered`,
  `approved`, `published`, `repealed`, `report` (a paper simply reporting the
  state of things). MINUTES-TO-CHECK's §1/§2/§3/§3+ map onto it directly.
- **`attests`.** A proceeding whose rows are qualified attests `built-by` at
  the effective date on that stretch (change-rows §9); unqualified rows attest
  nothing about ground, as now.

### What can happen without the tool

All of it, in fact — the file above is hand-writable today, and the two pilots
should be written by hand before any tool exists so the tool is built to a
shape that has survived contact with real material:

1. **Orange → Wilshire** (five documents, two instruments, one repeal): the
   best-documented arc in the corpus, and the one the file comments already
   narrate.
2. **Ordinance No. 48 (N.S.), 1889** — 212 changes, a veto, a reconsideration,
   a rewrite before enrolment: the stress test. Its full text is in hand
   (MINUTES-TO-CHECK, Priority 1).

Then migrate the 1897 arc onto `ord-4093`, which is already half there.

### The tool (MAP-TOOL-SPEC §9, extended)

§9 asked for a review tool for textual documents: excerpt beside clip, `says`
made navigable, `scope` made visible. A proceeding is the right *list item* for
that tool rather than a document: open one, see every step's clip and excerpt
in date order down one column, and the resulting rows in the other, and write
the rows while looking at all of the evidence at once. Same surgical file
editing as `names-tool.html`, no canvas. Build it after the two hand-written
pilots, not before.

---

## 3. Historic maps on the public site — *someday; a cheap first step exists*

The alignments Kenny has made (§4.6: two-point similarity or least-squares
affine, stored on each document) are enough to draw a sheet on the modern base.
What stands between that and the site:

- **Leaflet draws only axis-aligned image overlays.** So either pre-warp each
  render at build time into a north-up Web-Mercator PNG plus bounds (a
  `generate`-side script; the affine is already there), or use a rotated-overlay
  plugin, which handles similarity fits and not general affines. Pre-warping is
  the safer route and lets the build also **mask the image to its coverage
  polygon**, so what the reader sees is exactly the ground the document
  testifies about — a much better thing to show than the whole sheet with its
  margins and title block.
- **The scans are not committed.** `.gitignore` already anticipates this: a
  viewer-facing derivative is to be named `<id>-web.jpg` and excepted. Sixty
  100 dpi renders exist, none over 3 MB; web-sized and masked they would be a
  few hundred KB each. Repo size is a Kenny decision.
- **Rights.** County recorder scans and LOC Sanborn sheets are public records /
  public domain; the Huntington items (`11824`, `12017`, `12685`) need their
  terms checked before publication.
- **UI.** A layer picker listing documents by date, an opacity slider, and
  "show this sheet" from a segment's source line. Fit to the sheet on select.

**The cheap first step, worth doing regardless:** have the generator emit
`generated/documents.js` — every document's id, title, date, url and its
coverage ring in world coordinates — and draw the rings as an optional layer
on `preview.html`. No imagery, no rights question, and it makes visible the
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
each is drawn differently: full, hidden, dim. Vanished streets (§5.3) appear
when Y falls in their attested window. Labels and colour show the name in force
at Y, which the timeline already answers.

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

This is §8 scheme 3, specified and not built ("Age: earliest document showing
the segment existed"). The generator already computes the date for the
`planned` / `built` text; emit it once more as a number (`earliestYear`, with
`kind` exact/by) and give `preview.html` a sequential ramp from 1849 to the
extract date. Scheme 4 (latest document showing it did *not* yet exist) is the
mirror and needs only `absentAsOf` as a number; build both in the same
afternoon, and the gap between them is the "how well pinned" scheme §12
defers.

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
reaches "Cesar E Chavez", both of which §6.5 already asks for. The generator
emits the canonical key per row and ships its three tables in
`search-index.js` so the browser folds the query identically (§12 notes this
requirement). Apply to both `index.html` (live; street-keyed) and
`preview.html` (entity-keyed). An hour or two; `preview-test.js` gets a case.

---

## 7. Categories: a vocabulary, a tree, and a review pass — *quick fix now; medium overall*

### Two things wrong today

- **Four category ids are in use and not declared.** `names.js` uses
  `mythological`, `history`, `foreign` and `company`; none is in `CATEGORIES`.
  Those tags render with no label and cannot be selected in the Highlight
  list. `check-model.js` checks only that the list is non-empty; it should
  check every id against the vocabulary. *Quick fix, do it this week.*
- **The list is flat and mixes three different kinds of thing.** "Named after
  a person" is a referent; "Namesake alive when named" is a circumstance of a
  person-naming; "Has former names" is derived by the generator; "Origin
  disputed" is a status of the research. Sorted flat, they read as peers.

### Proposal

Move `CATEGORIES` to `site-config.js` (this is MODEL-IMPLEMENTATION checklist
item A — do the two together) and make it a tree with three facets:

```
Referent — what the name points to
  person           → governor / politician or official / landowner or subdivider /
                     family of the subdivider / religious figure or saint /
                     foreign figure / other
  place            → destination (where it goes) / local landmark / another city
                     (borrowed) / state, region or nation
  nature           → plant / animal / landform / water          ← "nature" split
  myth & religion
  history & events
  company & institution
  abstract         → virtue or aspiration / descriptive of role or position /
                     number or ordinal / direction
  route system     (freeways, highways)
Circumstance — orthogonal to the referent
  alive when named · named for themself (subdivider) · posthumous
Status — mostly derived or editorial
  renamed (derived) · disputed · origin not yet found · not yet researched
```

Each entry carries `parent`; the Highlight list shows group headings with
sub-items indented, still single-select radio (§8), and **selecting a parent
matches every child** (the generator emits `ancestors` per entity, or the map
walks the tree). Counts beside each label, and within a group sort by count
descending — a reader wants to know that "plant" has eleven and "animal"
three before choosing.

The migration is mechanical for the 109 curated entities and half a day:
`chapules`, `hornet`, `bull` → animal; `alameda-st`, `poplar-st`, `olive`,
`flower`, `spruce`, `tulip`, `willow`, `mesquit`, `maple-dtla`, `myrtle`,
`palm-st-arts-district` → plant; `crown-hill-ave`, `hill-street-downtown` →
landform; `person` entities get a subtype or `other`. Kenny's review pass then
is the tree itself, not the tags: whether `alive` stays a circumstance or
becomes a subtype, whether `governor` widens to "politician or official", and
what else the person subtypes should be once the stubs are researched.

---

## 8. Widening coverage: a new neighbourhood, and the big sheets — *process; Kenny-heavy*

`handbook/ADDING-A-NEIGHBORHOOD.md` has the steps and `SERIAL-SOURCES.md` the
sources. What neither says yet, because nobody has done it:

- **A large sheet may not take one affine.** A directory map or a Sanborn key
  sheet covers miles; paper stretch and a scan stitched from tiles mean a
  single least-squares fit will have residuals that put a street a block off at
  the far corner. The map tool assumes one image, one alignment. Two ways out:
  cut the scan into tiles and make each a document (the `copies` mechanism,
  §4.4a, already lets several documents share one url), or store several
  alignments per document with the tool choosing by nearest control points.
  Tiling is the one that needs no tool change; try it first on one sheet.
- **A sheet touching forty streets** is what the model was built for (§1,
  cost 3), so the data side is fine; the *review* is the bottleneck. Before
  a Sanborn sweep, the map tool's review mode should be exercised on a
  20-street tract sheet to see what forty feels like.
- **Sanborn downloads are Kenny's click** (LOC's IIIF refuses automation);
  1888 and 1894 are the clean anchors, 1906 volumes are palimpsests
  (SERIAL-SOURCES).
- **Choosing the neighbourhood** comes before any of that, and is the only
  decision here: the candidates that share the most documents with downtown
  (so the existing corpus already speaks about them) are the cheap ones.
  Bunker Hill / Westlake to the west and Boyle Heights to the east are the
  obvious pair; `coverage-report.js` can say which existing sheets already
  reach into each.
- `NEIGHBORHOODS` moves to `site-config.js` with the categories (item 7).

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
- **The bridging report** §6.2a already asks for, before the rule lands.
- **Retire the four-way duplication of `normalizeName` / alias tables**
  across `generate.js`, `preview.html`, `index.html` and the checker
  (MODEL-IMPLEMENTATION checklist B), which §6 above will otherwise make five.

Not proposed: anything that changes what a row can claim. Every item above is
about how claims are grouped, shown, found or connected; the evidence rules in
MODEL-SPEC §§4–5 and CLAUDE.md's broken-rules list stay as they are.

---

## 10. Suggested order

1. **Quick fixes, this week:** declare the four missing categories and make
   `check-model.js` validate ids (7); the search matcher (6); scheme 3/4
   colours (5b); permalinks and the segmentation report (9).
2. **The Orange → Wilshire proceeding, written by hand** (2) — a day, and it
   settles the shape before anything is built to it.
3. **§1 Step A**, display unit vs evidence unit — the largest single
   improvement to the map for the least risk to the claims.
4. **`site-config.js` + the category tree** (7, and checklist A).
5. **`documents.js` and the coverage layer** (3, first step).
6. **The rectangle rule and existence hull** (1B), with its report.
7. **Ordinance 48 as a proceeding; then the textual review tool** (2).
8. **The year slider** (5a); the imagery overlay (3) once the rights and
   repo-size questions have answers; "runs off the sheet" (1C) once 1B has
   shown what the bridging actually produces.
9. A new neighbourhood (8), when Kenny wants to spend the alignment time.
