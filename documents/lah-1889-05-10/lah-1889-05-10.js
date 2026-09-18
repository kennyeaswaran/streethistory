// ★★★ THE 1889 OMNIBUS, IN FULL — 212 changes across six columns, and the single
// largest untranscribed thing in this corpus.
//
// WHAT IT IS. The predecessor of Ordinance No. 4093 of Feb. 1897, and unlike 4093
// its text is not missing. Its title states the principle: streets "WHICH, WHILE
// FORMING ONE PRACTICALLY CONTINUOUS STREET, HAVE DIFFERENT NAMES." Every entry
// has the same shape and every one is QUALIFIED — "That the name of the street
// heretofore known as X, extending from A to B, be changed to Y" — so this is the
// other great source of `scope: "extent"` rows, alongside Ord. 3829 of 1896.
//
// HOW IT GOT HERE (six documents, four months): the special committee's ~300-item
// list, Oct. 1888 (documents/lah-1888-10-11); adopted Feb. 5, 1889
// (lah-1889-02-06); vetoed by Mayor Bryson Feb. 18 (lah-1889-02-19); the adopting
// vote reconsidered and re-referred Feb. 25 (lah-1889-02-26); re-adopted with 212
// changes Apr. 22 (lah-1889-04-23); approved by Mayor Hazard May 8; published, and
// therefore in force, May 10.
//
// ★ IT SETTLES THE GEORGIA BELL DATE. Gen. Forman testified in 1897 that the
// street was renamed Georgia Bell on May 10, 1889 — which is exactly the day this
// ordinance took effect. `georgia-bell`'s spelling periods stand.
//
// ★ TRANSCRIBED 2026-09-18 by an instance, from the clip beside this file read in
// 28 full-resolution tiles (four columns of the ordinance, not six — the rest of
// the crop is neighbouring matter). 207 clauses, excerpts c001–c207 in document
// order; several clauses carry two or three changes, which is how the Herald's
// "212 changes" is reached. Spelling, punctuation and slips are the paper's
// ("side side", "Figuroa", "parrellel", "Consualo", "Kinney street for any future
// extension"). ⚠ NOT YET CHECKED AGAINST THE CLIP BY A HUMAN (rule 5); the least
// certain readings are marked nowhere because none was doubtful at full size, but
// proper names in small type deserve a second look — Toppan, Martz, Sentous,
// Roche, Michael Torreno, Magenta, Barranca.
//
// ⚠ NOT EVERY CLAUSE IS QUALIFIED, whatever the formula suggests. Many describe
// the WHOLE street they rename ("in lot 5, block 38, Hancock's survey"; "located in
// the Colina Park tract") — the tract or lot identifies WHICH street, it does not
// pick out a stretch of it. Where the entity is exactly that street and nothing
// else, the row is `whole-name`; where the entity carries other ground (stanford-
// ave, william, sainsevain-street) or the clause names cross streets, it is
// `extent`. Every row's comment says which reading it took.
//
// ⚠ 1889 NAMES ARE NOT MODERN NAMES. "Figueroa" in these clauses is the original
// Figueroa (`figueroa-gov`, modern Boylston); modern Figueroa was still Pearl.
// "Ward" is modern 6th west of Figueroa, "Seminary" modern Miramar, "Rouland"
// modern Venice, "Diamond" modern 1st/Beverly, "Union avenue" (Colina Park) modern
// Burlington. Every extent below was resolved with that in mind.
//
// Provisions the model has no place for, recorded here: names "reserved for any
// future extension" (c008, c021, c026, c028, c033, c035, c051, c053, c055, c064,
// c066, c071, c073, c076, c077, c078, c082, c083), and suffix regularisations
// (Avenue → Street) that change no name.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06, from CDNC — the full
// six-column article, LAH18890510.1.7, crop 1582,265,2930,6294. Beside this file.
// Header and certification transcribed by an instance at full resolution; the
// body was read at column scale only then; transcribed in full 2026-09-18 (above).

module.exports = {
  id: "lah-1889-05-10",
  title: "Ordinance No. 48 (New Series), “An ordinance changing the names of certain streets and avenues in the city of Los Angeles, which, while forming one practically continuous street, have different names” — adopted Apr. 22, 1889, approved May 8, published (and in force) May 10, 1889",
  shortTitle: "Ord. 48, the 1889 omnibus (212 changes)",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18890510.1.7",
  scan: "documents/lah-1889-05-10/lah-1889-05-10-clip.jpg",
  transcription: null,

  date: { on: "1889-04-22" },
  recorded: "1889-05-10",
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
      text: "AN ORDINANCE CHANGING THE NAMES OF CERTAIN STREETS AND AVENUES IN THE CITY OF LOS " +
            "ANGELES, WHICH, WHILE FORMING ONE PRACTICALLY CONTINUOUS STREET, HAVE DIFFERENT NAMES.",
      note: "The purpose in the instrument's own words. Compare the Feb. 1889 report, which described " +
            "it as an ordinance about names \"in duplicate\"; between February and April the stated " +
            "rationale changed." },

    { id: "enacting",
      text: "The Mayor and Council of the City of Los Angeles do ordain as follows;" },

    { id: "c001", text: "That the name of that certain street lying between and parallel to Twelfth and Pico streets, and extending from Sentous to Nevada streets, and heretofore known as Aztec avenue, shall be changed, and said street shall be known hereafter as Girard street" },

    { id: "c002", text: "That the name of the street extending from Eleventh to Pico streets, between and parallel to Union avenue and Sentous street, and heretofore known as Broadway, be changed to Vernon street." },

    { id: "c003", text: "That the name of Vernon avenue, running from Ward to Eleventh streets, between and parallel to Union avenue and Whittier street, be changed to Vernon street." },

    { id: "c004", text: "That the name of the street heretofore known as Auburn street, extending from Pico to Rouland streets, between Star and Albany streets, be changed to Vernon street." },

    { id: "c005", text: "That the name of the street heretofore known as Martz street, extending from Temple street to Diamond street, between lots 6 and 7, of block 27, Hancock's survey, be changed to Fanning street." },

    { id: "c006", text: "That the name of the street heretofore known as Orange avenue, extending from Grand avenue to Main street, and lying between Washington and Adams streets, be changed to Manhattan street." },

    { id: "c007", text: "That the name of the street commonly known as Walnut avenue, and extending from Main to San Pedro streets, and lying between Washington and Adams streets, be changed to Manhattan street." },

    { id: "c008", text: "That the name of the street heretofore known as Garey avenue or Garey street, extending from York to the south line of Stephenson's subdivision, and the street heretofore known as Garey street or avenue, extending from Adams to Brooklyn streets, both lying between Main and San Pedro streets, be changed to Trinity street, and that this name be reserved for any extensions of said streets, north or south, that may in the future be made." },

    { id: "c009", text: "That the name of the street heretofore known as Kinneloa avenue, extending from Pico to Kinneloa streets, and the name of Kinneloa street from Kinneloa avenue, to Rouland street, both lying in lot 3 of block \"B,\" Hancock's survey, be changed to Union avenue." },

    { id: "c010", text: "That the name of the street heretofore known as Hayward street, extending from Rouland street to the west city line, in block \"B\" and block 17, of Hancock's survey, be changed to Union avenue." },

    { id: "c011", text: "That the name of the street heretofore known as Gaylord avenue, extending from Seventh street northward through the Auburn Lake tract, be changed to Baronne street." },

    { id: "c012", text: "That the name of the street heretofore known as Center street, extending from Ward street northerly on the west boundary of the Knob Hill tract, be changed to Baronne street." },

    { id: "c013", text: "That the name of the street heretofore known as Canal street, extending from its junction with Figueroa street northerly to Beaudry avenue, of which it is a continuation, be changed to Beaudry avenue, and that the name of that branch of Beaudry avenue leaving Beaudry avenue at the Sisters' Hospital, passing round the west side and reuniting with Beaudry avenue on the north side side of said hospital, be changed to West Beaudry avenue." },

    { id: "c014", text: "That the name of the 46-foot street in the Koster tract, East Los Angeles, extending from Daly street to Barranca street, and heretofore known as Koster avenue, be changed to Koster street." },

    { id: "c015", text: "That the name of the street heretofore known as Nichols avenue, extending through lots 2 and 7, of block 38, of Hancock's survey, be changed to Witmer street." },

    { id: "c016", text: "That the name of the street heretofore known as Logan avenue, extending from Ward to Seventh streets, through lot 2, block 37, of Hancock's survey, be changed to Witmer street." },

    { id: "c017", text: "That the name of the street heretofore known as Sainsevain street, extending from Alameda street to the Los Angeles river, south of Aliso street, be changed to Commercial street." },

    { id: "c018", text: "That the name of the street heretofore known as Union avenue, extending from Ward to Diamond streets, along east line of lots 4 and 5, of block 38, Hancock's survey, be changed to Yarnell street." },

    { id: "c019", text: "That the name of the streets heretofore known as Seminary street and College Hill avenue, extending west from Figueroa to Columbia avenue through lots 1 and 2, block 38, Hancock's survey, be changed to Third street, of which they form a continuation." },

    { id: "c020", text: "That the name of the portion of the street heretofore known as Diamond street, extending from the west city line to Lake Shore avenue, and the name of a portion of the street commonly known as Lake Shore avenue, extending from Diamond to Second streets, and the name of the street heretofore known as Stevenson avenue, extending from Second street to the east city boundary, be changed to Second street." },

    { id: "c021", text: "That the name of the street heretofore known as Carlisle street, extending south from Pine to Walnut avenue, and being the first street east of Main street, be changed to Los Angeles street, and that the name Los Angeles street be reserved for any future extension of this street southward or northward." },

    { id: "c022", text: "That the name of the street heretofore known as Earl street, extending from Fifth street south to Ninth street, lying between Wall and San Pedro streets, be changed to San Julian street." },

    { id: "c023", text: "That the name of the street commonly known as San Julian avenue, extending from Ninth to Pico streets, west of San Pedro, be changed to San Julian street." },

    { id: "c024", text: "That the name of the street in extension of said Maple avenue, from Washington street to the south city boundary, and lying between Main and San Pedro streets, and commonly known as Los Angeles street, be changed to Maple avenue." },

    { id: "c025", text: "That the name of the street heretofore known as Ventura street, extending east and west through block 37, Hancock's survey, and lying between Orange and Seventh streets, be changed to Ingraham street." },

    { id: "c026", text: "That the name of the street heretofore known as Vesta street, extending from Main to Los Angeles street, between Walnut and Adams street, be changed to Kinney street for any future extension of this street eastward." },

    { id: "c027", text: "That the name of the street heretofore known as Jenkins avenue, extending from Grand avenue to Main street, north of Adams, be changed to Jenkins street." },

    { id: "c028", text: "That the name of the street heretofore known as Clio avenue, extending from Main to Los Angeles street, north of Adams, be changed to Jenkins street, and that the name Jenkins street be reserved for any future extension of this street eastward." },

    { id: "c029", text: "That the name of the street heretofore known as Gordon street, extending from Rouland street to Pico street, be changed to Iowa street." },

    { id: "c030", text: "That the name of the street heretofore known as Fuller street, situated in block 1, Hancock's survey, and extending from Walnut street one block north, be changed to Glowner street." },

    { id: "c031", text: "That the name of the street heretofore known as Catherine street, in the southwestern part of the city in block 2, Hancock's survey, and extending from Main to Los Angeles street, be changed to Seville street." },

    { id: "c032", text: "That the name of the street heretofore known as Dunsmoor avenue, in Boyle Heights, extending from Pacific street to Britannia avenue, be changed to Bailey street." },

    { id: "c033", text: "That the name of the street heretofore known as Albert street, in East Los Angeles, in the Park tract, be changed to Baldwin street, and that the name Baldwin street be reserved for any connecting street that may hereafter be opened up between the present Albert street and Baldwin street." },

    { id: "c034", text: "That the name of the street heretofore known as Cumberland avenue or street, in Boyle Heights, west of Soto street and extending from Charlotte street south two blocks, be changed to Boston street." },

    { id: "c035", text: "That the name of the street heretofore known as Laura street, in Boyle Heights, extending two blocks north from Brooklyn avenue, in lot 6, block 61, Hancock's survey, be changed to Boston street, and that the name Boston street be reserved for any streets that may hereafter be opened connecting said Cumberland avenue, Boston street and Laura street, or in extension of them north or south." },

    { id: "c036", text: "That the name of Court street, as given to the short thoroughfare between Main and Spring streets, adjoining the old Courthouse, be changed to Centinela street." },

    { id: "c037", text: "That the name of the street heretofore known as Atchison street, extending from Alameda to the west line of the Bigelow tract, and lying next south of Davies street, be changed to Georgia street." },

    { id: "c038", text: "That the name of the street heretofore known as Nevada street, extending from Rouland to Eleventh streets, in lot 1, block B, Hancock's survey, be changed to Georgia Bell street." },

    { id: "c039", text: "That the name of the street heretofore known as Bennett street, extending from Eleventh to Tenth street in lot 1, block 36. Hancock's survey, be changed to Georgia Bell street." },

    { id: "c040", text: "That the name of the street heretofore known as Nevada street, extending from Tenth to Ninth streets in lot 1, block 36, Hancock's survey, be changed to Georgia Bell street." },

    { id: "c041", text: "That the name of the street heretofore known as New Cincinnati street, extending from or near Court street to Bellevue avenue and, lying in lot 1, block 39, Hancock's survey, be changed to Edgeware road." },

    { id: "c042", text: "That the name of the street heretofore known as Central avenue, extending from Ninth to Ward streets, through lots 4 and 5, block 37 Hancock's survey, be changed to Bonnie Brae street." },

    { id: "c043", text: "That the name of the street heretofore known as Sunset avenue, extending from Ward street to Ocean View avenue and Merril street, from Ocean View avenue to Diamond street, through lots 4 and 5, block 38, Hancock's survey, be changed to Bonnie Brae street." },

    { id: "c044", text: "That the name of the street heretofore known as Booth street, extending from Diamond to Temple streets, through lots 4 and 5, block 39, Hancock's survey, be changed to Bonnie Brae street." },

    { id: "c045", text: "That the name of the street heretofore known as Toppan avenue, extending from Temple to Bellevue avenue through lot 4, block 39, Hancock's survey, be changed to Bonnie Brae street," },

    { id: "c046", text: "That the name of the street heretofore known as Cole street, extending from Bellevue avenue to Kent street, and lying in lot 5. block 40, Hancock's survey, be changed to Bonnie Brae street." },

    { id: "c047", text: "That the name of the street heretofore known as Pacific street, extending from Brooklyn avenue to State street, through the Brooklyn tract, Boyle Heights, be changed to Bridge street." },

    { id: "c048", text: "That the name of the street heretofore known as Clara Bell street, extending from Union avenue to Belmont avenue, through lot 6, block 39, Hancock's survey, be changed to Council street." },

    { id: "c049", text: "That the name of the street heretofore known as Hoff street in East Los Angeles, extending from the Los Angeles river to Daly street, be changed to Pasadena avenue, and that the name of that portion of the street heretofore known as Daly street, lying north of its intersection with Hoff street, be changed to Pasadena avenue." },

    { id: "c050", text: "That the name of the street heretofore known as Bush street, in the extreme southwestern part of the city, extending from Grand avenue to Main street, through lot 6, block 2, Hancock's survey be changed to Goodman street" },

    { id: "c051", text: "That the name of the street heretofore known as Cellis street, in the southwestern part of the city, extending from Main street to Maple avenue, through the De Celis vineyard tract, be changed to Morris street, and that the name Morris street be reserved for any future extensions of this street eastward." },

    { id: "c052", text: "That the name of the street heretofore known as Reservoir street, Centennial avenue or street and Ocean View avenue or street, located in the Park track, and extending from north Court to Virgin street or avenue, be changed to Centennial street." },

    { id: "c053", text: "That the name of the street heretofore known as Northumberland street in Boyle Heights, and extending from the prolongation of Wabash avenue northward to Charlotte street, be changed to Cornwell street, and that the name Cornwell street be reserved for any future extension of this street north or south." },

    { id: "c054", text: "That the name of the street known as Cornwell avenue, and shown on some maps as Cornwal street, located in Boyle Heights in block 61, Hancock's survey, and extending from Brooklyn to the prolongation of the south line of Wabash avenue, be hereafter known as Cornwell street." },

    { id: "c055", text: "That the name of the street heretofore known as Conant street in Boyle Heights, located in lot 5, block 73, Hancock's survey, and extending from Louisiana avenue to First street, be changed to Matthews street, and that the name of Matthews street be reserved for any future extension of this street either north or south." },

    { id: "c056", text: "That the name of the street heretofore known as Consualo street, extending from Main street to Maple avenue south of and nearly parallel to East Pico street, be changed to California street." },

    { id: "c057", text: "That the name of the street heretofore known as Lottie street in Boyle Heights, east of and parallel to Soto street, extending from Willie street to First street, be changed to Mott street." },

    { id: "c058", text: "That the name of the street heretofore known as Elm street, extending southward from Pico street and nearly in the prolongation of Olive street, be changed to Olive street." },

    { id: "c059", text: "That the name of the street heretofore known as Hancock avenue in Boyle Heights, extending from Cornwell avenue to Soto street in Charnock's subdivision, be changed to Folsom street." },

    { id: "c060", text: "That the name of the street heretofore known as Montague avenue in the southwestern part of the city, extending from San Pedro to Main street, south of Adams street, be changed to Montague street." },

    { id: "c061", text: "That the name of the street heretofore known as Judson street in the southwestern part of the city, extending from Grand avenue to Figueroa, in lot 4, block 2, Hancock's survey, be changed to Friend street." },

    { id: "c062", text: "That the name of the street heretofore known as Fudickar or Fudigar street in the western part of the city, extending from Diamond street, north through the Cable Road tract to Temple street, be changed to King street." },

    { id: "c063", text: "That the name of the street heretofore known as Gardner avenue in the Orange Slope tract, extending from Magnolia avenue south, be changed to Brittania street." },

    { id: "c064", text: "That the name of the street heretofore known as Brittania avenue, in lot 5, block 61, Hancock's survey, be changed to Brittania street, and that the name of Brittania street be reserved for any future extension of this street north or south." },

    { id: "c065", text: "That the name of the street heretofore known as Vignes street in East Los Angeles, extending from Baldwin street north to Summit avenue, be changed to Gates street." },

    { id: "c066", text: "That the name of the street heretofore known as Jones street, in the southwestern part of the city, extending from Kinneloa street westward, be changed to Greenwell street, and that the name Greenwell street be reserved for any future extension of this street." },

    { id: "c067", text: "That the name of the street heretofore known as Topeka street, extending from near Garey street eastward to Santa Fe avenue, and lying north of and nearly parallel to First street, be changed to Davies street." },

    { id: "c068", text: "That the name of the street heretofore known as Franklin avenue, and also as Rodney street, located south of Adams street, and extending from San Pedro to Main street, be changed to Rodney street." },

    { id: "c069", text: "That the name of the street heretofore known as Huron avenue, lying south of Adams street, and extending from Main street to grand avenue, be changed to Huron street." },

    { id: "c070", text: "That the name of the street heretofore known as Weill street, extending from Amelia street to the Los Angeles river through the Aliso tract, be changed to Sepulveda street." },

    { id: "c071", text: "That the name of the street heretofore known as Walton street, in lot 4, block 39, Hancock's survey, be changed to William street; and that the name William street be reserved for any future extension of this street." },

    { id: "c072", text: "That the name of the street heretofore known as Hermosa street, or avenue, in the northwestern part of the city, extending from the west city line to Temple street, be changed to Robinson street." },

    { id: "c073", text: "That the name of the street heretofore known as Dillon avenue, in the western part of the city, extending from the west city boundary north to Temple street, be changed to Dillon street; and that the name Dillon street be reserved for any future extension of this street." },

    { id: "c074", text: "That the name of the street heretofore known as Vendome avenue, in the extreme western part of the city, extending from the west city line northerly to Temple street, be changed to Vendome street." },

    { id: "c075", text: "That the name of the street heretofore known as De Turk street, in the northwestern part of the city, extending south from the Los Angeles County Railroad, be changed to Vendome street." },

    { id: "c076", text: "That the name of the street heretofore known as Burdick street, in the extreme western part of the city, extending south from Reservoir street, be changed to Smith street; and that the name Smith street be reserved for any future extension of this street." },

    { id: "c077", text: "That the name of the street heretofore known as Marguerite avenue, in the northwestern part of the city, north of Bellevue avenue, extending from Fanning street to Alvarado street, be changed to Kent street; and that the name Kent street be reserved for any future extensions of this street." },

    { id: "c078", text: "That the name of the street heretofore known as Roche street, in the western part of the city, extending from Michael Torreno street easterly along the center line of block 28, Hancock's survey, be changed to Marathon street, and that the name of Marathon avenue, the extension of said Roche street, be changed to Marathon street; and that the name Marathon street be reserved for future extensions of this street" },

    { id: "c079", text: "That the name of the street heretofore known as Belgravia avenue, in the western part of the city, north of Bellevue avenue, extending from Magenta street to Alvarado street, be changed to Kane street." },

    { id: "c080", text: "That the name of the street heretofore known as Temperance street or avenue north of and parallel to Diamond street, and extending from Union avenue to Belmont avenue, and that the street heretofore known as Home street, extending from Belmont avenue to Lakeshore avenue, be changed to Rockwood street." },

    { id: "c081", text: "That the name of the street heretofore known as Shaw street, extending from Wall street to San Pedro, between Fourth and Fifth streets, be changed to Winston street." },

    { id: "c082", text: "That the name of the street heretofore known as West End avenue, extending from Manhattan avenue south to Adams street, be changed to Flower street, and that the name Flower street be reserved for future extensions of this street." },

    { id: "c083", text: "That the name of the street heretofore known as Madison avenue, extending from Manhattan avenue to Adams street, be changed to Hope street, and that the name Hope street be reserved for all future extensions of this street." },

    { id: "c084", text: "That the name of the street heretofore known as Montrose street, extending from the west city line south of Washington to Toberman street, be changed to York street." },

    { id: "c085", text: "That the name of the street heretofore known as Locust street, extending from Toberman street to Maple avenue, south of Washington street, be changed to York street." },

    { id: "c086", text: "That the name of the street heretofore known as Myrtle avenue, extending from Ninth nearly to East Pico street, west of and nearly parallel to San Pedro street, be changed to Prospect street." },

    { id: "c087", text: "That the name of the street heretofore known as Myrtle avenue, or street, extending south from East Pico street, between Maple avenue and San Pedro street, be changed to San Julian street." },

    { id: "c088", text: "That the name of the street heretofore known as Alabama street, in blocks 38 and 39, Hancock's survey, be changed to Kern street." },

    { id: "c089", text: "That the name of the street heretofore known as Alice street, located in the southwestern part of the city, block 22, Hancock's survey, be changed to Tulare street." },

    { id: "c090", text: "That the name of the street heretofore known as Aliso road, or Old Aliso road, extending from Aliso street, east of Alameda, northerly to Macy street, be changed to Church street." },

    { id: "c091", text: "That the name of the street heretofore known as Anderson street and Anderson avenue, east of the river, extending from below Fourth street northerly to Macy street, be hereafter known as Anderson street." },

    { id: "c092", text: "That the street heretofore known as Anita avenue and Anita street, in the southwestern part of the city, north of and parallel to Jefferson street, be hereafter known as Anita street." },

    { id: "c093", text: "That the name of the street heretofore known as Ash street, in Ling's addition, east of the river, extending from Mission road to Richmond avenue, be changed to Richmond street, and that the name of Richmond avenue, with which it unites, be changed to Richmond street." },

    { id: "c094", text: "That the name of the street heretofore known as Arlington street and Arlington avenue, extending from Hayward to Toberman streets, be hereafter known as Arlington street." },

    { id: "c095", text: "That the name of the street in East Los Angeles, extending through the Griffin-Hamilton tracts, and known as Arroyo street, and Arroyo Seco street, be changed to Humboldt street." },

    { id: "c096", text: "That the name of the street heretofore known as Aurora street, in lot 4, block 41, Hancock's survey, be changed to Grafton street." },

    { id: "c097", text: "That the name of the street heretofore known as Aurora street, in lot 2, block 71, Hancock's survey, be changed to Lee street." },

    { id: "c098", text: "That the name of the street heretofore known as Beacon avenue and Beacon street, in blocks 36 and 37, Hancock's survey, be hereafter known as West Beacon street." },

    { id: "c099", text: "That the name of the street heretofore known as Beacon street, in Boston Heights tract, block 76, Hancock's survey, be changed to East Beacon street." },

    { id: "c100", text: "That the name of the street heretofore known as Belmont avenue, extending from Pico to Eleventh streets, between Pearl and Nevada streets, be changed to Trenton street" },

    { id: "c101", text: "That the name of the street heretofore known as Benton avenue, in lot 2, block 25, Hancock's survey, be changed to Rampart street." },

    { id: "c102", text: "That the name of the street heretofore known as Bernhart street, in lot 8, block 28, Hancock's survey, be changed to Santa Cruz street." },

    { id: "c103", text: "That the name of the street heretofore known as Birch street, between blocks 18 and 19, Highland View tract, be changed to Beech street." },

    { id: "c104", text: "That the name of the street heretofore known as Bryant street; in lot 7, block 37, Hancock's survey, be changed to Stewart street." },

    { id: "c105", text: "That the name of the street heretofore known as Cambridge avenue, between Washington and Pico streets and Western and Gertrude avenues, be changed to Yolo street." },

    { id: "c106", text: "That the name of the street heretofore known as Central avenue, in Boyle Heights, Brooklyn tract, extending from Pacific to State street, be changed to Tehama street." },

    { id: "c107", text: "That the name of the street heretofore known and recorded as Constance avenue and Constance street, in block B, Hancock's survey, be hereafter known as Constance street." },

    { id: "c108", text: "That the name of the street heretofore known as Cooper street, in the northern part of the city, Bennington tract, be changed to Merced street." },

    { id: "c109", text: "That the name of the street heretofore known as Cummings avenue, in Angeleño Heights tract, north of and parallel to Temple, extending from Bellevue avenue to Figueroa street, be changed to Ionia street." },

    { id: "c110", text: "That the name of the street heretofore known as Cedar street, in the Alexandre Weill tract, extending from Eighth to Twelfth streets, be changed to Hemlock street." },

    { id: "c111", text: "That the name of the street heretofore known as Denver avenue, at the western boundary of the city, in the Reeve tract, be changed to Larimer street." },

    { id: "c112", text: "That the name of the street heretofore known as Dorchester avenue, south of Pico street, and lying in Washington street and Pico Street Heights tract, be changed to Worcester street." },

    { id: "c113", text: "That the name of the street heretofore known as Downey street, south of Jefferson street and extending from Figueroa to the west city boundary, be changed to Campus street." },

    { id: "c114", text: "That the name of the street heretofore known as Eddie street, in the Ela Hills tract, extending from Pritchard street to Ella avenue, be changed to Inyo street" },

    { id: "c115", text: "That the name of the street heretofore known as Edward street, in block 72, Hancock's survey, Miller's subdivision, be changed to Fresno street." },

    { id: "c116", text: "That the name of the street heretofore known as Edwards street, in Hunter Highland View tract, extending from Highland View street to Prospect avenue, be changed to Del Norte street." },

    { id: "c117", text: "That the name of the street heretofore known as Ela avenue, in Ela Hills tract, be changed to Sierra street." },

    { id: "c118", text: "That the name of the street heretofore known as Emma street, between Fourth and Fifth streets, extending from Figueroa to Beaudry streets, and further south from Beaudry to Pearl street, be changed to Dolly street." },

    { id: "c119", text: "That the name of the street heretofore known as Emmet avenue, in lot 3, block 36, Hancock's survey, Fitzgerald tract, be changed to Grattan street." },

    { id: "c120", text: "That the name of the street heretofore known as Echandia, and as Euchandia, street, in Boyle Heights, be hereafter known as Echandia street." },

    { id: "c121", text: "That the name of the street heretofore known as Etta street, in southeastern part of the city, in the Spence tract, be changed to Siskiyou street." },

    { id: "c122", text: "That the name of the street heretofore known and recorded as Euclid avenue and Euclid street, in the eastern part of the city, extending south from Louisiana avenue, be hereafter known as Euclid street." },

    { id: "c123", text: "That the name of the street heretofore known as Eureka avenue, in Highland View tract, extending northwesterly from Orange avenue, be hereafter known as Eureka street." },

    { id: "c124", text: "That the name of the street heretofore known as Eureka street, in lot 2, block 27, Hancock's survey, Shafer & Towne tract, be changed to Sonoma street." },

    { id: "c125", text: "That the name of the street heretofore known as Florida street, in the southwestern part of the city, lot 7, block 22, H. S., be changed to Key West street." },

    { id: "c126", text: "That the name of the street heretofore known as Gerard street, in the northwestern part of the city, Washington Heights tract, be changed to Stanislaus street." },

    { id: "c127", text: "That the name of the street heretofore known as Grace street, north of, and parallel to, Georgia street, and extending eastward from Rio avenue be changed to Mono street." },

    { id: "c128", text: "That the name of the street heretofore known as Grace street, in the western part of the city, in the Acme tract, extending northwesterly from Temple street, be changed to Napa street." },

    { id: "c129", text: "That the name of the street heretofore known as Grand avenue, in the northern part of the city, Highland View tract, to be changed to Amador street." },

    { id: "c130", text: "That the name of the street heretofore known as Grant avenue, in the eastern part of the city, in the Bird tract, extending from Soto to St. Louis street, be changed to Sheridan street." },

    { id: "c131", text: "That the name of the street heretofore known as Grant street, in the southeastern part of the city, in the Archibald tract, and extending from Santa Fe avenue to the river, be changed to McPherson street." },

    { id: "c132", text: "That the name of the street heretofore known as Grant street, in the western part of the city, in the Knob Hill tract, extending northeast from Ward street, be changed to Sherman street." },

    { id: "c133", text: "That the name of the street heretofore known as Hellman street, in the extreme southwest part of the city, extending northwest from Figueroa, be changed to Athena street." },

    { id: "c134", text: "That the name of the street heretofore known as Highland avenue, in the northwestern part of the city, in Robinson & De Turk's subdivision, be hereafter known as Highland street." },

    { id: "c135", text: "That the street variously known as Highland View avenue and as Highland View street, in the Hunter Highland View tract, be hereafter known as Isabel street." },

    { id: "c136", text: "That the name of the street heretofore known as Hill street, in the Bitle tract, be changed to Montecito street." },

    { id: "c137", text: "That the name of the street heretofore known as Howard avenue, in the southeastern part of the city, in lot 1, block 72, H. S., be changed to Lassen street." },

    { id: "c138", text: "That the name of the street heretofore known as Huber street, in the northeastern part of the city, in the Villa tract, be changed to Colusa street." },

    { id: "c139", text: "That the name of the street heretofore known as Huber street, in the central part of the city, in the Bliss tract, and extending east from Alameda to Third streets, be changed to Fourth street." },

    { id: "c140", text: "That the name of the street heretofore known as Henry street, in the Glassell tract, between the Patent and Charter boundaries, and extending east from Santa Fe street, be changed to Butte street." },

    { id: "c141", text: "That the name of the street heretofore known as Ida street, in the western part of the city, between Canal and Figuroa streets, in the Wollen Mill tract, be changed to Placer street." },

    { id: "c142", text: "That the name of the street heretofore known as Ida street, in the Botiller tract, and extending from Eighth to Ninth streets, be changed to Duplex street." },

    { id: "c143", text: "That the name of the street heretofore known as Johnston street, in Boyle Heights, block 60 Hancock's survey, and extending from Virginia to Brooklyn avenues, be changed to San Benito street, and that Spartan avenue be hereafter known as San Benito street." },

    { id: "c144", text: "That the name of the street heretofore known as Judson avenue, in the Brooklyn tract, Boyle Heights, extending from Prospect Park to State street, be hereafter known as Judson street." },

    { id: "c145", text: "That the name of the street heretofore known as Kent street, in the eastern part of the city, in Lacey's Orange Slope tract, extending from Charlotte street to Wood avenue, be changed to Norfolk street." },

    { id: "c146", text: "That the name of the street heretofore known as King street, in the northwest part of the city, in Bryan's subdivision, and extending northeast from Bellevue avenue, be changed to Sugg street." },

    { id: "c147", text: "That the name of the street heretofore known as Lafayette avenue, in the western part of the city, extending northeast from Ward to Seminary street, be changed to Bixel street." },

    { id: "c148", text: "That the name of the street heretofore known as Lake street, in the western part of the city, in the Knob Hill tract, west of and parallel to Alvarado street, be changed to San Joaquin street." },

    { id: "c149", text: "That the name of the street heretofore known as Magdalena street, and as Magdalena avenue, located in the Sabichi tract, be hereafter known as Magdalena street" },

    { id: "c150", text: "That the name of the street heretofore known as Magnolia avenue, located in the Kennebec tract, and extending northeast from Washington street, be changed to Eclipse street." },

    { id: "c151", text: "That the name of the street heretofore known as Maple street, situated in the Norton tract being lot 14 of the Highland View tract, be changed to Calaveras street." },

    { id: "c152", text: "That the name of the street heretofore known as Maple street. located in the Park Grove tract, south of Washington street, be changed to Balboa street." },

    { id: "c153", text: "That the name of the street heretofore known as Margaret avenue, located in the Ela Hills tract, north of and parallel to Patrick street, be hereafter known as Margaret street." },

    { id: "c154", text: "That the name of the street heretofore known as Montana avenue and Montana street, located in the Montana tract, east of Reservoir No. 4, be hereafter known as Montana street." },

    { id: "c155", text: "That the name of the street heretofore known as Margaret street, located in the eastern part of the city, in the Brooklyn tract, be changed to Yosemite street." },

    { id: "c156", text: "That the street heretofore known as Morgan lane and as Mayo street, situated in the central part of the city, east of Main street, be hereafter known as Third street." },

    { id: "c157", text: "That the name of the street heretofore known as New Jersey street and as New Jersey avenue, located in the eastern part of the city, and extending from Echandia street to Saint Louis street, be hereafter known as New Jersey street." },

    { id: "c158", text: "That the name of the street heretofore known as Northern avenue and as North avenue, and Arch street, located in the Colina Park tract, be hereafter known as Arnold street." },

    { id: "c159", text: "That the name of the street heretofore known as Oak street, located in the Norton tract, being lot 14 of the Hunter Highland View tract, be changed to Lotus street." },

    { id: "c160", text: "That the name of the street heretofore known as Ohio street, located in block 72 of Hancock's survey, be changed to Oregon street." },

    { id: "c161", text: "That the name of the street heretofore known as Orange avenue and Orange street, located in the Highland View tract, be changed to Idell street." },

    { id: "c162", text: "That the name of the street heretofore known as Pacific street, located in the southern part of the city, south of and parallel to Seventh street, extending east to the river from Lemon street, be changed to Violet street." },

    { id: "c163", text: "That the name of the street heretofore known as Palm street, located in the Goodwin and Wingerter tract, and extending south from Sixth street, be changed to Mimosa street." },

    { id: "c164", text: "That the name of the street heretofore known as Palm street, located in the Kerckhoff tract, in southwestern part of the city, be changed to Paloma street." },

    { id: "c165", text: "That the name of the street heretofore known as Park avenue, in lots 4 and 5, block 37, Hancock's survey, be changed to Providence street." },

    { id: "c166", text: "That the name of the street heretofore known as Park street, in lots 7 and 8, block 26, Hancock's survey, be changed to Dora street." },

    { id: "c167", text: "That the name of the street heretofore known as Park street, in the eastern part of the city, Orange Slope tract, be changed to St. Paul street." },

    { id: "c168", text: "That the name of the street heretofore known as Park Grove avenue, in the southwestern part of the city, in Park Grove tract, be changed to Park Grove street." },

    { id: "c169", text: "That the name of the street heretofore known as Park View avenue, in the western part of the city, in blocks 24 and 25, Hancock's survey, be changed to Parkview street." },

    { id: "c170", text: "That the name of the street heretofore known as Prospect avenue, in the Highland View tract, be changed to Myriam street." },

    { id: "c171", text: "That the name of the street heretofore known as Prospect Place, in the central part of the city, in Pavilion Subdivision, extending south from Sand street, be changed to Stockton street." },

    { id: "c172", text: "That the name of the street heretofore known as Prospect street, in the Norton tract, Hunter Highland View tract, be changed to Alturas street." },

    { id: "c173", text: "That the name of the street heretofore known as Rio avenue, in the eastern part of the city, extending from Shenandoa avenue southwest to a point below Fourth street, be changed to Rio street." },

    { id: "c174", text: "That the name of the street heretofore known as Ruby avenue, in lot 6, block 58, of Hancock's survey, be changed to Garnet street." },

    { id: "c175", text: "That the name of the street heretofore known as Rio street, located south of the central part of the city, in Second-street Addition tract, west of Santa Fe avenue, and extending southwestwardly from Second street to Third street, be changed to Merrick street." },

    { id: "c176", text: "That the name of the street heretofore known as Ruby street, in Sanborn tract, crossing in south city boundary, be changed to Coral street." },

    { id: "c177", text: "That the name of the street heretofore known as San Francisco street, south of Seventh street and lying between Alameda street and the Los Angeles river, be changed to Bay street." },

    { id: "c178", text: "That the name of the street heretofore known as East Second street, in the central part of the city, south of Second street, and extending east from San Pedro street, be changed to Azusa street." },

    { id: "c179", text: "That the name of the street in East Los Angeles heretofore known as Schieffelin avenue, between and parallel to Mozart and Hawkins streets, be changed to Vallejo street." },

    { id: "c180", text: "That the name of the street heretofore known as Seville avenue, in lot 5, block 2, Hancock's survey, be changed to Seville street." },

    { id: "c181", text: "That the name of the street heretofore known as Shaw avenue and as Austin street, in the southwestern part of the city, in the Montague & Shaw tracts, be changed to Shaw street." },

    { id: "c182", text: "That the name of the street heretofore known as Silver street, in lot 1, block 27, Hancock's survey, be changed to Oro street." },

    { id: "c183", text: "That the name of the street heretofore known as Smith avenue, in lot 8, block 72, Hancock's survey, be changed to Ezra street." },

    { id: "c184", text: "That the name of the street heretofore known as Smith street, in lot 5, block 27, Hancock's survey, be changed to Reno street." },

    { id: "c185", text: "That the name of the street heretofore known as Stanford avenue, in the central part of the city, in the Wolfskill Orchard tract, be changed to Crocker street." },

    { id: "c186", text: "That the name of the street heretofore known as State street, in block 39, Hancock's survey, extending from Belmont avenue and Figueroa street, be changed to Pink street." },

    { id: "c187", text: "That the name of the street heretofore known as Strelitz street, in lot 5, block 38, Hancock's survey, be changed to Maryland street." },

    { id: "c188", text: "That the name of the street heretofore known as Summit avenue, in East Los Angeles, Ela Park and Ela Hill tracts, to be changed to Minnesota street." },

    { id: "c189", text: "That Sunset avenue, in the northwestern part of the city, Angelina Heights tract, be changed to Helen street." },

    { id: "c190", text: "That the street called St. Louis avenue, in the eastern part of the city, forming the north boundary of lot 6, block 61, Hancock's survey, be changed to St. Louis street, of which it forms an extension." },

    { id: "c191", text: "That Thomas street, in the southwestern part of the city, in the University addition, be changed to Widney street." },

    { id: "c192", text: "That Victor avenue, in the western part of the city, east of Figueroa, extending northeast from Temple street to Bellevue avenue, be changed to Victor street." },

    { id: "c193", text: "That the name of the street heretofore known as Victor street, lot 2, block 36, Hancock survey, be changed to Connecticut street." },

    { id: "c194", text: "That the name of the street heretofore known as Virginia avenue, in Boyle Heights, extending from Boyle avenue south of Aliso avenue extension, southeasterly between Aliso and New York avenues, through Corcoran tract, be changed to Virginia street." },

    { id: "c195", text: "That the name of the street heretofore known as Virginia avenue, in the extreme southeastern part of the city, in lot 5, of block \"F,\" of H. S., north of and parrellel to Louisiana avenue, extending southeast from Lorena street, be changed to Lion street." },

    { id: "c196", text: "That the name of the street heretofore known as Virginia street, in southwestern part of the city, in lot 1, of block \"B,\" H. S., southwest of and parallel to Figueroa street and Nevada, extending southwest from Pico street to Rouland street, be changed to De Long street." },

    { id: "c197", text: "That the name of the street heretofore known as Virginia street, in the western part of the city, on east side of Second Street Park, extending from Diamond street northeast to Court street, be changed to Toluca street." },

    { id: "c198", text: "That the name of the street heretofore known as Wabash avenue, in Ruiz tract, on northwest side of Mission Road, extending northwesterly from Mission road, be changed to Orizaba street." },

    { id: "c199", text: "That the name of the street heretofore known as Warren street, in eastern part of the city, in Ling's Addition, between Mission road and Mission street, extending northwest from Mission road, be changed to Putman street." },

    { id: "c200", text: "That the name of the street heretofore known as Warren street, in southern part of the city, in southeast angle between Seventh and Alameda streets in E. B. Millar and Weiss tract, extending from Seventh street east, parallel to Alameda street to the south, and Ninth to Tenth streets, be changed to Decatur street." },

    { id: "c201", text: "That the name of the street heretofore known as William street, in the extreme northern part of the City Highland View tract, is northeast of and parallel to Highland View avenue in its northern part, extending northwest, and is connected by John street to Highland View avenue, be changed to Flossie street." },

    { id: "c202", text: "That the name of the street heretofore known as William street, in western part of the city, in lot 1, block 37, of Hancock's survey, extending northeast from Seventh to Ingraham street, be changed to Farragut street." },

    { id: "c203", text: "That the name of the street known as Friend avenue, extending from Main street to Grand avenue, be changed to Friend street." },

    { id: "c204", text: "That the name of the street heretofore known as William street, in western part of the city, in blocks 38 and 39 of H. S., east of and parallel to Alvarado street, extending northeast from Ocean View avenue to Temple street, be changed to Quebec street." },

    { id: "c205", text: "That the name of the street heretofore known as Wilson avenue, in the southeastern part of the city, west part of lot 1 of block 72, of H. S., in Mountain View tract, east of and parallel to Smith avenue, extending northeast from Willie street to Louisiana avenue, be changed to Concord street." },

    { id: "c206", text: "That the name of the street heretofore known as Wilson street, in extreme southern part of city, in Long & Stedman tract, south of Tenth street and east of Alameda street, be changed to Hartford street." },

    { id: "c207", text: "That the name of the street heretofore known as Yale street, in northwestern part of city, in lot 8 of block 27, of H. S., in Yale and Harvard tract, extending northwest from Alvarado street, be changed to Dartmouth street" },

    { id: "publication", text: "The City Clerk shall certify to the passage of this ordinance, and cause the same to be published once in the DAILY HERALD, and thereupon and thereafter it shall take effect and be in force." },

    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the Council of the City of " +
            "Los Angeles at its meeting of April 22, 1889. FREEMAN G. TEED, City Clerk. Approved this " +
            "8th day of May, 1889. HENRY T. HAZARD, Mayor.",
      note: "Published May 10, 1889, and in force from that publication under its own terms — which " +
            "is the date Gen. Forman gives for the Georgia Bell renaming." }
  ],

  // Change rows: one per (from, to) pair whose `from` entity exists. Audit
  // 2026-09-18, second pass (handbook/change-rows-audit-2026-09-18.md). Every one
  // confirmed: false.
  rows: [
    // c013 — The clause describes the whole of Canal Street (“from its junction
    // with Figueroa street northerly to Beaudry avenue, of which it is a
    // continuation”), and `canal-street-beaudry` is that street and nothing else
    // (one row, mr016-059). Read as unqualified. NB the 1889 “Figueroa” is
    // `figueroa-gov`.
    { kind: "change", from: "canal-street-beaudry", to: "beaudry-avenue",
      scope: "whole-name",
      says: ["c013", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c015 — “Through lots 2 and 7, of block 38” identifies the street; it names
    // no stretch of it. `nichols-ave` is only that street. ⚠ mr037-078 (recorded
    // Oct. 18, 1889) still letters Nichols Ave five months after this — a sheet
    // surveyed before the ordinance, or the old name in use; expect a revival
    // flag.
    { kind: "change", from: "nichols-ave", to: "witmer-street",
      scope: "whole-name",
      says: ["c015", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c016 — Ward Street is modern 6th Street here (`ward-st`'s rows on Orange
    // Heights and Colina Park); Witmer meets 6th and 7th at 0 m.
    { kind: "change", from: "logan-ave", to: "witmer-street",
      scope: "extent",
      street: "Witmer Street", fromCross: "6th Street", toCross: "7th Street",
      wording: "That the name of the street heretofore known as Logan avenue, extending from Ward to Seventh streets, through lot 2, block 37, of Hancock's survey, be changed to Witmer street.",
      says: ["c016", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c017 — “From Alameda street to the Los Angeles river”: Commercial × Alameda
    // 0 m; the river end is past the extract, so `toCross: null` is the street's
    // east end. `sainsevain-street` also has a row on modern DUCOMMUN Street,
    // which this extent deliberately does not touch.
    { kind: "change", from: "sainsevain-street", to: "commercial-street",
      scope: "extent",
      street: "Commercial Street", fromCross: "Alameda Street", toCross: null,
      wording: "That the name of the street heretofore known as Sainsevain street, extending from Alameda street to the Los Angeles river, south of Aliso street, be changed to Commercial street.",
      says: ["c017", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c019 — ★ RULE 2: “from Figueroa to Columbia avenue” — the 1889 Figueroa is
    // `figueroa-gov`, modern BOYLSTON, which meets Miramar at 0 m; modern Figueroa
    // is 251 m away. College Hill avenue (the other name in the clause) has no
    // entity.
    { kind: "change", from: "seminary", to: "third-street",
      scope: "extent",
      street: "Miramar Street", fromCross: "Columbia Avenue", toCross: "Boylston Street",
      wording: "That the name of the streets heretofore known as Seminary street and College Hill avenue, extending west from Figueroa to Columbia avenue through lots 1 and 2, block 38, Hancock's survey, be changed to Third street, of which they form a continuation.",
      says: ["c019", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c020 — “Diamond street, extending from the west city line to Lake Shore
    // avenue” — the Beverly Boulevard line, but the Lake Shore junction is not a
    // modern crossing. This is the Second Street that Ord. 364 (Sept. 1889) then
    // moved to First.
    { kind: "change", from: "diamond-street", to: "second-street",
      scope: "extent-unresolved",
      says: ["c020", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c020 — “A portion of the street commonly known as Lake Shore avenue,
    // extending from Diamond to Second streets.” ★ This is the change Ord. 482
    // (lah-1889-12-14) undid in December: “Second street (formerly Lakeshore
    // avenue)”. Which portion is not placeable from crossings.
    { kind: "change", from: "lake-shore-ave", to: "second-street",
      scope: "extent-unresolved",
      says: ["c020", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c020 — “Stevenson avenue, extending from Second street to the east city
    // boundary” — east of the river, beyond the extract. The 1890 ordinance's
    // “Stephenson avenue” (vetoed) is this ground renamed back.
    { kind: "change", from: "stevenson-ave", to: "second-street",
      scope: "extent-unresolved",
      says: ["c020", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c022 — Both anchors are modern names on this ground (0 m each); `earl-st`'s
    // four rows all lie on this stretch.
    { kind: "change", from: "earl-st", to: "san-julian-st",
      scope: "extent",
      street: "San Julian Street", fromCross: "5th Street", toCross: "9th Street",
      wording: "That the name of the street heretofore known as Earl street, extending from Fifth street south to Ninth street, lying between Wall and San Pedro streets, be changed to San Julian street.",
      says: ["c022", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c025 — “Through block 37 … between Orange and Seventh streets” identifies
    // the street; `ventura-ingraham` is only that (one row, mr018-063).
    { kind: "change", from: "ventura-ingraham", to: "ingraham",
      scope: "whole-name",
      says: ["c025", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c037 — The clause describes the whole street (Alameda to the Bigelow tract's
    // west line, next south of Davies), and `atchison-st` is only that. ★ The
    // REVERSE of the Oct. 1888 draft (“Third St. … and Georgia St., changed to
    // Atchison St.”): Georgia (east of Alameda) took Atchison, not the other way
    // round.
    { kind: "change", from: "atchison-st", to: "georgia-east",
      scope: "whole-name",
      says: ["c037", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c038 — Two clauses (c038 Rouland to Eleventh; c040 Tenth to Ninth) send both
    // of `nevada-1886`'s stretches to Georgia Bell, with Bennett Street (c039, no
    // entity) between them; together they exhaust the entity, so one unqualified
    // row. ★ This is the act Gen. Forman dated May 10, 1889.
    { kind: "change", from: "nevada-1886", to: "georgia-bell",
      scope: "whole-name",
      says: ["c038", "c040", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c041 — “From or near Court street to Bellevue avenue … in lot 1, block 39”:
    // the whole street, and `new-cincinnati-st` is only that (mr012-025).
    { kind: "change", from: "new-cincinnati-st", to: "edgeware",
      scope: "whole-name",
      says: ["c041", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c056 — “From Main street to Maple avenue”, both 0 m. ⚠ The Nov. 1889
    // numbering row (lah-1889-11-06) still names Consuelo; after this, the ground
    // it means was California.
    { kind: "change", from: "consuelo", to: "california-street-14th",
      scope: "extent",
      street: "14th Street", fromCross: "Main Street", toCross: "Maple Avenue",
      wording: "That the name of the street heretofore known as Consualo street, extending from Main street to Maple avenue south of and nearly parallel to East Pico street, be changed to California street.",
      says: ["c056", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c058 — ⚠ A RE-ENACTMENT: Ord. 207 (lah-1886-01-15) had already changed “Elm
    // street … from Pico street to California street” to Olive in Jan. 1886.
    // Either that did not hold or this repeats it. Left unresolved (direction-
    // bounded, “southward from Pico”) so the two rows do not fight on the map;
    // Kenny's call which one the map should carry.
    { kind: "change", from: "elm-street", to: "olive",
      scope: "extent-unresolved",
      says: ["c058", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c067 — The whole street (“from near Garey street eastward to Santa Fe avenue
    // … north of and nearly parallel to First street”); `topeka-st` is only that.
    // ★ “Near Garey” is the join with Ord. 242's Davies (Alameda to “Geary”) — the
    // support for reading Geary as Garey.
    { kind: "change", from: "topeka-st", to: "davies-2nd",
      scope: "whole-name",
      says: ["c067", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c070 — The whole street (Amelia to the river through the Aliso tract);
    // `weill` is only that. Sepulveda was minted for this row.
    { kind: "change", from: "weill", to: "sepulveda-jackson",
      scope: "whole-name",
      says: ["c070", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c080 — “Home street, extending from Belmont avenue to Lakeshore avenue” is
    // the whole of `home-street` (one row, mr006-138). Temperance street, the
    // other half of the clause, has no entity. Rockwood was minted for this row.
    { kind: "change", from: "home-street", to: "rockwood-street",
      scope: "whole-name",
      says: ["c080", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c081 — Both anchors 0 m. Shaw is lettered nowhere in the corpus and was
    // minted for this row, which is what attests it.
    { kind: "change", from: "shaw-winston", to: "winston-st",
      scope: "extent",
      street: "Winston Street", fromCross: "Wall Street", toCross: "San Pedro Street",
      wording: "That the name of the street heretofore known as Shaw street, extending from Wall street to San Pedro, between Fourth and Fifth streets, be changed to Winston street.",
      says: ["c081", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c087 — “Myrtle avenue, or street, extending south from East Pico street,
    // between Maple avenue and San Pedro street.” ⚠ `myrtle`'s own rows are NORTH
    // of Pico on modern Wall Street, and c086 sends Myrtle from Ninth to Pico to
    // PROSPECT — which Ord. 1915 (1893, confirmed) contradicts by making Myrtle
    // into Wall. The Prospect clause gets no row (no entity, and it would
    // contradict a confirmed row).
    { kind: "change", from: "myrtle", to: "san-julian-st",
      scope: "extent-unresolved",
      says: ["c087", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c109 — The whole street (Bellevue to Figueroa, north of and parallel to
    // Temple, Angeleño Heights); `cummings-ave` is only that. ★ Settles the Oct.
    // 1888 draft's Modoc: Ionia was enacted. Ionia was minted for this row. NB
    // 1889 “Figueroa” here is `figueroa-gov`.
    { kind: "change", from: "cummings-ave", to: "ionia-boston",
      scope: "whole-name",
      says: ["c109", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c139 — ★ RULE 2, CAUGHT BY THE WHAT-IF BUILD. First written as 4th Street,
    // Alameda → 3rd Street (both 0 m) — but modern 4th and 3rd meet WEST of
    // downtown (-118.2587), so the row painted 4th Street's whole middle as Huber.
    // The clause's "east from Alameda to Third streets" is an 1889 Third east of
    // Alameda, not a modern crossing. Read instead as unqualified: "in the Bliss
    // tract" identifies the street, and `huber-st` is only that street (three rows,
    // all from Alameda eastward). The other Huber (c138, Villa tract → Colusa) is a
    // different street.
    { kind: "change", from: "huber-st", to: "fourth-street",
      scope: "whole-name",
      says: ["c139", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c142 — “In the Botiller tract, and extending from Eighth to Ninth streets”,
    // both 0 m. Duplex was minted for this row. The other Ida (c141, Wollen Mill
    // tract → Placer) is a different street.
    { kind: "change", from: "ida-street", to: "duplex-cecelia",
      scope: "extent",
      street: "Cecelia Street", fromCross: "8th Street", toCross: "9th Street",
      wording: "That the name of the street heretofore known as Ida street, in the Botiller tract, and extending from Eighth to Ninth streets, be changed to Duplex street.",
      says: ["c142", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c147 — ★ RULE 2 twice over: Ward is modern 6th (`ward-st`), Seminary modern
    // Miramar (`seminary`); Bixel meets both at 0 m. Settles the 1888 draft's
    // “Contra Costa”: Bixel was enacted.
    { kind: "change", from: "lafayette-bixel", to: "bixel",
      scope: "extent",
      street: "Bixel Street", fromCross: "Miramar Street", toCross: "6th Street",
      wording: "That the name of the street heretofore known as Lafayette avenue, in the western part of the city, extending northeast from Ward to Seminary street, be changed to Bixel street.",
      says: ["c147", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c156 — “Morgan lane and … Mayo street, situated in the central part of the
    // city, east of Main street” — the whole street; `morgan-lane` is only that
    // (mr005-005). Mayo has no entity.
    { kind: "change", from: "morgan-lane", to: "third-street",
      scope: "whole-name",
      says: ["c156", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c158 — “Northern avenue and … North avenue, and Arch street, located in the
    // Colina Park tract” — whole streets; each entity is only its Colina Park
    // street.
    { kind: "change", from: "north-ave", to: "arnold",
      scope: "whole-name",
      says: ["c158", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c158 — As for North Avenue, same clause.
    { kind: "change", from: "northern-ave", to: "arnold",
      scope: "whole-name",
      says: ["c158", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c158 — As for North Avenue, same clause.
    { kind: "change", from: "arch-st", to: "arnold",
      scope: "whole-name",
      says: ["c158", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c163 — “Palm street, located in the Goodwin and Wingerter tract, and
    // extending south from Sixth street” — the whole street; `palm-st-arts-
    // district` is only that. The other Palm (c164, Kerckhoff tract → Paloma) is a
    // different street.
    { kind: "change", from: "palm-st-arts-district", to: "mimosa-st",
      scope: "whole-name",
      says: ["c163", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c185 — “Stanford avenue … in the Wolfskill Orchard tract.” ⚠ NOT whole-name:
    // `stanford-ave` also carries rows on modern STANFORD Avenue (mr029-085, May
    // 1888), which an unqualified change would rename Crocker. The Wolfskill-tract
    // stretch is modern Crocker Street, but the tract bound is not a crossing.
    { kind: "change", from: "stanford-ave", to: "crocker-street",
      scope: "extent-unresolved",
      says: ["c185", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c186 — “State street, in block 39 … extending from Belmont avenue and
    // Figueroa street” — the whole street; `state-colton` is only that. ⚠ `pink-
    // st` is lettered only as a vanished trace on Beaudry's Park tract; whether
    // that Pink and this one are one lineage is worth a look.
    { kind: "change", from: "state-colton", to: "pink-st",
      scope: "whole-name",
      says: ["c186", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c187 — “In lot 5, block 38” identifies the street; `strelitz-st` is only
    // that (mr006-427).
    { kind: "change", from: "strelitz-st", to: "maryland-street",
      scope: "whole-name",
      says: ["c187", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c196 — The whole street (Pico to Rouland, southwest of and parallel to
    // Figueroa and Nevada); `virginia-conv-center` is only that. Delong does not
    // meet modern Pico (308 m), so an extent would not resolve anyway.
    { kind: "change", from: "virginia-conv-center", to: "delong-street",
      scope: "whole-name",
      says: ["c196", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c197 — “From Diamond street northeast to Court street”: Diamond is modern
    // 1st Street on this very sheet (mr005-069), 59 m; Court 0 m. Toluca was
    // minted for this row.
    { kind: "change", from: "virginia-st-angeleno-hgts", to: "toluca-street",
      scope: "extent",
      street: "Toluca Street", fromCross: "1st Street", toCross: "Court Street",
      wording: "That the name of the street heretofore known as Virginia street, in the western part of the city, on east side of Second Street Park, extending from Diamond street northeast to Court street, be changed to Toluca street.",
      says: ["c197", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c200 — “In E. B. Millar and Weiss tract” — the whole street; `warren-st-
    // arts-district` is only that. The other Warren (c199, Ling's Addition →
    // Putman) is a different street.
    { kind: "change", from: "warren-st-arts-district", to: "decatur-st",
      scope: "whole-name",
      says: ["c200", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c202 — ★ (`william` was split 2026-09-18 into `william-santee` and `william-farragut`; this row is the latter.) It had conflated two streets: the Childs-tract William on modern
    // Santee (Ord. 207, 1886) and THIS one on modern Bixel, lot 1 block 37, “from
    // Seventh to Ingraham” (both 0 m; mr005-566's row runs exactly Ingraham →
    // 7th). An extent keeps the row off the Santee ground. Farragut was minted for
    // this row; the vetoed Oct. 1890 list would then have made Farragut into
    // Bixel.
    { kind: "change", from: "william-farragut", to: "farragut-bixel",
      scope: "extent",
      street: "Bixel Street", fromCross: "7th Street", toCross: "Ingraham Street",
      wording: "That the name of the street heretofore known as William street, in western part of the city, in lot 1, block 37, of Hancock's survey, extending northeast from Seventh to Ingraham street, be changed to Farragut street.",
      says: ["c202", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." },

    // c173 — “Rio avenue … extending from Shenandoa avenue southwest to a point
    // below Fourth street” — the whole street; `rio-avenue` is only that
    // (mr017-041).
    { kind: "change", from: "rio-avenue", to: "rio-st",
      scope: "whole-name",
      says: ["c173", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Ordinance No. 48 (N.S.), adopted Apr. 22, approved May 8 and in force on publication May 10, 1889." }
  ]
};
