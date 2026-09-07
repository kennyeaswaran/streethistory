// Los Angeles Herald, Sept. 9, 1896, p. 10 — the council's proceedings of the
// day before, printing Ordinance No. 3847 (New Series) IN FULL, with the
// extents the minute book leaves out.
//
// ★ THIS DOCUMENT CORRECTS THE MINUTES, AND THAT IS THE POINT OF KEEPING IT.
// documents/min-1896-09-08 copies the ordinance into the ledger as nine bare
// lines — "Freeman Street to Twentieth Street" — with no from and no to. The
// Herald prints the same nine changes with a stretch on every one: "Freeman
// street, FROM HOOVER STREET TO BUDLONG AVENUE, change to Twentieth street."
//
// So the ordinance was QUALIFIED and the minute book ABRIDGED it. That matters
// well beyond this ordinance:
//
//   • A change read from a minutes copy may be missing an extent that the
//     instrument had. "The minutes give the text" is not the same as "the
//     minutes give the text in full", and until today this project had no case
//     showing the difference.
//   • It removes what looked like a finding. On the strength of the minutes
//     alone this instrument appeared UNQUALIFIED eight days after a qualified
//     one, which was written up as evidence that the split is a per-instrument
//     choice. It is not evidence of that at all — both instruments qualified
//     their changes, and one clerk's copy dropped it. handbook/research-leads.md
//     carries the retraction.
//   • documents/ord-1874-02-26 is a minutes copy of an ordinance too, and it
//     reads as complete. It may be. Nothing here proves otherwise — but it is
//     no longer safe to assume.
//
// WHAT THE EXTENTS SHOW. Vermont Avenue is the seam. Every number is made of
// one street east of Vermont and, where there is one, a second street west of
// it: Bryant (Hoover-Vermont) plus Cypress (Vermont-Rosedale) both become
// Twenty-second; Forrester plus Vine both become Twenty-fourth; Clinton plus
// Kenwood both become Twenty-fifth. Read with petition No. 816 six days later
// — streets renamed "so as to make them compare with the names of the streets
// on the north side of Pico Street" (documents/min-1896-09-14) — the design is
// plain: give the two halves one number so it runs through.
//
// ⚠ THIS VINE STREET IS NOT THE VINE STREET ON THE WANTED LIST. That one runs
// between First and Second by Central Avenue and becomes Central Avenue in the
// Feb. 1897 ordinance (documents/ord-4093). This one runs from Vermont Avenue
// to Rosedale Avenue in the southwest and becomes Twenty-fourth Street five
// months earlier. Two streets, two lineages, one spelling — and the coincidence
// is close enough in time to be dangerous.
//
// NO ROWS. Not one of the streets named here — nine old names, six numbers, and
// the cross streets Hoover, Vermont, Budlong, Rosedale and Palm — is in this
// project's OSM extract. The extents are stated and would resolve the moment
// the southwest is encoded, which is exactly why they are quoted in full.
//
// PROVENANCE. Two clippings supplied by Kenny, 2026-09-06, from CDNC —
// LAH18960909.1.10, crops 882,5336,633,701 and 1517,242,630,145 (the last three
// lines, which run over to the next column). Both beside this file. Transcribed
// by Claude; the print is clean and the reading is not in doubt.

module.exports = {
  id: "lah-1896-09-09",
  title: "Los Angeles Herald, Sept. 9, 1896, p. 10 — Ordinance No. 3847 (New Series) printed in full, with the extents the council minutes omit",
  shortTitle: "the Sept. 1896 southwest renamings (Herald text)",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18960909.1.10",
  scan: "documents/lah-1896-09-09/lah-1896-09-09-clip.jpg",
  transcription: null,

  // Adopted Sept. 8; printed Sept. 9.
  date: { on: "1896-09-08" },
  recorded: "1896-09-09",
  form: "textual",
  type: "news-report",
  attests: "built-by",
  // It prints the instrument's own list and closes it with "Adopted."
  completeness: "exhaustive-in-scope",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "heading",
      text: "Ordinance changing the names of certain streets in the southwestern portion of " +
            "the city as follows:",
      note: "The minute book says “southwest portion”, the paper “southwestern”. Same " +
            "instrument; one of the two is quoting loosely, and there is no way to tell " +
            "which without Book 11 p. 496." },

    { id: "freeman-twentieth",
      text: "Freeman street, from Hoover street to Budlong avenue, change to Twentieth street." },
    { id: "olivia-twentyfirst",
      text: "Olivia street, from Vermont avenue to Budlong avenue, change to Twenty-first " +
            "street." },
    { id: "bryant-twentysecond",
      text: "Bryant avenue, from Hoover street to Vermont avenue, change to Twenty-second " +
            "street." },
    { id: "cypress-twentysecond",
      text: "Cypress avenue, from Vermont avenue to Rosedale avenue, change to Twenty-second " +
            "street.",
      note: "The western half of Twenty-second Street: Bryant runs Hoover to Vermont, " +
            "Cypress carries on from Vermont to Rosedale, and one number is laid over both." },
    { id: "maxwell-twentythird",
      text: "Maxwell avenue, from Hoover street to Vermont avenue, change to Twenty-third " +
            "street." },
    { id: "forrester-twentyfourth",
      text: "Forrester avenue, from Hoover street to Vermont avenue, change to Twenty-fourth " +
            "street.",
      note: "The paper prints Forrester with two r's, which settles a reading the manuscript " +
            "left open." },
    { id: "vine-twentyfourth",
      text: "Vine street, from Vermont avenue to Rosedale avenue, change to Twenty-fourth " +
            "street.",
      note: "⚠ NOT the Vine Street of documents/ord-4093, which runs First to Second by " +
            "Central Avenue and becomes Central Avenue in Feb. 1897. Different ground, " +
            "different lineage, five months apart. This line also corrects the manuscript " +
            "reading in documents/min-1896-09-08, where the word is faint and was first " +
            "read as “Pine”." },
    { id: "clinton-twentyfifth",
      text: "Clinton avenue, from Hoover street to Vermont avenue, change to Twenty-fifth " +
            "street." },
    { id: "kenwood-twentyfifth",
      text: "Kenwood avenue, from Vermont avenue to Palm street, change to Twenty-fifth " +
            "street. Adopted.",
      note: "The list closes with the council's action, which is what makes this a report of " +
            "an enacted ordinance rather than of a draft (§5)." }
  ],

  rows: []
};
