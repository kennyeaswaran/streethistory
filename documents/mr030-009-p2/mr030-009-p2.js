module.exports = {
  id: "mr030-009-p2",
  title: "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal.",
  shortTitle: "Wolfskill Orchard Tract, sheet 2 (M.R. 30-10)",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf",
  scan: "documents/mr030-009-p2/mr030-009-p2.pdf",
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
    [1024, 360], [649, 95], [85, 821], [483, 1065],
    [149, 1611], [953, 1674], [990, 1253], [615, 1042]
  ],
  alignment: {
    image: "documents/mr030-009-p2/mr030-009-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.037554, -118.247727], note: "document-tool corner (0,0)" },
      { px: [1144, 0], ll: [34.043159, -118.247411], note: "document-tool corner (1144,0)" },
      { px: [0, 1677], ll: [34.037166, -118.237881], note: "document-tool corner (0,1677)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: ["Palmetto Street",{"street":"Factory Place","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["5th Street","6th Street","7th Street","Alameda Street","Central Avenue","Ceres Avenue","Crocker Street","Factory Place","Gladys Avenue","San Pedro Street","Stanford Avenue","Towne Avenue"],

  rows: [
    {
      "kind": "unnamed",
      "street": "5th Street",
      "from": {
        "px": [
          951,
          1231
        ]
      },
      "to": {
        "px": [
          913,
          1302
        ]
      },
      "note": "This short clipped run lies beside the triangular parcel and has no drawn roadway along it."
    },
    {
      "kind": "state",
      "asWritten": "Poplar St",
      "street": "5th Street",
      "from": "Alameda Street",
      "to": {
        "px": [
          880,
          1668
        ]
      },
      "basis": "alignment",
      "note": "South and east of Alameda the modern 5th Street trace occupies the short corridor lettered Poplar St.",
      "name": "poplar-st"
    },
    {
      "kind": "state",
      "asWritten": "Sixth St",
      "street": "6th Street",
      "from": {
        "px": [
          998,
          342
        ]
      },
      "to": "Alameda Street",
      "basis": "alignment",
      "note": "The long modern diagonal remains centered in the Sixth St corridor down to Alameda.",
      "name": "sixth-street"
    },
    {
      "kind": "state",
      "asWritten": "Seventh St",
      "street": "7th Street",
      "from": {
        "px": [
          668,
          108
        ]
      },
      "to": {
        "px": [
          109,
          835
        ]
      },
      "basis": "alignment",
      "note": "The modern centerline follows the full Seventh St corridor across this page.",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "asWritten": "Alameda St",
      "street": "Alameda Street",
      "from": {
        "px": [
          962,
          1577
        ]
      },
      "to": {
        "px": [
          172,
          1574
        ]
      },
      "basis": "alignment",
      "note": "Alameda is lettered here and the St suffix is continued on pages 4 and 5.",
      "name": "alameda-st"
    },
    {
      "kind": "state",
      "asWritten": "Wolfskill Ave",
      "street": "Central Avenue",
      "from": {
        "px": [
          986,
          1303
        ]
      },
      "to": {
        "px": [
          339,
          1300
        ]
      },
      "basis": "alignment",
      "note": "The modern Central Avenue trace follows the corridor whose Wolfskill name is here and Ave suffix appears on page 4.",
      "name": "wolfskill-ave"
    },
    {
      "kind": "state",
      "asWritten": "Ceres Ave",
      "street": "Ceres Avenue",
      "from": {
        "px": [
          834,
          1302
        ]
      },
      "to": {
        "px": [
          135,
          801
        ]
      },
      "basis": "alignment",
      "note": "The Ave suffix is visible on this page and Ceres is lettered on page 1; the geometry joins the same corridor.",
      "name": "ceres-ave",
      "attests": "planned-on"
    },
    {
      "kind": "state",
      "asWritten": "Stanford Ave",
      "street": "Crocker Street",
      "from": {
        "px": [
          908,
          554
        ]
      },
      "to": {
        "px": [
          527,
          293
        ]
      },
      "basis": "alignment",
      "note": "Geometry, not the modern name, places Crocker Street in the corridor lettered Stanford, completed by Ave on page 4.",
      "name": "stanford-ave",
      "attests": "planned-on"
    },
    {
      "kind": "state",
      "asWritten": "Gladys Ave",
      "street": "Gladys Avenue",
      "from": {
        "px": [
          659,
          968
        ]
      },
      "to": {
        "px": [
          230,
          674
        ]
      },
      "basis": "alignment",
      "note": "Gladys is lettered here and Ave on page 4; the modern centerline stays within the same corridor.",
      "name": "gladys-ave",
      "attests": "planned-on"
    },
    {
      "kind": "state",
      "asWritten": "San Pedro Ave",
      "street": "San Pedro Street",
      "from": {
        "px": [
          1006,
          389
        ]
      },
      "to": {
        "px": [
          632,
          116
        ]
      },
      "basis": "alignment",
      "note": "San Pedro is lettered here and Ave on page 4; the supplied centerline follows that roadway.",
      "name": "san-pedro"
    },
    {
      "kind": "state",
      "asWritten": "Ruth Ave",
      "street": "Stanford Avenue",
      "from": {
        "px": [
          741,
          833
        ]
      },
      "to": {
        "px": [
          308,
          534
        ]
      },
      "basis": "alignment",
      "note": "The modern Stanford Avenue geometry matches the corridor lettered Ruth, with Ave supplied on page 4.",
      "name": "ruth-ave",
      "attests": "planned-on"
    },
    {
      "kind": "state",
      "asWritten": "Towne Ave",
      "street": "Towne Avenue",
      "from": {
        "px": [
          827,
          689
        ]
      },
      "to": {
        "px": [
          411,
          401
        ]
      },
      "basis": "alignment",
      "note": "Towne is lettered on this page and Ave farther along the same corridor on page 4.",
      "name": "towne-ave",
      "attests": "planned-on"
    }
  ]
};
