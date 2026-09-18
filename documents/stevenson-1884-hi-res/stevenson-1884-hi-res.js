module.exports = {
  id: "stevenson-1884-hi-res",
  // PARTIALLY PROCESSED (Kenny, 2026-09-18): the alignment and coverage are in,
  // the title block and the rows are not. Title and short title are interim
  // and should be read off the sheet.
  title: "Stevenson's map of Los Angeles, 1884 (Huntington Digital Library, p15150coll4 no. 3925)",
  shortTitle: "Stevenson's 1884 map",
  // Huntington Digital Library record page; the IIIF full-size image is the
  // copy this folder's JPG was made from.
  url: "https://cdm16003.contentdm.oclc.org/digital/collection/p15150coll4/id/3925",
  copies: [
    { title: "Huntington Digital Library, full-resolution image (IIIF)",
      url: "https://hdl.huntington.org/digital/iiif/p15150coll4/3925/full/full/0/default.jpg" }
  ],
  scan: "documents/stevenson-1884-hi-res/stevenson-1884-hi-res.jpg",
  transcription: null,

  date: { on: "1884" },   // TODO: exact date from the sheet's title block
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
    [1660, 4211], [1791, 5667], [3344, 5666], [3621, 4185]
  ],
  alignment: {
    image: "documents/stevenson-1884-hi-res/stevenson-1884-hi-res.jpg",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.126168, -118.300029], note: "map-tool corner (0,0)" },
      { px: [6472, 0], ll: [34.127294, -118.189508], note: "map-tool corner (6472,0)" },
      { px: [0, 8108], ll: [34.010665, -118.298337], note: "map-tool corner (0,8108)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: []
};
