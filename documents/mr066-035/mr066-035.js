// Map of the Compromise Subdivision of a portion of the O.T. Johnson tract,
// known as the Washington Tract — surveyed Mar. 1894 by E.D. Severance.
//
// The trap on this sheet: the plat's "THIRD ST." is NOT modern 3rd Street.
// Modern 3rd runs down the plat's ARNOLD ST.; modern Miramar runs down the
// plat's THIRD ST., one block north-east. The two Thirds are a block apart and
// an alignment that makes them coincide looks plausible and is wrong.
//
// Date: the survey is Mar. 1894 (surveyor's certificate Apr. 14, 1894; owners'
// dedication Mar. 23, 1894). The recorder's note on this copy reads
// "Recorded may 1, 189[7?]" with the last digit smudged — recording year
// unresolved, so `date` carries the survey.
//
// Rows below came from an AI pass over documents/mr066-035/ (see
// mr066-035-rows.js in this folder, which keeps that pass's full reasoning:
// corridor widths measured off the plat, offsets in feet, and the scale check).
// They are all confirmed:false and none has been checked by a human.

module.exports = {
  id: "mr066-035",
  title: "Recorded map: Compromise Subdivision of a portion of the O.T. Johnson tract, known as the Washington Tract, M.R. 66-35 (surveyed Mar. 1894 by E.D. Severance)",
  shortTitle: "Washington Tract map",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR066/MR066-035.pdf",
  scan: "documents/mr066-035/mr066-035.pdf",
  transcription: null,

  date: { on: "1894-03" },   // survey; the recorded copy's year is smudged
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  readBy: "instance+alignment",

  // Coverage is the ground this document informs about — the tract boundary,
  // not the sheet edge (MODEL-SPEC §4.4). SCAN PIXELS against alignment.image,
  // so a better alignment carries it along (§4.6).
  coverage: [
    [282, 494], [65, 825], [874, 1250], [997, 993],
    [793, 714]
  ],
  alignment: {
    image: "documents/mr066-035/mr066-035-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.059413, -118.260169], note: "document-tool corner (0,0)" },
      { px: [1038, 0], ll: [34.059462, -118.257342], note: "document-tool corner (1038,0)" },
      { px: [0, 1774], ll: [34.055382, -118.260068], note: "document-tool corner (0,1774)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (TOOL-SPEC §3-§4).
  rows: [
    // The plat's ARNOLD ST. Modern 3rd sits within ~15 ft of that corridor's
    // centreline (half-width 31 ft) along its whole in-coverage run, and 254-277
    // ft from the THIRD corridor.
    { kind: "state", name: "arnold", asWritten: "ARNOLD ST.",
      street: "3rd Street", from: "Bixel Street", to: "Boylston Street",
      basis: "alignment", confirmed: false },

    // The plat's THIRD ST. Modern Miramar is +4.3 ft off that corridor's
    // centreline at Bixel and stays inside the 50 ft corridor for about two
    // thirds of the block; east of the bend at px (724,781) it drifts to 98 ft
    // off by the Boylston junction — the block's cut-off north-east corner,
    // which is the wedge this "Compromise" subdivision was drawn to settle.
    { kind: "state", name: "third-street", asWritten: "THIRD ST.",
      street: "Miramar Street", from: "Bixel Street", to: "Boylston Street",
      basis: "alignment", confirmed: false,
      note: "The eastern third drifts up to 98 ft off the drawn centreline at the block's cut-off corner; the plat's Third x Figueroa corner projects ~26 m north of the modern Miramar/Boylston junction." },

    // Name survives unchanged, so this row is only evidence of date and extent.
    { kind: "state", name: "bixel", asWritten: "BIXEL ST",
      street: "Bixel Street", from: "Miramar Street", to: "3rd Street",
      basis: "alignment", confirmed: false },

    // The plat's FIGUEROA ST. — the Figueroa that ord-4093 renamed to Boylston
    // in 1897. Only the corridor's west edge is drawn (it is the block
    // boundary); modern Boylston runs 35-48 ft east of it and parallel, inside
    // the corridor for any plausible width, and joins the same two streets
    // Figueroa joins on the plat.
    { kind: "state", name: "figueroa-gov", asWritten: "FIGUEROA ST.",
      street: "Boylston Street", from: "3rd Street", to: "Miramar Street",
      basis: "alignment", confirmed: false,
      note: "Predates ord-4093's Figueroa->Boylston change by three years; the plat draws only the corridor's west edge." },

    // Modern 4th forks off 3rd inside the tract and the plat draws no corridor
    // along it: it opens at 8 deg from the ARNOLD corridor and is 29 ft off the
    // modern 3rd centreline where coverage ends.
    { kind: "silent", street: "4th Street", from: "3rd Street", to: "Boylston Street",
      confirmed: false,
      note: "Coverage stops at the tract boundary near px (636,1119), well short of Boylston; `to` is the next crossing rather than the true end." }

    // Huntley Drive is deliberately absent — see the note in mr066-035-rows.js.
    // Its whole in-coverage run is a 6.5 m stub leaving the Miramar/Boylston
    // junction, and it is unresolved whether the plat says anything about it.
  ]
};
