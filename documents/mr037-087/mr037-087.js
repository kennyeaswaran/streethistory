module.exports = {
  id: "mr037-087",
  title: "Map of Contreras and Reyes Subdivision",
  shortTitle: "Contreras and Reyes Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR037/MR037-087.pdf",
  scan: "documents/mr037-087/mr037-087.pdf",
  transcription: null,

  date: { on: "1888-11-08" },   
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
    [224, 463], [193, 828], [1016, 1079], [1026, 696]
  ],
  alignment: {
    image: "documents/mr037-087/mr037-087-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.035797, -118.245448], note: "map-tool corner (0,0)" },
      { px: [1113, 0], ll: [34.034395, -118.242106], note: "map-tool corner (1113,0)" },
      { px: [0, 1649], ll: [34.031665, -118.247939], note: "map-tool corner (0,1649)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Central Avenue","Kohler Street","Olympic Boulevard"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Central Ave.",
      "street": "Central Avenue",
      "from": {
        "px": [
          936,
          670
        ]
      },
      "to": {
        "px": [
          941,
          861
        ]
      },
      "basis": "alignment",
      "name": "central-ave"
    },
    {
      "kind": "absent",
      "street": "Kohler Street",
      "from": {
        "px": [
          271,
          477
        ]
      },
      "to": {
        "px": [
          226,
          787
        ]
      },
      "note": "The modern Kohler trace drifts into subdivided lots rather than tracking the two-edged street at the western margin."
    },
    {
      "kind": "state",
      "asWritten": "NINTH STREET",
      "street": "Olympic Boulevard",
      "from": {
        "px": [
          197,
          779
        ]
      },
      "to": {
        "px": [
          798,
          979
        ]
      },
      "basis": "alignment",
      "note": "Modern Olympic Boulevard follows the roadway lettered Ninth Street.",
      "name": "ninth-street"
    }
  ]
};
