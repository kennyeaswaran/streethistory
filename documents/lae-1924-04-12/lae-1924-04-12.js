// ★★ SIGNED — and this is the one that stuck. Orange street, between Alvarado and
// Figueroa, becomes Wilshire boulevard, by an ordinance adopted about Apr. 1, 1924 and
// signed by Mayor George E. Cryer on Apr. 11, 1924.
//
// The full arc, now complete across four documents and sixteen years:
//
//   ~June 30, 1908 — passed; sign posts go up   (documents/lah-1908-07-14)
//    Dec.  4, 1908 — repealed; "Orange street is still Orange street"
//                                               (documents/lah-1908-12-05)
//   ~Apr.  1, 1924 — adopted again              (documents/lae-1924-04-04)
//    Apr.  7, 1924 — mayor defers, considers the viaduct
//                                               (documents/lae-1924-04-07)
//    Apr. 11, 1924 — SIGNED                     (this document)
//
// That is the best-documented single renaming in the corpus and the model case for what
// the textual-document tool has to be able to represent: one street, five documents,
// two instruments sixteen years apart, one of them repealed.
//
// The viaduct across Westlake Park is under consideration in the same breath, together
// with widening — the name arrives before the road does.
//
// Council minutes for about Apr. 1, 1924 should carry the ordinance number. Logged in
// handbook/MINUTES-TO-CHECK.md.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lae-1924-04-12",
  title: "Los Angeles Examiner, Apr. 12, 1924 — Mayor Cryer signs the ordinance changing Orange street between Alvarado and Figueroa to Wilshire boulevard",
  shortTitle: "Orange street becomes Wilshire boulevard",
  url: "https://cdnc.ucr.edu/?a=d&d=LAE19240412.1.18",
  scan: "documents/lae-1924-04-12/lae-1924-04-12-clip.jpg",
  transcription: null,

  date: { before: "1924-04-12" },
  recorded: "1924-04-12",
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
    { id: "signed",
      text: "Mayor George E. Cryer late yesterday signed the ordinance changing the name of Orange " +
            "street between Alvarado and Figueroa streets to Wilshire boulevard. This ordinance was " +
            "adopted by the council ten days ago.",
      note: "★★ Headline: \"Orange Street Name Changed.\" Signed Apr. 11, 1924; adopted about Apr. 1, " +
            "1924." },

    { id: "widening",
      text: "In this connection the council has under consideration the matter of starting " +
            "proceedings for the widening of Orange street and connecting it up with Wilshire " +
            "boulevard west of Park View avenue by means of a viaduct across Westlake Park.",
      note: "Park View avenue named as the point of connection." }
  ],

  rows: []
};
