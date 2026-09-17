module.exports = {
  id: "tr0026-074",
  title: "Tract No. 2643",
  shortTitle: "Tract No. 2643",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0026/TR0026-074.pdf",
  scan: "documents/tr0026-074/tr0026-074.pdf",
  transcription: null,

  date: { on: "1914-04" },   
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
    [184, 385], [162, 1507], [1207, 1498], [1102, 261]
  ],
  alignment: {
    image: "documents/tr0026-074/tr0026-074-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.067608, -118.240644], note: "map-tool corner (0,0)" },
      { px: [1152, 0], ll: [34.066792, -118.238556], note: "map-tool corner (1152,0)" },
      { px: [0, 1842], ll: [34.064824, -118.242207], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Adobe Street","Arroyo Seco Parkway","Cleveland Street","College Street","New Depot Street","Yale Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "ADOBE ST.",
      "name": "adobe",
      "street": "Adobe Street",
      "from": {
        "px": [
          320,
          825
        ]
      },
      "to": {
        "px": [
          349,
          1361
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "Arroyo Seco Parkway",
      "from": {
        "px": [
          178,
          686
        ]
      },
      "to": {
        "px": [
          401,
          356
        ]
      },
      "note": "The parkway crosses the map diagonally and does not follow a drawn street."
    },
    {
      "kind": "state",
      "asWritten": "CLEVELAND ST.",
      "street": "Cleveland Street",
      "from": {
        "px": [
          584,
          1355
        ]
      },
      "to": {
        "px": [
          588,
          1503
        ]
      },
      "basis": "alignment",
      "name": "cleveland-st"
    },
    {
      "kind": "state",
      "asWritten": "COLLEGE ST.",
      "name": "college",
      "street": "College Street",
      "from": {
        "px": [
          165,
          1369
        ]
      },
      "to": {
        "px": [
          1193,
          1330
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "unnamed",
      "street": "New Depot Street",
      "from": {
        "px": [
          349,
          1361
        ]
      },
      "to": {
        "px": [
          353,
          1505
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "YALE ST.",
      "name": "yale",
      "street": "Yale Street",
      "from": {
        "px": [
          965,
          280
        ]
      },
      "to": {
        "px": [
          1014,
          1500
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "vanished",
      "asWritten": "Adobe St",
      "trace": [
        [
          319,
          830
        ],
        [
          301,
          361
        ]
      ],
      "basis": "alignment",
      "name": "adobe"
    }
  ]
};
