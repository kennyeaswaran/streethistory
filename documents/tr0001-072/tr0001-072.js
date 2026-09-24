module.exports = {
  id: "tr0001-072",
  title: "Culver Tract, Being a Subdivision of Block 7, Coronel Tract, and Strip of Land Lying North",
  shortTitle: "Culver Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0001/TR0001-072.pdf",
  scan: "documents/tr0001-072/tr0001-072.pdf",
  transcription: null,

  date: { on: "1901-11" },   
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
    [453, 1767], [772, 1794], [794, 330], [393, 356]
  ],
  alignment: {
    image: "documents/tr0001-072/tr0001-072-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.040696, -118.241241], note: "map-tool corner (0,0)" },
      { px: [1144, 0], ll: [34.039438, -118.239419], note: "map-tool corner (1144,0)" },
      { px: [0, 1842], ll: [34.038247, -118.243668], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["6th Street","7th Street","Kohler Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SIXTH ST.",
      "name": "sixth-street",
      "street": "6th Street",
      "from": {
        "px": [
          395,
          407
        ]
      },
      "to": {
        "px": [
          793,
          383
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "SEVENTH ST.",
      "name": "seventh-street",
      "street": "7th Street",
      "from": {
        "px": [
          451,
          1730
        ]
      },
      "to": {
        "px": [
          773,
          1733
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "KOHLER STREET",
      "name": "kohler",
      "street": "Kohler Street",
      "from": "6th Street",
      "to": "7th Street",
      "basis": "alignment"
    }
  ]
};
