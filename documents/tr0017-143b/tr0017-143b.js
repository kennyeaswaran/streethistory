module.exports = {
  id: "tr0017-143b",
  title: "Boylston Heights Tract",
  shortTitle: "Boylston Heights Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0017/TR0017-143b.pdf",
  scan: "documents/tr0017-143b/tr0017-143b.pdf",
  transcription: null,

  date: { on: "1911-04-22" },   
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
    [416, 729], [405, 1529], [827, 1548], [840, 694]
  ],
  alignment: {
    image: "documents/tr0017-143b/tr0017-143b-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.065175, -118.254604], note: "map-tool corner (0,0)" },
      { px: [1150, 0], ll: [34.06367, -118.251139], note: "map-tool corner (1150,0)" },
      { px: [0, 1842], ll: [34.060545, -118.257492], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Boylston Street","Colton Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "BOYLSTON ST.",
      "name": "boylston",
      "street": "Boylston Street",
      "from": {
        "px": [
          536,
          719
        ]
      },
      "to": {
        "px": [
          516,
          972
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "COLTON ST.",
      "street": "Colton Street",
      "from": {
        "px": [
          413,
          978
        ]
      },
      "to": {
        "px": [
          516,
          972
        ]
      },
      "basis": "alignment",
      "name": "colton-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Colton St",
      "trace": [
        [
          515,
          970
        ],
        [
          842,
          970
        ]
      ],
      "basis": "alignment",
      "name": "colton-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Boylston St",
      "trace": [
        [
          528,
          969
        ],
        [
          528,
          1540
        ]
      ],
      "basis": "alignment",
      "name": "boylston"
    },
    {
      "kind": "vanished",
      "asWritten": "Mignoette St",
      "trace": [
        [
          858,
          1325
        ],
        [
          528,
          1332
        ]
      ],
      "basis": "alignment",
      "name": "mignonette-st"
    }
  ]
};
