// ★★★ THE 1889 OMNIBUS, IN FULL — 212 changes across six columns, and the single
// largest untranscribed thing in this corpus.
//
// WHAT IT IS. The predecessor of Ordinance No. 4093 of Feb. 1897, and unlike 4093
// its text is not missing. Its title states the principle: streets "WHICH, WHILE
// FORMING ONE PRACTICALLY CONTINUOUS STREET, HAVE DIFFERENT NAMES." Every entry
// has the same shape and every one is QUALIFIED — "That the name of the street
// heretofore known as X, extending from A to B, be changed to Y" — so this is the
// other great source of `scope: "extent"` rows, alongside Ord. 3829 of 1896.
//
// HOW IT GOT HERE (six documents, four months): the special committee's ~300-item
// list, Oct. 1888 (documents/lah-1888-10-11); adopted Feb. 5, 1889
// (lah-1889-02-06); vetoed by Mayor Bryson Feb. 18 (lah-1889-02-19); the adopting
// vote reconsidered and re-referred Feb. 25 (lah-1889-02-26); re-adopted with 212
// changes Apr. 22 (lah-1889-04-23); approved by Mayor Hazard May 8; published, and
// therefore in force, May 10.
//
// ★ IT SETTLES THE GEORGIA BELL DATE. Gen. Forman testified in 1897 that the
// street was renamed Georgia Bell on May 10, 1889 — which is exactly the day this
// ordinance took effect. `georgia-bell`'s spelling periods stand.
//
// ⚠ THE BODY IS NOT TRANSCRIBED. Only the title, the enacting clause and the
// certification are quoted below. Transcribing 212 qualified changes is a session
// of its own and wants doing carefully: the entries name tracts, blocks and
// surveys ("block 37, Hancock's survey") as often as cross streets, and several
// reserve a name "for any future extension of this street eastward", which is a
// kind of provision the model has no place for. Until then this document is a
// pointer to a scan, not a source of rows.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06, from CDNC — the full
// six-column article, LAH18890510.1.7, crop 1582,265,2930,6294. Beside this file.
// Header and certification transcribed by an instance at full resolution; the
// body was read at column scale only, well enough to see its shape and not well
// enough to quote.

module.exports = {
  id: "lah-1889-05-10",
  title: "Ordinance No. 48 (New Series), “An ordinance changing the names of certain streets and avenues in the city of Los Angeles, which, while forming one practically continuous street, have different names” — adopted Apr. 22, 1889, approved May 8, published (and in force) May 10, 1889",
  shortTitle: "Ord. 48, the 1889 omnibus (212 changes)",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18890510.1.7",
  scan: "documents/lah-1889-05-10/lah-1889-05-10-clip.jpg",
  transcription: null,

  date: { on: "1889-04-22" },
  recorded: "1889-05-10",
  form: "textual",
  type: "ordinance",
  attests: "built-by",
  completeness: "exhaustive-in-scope",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "title",
      text: "AN ORDINANCE CHANGING THE NAMES OF CERTAIN STREETS AND AVENUES IN THE CITY OF LOS " +
            "ANGELES, WHICH, WHILE FORMING ONE PRACTICALLY CONTINUOUS STREET, HAVE DIFFERENT NAMES.",
      note: "The purpose in the instrument's own words. Compare the Feb. 1889 report, which described " +
            "it as an ordinance about names \"in duplicate\"; between February and April the stated " +
            "rationale changed." },

    { id: "enacting",
      text: "The Mayor and Council of the City of Los Angeles do ordain as follows:" },

    { id: "UNTRANSCRIBED-body",
      text: "[UNTRANSCRIBED — 212 changes, six columns. Each takes the form \"That the name of the " +
            "street heretofore known as X, extending from A to B, be and the same is hereby changed " +
            "to Y.\" The scan is beside this file.]",
      note: "A placeholder in the sense ord-4093 uses the word: the warrant exists and is in hand, it " +
            "has simply not been quoted yet." },

    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the Council of the City of " +
            "Los Angeles at its meeting of April 22, 1889. FREEMAN G. TEED, City Clerk. Approved this " +
            "8th day of May, 1889. HENRY T. HAZARD, Mayor.",
      note: "Published May 10, 1889, and in force from that publication under its own terms — which " +
            "is the date Gen. Forman gives for the Georgia Bell renaming." }
  ],

  rows: []
};
