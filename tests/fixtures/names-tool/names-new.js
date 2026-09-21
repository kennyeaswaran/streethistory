// Test fixture, not data: the names-new.js that names-browser-test puts in its
// throwaway copy of the project. Both entities are made up.

const NEW_NAME_ENTITIES = {

  // The first pending entity: the promotion checks move it into names.js and
  // read its stored sightings.
  "fixture-pending": {
    // Sheets that letter this name — derived, rewritten on every review save.
    sightings: [
      {"doc":"fixture-lettered","sheet":"Fixture sheet B","asWritten":["PENDING ST"]}
    ],
    spellings: [{"forms":["Pending Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    basis: "none",
    disputed: false,
    note: "A made-up street waiting on research.",
    possiblySameAs: null,
    aliases: []
  },

  // Cites fixture-cited, which does not letter it, while fixture-lettered
  // does: the names tool must warn, not error. Its basis is set so that the
  // citation is its ONLY problem. (This used to be the real `bull` entity,
  // and the test would have failed the day that citation was fixed.)
  "fixture-miscited": {
    spellings: [{"forms":["Fixture Street"]}],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [
      { title: "Fixture sheet A", url: "http://fixture.invalid/sheet-a" }
    ],
    basis: "none",
    disputed: false,
    note: null,
    possiblySameAs: null,
    aliases: []
  }

};

if (typeof module !== "undefined") module.exports = { NEW_NAME_ENTITIES };
