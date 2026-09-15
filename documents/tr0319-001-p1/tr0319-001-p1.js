module.exports = {
  id: "tr0319-001-p1",
  title: "Tract No. 14928",
  shortTitle: "Tract No. 14928",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0319/TR0319-001.pdf",
  scan: "documents/tr0319-001-p1/tr0319-001-p1.pdf",
  transcription: null,

  date: { on: "1948-03-01" },   
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
    [-115, 655], [-75, 2448], [1040, 2421], [1150, 1980],
    [328, 710]
  ],
  alignment: {
    image: "documents/tr0319-001-p1/tr0319-001-p1-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.041442, -118.231227], note: "map-tool corner (0,0)" },
      { px: [1796, 0], ll: [34.041662, -118.228275], note: "map-tool corner (1796,0)" },
      { px: [0, 2484], ll: [34.038035, -118.230863], note: "map-tool corner (0,2484)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["6th Street","Mesquit Street","Palmetto Street","Santa Fe Avenue","Willow Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SIXTH STREET",
      "street": "6th Street",
      "from": {
        "px": [
          0,
          2212
        ]
      },
      "to": {
        "px": [
          1045,
          2235
        ]
      },
      "basis": "alignment",
      "name": "sixth-street"
    },
    {
      "kind": "absent",
      "street": "Mesquit Street",
      "from": "Santa Fe Avenue",
      "to": {
        "px": [
          695,
          2429
        ]
      },
      "note": "This modern east-west stretch follows the sheet's lower edge and lot interiors, not the north-south MESQUITE STREET corridor drawn farther east."
    },
    {
      "kind": "state",
      "asWritten": "PALMETTO STREET",
      "street": "Palmetto Street",
      "from": {
        "px": [
          0,
          835
        ]
      },
      "to": "Santa Fe Avenue",
      "basis": "alignment",
      "name": "palmetto"
    },
    {
      "kind": "state",
      "street": "Santa Fe Avenue",
      "from": {
        "px": [
          169,
          690
        ]
      },
      "to": "Palmetto Street",
      "note": "North of Palmetto the aligned line crosses open title/parcel space; the drawn avenue begins at Palmetto.",
      "basis": "alignment",
      "name": "santa-fe-ave",
      "asWritten": "Santa Fe Avenue"
    },
    {
      "kind": "state",
      "asWritten": "SANTA FE AVENUE",
      "street": "Santa Fe Avenue",
      "from": "Palmetto Street",
      "to": "Mesquit Street",
      "basis": "alignment",
      "name": "santa-fe-ave"
    },
    {
      "kind": "state",
      "asWritten": "WILLOW STREET",
      "street": "Willow Street",
      "from": {
        "px": [
          0,
          1541
        ]
      },
      "to": "Santa Fe Avenue",
      "basis": "alignment",
      "name": "willow"
    },
    {
      "kind": "vanished",
      "asWritten": "MESQUITE STREET",
      "trace": [
        [
          896,
          2240
        ],
        [
          896,
          2420
        ]
      ],
      "basis": "alignment",
      "note": "The plat's MESQUITE corridor runs north-south along the eastern lot frontage; the supplied modern Mesquit stretch is east-west at the map's bottom.",
      "name": "mesquit"
    }
  ]
};
