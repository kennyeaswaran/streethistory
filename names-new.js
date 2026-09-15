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
  }

};

if (typeof module !== "undefined") module.exports = { NEW_NAME_ENTITIES };
