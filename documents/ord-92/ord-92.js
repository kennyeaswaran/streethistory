// \u2605\u2605 ORDINANCE NO. 92 \u2014 THE COUNCIL CHOOSES BETWEEN A PLAT\u2019S NAME AND THE
// NAME PEOPLE ACTUALLY USED, AND NAMES THE PLAT.
//
// "SECTION 1. That that street in the City of Los Angeles, extending from
// Alameda street to Amelia street, and being the street south of Sainsevain
// street and the next street thereto, and generally known as Ducommun street,
// but designated on a map, recorded in book 2, pages 526 and 527, of
// miscellaneous records in the office of the Recorder of Los Angeles county, as
// Commercial street, be and the same is hereby named Ducommun street."
//
// Adopted July 28, 1883, approved July 30, published Aug. 1. Printed at
// pp. 274-275 of Robinson\u2019s 1884 compilation.
//
// \u2605\u2605\u2605 THE ORDINANCE CITES A SHEET THIS PROJECT HOLDS. "book 2, pages 526 and
// 527, of miscellaneous records" is M.R. 2-526/527 \u2014 documents/mr002-526-p1 and
// documents/mr002-526-p2, the Plan of the Subdivision of the Alanis Vineyard
// Tract, recorded May 5, 1869. Sheet 1 letters COMMERCIAL STREET along ground
// the corpus identifies as modern Ducommun Street, and letters AMELIA on ground
// it identifies as modern Garey Street. So both ends of the ordinance\u2019s extent
// and its `from` name are already on the map, from the very sheet the Council
// names. This is the cleanest change row in this volume and the only one here
// that draws.
//
// \u26a0 THE TITLE SAYS "fixing", NOT "changing", AND THAT IS A REAL DISTINCTION.
// The Council is not renaming a street people called Commercial; it is settling
// a conflict between a recorded plat and usage, and settling it in favour of
// usage. The instrument is still what ends one official name and begins
// another, which is what a `change` row records.
//
// \u26a0 THERE IS ANOTHER COMMERCIAL STREET AND IT IS STILL THERE. `commercial-street`
// is lettered on six sheets in this corpus, and modern Commercial Street runs
// downtown between Los Angeles Street and Alameda. Whether that survivor and the
// Alanis Vineyard Tract\u2019s Commercial are one lineage is a question for names.js,
// not for this document; the row binds the entity the corpus already put on
// mr002-526-p1, and if Kenny splits that entity the row follows the split.
//
// The name in use afterwards, in this same volume: Res. 162 (p. 271)
// establishes the grade of Ducommun street; Res. 164 (p. 272) is of intention to
// improve and grade it; Res. 153 (p. 259) already has a "Wilmington and Jackson
// street" sewer. Amelia street appears in Res. 26 and Res. 27 as a cross street
// of Macy and in the index under "Amelia street, grade at Turner street" and
// "at Ducommun street".
//
// \u26a0 THE NUMBER IS ROBINSON\u2019S \u2014 see documents/ord-97 and Ordinance No. 104.
//
// PROVENANCE. Gale, The Making of Modern Law: Primary Sources, DT0102876584.
// Read off the 200 dpi page images by Claude, 2026-09-19.

module.exports = {
  id: "ord-92",
  title: "Ordinance No. 92 (Robinson series), \u201CAn Ordinance fixing the name of Ducommun street\u201D \u2014 adopted July 28, 1883, approved July 30, published Aug. 1, 1883",
  shortTitle: "Ord. 92, Commercial street named Ducommun",
  url: "https://link.gale.com/apps/doc/DT0102876584/MMLP?u=uclosangeles&sid=bookmark-MMLP",
  scan: "documents/ord-92/ord-92-p274.jpg",
  transcription: "documents/ord-92/ord-92-text.md",

  date: { on: "1883-07-28" },
  recorded: "1884",
  form: "textual",
  type: "ordinance",
  attests: "built-by",
  completeness: "exhaustive-in-scope",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: false,                // the one row\u2019s modern extent is a proposal
  sweptFor: ["Ducommun Street"],
  readBy: "human",

  excerpts: [
    { id: "title",
      text: "AN ORDINANCE fixing the name of Ducommun street." },
    { id: "sec-1",
      text: "SECTION 1. That that street in the City of Los Angeles, extending from Alameda street " +
            "to Amelia street, and being the street south of Sainsevain street and the next street " +
            "thereto, and generally known as Ducommun street, but designated on a map, recorded in " +
            "book 2, pages 526 and 527, of miscellaneous records in the office of the Recorder of " +
            "Los Angeles county, as Commercial street, be and the same is hereby named Ducommun " +
            "street.",
      note: "Three independent identifications in one sentence: an extent (Alameda to Amelia), a " +
            "relative position (the next street south of Sainsevain) and a citation of the recorded " +
            "map that letters it Commercial \u2014 M.R. 2-526/527, which is documents/mr002-526-p1 and " +
            "-p2 in this corpus." },
    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the Council of the City of " +
            "Los Angeles, at its meeting of July 28th, A. D. 1883. W. W. ROBINSON, Clerk of the " +
            "Council of the City of Los Angeles. Approved this 30th day of July, A. D. 1883. " +
            "C. E. THOM, Mayor. Published August 1st, 1883." }
  ],

  rows: [
    { kind: "change", from: "commercial-street", to: "ducommun",
      // QUALIFIED AND RESOLVED. The extent is the document\u2019s own \u2014 "from
      // Alameda street to Amelia street" \u2014 and both 1883 names already resolve
      // to modern ones in this corpus, from the sheet the ordinance itself
      // cites: Commercial -> Ducommun Street and Amelia -> Garey Street on
      // documents/mr002-526-p1.
      scope: "extent",
      says: ["sec-1", "title"],
      mechanism: "renaming",
      street: "Ducommun Street", fromCross: "Alameda Street", toCross: "Garey Street",
      confirmed: false,
      note: "The document\u2019s own wording for the extent is \u201Cextending from Alameda street to " +
            "Amelia street\u201D; the modern crosses are research, per the amendment \u00a75 \u2014 Amelia is " +
            "identified with Garey Street by documents/mr002-526-p1 and -p2, not by this " +
            "ordinance. Awaiting review." }
  ]
};
