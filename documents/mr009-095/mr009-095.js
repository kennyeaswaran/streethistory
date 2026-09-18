module.exports = {
  id: "mr009-095",
  title: "Plot of Subdivision of That Part of Lot 1, Block 37, Hancock's Survey, Lying South of Orange Street and Westerly from William Street, in the City of Los Angeles",
  shortTitle: "St. Paul's P.E. Church Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR009/MR009-095.pdf",
  scan: "documents/mr009-095/mr009-095.pdf",
  transcription: null,

  date: { on: "1888-06-19" },   
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
    [131, 554], [795, 572], [918, 1356], [116, 1333]
  ],
  alignment: {
    image: "documents/mr009-095/mr009-095-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.054924, -118.264614], note: "map-tool corner (0,0)" },
      { px: [1078, 0], ll: [34.053641, -118.261332], note: "map-tool corner (1078,0)" },
      { px: [0, 1630], ll: [34.050782, -118.26694], note: "map-tool corner (0,1630)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Lucas Avenue","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["7th Street","Bixel Street","Ingraham Street","Lucas Avenue","Wilshire Boulevard"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Seventh Street",
      "name": "seventh-street",
      "street": "7th Street",
      "from": {
        "px": [
          117,
          1257
        ]
      },
      "to": {
        "px": [
          903,
          1259
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "William St.",
      "street": "Bixel Street",
      "from": {
        "px": [
          746,
          571
        ]
      },
      "to": {
        "px": [
          718,
          1350
        ]
      },
      "basis": "alignment",
      "name": "william-farragut"
    },
    {
      "kind": "state",
      "asWritten": "Ingraham Street",
      "name": "ingraham",
      "street": "Ingraham Street",
      "from": {
        "px": [
          212,
          901
        ]
      },
      "to": {
        "px": [
          846,
          899
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Orange Street",
      "name": "orange-st-wilshire",
      "street": "Wilshire Boulevard",
      "from": {
        "px": [
          129,
          648
        ]
      },
      "to": {
        "px": [
          813,
          684
        ]
      },
      "basis": "alignment"
    }
  ]
};
