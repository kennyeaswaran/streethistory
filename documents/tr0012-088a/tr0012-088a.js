module.exports = {
  id: "tr0012-088a",
  title: "Map of the Cathedral Property in the City of Los Angeles, County of Los Angeles, State of California",
  shortTitle: "Cathedral Property",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0012/TR0012-088A.pdf",
  scan: "documents/tr0012-088a/tr0012-088a.pdf",
  transcription: null,

  date: { on: "1907-01" },   
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
    [43, 660], [722, 620], [1219, 730], [1186, 1552],
    [104, 1653]
  ],
  alignment: {
    image: "documents/tr0012-088a/tr0012-088a-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.052644, -118.270961], note: "map-tool corner (0,0)" },
      { px: [1148, 0], ll: [34.051747, -118.268915], note: "map-tool corner (1148,0)" },
      { px: [0, 1842], ll: [34.049904, -118.272685], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["8th Street","Columbia Avenue","Green Avenue","James M Wood Boulevard","Valencia Street"],

  rows: [
    {
      "kind": "absent",
      "street": "8th Street",
      "from": {
        "px": [
          394,
          639
        ]
      },
      "to": "Valencia Street",
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "EIGHTH ST.",
      "name": "eighth-street",
      "street": "8th Street",
      "from": "Valencia Street",
      "to": {
        "px": [
          1214,
          843
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "WHITTIER ST.",
      "street": "Columbia Avenue",
      "from": {
        "px": [
          1029,
          688
        ]
      },
      "to": "James M Wood Boulevard",
      "basis": "alignment",
      "name": "whittier-columbia"
    },
    {
      "kind": "state",
      "asWritten": "GREEN AVE.",
      "street": "Green Avenue",
      "from": {
        "px": [
          214,
          650
        ]
      },
      "to": "James M Wood Boulevard",
      "basis": "alignment",
      "name": "green-ave"
    },
    {
      "kind": "state",
      "asWritten": "NINTH ST.",
      "name": "ninth-street",
      "street": "James M Wood Boulevard",
      "from": {
        "px": [
          92,
          1464
        ]
      },
      "to": {
        "px": [
          1189,
          1479
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "VALENCIA ST.",
      "name": "valencia-street-poindexter",
      "street": "Valencia Street",
      "from": "James M Wood Boulevard",
      "to": {
        "px": [
          557,
          1611
        ]
      },
      "basis": "alignment"
    }
  ]
};
