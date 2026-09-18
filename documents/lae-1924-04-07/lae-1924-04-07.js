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
// ACT TWO. The mayor holds the ordinance up — not on the merits of the name, but
// because of what the name implies about the ROADWAY: he is looking into whether a
// viaduct could be built across Westlake Park to physically connect Orange street with
// Wilshire boulevard.
//
// That is the thing to notice. In 1908 the objection to the merger was that Orange
// street was not really part of Wilshire; by 1924 the answer is to make it really part
// of Wilshire. The viaduct was built — Wilshire Boulevard runs through MacArthur Park
// today — so this clipping catches the moment the name and the road were about to be
// reconciled.
//
// QUALIFIED, and note the extent is given in the reverse order from 1908: "between
// Alvarado and Figueroa streets" here, "from Figueroa to Alvarado" in
// documents/lah-1908-07-14. Same segment.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lae-1924-04-07",
  title: "Los Angeles Examiner, Apr. 7, 1924 — Mayor Cryer defers signing the Orange street ordinance while he looks into a viaduct across Westlake Park",
  shortTitle: "Cryer defers signing",
  url: "https://cdnc.ucr.edu/?a=d&d=LAE19240407.1.15",
  scan: "documents/lae-1924-04-07/lae-1924-04-07-clip.jpg",
  transcription: null,

  date: { before: "1924-04-07" },
  recorded: "1924-04-07",
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
    { id: "held-up",
      text: "Pending consideration, Mayor George E. Cryer has held up the ordinance changing the name " +
            "of Orange street, between Alvarado and Figueroa streets, to Wilshire boulevard.",
      note: "Headline: \"Mayor Defers Signing Name Change Ordinance.\" QUALIFIED: Alvarado to Figueroa." },

    { id: "viaduct",
      text: "He is looking into the possibility of a viaduct being constructed across Westlake Park " +
            "to connect Orange street with Wilshire boulevard. The Mayor indicated that he will sign " +
            "the change in name ordinance this week.",
      note: "★ The name change and the physical connection considered together. Westlake Park is " +
            "today's MacArthur Park." }
  ],

  rows: []
};
