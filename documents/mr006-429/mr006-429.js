module.exports = {
  id: "mr006-429",
  title: "Plat of the Beauvoir Tract in the City of Los Angeles",
  shortTitle: "Beauvoir Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-429.pdf",
  scan: "documents/mr006-429/mr006-429.pdf",
  transcription: null,

  date: { on: "1885-02" },   
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
    [1486, 629], [1328, 1032], [287, 1071], [271, 576]
  ],
  alignment: {
    image: "documents/mr006-429/mr006-429-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.063575, -118.255693], note: "map-tool corner (0,0)" },
      { px: [1708, 0], ll: [34.06614, -118.254023], note: "map-tool corner (1708,0)" },
      { px: [0, 1100], ll: [34.062679, -118.253713], note: "map-tool corner (0,1100)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Boylston Street","Temple Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "FIGUEROA ST.",
      "street": "Boylston Street",
      "from": {
        "px": [
          282,
          927
        ]
      },
      "to": "Temple Street",
      "basis": "alignment",
      "name": "figueroa-gov"
    },
    {
      "kind": "state",
      "asWritten": "TEMPLE ST.",
      "street": "Temple Street",
      "from": {
        "px": [
          1437,
          627
        ]
      },
      "to": {
        "px": [
          1286,
          1034
        ]
      },
      "basis": "alignment",
      "name": "temple"
    }
  ]
};
