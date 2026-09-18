// ★★ THE CONTEMPORARY ACCOUNT OF THE RENAMING WAVE, by a man who sat on the
// commission that did it. J. M. Guinn, secretary of the Historical Society of
// Southern California and the era's leading local historian, writing in
// 1912-13 about the Spanish and pioneer street names being erased around him.
//
// WHY IT MATTERS HERE. research-leads.md had been asking for this paper since
// 2026-09-15 as the likeliest explanation of Requena -> Market. It is that, and
// much more: it states the Requena namesake outright (which `requena-street`
// had flagged as INFERRED, not stated), it gives the real and unflattering
// reason for the name "Market", and it supplies a stack of pre-Ord Spanish
// lineages for streets this corpus already has.
//
// ⚠ GUINN IS A PARTICIPANT, NOT A NEUTRAL WITNESS. "A few years ago I was
// appointed by a Mayor of our city a member of a street-naming commission."
// The Georgia Bell passage is his own commission's work being attacked in
// council, told from the inside — which makes it unusually good evidence about
// what happened and unusually poor evidence about whether it was wise.
//
// NO ROWS YET. Textual, like the Herald clippings: it needs the review tool
// that MAP-TOOL-SPEC §9 wants before rows can be confirmed against it. The
// excerpts below are transcribed from the PDF's own text layer, so they are
// quotable now.
//
// PROVENANCE. Downloaded by Kenny from JSTOR, 2026-09-17, at this project's
// request.

module.exports = {
  id: "guinn-1912",
  title: "J. M. Guinn, “The Passing of Our Historic Street Names,” Annual Publication of the Historical Society of Southern California, Vol. 9, No. 1/2 (1912–1913), pp. 59–64",
  shortTitle: "Guinn on the passing street names",
  url: "https://www.jstor.org/stable/41168896",
  scan: "documents/guinn-1912/guinn-1912.pdf",
  transcription: null,

  date: { on: "1913-01-01" },
  recorded: "1913",
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
    { id: "requena-namesake",
      text: "Calle Libertad became Requena street in honor of Manuel Requena, a municipal statesman of " +
            "the old regime, who filled the offices of Alcalde and Regidor under Mexican rule and " +
            "Councilman under American. He was a large landowner on the line of the street and a most " +
            "estimable gentleman.",
      note: "★ STATES OUTRIGHT what `requena-street` had recorded as an inference from the ownership." },

    { id: "market-meaningless",
      text: "The meaningless name of East Market street was recently conferred upon it to connect it " +
            "with West Market — a little tag of a street extending from Main to Spring street — " +
            "another exemplification of the caudle appendage wagging the canine.",
      note: "★ THE MOTIVE FOR “MARKET”, and it is not a market: the name was taken from an existing " +
            "West Market Street so the two would match. Guinn, who disliked it, calls it meaningless." },

    { id: "libertad-requena-market",
      text: "East Market street of today was originally Calle Libertad (Liberty street).",
      note: "With the two excerpts above this gives the full sequence: Libertad → Requena → East Market." },

    { id: "spanish-names-falling",
      text: "Our modern municipal statesmen seem to harbor hatred to Spanish street names — recently " +
            "nearly all of Buena Vista street fell before the advance of North Broadway; Requena " +
            "street gave up to East Market street and what was once Corta street and a portion of " +
            "Alta street were absorbed into Sunset Boulevard." },

    { id: "ord-survey-names",
      text: "All the streets south of First street to Twelfth street and all west of Main street to " +
            "Figueroa, date their existence from the Ord Survey, made in 1849. They were christened " +
            "both in English and Spanish. The Spanish names long since ceased to be used and are " +
            "forgotten. Forten, Caridad and Chapules have been changed to Broadway, Grand avenue and " +
            "Figueroa.",
      note: "★ A DATING RULE FOR THE WHOLE DOWNTOWN GRID, and the most useful single sentence in " +
            "either Guinn paper for this corpus: nothing south of First or west of Main existed " +
            "before 1849. Any claim that a street in that rectangle carried a name earlier than the " +
            "Ord Survey is wrong about the street. That is what resolves the Caridad tangle — see " +
            "`oldest-streets` below. ⚠ “Forten” is Fortin (Calle Fortin, Fort Street); the OCR " +
            "and possibly the printer mangled it. documents/guinn-1895 gives the full concordance of " +
            "which this is a three-item summary." },

    { id: "los-angeles-street-lineage",
      text: "long before the Gringo came, Los Angeles street was known as Calle Zanja (Ditch street), " +
            "next as Calle de Las Vinas (Street of Vineyards), later as Calle de Las Huertas (Street " +
            "of Orchards), and before the Ord Survey as the Calle Principal (Main street). It was the " +
            "principal street leading south to the embarcadero of San Pedro.",
      note: "Four pre-Ord names for `los-angeles-street`, none of which has an entity." },

    { id: "oldest-streets",
      text: "San Fernando street (formerly Upper Main), North Main (once Alegro or Junction street) " +
            "and North Spring street, in the early years of the last century Calle Caridad (Charity " +
            "street), are the oldest streets of the city.",
      note: "★★ THE SENTENCE THAT SEPARATES THE TWO CARIDADS, and the reason `charity` and any " +
            "Caridad on the Spring line are two entities rather than one. Guinn names three streets " +
            "as the city's oldest, all north of the plaza, and gives NORTH SPRING the name Calle " +
            "Caridad in the early 1800s — while the Caridad of `ord-survey-names` above, the one " +
            "that became Grand Avenue, is the Ord Survey's own 1849 christening two blocks west of " +
            "Olive. ★ IT ALSO RESOLVES documents/guinn-1895, where the same author writes loosely " +
            "that “Spring street, sixty or seventy years ago was known as the Calle de Las " +
            "Caridad”: the passage above dates everything south of First to the Ord Survey, so " +
            "downtown Spring did not exist to be named in the 1830s and the north end is the only " +
            "candidate. (Kenny read it this way on 2026-09-17, before the 1912 text was checked; the " +
            "paper says it in so many words.) ⭐ TWO MORE LINEAGES IN ONE SENTENCE, neither yet an " +
            "entity: SAN FERNANDO STREET was formerly UPPER MAIN, and NORTH MAIN was once ALEGRO or " +
            "JUNCTION STREET — the “Calle de Las Allegria — Junction street” of the 1895 " +
            "paper." },

    { id: "marchessault-lineage",
      text: "That portion of Marchessault street which was recently absorbed by Sunset Boulevard early " +
            "in its history bore the name of Calle Iglesias, or Church street, so named from its " +
            "proximity to the Church of Our Lady of the Angels; then it became Pan, or Bread street; " +
            "next it expanded into Panaderia (Bakery) street. When Ord made his “piano” of the city it " +
            "was known as Corta (Short) street — it was only a block long.",
      note: "⚠ This Corta is by the Plaza and is NOT `corto-street`, which is between Beaudry and " +
            "Boylston a mile west." },

    { id: "trinidad-marchessault",
      text: "The street on the north side of the plaza, upon which some of the residences of the pueblo " +
            "aristocracy fronted, was known as Calle Trinidad (Trinity) street, and was one of a trio " +
            "of streets that united to form Main street. Its name was changed to honor the memory of " +
            "Marchessault, who, like Whittington of feline fame, was three times Mayor, not of " +
            "“London town,” but of Los Angeles. He cut his official term and his span of life short by " +
            "suicide." },

    { id: "eternity-buena-vista",
      text: "The Calle Eternidad (Eternity street) extended from the foot of the hill where the Calle " +
            "Alta intersected it to the Campo Santo, or Calvary Cemetery. The name was fitting. For " +
            "half a century the dead of the pueblo were carried over it to their eternal rest. The " +
            "name was changed to Buena Vista street and it was extended to the river.",
      note: "Bears on `eternity` and `high-street-chinatown` (Calle Alta)." },

    { id: "temple-salvation",
      text: "Temple street fifty years ago, when it ended at the First Protestant Church, which stood " +
            "on the corner of New High street where the stone lions now guard the steps up to the " +
            "court house, was known as Salvation street. It was a time of “spiritual darkness” in the " +
            "city and the name was probably given in derision.",
      note: "A predecessor of `temple` with no entity." },

    { id: "jail-street",
      text: "The jail at that time was on the block bounded by North Spring, New High and Franklin " +
            "streets, the latter street then known as Jail street." },

    { id: "lemon-soda-water",
      text: "Away back in the early years of American occupation, Soda Water street intersected Lemon " +
            "street near the end of Moran's lane, now East Ninth street.",
      note: "★ Bears on `lemon-st-arts-district` and `moran-s-lane`: it puts Lemon Street on the " +
            "ground decades before the 1887 sheets that letter it, and dates Moran's Lane's end." },

    { id: "deepwater",
      text: "Deepwater street was a short, narrow street on a sloping hillside. How it got into deep " +
            "water I do not know. Some joker, probably, christened it by the rule of contraries." },

    { id: "lovers-lane-date",
      text: "Lovers' Lane was a shady street that in early times meandered northward toward the river " +
            "from what are now the suburbs of Chinatown. The lumber yards, the machine shops and the " +
            "“Heathen Chinee” encroached upon it and the lovers ceased their trysts in it. Its name " +
            "was changed to Date street, but the dates have long since gone to join the lovers." },

    { id: "duplicates",
      text: "The use of the two languages in our street nomenclature has resulted in duplication of " +
            "names. We have Estrella street in Spanish, and a few blocks away Star street in English; " +
            "Towne avenue in one part of the city and Pueblo in another. Annexation of outside " +
            "territory has increased our duplicates. We have at the present time no less than three " +
            "Mountain Views in English and two Monte Vistas in Spanish.",
      note: "The duplicate problem that drove the 1888 cull and the 1897 commission, stated by a man " +
            "who served on one of them." },

    { id: "commission-georgia-bell",
      text: "A few years ago I was appointed by a Mayor of our city a member of a street-naming " +
            "commission… A street in the southwestern part of the city bore a compound name, " +
            "“Georgia Bell.” The commission changed it to a single name and thereby incurred the " +
            "wrath of Georgia's husband. He employed an attorney to undo our work and to demolish the " +
            "commission itself.",
      note: "★ THE GEORGIA BELL REVERSION FROM THE INSIDE. `georgia-bell` records the 1897 reversion " +
            "to “Georgia”; this is a commissioner saying his commission did it and that Horace Bell " +
            "fought it. ⚠ Guinn is a participant here, not a neutral witness." },

    { id: "commission-motive",
      text: "The members of that commission labored industriously to bring order out of the chaos of " +
            "street names caused by the ambition of real estate promoters to immortalize themselves, " +
            "their sisters, their cousins and their aunts in our street nomenclature. To give local " +
            "coloring and some historic significance to our city highways we injected into the mass of " +
            "names imported from eastern cities and towns a few smooth-syllabled native Californian " +
            "names of Spanish origin, but the dwellers on the streets whose names were changed would " +
            "have none of that." }
  ],

  rows: []
};
