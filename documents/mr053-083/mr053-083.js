module.exports = {
  id: "mr053-083",
  title: "Arthur Tract",
  shortTitle: "Arthur Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-083.pdf",
  scan: "documents/mr053-083/mr053-083.pdf",
  transcription: null,

  date: { on: "1893-12-30" },   
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
    [18, 364], [57, 1000], [1259, 968], [784, 370]
  ],
  alignment: {
    image: "documents/mr053-083/mr053-083-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.041676, -118.233665], note: "map-tool corner (0,0)" },
      { px: [1114, 0], ll: [34.042023, -118.229896], note: "map-tool corner (1114,0)" },
      { px: [0, 1689], ll: [34.036908, -118.233034], note: "map-tool corner (0,1689)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Mateo Street","from":null,"to":"Palmetto Street"}],

  sweptFully: true,
  sweptFor: ["Mateo Street","Palmetto Street","Santa Fe Avenue","Willow Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "MATEO ST.",
      "street": "Mateo Street",
      "from": {
        "px": [
          155,
          439
        ]
      },
      "to": {
        "px": [
          152,
          997
        ]
      },
      "basis": "alignment",
      "name": "mateo"
    },
    {
      "kind": "unnamed",
      "street": "Palmetto Street",
      "from": {
        "px": [
          24,
          465
        ]
      },
      "to": {
        "px": [
          77,
          464
        ]
      },
      "note": "Blank ground west of the short upper roadway before it reaches the Mateo frontage."
    },
    {
      "kind": "unnamed",
      "street": "Palmetto Street",
      "from": {
        "px": [
          77,
          464
        ]
      },
      "to": {
        "px": [
          155,
          464
        ]
      },
      "basis": "alignment",
      "note": "A short two-edged east-west roadway is drawn west of Mateo above the numbered lots, without a label."
    },
    {
      "kind": "state",
      "asWritten": "PALMETTO ST.",
      "street": "Palmetto Street",
      "from": {
        "px": [
          156,
          556
        ]
      },
      "to": {
        "px": [
          797,
          567
        ]
      },
      "basis": "alignment",
      "note": "The eastern Palmetto run is lower on this sheet than the short western run and follows the clearly lettered corridor.",
      "name": "palmetto"
    },
    {
      "kind": "absent",
      "street": "Santa Fe Avenue",
      "from": {
        "px": [
          685,
          369
        ]
      },
      "to": "Palmetto Street",
      "note": "The diagonal ink is the edge of the Santa Fe railroad yards and tract, not a two-edged street corridor."
    },
    {
      "kind": "absent",
      "street": "Santa Fe Avenue",
      "from": "Palmetto Street",
      "to": {
        "px": [
          797,
          980
        ]
      },
      "note": "The straight modern avenue cuts through numbered tract lots; no north-south roadway is drawn here."
    },
    {
      "kind": "state",
      "asWritten": "WILLOW ST.",
      "street": "Willow Street",
      "from": {
        "px": [
          152,
          899
        ]
      },
      "to": {
        "px": [
          798,
          909
        ]
      },
      "basis": "alignment",
      "name": "willow"
    }
  ]
};
