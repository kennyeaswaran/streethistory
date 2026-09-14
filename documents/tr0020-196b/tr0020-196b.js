module.exports = {
  id: "tr0020-196b",
  title: "Tract No. 1101, Being a Resubdivision of Lots 62, 63, 64, 65, 66, 71, 72 and 73, Property of Don Manuel Requena",
  shortTitle: "Tract No. 1101",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0020/TR0020-196b.pdf",
  scan: "documents/tr0020-196b/tr0020-196b.pdf",
  transcription: null,

  date: { on: "1912-07-24" },   
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
    [960, 923], [444, 855], [394, 1420], [808, 1637]
  ],
  alignment: {
    image: "documents/tr0020-196b/tr0020-196b-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.054807, -118.240496], note: "map-tool corner (0,0)" },
      { px: [1117, 0], ll: [34.054528, -118.23864], note: "map-tool corner (1117,0)" },
      { px: [0, 1842], ll: [34.052252, -118.241047], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Temple Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Market St",
      "street": "Temple Street",
      "from": null,
      "to": null,
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "market-st"
    }
  ]
};
