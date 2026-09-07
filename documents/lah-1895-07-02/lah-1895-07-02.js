// ★★ A STANDING RULE, NOT JUST A RENAMING — and this corpus has nothing else like
// it.
//
// "…changing the names of MILTON AND WHEATON STREETS to Hoover street, AND
// PROVIDING THAT ANY OTHER STREETS LYING ALONG THE WEST CITY LINE at a point
// between the north and south city lines SHALL BE KNOWN AS HOOVER STREET."
//
// That is a rule about future ground: not "these two streets become Hoover" but
// "whatever lies on this line is Hoover". The model has no way to express a
// renaming that applies to streets not yet identified, and this is the first
// document to need one. It is the same instinct as the 1889 entries that reserve a
// name "for any future extension of this street eastward" (documents/lah-1889-05-10).
//
// THE SECOND CLIP is the Philadelphia → Grand ordinance adopted at the same
// meeting, ten days after the Board recommended it (documents/lah-1895-06-22).
//
// PROVENANCE. Two clippings supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lah-1895-07-02",
  title: "Los Angeles Herald, July 2, 1895, p. 5 — Milton and Wheaton streets to become Hoover Street, with a standing rule for the west city line; and Philadelphia Street becomes Grand Avenue",
  shortTitle: "the 1895 Hoover Street rule and Grand Avenue",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18950702.1.5",
  scan: "documents/lah-1895-07-02/lah-1895-07-02-clip.jpg",
  transcription: null,

  date: { before: "1895-07-02" },
  recorded: "1895-07-02",
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
    { id: "hoover-rule",
      text: "By Councilman Snyder, that the city attorney be instructed to present an ordinance " +
            "changing the names of Milton and Wheaton streets to Hoover street, and providing that " +
            "any other streets lying along the west city line at a point between the north and south " +
            "city lines shall be known as Hoover street. Adopted.",
      note: "★ A renaming that binds ground the ordinance does not identify." },

    { id: "philadelphia-grand-adopted",
      text: "An ordinance changing the name of Philadelphia street to Grand avenue. Adopted." }
  ],

  rows: []
};
