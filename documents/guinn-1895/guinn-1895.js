// ★★★ THE PRIMITIVE LAYER. Guinn's 1895 paper prints ORD'S 1849 STREET NAMES IN
// BOTH LANGUAGES, side by side, seventeen of them — which is the bottom of the
// stack for downtown Los Angeles and the one thing this corpus had no source for
// at all. Every tract sheet here is later than these names; most of the streets
// on them were laid out against this grid.
//
// WHY IT IS A SEPARATE DOCUMENT FROM documents/guinn-1912. Same author, same
// society, same habit of mind, but a different object: the 1912 paper is about
// names being ERASED in Guinn's own lifetime and he is a participant in the
// erasing. This one is about where the names CAME FROM, written seventeen years
// earlier, and Guinn is a historian working from an abstract company's records
// rather than from the commission he sat on. Its claims have a different
// provenance and deserve a different id.
//
// ⚠ AND HE NAMES HIS SOURCE, which is rarer than it should be: "For information
// in regard to the old names of streets I am indebted to C. C. Grove of the West
// Coast Abstract company." So the street-name list is NOT Guinn's own research —
// it is a title abstractor's, relayed. That is good provenance for the pairings
// (an abstract company reads deeds for a living) and poor provenance for the
// stories attached to them, which read as Guinn's own colour.
//
// ⚠ GUINN HEDGES ONE HIMSELF and the hedge is worth keeping: of Spring Street as
// Calle Cuidado he writes "There is a tradition, which I have not been able to
// verify by written record". Treat the etymologies he does NOT hedge as his
// assertion, not as documentary evidence.
//
// NO ROWS. Like guinn-1912 this is `type: "history"` — secondary scholarship
// about the naming, carrying no geometry. What it carries is a concordance, and
// the entities it bears on should cite the excerpt, not the paper at large.
//
// PROVENANCE. Downloaded by Kenny from JSTOR, 2026-09-17, at this project's
// request — handbook/IN-PERSON.md §4 had asked for it as the companion to the
// 1912 paper. The text layer of the PDF is clean enough to quote but the OCR
// mangles Spanish accents and one Cyrillic-looking "Того" for "Toro"; the
// excerpts below are corrected against the sense and flagged where they were.

module.exports = {
  id: "guinn-1895",
  title: "J. M. Guinn, “The Plan of Old Los Angeles: And the Story of Its Highways and Byways,” Annual Publication of the Historical Society of Southern California, Vol. 3, No. 3 (1895), pp. 40–50",
  shortTitle: "Guinn on the plan of old Los Angeles",
  url: "https://www.jstor.org/stable/41167619",
  scan: "documents/guinn-1895/guinn-1895.pdf",
  transcription: "documents/guinn-1895/guinn-1895.txt",

  // Read to the Society on December 2, 1895 and published in that year's volume.
  date: { on: "1895-12-02" },
  recorded: "1895",
  form: "textual",
  type: "history",
  attests: "built-by",
  completeness: "incidental",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: false,
  sweptFor: [],
  readBy: "instance",

  excerpts: [
    { id: "ord-street-names",
      text: "The names of the streets on Ord's plan are given in both Spanish and English; beginning " +
            "with Main they are as follows: Calle Principal — Main street; Calle Primavera — Spring " +
            "street, named for the season spring; Calle Fortin — Fort street; Calle Loma — Hill " +
            "street; Calle Aceytuna — Olive street; Calle de Las Caridad — The Street of Charity (now " +
            "Grand avenue); Calle de Las Esperanzas — The Street of Hopes; Calle de Los Flores — The " +
            "Street of Flowers; Calle de Los Chapules — The Street of Grasshoppers (now Pearl " +
            "street). North of the plaza church the north and south streets were the Calle de " +
            "Eternidad — Eternity street, so named because it had neither beginning nor end, or, " +
            "rather, each end terminated in the hills. Calle del Toro — Bull street, significant of " +
            "the national pastime of Spain and Mexico — the bull fight. Calle de Las Arispas — Hornet " +
            "street; an exceedingly lively street at times when the hornets had business engagements " +
            "with the paisanos. Calle de Las Adobes — Adobe street, well named. The east and west " +
            "streets were Calle Corta — Short street; Calle Alta — High street; Calle de Las Virgines " +
            "— Street of Virgins; Calle del Colegio — College street, the only street that retains " +
            "its primitive name.",
      note: "★★★ SEVENTEEN NAMES IN TWO LANGUAGES, and four etymologies stated outright: Spring for " +
            "the season, Eternity for having no end, Bull for the bull fight, Hornet for the hornets. " +
            "★ COLLEGE STREET IS FLAGGED BY GUINN HIMSELF as “the only street that retains its " +
            "primitive name” — a claim about the whole grid, made in 1895, and a strong one to test " +
            "against this corpus. ⚠ THREE SUCCESSORS ARE GIVEN: Charity → Grand Avenue, Grasshoppers " +
            "→ Pearl Street, and (below) Orchards → San Pedro. ⚠ OCR: the PDF prints “Того” for " +
            "Toro, “Accytuna” for Aceytuna and “Colégio” for Colegio; corrected here against the " +
            "sense and recorded so nobody reads the corrections as a variant spelling." },

    { id: "grove-attribution",
      text: "Note. — For information in regard to the old names of streets I am indebted to C. C. " +
            "Grove of the West Coast Abstract company.",
      note: "★ THE SOURCE BEHIND THE SOURCE, and the reason to cite the excerpt rather than “Guinn " +
            "says”: the street-name concordance is a title abstractor's work relayed by a historian. " +
            "Good provenance for the pairings, weaker for the stories attached to them." },

    { id: "grasshopper-street",
      text: "The Calle de Las Chapules was for many years the extreme western street of the city. The " +
            "name originated thus: On certain years, mostly during the dry or drouth years, myriads " +
            "of grasshoppers hatched on the low grassy plains of the Ballona and Cienegas. When they " +
            "had devoured all vegetation where they originated, they took flight, and, flying with " +
            "the wind, moved in great clouds towards the east — like the locusts of Egypt, devouring " +
            "everything in their course. When the destroying hosts reached the Calle de Las Chapules, " +
            "the vinatero knew his grape crop for that season was doomed.",
      note: "An etymology with a mechanism, which is what makes it checkable rather than decorative: " +
            "the street was the city's western edge, so it was where the swarms arriving from the " +
            "Ballona were first met." },

    { id: "spring-street-charity",
      text: "Calle Primavera — Spring street, sixty or seventy years ago was known as the Calle de Las " +
            "Caridad — the Street of Charity. The aristocratic part of the city in those days was in " +
            "the neighborhood of the plaza, and on Upper Main street. Spring street being well out in " +
            "the suburbs, its inhabitants were mostly peons and Mexicans of the poorer class, who " +
            "were dependent largely upon the charity of their wealthier neighbors. There is a " +
            "tradition, which I have not been able to verify by written record, that back about the " +
            "beginning of the century, Spring street was known as Calle Cuidado — Lookout or Beware " +
            "street.",
      note: "✔ RESOLVED — TWO STREETS, NOT A CONTRADICTION, and Guinn's own 1912 paper decides it " +
            "(Kenny, 2026-09-17). Read against the concordance above, this looks like the same " +
            "Spanish name on two streets; it is. documents/guinn-1912 says outright that “North " +
            "Spring street, in the early years of the last century Calle Caridad (Charity street)” " +
            "is one of “the oldest streets of the city” — so the pre-1849 Caridad is the NORTH " +
            "SPRING line, through what is now Chinatown, while the concordance's Caridad is the Ord " +
            "Survey's own christening two blocks west of Olive, which became Grand Avenue. ★★ AND " +
            "GUINN SETTLES IT AGAINST HIMSELF WITHOUT ANY OUTSIDE HELP: the 1912 paper also states " +
            "that “all the streets south of First street to Twelfth street and all west of Main " +
            "street to Figueroa date their existence from the Ord Survey, made in 1849.” Downtown " +
            "Spring Street did not exist before 1849, so it cannot have carried a name “sixty or " +
            "seventy years” before 1895. The only part of the Spring line old enough is the stretch " +
            "north of First. ⚠ SO THE LOOSE WORD IS THIS PAPER'S: Guinn writes “Spring street” here " +
            "where the 1912 paper writes “North Spring street”, and the later, narrower statement " +
            "is the one to follow. ✔ ORD'S OWN SHEET AGREES: the county recorder's copy, M.R. 53-68, " +
            "labels this street “Calle Primavera” and carries “Charity St / Calle de Caridad” as a " +
            "SEPARATE street on the same sheet (cited in streets-data.js). ★ Note also that Guinn " +
            "marks his own hedge on Calle Cuidado — “which I have not been able to verify by written " +
            "record” — which is how to read everything in this paper that he does not so mark; the " +
            "Caridad claim is NOT so marked." },

    { id: "los-angeles-street-lineage",
      text: "With the growth of the town southward, the business center drifted from its first " +
            "locality on Upper Main street, and for a time became fixed at the head of Los Angeles " +
            "street where that street intersected with Aliso, Arcadia, Sanchez and Negro alley. At " +
            "that point Los Angeles was then a very broad street probably two hundred feet wide; it " +
            "narrowed as it ran southward and widened again at its intersection with First street. In " +
            "the early part of the century it was known as Zanja (ditch) street. In the early " +
            "thirties it had been dignified into the Calle Principal or Main street and with its " +
            "continuation the Calle de Los Huertos — the street of orchards — (now San Pedro) formed " +
            "the principal highway running southward from the center of the town.",
      note: "★ A THIRD NAME FOR LOS ANGELES STREET, earlier than any in documents/guinn-1912's " +
            "account: ZANJA STREET, for the ditch, before it was “dignified into” Calle Principal. " +
            "⚠ And note what that does to the concordance: Calle Principal is given above as MAIN " +
            "street, and here it is what LOS ANGELES street was called in the 1830s. The name moved " +
            "between two roadways, which is exactly the kind of thing that makes a name entity a " +
            "lineage rather than a string. ★ SAN PEDRO STREET was Calle de Los Huertos, the street " +
            "of orchards. ⚠ OCR prints “Zanjo”; the word is zanja." },

    { id: "calle-de-los-negros",
      text: "There was one street in the older portion of Los Angeles that is not named in Ord's " +
            "plan, but which, in the flush days of gold mining from 1850 to '55, had a more " +
            "wide-spread notoriety than any other street in the city. It was the Calle de Los Negros " +
            "in Spanish… It was a short and narrow street extending from the then termination of Los " +
            "Angeles street to the plaza. In length it did not exceed 500 feet… With the decadence of " +
            "gold mining the character of the street changed… It ceased to be the rendezvous of the " +
            "gambler and the desperado and became the center of the Chinese quarter of the city.",
      note: "Quoted in part. The street's Americanised name is a racial slur that was in general " +
            "printed use in 1895 and is elided here with an ellipsis; the Spanish name is the one to " +
            "use. This is the street of the 1871 Chinese Massacre, which Guinn goes on to describe. " +
            "⚠ It is NOT on Ord's plan, which Guinn states — so it is an organic name, not a " +
            "surveyed one, and any entity for it should say so." },

    { id: "ord-extent",
      text: "In the city clerk's office is a copy of a map of the first subdivision of Los Angeles " +
            "city lands made after the American occupation. It is entitled, “Plan de la Ciudad de Los " +
            "Angeles, by E. O. C. Ord, Lt. U. S. A., Wm. R. Hutton, Asst., August 29, 1849.” Ord's " +
            "survey embraces all that portion of the city bounded north by First street and the base " +
            "of the first line of hills, east by Main street, south by Twelfth street and west by " +
            "Pearl street. Also that portion of the city north of Short street and west of Upper Main " +
            "to the base of the hills… The blocks, except the first tier, are 600 feet in length, and " +
            "are divided into ten lots each, 120 feet front by 165 feet in depth.",
      note: "★ THE EXTENT OF ORD'S SURVEY, stated as four bounds — First, Main, Twelfth, Pearl — " +
            "which is a usable test for whether a given street was inside the original American " +
            "survey or added later. Several documents in this corpus describe themselves as " +
            "extensions of Ord's Survey (documents/mr003-240 is “Block 35½, Being an Extension of " +
            "Ord's Survey”), and this fixes what they were extending." },

    { id: "camino-real",
      text: "On a map of the pueblo of Los Angeles, made in 1786, when Arguello surveyed the lands of " +
            "the founders, there is a road marked as beginning at the southeast corner of the old " +
            "plaza, from thence running southeasterly until it intersects what is now Aliso street; " +
            "thence following the present line of that street it crosses the river and passes out of " +
            "the pueblo to the southeast… This, in the days of King Carlos III, was the Camino del " +
            "Rey, or Camino real.",
      note: "★ ALISO STREET IS OLDER THAN ANY PLAT, and older than the pueblo's own survey: it is the " +
            "line of the royal road out to San Juan Capistrano and San Diego, marked on a map of " +
            "1786. Bears on the whole Frenchtown cluster east of Alameda, which was laid out against " +
            "this line." }
  ],

  rows: []
};
