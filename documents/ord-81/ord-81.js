// \u2605\u2605 ORDINANCE NO. 81 \u2014 TURNER STREET, WEST OF ALAMEDA ONLY, BECOMES JACKSON
// STREET; and the qualification is the whole point, because it explains the
// thing `turner-street` has been unable to explain.
//
// "SECTION 1. That the name of that street in said City of Los Angeles,
// extending from Wilmington street to Alameda street, lying between Requena and
// First streets, and known and designated as Turner street, is hereby changed,
// and henceforth the same shall be known and designated as Jackson street."
//
// Adopted May 12, 1883, approved by JOHN P. MORAN, Mayor pro tem., May 14,
// published in the Herald May 17. Printed at p. 234 of Robinson\u2019s 1884
// compilation; the page image is beside this file and the text is in
// ord-81-text.md, read by eye.
//
// \u2605\u2605\u2605 WHAT THE EXTENT SOLVES. `turner-street`\u2019s internalNote ends: "our sheet
// is dated 1928 and still letters Turner, forty-five years after the Jackson
// change \u2014 either the sheet uses a historic name, or Turner survived alongside
// Jackson on adjoining ground. No change row until that is settled." The
// ordinance settles it, and the second branch is right. It renames Turner only
// from Wilmington street to Alameda street. Twice later in the same volume the
// Council legislates for a Turner street that is still Turner:
//
//   \u2022 Res. 157, p. 266 \u2014 "to establish the grade of Turner street, from Alameda
//     street to Vignes street" (and it names an intersection of Lafayette street
//     and Turner street along the way);
//   \u2022 Res. 163, p. 271 \u2014 "of intention to improve and grade Turner street,
//     between Alameda street and Vignes street".
//
// So after May 1883 Turner ran Alameda to Vignes and Jackson ran Wilmington to
// Alameda, end to end across Alameda. Tract No. 9771 of 1928
// (documents/tr0145-062) letters Turner east of Alameda because that is where
// Turner still was. Nothing is wrong with that sheet.
//
// \u26a0 AND THE NEWSPAPER GARBLED IT. documents/lah-1883-05-13 is the Herald\u2019s
// report of this meeting, and `turner-street`\u2019s note repeats its wording:
// "changing Turner Street, FROM FIRST TO ALAMEDA, to Jackson Street". The
// ordinance says from WILMINGTON to Alameda, between Requena and First. First
// Street is the southern boundary of the block, not an end of the street. This
// is the sort of slip that a clipping alone cannot be checked against.
//
// \u26a0 THE ROW IS `extent-unresolved`, AND NOT BECAUSE THE DOCUMENT IS VAGUE.
// The ordinance states a perfectly good 1883 extent. What is missing is a
// MODERN street to hang it on: the corridor from Wilmington street (modern
// Judge John Aiso Street, per documents/mr003-146-p1, mr006-308, mr010-008) east
// to Alameda, between Requena (modern Temple Street, per mr003-146-p2) and
// First, is pavement no modern street follows \u2014 documents/mr006-308 letters a
// Jackson Street across exactly that ground in 1888 and the corpus records it as
// a vanished street. An "extent" scope needs a `street` in the OSM extract and
// there is none, so the row records the act, the date and the words, and draws
// nothing. That is the amendment\u2019s third state (\u00a73) working as intended.
//
// \u26a0 AND `to` IS A JUDGEMENT KENNY SHOULD CHECK. names.js carries TWO Jackson
// entities, `jackson-st` and `jackson-st-little-tokyo`, each with the other in
// `possiblySameAs`. This ordinance renames the stretch WEST of Alameda, which is
// the ground `jackson-st-little-tokyo` is lettered on (documents/mr006-308,
// Alvarado Tract, 1888) \u2014 so that is the id used here. If Kenny merges the two,
// the row follows the merge. See documents/robinson-1884/FINDINGS.md.
//
// \u26a0 THE NUMBER IS ROBINSON\u2019S \u2014 see documents/ord-97 and Ordinance No. 104.
//
// PROVENANCE. Gale, The Making of Modern Law: Primary Sources, DT0102876584.
// Read off the 200 dpi page image by Claude, 2026-09-19.

module.exports = {
  id: "ord-81",
  title: "Ordinance No. 81 (Robinson series), \u201CAn Ordinance changing the name of Turner street\u201D \u2014 adopted May 12, 1883, approved May 14, published May 17, 1883",
  shortTitle: "Ord. 81, Turner street west of Alameda becomes Jackson",
  url: "https://link.gale.com/apps/doc/DT0102876584/MMLP?u=uclosangeles&sid=bookmark-MMLP",
  scan: "documents/ord-81/ord-81-p234.jpg",
  transcription: "documents/ord-81/ord-81-text.md",

  date: { on: "1883-05-12" },
  recorded: "1884",
  form: "textual",
  type: "ordinance",
  attests: "built-by",
  completeness: "exhaustive-in-scope",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  // The reading is complete; the modern ground of the one row is not, so it is
  // still a proposal and \u00a75.5 keeps sweptFully false while it is.
  sweptFully: false,
  sweptFor: ["Turner Street", "Jackson Street"],
  readBy: "human",

  excerpts: [
    { id: "title",
      text: "AN ORDINANCE changing the name of Turner street." },
    { id: "sec-1",
      text: "SECTION 1. That the name of that street in said City of Los Angeles, extending from " +
            "Wilmington street to Alameda street, lying between Requena and First streets, and " +
            "known and designated as Turner street, is hereby changed, and henceforth the same " +
            "shall be known and designated as Jackson street.",
      note: "\u201Clying between Requena and First streets\u201D describes the block the street sits in, " +
            "not its ends; its ends are Wilmington and Alameda." },
    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the Council of the City of " +
            "Los Angeles, at its meeting of May 12th, A. D. 1883. W. W. ROBINSON, Clerk of the " +
            "Council of the City of Los Angeles. Approved this 14th day of May, A. D. 1883. " +
            "JOHN P. MORAN, Mayor pro tem. Published May 17th, 1883.",
      note: "Moran signs as Mayor pro tem.; C. E. Thom signs every other ordinance in this part of " +
            "the volume." },
    { id: "res-157-turner-still-turner",
      text: "RESOLUTION No. 157. Resolution of the Mayor and Council of the City of Los Angeles, to " +
            "establish the grade of Turner street, from Alameda street to Vignes street.",
      note: "Robinson 1884 p. 266, LATER in the volume than this ordinance. Not part of Ordinance " +
            "81; quoted here because it is what shows the change was partial. Res. 163 (p. 271) " +
            "orders the grading of the same stretch." }
  ],

  rows: [
    { kind: "change", from: "turner-street", to: "jackson-st-little-tokyo",
      // QUALIFIED. The ordinance names a stretch \u2014 Wilmington to Alameda \u2014 and
      // Turner demonstrably survived east of Alameda, so reading it as
      // unqualified would rename ground the Council did not touch. UNRESOLVED
      // because no modern street follows that stretch (\u00a73 of the amendment).
      scope: "extent-unresolved",
      says: ["sec-1", "title"],
      mechanism: "renaming",
      confirmed: false,
      note: "The document\u2019s own words for the extent: \u201Cextending from Wilmington street to " +
            "Alameda street, lying between Requena and First streets\u201D. In modern terms that is " +
            "Judge John Aiso Street east to Alameda Street, between Temple Street and 1st Street \u2014 " +
            "pavement no modern street follows, which is why no `street` is authored here. " +
            "\u26a0 `to` is a choice between two entities the corpus marks possiblySameAs; see the " +
            "header." }
  ]
};
