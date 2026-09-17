module.exports = {
  id: "mr007-096-p2",
  title: "Map of Bentley & Crippens Subdivision of the East Half of Lot 7, Block 38, Hancock's Survey, Los Angeles, California",
  shortTitle: "Bentley & Crippens Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-096.pdf",
  scan: "documents/mr007-096-p2/mr007-096-p2.pdf",
  transcription: null,

  date: { on: "1886-04-01" },   
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
    [128, -12], [904, -34], [944, 1731], [129, 1719]
  ],
  alignment: {
    image: "documents/mr007-096-p2/mr007-096-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.05987, -118.263772], note: "map-tool corner (0,0)" },
      { px: [1123, 0], ll: [34.05845, -118.260418], note: "map-tool corner (1123,0)" },
      { px: [0, 1678], ll: [34.055688, -118.266315], note: "map-tool corner (0,1678)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"5th Street","from":null,"to":null},{"street":"Maryland Street","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["3rd Street","4th Street","5th Street","6th Street","Hartford Avenue","Lucas Avenue","Maryland Street","Witmer Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Arnold St",
      "street": "3rd Street",
      "from": {
        "px": [
          128,
          223
        ]
      },
      "to": {
        "px": [
          910,
          211
        ]
      },
      "basis": "alignment",
      "name": "arnold"
    },
    {
      "kind": "state",
      "street": "4th Street",
      "from": {
        "px": [
          828,
          562
        ]
      },
      "to": {
        "px": [
          918,
          562
        ]
      },
      "basis": "alignment",
      "note": "A short roadway is drawn from the curved street to Lucas Avenue without a legible name.",
      "asWritten": "Fourth St",
      "name": "fourth-street"
    },
    {
      "kind": "state",
      "asWritten": "Fifth St",
      "name": "fifth-street",
      "street": "5th Street",
      "from": {
        "px": [
          208,
          1422
        ]
      },
      "to": {
        "px": [
          832,
          1418
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Ward St",
      "street": "6th Street",
      "from": {
        "px": [
          129,
          1644
        ]
      },
      "to": {
        "px": [
          942,
          1638
        ]
      },
      "basis": "alignment",
      "name": "ward-st"
    },
    {
      "kind": "state",
      "asWritten": "Fourth St",
      "street": "Hartford Avenue",
      "from": {
        "px": [
          469,
          1640
        ]
      },
      "to": {
        "px": [
          557,
          727
        ]
      },
      "basis": "alignment",
      "name": "fourth-street"
    },
    {
      "kind": "absent",
      "street": "Hartford Avenue",
      "from": {
        "px": [
          557,
          727
        ]
      },
      "to": {
        "px": [
          830,
          719
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Lucas",
      "name": "lucas-avenue",
      "street": "Lucas Avenue",
      "from": {
        "px": [
          830,
          -32
        ]
      },
      "to": {
        "px": [
          831,
          1729
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Nichols Ave",
      "street": "Witmer Street",
      "from": {
        "px": [
          211,
          -14
        ]
      },
      "to": {
        "px": [
          230,
          1720
        ]
      },
      "basis": "alignment",
      "name": "nichols-ave"
    },
    {
      "kind": "vanished",
      "asWritten": "Fourth St",
      "trace": [
        [
          556,
          726
        ],
        [
          639,
          568
        ],
        [
          829,
          560
        ]
      ],
      "basis": "alignment",
      "name": "fourth-street"
    }
  ]
};
