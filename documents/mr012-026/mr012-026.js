module.exports = {
  id: "mr012-026",
  title: "Map of the Mills' Tract in the City of Los Angeles",
  shortTitle: "Mills' Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR012/MR012-026.pdf",
  scan: "documents/mr012-026/mr012-026.pdf",
  transcription: null,

  date: { on: "1886-11" },   
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
    [866, 414], [539, 355], [184, 970], [199, 1474],
    [989, 1435], [1044, 938]
  ],
  alignment: {
    image: "documents/mr012-026/mr012-026-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.046628, -118.249841], note: "map-tool corner (0,0)" },
      { px: [1088, 0], ll: [34.049464, -118.248183], note: "map-tool corner (1088,0)" },
      { px: [0, 1757], ll: [34.044395, -118.244352], note: "map-tool corner (0,1757)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["4th Street","Boyd Street","Los Angeles Street","Main Street","Wall Street","Winston Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Fourth Street",
      "street": "4th Street",
      "from": {
        "px": [
          808,
          403
        ]
      },
      "to": {
        "px": [
          594,
          1454
        ]
      },
      "basis": "alignment",
      "note": "The words Fourth and Street are separated by Los Angeles Street but label one continuous roadway followed by modern 4th Street.",
      "name": "fourth-street"
    },
    {
      "kind": "state",
      "asWritten": "Boyd Street",
      "street": "Boyd Street",
      "from": "Los Angeles Street",
      "to": {
        "px": [
          887,
          1440
        ]
      },
      "basis": "alignment",
      "note": "The modern Boyd Street centerline follows the roadway lettered Boyd Street from Los Angeles Street to the covered edge beyond Wall Street.",
      "name": "boyd-street"
    },
    {
      "kind": "state",
      "asWritten": "Los Angeles Street",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          1038,
          991
        ]
      },
      "to": {
        "px": [
          331,
          716
        ]
      },
      "basis": "alignment",
      "note": "The modern centerline follows the complete roadway lettered Los Angeles Street within the coverage.",
      "name": "los-angeles-street"
    },
    {
      "kind": "state",
      "asWritten": "Main Street",
      "street": "Main Street",
      "from": {
        "px": [
          886,
          474
        ]
      },
      "to": {
        "px": [
          515,
          397
        ]
      },
      "basis": "alignment",
      "note": "The modern centerline follows the roadway lettered Main Street along the covered edge.",
      "name": "main-street-dtla"
    },
    {
      "kind": "state",
      "asWritten": "Wall Street",
      "street": "Wall Street",
      "from": {
        "px": [
          998,
          1357
        ]
      },
      "to": {
        "px": [
          195,
          1347
        ]
      },
      "basis": "alignment",
      "note": "The modern centerline follows the complete roadway lettered Wall Street within the coverage.",
      "name": "wall-street"
    },
    {
      "kind": "state",
      "asWritten": "Winston Street",
      "street": "Winston Street",
      "from": "Main Street",
      "to": {
        "px": [
          259,
          1471
        ]
      },
      "basis": "alignment",
      "note": "The words Winston and Street are separated by Los Angeles Street but label the single modern Winston Street corridor through the tract.",
      "name": "winston-st"
    }
  ]
};
