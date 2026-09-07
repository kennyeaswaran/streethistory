// Los Angeles Herald, Aug. 19, 1883, p. 3 — the Board of Public Works
// recommends SIX renamings at once, and a seventh is referred to it. The list
// that becomes the ordinance of Sept. 1 (documents/lah-1883-09-02) — but not
// unchanged, which is the whole value of having this document.
//
// ★ THE ALABAMA THAT BECAME GEORGIA BELL. The Board recommends "Georgia street,
// in same addition, to ALABAMA street" — the addition being Bell's, named two
// lines earlier. Two weeks later the ordinance as reported changes Georgia to
// GEORGIA BELL street. So the new name was decided somewhere between Aug. 18
// and Sept. 1, and the first proposal was to move the street out of the
// southern-states run altogether. That bears directly on what "Georgia Bell"
// means: the name that was actually adopted keeps Georgia and adds the
// ADDITION'S name to it, which is the shape of a disambiguation rather than of
// a fresh dedication. names.js reads it as honouring Georgia Herrick Bell,
// Horace Bell's wife, on whose land the street lay; both can be true at once,
// and this document is the first evidence bearing on it either way.
//
// ⚠ AND IT PUTS A DATE IN CONFLICT WITH names.js. The Georgia Bell period is
// dated from 1889 there, on Gen. Forman's 1897 testimony. This sequence has the
// name adopted in Sept. 1883. The conflict is recorded on the entity and in
// documents/lah-1883-09-02; nothing has been overwritten.
//
// A SOUTHERN-STATES RUN IN BELL'S ADDITION. Pine → Cherry, Elm → Bush, Georgia
// → Alabama (proposed): the Board is replacing a tree-and-place set with
// another set, and Georgia is being read as the STATE by the people doing the
// renaming — which is what `georgia-east`'s note guesses about the other
// Georgia. Worth noting, not conclusive: Bell's addition is west downtown and
// the state reading may simply be the Board's.
//
// TURNER'S SECOND HALF. "Turner street, west of Main street, to Sonora street"
// — the west end of the street whose east end had become Jackson three months
// earlier (documents/lah-1883-05-13).
//
// ROSE STREET, EAST LOS ANGELES → KUHRTS. "East Los Angeles" in 1883 is modern
// Lincoln Heights, not the modern district of that name. Kuhrts Street appears
// again in the Apr. 1893 minutes (documents/min-1893-04-10) as a franchise
// route, so the name stuck.
//
// CHAVEZ STREET → MAIN STREET, on the second clip beside this file, is referred
// to the Board rather than recommended by it — a separate item, and the only
// one of the seven that touches a street this project has an entity for
// (`main-street-dtla`). Main Street being extended north over an existing
// street under its own name is an ABSORPTION, the shape the nine undated ones
// in research-leads share.
//
// NO ROWS. Every one of these is a recommendation to draft, not an enactment
// (§5), and of the nine names involved only Main Street and Rose Street are in
// the OSM extract — and this project's Rose Street is in the Arts District, not
// East Los Angeles, so it is a different street with the same spelling.
//
// PROVENANCE. Two clippings supplied by Kenny, 2026-09-06, found by the CDNC
// phrase search of RENAMING-SOURCES.md Step 2b — crops 2317,3572,532,700 (the
// Board's report) and 2312,1515,531,114 (the Chavez item) of LAH18830819.1.3.

module.exports = {
  id: "lah-1883-08-19",
  title: "Los Angeles Herald, Aug. 19, 1883, p. 3 — the Board of Public Works recommends renaming Turner, Pacific, Pine, Georgia, Elm and Rose streets, and an ordinance changing Chavez Street to Main Street is referred to it",
  shortTitle: "the Aug. 1883 renaming recommendations",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18830819.1.3",
  scan: "documents/lah-1883-08-19/lah-1883-08-19-clip.jpg",
  transcription: null,

  date: { before: "1883-08-19" },
  recorded: "1883-08-19",
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
    { id: "board-preamble",
      text: "The Board of Public Works report as follows: Recommend that the City Attorney " +
            "be instructed to prepare an ordinance changing the names of the following " +
            "streets:" },
    { id: "turner-sonora",
      text: "Turner street, west of Main street, to Sonora street. Adopted.",
      note: "“Adopted” here means the Council adopted the Board's RECOMMENDATION, not an " +
            "ordinance — the recommendation is that one be prepared." },
    { id: "pacific-montgomery",
      text: "Pacific street, in Bell's addition, to Montgomery street. Adopted.",
      note: "Names the addition. The three items that follow say “in same addition”, so all " +
            "four are in Bell's." },
    { id: "pine-cherry",
      text: "Pine street, in same addition, to Cherry street. Adopted.",
      note: "A third Pine Street for this corpus, after the Miguel Subdivision's (16th " +
            "Street's predecessor) and the one in the 1896 southwest ordinance. Three " +
            "streets, one spelling, no connection between them." },
    { id: "georgia-alabama",
      text: "Georgia street, in same addition, to Alabama street. Adopted.",
      note: "★ The proposal that did not survive: the ordinance as reported on Sept. 2 " +
            "makes it Georgia Bell street instead (documents/lah-1883-09-02)." },
    { id: "elm-bush",
      text: "Elm street, in same addition, to Bush street. Adopted." },
    { id: "rose-kuhrts",
      text: "Rose street, East Los Angeles, to Kuhrts street. Adopted.",
      note: "“East Los Angeles” in 1883 is modern Lincoln Heights. NOT this project's Rose " +
            "Street, which is in the Arts District." },
    { id: "figueroa-postponed",
      text: "In matter of Figueroa street ask one week's further time. Granted.",
      note: "Kept because of what it is not: the Board had something before it about " +
            "Figueroa Street in Aug. 1883 and asked for another week. Fourteen years before " +
            "Ord. 4093 moved the Figueroa name onto Pearl's ground. What the matter was is " +
            "not stated here and is worth a look in the following weeks." },
    { id: "chavez-main",
      text: "Also, an ordinance changing the name of Chavez street to Main street. Referred " +
            "to the Board of Public Works.",
      note: "A separate item from the Board's report — this one is going TO the Board. Main " +
            "Street absorbing a named street rather than a new name being coined." }
  ],

  rows: []
};
