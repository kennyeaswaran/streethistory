module.exports = {
  id: "mr030-009-p3",
  title: "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal.",
  shortTitle: "Wolfskill Orchard Tract, sheet 3 (M.R. 30-11)",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf",
  scan: "documents/mr030-009-p3/mr030-009-p3.pdf",
  transcription: "documents/mr003-060-p1/mr003-060-p1-partA.md",

  date: { on: "1888-01-11" },   
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  readBy: "human",

  // Coverage is the ground this document informs about — the tract boundary,
  // not the sheet edge (MODEL-SPEC §4.4). SCAN PIXELS against alignment.image,
  // so a better alignment carries it along (§4.6).
  coverage: [
    [551, 305], [73, 1014], [489, 1322], [990, 509]
  ],
  alignment: {
    image: "documents/mr030-009-p3/mr030-009-p3-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.039536, -118.24767], note: "document-tool corner (0,0)" },
      { px: [1137, 0], ll: [34.045463, -118.247335], note: "document-tool corner (1137,0)" },
      { px: [0, 1693], ll: [34.03912, -118.237094], note: "document-tool corner (0,1693)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["5th Street","6th Street","Central Avenue","Ceres Avenue","Crocker Street","Gladys Avenue","San Pedro Street","Stanford Avenue","Towne Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Fifth St",
      "street": "5th Street",
      "from": {
        "px": [
          946,
          489
        ]
      },
      "to": {
        "px": [
          478,
          1233
        ]
      },
      "basis": "alignment",
      "note": "Fifth is lettered along this numbered corridor and St is visible on the adjoining page.",
      "name": "fifth-street"
    },
    {
      "kind": "state",
      "asWritten": "Sixth St",
      "street": "6th Street",
      "from": {
        "px": [
          570,
          314
        ]
      },
      "to": {
        "px": [
          92,
          1028
        ]
      },
      "basis": "alignment",
      "note": "The modern centerline continues through the same Sixth St corridor lettered on pages 1 and 2.",
      "name": "sixth-street"
    },
    {
      "kind": "state",
      "asWritten": "Wolfskill Ave",
      "street": "Central Avenue",
      "from": {
        "px": [
          544,
          1233
        ]
      },
      "to": {
        "px": [
          368,
          1232
        ]
      },
      "basis": "alignment",
      "note": "This short page segment is the continuation of the Wolfskill Ave corridor identified across pages 2 and 4.",
      "name": "wolfskill-ave"
    },
    {
      "kind": "state",
      "asWritten": "Ceres Ave",
      "street": "Ceres Avenue",
      "from": {
        "px": [
          404,
          1232
        ]
      },
      "to": {
        "px": [
          86,
          994
        ]
      },
      "basis": "alignment",
      "note": "The aligned roadway is the continuation of Ceres Ave, whose name is split across pages 1 and 2.",
      "name": "ceres-ave",
      "attests": "planned-on"
    },
    {
      "kind": "state",
      "asWritten": "Stanford Ave",
      "street": "Crocker Street",
      "from": {
        "px": [
          829,
          771
        ]
      },
      "to": {
        "px": [
          423,
          494
        ]
      },
      "basis": "alignment",
      "note": "The modern Crocker Street trace follows the corridor lettered Stanford Ave across the document.",
      "name": "stanford-ave",
      "attests": "planned-on"
    },
    {
      "kind": "state",
      "asWritten": "Gladys Ave",
      "street": "Gladys Avenue",
      "from": {
        "px": [
          591,
          1156
        ]
      },
      "to": {
        "px": [
          169,
          871
        ]
      },
      "basis": "alignment",
      "note": "This page continues the roadway lettered Gladys on page 2 and Ave on page 4.",
      "name": "gladys-ave",
      "attests": "planned-on"
    },
    {
      "kind": "state",
      "asWritten": "San Pedro Ave",
      "street": "San Pedro Street",
      "from": {
        "px": [
          952,
          571
        ]
      },
      "to": {
        "px": [
          521,
          349
        ]
      },
      "basis": "alignment",
      "note": "The modern trace remains inside the San Pedro Ave corridor whose lettering spans pages 2 through 4.",
      "name": "san-pedro"
    },
    {
      "kind": "state",
      "asWritten": "Ruth Ave",
      "street": "Stanford Avenue",
      "from": {
        "px": [
          669,
          1031
        ]
      },
      "to": {
        "px": [
          253,
          747
        ]
      },
      "basis": "alignment",
      "note": "Geometry places modern Stanford Avenue in the historic corridor lettered Ruth Ave.",
      "name": "ruth-ave",
      "attests": "planned-on"
    },
    {
      "kind": "state",
      "asWritten": "Towne Ave",
      "street": "Towne Avenue",
      "from": {
        "px": [
          750,
          898
        ]
      },
      "to": {
        "px": [
          340,
          618
        ]
      },
      "basis": "alignment",
      "note": "This is the continuation of the Towne Ave roadway lettered across pages 2 and 4.",
      "name": "towne-ave",
      "attests": "planned-on"
    }
  ]
};
