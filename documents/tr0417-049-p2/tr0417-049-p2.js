module.exports = {
  id: "tr0417-049-p2",
  title: "Tract No. 14505",
  shortTitle: "Tract No. 14505",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0417/TR0417-049-p2.pdf",
  scan: "documents/tr0417-049-p2/tr0417-049-p2.pdf",
  transcription: null,

  date: { on: "1951-10-21" },   
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
    [120, 295], [73, 2096], [1595, 2247], [1595, 170]
  ],
  alignment: {
    image: "documents/tr0417-049-p2/tr0417-049-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.061412, -118.256819], note: "map-tool corner (0,0)" },
      { px: [1796, 0], ll: [34.060491, -118.254743], note: "map-tool corner (1796,0)" },
      { px: [0, 2498], ll: [34.059002, -118.258355], note: "map-tool corner (0,2498)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["1st Street","2nd Street","Bixel Street","Emerald Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "FIRST ST.",
      "name": "first-street",
      "street": "1st Street",
      "from": {
        "px": [
          111,
          657
        ]
      },
      "to": {
        "px": [
          1595,
          660
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "SECOND ST.",
      "name": "second-street",
      "street": "2nd Street",
      "from": {
        "px": [
          88,
          1524
        ]
      },
      "to": {
        "px": [
          1595,
          2085
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "BIXEL ST.",
      "name": "bixel",
      "street": "Bixel Street",
      "from": {
        "px": [
          375,
          656
        ]
      },
      "to": {
        "px": [
          359,
          1633
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "EMERALD ST.",
      "street": "Emerald Street",
      "from": {
        "px": [
          75,
          2025
        ]
      },
      "to": {
        "px": [
          527,
          1713
        ]
      },
      "basis": "alignment",
      "name": "emerald"
    },
    {
      "kind": "vanished",
      "asWritten": "Boylston St.",
      "trace": [
        [
          1286,
          176
        ],
        [
          1355,
          2033
        ]
      ],
      "basis": "alignment",
      "name": "boylston"
    }
  ]
};
