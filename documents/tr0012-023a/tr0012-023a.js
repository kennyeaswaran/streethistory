module.exports = {
  id: "tr0012-023a",
  title: "Map of Lot A, Axelrod and Winogura Property",
  shortTitle: "Axelrod and Winogura Property",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0012/TR0012-023a.pdf",
  scan: "documents/tr0012-023a/tr0012-023a.pdf",
  transcription: null,

  date: { on: "1907-02-19" },   
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
    [199, 687], [198, 1159], [1178, 1074], [898, 687]
  ],
  alignment: {
    image: "documents/tr0012-023a/tr0012-023a-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.053009, -118.239412], note: "map-tool corner (0,0)" },
      { px: [1179, 0], ll: [34.050955, -118.236572], note: "map-tool corner (1179,0)" },
      { px: [0, 1842], ll: [34.049306, -118.243257], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["1st Street","Central Avenue","Judge John Aiso Street","San Pedro Street","Toriumi Plaza"],

  rows: [
    {
      "kind": "state",
      "asWritten": "FIRST ST.",
      "name": "first-street",
      "street": "1st Street",
      "from": {
        "px": [
          198,
          1046
        ]
      },
      "to": {
        "px": [
          1106,
          975
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "CENTRAL AVE.",
      "name": "central-ave",
      "street": "Central Avenue",
      "from": {
        "px": [
          739,
          687
        ]
      },
      "to": {
        "px": [
          989,
          986
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "SAN PEDRO ST.",
      "name": "san-pedro",
      "street": "Judge John Aiso Street",
      "from": {
        "px": [
          245,
          687
        ]
      },
      "to": {
        "px": [
          294,
          1049
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "SAN PEDRO ST.",
      "name": "san-pedro",
      "street": "San Pedro Street",
      "from": {
        "px": [
          294,
          1049
        ]
      },
      "to": {
        "px": [
          301,
          1150
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "Toriumi Plaza",
      "from": {
        "px": [
          198,
          977
        ]
      },
      "to": {
        "px": [
          199,
          742
        ]
      },
      "note": "The plaza alignment lies outside the mapped San Pedro Street corridor."
    }
  ]
};
