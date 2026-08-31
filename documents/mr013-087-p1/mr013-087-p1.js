// Plat of Mills and Wicks' Extension of Second Street — sheet 1 of 2.
//
// One document per PAGE: a document holds one alignment and one coverage
// polygon (MODEL-SPEC §4.4, §4.6), and two sheets have two of each. Sheet 2
// is parked at documents/_mr013-087-p2/ — Kenny read it and found only one
// street on it that was ever built, so it is not worth encoding; the render is
// kept there rather than deleted.
//
// The alignment below is Kenny's, made 2026-08-30 and carried over unchanged
// when this folder was renamed into the per-page convention.

// The date: the sheet's title block gives April–May 1886 for the main
// subdivision and Jan. 1887 for the added lots, so `date` carries the later —
// the sheet as a whole is good as of then. The AI pass left `date` as the
// literal string "undefined", which made the generated name history come out
// in the wrong ORDER (Huber Street appeared to postdate 4th Street). Read off
// the sheet by Claude, 2026-08-31.
//
// Extents: the pass used `from: null` / `to: null` to mean "the edge of what I
// can see". `null` means the modern STREET's own end, which for 3rd Street and
// Alameda Street is far outside this tract — so those rows claimed testimony
// over most of the city. Replaced with the coverage-edge crossings and points
// below; TASK.md now says this in as many words.
//
// Kinds: several stretches the pass called `absent` are corridors the plat
// DRAWS without lettering a name on them. Those are `unnamed` — `absent` says
// the sheet shows no street at all, which is the claim the project argues
// from.

module.exports = {
  id: "mr013-087-p1",
  title: "Recorded map: Mills and Wicks' Extension of Second St. and adjoining subdivision, City of Los Angeles, M.R. 13-87 — lots 1–144 and 160–236 subdivided at the request of M. L. Wicks and Howard W. Mills, April–May 1886, under the direction of Geo. C. Knox; further lots added Jan. 1887 (sheet 1 of 2)",
  shortTitle: "Mills and Wicks Extension map, sheet 1",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf",
  scan: "documents/mr013-087-p1/mr013-087-p1.pdf",
  transcription: null,

  date: { on: "1887-01" },   
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  readBy: "instance+alignment",

  // Coverage is the ground this document informs about — the tract boundary,
  // not the sheet edge (MODEL-SPEC §4.4). SCAN PIXELS against alignment.image,
  // so a better alignment carries it along (§4.6).
  coverage: [
    [156, 29], [91, 711], [565, 689], [822, 877],
    [1043, 595], [857, 184], [668, 30]
  ],
  alignment: {
    image: "documents/mr013-087-p1/mr013-087-p1-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.046209, -118.239097], note: "document-tool corner (0,0)" },
      { px: [1092, 0], ll: [34.046566, -118.233407], note: "document-tool corner (1092,0)" },
      { px: [0, 1530], ll: [34.039556, -118.238498], note: "document-tool corner (0,1530)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"4th Street","from":{"px":[95,668]},"to":"Alameda Street"}],

  sweptFully: true,
  sweptFor: ["3rd Street","4th Place","4th Street","Alameda Street","Avery Street","Hewitt Street","Merrick Street","Rose Street","Traction Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "GEORGIA ST",
      "street": "3rd Street",
      "from": "Alameda Street",
      "to": {
        "px": [
          778,
          120
        ]
      },
      "basis": "alignment",
      "note": "The modern centerline runs along the middle of the GEORGIA ST corridor east of Alameda.",
      "name": "georgia-east"
    },
    {
      "kind": "absent",
      "street": "4th Place",
      "from": "3rd Street",
      "to": "Hewitt Street",
      "note": "This part of the modern diagonal crosses the interiors of the plat's lots B, C, and D rather than a drawn street corridor."
    },
    {
      "kind": "state",
      "asWritten": "THIRD",
      "street": "4th Place",
      "from": "Hewitt Street",
      "to": "4th Street",
      "basis": "alignment",
      "note": "From Hewitt southeastward the modern centerline stays in the corridor lettered THIRD.",
      "name": "third-street"
    },
    {
      "kind": "state",
      "asWritten": "HUBER ST.",
      "street": "4th Street",
      "from": "Alameda Street",
      "to": {
        "px": [
          747,
          686
        ]
      },
      "basis": "alignment",
      "note": "The modern centerline follows HUBER ST. from Alameda to its meeting with the diagonal THIRD corridor.",
      "name": "huber-st"
    },
    {
      "kind": "state",
      "street": "4th Street",
      "from": {
        "px": [
          747,
          686
        ]
      },
      "to": {
        "px": [
          883,
          800
        ]
      },
      "note": "Past the THIRD intersection the modern curve has no matching street corridor on the plat.",
      "basis": "alignment",
      "name": "third-street",
      "asWritten": "THIRD"
    },
    {
      "kind": "state",
      "asWritten": "ALAMEDA ST",
      "street": "Alameda Street",
      "from": {
        "px": [
          192,
          29
        ]
      },
      "to": {
        "px": [
          133,
          709
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern centerline remains within the vertically lettered ALAMEDA ST corridor throughout the coverage.",
      "name": "alameda-st"
    },
    {
      "kind": "unnamed",
      "street": "Avery Street",
      "from": {
        "px": [
          803,
          219
        ]
      },
      "to": "Traction Avenue",
      "note": "The modern trace occupies an unlabeled gap between blocks; the plat does not letter a street name along this stretch. [Reclassified absent → unnamed, 2026-08-31: the note describes drawn linework with no lettering, which is what `unnamed` is for.]",
      "basis": "alignment"
    },
    {
      "kind": "unnamed",
      "street": "Hewitt Street",
      "from": {
        "px": [
          566,
          30
        ]
      },
      "to": "3rd Street",
      "note": "North of modern 3rd the sheet has parallel contextual lines but no lettered street corridor on this alignment. [Reclassified absent → unnamed, 2026-08-31: the note describes drawn linework with no lettering, which is what `unnamed` is for.]",
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "HEWITT ST",
      "street": "Hewitt Street",
      "from": "Traction Avenue",
      "to": "4th Place",
      "basis": "alignment",
      "note": "This diagonal modern segment runs through the corridor lettered HEWITT ST between SECOND and THIRD.",
      "name": "hewitt"
    },
    {
      "kind": "unnamed",
      "street": "Hewitt Street",
      "from": "4th Street",
      "to": {
        "px": [
          671,
          766
        ]
      },
      "note": "South of modern 4th the plat shows no lettered street corridor matching the modern segment."
    },
    {
      "kind": "unnamed",
      "street": "Merrick Street",
      "from": "Traction Avenue",
      "to": "4th Street",
      "note": "The modern centerline follows the outside of the platted lots and dashed contextual lines, not a named street corridor."
    },
    {
      "kind": "unnamed",
      "street": "Rose Street",
      "from": {
        "px": [
          383,
          29
        ]
      },
      "to": "3rd Street",
      "note": "The sheet has parallel contextual lines north of GEORGIA ST here, but no street name is lettered on this alignment. [Reclassified absent → unnamed, 2026-08-31: the note describes drawn linework with no lettering, which is what `unnamed` is for.]",
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "SECOND",
      "street": "Traction Avenue",
      "from": {
        "px": [
          390,
          29
        ]
      },
      "to": "Merrick Street",
      "basis": "alignment",
      "note": "The modern Traction Avenue centerline follows the broad diagonal corridor lettered SECOND.",
      "name": "second-street"
    }
  ]
};
