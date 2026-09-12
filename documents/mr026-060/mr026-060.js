module.exports = {
  id: "mr026-060",
  title: "Map of the Pederift Tract",
  shortTitle: "Pederift Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR026/MR026-060.pdf",
  scan: "documents/mr026-060/mr026-060.pdf",
  transcription: null,

  date: { on: "1887-11-29" },   
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
    [302, 490], [272, 1268], [866, 1348], [855, 600]
  ],
  alignment: {
    image: "documents/mr026-060/mr026-060-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.0373, -118.246264], note: "map-tool corner (0,0)" },
      { px: [1019, 0], ll: [34.036373, -118.244481], note: "map-tool corner (1019,0)" },
      { px: [0, 1590], ll: [34.034978, -118.247997], note: "map-tool corner (0,1590)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["8th Street","Gladys Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "new 8th Street",
      "street": "8th Street",
      "from": {
        "px": [
          298,
          586
        ]
      },
      "to": {
        "px": [
          857,
          706
        ]
      },
      "basis": "alignment",
      "name": "eighth-street"
    },
    {
      "kind": "state",
      "asWritten": "Melendrez Street",
      "street": "Gladys Avenue",
      "from": {
        "px": [
          542,
          640
        ]
      },
      "to": {
        "px": [
          563,
          1307
        ]
      },
      "basis": "alignment",
      "note": "The modern Gladys corridor is lettered Melendrez Street on this plat.",
      "name": "melendrez-st"
    }
  ]
};
