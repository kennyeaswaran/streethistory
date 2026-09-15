module.exports = {
  id: "tr0023-054c",
  title: "Tract No. 1836",
  shortTitle: "Tract No. 1836",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0023/TR0023-054c.pdf",
  scan: "documents/tr0023-054c/tr0023-054c.pdf",
  transcription: null,

  date: { on: "1913-05-23" },   
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
    [163, 452], [319, 1567], [988, 1555], [1055, 403],
    [723, 296]
  ],
  alignment: {
    image: "documents/tr0023-054c/tr0023-054c-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.035554, -118.235656], note: "map-tool corner (0,0)" },
      { px: [1126, 0], ll: [34.035448, -118.233791], note: "map-tool corner (1126,0)" },
      { px: [0, 1767], ll: [34.033112, -118.235855], note: "map-tool corner (0,1767)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["7th Place","7th Street","Decatur Street","Mill Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "ATLANTIC ST.",
      "street": "7th Place",
      "from": {
        "px": [
          300,
          1430
        ]
      },
      "to": {
        "px": [
          994,
          1449
        ]
      },
      "basis": "alignment",
      "note": "Modern 7th Place follows the Atlantic Street corridor at the south of the tract.",
      "name": "atlantic-st-dtla"
    },
    {
      "kind": "state",
      "asWritten": "SEVENTH ST.",
      "street": "7th Street",
      "from": {
        "px": [
          177,
          551
        ]
      },
      "to": {
        "px": [
          1046,
          562
        ]
      },
      "basis": "alignment",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "asWritten": "DECATUR ST.",
      "street": "Decatur Street",
      "from": {
        "px": [
          408,
          554
        ]
      },
      "to": {
        "px": [
          432,
          1434
        ]
      },
      "basis": "alignment",
      "name": "decatur-st"
    },
    {
      "kind": "state",
      "asWritten": "MILL ST.",
      "street": "Mill Street",
      "from": {
        "px": [
          727,
          389
        ]
      },
      "to": {
        "px": [
          731,
          560
        ]
      },
      "basis": "alignment",
      "name": "mill-st-arts-district"
    }
  ]
};
