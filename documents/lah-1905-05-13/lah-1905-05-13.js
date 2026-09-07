// THE NINETY-STREET ORDINANCE — the largest single renaming in this run after Ordinance
// No. 48 (documents/lah-1889-05-10), and the one whose full text we most want.
//
// What this document establishes:
//   • The instrument exists, was drawn by City Engineer Stafford under council
//     instructions, and covers NINETY cross streets in the southern and southeastern
//     portion of the city, in the Fifth and Sixth wards.
//   • It PASSED the council on Monday, May 8, 1905, and was in Mayor McAleer's hands on
//     May 13.
//   • It renumbers as well as renames: "what has been known as Forty-ninth street in a
//     certain section will be changed to Forty-first street."
//
// What happens next, in this same batch of clippings:
//   May 16 — the council RECALLS the ordinance from the mayor (documents/lah-1905-05-16)
//   May 17 — the Sixth ward protests (documents/lah-1905-05-17)
//   May 18 — the diagnosis: Lt. Hancock's 1849 survey (documents/lah-1905-05-18)
//
// So the ninety names may never have taken effect at all. ADOPTION IS NOT LAW. Nothing
// from this ordinance should be written as a row until the disposition after May 22,
// 1905 is found — that council meeting is logged in handbook/MINUTES-TO-CHECK.md as a
// top-priority target.
//
// No street names are printed here except the Forty-ninth/Forty-first example. The list
// of ninety is in the ordinance.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lah-1905-05-13",
  title: "Los Angeles Herald, May 13, 1905 — \"To Change Names of 90 Streets\": City Engineer Stafford's system for the Fifth and Sixth wards, passed and awaiting the mayor",
  shortTitle: "the ninety-street ordinance, with the mayor",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH19050513.1.12",
  scan: "documents/lah-1905-05-13/lah-1905-05-13-clip.jpg",
  transcription: null,

  date: { before: "1905-05-13" },
  recorded: "1905-05-13",
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
    { id: "stafford-system",
      text: "City Engineer Stafford, acting under instructions from the council, has drawn up a new " +
            "system of naming streets in the southern and southeastern portion of the city, " +
            "comprising sections of the Fifth and Sixth wards.",
      note: "Headline: \"To Change Names of 90 Streets / Measure Will Affect Fifth and Sixth Wards / " +
            "Applies to Cross Streets.\"" },

    { id: "why-tracts",
      text: "Many tracts have been laid out from time to time in this section without due attention " +
            "being paid to the location of the streets, owing to the fact that some of the principal " +
            "thoroughfares running north and south do not run parallel to each other. Then again, the " +
            "cross streets have been cut through in sections. For instance, a street would be " +
            "improved for five blocks, then it would stop to begin again several blocks further on, " +
            "and repeat.",
      note: "The stated cause: tract-by-tract platting with no city-wide grid." },

    { id: "with-the-mayor",
      text: "The ordinance changing the names of ninety of these cross streets was passed last Monday " +
            "and is now in Mayor McAleer's hands awaiting his decision on the question.",
      note: "Passed Monday = May 8, 1905. Recalled from the mayor three days after this — see " +
            "documents/lah-1905-05-16." },

    { id: "renumbering",
      text: "By the provisions of the ordinance a number of the residents will be moved nearer the " +
            "center of the city as far as the maps are concerned. For instance, what has been known " +
            "as Forty-ninth street in a certain section will be changed to Forty-first street.",
      note: "The only concrete change named in the article." },

    { id: "consequences",
      text: "Of course the changing of the names of the streets will change the house numbering " +
            "materially and necessitate a change on the assessor's, registrar's and tax collector's " +
            "books, and, in fact, all the books in the city departments where such records are kept. " +
            "It is also expected that this change in the numbering of houses and of streets will " +
            "cause the postoffice department considerable trouble for some time to come.",
      note: "Assessor's, registrar's and tax collector's books are all named as needing revision — " +
            "four more record series that would carry the list." },

    { id: "mayor-unknown",
      text: "What will be the mayor's action upon this ordinance is not as yet known, but he will " +
            "probably sign it or send it back to the council with his reasons in the near future.",
      note: "He did neither: the council recalled it first." }
  ],

  rows: []
};
