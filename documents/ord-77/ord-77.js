// \u2605\u2605\u2605 ORDINANCE NO. 77 \u2014 BATH STREET BECOMES MAIN STREET. A whole street name
// ends here, and this corpus did not know it existed.
//
// "SECTION 1. That the name of that certain street in the City of Los Angeles
// heretofore known as Bath street be changed, and that hereupon and hereafter it
// shall be known and designated as Main street."
//
// Adopted Mar. 19, 1883, approved Mar. 21, published Mar. 27. Printed at
// pp. 223-224 of Robinson\u2019s 1884 compilation, immediately before Ordinance
// No. 76 on the page and immediately after it in number \u2014 which is itself
// evidence about the numbering (see below).
//
// \u2605\u2605 AND THE ROW LANDS. The ordinance states NO extent \u2014 "that certain street
// ... heretofore known as Bath street" \u2014 so the change is UNQUALIFIED and its
// ground is derived from wherever the corpus independently letters Bath Street.
// It does, and exactly once: `bath-street-plaza` in names-new.js is lettered
// "BATH STREET" on documents/oldplaza1873, the 1873 survey of the old plaza, on
// modern MAIN STREET running north from Arcadia Street. The same sheet letters
// CALLE PRINCIPAL south of Arcadia as `main-street-dtla`. So the 1873 survey
// draws the two halves of Main under two names, and this ordinance is the
// instrument that joined them.
//
// \u26a0 `bath-street-plaza` IS STILL IN names-new.js, awaiting research and a move
// into names.js. The row resolves against it and check-model.js accepts it, but
// it is an unresearched stub \u2014 no namesake, no sources \u2014 and this ordinance is
// the first thing in the corpus to give it a date and an end.
//
// \u2605 WHAT IT IS ALMOST CERTAINLY ABOUT, offered as a reading and not a finding.
// Bath Street was the old name of the stretch of Main north of the plaza \u2014 and
// five days after this, Ordinance No. 76 (documents/ord-76) names the short
// frontage in front of the plaza church UPPER MAIN STREET, running north to
// Alameda. Two acts a week apart tidying the naming of Main north of the plaza
// is a coherent story; it is not one this document proves, and the extent that
// would prove it is exactly what Ordinance 77 does not give.
//
// \u2605\u2605 THE ADOPTION DATES ARE OUT OF ORDER WITH THE NUMBERS, and that is a fact
// about the whole volume rather than a slip. No. 77 was adopted Mar. 19; No. 76
// was adopted Mar. 24. Ordinance No. 104 (p. 318, Nov. 1883) ordains that
// ordinances and resolutions "shall be numbered consecutively in accordance with
// the numbering of the ordinances and resolutions in the compilation ...
// compiled by W. W. Robinson" \u2014 so before Nov. 1883 the city\u2019s acts had no
// numbers, and 1 to 103 are numbers the COMPILER assigned and the Council then
// ratified. Anyone citing "Ordinance No. 77, 1883" is citing Robinson.
//
// PROVENANCE. Gale, The Making of Modern Law: Primary Sources, DT0102876584.
// Read off the 200 dpi page images by Claude, 2026-09-19.

module.exports = {
  id: "ord-77",
  title: "Ordinance No. 77 (Robinson series), \u201CAn Ordinance changing the name of Bath street to Main street\u201D \u2014 adopted Mar. 19, 1883, approved Mar. 21, published Mar. 27, 1883",
  shortTitle: "Ord. 77, Bath street becomes Main street",
  url: "https://link.gale.com/apps/doc/DT0102876584/MMLP?u=uclosangeles&sid=bookmark-MMLP",
  scan: "documents/ord-77/ord-77-p223.jpg",
  transcription: "documents/ord-77/ord-77-text.md",

  date: { on: "1883-03-19" },
  recorded: "1884",
  form: "textual",
  type: "ordinance",
  attests: "built-by",
  completeness: "exhaustive-in-scope",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "title",
      text: "AN ORDINANCE changing the name of Bath street to Main street." },
    { id: "sec-1",
      text: "SECTION 1. That the name of that certain street in the City of Los Angeles heretofore " +
            "known as Bath street be changed, and that hereupon and hereafter it shall be known and " +
            "designated as Main street.",
      note: "No extent of any kind \u2014 unqualified in the amendment\u2019s sense (\u00a72). Compare " +
            "documents/ord-88, adopted three months later, which is the same bare shape." },
    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the Council of the City of " +
            "Los Angeles, at its meeting of March 19th, A. D. 1883. W. W. ROBINSON, Clerk of the " +
            "Council of the City of Los Angeles. Approved this 21st day of March, A. D. 1883. " +
            "C. E. THOM, Mayor. Published March 27th, 1883.",
      note: "Five days EARLIER than Ordinance No. 76, which carries the lower number. See the " +
            "header, and Ordinance No. 104." }
  ],

  rows: [
    { kind: "change", from: "bath-street-plaza", to: "main-street-dtla",
      // UNQUALIFIED. The ordinance names no stretch, so the change applies
      // wherever Bath Street is attested \u2014 which is documents/oldplaza1873, on
      // modern Main Street north of Arcadia Street. Nothing here authors that
      // extent; it is derived, as amendment \u00a74 requires.
      scope: "whole-name",
      says: ["sec-1", "title"],
      mechanism: "renaming",
      note: "The 1873 plaza survey letters BATH STREET on modern Main Street north of Arcadia " +
            "and CALLE PRINCIPAL on modern Main Street south of it; this ordinance makes the " +
            "whole of it Main. \u26a0 `bath-street-plaza` is a names-new.js stub with no namesake " +
            "researched \u2014 see documents/robinson-1884/FINDINGS.md." }
  ]
};
