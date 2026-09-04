// Herald report of the Feb. 13, 1874 council meeting: a property owners'
// PETITION asking that Grasshopper → Union Avenue, Bull → Castelar, and Wasp →
// Yale, referred to a special committee to draft an ordinance.
//
// ⚠ THIS DOCUMENT CARRIES NO ROWS, AND THAT IS THE POINT.
//
// §5 lets only a document attesting the transition itself carry a change row.
// This one attests a REQUEST. The distinction is usually pedantic; here the
// document refutes itself, because one of the three things it asks for did not
// happen: the petition wants Grasshopper street called **Union Avenue**, and
// the Feb. 27 report (documents/lah-1874-02-27/) shows a rival petition
// carrying the day — "a heavy discussion ensued when the first named
// petitioners won, and Pearl street is to be the new name". So a petition in
// this corpus is demonstrably not an outcome, and reading one as a renaming
// would have put Union Avenue on the map.
//
// What follows for the other two: nothing yet. Bull → Castelar and Wasp → Yale
// are REQUESTED here and enacted nowhere we have read — the Feb. 27 item
// records only "An ordinance changing Grasshopper street to Pearl street was
// carried", one street, not three. Castelar and Yale certainly exist today, so
// the instrument exists; it has not been found. handbook/research-leads.md
// (2026-09-04) carries the hunt.
//
// The model has no kind for "a change was requested" — that is the same gap
// as the restoration and draft-amendment forms in
// handbook/change-rows-amendment.md §10, which are facts about an instrument
// rather than about ground. Until it has one, the excerpt IS the record: it is
// quoted here in full, and any row that later cites it will have to say which
// document enacted what it asks for.
//
// Also worth noting for the `hornet` entity: the council calls this street
// **Wasp street** in 1874, corroborating the English half of the Ord survey's
// bilingual "Calle de las Avispas" / "Hornet" label as a form in live use
// twenty-five years later.
//
// Text and clipping supplied by Kenny, 2026-09-04, and checked against the
// crop. The CDNC permalink is the `?a=d&d=…` form; the trailing
// `&e=-------en--20--1--txt-txIN--------` a search carries is its result-set
// context and is not part of the address.

module.exports = {
  id: "lah-1874-02-13",
  title: "Los Angeles Herald, “Common Council,” Feb. 14, 1874 (petition to rename Grasshopper, Bull and Wasp streets)",
  shortTitle: "the Feb. 1874 renaming petition (Herald report)",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18740214.2.12",
  // The same item under CDNC's older cgi-bin address, which is the form
  // names.js cites it by. Declared as a copy so the two urls are known to be
  // one document — without it the corpus holds the same article twice under
  // different strings and nothing notices (§4.4a).
  copies: [
    { title: "Los Angeles Herald, “Common Council”, Feb. 14, 1874 (CDNC's older address)",
      url: "http://cdnc.ucr.edu/cgi-bin/cdnc?a=d&d=LAH18740214.2.12" }
  ],
  scan: "documents/lah-1874-02-13/lah-1874-02-13-clip.jpg",
  transcription: null,

  date: { on: "1874-02-13" },       // the council meeting; the paper is Feb. 14
  form: "textual",
  type: "news-report",
  // It attests that these streets existed to be petitioned about — but with no
  // extent of any kind, so nothing here can be drawn. Left as built-by for
  // consistency with the other council reports; it does no work while the
  // document has no rows.
  attests: "built-by",
  completeness: "incidental",
  coverage: [[34.065, -118.275], [34.065, -118.255],
             [34.035, -118.255], [34.035, -118.275]],
  sweptFully: false,                // only the petition paragraph has been read
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "petition",
      text: "A petition was received from a number of property owners, requesting " +
            "that Grasshopper street be changed to Union Avenue, Bull street to " +
            "Castelar, and Wasp street to Yale street. The petition was favorably " +
            "received and a special committee, in conjunction with the City Attorney, " +
            "was appointed to draft an ordinance to comply with the request." }
  ],

  rows: []
};
