// Map of the Compromise Subdivision of a portion of the O.T. Johnson tract,
// known as the Washington Tract — surveyed Mar. 1894 by E.D. Severance.
//
// The trap on this sheet: the plat's "THIRD ST." is NOT modern 3rd Street.
// Modern 3rd runs down the plat's ARNOLD ST.; modern Miramar runs down the
// plat's THIRD ST., one block north-east. The two Thirds are a block apart and
// an alignment that makes them coincide looks plausible and is wrong.
//
// Date: the survey is Mar. 1894 (surveyor's certificate Apr. 14, 1894; owners'
// dedication Mar. 23, 1894); recorded May 1, 1897 — the last digit is smudged
// on this copy, but handbook/research-leads.md settled it from other evidence.
// `date` carries the survey, which is what the labels reflect: this plat was
// recorded MONTHS AFTER the Feb. 1897 renaming and still letters the old names.
//
// Rows below came from an AI pass over documents/mr066-035/ (see
// mr066-035-rows.js in this folder, which keeps that pass's full reasoning:
// corridor widths measured off the plat, offsets in feet, and the scale check).
// Reviewed and confirmed by Kenny, 2026-08-30; sweptFully set then. The AI pass
// left one case open — whether the plat says anything about Huntley Drive —
// which the 25 m sliver rule resolved: Huntley's 6.5 m inside the polygon is
// less than the junction it leaves from, so it is not in coverage at all.

module.exports = {
  id: "mr066-035",
  title: "Recorded map: Compromise Subdivision of a portion of the O.T. Johnson tract, known as the Washington Tract, M.R. 66-35 (surveyed Mar. 1894 by E.D. Severance)",
  shortTitle: "Washington Tract map",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR066/MR066-035.pdf",
  scan: "documents/mr066-035/mr066-035.pdf",
  transcription: null,

  date: { on: "1894-03" },
  recorded: "1897-05-01",           // months AFTER the Feb. 1897 renaming, which
                                    // is why this plat still letters the old names   
  form: "drawn",
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
      { px: [0, 0], ll: [34.059411, -118.260167], note: "document-tool corner (0,0)" },
      { px: [1038, 0], ll: [34.05946, -118.257343], note: "document-tool corner (1038,0)" },
      { px: [0, 1774], ll: [34.055384, -118.260067], note: "document-tool corner (0,1774)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["3rd Street","4th Street","Bixel Street","Boylston Street","Miramar Street"],

  rows: [
    {
      "kind": "state",
      "name": "arnold",
      "asWritten": "ARNOLD ST.",
      "street": "3rd Street",
      "from": "Bixel Street",
      "to": "Boylston Street",
      "basis": "alignment"
    },
    {
      "kind": "state",
      "name": "third-street",
      "asWritten": "THIRD ST.",
      "street": "Miramar Street",
      "from": "Bixel Street",
      "to": "Boylston Street",
      "basis": "alignment",
      "note": "The eastern third drifts up to 98 ft off the drawn centreline at the block's cut-off corner; the plat's Third x Figueroa corner projects ~26 m north of the modern Miramar/Boylston junction."
    },
    {
      "kind": "state",
      "name": "bixel",
      "asWritten": "BIXEL ST",
      "street": "Bixel Street",
      "from": "Miramar Street",
      "to": "3rd Street",
      "basis": "alignment"
    },
    {
      "kind": "state",
      "name": "figueroa-gov",
      "asWritten": "FIGUEROA ST.",
      "street": "Boylston Street",
      "from": "3rd Street",
      "to": "Miramar Street",
      "basis": "alignment",
      "note": "Predates ord-4093's Figueroa->Boylston change by three years; the plat draws only the corridor's west edge."
    },
    {
      "kind": "absent",
      "street": "4th Street",
      "from": "3rd Street",
      "to": "Boylston Street",
      "note": "Coverage stops at the tract boundary near px (636,1119), well short of Boylston; `to` is the next crossing rather than the true end."
    }
  ]
};
