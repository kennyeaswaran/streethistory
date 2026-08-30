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
    note: "Namesake untraced. Kenny: worth a look — lastreetnames.com may have it.",
    possiblySameAs: null, aliases: []
  },

  // ---- the 1884 Glassell tract (M.R. 6-138) -------------------------------
  // Andrew Glassell subdivided Lot 7 etc. of Block 39, Hancock Survey No. 1,
  // and put his nephew and law partner's name on a street through it. The rest
  // of that plat's names are in names-new.js, still unresearched.

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
  }
};

if (typeof module !== "undefined") module.exports = { NAME_ENTITIES };
