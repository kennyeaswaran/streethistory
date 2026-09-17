module.exports = {
  id: "tr0096-062",
  title: "Tract No. 6912",
  shortTitle: "Tract No. 6912",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0096/TR0096-062.pdf",
  scan: "documents/tr0096-062/tr0096-062.pdf",
  transcription: null,

  date: { on: "1924-05" },   
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
    [779, 221], [737, 1280], [1620, 1299], [1586, 293]
  ],
  alignment: {
    image: "documents/tr0096-062/tr0096-062-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.067148, -118.269228], note: "map-tool corner (0,0)" },
      { px: [1746, 0], ll: [34.06651, -118.26774], note: "map-tool corner (1746,0)" },
      { px: [0, 2429], ll: [34.06542, -118.270292], note: "map-tool corner (0,2429)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Beverly Boulevard","Westlake Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "FIRST STREET",
      "street": "Beverly Boulevard",
      "from": {
        "px": [
          745,
          1070
        ]
      },
      "to": {
        "px": [
          1613,
          1090
        ]
      },
      "basis": "alignment",
      "name": "first-street"
    },
    {
      "kind": "state",
      "asWritten": "WESTLAKE AVENUE",
      "street": "Westlake Avenue",
      "from": {
        "px": [
          969,
          238
        ]
      },
      "to": {
        "px": [
          984,
          1285
        ]
      },
      "basis": "alignment",
      "name": "westlake-avenue"
    }
  ]
};
