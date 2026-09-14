// names.js — authored name ENTITIES (MODEL-SPEC.md §3).
//
// A name entity is a naming lineage, not a string. Two occurrences are the
// same entity iff connected by a chain of propagation (origin, extension,
// renaming, transfer). Default when uncertain: SEPARATE entities — merging
// later is cheap (fold B into A, keep B's id in `aliases`), splitting is not.
//
// Fields (see MODEL-SPEC.md §3 for semantics):
//   spellings[]   ordered spelling periods; last = display name. Each period:
//                 { forms: [...], disambiguation?, from?, until?, source? }
//                 from/until ONLY for prose-attested periods with no document
//                 rows to derive from (each such period must carry `source`).
//   namedAfter    who/what the name honors ({{...}} marks the link span), or null
//   namedAfterLink, categories, sources, disputed, note, possiblySameAs, aliases
//
// Decision log:
//   2026-08-24 (Kenny): a revived name RESUMES its old entity — Georgia's 1897
//   revert to a pre-1889 spelling is one entity with three spelling periods,
//   per the §3 example (resolves the question §12 had left open).

const NAME_ENTITIES = {

  // ---- the downtown numbered grid -----------------------------------------
  // One entity per number, spanning the whole downtown grid: the Ord-survey
  // origin stretch plus everything later folded in by extension or renaming.
  // (A separate numbered grid elsewhere in the city would be a different
  // entity that spells alike.) "Third"/"3rd" is a RENDERING, not a second
  // form — the generator owns the ordinal table (§3).

  "first-street": {
    spellings: [{ forms: ["1st Street"] }],
    namedAfter: "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
    namedAfterLink: null,
    categories: ["number"],
    sources: [
      { title: "L.A. Street Names: 1st Street (on the numbering system)",
        url: "https://lastreetnames.com/street/0001st-street/" }
    ],
    disputed: false,
    note: "Since 1883 1st Street has divided north from south in Los Angeles addresses, as Main Street divides east from west. Claims dating the numbering to 1846 are doubtful.",
    internalNote: "Renamed from the minted id `first-st`, 2026-08-31, to match its " +
      "siblings second-street\u2026seventh-street: the numbered grid is one entity per " +
      "number and the ids should look like it. Prose carried over from streets-data.js.",
    possiblySameAs: null, aliases: ["first-st"]
  },

  "second-street": {
    spellings: [{ forms: ["2nd Street"] }],
    namedAfter: "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
    namedAfterLink: null,
    categories: ["number"],
    sources: [
      { title: "L.A. Street Names: 1st Street (on the numbering system)",
        url: "https://lastreetnames.com/street/0001st-street/" }
    ],
    disputed: false, note: null, possiblySameAs: null, aliases: []
  },

  "third-street": {
    spellings: [{ forms: ["3rd Street"] }],
    namedAfter: "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
    namedAfterLink: null,
    categories: ["number"],
    sources: [
      { title: "L.A. Street Names: 1st Street (on the numbering system)",
        url: "https://lastreetnames.com/street/0001st-street/" }
    ],
    disputed: false, note: null, possiblySameAs: null, aliases: []
  },

  "fourth-street": {
    spellings: [{ forms: ["4th Street"] }],
    namedAfter: "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
    namedAfterLink: null,
    categories: ["number"],
    sources: [
      { title: "L.A. Street Names: 1st Street (on the numbering system)",
        url: "https://lastreetnames.com/street/0001st-street/" }
    ],
    disputed: false, note: null, possiblySameAs: null, aliases: []
  },

  "fifth-street": {
    spellings: [{ forms: ["5th Street"] }],
    namedAfter: "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
    namedAfterLink: null,
    categories: ["number"],
    sources: [
      { title: "L.A. Street Names: 1st Street (on the numbering system)",
        url: "https://lastreetnames.com/street/0001st-street/" }
    ],
    disputed: false, note: null, possiblySameAs: null, aliases: []
  },

  "sixth-street": {
    spellings: [{ forms: ["6th Street"] }],
    namedAfter: "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
    namedAfterLink: null,
    categories: ["number"],
    sources: [
      { title: "L.A. Street Names: 1st Street (on the numbering system)",
        url: "https://lastreetnames.com/street/0001st-street/" }
    ],
    disputed: false, note: null,
    internalNote: "One entity for the whole downtown grid, as with 2nd–5th. The 1849 " +
      "Ord/Hutton survey laid out Calle 6ª between Pearl (now Figueroa) and Main; the " +
      "Wolfskill Orchard Tract's “Sixth St” east of Alameda is the same numbering " +
      "propagating east. WHEN that eastward stretch was cut through, and whether it first " +
      "carried another name, is not researched — streets-data.js hedges it as " +
      "“presumably an eastward extension” and this entity inherits the hedge.",
    possiblySameAs: null, aliases: ["sixth-st"]
  },

  "seventh-street": {
    spellings: [{ forms: ["7th Street"] }],
    namedAfter: "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
    namedAfterLink: null,
    categories: ["number"],
    sources: [
      { title: "L.A. Street Names: 1st Street (on the numbering system)",
        url: "https://lastreetnames.com/street/0001st-street/" }
    ],
    disputed: false, note: null,
    internalNote: "As sixth-street: Calle 7ª on the 1849 Ord/Hutton survey west of Main, " +
      "the same numbering east of Alameda on the Wolfskill Orchard Tract. The date the " +
      "eastward stretch joined the grid is unresearched.",
    possiblySameAs: null, aliases: ["seventh-st"]
  },

  // ---- the two Georgias (different entities, same spelling; §3) -----------

  // East-of-Alameda Georgia: the name on 3rd Street's Alameda–Santa Fe
  // stretch, attested 1875 (Thomas Tract) and 1888 (Wolfskill Orchard Tract).
  // No documented namesake. NOT the west-downtown Georgia (georgia-bell) —
  // no propagation edge connects them.
  "georgia-east": {
    spellings: [{ forms: ["Georgia Street"], disambiguation: "east of Alameda" }],
    namedAfter: "Likely {{the state}}",
    namedAfterLink: "https://en.wikipedia.org/wiki/Georgia_(U.S._state)",
    categories: ["place"],
    sources: [],
    disputed: false,
    note: "Very likely the “other, now-defunct Georgia Street” whose existence forced the 1889 renaming of the unrelated west-downtown Georgia Street to Georgia Bell Street.",
    internalNote: "⚠ THE 1889 IN THE NOTE ABOVE IS NOW IN DOUBT (2026-09-06): documents/lah-1883-09-02 reports the Georgia → Georgia Bell ordinance adopted in Sept. 1883. See `georgia-bell`'s internalNote for the conflict and for why nothing has been changed yet. The DISAMBIGUATION reading this note rests on is untouched and is if anything strengthened — the 1883 Board had proposed Alabama, and what passed appended the addition's name to Georgia instead.",
    possiblySameAs: null,
    aliases: []
  },

  // West-downtown Georgia: christened on Bell land by 1874; renamed Georgia
  // Bell (folding in stretches platted Nevada) 1889; reverted to Georgia by
  // the 1897 council compromise. One entity, three spelling periods (the
  // revert RESUMES the entity — decision log above). The 1889 and 1897
  // transition dates are carried by document rows (ord-4093 and the Herald
  // reports), so only the first period needs prose dating.
  "georgia-bell": {
    spellings: [
      { forms: ["Georgia Street"], disambiguation: "west downtown", from: "1874", until: "1889",
          source: { title: "L.A. Street Names: Georgia Street",
                    url: "https://lastreetnames.com/street/georgia-street/" } },
      { forms: ["Georgia Bell Street"], from: "1889",
          source: { title: "Los Angeles Herald, “A Storm of Words” (Forman: renamed Georgia Bell May 10, 1889), Feb. 19, 1897",
                    url: "https://cdnc.ucr.edu/?a=d&d=LAH18970219.2.24" } },
      { forms: ["Georgia Street"], disambiguation: "west downtown" }
    ],
    namedAfter: "Georgia Herrick Bell (1845–1899), wife of {{Major Horace Bell}}, on whose land the street was laid out",
    namedAfterLink: "https://en.wikipedia.org/wiki/Horace_Bell",
    categories: ["person","alive"],
    sources: [
      { title: "L.A. Street Names: Georgia Street",
        url: "https://lastreetnames.com/street/georgia-street/" },
      { title: "Los Angeles Herald, “A Storm of Words” (Forman's dated history), Feb. 19, 1897",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18970219.2.24" }
    ],
    disputed: false,
    note: null,
    internalNote: "⚠ THE 1889 DATE IS IN CONFLICT WITH A CONTEMPORARY REPORT, 2026-09-06. The Los Angeles Herald of Sept. 2, 1883 (documents/lah-1883-09-02) reports an ordinance adopted “changing the names of certain streets: … Georgia to Georgia Bell street”, and the Board of Public Works had recommended a fortnight earlier that Georgia Street “in same addition” — Bell's addition — be changed to ALABAMA (documents/lah-1883-08-19). The spelling periods above date the Georgia Bell period from 1889, on Gen. Forman's Feb. 1897 recollection that the street was renamed Georgia Bell on May 10, 1889. NOTHING HAS BEEN CHANGED HERE: a contemporary report normally beats a recollection, but the two may be about different events — the comment above describes the 1889 act as FOLDING IN the stretches platted Nevada in 1886, which a name coined in 1883 could well have absorbed. Both dates would then be right about different things. LARGELY RESOLVED THE SAME EVENING, in favour of 1889: the Herald of May 10, 1889 prints ORDINANCE NO. 48 (New Series) in full — “changing the names of certain streets and avenues in the city of Los Angeles, which, while forming one practically continuous street, have different names” — adopted Apr. 22, 1889, approved by Mayor Hazard May 8, published and therefore in force May 10. That is Forman's date exactly, and it is an instrument rather than a recollection. The committee's Oct. 1888 draft list (Herald, Oct. 11, 1888) has the line “Nevada St., Nevada St. and Nevada St., between Ninth and Tenth Sts., changed to Georgia Bell St.”, which is precisely the folding-in this entity's comment describes. So the 1889 structure above stands. What is now unexplained is the 1883 item, which is a contemporary report of an adopted ordinance using the same new name six years earlier — either it did not take effect, or it was later undone, or it is a different Georgia. handbook/MINUTES-TO-CHECK.md lists Sept. 1, 1883 as the meeting to pull. Also unestablished: that the Georgia Street in “Bell's addition” is this street. It is the obvious reading — this entity says the street was laid out on Bell land — but the addition is not located in this corpus and matching a tract to an entity by the owner's surname is a rule-2 step.",
    possiblySameAs: null,
    aliases: []
  },

  // The 1886 tract-map name (Downey Harvey and Dunnigan tracts) for stretches
  // folded into Georgia Bell on May 10, 1889, per Gen. Forman's Feb. 18, 1897
  // testimony. The 1897 commission proposed reverting the whole street to
  // "Nevada"; that never became law.
  "nevada-1886": {
    spellings: [{ forms: ["Nevada Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [
      { title: "Los Angeles Herald, “A Storm of Words” (Forman: Nevada was the 1886 tract-map name), Feb. 19, 1897",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18970219.2.24" }
    ],
    disputed: false, note: null, possiblySameAs: null, aliases: []
  },

  // ---- other predecessors on 3rd Street's ground --------------------------

  "arnold": {
    spellings: [{ forms: ["Arnold Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Namesake untraced.",
    possiblySameAs: null, aliases: []
  },

  // Still called Bixel today, so it is only ever seen as itself; entered
  // because M.R. 66-35 is the first document row that attests it.
  "bixel": {
    spellings: [{ forms: ["Bixel Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Namesake untraced. Worth a look — lastreetnames.com may have it.",
    possiblySameAs: null, aliases: []
  },

  // ---- Alameda, and the Mills and Wicks / Bliss tract pocket --------------

  "alameda-st": {
    spellings: [{ forms: ["Alameda Street"] }],
    namedAfter: "Spanish for a tree-lined avenue, from {{\u00e1lamo}} (\u201ccottonwood tree\u201d)",
    namedAfterLink: "https://en.wiktionary.org/wiki/alameda",
    categories: ["nature", "descriptive"],
    sources: [
      { title: "L.A. Street Names: Alameda Street (\u201cofficially named on February 2nd, 1855\u201d)",
        url: "https://lastreetnames.com/street/alameda-street/" }
    ],
    disputed: false,
    note: "Officially named Feb. 2, 1855, though the road \u2014 or an earlier one nearby \u2014 may already have been informally called an alameda.",
    internalNote: "Carried over from the hand-authored streets-data.js entry for Alameda Street, which cites the same Kines page. M.R. 13-87 is the first DOCUMENT row attesting it in this model.",
    possiblySameAs: null, aliases: []
  },

  "huber-st": {
    spellings: [{ forms: ["Huber Street"] }],
    namedAfter: "Not documented; most likely {{Caroline Howard (née Huber)}}, wife of the tract developer Dr. Frederick Preston Howard — the same inference that explains Carolina Street, one block east, now Hewitt Street.",
    namedAfterLink: "https://lastreetnames.com/street/colyton-street/",
    categories: ["person","unknown"],
    sources: [
      { title: "L.A. Street Names: Colyton Street — Dr. Frederick Preston Howard’s 1886 tract “also included Huber Street (now part of 4th Street) and Carolina Street (now Hewitt Street): his wife was born Caroline Huber”",
        url: "https://lastreetnames.com/street/colyton-street/" }
    ],
    disputed: false,
    note: "Named on the 1886 subdivisions between Alameda and the Santa Fe grounds; the namesake is an inference from the neighbouring Carolina Street, not a record.",
    internalNote: "★ UPGRADED 2026-09-13: this was an inference from the neighbouring Carolina Street and it is now SOURCED. Kines’s Colyton Street entry says outright that Howard’s 1886 tract “also included Huber Street (now part of 4th Street) and Carolina Street (now Hewitt Street): his wife was born Caroline Huber.” Huber and Carolina are a matched pair on one tract, both for the same woman. Found by searching Kines for HEWITT, not for Huber — the entry is filed under a third street, which is worth remembering about that site. NB a second Huber sits nearby in the record: Ozro William Childs’s wife was Emeline Huber. Whether the two Huber families are connected is unexamined and worth an hour. The Bliss Tract sheet is M.R. 12-42 — inbox/MR011-042.pdf is the Goodwin Tract, a different sheet, so 12-42 still needs downloading.",
    possiblySameAs: null,
    aliases: []
  },

  // ---- the 1884 Glassell tract (M.R. 6-138) -------------------------------
  // Andrew Glassell subdivided Lot 7 etc. of Block 39, Hancock Survey No. 1,
  // and put his nephew and law partner's name on a street through it. The rest
  // of that plat's names follow the two below: each was checked against Kines
  // and against the web, and not one has a documented namesake.

  "aztec-avenue": {
    spellings: [{ forms: ["Aztec Avenue"] }],
    namedAfter: "The {{Aztec}} empire — one of a conquest theme Andrew Glassell ran through his 1884 subdivision, alongside Cortez Street for Hernán Cortés and Montezuma Avenue (now Dawson Street) for Moctezuma II",
    namedAfterLink: "https://en.wikipedia.org/wiki/Aztecs",
    categories: ["history"],
    sources: [
      { title: "L.A. Street Names: Cortez Street (“what is now Belmont Avenue was called Aztec Avenue and what is now Dawson Street was called Montezuma Avenue… Glassell was clearly going for a theme here”)",
        url: "https://lastreetnames.com/street/cortez-street/" }
    ],
    disputed: false,
    note: null,
    internalNote: "Kines’s Cortez Street page names the theme and confirms Aztec Avenue = modern Belmont Avenue independently of our alignment, which is a clean check on the AI pass. It attributes Cortez/Aztec/Montezuma to “Glassell’s Subdivision No. 2”, 1884; M.R. 6-138 is Glassell’s subdivision of Lot 7 etc. and draws Aztec, so the two are the same tract family — worth pinning down which sheet is which. Montezuma Avenue = Dawson Street is NOT yet an entity; Dawson was dropped from MR006-138 as polygon overshoot, so it needs its own document. Pizarro Street sits 206 m away and has no Kines page.",
    possiblySameAs: null,
    aliases: []
  },

  "patton-street": {
    spellings: [{ forms: ["Patton Street"] }],
    namedAfter: "{{George Smith Patton (1856–1927)}}, the attorney who developed the street — nephew and law partner of Andrew Glassell, who subdivided the adjoining tract the following year, and father of the WWII general",
    namedAfterLink: "https://en.wikipedia.org/wiki/George_S._Patton_(attorney)",
    categories: ["person","alive"],
    sources: [
      { title: "L.A. Street Names: Patton Street (“This 1883 street was named for its developer, attorney George Smith Patton (1856-1927)”)",
        url: "https://lastreetnames.com/street/patton-street/" },
      { title: "L.A. Street Names: Glassell Street (Glassell’s firm; “his nephew George S. Patton replaced Smith”)",
        url: "https://lastreetnames.com/street/glassell-street/" }
    ],
    disputed: false,
    note: null,
    internalNote: "Kines dates the naming to 1883, a year before M.R. 6-138 was recorded, so the plat draws a street that already had the name — consistent with the document's planned-by default. Not to be confused with Patton Avenue/Place elsewhere in the county.",
    possiblySameAs: null,
    aliases: []
  },


  "council-street": {
    spellings: [{ forms: ["Council Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Namesake untraced. Not covered by Kines (checked 2026-08-30). Part of it survives as modern Council Street; the stretch inside this tract does not. Moved out of names-new.js 2026-09-06: the Kines check recorded above IS the research on this name, and it came up empty, so the entity is no longer a to-do — it is an open question with a recorded answer.",
    possiblySameAs: null, aliases: []
  },

  "court-street": {
    spellings: [{ forms: ["Court Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Namesake untraced. Kines has a Court Street page but it is Monrovia’s (renamed from Bonita Court in 1966 to stop postal confusion) and has nothing to do with this one. Not covered for Los Angeles (checked 2026-08-30). Moved out of names-new.js 2026-09-06: the Kines check recorded above IS the research on this name, and it came up empty, so the entity is no longer a to-do — it is an open question with a recorded answer.",
    possiblySameAs: null, aliases: []
  },

  "diamond-street": {
    spellings: [{ forms: ["Diamond Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Namesake untraced. IDENTITY DECIDED (Kenny, 2026-08-30): one entity covering both the plat’s Diamond Street — modern Beverly Boulevard through this tract — and the modern Diamond Street that survives 869 m east. The two lie on roughly the same east-west line, about 30 m apart, so this reads as one naming that lost its middle rather than two that spell alike. NB handbook/research-leads.md records an earlier pass calling Diamond “unchanged since 1884”; that was name-matching, and the surviving stretch is outside MR006-138’s coverage. Moved out of names-new.js 2026-09-06: the Kines check recorded above IS the research on this name, and it came up empty, so the entity is no longer a to-do — it is an open question with a recorded answer.",
    possiblySameAs: null, aliases: []
  },

  "hobart-street": {
    spellings: [{ forms: ["Hobart Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Namesake untraced. NOT the same entity as Hobart Boulevard in Koreatown: Kines dates that one to 1887 and names it for Hobart Addison Stewart (1868-1915), a Flint, Michigan dairy farmer, on a subdivision by different people. This Hobart Street is three years earlier and a different roadway (modern Lake Shore Terrace). Do not merge on the strength of the spelling. Moved out of names-new.js 2026-09-06: the Kines check recorded above IS the research on this name, and it came up empty, so the entity is no longer a to-do — it is an open question with a recorded answer.",
    possiblySameAs: null, aliases: []
  },

  "home-street": {
    spellings: [{ forms: ["Home Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Namesake untraced. Not covered by Kines (checked 2026-08-30). Modern Rockwood Street, which handbook/research-leads.md records as renamed AND realigned by about 43 m — the date of the realignment is a separate open question. Moved out of names-new.js 2026-09-06: the Kines check recorded above IS the research on this name, and it came up empty, so the entity is no longer a to-do — it is an open question with a recorded answer.",
    possiblySameAs: null, aliases: []
  },

  "lake-avenue": {
    spellings: [{ forms: ["Lake Avenue"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Namesake untraced. Two candidates: Echo Park Lake, the city reservoir this street runs toward, which was already there in 1884; or Lake Vineyard, the ranch of Benjamin D. Wilson, whose daughter Ruth married George S. Patton — whose own street is on this same plat — in the year it was recorded",
    internalNote: "Neither candidate is sourced. Kines’s Lake Avenue page is Pasadena/Altadena’s, named for Lake Vineyard, and is a different street; the coincidence is suggestive but no more. Wanted: a contemporary source. The reservoir reading is the simpler one and should be preferred until something says otherwise. `disputed` flipped from true to false in the move: by the rule stated on `hope`, that flag is for a claim the project takes a side against, not for an open question with two live readings. Moved out of names-new.js 2026-09-06: the Kines check recorded above IS the research on this name, and it came up empty, so the entity is no longer a to-do — it is an open question with a recorded answer.",
    possiblySameAs: null, aliases: []
  },

  "state-colton": {
    spellings: [{ forms: ["State Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Namesake untraced. RENAMED FROM state-street, 2026-08-30: there is another State Street in Boyle Heights, and a bare “state-street” id was a collision waiting to happen. This entity is ONLY the 1884 Glassell-tract State Street that is modern Colton Street. When Boyle Heights is encoded, its State Street must get its own disambiguated entity and must NOT be merged into this one — Kenny is confident they are unrelated namings. Kines has no page for either State Street (checked 2026-09-06). Moved out of names-new.js 2026-09-06: the Kines check recorded above IS the research on this name, and it came up empty, so the entity is no longer a to-do — it is an open question with a recorded answer.",
    possiblySameAs: null, aliases: []
  },

  "waters-street": {
    spellings: [{ forms: ["Waters Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Namesake untraced. Not covered by Kines (checked 2026-08-30). Modern Douglas Street north of Colton; the stretch south of it is gone. Note the nearby “Walters St” (Ord Street, 1886-1890) in research-leads — a different street, and a spelling trap. Moved out of names-new.js 2026-09-06: the Kines check recorded above IS the research on this name, and it came up empty, so the entity is no longer a to-do — it is an open question with a recorded answer.",
    possiblySameAs: null, aliases: []
  },

  "welcome-street": {
    spellings: [{ forms: ["Welcome Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Namesake untraced. Not covered by Kines (checked 2026-08-30). Survives under the same name. Moved out of names-new.js 2026-09-06: the Kines check recorded above IS the research on this name, and it came up empty, so the entity is no longer a to-do — it is an open question with a recorded answer.",
    possiblySameAs: null, aliases: []
  },

  // ---- the Thomas Tract's other names -------------------------------------

  "guadalupe": {
    spellings: [{ forms: ["Guadalupe Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Known from the Johnston and Thomas Tract maps of 1871–1875, in 2nd Street’s position east of Alameda. Ordinance No. 242 of July 19, 1886 changed Guadalupe Street, from Alameda Street to Geary Street, to Davies Street (documents/lah-1886-07-23), and the Oct. 1890 ordinance then changed Davies Street to Second Street (documents/lah-1890-10-28) — Guadalupe to Davies to Second, in four years.",
    internalNote: "SEARCHED 2026-09-13 and NOT FOUND — recorded so nobody repeats it. NOT COVERED BY KINES: ?s=Guadalupe returns only Coffield Avenue in El Monte and Vallejo Street in Lincoln Heights (for Mariano Guadalupe Vallejo), neither this street, and it is absent from his Latino and Hispanic heritage category, which is thorough — so this is a real gap, not a search miss. Also absent from Los Angeles Revisited and the Wikipedia LA County etymology list. ⚠ DO NOT GUESS: in 1870s Los Angeles “Guadalupe” is equally plausible as a Marian dedication or as a given name — it was common for men and women alike among Californios — and nothing found lets us choose.",
    possiblySameAs: null, aliases: []
  },

  "garey": {
    spellings: [{ forms: ["Garey Street"] }],
    namedAfter: "Almost certainly {{Thomas Andrew Garey (1830–1909)}}, citrus nurseryman and co-founder of Pomona — his was the only Garey family in town when the street was named",
    namedAfterLink: "https://www.findagrave.com/memorial/87759308/thomas-andrew-garey",
    categories: ["person","alive"],
    sources: [
      { title: "L.A. Street Names: Garey Street",
        url: "https://lastreetnames.com/street/garey-street/" }
    ],
    disputed: false,
    note: null,
    possiblySameAs: null,
    aliases: []
  },

  "hewitt": {
    spellings: [{ forms: ["Hewitt Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [
      { title: "L.A. Street Names: Colyton Street — “Carolina Street (now Hewitt Street)” on Dr. F. P. Howard’s 1886 tract",
        url: "https://lastreetnames.com/street/colyton-street/" },
      { title: "George Garrigues, Los Angeles street changes — “Carolina St., bet. Palmetto & E. 4th St., is part of S. Hewitt St.”, and likewise Carmona St.",
        url: "https://stevemorse.org/census/changes/LosAngelesChanges2.htm" }
    ],
    disputed: false, note: "Lettered on the Johnston Tract of March 1871 between 1st and 2nd east of Alameda, and still running today. The name later spread south: Carolina Street and Carmona Street, both between Palmetto and East 4th, were absorbed into South Hewitt Street. Nothing found says who or what Hewitt was.",
    internalNote: "SEARCHED 2026-09-13 and the namesake is still NOT FOUND — recorded so the search is not repeated. NOT COVERED BY KINES: no Hewitt Street entry, and ?s=Hewitt returns only Colyton and Huntington, where the name appears incidentally. Also absent from Los Angeles Revisited including its street-naming-origins index, from the Wikipedia LA County etymology list, and from LAPL’s street-name posts. So Kenny’s memory of being stumped here is right, and it is now stumped on the record. ★ WHAT THE SEARCH DID TURN UP is the street Hewitt displaced: Carolina Street, for Caroline Huber, wife of Dr. Frederick Preston Howard — see `huber-st`, its matched pair on the same tract. ⚠ CHRONOLOGY: our sighting is 1871 and the Carolina material is 1886 on a tract further south, consistent only if Hewitt already existed north of 4th in 1871 and the name was later extended over Carolina and Carmona. That makes the Johnston Tract the origin point, and nothing found says who named it there — the tract’s owner and surveyor are the most promising unexplored lead, and the same tract also carries `messer-street` and `rose-street`, both equally blank.", possiblySameAs: null, aliases: []
  },

  // ---- the Figueroa lineage (§3: one entity across three roadways) --------

  // Originating on the west-side street c. 1853–57 (today's Boylston),
  // transferred onto former Pearl in 1897 "being a continuation of that
  // thoroughfare" (ord-4093).
  "figueroa-gov": {
    spellings: [{ forms: ["Figueroa Street"],
                  // prose-attested origin on the original (west) roadway,
                  // c. 1853–1857 — no document row yet
                  from: "1853",
                  source: { title: "L.A. Street Names: Figueroa Street",
                            url: "https://lastreetnames.com/street/figueroa-street/" } }],
    namedAfter: "{{José Figueroa (1792–1835)}}, governor of Alta California 1833–1835",
    namedAfterLink: "https://en.wikipedia.org/wiki/Jos%C3%A9_Figueroa",
    categories: ["person", "governor"],
    sources: [
      { title: "L.A. Street Names: Figueroa Street",
        url: "https://lastreetnames.com/street/figueroa-street/" }
    ],
    disputed: false, note: null, possiblySameAs: null, aliases: []
  },

  "pearl": {
    spellings: [{ forms: ["Pearl Street"] }],
    namedAfter: "No namesake documented in the 1874 council report; in 1897 ex-Mayor J. R. Toberman claimed the naming as his own",
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [
      { title: "Los Angeles Herald, “A Storm of Words” (Toberman's claim), Feb. 19, 1897",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18970219.2.24" }
    ],
    disputed: false, note: null, possiblySameAs: null, aliases: []
  },

  "chapules": {
    spellings: [
      { forms: ["Grasshopper Street","Calle de los Chapules"], from: "1849", until: "1874",
          source: { title: "L.A. Street Names: Figueroa Street",
                    url: "https://lastreetnames.com/street/figueroa-street/" } }
    ],
    namedAfter: "{{The insect}}: grasshoppers crossing this line from the western plains doomed the grape harvest",
    namedAfterLink: "https://en.wikipedia.org/wiki/Grasshopper",
    categories: ["nature"],
    sources: [
      { title: "L.A. Street Names: Figueroa Street",
        url: "https://lastreetnames.com/street/figueroa-street/" }
    ],
    disputed: false,
    note: null,
    internalNote: "The Ord survey letters this street in both languages — “GRASSHOPPER ST.” and “CALLE DE LAS CHAPULES” — which is why `grasshopper` got minted in review before anyone noticed this entity already held the name. Folded in 2026-08-31; the id stays an alias so rows that cited it still resolve (§3: merging is cheap, splitting is not).",
    possiblySameAs: null,
    aliases: ["grasshopper"]
  },

  "boylston": {
    spellings: [{ forms: ["Boylston Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [
      { title: "L.A. Street Names: Boylston Street — O. T. Johnson (1839–1916) suggested the name in 1897 in place of “De La Guerra”",
        url: "https://lastreetnames.com/street/boylston-street/" },
      { title: "Los Angeles Revisited: “The Pulchritude of Pearl Street” — portions “Bellevue to Sixth Streets were re-named Boylston in 1897”, citing Bernice Kimball, Street Names of Los Angeles (1988)",
        url: "https://losangelesrevisited.blogspot.com/2019/01/the-pulchritude-of-pearl-street.html" }
    ],
    disputed: false,
    note: "The name that replaced “De La Guerra” on the old line of Figueroa Street. The Feb. 2, 1897 draft ordinance would have called the street De La Guerra; the council’s Feb. 23 amendments made it Boylston instead — De La Guerra was only ever draft text. The suggestion came from Orson Thomas “O. T.” Johnson (1839–1916), a financier who lived on nearby Orange Street, today’s Wilshire Boulevard.",
    internalNote: "SEARCHED 2026-09-13 on Kenny’s recollection that it was named for Boylston Street in Boston. ⚠ THAT READING IS KINES’S OWN GUESS AND HE FLAGS IT AS ONE: “The why behind all this is obscure”, then “I presume Johnson objected to the street adopting another Spanish nombre and wanted something more ‘American’: Boylston Street was a nationally-known thoroughfare in Boston.” He undercuts it himself in the next breath — Johnson was Ohio-born and made his money in Galesburg, Illinois, with no Boston tie. So the Boston derivation is NOT sourced, namedAfter stays null, and what IS documented is who proposed the name. ★ AND HE IS ALREADY IN THIS FILE: Johnson lived on Orange Street, which is `orange-st-wilshire`, the street that became Wilshire Boulevard in 1924 — so the man who named Boylston lived on the street this project has been tracing all week. Kines dates the commission to January 1897 against our February ordinance dates; probably commission versus council. Bernice Kimball, Street Names of Los Angeles (Bureau of Engineering, 1988) is what Los Angeles Revisited footnotes here, and is the offline source to chase.",
    possiblySameAs: null, aliases: []
  },

  // ---- Central Avenue and its predecessors --------------------------------

  "central-ave": {
    spellings: [{ forms: ["Central Avenue"] }],
    namedAfter: "Central not to Los Angeles but to {{Vernon}}, just south of the city limits when it was platted",
    namedAfterLink: "https://en.wikipedia.org/wiki/Vernon,_California",
    categories: ["descriptive"],
    sources: [
      { title: "L.A. Street Names: Central Avenue",
        url: "https://lastreetnames.com/street/central-avenue/" }
    ],
    disputed: false, note: null, possiblySameAs: null, aliases: []
  },

  "vine-central": {
    spellings: [{ forms: ["Vine Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "A downtown Vine Street between 1st and 2nd near Central Avenue. Vine north of 1st kept its name in the 1897 renaming; that stretch no longer exists.",
    internalNote: "SEARCHED 2026-09-13 on Kenny’s recollection that modern Olvera Street was once part of Vine Street. ★ THE RECOLLECTION IS RIGHT ABOUT OLVERA, AND OLVERA IS A DIFFERENT STREET FROM THIS ONE. The lane beside the Plaza was Calle de las Viñas, rendered in English as both Wine Street and Vine Street, and the council renamed it Olvera Street for Judge Agustín Olvera — Kines says 1873, while Wikipedia, the City of Los Angeles’s own El Pueblo page and LocalWiki all say 1877 by ordinance, three to one for 1877. That street had therefore been Olvera Street for twenty years by 1897 and CANNOT be the Vine Street our 1897 record leaves alone. Ours is the Central Avenue one, which is why the id carries that suffix, and it is a genuine SECOND downtown Vine Street — confirming the two-Vine-Streets warning already in handbook/WANTED.md. No source found documents this second Vine Street; namedAfter stays null. Worth noting only that the Plaza street’s own Spanish name shows how “vine” was being used in this part of town.",
    possiblySameAs: null, aliases: []
  },

  "wolfskill-ave": {
    spellings: [{ forms: ["Wolfskill Avenue"] }],
    namedAfter: "{{William Wolfskill}}'s old citrus ranch, which the street ran through",
    namedAfterLink: "https://en.wikipedia.org/wiki/William_Wolfskill",
    categories: ["person"],
    sources: [
      { title: "L.A. Street Names: Central Avenue",
        url: "https://lastreetnames.com/street/central-avenue/" }
    ],
    disputed: false, note: null, possiblySameAs: null, aliases: []
  },

  // ---- the Wolfskill Orchard Tract, 1887 (M.R. 30-9/13) -------------------
  //
  // Joseph Wolfskill's downtown orchard, subdivided into five sheets. Three
  // naming threads run through it, and they are worth keeping apart: the
  // Southern Pacific brass (Towne, Stanford), a run of women's names (Ruth,
  // Gladys), and what looks like an orchard theme (Ceres). Everything here was
  // researched for the hand-authored streets-data.js; these entities carry
  // that work across, with its hedges intact.

  "towne-ave": {
    spellings: [{ forms: ["Towne Avenue"] }],
    namedAfter: "{{Alban Nelson Towne}} (1829–1895), general manager of the Southern Pacific Railroad",
    namedAfterLink: "https://en.wikipedia.org/wiki/Alban_N._Towne",
    categories: ["person", "alive"],
    sources: [
      { title: "L.A. Street Names: Towne Avenue",
        url: "https://lastreetnames.com/street/towne-avenue-dtla/" }
    ],
    disputed: false,
    note: "Named when the subdividers of Joseph Wolfskill's downtown orchard gave 13 acres " +
      "at 4th and Alameda for a new Southern Pacific station — the Arcade Depot, opened " +
      "1888 — and lettered the railroad's officers onto the surrounding streets. Stanford " +
      "Avenue and Crocker Street come from the same deal.",
    internalNote: "Carried over from streets-data.js. The plat letters this street " +
      "“Towne” outright, so the identification needs no inference.",
    possiblySameAs: null, aliases: []
  },

  // The Stanford NAME, which is on a different roadway now than it was in
  // 1887: it originated on modern Crocker Street and moved a block east onto
  // the former Ruth Avenue after Feb. 1897. One lineage, one namesake, two
  // grounds — a transfer, exactly like Figueroa's (§3).
  "stanford-ave": {
    spellings: [{ forms: ["Stanford Avenue"] }],
    namedAfter: "{{Leland Stanford}} (1824–1893), president of the Southern Pacific Railroad and governor of California 1862–1863",
    namedAfterLink: "https://en.wikipedia.org/wiki/Leland_Stanford",
    categories: ["person","governor","alive"],
    sources: [
      { title: "L.A. Street Names: Towne Avenue (recounts the Crocker/Stanford street swap)",
        url: "https://lastreetnames.com/street/towne-avenue-dtla/" }
    ],
    disputed: false,
    note: "Part of the same 1887 Southern Pacific package as Towne Avenue. The name did not stay put: the street platted “Stanford” in 1887 is modern Crocker Street, and the Stanford name moved a block east onto the former Ruth Avenue — modern Stanford Avenue — some time after Feb. 1897.",
    internalNote: "ROWS ON THIS ENTITY SIT ON MODERN CROCKER STREET, and that is correct: mr030-009 letters “Stanford Ave” there. The transfer onto modern Stanford Avenue is not yet a document row; when the swap ordinance is found it wants a `change` row. The exact year is unresearched — streets-data.js only establishes that Ruth was still Ruth in Feb. 1897.",
    possiblySameAs: null,
    aliases: []
  },

  // The other half of the swap. Crocker is the name that arrived on the 1887
  // "Stanford Avenue" when the Stanford name left it — so this entity and
  // stanford-ave describe the same ground at different times, and neither is
  // the other's continuation: they are two namings, both for railroad men.
  "crocker-street": {
    spellings: [{ forms: ["Crocker Street"] }],
    namedAfter: "{{Charles Crocker}} (1822–1888), Southern Pacific executive and one of the “Big Four” financiers of the Central Pacific",
    namedAfterLink: "https://en.wikipedia.org/wiki/Charles_Crocker",
    categories: ["person","alive"],
    sources: [
      { title: "L.A. Street Names: Towne Avenue (recounts the Crocker/Stanford street swap)",
        url: "https://lastreetnames.com/street/towne-avenue-dtla/" }
    ],
    disputed: false,
    note: "The third of the Southern Pacific names on Joseph Wolfskill's subdivided orchard, after Towne and Stanford — though this one arrived later than the other two, when the street platted “Stanford Avenue” in 1887 gave that name up and took Crocker's instead.",
    internalNote: "Added 2026-08-31 to replace the generator's auto-stub: the Stanford transfer is only half a story without it. The renaming year is unresearched; streets-data.js establishes only that it is after Feb. 1897, when Ruth was still Ruth. No document row attests Crocker yet — the entity exists so the modern name on that ground is not an “unresearched” placeholder.",
    possiblySameAs: null,
    aliases: []
  },

  "ruth-ave": {
    spellings: [{ forms: ["Ruth Avenue"] }],
    namedAfter: "Probably {{Ruth R. Wolfskill}} (1881–1968), daughter of Joseph William Wolfskill, on whose orchard the street was laid out — she was five when it was surveyed",
    namedAfterLink: "https://www.findagrave.com/memorial/151360846/ruth_r-magee",
    categories: ["person", "alive", "unknown"],
    sources: [
      { title: "Find a Grave: Ruth R. Wolfskill Magee (1881–1968), Calvary Cemetery, Wolfskill plot — b. 23 Nov. 1881, m. Louis Alfred Magee 1925",
        url: "https://www.findagrave.com/memorial/151360846/ruth_r-magee" },
      { title: "Find a Grave: Joseph William Wolfskill (1843–1928) — the family plot and the children",
        url: "https://www.findagrave.com/memorial/15767623" }
    ],
    disputed: false,
    note: "Laid out through Joseph Wolfskill’s orchard as it was cut into building lots, surveyed July–August 1887 and recorded Jan. 11, 1888. Joseph Wolfskill had a daughter Ruth, born Nov. 23, 1881, who was five when the survey was made — the plat sets Ruth beside Gladys, and the Sabichi tract to the south carries Agatha Street for a first cousin. No source states the naming. The street was still Ruth Avenue in Feb. 1897, when the citywide renaming commission proposed changing it and the council committee put the name back; it took the Stanford name later.",
    internalNote: "★★ A PERSON AT LAST, 2026-09-13/14 — the first run of handbook/FAMILY-NAMES.md. Ruth R. Wolfskill (23 Nov. 1881 – 23 Mar. 1968), seventh of eleven or more children of Joseph William Wolfskill (1843–1928) and Elena de Pedrorena, buried in the Wolfskill plot, Section F, Calvary Cemetery. Age five at the survey, six at recording. GRADE B on the file’s own scale: right name, right family, alive before the plat, on her father’s own land, with a cousin-precedent nine years later (Agatha). Hence “Probably” and `unknown` retained. ⚠ TWO REAL WEAKNESSES, both worth carrying: (1) THE EVIDENCE IS FIND A GRAVE, contributor-submitted rather than a record — internally cross-consistent across four memorials in one physical plot, but possibly one upstream compiler. The census check was NOT completed (FamilySearch wanted a login). Ruth was born 1881 so she is absent from the 1880 census; go straight to 1900, Joseph Wolfskill household, Los Angeles, where Elena’s “children born / children living” counts will also test for a child who died young. (2) THE FAMILY MAY NOT HAVE NAMED THE STREETS — see the Land Bureau note on `gladys`. Ruth was a middling-common name (rank ~#84 in 1881), so a bare name match would be weak; what carries this is the landowner link, not the name.",
    possiblySameAs: null,
    aliases: []
  },

  "gladys-ave": {
    spellings: [{ forms: ["Gladys Avenue"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["person"],
    sources: [
      { title: "Recorded map: Wolfskill Orchard Tract, M.R. 30-9 to 30-13, surveyed by J. H. Dockweiler July–August 1887, recorded Jan. 11, 1888 “at request of Los Angeles Land Bureau”",
        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf" },
      { title: "Los Angeles Daily Herald, July 31 – Aug. 8, 1887 — “THE WOLFSKILL ORCHARD TRACT, NOW OFFERED AT PRIVATE SALE”; “Los Angeles Land Bureau, a Corporation, No. 20 West First Street”, “GEORGE W. FRINK, President”, auctioneers Easton, Eldridge & Co.",
        url: "https://www.loc.gov/resource/sn85042460/1887-07-31/ed-1/?sp=3" },
      { title: "Social Security Administration, popular names of the 1880s — Gladys, decade rank #151",
        url: "https://www.ssa.gov/oact/babynames/decades/names1880s.html" }
    ],
    disputed: false,
    note: "Laid out with Ruth Avenue through Joseph Wolfskill’s orchard in 1887. The two were long read together as Wolfskill daughters, and Ruth turns out to be one — but no Gladys has ever been documented in the family. The street runs through the heart of Skid Row today; Gladys Park sits at 6th and Gladys.",
    internalNote: "★★ THE FAMILY READING IS RETIRED, 2026-09-13/14, on the first run of handbook/FAMILY-NAMES.md. Joseph William Wolfskill’s eleven recorded children are Francisca Magdalena, José Ygnacio, William Frederick, Innocent Marie, Elena Stanislaus, David Godfrey, RUTH, John C., Grace, Martin Aloysius and Louis F., plus an infant Christian Reid known only from the press. NO GLADYS — and no Gladys Wolfskill anywhere on the open web. Grace (b. 31 Dec. 1884) is the only phonetic neighbour and her memorial gives no alternate name. The only window an undocumented child could hide in is 1885–88, and there is no positive evidence for one. ★ AND THE RARITY ARGUMENT CUTS THE OTHER WAY, which is the interesting part. About FORTY girls in the whole United States were named Gladys in 1881 (SSA; decade rank #151, against Ruth at #66). In 1887 Gladys was an exotic Welsh literary import, not a generic pretty name — so Gladys Avenue is MORE likely to honour a real specific person, not less. She is simply not a Wolfskill. ★ WHERE TO LOOK NEXT — THE DEVELOPER SIDE. Phase 0 of the playbook turned up what nobody had read: the recorder’s certificate on M.R. 30-13 says the map was recorded “at request of LOS ANGELES LAND BUREAU”. That firm styled itself “a Corporation” at No. 20 West First Street; its president was GEORGE W. FRINK; its auctioneers were EASTON, ELDRIDGE & CO. It also handled the Governor Stoneman Tract in Alhambra (Apr. 1887) and a 168-lot Vernon District sale (Aug. 1887). Frink’s household is untraced — no biography, no Find a Grave, no census reached — and that is the next search: a Gladys among the Frink or Easton-Eldridge families. ⚠ Who actually named the streets is unsettled. The Bureau’s own advertising says the orchard was “in the actual occupancy and Possession of one family for over Fifty Years”, present tense, and its Vernon ad says “by Order of the Owners” — so it reads as promoter and selling agent with the Wolfskills retaining title. The deed record would settle it and is not online.",
    possiblySameAs: null,
    aliases: []
  },

  "ceres-ave": {
    spellings: [{ forms: ["Ceres Avenue"] }],
    namedAfter: "{{Ceres}}, the Roman goddess of agriculture and the harvest",
    namedAfterLink: "https://en.wikipedia.org/wiki/Ceres_(mythology)",
    categories: ["mythological"],
    sources: [],
    disputed: false,
    note: "This street was laid through Joseph Wolfskill's orchard as it was being cut into building lots in 1887. No source names the goddess or anyone called Ceres — but a harvest goddess on a subdivided orchard reads as a choice rather than a coincidence.",
    internalNote: "Carried over from streets-data.js, whose note said the same thing. Re-searched 2026-08-31 (web + Kines): still nothing. Treat as settled-unknown rather than an open lead — the note is the answer the project can give. ★ 2026-09-14: the tract’s naming is now known to be MIXED, which supports the harvest-goddess reading rather than undermining it. On these five sheets Ruth is the owner’s daughter (`ruth-ave`), Poplar is a tree, Gladys is nobody in the family (`gladys-ave`), and Omar is untraced — so a classical name chosen to suit an orchard sits naturally among them. Still nothing states it.",
    possiblySameAs: null,
    aliases: []
  },

  "omar-ave": {
    spellings: [{ forms: ["Omar Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Platted with the rest of the Wolfskill Orchard Tract in 1887 and apparently never " +
      "renamed — only the generic drifted, from the plat's “Omar Ave” to today's " +
      "Omar Street. No source names an Omar.",
    internalNote: "Carried over from streets-data.js. NavigateLA still lists the modern street as “Omar Ave” while OSM has Omar Street, so the Ave/Street difference is a wobble in the records rather than a documented respelling — ONE spelling period here on purpose, using OSM’s form. Identified through 312 Omar St. ★ CHECKED AGAINST THE FAMILY, 2026-09-13/14: there is NO Omar among Joseph William Wolfskill’s eleven recorded children, so the “relative of the subdivider” reading that covers Ruth does not extend here. An agent’s unsourced suggestion, recorded as a lead and not adopted: Omar Khayyám, whose Rubaiyat in FitzGerald’s translation was a defining Anglo-American literary fashion of exactly these decades. Nothing supports it. Note the tract’s naming is plainly MIXED — Ceres is a harvest goddess on an orchard, Poplar is a tree, Ruth is the owner’s daughter — so a literary name among them would not be out of place.",
    possiblySameAs: null, aliases: []
  },

  "san-pedro": {
    spellings: [{ forms: ["San Pedro Street"] }],
    namedAfter: "The port town of {{San Pedro}}, which the street ran toward",
    namedAfterLink: "https://en.wikipedia.org/wiki/San_Pedro,_Los_Angeles",
    categories: ["place", "destination"],
    sources: [
      { title: "L.A. Street Names: San Pedro Street",
        url: "https://lastreetnames.com/street/san-pedro-street/" },
      { title: "Wikipedia: San Pedro Street",
        url: "https://en.wikipedia.org/wiki/San_Pedro_Street" }
    ],
    disputed: false,
    note: "Much older than the tract that letters it here; it no longer reaches San Pedro, " +
      "merging into Avalon Boulevard, and its northernmost block became Judge John Aiso Street " +
      "in 1997.",
    internalNote: "Carried over from streets-data.js. The Wolfskill plat letters it " +
      "“San Pedro Ave”; that is the plat's generic, not a spelling period of the " +
      "name — hence one period, and the ink lives in the row's asWritten (§5.1). " +
      "Id renamed from san-pedro-ave, 2026-08-31, for the same reason.",
    possiblySameAs: null, aliases: ["san-pedro-ave"]
  },

  // ---- the Bliss Tract's other name ---------------------------------------

  "poplar-st": {
    spellings: [{ forms: ["Poplar Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown","nature"],
    sources: [
      { title: "Recorded map: F.P. Howard & Co.'s Subdivision of the Bliss Tract, M.R. 12-42 (subdivided Aug. 1886 by Geo. E. Knox) — shows “Poplar Street” at 1100 E 5th St's location",
        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR012/MR012-042.pdf" }
    ],
    disputed: false,
    note: "Named on Dr. Frederick Preston Howard's Bliss Tract in 1886, one block south of the Huber Street that runs through the same subdivision. No namesake is documented; a poplar would be in keeping with the orchard ground it was cut through, but nothing says so.",
    internalNote: "★ 2026-09-14: on the Wolfskill Orchard Tract (surveyed July–Aug. 1887, recorded Jan. 11, 1888), whose street names are now known to be MIXED in kind — Ruth is the owner’s daughter (`ruth-ave`), Ceres is a harvest goddess over an orchard, Gladys is nobody in the Wolfskill family (`gladys-ave`), Omar is untraced. A tree name among them needs no further explanation, and nothing documents one. The map was filed “at request of Los Angeles Land Bureau”, so the namer may be that firm rather than the family — see documents/mr030-009-p5.",
    possiblySameAs: null,
    aliases: []
  },

  // ---- Crown Hill, and the 1909 "Crownwood" sheet (M.B. 15-166) -----------
  //
  // Witmer's own subdivision, so the sheet is evidence about the family that
  // named half the streets on it. Kines covers two of these four; the other
  // two are not covered anywhere I can find, and say so.

  "witmer-street": {
    spellings: [{ forms: ["Witmer Street"] }],
    namedAfter: "{{Henry Clayton Witmer}} (1856\u20131909), banker and real-estate developer, whose family's land was Crown Hill",
    namedAfterLink: "https://lastreetnames.com/street/witmer-street/",
    categories: ["person", "alive"],
    sources: [
      { title: "Recorded map: “Crownwood” (Witmer’s Subdivision of parts of Lots 2 and 7, Block 38, Hancock Survey; surveyed Nov. 1909 by Chas. Forman Jr.), M.B. 15-166",
        url: "https://pw.lacounty.gov/smpm/landrecords/pdf/TR0015-166a.pdf" }
    ],
    disputed: false,
    note: "Witmer reached Los Angeles in November 1884 and had founded the Los Angeles Improvement Company two months later; the California Bank followed in 1887, with Moses L. Wicks and a son of Henry Mayo Newhall among his partners. Of everything the Witmers owned they were most associated with their 650 acres on Crown Hill, which this street climbs. Named January 1886.",
    internalNote: "As strong as an identification gets: the plat itself is " +
      "\u201cWitmer\u2019s Subdivision\u201d, so the sheet and the namesake attest each other. " +
      "The 1909 sheet also explains modern Witmer\u2019s odd OSM geometry \u2014 the two " +
      "disconnected ways are a real jog the plat draws (research-leads.md). " +
      "Wicks is the Wicks of the Mills and Wicks Extension (M.R. 13-87) already in " +
      "the corpus, and of Lucas Avenue\u2019s tract: worth a cross-link when the map has one.",
    possiblySameAs: null, aliases: []
  },

  "lucas-avenue": {
    spellings: [{ forms: ["Lucas Avenue"] }],
    namedAfter: "{{John Henry \u201cJ.H.\u201d Lucas}} (1836\u20131924), attorney, who was selling the tract it was named on",
    namedAfterLink: "https://lastreetnames.com/street/lucas-avenue/",
    categories: ["person", "alive"],
    sources: [
      { title: "Recorded map: “Crownwood” (Witmer’s Subdivision of parts of Lots 2 and 7, Block 38, Hancock Survey; surveyed Nov. 1909 by Chas. Forman Jr.), M.B. 15-166",
        url: "https://pw.lacounty.gov/smpm/landrecords/pdf/TR0015-166a.pdf" }
    ],
    disputed: false,
    note: "Named in 1884, on a tract Lucas was selling with Edward Bentley and Moye Wicks. Lucas had been in Tombstone three years earlier and served as both judge and witness at the hearings after the gunfight at the O.K. Corral.",
    internalNote: "Kines hedges with \u201csurely honors\u201d rather than a record; the " +
      "argument is that the street was named on his own tract. Moye Wicks is Moses L. " +
      "Wicks \u2014 Witmer\u2019s California Bank partner, and the Wicks of M.R. 13-87. " +
      "The 1909 Crownwood sheet letters this street but does not date it; the 1884 " +
      "date is Kines\u2019s.",
    possiblySameAs: null, aliases: []
  },

  "crown-hill-ave": {
    spellings: [{ forms: ["Crown Hill Avenue"] }],
    namedAfter: "Not documented, but plainly {{Crown Hill}} itself — the rise the street climbs, and the Witmer family's 650 acres",
    namedAfterLink: "https://lastreetnames.com/street/witmer-street/",
    categories: ["place"],
    sources: [
      { title: "Recorded map: “Crownwood” (Witmer’s Subdivision of parts of Lots 2 and 7, Block 38, Hancock Survey; surveyed Nov. 1909 by Chas. Forman Jr.), M.B. 15-166",
        url: "https://pw.lacounty.gov/smpm/landrecords/pdf/TR0015-166a.pdf" }
    ],
    disputed: false,
    note: null,
    internalNote: "NOT COVERED BY KINES (checked 2026-08-31; the site has no Crown Hill Avenue page and Crown Hill is not one of its neighbourhoods). The namesake is an inference from the place name — safe, but an inference. NOTE THE EXTENT: the 1909 sheet letters CROWN HILL AVE. along ground that is modern 3rd Street as well as modern Crown Hill Avenue, so this entity’s rows sit on two modern streets and the name has since shrunk to one of them.",
    possiblySameAs: null,
    aliases: []
  },

  "columbia-avenue": {
    spellings: [{ forms: ["Columbia Avenue"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [
      { title: "Recorded map: “Crownwood” (Witmer’s Subdivision of parts of Lots 2 and 7, Block 38, Hancock Survey; surveyed Nov. 1909 by Chas. Forman Jr.), M.B. 15-166",
        url: "https://pw.lacounty.gov/smpm/landrecords/pdf/TR0015-166a.pdf" }
    ],
    disputed: false,
    note: "Namesake untraced. The 1909 Crownwood sheet letters it, which is the earliest evidence the project holds for the street, but nothing found says who or what Columbia was meant to be.",
    internalNote: "NOT COVERED BY KINES (checked 2026-08-31 \u2014 no page, and not in the " +
      "Westlake list); a web search turns up nothing for this street specifically. " +
      "research-leads.md had already banked this tract as the future source for a " +
      "Columbia Avenue entry, which is now this. Candidates nobody has evidence for: " +
      "Columbia as the personification of America, Columbia College, or a transferred " +
      "eastern place name. Do not write any of them down as the answer.",
    possiblySameAs: null, aliases: []
  },

  // ---- the Ord/Hutton survey, Aug. 1849 (M.R. 53-66/73) ------------------
  //
  // The survey letters most of its streets twice, in Spanish and English, so
  // every row here carries both forms and each entity carries the English
  // one. Nearly all of this was already worked out in streets-data.js; what
  // is new is that it now hangs off the document that attests it.

  "eighth-street": {
    spellings: [{ forms: ["8th Street"] }],
    namedAfter: "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
    namedAfterLink: null,
    categories: ["number"],
    sources: [
      { title: "L.A. Street Names: 1st Street (on the numbering system)",
        url: "https://lastreetnames.com/street/0001st-street/" }
    ],
    disputed: false,
    note: null,
    internalNote: "One entity per number across the downtown grid, as with 1st–7th. The Ord survey letters it “CALLE 8a”; the English ordinal is the form everything since has used.",
    possiblySameAs: null, aliases: []
  },

  "ninth-street": {
    spellings: [{ forms: ["9th Street"] }],
    namedAfter: "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
    namedAfterLink: null,
    categories: ["number"],
    sources: [
      { title: "L.A. Street Names: 1st Street (on the numbering system)",
        url: "https://lastreetnames.com/street/0001st-street/" }
    ],
    disputed: false,
    note: null,
    internalNote: "One entity per number across the downtown grid, as with 1st–7th. The Ord survey letters it “CALLE 9a”; the English ordinal is the form everything since has used.",
    possiblySameAs: null, aliases: []
  },

  "main-street-dtla": {
    spellings: [{ forms: ["Main Street","Calle Principal"] }],
    namedAfter: "Its standing as the pueblo’s principal street",
    namedAfterLink: null,
    categories: ["descriptive"],
    sources: [
      { title: "L.A. Street Names: Main Street",
        url: "https://lastreetnames.com/street/main-street/" },
      { title: "Wikipedia: Main Street (Los Angeles)",
        url: "https://en.wikipedia.org/wiki/Main_Street_(Los_Angeles)" }
    ],
    disputed: false,
    note: "Older than the survey: the road was the Calle Real, the standard Spanish colonial name for a settlement’s principal road, before it was the Calle Principal. The Ord/Hutton survey fixed the anglicization, which is first found in print in May 1851.",
    internalNote: "Disambiguated at minting because Main Street is a name every town has. streets-data.js records the Calle Real and Calle Principal periods as undated; they are not entered as spelling periods here because no document in the corpus attests them.",
    possiblySameAs: null,
    aliases: []
  },

  "hill-street-downtown": {
    spellings: [{ forms: ["Hill Street","Calle Loma"] }],
    namedAfter: "{{Bunker Hill}} — the knoll the street runs along, though the hill was not formally named until 1873, later than the street",
    namedAfterLink: "https://en.wikipedia.org/wiki/Bunker_Hill_(Los_Angeles)",
    categories: ["place"],
    sources: [
      { title: "L.A. Street Names: Hill Street",
        url: "https://lastreetnames.com/street/hill-street/" }
    ],
    disputed: false,
    note: null,
    internalNote: "Disambiguated at minting: the downtown Hill Street name was EXTENDED north onto Castelar Street in 1960, so modern N. Hill Street in Chinatown is this lineage arriving, not a second Hill Street — but the 1849 street under it is `bull`, and the two must not be merged. The survey attests the name only within the 1849 grid; its southern extent is not pinned down.",
    possiblySameAs: null,
    aliases: []
  },

  "bull": {
    spellings: [{ forms: ["Bull Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["nature"],
    sources: [
      { title: "L.A. Street Names: Hill Street (on Calle del Toro / Castelar / N. Hill)",
        url: "https://lastreetnames.com/street/hill-street/" },
      { title: "Los Angeles Herald, “Common Council”, Feb. 14, 1874 (the petition renaming Bull St. to Castelar)",
        url: "http://cdnc.ucr.edu/cgi-bin/cdnc?a=d&d=LAH18740214.2.12" }
    ],
    disputed: false,
    note: "No namesake is documented; bullfights were reportedly held in the area until 1872.",
    internalNote: "NOT the same entity as hill-street-downtown, though modern N. Hill Street carries that name today: the downtown Hill name was extended north over this street in 1960. Castelar wants its own entity when a document attests it.",
    possiblySameAs: null,
    aliases: []
  },

  "fort-street": {
    spellings: [{ forms: ["Fort Street","Calle Fortin"] }],
    namedAfter: "{{Fort Moore}}, built on the hill above it after the Mexican–American War",
    namedAfterLink: "https://en.wikipedia.org/wiki/Fort_Moore",
    categories: ["place"],
    sources: [
      { title: "L.A. Street Names: Broadway (on Fort Street)",
        url: "https://lastreetnames.com/street/broadway/" }
    ],
    disputed: false,
    note: "Lettered “Calle Fortin” on the 1849 survey.",
    internalNote: "Carried over from streets-data.js when the Ord survey was encoded, 2026-08-31. The survey letters this street in both languages, so the row’s asWritten holds both forms and this entity holds the English one.",
    possiblySameAs: null,
    aliases: []
  },

  "eternity": {
    spellings: [{ forms: ["Eternity Street","Calle de la Eternidad"] }],
    namedAfter: "The concept of the eternity after death — it led to Calvary Cemetery, established in 1844. Though an 1895 account claims instead that it was so named because it had neither beginning nor end.",
    namedAfterLink: null,
    categories: ["aspiration","mythological"],
    sources: [
      { title: "L.A. Street Names: Broadway (on Calle Eternidad)",
        url: "https://lastreetnames.com/street/broadway/" },
      { title: "Homestead Museum: Calle Eternidad in the 1880s",
        url: "https://homesteadmuseum.blog/2016/07/18/museum-director-musings-through-the-viewfinder-on-calle-eternidad-1880s/" }
    ],
    disputed: false,
    note: "Renamed Buena Vista in 1888, and folded into North Broadway in November 1909.",
    internalNote: "Carried over from streets-data.js when the Ord survey was encoded, 2026-08-31. The survey letters this street in both languages, so the row’s asWritten holds both forms and this entity holds the English one.",
    possiblySameAs: null,
    aliases: []
  },

  "high-street-chinatown": {
    spellings: [{ forms: ["High Street","Calle Alta"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [
      { title: "L.A. Street Names: Ord Street (on Calle Alta / Walters / Ord)",
        url: "https://lastreetnames.com/street/ord-street/" }
    ],
    disputed: false,
    note: "It became Walters Street in 1886, for a resident named George Walters, and Ord Street in 1890 — for the surveyor who had declined to name anything after himself in 1849.",
    internalNote: "Disambiguated at minting. Note the spelling trap next door: `waters-street` is a DIFFERENT street (modern Douglas Street, from M.R. 6-138), and Walters Street here is a third name again.",
    possiblySameAs: null,
    aliases: []
  },

  "hornet": {
    spellings: [{ forms: ["Hornet Street","Calle de las Avispas"] }],
    namedAfter: "{{The insect}} — insects were a common naming source in the young pueblo, as with the Calle de los Chapules that became Figueroa",
    namedAfterLink: "https://en.wikipedia.org/wiki/Wasp",
    categories: ["nature"],
    sources: [
      { title: "L.A. Street Names: Yale Street",
        url: "https://lastreetnames.com/street/yale-street/" }
    ],
    disputed: false,
    note: "Lettered “Calle de las Avispas” on the 1849 survey — literally Wasp Street, though the English half of the label says Hornet.",
    internalNote: "The English and Spanish halves of this label do not translate each other: avispa is a wasp, not a hornet. That is on the sheet, not a transcription slip, and both forms belong in the row’s asWritten.",
    possiblySameAs: null,
    aliases: []
  },

  "virgin": {
    spellings: [{ forms: ["Virgin Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [
      { title: "L.A. Street Names: Alpine Street",
        url: "https://lastreetnames.com/street/alpine-street/" }
    ],
    disputed: false,
    note: "Lettered “Calle de las Vírgenes” on the 1849 survey, which gives no explanation — bachelorettes, nuns and the Virgin Mary have all been suggested and none is documented.",
    internalNote: "Carried over from streets-data.js when the Ord survey was encoded, 2026-08-31. The survey letters this street in both languages, so the row’s asWritten holds both forms and this entity holds the English one.",
    possiblySameAs: null, aliases: []
  },

  "charity": {
    spellings: [{ forms: ["Charity Street"] }],
    namedAfter: "The virtue",
    namedAfterLink: null,
    categories: ["aspiration"],
    sources: [
      { title: "L.A. Street Names: Grand Avenue",
        url: "https://lastreetnames.com/street/grand-avenue/" },
      { title: "Wikipedia: Grand Avenue (Los Angeles)",
        url: "https://en.wikipedia.org/wiki/Grand_Avenue_(Los_Angeles)" }
    ],
    disputed: false,
    note: "Lettered “Calle de Caridad” on the 1849 survey, and opened in 1869. Residents petitioned to be rid of it, tired of jokes about living on charity; the council voted on May 10, 1886 and the change to Grand Avenue was official on Feb. 15, 1887. They had first asked for “Pacific Avenue”, which was refused because a Pacific Street already existed — so Grand was a second choice, picked for sounding well rather than for meaning anything.",
    internalNote: "streets-data.js also records Calle de Caridad as an unverified early name for SPRING Street. If that is ever confirmed it is a second entity that spells alike, not this one.",
    possiblySameAs: null, aliases: []
  },

  "spring": {
    spellings: [{ forms: ["Spring Street"] }],
    namedAfter: "Possibly {{Trinidad Ortega}} (1832–1903), who was nicknamed “Primavera”",
    namedAfterLink: null,
    categories: ["person","unknown","alive"],
    sources: [
      { title: "L.A. Street Names: Spring Street",
        url: "https://lastreetnames.com/street/spring-street/" },
      { title: "Wikipedia: Spring Street (Los Angeles)",
        url: "https://en.wikipedia.org/wiki/Spring_Street_(Los_Angeles)" }
    ],
    disputed: false,
    note: "Lettered “Calle Primavera” on the 1849 survey. The nickname story is the usual explanation and is not documented; the season is the plainer reading. Two earlier names are reported for this street — Calle Cuidado (“Caution”) and Calle de Caridad (“Charity”) — but neither is verified.",
    internalNote: "namedAfter is hedged on purpose: Kines gives the Ortega story without a record. Category keeps `unknown` alongside `person` so the map does not present a guess as an answer.",
    possiblySameAs: null,
    aliases: []
  },

  "college": {
    spellings: [{ forms: ["College Street"] }],
    namedAfter: "Descriptive — a colegio was to be built here",
    namedAfterLink: null,
    categories: ["descriptive"],
    sources: [
      { title: "L.A. Street Names: College Street",
        url: "https://lastreetnames.com/street/college-street/" }
    ],
    disputed: false,
    note: "A church request in June 1849 for a colegio — a secondary school — on this ground prompted Ord and Hutton to letter it “Calle del Colegio” a month later. The school was never built; the street kept the name.",
    internalNote: "Carried over from streets-data.js when the Ord survey was encoded, 2026-08-31. The survey letters this street in both languages, so the row’s asWritten holds both forms and this entity holds the English one.",
    possiblySameAs: null, aliases: []
  },

  "flower": {
    spellings: [{ forms: ["Flower Street","Calle de las Flores"] }],
    namedAfter: "Supposedly the blossom-covered hills behind it",
    namedAfterLink: null,
    categories: ["nature"],
    sources: [
      { title: "L.A. Street Names: Flower Street",
        url: "https://lastreetnames.com/street/flower-street/" }
    ],
    disputed: false,
    note: null,
    internalNote: "Carried over from streets-data.js when the Ord survey was encoded, 2026-08-31. The survey letters this street in both languages, so the row’s asWritten holds both forms and this entity holds the English one.",
    possiblySameAs: null,
    aliases: []
  },

  "olive": {
    spellings: [{ forms: ["Olive Street"] }],
    namedAfter: "{{The olive}} — though no particular tree or grove here is documented",
    namedAfterLink: "https://en.wikipedia.org/wiki/Olive",
    categories: ["nature"],
    sources: [
      { title: "L.A. Street Names: Olive Street",
        url: "https://lastreetnames.com/street/olive-street/" }
    ],
    disputed: false,
    note: null,
    internalNote: "Carried over from streets-data.js when the Ord survey was encoded, 2026-08-31. The survey letters this street in both languages, so the row’s asWritten holds both forms and this entity holds the English one.",
    possiblySameAs: null, aliases: []
  },

  "hope": {
    spellings: [{ forms: ["Hope Street"] }],
    namedAfter: "The virtue — or possibly sheriff and state senator {{Dr. Alexander W. Hope}} (c. 1820–1856), which the sources do not settle",
    namedAfterLink: "https://en.wikipedia.org/wiki/Alexander_W._Hope",
    categories: ["aspiration","person","unknown"],
    sources: [
      { title: "L.A. Street Names: Hope Street",
        url: "https://lastreetnames.com/street/hope-street/" }
    ],
    disputed: true,
    note: "Named either for the virtue, alongside Charity one block over, or for Dr. Alexander W. Hope. The virtue reading is supported by the company it keeps on the survey; nothing settles it.",
    internalNote: "Genuinely contested rather than merely unresearched, so both readings are in namedAfter and `unknown` stays in the categories. Not marked `disputed`: that flag is for a claim the project takes a side against, not for an open question.",
    possiblySameAs: null,
    aliases: []
  },

  "adobe": {
    spellings: [{ forms: ["Adobe Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Lettered “Calle de las Adobes” on the 1849 survey and still Adobe Street today. The obvious reading is the adobe houses along it, but no source says so.",
    internalNote: "NOT in streets-data.js at all — the old file has no Adobe Street entry, so there was nothing to carry over and nothing found since. Kines has no page (checked 2026-08-31).",
    possiblySameAs: null, aliases: []
  },

  "short-street-chavez": {
    spellings: [{ forms: ["Short Street", "C Corta"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown","descriptive"],
    sources: [],
    disputed: false,
    note: "Lettered on the 1849 survey along ground that roughly follows one block of what is now Cesar E. Chavez Avenue. Descriptive, presumably, but nothing documents it.",
    internalNote: "✓ SECOND FORM CORRECTED 2026-09-13 (Kenny). It read “Calle Alta”, which is High Street’s Spanish name — almost certainly picked up from `high-street-chinatown`, lettered on the same 1849 sheet. Replaced with what this street is actually lettered: C CORTA. Left as the abbreviation the survey uses rather than expanded to “Calle Corta”, since the expansion is not on the sheet. The Chavez entry starts at Macy Street. Disambiguated at minting because Short Street is a name that recurs.",
    possiblySameAs: null,
    aliases: []
  },

  // ---- the Cameron Tract (1885), the Goodwin Tract (1886), and others -----
  //
  // Two boom-era subdivisions east and south of downtown: one lettered with
  // its owner's Virginia family, the other with trees. Most of this was
  // already worked out in streets-data.js.

  "cameron-lane": {
    spellings: [{ forms: ["Cameron Lane"] }],
    namedAfter: "{{Cameron Erskine Thom}} (1825–1915), who owned and subdivided the tract — district attorney, state senator, Confederate captain, and mayor of Los Angeles 1882–1884",
    namedAfterLink: "https://en.wikipedia.org/wiki/Cameron_E._Thom",
    categories: ["person", "alive"],
    sources: [
      { title: "Los Angeles Revisited: The Antebellum Past at Cameron Lane in DTLA",
        url: "https://losangelesrevisited.blogspot.com/2020/07/the-antebellum-past-at-cameron-lane-in.html" }
    ],
    disputed: false,
    note: "Thom bought the ground near today's Convention Center in 1855 for $153 and subdivided it as the land boom got going thirty years later, lettering his own family across it: Cameron for himself, Alexander for his grandfather, Catesby and Pembroke for names his brothers and children carried. He had left Los Angeles in 1862 to fight for the Confederacy, was wounded at Gettysburg, came back to serve as district attorney and then as mayor. His family had held slaves in Virginia.",
    internalNote: "The naming is as well attested as these get: the tract is his and the lanes are his relatives. Pembroke Lane is on the same plat and survives; it has no entity yet because no row cites it.",
    possiblySameAs: null, aliases: []
  },

  "alexander-lane": {
    spellings: [{ forms: ["Alexander Lane"] }],
    namedAfter: "{{Alexander Thom}} (c. 1698–1784), Cameron Thom's paternal grandfather, a Clan Cameron Highlander who fled to the American colonies in 1746",
    namedAfterLink: "https://losangelesrevisited.blogspot.com/2020/07/the-antebellum-past-at-cameron-lane-in.html",
    categories: ["person"],
    sources: [],
    disputed: false,
    note: "The oldest name on the tract, and the one that explains the rest: it is Clan Cameron of Lochiel that Cameron Thom's own given name comes from. The lane was absorbed into the Lebanon Street continuation in 1917 — the second downtown alley to go that way, after Park Lane became Lebanon Street in 1897.",
    internalNote: "Dates and the 1746 flight are the blog's; nothing else corroborates them here.",
    possiblySameAs: null, aliases: []
  },

  "catesby-lane": {
    spellings: [{ forms: ["Catesby Lane"] }],
    namedAfter: "The Thom family name — Cameron Thom's son was Charles Catesby Thom, and a brother carried it too",
    namedAfterLink: "https://en.wikipedia.org/wiki/Cameron_E._Thom",
    categories: ["person","alive"],
    sources: [
      { title: "Los Angeles Revisited: The Antebellum Past at Cameron Lane in DTLA",
        url: "https://losangelesrevisited.blogspot.com/2020/07/the-antebellum-past-at-cameron-lane-in.html" }
    ],
    disputed: false,
    note: "Named from the family rather than for one person in particular.",
    internalNote: "THE PLAT LETTERS IT “CATSBY”, without the E, and the row keeps that spelling as its ink (§5.1). The identification rests on the family names around it. A second minted id, `gatsby-lane`, was the same label misread; it cited no rows and was dropped.",
    possiblySameAs: null,
    aliases: []
  },

  "centerbrook-lane": {
    spellings: [{ forms: ["Centerbrook Lane"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [
      { title: "Los Angeles Revisited: The Antebellum Past at Cameron Lane in DTLA",
        url: "https://losangelesrevisited.blogspot.com/2020/07/the-antebellum-past-at-cameron-lane-in.html" }
    ],
    disputed: false,
    note: "Lettered on the 1885 Cameron Tract among the Thom family lanes, but unlike Cameron, Alexander and Catesby it answers to no relative anyone has traced. A Virginia place name would fit the pattern — the family's estate in Culpeper County was Berry Hill, which is not this — but nothing supports it.",
    internalNote: "NOT in the Los Angeles Revisited article, which names only Cameron, Alexander, Catesby and Pembroke; a web search turns up nothing (checked 2026-09-01). The company it keeps is the only evidence there is.",
    possiblySameAs: null, aliases: []
  },

  "palm-st-arts-district": {
    spellings: [{ forms: ["Palm Street"] }],
    namedAfter: "{{The palm}}, one of four tree and plant names platted together on the Goodwin Tract in Oct. 1886 — Palm, Spruce, Tulip and Willow",
    namedAfterLink: "https://en.wikipedia.org/wiki/Arecaceae",
    categories: ["nature", "unknown"],
    sources: [
      { title: "Wikipedia: Arts District, Los Angeles",
        url: "https://en.wikipedia.org/wiki/Arts_District,_Los_Angeles" }
    ],
    disputed: false,
    note: "One of a run of tree and plant names platted on the Goodwin Tract in October 1886 — Palm, Spruce, Tulip and Willow together. None of them is documented beyond the plat, and the theme is the whole of the argument. This one ran along modern Imperial Street. When it became Imperial Street, and why, is not researched.",
    internalNote: "Carried over from streets-data.js when the Goodwin Tract was encoded, 2026-09-01. Disambiguated at minting: Palm Street is a name that recurs. ★ THE GUESS MADE EXPLICIT 2026-09-13 at Kenny’s request: namedAfter now names the plant and `nature` joins the categories on all four of Palm, Spruce, Tulip and Willow. `unknown` STAYS on each, because the warrant is the set and not the individual street — no source says why Goodwin chose tree names, and none of the four is documented beyond the plat. This is the same footing as `ceres-ave`: a reading strong enough to state, resting entirely on the company the name keeps.",
    possiblySameAs: null,
    aliases: []
  },

  "spruce": {
    spellings: [{ forms: ["Spruce Street"] }],
    namedAfter: "{{The spruce}}, one of four tree and plant names platted together on the Goodwin Tract in Oct. 1886 — Palm, Spruce, Tulip and Willow",
    namedAfterLink: "https://en.wikipedia.org/wiki/Spruce",
    categories: ["nature", "unknown"],
    sources: [
      { title: "Wikipedia: Arts District, Los Angeles",
        url: "https://en.wikipedia.org/wiki/Arts_District,_Los_Angeles" }
    ],
    disputed: false,
    note: "One of a run of tree and plant names platted on the Goodwin Tract in October 1886 — Palm, Spruce, Tulip and Willow together. None of them is documented beyond the plat, and the theme is the whole of the argument. This one ran along modern Mateo Street.",
    internalNote: "Carried over from streets-data.js when the Goodwin Tract was encoded, 2026-09-01. ★ THE GUESS MADE EXPLICIT 2026-09-13 at Kenny’s request — see `palm-st-arts-district` for the reasoning that covers all four. namedAfter names the plant and `nature` joins the categories; `unknown` stays, because the warrant is the SET (Palm, Spruce, Tulip and Willow platted together) and not this street on its own.",
    possiblySameAs: null, aliases: []
  },

  "tulip": {
    spellings: [{ forms: ["Tulip Street"] }],
    namedAfter: "{{The tulip}}, one of four tree and plant names platted together on the Goodwin Tract in Oct. 1886 — Palm, Spruce, Tulip and Willow",
    namedAfterLink: "https://en.wikipedia.org/wiki/Tulip",
    categories: ["nature", "unknown"],
    sources: [
      { title: "Wikipedia: Arts District, Los Angeles",
        url: "https://en.wikipedia.org/wiki/Arts_District,_Los_Angeles" }
    ],
    disputed: false,
    note: "One of a run of tree and plant names platted on the Goodwin Tract in October 1886 — Palm, Spruce, Tulip and Willow together. None of them is documented beyond the plat, and the theme is the whole of the argument. This one ran along modern Santa Fe Avenue, and it lasted ten years: on Aug. 31, 1896 Ordinance No. 3829 changed “Tulip street, from Willow to Seventh” to Santa Fe avenue, extending south over it a name the railway had already given the street further north.",
    internalNote: "Carried over from streets-data.js when the Goodwin Tract was encoded, 2026-09-01. ★ THE GUESS MADE EXPLICIT 2026-09-13 at Kenny’s request — see `palm-st-arts-district` for the reasoning that covers all four. namedAfter names the plant and `nature` joins the categories; `unknown` stays, because the warrant is the SET (Palm, Spruce, Tulip and Willow platted together) and not this street on its own. ⚠ THE PUBLIC NOTE WAS WRONG UNTIL 2026-09-06: it said the street “lasted a matter of months” and took the railway’s name when the Atchison, Topeka and Santa Fe reached Los Angeles in May 1887. The real end is Ordinance No. 3829 of Aug. 31, 1896 (documents/lah-1896-09-03), ten years on.",
    possiblySameAs: null, aliases: []
  },

  "willow": {
    spellings: [{ forms: ["Willow Street"] }],
    namedAfter: "{{The willow}}, one of four tree and plant names platted together on the Goodwin Tract in Oct. 1886 — Palm, Spruce, Tulip and Willow",
    namedAfterLink: "https://en.wikipedia.org/wiki/Willow",
    categories: ["nature", "unknown"],
    sources: [
      { title: "Wikipedia: Arts District, Los Angeles",
        url: "https://en.wikipedia.org/wiki/Arts_District,_Los_Angeles" }
    ],
    disputed: false,
    note: "One of a run of tree and plant names platted on the Goodwin Tract in October 1886 — Palm, Spruce, Tulip and Willow together. None of them is documented beyond the plat, and the theme is the whole of the argument. This one ran along Willow Street, which keeps the name.",
    internalNote: "Carried over from streets-data.js when the Goodwin Tract was encoded, 2026-09-01. ★ THE GUESS MADE EXPLICIT 2026-09-13 at Kenny’s request — see `palm-st-arts-district` for the reasoning that covers all four. namedAfter names the plant and `nature` joins the categories; `unknown` stays, because the warrant is the SET (Palm, Spruce, Tulip and Willow platted together) and not this street on its own.",
    possiblySameAs: null, aliases: []
  },

  "mesquit": {
    spellings: [{ forms: ["Mesquit Street"] }],
    namedAfter: "Presumably the mesquite, alongside the Goodwin Tract's other plant names, but nothing documents it.",
    namedAfterLink: "https://en.wikipedia.org/wiki/Mesquite",
    categories: ["nature"],
    sources: [
      { title: "Wikipedia: Arts District, Los Angeles",
        url: "https://en.wikipedia.org/wiki/Arts_District,_Los_Angeles" }
    ],
    disputed: false,
    note: "The plat already spells it “Mesquit” without the terminal E, which is how the street signs still spell it.",
    internalNote: "Carried over from streets-data.js when the Goodwin Tract was encoded, 2026-09-01. Kines has no page. The spelling is the interesting part: a modern oddity that turns out to be original, not a later error.",
    possiblySameAs: null,
    aliases: []
  },

  "santee-street": {
    spellings: [{ forms: ["Santee Street"] }],
    namedAfter: "{{Milton Santee}} (1835–1901), city councilman 1884–1886, later a mining and railroad investor",
    namedAfterLink: "https://en.wikipedia.org/wiki/Milton_Santee",
    categories: ["person", "alive"],
    sources: [
      { title: "L.A. Street Names: Santee Street",
        url: "https://lastreetnames.com/street/santee-street/" }
    ],
    disputed: false,
    note: "Santee later moved to San Diego County, where in 1893 his second wife had the town of Cowleston renamed Santee in his honour — a name it still keeps.",
    internalNote: "Carried over from streets-data.js when the Goodwin Tract was encoded, 2026-09-01.",
    possiblySameAs: null, aliases: []
  },

  "los-angeles-street": {
    spellings: [{ forms: ["Los Angeles Street"] }],
    namedAfter: "The city itself — ultimately Nuestra Señora de los Ángeles de Porciúncula, the 1769 Spanish naming of {{the river}}",
    namedAfterLink: "https://en.wikipedia.org/wiki/Los_Angeles_River",
    categories: ["place"],
    sources: [
      { title: "L.A. Street Names: Los Angeles Street",
        url: "https://lastreetnames.com/street/los-angeles-street/" },
      { title: "Wikipedia: Los Angeles Street",
        url: "https://en.wikipedia.org/wiki/Los_Angeles_Street" }
    ],
    disputed: false,
    note: "In place by 1854 along its through stretch; the Plaza block to the north was a separate street, the Calle de los Negros, until this name was extended over it in 1910.",
    internalNote: "Carried over from streets-data.js when the Goodwin Tract was encoded, 2026-09-01. The Calle de los Negros block is a DIFFERENT lineage and wants its own entity when a document attests it — do not fold it in here on the strength of the modern name.",
    possiblySameAs: null,
    aliases: []
  },

  "pico": {
    spellings: [{ forms: ["Pico Street"] }],
    namedAfter: "{{Pío de Jesús Pico}} (1801–1894), the last Mexican governor of Alta California and a major landowner",
    namedAfterLink: "https://en.wikipedia.org/wiki/Pio_Pico",
    categories: ["person","governor","alive"],
    sources: [
      { title: "L.A. Street Names: Pico Boulevard",
        url: "https://lastreetnames.com/street/pico-boulevard/" }
    ],
    disputed: false,
    note: "Los Angeles never had an official 13th Street downtown — 12th was the last numbered street in the original Hutton/Ord Survey. Pico was added immediately outside the grid.",
    internalNote: "Carried over from streets-data.js when the Goodwin Tract was encoded, 2026-09-01. The entity is the PICO naming, which the Cameron Tract letters as “Pico Street”; the modern street is a boulevard, and the generic changed without the name doing so.",
    possiblySameAs: null,
    aliases: []
  },

  "tenth-street": {
    spellings: [{ forms: ["10th Street"] }],
    namedAfter: "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
    namedAfterLink: null,
    categories: ["number"],
    sources: [
      { title: "L.A. Street Names: 1st Street (on the numbering system)",
        url: "https://lastreetnames.com/street/0001st-street/" },
      { title: "Ord/Hutton survey, “Plan de la Ciudad de Los Angeles” (Aug. 29, 1849)",
        url: "https://tessa2.lapl.org/digital/collection/maps/id/42/" }
    ],
    disputed: false,
    note: "Renamed Olympic Boulevard in 1935, for the 1932 Games — the request went in in July 1929, and that they had been the tenth Olympiad seems to have gone unremarked.",
    internalNote: "One entity per number across the downtown grid, as with 1st–9th. NB the 1849 survey's numbered streets ran only as far as 8th, so when Tenth was laid out is not researched — the numbering propagated south later.",
    possiblySameAs: null, aliases: []
  },

  "eleventh-street": {
    spellings: [{ forms: ["11th Street"] }],
    namedAfter: "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
    namedAfterLink: null,
    categories: ["number"],
    sources: [
      { title: "L.A. Street Names: 1st Street (on the numbering system)",
        url: "https://lastreetnames.com/street/0001st-street/" },
      { title: "Ord/Hutton survey, “Plan de la Ciudad de Los Angeles” (Aug. 29, 1849)",
        url: "https://tessa2.lapl.org/digital/collection/maps/id/42/" }
    ],
    disputed: false,
    note: null,
    internalNote: "One entity per number across the downtown grid, as with 1st–9th. NB the 1849 survey's numbered streets ran only as far as 8th, so when Eleventh was laid out is not researched — the numbering propagated south later.",
    possiblySameAs: null, aliases: []
  },

  // Twelfth is the case that shows what the Ord survey does and does not say.
  // The sheet draws this corridor and letters nothing along it — recorded as an
  // `unnamed` row on documents/mr053-067, which dates the pavement without
  // claiming the name (§5.4). So the survey is cited below although it does not
  // letter the street: it is the grid that implicitly numbers it.
  "twelfth-street": {
    spellings: [{ forms: ["12th Street"] }],
    namedAfter: "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
    namedAfterLink: null,
    categories: ["number"],
    sources: [
      { title: "L.A. Street Names: 1st Street (on the numbering system)",
        url: "https://lastreetnames.com/street/0001st-street/" },
      { title: "Ord/Hutton survey, “Plan de la Ciudad de Los Angeles” (Aug. 29, 1849)",
        url: "https://tessa2.lapl.org/digital/collection/maps/id/42/" }
    ],
    disputed: false,
    note: null,
    internalNote: "One entity per number across the downtown grid, as with 1st–11th. NB the 1849 survey's numbered streets ran only as far as 8th, so when Twelfth was laid out is not researched — the numbering propagated south later. The Ord survey draws the corridor unlabelled (documents/mr053-067 carries the `unnamed` row, and the sheet is swept for 12th Street), so it is cited here for the numbering rather than for the name: check-model.js will say the sheet does not letter this name, which is correct and intended. Minted 2026-09-04 at Kenny's request, before the 12th Street pass, so the point would not be lost.",
    possiblySameAs: null, aliases: []
  },


  // Fifteenth and Sixteenth join the grid from a later sheet. The Miguel
  // Subdivision (documents/mr053-016, Mar. 1893) letters both, and letters each
  // beside a parenthetical former name — "(formerly Laura St)" and "(formerly
  // Pine St)". Those two predecessors are lineages of their own with no entity
  // yet: the ink is in the rows' asWritten until somebody enters the changes
  // (handbook/research-leads.md, 2026-09-06).

  "fifteenth-street": {
    spellings: [{ forms: ["15th Street"] }],
    namedAfter: "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
    namedAfterLink: null,
    categories: ["number"],
    sources: [
      { title: "L.A. Street Names: 1st Street (on the numbering system)",
        url: "https://lastreetnames.com/street/0001st-street/" }
    ],
    disputed: false,
    note: null,
    internalNote: "One entity per number across the downtown grid, as with 1st–12th. The Ord survey is NOT cited here as it is for 10th–12th: its numbered streets ran only as far as 8th and the sheet does not reach this far south, so nothing in the corpus dates the number. The only sheet that letters it is the 1893 Miguel Subdivision, which also records that this had been Laura Street; when the number replaced that name is not researched. Moved out of names-new.js 2026-09-06.",
    possiblySameAs: null, aliases: []
  },

  "sixteenth-street": {
    spellings: [{ forms: ["16th Street"] }],
    namedAfter: "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
    namedAfterLink: null,
    categories: ["number"],
    sources: [
      { title: "L.A. Street Names: 1st Street (on the numbering system)",
        url: "https://lastreetnames.com/street/0001st-street/" }
    ],
    disputed: false,
    note: null,
    internalNote: "One entity per number across the downtown grid, as with 1st–12th. As with 15th, the Ord survey is not cited: it does not reach this ground. The 1893 Miguel Subdivision letters it and records that this had been Pine Street; that predecessor has no entity yet. Moved out of names-new.js 2026-09-06.",
    possiblySameAs: null, aliases: []
  },

  // ---- minted by the Feb. 1874 renaming ordinance -------------------------
  // Both begin as lineages on Feb. 26, 1874: the ordinance names them, and no
  // document has been found lettering either before that. Their namesakes are
  // where the old entities' prose already pointed, and neither is documented —
  // so the claims live as leads in internalNote rather than as assertions.

  "alpine": {
    spellings: [{ forms: ["Alpine Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unresearched"],
    sources: [],
    disputed: false,
    note: null,
    internalNote: "Minted 2026-09-04 from documents/ord-1887-08-22, which declares Virgin Street \u201cchanged to Alpine Street\u201d. The lead, carried over from the `virgin` entity's public note and unsourced there: the petitioner was the real-estate agent William P. McIntosh, who had run a Sierra lumber company near Alpine County \u2014 which would make this a transplanted California place name rather than the Alps. The ordinance gives no reason, as ordinances do not. Worth checking Kines and the Aug. 1887 papers before asserting anything.",
    possiblySameAs: null, aliases: []
  },

  "broadway": {
    spellings: [{ forms: ["Broadway"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unresearched"],
    sources: [],
    disputed: false,
    note: "The name has no \u201cStreet\u201d: the 1890 papers and the street signs both say simply Broadway.",
    internalNote: "Minted 2026-09-04 from documents/lah-1890-02-20, the Herald reporting that the ordinance renaming Fort Street had been signed by Mayor Hazard and taken effect. The petitioner is SOURCED as of 2026-09-04: the council minutes of Feb. 3, 1890 record “126. From Fred L. Alles et al, asking that the name of Fort street be changed to Broadway” (documents/min-1890-02-03). The clerk writes Fred L. Alles, not Fred Lind Alles, and says nothing about his trade. Still unsourced is the other half of the old note — that the name honours New York's Broadway. Neither the petition nor the Herald says so; the Herald names only Mayor Hazard, who signed the ordinance. The same item predicts that Main Street south of Tenth would be renamed Broadway once Broadway was cut through, which is how modern Broadway came to run south of downtown; whatever act carried THAT out is not found (handbook/research-leads.md). NB the 1897 committee report separately renames a \u201cBroadway Street\u201d to Canal Street \u2014 not this one, which had been plain \u201cBroadway\u201d for seven years by then.",
    possiblySameAs: null, aliases: []
  },

  "castelar": {
    spellings: [{ forms: ["Castelar Street"] }],
    namedAfter: "{{Emilio Castelar}} (1832–1899), president of the First Spanish Republic in 1873–74",
    namedAfterLink: "https://en.wikipedia.org/wiki/Emilio_Castelar",
    categories: ["person","alive","foreign"],
    sources: [
      { title: "L.A. Street Names: Hill Street (on Calle del Toro / Castelar / N. Hill)",
        url: "https://lastreetnames.com/street/hill-street/" }
    ],
    disputed: false,
    note: "Castelar had left office a few weeks before the Los Angeles council renamed the street in February 1874 — the First Republic fell that January.",
    internalNote: "Minted 2026-09-04 from documents/ord-1874-02-26, which renames Bull Street to Castelar Street. The namesake is Kines's claim (lastreetnames.com's Hill Street page), carried over from the `bull` entity's note, where it read “apparently”; nothing contemporary has been found saying so. The dates fit the way a topical naming would: Castelar was the Republic's last president and had just fallen, which is exactly when a city council reaches for a name. Not proof.",
    possiblySameAs: null,
    aliases: []
  },

  "yale": {
    spellings: [{ forms: ["Yale Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unresearched"],
    disputed: false,
    note: null,
    sources: [
      { title: "L.A. Street Names: Yale Street",
        url: "https://lastreetnames.com/street/yale-street/" }
    ],
    internalNote: "Minted 2026-09-04 from documents/ord-1874-02-26, which renames Wasp Street to Yale Street. Nothing in the corpus says why Yale — the university is the obvious guess and is only a guess; the same ordinance's Pearl and Castelar share no theme to hang it on. Kines's Yale Street page is cited but has not been read for a namesake.",
    possiblySameAs: null, aliases: []
  },

  "farmer": {
    spellings: [{ forms: ["Farmer Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [
      { title: "Recorded map: “Crownwood” (Witmer’s Subdivision), M.B. 15-166 (surveyed Nov. 1909)",
        url: "https://pw.lacounty.gov/smpm/landrecords/pdf/TR0015-166a.pdf" }
    ],
    disputed: false,
    note: "Lettered on the 1909 Crownwood sheet along ground that is now Emerald Drive. Nothing found says who or what Farmer was.",
    internalNote: "Searched without result (Kines has no page; no web result for a Farmer Street here) — checked 2026-08-31 and again 2026-09-01.",
    possiblySameAs: null, aliases: []
  },

  // ---- the Mott Tract, Mar. 1869 (M.R. 1-489) -----------------------------
  // T. O. Mott's building lots on Bunker Hill, recorded Mar. 2, 1869 — the
  // oldest recorded subdivision in the corpus. Hope, Charity, Olive, Hill and
  // Fort already have entities; these two are the sheet's own.

  "temple": {
    spellings: [{ forms: ["Temple Street"] }],
    namedAfter: "{{Jonathan Temple}} (1796–1866), the Massachusetts trader who reached the pueblo about 1828, opened its first general store and took Mexican citizenship as Juan Temple",
    namedAfterLink: "https://en.wikipedia.org/wiki/Jonathan_Temple",
    categories: ["person"],
    sources: [
      { title: "L.A. Street Names: Temple Street (“christened in 1859”)",
        url: "https://lastreetnames.com/street/temple-street/" },
      { title: "Wikipedia: Temple Street (Los Angeles)",
        url: "https://en.wikipedia.org/wiki/Temple_Street_(Los_Angeles)" }
    ],
    disputed: false,
    note: "Christened in 1859, along the one-block lane Temple had laid out himself beside his own downtown property.",
    internalNote: "Kines writes “John Temple” and Wikipedia “Jonathan Temple”; he went by Juan in the pueblo after taking Mexican citizenship. One man. NOT to be confused with his younger half-brother F. P. F. Temple, who is the Temple of Temple City and Temple Avenue — the families' streets are a standing trap. Minted in review from documents/mr001-489, where the 1869 ink reads “Temple Street”; moved out of names-new.js 2026-09-06.",
    possiblySameAs: null, aliases: []
  },

  "court-house-street": {
    spellings: [{ forms: ["Court House Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["descriptive", "unknown"],
    sources: [
      { title: "Homestead Museum: the Rocha Adobe / City Hall — the county court house on the west side of Spring between 1st and Temple, sold to the city and county in 1853; “the county court house moved out in 1861”",
        url: "https://homesteadmuseum.blog/2025/06/21/through-the-viewfinder-with-the-rocha-adobe-city-hall-los-angeles-april-may-1886/" },
      { title: "Wikipedia: Clocktower Courthouse — the Market House, leased by the county from May 1861 and bought from Jonathan Temple’s heirs about 1869–71",
        url: "https://en.wikipedia.org/wiki/Clocktower_Courthouse" },
      { title: "L.A. Street Names: Mott Street — Stephen Hathaway Mott (1828–1909) “served as deputy county clerk”",
        url: "https://lastreetnames.com/street/mott-street/" }
    ],
    disputed: false,
    note: "Lettered on the Mott Tract sheet of March 1869, running the block between First and Temple; the stretch survives as Community Terrace. There had been a court house on that ground: the Rocha Adobe, on the west side of Spring Street between First and Temple, was bought by the city and county in 1853 and served as the county court house until 1861, after which it remained the seat of city government until it was demolished in 1886. By 1869 the courts themselves sat further south, in the Market House on the Temple Block. Nothing found says which building the street was named for, or who chose the name.",
    internalNote: "RESEARCHED 2026-09-13 on Kenny’s question of whether there was a court house in 1869, or plans for one on the Mott tract. The answer is that there was one at First and Temple — but it had stopped being a court house eight years before this sheet. Chronology now established: rented adobes 1850–53; the Rocha Adobe 1853–61, on Spring between 1st and Temple; the Market House / Clocktower on the Temple Block 1861–91, leased from 1861 and bought from Jonathan Temple’s heirs about 1869–71; the red sandstone courthouse on Poundcake Hill from 1891. NO courthouse PROPOSAL for the First/Temple area in the 1860s was found, and nothing connects the Motts to a courthouse project. ★ THE ONE REAL LINK: Stephen Hathaway Mott, who platted this tract, was a DEPUTY COUNTY CLERK — an officer of the court whose office sat in the court house. ⚠ A researching agent proposed that the street was named for its sightline downhill to the civic block, and that Court House Street is today’s Court Street. NOT ADOPTED: our own rows put this alignment on Community Terrace, and `court-street` is a separate entity. The sightline reading is attractive and unsourced. The obvious reading was previously left unconfirmed because the pre-1891 courthouse locations were not established. They are now, and it is still unconfirmed — but for a better reason.",
    possiblySameAs: null, aliases: []
  },

  // ---- the O. W. Childs Tract, July 1885 (M.R. 6-378) ---------------------
  // Ozro W. Childs — nurseryman, hardware merchant, and a founding benefactor
  // of USC — recorded 200 lots between Eleventh and Twelfth on July 11, 1885.
  // Four of the streets he letters between Los Angeles Street and San Pedro are
  // entities of their own, and not one has a documented namesake. Two are
  // plants, which on a nurseryman's own tract is worth noticing and is not
  // evidence. NB Maple Avenue and San Julian Street both run well north of this
  // tract: the sheet is our earliest sighting of those names, not their origin.

  "william": {
    spellings: [{ forms: ["William Street"] }],
    namedAfter: "Probably {{Ozro William Childs}} (1824–1890) himself — the W of “O. W. Childs” is William — or his eldest surviving son, Ozro William Childs Jr. (1865–1933), who was twenty when the tract was recorded",
    namedAfterLink: "https://en.wikipedia.org/wiki/Ozro_W._Childs",
    categories: ["person", "alive", "unknown"],
    sources: [
      { title: "Wikipedia: Ozro W. Childs — the article opens “Ozro William Childs”",
        url: "https://en.wikipedia.org/wiki/Ozro_W._Childs" },
      { title: "Find a Grave: Ozro William Childs (1824–1890), memorial 8297711 — full name, and the ten children including Ozro William Childs Jr.",
        url: "https://www.findagrave.com/memorial/8297711/ozro-w-childs" }
    ],
    disputed: false,
    note: "A given name, lettered on the O. W. Childs Tract of July 1885 between Los Angeles Street and Maple Avenue; the stretch is now part of Santee Street. The W in Childs’s own name is William — he was Ozro William Childs — and his eldest surviving son carried the same name.",
    internalNote: "★ ANSWERED 2026-09-13, on Kenny’s hunch that the W might stand for William. It does: four sources give “Ozro William Childs”, and the strongest is a 1954 Historical Society of Southern California Quarterly article of that title written by his own daughter, Hortense Childs Reynolds. The earlier pass had found only his wife Emeline Huber and a brother Marcus and concluded no William existed in the family; that was wrong because it never checked what the initial stood for. A good lesson: expand the initials before concluding a name is absent. STILL HEDGED — there are now two Williams in frame (Childs himself, and Ozro William Childs Jr., aged twenty in 1885) and NO document says the street honours either, so `unknown` stays. A subdivider lettering his own middle name is ordinary practice, and the family was actively naming streets then (Childs Avenue, 1887, now Griffith Park Boulevard). Kines has no William Street page (checked 2026-09-06).",
    possiblySameAs: null, aliases: []
  },

  "maple-dtla": {
    spellings: [{ forms: ["Maple Avenue"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["nature", "unknown"],
    sources: [],
    disputed: false,
    note: "A tree name, undocumented. The earliest sheet here that letters it is the O. W. Childs Tract of July 1885, at Eleventh and Twelfth; the corridor further north was NOT Maple in 1876, when the Moreno Vineyard sheet letters it Regent Street between 5th and 6th. So the name spread along this corridor at some undated point, and where it started is an open question rather than a settled one.",
    internalNote: "Not covered by Kines: no page for a Los Angeles Maple Avenue, and it is absent from his DTLA list (checked 2026-09-06). Wikipedia's Los Angeles County place-name etymology page has no entry either. LEAD: the 1888 Widow Botiller resubdivision (documents/mr029-026) letters the adjoining land “Maple Ave Tract” — a tract named after the street, so its own sheet may date the name. Moved out of names-new.js 2026-09-06.",
    possiblySameAs: null, aliases: []
  },

  "myrtle": {
    spellings: [{ forms: ["Myrtle Avenue"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["nature", "unknown"],
    sources: [],
    disputed: false,
    note: "A plant name, and the company it keeps is the whole of the argument: the O. W. Childs Tract lays Myrtle one block from Maple, and Childs was the city's leading nurseryman. Nothing documents it. This one ran along modern Wall Street.",
    internalNote: "Kines's Myrtle Avenue page is Monrovia's — laid out 1886 and named both for the plant and for Myrtle Mignonette Monroe, the founder's daughter — and is a different street: do not carry that namesake across (checked 2026-09-06). Not covered for Los Angeles. A second sighting since: the Moran Tract of Apr. 1887 (documents/mr016-027) letters Myrtle Avenue too, so the name was still in use two years after the Childs sheet. Moved out of names-new.js 2026-09-06.",
    possiblySameAs: null, aliases: []
  },

  "san-julian-st": {
    spellings: [{ forms: ["San Julian Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "One of the saints' names in the streets east of Main, with San Pedro two blocks over. Who or what it was named for is not documented. The Moran Tract of April 1887 shows the corridor with a seam in it: San Julian Street south of Ninth, Earl Street north of it, both lettered on the same sheet.",
    internalNote: "Kines has no page (checked 2026-09-06). A 2009 U.S. Catholic survey of the county's saint-named streets dates San Julian to the 1880s and observes that such names were generally chosen by developers with little interest in their origins — context, not an identification. Rancho San Julián, in Santa Barbara County, is a different place and no connection to it is documented. Our earliest sheet, the O. W. Childs Tract (1885), letters only the Eleventh–Twelfth block, and the street runs far north of it. Moved out of names-new.js 2026-09-06.",
    possiblySameAs: null, aliases: []
  },

  // ---- the Widow Botiller Tract resubdivision, Mar. 1888 (M.R. 29-26) ------
  // The sheet subdivides the estate of Juana María Reyes de Botiller, surveyed
  // in March 1888 by J. O. Bernal at the request of Felipe Botiller, Tadeo
  // Botiller and Vicenta B. de Ybarrondo, and letters the adjoining land
  // “Dionicio Botiller”. Three of its street names are entities of their own.

  "botiller-street": {
    spellings: [{ forms: ["Botiller Street"] }],
    namedAfter: "The Botiller family, whose ground it crossed: the sheet subdivides the estate of Juana María Reyes de Botiller, distributed to Tadeo Felipe Botiller and Vicenta B. de Ybarrondo by a decree entered Feb. 27, 1888",
    namedAfterLink: null,
    categories: ["person"],
    sources: [
      { title: "Wikipedia: Dionisio Botiller (1842–1915), councilman and city auditor, whose land adjoins this tract on the sheet",
        url: "https://en.wikipedia.org/wiki/Dionisio_Botiller" }
    ],
    disputed: false,
    note: "The street ran through the family's own ground, and the sheet letters the land next to it for Dionisio Botiller. It is now part of Santee Street.",
    internalNote: "Identified from the sheet's own dedication (documents/mr029-026), which names the estate, the 1873 partition, the referee Cristóbal Aguilar and the three parties who asked for the survey. No single Botiller is singled out, so the entity names the family rather than a person: Dionisio is cited because the sheet letters his adjoining land, NOT because the street is his. Kines has no Botiller Street page (checked 2026-09-06). NB Kines dates Santee Street's naming to 1886, two years before this sheet letters Botiller Street on ground that is Santee today — so the two names ran in parallel on different stretches and Santee absorbed this one at some later, unresearched date. Moved out of names-new.js 2026-09-06.",
    possiblySameAs: null, aliases: []
  },

  "ida-street": {
    spellings: [{ forms: ["Ida Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown","person"],
    sources: [],
    disputed: false,
    note: "A given name on the Widow Botiller Tract resubdivision of March 1888 — presumably someone in the family, though the sheet does not say so. It is now Cecelia Street.",
    internalNote: "The dedication names Juana María Reyes de Botiller, Felipe and Tadeo Botiller, Vicenta B. de Ybarrondo and the adjoining owner Dionisio Botiller; no Ida. Kines's Cecelia Street page is the Cudahy/Bell Gardens street named for Cecelia Cudahy Casserly and has nothing to do with this ground (checked 2026-09-06). Moved out of names-new.js 2026-09-06.",
    possiblySameAs: null,
    aliases: []
  },

  "wall-street": {
    spellings: [{ forms: ["Wall Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Nothing found says what it was named for. New York’s financial street is the obvious guess, and what supports it is the company it keeps: the Moreno Vineyard Tract sheet of March 1876 letters Wall Street and Regent Street two blocks apart on one new commercial subdivision beside the railroad depot — New York’s and London’s most famous trading addresses named together. As a pair they read as deliberate; singly neither can be shown. The name later spread north, taking Myrtle Avenue on Nov. 13, 1893 by Ordinance No. 1915.",
    internalNote: "Kines does not cover it: no page, and it is absent from his alphabetical W list between Walgrove Avenue and Wallace Avenue (checked 2026-09-06). A search for a Los Angeles-specific origin returned only New York. ★ THE PAIRING ARGUMENT MADE EXPLICIT 2026-09-13 at Kenny’s request — see `regent-street`, which holds the fuller statement. The load-bearing fact is that documents/mr003-166 (Moreno Vineyard Tract, March 1876) is the earliest sighting in this corpus for BOTH names, so they enter the record together. Keep the two entities in step: an argument that weakens one weakens the other.",
    possiblySameAs: null, aliases: []
  },

  // ---- the Clark and Bryan Tract, Nov. 1893 (M.R. 53-65) ------------------

  "clark-ave": {
    spellings: [{ forms: ["Clark Avenue"] }],
    namedAfter: "Wesley Clark, senior partner in the Los Angeles real-estate firm of Clark & Bryan, who owned this tract with Elden P. Bryan",
    namedAfterLink: null,
    categories: ["person","alive"],
    sources: [
      { title: "Homestead Museum: “No Place Like Home: The Elden P. Bryan Residence” (on the firm of Clark & Bryan)",
        url: "https://homesteadmuseum.blog/2016/12/06/no-place-like-home-the-elden-p-bryan-residence-los-angeles-ca-1907/" }
    ],
    disputed: false,
    note: "Clark and Bryan signed the map as owners on Nov. 14, 1893, giving their addresses as 127 West 3rd Street and 202 South Spring Street; the avenue ran through their own subdivision. It is now part of Crocker Street.",
    internalNote: "Identified from the sheet itself (documents/mr053-065), which letters both owners' names and street addresses beside the title and carries their notarised acknowledgment of ownership. The partnership is corroborated by the Homestead Museum's post on Bryan's house, which names Wesley Clark as his partner in Clark & Bryan and dates Bryan's arrival in Los Angeles to the end of 1886. Wesley Clark's own dates were NOT found — no Wikipedia article, no Kines page, nothing in the sources checked 2026-09-06 — so the entity claims the man and not his lifespan. The guess recorded when this was minted (“likely the owner of the tract”) turns out to be right. Moved out of names-new.js 2026-09-06.",
    possiblySameAs: null,
    aliases: []
  },

  // ---- the Moreno Vineyard Tract, recorded Mar. 1876 (M.R. 3-166) ---------
  // “Building Lots near L.A. & I. R.R. Depot on San Pedro Street known as the
  // Moreno Vineyard Tract” — lots sold on their nearness to the Los Angeles and
  // Independence Railroad's depot at San Pedro and Wolfskill (4th), which
  // opened Dec. 1, 1875. Recorded Mar. 1, 1876 at the request of J. S.
  // Cranford. Its two named streets are Regent and Wall, two blocks apart.

  "regent-street": {
    spellings: [{ forms: ["Regent Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Lettered between Los Angeles Street and Wall Street on the Moreno Vineyard Tract — the building lots laid out beside the new railroad depot and recorded in March 1876. Nothing says what it was named for. The strongest argument available is the company it keeps: this one sheet is the earliest source in this corpus for BOTH Regent Street and Wall Street, lettered two blocks apart on a new commercial subdivision, which is London’s and New York’s most famous commercial streets named together on one page. Taken as a pair they read as a deliberate borrowing of two great trading addresses; taken singly neither can be shown. The corridor is Maple Avenue today, between 5th and 6th.",
    internalNote: "Kines does not cover it: no page, and it is absent from his alphabetical R list, which runs Reese → Reeves → Reevesbury → Reklaw with no Regent (checked 2026-09-06). ★ THE PAIRING ARGUMENT MADE EXPLICIT 2026-09-13 at Kenny’s request, and it turns on a fact worth stating plainly: documents/mr003-166, the Moreno Vineyard Tract of March 1876, is the FIRST source in this corpus for both names — twelve years earlier than the Botiller resubdivision that had been `wall-street`’s earliest sighting. Two streets, one sheet, one moment of naming. That is why the London/New York reading is worth recording even though namedAfter stays null on both: the evidence is the pair, not either name. It also cuts the other way — if either is ever shown NOT to be the foreign borrowing, the argument for the other weakens with it. Keep the two entities in step.",
    possiblySameAs: null, aliases: []
  },

  // ---- the Moran Tract, Apr. 1887 (M.R. 16-27) ----------------------------
  // “Subdivided at the request of Mr J. P. Moran by Fred Eaton C.E. in April
  // 1887”, recorded Apr. 22 at the request of John P. Moran. The surveyor is
  // the Fred Eaton (1856–1934) who became mayor in 1898 and assembled the Owens
  // Valley water rights behind the aqueduct. The sheet is also where the San
  // Julian corridor shows a seam: Earl Street north of Ninth, San Julian Street
  // south of it, both lettered on the same page.

  "earl-st": {
    spellings: [{ forms: ["Earl Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Lettered on four sheets between 1884 and 1887 — the Rowan, Goldsworthy 8th Street, Beck and Moran tracts — along the corridor that is San Julian Street today. The Moran sheet letters Earl north of Ninth Street and San Julian south of it, so for a while the corridor carried both names at once. No Earl is documented.",
    internalNote: "Kines does not cover it: no page, and it is absent from his alphabetical E list, which runs Earhart Avenue → Earlham Drive with no Earl (checked 2026-09-06). The tract was subdivided for J. P. Moran, and a John P. Moran (1857–1916) sat on the Common Council from 1879 and was its president 1881–83 — the right name in the right city at the right time, but a name match and nothing more, so it is not claimed here and would not identify the street even if it held. Whether Earl was a Moran relation, an owner further north, or neither is unknown. Moved out of names-new.js 2026-09-06.",
    possiblySameAs: null, aliases: []
  },

  // ---- the Orchard Tract, Aug. 1882 (M.R. 5-5) ----------------------------
  // “Comprising what was formerly known as the ‘Chapman Tract’, ‘Hunter Tract’
  // and ‘Damisch Tract’ as subdivided for G. W. Morgan, A. H. Judson, and H. W.
  // Mills, July 1882, by H. J. Stevenson, Surveyor” — recorded at the request
  // of Morgan & Judson on Aug. 2, 1882. Of its two street names one is an
  // owner's and the other is not accounted for by anything on the sheet.

  "morgan-lane": {
    spellings: [{ forms: ["Morgan Lane"] }],
    namedAfter: "George W. Morgan, one of the three men the tract was subdivided for and, with A. H. Judson, one of the two at whose request it was recorded",
    namedAfterLink: null,
    categories: ["person","alive"],
    sources: [
      { title: "Wikipedia: Highland Park, Los Angeles (George Morgan and Albert Judson created the Highland Park tract in 1886)",
        url: "https://en.wikipedia.org/wiki/Highland_Park,_Los_Angeles" }
    ],
    disputed: false,
    note: "The lane ran through its owners' own subdivision: the sheet says the tract was subdivided for G. W. Morgan, A. H. Judson and H. W. Mills in July 1882, and it was recorded at the request of Morgan & Judson. It did not stay a lane long — in October 1883 the city agreed to accept it as a public street, widen it to sixty feet and rename it Mayo Street. The corridor is 3rd Street today.",
    internalNote: "Identified from the sheet itself (documents/mr005-005), whose title block names the three owners and whose recorder's note reads “Recorded at request of Morgan & Judson Aug 2. 1882” — the same evidence that identifies Clark Avenue. Kines has no Morgan Lane page. A George Morgan and an Albert Judson created the Highland Park tract four years later, in 1886, and the surnames, initials, partnership and period all fit this pair — Wikipedia is cited for that, but identifying the two Morgans with each other is an inference this project has not proved, and the street is claimed for the man on THIS sheet either way. His dates were not found: no biography, no Kines page (the Wikipedia “George W. Morgan” is an Ohio Civil War general, a different man — do not link him). Moved out of names-new.js 2026-09-06. SEQUEL FOUND THE SAME DAY: documents/lah-1883-10-21 has the Council ordering an ordinance drafted to rename the lane Mayo Street on acceptance. That is an instruction to draft, so `mayo` is what was ORDERED and not yet known to have been enacted — no entity minted for it, and the corridor's chain reads Morgan Lane (1882) → Mayo Street (ordered 1883) → … → 3rd Street with the middle step unconfirmed.",
    possiblySameAs: null,
    aliases: []
  },

  "boyd-street": {
    spellings: [{ forms: ["Boyd Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Lettered on the Orchard Tract of July 1882 between Wall Street and San Pedro Street, and still Boyd Street today. No Boyd is documented: the sheet names its three owners, its surveyor and the three earlier tracts it absorbed, and there is no Boyd among them.",
    internalNote: "Kines does not cover it: no page, and it is absent from his alphabetical B list, which runs Bouton → Boyar → Boyce → Boyle → Boylston with no Boyd (checked 2026-09-06). A web search turns up only the 2020 Boyd Street fire. The sheet's other proper names are the owners G. W. Morgan, A. H. Judson and H. W. Mills, the surveyor H. J. Stevenson, the absorbed Chapman, Hunter and Damisch tracts, and the adjoining-owner lines Thom, Baker, Starr and Gohenix — Boyd is none of them, so whoever he was, he was not on this page. ⚠ RESTORED BY HAND 2026-09-06: this entity and morgan-lane were minted in review at 18:30 and an assistant overwrote names-new.js three minutes later, before either had been read; both were rebuilt from the document's rows in the tool's own minting format. If either carried a display form or a note that was typed by hand at minting, it was lost there and wants a second look. Moved into names.js the same day.",
    possiblySameAs: null, aliases: []
  },

  // ---- minted by Ordinance No. 1613, Apr. 3, 1893 --------------------------
  // A merger, not a renaming: "said streets shall hereafter be known as one
  // street, the name of which shall be Scott avenue" (documents/ord-1613). Two
  // lineages end and one begins, on ground north of the project's OSM extract,
  // so none of the three is on any sheet in the corpus and nothing here draws.

  "scott-avenue": {
    spellings: [{ forms: ["Scott Avenue"] }],
    namedAfter: "Parmer Milton “P. M.” Scott (1822–1900) and Elizabeth Morton Scott (1840–1913), real-estate investors who lived on the street",
    namedAfterLink: null,
    categories: ["person"],
    sources: [
      { title: "L.A. Street Names: Scott Avenue (“originally two streets called Wyoming Avenue and Cooper Street; it adopted the Scotts’ name in 1893”)",
        url: "https://lastreetnames.com/street/scott-avenue/" }
    ],
    disputed: false,
    note: "Two streets until April 1893: Ordinance No. 1613 (New Series) abolished the names Wyoming Avenue and Cooper Street and made them one street under this one. The Scotts lived on it.",
    internalNote: "Minted 2026-09-06 from documents/ord-1613. The namesake is Kines's and is not otherwise corroborated; what this project adds is the instrument behind the date he gives — number, adoption day (Apr. 3, 1893), mayor's approval (Apr. 6) and publication (Apr. 9). The street is in Echo Park and Silver Lake, north of the OSM extract, so it has no geometry here and the change rows land on no ground.",
    possiblySameAs: null, aliases: []
  },

  "wyoming-avenue": {
    spellings: [{ forms: ["Wyoming Avenue"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Abolished by Ordinance No. 1613 (New Series) on April 3, 1893, when it and Cooper Street were made one street called Scott Avenue.",
    internalNote: "Minted 2026-09-06 from documents/ord-1613, which is the only thing in the corpus that mentions it: no sheet letters it and its extent is unknown. Kines's Wyoming Avenue page is Burbank's — a 1925 street named for Pennsylvania's Wyoming Valley by developers from Wilkes-Barre — and is a different street; do not carry that namesake across (checked 2026-09-06).",
    possiblySameAs: null, aliases: []
  },

  "cooper-street": {
    spellings: [{ forms: ["Cooper Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Abolished by Ordinance No. 1613 (New Series) on April 3, 1893, when it and Wyoming Avenue were made one street called Scott Avenue.",
    internalNote: "Minted 2026-09-06 from documents/ord-1613, the only thing in the corpus that mentions it; no sheet letters it and its extent is unknown. Kines has no page (checked 2026-09-06).",
    possiblySameAs: null, aliases: []
  },

  // ---- the Whisler Subdivision, Dec. 1886 (M.R. 12-64) --------------------

  "whisler-st": {
    spellings: [{ forms: ["Whisler Street"] }],
    namedAfter: "Mrs. Lourena Whisler, the owner at whose request the subdivision was made and recorded",
    namedAfterLink: null,
    categories: ["person","alive"],
    sources: [],
    disputed: false,
    note: "The sheet is “subdivided at request of Mrs. Lourena Whisler, Nov. 25th 1886” and was recorded three weeks later at her request; the street runs through her own ground. It is part of San Julian Street today.",
    internalNote: "Identified from the sheet itself (documents/mr012-064), whose title block and recorder's note both name her — the same evidence that identifies Clark Avenue and Morgan Lane, and the first of the three where the owner is a woman. Her dates and her husband's name were not looked for. Kines has no Whisler Street page (checked 2026-09-06). The surveyor is John Goldsworthy, County Surveyor-elect, who also surveyed the Goldsworthy 8th St. Tract (documents/mr011-008) and whose name is on the land adjoining the Widow Botiller tract — a recurring figure in this corner of the corpus. Moved out of names-new.js 2026-09-06.",
    possiblySameAs: null,
    aliases: []
  },

  // ---- extended over Tulip Street by Ordinance No. 3829, Aug. 1896 ---------

  "santa-fe-ave": {
    spellings: [{ forms: ["Santa Fe Avenue"] }],
    namedAfter: "The {{Atchison, Topeka and Santa Fe Railway}}, whose passenger depot opened by the street's junction with 1st Street in May 1887",
    namedAfterLink: "https://en.wikipedia.org/wiki/Atchison,_Topeka_and_Santa_Fe_Railway",
    categories: ["company"],
    sources: [
      { title: "L.A. Street Names: Santa Fe Avenue (“Named for the Atchison, Topeka & Santa Fe Railway”; May 1887, at the depot by 1st Street)",
        url: "https://lastreetnames.com/street/santa-fe-avenue/" }
    ],
    disputed: false,
    note: "Named for the railway in May 1887, when its passenger depot opened near 1st Street. The name spread south later: on Aug. 31, 1896 Ordinance No. 3829 changed Tulip Street, from Willow to Seventh, to Santa Fe Avenue (documents/lah-1896-09-03).",
    internalNote: "Minted 2026-09-06 to be the `to` of the Tulip change row. The 1887 naming is Kines's and is not otherwise sourced here; what this project has is the 1896 extension, in print. `categories: [\"company\"]` is a NEW category value in this file — no entity here had been named after a business before — and is Kenny's to rename if he would rather fold it into something existing.",
    possiblySameAs: null, aliases: []
  },

  // ---- renamed by Ordinance No. 3829, Aug. 1896 ---------------------------

  "cincinnati": {
    spellings: [{ forms: ["Cincinnati Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Renamed Jessie Street on Aug. 31, 1896 by Ordinance No. 3829, along the block between Mateo and Mesquit streets. The ordinance places it “in the Wingerter tract”, which is the only thing said about it anywhere in this corpus.",
    internalNote: "Minted 2026-09-06 from documents/lah-1896-09-03. No sheet here letters it and no Wingerter tract is in the corpus; the ordinance's own extent is what places it. Kines has no Cincinnati Street page (not checked as of minting — the name is a US city and the search would need care). Whether it was named for the city, for somebody, or for a tract feature is unknown.",
    possiblySameAs: null, aliases: []
  },

  "jesse": {
    spellings: [{ forms: ["Jesse Street", "Jessie Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Arrived on Aug. 31, 1896, when Ordinance No. 3829 changed Cincinnati Street, between Mateo and Mesquit, to this name. The ordinance spells it “Jessie”; the modern street is Jesse.",
    internalNote: "Minted 2026-09-06 from documents/lah-1896-09-03 as the `to` of that change. Both spellings sit in one period rather than two: the 1896 ink and the modern sign are the same name and nothing dates the loss of the i. A given name with no person attached — the obvious guess is somebody's daughter or wife, and nothing supports it.",
    possiblySameAs: null, aliases: []
  },

  // ========================================================================
  // Batch of 2026-09-13 — 34 names minted by the map tool's review mode,
  // researched and moved out of names-new.js. Kines coverage is thin here:
  // of the 34, lastreetnames.com covers 7. Every "NOT COVERED BY KINES" below
  // was checked against the site's own ?s= search endpoint on 2026-09-13, so
  // nobody needs to check twice.
  // ========================================================================

  // ---- the Requena Subdivision, 1876 (documents/mr003-146) ----------------

  "requena-street": {
    spellings: [{ forms: ["Requena Street"] }],
    namedAfter: "Almost certainly {{Manuel Requena}} (c. 1802–1876), Campeche-born merchant who settled in Los Angeles in 1834, alcalde under Mexican rule 1844–45, county supervisor, long-serving councilman and briefly acting mayor in 1856, whose own property the street ran through",
    namedAfterLink: "https://en.wikipedia.org/wiki/Manuel_Requena",
    categories: ["person", "alive", "unknown"],
    sources: [
      { title: "Los Angeles Revisited: “Beneath Parker Center” (Requena Street, its earlier name Libertad, and its 1904 change to Market Street)",
        url: "https://losangelesrevisited.blogspot.com/2016/06/beneath-parker-center-paris-inn-cafe.html" },
      { title: "LMU Digital Collections: “Subdivision of the property of Don Manuel Requena, February 1875”",
        url: "https://digitalcollections.lmu.edu/Documents/Detail/subdivision-of-the-property-of-don-manuel-requena-february-1875/11282" }
    ],
    disputed: false,
    note: "The street bounded Requena's own subdivision, and it is still alive in Sept. 1896, when a fire-district boundary is described as running to it (documents/min-1896-09-14). It was changed to Market Street on a July 1904 petition from North Main Street merchants, and the ground is now under Temple Street and the Civic Center. Los Angeles Revisited records that the original length of the street had earlier been called Libertad.",
    internalNote: "Moved from names-new.js 2026-09-13. NOT COVERED BY KINES — checked via lastreetnames.com/?s=Requena, which returns “nothing matched”. ⚠ THE NAMESAKE IS INFERRED, NOT STATED. Neither cited source says the street was named FOR Requena: Los Angeles Revisited only places his property on it (“Requena Street was also where the zanja madre … flowed, making Manuel Requena’s property a prime location”), and the LMU sheet only titles the subdivision as his. The inference — his own subdivision, his own boundary street, his name — is about as safe as an inference gets, hence “Almost certainly”, but `unknown` stays in the categories until something says it outright. Two things to reconcile: the LMU sheet of this subdivision is dated February 1875 and ours (documents/mr003-146) is 1876, so they may be different filings of the same ground; and the 1904 Requena → Market change is from Los Angeles Revisited, not from an instrument — it belongs in WANTED as a renaming to trace. `alive` because the subdivision is his own property, platted in his lifetime.",
    possiblySameAs: null, aliases: []
  },

  "commercial-street": {
    spellings: [{ forms: ["Commercial Street"] }],
    namedAfter: "The businesses it was laid out for",
    namedAfterLink: null,
    categories: ["descriptive"],
    sources: [
      { title: "L.A. Street Names: Commercial Street (“so called because it was set up for businesses”; in print in the Los Angeles Star, June 19, 1852)",
        url: "https://lastreetnames.com/street/commercial-street/" }
    ],
    disputed: false,
    note: "One of the oldest named streets in Los Angeles — in print by June 19, 1852, and on Kines's reading older in practice than Flower or Hope, which were drawn in 1849 but stayed paper streets for years. Nearly the whole corridor was erased in the twentieth century by Civic Center expansion and the Hollywood Freeway.",
    internalNote: "Moved from names-new.js 2026-09-13. Our sighting is the 1876 Requena Subdivision (documents/mr003-146-p2), twenty-four years after the Star advertisement, so this project's ink is not the naming event.",
    possiblySameAs: null, aliases: []
  },

  "wilmington-street": {
    spellings: [{ forms: ["Wilmington Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "A lost downtown street, lettered on the Garden of J. Murat in 1868 (documents/mr010-008) and on the Requena Subdivision in 1876 (documents/mr003-146), and still alive in Sept. 1896, when a fire-district boundary runs along its centre line between First and Requena Streets (documents/min-1896-09-14). Its ground is today Judge John Aiso Street.",
    internalNote: "Moved from names-new.js 2026-09-13. NOT COVERED BY KINES as a downtown street. ★★ KENNY’S OBSERVATION, 2026-09-13, and the sheets bear it out: WILMINGTON AND SAN PEDRO ARE ADJACENT HARBOUR TOWNS, AND THESE WERE ADJACENT PARALLEL STREETS. The Garden of J. Murat sheet of 1868 (documents/mr010-008) letters BOTH — San Pedro Street on the line that is now Astronaut Ellison S. Onizuka Street, and Wilmington Street one block over on the line that is now Judge John Aiso Street. `san-pedro` is securely named for the port town it ran toward, so a companion street named for the town next door, on the same sheet, is the destination principle applied twice. That is a much better argument than the chain previously rejected here (Banning named Wilmington for his Delaware birthplace, therefore the street is named for the town), because it does not depend on Banning at all — but it is still an argument from company rather than a statement, so namedAfter stays null. It also disposes of the annexation objection: naming a street for a neighbouring town in 1868 needs no annexation, and Wilmington was founded in 1863. ⚠ AND THE SAN PEDRO NAME MOVED. The 1868 sheet’s San Pedro Street is today Onizuka; what became NORTH San Pedro Street, and then Judge John Aiso Street, is the WILMINGTON line. So San Pedro appears to have absorbed Wilmington rather than merely neighboured it, and when is undocumented anywhere found. Los Angeles Revisited describes the Aiso renaming as having replaced San Pedro Street and does not mention Wilmington at all. (Kines dates San Pedro → Judge John Aiso to 1997, Wikipedia to 1999.)",
    possiblySameAs: null, aliases: []
  },

  // ---- Bunker Hill and City West ------------------------------------------

  "beaudry-st": {
    spellings: [{ forms: ["Beaudry Street", "Beaudry Avenue"] }],
    namedAfter: "{{Prudent Beaudry}} (c. 1819–1893), Montreal-born merchant turned hillside subdivider who developed Bunker Hill, sat on the City Council from 1871 and was mayor from 1874",
    namedAfterLink: "https://en.wikipedia.org/wiki/Prudent_Beaudry",
    categories: ["person", "alive"],
    sources: [
      { title: "L.A. Street Names: Beaudry Avenue (“Beaudry Avenue itself was born Beaudry Street, at the corner of 6th, on 1868's bluntly-titled Beaudry tract”)",
        url: "https://lastreetnames.com/street/beaudry-avenue/" }
    ],
    disputed: false,
    note: "Named on Beaudry's own 1868 tract (documents/mr001-462), and born as Beaudry Street before drifting to Beaudry Avenue. In Oct. 1890 an ordinance would have changed Beaudry Street, from Bellevue Terrace to Temple Street, to Fremont Avenue — but Mayor Hazard vetoed the whole measure (documents/lah-1890-10-28).",
    internalNote: "Moved from names-new.js 2026-09-13. ⚠ TWO PIECES OF GROUND, possibly two entities. Our row on the 1868 tract is `vanished` — that stretch of Bunker Hill is gone — while modern Beaudry Avenue survives to the west and north, and is the “Beaudry Avenue” used as a cross street in documents/ord-1887-08-22 (which already notes the Street/Avenue drift). Kines treats them as one street; this file has not tested that by geometry. Do not write a change row across the two without checking. Both spellings sit in one period: nothing here dates the generic drift.",
    possiblySameAs: null, aliases: []
  },

  "grand-ave": {
    spellings: [{ forms: ["Grand Avenue"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown", "aspiration"],
    sources: [
      { title: "L.A. Street Names: Grand Avenue (Charity Street, designated 1849, opened 1869; council vote May 10, 1886)",
        url: "https://lastreetnames.com/street/grand-avenue/" },
      { title: "Wikipedia: Grand Avenue (Los Angeles) — renamed Feb. 15, 1887",
        url: "https://en.wikipedia.org/wiki/Grand_Avenue_(Los_Angeles)" }
    ],
    disputed: false,
    note: "The name Charity Street's residents got instead, after petitioning to be rid of jokes about living on charity: the council voted on May 10, 1886 and the change was official on Feb. 15, 1887. They had first asked for “Pacific Avenue”, which was refused because a Pacific Street already existed. No source gives a reason for the word “Grand” beyond its being more pleasing than Charity. The name later grew: in 1895 the city attorney was instructed to draw an ordinance changing Philadelphia Street to Grand Avenue, on petition No. 639 of J. E. Fay et al. (documents/lah-1895-07-02).",
    internalNote: "Moved from names-new.js 2026-09-13; the successor of `charity`, whose note carries the Calle de Caridad side. namedAfter left null on purpose — “Grand” is a chosen-for-sound name and nothing documents an intended referent, so `aspiration` sits beside `unknown` rather than replacing it. A change row charity → grand-ave is warranted but NOT written here: no document in this corpus attests the 1886–87 act, and the dates are Kines's and Wikipedia's. That instrument is worth finding (WANTED).",
    possiblySameAs: null, aliases: []
  },

  "orange-st-wilshire": {
    spellings: [{ forms: ["Orange Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [
      { title: "L.A. Street Names: Orange Street (the old Orange Street ran between Figueroa and Alvarado and “became part of Wilshire in April 1924”)",
        url: "https://lastreetnames.com/street/orange-street/" }
    ],
    disputed: false,
    note: "The street that became the downtown end of Wilshire Boulevard, lettered here on the 1878 Nichols Addition (documents/mr003-569). It took two attempts. In about June 1908 the council renamed it Wilshire Boulevard and sign posts went up, and in December the ordinance was repealed after Wilshire Boulevard's own residents protested — “Orange street is still Orange street” (documents/lah-1908-07-14, documents/lah-1908-12-05). On Apr. 1, 1924 the council passed the change again, unanimously, and Mayor George E. Cryer signed it on Apr. 11 (documents/laevex-1924-04-01, documents/lae-1924-04-12).",
    internalNote: "Moved from names-new.js 2026-09-13. Id keeps the `-wilshire` suffix the tool minted: it disambiguates from the surviving Orange Street in Beverly Grove, which Kines suspects is a deliberate homage to this one. Namesake NOT FOUND and NOT COVERED BY KINES in its own right — his Orange Street page is the Beverly Grove street. The geometry is what ties this to Wilshire: our row on mr003-569 aligns it to modern Wilshire Boulevard, and the ordinance extent (Figueroa to Alvarado) matches. The change row orange-st-wilshire → wilshire is not written yet — the documents are in hand and it is Kenny's to confirm.",
    possiblySameAs: null, aliases: []
  },

  "moore-st": {
    spellings: [{ forms: ["Moore Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [
      { title: "L.A. Street Names: Francisco Street (“the former Moore Street and Okey Street” were renamed Francisco Street in 1903)",
        url: "https://lastreetnames.com/street/francisco-street/" }
    ],
    disputed: false,
    note: "Lettered on the 1878 Nichols Addition (documents/mr003-569) on ground that is modern Francisco Street. Moore Street and Okey Street were together renamed Francisco Street in 1903.",
    internalNote: "Moved from names-new.js 2026-09-13. Namesake NOT FOUND. The identification rests on geometry, not the name: our row aligns this street to modern Francisco Street, and Kines independently names Moore as one of Francisco's two predecessors. Okey Street is not in this corpus and has no entity. No change row written — the 1903 act is Kines's date with no instrument behind it (WANTED).",
    possiblySameAs: null, aliases: []
  },

  "florida-st": {
    spellings: [{ forms: ["Florida Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "A lost street of the 1878 Nichols Addition, west of downtown (documents/mr003-569).",
    internalNote: "Moved from names-new.js 2026-09-13. NOT COVERED BY KINES, and no namesake documented anywhere checked. Whether it is the state, a person or a plant is unknown — the Nichols Addition's other names (Ruby, Ward, Moore, Loomis, Orange) form no theme that would settle it.",
    possiblySameAs: null, aliases: []
  },

  "loomis-st": {
    spellings: [{ forms: ["Loomis Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [
      { title: "George Garrigues, Los Angeles street changes (“Loomis St., south of 6th St., is under the 110”)",
        url: "https://stevemorse.org/census/changes/LosAngelesChanges2.htm" }
    ],
    disputed: false,
    note: "Lettered on the 1878 Nichols Addition (documents/mr003-569), and the street whose name blocked a public work: in Feb. 1893 the city attorney presented an ordinance changing a portion of Loomis Street to Sixth Street to cure a court objection to the opening of Sixth (documents/lah-1893-02-21), and in March the ordinance was returned and laid on the table (documents/lah-1893-03-07). In Jan. 1894 Loomis Street was one of several proposed for Echo Park Road (documents/lah-1894-01-26). What survived is under the Harbor Freeway.",
    internalNote: "Moved from names-new.js 2026-09-13. NOT COVERED BY KINES; no namesake documented. ⚠ The 1893 and 1894 items may not be the same ground as our sheet — our row is `vanished` and is not aligned to 6th Street, and Echo Park is some way north-west. Loomis may simply have been long. Do not merge the three without geometry.",
    possiblySameAs: null, aliases: []
  },

  "ruby-st": {
    spellings: [{ forms: ["Ruby Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "A lost street of the 1878 Nichols Addition (documents/mr003-569), on ground now covered by 8th Place.",
    internalNote: "Moved from names-new.js 2026-09-13. NOT COVERED BY KINES; no namesake documented. ⚠ NOT the Ruby Street of documents/lah-1889-11-06, where “Ruby and Ames” become Thirty-ninth Street — that is far to the south. Two Ruby Streets.",
    possiblySameAs: null, aliases: []
  },

  "ward-st": {
    spellings: [{ forms: ["Ward Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "A lost street of the 1878 Nichols Addition, west of downtown (documents/mr003-569).",
    internalNote: "Moved from names-new.js 2026-09-13. NOT COVERED BY KINES; no namesake documented. ⚠ Probably NOT the Ward Street of documents/lah-1897-12-07, which runs “from Hoover to Bautista” and was to become Sixth Street — that is well west of this one. Check geometry before merging.",
    possiblySameAs: null, aliases: []
  },

  "francisco": {
    spellings: [{ forms: ["Francisco Street"] }],
    namedAfter: "The {{Francisco family}} — an Ohio clan led by Andrew Wiggins “Andy” Francisco (1825–1898), who came to Los Angeles in 1883 and worked in newspapers, real estate and politics — who lived at the corner of 9th and Figueroa",
    namedAfterLink: "https://lastreetnames.com/street/francisco-street/",
    categories: ["person"],
    sources: [
      { title: "L.A. Street Names: Francisco Street (“Named not for San Francisco but for a family who resided on the corner of 9th and Fig”; Moore Street and Okey Street renamed 1903)",
        url: "https://lastreetnames.com/street/francisco-street/" }
    ],
    disputed: false,
    note: "Not named for San Francisco. Moore Street and Okey Street were renamed Francisco Street in 1903, five years after Andy Francisco's death.",
    internalNote: "Moved from names-new.js 2026-09-13. Our sightings are 1964 and 2017 tract maps, long after the naming; the predecessor Moore Street is in this file from the 1878 Nichols Addition. namedAfterLink points at Kines rather than a biography — no Wikipedia article exists for the family.",
    possiblySameAs: null, aliases: []
  },

  "ingraham": {
    spellings: [{ forms: ["Ingraham Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "A street of the City West pocket, west of downtown.",
    internalNote: "Moved from names-new.js 2026-09-13. NOT COVERED BY KINES, and no namesake documented in any accessible source — checked Kines, Los Angeles Revisited (including its street-origins index), the Wikipedia LA County etymology list, LAPL's street-name posts and Garrigues. Presumably the subdivider of the Bixel/Witmer pocket; no person found to attach. Likely needs ordinance files or the original tract map.",
    possiblySameAs: null, aliases: []
  },

  "kip-street": {
    spellings: [{ forms: ["Kip Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [
      { title: "George Garrigues, Los Angeles street changes (“Kip St. — north of 7th St., now under the 110”)",
        url: "https://stevemorse.org/census/changes/LosAngelesChanges2.htm" }
    ],
    disputed: false,
    note: "A short street of the City West pocket, north of 7th Street; what there was of it is under the Harbor Freeway.",
    internalNote: "Moved from names-new.js 2026-09-13. NOT COVERED BY KINES; no namesake documented. The genealogy “History of the Kip Family in America” is a New York Dutch lineage with no established Los Angeles connection — do not use it.",
    possiblySameAs: null, aliases: []
  },

  "wilshire": {
    spellings: [{ forms: ["Wilshire Boulevard"] }],
    namedAfter: "{{H. Gaylord Wilshire}} (1861–1927), developer, publisher and socialist candidate, who subdivided the tract the first stretch ran through",
    namedAfterLink: "https://en.wikipedia.org/wiki/H._Gaylord_Wilshire",
    categories: ["person", "alive"],
    sources: [
      { title: "Council minutes, Sept. 21, 1896 — H. G. Wilshire's petition about Sixth Street (documents/min-1896-09-21)",
        url: "https://clerkapps.lacity.org/oldcfidocs/" },
      { title: "Los Angeles Herald, Dec. 7, 1897 — “Sixth street, Hoover street to west city boundary, changed to Wilshire boulevard” (documents/lah-1897-12-07)",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18971207.1.11" }
    ],
    disputed: false,
    note: "Named in Dec. 1897, when Sixth Street from Hoover Street to the west city boundary was changed to Wilshire Boulevard — fifteen months after H. G. Wilshire petitioned the council about that street. The name then travelled east in stages: Orange Street, between Figueroa and Alvarado, was folded into it in April 1924 after a first attempt in 1908 had been repealed (documents/laevex-1924-04-01, documents/lae-1924-04-12). The council's stated aim in 1924 was “a continuous thoroughfare from the heart of the business district of the city to the ocean”.",
    internalNote: "Moved from names-new.js 2026-09-13. Unusually well anchored for a name in this batch: both the petition and the naming are primary records already in this corpus, so no secondary citation is needed. `alive` — Wilshire was 36 at the naming. Our two sightings are 1964 and 2017 tract maps.",
    possiblySameAs: null, aliases: []
  },

  "park-lane": {
    spellings: [{ forms: ["Park Lane"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [
      { title: "Los Angeles Revisited: “The Alleys of Downtown L.A.” (Park Lane, 6th to 7th between Figueroa and Flower, renamed Lebanon Street in 1897)",
        url: "https://losangelesrevisited.blogspot.com/2018/05/the-alleys-of-downtown-la-infamous.html" }
    ],
    disputed: false,
    note: "An alley running from 6th to 7th Street between Figueroa and Flower, lettered on Block 22½ of Hancock's Survey in 1875 (documents/mr003-016). It was renamed Lebanon Street in 1897.",
    internalNote: "Moved from names-new.js 2026-09-13. NOT COVERED BY KINES; no namesake documented, and the name reads as descriptive without a source saying so, hence `unknown` rather than `descriptive`. ★ Connects to `alexander-lane`, which this file already records as absorbed into “the Lebanon Street continuation” in 1917 — so Lebanon Street took in at least two older lanes, twenty years apart. No Lebanon Street entity exists yet; both changes want instruments before rows.",
    possiblySameAs: null, aliases: []
  },

  // ---- Ozier Lane becomes Winston Street, 1887 ----------------------------
  // One lineage under two names, tied together by geometry: the 1881 Rivara
  // and Vignolo Tract letters "Ozier Lane" on the ground our 1886 and 1889
  // sheets letter "Winston Street" (documents/mr005-110, mr012-026, mr039-069).

  "ozier-lane": {
    spellings: [{ forms: ["Ozier Lane"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "A downtown lane between Main and Los Angeles Streets near 5th, lettered on the Rivara and Vignolo Tract in 1881 (documents/mr005-110). In June 1887 an ordinance changing its name to Winston Street was before the council and action was postponed (documents/lah-1887-06-14); the change was made later that year.",
    internalNote: "Moved from names-new.js 2026-09-13. NOT COVERED BY KINES; no namesake documented for this lane. ⚠ A tempting but UNPROVEN link: Wikipedia renders the predecessor of Winston Street as “Ogier Street”, and Los Angeles Revisited documents an Ogier Street named for Judge Isaac Stockton Keith Ogier (1819–1861) — but that one is north of Macy, appears in directories only from 1897, and died under the Terminal Annex. It is a DIFFERENT street from this lane, which was already renamed by 1887. The spelling correspondence Ozier/Ogier is suggestive and the attribution is not transferable.",
    possiblySameAs: null, aliases: []
  },

  "winston-st": {
    spellings: [{ forms: ["Winston Street"] }],
    namedAfter: "{{James Brown Winston}} (1820–1884), the city's first health officer, Common Council member, county supervisor and who with his wife operated the Bella Union Hotel, and who had lived on the street",
    namedAfterLink: "https://en.wikipedia.org/wiki/James_Brown_Winston",
    categories: ["person"],
    sources: [
      { title: "Wikipedia: James Brown Winston (“In 1887, the City Council honored Winston by changing the name of Ogier Street, on which he had lived, to Winston Street”)",
        url: "https://en.wikipedia.org/wiki/James_Brown_Winston" },
      { title: "Los Angeles Herald, June 14, 1887 — “An ordinance changing the name of Ozier Lane to Winston street. Action postponed.” (documents/lah-1887-06-14)",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18870614.1.2" }
    ],
    disputed: false,
    note: "Given to Ozier Lane in 1887, three years after Winston's death, for a man who had lived on it. The council's first attempt was postponed in June (documents/lah-1887-06-14).",
    internalNote: "Moved from names-new.js 2026-09-13. NOT COVERED BY KINES — the namesake is Wikipedia's, citing a county biography. ★ A NAME IN USE BEFORE IT WAS OFFICIAL: Mills' Tract letters “Winston Street” in Nov. 1886 (documents/mr012-026), seven months before the June 1887 ordinance was postponed. That is the same gap between used and official names seen at Fort Street/Broadway in 1908 and at Orange Street/Sunset Place — worth checking whether the tract's recording date is later than its survey date before leaning on it. Wikipedia spells the predecessor “Ogier”; our ordinance and our 1881 sheet both say “Ozier”. No change row written: the June ordinance was postponed and the act that carried it has not been found (WANTED).",
    possiblySameAs: null, aliases: []
  },

  // ---- El Aliso and the Union Station ground ------------------------------

  "vignes-street": {
    spellings: [{ forms: ["Vignes Street"] }],
    namedAfter: "The {{Vignes family}}, principally Jean-Louis Vignes (1780–1862), the Bordeaux-born cooper who bought 104 acres beside the El Aliso sycamore and founded California's first commercial winery",
    namedAfterLink: "https://en.wikipedia.org/wiki/Jean-Louis_Vignes",
    categories: ["person"],
    sources: [
      { title: "L.A. Street Names: Vignes Street (named 1874; “the street is named for the family”)",
        url: "https://lastreetnames.com/street/vignes-street/" }
    ],
    disputed: false,
    note: "Named in 1874, twelve years after Jean-Louis Vignes's death, on the ground of his El Aliso vineyard. His nephews Jean-Marie (1826–1906) and Vital (1827–1902) worked the winery from about 1850 and became prominent Angelenos, and their obituaries claimed them as the namesakes — which is why Kines settles on the family rather than the uncle alone.",
    internalNote: "Moved from names-new.js 2026-09-13. Recorded as a FAMILY naming on Kines's explicit reasoning, not as an unambiguous dedication to Jean-Louis. Our only sighting is a 1928 tract (documents/tr0145-062), fifty-four years after the naming.",
    possiblySameAs: null, aliases: []
  },

  "banning-street": {
    spellings: [{ forms: ["Banning Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "A short street on the Union Station ground, near Alameda and Vignes Streets.",
    internalNote: "Moved from names-new.js 2026-09-13. NOT COVERED BY KINES — his only Banning street is Banning Boulevard in Carson/Wilmington, which he attributes to Phineas Banning (1830–1885). Phineas is the obvious candidate for any Banning street in this county and a rail-adjacent tract by the station fits him, but NO SOURCE says so for this street, so namedAfter stays null. Left deliberately, not overlooked.",
    possiblySameAs: null, aliases: []
  },

  "turner-street": {
    spellings: [{ forms: ["Turner Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Lettered near Alameda Street on Tract No. 9771 (documents/tr0145-062). In May 1883 the council passed an ordinance changing Turner Street, from First to Alameda, to Jackson Street (documents/lah-1883-05-13).",
    internalNote: "Moved from names-new.js 2026-09-13. NOT COVERED BY KINES; no namesake documented — and two candidates are worth warning off: Joel Turner, a mayor of a different city, and the Los Angeles Turnverein, whose hall was not on this street. ⚠ TWO TURNER STREETS IN 1883. Ours aligns by geometry to modern Jackson Street, matching the May 1883 First-to-Alameda change; the OTHER, “Turner street, west of Main street”, became Sonora Street in the Aug./Sept. 1883 omnibus (documents/lah-1883-08-19, lah-1883-09-02). Do not merge them. ⚠ Also unresolved: our sheet is dated 1928 and still letters Turner, forty-five years after the Jackson change — either the sheet uses a historic name, or Turner survived alongside Jackson on adjoining ground. No change row until that is settled.",
    possiblySameAs: null, aliases: []
  },

  // ---- the wine and produce district, 7th to 9th at Central ---------------

  "kohler": {
    spellings: [{ forms: ["Kohler Street"] }],
    namedAfter: "{{Charles Kohler}} (1830–1887), German-born musician turned wine merchant who with John Frohling built California's largest wine house from 1856 and co-founded Anaheim in 1857, and who worked the Los Angeles vineyards this street crosses",
    namedAfterLink: "https://en.wikipedia.org/wiki/Charles_Kohler",
    categories: ["person"],
    sources: [
      { title: "L.A. Street Names: Kohler Street (named 1887, months after Kohler's death; the original Kohler Street ran where 9th Street now runs between San Pedro and Alameda)",
        url: "https://lastreetnames.com/street/kohler-street/" }
    ],
    disputed: false,
    note: "Named in 1887, months after Kohler was felled by a stroke in San Francisco.",
    internalNote: "Moved from names-new.js 2026-09-13. ⚠ TWO KOHLER STREETS. Kines says the ORIGINAL Kohler Street ran where 9th Street now runs between San Pedro and Alameda, and that the current one was named in 1887. Our four sightings run 1887–1927 (documents/mr021-046, mr054-051, tr0105-001-p2, tr0141-011) and are all on the current street; whether any of them letters the older one has not been checked. Also note the date tension: our Kohler Tract sheet is 1894, seven years after Kines's naming date, so the tract is not the naming event.",
    possiblySameAs: null, aliases: []
  },

  "merchant-st": {
    spellings: [{ forms: ["Merchant Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Runs beside Kohler Street through the old vineyard ground between 7th and 8th at Central Avenue, and is lettered with it on every sheet in this corpus that shows either (documents/mr021-046, mr054-051, tr0001-046, tr0141-011).",
    internalNote: "Moved from names-new.js 2026-09-13. NOT COVERED BY KINES; nothing states whether it is descriptive or commemorative. An unsupported lead, recorded so it is not mistaken for a finding: Kines calls the Kohler and Frohling firm California's largest wine MERCHANT house, and Merchant Street is lettered alongside Kohler Street on the Kohler Tract — which makes a commemorative reading imaginable. No source asserts it.",
    possiblySameAs: null, aliases: []
  },

  "melendrez-st": {
    spellings: [{ forms: ["Melendrez Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Lettered on two tracts recorded the same day in Nov. 1887 (documents/mr026-059, mr026-060), along ground that is part of modern Gladys Avenue. The name is lost; the street is not.",
    internalNote: "Moved from names-new.js 2026-09-13. ✓ PLACEMENT VERIFIED 2026-09-13 (Kenny asked): projecting the rows through each sheet’s own alignment puts Melendrez on Gladys Avenue between 8th Street and 9th — 34.0359,-118.2460 to 34.0349,-118.2467, against modern Gladys × 8th at 34.0359,-118.2460. The tracts are placed correctly. ★ AND THE THREE-NAMES-ON-ONE-LINE PUZZLE RESOLVES AS ADJACENT SEGMENTS rather than an alignment error: `helena-ave` is Gladys from 7th to 8th, this is Gladys from 8th to 9th, and `gladys` is the name that ended up covering the run. Modern Gladys Avenue was assembled from differently-named segments on adjoining 1887 tracts — the same operation the boulevards performed on a larger scale. NOT COVERED BY KINES, and no namesake found in any accessible source; searches returned only surname-genealogy aggregators with no Los Angeles content. A Californio surname on an 1887 boom tract fits the pattern of a landowner or subdivider, but that is a pattern, not evidence. Likely needs county recorder, Sanborn or city-directory work.",
    possiblySameAs: null, aliases: []
  },

  "elmore-ave": {
    spellings: [{ forms: ["Elmore Avenue"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Lettered on the Valenzuela Tract of June 1887, near 7th and 8th Streets at Ceres and Gladys Avenues (documents/mr018-092).",
    internalNote: "Moved from names-new.js 2026-09-13. NOT COVERED BY KINES; no namesake documented. Nor is the Valenzuela family of the tract itself documented anywhere found, so the usual fallback — a subdivider naming streets for relatives — cannot be tested here.",
    possiblySameAs: null, aliases: []
  },

  "helena-ave": {
    spellings: [{ forms: ["Helena Avenue"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Lettered with Elmore Avenue on the Valenzuela Tract of June 1887 (documents/mr018-092).",
    internalNote: "Moved from names-new.js 2026-09-13. ✓ PLACEMENT VERIFIED 2026-09-13 (Kenny asked): projected through the Valenzuela Tract’s own alignment, Elmore lands on Ceres Avenue between 7th and 8th to within a metre of the modern intersections, and Helena lands on Gladys Avenue over the same block. The sheet is placed correctly. See `melendrez-st` for why Gladys carries three historic names — they are adjacent segments. NOT COVERED BY KINES — he has no Helena Avenue or Helena Street at all. ⚠ Do NOT connect this to 1st Helena Drive in Brentwood, nor to the Helena Modjeska streets. A follow-up search of Helena, Elmore and Valenzuela TOGETHER (2026-09-13, Kenny’s suggestion, on the theory that the pair might be a couple or siblings) returned nothing historical at all — no Los Angeles Valenzuela family with either name, and no evidence that Elmore was even a surname here. Worth noting that Elmore and Helena are both distinctly Anglo names sitting oddly on a Spanish-surname tract, which fits the common boom-year pattern in which the TRACT name honours the prior owner while the STREET names come from an Anglo syndicate that bought or optioned the parcel. Untested: the remaining leads are offline — the Recorder’s June 1887 book of maps names the recording party, and archive.org full-text search of the 1889 Illustrated History was blocked.",
    possiblySameAs: null, aliases: []
  },

  "parker-drive": {
    spellings: [{ forms: ["Parker Drive"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Lettered on the J. B. Parker Subdivision of April 1898, near 8th Street and Central Avenue (documents/mr070-051).",
    internalNote: "Moved from names-new.js 2026-09-13. NOT COVERED BY KINES. The subdivision's own title is the evidence and it is self-documenting — the street is named from the subdivider — but WHO J. B. Parker was is undocumented in every source checked, so namedAfter stays null rather than asserting a person nobody has identified. This is the cleanest case in the batch of a name whose origin is obvious and whose namesake is unknown.",
    possiblySameAs: null, aliases: []
  },

  // ---- the Wolfskill and Sabichi women's names ----------------------------

  "agatha": {
    spellings: [{ forms: ["Agatha Street"] }],
    namedAfter: "Probably {{Agatha Sabichi}} (1871–1963), fourth of the thirteen children of the attorney and council president Frank Sabichi and Magdalena Wolfskill, on whose father's land the street was named",
    namedAfterLink: "https://en.wikipedia.org/wiki/Frank_Sabichi",
    categories: ["person", "alive", "unknown"],
    sources: [
      { title: "L.A. Street Names: Agatha Street (“This 1897 street surely honors Agatha Sabichi (1871-1963) as it was named on land owned by her father, a very prominent Angeleno in his day”)",
        url: "https://lastreetnames.com/street/agatha-street/" },
      { title: "Wikipedia: Frank Sabichi (children include “Agatha (Mrs. J. J. Fay)”; “credited with opening and developing East 7th Street on his family properties”)",
        url: "https://en.wikipedia.org/wiki/Frank_Sabichi" }
    ],
    disputed: false,
    note: "Named in 1897, on land owned by Frank Sabichi, who had married Magdalena Wolfskill and was credited with opening East 7th Street through the family properties. Agatha Sabichi worked as a bank clerk and in 1908 married John Joseph Fay Jr., later president of the water board.",
    internalNote: "Moved from names-new.js 2026-09-13. HEDGED ON PURPOSE: Kines’s own wording is “surely honors”, which is his inference from the land’s ownership, not a cited naming document — hence “Probably”, and `unknown` kept alongside `person`. Wikipedia independently confirms the daughter and the land, but does not mention Agatha Street at all and cannot be cited for the naming. Note that `gladys-ave` already carried the Sabichi/Wolfskill link and cited the same sheet (Wilde and Strong’s Subdivision of the Frank Sabichi Tract, M.R. 66-64) before this entity existed; what is new here is the Kines page for Agatha herself. ⚠ BIRTH YEAR IN DISPUTE, flagged 2026-09-14 and NOT resolved: Kines gives 1871–1963 and this entity follows him, but Find a Grave’s Sabichi plot gives Agatha Sabichi Fay as 1881–1963 — death year agreeing, birth year ten years apart. A sibling, Leopold Albert Sabichi, is also given as 1881. It matters: at the 1897 naming she is either 26 or 16, and on the 1881 reading she and Ruth Wolfskill (`ruth-ave`) are first cousins BOTH BORN IN 1881, each with a street named on her own father’s land nine years apart — which would be a real pattern rather than two coincidences. Resolve before leaning on Agatha as the methodological control in handbook/FAMILY-NAMES.md. The 1900 census, or the Calvary Cemetery interment book, decides it.",
    possiblySameAs: null, aliases: []
  },

  // ---- the Arts District --------------------------------------------------

  "messer-street": {
    spellings: [{ forms: ["Messer Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Lettered with Rose Street on the Johnston Tract of March 1871, between 1st and 2nd Streets east of Alameda (documents/mr002-092).",
    internalNote: "Moved from names-new.js 2026-09-13. NOT COVERED BY KINES; no namesake documented. ⚠ Do not conflate with Mesmer Avenue in Westchester (the Mesmer family) — different name, and the likeliest false positive. The tool's spelling period carries the plat's terminal full stop (“Messer STREET.”); normalised here to “Messer Street”.",
    possiblySameAs: null, aliases: []
  },

  "rose-street": {
    spellings: [{ forms: ["Rose Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Lettered on the Johnston Tract of March 1871 east of Alameda (documents/mr002-092) and still running through the Arts District today.",
    internalNote: "Moved from names-new.js 2026-09-13. NOT COVERED BY KINES; no namesake documented. ⚠ THREE ROSE STREETS, and this is the one that survived. NOT the Rose Street of East Los Angeles that became Kuhrts Street in the Aug./Sept. 1883 omnibus (documents/lah-1883-08-19, lah-1883-09-02); and NOT the Highland Park Rose Street that Kines says became Thorne Street. The tool's spelling period carries the plat's terminal full stop; normalised here.",
    possiblySameAs: null, aliases: []
  },

  "traction-avenue": {
    spellings: [{ forms: ["Traction Avenue"] }],
    namedAfter: "The {{electric traction motor}} that powered the streetcars running along it",
    namedAfterLink: "https://en.wikipedia.org/wiki/Traction_motor",
    categories: ["descriptive"],
    sources: [
      { title: "L.A. Street Names: Traction Avenue (the former Stephenson Ave. renamed in 1915; “the word referred to the electric traction motor that powered streetcars via a trolley pole”)",
        url: "https://lastreetnames.com/street/traction-avenue/" }
    ],
    disputed: false,
    note: "Stephenson Avenue until 1915, when it was renamed to avoid confusion with the larger Stephenson Avenue on the East Side — which itself became Whittier Boulevard five years later. Traction-powered trolleys ran along it to the nearby Santa Fe depot.",
    internalNote: "Moved from names-new.js 2026-09-13. ⚠ KINES DOES NOT name the Los Angeles Traction Company — he names the TECHNOLOGY, and the company appears on his page only in a photo caption (“Los Angeles Traction Company car c. 1900”). That is a statement about Kines, not about every source: the company did operate here in the right period and no wider survey has been done; and the chronology cuts against the company reading anyway — the company was bought by the Southern Pacific in 1903 and folded into the Los Angeles Railway by 1911, four to twelve years before the 1915 renaming. Do not assert the company link. No Stephenson Avenue entity exists yet; the 1915 change wants an instrument (WANTED).",
    possiblySameAs: null, aliases: []
  },

  // ---- Little Tokyo -------------------------------------------------------

  "japanese-village-plaza-mall": {
    spellings: [{ forms: ["Japanese Village Plaza Mall"] }],
    namedAfter: "{{Japanese Village Plaza}}, the Little Tokyo shopping centre built around it in 1978",
    namedAfterLink: "https://discovernikkei.org/en/journal/2016/11/16/shopping-mall/",
    categories: ["place"],
    sources: [
      { title: "Discover Nikkei: “Shopping Mall in Little Tokyo” (built 1978 by an association of 22 local Japanese American businesses; architect and developer David Hyun)",
        url: "https://discovernikkei.org/en/journal/2016/11/16/shopping-mall/" }
    ],
    disputed: false,
    note: "The walkway through Japanese Village Plaza, built in 1978 after two earlier attempts failed, by an association of twenty-two local Japanese American businesses that raised $1.4 million from community merchants and professionals. It was designed by David Hyun (1917–2012), the first Korean American architect in United States immigration history, with imported Sanshu blue roof tiles and a five-storey yagura fire tower at the First Street entrance.",
    internalNote: "Moved from names-new.js 2026-09-13. NOT COVERED BY KINES. A development name rather than a namesake, so `place`. Businesses carry postal addresses on it (“100 Japanese Village Plaza Mall”), but whether it is a dedicated public right-of-way or a private way with city-assigned addressing is NOT established — given its CRA-era origins the latter is likelier, and that is an inference. The youngest name in this file by some margin.",
    possiblySameAs: null, aliases: []
  },

  "woodworth-court": {
    spellings: [{ forms: ["Woodworth Court"] }],
    namedAfter: "Probably {{Wallace Woodworth}} (1832–1882), an early settler whose adobe and later house stood at Second and San Pedro Streets, on the ground this court occupies",
    namedAfterLink: "https://oac.cdlib.org/findaid/ark:/13030/c8wd41ck/",
    categories: ["person", "unknown"],
    sources: [
      { title: "Online Archive of California: Woodworth Collection finding aid (“the Woodworth adobe at Second and San Pedro Streets was replaced with a house”)",
        url: "https://oac.cdlib.org/findaid/ark:/13030/c8wd41ck/" },
      { title: "Calisphere: house of Wallace Woodworth (1832–1882) on San Pedro Street between 1st and 2nd",
        url: "https://calisphere.org/item/507151935ea7e85871c3aad994c50b98/" }
    ],
    disputed: false,
    note: "A short court in Little Tokyo, near 2nd and San Pedro Streets. Wallace Woodworth came to Los Angeles in the early 1850s and ran Perry-Woodworth and Company in furniture and woodworking supplies; his house stood on this corner, next to the Antonio Maria Lugo adobe — his widow Maria was Lugo's great-granddaughter.",
    internalNote: "Moved from names-new.js 2026-09-13. HEDGED: the sources place the Woodworth home on exactly this corner, but NO source states that the court was named for him — the connection is this project's inference from the location, hence “Probably” and `unknown` alongside `person`. NOT COVERED BY KINES. Our only sighting is a 1980 tract (documents/tr0938-051-p3), a century after Woodworth's time, so the naming event is unlocated.",
    possiblySameAs: null, aliases: []
  },

  // ---- and one lane on the Botiller and Reyes lots ------------------------

  "moran-s-lane": {
    spellings: [{ forms: ["Moran's Lane"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "A lane on the Botiller and Reyes lots of 1873, between Main and Spring Streets around 7th to 9th (documents/11824).",
    internalNote: "Moved from names-new.js 2026-09-13. NOT COVERED BY KINES; no namesake documented. ⚠ Explicitly ruled out: John P. Moran (1857–1916), council member from 1879 and council president 1881–83, is the name the searches surface — and he was sixteen when this lane was lettered. If it honours a Moran it is a parent or the family, and nothing supports even that. Separately, research-leads.md records a Moran Tract of 1887 in the same part of town (M R 16-27), which may or may not be the same family; it is NOT the same document as this one.",
    possiblySameAs: null, aliases: []
  },

};

if (typeof module !== "undefined") module.exports = { NAME_ENTITIES };
