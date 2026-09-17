module.exports = {
  id: "mr078-055",
  title: "Map of a Replat of a Portion of the Subdivision of the Lands of St. Paul's School",
  shortTitle: "St. Paul's School Replat",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR078/MR078-055.pdf",
  scan: "documents/mr078-055/mr078-055.pdf",
  transcription: null,

  date: { on: "1900-02" },   
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
    [385, 764], [415, 1596], [821, 1582], [830, 735]
  ],
  alignment: {
    image: "documents/mr078-055/mr078-055-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.05572, -118.261043], note: "map-tool corner (0,0)" },
      { px: [1163, 0], ll: [34.054518, -118.258324], note: "map-tool corner (1163,0)" },
      { px: [0, 1759], ll: [34.052288, -118.263221], note: "map-tool corner (0,1759)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"5th Street","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["5th Street","6th Street","Saint Paul Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SIXTH STREET",
      "name": "sixth-street",
      "street": "6th Street",
      "from": {
        "px": [
          388,
          856
        ]
      },
      "to": {
        "px": [
          829,
          866
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "ST. PAUL AVENUE",
      "street": "Saint Paul Avenue",
      "from": {
        "px": [
          518,
          853
        ]
      },
      "to": {
        "px": [
          518,
          1592
        ]
      },
      "basis": "alignment",
      "name": "st-paul-avenue"
    }
  ]
};
