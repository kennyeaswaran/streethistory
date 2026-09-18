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

  rows: [
    // Audit 2026-09-18 (handbook/change-rows-audit-2026-09-18.md), bin B.
    // The change that held. QUALIFIED AND RESOLVED: Figueroa is the east end
    // (Wilshire × Figueroa, 0 m — in 1924 this is modern Figueroa, Pearl having
    // taken the name in 1897). Alvarado, the west end, lies beyond the OSM extract:
    // modern Wilshire's geometry stops near Burlington Avenue, ~0.5 km short, so
    // `fromCross: null` means the extract's west end, all of it inside the stated
    // stretch. laevex-1924-04-01 reports the unanimous passage; this report of the
    // mayor's signature carries the row.
    // ⚠ WRITTEN AGAINST THIS HEADER'S NOTE that only the instrument (Ord. 48435) may
    // carry it: RENAMING-SOURCES.md step 2a accepts an unambiguous press report of an
    // enacted ordinance, and "signed" is that. Kenny's call.
    // The 1908 change and its repeal (lah-1908-07-14, -12-05) are NOT rowed: the
    // what-if build showed generate.js collapsing Orange → Wilshire → Orange →
    // Wilshire on one stretch into two nonsense periods ("Orange Street, Dec. 1908 →
    // July 1908"), and dropping the 1878 lettering. They wait on the generator; see
    // the audit's bin B.
    { kind: "change", from: "orange-st-wilshire", to: "wilshire",
      scope: "extent",
      street: "Wilshire Boulevard", fromCross: null, toCross: "Figueroa Street",
      wording: "the ordinance changing the name of Orange street between Alvarado and Figueroa streets to Wilshire boulevard",
      says: ["signed"],
      mechanism: "renaming",
      confirmed: false,
      note: "Adopted by the council unanimously about Apr. 1, 1924 and signed by Mayor Cryer on Apr. 11; plat annotations give it as Ord. 48435." }
  ]
};
