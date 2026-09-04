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

  "clark-ave": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr053-065","sheet":"Clark and Bryan Tract","asWritten":["Clark Ave."]}
    ],
    spellings: [{"forms":["Clark Avenue"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted in review from mr053-065, where the ink reads “Clark Ave.”. Namesake not researched — but the sheet is the Clark and Bryan Tract, so the tract's own Clark is the obvious first candidate and worth checking before anything else. RECONSTRUCTED 2026-09-02 after an assistant overwrote names-new.js with a stale copy; if the original entry said more than this, it was lost there.",
    possiblySameAs: null,
    aliases: []
  },

  "council-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr006-138","sheet":"Glassell's Subdivision map","asWritten":["Council Street"]}
    ],
    spellings: [{"forms":["Council Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Namesake untraced. Not covered by Kines (checked 2026-08-30). Part of it survives as modern Council Street; the stretch inside this tract does not.",
    possiblySameAs: null,
    aliases: []
  },

  "court-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr006-138","sheet":"Glassell's Subdivision map","asWritten":["Court Street"]}
    ],
    spellings: [{"forms":["Court Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Namesake untraced. Kines has a Court Street page but it is Monrovia’s (renamed from Bonita Court in 1966 to stop postal confusion) and has nothing to do with this one. Not covered for Los Angeles (checked 2026-08-30).",
    possiblySameAs: null,
    aliases: []
  },

  "diamond-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr006-138","sheet":"Glassell's Subdivision map","asWritten":["Diamond Street"]}
    ],
    spellings: [{"forms":["Diamond Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Namesake untraced. IDENTITY DECIDED (Kenny, 2026-08-30): one entity covering both the plat’s Diamond Street — modern Beverly Boulevard through this tract — and the modern Diamond Street that survives 869 m east. The two lie on roughly the same east-west line, about 30 m apart, so this reads as one naming that lost its middle rather than two that spell alike. NB handbook/research-leads.md records an earlier pass calling Diamond “unchanged since 1884”; that was name-matching, and the surviving stretch is outside MR006-138’s coverage.",
    possiblySameAs: null,
    aliases: []
  },

  "hobart-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr006-138","sheet":"Glassell's Subdivision map","asWritten":["Hobart Street"]}
    ],
    spellings: [{"forms":["Hobart Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Namesake untraced. NOT the same entity as Hobart Boulevard in Koreatown: Kines dates that one to 1887 and names it for Hobart Addison Stewart (1868-1915), a Flint, Michigan dairy farmer, on a subdivision by different people. This Hobart Street is three years earlier and a different roadway (modern Lake Shore Terrace). Do not merge on the strength of the spelling.",
    possiblySameAs: null,
    aliases: []
  },

  "home-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr006-138","sheet":"Glassell's Subdivision map","asWritten":["Home Street"]}
    ],
    spellings: [{"forms":["Home Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Namesake untraced. Not covered by Kines (checked 2026-08-30). Modern Rockwood Street, which handbook/research-leads.md records as renamed AND realigned by about 43 m — the date of the realignment is a separate open question.",
    possiblySameAs: null,
    aliases: []
  },

  "lake-avenue": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr006-138","sheet":"Glassell's Subdivision map","asWritten":["Lake Avenue"]}
    ],
    spellings: [{"forms":["Lake Avenue"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Namesake untraced. Two candidates: Echo Park Lake, the city reservoir this street runs toward, which was already there in 1884; or Lake Vineyard, the ranch of Benjamin D. Wilson, whose daughter Ruth married George S. Patton — whose own street is on this same plat — in the year it was recorded",
    internalNote: "Neither candidate is sourced. Kines’s Lake Avenue page is Pasadena/Altadena’s, named for Lake Vineyard, and is a different street; the coincidence is suggestive but no more. Wanted: a contemporary source. The reservoir reading is the simpler one and should be preferred until something says otherwise.",
    possiblySameAs: null,
    aliases: []
  },

  "state-colton": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr006-138","sheet":"Glassell's Subdivision map","asWritten":["State Street"]}
    ],
    spellings: [{"forms":["State Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Namesake untraced. RENAMED FROM state-street, 2026-08-30: there is another State Street in Boyle Heights, and a bare “state-street” id was a collision waiting to happen. This entity is ONLY the 1884 Glassell-tract State Street that is modern Colton Street. When Boyle Heights is encoded, its State Street must get its own disambiguated entity and must NOT be merged into this one — Kenny is confident they are unrelated namings.",
    possiblySameAs: null,
    aliases: []
  },

  "waters-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr006-138","sheet":"Glassell's Subdivision map","asWritten":["Waters Street"]}
    ],
    spellings: [{"forms":["Waters Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Namesake untraced. Not covered by Kines (checked 2026-08-30). Modern Douglas Street north of Colton; the stretch south of it is gone. Note the nearby “Walters St” (Ord Street, 1886-1890) in research-leads — a different street, and a spelling trap.",
    possiblySameAs: null,
    aliases: []
  },

  "welcome-street": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"mr006-138","sheet":"Glassell's Subdivision map","asWritten":["Welcome Street"]}
    ],
    spellings: [{"forms":["Welcome Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Namesake untraced. Not covered by Kines (checked 2026-08-30). Survives under the same name.",
    possiblySameAs: null,
    aliases: []
  }

};

if (typeof module !== "undefined") module.exports = { NEW_NAME_ENTITIES };
