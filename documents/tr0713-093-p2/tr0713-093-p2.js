module.exports = {
  id: "tr0713-093-p2",
  title: "Tract No. 26922",
  shortTitle: "Tract No. 26922",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0713/TR0713-093-p2.pdf",
  scan: "documents/tr0713-093-p2/tr0713-093-p2.pdf",
  transcription: null,

  date: { on: "1963-12-06" },   
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
    [2, 1153], [261, 1666], [1068, 2160], [1744, 1344],
    [416, 575]
  ],
  alignment: {
    image: "documents/tr0713-093-p2/tr0713-093-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.062468, -118.257943], note: "map-tool corner (0,0)" },
      { px: [1707, 0], ll: [34.062381, -118.253352], note: "map-tool corner (1707,0)" },
      { px: [0, 2402], ll: [34.057078, -118.25809], note: "map-tool corner (0,2402)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Diamond Street","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["1st Street","2nd Street","Beaudry Avenue","Bixel Street","Diamond Street","Emerald Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "FIRST STREET",
      "name": "first-street",
      "street": "1st Street",
      "from": {
        "px": [
          291,
          750
        ]
      },
      "to": {
        "px": [
          1578,
          1544
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "SECOND STREET",
      "name": "second-street",
      "street": "2nd Street",
      "from": {
        "px": [
          64,
          1066
        ]
      },
      "to": {
        "px": [
          1144,
          2068
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "BEAUDRY AVENUE",
      "name": "beaudry-avenue",
      "street": "Beaudry Avenue",
      "from": {
        "px": [
          1537,
          1224
        ]
      },
      "to": {
        "px": [
          960,
          2094
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
          448,
          828
        ]
      },
      "to": {
        "px": [
          227,
          1250
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "EMERALD STREET",
      "street": "Emerald Street",
      "from": {
        "px": [
          100,
          1347
        ]
      },
      "to": {
        "px": [
          283,
          1321
        ]
      },
      "basis": "alignment",
      "name": "emerald"
    },
    {
      "kind": "vanished",
      "asWritten": "Boylston Street",
      "trace": [
        [
          858,
          1022
        ],
        [
          970,
          805
        ]
      ],
      "basis": "alignment",
      "name": "boylston"
    },
    {
      "kind": "vanished",
      "asWritten": "Bixel Street",
      "trace": [
        [
          452,
          825
        ],
        [
          576,
          586
        ]
      ],
      "basis": "alignment",
      "name": "bixel"
    }
  ]
};
