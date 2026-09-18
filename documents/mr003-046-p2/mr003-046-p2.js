module.exports = {
  id: "mr003-046-p2",
  title: "Plan of Subdivision B of Lot 8, Block 38, Hancock's Survey, the Property of P. Beaudry",
  shortTitle: "P. Beaudry Subdivision B",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-046.pdf",
  scan: "documents/mr003-046-p2/mr003-046-p2.pdf",
  transcription: null,

  date: { on: "1875-05-06" },   
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
    [30, 163], [82, 1024], [954, 1037], [1211, 166]
  ],
  alignment: {
    image: "documents/mr003-046-p2/mr003-046-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.056503, -118.261208], note: "map-tool corner (0,0)" },
      { px: [1757, 0], ll: [34.054348, -118.256204], note: "map-tool corner (1757,0)" },
      { px: [0, 1128], ll: [34.053822, -118.262866], note: "map-tool corner (0,1128)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Saint Paul Avenue","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["5th Street","6th Street","Beaudry Avenue","Bixel Street","Boylston Street","Maryland Street","Saint Paul Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "FIFTH ST.",
      "street": "5th Street",
      "from": {
        "px": [
          54,
          565
        ]
      },
      "to": "Beaudry Avenue",
      "basis": "alignment",
      "name": "fifth-street"
    },
    {
      "kind": "state",
      "asWritten": "WARD ST.",
      "street": "5th Street (south branch)",
      "from": {
        "px": [
          600,
          946
        ]
      },
      "to": {
        "px": [
          985,
          932
        ]
      },
      "basis": "alignment",
      "note": "The southeastern modern branch follows the old Ward Street corridor.",
      "name": "ward-st"
    },
    {
      "kind": "state",
      "asWritten": "WARD ST.",
      "street": "6th Street",
      "from": {
        "px": [
          78,
          950
        ]
      },
      "to": {
        "px": [
          972,
          975
        ]
      },
      "basis": "alignment",
      "name": "ward-st"
    },
    {
      "kind": "absent",
      "street": "Beaudry Avenue",
      "from": {
        "px": [
          1100,
          166
        ]
      },
      "to": {
        "px": [
          961,
          972
        ]
      },
      "note": "The modern avenue crosses the title and descriptive portion of the sheet; no roadway is drawn along it."
    },
    {
      "kind": "state",
      "asWritten": "LAFAYETTE ST.",
      "street": "Bixel Street",
      "from": {
        "px": [
          208,
          163
        ]
      },
      "to": {
        "px": [
          163,
          1025
        ]
      },
      "basis": "alignment",
      "name": "lafayette-bixel",
      "note": "The label is split across the two pages: LAFAYETTE is on this page and ST. continues onto page 1."
    },
    {
      "kind": "state",
      "asWritten": "FIGUEROA ST.",
      "street": "Boylston Street",
      "from": {
        "px": [
          891,
          165
        ]
      },
      "to": {
        "px": [
          804,
          924
        ]
      },
      "basis": "alignment",
      "name": "figueroa-gov",
      "note": "The label is split across the two pages: FIGUEROA is on this page and ST. continues onto page 1."
    },
    {
      "kind": "state",
      "asWritten": "POTTS ST.",
      "street": "Maryland Street",
      "from": {
        "px": [
          32,
          197
        ]
      },
      "to": "Bixel Street",
      "basis": "alignment",
      "name": "potts-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Potts St",
      "trace": [
        [
          211,
          201
        ],
        [
          890,
          199
        ]
      ],
      "basis": "alignment",
      "name": "potts-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Fifth St",
      "trace": [
        [
          888,
          403
        ],
        [
          1132,
          459
        ]
      ],
      "basis": "alignment",
      "name": "fifth-street"
    }
  ]
};
