module.exports = {
  id: "tr0035-022",
  title: "Tract No. 2918",
  shortTitle: "Tract No. 2918",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0035/TR0035-022.pdf",
  scan: "documents/tr0035-022/tr0035-022.pdf",
  transcription: null,

  date: { on: "1917-08" },   
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
    [275, 340], [205, 1287], [1180, 1628], [1261, 379]
  ],
  alignment: {
    image: "documents/tr0035-022/tr0035-022-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.050749, -118.242119], note: "map-tool corner (0,0)" },
      { px: [1564, 0], ll: [34.050217, -118.240431], note: "map-tool corner (1564,0)" },
      { px: [0, 2256], ll: [34.048718, -118.243039], note: "map-tool corner (0,2256)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["2nd Street","Astronaut Ellison S Onizuka Street","San Pedro Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Second Street",
      "name": "second-street",
      "street": "2nd Street",
      "from": {
        "px": [
          216,
          1133
        ]
      },
      "to": {
        "px": [
          1195,
          1404
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Wilmington Street",
      "street": "Astronaut Ellison S Onizuka Street",
      "from": {
        "px": [
          280,
          340
        ]
      },
      "to": {
        "px": [
          665,
          1142
        ]
      },
      "basis": "alignment",
      "name": "wilmington-street"
    },
    {
      "kind": "state",
      "asWritten": "San Pedro Street",
      "name": "san-pedro",
      "street": "San Pedro Street",
      "from": {
        "px": [
          1016,
          369
        ]
      },
      "to": {
        "px": [
          831,
          1506
        ]
      },
      "basis": "alignment"
    }
  ]
};
