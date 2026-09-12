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

  "agatha": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr066-064","sheet":"Wilde and Strong Subdivision","asWritten":["AGATHA STREET"]},
      {"doc":"mr070-084","sheet":"Johnson and Keeney Resubdivision","asWritten":["Agatha Street"]},
      {"doc":"pm017-045","sheet":"Parcel Map 1136","asWritten":["AGATHA STREET"]}
    ],
    spellings: [{"forms":["Agatha Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr070-084, where the ink reads “agatha Street”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "banning-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0145-062","sheet":"Tract No. 9771","asWritten":["Banning Street"]}
    ],
    spellings: [{"forms":["Banning Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0145-062, where the ink reads “Banning Street”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "beaudry-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr001-462","sheet":"Beaudry Tract","asWritten":["Beaudry St"]}
    ],
    spellings: [{"forms":["Beaudry Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr001-462, where the ink reads “Beaudry St”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "commercial-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr003-146-p2","sheet":"Requena Subdivision","asWritten":["Commercial Street"]}
    ],
    spellings: [{"forms":["Commercial Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr003-146-p2, where the ink reads “Commercial Street”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "elmore-ave": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr018-092","sheet":"Valenzuela Tract","asWritten":["Elmore Ave."]}
    ],
    spellings: [{"forms":["Elmore Avenue"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr018-092, where the ink reads “Elmore Ave.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "florida-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr003-569","sheet":"Nichols Addition","asWritten":["FLORIDA ST"]}
    ],
    spellings: [{"forms":["Florida Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr003-569, where the ink reads “FLORIDA ST”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "francisco": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0718-007-p2","sheet":"Tract No. 25510","asWritten":["FRANCISCO STREET"]},
      {"doc":"tr1397-017-p5","sheet":"Tract No. 71141","asWritten":["FRANCISCO STREET"]}
    ],
    spellings: [{"forms":["Francisco Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0718-007-p2, where the ink reads “FRANCISCO STREET”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "grand-ave": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr084-053","sheet":"Grace C. Longley Property","asWritten":["GRAND AV."]}
    ],
    spellings: [{"forms":["Grand Av."]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr084-053, where the ink reads “GRAND AV.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "helena-ave": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr018-092","sheet":"Valenzuela Tract","asWritten":["Helena Ave."]}
    ],
    spellings: [{"forms":["Helena Avenue"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr018-092, where the ink reads “Helena Ave.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "ingraham": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0718-007-p2","sheet":"Tract No. 25510","asWritten":["INGRAHAM STREET"]}
    ],
    spellings: [{"forms":["Ingraham Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0718-007-p2, where the ink reads “INGRAHAM STREET”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "japanese-village-plaza-mall": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0885-030-p2","sheet":"Tract No. 30211","asWritten":["JAPANESE VILLAGE PLAZA MALL"]}
    ],
    spellings: [{"forms":["Japanese Village Plaza Mall"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0885-030-p2, where the ink reads “JAPANESE VILLAGE PLAZA MALL”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "kip-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0718-007-p2","sheet":"Tract No. 25510","asWritten":["KIP STREET"]}
    ],
    spellings: [{"forms":["Kip Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0718-007-p2, where the ink reads “KIP STREET”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "kohler": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr021-046","sheet":"W. J. Fisher's Subdivision","asWritten":["Kohler Street"]},
      {"doc":"mr054-051","sheet":"Kohler Tract","asWritten":["Kohler St"]},
      {"doc":"tr0105-001-p2","sheet":"Tract No. 8657","asWritten":["KOHLER STREET"]},
      {"doc":"tr0141-011","sheet":"Tract No. 9918","asWritten":["KOHLER STREET"]}
    ],
    spellings: [{"forms":["Kohler Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr054-051, where the ink reads “Kohler St”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "loomis-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr003-569","sheet":"Nichols Addition","asWritten":["LOOMIS ST"]}
    ],
    spellings: [{"forms":["Loomis Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr003-569, where the ink reads “LOOMIS ST”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "melendrez-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr026-059","sheet":"Goldsworthy 9th St. Tract","asWritten":["Melendrez St"]},
      {"doc":"mr026-060","sheet":"Pederift Tract","asWritten":["Melendrez Street"]}
    ],
    spellings: [{"forms":["Melendrez Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr026-059, where the ink reads “Melendrez St”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "merchant-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr021-046","sheet":"W. J. Fisher's Subdivision","asWritten":["Merchant Street"]},
      {"doc":"mr054-051","sheet":"Kohler Tract","asWritten":["Merchant St"]},
      {"doc":"tr0001-046","sheet":"Mariana W. de Coronel Home Place","asWritten":["MERCHANT STREET"]},
      {"doc":"tr0141-011","sheet":"Tract No. 9918","asWritten":["MERCHANT STREET"]}
    ],
    spellings: [{"forms":["Merchant Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr054-051, where the ink reads “Merchant St”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "messer-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr002-092-p1","sheet":"Johnston Tract","asWritten":["Messer STREET."]},
      {"doc":"mr002-092-p2","sheet":"Johnston Tract","asWritten":["Messer STREET."]}
    ],
    spellings: [{"forms":["Messer Street."]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr002-092-p1, where the ink reads “Messer STREET.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "moore-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr003-569","sheet":"Nichols Addition","asWritten":["MOORE ST"]}
    ],
    spellings: [{"forms":["Moore Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr003-569, where the ink reads “MOORE ST”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "moran-s-lane": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"11824","sheet":"Botiller and Reyes lots","asWritten":["Moran's Lane"]}
    ],
    spellings: [{"forms":["Moran's Lane"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from 11824, where the ink reads “Moran's Lane”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "orange-st-wilshire": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr003-569","sheet":"Nichols Addition","asWritten":["ORANGE ST"]}
    ],
    spellings: [{"forms":["Orange Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr003-569, where the ink reads “ORANGE ST”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "ozier-lane": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr005-110","sheet":"Rivara and Vignolo Tract","asWritten":["Ozier Lane"]}
    ],
    spellings: [{"forms":["Ozier Lane"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr005-110, where the ink reads “Ozier Lane”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "park-lane": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr003-016","sheet":"Block 22 1/2, Hancock's Survey","asWritten":["PARK LANE"]}
    ],
    spellings: [{"forms":["Park Lane"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr003-016, where the ink reads “PARK LANE”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "parker-drive": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr070-051","sheet":"J. B. Parker Subdivision","asWritten":["PARKER DRIVE"]}
    ],
    spellings: [{"forms":["Parker Drive"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr070-051, where the ink reads “PARKER DRIVE”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "requena-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr003-146-p2","sheet":"Requena Subdivision","asWritten":["REQUENA STREET"]}
    ],
    spellings: [{"forms":["Requena Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr003-146-p2, where the ink reads “REQUENA STREET”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "rose-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr002-092-p1","sheet":"Johnston Tract","asWritten":["Rose STREET."]},
      {"doc":"mr002-092-p2","sheet":"Johnston Tract","asWritten":["Rose STREET."]},
      {"doc":"tr1339-069-p3","sheet":"Tract No. 62057","asWritten":["ROSE STREET"]}
    ],
    spellings: [{"forms":["Rose Street."]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr002-092-p1, where the ink reads “Rose STREET.”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "ruby-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr003-569","sheet":"Nichols Addition","asWritten":["RUBY ST"]}
    ],
    spellings: [{"forms":["Ruby Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr003-569, where the ink reads “RUBY ST”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "traction-avenue": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0926-086-p2","sheet":"Tract No. 35332","asWritten":["TRACTION AVENUE"]}
    ],
    spellings: [{"forms":["Traction Avenue"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0926-086-p2, where the ink reads “TRACTION AVENUE”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "turner-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0145-062","sheet":"Tract No. 9771","asWritten":["Turner Street"]}
    ],
    spellings: [{"forms":["Turner Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0145-062, where the ink reads “Turner Street”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "vignes-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0145-062","sheet":"Tract No. 9771","asWritten":["VIGNES STREET"]}
    ],
    spellings: [{"forms":["Vignes Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0145-062, where the ink reads “VIGNES STREET”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "ward-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr003-569","sheet":"Nichols Addition","asWritten":["WARD ST"]}
    ],
    spellings: [{"forms":["Ward Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr003-569, where the ink reads “WARD ST”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "wilmington-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr003-146-p1","sheet":"Requena Subdivision","asWritten":["WILMINGTON"]},
      {"doc":"mr003-146-p2","sheet":"Requena Subdivision","asWritten":["WILMINGTON","Wilmington Street"]},
      {"doc":"mr010-008","sheet":"Garden of J. Murat","asWritten":["Wilmington Street"]}
    ],
    spellings: [{"forms":["Wilmington Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr010-008, where the ink reads “Wilmington Street”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "wilshire": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0718-007-p2","sheet":"Tract No. 25510","asWritten":["WILSHIRE BOULEVARD"]},
      {"doc":"tr1397-017-p5","sheet":"Tract No. 71141","asWritten":["WILSHIRE BOULEVARD"]}
    ],
    spellings: [{"forms":["Wilshire Boulevard"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0718-007-p2, where the ink reads “WILSHIRE BOULEVARD”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "winston-st": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr012-026","sheet":"Mills' Tract","asWritten":["Winston Street"]},
      {"doc":"mr039-069","sheet":"Jones and Ponet Block","asWritten":["WINSTON ST","Winston St"]}
    ],
    spellings: [{"forms":["Winston Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr039-069, where the ink reads “Winston St”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  },

  "woodworth-court": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"tr0938-051-p3","sheet":"Tract No. 36511","asWritten":["WOODWORTH COURT"]}
    ],
    spellings: [{"forms":["Woodworth Court"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from tr0938-051-p3, where the ink reads “WOODWORTH COURT”. Namesake not researched.",
    possiblySameAs: null,
    aliases: []
  }

};

if (typeof module !== "undefined") module.exports = { NEW_NAME_ENTITIES };
