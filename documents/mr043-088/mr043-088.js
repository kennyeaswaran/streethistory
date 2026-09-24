module.exports = {
  id: "mr043-088",
  title: "John H. Jacobs' Subdivision of Lots 3-4 and that part of Lot 5 which lies west of Kohler Street of the Rees Tract",
  shortTitle: "John H. Jacobs' Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR043/MR043-088.pdf",
  scan: "documents/mr043-088/mr043-088.pdf",
  transcription: null,

  date: { on: "1892-03-08" },   
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
    [96, 1246], [911, 1218], [971, 678], [190, 722]
  ],
  alignment: {
    image: "documents/mr043-088/mr043-088-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.034973, -118.242472], note: "map-tool corner (0,0)" },
      { px: [1086, 0], ll: [34.033707, -118.243578], note: "map-tool corner (1086,0)" },
      { px: [0, 1742], ll: [34.036453, -118.244906], note: "map-tool corner (0,1742)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["8th Street","Kohler Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "8th St.",
      "name": "eighth-street",
      "street": "8th Street",
      "from": {
        "px": [
          822,
          1221
        ]
      },
      "to": {
        "px": [
          918,
          681
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Kohler St.",
      "name": "kohler",
      "street": "Kohler Street",
      "from": {
        "px": [
          126,
          1080
        ]
      },
      "to": {
        "px": [
          928,
          1065
        ]
      },
      "basis": "alignment"
    }
  ]
};
