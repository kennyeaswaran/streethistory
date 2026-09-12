module.exports = {
  id: "tr0105-001-p2",
  title: "Tract No. 8657 in the City of Los Angeles",
  shortTitle: "Tract No. 8657",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0105/TR0105-001.pdf",
  scan: "documents/tr0105-001-p2/tr0105-001-p2.pdf",
  transcription: null,

  date: { on: "1924-10-16" },   
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
    [384, 498], [235, 1555], [2048, 1484], [2211, 476]
  ],
  alignment: {
    image: "documents/tr0105-001-p2/tr0105-001-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.034061, -118.247797], note: "map-tool corner (0,0)" },
      { px: [2370, 0], ll: [34.036302, -118.24593], note: "map-tool corner (2370,0)" },
      { px: [0, 1746], ll: [34.032914, -118.245818], note: "map-tool corner (0,1746)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["8th Street","Ceres Avenue","Kohler Street","Olympic Boulevard"],

  rows: [
    {
      "kind": "state",
      "asWritten": "EIGHTH STREET",
      "street": "8th Street",
      "from": {
        "px": [
          1976,
          479
        ]
      },
      "to": {
        "px": [
          1791,
          1494
        ]
      },
      "basis": "alignment",
      "name": "eighth-street"
    },
    {
      "kind": "unnamed",
      "street": "Ceres Avenue",
      "from": {
        "px": [
          1948,
          686
        ]
      },
      "to": {
        "px": [
          2177,
          689
        ]
      },
      "note": "This short modern Ceres segment lies south of the plotted CERES AVENUE corridor and has no drawn street along it."
    },
    {
      "kind": "state",
      "asWritten": "KOHLER STREET",
      "street": "Kohler Street",
      "from": {
        "px": [
          387,
          1351
        ]
      },
      "to": {
        "px": [
          2068,
          1357
        ]
      },
      "basis": "alignment",
      "name": "kohler"
    },
    {
      "kind": "state",
      "asWritten": "NINTH STREET",
      "street": "Olympic Boulevard",
      "from": {
        "px": [
          498,
          497
        ]
      },
      "to": {
        "px": [
          351,
          1550
        ]
      },
      "basis": "alignment",
      "note": "Modern Olympic Boulevard follows the roadway lettered NINTH STREET.",
      "name": "ninth-street"
    },
    {
      "kind": "vanished",
      "asWritten": "CERES AVENUE",
      "trace": [
        [
          295,
          694
        ],
        [
          1959,
          563
        ]
      ],
      "basis": "alignment",
      "note": "The mapped Ceres Avenue corridor crosses the northern edge of coverage, apart from the supplied modern Ceres segment.",
      "name": "ceres-ave"
    }
  ]
};
