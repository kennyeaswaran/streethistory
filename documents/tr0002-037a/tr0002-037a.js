module.exports = {
  id: "tr0002-037a",
  title: "Map of the Sixth Street and Lucas Avenue Tract",
  shortTitle: "Sixth Street and Lucas Avenue Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0002/TR0002-037a.pdf",
  scan: "documents/tr0002-037a/tr0002-037a.pdf",
  transcription: null,

  date: { on: "1902-07-22" },   
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
    [225, 465], [233, 998], [1035, 1015], [1017, 461]
  ],
  alignment: {
    image: "documents/tr0002-037a/tr0002-037a-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.057407, -118.263356], note: "map-tool corner (0,0)" },
      { px: [1149, 0], ll: [34.055994, -118.25996], note: "map-tool corner (1149,0)" },
      { px: [0, 1846], ll: [34.052855, -118.266076], note: "map-tool corner (0,1846)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["5th Street","6th Street","Bixel Street","Lucas Avenue"],

  rows: [
    {
      "kind": "absent",
      "street": "5th Street",
      "from": {
        "px": [
          229,
          700
        ]
      },
      "to": {
        "px": [
          322,
          700
        ]
      },
      "note": "This short detached modern segment crosses the corner lot west of the tract."
    },
    {
      "kind": "state",
      "asWritten": "Fifth St",
      "name": "fifth-street",
      "street": "5th Street",
      "from": {
        "px": [
          327,
          553
        ]
      },
      "to": {
        "px": [
          1020,
          552
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Sixth St",
      "name": "sixth-street",
      "street": "6th Street",
      "from": {
        "px": [
          232,
          924
        ]
      },
      "to": {
        "px": [
          1032,
          927
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Bixel St",
      "name": "bixel",
      "street": "Bixel Street",
      "from": {
        "px": [
          924,
          461
        ]
      },
      "to": {
        "px": [
          871,
          1012
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Lucas Ave",
      "name": "lucas-avenue",
      "street": "Lucas Avenue",
      "from": {
        "px": [
          327,
          464
        ]
      },
      "to": {
        "px": [
          320,
          1000
        ]
      },
      "basis": "alignment"
    }
  ]
};
