module.exports = {
  id: "mr005-307-a",
  title: "Map of Block W Mott Tract as subdivided by E. T. Wright at request of M. L. Wicks in Los Angeles City",
  shortTitle: "Block W, Mott Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-307.pdf",
  scan: "documents/mr005-307-a/mr005-307-a.pdf",
  transcription: null,

  date: { on: "1883-06-25" },   
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
    [187, 812], [1159, 854], [1145, 63], [169, 69]
  ],
  alignment: {
    image: "documents/mr005-307-a/mr005-307-a-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.057293, -118.25036], note: "map-tool corner (0,0)" },
      { px: [1142, 0], ll: [34.055617, -118.251857], note: "map-tool corner (1142,0)" },
      { px: [0, 1020], ll: [34.058409, -118.252154], note: "map-tool corner (0,1020)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["1st Street","2nd Street","2nd Street Tunnel","Figueroa Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "FIRST STREET",
      "street": "1st Street",
      "from": {
        "px": [
          231,
          814
        ]
      },
      "to": {
        "px": [
          246,
          69
        ]
      },
      "basis": "alignment",
      "note": "The modern 1st Street trace follows the complete western boundary roadway lettered FIRST STREET.",
      "name": "first-street"
    },
    {
      "kind": "state",
      "asWritten": "SECOND STREET",
      "street": "2nd Street",
      "from": {
        "px": [
          1082,
          851
        ]
      },
      "to": {
        "px": [
          1089,
          579
        ]
      },
      "basis": "alignment",
      "note": "The surface portion of modern 2nd Street follows the southern part of the roadway lettered SECOND STREET.",
      "name": "second-street"
    },
    {
      "kind": "state",
      "asWritten": "SECOND STREET",
      "street": "2nd Street Tunnel",
      "from": {
        "px": [
          1089,
          579
        ]
      },
      "to": {
        "px": [
          1097,
          63
        ]
      },
      "basis": "alignment",
      "note": "The modern tunnel trace occupies the northern continuation of the same roadway lettered SECOND STREET; the sheet predates the tunnel structure.",
      "name": "second-street"
    },
    {
      "kind": "state",
      "asWritten": "PEARL STREET",
      "street": "Figueroa Street",
      "from": {
        "px": [
          185,
          745
        ]
      },
      "to": {
        "px": [
          1158,
          777
        ]
      },
      "basis": "alignment",
      "note": "Modern Figueroa Street follows the southern boundary roadway lettered PEARL STREET.",
      "name": "pearl"
    },
    {
      "kind": "vanished",
      "asWritten": "FLOWER STREET",
      "trace": [
        [
          280,
          165
        ],
        [
          1055,
          176
        ]
      ],
      "basis": "alignment",
      "note": "The northern boundary roadway is drawn and lettered FLOWER STREET, but none of the supplied modern streets follows it.",
      "name": "flower"
    }
  ]
};
