// ★★ THIS SOLVES A PUZZLE FROM DOCUMENTS/LAH-1896-09-03, and it does it with
// twenty-one days to spare.
//
// That document — the Herald's list of Ordinance No. 3829's fourteen changes,
// adopted Aug. 31, 1896 — contains the line "MATEO, OR SHAFER, STREET, from
// Palmetto to Short, be changed to Molino street", and this project noted it as
// one of two streets in that ordinance carrying two names at once, with no
// explanation.
//
// Here is the explanation. On or about Aug. 10, 1896 an ordinance changed exactly
// that stretch — Mateo Street, from Palmetto to Short — to SHAFER STREET. Three
// weeks later the next ordinance changed it again, to Molino, and the drafter
// hedged because the street had two current names and he could not be sure which
// one would be recognised.
//
// SO THE CHAIN IS: Mateo (or Spruce before it, on the 1886 Goodwin Tract) → Shafer,
// Aug. 1896 → Molino, Aug. 31, 1896. A name that lasted three weeks.
//
// ★ AND IT CLOSES THE MOLINO LEAD PROPERLY. handbook/research-leads.md marked that
// solved on 2026-09-06 with the Aug. 31 ordinance; the step before it is now here
// too.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lah-1896-08-11",
  title: "Los Angeles Herald, Aug. 11, 1896, p. 5 — an ordinance changing the name of Mateo Street, from Palmetto Street to Short Street, to Shafer Street is adopted",
  shortTitle: "the Aug. 1896 Mateo → Shafer renaming",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18960811.1.5",
  scan: "documents/lah-1896-08-11/lah-1896-08-11-clip.jpg",
  transcription: null,

  date: { before: "1896-08-11" },
  recorded: "1896-08-11",
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
    { id: "mateo-shafer",
      text: "Ordinance changing the name of Mateo street, from Palmetto street to Short street, to " +
            "Shafer street. Adopted.",
      note: "★ Three weeks before the same stretch becomes Molino Street." }
  ],

  rows: []
};
