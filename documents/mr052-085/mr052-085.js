module.exports = {
  id: "mr052-085",
  title: "Map of the Subdivision of the Lands of St. Paul's School, Situated in Lot 1, Block 37, Hancock Survey, Lying to the North of Orange Street, Los Angeles, California",
  shortTitle: "St. Paul's School Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR052/MR052-085.pdf",
  scan: "documents/mr052-085/mr052-085.pdf",
  transcription: null,

  date: { on: "1893-01" },   
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
    [15, 1626], [969, 1648], [1014, 545], [50, 560]
  ],
  alignment: {
    image: "documents/mr052-085/mr052-085-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.056243, -118.263432], note: "map-tool corner (0,0)" },
      { px: [1033, 0], ll: [34.055196, -118.260894], note: "map-tool corner (1033,0)" },
      { px: [0, 1674], ll: [34.052811, -118.265465], note: "map-tool corner (0,1674)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["6th Street","Bixel Street","Lucas Avenue","Wilshire Boulevard"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SIXTH",
      "name": "sixth-street",
      "street": "6th Street",
      "from": {
        "px": [
          47,
          646
        ]
      },
      "to": {
        "px": [
          1010,
          653
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "BIXEL STREET",
      "name": "bixel",
      "street": "Bixel Street",
      "from": {
        "px": [
          899,
          547
        ]
      },
      "to": {
        "px": [
          792,
          1644
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "LUCAS",
      "name": "lucas-avenue",
      "street": "Lucas Avenue",
      "from": {
        "px": [
          183,
          558
        ]
      },
      "to": {
        "px": [
          157,
          1629
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "ORANGE",
      "name": "orange-st-wilshire",
      "street": "Wilshire Boulevard",
      "from": {
        "px": [
          19,
          1499
        ]
      },
      "to": {
        "px": [
          974,
          1529
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "vanished-unnamed",
      "trace": [
        [
          166,
          1114
        ],
        [
          20,
          1117
        ]
      ],
      "basis": "alignment"
    }
  ]
};
