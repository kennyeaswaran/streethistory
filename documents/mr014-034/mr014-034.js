module.exports = {
  id: "mr014-034",
  title: "Beck Tract",
  shortTitle: "Beck Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR014/MR014-034.pdf",
  scan: "documents/mr014-034/mr014-034.pdf",
  transcription: null,

  date: { on: "1886-12-23" },   
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
    [-21, 250], [47, 991], [971, 1020], [1024, 93]
  ],
  alignment: {
    image: "documents/mr014-034/mr014-034-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.041675, -118.248356], note: "map-tool corner (0,0)" },
      { px: [1644, 0], ll: [34.043819, -118.246145], note: "map-tool corner (1644,0)" },
      { px: [0, 1093], ll: [34.040449, -118.246647], note: "map-tool corner (0,1093)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["7th Street","San Julian Street","San Pedro Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Seventh Street",
      "street": "7th Street",
      "from": {
        "px": [
          58,
          238
        ]
      },
      "to": {
        "px": [
          73,
          992
        ]
      },
      "basis": "alignment",
      "note": "The modern 7th Street trace follows the complete roadway lettered Seventh Street.",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "asWritten": "Earl Street",
      "street": "San Julian Street",
      "from": {
        "px": [
          1008,
          366
        ]
      },
      "to": {
        "px": [
          1,
          492
        ]
      },
      "basis": "alignment",
      "note": "Modern San Julian Street follows the complete roadway lettered Earl Street across the tract.",
      "name": "earl-st"
    },
    {
      "kind": "state",
      "asWritten": "San Pedro Street",
      "street": "San Pedro Street",
      "from": {
        "px": [
          975,
          945
        ]
      },
      "to": {
        "px": [
          43,
          946
        ]
      },
      "basis": "alignment",
      "note": "The modern San Pedro Street trace follows the complete roadway lettered San Pedro Street.",
      "name": "san-pedro"
    }
  ]
};
