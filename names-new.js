// names-new.js — name entities created in the map tool's review mode.
//
// SEPARATE FROM names.js ON PURPOSE. names.js is hand-authored: every entity
// there has had its namesake looked into and its lineage decided. Review needs
// to mint an id the moment a plat shows a label nobody has entered yet, and a
// browser tool should not be writing into the file that holds that research.
// Entities here are used by check-model.js and generate.js exactly as if they
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

  "atlantic-st-dtla": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr018-025","sheet":"Wicks' Kiefer Tract Subdivision","asWritten":["Atlantic Street."]},
      {"doc":"tr0023-054c","sheet":"Tract No. 1836","asWritten":["ATLANTIC ST."]}
    ],
    spellings: [{"forms":["Atlantic Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0023-054c, where the ink reads “ATLANTIC ST.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "belmont": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr010-030","sheet":"Kincaid's Tract","asWritten":["Belmont Avenue"]}
    ],
    spellings: [{"forms":["Belmont"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr010-030, where the ink reads “Belmont”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "california-street-14th": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr003-038-p1","sheet":"Norris Plan","asWritten":["CALIFORNIA STREET"]},
      {"doc":"mr003-038-p2","sheet":"Vineyard Subdivision","asWritten":["CALIFORNIA STREET"]}
    ],
    spellings: [{"forms":["California Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr003-038-p1, where the ink reads “CALIFORNIA STREET”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "carolina-arts-district": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr012-042","sheet":"Howard's Bliss Tract Subdivision","asWritten":["Carolina St."]},
      {"doc":"tr0012-101","sheet":"Industrial Center Tract","asWritten":["CAROLINA ST."]}
    ],
    spellings: [{"forms":["Carolina Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr012-042, where the ink reads “Carolina St.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "channing-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr013-091","sheet":"E. B. Millar Tract","asWritten":["Channing St."]}
    ],
    spellings: [{"forms":["Channing Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr013-091, where the ink reads “Channing St.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "colyton": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr012-042","sheet":"Howard's Bliss Tract Subdivision","asWritten":["Colyton St."]},
      {"doc":"tr0012-101","sheet":"Industrial Center Tract","asWritten":["COLYTON ST."]}
    ],
    spellings: [{"forms":["Colyton Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr012-042, where the ink reads “Colyton St.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "consuelo": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr011-094","sheet":"Josefa Subdivision","asWritten":["Consuelo Street"]}
    ],
    spellings: [{"forms":["Consuelo Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr011-094, where the ink reads “Consuelo Street”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "decatur-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0023-054c","sheet":"Tract No. 1836","asWritten":["DECATUR ST."]}
    ],
    spellings: [{"forms":["Decatur Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0023-054c, where the ink reads “DECATUR ST.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "easton": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr055-081","sheet":"Wilde's Coronel Tract Subdivision","asWritten":["EASTON ST."]},
      {"doc":"tr0005-056a","sheet":"Industrial Tract","asWritten":["EASTON ST."]},
      {"doc":"tr0009-075","sheet":"Power Plant Tract No. 1","asWritten":["EASTON ST.","Easton St","Industrial"]}
    ],
    spellings: [{"forms":["Easton Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0005-056a, where the ink reads “EASTON ST.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "elm-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr003-038-p1","sheet":"Norris Plan","asWritten":["ELM STREET"]}
    ],
    spellings: [{"forms":["Elm Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr003-038-p1, where the ink reads “ELM STREET”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "factory-place": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0012-101","sheet":"Industrial Center Tract","asWritten":["FACTORY PLACE"]}
    ],
    spellings: [{"forms":["Factory Place"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0012-101, where the ink reads “FACTORY PLACE”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "industrial-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0005-056a","sheet":"Industrial Tract","asWritten":["INDUSTRIAL ST."]},
      {"doc":"tr0023-066","sheet":"Tract No. 1879","asWritten":["INDUSTRIAL ST."]},
      {"doc":"tr0159-032-p2","sheet":"Tract No. 10542","asWritten":["INDUSTRIAL STREET"]}
    ],
    spellings: [{"forms":["Industrial Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0005-056a, where the ink reads “INDUSTRIAL ST.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "laurel-dtla": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr003-038-p1","sheet":"Norris Plan","asWritten":["LAUREL STREET"]},
      {"doc":"mr003-038-p2","sheet":"Vineyard Subdivision","asWritten":["LAUREL STREET"]},
      {"doc":"mr011-094","sheet":"Josefa Subdivision","asWritten":["Laurel Street"]}
    ],
    spellings: [{"forms":["Laurel Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr011-094, where the ink reads “Laurel Street”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "lawrence": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr013-091","sheet":"E. B. Millar Tract","asWritten":["Lawrence St."]}
    ],
    spellings: [{"forms":["Lawrence Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr013-091, where the ink reads “Lawrence St.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "lemon-st-arts-district": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr013-091","sheet":"E. B. Millar Tract","asWritten":["Lemon St","Lemon St."]},
      {"doc":"mr018-025","sheet":"Wicks' Kiefer Tract Subdivision","asWritten":["Lemon Street."]}
    ],
    spellings: [{"forms":["Lemon Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr013-091, where the ink reads “Lemon St.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "market-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0020-196b","sheet":"Tract No. 1101","asWritten":["Market St"]}
    ],
    spellings: [{"forms":["Market Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0020-196b, where the ink reads “Market St”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "mateo": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr015-052","sheet":"Wingerter Tract","asWritten":["Mateo St."]},
      {"doc":"mr018-025","sheet":"Wicks' Kiefer Tract Subdivision","asWritten":["Mateo Street"]},
      {"doc":"mr053-083","sheet":"Arthur Tract","asWritten":["MATEO ST."]},
      {"doc":"tr0005-056a","sheet":"Industrial Tract","asWritten":["MATEO ST."]},
      {"doc":"tr0012-101","sheet":"Industrial Center Tract","asWritten":["MATEO ST."]},
      {"doc":"tr0012-186","sheet":"Tract No. 35","asWritten":["MATEO STREET"]},
      {"doc":"tr0020-053b","sheet":"Tract No. 1687","asWritten":["MATEO ST."]},
      {"doc":"tr0023-066","sheet":"Tract No. 1879","asWritten":["MATEO ST."]},
      {"doc":"tr0159-032-p2","sheet":"Tract No. 10542","asWritten":["MATEO STREET"]}
    ],
    spellings: [{"forms":["Mateo Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr053-083, where the ink reads “MATEO ST.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "mill-st-arts-district": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0005-056a","sheet":"Industrial Tract","asWritten":["MILL ST."]},
      {"doc":"tr0012-101","sheet":"Industrial Center Tract","asWritten":["MILL ST."]},
      {"doc":"tr0023-054c","sheet":"Tract No. 1836","asWritten":["MILL ST."]},
      {"doc":"tr0023-066","sheet":"Tract No. 1879","asWritten":["MILL ST."]},
      {"doc":"tr0159-032-p2","sheet":"Tract No. 10542","asWritten":["MILL STREET"]}
    ],
    spellings: [{"forms":["Mill Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0012-101, where the ink reads “MILL ST.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "mimosa-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0020-053b","sheet":"Tract No. 1687","asWritten":["MIMOSA ST."]}
    ],
    spellings: [{"forms":["Mimosa Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0020-053b, where the ink reads “MIMOSA ST.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "molino-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0012-101","sheet":"Industrial Center Tract","asWritten":["MOLINO ST."]},
      {"doc":"tr0751-038","sheet":"Tract No. 29338","asWritten":["MOLINO STREET"]}
    ],
    spellings: [{"forms":["Molino Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0012-101, where the ink reads “MOLINO ST.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "pacific-st-dtla": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr018-025","sheet":"Wicks' Kiefer Tract Subdivision","asWritten":["Pacific Street"]}
    ],
    spellings: [{"forms":["Pacific Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr018-025, where the ink reads “Pacific Street”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "palm-street-margo": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr003-038-p1","sheet":"Norris Plan","asWritten":["PALM STREET"]}
    ],
    spellings: [{"forms":["Palm Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr003-038-p1, where the ink reads “PALM STREET”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "palmetto": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr012-042","sheet":"Howard's Bliss Tract Subdivision","asWritten":["Palmetto St."]},
      {"doc":"mr053-083","sheet":"Arthur Tract","asWritten":["PALMETTO ST."]},
      {"doc":"tr0012-101","sheet":"Industrial Center Tract","asWritten":["PALMETTO ST."]},
      {"doc":"tr0012-186","sheet":"Tract No. 35","asWritten":["PALMETTO ST."]},
      {"doc":"tr0319-001-p1","sheet":"Tract No. 14928","asWritten":["PALMETTO STREET"]},
      {"doc":"tr0751-038","sheet":"Tract No. 29338","asWritten":["PALMETTO STREET"]}
    ],
    spellings: [{"forms":["Palmetto Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr053-083, where the ink reads “PALMETTO ST.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "pine-street-venice": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr003-038-p1","sheet":"Norris Plan","asWritten":["PINE STREET"]},
      {"doc":"mr003-038-p2","sheet":"Vineyard Subdivision","asWritten":["PINE STREET"]},
      {"doc":"mr021-032","sheet":"Bryan's Figueroa Street Subdivision","asWritten":["Pine Street."]}
    ],
    spellings: [{"forms":["Pine Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr003-038-p1, where the ink reads “PINE STREET”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "san-francisco-st-dtla": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr018-025","sheet":"Wicks' Kiefer Tract Subdivision","asWritten":["San Francisco Street"]}
    ],
    spellings: [{"forms":["San Francisco Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr018-025, where the ink reads “San Francisco Street”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "seaton": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr012-042","sheet":"Howard's Bliss Tract Subdivision","asWritten":["Seaton St."]},
      {"doc":"tr0012-101","sheet":"Industrial Center Tract","asWritten":["SEATON ST."]}
    ],
    spellings: [{"forms":["Seaton Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr012-042, where the ink reads “Seaton St.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "warren-st-arts-district": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr013-091","sheet":"E. B. Millar Tract","asWritten":["Warren St."]}
    ],
    spellings: [{"forms":["Warren Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr013-091, where the ink reads “Warren St.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "wilde-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr055-081","sheet":"Wilde's Coronel Tract Subdivision","asWritten":["WILDE ST."]},
      {"doc":"tr0009-075","sheet":"Power Plant Tract No. 1","asWritten":["WILDE ST."]},
      {"doc":"tr0273-017","sheet":"Tract No. 13301","asWritten":["WILDE STREET"]}
    ],
    spellings: [{"forms":["Wilde Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0009-075, where the ink reads “WILDE ST.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  }

};

if (typeof module !== "undefined") module.exports = { NEW_NAME_ENTITIES };
