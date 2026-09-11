module.exports = {
  id: "mr084-053",
  title: "Map of Property of Mrs. Grace C. Longley in Block 21, Ord's Survey",
  shortTitle: "Grace C. Longley Property",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR084/MR084-053.pdf",
  scan: "documents/mr084-053/mr084-053.pdf",
  transcription: null,

  date: { on: "1902-11-06" },   
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
    [280, 345], [260, 933], [887, 872], [877, 316]
  ],
  alignment: {
    image: "documents/mr084-053/mr084-053-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.051756, -118.254659], note: "map-tool corner (0,0)" },
      { px: [1119, 0], ll: [34.050411, -118.252618], note: "map-tool corner (1119,0)" },
      { px: [0, 1757], ll: [34.049083, -118.25719], note: "map-tool corner (0,1757)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["5th Street","Grand Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SIXTH ST.",
      "street": "5th Street",
      "from": {
        "px": [
          277,
          442
        ]
      },
      "to": {
        "px": [
          879,
          437
        ]
      },
      "basis": "alignment",
      "note": "The modern 5th Street trace follows the roadway lettered SIXTH ST. across the north edge of the property.",
      "name": "sixth-street"
    },
    {
      "kind": "state",
      "asWritten": "GRAND AV.",
      "street": "Grand Avenue",
      "from": {
        "px": [
          745,
          322
        ]
      },
      "to": {
        "px": [
          749,
          885
        ]
      },
      "basis": "alignment",
      "note": "The modern Grand Avenue trace follows the roadway lettered GRAND AV. along the east side of the property.",
      "name": "grand-ave"
    }
  ]
};
