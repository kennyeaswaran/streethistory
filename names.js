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
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Very likely the “other, now-defunct Georgia Street” whose existence forced the 1889 renaming of the unrelated west-downtown Georgia Street to Georgia Bell Street.",
    possiblySameAs: null, aliases: []
  },

  // West-downtown Georgia: christened on Bell land by 1874; renamed Georgia
  // Bell (folding in stretches platted Nevada) 1889; reverted to Georgia by
  // the 1897 council compromise. One entity, three spelling periods (the
  // revert RESUMES the entity — decision log above). The 1889 and 1897
  // transition dates are carried by document rows (ord-4093 and the Herald
  // reports), so only the first period needs prose dating.
  "georgia-bell": {
    spellings: [
      // Periods 1 and 2 are attested only in prose (Kines; Forman's Feb. 18,
      // 1897 testimony) — no document rows to derive dates from — so they
      // carry explicit dates and their own sources (§3, prose exception).
      // The 2→3 boundary is pinned by ord-4093's respelling row instead.
      { forms: ["Georgia Street"], disambiguation: "west downtown",
        from: "1874", until: "1889",
        source: { title: "L.A. Street Names: Georgia Street",
                  url: "https://lastreetnames.com/street/georgia-street/" } },
      { forms: ["Georgia Bell Street"],
        from: "1889",
        source: { title: "Los Angeles Herald, “A Storm of Words” (Forman: renamed Georgia Bell May 10, 1889), Feb. 19, 1897",
                  url: "https://cdnc.ucr.edu/?a=d&d=LAH18970219.2.24" } },
      { forms: ["Georgia Street"], disambiguation: "west downtown" }
    ],
    namedAfter: "{{Georgia Herrick Bell}} (1845–1899), wife of Major Horace Bell, on whose land the street was laid out",
    namedAfterLink: "https://lastreetnames.com/street/georgia-street/",
    categories: ["person", "alive"],
    sources: [
      { title: "L.A. Street Names: Georgia Street",
        url: "https://lastreetnames.com/street/georgia-street/" },
      { title: "Los Angeles Herald, “A Storm of Words” (Forman's dated history), Feb. 19, 1897",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18970219.2.24" }
    ],
    disputed: false,
    note: null,
    possiblySameAs: null, aliases: []
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
    namedAfter: "Not documented; most likely {{Caroline Howard (n\u00e9e Huber)}}, wife of the tract developer Dr. Frederick Preston Howard \u2014 the same inference that explains Carolina Street, one block east, now Hewitt Street",
    namedAfterLink: "https://lastreetnames.com/street/colyton-street/",
    categories: ["person", "unknown"],
    sources: [
      { title: "L.A. Street Names: Colyton Street (Howard\u2019s tract; Carolina St. for his wife Caroline n\u00e9e Huber)",
        url: "https://lastreetnames.com/street/colyton-street/" },
      { title: "Recorded map: F.P. Howard & Co.\u2019s Subdivision of the Bliss Tract, M.R. 12-42 (Aug. 1886) \u2014 shows \u201cHuber Street\u201d at 828 E 4th St\u2019s location",
        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR012/MR012-042.pdf" },
      { title: "Recorded map: Mills and Wicks Extension of Second St., M.R. 13-87 \u2014 shows \u201cHUBER ST.\u201d as its south boundary, Apr.\u2013May 1886",
        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf" }
    ],
    disputed: false,
    note: "Named on the 1886 subdivisions between Alameda and the Santa Fe grounds; the namesake is an inference from the neighbouring Carolina Street, not a record.",
    internalNote: "The reasoning is already worked out in streets-data.js (4th Street, \u201cAlameda to Hewitt (Huber St)\u201d) and handbook/research-leads.md. STILL UNPROVEN: nothing documents Huber -> 4th/Larkin/Short by name; research-leads asks for a CDNC or 1890s city-directory search. NB the Bliss Tract sheet is M.R. 12-42 \u2014 inbox/MR011-042.pdf is the Goodwin Tract, a different sheet, so 12-42 still needs downloading.",
    possiblySameAs: null, aliases: []
  },

  // ---- the 1884 Glassell tract (M.R. 6-138) -------------------------------
  // Andrew Glassell subdivided Lot 7 etc. of Block 39, Hancock Survey No. 1,
  // and put his nephew and law partner's name on a street through it. The rest
  // of that plat's names are in names-new.js, still unresearched.

  "aztec-avenue": {
    spellings: [{ forms: ["Aztec Avenue"] }],
    namedAfter: "The {{Aztec}} empire — one of a conquest theme Andrew Glassell ran through his 1884 subdivision, alongside Cortez Street for Hern\u00e1n Cort\u00e9s and Montezuma Avenue (now Dawson Street) for Moctezuma II",
    namedAfterLink: "https://en.wikipedia.org/wiki/Aztecs",
    categories: ["place", "history"],
    sources: [
      { title: "L.A. Street Names: Cortez Street (\u201cwhat is now Belmont Avenue was called Aztec Avenue and what is now Dawson Street was called Montezuma Avenue\u2026 Glassell was clearly going for a theme here\u201d)",
        url: "https://lastreetnames.com/street/cortez-street/" },
      { title: "Recorded map: Glassell\u2019s Subdivision of Lot No. 7 etc., Block 39, Hancock Survey No. 1, M.R. 6-138",
        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf" }
    ],
    disputed: false,
    note: null,
    internalNote: "Kines\u2019s Cortez Street page names the theme and confirms Aztec Avenue = modern Belmont Avenue independently of our alignment, which is a clean check on the AI pass. It attributes Cortez/Aztec/Montezuma to \u201cGlassell\u2019s Subdivision No. 2\u201d, 1884; M.R. 6-138 is Glassell\u2019s subdivision of Lot 7 etc. and draws Aztec, so the two are the same tract family \u2014 worth pinning down which sheet is which. Montezuma Avenue = Dawson Street is NOT yet an entity; Dawson was dropped from MR006-138 as polygon overshoot, so it needs its own document. Pizarro Street sits 206 m away and has no Kines page.",
    possiblySameAs: null, aliases: []
  },

  "patton-street": {
    spellings: [{ forms: ["Patton Street"] }],
    namedAfter: "{{George Smith Patton (1856–1927)}}, the attorney who developed the street — nephew and law partner of Andrew Glassell, who subdivided the adjoining tract the following year, and father of the WWII general",
    namedAfterLink: "https://en.wikipedia.org/wiki/George_S._Patton_(attorney)",
    categories: ["person"],
    sources: [
      { title: "L.A. Street Names: Patton Street (\u201cThis 1883 street was named for its developer, attorney George Smith Patton (1856-1927)\u201d)",
        url: "https://lastreetnames.com/street/patton-street/" },
      { title: "L.A. Street Names: Glassell Street (Glassell\u2019s firm; \u201chis nephew George S. Patton replaced Smith\u201d)",
        url: "https://lastreetnames.com/street/glassell-street/" },
      { title: "Wikipedia: George S. Patton (attorney)",
        url: "https://en.wikipedia.org/wiki/George_S._Patton_(attorney)" }
    ],
    disputed: false,
    note: "Kines dates the naming to 1883, a year before M.R. 6-138 was recorded, so the plat draws a street that already had the name — consistent with the document's planned-by default. Not to be confused with Patton Avenue/Place elsewhere in the county.",
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
    note: "Known only from the 1875 Thomas Tract map, in 2nd Street's position east of Alameda.",
    possiblySameAs: null, aliases: []
  },

  "garey": {
    spellings: [{ forms: ["Garey Street"] }],
    namedAfter: "Almost certainly Thomas Andrew Garey (1830–1909), citrus nurseryman and co-founder of Pomona — his was the only Garey family in town when the street was named",
    namedAfterLink: null,
    categories: ["person", "alive"],
    sources: [
      { title: "L.A. Street Names: Garey Street",
        url: "https://lastreetnames.com/street/garey-street/" }
    ],
    disputed: false, note: null, possiblySameAs: null, aliases: []
  },

  "hewitt": {
    spellings: [{ forms: ["Hewitt Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false, note: null, possiblySameAs: null, aliases: []
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
      { title: "Los Angeles Herald, “City and Suburbs,” Feb. 27, 1874",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18740227.2.10" },
      { title: "Los Angeles Herald, “A Storm of Words” (Toberman's claim), Feb. 19, 1897",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18970219.2.24" }
    ],
    disputed: false, note: null, possiblySameAs: null, aliases: []
  },

  "chapules": {
    spellings: [{ forms: ["Calle de los Chapules"],
                  from: "1849", until: "1874",
                  source: { title: "L.A. Street Names: Figueroa Street",
                            url: "https://lastreetnames.com/street/figueroa-street/" } }],
    namedAfter: "The insect (“Grasshopper Street”): grasshoppers crossing this line from the western plains doomed the grape harvest",
    namedAfterLink: null,
    categories: ["nature"],
    sources: [
      { title: "L.A. Street Names: Figueroa Street",
        url: "https://lastreetnames.com/street/figueroa-street/" }
    ],
    disputed: false, note: null, possiblySameAs: null, aliases: []
  },

  "boylston": {
    spellings: [{ forms: ["Boylston Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "The Feb. 2, 1897 draft ordinance would have made this street “De La Guerra”; the council's Feb. 23 amendments made it Boylston instead — De La Guerra was only ever draft text.",
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
    note: "Vine north of 1st kept its name in 1897; that stretch no longer exists.",
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
        url: "https://lastreetnames.com/street/towne-avenue-dtla/" },
      { title: "Recorded map: Wolfskill Orchard Tract, M.R. 30-9/13 (surveyed by J.H. Dockweiler, July–Aug. 1887; recorded Jan. 11, 1888)",
        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf" }
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
    categories: ["person", "governor"],
    sources: [
      { title: "L.A. Street Names: Towne Avenue (recounts the Crocker/Stanford street swap)",
        url: "https://lastreetnames.com/street/towne-avenue-dtla/" },
      { title: "Wikipedia: Leland Stanford",
        url: "https://en.wikipedia.org/wiki/Leland_Stanford" },
      { title: "Recorded map: Wolfskill Orchard Tract, M.R. 30-9/13 (surveyed by J.H. Dockweiler, July–Aug. 1887; recorded Jan. 11, 1888)",
        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf" }
    ],
    disputed: false,
    note: "Part of the same 1887 Southern Pacific package as Towne Avenue. The name did not " +
      "stay put: the street platted “Stanford” in 1887 is modern Crocker Street, and " +
      "the Stanford name moved a block east onto the former Ruth Avenue — modern Stanford " +
      "Avenue — some time after Feb. 1897.",
    internalNote: "ROWS ON THIS ENTITY SIT ON MODERN CROCKER STREET, and that is correct: " +
      "mr030-009 letters “Stanford Ave” there. The transfer onto modern Stanford " +
      "Avenue is not yet a document row; when the swap ordinance is found it wants a `change` " +
      "row. The exact year is unresearched — streets-data.js only establishes that Ruth " +
      "was still Ruth in Feb. 1897.",
    possiblySameAs: null, aliases: []
  },

  // The other half of the swap. Crocker is the name that arrived on the 1887
  // "Stanford Avenue" when the Stanford name left it — so this entity and
  // stanford-ave describe the same ground at different times, and neither is
  // the other's continuation: they are two namings, both for railroad men.
  "crocker-street": {
    spellings: [{ forms: ["Crocker Street"] }],
    namedAfter: "{{Charles Crocker}} (1822–1888), Southern Pacific executive and one of the “Big Four” financiers of the Central Pacific",
    namedAfterLink: "https://en.wikipedia.org/wiki/Charles_Crocker",
    categories: ["person"],
    sources: [
      { title: "L.A. Street Names: Towne Avenue (recounts the Crocker/Stanford street swap)",
        url: "https://lastreetnames.com/street/towne-avenue-dtla/" },
      { title: "Wikipedia: Charles Crocker",
        url: "https://en.wikipedia.org/wiki/Charles_Crocker" }
    ],
    disputed: false,
    note: "The third of the Southern Pacific names on Joseph Wolfskill's subdivided orchard, " +
      "after Towne and Stanford — though this one arrived later than the other two, when the " +
      "street platted “Stanford Avenue” in 1887 gave that name up and took Crocker's " +
      "instead.",
    internalNote: "Added 2026-08-31 to replace the generator's auto-stub: the Stanford " +
      "transfer is only half a story without it. The renaming year is unresearched; " +
      "streets-data.js establishes only that it is after Feb. 1897, when Ruth was still Ruth. " +
      "No document row attests Crocker yet — the entity exists so the modern name on that " +
      "ground is not an “unresearched” placeholder.",
    possiblySameAs: null, aliases: []
  },

  "ruth-ave": {
    spellings: [{ forms: ["Ruth Avenue"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [
      { title: "Los Angeles Herald, “Talking Retrenchment” (the renaming committee restores Ruth Avenue), Feb. 21, 1897",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18970221.2.28" },
      { title: "Recorded map: Wolfskill Orchard Tract, M.R. 30-9/13 (surveyed by J.H. Dockweiler, July–Aug. 1887; recorded Jan. 11, 1888)",
        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf" },
      { title: "Recorded map: H.C. Halfpenny's Resubdivision of a part of Block 24 of the " +
          "Wolfskill Orchard Tract, M.R. 54-84 (recorded Feb. 28, 1895) — names Ruth as one " +
          "of the block's bounding streets",
        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR054/MR054-084.pdf" }
    ],
    disputed: false,
    note: "Presumably a daughter of the landowner Joseph Wolfskill, whose orchard was being " +
      "subdivided — the plat sets Ruth beside Gladys, and the Sabichi tract to the south " +
      "continues the run of women's names with Agatha. No source names her. The street was " +
      "still Ruth Avenue in Feb. 1897, when the citywide renaming commission proposed changing " +
      "it and the council committee put the name back; it took the Stanford name later.",
    internalNote: "Carried over from streets-data.js (Stanford Avenue's nameHistory). The " +
      "daughter reading is an inference from the naming pattern, not a record.",
    possiblySameAs: null, aliases: []
  },

  "gladys-ave": {
    spellings: [{ forms: ["Gladys Avenue"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [
      { title: "Recorded map: Wolfskill Orchard Tract, M.R. 30-9/13 (surveyed by J.H. Dockweiler, July–Aug. 1887; recorded Jan. 11, 1888)",
        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf" },
      { title: "Recorded map: H.C. Halfpenny's Resubdivision of a part of Block 24 of the " +
          "Wolfskill Orchard Tract, M.R. 54-84 (recorded Feb. 28, 1895) — Gladys and Ruth " +
          "named as the block's bounding streets",
        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR054/MR054-084.pdf" },
      { title: "Recorded map: Wilde and Strong's Subdivision of the Frank Sabichi Tract, " +
          "M.R. 66-64 (recorded Sept. 21, 1897) — Gladys continuing south alongside Ruth, " +
          "Towne and Crocker",
        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR066/MR066-064.pdf" },
      { title: "LA Parks: Gladys Park (6th and Gladys)",
        url: "https://recreation.parks.lacity.gov/park/6th-gladys-street" }
    ],
    disputed: false,
    note: "The next street over from Ruth Avenue, and part of the same run of women's names " +
      "that continues south across the Sabichi family's land as Agatha Street — Agatha " +
      "Sabichi's mother was a daughter of the pioneer settler William Wolfskill. No source " +
      "names a Gladys in the family or among the subdividers. The street runs through the " +
      "heart of Skid Row today; Gladys Park sits at 6th and Gladys.",
    internalNote: "Carried over from streets-data.js. Searched without result (Kines has no " +
      "page). The women's-name pattern is the whole of the argument.",
    possiblySameAs: null, aliases: []
  },

  "ceres-ave": {
    spellings: [{ forms: ["Ceres Avenue"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [
      { title: "Wikipedia: Ceres (mythology)",
        url: "https://en.wikipedia.org/wiki/Ceres_(mythology)" },
      { title: "Recorded map: Wolfskill Orchard Tract, M.R. 30-9/13 (surveyed by J.H. Dockweiler, July–Aug. 1887; recorded Jan. 11, 1888)",
        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf" }
    ],
    disputed: false,
    note: "Ceres was the Roman goddess of agriculture and the harvest, which would be a " +
      "fitting name for a street laid through Joseph Wolfskill's orchard as it was being cut " +
      "into building lots in 1887. No source says that is what was meant, and none names " +
      "anyone called Ceres — but a harvest goddess on a subdivided orchard reads as a " +
      "choice rather than a coincidence.",
    internalNote: "Carried over from streets-data.js, whose note said the same thing. " +
      "Re-searched 2026-08-31 (web + Kines): still nothing. Treat as settled-unknown rather " +
      "than an open lead — the note is the answer the project can give.",
    possiblySameAs: null, aliases: []
  },

  "omar-ave": {
    spellings: [{ forms: ["Omar Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [
      { title: "Recorded map: Wolfskill Orchard Tract, M.R. 30-9/13 (surveyed by J.H. " +
          "Dockweiler, July–Aug. 1887) — shows “Omar Ave” at 312 Omar St's location",
        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf" }
    ],
    disputed: false,
    note: "Platted with the rest of the Wolfskill Orchard Tract in 1887 and apparently never " +
      "renamed — only the generic drifted, from the plat's “Omar Ave” to today's " +
      "Omar Street. No source names an Omar.",
    internalNote: "Carried over from streets-data.js. NavigateLA still lists the modern street " +
      "as “Omar Ave” while OSM has Omar Street, so the Ave/Street difference is a " +
      "wobble in the records rather than a documented respelling — ONE spelling period " +
      "here on purpose, using OSM's form. Identified through 312 Omar St.",
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
    categories: ["unknown"],
    sources: [
      { title: "Recorded map: F.P. Howard & Co.'s Subdivision of the Bliss Tract, M.R. 12-42 " +
          "(subdivided Aug. 1886 by Geo. E. Knox) — shows “Poplar Street” at " +
          "1100 E 5th St's location",
        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR012/MR012-042.pdf" },
      { title: "Recorded map: Wolfskill Orchard Tract, M.R. 30-9/13 (surveyed by J.H. Dockweiler, July–Aug. 1887; recorded Jan. 11, 1888)",
        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf" }
    ],
    disputed: false,
    note: "Named on Dr. Frederick Preston Howard's Bliss Tract in 1886, one block south of the " +
      "Huber Street that runs through the same subdivision. No namesake is documented; a poplar " +
      "would be in keeping with the orchard ground it was cut through, but nothing says so.",
    internalNote: "Carried over from streets-data.js (5th Street, “Alameda to Hewitt " +
      "(Poplar St)”). Same open question as Huber: nothing documents Poplar → Lugo " +
      "→ 5th by name, and research-leads.md asks for a CDNC or directory search. The " +
      "tree reading is mine, offered as a guess and labelled as one.",
    possiblySameAs: null, aliases: []
  }
};

if (typeof module !== "undefined") module.exports = { NAME_ENTITIES };
