module.exports = {
  id: "tr0014-033-1",
  title: "Plat of Tract No. 49, being a subdivision of the northerly portion of the block bounded by Main, Ord, San Fernando and Marchessault Streets, in the City of Los Angeles",
  shortTitle: "Tract No. 49",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0014/TR0014-033.pdf",
  scan: "documents/tr0014-033-1/tr0014-033-1.pdf",
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
    [97, 658], [83, 1345], [1113, 1385], [985, 570]
  ],
  alignment: {
    image: "documents/tr0014-033-1/tr0014-033-1-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.061227, -118.237727], note: "map-tool corner (0,0)" },
      { px: [1121, 0], ll: [34.060493, -118.235623], note: "map-tool corner (1121,0)" },
      { px: [0, 1842], ll: [34.058343, -118.239173], note: "map-tool corner (0,1842)" }
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
          787,
          590
        ]
      },
      "to": {
        "px": [
          960,
          1379
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
          1062,
          1061
        ]
      },
      "note": "East of Alameda, the modern branch crosses blank ground; no roadway is drawn."
    },
    {
      "kind": "unnamed",
      "street": "Main Street",
      "from": {
        "px": [
          905,
          578
        ]
      },
      "to": "Ord Street",
      "note": "North of Ord, the modern alignment crosses the wedge between the historical Marchessault and Alameda corridors; no roadway follows it."
    },
    {
      "kind": "state",
      "asWritten": "MAIN ST.",
      "street": "Main Street",
      "from": "Bauchet Street",
      "to": {
        "px": [
          691,
          1369
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
          94,
          787
        ]
      },
      "to": "Alameda Street",
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "SAN FERNANDO ST.",
      "name": "san-fernando-st-spring",
      "street": "Spring Street",
      "from": {
        "px": [
          227,
          645
        ]
      },
      "to": {
        "px": [
          236,
          1351
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "vanished",
      "asWritten": "ALAMEDA ST",
      "trace": [
        [
          829,
          789
        ],
        [
          890,
          1074
        ]
      ],
      "basis": "alignment",
      "note": "The historical Marchessault corridor connects Ord Street to the southern segment, but no supplied modern Main Street line follows this middle stretch.",
      "name": "alameda-st"
    }
  ]
};
