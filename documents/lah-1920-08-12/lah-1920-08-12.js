// STAGE 3 — ADOPTED. A small QUALIFIED change with an unusual extent description: not
// cross streets, but "a short street running off Cleland avenue." A spur of Cleland
// avenue in Mount Washington, carrying the parent street's name, is given its own name.
//
// The extent is `extent-unresolved` until the geometry is found — "a short street
// running off Cleland avenue" cannot be resolved from cross streets.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lah-1920-08-12",
  title: "Los Angeles Herald, Aug. 12, 1920 — ordinance adopted changing a section of Cleland avenue in Mount Washington to Cynthia avenue",
  shortTitle: "part of Cleland avenue to Cynthia avenue",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH19200812.1.2",
  scan: "documents/lah-1920-08-12/lah-1920-08-12-clip.jpg",
  transcription: null,

  date: { before: "1920-08-12" },
  recorded: "1920-08-12",
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
    { id: "cleland-cynthia",
      text: "The city council today adopted an ordinance changing the name of a section of Cleland " +
            "avenue in the Mount Washington district, to Cynthia avenue. The section of the " +
            "thoroughfare in which the change of name is authorized is a short street running off " +
            "Cleland avenue.",
      note: "Headline: \"Change Street Name.\" \"Today\" = Aug. 12, 1920. Extent given by description, " +
            "not cross streets." }
  ],

  rows: []
};
