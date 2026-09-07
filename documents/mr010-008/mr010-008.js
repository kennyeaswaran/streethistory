module.exports = {
  id: "mr010-008",
  title: "Subdivision of the Garden of J. Murat",
  shortTitle: "Garden of J. Murat",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR010/MR010-008.pdf",
  scan: "documents/mr010-008/mr010-008.pdf",
  transcription: null,

  date: { on: "1868-06" },   
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
    [66, 567], [281, 1183], [1071, 1286], [1043, 827]
  ],
  alignment: {
    image: "documents/mr010-008/mr010-008-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.053109, -118.241785], note: "map-tool corner (0,0)" },
      { px: [1138, 0], ll: [34.052075, -118.238036], note: "map-tool corner (1138,0)" },
      { px: [0, 1636], ll: [34.048613, -118.243567], note: "map-tool corner (0,1636)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Toriumi Plaza","from":"Astronaut Ellison S Onizuka Street","to":"1st Street"},{"street":"Toriumi Plaza","from":"Astronaut Ellison S Onizuka Street","to":"1st Street"},{"street":"Toriumi Plaza","from":"Astronaut Ellison S Onizuka Street","to":"1st Street"}],

  sweptFully: false,
  sweptFor: [],

  rows: [
    {
      "kind": "state",
      "asWritten": "First Street",
      "street": "1st Street",
      "from": {
        "px": [
          82,
          612
        ]
      },
      "to": {
        "px": [
          1055,
          1019
        ]
      },
      "basis": "alignment",
      "note": "The modern 1st Street centerline follows the broad roadway lettered First Street.",
      "name": "first-street"
    },
    {
      "kind": "state",
      "asWritten": "San Pedro St.",
      "street": "Astronaut Ellison S Onizuka Street",
      "from": "1st Street",
      "to": {
        "px": [
          370,
          1193
        ]
      },
      "basis": "alignment",
      "note": "The modern Onizuka Street centerline follows the older roadway lettered San Pedro St. along the garden's western side.",
      "name": "san-pedro"
    },
    {
      "kind": "absent",
      "street": "Japanese Village Plaza Mall",
      "from": {
        "px": [
          1008,
          1035
        ]
      },
      "to": {
        "px": [
          838,
          1256
        ]
      },
      "note": "The modern mall passage crosses the interiors and boundary lines of the southeastern lots; no roadway is drawn there."
    },
    {
      "kind": "absent",
      "street": "Judge John Aiso Street",
      "from": {
        "px": [
          573,
          702
        ]
      },
      "to": "1st Street",
      "basis": "alignment",
      "note": "North of First Street, modern Judge John Aiso Street follows the roadway lettered Wilmington St."
    },
    {
      "kind": "absent",
      "street": "San Pedro Street",
      "from": "1st Street",
      "to": {
        "px": [
          429,
          1202
        ]
      },
      "note": "South of First Street, the modern San Pedro Street line crosses the subdivided garden and ornamental paths rather than a two-edge street corridor."
    },
    {
      "kind": "absent",
      "street": "Toriumi Plaza",
      "from": {
        "px": [
          366,
          670
        ]
      },
      "to": {
        "px": [
          529,
          690
        ]
      },
      "note": "The modern plaza passage lies across numbered parcels and a building footprint north of First Street; no roadway is drawn on its alignment."
    },
    {
      "kind": "absent",
      "street": "Toriumi Plaza",
      "from": "Astronaut Ellison S Onizuka Street",
      "to": "1st Street",
      "note": "Added in review: the sheet covers this 32 m and draws no street along it."
    },
    {
      "kind": "absent",
      "street": "Toriumi Plaza",
      "from": "Astronaut Ellison S Onizuka Street",
      "to": "1st Street",
      "note": "Added in review: the sheet covers this 32 m and draws no street along it."
    },
    {
      "kind": "absent",
      "street": "Toriumi Plaza",
      "from": "Astronaut Ellison S Onizuka Street",
      "to": "1st Street",
      "note": "Added in review: the sheet covers this 32 m and draws no street along it."
    },
    {
      "kind": "absent",
      "street": "Toriumi Plaza",
      "from": "Astronaut Ellison S Onizuka Street",
      "to": "1st Street",
      "note": "Added in review: the sheet covers this 32 m and draws no street along it."
    },
    {
      "kind": "vanished",
      "asWritten": "Wilmington Street",
      "trace": [
        [
          671,
          871
        ],
        [
          788,
          610
        ]
      ],
      "basis": "alignment",
      "name": "wilmington-street"
    }
  ]
};
