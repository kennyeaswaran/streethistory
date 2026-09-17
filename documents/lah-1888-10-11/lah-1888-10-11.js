// ★★ THE DRAFT BEHIND ORDINANCE NO. 48, AND IT IS NOW TRANSCRIBED IN FULL.
// Three columns of the Herald, 199 proposed changes, published six months before
// the ordinance they became (documents/lah-1889-05-10). Every line is in
// lah-1888-10-11-transcription.md beside this file.
//
// ⚠ THE OLD HEADER SAID "roughly three hundred". It is 199. The estimate was made
// from a column-scale reading in Sept. 2026 and is corrected here by a count.
//
// WHAT THE FULL READING ADDS, beyond the dozen lines already excerpted: the list
// has TWO HALVES and they do different work. Column 1 (items 1–71) is not
// alphabetical and is mostly CONSOLIDATION — two, three or five names on one line
// of pavement folded into one ("Central Ave., Sunset Ave., Booth St., Toppan Ave.
// and Cole St. changed to Bonnie Brae St."). Items 72–199 are alphabetical by the
// OLD name and are mostly DUPLICATE CULL — one name borne by several unrelated
// streets, all but one renamed (three Grants, three Williams, four Virginias, two
// Aurora Streets four Hancock blocks apart). That is precisely the two purposes
// the lede states, executed in two passes, and it is why a line's position in the
// column tells you which kind of claim it is making.
//
// ⚠ IT IS A COMMITTEE LIST, NOT AN INSTRUMENT, and this corpus already knows what
// that distinction costs: handbook/change-rows-amendment.md §10 form 5 was written
// about the 1897 committee report, where names the commission merely COINED sit in
// the same column as names that existed on the ground. The same caution applies
// here, and this document proves it — at least four of its lines did not survive
// into the ordinance or the modern map:
//
//   • "Botiller St. and Santee St., changed to Martin St." Santee survives; and in
//     Jan. 1892 the council is still asking for an ordinance changing MARTIN and
//     Botiller to Santee (documents/lah-1892-01-23). The proposal ran backwards.
//   • "Aztec Ave. changed to Girard St.", where Kines has Aztec becoming Belmont.
//   • "Maple Ave. and Los Angeles St.: from Washington St. south, changed to
//     Regent St." — the 1876 Moreno Vineyard name revived, and in Dec. 1889 the
//     council does the OPPOSITE, changing Regent Street to Maple Avenue
//     (documents/lah-1889-12-14).
//   • "La Fayett Ave. in W part of city, changed to Contra Costa St." There is no
//     Contra Costa Street in Los Angeles and never was; the corridor took BIXEL in
//     1889 instead (see `lafayette-bixel`). A clean instance of the committee
//     proposing a name that simply lost.
//
// SO THE RULE FOR USING THIS DOCUMENT: a line here dates a name CONFLICT to before
// Oct. 1888 and tells you what the committee wanted done about it. It does not
// establish that the change happened. For that, Ordinance No. 48 or the ground.
//
// PROVENANCE, AND A LESSON IN IT. The scan beside this file — 2213 x 6425,
// covering ALL THREE columns of the item — was supplied by Kenny on 2026-09-06
// and has been in this folder ever since. The Sept. header said the list was read
// "at column scale" and stopped at a dozen lines; that was never a limit of the
// clipping, only of the reading. Kenny re-clipped two narrower columns on
// 2026-09-17, which is what prompted the full transcription, and those crops have
// since been deleted as strictly smaller than what was already here.
//
// ⚠ SO: BEFORE ASKING FOR A CLIPPING, OPEN THE ONE IN THE FOLDER AT FULL SIZE.
// The same thing was true of documents/lah-1897-12-07 on the same day.

module.exports = {
  id: "lah-1888-10-11",
  title: "Los Angeles Herald, Oct. 11, 1888, p. 3 — “Street Names. Good Work by a Committee of the Council. Order Brought from Chaos.” The special committee's summary of its 199 proposed changes",
  shortTitle: "the Oct. 1888 committee list (199 proposals)",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3",
  scan: "documents/lah-1888-10-11/lah-1888-10-11-clip.jpg",
  transcription: "documents/lah-1888-10-11/lah-1888-10-11-transcription.md",

  date: { before: "1888-10-11" },
  recorded: "1888-10-11",
  form: "textual",
  type: "news-report",
  attests: "built-by",
  completeness: "incidental",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  // The whole list is now read and transcribed, but `sweptFully` stays false and
  // `sweptFor` stays empty ON PURPOSE. A committee's list of streets it wants
  // RENAMED is not a census of streets that existed — a street the committee had
  // no complaint about does not appear, so absence from this list licenses no
  // negative inference whatever. Completeness of the transcription is not
  // completeness of the coverage.
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "lede",
      text: "For the past six or eight months a special committee of the City Council has been at " +
            "work endeavoring to arrange the names of the streets in this city, so that there shall " +
            "be no two streets of the same name, and that each street shall have a continuous name " +
            "throughout. This committee is now ready to report, and the ordinance changing the names " +
            "will probably be passed at the meeting of the Council on Monday. Following is a summary " +
            "of the changes to be adopted:",
      note: "The two purposes stated together — no duplicates, and one name per continuous street. " +
            "Ordinance No. 48's title six months later keeps only the second. The list executes them " +
            "in that order: consolidations first, then the duplicate cull alphabetically." },

    { id: "headline",
      text: "STREET NAMES. Good Work by a Committee of the Council. ORDER BROUGHT FROM CHAOS. " +
            "Thoroughfares That Have Had Several Names, Given One Throughout." },

    { id: "closing",
      text: "The Committee asks that if any further changes are to be suggested, they be made " +
            "before the next meeting of the Council.",
      note: "The document's own statement that it is provisional. Six months and an ordinance " +
            "later, several of its lines had changed or vanished." },

    // ————— lines that bear on names this project holds —————

    { id: "botiller-martin",
      text: "Botiller St. and Santee St., changed to Martin St.",
      note: "⚠ Did not hold. See documents/lah-1892-01-23, where Martin and Botiller are being " +
            "changed TO Santee four years later." },

    { id: "earl-san-julian",
      text: "Earl St. and San Julian Ave., changed to San Julian St.",
      note: "The absorption research-leads.md logged as undated: the Moran Tract of 1887 letters Earl " +
            "north of Ninth and San Julian south of it. Item 71 four lines later sends a SECOND " +
            "street to San Julian — “Myrtle Ave., S. of E. Pico” — so the name was being assembled " +
            "out of three pieces at once." },

    { id: "maple-regent",
      text: "Maple Ave. and Los Angeles St.: from Washington St. south, changed to Regent St.",
      note: "⚠ The reverse of what happened. Ordinance No. 482 of Dec. 1889 changes Regent Street to " +
            "Maple Avenue." },

    { id: "morgan-mayo",
      text: "Morgan Lane and Mayo St., changed to Mayo St.",
      note: "Both names live at once in 1888 — the Orchard Tract's Morgan Lane (documents/mr005-005) " +
            "and the Mayo Street ordered in Oct. 1883 (documents/lah-1883-10-21)." },

    { id: "nevada-georgia-bell",
      text: "Nevada St., Bennett St. and Nevada St., between Ninth and Tenth Sts., changed to " +
            "Georgia Bell St.",
      note: "★ Corrected against the full-size clip: the middle name is BENNETT, not a third Nevada. " +
            "The earlier column-scale reading printed “Nevada St., Nevada St. and Nevada St.”, which " +
            "was a misread. So it is two Nevadas and a Bennett folded into Georgia Bell — still " +
            "exactly the act names.js describes, and still the reason Forman dated the Georgia Bell " +
            "renaming to 1889, but the third street had a name of its own." },

    { id: "georgia-atchison",
      text: "Third St. from San Pedro to Wolfskill Ave. and Georgia St., changed to Atchison St." },

    { id: "aztec-girard",
      text: "Aztec Ave. changed to Girard St.",
      note: "⚠ Kines has Aztec Avenue becoming Belmont Avenue. A third account is in " +
            "documents/lah-1887-01-04, where Texas Street becomes Belmont. None of the three is " +
            "settled — and item 85 below adds a fourth wrinkle by moving BELMONT itself." },

    { id: "belmont-trenton",
      text: "Belmont Ave., from Pico to Eleventh St., changed to Trenton St.",
      note: "★ New in the full reading, and it bears on the Aztec/Belmont tangle above: in Oct. 1888 " +
            "Belmont Avenue ran far enough south to reach Pico and Eleventh, and the committee " +
            "wanted that southern tail taken off it. See `belmont-kincaid`." },

    { id: "castellar-hill",
      text: "Castellar St., changed to Hill St.",
      note: "Proposed in 1888; a portion of Castelar Street actually becomes Hill Street in July 1894 " +
            "(documents/lah-1894-07-24). Six years between the proposal and the act. (The old " +
            "column-scale reading printed “Castellar Ave.”; the clip reads St.)" },

    { id: "elm-olive",
      text: "Elm St. changed to Olive St.",
      note: "Already done by Ordinance No. 207 in Jan. 1886 (documents/lah-1886-01-15) — either a " +
            "different Elm, or the committee listing a change that had already been made." },

    { id: "cumberland-laura-boston",
      text: "Cumberland Ave. and Laura St., changed to Boston St.",
      note: "A Laura Street, two years before the Nov. 1889 numbering ordinance turns \"Laurel and " +
            "Adele\" into Fifteenth Street. Whether either is the \"(formerly Laura St)\" of the 1893 " +
            "Miguel Subdivision is unsettled." },

    // ————— the Beaudry cluster, new in the full reading —————

    { id: "beaudry-canal",
      text: "Beaudry Ave., from Third St. north, changed to Canal St.",
      note: "★★ A DOCUMENTED Beaudry → Canal renaming, and the first source in this corpus that " +
            "names the pair. `canal-street-beaudry` had to infer the connection from the Canal and " +
            "Reservoir Company; here the council is proposing the swap outright. ⚠ But note the " +
            "direction and the date: the Chadwick Subdivision of Dec. 1886 (documents/mr016-059) " +
            "ALREADY letters Canal Street on that ground, two years before this proposal. So either " +
            "the committee is regularising a change the subdividers had already made, or Canal was " +
            "on part of the line and Beaudry on the rest. The two rows are 300 m apart and both " +
            "north of Third." },

    { id: "west-canal",
      text: "Branch of Beaudry Ave., passing west of Sisters' Hospital, changed to West Canal St.",
      note: "★ The same branch turns up again nine years later, still unresolved: in Dec. 1897 the " +
            "city engineer reports that “West Beaudry avenue, that part of which is bounded on the " +
            "west by block 33, Angeleno Heights, and on the east by the Sisters' hospital, should be " +
            "changed to SUNSET BOULEVARD; this change has hitherto been overlooked” " +
            "(documents/lah-1897-12-07). Sisters' Hospital fixes the same stretch of ground both " +
            "times. So this branch was proposed as West Canal in 1888, was still called West Beaudry " +
            "in 1897, and became Sunset. The 1888 proposal did not hold." },

    { id: "crescent-beaudry",
      text: "Crescent Ave., changed to Beaudry St.",
      note: "★★ THE SUCCESSOR TO `crescent-park-tract`, which until now had none. Crescent Avenue is " +
            "lettered on Prudent Beaudry's own Park tract (documents/mr007-026-p1) — the sheet that " +
            "letters BOTH Beaudry names on two parallel roadways — and in Oct. 1888 the committee " +
            "proposes folding Crescent into Beaudry Street. ⚠ WHICH Beaudry matters: this corpus " +
            "splits `beaudry-st` (the Fremont Avenue lineage) from `beaudry-avenue` by the ink, and " +
            "the committee writes “Beaudry St.” Whether the Park Tract's Crescent sits on the Fremont " +
            "line or the Beaudry Avenue line is a geometry question this excerpt makes worth asking." },

    // ————— duplicate culls that land on entities we hold —————

    { id: "virginia-rouland",
      text: "Virginia St., in SW. part of city, changed to Rouland St.",
      note: "★ Both names are lettered on the SAME TWO SHEETS — Wright's Subdivision of Jan. 1884 " +
            "(documents/mr005-431) and the Harvey Tract of 1886 (documents/mr010-077) — as two " +
            "different streets. So in 1888 the committee is extending an existing neighbouring name " +
            "over a Virginia rather than coining one. See `rouland-street` and `virginia-conv-center`." },

    { id: "virginia-toluca",
      text: "Virginia St., in W. part of city, changed to Toluca St.",
      note: "★ The Angeleno Heights Virginia. Kines's Toluca page says this was “one of several " +
            "called ‘Virginia’” before the duplicate cull; here is the cull itself, with all four " +
            "Virginias in one place — Boyle Heights keeps the name, the SE one becomes Lion, the SW " +
            "one Rouland, the W one Toluca. See `virginia-st-angeleno-hgts`." },

    { id: "warren-decatur",
      text: "Warren St., in S. part of city, changed to Decatur St.",
      note: "★★ THIS SOURCES A RENAMING THE CORPUS HAD ONLY FROM ALIGNMENT. " +
            "`warren-st-arts-district` inferred Warren → Decatur from the fact that the E. B. Millar " +
            "Tract of 1887 letters Warren on the corridor that Tract No. 1836 letters Decatur in " +
            "1913, and said so explicitly: “That is from the alignment, not from a source; no " +
            "renaming document has been found.” One has now, and it dates the proposal to Oct. 1888 " +
            "— eighteen months after the Millar tract was recorded, not twenty-six years." },

    { id: "weill-sepulveda",
      text: "Jackson St. and Weill St., changed to Sepulveda St.",
      note: "★ The fate of `weill`, which the corpus had lost track of entirely (“The name is gone " +
            "from Los Angeles”). It went to Sepulveda, folded together with a Jackson Street, in the " +
            "Oct. 1888 cull." },

    { id: "weill-tract-cedar",
      text: "Cedar St., in A. Weill tract, changed to Hemlock St.",
      note: "★★ AN INITIAL AND A TRACT. `weill`'s entry says “no Weill of that quarter has been " +
            "identified” and graded the search `extensive`. This line gives A. WEILL a recorded " +
            "subdivision of his own in Los Angeles by 1888 — which is a filing in the County map " +
            "books with his full name in the title block, and the first hard handle on the man." },

    { id: "consuelo-california",
      text: "Consuelo St. changed to California St.",
      note: "★★ THIS CLOSES A CHAIN. `consuelo` records that the numbering ordinance of Nov. 1889 " +
            "folded “California, Consuelo, Greenwell and Vejar” into Fourteenth Street, which read " +
            "as four parallel names going into one number. It was a SEQUENCE: Consuelo became " +
            "California here in Oct. 1888, and California became Fourteenth thirteen months later. " +
            "See also `california-street-14th`." },

    { id: "cummings-modoc",
      text: "Cummings Ave., in Angeleño Heights, changed to Modoc St.",
      note: "⚠ CONFLICTS WITH THE PRESERVATION PLAN, which says Hall and Stilson renamed “Cummings " +
            "to Ionia” for the Hall family's Michigan hometown. Both cannot be the same event. The " +
            "likeliest reading is that they are two: Hall and Stilson's private renaming on their " +
            "own tract (1886, per `cummings-ave`), and the city committee's proposal two years later " +
            "which — since no Modoc Street exists in Angeleno Heights — did not hold. But the plan " +
            "gives no date for the Ionia change, so the order is not proven." },

    { id: "lafayette-contra-costa",
      text: "La Fayett Ave. in W part of city, changed to Contra Costa St.",
      note: "⚠ A PROPOSAL THAT LOST. The spelling is the paper's. This is `lafayette-bixel` — the " +
            "west-side Lafayette on what is now Bixel Street, lettered “Lafayette Av.” on the Crown " +
            "Hill sheet of Nov. 1884 (documents/mr006-115). There is no Contra Costa Street in Los " +
            "Angeles; the corridor took BIXEL the following year instead. Useful precisely because " +
            "it fails: it shows the committee choosing California county names by the handful " +
            "(Tulare, Merced, Solano, Yolo, Napa, Sonoma, Amador, Colusa, Placer, Mono, Calaveras, " +
            "Tuolumne, Siskiyou, Stanislaus, San Joaquin, Del Norte in this list alone) and losing " +
            "some of them to the ground." },

    { id: "fudickar-king",
      text: "Fudickar or Fudigar St., in W. part of city, changed to King St.",
      note: "A street with two spellings at once, and the committee prints both. ⚠ The proposal " +
            "half-held and then reversed: in Dec. 1897 the city engineer is still calling it Fudigar " +
            "and proposing “Fudigar street, Temple to Bellevue, changed to Sugg street”, while a " +
            "DIFFERENT King Street, First to Temple, is to become Sugg as well " +
            "(documents/lah-1897-12-07). Nine years on, both names are still in play." },

    { id: "sainsevain-commercial",
      text: "Sainsevain St., changed to Commercial St.",
      note: "★ The Sainsevain of the Aliso vineyard circle — Pedro Sainsevain, Vignes's nephew — " +
            "losing his street to a generic. Frenchtown Confidential's description of Labory Lane " +
            "puts it “east of the Southern Pacific tracks to Lafayette”, in this same quarter, and " +
            "the Huntington's Solano-Reeve record for the Alanis Vineyard Tract runs “Sainsevain St. " +
            "to Labory Lane”. See `labory-lane`." },

    { id: "huber-bliss",
      text: "Huber St., in Bliss tract, changed to Mendocino St.",
      note: "The Bliss tract, which the Herald of Oct. 19, 1886 places “on E side Alameda street” in " +
            "a decree quieting title for Oliver H. Bliss against the Wolfskill heirs. Not yet a name " +
            "in this corpus; recorded here because the tract is now doubly attested." },

    { id: "glowner-fuller",
      text: "Fuller St., changed to Glowner St.",
      note: "★ Where Glowner Street comes from. Nine years later the engineer proposes to take it " +
            "away again — “Glowner street, Twenty-second to Twenty-fifth street, changed to Wall " +
            "street” (documents/lah-1897-12-07) — so the name lasted about a decade and this is its " +
            "birth certificate." },

    { id: "koster",
      text: "Agate Ave., and Koster St., changed to Agate st. / Koster Ave., changed to Koster St.",
      note: "Two consecutive items, quoted together because they only make sense as a pair: the " +
            "committee takes the name Koster off one street and puts it on another, so that Agate " +
            "and Koster each end up on one line instead of crossing. A clean worked example of what " +
            "“given one throughout” meant in practice." }
  ],

  rows: []
};
