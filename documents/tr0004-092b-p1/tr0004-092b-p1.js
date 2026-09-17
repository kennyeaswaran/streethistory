// SEED DOCUMENT, written 2026-09-17 so the sheet opens in the map tool at
// roughly the right place. The alignment here is scale + rotation derived from
// the sheet's own printed scale and courses, with the page centre dropped on
// the tract's recorded footprint centre — the POSITION has not been checked
// against the scan. See PLACEMENT.md in this folder.
//
// The coverage ring is PROVISIONAL: it is the tract's recorded footprint
// (County land-records layer / assessor parcel hull) projected into scan pixels
// through this same seed alignment, written so the model has a polygon to check.
// It is NOT a human trace. Re-trace it in the map tool once the placement is
// confirmed — the ring is stored in scan pixels, so dragging the sheet carries
// it along and it will not correct itself.
module.exports = {
  id: "tr0004-092b-p1",
  title: "Map of the Salt Lake Depot Tract No. 2, a re-subdivision of lots of the Fourth Street Bridge Tract (Fremont Ackerman C.E.), sheet 1",
  shortTitle: "Salt Lake Depot Tract No. 2, sheet 1",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0004/TR0004-092B.pdf",
  scan: null,
  transcription: null,

  date: { on: "1903-12-16" },   
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
    [205, 545], [100, 1581], [159, 1815], [620, 1846],
    [707, 597]
  ],
  alignment: {
    image: "documents/tr0004-092b-p1/tr0004-092b-p1-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.047075, -118.224884], note: "map-tool corner (0,0)" },
      { px: [1162, 0], ll: [34.047491, -118.220884], note: "map-tool corner (1162,0)" },
      { px: [0, 1842], ll: [34.041784, -118.224094], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: []
};
