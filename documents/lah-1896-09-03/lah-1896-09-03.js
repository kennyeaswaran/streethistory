// Los Angeles Herald, Sept. 3, 1896, p. 3: "STREET NAMES CHANGED / The Last Lot
// Rechristened by the City Council" — the fourteen changes made by Ordinance
// No. 3829 (New Series), adopted three days earlier
// (documents/min-1896-08-31).
//
// THE FIRST QUALIFIED RENAMINGS IN THE CORPUS. Every one of the fourteen names
// a stretch: "Tulip street, FROM WILLOW TO SEVENTH, be changed to Santa Fe
// avenue". Until now every renaming instrument here has been unqualified —
// 1874, 1887, 1893 and 1897 all rename the street-as-named and state no extent
// (handbook/change-rows-amendment.md §2). This document is the exception the
// amendment was written for, and the reason `scope: "extent"` exists.
//
// ⚠ TWO ROWS OUT OF FOURTEEN, and the other twelve are parked deliberately.
// Nine of them are on ground outside this project's OSM extract (the 35th-38th
// Street block west of Figueroa, Jefferson/Vermont in what the paper still
// calls West Los Angeles, McConnell/Griffin in Lincoln Heights). Three more are
// on ground we have but name a cross street we do not: "Short" and "Orange" are
// in none of the geometry, so those extents cannot be resolved and a row would
// have to be `extent-unresolved`, which draws nothing anyway. ("Mesquite" was a
// fourth until Kenny read it as a typo for MESQUIT, which exists and crosses
// the right street — so that one now carries a row.)
// Every one of the fourteen is quoted below, so the work is a transcription
// away when the ground is encoded.
//
// ★ IT CORRECTS A PUBLIC CLAIM IN names.js. The `tulip` entity said Tulip
// Street "lasted a matter of months: the Atchison, Topeka and Santa Fe reached
// Los Angeles in May 1887 and the street took the railway's name." Wrong by
// nine years. Kines dates SANTA FE AVENUE's own naming to May 1887, at the
// depot by 1st Street — but Tulip Street survived until Aug. 31, 1896, when
// this ordinance extended the railway's name south over it from Willow to
// Seventh. The entity's note is corrected and says which document says so.
//
// ★ AND IT CLOSES THE MOLINO LEAD. "Mateo, or Shafer, street, from Palmetto to
// Short, be changed to Molino street" — handbook/research-leads.md has carried
// "Molino Street tract lookup — blocked by modern redevelopment" since 2026-07,
// on the grounds that NavigateLA shows only one modern parcel and the street
// could not be dated. It can now: the name arrives on Aug. 31, 1896, and what
// it replaced was Mateo (or Shafer) Street.
//
// COMPLETENESS: `incidental`, NOT exhaustive, and the 1874 lesson is why. The
// Herald reported the Feb. 1874 ordinance as one renaming when the instrument
// made three (documents/ord-1874-02-26). This article reads like a complete
// list and may well be one, but a newspaper's account of an instrument is a
// lead about its contents, never a census of them. Book 11 p. 460 settles it.
//
// The closing sentence is worth as much as the list: "Another ordinance is in
// course of preparation making numerous changes, which will come up in a few
// days." That is the run-up to the citywide Ordinance No. 4093 of Feb. 1897
// (documents/ord-4093) — the 1896-97 renaming came in waves, and this one is
// explicitly not the last.
//
// PROVENANCE. Two clippings supplied by Kenny, 2026-09-06, from CDNC —
// LAH18960903.1.3, crops 1580,4497,658,1690 (the article) and 2249,350,639,99
// (its last two lines, which run over to the next column). Both beside this
// file. Transcribed by Claude from the clips; the print is clean. Two readings
// are the paper's own oddities and are kept as printed: the stray parenthesis
// in "Bellevue avenue or street)," and "Thirty-sixth street" appearing as the
// new name of two different streets.

module.exports = {
  id: "lah-1896-09-03",
  title: "Los Angeles Herald, “Street Names Changed — The Last Lot Rechristened by the City Council,” Sept. 3, 1896 (the fourteen changes made by Ordinance No. 3829, adopted Aug. 31)",
  shortTitle: "the Aug. 1896 renamings (Herald list)",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18960903.1.3",
  scan: "documents/lah-1896-09-03/lah-1896-09-03-clip.jpg",
  transcription: null,

  // The changes were made at the meeting of Aug. 31; the paper is Sept. 3.
  // §4: `date` is when the content was made, `recorded` the artifact in hand.
  date: { on: "1896-08-31" },
  recorded: "1896-09-03",
  form: "textual",
  type: "news-report",
  attests: "built-by",
  completeness: "incidental",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  // The article is read end to end, but thirteen of its fourteen changes are
  // quoted without rows, so NO negative inference is available here.
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "lede",
      text: "Hardly a day passes but what some indignant citizen calls at the city " +
            "engineer's office to enter a protest against the changing of the name of the " +
            "street on which he lives, or to kick against the new name selected by the " +
            "council. Frequently people call on other business and discover, to their " +
            "surprise, that the street name has been changed without their knowledge, and " +
            "then there is another kick. At the last meeting an ordinance was passed making " +
            "the following changes in street names:",
      note: "“At the last meeting” — Aug. 31, 1896, documents/min-1896-08-31. Worth keeping " +
            "for what it says about how the 1896-97 renamings were experienced: people " +
            "found out that their street had been renamed by accident." },

    { id: "mcconnell-darwin",
      text: "McConnell street, from Griffin avenue to Thomas street, be changed to Darwin " +
            "avenue." },
    { id: "tulip-santa-fe",
      text: "Tulip street, from Willow to Seventh, be changed to Santa Fe avenue.",
      note: "The one change on ground this project has, with both crosses in the geometry. " +
            "It carries the row below." },
    { id: "cincinnati-jessie",
      text: "Cincinnati street, from Mateo to Mesquite, in the Wingerter tract, be changed " +
            "to Jessie street.",
      note: "Modern Jesse Street is in the Arts District and is spelled without the i. " +
            "“Mesquite” is a typo for MESQUIT (Kenny, 2026-09-06), which is a street here " +
            "and still is: Jesse Street crosses both Mateo Street and Mesquit Street at " +
            "0 m, so the extent resolves and this change carries a row." },
    { id: "mateo-molino",
      text: "Mateo, or Shafer, street, from Palmetto to Short, be changed to Molino street.",
      note: "This closes the Molino lead in handbook/research-leads.md. Palmetto Street " +
            "crosses Molino Street in the modern geometry at 0 m; “Short” does not exist " +
            "there, so the south end is unresolved and no row is entered. Note also that " +
            "the street had two names at once — Mateo OR Shafer." },
    { id: "south-western",
      text: "South street, from Sixth to Acacia, be changed to Western avenue." },
    { id: "bellevue-little",
      text: "Bellevue avenue or street), from Orange street to Seventh, be changed to Little " +
            "street.",
      note: "The stray parenthesis is the paper's. Both Bellevue Avenue and Little Street " +
            "exist in the modern geometry, but Little Street meets 7th Street a long way " +
            "west of Bellevue Avenue's line, so which stretch this is needs settling before " +
            "any row." },
    { id: "campus-thirtyfifth",
      text: "Campus street, from Figueroa street to the West Charter boundary, be changed to " +
            "Thirty-fifth street." },
    { id: "olin-jefferson",
      text: "Olin, or Jefferson, street, from Jefferson street in West Los Angeles to " +
            "Vermont avenue, shall hereafter be known as Jefferson street.",
      note: "Another street with two names at once, resolved in favour of the one it " +
            "already shared with its neighbour." },
    { id: "childs-vermont",
      text: "Childs street (or Vermont avenue), from Jefferson street to the south boundary, " +
            "be known as Vermont avenue.",
      note: "The Childs of documents/mr006-378, presumably — Ozro W. Childs's land ran " +
            "south and west of downtown. Not established here." },
    { id: "asbury-thirtysixth",
      text: "Asbury street, from the West Charter boundary to the present west boundary, be " +
            "changed to Thirty-sixth street." },
    { id: "haven-thirtysixth",
      text: "Haven street, from Hough avenue to Vermont avenue, be changed to Thirty-sixth " +
            "street.",
      note: "The second street in this list to be made Thirty-sixth Street — the numbered " +
            "grid absorbing two different names on one line." },
    { id: "hellman-athena",
      text: "Hellman street, from the West Charter boundary to Kansas street, be changed to " +
            "Athena street." },
    { id: "simpson-thirtyseventh",
      text: "Simpson street, from the West Charter boundary to the present west boundary, be " +
            "changed to Thirty-seventh street." },
    { id: "janes-thirtyeighth",
      text: "Janes street, from the West Charter boundary to the present west boundary, be " +
            "changed to Thirty-eighth street." },

    { id: "another-ordinance-coming",
      text: "Another ordinance is in course of preparation making numerous changes, which " +
            "will come up in a few days.",
      note: "The last two lines of the item, carried over to the next column and supplied " +
            "as a second clip. This is the run-up to Ordinance No. 4093 of Feb. 1897." }
  ],

  rows: [
    // The only one of the fourteen that both lands on ground this project has
    // and names two cross streets the geometry can resolve. Santa Fe Avenue
    // crosses Willow Street and 7th Street at 0 m in the OSM extract.
    //
    // `scope: "extent"` because the document itself qualifies the change —
    // this is not our inference, it is the ordinance's own wording as the
    // Herald prints it (amendment §3).
    { kind: "change", from: "tulip", to: "santa-fe-ave",
      scope: "extent",
      street: "Santa Fe Avenue", fromCross: "Willow Street", toCross: "7th Street",
      says: ["tulip-santa-fe", "lede"],
      mechanism: "renaming",
      confirmed: false,
      note: "Dated Aug. 31, 1896 by the ordinance the article reports. NB Santa Fe Avenue " +
            "already existed under that name further north — Kines dates its own naming to " +
            "May 1887 at the depot by 1st Street — so this is the name being EXTENDED south " +
            "over Tulip's ground, not coined here." },

    // The second resolvable one, and it took a typo to see it: the paper prints
    // "Mesquite" and the street is MESQUIT. Jesse Street crosses Mateo Street
    // and Mesquit Street at 0 m apiece, so the stretch the ordinance names is
    // exactly the modern block.
    { kind: "change", from: "cincinnati", to: "jesse",
      scope: "extent",
      street: "Jesse Street", fromCross: "Mateo Street", toCross: "Mesquit Street",
      says: ["cincinnati-jessie", "lede"],
      mechanism: "renaming",
      confirmed: false,
      note: "The ordinance spells the new name “Jessie”; the modern street is Jesse, and " +
            "the entity holds both forms. “In the Wingerter tract” is all the document " +
            "says about where the old name came from, and that tract is not in this corpus." }
  ]
};
