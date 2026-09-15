module.exports = {
  id: "mr039-069",
  title: "Plat of the Jones and Ponet Block in the City of Los Angeles, Cal.",
  shortTitle: "Jones and Ponet Block",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR039/MR039-069.pdf",
  scan: "documents/mr039-069/mr039-069.pdf",
  transcription: null,

  date: { on: "1889-03" },   
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
    [245, 330], [150, 1380], [954, 1418], [995, 571]
  ],
  alignment: {
    image: "documents/mr039-069/mr039-069-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.047461, -118.24697], note: "map-tool corner (0,0)" },
      { px: [1117, 0], ll: [34.046673, -118.245759], note: "map-tool corner (1117,0)" },
      { px: [0, 1699], ll: [34.045926, -118.248408], note: "map-tool corner (0,1699)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["5th Street","Los Angeles Street","Winston Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Fifth St",
      "street": "5th Street",
      "from": {
        "px": [
          163,
          1240
        ]
      },
      "to": {
        "px": [
          962,
          1253
        ]
      },
      "basis": "alignment",
      "name": "fifth-street",
      "note": "The corrected modern trace stays in the Fifth St roadway south of the block."
    },
    {
      "kind": "state",
      "asWritten": "Los Angeles St.",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          430,
          389
        ]
      },
      "to": {
        "px": [
          394,
          1392
        ]
      },
      "basis": "alignment",
      "name": "los-angeles-street",
      "note": "The corrected Los Angeles Street centerline follows this labeled roadway on the block's west side."
    },
    {
      "kind": "state",
      "asWritten": "WINSTON ST",
      "street": "Winston Street",
      "from": {
        "px": [
          231,
          485
        ]
      },
      "to": {
        "px": [
          989,
          694
        ]
      },
      "basis": "alignment",
      "name": "winston-st",
      "note": "The westward segment previously recorded as vanished is continuous with the modern Winston Street trace; the map letters the corridor once across the block's north side."
    }
  ]
};
