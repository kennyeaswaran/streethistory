module.exports = {
  id: "tr0020-053b",
  title: "Tract No. 1687",
  shortTitle: "Tract No. 1687",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0020/TR0020-053b.pdf",
  scan: "documents/tr0020-053b/tr0020-053b.pdf",
  transcription: null,

  date: { on: "1912-04-15" },   
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
    [25, 664], [70, 1576], [1238, 1588], [1183, 775]
  ],
  alignment: {
    image: "documents/tr0020-053b/tr0020-053b-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.03777, -118.232958], note: "map-tool corner (0,0)" },
      { px: [1141, 0], ll: [34.037889, -118.231451], note: "map-tool corner (1141,0)" },
      { px: [0, 1842], ll: [34.03574, -118.232728], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Imperial Street","Jesse Street","Mateo Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "MIMOSA ST.",
      "street": "Imperial Street",
      "from": {
        "px": [
          1058,
          763
        ]
      },
      "to": {
        "px": [
          1059,
          1586
        ]
      },
      "basis": "alignment",
      "note": "Modern Imperial follows the older Mimosa Street corridor.",
      "name": "mimosa-st"
    },
    {
      "kind": "state",
      "asWritten": "JESSE ST.",
      "street": "Jesse Street",
      "from": {
        "px": [
          226,
          1458
        ]
      },
      "to": {
        "px": [
          1135,
          1458
        ]
      },
      "basis": "alignment",
      "name": "jesse",
      "note": "Jesse Street is drawn through Mateo and Mimosa; the modern run extends farther east than the visible scan."
    },
    {
      "kind": "state",
      "asWritten": "MATEO ST.",
      "street": "Mateo Street",
      "from": {
        "px": [
          228,
          683
        ]
      },
      "to": {
        "px": [
          226,
          1578
        ]
      },
      "basis": "alignment",
      "name": "mateo"
    }
  ]
};
