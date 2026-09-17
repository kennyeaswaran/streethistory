module.exports = {
  id: "tr0015-179a",
  title: "Tract No. 754",
  shortTitle: "Tract No. 754",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-179a.pdf",
  scan: "documents/tr0015-179a/tr0015-179a.pdf",
  transcription: null,

  date: { on: "1910-02-21" },   
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
    [257, 698], [147, 1350], [715, 1365], [925, 1131],
    [987, 683]
  ],
  alignment: {
    image: "documents/tr0015-179a/tr0015-179a-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.060217, -118.26856], note: "map-tool corner (0,0)" },
      { px: [1154, 0], ll: [34.06254, -118.265991], note: "map-tool corner (1154,0)" },
      { px: [0, 1842], ll: [34.056797, -118.264116], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["3rd Street","Columbia Avenue","Crown Hill Avenue","Loma Drive"],

  rows: [
    {
      "kind": "absent",
      "street": "3rd Street",
      "from": {
        "px": [
          517,
          693
        ]
      },
      "to": "Columbia Avenue",
      "note": "The modern street cuts through Lots 1 and 2 rather than following a drawn corridor."
    },
    {
      "kind": "unnamed",
      "street": "3rd Street",
      "from": "Columbia Avenue",
      "to": {
        "px": [
          717,
          1362
        ]
      },
      "note": "The modern street cuts through Lots 1 and 2 rather than following a drawn corridor."
    },
    {
      "kind": "state",
      "asWritten": "COLUMBIA AVENUE",
      "street": "Columbia Avenue",
      "from": {
        "px": [
          927,
          1119
        ]
      },
      "to": {
        "px": [
          161,
          1264
        ]
      },
      "basis": "alignment",
      "name": "columbia-avenue"
    },
    {
      "kind": "state",
      "street": "Crown Hill Avenue",
      "from": {
        "px": [
          897,
          685
        ]
      },
      "to": {
        "px": [
          651,
          1131
        ]
      },
      "basis": "alignment",
      "note": "A narrow two-edged diagonal roadway is shown, but no street name is lettered on it.",
      "asWritten": "Crown Hill Ave",
      "name": "crown-hill-ave"
    },
    {
      "kind": "state",
      "asWritten": "LOMA DRIVE",
      "street": "Loma Drive",
      "from": {
        "px": [
          975,
          773
        ]
      },
      "to": {
        "px": [
          245,
          767
        ]
      },
      "basis": "alignment",
      "name": "loma-drive"
    }
  ]
};
