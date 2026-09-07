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
