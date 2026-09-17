// ★ THE SOURCE FOR SAPPHIRE → HUNTLEY DRIVE. "The name of that part of Boyleston
// avenue and Sapphire street, from north of Third, changed to Huntley drive."
//
// WHY THAT MATTERS. `sapphire` has said "Between Boylston and Bixel it became
// Huntley Drive" on Garrigues's authority alone — a one-line entry in a hobbyist's
// table of old street names, corroborated only circumstantially (the city registry
// has exactly one Huntley Drive, in the tract's own Thomas Bros. square). This is
// the council ordering the change, in a newspaper, on a date. The entity's claim
// goes from `partial` corroboration to an attested renaming, and the date moves
// from "sometime after 1903" to November 1919.
//
// ★ AND DESCANSO DRIVE IS NAMED HERE: "Reservoir street, from Sunset boulevard to
// Micheltorena street, changed to Descanso drive." Neither name is yet an entity
// in this corpus; the ground is the Silver Lake side of Echo Park, north of what
// this project's OSM extract covers.
//
// ⚠ A SHORT ITEM WITH A MISLEADING HEADLINE. "NO CHANGES AT PRESENT" is about SAN
// PEDRO — the council declining to rename streets in the newly consolidated harbor
// district — and the two changes it DID order are reported underneath as an
// afterthought. Anyone phrase-searching CDNC for these renamings will not find
// them by the headline.
//
// THE 1919 CONTEXT is worth keeping. Los Angeles annexed San Pedro and Wilmington
// in 1909 and spent the next decade absorbing a second, separately-platted street
// grid with its own duplicate names. This item is the council deciding not to
// repeat the 1888-97 cull on the harbor — a decision it later reversed.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-17, from CDNC LAH19191127.1.42,
// crop 808,6012,663,381. Transcribed by Claude the same day; the print is clean
// and the whole item is quoted below, so this document is complete as it stands.

module.exports = {
  id: "lah-1919-11-27",
  title: "Los Angeles Herald, Nov. 27, 1919, p. 42 — “No Changes at Present”: the council declines to rename streets in San Pedro, and orders Reservoir Street to become Descanso Drive and part of Boyleston Avenue and Sapphire Street to become Huntley Drive",
  shortTitle: "the Nov. 1919 item (Sapphire → Huntley, Reservoir → Descanso)",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH19191127.1.42",
  scan: "documents/lah-1919-11-27/lah-1919-11-27-clip.jpg",
  transcription: null,

  // The paper reports council action without dating the meeting, so the only
  // defensible date is "before publication" (§4).
  date: { before: "1919-11-27" },
  recorded: "1919-11-27",
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
    { id: "full-item",
      text: "NO CHANGES AT PRESENT. For the present, at least, the city council will not order any " +
            "changes of street names in San Pedro. The council ordered the name of Reservoir street, " +
            "from Sunset boulevard to Micheltorena street, changed to Descanso drive, and the name " +
            "of that part of Boyleston avenue and Sapphire street, from north of Third, changed to " +
            "Huntley drive.",
      note: "The entire item, four sentences. The headline is about the first sentence only." },

    { id: "sapphire-huntley",
      text: "the name of that part of Boyleston avenue and Sapphire street, from north of Third, " +
            "changed to Huntley drive",
      note: "★★ THE SOURCE `sapphire` WAS MISSING. Two streets folded into one new name, which is " +
            "why Garrigues could describe the result as running “between Boylston and Bixel” — " +
            "Boylston Avenue's northern end and Sapphire Street were the two pieces. ⚠ Note the " +
            "paper's spelling, BOYLESTON with an E, against the corpus's `boylston`; the 1897 " +
            "council amendments that coined the name spell it Boylston, so this is the Herald's " +
            "slip, not a variant worth carrying. ⚠ Note also that this renaming ran the opposite way " +
            "from the one in documents/lah-1897-12-07, where Sapphire is a landmark used to locate " +
            "another street (“Jewel street, Sapphire street to north termination, changed to Bixel " +
            "street”): in 1897 Sapphire is the fixed point, in 1919 it is the thing being renamed." },

    { id: "reservoir-descanso",
      text: "The council ordered the name of Reservoir street, from Sunset boulevard to " +
            "Micheltorena street, changed to Descanso drive",
      note: "★ Descanso Drive's naming, and a Reservoir Street that is NOT the one in the Oct. 1888 " +
            "committee list (that one was in the Park Tract and became Centennial — see " +
            "documents/lah-1888-10-11 item 41). This is the Silver Lake reservoir, and the stretch " +
            "named runs north of this project's OSM extract, so no row is entered. Neither name is " +
            "an entity here yet." },

    { id: "san-pedro",
      text: "For the present, at least, the city council will not order any changes of street names " +
            "in San Pedro.",
      note: "Context for the whole 1909–1930 harbor-consolidation problem: a second platted grid " +
            "with its own duplicate names, annexed into a city that had spent 1888–97 eliminating " +
            "exactly that. The council declines the job here." }
  ],

  // No rows. Both changes are on ground north or south of this project's extract,
  // and in the Sapphire case the stretch is given as "from north of Third" with no
  // second cross street, which `scope: "extent"` cannot resolve even if the ground
  // were encoded.
  rows: []
};
