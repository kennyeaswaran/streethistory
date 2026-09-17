module.exports = {
  id: "mr006-427",
  title: "Downey Tract, Being a Subdivision of Division A, Lot 8, Block 38, of the Canal and Reservoir Lands, Los Angeles City",
  shortTitle: "Downey Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-427.pdf",
  scan: "documents/mr006-427/mr006-427.pdf",
  transcription: null,

  date: { on: "1883-08-20" },   
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
    [1373, 403], [1375, 885], [232, 872], [229, 421]
  ],
  alignment: {
    image: "documents/mr006-427/mr006-427-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.054547, -118.266429], note: "map-tool corner (0,0)" },
      { px: [1705, 0], ll: [34.060858, -118.262542], note: "map-tool corner (1705,0)" },
      { px: [0, 1080], ll: [34.052492, -118.261638], note: "map-tool corner (0,1080)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["3rd Street","4th Street","5th Street","6th Street","Bixel Street","Lucas Avenue","Maryland Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "ARNOLD ST.",
      "street": "3rd Street",
      "from": {
        "px": [
          1241,
          405
        ]
      },
      "to": {
        "px": [
          1249,
          884
        ]
      },
      "basis": "alignment",
      "name": "arnold"
    },
    {
      "kind": "state",
      "asWritten": "FOURTH ST.",
      "street": "4th Street",
      "from": {
        "px": [
          1007,
          447
        ]
      },
      "to": {
        "px": [
          1008,
          881
        ]
      },
      "basis": "alignment",
      "name": "fourth-street"
    },
    {
      "kind": "state",
      "asWritten": "FIFTH ST.",
      "name": "fifth-street",
      "street": "5th Street",
      "from": {
        "px": [
          529,
          455
        ]
      },
      "to": {
        "px": [
          535,
          875
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Ward St",
      "street": "6th Street",
      "from": {
        "px": [
          283,
          420
        ]
      },
      "to": {
        "px": [
          287,
          873
        ]
      },
      "basis": "alignment",
      "name": "ward-st"
    },
    {
      "kind": "state",
      "asWritten": "LAFAYETTE AVENUE",
      "name": "lafayette-bixel",
      "street": "Bixel Street",
      "from": {
        "px": [
          1375,
          853
        ]
      },
      "to": {
        "px": [
          232,
          819
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "LUCAS AVENUE",
      "name": "lucas-avenue",
      "street": "Lucas Avenue",
      "from": {
        "px": [
          1373,
          445
        ]
      },
      "to": {
        "px": [
          229,
          453
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "STRELITZ ST.",
      "street": "Maryland Street",
      "from": {
        "px": [
          764,
          453
        ]
      },
      "to": {
        "px": [
          772,
          849
        ]
      },
      "basis": "alignment",
      "name": "strelitz-st"
    }
  ]
};
