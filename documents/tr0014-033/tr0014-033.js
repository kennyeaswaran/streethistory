module.exports = {
  id: "tr0014-033",
  title: "Plat of Tract No. 49, being a subdivision of the northerly portion of the block bounded by Main, Ord, San Fernando and Marchessault Streets, in the City of Los Angeles",
  shortTitle: "Tract No. 49",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0014/TR0014-033.pdf",
  scan: "documents/tr0014-033/tr0014-033.pdf",
  transcription: null,

  date: { on: "1907-07" },   
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
    [103, 670], [133, 1362], [1134, 1336], [961, 580]
  ],
  alignment: {
    image: "documents/tr0014-033/tr0014-033-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.061233, -118.237738], note: "map-tool corner (0,0)" },
      { px: [1121, 0], ll: [34.060499, -118.235636], note: "map-tool corner (1121,0)" },
      { px: [0, 1842], ll: [34.058351, -118.239184], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Alameda Street","Bauchet Street","Main Street","Ord Street","Spring Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "ALAMEDA ST.",
      "name": "alameda-st",
      "street": "Alameda Street",
      "from": {
        "px": [
          795,
          597
        ]
      },
      "to": {
        "px": [
          958,
          1341
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "Bauchet Street",
      "from": "Alameda Street",
      "to": {
        "px": [
          1071,
          1063
        ]
      },
      "note": "East of Alameda, the modern branch crosses blank ground; no roadway is drawn."
    },
    {
      "kind": "unnamed",
      "street": "Main Street",
      "from": {
        "px": [
          910,
          585
        ]
      },
      "to": "Ord Street",
      "note": "North of Ord, the modern alignment crosses the wedge between the historical Marchessault and Alameda corridors; no roadway follows it."
    },
    {
      "kind": "state",
      "asWritten": "Main St",
      "street": "Main Street",
      "from": "Ord Street",
      "to": {
        "px": [
          705,
          1347
        ]
      },
      "basis": "alignment",
      "name": "main-street-dtla"
    },
    {
      "kind": "state",
      "asWritten": "ORD ST.",
      "name": "ord-street",
      "street": "Ord Street",
      "from": {
        "px": [
          108,
          789
        ]
      },
      "to": "Alameda Street",
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "SAN FERNANDO ST.",
      "street": "Spring Street",
      "from": {
        "px": [
          234,
          656
        ]
      },
      "to": {
        "px": [
          243,
          1359
        ]
      },
      "basis": "alignment",
      "name": "san-fernando-st-spring"
    }
  ]
};
