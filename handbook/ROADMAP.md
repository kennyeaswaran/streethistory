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

## 7. Categories: a vocabulary, a tree, and a review pass — *mostly done 2026-09-15*

**Status.** The move to `site-config.js`, the tree, the `object` branch, the
`nature` split and descendant matching on both maps are **done**. What is left
is listed at the end of this section under *Still open*.

### Two things wrong — both fixed

- ~~**Four category ids are in use and not declared.**~~ *Fixed 2026-09-12:*
  `mythological`, `history`, `foreign` and `company` are declared in
  `CATEGORIES`; `check-model.js` now errors on an undeclared id, and the names
  tool warns on one as it is coined (the "new category" row is how the four
  came about). What remains here is the tree below.
- ~~**The list is flat and mixes three different kinds of thing.**~~ *Fixed
  2026-09-15: the three facets below are built, and facet rows are headings
  rather than choices — `check-model.js` errors if an entity tags one.*
- ~~**Research status was typed by hand.**~~ *Fixed 2026-09-15: `unknown` and
  `unresearched` are DERIVED by `generate.js` from `namedAfter` and `searched`,
  alongside `renamed`. They had drifted badly — twenty of the 143 entities
  disagreed with their own fields, thirteen of them claiming `unknown` beside a
  populated `namedAfter`. `check-model.js` and the names tool now error on
  authoring one, and `map-tool.html` mints entities with no categories at all
  rather than guessing `unknown`, which also settles the mint disagreement
  between the two tools.* "Named after
  a person" is a referent; "Namesake alive when named" is a circumstance of a
  person-naming; "Has former names" is derived by the generator; "Origin
  disputed" is a status of the research. Sorted flat, they read as peers.

### The vocabulary, as built

`CATEGORIES` lives in `site-config.js` (MODEL-IMPLEMENTATION checklist item A,
done together with this). The sketch below is what shipped 2026-09-15, after
Kenny's review pass — **six top-level referents**, which is the number a reader
can hold at a glance, and everything else a subtype of one of them.

```
What the name points to
  person        → landowner (owned or subdivided the ground) / family (of the
                  owner or subdivider) / politician → mayor, governor (of
                  California), president, official / mythological / people
                  (rather than one person) / foreign / alive when named
  nature        → tree / plant / animal / landform / water
  place         → destination (where it goes) / state / borrowed (a street
                  elsewhere)
  company       → "An institution" — a railway, a college
  object        → material / tool
  abstract      → idea (a virtue, a quality, an aspiration) / descriptive
                  (the street's own role or position) / number / route system /
                  event
Status of the record — all derived, never authored
  renamed · disputed · unknown · unresearched
```

Three things in there are worth their own sentence.

**`politician` is the generic and `governor` is a governor of California.** The
parent used to be called `governor` and carry both senses, which was wrong for
half its members — Santee was a city councilman, and Cleveland Street's legacy
entry says only "possibly Grover Cleveland" and carries `disputed`. The six
legacy uses were migrated to the generic id, a rename and nothing more: none of
them was reclassified, because for two of them we do not know enough to.
(Cleveland is a standing question in its own right, but not the one I first
wrote here: Kines does attribute it to Grover Cleveland, explicitly as his own
inference rather than from evidence, and he considered and dismissed the city.
What stays open is whether the 1886 Beaudry tract name and an Ord-survey
predecessor are the same street. See research-leads.md, 2026-09-15.)

**`landowner` and `family` are what `basis: "eponymous"` is about**, and
`check-model.js` requires one of them on every eponymous entity. They are not a
restatement of the grade: both also occur under `basis: "attested"`, where a
secondary source tells us the same thing — Patton, Wolfskill, Vignes, Kohler
and Huber are all tagged and none of them is eponymous.

**`alive` is displayed as a subtype of `person`** even though it is a
circumstance of the naming rather than a kind of referent. It only ever applies
to people, it excludes none of the other subtypes, and a reader looks for it
there. Its old `Circumstance` facet had no other member and is gone.

**`history` is retired.** A historical people goes under `person` (as `people`,
so the map does not call the Aztec empire "a person"), and an event goes under
`abstract`. Nothing in the new model used `history`; Olympic Boulevard in the
legacy data is the only `event` there is. If a second one turns up and the
grouping starts to read wrong, this is the decision to revisit.

Each entry carries `parent`; the Highlight list shows group headings with
sub-items indented, still single-select radio (§8), and **selecting a parent
matches every child** (the generator emits `ancestors` per entity, or the map
walks the tree). Counts beside each label, and within a group sort by count
descending — a reader wants to know that "tree" has eight and "animal"
three before choosing.

The migration is mechanical and half a day. Revised 2026-09-15 at Kenny's
direction, now that all 143 entities are graded: **`tree` is a sibling of
`plant`, not a synonym for it**, and the split is lopsided — `alameda-st`
(álamo, the cottonwood), `poplar-st`, `olive`, `spruce`, `willow`, `mesquit`,
`maple-dtla`, `palm-st-arts-district` → **tree** (8); `flower`, `tulip`,
`myrtle` → **plant** (3); `chapules`, `hornet`, `bull` → **animal** (3);
`crown-hill-ave`, `hill-street-downtown` → **landform** (2); `water` has no
member yet. `person` entities get a subtype or `other`.

Watch the tree/plant boundary: myrtle is a shrub, mesquite is a shrub or a small
tree, and a tulip is a flower on a bulb but a tulip *tree* is not. The fuzziness
is real and the rule should be written down before the pass, not discovered
during it — suggestion: **what the namer would have pointed at.**

Kenny's review pass happened 2026-09-15 and settled all three of the questions
this paragraph used to leave open: `alive` became a subtype of `person` rather
than a facet of its own, the generic politician node is `politician` with
`governor` reserved for a governor of California, and the person subtypes are
the seven listed above. What the tree looks like now is at the top of this
section.

### Added 2026-09-15, out of the `basis` design (MODEL-SPEC §3.1)

**A new `object` branch.** Nothing in the vocabulary fits a street named for a
thing — an object, a tool, a material. `adobe` is the case that surfaced it:
once its `namedAfter` is populated with the linked concept, `nature` is wrong
(adobe is a building material, not an organism or a landform) and `descriptive`
is wrong by that category's own definition (the street is not *made of* adobe,
it ran among adobes). Expect few members; `traction-avenue` (the electric
traction motor) is probably the second. Kenny's word was `object` or
`inanimate`; `artefact` is tighter for the made-thing sense but reads oddly
beside `nature`, so `object` is the working name.

**The Status facet is largely superseded.** Once `basis` lands, "origin not yet
found" is `basis: "none"` and "not yet researched" is `searched: "none"` — both
better defined than the tags they replace, and both already known to be stale in
`categories` (`yale` carries `unresearched` beside two completed checks;
`unknown` and `unresearched` disagree about which records are unworked). Retire
the two tags rather than migrate them, and let the map's Highlight list read
them off `basis`/`searched`. `disputed` likewise overlaps the new `rival` flag,
though not exactly: the project's convention is that `disputed` marks a claim
the project takes a side *against*, while `rival` marks an open question.

**`descriptive` and `number` under `abstract`, reviewed.** The collision that
prompted this note is resolved by renaming the basis value to `lexical`, so the
category keeps its name. But the family is still redundant: `number` (position
in a grid), `destination` (where it goes) and `descriptive` (role or position
otherwise) all say *the name describes the street*, and `descriptive` is the
residual — some older `streets-data.js` rows already carry
`["number","descriptive"]`, which is that showing through. Under the tree,
`descriptive` should be documented as the residual of that group rather than as
a peer of it. All 8 current members describe the roadway itself: Main, Central,
Short, Commercial, College, Court House, Alameda, Traction.

**A finding worth keeping.** Carrying `descriptive` as a CATEGORY predicts a
*strong* `basis` — of the 8, three grade `intrinsic` and four `attested` —
because a name that describes the street can be checked against the street. The
`lexical` basis means the opposite. Two facets that sound alike and point
opposite ways is exactly the kind of thing the tree should make visible.


### Still open

- ~~**`basis` is not on the map at all.**~~ *Built 2026-09-15:* a **How well we
  know it** node under *Status of the record*, with the eight grades under it
  and the three `searched` levels under `basis-none`, where they are the only
  thing that distinguishes a closed question from an untouched one. The popup
  prints the grade beside the namesake. In the generated model these REPLACE
  `unknown` and `unresearched`, which are now legacy-only (`only: "legacy"` in
  site-config.js) — `basis-none` says the same thing about the namesake and its
  children say what the old pair could not. A street the base map alone knows
  gets its own row, `stub`, because "researched and not found" and "never
  entered the corpus" are different answers.
- **The current-and-former counts are preview-only.** `index.html` shows a
  single number: the legacy data has no entity ids in its `nameHistory`, so
  former names cannot be counted there without double-counting. Resolved by the
  switchover, not before.
- **Subtypes of `person` that are about the PERSON.** `landowner`, `family`,
  `governor` (with `mayor` / `governor-ca` / `president` / `official` under it),
  `foreign`, `mythological` and `people` are built. A religious figure or saint
  was in the original sketch and has no member yet; nor does `mayor`.
- **`witmer-street` is tagged `landowner` on a judgment call.** The sheet reads
  "Witmer's Subdivision", which makes Henry Clayton Witmer the subdivider, but
  the `namedAfter` says the land was his *family's*. Either tag is arguable.
- ~~**Empty nodes: `borrowed`.**~~ *Filled 2026-09-15* — Wall, Regent, Broadway
  and Yale now carry a `namedAfter` and the category, on the argument that the
  published grade is what qualifies a candid reading. `event`, `system`,
  `mayor` and `people`-adjacent nodes are still empty in the new model, some of
  them legitimately (the freeways are legacy-only ground).
- **The " — " convention in `namedAfter` is load-bearing and undocumented
  outside §3.1.** `generate.js` keeps only the head of the field for a stretch
  that did not originate under the name, so a hedge written after the dash does
  not reach those popups. The basis badge covers it now, but anyone writing a
  `namedAfter` should know the tail is conditional.
- **The legacy path still authors `unknown`.** `streets-data.js` and the
  `check-data.js` rules over it are unchanged and correct: that file has no
  `basis` or `searched` to derive from and never will, since it is being
  replaced rather than migrated. Both go away with the big-bang switchover
  (MODEL-IMPLEMENTATION §C–D), not before.

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

1. **Quick fixes, this week:** ~~declare the four missing categories and make
   `check-model.js` validate ids (7)~~ done 2026-09-12; the search matcher (6);
   scheme 3/4 colours (5b); permalinks and the segmentation report (9).
1.5 **Add two new similar projects: https://lax-skyline.parcelscope.net/ and https://maps.bristol.gov.uk/kyp/?
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
