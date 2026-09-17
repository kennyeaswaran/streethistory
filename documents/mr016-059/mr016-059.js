module.exports = {
  id: "mr016-059",
  title: "Map of the Chadwick Subdivision of Blocks 1 and 12, Woolen Mill Tract, Los Angeles City, Cal.",
  shortTitle: "Chadwick Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR016/MR016-059.pdf",
  scan: "documents/mr016-059/mr016-059.pdf",
  transcription: null,

  date: { on: "1886-12" },   
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
    [870, 417], [159, 519], [153, 1170], [988, 1162]
  ],
  alignment: {
    image: "documents/mr016-059/mr016-059-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.056757, -118.259937], note: "map-tool corner (0,0)" },
      { px: [1090, 0], ll: [34.058595, -118.258076], note: "map-tool corner (1090,0)" },
      { px: [0, 1682], ll: [34.05436, -118.256538], note: "map-tool corner (0,1682)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["3rd Street","4th Street","Beaudry Avenue","Boylston Street","Huntley Drive","Miramar Street"],

  rows: [
    {
      "kind": "absent",
      "street": "3rd Street",
      "from": {
        "px": [
          485,
          472
        ]
      },
      "to": "Beaudry Avenue",
      "note": "The modern diagonal crosses Block 12 rather than following a mapped street."
    },
    {
      "kind": "state",
      "street": "3rd Street",
      "from": "Beaudry Avenue",
      "to": {
        "px": [
          731,
          1164
        ]
      },
      "note": "The modern diagonal crosses Block 12 rather than following a mapped street.",
      "basis": "alignment",
      "asWritten": "3d Street",
      "name": "third-street"
    },
    {
      "kind": "absent",
      "street": "4th Street",
      "from": {
        "px": [
          428,
          480
        ]
      },
      "to": {
        "px": [
          153,
          1140
        ]
      },
      "note": "The modern diagonal crosses lots and only intersects the older streets."
    },
    {
      "kind": "state",
      "asWritten": "Canal Street",
      "street": "Beaudry Avenue",
      "from": {
        "px": [
          964,
          1011
        ]
      },
      "to": {
        "px": [
          154,
          1024
        ]
      },
      "basis": "alignment",
      "name": "canal-street-beaudry"
    },
    {
      "kind": "state",
      "asWritten": "Figueroa Street",
      "name": "figueroa-gov",
      "street": "Boylston Street",
      "from": {
        "px": [
          713,
          572
        ]
      },
      "to": {
        "px": [
          157,
          692
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "street": "Huntley Drive",
      "from": {
        "px": [
          888,
          532
        ]
      },
      "to": {
        "px": [
          713,
          572
        ]
      },
      "basis": "alignment",
      "note": "A short road segment is drawn, but its lettering is not legible.",
      "asWritten": "Figueroa Street",
      "name": "figueroa-gov"
    },
    {
      "kind": "state",
      "asWritten": "3d Street",
      "street": "Miramar Street",
      "from": {
        "px": [
          730,
          437
        ]
      },
      "to": {
        "px": [
          728,
          1012
        ]
      },
      "basis": "alignment",
      "name": "third-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Ida Street",
      "trace": [
        [
          289,
          664
        ],
        [
          298,
          1017
        ]
      ],
      "basis": "alignment",
      "name": "ida-street-fourth"
    }
  ]
};
