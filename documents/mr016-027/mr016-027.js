module.exports = {
  id: "mr016-027",
  title: "Map of the Moran Tract",
  shortTitle: "Moran Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR016/MR016-027.pdf",
  scan: "documents/mr016-027/mr016-027.pdf",
  transcription: null,

  date: { on: "1887-04-22" },   
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
    [120, 537], [102, 1352], [1052, 1282], [892, 480]
  ],
  alignment: {
    image: "documents/mr016-027/mr016-027-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.041462, -118.251662], note: "map-tool corner (0,0)" },
      { px: [1159, 0], ll: [34.038588, -118.248583], note: "map-tool corner (1159,0)" },
      { px: [0, 1705], ll: [34.037682, -118.256728], note: "map-tool corner (0,1705)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Cecelia Street","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["9th Street","Cecelia Street","Maple Avenue","Olympic Boulevard","San Julian Street","Santee Alley","Wall Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Ninth Street Extension",
      "street": "9th Street",
      "from": {
        "px": [
          119,
          599
        ]
      },
      "to": {
        "px": [
          914,
          589
        ]
      },
      "basis": "alignment",
      "note": "The modern 9th Street trace follows the complete corridor lettered Ninth Street Extension.",
      "name": "ninth-street"
    },
    {
      "kind": "state",
      "asWritten": "Maple Avenue",
      "street": "Maple Avenue",
      "from": {
        "px": [
          258,
          527
        ]
      },
      "to": {
        "px": [
          338,
          1335
        ]
      },
      "basis": "alignment",
      "note": "The modern Maple Avenue trace follows the complete roadway lettered Maple Avenue.",
      "name": "maple-dtla"
    },
    {
      "kind": "state",
      "asWritten": "Tenth Street",
      "street": "Olympic Boulevard",
      "from": {
        "px": [
          107,
          1118
        ]
      },
      "to": {
        "px": [
          922,
          1022
        ]
      },
      "basis": "alignment",
      "note": "Modern Olympic Boulevard follows the complete east-west roadway lettered Tenth Street.",
      "name": "tenth-street"
    },
    {
      "kind": "state",
      "asWritten": "Earl St",
      "street": "San Julian Street",
      "from": {
        "px": [
          835,
          484
        ]
      },
      "to": "9th Street",
      "basis": "alignment",
      "note": "The modern San Julian Street trace is labeled Earl St north of Ninth Street Extension",
      "name": "earl-st"
    },
    {
      "kind": "state",
      "asWritten": "San Julian Street",
      "street": "San Julian Street",
      "from": "9th Street",
      "to": {
        "px": [
          977,
          1288
        ]
      },
      "basis": "alignment",
      "note": "The modern San Julian Street trace follows the complete roadway lettered San Julian Street.",
      "name": "san-julian-st"
    },
    {
      "kind": "unnamed",
      "street": "Santee Alley",
      "from": {
        "px": [
          160,
          1106
        ]
      },
      "to": {
        "px": [
          181,
          1346
        ]
      },
      "basis": "alignment",
      "note": "The map draws a narrow two-edged way along the modern alley beside Block B, but no street name is lettered on it."
    },
    {
      "kind": "state",
      "asWritten": "Myrtle Avenue",
      "street": "Wall Street",
      "from": {
        "px": [
          557,
          505
        ]
      },
      "to": {
        "px": [
          663,
          1311
        ]
      },
      "basis": "alignment",
      "note": "Modern Wall Street follows the complete roadway lettered Myrtle Avenue.",
      "name": "myrtle"
    }
  ]
};
