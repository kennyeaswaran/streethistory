module.exports = {
  id: "tr0011-196",
  title: "Lot A Slauson Property",
  shortTitle: "Slauson Property, Lot A",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0011/TR0011-196.pdf",
  scan: "documents/tr0011-196/tr0011-196.pdf",
  transcription: null,

  date: { on: "1907-01-29" },   
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
    [240, 1346], [1230, 1290], [1089, 662], [306, 550]
  ],
  alignment: {
    image: "documents/tr0011-196/tr0011-196-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.039082, -118.242042], note: "map-tool corner (0,0)" },
      { px: [1182, 0], ll: [34.037937, -118.240425], note: "map-tool corner (1182,0)" },
      { px: [0, 1842], ll: [34.036978, -118.24418], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["7th Street","Kohler Street","Merchant Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SEVENTH ST.",
      "street": "7th Street",
      "from": {
        "px": [
          393,
          875
        ]
      },
      "to": {
        "px": [
          1065,
          875
        ]
      },
      "basis": "alignment",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "asWritten": "KOHLER ST.",
      "street": "Kohler Street",
      "from": {
        "px": [
          528,
          646
        ]
      },
      "to": {
        "px": [
          525,
          875
        ]
      },
      "basis": "alignment",
      "name": "kohler",
      "note": "Northern modern run along the upper Kohler corridor."
    },
    {
      "kind": "state",
      "asWritten": "KOHLER ST.",
      "street": "Kohler Street",
      "from": {
        "px": [
          423,
          940
        ]
      },
      "to": {
        "px": [
          460,
          1334
        ]
      },
      "basis": "alignment",
      "name": "kohler",
      "note": "Southern modern run follows the shifted Kohler corridor."
    },
    {
      "kind": "state",
      "asWritten": "MERCHANT ST.",
      "street": "Merchant Street",
      "from": {
        "px": [
          925,
          940
        ]
      },
      "to": {
        "px": [
          956,
          1305
        ]
      },
      "basis": "alignment",
      "name": "merchant-st"
    }
  ]
};
