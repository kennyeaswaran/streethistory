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
// THE ORANGE STREET STORY RESUMES, sixteen years later. In 1908 the council renamed
// Orange street to Wilshire boulevard, put up sign posts, and then repealed the
// ordinance under protest from Wilshire boulevard's own residents
// (documents/lah-1908-07-14, documents/lah-1908-12-05).
//
// This time it holds. Act one of three: documents/lae-1924-04-04 (expected),
// documents/lae-1924-04-07 (deferred), documents/lae-1924-04-12 (SIGNED).
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lae-1924-04-04",
  title: "Los Angeles Examiner, Apr. 4, 1924 — Mayor Cryer expected to sign the ordinance changing Orange street to Wilshire boulevard",
  shortTitle: "Cryer expected to sign the Orange street change",
  url: "https://cdnc.ucr.edu/?a=d&d=LAE19240404.1.12",
  scan: "documents/lae-1924-04-04/lae-1924-04-04-clip.jpg",
  transcription: null,

  date: { before: "1924-04-04" },
  recorded: "1924-04-04",
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
    { id: "expected",
      text: "Mayor Cryer is considering the proposed change of the name of Orange street to Wilshire " +
            "boulevard. He indicated yesterday that he would sign the ordinance changing the street " +
            "name.",
      note: "Headline: \"Cryer Expected to O K Orange St. Name Change.\"" }
  ],

  rows: []
};
