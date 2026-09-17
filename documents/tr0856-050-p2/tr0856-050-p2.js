module.exports = {
  id: "tr0856-050-p2",
  title: "Tract No. 30213",
  shortTitle: "Tract No. 30213",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0856/TR0856-050-p2.pdf",
  scan: "documents/tr0856-050-p2/tr0856-050-p2.pdf",
  transcription: null,

  date: { on: "1976-08-30" },   
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
    [823, 232], [-32, 1546], [1352, 2348], [1623, 1992],
    [1645, 878]
  ],
  alignment: {
    image: "documents/tr0856-050-p2/tr0856-050-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.052316, -118.243944], note: "map-tool corner (0,0)" },
      { px: [1738, 0], ll: [34.052307, -118.241004], note: "map-tool corner (1738,0)" },
      { px: [0, 2490], ll: [34.048801, -118.243959], note: "map-tool corner (0,2490)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["1st Street","2nd Street","Astronaut Ellison S Onizuka Street","Los Angeles Street","San Pedro Street","Toriumi Plaza"],

  rows: [
    {
      "kind": "state",
      "asWritten": "1st STREET",
      "name": "first-street",
      "street": "1st Street",
      "from": {
        "px": [
          717,
          395
        ]
      },
      "to": {
        "px": [
          1639,
          1205
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "2nd STREET",
      "name": "second-street",
      "street": "2nd Street",
      "from": {
        "px": [
          137,
          1286
        ]
      },
      "to": {
        "px": [
          1440,
          2232
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "WELLER STREET",
      "street": "Astronaut Ellison S Onizuka Street",
      "from": {
        "px": [
          1218,
          830
        ]
      },
      "to": {
        "px": [
          1235,
          1994
        ]
      },
      "basis": "alignment",
      "name": "weller-street"
    },
    {
      "kind": "state",
      "asWritten": "LOS ANGELES STREET",
      "name": "los-angeles-street",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          1027,
          393
        ]
      },
      "to": {
        "px": [
          205,
          1684
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "unnamed",
      "street": "San Pedro Street",
      "from": {
        "px": [
          1631,
          1604
        ]
      },
      "to": {
        "px": [
          1247,
          2287
        ]
      },
      "note": "The covered modern segment is outside the mapped street corridors."
    },
    {
      "kind": "absent",
      "street": "Toriumi Plaza",
      "from": {
        "px": [
          1643,
          977
        ]
      },
      "to": {
        "px": [
          1642,
          1044
        ]
      },
      "note": "No corresponding roadway is drawn in this short covered segment."
    }
  ]
};
