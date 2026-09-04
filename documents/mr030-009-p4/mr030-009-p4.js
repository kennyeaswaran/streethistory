module.exports = {
  id: "mr030-009-p4",
  title: "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal.",
  shortTitle: "Wolfskill Orchard Tract, sheet 4 (M.R. 30-12)",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf",
  scan: "documents/mr030-009-p4/mr030-009-p4.pdf",
  transcription: "documents/mr003-060-p1/mr003-060-p1-partA.md",

  date: { on: "1888-01-11" },   
  form: "drawn",
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  readBy: "human",

  // Coverage is the ground this document informs about — the tract boundary,
  // not the sheet edge (MODEL-SPEC §4.4). SCAN PIXELS against alignment.image,
  // so a better alignment carries it along (§4.6).
  coverage: [
    [1030, 588], [599, 441], [111, 1227], [157, 1532],
    [591, 1533]
  ],
  alignment: {
    image: "documents/mr030-009-p4/mr030-009-p4-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.041226, -118.24709], note: "document-tool corner (0,0)" },
      { px: [1133, 0], ll: [34.046946, -118.246766], note: "document-tool corner (1133,0)" },
      { px: [0, 1717], ll: [34.040817, -118.236701], note: "document-tool corner (0,1717)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Seaton Street","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["4th Street","5th Street","Alameda Street","Central Avenue","Crocker Street","Gladys Avenue","Omar Street","San Pedro Street","Seaton Street","Stanford Avenue","Towne Avenue","Winston Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Fourth St",
      "street": "4th Street",
      "from": {
        "px": [
          967,
          567
        ]
      },
      "to": "Central Avenue",
      "basis": "alignment",
      "note": "The modern centerline follows the numbered corridor lettered Fourth St down to Alameda.",
      "name": "fourth-street"
    },
    {
      "kind": "absent",
      "street": "4th Street",
      "from": "Central Avenue",
      "to": "Alameda Street",
      "basis": "alignment",
      "note": "The modern centerline follows the numbered corridor lettered Fourth St down to Alameda."
    },
    {
      "kind": "state",
      "asWritten": "Huber St",
      "street": "4th Street",
      "from": "Alameda Street",
      "to": {
        "px": [
          491,
          1533
        ]
      },
      "basis": "alignment",
      "note": "After crossing Alameda the modern 4th Street alignment bends into the corridor lettered Huber St.",
      "name": "huber-st"
    },
    {
      "kind": "state",
      "asWritten": "Fifth St",
      "street": "5th Street",
      "from": {
        "px": [
          629,
          451
        ]
      },
      "to": {
        "px": [
          155,
          1193
        ]
      },
      "basis": "alignment",
      "note": "The supplied line stays in the Fifth St corridor across the page.",
      "name": "fifth-street"
    },
    {
      "kind": "state",
      "asWritten": "Alameda St",
      "street": "Alameda Street",
      "from": {
        "px": [
          626,
          1459
        ]
      },
      "to": {
        "px": [
          146,
          1460
        ]
      },
      "basis": "alignment",
      "note": "This roadway supplies the St suffix to Alameda lettered on page 2.",
      "name": "alameda-st"
    },
    {
      "kind": "state",
      "asWritten": "Wolfskill Ave",
      "street": "Central Avenue",
      "from": {
        "px": [
          750,
          1191
        ]
      },
      "to": {
        "px": [
          132,
          1193
        ]
      },
      "basis": "alignment",
      "note": "The Ave suffix here completes Wolfskill on page 2, and the modern Central Avenue line follows that corridor.",
      "name": "wolfskill-ave"
    },
    {
      "kind": "state",
      "asWritten": "Stanford Ave",
      "street": "Crocker Street",
      "from": {
        "px": [
          863,
          947
        ]
      },
      "to": {
        "px": [
          455,
          673
        ]
      },
      "basis": "alignment",
      "note": "The Ave suffix on this continuation completes Stanford on page 2; modern Crocker Street follows it geometrically.",
      "name": "stanford-ave",
      "attests": "planned-on"
    },
    {
      "kind": "state",
      "asWritten": "Gladys Ave",
      "street": "Gladys Avenue",
      "from": "Central Avenue",
      "to": "5th Street",
      "basis": "alignment",
      "note": "The primary modern branch stays in the widening Gladys Ave corridor between Central and Fifth.",
      "name": "gladys-ave",
      "attests": "planned-on"
    },
    {
      "kind": "state",
      "asWritten": "Gladys Ave",
      "street": "Gladys Avenue",
      "from": {
        "px": [
          388,
          1193
        ]
      },
      "to": {
        "px": [
          322,
          1145
        ]
      },
      "basis": "alignment",
      "note": "The second short modern branch also lies within the widened end of the same Gladys Ave roadway.",
      "name": "gladys-ave"
    },
    {
      "kind": "unnamed",
      "street": "Omar Street",
      "from": {
        "px": [
          928,
          808
        ]
      },
      "to": {
        "px": [
          856,
          759
        ]
      },
      "note": "This short modern segment runs through blank ground outside the platted blocks; no roadway is drawn."
    },
    {
      "kind": "state",
      "asWritten": "San Pedro Ave",
      "street": "San Pedro Street",
      "from": {
        "px": [
          1004,
          645
        ]
      },
      "to": {
        "px": [
          576,
          478
        ]
      },
      "basis": "alignment",
      "note": "The Ave suffix here completes San Pedro on page 2 and the geometry follows the same corridor.",
      "name": "san-pedro"
    },
    {
      "kind": "state",
      "asWritten": "Ruth Ave",
      "street": "Stanford Avenue",
      "from": {
        "px": [
          659,
          1191
        ]
      },
      "to": {
        "px": [
          288,
          942
        ]
      },
      "basis": "alignment",
      "note": "Modern Stanford Avenue occupies the roadway lettered Ruth on page 2 and Ave on this continuation.",
      "name": "ruth-ave",
      "attests": "planned-on"
    },
    {
      "kind": "state",
      "asWritten": "Towne Ave",
      "street": "Towne Avenue",
      "from": {
        "px": [
          796,
          1091
        ]
      },
      "to": {
        "px": [
          373,
          805
        ]
      },
      "basis": "alignment",
      "note": "The Ave suffix on this page completes Towne on page 2; the aligned centerline remains in the corridor.",
      "name": "towne-ave",
      "attests": "planned-on"
    },
    {
      "kind": "absent",
      "street": "Winston Street",
      "from": {
        "px": [
          786,
          505
        ]
      },
      "to": {
        "px": [
          765,
          562
        ]
      },
      "note": "The short modern trace crosses blank parcel ground north of San Pedro, with no street corridor drawn."
    },
    {
      "kind": "vanished",
      "asWritten": "Fourth St",
      "trace": [
        [
          563,
          1188
        ],
        [
          558,
          1458
        ]
      ],
      "basis": "alignment",
      "name": "fourth-street"
    }
  ]
};
