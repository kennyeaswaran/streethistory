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
  id: "tr0024-055",
  title: "Tract No. 2473, being a subdivision of portions of Blocks 2 and 3 and of Lots 2-4 of Block L, Colina Park (Daniel S. Halladay C.E.)",
  shortTitle: "Tract No. 2473",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0024/TR0024-055.pdf",
  scan: null,
  transcription: null,

  date: { on: "1913-12-16" },   
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
    [80, 1617], [1218, 1831], [1201, 964], [741, 194],
    [112, 252]
  ],
  alignment: {
    image: "documents/tr0024-055/tr0024-055-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.061918, -118.267639], note: "map-tool corner (0,0)" },
      { px: [1173, 0], ll: [34.061149, -118.265933], note: "map-tool corner (1173,0)" },
      { px: [0, 1842], ll: [34.059684, -118.269086], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: []
};
