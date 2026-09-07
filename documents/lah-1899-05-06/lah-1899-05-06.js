// STAGE 2 — RECOMMENDED, and the first recorded appeal to AGE as an argument against
// renaming: Mission Road "has been in existence fifty years." That is the same kind of
// argument Councilman Healy makes for Buena Vista in 1908 (documents/lah-1908-09-22)
// and that the engineer makes against renaming Wesley avenue in 1911.
//
// "Reversing" is a scope we have not had to model yet: two streets swap names along a
// shared extent (from the intersection at Eastlake park to the city limits).
//
// See documents/lah-1898-06-12 for the earlier attempt on Mission road.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lah-1899-05-06",
  title: "Los Angeles Herald, May 6, 1899 — board recommends reversing the names of Mission Road and Alhambra avenue; Councilman Pierce objects",
  shortTitle: "Mission Road and Alhambra avenue to be reversed",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18990506.1.5",
  scan: "documents/lah-1899-05-06/lah-1899-05-06-clip.jpg",
  transcription: null,

  date: { before: "1899-05-06" },
  recorded: "1899-05-06",
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
    { id: "mission-alhambra",
      text: "It was decided to recommend that the city engineer be instructed to present an ordinance " +
            "changing and reversing the names of Mission Road and Alhambra avenue from the " +
            "intersection at Eastlake park to the city limits. Councilman Pierce is very much opposed " +
            "to giving Alhambra avenue the name Mission Road, which has been in existence fifty " +
            "years.",
      note: "A name SWAP over a shared extent, not two independent changes." }
  ],

  rows: []
};
