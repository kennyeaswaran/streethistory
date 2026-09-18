// ★★ ORDINANCE NUMBERS FOR THIS ARC, read off two plat annotations 2026-09-18 and
// recorded in every document of the arc so that whichever one you open, you have them:
//
//     ORD. 16790        Orange St. → Wilshire Blvd.   (~June 1908; the signs went up)
//     ORD. 16915 / 16916  the repeal; Orange restored (Dec. 1908)
//     ORD. 48435        Orange St. → Wilshire Blvd.   (April 1924; this one held)
//
// WHERE THEY COME FROM. The county recorder's copies of two plats carry the change as
// an annotation and then strike it off again: documents/mr005-566 (recorded 1889) and
// documents/mr055-014 (surveyed 1893) both show a cursive "Wilshire … Blvd." tagged
// "ORD 16790", every word struck through, with an unstruck "ord.16915" / "ord 16916"
// beside the surviving Orange. mr005-566 adds a clean later marginal note: "Orange St.
// changed to Wilshire Blvd. Ord. 48435".
//
// ⚠ WHICH NUMBER IS WHICH IS INFERRED FROM WHERE THE PEN STRUCK, not from the ordinance
// index — no source in this corpus dates any of the four. The newspapers below give the
// dates and no numbers; the plats give the numbers and no dates. The City Clerk's
// ordinance index would join them in one lookup (handbook/WANTED.md).
//
// ⚠ AND TWO NUMBERS FOR ONE REPEAL is unexplained: 16915 and 16916 are on different
// sheets covering adjacent stretches, so they may be consecutive ordinances for
// different segments rather than a single act.
//
// A CHANGE ROW orange-st-wilshire → wilshire is still unwritten and wants one of these
// ordinances as its document, not a newspaper report of it (handbook/RENAMING-SOURCES.md
// step 3: only the instrument may carry a change row).
//
// A RENAMING BEING UNDONE, act one. About two weeks before this the council passed an
// ordinance changing Orange street, FROM FIGUEROA TO ALVARADO, to Wilshire boulevard,
// on a petition from Orange street's own property owners. Wilshire boulevard's property
// owners then petitioned to have Orange street's name restored.
//
// The extent is stated (Figueroa to Alvarado), so the passed ordinance is a QUALIFIED
// change. It was repealed — see documents/lah-1908-12-05 — so nothing here is a row.
// What it does give us is a dated window in which Orange street WAS Wilshire boulevard
// on the books: roughly the start of July to early December 1908.
//
// Wilshire boulevard itself was named in Dec. 1897 (documents/lah-1897-12-07), fifteen
// months after H. G. Wilshire petitioned the council about Sixth street
// (documents/min-1896-09-21).
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lah-1908-07-14",
  title: "Los Angeles Herald, July 14, 1908 — \"Wilshire Boulevard Would Go It Alone\": Wilshire property owners petition to undo the renaming of Orange street",
  shortTitle: "Wilshire objects to Orange street",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH19080714.1.6",
  scan: "documents/lah-1908-07-14/lah-1908-07-14-clip.jpg",
  transcription: null,

  date: { before: "1908-07-14" },
  recorded: "1908-07-14",
  form: "textual",
  type: "news-report",
  attests: "built-by",
  completeness: "incidental",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "objection",
      text: "Wilshire boulevard objects to having Orange street tacked onto it and given the name of " +
            "Los Angeles' most exclusive residence street, and through an attorney the property " +
            "owners presented a petition to the city council yesterday asking that the name of Orange " +
            "street be restored.",
      note: "Headline: \"Wilshire Boulevard Would Go It Alone / Merger of Orange Street Most " +
            "Objectionable.\"" },

    { id: "the-ordinance",
      text: "Two weeks ago the council passed an ordinance changing the name of Orange street, from " +
            "Figueroa to Alvarado, to Wilshire boulevard. The ordinance was passed on a petition " +
            "originating among the property owners on Orange street.",
      note: "QUALIFIED: Figueroa to Alvarado. Passed about June 30, 1908." },

    { id: "sixty-feet",
      text: "Yesterday protestants from Wilshire boulevard told the council Orange street could never " +
            "be a boulevard. According to the protest the street is only sixty feet wide, and the " +
            "lots so short that the street never could be widened to boulevard size and leave depth " +
            "enough for the building of residences suitable for a boulevard." },

    { id: "reconsider",
      text: "The ordinance changing the name and declaring Orange street a part of Wilshire boulevard " +
            "will be reconsidered at the council meeting in two weeks." }
  ],

  rows: []
};
