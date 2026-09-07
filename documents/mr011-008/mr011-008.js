module.exports = {
  id: "mr011-008",
  title: "Map of the Goldsworthy 8th St. Tract in the City of Los Angeles, Cal.",
  shortTitle: "Goldsworthy 8th St. Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-008.pdf",
  scan: "documents/mr011-008/mr011-008.pdf",
  transcription: null,

  date: { on: "1886-09-04" },   
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
    [1446, 478], [257, 376], [181, 1037], [1469, 1059]
  ],
  alignment: {
    image: "documents/mr011-008/mr011-008-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.038503, -118.253155], note: "map-tool corner (0,0)" },
      { px: [1667, 0], ll: [34.041875, -118.249655], note: "map-tool corner (1667,0)" },
      { px: [0, 1107], ll: [34.036564, -118.250472], note: "map-tool corner (0,1107)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Agatha Street","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["8th Street","9th Street","Agatha Street","San Julian Street","San Pedro Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Eighth Street",
      "street": "8th Street",
      "from": {
        "px": [
          993,
          439
        ]
      },
      "to": "San Pedro Street",
      "basis": "alignment",
      "note": "The modern 8th Street trace follows the complete 60-foot roadway lettered Eighth Street.",
      "name": "eighth-street"
    },
    {
      "kind": "unnamed",
      "street": "8th Street",
      "from": "San Pedro Street",
      "to": {
        "px": [
          799,
          1048
        ]
      },
      "basis": "alignment",
      "note": "The modern 8th Street trace follows the complete 60-foot roadway lettered Eighth Street."
    },
    {
      "kind": "state",
      "asWritten": "Ninth Street",
      "street": "9th Street",
      "from": {
        "px": [
          303,
          380
        ]
      },
      "to": "San Pedro Street",
      "basis": "alignment",
      "note": "The modern 9th Street trace follows the complete 80-foot roadway lettered Ninth Street.",
      "name": "ninth-street"
    },
    {
      "kind": "unnamed",
      "street": "9th Street",
      "from": "San Pedro Street",
      "to": {
        "px": [
          221,
          1038
        ]
      },
      "basis": "alignment",
      "note": "The modern 9th Street trace follows the complete 80-foot roadway lettered Ninth Street."
    },
    {
      "kind": "state",
      "asWritten": "Earl Street",
      "street": "San Julian Street",
      "from": {
        "px": [
          1452,
          639
        ]
      },
      "to": {
        "px": [
          234,
          580
        ]
      },
      "basis": "alignment",
      "note": "Modern San Julian Street follows the complete 60-foot roadway lettered Earl Street.",
      "name": "earl-st"
    },
    {
      "kind": "state",
      "asWritten": "San Pedro Street",
      "street": "San Pedro Street",
      "from": {
        "px": [
          1465,
          966
        ]
      },
      "to": {
        "px": [
          191,
          953
        ]
      },
      "basis": "alignment",
      "note": "The modern San Pedro Street trace follows the complete 90-foot roadway lettered San Pedro Street.",
      "name": "san-pedro"
    }
  ]
};
