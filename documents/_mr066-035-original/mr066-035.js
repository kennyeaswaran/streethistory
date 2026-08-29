// Compromise Subdivision / "Washington Tract" — the adversarial benchmark:
// its "Third St" is modern MIRAMAR and its "Arnold St" is modern 3RD
// (identified by map alignment; name continuity is a trap, not evidence).

module.exports = {
  id: "mr066-035",
  title: "Recorded map: Compromise Subdivision / \"Washington Tract,\" M.R. 66-35/36 (surveyed Mar. 1894 by E.D. Severance; recorded May 1, 1897)",
  shortTitle: "Compromise Subdivision/Washington Tract map",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR066/MR066-035.pdf",
  scan: "documents/mr066-035/mr066-035.pdf",
  transcription: null,              // no Part A file yet. The sheet's own
                                    // title block reads:
                                    // "Map of the Compromise Subdivision. Being a resubdivision of block W of he Subdivision of 3.5 acre lot I, Block 38 Hancock Survey"

  date: { on: "1894-03" },          // the survey date — when the ink was true;
                                    // recording (1897) is in the title
  type: "tract-map",
  attests: "planned-by",            // doc default: it shows existing streets
  completeness: "incidental",
  // Traced by Kenny in document-tool.html (2026-08-26): the tract boundary,
  // not the sheet edge. SCAN PIXELS against alignment.image — MODEL-SPEC §4.6,
  // so a better alignment carries the polygon with it.
  coverage: [
    [206, 343], [38, 604], [589, 881], [705, 727],
    [575, 519]
  ],
  alignment: {
    image: "documents/mr066-035/mr066-035-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.059411, -118.260332], note: "document-tool corner (0,0)" },
      { px: [747, 0], ll: [34.059574, -118.257456], note: "document-tool corner (747,0)" },
      { px: [0, 1276], ll: [34.055311, -118.259997], note: "document-tool corner (0,1276)" }
    ]
  },
  sweptFully: false,
  sweptFor: ["3rd Street", "Miramar Street"],
  readBy: "instance+alignment",

  rows: [
    { kind: "state", name: "arnold", asWritten: "Arnold St",
      street: "3rd Street", from: "Bixel Street", to: "Boylston Street",
      attests: "built-by",          // an occupied corridor the survey drew
      basis: "alignment" },

    // The plat's "Third St" — the numbered grid's own western routing of the
    // day — runs along modern Miramar, one block north of its "Arnold St".
    { kind: "state", name: "third-street", asWritten: "Third St",
      street: "Miramar Street", from: "Bixel Street", to: "Boylston Street",
      attests: "built-by",
      basis: "alignment" }
  ]
};
