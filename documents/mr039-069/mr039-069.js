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
      { px: [0, 0], ll: [34.048581, -118.247699], note: "map-tool corner (0,0)" },
      { px: [1117, 0], ll: [34.047521, -118.246073], note: "map-tool corner (1117,0)" },
      { px: [0, 1699], ll: [34.046518, -118.249631], note: "map-tool corner (0,1699)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["5th Street","Main Street","Winston Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Fifth St",
      "street": "5th Street",
      "from": {
        "px": [
          161,
          1255
        ]
      },
      "to": {
        "px": [
          962,
          1251
        ]
      },
      "basis": "alignment",
      "note": "The modern 5th Street centerline follows the roadway lettered Fifth St along the tract's southern side.",
      "name": "fifth-street"
    },
    {
      "kind": "state",
      "asWritten": "Los Angeles St.",
      "street": "Main Street",
      "from": {
        "px": [
          396,
          378
        ]
      },
      "to": {
        "px": [
          395,
          1392
        ]
      },
      "basis": "alignment",
      "note": "Despite the historical label, the supplied alignment places the modern Main Street centerline in this roadway along the tract's western side.",
      "name": "los-angeles-street"
    },
    {
      "kind": "state",
      "asWritten": "WINSTON ST",
      "street": "Winston Street",
      "from": "Main Street",
      "to": {
        "px": [
          988,
          708
        ]
      },
      "basis": "alignment",
      "note": "The modern Winston Street centerline follows the roadway lettered WINSTON ST from Main Street to the covered edge.",
      "name": "winston-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Winston St",
      "trace": [
        [
          397,
          533
        ],
        [
          202,
          443
        ]
      ],
      "basis": "alignment",
      "name": "winston-st"
    }
  ]
};
