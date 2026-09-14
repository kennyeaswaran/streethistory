module.exports = {
  id: "mr010-080",
  title: "Map of Subdivision of the Reyes Tract",
  shortTitle: "Reyes Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR010/MR010-080.pdf",
  scan: "documents/mr010-080/mr010-080.pdf",
  transcription: null,

  date: { on: "1885-03" },   
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
    [223, 507], [417, 1092], [1177, 1088], [998, 457]
  ],
  alignment: {
    image: "documents/mr010-080/mr010-080-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.038289, -118.241183], note: "map-tool corner (0,0)" },
      { px: [1737, 0], ll: [34.032903, -118.234707], note: "map-tool corner (1737,0)" },
      { px: [0, 1108], ll: [34.034841, -118.2453], note: "map-tool corner (0,1108)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  rows: [
    {
      "kind": "state",
      "asWritten": "Kobler St.",
      "street": "8th Street",
      "from": {
        "px": [
          400,
          1042
        ]
      },
      "to": {
        "px": [
          1163,
          1038
        ]
      },
      "basis": "alignment",
      "confirmed": false,
      "note": "The modern 8th Street corridor is lettered Kohler St. on this early map."
    },
    {
      "kind": "state",
      "asWritten": "Wolfskill St.",
      "street": "Central Avenue",
      "from": {
        "px": [
          303,
          502
        ]
      },
      "to": {
        "px": [
          500,
          1092
        ]
      },
      "basis": "alignment",
      "note": "The modern Central Avenue line follows the western roadway lettered Wolfskill St.",
      "name": "wolfskill-ave"
    }
  ]
};
