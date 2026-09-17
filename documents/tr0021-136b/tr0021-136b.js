module.exports = {
  id: "tr0021-136b",
  title: "Tract No. 2059",
  shortTitle: "Tract No. 2059",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0021/TR0021-136b.pdf",
  scan: "documents/tr0021-136b/tr0021-136b.pdf",
  transcription: null,

  date: { on: "1913-01-03" },   
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
    [1142, 1046], [1155, 1453], [635, 1463], [609, 1042]
  ],
  alignment: {
    image: "documents/tr0021-136b/tr0021-136b-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.060809, -118.261303], note: "map-tool corner (0,0)" },
      { px: [1158, 0], ll: [34.064465, -118.259051], note: "map-tool corner (1158,0)" },
      { px: [0, 1842], ll: [34.05782, -118.254333], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Boylston Street","Colton Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "BOYLSTON ST.",
      "street": "Boylston Street",
      "from": {
        "px": [
          1149,
          1262
        ]
      },
      "to": "Colton Street",
      "basis": "alignment",
      "name": "boylston"
    },
    {
      "kind": "state",
      "asWritten": "COLTON ST.",
      "street": "Colton Street",
      "from": {
        "px": [
          1033,
          1045
        ]
      },
      "to": "Boylston Street",
      "basis": "alignment",
      "note": "Both listed Colton Street candidates accept this exact ink, so the lineage is left for review.",
      "name": "colton-st"
    }
  ]
};
