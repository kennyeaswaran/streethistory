module.exports = {
  id: "tr0014-013b",
  title: "Tract No. 235, Being a Subdivision of a Portion of Lot 8, Block 37, Hancock Survey",
  shortTitle: "Tract No. 235",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0014/TR0014-013B.pdf",
  scan: "documents/tr0014-013b/tr0014-013b.pdf",
  transcription: null,

  date: { on: "1908-06" },   
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
    [167, 457], [268, 1453], [402, 1603], [927, 1577],
    [827, 335]
  ],
  alignment: {
    image: "documents/tr0014-013b/tr0014-013b-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.052964, -118.266042], note: "map-tool corner (0,0)" },
      { px: [1129, 0], ll: [34.051773, -118.263402], note: "map-tool corner (1129,0)" },
      { px: [0, 1842], ll: [34.04937, -118.268371], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["7th Street","8th Street","Lucas Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SEVENTH ST.",
      "name": "seventh-street",
      "street": "7th Street",
      "from": {
        "px": [
          176,
          548
        ]
      },
      "to": {
        "px": [
          842,
          523
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "EIGHTH ST.",
      "name": "eighth-street",
      "street": "8th Street",
      "from": {
        "px": [
          339,
          1533
        ]
      },
      "to": {
        "px": [
          897,
          1198
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "LUCAS ST.",
      "name": "lucas-avenue",
      "street": "Lucas Avenue",
      "from": {
        "px": [
          384,
          417
        ]
      },
      "to": "7th Street",
      "basis": "alignment"
    },
    {
      "kind": "vanished",
      "asWritten": "GOLDEN AVE.",
      "trace": [
        [
          522,
          1444
        ],
        [
          549,
          1610
        ]
      ],
      "basis": "alignment",
      "note": "Golden Avenue leaves Eighth Street southward, with no supplied modern street following its corridor.",
      "name": "golden-avenue"
    }
  ]
};
