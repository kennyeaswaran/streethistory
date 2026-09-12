module.exports = {
  id: "tr0013-048",
  title: "Map of the Ulm Tract",
  shortTitle: "Ulm Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0013/TR0013-048.pdf",
  scan: "documents/tr0013-048/tr0013-048.pdf",
  transcription: null,

  date: { on: "1907-10-04" },   
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
    [267, 595], [221, 1042], [1005, 1097], [1052, 618]
  ],
  alignment: {
    image: "documents/tr0013-048/tr0013-048-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.041224, -118.24791], note: "map-tool corner (0,0)" },
      { px: [1157, 0], ll: [34.039129, -118.244939], note: "map-tool corner (1157,0)" },
      { px: [0, 1842], ll: [34.037277, -118.251906], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  rows: [
    {
      "kind": "state",
      "asWritten": "EIGHTH ST",
      "street": "8th Street",
      "from": {
        "px": [
          236,
          895
        ]
      },
      "to": {
        "px": [
          1011,
          1040
        ]
      },
      "basis": "alignment",
      "name": "eighth-street"
    },
    {
      "kind": "state",
      "asWritten": "CROCKER ST",
      "street": "Crocker Street",
      "from": {
        "px": [
          694,
          608
        ]
      },
      "to": {
        "px": [
          685,
          1013
        ]
      },
      "basis": "alignment",
      "name": "crocker-street"
    },
    {
      "kind": "state",
      "asWritten": "SAN PEDRO ST",
      "street": "San Pedro Street",
      "from": {
        "px": [
          370,
          598
        ]
      },
      "to": {
        "px": [
          358,
          1052
        ]
      },
      "basis": "alignment",
      "name": "san-pedro"
    },
    {
      "kind": "state",
      "asWritten": "TOWNE AVE",
      "street": "Towne Avenue",
      "from": {
        "px": [
          985,
          616
        ]
      },
      "to": {
        "px": [
          985,
          1037
        ]
      },
      "basis": "alignment",
      "name": "towne-ave"
    }
  ]
};
