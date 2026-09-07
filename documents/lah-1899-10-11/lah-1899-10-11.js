// ⚠ PASADENA, NOT LOS ANGELES — see documents/lah-1899-07-26. Coverage box is Pasadena.
//
// STAGE 3 — PASSED, and worth keeping for one general reason even though the streets
// are not ours: it states a PRINCIPLE for resolving duplicate names. "The council
// decided that since the former street was the first to receive the name it was
// entitled to retain it over the other street." Seniority wins. That is the same rule
// the Los Angeles engineer applies to annexed districts in 1910
// (documents/lah-1910-09-30): the original city keeps its names, the newcomer changes.
//
// The excerpt ends at a full stop: "There have been two San Pasqual streets, one on
// the East Side and another between South Fair Oaks and Marengo avenues." (Kenny,
// 2026-09-06 — an earlier note wrongly called this a mid-sentence truncation; the
// next line begins a new paragraph.) Which of the two San Pasqual streets kept the
// name is simply not in the clipped column.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lah-1899-10-11",
  title: "Los Angeles Herald, Oct. 11, 1899 — Pasadena passes the street-name ordinance, dropping the Congress street change; the older street keeps the name",
  shortTitle: "the Pasadena renaming ordinance passed",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18991011.1.7",
  scan: "documents/lah-1899-10-11/lah-1899-10-11-clip.jpg",
  transcription: null,

  date: { before: "1899-10-11" },
  recorded: "1899-10-11",
  form: "textual",
  type: "news-report",
  attests: "built-by",
  completeness: "incidental",
  coverage: [[34.19, -118.19], [34.19, -118.08],
             [34.11, -118.08], [34.11, -118.19]],
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "congress-seniority",
      text: "The ordinance changing the names of various streets was passed as first read, with the " +
            "omission of the change in the name of Congress street, between Fair Oaks and Pasadena " +
            "avenue. There are two Congress streets, one between Fair Oaks and Pasadena avenue and " +
            "the other between St. John's street and Orange Grove. The residents of the latter street " +
            "petitioned the council to change the name of the former for their convenience. The " +
            "council decided that since the former street was the first to receive the name it was " +
            "entitled to retain it over the other street.",
      note: "SENIORITY RULE: the street that got the name first keeps it." },

    { id: "passed-five",
      text: "In accordance with the ordinance passed, Arlington court will hereafter be called " +
            "Arlington drive. Central street will be known now as Ritzman, to avoid confusion with " +
            "Center street. Locust street, between Fair Oaks and Raymond, will be called Holly, there " +
            "being another Locust street on the East Side. The name of Union avenue has been changed " +
            "to Manzanita avenue, to be distinguished from Union street. West Columbia and Hill " +
            "street are now named Columbia. There have been two San Pasqual streets, one on the East " +
            "Side and another between South Fair Oaks and Marengo avenues.",
      note: "The excerpt ends at a full stop, not a truncation. Every stated MOTIVE here is duplicate-avoidance." }
  ],

  rows: []
};
