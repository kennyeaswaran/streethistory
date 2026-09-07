// Los Angeles Council minutes, Tuesday Sept. 8, 1896, ledger p. 252 — the
// SECOND renaming ordinance of the 1896 campaign, eight days after the first:
// Ordinance No. 3847 (New Series), nine changes "in the southwest portion of
// the city", recorded Ordinance Book 11 page 496.
//
// UNLIKE AUG. 31, THE MINUTES CARRY THE SUBSTANCE. On Aug. 31 the clerk wrote
// only that an ordinance changing names was adopted, and the list had to come
// from the newspaper (documents/min-1896-08-31, documents/lah-1896-09-03).
// Here he copies the changes into the minute book, so this document is both
// the adoption record and the text. That is the ord-1874-02-26 shape.
//
// ⚠ BUT THE MINUTES ABRIDGE IT. Every line here is bare — "Vine Street to
// Twenty-fourth Street" — with no from and no to, and for an hour on 2026-09-06
// that looked like a finding: an unqualified instrument eight days after a
// qualified one, proving the split is a per-instrument choice. It is not. The
// Herald printed the same ordinance the next morning WITH an extent on every
// one of the nine changes (documents/lah-1896-09-09): "Freeman street, from
// Hoover street to Budlong avenue, change to Twentieth street." The ordinance
// was qualified; the clerk dropped the extents when copying it in.
//
// That is the lesson worth keeping from this document. A minutes copy of an
// ordinance is not necessarily the ordinance's own words in full, and this is
// the first case in the corpus that shows the gap. documents/ord-1874-02-26 is
// a minutes copy too and reads as complete — it may well be, but that can no
// longer be assumed.
//
// WHAT IT IS: THE GRID EATING THE NAMES. Nine named streets become six
// numbers, two of them twice over — Bryant and Cypress both become
// Twenty-second, Forrester and Pine both become Twenty-fourth, Clinton and
// Kenwood both become Twenty-fifth. That is not sloppiness; it is two parallel
// streets on either side of a line being given one name so the number runs
// through. The Sept. 14 petition says so in as many words
// (documents/min-1896-09-14): the streets were to be changed "so as to make
// them compare with the names of the streets on the north side of Pico
// Street".
//
// ⚠ NO ROWS, and the reason is geometry rather than doubt. Not one of the
// fifteen names — nine old, six new — is in this project's OSM extract: the
// southwest portion of the city is not encoded. Rows here would need fifteen
// entities minted blind, with no sighting behind any of them, and would draw
// nothing. The nine changes are quoted verbatim below instead, which is the
// whole content of the instrument; when the southwest is encoded they are a
// transcription away — and the Herald's printing supplies the extents they need.
// NB the seventh name is VINE, not Pine: the manuscript is faint there and was
// first read as Pine, and the printed ordinance settles it. It is also NOT the
// Vine Street of documents/ord-4093, which runs First to Second by Central
// Avenue and becomes Central Avenue five months later — different ground,
// different lineage, and close enough in date to be a trap.
//
// PROVENANCE. Scanned minutes supplied by Kenny, 2026-09-06, from
// https://clerkapps.lacity.org/oldcfidocs/ — the Sept. 8, 1896 volume, PDF
// p. 19, ledger p. 252. Kenny found the item; the clip beside this file is the
// upper two thirds of that page and the transcription is Claude's. The hand is
// a clear round secretary hand, but this page has faded more than most. THREE
// UNCERTAIN READINGS, all flagged in the excerpts and two of them settled by
// the Herald's printing: the last digit of the ordinance number (still open),
// "Vine", and "Forrester".

module.exports = {
  id: "min-1896-09-08",
  title: "Los Angeles Council minutes, Sept. 8, 1896 — Ordinance No. 3847 (New Series), changing the names of nine streets in the southwest portion of the city (ledger p. 252; recorded Ordinance Book 11 p. 496)",
  shortTitle: "the Sept. 1896 southwest renamings",
  url: "https://clerkapps.lacity.org/oldcfidocs/",
  scan: "documents/min-1896-09-08/min-1896-09-08-clip.jpg",
  transcription: null,

  date: { on: "1896-09-08" },
  form: "textual",
  type: "minutes",
  attests: "built-by",
  // It lists every street it renames and claims nothing outside them.
  completeness: "exhaustive-in-scope",
  // The 1896 city limits as a rough rectangle. The ordinance's own scope is
  // "the southwest portion of the city", which this project cannot draw — none
  // of its streets is in the OSM extract — so nothing narrower would be honest.
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  // One item of a 37-page volume was read, and no row was entered.
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "ordinance-3847",
      text: "2nd. Ordinance changing the names of certain streets in the southwest portion " +
            "of the city as follows: Freeman Street to Twentieth Street. Olivia Street to " +
            "Twenty-first Street. Bryant Avenue to Twenty-second Street. Cypress Avenue to " +
            "Twenty-second Street. Maxwell Avenue to Twenty-third Street. Forrester Avenue " +
            "to Twenty-fourth Street. Vine Street to Twenty-fourth Street. Clinton Avenue " +
            "to Twenty-fifth Street. Kenwood Avenue to Twenty-fifth Street.",
      note: "The instrument as the clerk copied it — nine changes, six numbers, and no " +
            "extents, which the ordinance itself had (documents/lah-1896-09-09). Two words " +
            "here are the manuscript's weakest: “Vine”, faint enough that an earlier pass " +
            "read it as “Pine”, and “Forrester”, which the Herald prints with two r's. " +
            "Both are settled by the printed text, not by the hand." },

    { id: "adoption-3847",
      text: "Draft of an ordinance of the Mayor and Council of the City of Los Angeles " +
            "changing the names of certain streets in said city, was read. On motion of Mr. " +
            "Teed the rules were suspended and on motion of the same gentleman said " +
            "ordinance was then adopted by the Council by the following vote: Ayes Messrs. " +
            "Ashman, Blanchard, Kingery, Munson, Pessell, Savage, Snyder, Stockwell and " +
            "Pres. Teed (9). (Said ordinance will be found recorded in book 11 at page 496 " +
            "of ordinances.)",
      note: "The margin beside the item is stamped “ORDINANCE No 3847 NEW SERIES”; the " +
            "last digit is the least certain part of the reading and could be a 2. Same " +
            "book as Ord. 3829 of Aug. 31 (p. 460), thirty-six pages later, and the same " +
            "mover — Teed suspends the rules for both. Savage has joined the council since " +
            "Aug. 31; the vote is 9 rather than 8." }
  ],

  rows: []
};
