module.exports = {
  id: "mr030-009-p1",
  title: "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal.",
  shortTitle: "Wolfskill Orchard Tract, sheet 1 (M.R. 30-9)",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf",
  scan: "documents/mr030-009-p1/mr030-009-p1.pdf",
  transcription: null,

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
    [1092, 878], [667, 613], [71, 1434], [800, 1437]
  ],
  alignment: {
    image: "documents/mr030-009-p1/mr030-009-p1-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.034874, -118.247266], note: "document-tool corner (0,0)" },
      { px: [1084, 0], ll: [34.040412, -118.246743], note: "document-tool corner (1084,0)" },
      { px: [0, 1675], ll: [34.0342, -118.237011], note: "document-tool corner (0,1675)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"6th Street","from":null,"to":"Alameda Street"},{"street":"6th Street","from":"Alameda Street","to":null}],

  sweptFully: true,
  sweptFor: ["6th Street","7th Street","Alameda Street","Central Avenue","Ceres Avenue","Industrial Street","Kohler Street","Wilde Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Sixth St",
      "street": "6th Street",
      "from": {
        "px": [
          1059,
          858
        ]
      },
      "to": "Alameda Street",
      "basis": "alignment",
      "note": "The modern centerline stays in the corridor lettered Sixth, with St supplied by the continuation across the sheets.",
      "name": "sixth-street"
    },
    {
      "kind": "state",
      "asWritten": "Seventh St",
      "street": "7th Street",
      "from": {
        "px": [
          685,
          624
        ]
      },
      "to": "Alameda Street",
      "basis": "alignment",
      "note": "The modern line follows the broad Seventh corridor; the St suffix is lettered on the adjoining sheet.",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "asWritten": "Alameda St",
      "street": "Alameda Street",
      "from": {
        "px": [
          829,
          1381
        ]
      },
      "to": {
        "px": [
          94,
          1402
        ]
      },
      "basis": "alignment",
      "note": "The roadway is continuous here; Alameda is lettered on page 2 and the St suffix on later pages.",
      "name": "alameda-st"
    },
    {
      "kind": "unnamed",
      "street": "Central Avenue",
      "from": {
        "px": [
          968,
          1115
        ]
      },
      "to": "6th Street",
      "note": "The modern trace crosses blank tract interior and lot ground, with no roadway drawn along it."
    },
    {
      "kind": "absent",
      "street": "Central Avenue",
      "from": "6th Street",
      "to": {
        "px": [
          425,
          946
        ]
      },
      "note": "The modern trace crosses blank tract interior and lot ground, with no roadway drawn along it."
    },
    {
      "kind": "state",
      "asWritten": "Ceres Ave",
      "street": "Ceres Avenue",
      "from": {
        "px": [
          1077,
          907
        ]
      },
      "to": {
        "px": [
          668,
          647
        ]
      },
      "basis": "alignment",
      "note": "Ceres is lettered on this page and Ave on page 2; the aligned trace remains inside that corridor.",
      "name": "ceres-ave"
    },
    {
      "kind": "absent",
      "street": "Industrial Street",
      "from": {
        "px": [
          715,
          851
        ]
      },
      "to": {
        "px": [
          352,
          1435
        ]
      },
      "note": "Both modern runs pass through blank interior ground rather than a drawn road corridor."
    },
    {
      "kind": "absent",
      "street": "Kohler Street",
      "from": {
        "px": [
          957,
          1021
        ]
      },
      "to": {
        "px": [
          588,
          758
        ]
      },
      "note": "This diagonal cuts across the numbered lots and has no matching roadway."
    },
    {
      "kind": "absent",
      "street": "Wilde Street",
      "from": {
        "px": [
          837,
          940
        ]
      },
      "to": {
        "px": [
          716,
          1117
        ]
      },
      "note": "The modern segment crosses lot interiors; no street is drawn on this alignment."
    }
  ]
};
