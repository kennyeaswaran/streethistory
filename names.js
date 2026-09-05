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
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Very likely the “other, now-defunct Georgia Street” whose existence forced the 1889 renaming of the unrelated west-downtown Georgia Street to Georgia Bell Street.",
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
    namedAfter: "Not documented; most likely {{Caroline Howard (n\u00e9e Huber)}}, wife of the tract developer Dr. Frederick Preston Howard \u2014 the same inference that explains Carolina Street, one block east, now Hewitt Street",
    namedAfterLink: "https://lastreetnames.com/street/colyton-street/",
    categories: ["person", "unknown"],
    sources: [
      { title: "Recorded map: F.P. Howard & Co.\u2019s Subdivision of the Bliss Tract, M.R. 12-42 (Aug. 1886) \u2014 shows \u201cHuber Street\u201d at 828 E 4th St\u2019s location",
        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR012/MR012-042.pdf" }
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
        url: "https://lastreetnames.com/street/cortez-street/" }
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
    categories: ["person","governor"],
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
    categories: ["person"],
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
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [
      { title: "Los Angeles Herald, “Talking Retrenchment” (the renaming committee restores Ruth Avenue), Feb. 21, 1897",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18970221.2.28" },
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
    namedAfter: "{{Ceres}}, the Roman goddess of agriculture and the harvest",
    namedAfterLink: "https://en.wikipedia.org/wiki/Ceres_(mythology)",
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "This street was laid through Joseph Wolfskill's orchard as it was being cut into building lots in 1887. No source names the goddess or anyone called Ceres — but a harvest goddess on a subdivided orchard reads as a choice rather than a coincidence.",
    internalNote: "Carried over from streets-data.js, whose note said the same thing. Re-searched 2026-08-31 (web + Kines): still nothing. Treat as settled-unknown rather than an open lead — the note is the answer the project can give.",
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
        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR012/MR012-042.pdf" }
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
    categories: ["unknown"],
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
    categories: ["unknown"],
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
    note: "Lettered “Calle de Caridad” on the 1849 survey. Residents petitioned to be rid of it in 1886–87, tired of jokes about living on charity, and got Grand Avenue instead — a name chosen for sounding well rather than for meaning anything.",
    internalNote: "streets-data.js also records Calle de Caridad as an unverified early name for SPRING Street. If that is ever confirmed it is a second entity that spells alike, not this one.",
    possiblySameAs: null, aliases: []
  },

  "spring": {
    spellings: [{ forms: ["Spring Street"] }],
    namedAfter: "Possibly {{Trinidad Ortega}} (1832–1903), who was nicknamed “Primavera”",
    namedAfterLink: null,
    categories: ["person","unknown"],
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
    spellings: [{ forms: ["Short Street","Calle Alta"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["unknown"],
    sources: [],
    disputed: false,
    note: "Lettered on the 1849 survey along ground that roughly follows one block of what is now Cesar E. Chavez Avenue. Descriptive, presumably, but nothing documents it.",
    internalNote: "The Chavez entry starts at Macy Street. Disambiguated at minting because Short Street is a name that recurs.",
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
    note: "The oldest name on the tract, and the one that explains the rest: it is Clan Cameron of Lochiel that Cameron Thom's own given name comes from. The lane was absorbed into the Lebanon Street continuation in 1917.",
    internalNote: "Dates and the 1746 flight are the blog's; nothing else corroborates them here.",
    possiblySameAs: null, aliases: []
  },

  "catesby-lane": {
    spellings: [{ forms: ["Catesby Lane"] }],
    namedAfter: "The Thom family name — Cameron Thom's son was Charles Catesby Thom, and a brother carried it too",
    namedAfterLink: "https://en.wikipedia.org/wiki/Cameron_E._Thom",
    categories: ["person"],
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
    namedAfter: null,
    namedAfterLink: null,
    categories: ["nature","unknown"],
    sources: [
      { title: "Wikipedia: Arts District, Los Angeles",
        url: "https://en.wikipedia.org/wiki/Arts_District,_Los_Angeles" }
    ],
    disputed: false,
    note: "One of a run of tree and plant names platted on the Goodwin Tract in October 1886 — Palm, Spruce, Tulip and Willow together. None of them is documented beyond the plat, and the theme is the whole of the argument. This one ran along modern Imperial Street. When it became Imperial Street, and why, is not researched.",
    internalNote: "Carried over from streets-data.js when the Goodwin Tract was encoded, 2026-09-01. Disambiguated at minting: Palm Street is a name that recurs.",
    possiblySameAs: null,
    aliases: []
  },

  "spruce": {
    spellings: [{ forms: ["Spruce Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["nature", "unknown"],
    sources: [
      { title: "Wikipedia: Arts District, Los Angeles",
        url: "https://en.wikipedia.org/wiki/Arts_District,_Los_Angeles" }
    ],
    disputed: false,
    note: "One of a run of tree and plant names platted on the Goodwin Tract in October 1886 — Palm, Spruce, Tulip and Willow together. None of them is documented beyond the plat, and the theme is the whole of the argument. This one ran along modern Mateo Street.",
    internalNote: "Carried over from streets-data.js when the Goodwin Tract was encoded, 2026-09-01.",
    possiblySameAs: null, aliases: []
  },

  "tulip": {
    spellings: [{ forms: ["Tulip Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["nature", "unknown"],
    sources: [
      { title: "Wikipedia: Arts District, Los Angeles",
        url: "https://en.wikipedia.org/wiki/Arts_District,_Los_Angeles" }
    ],
    disputed: false,
    note: "One of a run of tree and plant names platted on the Goodwin Tract in October 1886 — Palm, Spruce, Tulip and Willow together. None of them is documented beyond the plat, and the theme is the whole of the argument. This one ran along modern Santa Fe Avenue. It lasted a matter of months: the Atchison, Topeka and Santa Fe reached Los Angeles in May 1887 and the street took the railway's name.",
    internalNote: "Carried over from streets-data.js when the Goodwin Tract was encoded, 2026-09-01.",
    possiblySameAs: null, aliases: []
  },

  "willow": {
    spellings: [{ forms: ["Willow Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: ["nature", "unknown"],
    sources: [
      { title: "Wikipedia: Arts District, Los Angeles",
        url: "https://en.wikipedia.org/wiki/Arts_District,_Los_Angeles" }
    ],
    disputed: false,
    note: "One of a run of tree and plant names platted on the Goodwin Tract in October 1886 — Palm, Spruce, Tulip and Willow together. None of them is documented beyond the plat, and the theme is the whole of the argument. This one ran along Willow Street, which keeps the name.",
    internalNote: "Carried over from streets-data.js when the Goodwin Tract was encoded, 2026-09-01.",
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
    categories: ["person","governor"],
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
    internalNote: "Minted 2026-09-04 from documents/lah-1890-02-20, the Herald reporting that the ordinance renaming Fort Street had been signed by Mayor Hazard and taken effect. The leads, carried over from the `fort-street` entity's public note and unsourced there: named after New York's Broadway, on a petition by the printer Fred Lind Alles. The Herald item says neither of those things \u2014 it names only Mayor Hazard \u2014 so both stay leads. The same item predicts that Main Street south of Tenth would be renamed Broadway once Broadway was cut through, which is how modern Broadway came to run south of downtown; whatever act carried THAT out is not found (handbook/research-leads.md). NB the 1897 committee report separately renames a \u201cBroadway Street\u201d to Canal Street \u2014 not this one, which had been plain \u201cBroadway\u201d for seven years by then.",
    possiblySameAs: null, aliases: []
  },

  "castelar": {
    spellings: [{ forms: ["Castelar Street"] }],
    namedAfter: "{{Emilio Castelar}} (1832–1899), president of the First Spanish Republic in 1873–74",
    namedAfterLink: "https://en.wikipedia.org/wiki/Emilio_Castelar",
    categories: ["person"],
    sources: [
      { title: "L.A. Street Names: Hill Street (on Calle del Toro / Castelar / N. Hill)",
        url: "https://lastreetnames.com/street/hill-street/" },
      { title: "Wikipedia: Emilio Castelar",
        url: "https://en.wikipedia.org/wiki/Emilio_Castelar" }
    ],
    disputed: false,
    note: "Castelar had left office a few weeks before the Los Angeles council renamed the street in February 1874 — the First Republic fell that January.",
    internalNote: "Minted 2026-09-04 from documents/ord-1874-02-26, which renames Bull Street to Castelar Street. The namesake is Kines's claim (lastreetnames.com's Hill Street page), carried over from the `bull` entity's note, where it read “apparently”; nothing contemporary has been found saying so. The dates fit the way a topical naming would: Castelar was the Republic's last president and had just fallen, which is exactly when a city council reaches for a name. Not proof.",
    possiblySameAs: null, aliases: []
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
  }
};

if (typeof module !== "undefined") module.exports = { NAME_ENTITIES };
