module.exports = {
  id: "mr055-014",
  title: "Map of the Wright & Lynch Tract, Being a Part of Lot 2, Block 37, Hancock's Survey, of the 35 Acre Tract, City of Los Angeles, California",
  shortTitle: "Wright & Lynch Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR055/MR055-014.pdf",
  scan: "documents/mr055-014/mr055-014.pdf",
  transcription: null,

  date: { on: "1893-08-09" },   
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
    [109, 493], [1112, 463], [1109, 1454], [79, 1491]
  ],
  alignment: {
    image: "documents/mr055-014/mr055-014-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.055127, -118.266473], note: "map-tool corner (0,0)" },
      { px: [1117, 0], ll: [34.054001, -118.263924], note: "map-tool corner (1117,0)" },
      { px: [0, 1674], ll: [34.05194, -118.268496], note: "map-tool corner (0,1674)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["7th Street","Hartford Avenue","Ingraham Street","Lucas Avenue","Wilshire Boulevard","Witmer Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SEVENTH STREET",
      "name": "seventh-street",
      "street": "7th Street",
      "from": {
        "px": [
          83,
          1371
        ]
      },
      "to": {
        "px": [
          1109,
          1370
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "Hartford Avenue",
      "from": {
        "px": [
          366,
          1373
        ]
      },
      "to": {
        "px": [
          365,
          1481
        ]
      },
      "note": "No street continues south of Seventh Street on the modern line."
    },
    {
      "kind": "state",
      "asWritten": "INGRAM STREET",
      "street": "Ingraham Street",
      "from": {
        "px": [
          95,
          972
        ]
      },
      "to": {
        "px": [
          1010,
          978
        ]
      },
      "basis": "alignment",
      "name": "ingraham"
    },
    {
      "kind": "state",
      "asWritten": "LUCAS AVENUE",
      "name": "lucas-avenue",
      "street": "Lucas Avenue",
      "from": {
        "px": [
          1011,
          466
        ]
      },
      "to": {
        "px": [
          1009,
          1374
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": [
        "ORANGE STREET",
        "Wilshire Blvd"
      ],
      "street": "Wilshire Boulevard",
      "from": {
        "px": [
          107,
          576
        ]
      },
      "to": {
        "px": [
          1112,
          581
        ]
      },
      "basis": "alignment",
      "note": "\u2605\u2605 THE SAME STRUCK-OUT ANNOTATION AS documents/mr005-566, and between them the two sheets give the ordinance numbers. This label reads, in layers: the plat's own \u201cORANGE\u2026STREET\u201d in capitals (struck); a cursive \u201cWilshire \u2026 Blvd.\u201d with \u201cord 16790\u201d (struck); and then, live and unstruck, \u201cOrange \u2026 St.\u201d with \u201cord 16916\u201d. So Wilshire was written on, cancelled, and Orange re-lettered under a second ordinance number. Assigned to `orange-st-wilshire`, the name in force in June 1893 when the tract was surveyed, and the name the sheet itself ends on.",
      "name": "orange-st-wilshire"
    },
    {
      "kind": "unnamed",
      "street": "Witmer Street",
      "from": {
        "px": [
          227,
          489
        ]
      },
      "to": {
        "px": [
          153,
          1488
        ]
      },
      "note": "The modern alignment runs along lot and tract boundaries without a two-edged roadway."
    }
  ]
};
