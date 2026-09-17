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

  "acacia-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr007-036-p2","sheet":"Colina Park","asWritten":["Acacia St"]}
    ],
    spellings: [{"forms":["Acacia Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr007-036-p2, where the ink reads “Acacia St”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "anderson": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr017-041","sheet":"Clement Tract","asWritten":["Anderson Street"]},
      {"doc":"tr0013-168-p1","sheet":"Tract No. 207","asWritten":["ANDERSON ST."]},
      {"doc":"tr0122-053-p3","sheet":"Tract No. 5301","asWritten":["ANDERSON STREET"]}
    ],
    spellings: [{"forms":["Anderson Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr017-041, where the ink reads “Anderson Street”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "arch-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr007-036-p2","sheet":"Colina Park","asWritten":["Arch St"]}
    ],
    spellings: [{"forms":["Arch Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr007-036-p2, where the ink reads “Arch St”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "artemus": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0122-053-p3","sheet":"Tract No. 5301","asWritten":["ARTEMUS STREET"]}
    ],
    spellings: [{"forms":["Artemus Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0122-053-p3, where the ink reads “ARTEMUS STREET”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "atchison-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr024-081","sheet":"Bigelow Tract","asWritten":["ATCHISON ST."]}
    ],
    spellings: [{"forms":["Atchison Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr024-081, where the ink reads “ATCHISON ST.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "azusa": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0122-053-p3","sheet":"Tract No. 5301","asWritten":["AZUSA STREET"]}
    ],
    spellings: [{"forms":["Azusa Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0122-053-p3, where the ink reads “AZUSA STREET”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "belmont-ave": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr010-088","sheet":"J. W. Ellis' Subdivision","asWritten":["Belmont Ave"]}
    ],
    spellings: [{"forms":["Belmont Avenue"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr010-088, where the ink reads “Belmont Ave”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "clarence-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0013-168-p1","sheet":"Tract No. 207","asWritten":["Clarence St"]},
      {"doc":"tr0122-053-p3","sheet":"Tract No. 5301","asWritten":["Clarence St"]}
    ],
    spellings: [{"forms":["Clarence Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0013-168-p1, where the ink reads “Clarence St”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "clementina-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr017-041","sheet":"Clement Tract","asWritten":["Clementina Street"]}
    ],
    spellings: [{"forms":["Clementina Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr017-041, where the ink reads “Clementina Street”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "collado-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr007-036-p2","sheet":"Colina Park","asWritten":["Collado St"]},
      {"doc":"mr010-062","sheet":"J. W. Ellis' Subdivision","asWritten":["Collado St"]}
    ],
    spellings: [{"forms":["Collado Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr007-036-p2, where the ink reads “Collado St”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "freight-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr024-081","sheet":"Bigelow Tract","asWritten":["Freight St"]}
    ],
    spellings: [{"forms":["Freight Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr024-081, where the ink reads “Freight St”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "garland": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr060-088","sheet":"Garland Tract","asWritten":["GARLAND AVENUE"]},
      {"doc":"tr0030-069","sheet":"Tract No. 2905","asWritten":["GARLAND AVENUE"]}
    ],
    spellings: [{"forms":["Garland Avenue"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr060-088, where the ink reads “GARLAND AVENUE”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "grace": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr017-041","sheet":"Clement Tract","asWritten":["Grace Street"]}
    ],
    spellings: [{"forms":["Grace Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr017-041, where the ink reads “Grace Street”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "gravitta-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr007-036-p2","sheet":"Colina Park","asWritten":["Gravitta St"]}
    ],
    spellings: [{"forms":["Gravitta Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr007-036-p2, where the ink reads “Gravitta St”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "hartford-ave": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0030-069","sheet":"Tract No. 2905","asWritten":["Hartford Ave"]}
    ],
    spellings: [{"forms":["Hartford Avenue"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0030-069, where the ink reads “Hartford Ave”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "lincoln-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr021-087","sheet":"Potter's Subdivision","asWritten":["Lincoln Street"]}
    ],
    spellings: [{"forms":["Lincoln Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr021-087, where the ink reads “Lincoln Street”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "logan-ave": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr018-063","sheet":"Orange Heights","asWritten":["Logan Ave"]}
    ],
    spellings: [{"forms":["Logan Avenue"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr018-063, where the ink reads “Logan Ave”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "loma-drive": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr007-036-p2","sheet":"Colina Park","asWritten":["Loma Drive"]},
      {"doc":"tr0015-179a","sheet":"Tract No. 754","asWritten":["LOMA DRIVE"]}
    ],
    spellings: [{"forms":["Loma Drive"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr007-036-p2, where the ink reads “Loma Drive”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "lucas-ave": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr007-056","sheet":"Los Angeles Improvement Co.'s Subdivision","asWritten":["Lucas Ave"]}
    ],
    spellings: [{"forms":["Lucas Avenue"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr007-056, where the ink reads “Lucas Ave”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "mission-road": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0122-053-p3","sheet":"Tract No. 5301","asWritten":["MISSION ROAD"]}
    ],
    spellings: [{"forms":["Mission Road"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0122-053-p3, where the ink reads “MISSION ROAD”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "myers": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr017-041","sheet":"Clement Tract","asWritten":["Myers St","Myers Street"]}
    ],
    spellings: [{"forms":["Myers Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr017-041, where the ink reads “Myers Street”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "nichols-ave": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr007-036-p2","sheet":"Colina Park","asWritten":["Nichols Avenue"]},
      {"doc":"mr007-096-p2","sheet":"Bentley & Crippens Subdivision","asWritten":["Nichols Ave"]},
      {"doc":"mr037-078","sheet":"Day, Hinton and Mathes Resubdivision","asWritten":["Nichols Ave"]}
    ],
    spellings: [{"forms":["Nichols Avenue"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr007-096-p2, where the ink reads “Nichols Ave”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "north-ave": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr007-036-p2","sheet":"Colina Park","asWritten":["North Ave"]}
    ],
    spellings: [{"forms":["North Avenue"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr007-036-p2, where the ink reads “North Ave”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "northern-ave": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr010-062","sheet":"J. W. Ellis' Subdivision","asWritten":["Northern Ave"]}
    ],
    spellings: [{"forms":["Northern Avenue"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr010-062, where the ink reads “Northern Ave”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "rio-avenue": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr017-041","sheet":"Clement Tract","asWritten":["Rio Avenue"]}
    ],
    spellings: [{"forms":["Rio Avenue"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr017-041, where the ink reads “Rio Avenue”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "rio-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0013-168-p1","sheet":"Tract No. 207","asWritten":["Rio St"]}
    ],
    spellings: [{"forms":["Rio Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0013-168-p1, where the ink reads “Rio St”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "shatto-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0014-087a","sheet":"Tract No. 321","asWritten":["Shatto St"]}
    ],
    spellings: [{"forms":["Shatto Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0014-087a, where the ink reads “Shatto St”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "shenandoah-avenue": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr017-041","sheet":"Clement Tract","asWritten":["Shenandoah Avenue"]}
    ],
    spellings: [{"forms":["Shenandoah Avenue"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr017-041, where the ink reads “Shenandoah Avenue”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "silver-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr007-036-p2","sheet":"Colina Park","asWritten":["Silver St"]},
      {"doc":"mr007-056","sheet":"Los Angeles Improvement Co.'s Subdivision","asWritten":["Silver St"]},
      {"doc":"mr010-088","sheet":"J. W. Ellis' Subdivision","asWritten":["Silver St"]}
    ],
    spellings: [{"forms":["Silver Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr007-036-p2, where the ink reads “Silver St”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "stevenson-ave": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0013-168-p2","sheet":"Tract No. 207","asWritten":["STEVENSON AVE."]}
    ],
    spellings: [{"forms":["Stevenson Avenue"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0013-168-p2, where the ink reads “STEVENSON AVE.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "strelitz-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr006-427","sheet":"Downey Tract","asWritten":["STRELITZ ST."]}
    ],
    spellings: [{"forms":["Strelitz Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr006-427, where the ink reads “STRELITZ ST.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "texas-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr007-036-p2","sheet":"Colina Park","asWritten":["TEXAS ST"]}
    ],
    spellings: [{"forms":["Texas Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr007-036-p2, where the ink reads “TEXAS ST”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "topeka-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr024-081","sheet":"Bigelow Tract","asWritten":["TOPEKA ST."]}
    ],
    spellings: [{"forms":["Topeka Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr024-081, where the ink reads “TOPEKA ST.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "union-avenue": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr007-036-p2","sheet":"Colina Park","asWritten":["Union Avenue"]}
    ],
    spellings: [{"forms":["Union Avenue"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr007-036-p2, where the ink reads “Union Avenue”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "union-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr007-036-p2","sheet":"Colina Park","asWritten":["Union St"]}
    ],
    spellings: [{"forms":["Union Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr007-036-p2, where the ink reads “Union St”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "utah-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0013-168-p1","sheet":"Tract No. 207","asWritten":["UTAH ST."]},
      {"doc":"tr0122-053-p3","sheet":"Tract No. 5301","asWritten":["UTAH STREET"]}
    ],
    spellings: [{"forms":["Utah Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0013-168-p1, where the ink reads “UTAH ST.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "ventura-ingraham": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr018-063","sheet":"Orange Heights","asWritten":["Ventura Street"]}
    ],
    spellings: [{"forms":["Ventura Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr018-063, where the ink reads “Ventura Street”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "vernon-ave": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr007-036-p2","sheet":"Colina Park","asWritten":["Vernon Av"]},
      {"doc":"mr018-063","sheet":"Orange Heights","asWritten":["Vernon Ave"]}
    ],
    spellings: [{"forms":["Vernon Av"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr007-036-p2, where the ink reads “Vernon Av”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "western-ave-colina-park": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr007-036-p2","sheet":"Colina Park","asWritten":["Western Ave"]},
      {"doc":"mr010-062","sheet":"J. W. Ellis' Subdivision","asWritten":["Western Ave"]},
      {"doc":"mr010-088","sheet":"J. W. Ellis' Subdivision","asWritten":["Western Ave"]}
    ],
    spellings: [{"forms":["Western Avenue"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr007-036-p2, where the ink reads “Western Ave”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  }

};

if (typeof module !== "undefined") module.exports = { NEW_NAME_ENTITIES };
