// ★★ THIS DOCUMENT ATTESTS ETERNITY STREET, under its later name. Our alignment of
// the 1849 Ord survey (documents/mr053-073) puts `eternity` on the Broadway
// corridor, and "Buena Vista … from Bellevue avenue north to the river" is that
// same ground. So the chain Eternity (1849) → Buena Vista (1888) → North Broadway
// (1908-09) is corroborated here, even though the word "Eternity" never appears.
// Recorded 2026-09-07, correcting a coverage audit that had searched only the old
// name and concluded this renaming had left no trace.
//
// THE MAKING OF NORTH BROADWAY. Three QUALIFIED changes ordered by an 8-to-1 vote, all
// to one name:
//
//   Fort street, First to Bellevue → Broadway
//   Buena Vista, Bellevue to the river → Broadway
//   Downey avenue, Avenue Eighteen to Mission road → Broadway
//
// with Buena Vista keeping its name from Temple to Bellevue and Downey avenue keeping
// its name from the river to Avenue Eighteen. That is a textbook set of `extent` rows,
// and it is unusually explicit about what is NOT changed as well as what is.
//
// Two bonus facts. First, an identity statement: "Fort street is that which is now known
// as North Broadway, from First to the tunnel, but which has never officially been named
// Broadway" — a street in common use under a name it did not legally hold, which is
// exactly the gap between our spellings[] and the record. Second, the ordinance was
// DELAYED on purpose: it could not be presented until the paving of Downey avenue was
// complete, because a mid-project name change would conflict with the Vrooman act.
// That is a legal reason for a gap between a council decision and its ordinance, and
// worth remembering whenever a decision here has no ordinance behind it.
//
// Councilman Healy's dissent is the age-and-sentiment argument again (cf.
// documents/lah-1899-05-06): every city has a Broadway, Los Angeles alone has a Buena
// Vista.
//
// STAGE 2 — ORDERED. The ordinance itself is later, and Vrooman-act timing says how much
// later. Logged in handbook/MINUTES-TO-CHECK.md.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lah-1908-09-22",
  title: "Los Angeles Herald, Sept. 22, 1908 — \"Healy Pleads Against Loss of 'Buena Vista'\": Fort street, Buena Vista and Downey avenue ordered changed to Broadway",
  shortTitle: "Fort, Buena Vista and Downey to Broadway",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH19080922.1.12",
  scan: "documents/lah-1908-09-22/lah-1908-09-22-clip.jpg",
  transcription: null,

  date: { before: "1908-09-22" },
  recorded: "1908-09-22",
  form: "textual",
  type: "news-report",
  attests: "built-by",
  completeness: "incidental",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "the-vote",
      text: "By a vote of eight to one yesterday the city engineer was instructed to prepare an " +
            "ordinance changing the name of Fort street, from First to Bellevue, Buena Vista, from " +
            "Bellevue to the river, and Downey avenue from Avenue Eighteen to Mission road, to " +
            "Broadway.",
      note: "Three QUALIFIED changes to one name. \"Yesterday\" = Sept. 21, 1908." },

    { id: "healy",
      text: "The one negative vote was from Councilman Healy, who instead of favoring changing the " +
            "name of Buena Vista to Broadway, was in favor of changing all of Broadway to Buena " +
            "Vista. He thought Buena Vista a much prettier name and every city in the country had its " +
            "Broadway, while so far as he knew Los Angeles was the only one with its Buena Vista. The " +
            "old associations and early history of Los Angeles recalled by the name of Buena Vista " +
            "was another argument he gave for his negative." },

    { id: "what-remains",
      text: "Councilman Dromgold, who is responsible for the measure, told the council that Buena " +
            "Vista would still retain its name from Temple to Bellevue, and it was the only place " +
            "where the name really fits, as it was high ground on these two blocks and the only place " +
            "where a \"beautiful view\" could be had. Downey avenue, he said, would still retain its " +
            "name from the river to Avenue Eighteen.",
      note: "States the REMAINDER extents as well as the changed ones." },

    { id: "fort-is-broadway",
      text: "Fort street is that which is now known as North Broadway, from First to the tunnel, but " +
            "which has never officially been named Broadway.",
      note: "★ A street in common use under a name it did not legally hold." },

    { id: "vrooman",
      text: "The ordinance will be presented by the city engineer as soon as the paving of Downey " +
            "avenue is completed. It would be inexpedient to change the name before as it would " +
            "conflict with the Vrooman act, under which the paving is being done.",
      note: "★ A LEGAL reason for delay between decision and ordinance — the Vrooman act (street " +
            "improvement assessments). Explains gaps elsewhere." }
  ],

  rows: []
};
