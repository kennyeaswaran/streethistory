module.exports = {
  id: "mr006-391",
  title: "Map of Byram's Subdivision of Part of Lot 1, Block 39, Hancock's Survey",
  shortTitle: "Byram's Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-391.pdf",
  scan: "documents/mr006-391/mr006-391.pdf",
  transcription: null,

  date: { on: "1889-01-17" },   
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
    [372, 1279], [832, 1287], [998, 730], [501, 674]
  ],
  alignment: {
    image: "documents/mr006-391/mr006-391-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.064997, -118.248972], note: "map-tool corner (0,0)" },
      { px: [1128, 0], ll: [34.062727, -118.250365], note: "map-tool corner (1128,0)" },
      { px: [0, 1700], ll: [34.066747, -118.253073], note: "map-tool corner (0,1700)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Boylston Street","Temple Street","Victor Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "FIGUEROA ST.",
      "street": "Boylston Street",
      "from": {
        "px": [
          490,
          1188
        ]
      },
      "to": {
        "px": [
          859,
          1197
        ]
      },
      "basis": "alignment",
      "name": "figueroa-gov"
    },
    {
      "kind": "state",
      "asWritten": "TEMPLE STREET",
      "street": "Temple Street",
      "from": {
        "px": [
          934,
          723
        ]
      },
      "to": "Victor Street",
      "basis": "alignment",
      "name": "temple"
    },
    {
      "kind": "state",
      "street": "Temple Street",
      "from": "Victor Street",
      "to": "Boylston Street",
      "note": "Southwest of Victor Street the modern diagonal crosses subdivision lots.",
      "basis": "alignment",
      "asWritten": "Temple St",
      "name": "temple"
    },
    {
      "kind": "state",
      "asWritten": "FIREMAN ST.",
      "street": "Victor Street",
      "from": {
        "px": [
          631,
          749
        ]
      },
      "to": "Temple Street",
      "basis": "alignment",
      "name": "fireman-st"
    }
  ]
};
