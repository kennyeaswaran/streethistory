module.exports = {
  id: "mr029-085",
  title: "Map of the Denison Tract",
  shortTitle: "Denison Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-085.pdf",
  scan: "documents/mr029-085/mr029-085.pdf",
  transcription: null,

  date: { on: "1888-05-03" },   
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
    [550, 366], [999, 465], [998, 1473], [536, 1493]
  ],
  alignment: {
    image: "documents/mr029-085/mr029-085-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.039761, -118.248989], note: "map-tool corner (0,0)" },
      { px: [1150, 0], ll: [34.037633, -118.244895], note: "map-tool corner (1150,0)" },
      { px: [0, 1721], ll: [34.034648, -118.252804], note: "map-tool corner (0,1721)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["10th Street","8th Street","9th Street","Stanford Avenue","Towne Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Eleventh St.",
      "street": "10th Street",
      "from": {
        "px": [
          537,
          1437
        ]
      },
      "to": {
        "px": [
          998,
          1427
        ]
      },
      "basis": "alignment",
      "note": "Modern 10th Street follows the roadway lettered Eleventh St.",
      "name": "eleventh-street"
    },
    {
      "kind": "state",
      "asWritten": "Eighth St.",
      "street": "8th Street",
      "from": {
        "px": [
          549,
          420
        ]
      },
      "to": {
        "px": [
          999,
          526
        ]
      },
      "basis": "alignment",
      "name": "eighth-street"
    },
    {
      "kind": "state",
      "asWritten": "Ninth St.",
      "street": "9th Street",
      "from": {
        "px": [
          543,
          891
        ]
      },
      "to": {
        "px": [
          998,
          1018
        ]
      },
      "basis": "alignment",
      "name": "ninth-street"
    },
    {
      "kind": "state",
      "asWritten": "Stanford Ave.",
      "street": "Stanford Avenue",
      "from": {
        "px": [
          936,
          512
        ]
      },
      "to": {
        "px": [
          959,
          1475
        ]
      },
      "basis": "alignment",
      "name": "stanford-ave"
    },
    {
      "kind": "state",
      "asWritten": "Towne Ave.",
      "street": "Towne Avenue",
      "from": {
        "px": [
          694,
          454
        ]
      },
      "to": {
        "px": [
          710,
          1485
        ]
      },
      "basis": "alignment",
      "name": "towne-ave"
    }
  ]
};
