// Glassell's Subdivision of Lot No. 7 etc., Block 39, Hancock Survey No. 1 —
// "a full true and correct copy of the original, recorded Dec. 27th 1884 at
// request of J.I. Glassell", Chas. E. Miles, County Recorder. Echo Park /
// Historic Filipinotown edge; A. Glassell is Andrew Glassell, of Glassell Park.
//
// Title block, date and url were read off the sheet by Claude, 2026-08-30 —
// the AI pass left them blank although TASK.md asked for them.
//
// Rows are from a ChatGPT pass over this folder, pasted in by hand, all
// confirmed:false and none yet reviewed. handbook/research-leads.md holds an
// EARLIER, partly wrong pass over the same sheet; where the two disagree, see
// the note on Beverly Boulevard below.

module.exports = {
  id: "mr006-138",
  title: "Recorded map: Glassell's Subdivision of Lot No. 7 etc., Block 39, Hancock Survey No. 1, M.R. 6-138 (recorded Dec. 27, 1884 at request of A. Glassell)",
  shortTitle: "Glassell's Subdivision map",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf",
  scan: "documents/mr006-138/mr006-138.pdf",
  transcription: null,

  date: { on: "1884-12-27" },   
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  readBy: "instance+alignment",

  // Coverage is the ground this document informs about — the tract boundary,
  // not the sheet edge (MODEL-SPEC §4.4). SCAN PIXELS against alignment.image,
  // so a better alignment carries it along (§4.6).
  coverage: [
    [202, 199], [694, 945], [1569, 919], [1573, 75],
    [564, 63]
  ],
  alignment: {
    image: "documents/mr006-138/mr006-138-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.068278, -118.263905], note: "document-tool corner (0,0)" },
      { px: [1749, 0], ll: [34.064723, -118.256185], note: "document-tool corner (1749,0)" },
      { px: [0, 1115], ll: [34.064173, -118.266621], note: "document-tool corner (0,1115)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: ["Dawson Street","Pizarro Street"],

  sweptFully: true,
  sweptFor: ["Belmont Avenue","Beverly Boulevard","Colton Street","Council Street","Court Street","Douglas Street","Glendale Boulevard","Lake Shore Terrace","Laveta Terrace","Patton Street","Rockwood Street","Welcome Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Aztec Avenue",
      "street": "Belmont Avenue",
      "from": "Beverly Boulevard",
      "to": "Court Street",
      "basis": "alignment",
      "note": "The modern centerline follows the middle of the diagonal Aztec Avenue corridor from Diamond Street to Court Street.",
      "name": "aztec-avenue"
    },
    {
      "kind": "state",
      "asWritten": "Diamond Street",
      "street": "Beverly Boulevard",
      "from": "Belmont Avenue",
      "to": {
        "px": [
          1252,
          928
        ]
      },
      "basis": "alignment",
      "note": "The plat draws Diamond Street only as its southern BOUNDARY — a dashed line with the name lettered along it, not a corridor between two edge lines. Beverly Boulevard runs 4-14 m from that line through the whole covered stretch. NB handbook/research-leads.md records an earlier pass calling Diamond \"unchanged since 1884\"; modern Diamond Street is 869 m EAST of this sheet and ~30 m north of this line, so it is outside coverage and this document cannot speak to whether it is the same naming. Kenny: that is a lineage question for review.",
      "name": "diamond-street"
    },
    {
      "kind": "state",
      "asWritten": "State Street",
      "street": "Colton Street",
      "from": "Belmont Avenue",
      "to": null,
      "basis": "alignment",
      "note": "The modern centerline follows the straight and then diagonal State Street corridor; its short eastern end lies just beyond Douglas Street. (Extent corrected 2026-08-30: the AI pass wrote from:null,to:Belmont, but Belmont is where Colton BEGINS, so that spanned nothing. Colton runs east from Belmont.)",
      "name": "state-colton"
    },
    {
      "kind": "state",
      "asWritten": "Council Street",
      "street": "Council Street",
      "from": "Lake Shore Terrace",
      "to": "Belmont Avenue",
      "basis": "alignment",
      "note": "The modern centerline stays within the diagonal corridor whose separated words read Council Street.",
      "name": "council-street"
    },
    {
      "kind": "state",
      "asWritten": "Court Street",
      "street": "Court Street",
      "from": null,
      "to": null,
      "basis": "alignment",
      "note": "The whole modern segment, including its curved western portion and straight eastern portion, follows the corridor lettered Court Street; both modern ends lie within the sheet coverage.",
      "name": "court-street"
    },
    {
      "kind": "state",
      "asWritten": "Waters Street",
      "street": "Douglas Street",
      "from": "Colton Street",
      "to": {
        "px": [
          1389,
          83
        ]
      },
      "basis": "alignment",
      "note": "North of State Street the modern centerline follows the same continuous corridor whose words are split across the blocks as Waters Street; the northern coverage limit is mid-block.",
      "name": "waters-street"
    },
    {
      "kind": "absent",
      "street": "Glendale Boulevard",
      "from": {
        "px": [
          883,
          137
        ]
      },
      "to": "Court Street",
      "note": "Before crossing Court Street, the modern diagonal traverses the bulb and does not track a drawn street corridor."
    },
    {
      "kind": "state",
      "asWritten": "Lake Avenue",
      "street": "Glendale Boulevard",
      "from": "Court Street",
      "to": {
        "px": [
          1512,
          917
        ]
      },
      "basis": "alignment",
      "note": "South of Court Street the modern diagonal tracks the long corridor labeled Lake Avenue through State and Home Streets to the coverage edge.",
      "name": "lake-avenue"
    },
    {
      "kind": "state",
      "asWritten": "Hobart Street",
      "street": "Lake Shore Terrace",
      "from": "Colton Street",
      "to": "Council Street",
      "basis": "alignment",
      "note": "The modern centerline follows the short diagonal corridor lettered Hobart Street.",
      "name": "hobart-street"
    },
    {
      "kind": "absent",
      "street": "Laveta Terrace",
      "from": "Glendale Boulevard",
      "to": {
        "px": [
          911,
          83
        ]
      },
      "note": "The modern north-south segment crosses open ground inside the Court Street curve, with no street corridor drawn along it."
    },
    {
      "kind": "state",
      "asWritten": "Patton Street",
      "street": "Patton Street",
      "from": "Colton Street",
      "to": {
        "px": [
          1159,
          83
        ]
      },
      "basis": "alignment",
      "note": "The modern centerline follows the vertical corridor whose words are split across Court Street as Patton Street.",
      "name": "patton-street"
    },
    {
      "kind": "state",
      "asWritten": "Home Street",
      "street": "Rockwood Street",
      "from": "Glendale Boulevard",
      "to": "Belmont Avenue",
      "basis": "alignment",
      "note": "The modern line follows the long east-west corridor lettered Home Street between Lake Avenue and Aztec Avenue.",
      "name": "home-street"
    },
    {
      "kind": "state",
      "asWritten": "Welcome Street",
      "street": "Welcome Street",
      "from": "Colton Street",
      "to": "Court Street",
      "basis": "alignment",
      "note": "The modern centerline follows the diagonal corridor whose separated words read Welcome Street.",
      "name": "welcome-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Council Street",
      "trace": [
        [
          800,
          284
        ],
        [
          935,
          211
        ]
      ],
      "basis": "alignment",
      "name": "council-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Waters Street",
      "trace": [
        [
          1389,
          425
        ],
        [
          1375,
          780
        ]
      ],
      "basis": "alignment",
      "name": "waters-street"
    },
    {
      "kind": "absent",
      "street": "Douglas Street",
      "from": null,
      "to": "Colton Street",
      "note": "Added in review: the sheet covers this 152 m and draws no street along it."
    },
    {
      "kind": "absent",
      "street": "Glendale Boulevard",
      "from": "Laveta Terrace",
      "to": null,
      "note": "Added in review: the sheet covers this 44 m and draws no street along it."
    }
  ]
};
