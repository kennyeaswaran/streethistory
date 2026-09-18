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
// PAPER. CDNC code LAEVEX = the **Los Angeles Evening Express**. The other code in
// this batch, LAE, is the Los Angeles Examiner — a different paper (confirmed by
// Kenny, 2026-09-06).
//
// ★★ THE ORDINANCE ITSELF, on the FRONT PAGE, and passed UNANIMOUSLY on Apr. 1, 1924.
// This is the instrument documents/lae-1924-04-12 says the mayor signed "ten days ago"
// — the dates line up exactly.
//
// The five-document arc for this one renaming is now:
//   ~June 30, 1908 — passed; sign posts up      (documents/lah-1908-07-14)
//    Dec.  4, 1908 — repealed                   (documents/lah-1908-12-05)
//    Apr.  1, 1924 — passed, unanimous          (this document)
//    Apr.  7, 1924 — mayor defers               (documents/lae-1924-04-07)
//    Apr. 11, 1924 — SIGNED                     (documents/lae-1924-04-12)
//
// And it supplies the reason the second attempt succeeded where the first failed. In
// 1908 the objection was that Orange street was not a boulevard and never could be. In
// 1924 the council frames the change as completing a **continuous thoroughfare from the
// heart of the business district to the ocean** — the "city-sea road." The name was no
// longer a courtesy extended to a lesser street; it was the last link in a plan.
//
// That is a general lesson worth carrying: when the same renaming fails and then
// succeeds years later, look for a change in the ARGUMENT, not just in the personnel.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "laevex-1924-04-01",
  title: "Los Angeles Evening Express, Apr. 1, 1924 — front page: council unanimously passes the ordinance changing Orange street between Alvarado and Figueroa to Wilshire boulevard, \"city-sea road\"",
  shortTitle: "the Orange street ordinance passed, unanimously",
  url: "https://cdnc.ucr.edu/?a=d&d=LAEVEX19240401.1.1",
  scan: "documents/laevex-1924-04-01/laevex-1924-04-01-clip.jpg",
  transcription: null,

  date: { before: "1924-04-01" },
  recorded: "1924-04-01",
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
    { id: "passed",
      text: "By unanimous vote the city council today passed an ordinance changing the name of Orange " +
            "street between Alvarado and Figueroa streets to Wilshire boulevard.",
      note: "★★ Headline: \"Orange Street Is Changed to Wilshire Blvd. / Improvement Program Given " +
            "Impetus / City-Sea Road, Plan.\" UNANIMOUS, Apr. 1, 1924." },

    { id: "city-to-sea",
      text: "By changing the name of Orange street, it was stated by city officials the city had " +
            "practically established a continuous thoroughfare from the heart of the business " +
            "district of the city to the ocean.",
      note: "★ The 1924 argument: continuity to the sea. Contrast the 1908 objection in " +
            "documents/lah-1908-07-14." },

    { id: "most-magnificent",
      text: "The action today, it was declared, opens the way for the completion of Wilshire " +
            "boulevard, which, it was predicted, would be the most magnificent thoroughfare in the " +
            "entire west." }
  ],

  rows: []
};
