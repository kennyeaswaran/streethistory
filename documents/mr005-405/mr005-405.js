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
  id: "mr005-405",
  title: "Plan of the Truman Tract of Los Angeles City (surveyed 18 June 1883 by Geo. Butler Griffin C.E.; re-arranged 11 January 1884 by W. R. Blackman)",
  shortTitle: "Truman Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-405.pdf",
  scan: null,
  transcription: null,

  date: { on: "1884-01-12" },   
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
    [303, 1653], [1012, 1626], [1097, 138], [330, 600]
  ],
  alignment: {
    image: "documents/mr005-405/mr005-405-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.050495, -118.267108], note: "map-tool corner (0,0)" },
      { px: [1113, 0], ll: [34.049763, -118.265492], note: "map-tool corner (1113,0)" },
      { px: [0, 1694], ll: [34.048442, -118.268443], note: "map-tool corner (0,1694)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: []
};
