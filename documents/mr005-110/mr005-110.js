module.exports = {
  id: "mr005-110",
  title: "Map of the Rivara and Vignolo Tract, situated in the City of Los Angeles",
  shortTitle: "Rivara and Vignolo Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-110.pdf",
  scan: "documents/mr005-110/mr005-110.pdf",
  transcription: null,

  date: { on: "1881" },   
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
    [67, 886], [977, 862], [1042, 257], [284, 90]
  ],
  alignment: {
    image: "documents/mr005-110/mr005-110-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.046408, -118.245269], note: "map-tool corner (0,0)" },
      { px: [1759, 0], ll: [34.042561, -118.249192], note: "map-tool corner (1759,0)" },
      { px: [0, 1156], ll: [34.048559, -118.248298], note: "map-tool corner (0,1156)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["5th Street","Los Angeles Street","Main Street","Winston Street"],

  rows: [
    {
      "kind": "unnamed",
      "street": "5th Street",
      "from": {
        "px": [
          549,
          873
        ]
      },
      "to": {
        "px": [
          522,
          143
        ]
      },
      "basis": "alignment",
      "note": "The modern 5th Street centerline follows the broad, unlabeled cross-tract roadway between the covered edges."
    },
    {
      "kind": "state",
      "asWritten": "Los Angeles Street",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          190,
          436
        ]
      },
      "to": {
        "px": [
          1024,
          423
        ]
      },
      "basis": "alignment",
      "note": "The modern centerline remains within the complete roadway lettered Los Angeles Street.",
      "name": "los-angeles-street"
    },
    {
      "kind": "state",
      "asWritten": "Main Street",
      "street": "Main Street",
      "from": {
        "px": [
          89,
          807
        ]
      },
      "to": {
        "px": [
          986,
          778
        ]
      },
      "basis": "alignment",
      "note": "The modern centerline remains within the complete roadway lettered Main Street.",
      "name": "main-street-dtla"
    },
    {
      "kind": "state",
      "asWritten": "Ozier Lane",
      "street": "Winston Street",
      "from": "Main Street",
      "to": "Los Angeles Street",
      "basis": "alignment",
      "note": "Between Main and Los Angeles, the modern Winston Street centerline follows the roadway lettered Ozier.",
      "name": "ozier-lane"
    },
    {
      "kind": "state",
      "asWritten": "Ozier Lane",
      "street": "Winston Street",
      "from": "Los Angeles Street",
      "to": {
        "px": [
          303,
          94
        ]
      },
      "basis": "alignment",
      "name": "ozier-lane"
    }
  ]
};
