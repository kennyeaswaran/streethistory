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
      { px: [0, 0], ll: [34.049939, -118.25587], note: "map-tool corner (0,0)" },
      { px: [1119, 0], ll: [34.048909, -118.254285], note: "map-tool corner (1119,0)" },
      { px: [0, 1757], ll: [34.047862, -118.257809], note: "map-tool corner (0,1757)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["6th Street","Grand Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SIXTH ST.",
      "street": "6th Street",
      "from": {
        "px": [
          277,
          433
        ]
      },
      "to": {
        "px": [
          879,
          433
        ]
      },
      "basis": "alignment",
      "name": "sixth-street",
      "note": "The corrected modern 6th Street centerline stays in the roadway lettered SIXTH ST. across the property's north edge."
    },
    {
      "kind": "state",
      "asWritten": "GRAND AV.",
      "street": "Grand Avenue",
      "from": {
        "px": [
          751,
          322
        ]
      },
      "to": {
        "px": [
          751,
          885
        ]
      },
      "basis": "alignment",
      "name": "grand-ave",
      "note": "The centerline follows the drawn GRAND AV. roadway east of the property."
    }
  ]
};
