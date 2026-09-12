module.exports = {
  id: "mr021-046",
  title: "W. J. Fisher's Subdivision of the Kohler and Frohling Tract",
  shortTitle: "W. J. Fisher's Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR021/MR021-046.pdf",
  scan: "documents/mr021-046/mr021-046.pdf",
  transcription: null,

  date: { on: "1887-09-14" },   
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
    [241, 384], [271, 1470], [979, 1573], [855, 392]
  ],
  alignment: {
    image: "documents/mr021-046/mr021-046-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.039636, -118.242652], note: "map-tool corner (0,0)" },
      { px: [1165, 0], ll: [34.037278, -118.238777], note: "map-tool corner (1165,0)" },
      { px: [0, 1759], ll: [34.034754, -118.246918], note: "map-tool corner (0,1759)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["7th Street","8th Street","Central Avenue","Kohler Street","Merchant Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Seventh Street",
      "street": "7th Street",
      "from": {
        "px": [
          242,
          428
        ]
      },
      "to": {
        "px": [
          863,
          472
        ]
      },
      "basis": "alignment",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "asWritten": "Eighth Street",
      "street": "8th Street",
      "from": {
        "px": [
          269,
          1408
        ]
      },
      "to": {
        "px": [
          974,
          1522
        ]
      },
      "basis": "alignment",
      "name": "eighth-street"
    },
    {
      "kind": "state",
      "asWritten": "Central Ave.",
      "street": "Central Avenue",
      "from": {
        "px": [
          783,
          391
        ]
      },
      "to": {
        "px": [
          923,
          1565
        ]
      },
      "basis": "alignment",
      "name": "central-ave"
    },
    {
      "kind": "state",
      "asWritten": "Kohler Street",
      "street": "Kohler Street",
      "from": {
        "px": [
          368,
          438
        ]
      },
      "to": {
        "px": [
          388,
          1487
        ]
      },
      "basis": "alignment",
      "name": "kohler"
    },
    {
      "kind": "state",
      "asWritten": "Merchant Street",
      "street": "Merchant Street",
      "from": {
        "px": [
          586,
          451
        ]
      },
      "to": {
        "px": [
          599,
          1464
        ]
      },
      "basis": "alignment",
      "name": "merchant-st"
    }
  ]
};
