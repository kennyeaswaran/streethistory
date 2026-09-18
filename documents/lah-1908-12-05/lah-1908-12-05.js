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
// A RENAMING BEING UNDONE, act two — the resolution of documents/lah-1908-07-14. This
// is one of the very few places in the whole corpus where we can watch a name change
// and change back, with both instruments named:
//
//   ~June 30, 1908 — ordinance passed: Orange street (Figueroa to Alvarado) → Wilshire
//                    boulevard. SIGN POSTS WERE PUT UP.
//   Dec. 1908     — "The ordinance changing the name of Orange street was repealed and
//                    Orange street is still Orange street."
//
// So the Wilshire name stood on Orange street for roughly five months, in law and on
// the street signs. Any document from that window may show it.
//
// Then a NEW petition, for the part of Orange street between Hoover and Wilshire
// boulevard, to be called Sunset place — with an argument we should note: the
// petitioners say the street has ALWAYS been known as Sunset place, the property owners
// believed that was its real name until the city posted signs saying Orange, and the
// post office knows it as Sunset place and does not deliver mail addressed to Orange.
// A street's official name and its used name can differ for years, and the post office
// can side with the used name.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lah-1908-12-05",
  title: "Los Angeles Herald, Dec. 5, 1908 — \"Again Want Name of Street Changed\": the Orange-to-Wilshire ordinance repealed, and a new petition for Sunset place",
  shortTitle: "Orange street restored, Sunset place asked",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH19081205.1.5",
  scan: "documents/lah-1908-12-05/lah-1908-12-05-clip.jpg",
  transcription: null,

  date: { before: "1908-12-05" },
  recorded: "1908-12-05",
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
    { id: "the-arc",
      text: "Several months ago Orange street residents presented a petition to the city council to " +
            "change the name of Orange street to Wilshire boulevard. The council passed the ordinance " +
            "and the name was changed. Sign posts were immediately put up designating Orange street " +
            "as Wilshire boulevard.",
      note: "Headline: \"Again Want Name of Street Changed / Residents Ask That Orange Be Called " +
            "Sunset.\"" },

    { id: "indignant",
      text: "When residents of the exclusive residence street that bears that name learned what had " +
            "been done they were very indignant at the intrusion on their privacy. A number of them " +
            "appeared before the city council and protested. They declared Orange street was in no " +
            "sense a boulevard, that it never could be a boulevard, as a boulevard is understood, " +
            "that it was built up with apartment houses and nothing but apartment houses would ever " +
            "be built on it, and altogether it was not such a nice street as the original Wilshire " +
            "boulevard, and would the council please take it back." },

    { id: "repealed",
      text: "The council did so. The ordinance changing the name of Orange street was repealed and " +
            "Orange street is still Orange street.",
      note: "★ A repeal. The Wilshire name stood on Orange street roughly July–Dec. 1908." },

    { id: "sunset-petition",
      text: "Yesterday another petition was filed with the council asking that the name of that " +
            "portion of Orange street between Hoover and Wilshire boulevard be changed to Sunset " +
            "place.",
      note: "QUALIFIED: Hoover to Wilshire boulevard." },

    { id: "always-known-as",
      text: "The petitioners represent this portion of the street has always been known as Sunset " +
            "place, and, in fact, the property owners believed this to be the real name of the street " +
            "until signs were posted on the corners calling it Orange street. They further declare " +
            "the postoffice department knows the street as Sunset place and mail addressed to their " +
            "numbers on Orange street is not delivered.",
      note: "★ Official name and used name diverging, with the post office following the used name." },

    { id: "probable",
      text: "This portion of Orange street is not a logical continuation of the Orange street running " +
            "directly east and west, and it is probable the petition will be granted.",
      note: "Asked only — the outcome is not in this clip." }
  ],

  rows: []
};
