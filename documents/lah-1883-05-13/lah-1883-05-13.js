// Los Angeles Herald, May 13, 1883, p. 3 — a two-sentence council note, and the
// EARLIEST DATED RENAMING IN THIS CORPUS after the Feb. 1874 ordinance.
//
// "The Council last night passed an ordinance changing the name of Turner
// street, from First to Alameda, to Jackson street." Qualified — the item names
// the stretch — and enacted, not petitioned: the ordinance passed.
//
// TURNER STREET WAS CUT IN HALF IN 1883, and this is the first cut. Three
// months later the Board of Public Works recommends renaming "Turner street,
// WEST OF MAIN street, to Sonora street" (documents/lah-1883-08-19), and the
// ordinance carrying that passes on Sept. 1 (documents/lah-1883-09-02). So one
// street lost its name in two pieces in one year, to two different successors.
//
// NO ROW, for a reason that is about the modern map rather than the document.
// Modern Jackson Street is a fragment in Little Tokyo that reaches neither
// First Street (289 m away) nor Alameda (338 m). The 1883 stretch is longer
// than what survives, so neither end resolves and any row would claim ground
// the geometry cannot check. This is the shape rule 3 exists for.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06, found by searching CDNC
// for the phrase "ordinance changing" — the method written up as
// handbook/RENAMING-SOURCES.md Step 2b, applied by the person who could reach
// the archive. Crop 372,1642,515,122 of LAH18830513.1.3, beside this file.

module.exports = {
  id: "lah-1883-05-13",
  title: "Los Angeles Herald, May 13, 1883, p. 3 — the Council passes an ordinance changing Turner Street, from First to Alameda, to Jackson Street",
  shortTitle: "the 1883 Turner → Jackson renaming",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18830513.1.3",
  scan: "documents/lah-1883-05-13/lah-1883-05-13-clip.jpg",
  transcription: null,

  // "last night" — the Saturday session, reported in the Sunday paper.
  date: { on: "1883-05-12" },
  recorded: "1883-05-13",
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
    { id: "turner-jackson",
      text: "The Council last night passed an ordinance changing the name of Turner street, " +
            "from First to Alameda, to Jackson street.",
      note: "Qualified, enacted, and dated to the evening of May 12, 1883. The ordinance's " +
            "own number is not given and the minutes for the date have not been looked at." }
  ],

  rows: []
};
