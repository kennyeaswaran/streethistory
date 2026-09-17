module.exports = {
  id: "tr0007-078a",
  title: "Bixel Street Tract",
  shortTitle: "Bixel Street Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0007/TR0007-078a.pdf",
  scan: "documents/tr0007-078a/tr0007-078a.pdf",
  transcription: null,

  date: { on: "1905-06-08" },   
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
    [341, 683], [341, 1179], [855, 1180], [830, 606]
  ],
  alignment: {
    image: "documents/tr0007-078a/tr0007-078a-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.057517, -118.262193], note: "map-tool corner (0,0)" },
      { px: [1181, 0], ll: [34.05607, -118.258683], note: "map-tool corner (1181,0)" },
      { px: [0, 1842], ll: [34.052949, -118.264899], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["5th Street","6th Street","Bixel Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "FIFTH ST.",
      "name": "fifth-street",
      "street": "5th Street",
      "from": {
        "px": [
          341,
          744
        ]
      },
      "to": {
        "px": [
          836,
          746
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "SIXTH ST.",
      "name": "sixth-street",
      "street": "6th Street",
      "from": {
        "px": [
          341,
          1115
        ]
      },
      "to": {
        "px": [
          852,
          1120
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "BIXEL ST.",
      "name": "bixel",
      "street": "Bixel Street",
      "from": {
        "px": [
          622,
          639
        ]
      },
      "to": {
        "px": [
          572,
          1179
        ]
      },
      "basis": "alignment"
    }
  ]
};
