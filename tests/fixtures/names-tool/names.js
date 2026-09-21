// Test fixture, not data: the names.js that names-browser-test puts in its
// throwaway copy of the project. Every entity here is made up, and each one is
// here for a check (see the note on each). It is written in the real file's
// shape, with section comments and aligned sources, because the names tool
// edits that shape surgically. The real file's round trip is tested
// separately, by tests/test-names-tool.js.
//
// The *Approved fields below are fixture values for testing drift, not
// approvals. The rule in data/names.js against writing them applies there.

const NAME_ENTITIES = {

  // ---- the approved-text section ------------------------------------------
  // Must stay FIRST: the test approves the first entity that has both a
  // namesake and a note and has never been approved.

  "alder-street": {
    spellings: [{ forms: ["Alder Street"] }],
    namedAfter: "{{Amos Alder}} (1820–1890), a landowner who never existed",
    namedAfterLink: null,
    categories: ["person"],
    sources: [
      { title: "A made-up source for a made-up street",
        url: "https://example.org/alder" }
    ],
    basis: "attested",
    disputed: false,
    note: "Laid out across a made-up orchard in a made-up year.",
    possiblySameAs: null, aliases: []
  },

  // ---- the drift section --------------------------------------------------

  // No public prose at all: sinks to the bottom of the Drift column.
  "bare-lane": {
    spellings: [{ forms: ["Bare Lane"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    basis: "none",
    searched: "none",
    disputed: false,
    note: null,
    possiblySameAs: null, aliases: []
  },

  // Approved once and rewritten since: the one entity the Drifted filter shows.
  "chestnut-street": {
    spellings: [{ forms: ["Chestnut Street"] }],
    namedAfter: "{{Clara Chestnut}}, a made-up orchard owner",
    namedAfterLink: null,
    namedAfterApproved: "{{Clara Chestnut}}, a made-up orchardist",
    namedAfterApprovedOn: "2026-09-01",
    categories: ["person"],
    sources: [],
    basis: "attested",
    disputed: false,
    note: null,
    possiblySameAs: null, aliases: []
  },

  // ---- the editor section -------------------------------------------------
  // The entity the editing checks work on: ungraded (basis "none"), no
  // categories, one spelling with one form, a public note and a private one.

  "farmer": {
    spellings: [{ forms: ["Farmer Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [
      { title: "A made-up 1909 subdivision sheet",
        url: "https://example.org/farmer" }
    ],
    basis: "none",
    searched: "partial",
    disputed: false,
    note: "Lettered on a made-up 1909 sheet. Nothing found says who or what Farmer was.",
    internalNote: "Fixture only: searched nowhere, because Farmer is made up.",
    possiblySameAs: null, aliases: []
  },

  // ---- the search section -------------------------------------------------
  // Found by searching "figueroa", which is in its spelling but not its id.
  // Fully approved, so the Unapproved filter must leave it out.

  "pearl-street": {
    spellings: [{ forms: ["Pearl Street"] }, { forms: ["Figueroa Street"] }],
    namedAfter: "{{Peter Pearl}}, a made-up surveyor",
    namedAfterLink: null,
    namedAfterApproved: "{{Peter Pearl}}, a made-up surveyor",
    namedAfterApprovedOn: "2026-09-01",
    categories: ["person"],
    sources: [],
    basis: "attested",
    disputed: false,
    note: "Renamed in a made-up year.",
    noteApproved: "Renamed in a made-up year.",
    noteApprovedOn: "2026-09-01",
    possiblySameAs: null, aliases: []
  }

};

if (typeof module !== "undefined") module.exports = { NAME_ENTITIES };
