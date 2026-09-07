// Los Angeles Council minutes, Monday Aug. 31, 1896, ledger p. 205 — the
// ADOPTION of Ordinance No. 3829 (New Series), "changing the names of certain
// streets in the City of Los Angeles", and the citation that will fetch its
// text: Ordinance Book 11, page 460.
//
// WHAT THIS DOCUMENT IS FOR. It has no street names in it at all. The clerk
// records that an ordinance changing names was read, that the rules were
// suspended, that it passed 8-0, and where it was recorded — and nothing about
// what it changed. The list of changes is in the newspaper three days later
// (documents/lah-1896-09-03), which is where the rows are.
//
// So this is the 1897 shape again, one year earlier: an ordinance identified
// by NUMBER and BOOK-AND-PAGE in the minutes, with its contents known only
// from the press (compare ord-4093, Book IV p. 337). That makes "Ordinance
// Book 11, page 460" a precise thing to ask the City Archivist for, which is
// the difference between a request and a search (handbook/RENAMING-SOURCES.md
// Step 3). WANTED.md carries it.
//
// The margin of the ledger is stamped ORDINANCE No. 3829 NEW SERIES beside the
// item, which is how the number is known: the clerk's prose does not give it.
//
// PROVENANCE. Scanned minutes supplied by Kenny, 2026-09-06, from
// https://clerkapps.lacity.org/oldcfidocs/ — the Aug. 31, 1896 volume, PDF
// p. 17, ledger p. 205. Kenny found the item; the clip beside this file is
// that page's lower half and the transcription is Claude's. The hand is a
// clear round secretary hand and the reading is not in doubt; the councillors'
// surnames are the least certain part and none of them bears on anything.

module.exports = {
  id: "min-1896-08-31",
  title: "Los Angeles Council minutes, Aug. 31, 1896 — adoption of Ordinance No. 3829 (New Series), “changing the names of certain streets in the City of Los Angeles” (ledger p. 205; recorded Ordinance Book 11 p. 460)",
  shortTitle: "the Aug. 1896 renaming ordinance (adoption)",
  url: "https://clerkapps.lacity.org/oldcfidocs/",
  scan: "documents/min-1896-08-31/min-1896-08-31-clip.jpg",
  transcription: null,

  date: { on: "1896-08-31" },
  form: "textual",
  type: "minutes",
  attests: "built-by",
  completeness: "incidental",
  // The 1896 city limits as a rough rectangle — the ordinance is citywide and
  // this document names no street at all, so nothing narrower would be honest.
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  // One item of a 37-page volume was read.
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "adoption-3829",
      text: "12th. Ordinance changing the names of certain streets in the City of Los " +
            "Angeles. Draft of an ordinance of the Mayor and Council of the City of Los " +
            "Angeles changing the names of certain streets in said city was read. On motion " +
            "of Mr. Teed the rules were suspended and on motion of the same gentleman said " +
            "ordinance was then adopted by the Council by the following vote: Ayes- Messrs. " +
            "Ashman, Blanchard, Kingery, Munson, Pessell, Snyder, Stockwell and Pres. Teed " +
            "8. Noes- none. (Said ordinance will be found recorded in book 11 at page 460 " +
            "of ordinances.)",
      note: "The margin beside this item is stamped “ORDINANCE No. 3829 NEW SERIES”. The " +
            "prose never names a street: what the ordinance changed has to come from " +
            "documents/lah-1896-09-03 until Book 11 p. 460 is in hand." }
  ],

  rows: []
};
