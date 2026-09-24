// names-new.js — name entities created in the map tool's review mode.
//
// SEPARATE FROM names.js ON PURPOSE. names.js is hand-authored: every entity
// there has had its namesake looked into and its lineage decided. Review needs
// to mint an id the moment a plat shows a label nobody has entered yet, and a
// browser tool should not be writing into the file that holds that research.
// Entities here are used by tools/check-model.js and tools/generate.js exactly as if they
// were in names.js, and are marked pendingResearch so nothing pretends they
// have been looked at.
//
// The lifecycle: research the namesake, fill in namedAfter / categories /
// sources, move the entity into names.js, delete it from here. Anything still
// sitting in this file is a to-do list.
//
// `sightings` is where to start on one: every sheet in the corpus that letters
// the name, with the ink each one uses. A name on three documents twenty years
// apart is a different research problem from one that appears once, and that is
// worth knowing before opening a browser. It is DERIVED — recomputed from
// documents/ on every review save — so do not hand-edit it; edit the rows.
//
// WRITTEN BY THE TOOL — it rewrites this file whole when you save a review, so
// hand edits to entities that are still listed here will be overwritten. Move
// an entity into names.js to make your edits stick.

const NEW_NAME_ENTITIES = {

  "bath-street-plaza": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"oldplaza1873","sheet":"Old Plaza, 1873","asWritten":["BATH STREET"]}
    ],
    spellings: [{"forms":["Bath Street"],"disambiguation":"Old Plaza district"}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: "A historical street in the Old Plaza district shown on the 1873 survey.",
    possiblySameAs: null,
    aliases: []
  },

  "calle-de-los-negros": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"oldplaza1873","sheet":"Old Plaza, 1873","asWritten":["CALLE de los NEGROS","Calle de los Negros"]}
    ],
    spellings: [{"forms":["Calle De Los Negros"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from oldplaza1873, where the ink reads “Calle de los Negros”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "grattan-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0001-038a","sheet":"R. W. Poindexter's Subdivision","asWritten":["GRATTAN STREET"]}
    ],
    spellings: [{"forms":["Grattan Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: "A street in the Mrs. Fitzgerald Tract, shown on R. W. Poindexter's 1901 subdivision.",
    possiblySameAs: null,
    aliases: []
  },

  "green-ave": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0012-088a","sheet":"Cathedral Property","asWritten":["GREEN AVE."]}
    ],
    spellings: [{"forms":["Green Avenue"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0012-088a, where the ink reads “GREEN AVE.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "mallard-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0001-037","sheet":"Mallard Home Tract","asWritten":["MALLARD STREET"]}
    ],
    spellings: [{"forms":["Mallard Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: "The central street of the Mallard Home Tract, later annotated as changed to Bixel Street.",
    possiblySameAs: null,
    aliases: []
  },

  "marchessault-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"oldplaza1873","sheet":"Old Plaza, 1873","asWritten":["MARCHESSAULT STREET"]}
    ],
    spellings: [{"forms":["Marchessault Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: "An early street through the Old Plaza district, later absorbed into another route.",
    possiblySameAs: null,
    aliases: []
  },

  "montgomery-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr009-052","sheet":"Collins Subdivision","asWritten":["Montgomery Street."]}
    ],
    spellings: [{"forms":["Montgomery Street."]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr009-052, where the ink reads “Montgomery Street.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "rosabell-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0014-200a","sheet":"Oil Well Supply Company Tract","asWritten":["ROSABELL ST."]}
    ],
    spellings: [{"forms":["Rosabell Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: "A street along the south side of the Oil Well Supply Company Tract.",
    possiblySameAs: null,
    aliases: []
  },

  "san-fernando-st-spring": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0009-085","sheet":"Pierre Nicolas Lot","asWritten":["SAN FERNANDO STREET"]},
      {"doc":"tr0014-033","sheet":"Tract No. 49","asWritten":["SAN FERNANDO ST."]},
      {"doc":"tr0014-033-1","sheet":"Tract No. 49","asWritten":["SAN FERNANDO ST."]}
    ],
    spellings: [{"forms":["San Fernando Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0014-033, where the ink reads “SAN FERNANDO ST.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "valencia-street-poindexter": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0001-038a","sheet":"R. W. Poindexter's Subdivision","asWritten":["VALENCIA STREET"]},
      {"doc":"tr0012-088a","sheet":"Cathedral Property","asWritten":["VALENCIA ST."]}
    ],
    spellings: [{"forms":["Valencia Street"],"disambiguation":"Mrs. Fitzgerald Tract"}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: "The Valencia Street shown on R. W. Poindexter's 1901 subdivision of the Mrs. Fitzgerald Tract.",
    possiblySameAs: null,
    aliases: []
  },

  "whittier-columbia": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0012-088a","sheet":"Cathedral Property","asWritten":["WHITTIER ST."]}
    ],
    spellings: [{"forms":["Whittier Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0012-088a, where the ink reads “WHITTIER ST.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "wine-street-plaza": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"oldplaza1873","sheet":"Old Plaza, 1873","asWritten":["WINE STREET"]}
    ],
    spellings: [{"forms":["Wine Street"],"disambiguation":"Old Plaza, later Olvera Street"}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: "The Plaza lane later renamed Olvera Street.",
    possiblySameAs: null,
    aliases: []
  }

};

if (typeof module !== "undefined") module.exports = { NEW_NAME_ENTITIES };
