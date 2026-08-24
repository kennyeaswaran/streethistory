// Compromise Subdivision / "Washington Tract" — the adversarial benchmark:
// its "Third St" is modern MIRAMAR and its "Arnold St" is modern 3RD
// (identified by map alignment; name continuity is a trap, not evidence).

module.exports = {
  id: "mr066-035",
  title: "Recorded map: Compromise Subdivision / \"Washington Tract,\" M.R. 66-35/36 (surveyed Mar. 1894 by E.D. Severance; recorded May 1, 1897)",
  shortTitle: "Compromise Subdivision/Washington Tract map",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR066/MR066-035.pdf",
  transcription: null,              // human alignment exists
                                    // (tracts/renders/MR066-035 …-alignment.json);
                                    // no Part A file yet

  date: { on: "1894-03" },          // the survey date — when the ink was true;
                                    // recording (1897) is in the title
  type: "tract-map",
  attests: "planned-by",            // doc default: it shows existing streets
  completeness: "incidental",
  // Rough footprint around Bixel/Boylston between 2nd and 4th (replace with
  // the alignment-derived polygon from georef.py).
  coverage: [[34.0590, -118.2615], [34.0590, -118.2560],
             [34.0545, -118.2560], [34.0545, -118.2615]],
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
