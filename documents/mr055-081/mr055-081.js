module.exports = {
  id: "mr055-081",
  title: "F. B. Wilde's Subdivision of a Part of the Coronel Tract",
  shortTitle: "Wilde's Coronel Tract Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR055/MR055-081.pdf",
  scan: "documents/mr055-081/mr055-081.pdf",
  transcription: null,

  date: { on: "1885-10-17" },   
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
    [229, 414], [228, 1108], [1020, 1075], [941, 435]
  ],
  alignment: {
    image: "documents/mr055-081/mr055-081-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.037926, -118.244407], note: "map-tool corner (0,0)" },
      { px: [1146, 0], ll: [34.04039, -118.241858], note: "map-tool corner (1146,0)" },
      { px: [0, 1782], ll: [34.034619, -118.239816], note: "map-tool corner (0,1782)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["7th Street","Central Avenue","Industrial Street","Kohler Street","Wilde Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SEVENTH ST.",
      "street": "7th Street",
      "from": {
        "px": [
          303,
          490
        ]
      },
      "to": {
        "px": [
          309,
          1105
        ]
      },
      "basis": "alignment",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "asWritten": "CENTRAL AVE.",
      "street": "Central Avenue",
      "from": {
        "px": [
          228,
          995
        ]
      },
      "to": {
        "px": [
          991,
          838
        ]
      },
      "basis": "alignment",
      "name": "central-ave",
      "note": "The modern avenue stays within the broad two-edged Central corridor as it bends northeast beyond Wilde Street."
    },
    {
      "kind": "state",
      "asWritten": "EASTON ST.",
      "street": "Industrial Street",
      "from": {
        "px": [
          586,
          541
        ]
      },
      "to": {
        "px": [
          591,
          1075
        ]
      },
      "basis": "alignment",
      "note": "Modern Industrial follows Easton Street, including its short continuation south of Central Avenue.",
      "name": "easton"
    },
    {
      "kind": "state",
      "asWritten": "KOHLER ST.",
      "street": "Kohler Street",
      "from": {
        "px": [
          303,
          541
        ]
      },
      "to": {
        "px": [
          953,
          536
        ]
      },
      "basis": "alignment",
      "name": "kohler"
    },
    {
      "kind": "state",
      "asWritten": "WILDE ST.",
      "street": "Wilde Street",
      "from": {
        "px": [
          858,
          539
        ]
      },
      "to": {
        "px": [
          871,
          926
        ]
      },
      "basis": "alignment",
      "name": "wilde-st"
    }
  ]
};
