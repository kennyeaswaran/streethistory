module.exports = {
  id: "mr003-240",
  title: "Map of Block 35½, Being an Extension of Ord's Survey of the City of Los Angeles",
  shortTitle: "Block 35½, Ord's Survey",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-240.pdf",
  scan: "documents/mr003-240/mr003-240.pdf",
  transcription: null,

  date: { on: "1876-07-20" },   
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
    [1440, -5], [1614, 523], [1627, 1091], [107, 1174],
    [263, 470]
  ],
  alignment: {
    image: "documents/mr003-240/mr003-240-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.059638, -118.244399], note: "map-tool corner (0,0)" },
      { px: [1730, 0], ll: [34.063566, -118.24241], note: "map-tool corner (1730,0)" },
      { px: [0, 1123], ll: [34.058561, -118.241342], note: "map-tool corner (0,1123)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Cesar E Chavez Avenue","Hill Place","Hill Street","Ord Street","Yale Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Short St",
      "street": "Cesar E Chavez Avenue",
      "from": {
        "px": [
          332,
          442
        ]
      },
      "to": {
        "px": [
          198,
          1169
        ]
      },
      "basis": "alignment",
      "name": "short-street-chavez"
    },
    {
      "kind": "state",
      "asWritten": "Rosas Street",
      "street": "Hill Place",
      "from": "Cesar E Chavez Avenue",
      "to": {
        "px": [
          1463,
          64
        ]
      },
      "basis": "alignment",
      "name": "rosas-street"
    },
    {
      "kind": "state",
      "asWritten": "Castellar Street",
      "street": "Hill Street",
      "from": {
        "px": [
          126,
          1089
        ]
      },
      "to": {
        "px": [
          1625,
          1017
        ]
      },
      "basis": "alignment",
      "name": "castelar"
    },
    {
      "kind": "state",
      "asWritten": "High St",
      "street": "Ord Street",
      "from": "Hill Place",
      "to": "Hill Street",
      "basis": "alignment",
      "name": "high-street-chinatown"
    },
    {
      "kind": "state",
      "asWritten": "Yale Street",
      "street": "Yale Street",
      "from": "Ord Street",
      "to": {
        "px": [
          1615,
          551
        ]
      },
      "basis": "alignment",
      "name": "yale"
    },
    {
      "kind": "vanished",
      "asWritten": "Teed Street",
      "trace": [
        [
          333,
          770
        ],
        [
          916,
          770
        ]
      ],
      "basis": "alignment",
      "name": "teed-street"
    }
  ]
};
