module.exports = {
  id: "11824",
  title: "Los Angeles : Botiller and Reyes lots east side of Main Street",
  shortTitle: "Botiller and Reyes lots",
  url: "https://hdl.huntington.org/digital/collection/p15150coll4/id/11824",
  scan: "documents/11824/11824.jpg",
  transcription: null,

  date: { on: "1873" },   
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
    [321, 5761], [2155, 6056], [3502, -28], [386, 50]
  ],
  alignment: {
    image: "documents/11824/11824.jpg",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.045547, -118.253188], note: "map-tool corner (0,0)" },
      { px: [8999, 0], ll: [34.041308, -118.246664], note: "map-tool corner (8999,0)" },
      { px: [0, 7958], ll: [34.040732, -118.257679], note: "map-tool corner (0,7958)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["7th Street","8th Street","9th Street","Main Street","Spring Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "7th Street",
      "street": "7th Street",
      "from": {
        "px": [
          381,
          475
        ]
      },
      "to": {
        "px": [
          3390,
          477
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern trace follows the roadway lettered 7th Street; the lettering is mirror-reversed in the scan.",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "asWritten": "8th Street",
      "street": "8th Street",
      "from": {
        "px": [
          354,
          2856
        ]
      },
      "to": "Main Street",
      "basis": "alignment",
      "note": "The aligned modern trace follows the roadway lettered 8th Street; the lettering is mirror-reversed in the scan.",
      "name": "eighth-street"
    },
    {
      "kind": "absent",
      "street": "8th Street",
      "from": "Main Street",
      "to": {
        "px": [
          2831,
          3004
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern trace follows the roadway lettered 8th Street; the lettering is mirror-reversed in the scan."
    },
    {
      "kind": "state",
      "asWritten": "9th Street",
      "street": "9th Street",
      "from": {
        "px": [
          327,
          5244
        ]
      },
      "to": "Main Street",
      "basis": "alignment",
      "note": "The aligned modern trace follows the roadway lettered 9th Street; the lettering is mirror-reversed in the scan.",
      "name": "ninth-street"
    },
    {
      "kind": "state",
      "asWritten": "Moran's Lane",
      "street": "9th Street",
      "from": "Main Street",
      "to": {
        "px": [
          2300,
          5401
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern trace follows the roadway lettered 9th Street; the lettering is mirror-reversed in the scan.",
      "name": "moran-s-lane"
    },
    {
      "kind": "state",
      "asWritten": "Main Street",
      "street": "Main Street",
      "from": {
        "px": [
          2880,
          -12
        ]
      },
      "to": {
        "px": [
          1438,
          5941
        ]
      },
      "basis": "alignment",
      "note": "The modern line stays within the roadway lettered Main Street; the lettering is mirror-reversed in the scan.",
      "name": "main-street-dtla"
    },
    {
      "kind": "state",
      "asWritten": "Spring Street",
      "street": "Spring Street",
      "from": {
        "px": [
          1537,
          21
        ]
      },
      "to": {
        "px": [
          1600,
          5268
        ]
      },
      "basis": "alignment",
      "note": "The modern line stays within the roadway lettered Spring Street; the lettering is mirror-reversed in the scan.",
      "name": "spring"
    }
  ]
};
