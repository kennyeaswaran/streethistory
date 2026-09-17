module.exports = {
  id: "mr018-063",
  title: "Map of Orange Heights, Los Angeles, California",
  shortTitle: "Orange Heights",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR018/MR018-063.pdf",
  scan: "documents/mr018-063/mr018-063.pdf",
  transcription: null,

  date: { on: "1887-06-21" },   
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
    [132, 416], [120, 991], [416, 1003], [450, 1348],
    [809, 1373], [815, 966], [1094, 965], [1048, 360]
  ],
  alignment: {
    image: "documents/mr018-063/mr018-063-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.058473, -118.267226], note: "map-tool corner (0,0)" },
      { px: [1071, 0], ll: [34.056277, -118.262318], note: "map-tool corner (1071,0)" },
      { px: [0, 1644], ll: [34.052186, -118.271266], note: "map-tool corner (0,1644)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Columbia Avenue","from":null,"to":null},{"street":"Hartford Avenue","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["6th Street","7th Street","Columbia Avenue","Hartford Avenue","Ingraham Street","Lucas Avenue","Shatto Street","Valencia Street","Wilshire Boulevard","Witmer Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Ward Street",
      "street": "6th Street",
      "from": {
        "px": [
          131,
          466
        ]
      },
      "to": {
        "px": [
          1054,
          444
        ]
      },
      "basis": "alignment",
      "name": "ward-st"
    },
    {
      "kind": "state",
      "asWritten": "Seventh Street",
      "name": "seventh-street",
      "street": "7th Street",
      "from": {
        "px": [
          444,
          1291
        ]
      },
      "to": {
        "px": [
          810,
          1292
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Ventura Street",
      "street": "Ingraham Street",
      "from": {
        "px": [
          425,
          1092
        ]
      },
      "to": {
        "px": [
          813,
          1094
        ]
      },
      "basis": "alignment",
      "name": "ventura-ingraham"
    },
    {
      "kind": "state",
      "asWritten": "Lucas Ave",
      "name": "lucas-avenue",
      "street": "Lucas Avenue",
      "from": {
        "px": [
          991,
          363
        ]
      },
      "to": {
        "px": [
          997,
          965
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Sixth Street",
      "street": "Shatto Street",
      "from": {
        "px": [
          126,
          685
        ]
      },
      "to": {
        "px": [
          605,
          691
        ]
      },
      "basis": "alignment",
      "name": "sixth-street"
    },
    {
      "kind": "state",
      "asWritten": "Vernon Ave",
      "street": "Valencia Street",
      "from": {
        "px": [
          233,
          464
        ]
      },
      "to": {
        "px": [
          230,
          896
        ]
      },
      "basis": "alignment",
      "name": "vernon-ave"
    },
    {
      "kind": "state",
      "asWritten": "Orange Street",
      "name": "orange-st-wilshire",
      "street": "Wilshire Boulevard",
      "from": {
        "px": [
          122,
          895
        ]
      },
      "to": {
        "px": [
          1089,
          897
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Logan Ave",
      "street": "Witmer Street",
      "from": {
        "px": [
          589,
          388
        ]
      },
      "to": {
        "px": [
          572,
          1356
        ]
      },
      "basis": "alignment",
      "name": "logan-ave"
    },
    {
      "kind": "vanished",
      "asWritten": "Sixth St",
      "trace": [
        [
          599,
          692
        ],
        [
          997,
          683
        ]
      ],
      "basis": "alignment",
      "name": "sixth-street"
    }
  ]
};
