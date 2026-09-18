// Site configuration — authored, never generated.
//
// These three constants used to live in `streets-data.js`, which is on its way
// to becoming generated output (MODEL-IMPLEMENTATION checklist A). A generator
// that reads its own output to learn the vocabulary is a circularity waiting to
// happen, so the vocabulary moved here, where nothing writes it but a person.
//
// Loaded three ways, so it must stay plain `const` declarations with a
// `module.exports` guard at the end:
//   • `<script src="site-config.js">` — index.html, preview.html,
//     map-tool.html, names-tool.html
//   • `require("./site-config.js")` — generate.js, documents/osm.js,
//     check-model.js, check-data.js, intersect.js, coverage-report.js
//   (It was also re-emitted into `generated/streets-data.gen.js` for
//   preview.html until 2026-09-15; that page loads this file now, like the
//   others — MODEL-IMPLEMENTATION checklist C.)

// ---------------------------------------------------------------------------
// STREET NAMES: one normalisation, shared by everything that keys OSM ways.
//
// Two rules. Directional prefixes are stripped, so "South Spring Street" and
// "North Spring Street" are one street. Then NAME_ALIASES folds the rare way
// that OSM names on its own but the project treats as part of its parent —
// the Bunker Hill tunnel is pavement of 2nd Street, not a street. Until
// 2026-09-15 this function was copied into seven files and the alias table
// into three of them (MODEL-IMPLEMENTATION checklist B): the generator did not
// know the alias, so the tunnel was a separate stub street and its pavement a
// gap in 2nd Street. Every consumer now calls this one — generate.js,
// documents/osm.js, check-model.js, map-tool.html, intersect.js,
// coverage-report.js and the map itself — so a name means the same thing in
// each. Rows in documents/ carry the PARENT name (a row keyed to the tunnel
// is a street the geometry index does not have).
//
// Not the place for a way whose leading token merely LOOKS directional ("East
// West Bank Plaza at The Broad"): that is EXCLUDE_NAMES in generate.js.
const NAME_ALIASES = {
  "2nd Street Tunnel": "2nd Street"
};
// Two roadways under one name. The model folds every way that shares a name
// onto one axis, so two branches running side by side occupy the same
// interval and a sheet that letters them differently puts two names on one
// stretch at once (2026-09-18: the 1875 Beaudry Subdivision B letters FIFTH
// on the northern West 5th Street and WARD on the one-way southern branch a
// block down, and the timeline could not hold both). A way listed here is
// keyed as its own street, by OSM way id — the suffix is a label, not a
// name: the name is still 5th Street. Find candidates with the lateral-
// separation test in MODEL-IMPLEMENTATION.md (same name, overlapping along
// the axis, > 40 m apart across it); twin motorway carriageways and short
// connectors are NOT this — nothing will ever letter them differently.
const WAY_STREET_KEYS = {
  // West 5th Street's one-way southern branch, Fremont → 6th → Beaudry → 6th:
  // the old Ward Street corridor (documents/mr003-046-p2).
  27747409:  "5th Street (south branch)",
  161569700: "5th Street (south branch)",
  237022768: "5th Street (south branch)",
  // The 1931 East 4th Street viaduct, 4th Place to Anderson, over the surface
  // street it replaced on the Boyle Heights side.
  185949003: "4th Street (viaduct)"
};
function normalizeName(n, wayId) {
  if (wayId !== undefined && WAY_STREET_KEYS[wayId]) return WAY_STREET_KEYS[wayId];
  const stripped = n.replace(/^(North|South|East|West|N\.?|S\.?|E\.?|W\.?)\s+/i, "");
  return NAME_ALIASES[stripped] || stripped;
}

// Coverage areas. Adding a neighborhood here expands the map query and redraws
// the dashed coverage outlines; see ADDING-STREETS.md ("Adding a neighborhood").
// Bboxes are rough rectangles; for what counts as each neighborhood, use the
// L.A. Times Mapping L.A. boundaries as the reference.
const NEIGHBORHOODS = [
  { id: "dtla", name: "Downtown", bbox: { s: 34.033, w: -118.272, n: 34.068, e: -118.225 } }
];

// ---------------------------------------------------------------------------
// CATEGORIES — the highlight vocabulary, as a TREE (ROADMAP §7).
//
// SIX top-level referents, which is the number a reader can hold: a person, a
// living thing or the land, a place, an institution, an inanimate object, an
// abstract idea. Everything else is a subtype of one of those. Facet rows are
// headings, not choices.
//
// An entity may sit on ANY node, interior or leaf — most people-named streets
// are simply `person`. Selecting a node in the Highlight list matches that node
// AND every descendant, so "Something living, or the land" finds the trees
// without anyone tagging a street twice. The generator emits each entry's
// `ancestors` so the map does not have to walk the tree itself.
//
// Order here is the display order within a facet; counts are added by the map.
const CATEGORIES = [
  // ── What the name points to ──
  { id: "referent",     label: "What the name points to", facet: true },

  // A PERSON. `landowner` and `family` are the two that `basis: "eponymous"`
  // is about — the first document to carry the name carries the person, and
  // that person is either the one who owned or subdivided the ground or a
  // member of their household. check-model.js requires one of them on every
  // eponymous entity. They also occur under `basis: "attested"`, where a
  // secondary source tells us the same thing, so the category is not a
  // restatement of the grade.
  //
  // ORDER HERE IS DISPLAY ORDER, and it is authored rather than sorted: the
  // owner comes first, their family next to them, then the public figures, and
  // the two that are true of a person rather than a kind of person — `foreign`
  // and `alive` — last. Sorting these by count put "alive when named" at the
  // top, which is not how anyone reads the list.
  { id: "person",       label: "A person",                          parent: "referent" },
  { id: "landowner",    label: "…who owned or subdivided the ground", parent: "person" },
  { id: "family",       label: "…family of the owner or subdivider",  parent: "person" },
  // `politician` is the generic; `governor` means a governor of California
  // specifically, which is what all three of its members are. The parent used
  // to be called `governor` and carry the generic sense — renamed 2026-09-15,
  // with the six legacy uses migrated to the generic, which is what they are.
  { id: "politician",   label: "…a politician or an official",       parent: "person" },
  { id: "mayor",        label: "……a mayor of Los Angeles",            parent: "politician" },
  { id: "governor",     label: "……a governor of California",          parent: "politician" },
  { id: "president",    label: "……a president",                       parent: "politician" },
  { id: "official",     label: "……another politician or official",    parent: "politician" },
  { id: "mythological", label: "…a god, or a figure from myth",      parent: "person" },
  // Aztec Avenue names the Aztec empire, not an Aztec. Filed under `person`
  // at Kenny's direction (2026-09-15) with a subtype of its own, because
  // labelling a whole people "a person" on the public map would read wrong.
  { id: "people",       label: "…a people, rather than one person",  parent: "person" },
  { id: "foreign",      label: "…someone from abroad",               parent: "person" },
  // A circumstance of the naming rather than a kind of referent, but it only
  // ever applies to people and a reader looks for it here, so it is displayed
  // as a subtype. It does not exclude any of the others.
  { id: "alive",        label: "…alive when the street was named",   parent: "person" },

  { id: "nature",       label: "Something living, or the land",     parent: "referent" },
  { id: "tree",         label: "…a tree",                            parent: "nature" },
  { id: "plant",        label: "…a plant or a flower",               parent: "nature" },
  { id: "animal",       label: "…an animal",                         parent: "nature" },
  { id: "landform",     label: "…a landform",                        parent: "nature" },
  { id: "water",        label: "…water",                             parent: "nature" },

  { id: "place",        label: "A place",                           parent: "referent" },
  { id: "destination",  label: "…where the street goes",             parent: "place" },
  { id: "state",        label: "…a state",                           parent: "place" },
  { id: "borrowed",     label: "…a street in another city",          parent: "place" },

  // An INSTITUTION — a company, a railway, a college. College Street is here
  // rather than under "role or position": the street is named for the colegio
  // that was to be built on it, which is a thing, not a description.
  { id: "company",      label: "An institution",                    parent: "referent" },

  // Added 2026-09-15: nothing fitted a street named for a THING. `adobe` is the
  // case that forced it — a building material is not an organism, not a
  // landform, and not descriptive of the street, which ran among the adobes
  // rather than being made of them.
  { id: "object",       label: "An inanimate object",               parent: "referent" },
  { id: "material",     label: "…a material",                        parent: "object" },
  { id: "tool",         label: "…a tool or a machine",               parent: "object" },

  // Not a thing in the world at all.
  { id: "abstract",     label: "An abstract idea",                  parent: "referent" },
  { id: "idea",         label: "…an idea, a virtue, an aspiration",  parent: "abstract" },
  { id: "descriptive",  label: "…the street's own role or position", parent: "abstract" },
  { id: "number",       label: "…its number in the grid",            parent: "abstract" },
  { id: "system",       label: "…a route system",                    parent: "abstract" },
  // No member yet. Kept because Olympic Boulevard carries it in the legacy
  // data, and flagged here because an event under "an abstract idea" may come
  // to seem wrong — revisit if a second one ever turns up.
  { id: "event",        label: "…an event",                          parent: "abstract" },

  // ── Status of the record, all of it derived ──
  //
  // These were authored until 2026-09-15, and by then twenty of the 143
  // entities disagreed with their own fields — thirteen tagged `unknown` beside
  // a populated `namedAfter`, four with a null `namedAfter` and no tag at all,
  // three tagged `unresearched` after the search had been done. A hand-kept tag
  // that restates a field will drift from it; derive it and it cannot.
  //   renamed       ⇐ the timeline has more than one period
  //   disputed      ⇐ the entity's `disputed` flag
  //   unknown       ⇐ namedAfter === null      (searched, nothing found)
  //   unresearched  ⇐ searched === "none"      (nobody has looked)
  // See MODEL-SPEC §3.1 for `basis` and `searched`, the fields these read.
  { id: "status",       label: "Status of the record", facet: true },
  { id: "renamed",      label: "Has former names",                  parent: "status", derived: true },
  { id: "disputed",     label: "Origin disputed",                   parent: "status", derived: true },

  // HOW WELL WE KNOW IT (MODEL-SPEC §3.1). The whole point of grading the file
  // was that a reader should be able to tell a documented fact from our best
  // reading — which only works if the reader can SEE the grade. So `basis` is
  // on the map, as a node of its own, and the popup prints it beside the
  // namesake. Ordered strongest to weakest, but the value is nominal.
  // `heading: true` — a group with children but no choice of its own. Selecting
  // "how well we know it" would match every graded entity, which is every
  // entity, so the row opens and counts but cannot be picked.
  { id: "basis",        label: "How well we know it", parent: "status", only: "model",
    derived: true, heading: true },
  { id: "basis-intrinsic", label: "…it explains itself",         parent: "basis", only: "model", derived: true },
  { id: "basis-attested",  label: "…a source says so",            parent: "basis", only: "model", derived: true },
  { id: "basis-eponymous", label: "…the first map carries the person", parent: "basis", only: "model", derived: true },
  { id: "basis-pattern",   label: "…one of a set on one document", parent: "basis", only: "model", derived: true },
  { id: "basis-inferred",  label: "…inferred from something sourced", parent: "basis", only: "model", derived: true },
  { id: "basis-lexical",   label: "…the word's meaning is all we have", parent: "basis", only: "model", derived: true },
  { id: "basis-guess",     label: "…a guess",                     parent: "basis", only: "model", derived: true },
  { id: "basis-none",      label: "…no candidate at all",         parent: "basis", only: "model", derived: true },
  { id: "searched-extensive", label: "……searched hard",           parent: "basis-none", only: "model", derived: true },
  { id: "searched-partial",   label: "……one cheap check",          parent: "basis-none", only: "model", derived: true },
  { id: "searched-none",      label: "……nobody has looked",         parent: "basis-none", only: "model", derived: true },

  // Not a name entity at all: the base map mentions the street and nothing
  // else does. Worth its own row, because "we have not researched this" and
  // "this street has never entered the corpus" are different answers.
  { id: "stub",         label: "Only the base map has it", parent: "status", only: "model", derived: true },

  // LEGACY ONLY. `streets-data.js` authors these two by hand and has no `basis`
  // or `searched` to derive anything from; index.html reads that file and needs
  // them. The generated model replaced them with the `basis` node above, so
  // they are hidden from preview.html rather than shown with a permanent zero.
  { id: "unknown",      label: "Researched — origin not yet found",  parent: "status", only: "legacy" },
  { id: "unresearched", label: "Not yet researched",                parent: "status", only: "legacy" }
];

// RETIRED IDS, for anyone reading a diff: `history` (Aztec Avenue moved to
// `people`), `aspiration` (renamed `idea`, a catchall that also holds Eternity),
// and the `circumstance` facet (its only member, `alive`, is now displayed under
// `person`). None had a legacy user except `aspiration`, whose three were
// migrated with the rest.

// Every ancestor of a category, nearest first, excluding the facet row. The
// generator bakes this into each entry so the map can match without the tree.
function categoryAncestors(id, index) {
  const by = index || CATEGORY_BY_ID;
  const out = [];
  for (let c = by[id]; c && c.parent; c = by[c.parent]) {
    const p = by[c.parent];
    if (!p || p.facet) break;
    out.push(p.id);
  }
  return out;
}
const CATEGORY_BY_ID = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));

const SIMILAR_PROJECTS = [
  { title: "L.A. Street Names (Mark Tapio Kines)",
    url: "https://lastreetnames.com/",
    desc: "Researched prose histories of 2,200+ L.A. County street names — the primary narrative complement to this map." },
  { title: "History of San Francisco Place Names (Noah Veltman)",
    url: "http://sfstreets.noahveltman.com/",
    desc: "Clickable SF street-etymology map with theme filters; the closest predecessor to this project.",
    sub: [
      { title: "“Mapping the History of Street Names” (Veltman's write-up)",
        url: "https://source.opennews.org/articles/mapping-history-street-names/",
        desc: "How the SF map was built, and pitfalls for anyone building one." }
    ] },
  { title: "Open Etymology Map",
    url: "https://etymology.dsantini.it/",
    desc: "Worldwide map generated from OpenStreetMap's name:etymology:wikidata tags." },
  { title: "EqualStreetNames",
    url: "https://equalstreetnames.eu/",
    desc: "Open-source maps of street names by gender, 60+ cities — mostly in Belgium and Germany — built on OSM + Wikidata." },
  { title: "Paristique",
    url: "https://www.paristique.fr/",
    desc: "Interactive map of the history of Paris street names." },
  { title: "NYC honorary street names map",
    url: "https://streetnamesmap-nyc.hub.arcgis.com/",
    desc: "NYC Dept. of Records map of ~2,500 honorary street co-namings." },
  { title: "STNAMES LAB",
    url: "https://en.stnameslab.com/the-project/",
    desc: "Academic research project analyzing street names as cultural markers; focuses on Spain but has searchable maps of North America." },
  { title: "Streetpédia",
    url: "https://streetpedia.fr/",
    desc: "French mobile app with audio street-name histories." }
];

if (typeof module !== "undefined") module.exports = {
  NEIGHBORHOODS, CATEGORIES, CATEGORY_BY_ID, categoryAncestors, SIMILAR_PROJECTS,
  NAME_ALIASES, WAY_STREET_KEYS, normalizeName
};
