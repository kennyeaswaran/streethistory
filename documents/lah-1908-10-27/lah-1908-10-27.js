// STAGE 3 — PASSED, and the purest example in the run of the SECOND motive for
// renaming. The first motive is duplicate-avoidance; this is the other one: making a
// crooked chain of differently-named segments into one continuously-named street.
//
//   "In order to make several streets as straight as possible much street juggling was
//   done in the council yesterday."
//
// Three changes, all on PORTIONS — every one of them `extent` scope, and none of the
// extents is given:
//
//   portions of Macy, Prospect place, Yosemite and Pennsylvania avenue → Bridge street
//     ("making Bridge a continuous street to Main")
//   portions of Brooklyn, Yosemite and Prospect → Pennsylvania
//   portions of Brooklyn avenue → Prospect place
//
// Note Yosemite loses portions to two different names, and Prospect appears on both
// sides. Untangling this needs the ordinance text, not the newspaper.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lah-1908-10-27",
  title: "Los Angeles Herald, Oct. 27, 1908 — council passes ordinances rearranging portions of Macy, Prospect place, Yosemite, Pennsylvania and Brooklyn into continuous streets",
  shortTitle: "the Bridge / Pennsylvania / Prospect rearrangement",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH19081027.1.12",
  scan: "documents/lah-1908-10-27/lah-1908-10-27-clip.jpg",
  transcription: null,

  date: { before: "1908-10-27" },
  recorded: "1908-10-27",
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
    { id: "juggling",
      text: "In order to make several streets as straight as possible much street juggling was done " +
            "in the council yesterday. Ordinances were passed changing portions of street names.",
      note: "Headline: \"Council Passes Ordinance Changing Streets' Names.\" \"Yesterday\" = Oct. 26, " +
            "1908." },

    { id: "three-changes",
      text: "Portions of Macy, Prospect place, Yosemite and Pennsylvania avenue are changed to Bridge " +
            "street, making Bridge a continuous street to Main. Portions of Brooklyn, Yosemite and " +
            "Prospect are changed to Pennsylvania and portions of Brooklyn avenue to Prospect place.",
      note: "All `extent` scope; no extents given. Yosemite is split between two new names." }
  ],

  rows: []
};
