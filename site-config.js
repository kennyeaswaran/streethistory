// Site configuration — authored, never generated.
//
// These three constants used to live in `streets-data.js`, which is on its way
// to becoming generated output (MODEL-IMPLEMENTATION checklist A). A generator
// that reads its own output to learn the vocabulary is a circularity waiting to
// happen, so the vocabulary moved here, where nothing writes it but a person.
//
// Loaded three ways, so it must stay plain `const` declarations with a
// `module.exports` guard at the end:
//   • `<script src="site-config.js">` — index.html, names-tool.html
//   • `require("./site-config.js")` — generate.js, check-model.js, check-data.js
//   • re-emitted verbatim into `generated/streets-data.gen.js` by generate.js,
//     which is what preview.html reads.

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
// Three facets, because the flat list mixed three different kinds of thing and
// sorted them as peers: "Named after a person" is a REFERENT, "Namesake alive
// when named" is a CIRCUMSTANCE of a person-naming, and "Has former names" is a
// STATUS the generator derives. Facet rows are headings, not choices.
//
// An entity may sit on ANY node, interior or leaf — 39 entities are simply
// `person`, and that is the right answer for most of them. Selecting a node in
// the Highlight list matches that node AND every descendant, so choosing
// "Something living, or the land" finds the trees without anyone having to tag
// them twice. The generator emits each entry's `ancestors` so the map does not
// have to walk the tree itself.
//
// Order here is the display order within a facet; counts are added by the map.
const CATEGORIES = [
  // ── What the name points to ──
  { id: "referent",     label: "What the name points to", facet: true },

  { id: "person",       label: "A person",                          parent: "referent" },
  { id: "governor",     label: "…a politician or official",          parent: "person" },
  { id: "foreign",      label: "…someone from abroad",               parent: "person" },

  { id: "place",        label: "A place",                           parent: "referent" },
  { id: "destination",  label: "…where the street goes",             parent: "place" },
  { id: "borrowed",     label: "…a street in another city",          parent: "place" },

  { id: "nature",       label: "Something living, or the land",     parent: "referent" },
  { id: "tree",         label: "…a tree",                            parent: "nature" },
  { id: "plant",        label: "…a plant or flower",                 parent: "nature" },
  { id: "animal",       label: "…an animal",                         parent: "nature" },
  { id: "landform",     label: "…a landform",                        parent: "nature" },
  { id: "water",        label: "…water",                             parent: "nature" },

  // Added 2026-09-15: nothing fitted a street named for a THING. `adobe` is the
  // case that forced it — a building material is not an organism, not a
  // landform, and not descriptive of the street, which runs among the adobes
  // rather than being made of them.
  { id: "object",       label: "A made thing",                      parent: "referent" },
  { id: "material",     label: "…a material",                        parent: "object" },
  { id: "tool",         label: "…a tool or machine",                 parent: "object" },

  { id: "mythological", label: "A god, a myth, a religion",         parent: "referent" },

  { id: "history",      label: "A historical people or event",      parent: "referent" },
  { id: "event",        label: "…an event",                          parent: "history" },

  { id: "company",      label: "A company or institution",          parent: "referent" },
  { id: "system",       label: "A route system",                    parent: "referent" },

  // Not a thing in the world at all. `descriptive` and `number` both say the
  // name describes the STREET — its role, its position — and `descriptive` is
  // the residual of that group rather than a peer of it.
  { id: "abstract",     label: "An idea, not a thing",              parent: "referent" },
  { id: "aspiration",   label: "…a virtue or an aspiration",         parent: "abstract" },
  { id: "descriptive",  label: "…the street's own role or position", parent: "abstract" },
  { id: "number",       label: "…its number in the grid",            parent: "abstract" },

  // ── Circumstances of the naming, orthogonal to the referent ──
  { id: "circumstance", label: "Circumstances of the naming", facet: true },
  { id: "alive",        label: "Namesake alive when named",         parent: "circumstance" },

  // ── Status of the record, mostly derived or editorial ──
  //
  // ⚠ `unknown` and `unresearched` are SUPERSEDED by `basis` and `searched`
  // (MODEL-SPEC §3.1), which say the same things better and cannot go stale the
  // way these two have. They stay for now because they are load-bearing in
  // index.html, preview.html, check-data.js and check-model.js; retiring them is
  // its own pass (ROADMAP §7).
  { id: "status",       label: "Status of the record", facet: true },
  { id: "renamed",      label: "Has former names",                  parent: "status", derived: true },
  { id: "disputed",     label: "Origin disputed",                   parent: "status" },
  { id: "unknown",      label: "Researched — origin not yet found",  parent: "status" },
  { id: "unresearched", label: "Not yet researched",                parent: "status" }
];

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
  NEIGHBORHOODS, CATEGORIES, CATEGORY_BY_ID, categoryAncestors, SIMILAR_PROJECTS
};
