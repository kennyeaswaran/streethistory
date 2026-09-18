module.exports = {
  id: "tr0006-051a",
  title: "Map of the Agnes L. Cline Tract in the City of Los Angeles, Cal.",
  shortTitle: "Agnes L. Cline Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0006/TR0006-051A.pdf",
  scan: "documents/tr0006-051a/tr0006-051a.pdf",
  transcription: null,

  date: { on: "1904-12-13" },   
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
    [-8, 892], [229, 1693], [864, 1673], [1152, 860]
  ],
  alignment: {
    image: "documents/tr0006-051a/tr0006-051a-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.056649, -118.228242], note: "map-tool corner (0,0)" },
      { px: [1182, 0], ll: [34.056157, -118.226834], note: "map-tool corner (1182,0)" },
      { px: [0, 1842], ll: [34.054818, -118.22916], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Cesar E Chavez Avenue","Keller Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "MACY ST.",
      "name": "macy-street",
      "street": "Cesar E Chavez Avenue",
      "from": {
        "px": [
          47,
          1076
        ]
      },
      "to": {
        "px": [
          1068,
          1098
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "state",
      "asWritten": "KELLER ST.",
      "name": "keller",
      "street": "Keller Street",
      "from": {
        "px": [
          542,
          1327
        ]
      },
      "to": {
        "px": [
          477,
          1685
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "vanished",
      "asWritten": "KELLER ST.",
      "name": "keller",
      "trace": [
        [
          714,
          1093
        ],
        [
          542,
          1327
        ]
      ],
      "basis": "alignment",
      "confirmed": true,
      "note": "The historical roadway continues north-west to Macy Street beyond the present Keller Street endpoint."
    }
  ]
};
