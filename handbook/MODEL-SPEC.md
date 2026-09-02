# Spec: names, documents, and the generated segment file

**Status (2026-08-25): built, not live.** The generator exists and passes the
§11 acceptance test on 3rd Street — see MODEL-IMPLEMENTATION.md for what was
built, the accounted differences, and the switchover checklist. The
hand-authored `streets-data.js` remains the map's source until the full corpus
is encoded and Kenny approves the §10 switchover. A frozen copy of the
hand-authored data sits in `legacy/streets-data-2026-08.js` for diffing.

**Amended 2026-08-25 (§5.2–§5.4, §4.6):** row kinds for vanished streets and
for documented silence, extents that can end mid-block, alignment stored on
the document, and pixel-space storage for anything traced on a scan. These
came out of designing the document tool (TOOL-SPEC.md) and are contract, not
UI: `check-model.js` and `generate.js` must honour them.

This spec is written to be handed to an implementer cold. Where a rule exists
because we already got it wrong once, that's noted — those are the parts worth
reading twice.

---

## 0. The project, for someone seeing it for the first time

**Streetymology** is a map of street-name history. You open it, click a street,
and a popup tells you what that stretch has been called over time, who or what
each name honored, and which documents prove it. Coverage so far is Downtown
Los Angeles: 107 streets, 140 entries.

Three things about it drive every decision below.

**It is keyed to real geometry.** Streets are drawn from OpenStreetMap, so a
claim always attaches to actual pavement — not to a name in a list.

**The unit of data is the *segment*, not the street.** Los Angeles streets
were assembled from pieces: 3rd Street's downtown blocks were laid out as
"Calle 3ª" in 1849, the stretch east of Alameda was "Georgia St" in 1875, and
the Crown Hill stretch was "Arnold St" in 1894. A single entry saying "3rd
Street, named for its position in the grid" would be false about most of its
length. So a street is subdivided wherever stretches have different name
lineages, and each segment carries only what is documented about *that* ground.

**Every claim carries a linked source, and unknowns stay unknown.** "not yet
researched" is a legitimate, preferred value. The project would rather show a
grey street than a confident guess. Most evidence is primary: recorded
subdivision maps, council ordinances, contemporary newspaper reports, fire
insurance atlases.

The research process is *document-first*: find a document, transcribe it once,
then apply it to every street it touches — because one 1886 tract map names six
streets at once, and re-reading it later is expensive.

Background, if useful: `CLAUDE.md` (orientation and the rules that have been
broken), `ADDING-STREETS.md` (the current hand-authoring guide this model would
replace), `README.md` (what the site is).

---

## 1. What this replaces, and why

Today a segment is hand-authored: its bounding cross-streets, its numeric
band, its name history, its sources. That has four costs the project keeps
paying:

1. **Segmentation is hand-maintained.** Splits are a documented five-step
   procedure; `check-data.js` exists largely to police tiling, adjacency and
   ordering that a generator would get right by construction.
2. **Entries can out-claim their evidence.** The whole "Segment-review flags"
   section of research-leads.md is instances of a segment asserting something
   over more ground than its documents cover.
3. **One document = many scattered edits.** A tract map touching six streets
   means six edits; a Sanborn sheet touching forty means forty, which is why
   large-map sweeps are impractical under the current model.
4. **Names are matched by string.** `normalizeName()` merges by spelling, so
   two unrelated "Georgia Street"s collide while one Figueroa moving between
   roadways looks like two different things.

The model below fixes all four by inverting the direction of authorship: we
record what documents say, and derive segments from that.

## 2. The layers

| layer | file(s) | authored by | holds |
|---|---|---|---|
| **Names** | `names.js` | human | one entry per name *entity*: spellings, namesake, categories |
| **Documents** | `documents/<doc-id>.js` | human/instance, one file per document | what a document attests: which name covered which extent, when |
| **Generated** | `streets-data.js`, `generated/*` | the generator | segments, timelines, search index, reports |

Rule of thumb for where something belongs: if it's a fact about *a name*, it's
in names; if a document *testifies* to it, it's in documents; if it can be
computed from those two, it is never authored anywhere.

## 3. Name identity

**A name entity is a naming lineage, not a string.** Two occurrences are the
same entity iff connected by a chain of propagation — origin, extension,
renaming, transfer. Consequences:

- The two Georgias are **different entities** with the same spelling: one
  honors Georgia Bell, the other (probably) the state. No edge connects them.
- Figueroa is **one entity** across three roadways: originating on the
  west-side street c. 1853–57, extended north, transferred onto former Pearl
  in 1897.
- 3rd Street is **one entity** across the downtown grid; a separate numbered
  grid elsewhere in the city would be a *different* entity that spells alike.

**Default when uncertain: separate entities.** If a map shows a name and a
nearby street carried a similar or identical spelling on an earlier map, enter
it as a new entity unless the spelling *and* the extent match. Merge later if
the evidence arrives. This asymmetry is deliberate:

- merging is cheap — fold B into A, keep B's id as an **alias** so every
  document row citing B still resolves;
- splitting a wrongly-merged entity is expensive — every row must be
  reassigned by hand;
- and the error costs differ in kind: a spurious duplicate is clutter, while
  a wrong merge *fabricates a transfer that never happened* and draws it on
  the map.

Record a suspicion with `possiblySameAs` rather than acting on it.

### `names.js` schema

```js
"figueroa-gov": {
  spellings: [                      // chronological; last = display name
    { forms: ["Figueroa Street"] }  // normalized; NOT a document's abbreviation
  ],
  namedAfter: "{{José Figueroa (1792–1835)}}, governor of Alta California 1833–1835",
  namedAfterLink: "https://en.wikipedia.org/wiki/Jos%C3%A9_Figueroa",
  categories: ["person", "governor"],
  sources: [                        // what justifies the ORIGIN claim; more than
                                    // one when the question is contested, and our
                                    // own reasoning is allowed if labelled as such
    { title: "L.A. Street Names: Figueroa Street",
      url: "https://lastreetnames.com/street/figueroa-street/" }
  ],
  disputed: false,                  // with the "disputed" category, as today
  note: null,                       // PUBLIC. About the NAMING CLAIM only —
                                    // historiography, contested attributions,
                                    // negative results
  internalNote: null,               // NOT public. Working notes: identity
                                    // decisions and who made them, what was
                                    // searched and not found, provenance
  possiblySameAs: null,
  aliases: []                       // ids merged into this one; never reused
},

"georgia-bell": {
  spellings: [                      // ORDERED; dates are derived, not authored
    { forms: ["Georgia Street"], disambiguation: "west downtown" },
    { forms: ["Georgia Bell Street"] },
    { forms: ["Georgia Street"], disambiguation: "west downtown" }
  ],
  namedAfter: "{{Georgia Herrick Bell}} (1845–1899), wife of Major Horace Bell",
  ...
}
```

**Spelling periods are ordered, not dated.** When each form was in force is
derived from the rows that attest it, by the same interval logic as everything
else (§6.2) — so the three entries above resolve to Georgia until 1889,
Georgia Bell 1889–1897, Georgia after. Authoring dates here would duplicate
the documents and go stale against them.

The exception is a form attested only in **prose** — Kines saying a street
"was Georgia Bell Street from 1889" with no document transcribed — where there
are no rows to derive from. Such a spelling may carry an explicit `from` /
`until` and must carry its own source. Expect these to be rare: a name usually
gets *replaced* rather than *respelled*, so most entities have exactly one
spelling period and this whole mechanism sits idle.

⚠ The example above presupposes an answer to a question §12 leaves open —
whether Georgia reverting in 1897 resumes the old entity or starts a new one.
Written this way it assumes resumption. It is a good illustration of where
that decision bites, and should not be read as the decision having been made.

### `note` is published; `internalNote` is not

`note` reaches readers. When a **former** name has no `namedAfter`, the
generator prints the note as that name's origin line on the street's page
(§6.6) — so a note is a sentence a reader should see, in the register of the
rest of the site.

Everything else about an entity goes in `internalNote`, which nothing renders:
which identity decision was taken and by whom, which sources were checked and
came up empty, that an entity was minted by the review tool and from what.
That material is worth keeping — a recorded negative result stops the next
pass repeating the search — but it is working apparatus, not history.

Getting this backwards is easy and was done: "Kenny: worth a look" and a
paragraph comparing two Hobart Streets both reached the public site through
`note`. `check-model.js` now warns when a `note` reads like a working note.

### Entities minted during review: `names-new.js`

Review (TOOL-SPEC §4) has to mint an entity the moment a plat shows a label
nobody has entered, and a browser tool should not write into the file holding
the project's namesake research. So new entities land in **`names-new.js`**,
exported as `NEW_NAME_ENTITIES` and merged by `check-model.js` and
`generate.js` exactly as if they were in `names.js`, with `pendingResearch`
set. An id may not appear in both files.

The lifecycle: research the namesake, fill in `namedAfter` / `categories` /
`sources`, move the entity into `names.js`, delete it from `names-new.js`.
Anything still sitting in `names-new.js` is a to-do list, and `check-model.js`
names them on every run. The tool rewrites the file whole on each review save
— re-reading it from disk first, so hand edits are merged rather than lost —
which is another reason to move an entity out before doing real work on it.

**Identity cannot be deferred the way namesakes can.** An absent `namedAfter`
says "not researched", which is true and harms nothing. A wrong identity
silently asserts that two namings are one lineage, and the generator will bind
a modern street to the entity by name alone. So decide identity at merge time
— including against modern streets that merely spell alike — and leave the
namesake for later.

### Two spellings at once, and two renderings of one spelling

These look alike and are not:

- **Concurrent forms** — `forms` is a list because a name can genuinely carry
  two at the same time. The Ord survey labels streets in both languages:
  Avispa *and* Wasp, both current, neither a rename. One entity, one spelling
  period, two forms; the first is the display form.
- **Renderings of one form** — "Third St" / "3rd St", "Avenue Twenty" /
  "Avenue 20", "Santee St" / "Santee Street". These are *not* authored. Store
  the canonical form once; the generator expands renderings when it builds the
  search index (§6.5). A scribal variant is a matching problem, not a
  historical fact.

**The test for which bucket something goes in: can the rule be written as a
closed table?** Ordinal words against numerals, and street-type abbreviations,
both can — they are finite, known lists, and the generator owns them. Anything
that can't is authored as an additional form. That excludes middle initials:
"Cesar Chavez" / "Cesar E Chavez" is not a rendering rule so much as two names
people actually use, so it goes in `forms` rather than into the generator,
where a general drop-a-single-letter-token rule would be guessing.

**No canonical display name field.** Display = the last spelling in the list.
This works universally because OSM is a document (§4.1), so every living name
has a present-day sighting; a dead name displays as it was called when it
died, which is correct ("Pearl Street", not "Figueroa Street").

**`disambiguation` is per-spelling, not per-name.** Only some spellings of a
name collide — "Georgia" needs one, "Georgia Bell" doesn't. Optional: the
generator derives one when absent (§6.5).

**No lineage edges are authored.** Propagation is derived from document rows
(§6.3). The one exception is a mechanism a document *states in words* — the
1897 ordinance's "being a continuation of that thoroughfare" — which belongs
on the document's change row, since the document is what attests it.

## 4. Documents

One folder per document, `documents/<doc-id>/`, holding `<doc-id>.js` (this
file), the scan, its 100 dpi render, and the document's Part A prose — the
folder is the unit you hand to another AI system (CLAUDE.md, "Folder layout").
A multi-page scan is one document PER PAGE, `<doc-id>-p1`, `<doc-id>-p2`
(§4.4a): a document carries one alignment and one coverage polygon, and two
sheets have two of each. Part A (verbatim labels, title block, caveats) lives
beside the .js in the same folder; the two cross-reference by id.

```js
{
  id: "mr003-060-p1",                // sheet 1 of a two-sheet county file;
                                     // sheet 2 is "mr003-060-p2" (§4.4a)
  title: "Map of the Thomas Tract, being a portion of the Johnson and Mott Tract",
  shortTitle: "Map of the Thomas Tract, sheet 1 (M.R. 3-60)",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf",
  scan: "documents/mr003-060-p1/mr003-060-p1.pdf",
                                     // optional: the local source file, so the
                                     // document tool can open it without a
                                     // picker and a future map could offer the
                                     // sheet as an overlay. Project-relative.
  transcription: "documents/mr003-060-p1/mr003-060-p1-partA.md",

  date: { on: "1875-05-19" },        // or { after: "1906", before: "1950-06" }
                                     // for a Sanborn sheet with an undated paste-on
  type: "tract-map",                 // tract-map | survey | sanborn | directory
                                     // | ordinance | osm | annotation
  attests: "planned-on",             // planned-on | planned-by
                                     // built-on   | built-by     — see §4.2
  completeness: "incidental",        // incidental | exhaustive-in-scope — see §4.3
  coverage: [[34.045, -118.238], [34.052, -118.236],             // polygon; §4.4
             [34.051, -118.230], [34.044, -118.232]],
  sweptFully: true,                  // OUR reading, not the document's claim;
                                     // gates negative inference — see §4.5
  sweptFor: null,                    // when sweptFully is false: streets done so far
  readBy: "instance",                // human | instance | instance+alignment

  rows: [ ... ]                      // §5
}
```

### 4.1 OSM is a document

The current OSM extract is document `osm`, dated to the extraction, `type:
"osm"`, `attests: "built-by"`, coverage = the union of NEIGHBORHOODS
boundaries, with one `state` row per named way. It is the newest sighting of
every living name, which is what makes "display = latest spelling" work and
what makes the grey base map fall out: a segment whose *only* sighting is
`osm` is one nobody has researched. It is tertiary, so it must not count
toward the primary-anchor metric.

**Its rows bind to entities automatically — nothing is attached by hand.** OSM
gives spellings, not ids, so the generator resolves them:

1. **Unique match** — the normalized OSM name matches the latest form of
   exactly one entity: bind it.
2. **No match** — mint a **stub entity**: the OSM name as its only spelling,
   `namedAfter: null`, category `unresearched`, no sources. This is how new
   coverage bootstraps. Add a neighborhood, and its couple of hundred street
   names arrive as stubs that render grey immediately and are ready to receive
   research, with no hand-entry step at all.
3. **Several matches** — two live entities sharing a current form (two
   surviving "Georgia Street"s would do it): disambiguate by geometry, binding
   to whichever entity's known extents overlap the way. If that is still
   ambiguous, bind nothing and report it; a wrong bind fabricates history,
   and this is exactly the collision the model exists to keep honest.

Stubs must be distinguishable from curated entities so a human can see what
has actually been researched — no sources and no `namedAfter` is sufficient,
and the generated report should count them.

### 4.2 `attests` — what kind of existence, and how tightly dated

Four values, crossing *what* is attested with *how* the date binds:

| value | meaning | default for |
|---|---|---|
| `planned-on` | the document **is** the planning act — this is the date | recorded tract maps, for streets the tract itself dedicates |
| `planned-by` | planned no later than this | a survey or map that merely shows an existing street |
| `built-on` | built on this date (rare; needs an opening/acceptance record) | — |
| `built-by` | physically existed no later than this | Sanborn, city directories, OSM |

Ink on paper proves intent, not pavement — Hope Street is on the 1849 survey
and was not built for two decades. Sanborn is the converse: it surveyed
physical structures for fire underwriters, so it had no reason to draw what
wasn't there.

**A row may override its document's default, and often must.** Recording a
subdivision map dedicates the streets it creates — `planned-on` — but the same
sheet also draws streets that already existed and merely abut the tract, which
are only `planned-by`. TRACT-RESEARCH.md documents this trap already: "a street
may predate the tract fronting it." Sanborn likewise sometimes draws proposed
or unopened streets.

### 4.3 `completeness` — what its silence proves

- **incidental** — the document mentions what it happens to cover. Its silence
  about a street proves little.
- **exhaustive-in-scope** — the document purports to list *every* instance of
  its subject. Ordinance 4093 claims to list all 326 renamings, so a street
  it doesn't name **was not renamed on that date** — a strong negative, and
  the point of recording it. Scope matters: exhaustive within the city limits
  of the day, over streets the council had jurisdiction over, and only for
  the change it legislates.

### 4.4 `coverage` — the footprint it testifies about

**A polygon** — `[[lat, lng], …]` — not a bounding box. Sheets are rotated,
tracts are irregular, and a bbox would silently claim testimony over ground
the document never showed. A rectangle is just a four-point polygon.

Where it comes from: a human draws it in the document tool, tracing the area
the document actually informs about — for a tract map that is the *tract
boundary*, not the sheet edge, since a plat is mostly blank paper around the
tract and claiming the paper would license negative inference over blocks the
map never depicted. For an ordinance, coverage is the city limits of the day,
which is also the honest scope limit on its completeness (§4.3).

**Stored in scan pixels** for any document with an `alignment` (§4.6), in
`[lat, lng]` only for documents with no scan. Pixel storage means a later,
better alignment carries the polygon with it instead of stranding it.

Required, and load-bearing: without it, "no street drawn here" is
indistinguishable from "we never looked at this part of the sheet," and the
"latest document showing the segment did **not** yet exist" color scheme (§8)
is unimplementable.

**What counts as inside it** is decided in metres of ground, not in vertices.
A modern way is clipped at the polygon **boundary**, not at its last vertex
inside — OSM records a straight street as two points hundreds of metres apart,
so vertex testing threw away everything between the last inside vertex and the
edge, and missed entirely a way that crossed with no vertex inside.

Two escape hatches, for the two ways a hand-traced boundary goes wrong, and
they are not interchangeable:

- **Slivers, handled automatically.** A street whose in-coverage run is
  shorter than **25 m** — less than the width of the junction it leaves from —
  is not in bounds at all. No plat could draw a distinguishable corridor
  there, and counting it leaves a stretch that can never honestly be resolved.
  The excluded names and their lengths are reported, so they read as ruled out
  rather than missed.
- **`coverageExcept`, authored.** Ground the polygon strays onto that the
  document does not inform about, beyond what the sliver rule catches. Two
  shapes, because overshoot usually happens *past a crossing* rather than onto
  a whole street: `"Dawson Street"` drops all of it, and
  `{ street: "4th Street", from: { px: [95, 668] }, to: "Alameda Street" }`
  drops one stretch of a street that is otherwise in scope. This is a claim about the POLYGON. A `absent` row is a claim
  about the MAP — that the document covers this ground and draws nothing on it
  — and only the second licenses arguing that no street was there. Conflating
  them turns a traced boundary's slop into a false historical claim, so the
  review tool offers both and chooses neither. `check-model.js` rejects a
  document that both excludes a street and carries rows for it.

### 4.4a A sheet is the unit, not a bound volume

A document carries **one** `alignment` and **one** `coverage`, so a recorded
map of several sheets is several documents: `mr013-087-p1`, `mr013-087-p2`.
They share `title`, `url` and `scan` — that is what makes them one map
bibliographically — and differ in `shortTitle`, alignment, coverage and rows.

The alternative, a page dimension inside one document, would have to reach
every pixel coordinate in the system: `alignment.image`, coverage polygons,
`vanished` traces (§5.3), `{px}` extents (§5.4). The gain would be a tidier
bibliography, which `title` and `url` already carry.

A sheet not worth encoding — an index page, a certificate page, blocks that
were never built — is parked as `documents/_<id>-pN/`, ignored by the registry
with the render kept. M.R. 13-87's sheet 2 is the example.

### 4.5 Two different completenesses, and the half-entered sheet

`completeness` and `sweptFully` are easy to confuse and must not be:

- **`completeness`** is a property of the *document* — does it claim to list
  everything in its scope? Ordinance 4093 does; a tract map doesn't. It never
  changes.
- **`sweptFully`** is a property of *our work* — have we entered every street
  on it yet? It starts `false` and becomes `true` when the reading is done.

A big Sanborn sheet won't be entered in one sitting, and the danger is
specific: if coverage claims the whole sheet while half the rows are missing,
the generator will read the gap as *negative evidence* — "no street here in
1894" — and quietly publish a false claim.

So: **leave `coverage` as the sheet's true footprint** (it's a fact about the
document, and georef emits it once), and **gate all negative inference on
`sweptFully: true`.** A partly-entered document contributes its positive rows
normally and contributes no silence at all. Record what has been done with
`sweptFor: ["3rd Street", "Willow Street", …]` so partial work is visible and
resumable, and so a later session knows where it stopped.

### 4.6 `alignment` — the scan-to-world transform, stored on the document

A document produced from a scan carries its own alignment:

```js
alignment: {
  image: "tracts/renders/MR066-035.png",   // the render these pixels refer to
  dpi: 100,                                 // meaningless without it (PIPELINE.md)
  points: [ { px: [x, y], ll: [lat, lng], note: "…" }, … ]   // ≥3
}
```

**Scan pixels or degrees is decided by the VALUES, not by a flag.** A coverage
ring (§4.4) is stored in one or the other and nothing in the file says which;
the test is that no latitude exceeds 90 and no longitude exceeds 180, while a
100 dpi render is over a thousand pixels across. Deciding it from the first
vertex instead — "is this x large?" — was wrong on half the corpus, because a
polygon traced from the sheet's top-left corner starts small, and every check
that used the ring quietly became a no-op on those documents. `ringIsPixels`
in `doc-geometry.js` is the one answer, so the tool and the checker cannot
drift apart on it.

This is the same control-point schema `georef.py` already consumes, so the
document becomes the single home for what used to live in
`tracts/renders/<name>-alignment.json`. **Keep emitting that sidecar too**:
`georef.py` reads it, and the four committed alignment files are the stage-2
benchmark (PIPELINE.md §2) — orphaning them would delete the only ground truth
the project has for scoring an automatic aligner.

**Everything traced on the scan is stored in scan pixels, never in lat/lng.**
Coverage polygons (§4.4), vanished-street traces (§5.3) and any mid-block
extent point (§5.4) are pixel coordinates against `alignment.image`, converted
to world coordinates by the generator. The reason is that alignments improve:
bake in lat/lng and every later refinement silently leaves the traces behind,
in the wrong place, with nothing to flag it. Stored as pixels, they follow the
alignment for free.

Documents with no scan — ordinances, newspaper reports, `osm` — have no
`alignment`, and their extents are cross-street names or geometry as usual.

## 5. Rows

Five kinds: `state`, `change` and `annotation` below, plus `absent` (§5.2) and
`vanished` (§5.3), added 2026-08-25. Extents are stated in **modern**
cross-street names wherever a cross-street is available — identification has
already happened, and the plat's own wording lives in Part A — with points
allowed where a document's extent ends mid-block (§5.4). The document's own
text for the name goes in `asWritten`.

```js
// STATE — this extent bore this name at this date. The workhorse.
{ kind: "state", name: "georgia-east", asWritten: "Georgia St",
  street: "3rd Street", from: "Alameda Street", to: "Santa Fe Avenue",
  basis: "alignment" },          // lot-level | label | alignment | position

// CHANGE — this extent went from one name to another on this date.
// Only a document that attests the transition itself (ordinance, council
// minutes, dated newspaper report) may carry these.
{ kind: "change", from: "vine-central", to: "central-ave",
  street: "Central Avenue", fromCross: "1st Street", toCross: "2nd Street",
  mechanism: "renaming" },       // optional; only when the document SAYS so

// ANNOTATION — a place fact tied to an extent, not to a name.
{ kind: "annotation", street: "Wall Street", from: "7th Street", to: "8th Street",
  text: "Site of the Southern California Flower Market (1912)",
  url: "..." }                   // annotations MUST carry their own source
```

**On annotations.** Streetscape history was deliberately cut from the data
(2026-08): most of it was borrowed from lastreetnames.com, which the name
history links anyway, and duplicating it is both redundant and a permissions
problem (see README's pre-launch note). Anything worth keeping re-enters as an
annotation row with its own citation — which makes borrowed material visible
as borrowed rather than a policy anyone has to remember.

**`basis`** carries the existing vocabulary, strongest to weakest: lot-level
match, label match, alignment, position. Anything below lot-level surfaces in
the generated source title, as it does today ("identified by map alignment").

### 5.1 `asWritten` is not a spelling

`asWritten` is verbatim: what the ink says, typos included. Directories
misprint names, plats abbreviate inconsistently, and many labels omit the
street type entirely. The name's `spellings` list, by contrast, holds forms we
*assert* the name actually took.

So the rule is: **`asWritten` is never automatically promoted into a name's
spelling list.** Adding a spelling is a human judgement that a form was real
rather than a scribal error. A row whose `asWritten` matches no known form is
perfectly normal and is not an error — though the generator should report the
distinct unmatched strings, since a form recurring across independent
documents is probably a real spelling nobody has recorded yet.

**One stretch can be lettered more than once, and that is one row.** The Ord
survey letters most of its streets in both languages at once — "GRASSHOPPER
ST." and "CALLE DE LAS CHAPULES" name the same street on the same sheet — so
`asWritten` is a string **or an array of strings**, in reading order:

```js
{ kind: "state", name: "chapules", street: "Figueroa Street",
  asWritten: ["GRASSHOPPER ST.", "CALLE DE LAS CHAPULES"] }
```

The alternatives are both worse. Two rows double-count the ground, draw as two
overlapping periods, and invite exactly the mistake that happened here — the
same lineage entered twice under two ids, `chapules` and `grasshopper`. One
string joined with a slash records punctuation the sheet does not have, in a
field whose whole point is that it is verbatim.

Every form counts for spelling matching, and each is reported separately when
it matches nothing: the English half of a bilingual label can match a recorded
spelling while the Spanish half does not, and that asymmetry is the
interesting part. The FIRST form is the one prose quotes when it can only
quote one.

Two labels lettered along *different stretches* of one street are still two
rows — that is two pieces of testimony about two pieces of ground, not one
label written twice.

### 5.2 `absent` — the map covers this ground and draws no street here

```js
{ kind: "absent", street: "Willow Street", from: "6th Street", to: "Mesquit Street",
  confirmed: true, note: "blank inside the tract boundary; no street drawn" }
```

Silence *was* left implicit — inferable from `coverage` plus `sweptFully`.
That fails the moment a human is working through a sheet segment by segment,
because an inference can't be reviewed or ticked off: "I looked here and the
map shows nothing" and "nobody has looked here yet" are the same absence.

So silence becomes statable at segment granularity. It is what licenses the
"no counterpart" verdict in the document tool, it is what makes the
every-segment-accounted gate on `sweptFully` (§4.5) checkable, and it is
weak evidence in its own right — on an `exhaustive-in-scope` document (§4.3)
a `absent` row over a stretch means the street did not exist under any name
at that date, which is what feeds the "latest document showing it did not yet
exist" colour scheme (§8).

Coverage-plus-`sweptFully` still governs whole-document silence; `absent` rows
are the reviewable, per-segment version, and they should agree.

### 5.2a `unnamed` — pavement drawn, nothing lettered on it

```js
{ kind: "unnamed", street: "Hewitt Street", from: { px: [566, 30] }, to: "3rd Street",
  basis: "alignment", confirmed: false,
  note: "Two parallel edge lines with no name between them." }
```

The third thing a sheet can do, and the one the AI pass reliably gets wrong. A
plat draws plenty of roadway it does not letter: alleys, rights-of-way, the
far side of a boundary street, corridors whose name sits on another sheet.

Three claims, and they are not interchangeable:

| what the sheet does | kind | what it is evidence of |
|---|---|---|
| letters a name along the corridor | `state` | the roadway **and** its name |
| draws the corridor, letters nothing | `unnamed` | the roadway only |
| draws no street on this ground | `absent` | the **absence** of a roadway |

So `unnamed` dates the pavement exactly as a `state` row does — it feeds
`planned` / `built` (§6.4) — and never reaches a name timeline. It carries no
`name` and no `asWritten`, because there is no ink to quote.

Without it, a drawn-but-unlabelled corridor has to be recorded as either a name
the document does not attest or an absence the document contradicts. Both were
happening: on M.R. 13-87 an AI pass called three drawn corridors `absent`,
which is the claim the project argues *from*.

### 5.3 `vanished` — drawn pavement with no modern counterpart

```js
{ kind: "vanished", name: "gordon-alley", asWritten: "Gordon Al.",
  trace: [[1180, 640], [1240, 980]],     // SCAN PIXELS against alignment.image
  confirmed: false, basis: "alignment" }
```

A street the document draws that no longer exists in any form — vacated
blocks, and everything the freeways took. There is no modern street to hang
an extent on, so the extent *is* geometry, exactly as OSM rows carry the way
itself because for OSM the geometry is the identification.

Note what is **not** this kind: a *former name* on surviving pavement. Arnold,
Georgia, Guadalupe, Tulip and Palm are all ordinary `state` rows on modern
streets — the pavement is still there, only the name is gone. `vanished` is
for absent pavement.

The generator emits these as their own collection, with world coordinates
derived through the alignment. That matters for more than completeness: a
name entity whose only appearances are vanished streets would otherwise be
unreachable — present in `names.js`, with an origin and a namesake, and
findable by no query on the map. In the generated collection it can be
indexed and searched like any other name. Whether the public map *draws*
ghost streets is a display decision, deliberately left open.

Precision: a trace is a human following ink through an alignment good to
roughly a street width. Never render it as though it were surveyed, and keep
the document id with it so the provenance stays visible.

### 5.3a `vanished-unnamed` — drawn pavement, no modern counterpart, no name

```js
{ kind: "vanished-unnamed", trace: [[880, 210], [905, 470], [960, 512]],
  confirmed: false, basis: "alignment" }
```

`unnamed` (§5.2a) crossed with `vanished` (§5.3), and the one claim the other
kinds cannot make: the sheet draws a corridor, no modern street follows it,
and nothing is lettered on it.

It carries **no `name` and no `asWritten`**, and the checker rejects either —
a `vanished` row that has lost its ink is a half-filled row, which is a state
the sweep gate exists to catch, and this kind must not become a place to hide
one. Recording the same thing as `vanished` with `asWritten: "unnamed"` is
worse still: that is a claim about what the sheet letters, and it is false.

Being complete on arrival, it can be confirmed immediately and never blocks a
sweep for want of a name entity. It contributes pavement, not naming: the
generator emits it among the vanished traces with a null entity, and nothing
about it reaches a timeline.

### 5.4 Extents that end mid-block

`from`/`to` accept **either** a cross-street name **or** a point:

```js
{ kind: "state", name: "georgia-east", asWritten: "Georgia St",
  street: "3rd Street", from: "Alameda Street", to: { px: [2040, 1130] } }
```

Tract boundaries do not respect intersections, and neither do coverage
polygons, so an extent frequently ends partway along a block. A cross-street
name wins whenever one is near — it is stable, human-readable, and survives
re-alignment — and a point is the fallback. Points are scan pixels (§4.6)
for anything traced on a scan.

**Which end is which is fixed, and `null` follows it.** `from` is the WEST end
of an east-west street and the NORTH end of a north-south one; `to` is the
other. A `null` end means *the street's own end on that side* — the west end
for `from`, the east end for `to` — and that is a fact about the ground, not
about the data. OSM's ways carry no such convention: about half of them are
drawn the other way round, so anything resolving a null end to "the first point
of the run" gets the wrong half of the street on half the streets. Both the
generator and the tool now resolve it canonically, from the run's extreme
coordinate, and they agree.

The failure this produces is quiet. A row whose ends are the wrong way round
usually still *draws*, because clipping sorts them; what it does is collapse
when one end is null and the given end sits at that same canonical end — the
row then covers a few metres instead of the stretch that was meant, or nothing
at all, and reads in the file like a row somebody has dealt with (§6.1).

The generator needs no special case: it already cuts at arbitrary boundaries
and merges adjacent intervals with identical timelines (§6.1), so a mid-block
cut either survives because the timelines differ or dissolves because they
don't. The checker must accept both forms.

**`from` and `to` follow canonical order, not the order you noticed them in.**
`from` is the **west** end of an east-west street and the **north** end of a
north-south one; `to` is the other. `null` means the street's own end on that
side.

**`null` is a bigger claim than it looks.** It means the modern street's own
end, which for a long street is far outside any one sheet — so `from: null` on
a stretch that merely runs off the edge of coverage claims the document
testifies about every block between here and the far side of the city, and on
an `absent` row that is a false negative at city scale. Use it only where the
street genuinely ends inside the polygon; otherwise end at the last crossing
inside, or give a point. `check-model.js` warns on every `null` end whose
street leaves the coverage polygon.

**And the generator truncates regardless (2026-08-31).** Every row from a
document with a coverage polygon is clipped to the street's portion inside
it (edge-aware, with ~30 m of slack for alignment imprecision; an end that
moves loses its cross-street name, since the claim no longer reaches that
crossing). So a `null` end that overreaches degrades from a false claim to
an authoring wart the checker nags about: mr006-138's Court Street row —
`from: null, to: null` on a street that runs 1.3 km past the sheet — pinned
the whole street to 1884 until this clip, and now attests exactly the
stretch the sheet shows. A whole-street `coverageExcept` entry exempts its
street from footprint semantics entirely; a row lying wholly outside its
document's coverage is reported as a problem.

Written backwards, a row can resolve to an interval of zero length —
`from: null, to: X` where X sits at the street's own end covers nothing at
all — and that used to produce no segment, no history, and no complaint. The
generator now reports any row whose ends resolve to the same point.

Worth knowing why the review tool cannot catch this: it clips by nearest
vertex and is order-agnostic, so both orderings look identical there. Only the
generator's scalar projection can see the difference.

### 5.5 `confirmed` and `note` on every row

`confirmed: false` marks a **proposal** — generated by the AI pass
(TOOL-SPEC.md §3) and not yet vouched for by a human. A person promotes it to
`true` in review, so the file itself records who stands behind each claim
instead of that living in a tool's memory. **An absent flag means the row was
authored directly rather than proposed**, which is why rows written before
this field existed are not retroactively suspect.

A document may not be marked `sweptFully` while any row is explicitly
`confirmed: false`. The `osm` pseudo-document is exempt: it is derived at load
time, read by nobody, and tertiary anyway (§4.1).

**A proposal does not reach the map.** `generate.js` holds back every row
still marked `confirmed: false` and says how many on each run. A proposal that
generated a public claim would make review optional in practice; review is
where a proposal becomes evidence, by having the flag removed.

**A proposal may have no `name`.** Identity is a claim about a naming
lineage, and one sheet does not contain the answer — whether a plat's
"Figueroa" is the same Figueroa as the one three blocks east cannot be read
off that plat. So the AI pass is told to leave `name` out and record the ink
in `asWritten`, and identity is assigned in review against the whole name
list. `check-model.js` treats a nameless proposal as a warning; a row that is
not marked as a proposal must still resolve, and a row cannot be confirmed
without one.

**Silence is accounted in metres, not in street names.** A street may be named
along one stretch and unaccounted along the next, so `sweptFully` requires
that no stretch of any in-coverage street is left un-spoken-for, above the
same 25 m floor as §4.4's sliver rule.

Every row may also carry `note` — free text about *this row*. It exists so
the document tool can round-trip a file without eating anything: a caveat
that matters belongs in data the tool preserves, not in a JS comment it would
regenerate away.

## 6. Generation

### 6.1 Segments

Segments are the **maximal stretches of a street whose name-timeline is
constant.** Take every row touching a street, project its extent onto the
street's geometry, cut at every extent boundary, then **merge adjacent
intervals whose timelines are identical.**

The merge step is not optional. Documents end mid-block, so raw boundaries
proliferate; without merging you get twenty segments where there are three.

**Two intervals merge only if they would produce the same ENTRY**, not merely
the same timeline. A segment carries more than its name history — the dates
derived from its rows (§6.4) and whether any document speaks about it at all
(§6.6's `attested`) — and merging on the timeline alone spreads those across
ground they were never about. `unnamed` rows are how this surfaced: they make
no timeline period, because there is no name to put in one, but they do date
the roadway (§5.2a), so an interval carrying one merged with the interval next
door that did not. The Ord survey's unnamed stretch of 11th Street then read as
dating the whole street east of Figueroa to 1849, including the half past Main
that the 1849 grid never reached.

**Two intervals with the same timeline are the same segment even when
different documents attest them.** A multi-sheet map (§4.4a) tiles a street
across several sheets, each sheet witnessing its own stretch; if the identity
of the witness is part of what makes a timeline distinct, the street comes out
in one piece per sheet, each repeating the same history. The merged segment
cites the union of the documents behind it. Note that this is not the
rectangle rule below and does not depend on it: the sheets abut, every metre
is directly attested, and nothing is being inferred.

### 6.2 Timelines and the constancy rule

Within a segment, a name's period runs from its earliest sighting to its
latest, **and the gap between two sightings of the same name is filled** — if
a name is attested in 1875 and again in 1888 with nothing contradicting it
between, the segment simply bore that name 1875–1888. Viewers see a gap only
where two *different* names meet without a change row pinning the transition.

A `change` row pins a transition to a date and overrides the inferred bracket.

### 6.2a The rectangle rule — filling the spatial axis

§6.2 fills the **time** axis freely and the **space** axis not at all. A name
attested in 1875 and again in 1888 held the segment throughout; a name attested
on one stretch and again on the next stretch, by two different sheets, produces
two segments that repeat the same history. That asymmetry is not principled, it
is just what got built first.

The rule below fills space the way §6.2 fills time. It is stated in terms of
**two independent axes of evidence**, and getting them apart is most of the
work:

- **existence** — was there a street on this ground at this date? Attested by
  `state` and `unnamed` rows alike (§4.2's four `attests` values), denied by
  `absent`.
- **name** — what was it called? Attested only by `state` rows, contradicted by
  a `state` row for a different entity or by a `change` row.

**The rule fills the name axis and is clipped by the existence axis.** A name
may not be inferred onto ground that is not yet known to have been a street:
two sightings of one name in 1888 and 1897 at opposite ends of a street say
nothing about the far end *in 1888* if the far end was not planned until 1893.
Without this clip the rule would quietly manufacture streets.

#### The existence frontier

For one continuous run of pavement `R` and a date `t`, the **planned hull**
`planned(R, t)` is the convex hull, within `R`, of every interval carrying a
`state` or `unnamed` row from a document dated at or before `t`.

Hull, not union: a street shown planned at both ends by 1888 was planned in the
middle. This is the same inference as the name rule, one axis down, and it
should be as visible as the other — see *Grades of support* below.

`absent` **cuts the run.** An interval that some sheet dated `t′` says carries
no street is not part of `planned(R, t)` for any `t ≤ t′`, and the hull may be
taken on either side of it but never across it. A sheet saying "nothing here"
in the middle of a corridor is exactly the evidence that the corridor was not
one street yet, and hulling over it would erase the finding. (`absent` says
nothing about `t > t′`; ground can be platted after a sheet shows it empty. A
row attesting a street *earlier* than an `absent` on the same ground is a
conflict to report, not to resolve — see §9.)

`unnamed` is the useful asymmetric case, and the reason §5.2a earns its keep:
it **confirms existence and says nothing about the name.** A sheet that draws
the roadway and letters nothing on it extends the planned hull and does not
block the name rectangle.

#### The name rectangle

For an entity `E` on a run `R`, build the grid whose columns are the elementary
spatial intervals (§6.1's cuts) and whose rows are the distinct document dates.
Mark each cell:

- **attests `E`** — a `state` row for `E` covers that interval at that date;
- **contradicts `E`** — a `state` row for a different entity covers it, or a
  `change` row falls on that date within it.

Then fill **the union of every uncontradicted box** (formulation settled
2026-08-31): for each set of sightings of `E` on the run, form the product of
their spatial hull and their temporal hull; a box containing any cell
contradicting `E` contributes nothing; each surviving box is filled, clipped
at every date `t` to `planned(R, t)`.

Hulls *of sightings*, not "maximal uncontradicted rectangles" — an earlier
draft said the latter, and it licenses more than intended: since unexamined
ground never contradicts, a maximal rectangle extends past the outermost
sightings, across every unexamined column to the end of the run and beyond
the first and last dates. That is extrapolation wearing interpolation's
clothes. Bounding boxes of sightings interpolate only — the same inference
as the planned hull, one axis down.

The union over sighting-sets is what makes cascading safe and
order-independent: three sightings along a street fill one span (their joint
box); a contradiction inside a box kills that box while every smaller box
excluding it survives, so a contradiction in the middle of three sightings
*splits* the result rather than blocking it. A single sighting's box is the
sighting itself — nothing to fill; a rectangle still needs two corners.

#### What each row kind does to each axis

| row kind | existence axis | name axis |
|---|---|---|
| `state` for `E` | attests | attests `E`; contradicts every other entity |
| `state` for another entity | attests | contradicts `E` |
| `unnamed` | attests | says nothing — does not block |
| `absent` | denies; cuts the run for hull purposes | nothing to say |
| `change` A→B at `t` | — | pins a transition. Settled 2026-08-31: it implies the ground WAS A before `t` and B after — so for a third entity `E ∉ {A, B}` it contradicts at **all** dates, for `E = A` it contradicts after `t`, for `E = B` before `t`. A respelling row (`from === to`, §5.5) contradicts nothing for its own entity — it pins a form boundary inside one lineage |
| `annotation` | only if the row asserts existence | only if it asserts a name |
| `vanished` | not on a modern run at all | — |

#### Grades of support, and why the rule needs them

The precondition "nothing contradicts" is **nearly vacuous in this corpus.**
Most ground has never been covered by any document, so "no map gives another
name in between" is true almost everywhere, and a rule resting on it alone
would fire almost always — "always merge" wearing a justification.

What rescues it is the distinction the model already pays for: silence that was
*looked at* versus silence that is merely absence. Every metre a filled
rectangle covers is one of three grades:

1. **attested** — a row letters the name on this ground.
2. **swept-silent** — no row, but the ground lies inside the coverage of a
   document with `sweptFully: true` that lettered nothing there. This is
   evidence (§4.5): someone examined it and found nothing to say.
3. **unexamined** — no document's coverage has ever included it. This is not
   evidence of anything.

All three may be filled; **they must not be presented alike.** A segment whose
extent came partly from grade 3 may not carry an origin line reading "labeled
'Stanford Ave' on sheet 4" across ground sheet 4 never lettered. The generated
segment carries which grade each part of its extent came from, and the origin
line names the bridge: *"labeled 'Stanford Ave' on sheets 2–5; the block
between them carries the name by inference, with nothing recorded against it."*

This is the same discipline §5.4 applies to extents and §6.3 applies to `how`:
the model is allowed to infer, and is not allowed to let an inference wear the
clothes of testimony.

#### Cases

| case | result |
|---|---|
| same name, adjacent stretches, same sheet-set | merge (this is not even inference — see §6.1) |
| same name, adjacent stretches, different sheets of one map | merge |
| same name, stretches a block apart, 1888 and 1897, nothing between | fill; the bridge is grade 2 or 3 |
| …and a third sheet letters a different name on the block between | two rectangles, split at the contradiction |
| …and a `change` row falls in 1893 anywhere in the span | no fill across 1893; fill either side |
| …and the block between carries an `unnamed` row | fill, and the block is grade 1 for existence |
| …and the block between carries an `absent` row dated 1890 | no fill across it at any date up to 1890 |
| same name at both ends, far end not planned until 1893 | fill 1893 onward only; the 1888 claim stops at that date's planned hull |
| same name either side of a pavement gap | never fill across the gap (§6.1) |
| one sighting only | nothing to fill — a rectangle needs two corners |

#### Open questions

- **Vacation.** The existence frontier is monotone: once planned, planned. Real
  streets get vacated, and `vanished` rows record the extreme case. Whether a
  vacation should retract the hull, and what evidence would license it, is not
  settled here.
- **How far is too far.** The rule has no distance limit. Two sightings of a
  common name at opposite ends of a long street would fill everything between.
  A cap is one answer; a *report* — how many segments were produced by bridging,
  and how much of each is grade 3 — is the cheaper one and should come first.
  Settled in part (2026-08-31): the modern OSM sighting is a legitimate
  corner. A historical sighting of the still-current name plus OSM fills the
  span since — the Alameda case, attested as existing for a long time under
  one name, and that fill is wanted; anywhere the name changed in between, a
  `state` or `change` row contradicts and splits. The existence clip keeps
  the fill off ground not yet planned at each date, and the bridging report
  remains the guard on what's left.
- **`exhaustive-in-scope` documents.** Ordinance 4093 claims to list every
  renaming on its date. That should let a rectangle span it as a strong grade 2
  rather than merely uncontradicted, and the rule does not yet say so.
- **Grades on the existence axis.** The planned hull is itself an inference and
  presently carries no grade. It probably wants the same three.

### 6.3 `how`, derived

- entity appears where it had no prior presence → **origin**
- entity's extent grows contiguously → **extension**
- entity arrives on an extent another entity simultaneously vacated →
  **renaming**
- …and the arriving entity also vacated a *different* roadway in the same
  window → **transfer** (the Figueroa 1897 signature)

Derive only where the rows support it; otherwise leave `how` absent. Never
guess — evidence density varies, and a renaming looks like a transfer when
you simply haven't recorded where the name came from.

### 6.4 `planned` / `built`

Computed independently from the four `attests` values (§4.2):

- **planned** — the earliest `planned-on` if any exists (an exact date), else
  the earliest `planned-by` (rendered "by 1875").
- **built** — the earliest `built-on` if any, else the earliest `built-by`.
- **Inference:** if a street was planned *on* a date and is already attested
  built *by* that same date, it was built on it — collapse to an exact date.

Hope Street's two decades between paper and pavement stop being a hand-written
caveat and become the visible distance between two derived dates.

### 6.5 Search index and derived disambiguation

The generator emits a prebuilt index — one row per (form, name entity) with
the label **already resolved** — so the browser holds no rule logic.

**Expand renderings when building the index**, per §3: numerals both ways
("Third"/"3rd", "Avenue Twenty"/"Avenue 20"), street-type abbreviations, and
optional middle initials ("Cesar Chavez"/"Cesar E Chavez"). Most type
abbreviations are literal prefixes of the full word, so "Santee St" already
matches "Santee Street" without help; the table strictly needs only the ones
that aren't — `Ct`/Court, `Blvd`/Boulevard — but carrying the full table costs
nothing and is more robust.

**Match on any token, not just the whole string.** Typing "20" should reach
"Avenue 20", where the type word is a prefix rather than a suffix, and
"Chavez" should reach "Cesar Chavez".

Labels: a form unique to one entity displays alone. A form shared by several
displays with a disambiguator — the authored one if present, otherwise
derived: locality (neighborhood, or bounding cross-streets within one), plus,
for a form no longer current, the date range and successor.

- `Georgia Street (west downtown)`
- `Georgia Street (by 1875–1897; now 3rd Street, Alameda to Santa Fe)`

**Derive locality, don't author it, in the normal case.** The namesake is the
*worst* discriminator for the collisions that actually occur — where entities
differ is where they are and what became of them. (Beware the tempting
counter-example: 9th Street surviving on Olympic *and* on James M. Wood is
**one** entity that lost two stretches to two renamings, not two entities. It
needs no disambiguation at all.)

Every derived-without-authored disambiguation is listed in a generated report
so a human can consider writing a better one ("west downtown" beats "James M.
Wood to Chick Hearn"). Generated reports live under `generated/` with a header
saying they are overwritten every build.

### 6.6 Output requirements

Generated `streets-data.js` keeps today's consumable shape — the map, the
checker and the report scripts read it unchanged — plus: each segment's
name-periods carry **both the form in force and the entity id**, so
spelling-set matching and entity queries work without loading the document
corpus.

Each segment also carries **`attested`** — true when any row on it comes from
a document other than the OSM base map. It is what the default colour scheme
(§8) asks about, and the generator is the only thing positioned to answer it.

**Carry every link through.** A generated segment's sources come from the
document registry (title, url, date) joined with the name's own origin
citations and `namedAfterLink`; nothing is retyped. This is worth stating
because the hand-authored file currently repeats itself badly: 329 source rows
across 140 entries resolve to just 148 distinct URLs — the Ord survey is
re-described by hand 31 times, the Wolfskill Orchard Tract map 8 — and the
generator's job is to make each document described once and cited everywhere.

## 7. What the generator does not own

`namedAfter`, `namedAfterLink`, `categories`, notes about a naming claim,
annotations, and every authored disambiguation. It computes structure; it
never invents meaning.

It does have to **carry** that meaning out, all of it. An entity's public
`note` reaches the segment: on a former name through its history line, and on
the current name as the segment's own note, joined with any annotation rows.
Where `namedAfter` is null the note is the only thing the project has to say
about the naming — Ceres Avenue linked the Roman harvest goddess and printed
not one word about why she might be on a subdivided orchard.

## 8. Map requirements (on generated output)

Color schemes, one active at a time, with the legend reflecting the active one:

1. **Default** — grey if the segment has no sighting but `osm`; blue if a
   document speaks about it. **Per segment, not per name**: the generator
   answers this with `attested` on each segment, and the map reads that field.
   Deciding it from the current name
   instead — is its entity a stub? — paints a whole numbered street blue on
   the strength of one `names.js` entry, so blue comes to mean "somebody has
   heard of this street" rather than "here is a document about this ground".

   **Amended 2026-08-31: `attested` counts POSITIVE rows only** (`state`,
   `unnamed`, `change`, `annotation`). An `absent` row is testimony of the
   opposite sign — "attested as existing" and "attested as not-yet-existing"
   must not look alike — so an absent-only segment stays grey, its finding
   surfaces in the popup via the generated `absentAsOf` field ("No street
   yet as of 1849"), and the rows wait for scheme 4.

   **Blue is a saturation ramp, not one color.** The generator emits
   `knownFraction` per attested segment: the fraction of [1850,
   extract-date] whose state the derived timeline PINS — a documented name
   period (from its pinned start or earliest dated sighting, through its
   pinned end, the extract date, or its latest dated sighting when the end
   is "?"), or documented not-yet-existence (years up to an `absent`
   sighting, the frontier being monotone; years before the ground's first
   period when it begins with an exact planning act). The "?" gaps between
   names, un-dated early history, and years before a "by" date all count as
   unknown. Full `#2e6f9e` only at 1.0; the map ramps paler grey-blue as the
   number falls, keeps a floor that still reads as "documented" beside grey,
   and caps the ramp when `built` is unresearched (pavement is outside
   `knownFraction`, but a segment missing it should not read as settled).
   The popup states the number in years. When the rectangle rule (§6.2a)
   lands, its grade-3 (unexamined-bridge) years should count fractionally
   here, not fully — the two features want the same machinery.
2. **Name category** — single-select (radio, not checkboxes), normally folded
   under a caret. "Origin unknown" is a category here rather than its own base
   color; the current violet base color retires.
3. **Age: earliest document showing the segment existed.**
4. **Age: latest document showing it did not yet exist** — requires §4.4
   coverage extents. These two converge as research completes; the *gap*
   between them is a natural later view, since it maps how well-pinned each
   segment is.

Search: typing matches against **all recorded forms**, historical included, so
"Zarago" finds the entity however a document spelled it. Matching segments
color three ways — currently bearing a matched form, formerly bearing one,
neither — and searching replaces the active scheme while typing, restoring it
when cleared.

**Selecting anything fits the map to it.** Picking an entity from the dropdown
or following a cross-link zooms and pans to the bounds of the highlighted
segments, with padding. Without this the feature is actively confusing:
highlights land off-screen with no indication of which way to scroll. Note
that a transferred name can highlight two widely separated places at once
(Figueroa's donor and receiving roadways), so fitting to the union may zoom
out further than expected — if that proves annoying in practice, the fix is a
match count with next/previous stepping, not abandoning the fit.

**Cross-links are saved searches.** Clicking `[[name:<id>]]` in a popup does
exactly what typing that form and picking that entity from the dropdown does:
returns to the base map with the search active, the three-color highlight
applied, and the view fitted. That keeps one mechanism rather than inventing a second navigation
path — but it must select the *entity*, not merely fill the text box, since
typing "Georgia" matches two entities and the link means one of them. The
dropdown therefore lists streets alongside names, so `[[street:<key>]]`
(highlight that roadway's segments) is the same gesture. Links never target a
generated segment id, which is not stable across builds.

## 9. Validation

The checker gains: every row's name id exists (or resolves through an alias);
every street and cross-street exists in geometry; extents parse and lie on the
named street; `change` rows only on documents that attest transitions;
annotations carry a source; and **an ambiguity the generator cannot resolve
into distinct labels is an error** — which will fire retroactively on an old
entry the day new coverage introduces a collision. That is intended.

Added with the 2026-08-25 amendments: pixel-space extents and traces require
the document to have an `alignment` (§4.6), and their pixels must lie within
the alignment image's bounds; `vanished` traces need at least two points;
`sweptFully: true` requires every row `confirmed` and — per the tool's gate
(TOOL-SPEC.md) — every in-bounds segment accounted by some row; and a `absent`
row overlapping a `state` row for the same document is a contradiction, not a
judgement call.

## 10. Build

Generate into `streets-data.js` and commit it, during migration: the git diff
is the safety net, showing exactly where generated segmentation differs from
what was hand-built. CI regenerates and fails if the committed artifact
differs, or it will silently go stale. The file gets a do-not-edit header and
a checker rule to match. Once generated segmentation stops being surprising,
the artifact can move to build-time-only.

**The switchover is a big bang, deliberately.** The generator does not merge
with, or fall back to, hand-authored entries: on the day it lands, every
street is generated. Two reasons. A passthrough path doubles the model
surface — two kinds of entry, two code paths, two things to check — and this
repo has evidence that partial migrations linger: the 2026-07 note saying
"migrate the remaining band-only segments as each gets touched, no big-bang
rewrite needed" is still outstanding. And the safety net is already in place:
`legacy/streets-data-2026-08.js` plus git history.

Big bang applies to the *switchover*, not the validation — see §11.

## 11. Acceptance test

**Regenerate 3rd Street and diff against `legacy/streets-data-2026-08.js`.**
It is the exemplar — seven segments, extents already reasoned out from the
Thomas, Wolfskill and Washington tract maps, including the Georgia St stretch
and the Arnold St stretch whose identification came from map alignment. If the
generator reproduces that segmentation and those timelines, the model works.
If it emits nine segments, or loses the Georgia stretch, the model is wrong
and we have learned it cheaply.

Validation is incremental even though the switchover isn't (§10). Prove the
model on 3rd Street first and iterate there, where a wrong answer is cheap;
then encode the rest of the corpus; then, before the switch, **diff the full
generated output against `legacy/` street by street and account for every
difference** — each one is either a demonstrable improvement (a claim the old
entry over-stated, a segment boundary the evidence actually supports) or a
bug. Unexplained differences block the switch.

First documents to encode, in order:

1. **`mr003-060-p1` / `mr003-060-p2`** — Thomas Tract (1875), already
   transcribed; sheet 1 touches Garey and Hewitt, sheet 2 touches 2nd and 3rd.
2. **`ord-4093`** — the 1897 ordinance's in-coverage rows, all `change` kind,
   `completeness: "exhaustive-in-scope"`. This is where the deferred 1897
   apply pass goes, rather than into hand-edits we would throw away.
3. The name entities those two touch — a handful, including both Georgias and
   the Figueroa lineage.

## 12. Deliberately deferred

- The **rectangle rule** (§6.2a) is specified and not implemented. §6.1's
  document-identity merge — the prerequisite, and pure bookkeeping where
  §6.2a changes what the map claims — is done (2026-08-31).

- Restructuring nameHistory dates from strings into `{ earliest, latest }`.
  The derived model wants it; it is a migration across every entry and should
  wait until the generator has proven itself.
- Rendering derived brackets as prose in popups.
- The bracket-width ("how well pinned") color scheme.
- Whether a revived name resumes its old entity or begins a new one — Georgia
  in 1897 revives a pre-1889 name on the same street. The model can express
  either; the call hasn't been made.
