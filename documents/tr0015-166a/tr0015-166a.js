// "Crownwood" (Witmer's Subdivision of parts of Lots 2 and 7, Block 38,
// Hancock Survey), M.B. 15-166 — surveyed Nov. 1909 by Chas. Forman Jr.
// Its "por. of 3rd St. Ord. 39,578" stretch through Crown Hill is, per
// alignment, modern MIRAMAR Street — not modern 3rd (the second of the two
// name-continuity traps on 3rd's western reach).

module.exports = {
  id: "tr0015-166a",
  title: "Recorded map: \"Crownwood\" (Witmer's Subdivision of parts of Lots 2 and 7, Block 38, Hancock Survey; surveyed Nov. 1909 by Chas. Forman Jr.), M.B. 15-166",
  shortTitle: "Crownwood tract map",
  url: "https://pw.lacounty.gov/smpm/landrecords/pdf/TR0015-166a.pdf",
  transcription: null,

  date: { on: "1909-11" },
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  // Crown Hill, roughly Columbia/Witmer between 2nd and Miramar (replace via
  // georef when the sheet is aligned).
  coverage: [[34.0625, -118.2650], [34.0625, -118.2600],
             [34.0585, -118.2600], [34.0585, -118.2650]],
  sweptFully: false,
  sweptFor: ["2nd Street", "Miramar Street"],
  readBy: "instance+alignment",

  rows: [
    // 2nd St's curving Crown Hill alignment — drawn but unlabeled directly;
    // confirmed via its "W. 2nd" bearing annotation.
    { kind: "state", name: "second-street", asWritten: "W. 2nd",
      street: "2nd Street", from: "Columbia Avenue", to: "Witmer Street",
      attests: "built-by",
      basis: "alignment" },

    // The stretch the sheet "establishes" as 3rd St under Ord. 39,578 —
    // modern Miramar by alignment, multiple points matching within meters.
    { kind: "state", name: "third-street", asWritten: "por. of 3rd St. Ord. 39,578",
      street: "Miramar Street", from: "Columbia Avenue", to: "Witmer Street",
      basis: "alignment" }          // planned-by (doc default): designated, not
                                    // shown occupied
  ]
};
