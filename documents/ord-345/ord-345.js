// ★★ ORDINANCE NO. 345 — "An Ordinance changing the name of Virgin street."
// Adopted Aug. 22, 1887, approved Aug. 30 by L. N. Breed, Mayor pro tem.,
// published in the Los Angeles Daily Tribune Sept. 2, 1887.
//
// THIS IS NOT A NEW INSTRUMENT. IT IS THE NUMBER.
// documents/ord-1887-08-22 already holds this ordinance, transcribed from the
// City Clerk's minute ledger, and its header says the thing this document
// answers: "⚠ THE ORDINANCE NUMBER IS BLANK. The clerk wrote the heading
// 'Ordinance No.' and left the number off." Teed's printed compilation supplies
// it — **345** — together with the approval (Aug. 30, L. N. Breed, Mayor pro
// tem.) and the publication date (Sept. 2, 1887), neither of which the ledger
// records.
//
// ⚠⚠ THIS DOCUMENT CARRIES NO ROWS, ON PURPOSE. One act may not be counted
// twice. `virgin → alpine` is already a change row on ord-1887-08-22, and the
// precedent for the shape is ord-1613 / lah-1893-04-04: the instrument carries
// the row and the second witness carries none. Which of the two documents ought
// to be the instrument of record is a decision for Kenny, not for an instance
// that has been told not to touch other folders — see TASK.md beside this file.
//
// ★ IT ALSO CLOSES AN OPEN METHODOLOGICAL QUESTION, AND THE ANSWER IS
// REASSURING. handbook/RENAMING-SOURCES.md §2c warns that a minutes copy of an
// ordinance can be an abridgement, on the evidence of Ord. 3847 in 1896, whose
// ledger copy dropped every extent the Herald printed. §2c also says of
// ord-1874-02-26 and ord-1887-08-22: "Nothing disproves it, and nothing supports
// it either." This is the first direct comparison in the corpus of a ledger copy
// against the official printed copy of the same ordinance, and **they agree word
// for word**. The ledger was not abridging. Virgin → Alpine really is
// unqualified.
//
// WHY THE VOLUME MATTERS HERE BEYOND THE NUMBER. The index of Teed Vol. IV also
// carries "Virgin street, ordered improved and graded (charter) … Res. 590 …
// p. 267" — the city still transacting business under the OLD name after the
// renaming had taken effect. That is the ordinary lag between an act and its
// use, and it is worth knowing before anyone treats a post-1887 "Virgin street"
// sighting as evidence the change did not hold.
//
// PROVENANCE. Read from a 300 dpi render of PDF page 121 of
// documents/teed-1889/teed-1889-vol4.pdf (printed p. 117). ⚠ The Gale scan of
// this leaf has a fold across the right third of the text block; every word is
// still legible and nothing in the transcription beside this file is a guess,
// but the affected words are listed there. Transcribed by an instance,
// 2026-09-19; not checked by a second reader.

module.exports = {
  id: "ord-345",
  title: "Ordinance No. 345, “An Ordinance changing the name of Virgin street” — adopted by the Council of the City of Los Angeles Aug. 22, 1887, approved Aug. 30, published Sept. 2, 1887; printed in Freeman G. Teed, comp., Charter and Compiled Ordinances and Resolutions of the City of Los Angeles, Vol. IV (1889), p. 117",
  shortTitle: "Ord. 345, the printed Virgin Street ordinance",
  url: "https://link.gale.com/apps/doc/DT0106634468/MMLP?u=uclosangeles",
  scan: "documents/teed-1889/teed-1889-vol4.pdf",
  transcription: "documents/ord-345/ord-345-transcription.md",

  date: { on: "1887-08-22" },
  recorded: "1889",
  form: "textual",
  type: "ordinance",
  attests: "built-by",
  completeness: "exhaustive-in-scope",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: true,
  sweptFor: [],
  readBy: "instance",

  excerpts: [
    { id: "title",
      text: "An Ordinance changing the name of Virgin street." },

    { id: "sec-1",
      text: "Section 1. That the name of that certain street in the City of Los Angeles known as " +
            "Virgin street, shall be and is hereby declared to be changed to Alpine street.",
      note: "Word for word the ledger copy at ord-1887-08-22, which reads “known as Virgin” where " +
            "the print reads “known as Virgin street”. No extent in either copy: the change is " +
            "unqualified, and now demonstrably so rather than presumably so." },

    { id: "sec-2",
      text: "Sec. 2. The Clerk of the Council shall certify to the passage of this ordinance and " +
            "shall cause the same to be published once in the Los Angeles Daily Tribune, and " +
            "thereupon and thereafter it shall take effect and be in force." },

    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the Council of the City " +
            "of Los Angeles at its meeting of August 22, 1887. FREEMAN G. TEED, Clerk of the " +
            "Council of the City of Los Angeles. Approved this 30th day of August, 1887. " +
            "L. N. BREED, Mayor pro tem. Published September 2, 1887.",
      note: "★ The three facts the minute ledger does not give: the number in the heading above " +
            "(345), the mayor pro tem's approval on Aug. 30, and the publication — and therefore " +
            "the coming into force — on Sept. 2, 1887. Breed signs as Mayor pro tem.; he is the " +
            "same President Breed who presided over the adopting vote in the ledger." }
  ],

  // Deliberately empty. See the header and TASK.md.
  rows: []
};
