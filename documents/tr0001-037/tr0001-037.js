module.exports = {
  id: "tr0001-037",
  title: "Map of the Mallard Home Tract in the City of Los Angeles (surveyed October 1901 by J. J. Rowan)",
  shortTitle: "Mallard Home Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0001/TR0001-037.pdf",
  scan: "documents/tr0001-037/tr0001-037.pdf",
  transcription: null,

  date: { on: "1901-10" },   
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
    [380, 523], [409, 1352], [814, 1370], [848, 394]
  ],
  alignment: {
    image: "documents/tr0001-037/tr0001-037-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.051593, -118.26538], note: "map-tool corner (0,0)" },
      { px: [1151, 0], ll: [34.049964, -118.261871], note: "map-tool corner (1151,0)" },
      { px: [0, 1842], ll: [34.046908, -118.268506], note: "map-tool corner (0,1842)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Bixel Street","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["8th Place","8th Street","Bixel Street","Harbor Freeway","James M Wood Boulevard"],

  rows: [
    {
      "kind": "state",
      "asWritten": "NINTH STREET",
      "name": "ninth-street",
      "street": "8th Place",
      "from": {
        "px": [
          406,
          1272
        ]
      },
      "to": {
        "px": [
          590,
          1285
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "state",
      "asWritten": "EIGHTH STREET",
      "name": "eighth-street",
      "street": "8th Street",
      "from": {
        "px": [
          381,
          563
        ]
      },
      "to": {
        "px": [
          845,
          475
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "absent",
      "street": "Harbor Freeway",
      "from": {
        "px": [
          666,
          444
        ]
      },
      "to": {
        "px": [
          397,
          1021
        ]
      },
      "confirmed": true,
      "note": "The freeway carriageway cuts diagonally across the numbered lots and Mallard Street."
    },
    {
      "kind": "absent",
      "street": "Harbor Freeway",
      "from": {
        "px": [
          732,
          426
        ]
      },
      "to": {
        "px": [
          402,
          1152
        ]
      },
      "confirmed": true,
      "note": "The second freeway carriageway also cuts diagonally across the tract rather than following a drawn roadway."
    },
    {
      "kind": "state",
      "asWritten": "NINTH STREET",
      "name": "ninth-street",
      "street": "James M Wood Boulevard",
      "from": {
        "px": [
          407,
          1300
        ]
      },
      "to": {
        "px": [
          817,
          1283
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "vanished",
      "asWritten": "MALLARD STREET",
      "name": "mallard-street",
      "trace": [
        [
          585,
          535
        ],
        [
          585,
          1255
        ]
      ],
      "basis": "alignment",
      "confirmed": true,
      "note": "The central roadway, later annotated as changed to Bixel Street, has no supplied modern centerline following its historical alignment."
    }
  ]
};
