// SEED DOCUMENT, written 2026-09-17 so the sheet opens in the map tool at
// roughly the right place. The alignment here is scale + rotation derived from
// the sheet's own printed scale and courses, with the page centre dropped on
// the tract's recorded footprint centre — the POSITION has not been checked
// against the scan. See PLACEMENT.md in this folder.
//
// The coverage ring is PROVISIONAL: it is the tract's recorded footprint
// (County land-records layer / assessor parcel hull) projected into scan pixels
// through this same seed alignment, written so the model has a polygon to check.
// It is NOT a human trace. Re-trace it in the map tool once the placement is
// confirmed — the ring is stored in scan pixels, so dragging the sheet carries
// it along and it will not correct itself.
module.exports = {
  id: "mr005-405",
  title: "Plan of the Truman Tract of Los Angeles City (surveyed 18 June 1883 by Geo. Butler Griffin C.E.; re-arranged 11 January 1884 by W. R. Blackman)",
  shortTitle: "Truman Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-405.pdf",
  scan: "documents/mr005-405/mr005-405.pdf",
  transcription: null,

  date: { on: "1884-01-12" },   
  // §4.1a. Whatever this tool saves has a sheet under it — that is what the
  // tool is for — but a loaded document's own declaration wins, so re-saving
  // one this tool should not have opened cannot quietly reclassify it.
  form: "drawn",
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  readBy: "human",

  // Coverage is the ground this document informs about — the tract boundary,
  // not the sheet edge (MODEL-SPEC §4.4). SCAN PIXELS against alignment.image,
  // so a better alignment carries it along (§4.6).
  coverage: [
    [303, 1653], [1012, 1626], [1097, 138], [330, 600]
  ],
  alignment: {
    image: "documents/mr005-405/mr005-405-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.050495, -118.267108], note: "map-tool corner (0,0)" },
      { px: [1113, 0], ll: [34.049763, -118.265492], note: "map-tool corner (1113,0)" },
      { px: [0, 1694], ll: [34.048442, -118.268443], note: "map-tool corner (0,1694)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["8th Place","Golden Avenue","James M Wood Boulevard"],

  rows: [
    {
      "kind": "absent",
      "street": "8th Place",
      "from": {
        "px": [
          327,
          733
        ]
      },
      "to": {
        "px": [
          1024,
          1408
        ]
      },
      "note": "The curving modern trace crosses numbered lot interiors and the Willow Street corridor; no corresponding roadway is drawn."
    },
    {
      "kind": "state",
      "asWritten": "Willow Street",
      "street": "Golden Avenue",
      "from": {
        "px": [
          712,
          1146
        ]
      },
      "to": {
        "px": [
          697,
          1521
        ]
      },
      "basis": "alignment",
      "note": "The modern Golden Avenue segment follows the southern part of the roadway lettered Willow Street.",
      "name": "willow-golden"
    },
    {
      "kind": "state",
      "asWritten": "Ninth Street",
      "street": "James M Wood Boulevard",
      "from": {
        "px": [
          306,
          1517
        ]
      },
      "to": {
        "px": [
          1016,
          1549
        ]
      },
      "basis": "alignment",
      "name": "ninth-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Willow Street",
      "trace": [
        [
          719,
          304
        ],
        [
          712,
          1146
        ]
      ],
      "basis": "alignment",
      "note": "North of the modern Golden Avenue segment, the same historical roadway continues through the tract without a modern counterpart in the supplied street set.",
      "name": "willow-golden"
    }
  ]
};
