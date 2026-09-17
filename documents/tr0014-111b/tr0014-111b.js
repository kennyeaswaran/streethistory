module.exports = {
  id: "tr0014-111b",
  title: "Tract No. 320",
  shortTitle: "Tract No. 320",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0014/TR0014-111b.pdf",
  scan: "documents/tr0014-111b/tr0014-111b.pdf",
  transcription: null,

  date: { on: "1908-11" },   
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
    [176, 513], [192, 1221], [1114, 1277], [1127, 799]
  ],
  alignment: {
    image: "documents/tr0014-111b/tr0014-111b-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.054579, -118.238839], note: "map-tool corner (0,0)" },
      { px: [1129, 0], ll: [34.054503, -118.23511], note: "map-tool corner (1129,0)" },
      { px: [0, 1842], ll: [34.049503, -118.238987], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Alameda Street","Ducommun Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "ALAMEDA ST.",
      "name": "alameda-st",
      "street": "Alameda Street",
      "from": {
        "px": [
          269,
          541
        ]
      },
      "to": {
        "px": [
          263,
          1225
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Ducommun ST.",
      "street": "Ducommun Street",
      "from": {
        "px": [
          395,
          623
        ]
      },
      "to": {
        "px": [
          768,
          691
        ]
      },
      "basis": "alignment",
      "name": "ducommun"
    },
    {
      "kind": "vanished",
      "asWritten": "Nina St",
      "trace": [
        [
          272,
          628
        ],
        [
          1024,
          940
        ]
      ],
      "basis": "alignment",
      "name": "nina-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Lafayette St",
      "trace": [
        [
          1029,
          1263
        ],
        [
          1034,
          761
        ]
      ],
      "basis": "alignment",
      "name": "lafayette-french"
    },
    {
      "kind": "vanished",
      "asWritten": "Jackson St",
      "trace": [
        [
          264,
          1202
        ],
        [
          1022,
          1201
        ]
      ],
      "basis": "alignment",
      "name": "jackson-st"
    }
  ]
};
