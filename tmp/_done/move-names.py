# -*- coding: utf-8 -*-
"""Move the 2026-09-17 batch out of names-new.js into names.js, researched.

43 entities. `lucas-ave` is NOT among them: it is a duplicate of the existing
`lucas-avenue` and is handled separately (its row is repointed, the stub dropped).
"""
import io, re, sys

MARKER = '\n};\n\nif (typeof module !== "undefined") module.exports = { NAME_ENTITIES };'

BLOCK = r'''
  // ======================================================================
  // COLINA PARK and Crown Hill — the 1885 tract on the ridge west of town
  // ======================================================================
  //
  // ONE SHEET CARRIES MOST OF THIS SECTION: "Map of Colina Park, Los Angeles
  // City, California", recorded 1885-11-28 (documents/mr007-036-p2). SurveyLA
  // places it: "In 1885, the Colina Park tract was developed adjacent to the
  // western terminus of the proposed 2nd Street cable railway." Nobody names
  // the subdivider — see `colina-ave`.
  //
  // ★ THE TRACT HAS A NAMING SCHEME AND NO SOURCE STATES IT. Four of its
  // streets are ordinary Spanish nouns of ground — colina (a hill), loma (a
  // rise), collado (a col or low hill), gravilla (fine gravel, grit) — on a
  // tract called Colina Park sitting on an actual hill. That is a `pattern`
  // under §3.1 and it is graded as one: the set is the whole of the argument.

  "colina-ave": {
    spellings: [{ forms: ["Colina Avenue"] }],
    namedAfter: "{{Colina}}, Spanish for a hill — the tract's own name, on the Crown Hill ridge it was platted over",
    namedAfterLink: null,
    categories: ["nature", "landform"],
    sources: [
      { title: "SurveyLA, Westlake Community Plan Area Historic Resources Survey Report — “In 1885, the Colina Park tract was developed adjacent to the western terminus of the proposed 2nd Street cable railway.”",
        url: "https://planning.lacity.gov/odocument/db31e62f-7e53-4de9-b891-07a8515913bc/Westlake_Report_0.pdf" },
      { title: "George Garrigues, What Ever Became of Those Old L.A. City Streets? — “Colina Ave., east of Union & South of 1st, is abandoned (26).”",
        url: "https://stevemorse.org/census/changes/LosAngelesChanges2.htm" }
    ],
    basis: "pattern",
    sharesWarrantWith: ["loma-drive", "collado-st", "gravitta-st"],
    disputed: false,
    note: "Lettered on Tract No. 2473 of Dec. 1913 (documents/tr0024-055), a resubdivision of blocks of the 1885 Colina Park tract, along what is now Union Place. The street carries the tract's own name; the tract carries the hill's.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. `pattern` rather than `lexical` because the warrant is the SET — colina, loma, collado, gravilla on one tract — not this word alone; a single Spanish noun on a Los Angeles plat would be `lexical` at best. ⚠ NOBODY NAMES THE SUBDIVIDER. SurveyLA dates the tract and says nothing more; Kines has no Colina entry at all (/search/colina/ returns only Calada and Calzona, both Boyle Heights) and no Colina Park or Crown Hill page. The registry's four Colinas (Colina Way, Via Colina, Colina Alley, Las Colinas Avenue) are all elsewhere in the city. ⭐ THE UNEXHAUSTED LEAD is crownhillchronicles.blogspot.com, a dedicated Crown Hill blog, which refused an automated fetch with a redirect loop and would probably name the subdivider; it needs a browser. ⚠ Do not confuse the tract with the CROWN HILL tract, which SurveyLA may attribute to Oscar B. Smith — that attribution was read through a summarizer and is not verified.",
    possiblySameAs: null, aliases: []
  },

  "loma-drive": {
    spellings: [{ forms: ["Loma Drive"] }],
    namedAfter: "{{Loma}}, Spanish for a rise or low hill — one of four Spanish ground-words platted together on Colina Park in 1885",
    namedAfterLink: null,
    categories: ["nature", "landform"],
    sources: [],
    basis: "pattern",
    sharesWarrantWith: ["colina-ave", "collado-st", "gravitta-st"],
    disputed: false,
    note: "Lettered on Colina Park in Nov. 1885 (documents/mr007-036-p2) and again on Tract No. 754 of 1910 (documents/tr0015-179a), and still Loma Drive today. The tract also carries Colina, Collado and Gravilla — four Spanish words for ground on one hill.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. NOT COVERED BY KINES: /street/loma-drive/ is a 404 and /search/loma/ returns thirteen results, none of them this street. Absent from Garrigues, which for his list means unchanged since the 1903 map — correct, it survives. ⚠ The word is common enough in California that a lone Loma proves nothing; the warrant here is entirely the set it sits in.",
    possiblySameAs: null, aliases: []
  },

  "collado-st": {
    spellings: [{ forms: ["Collado Street"] }],
    namedAfter: "{{Collado}}, Spanish for a col or low hill — one of four Spanish ground-words platted together on Colina Park in 1885",
    namedAfterLink: null,
    categories: ["nature", "landform"],
    sources: [],
    basis: "pattern",
    sharesWarrantWith: ["colina-ave", "loma-drive", "gravitta-st"],
    disputed: false,
    note: "Lettered on Colina Park in Nov. 1885 (documents/mr007-036-p2) and on J. W. Ellis's subdivision of Aug. 1886 (documents/mr010-062), along what is now Union Avenue.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. ✔ THE OBVIOUS ALTERNATIVE WAS TESTED AND FOUND EMPTY: there is no Collado family among Los Angeles landowners in any source searched, and the registry has no Collado street anywhere in the city. Kines /search/collado/ is an explicit no-match; absent from Garrigues. So the reading rests on the set, which is what `pattern` means.",
    possiblySameAs: null, aliases: []
  },

  "gravitta-st": {
    spellings: [{ forms: ["Gravitta Street", "Gravilla Street"] }],
    namedAfter: "{{Gravilla}}, Spanish for fine gravel or grit — one of four Spanish ground-words platted together on Colina Park in 1885",
    namedAfterLink: null,
    categories: ["nature", "landform"],
    sources: [
      { title: "George Garrigues, What Ever Became of Those Old L.A. City Streets? — “Gravilla St. bet. Columbia & Union is part of W. 4th St. (17).”",
        url: "https://stevemorse.org/census/changes/LosAngelesChanges2.htm" }
    ],
    basis: "pattern",
    sharesWarrantWith: ["colina-ave", "loma-drive", "collado-st"],
    disputed: true,
    note: "Lettered on Colina Park in Nov. 1885 (documents/mr007-036-p2), running down the Crown Hill slope between Columbia and Union; it became part of West 4th Street and is gone. The spelling is unsettled: this project reads the ink as Gravitta, Garrigues prints Gravilla, and gravilla is the Spanish word.",
    internalNote: "⚠⚠ THE SPELLING NEEDS KENNY'S EYES ON THE SHEET, and it is the same shape of problem as Labury/Labory in Sept. 2026. The entity was minted from the ink read as “Gravitta St”; Garrigues has “Gravilla St. bet. Columbia & Union is part of W. 4th St.”, whose extent matches our row exactly (Columbia to Union is lon −118.267 to −118.265, and the row is 34.0604,−118.2674 → 34.0581,−118.2652). GRAVITTA IS ATTESTED NOWHERE — not as a surname, not as a place, not as a word, in Kines, Garrigues, the city registry or open search — while GRAVILLA is an ordinary Spanish noun AND the reading of a man who worked from the 1903 city map. A tt/ll confusion in a cursive plat hand is exactly the error that produced “Labury”. ★ AND THE SET SETTLES THE SENSE EITHER WAY: colina, loma, collado, gravilla are all Spanish words for ground, which is why this is graded `pattern` and why the namesake stands even though the string does not. `disputed: true` until the sheet is re-read. Researched and moved from names-new.js 2026-09-17; prose drafted by Claude, unreviewed. Both forms are carried in one spelling period on purpose — they are one lineage, not two.",
    possiblySameAs: null, aliases: []
  },

  "acacia-st": {
    spellings: [{ forms: ["Acacia Street"] }],
    namedAfter: "{{The acacia}}",
    namedAfterLink: "https://en.wikipedia.org/wiki/Acacia",
    categories: ["nature", "tree"],
    sources: [
      { title: "George Garrigues, What Ever Became of Those Old L.A. City Streets? — “Acacia St. bet. Loma & South Union Avenue is either W. 4th St. or abandoned (17).”",
        url: "https://stevemorse.org/census/changes/LosAngelesChanges2.htm" }
    ],
    basis: "lexical",
    disputed: false,
    note: "Lettered on Colina Park in Nov. 1885 (documents/mr007-036-p2) and again on Tract No. 2473 of 1913 (documents/tr0024-055), along what is now 4th Street. Nothing says why the tree was chosen.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. `lexical`, not `pattern`: the word has one determinate referent, but it does NOT belong to the tract's Spanish ground-word set and there is no tree set on this sheet to put it in — Acacia and Arch are the only non-Spanish, non-directional names here. NOT COVERED BY KINES (/search/acacia/ returns Monrovia's Acacia Avenue, Studio City's Acama Street and Yolanda Avenue). Garrigues covers the route change only and gives no namesake; note his “(17)” is the 90017 ZIP, not a year.",
    possiblySameAs: null, aliases: []
  },

  "arch-st": {
    spellings: [{ forms: ["Arch Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    basis: "none",
    searched: "partial",
    disputed: false,
    note: "Lettered on Colina Park in Nov. 1885 (documents/mr007-036-p2), along what is now Crown Hill Avenue. Nothing found says who or what it was named for.",
    internalNote: "Researched and moved from names-new.js 2026-09-17. ⚠ `none` WITH NO CATEGORIES, deliberately, per NAME-RESEARCH.md's rare exception: “arch” could be an architectural feature, a landform, a surname or a descriptive of the road's curve over the ridge, and tagging any referent would assert more than the file knows. Contrast `acacia-st` on the same sheet, where the word has one determinate referent. NOT COVERED BY KINES: /search/arch/ returns twenty substring matches (Marcheeta, Larchmont, Markland…) and no Arch Street, and he has no Crown Hill Avenue page either. Absent from Garrigues entirely. NEXT STEP is the Colina Park subdivider (see `colina-ave`), since a tract with a documented naming scheme would settle this in one line.",
    possiblySameAs: null, aliases: []
  },

  "silver-st": {
    spellings: [{ forms: ["Silver Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [
      { title: "George Garrigues, What Ever Became of Those Old L.A. City Streets? — “Silver St. is part of W. 2nd St. just south of Belmont High.”",
        url: "https://stevemorse.org/census/changes/LosAngelesChanges2.htm" }
    ],
    basis: "none",
    searched: "partial",
    disputed: false,
    note: "Lettered on Colina Park in Nov. 1885 (documents/mr007-036-p2), on the Los Angeles Improvement Co.'s subdivision of Jan. 1886 (documents/mr007-056) and on J. W. Ellis's of Sept. 1886 (documents/mr010-088); it became part of West 2nd Street. Nothing found says what the name meant here.",
    internalNote: "Researched and moved from names-new.js 2026-09-17. ⚠ NOT THE 1888 SILVER STREET. documents/lah-1888-10-11 has “Silver St., in block 27 H. S., changed to Oro St.” — a nice silver-to-gold swap, but block 27 of Hancock's Survey is not this ground, which sits in block 38. Two Silver Streets, and only one of them became Oro. Garrigues confirms OUR one went to 2nd Street, which is what the rows say. ⚠ `none` with no categories: the metal, a mine, a surname and a Comstock reference are all live and nothing chooses between them, and unlike `acacia-st` the word does not have one determinate referent in a street-name context.",
    possiblySameAs: null, aliases: []
  },

  "north-ave": {
    spellings: [{ forms: ["North Avenue"] }],
    namedAfter: "{{The north}} side of the Colina Park tract, which this street bounded",
    namedAfterLink: null,
    categories: ["abstract", "descriptive"],
    sources: [
      { title: "Los Angeles Herald, Oct. 11, 1888 — the special committee's street-name list: “Northern Ave. and North Ave., in Colina Park tract, changed to North St.”",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3" }
    ],
    basis: "lexical",
    sharesWarrantWith: ["northern-ave"],
    disputed: false,
    note: "Lettered on Colina Park in Nov. 1885 (documents/mr007-036-p2) along the tract's northern edge, on what is now 2nd Street. The same roadway is lettered Northern Avenue a year later, and in Oct. 1888 the city council's street-name committee proposed folding both into a single North Street.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. ★★ ONE STREET, TWO NAMES, AND A DOCUMENT THAT SAYS SO. The row here and `northern-ave`'s row on documents/mr010-062 are the SAME LINE to five decimal places (34.06368,−118.26616 → 34.06268,−118.26514 against 34.06368,−118.26616 → 34.06269,−118.26514), and documents/lah-1888-10-11 names both together, in this tract, being folded into one. They are kept as two entities because they are two different NAMES — a name entity is a naming lineage, not a piece of pavement (§3) — and linked by `possiblySameAs` in both directions. ⚠ Whether the committee's North Street ever took is not established; the ground is 2nd Street now.",
    possiblySameAs: "northern-ave", aliases: []
  },

  "northern-ave": {
    spellings: [{ forms: ["Northern Avenue"] }],
    namedAfter: "{{The north}} side of the Colina Park tract, which this street bounded",
    namedAfterLink: null,
    categories: ["abstract", "descriptive"],
    sources: [
      { title: "Los Angeles Herald, Oct. 11, 1888 — the special committee's street-name list: “Northern Ave. and North Ave., in Colina Park tract, changed to North St.”",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3" }
    ],
    basis: "lexical",
    sharesWarrantWith: ["north-ave"],
    disputed: false,
    note: "Lettered on J. W. Ellis's subdivision of Aug. 1886 (documents/mr010-062), on the northern edge of the Colina Park tract and on the same line the tract itself had lettered North Avenue the year before. In Oct. 1888 the city council's street-name committee proposed folding both into a single North Street.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. See `north-ave` for the geometry, which is identical to five decimals, and for why the two are kept separate. Neither name is in Kines or Garrigues.",
    possiblySameAs: "north-ave", aliases: []
  },

  "union-avenue": {
    spellings: [{ forms: ["Union Avenue"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [
      { title: "L.A. Street Names: Union Avenue — “There's also a good chance that Union Ave. was named earlier in 1875 on the adjoining Fairview tract, owned by merchant tailor Jacob Strelitz.”",
        url: "https://lastreetnames.com/street/union-avenue/" }
    ],
    basis: "none",
    searched: "partial",
    disputed: false,
    note: "Lettered on Colina Park in Nov. 1885 (documents/mr007-036-p2) and on Tract No. 2473 of 1913 (documents/tr0024-055), and still Union Avenue today. Kines suggests the name may have been given a decade earlier on the adjoining Fairview tract; nothing found says what union was meant.",
    internalNote: "Researched and moved from names-new.js 2026-09-17. ⚠ THREE UNION AVENUES WERE IN PLAY IN 1888, which is how crowded this name was: documents/lah-1888-10-11 has “Kinneloa Ave., Kinneloa St. and Hayward St. changed to Union Ave.”, “Union Ave., changed to Colorado St.” and “Burlingame Ave. and Union Ave., changed to Yarnell St.” — three separate items. None of them is demonstrably this street, and the modern Union Avenue survives, so this one was probably the survivor the others were being cleared away from. ⚠ Kines's Union Avenue page is about the corridor, not the naming: he gives the Fairmount tract's “Real Estate Associates of Los Angeles”, a group of 26 investors, and prior owners including mayors Prudent Beaudry and John G. Nichols, but no statement of what the name commemorates. The Civil War Union, a union of tracts and a labour union are all live. See `union-st` for the other name on this sheet.",
    possiblySameAs: null, aliases: []
  },

  "union-st": {
    spellings: [{ forms: ["Union Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    basis: "none",
    searched: "partial",
    disputed: false,
    note: "Lettered on Colina Park in Nov. 1885 (documents/mr007-036-p2), south of the tract's Union Avenue, on what is now Union Avenue. Nothing found says what union was meant.",
    internalNote: "Researched and moved from names-new.js 2026-09-17. Kept separate from `union-avenue` because they are two names, and note that ONE SHEET LETTERS BOTH — Union Avenue at the north end of the tract and Union Street 900 m south — which is precisely the “no two streets of the same name, and each street one name throughout” disorder the Oct. 1888 committee was formed to clear up (documents/lah-1888-10-11). Absent from Kines and Garrigues.",
    possiblySameAs: "union-avenue", aliases: []
  },

  "western-ave-colina-park": {
    spellings: [{ forms: ["Western Avenue"] }],
    namedAfter: "{{The west}} side of the Colina Park tract, which this street bounded",
    namedAfterLink: null,
    categories: ["abstract", "descriptive"],
    sources: [],
    basis: "lexical",
    disputed: false,
    note: "Lettered on Colina Park in Nov. 1885 (documents/mr007-036-p2) and on two J. W. Ellis subdivisions of 1886 (documents/mr010-062 and mr010-088), along the tract's western edge; the line is now Union Place and Crown Hill Avenue.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. ⚠⚠ NOT MODERN WESTERN AVENUE, which is four miles west and is one of the city's main north-south arteries — the id says `-colina-park` for exactly that reason and must not be shortened. This is a tract-boundary descriptive, the western counterpart of `north-ave` on the same sheet, and the pairing is the argument for reading it as a direction rather than a borrowing. Absent from Kines and Garrigues for this ground.",
    possiblySameAs: null, aliases: []
  },

  "vernon-ave": {
    spellings: [{ forms: ["Vernon Avenue"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    basis: "none",
    searched: "partial",
    disputed: false,
    note: "Lettered “Vernon Av” on Colina Park in Nov. 1885 (documents/mr007-036-p2) and “Vernon Ave” on Orange Heights in June 1887 (documents/mr018-063), along what is now Valencia Street. Nothing found says who or what it was named for.",
    internalNote: "Researched and moved from names-new.js 2026-09-17. ⚠ NOT THE SOUTH LOS ANGELES VERNON. documents/lah-1888-10-11 has “Broadway St., Vernon Ave. and Auburn St. changed to Vernon St.”, which is the Vernon district four miles south-east; this one is on Crown Hill and became Valencia Street. Mount Vernon is the obvious reading for either and no source gives it for this one. Absent from Kines and Garrigues for this ground.",
    possiblySameAs: null, aliases: []
  },

  "texas-st": {
    spellings: [{ forms: ["Texas Street"] }],
    namedAfter: "{{Texas}} — no source says so; the state is simply what the word names",
    namedAfterLink: "https://en.wikipedia.org/wiki/Texas",
    categories: ["place", "state"],
    sources: [],
    basis: "guess",
    disputed: false,
    note: "Lettered on Colina Park in Nov. 1885 (documents/mr007-036-p2), on the short stretch that is now the north end of Belmont Avenue. In January 1887 it was renamed Belmont (documents/lah-1887-01-04).",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. ★★ THE GEOMETRY MAKES A THREE-STEP STORY OUT OF WHAT LOOKED LIKE TWO UNRELATED FACTS. This row ends at 34.06341,−118.26308 and `belmont-ave`'s 1886 row BEGINS at 34.06341,−118.26308 — the same point to five decimals, end to end on one line. So in 1885-86 Texas Street and Belmont Avenue were consecutive stretches of one roadway; documents/lah-1887-01-04 then renames Texas to Belmont, i.e. the name spread north over its own neighbour; and the older Belmont stretch south of the junction later became LOMA DRIVE, leaving modern Belmont Avenue standing on what was Texas. ⚠ `guess` and not `pattern`: there is no state-name set on this sheet — its neighbours are Silver, Arch, Acacia and the Spanish ground-words — so the reading rests on the word alone, which is the `nevada-1886` shape. ⚠ THREE BELMONTS now: this corridor, `belmont-ave` beside it, and `belmont-kincaid` two kilometres south.",
    possiblySameAs: null, aliases: []
  },

  "belmont-ave": {
    spellings: [{ forms: ["Belmont Avenue"], disambiguation: "Colina Park, later Loma Drive" }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    basis: "none",
    searched: "partial",
    disputed: false,
    note: "Lettered on J. W. Ellis's subdivision of Sept. 1886 (documents/mr010-088), running south-west from the end of Texas Street along what is now Loma Drive. Nothing found says who or what Belmont was named for.",
    internalNote: "Researched and moved from names-new.js 2026-09-17. ★★ THIS IS THE ELDER OF THE TWO CROWN HILL BELMONTS and the key to both. Its row BEGINS at 34.06341,−118.26308, which is exactly where `texas-st`'s row ENDS — so Belmont Avenue already existed here in 1886 when documents/lah-1887-01-04 renamed the adjoining Texas Street to match it. The name then moved: modern Belmont Avenue stands on the old Texas ground, and this original stretch became Loma Drive. ⚠ Kines has modern Belmont Avenue coming from AZTEC Avenue (`aztec-avenue`, on documents/mr006-138 of Dec. 1884), which is a third account of the same corner and is not reconciled with either the Texas renaming or this sheet. All three cannot be simply true; the ground between 34.0634 and 34.0637 is where they disagree. ⚠ DISTINCT FROM `belmont-kincaid`, two kilometres south, which is the one documents/lah-1888-10-11 proposed changing to Trenton Street; an authored `disambiguation` is carried because both render as “Belmont Avenue”.",
    possiblySameAs: null, aliases: []
  },

  "strelitz-st": {
    spellings: [{ forms: ["Strelitz Street"] }],
    namedAfter: "{{Jacob Strelitz}}, a Los Angeles merchant tailor who owned the adjoining Fairview tract",
    namedAfterLink: "https://lastreetnames.com/street/union-avenue/",
    categories: ["person", "landowner"],
    sources: [
      { title: "L.A. Street Names: Union Avenue — “There's also a good chance that Union Ave. was named earlier in 1875 on the adjoining Fairview tract, owned by merchant tailor Jacob Strelitz.”",
        url: "https://lastreetnames.com/street/union-avenue/" }
    ],
    basis: "inferred",
    disputed: false,
    note: "Lettered on the Downey Tract of Aug. 1883 (documents/mr006-427), a subdivision of the Canal and Reservoir lands; it became Maryland Street. Kines names a Jacob Strelitz, a merchant tailor, as owner of the adjoining Fairview tract in the 1870s — the one Strelitz placed on this ground by any source.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. ★ FOUND SIDEWAYS: Kines has no Strelitz page, and /search/strelitz/ returns his UNION AVENUE page as its only hit, because the name appears in that page's text. That is the whole of the evidence — a man of the right name holding land immediately adjacent in the right decade — so `inferred`, not `attested`: nothing connects him to the Downey Tract or to this street. ✔ THE TWO DECOYS WERE CHECKED AND NEITHER IS SUPPORTED: Mecklenburg-Strelitz (a German duchy) and Strelitzia (the bird-of-paradise flower) are both volunteered by general search and by NO Los Angeles source. ⚠ Kines is the sole witness for the man — an independent search for “Jacob Strelitz” plus Los Angeles returns only modern namesakes — so a city directory or a deed would be worth having. Gone from the city registry, consistent with the change to Maryland Street.",
    possiblySameAs: null, aliases: []
  },

  "shatto-st": {
    spellings: [{ forms: ["Shatto Street"] }],
    namedAfter: "{{George Rufus Shatto}} (1850–1893) and {{Clara Ruth Shatto}} (1853–1942), the Michigan couple whose Westlake mansion stood beside it and who bought the whole of Santa Catalina Island in 1887",
    namedAfterLink: "https://lastreetnames.com/street/shatto-street/",
    categories: ["person", "landowner", "family"],
    sources: [
      { title: "L.A. Street Names: Shatto Street — “George Rufus Shatto (1850-1893) and Clara Ruth Shatto (1853-1942) were a Michigan couple who came to L.A. in January 1886 and quickly became major real estate players… it was named in 1891 after the Shattos' bid to call it ‘Vieudelou’ was rejected… Westlake's Shatto Street ran behind the Shattos' own mansion on Orange Street (which is now part of Wilshire).”",
        url: "https://lastreetnames.com/street/shatto-street/" },
      { title: "SurveyLA, Westlake Community Plan Area Historic Resources Survey Report — “George Rufus Shatto developed the residential avenue of Orange Street, what is now the easternmost portion of Wilshire Boulevard, as part of the Orange Heights Tract.”",
        url: "https://planning.lacity.gov/odocument/db31e62f-7e53-4de9-b891-07a8515913bc/Westlake_Report_0.pdf" }
    ],
    basis: "attested",
    disputed: false,
    note: "Named in 1891, after the Shattos' own proposal of “Vieudelou” was rejected, and running behind their mansion on Orange Street — now part of Wilshire Boulevard. Shatto Street still exists; the stretch lettered on Tract No. 321 in Nov. 1908 (documents/tr0014-087a) is a lost piece of it.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. ⚠ THE SHEET DID NOT COIN THE NAME: Kines dates it to 1891 and Tract No. 321 is 1908, so this row attests an existing name, and any change row should say so. ⚠ AND THE STREET IS NOT GONE, only this stretch: the registry has SHATTO STREET live at grid 634C3 and SHATTO PLACE at 634A3, the latter named in 1906 as a deliberate duplicate because “it was on Shatto land after all”. ★ SHATTO IS ALSO THE DEVELOPER OF ORANGE HEIGHTS (documents/mr018-063), which is where `logan-ave` and `ventura-ingraham` come from — so three entities in this batch trace to one man, and a Shatto-circle personal name is now a live reading for Logan.",
    possiblySameAs: null, aliases: []
  },

  // ======================================================================
  // THE CLEMENT TRACT and the ground east of the river
  // ======================================================================
  //
  // "Map of the Clement Tract, Situated on First Street", recorded 1887-05-23
  // (documents/mr017-041), letters six names: Anderson, Clementina, Grace,
  // Myers, Rio and Shenandoah. They split three ways — two women's given names,
  // two surnames, two geographic — which is the ordinary boom-tract mix, and
  // NOT ONE OF THE SIX IS IDENTIFIED. That is not for want of looking: Kines has
  // no page for any of them, Garrigues carries none of them, and no digitised
  // copy of the sheet is in any reachable catalogue. The answer is in 1880s
  // Los Angeles newspapers or in the sheet's own title block.

  "clementina-street": {
    spellings: [{ forms: ["Clementina Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    basis: "none",
    searched: "extensive",
    disputed: false,
    note: "Lettered on the Clement Tract of May 1887 (documents/mr017-041), along what is now 2nd Street east of the river. The tract and the street share a root, so the name is presumably a woman of the subdividing family — but nobody has identified the Clement of the Clement Tract.",
    internalNote: "Researched and moved from names-new.js 2026-09-17. ⚠ THE READING IS OBVIOUS AND UNSUPPORTED, which is why `basis` is `none` and not `eponymous`: `eponymous` requires the plat to attest the role, and this plat attests a tract called Clement, not a person called Clementina. Graded `extensive` because the search was thorough and empty — Kines has no Clementina and no relevant Clement (his Clement Street is Rev. Clement Molony, on Richard Molony's 1910 Boyle Heights tract, twenty-three years later and ruled out); Garrigues has neither; the registry has no Clementina at all and its two Clements are the Molony ground; LMU's collection, UCLA's tract-map index and the OAC finding aid have no Clement Tract; every 1880s newspaper full-text route is dead or robots-blocked. ⭐ NEXT STEP is the sheet itself — the title block names the subdivider — or CDNC for “Clement tract”, which is a human or browser job (handbook/CDNC-QUERIES.md).",
    possiblySameAs: null, aliases: []
  },

  "myers": {
    spellings: [{ forms: ["Myers Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    basis: "none",
    searched: "extensive",
    disputed: false,
    note: "Lettered on the Clement Tract of May 1887 (documents/mr017-041) and still Myers Street today, in the industrial strip on the east bank of the river. Nothing found says who Myers was.",
    internalNote: "Researched and moved from names-new.js 2026-09-17. `extensive`: Kines has no Myers Street page (404) and his six Myers hits are unrelated; Garrigues has no Myers; the registry has exactly one Myers Street in the whole city, grid 634H4, whose grid-mates are Center, Temple, Jackson, Commercial, Garey and Santa Fe — our ground exactly. ✔ TWO CANDIDATES RUN DOWN AND KILLED, recorded so nobody repeats them: Cornelius Martin Myers (1833–1914), the Eagle Rock subdivider behind Saginaw and Hartwick Streets, only moved to Los Angeles about 1903; and John S. Myers, City Auditor, took office in 1909. Both are far too late for an 1887 sheet. ⚠ THE WESTLAKE “MEYERS' SUBDIVISION” TRAP IS UNRESOLVED, not resolved: documents/mr021-087 is “Potter's Subdivision of Block 3 of Nichols' Addition… Also Lots 26 and 27 of Meyers' Subdivision of Block 4”, two miles west and spelled with an e. No source of any kind mentions that sheet, and the registry has no Meyers anywhere, so the evidence cannot say whether the two are one family. Do not merge them and do not separate them on assertion.",
    possiblySameAs: null, aliases: []
  },

  "anderson": {
    spellings: [{ forms: ["Anderson Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [
      { title: "Los Angeles Herald, Oct. 11, 1888 — the special committee's street-name list: “Anderson St. and Anderson Ave. changed to Anderson St.”",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3" },
      { title: "L.A. City Planning, 500–600 South Anderson Street Industrial District (Adelante district DPR forms) — “the renaming of South Rio Street as South Anderson Street as it was extended to East 7th Street”, among works “completed by the Union Pacific” by the mid-1920s",
        url: "https://planning.lacity.gov/odocument/f94c695f-d13c-4889-825e-ea340112c233/Adelante_District_DPR_Forms_0.pdf" }
    ],
    basis: "none",
    searched: "extensive",
    disputed: false,
    note: "Lettered on the Clement Tract of May 1887 (documents/mr017-041), on Tract No. 207 of 1908 (documents/tr0013-168-p1) and on Tract No. 5301 of 1926 (documents/tr0122-053-p3), and still Anderson Street today. It grew by absorbing its neighbours: an Anderson Avenue was folded into it in Oct. 1888, and South Rio Street became South Anderson Street in the mid-1920s when the Union Pacific extended it to East 7th. Nothing found says who Anderson was.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. `extensive` and empty on the man, from three directions: Kines has no Anderson Street page (404) and his Anderson hits are Compton's Pfc. James Anderson Jr., Eddie “Rochester” Anderson and a Mar Vista street; Garrigues has no Anderson; SurveyLA's Boyle Heights survey report mentions neither the street nor a tract. ★ AN ANDERSON TRACT DID EXIST — documents/lah-1897-12-07 has “Castello street, in the Anderson tract” — so with the 1888 committee line and this sheet there are three independent sightings of an Anderson holding and still no first name. ⚠ The registry's surviving Anderson Avenue is grid 504C7, in the San Fernando Valley, and is NOT the avenue the 1888 committee folded in; that one is gone. ★ THE RIO SUCCESSION interlocks two entities in this batch: `rio-avenue` (1887) → `rio-st` (1908) → absorbed here in the 1920s.",
    possiblySameAs: null, aliases: []
  },

  "rio-avenue": {
    spellings: [{ forms: ["Rio Avenue"] }],
    namedAfter: "{{The river}} — the Los Angeles River, which this street ran beside",
    namedAfterLink: null,
    categories: ["nature", "water"],
    sources: [
      { title: "Los Angeles Herald, Oct. 11, 1888 — the special committee's street-name list: “Rio Ave., in E. part of city, changed to Rio St.”",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3" }
    ],
    basis: "lexical",
    sharesWarrantWith: ["rio-st"],
    disputed: false,
    note: "Lettered on the Clement Tract of May 1887 (documents/mr017-041), a few hundred metres east of the Los Angeles River, on what is now Anderson Street. In Oct. 1888 the city council's street-name committee proposed changing it to Rio Street, and a sheet of 1908 letters exactly that.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. ★★ A RENAMING PROPOSED AND CARRIED, with both ends in this corpus: documents/lah-1888-10-11 proposes Rio Ave → Rio St, and documents/tr0013-168-p1 letters “Rio St” on the same line twenty years later. `rio-st` is the successor. The whole line was then absorbed into Anderson Street in the mid-1920s — see `anderson`. ⚠ `lexical`, not `guess`: *rio* has one determinate referent here, the river a few blocks west, and no other river is in reach. Nothing states it. Absent from Kines and Garrigues.",
    possiblySameAs: null, aliases: []
  },

  "rio-st": {
    spellings: [{ forms: ["Rio Street"] }],
    namedAfter: "{{The river}} — the Los Angeles River, which this street ran beside",
    namedAfterLink: null,
    categories: ["nature", "water"],
    sources: [
      { title: "Los Angeles Herald, Oct. 11, 1888 — the special committee's street-name list: “Rio Ave., in E. part of city, changed to Rio St.”",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3" },
      { title: "L.A. City Planning, 500–600 South Anderson Street Industrial District (Adelante district DPR forms) — “the renaming of South Rio Street as South Anderson Street as it was extended to East 7th Street”",
        url: "https://planning.lacity.gov/odocument/f94c695f-d13c-4889-825e-ea340112c233/Adelante_District_DPR_Forms_0.pdf" }
    ],
    basis: "lexical",
    sharesWarrantWith: ["rio-avenue"],
    disputed: false,
    note: "Lettered on Tract No. 207 of Mar. 1908 (documents/tr0013-168-p1), on the line the Clement Tract had lettered Rio Avenue in 1887 and which the city council's street-name committee proposed renaming Rio Street in Oct. 1888. By the mid-1920s the Union Pacific had extended the street to East 7th and it became South Anderson Street.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. The successor of `rio-avenue` and the predecessor of `anderson`, with a document at each join — an unusually complete chain for this corpus. Absent from Kines and Garrigues.",
    possiblySameAs: null, aliases: []
  },

  "shenandoah-avenue": {
    spellings: [{ forms: ["Shenandoah Avenue"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    basis: "none",
    searched: "extensive",
    disputed: false,
    note: "Lettered on the Clement Tract of May 1887 (documents/mr017-041), on what is now Kearney Street east of the river. Nothing found says whether the Virginia valley, the Civil War campaign fought in it, or something else was meant.",
    internalNote: "Researched and moved from names-new.js 2026-09-17. `extensive` and genuinely empty: Kines /search/shenandoah/ is an explicit no-match and he has never written about any Shenandoah; Garrigues has none; the city's one surviving Shenandoah Street is grid 632J3 on the Westside and unrelated. ⚠ A VIRGINIA PLACE-NAME ON AN 1887 LOS ANGELES BOOM SHEET IS SUGGESTIVE AND THAT IS ALL IT IS. The valley, the 1864 campaign, the song and the Confederate raider CSS Shenandoah are all live and nothing chooses between them, so `none` with no categories rather than tagging `place` on a coin-flip. ⚠ Kines has no Kearney Street page either, so the successor is unexplained too.",
    possiblySameAs: null, aliases: []
  },

  "grace": {
    spellings: [{ forms: ["Grace Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [
      { title: "Los Angeles Herald, Oct. 11, 1888 — the special committee's street-name list: “Grace St., changed to Mono St.”",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3" },
      { title: "L.A. Street Names: Mono Street — Mono Street “was formerly called Grace Street before being renamed in 1889”, one of several Los Angeles streets renamed that year “in honor of California counties”",
        url: "https://lastreetnames.com/street/mono-street/" }
    ],
    basis: "none",
    searched: "extensive",
    disputed: false,
    note: "Lettered on the Clement Tract of May 1887 (documents/mr017-041) and gone. The city council's street-name committee proposed changing it to Mono Street in Oct. 1888, and Kines dates the renaming itself to 1889, in a round of names taken from California counties. Nothing found says who Grace was.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. ★ THE PROPOSAL AND THE ACT ARE A YEAR APART AND BOTH ARE NOW SOURCED — documents/lah-1888-10-11 for the committee, Kines for the 1889 renaming — which is a useful calibration on how long that committee's items took to land. ⚠ ON THE NAMESAKE, nothing: Kines explains where Grace went and not where it came from, Garrigues has no Grace, and the registry has none in this area. A woman's given name on a boom tract, like `clementina-street` on the same sheet, and equally untraced. ⚠ documents/lah-1888-10-11 also has a SECOND Grace Street, “in W. part of city, changed to Napa St.” — not this one.",
    possiblySameAs: null, aliases: []
  },

  "clarence-st": {
    spellings: [{ forms: ["Clarence Street"] }],
    namedAfter: "{{Clarence Casper Cummings}} (1881–1968), son of George and Sacramenta Cummings, who owned the land it was laid out on",
    namedAfterLink: "https://lastreetnames.com/street/clarence-street/",
    categories: ["person", "alive", "family"],
    sources: [
      { title: "L.A. Street Names: Clarence Street — named for Clarence Casper Cummings (1881–1968), whose parents George and Sacramenta owned the land; “Clarence Street was laid out in 1894”",
        url: "https://lastreetnames.com/street/clarence-street/" }
    ],
    basis: "attested",
    disputed: false,
    note: "Laid out in 1894 and named for the thirteen-year-old son of the landowners George and Sacramenta Cummings. Clarence was one of six surviving Cummings children raised in Boyle Heights; the family later moved to Cummings Valley in Kern County, and he ran cattle and chickens with his brother Edward. South Clarence Street survives; the northern stretch lettered on Tract No. 207 in 1908 (documents/tr0013-168-p1) and again in 1926 (documents/tr0122-053-p3) is gone.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. ⚠ THE SHEETS DID NOT COIN IT: Kines dates the street to 1894, so both rows attest an existing name. ⚠ AND IT DID NOT VANISH, only this stretch did — the registry has CLARENCE STREET live at grid 634J5, and L.A. City Planning's Adelante DPR forms place contributing properties “west of South Clarence Street” with an address at 601 South Clarence Street. The rows are correct as `vanished` for the northern segment; the entity must not say the name is gone. ⚠ GARRIGUES DISAGREES and hedges himself: “Clarence St. is prob. part of Paseo El Coronel (33).” Given a live registry entry and a 2010s district record, read him as describing the lost northern segment, or as wrong. ⚠ THE CUMMINGS FAMILY HERE IS NOT `cummings-ave`'s: that entity is the Angeleno Heights Cummings, explicitly a different street and family, and its internalNote already warns against attaching the Boyle Heights Cummingses. This is the street where they belong.",
    possiblySameAs: null, aliases: []
  },

  "utah-st": {
    spellings: [{ forms: ["Utah Street"] }],
    namedAfter: "{{Utah}}, proposed by Thomas W. Collins, who had been living in Salt Lake City, on land owned by the Salt Lake City native Henry J. Woollacott",
    namedAfterLink: "https://lastreetnames.com/street/utah-street/",
    categories: ["place", "state"],
    sources: [
      { title: "L.A. Street Names: Utah Street — the street was originally Pleasant Street and was renamed in 1896 on the petition of Thomas W. Collins (1850–1910), who had been living in Salt Lake City in 1886; the land was owned by Henry J. Woollacott (1858–1910), a Salt Lake City native, whose brother Howard married Collins's daughter Josephine that same year",
        url: "https://lastreetnames.com/street/utah-street/" }
    ],
    basis: "attested",
    disputed: false,
    note: "Originally Pleasant Street, and renamed in 1896 because it was being confused with the nearby Pleasant Avenue. Thomas W. Collins petitioned for the change and proposed Utah: he had been living in Salt Lake City when his son was born in 1886, and the land was owned by Henry J. Woollacott, a Salt Lake City native whose brother married Collins's daughter that year. Collins, a bartender who came to Los Angeles about 1888, went blind in 1898 and worked as a guide at City Hall, known about town as “Blind Tom”.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. ⚠ THE SHEETS DID NOT COIN IT: the name dates to 1896, and our rows are Tract No. 207 (1908) and Tract No. 5301 (1926), so both attest an existing name. ✔ THE PLEASANT AVENUE STORY CHECKS OUT independently — the registry's grid 634J4 still contains both PLEASANT AVE and UTAH STREET, which is exactly the confusion Collins petitioned about. ★ This is a rare thing in the corpus: a street name whose PROPOSER is documented rather than its honoree, and the honoree is a state chosen for personal reasons rather than as part of any set.",
    possiblySameAs: null, aliases: []
  },

  "azusa": {
    spellings: [{ forms: ["Azusa Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    basis: "none",
    searched: "partial",
    disputed: false,
    note: "Lettered on Tract No. 5301 of Feb. 1926 (documents/tr0122-053-p3) and still Azusa Street today. Nothing found says why the name was chosen here.",
    internalNote: "Researched and moved from names-new.js 2026-09-17. ⚠⚠ NOT THE AZUSA STREET OF THE 1906 REVIVAL, and the trap runs the opposite way from what everyone expects. The revival's Azusa Street is the Little Tokyo alleyway, christened 1889, which Kines covers and says was “obviously inspired by the town of Azusa”. THIS street is east of the river: the city registry holds exactly ONE Azusa Street and it is ours, grid 634J5, whose grid-mates are Artemus, Clarence, Gless, Pecan, Lanfranco, State and Hollenbeck. Little Tokyo is grid 634G4. So the famous Azusa Street no longer carries an official city street name and the survivor is this one — which is the reverse of the usual assumption and the reason this entity must never cite Kines's page. ⚠ Kines's reasoning for the 1889 street is plausible for a 1926 street too and MUST NOT BE TRANSFERRED; it is a statement about different ground. ⚠ `none` with no categories accordingly. ⭐ Note the sheet letters ANDERSON, ARTEMUS and AZUSA together, three A-names on one 1926 plat, which looks like alphabetical shelf-filling — an observation, not evidence.",
    possiblySameAs: null, aliases: []
  },

  "artemus": {
    spellings: [{ forms: ["Artemus Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    basis: "none",
    searched: "partial",
    disputed: false,
    note: "Lettered on Tract No. 5301 of Feb. 1926 (documents/tr0122-053-p3) and still Artemus Street today. Nothing found says who or what it was named for.",
    internalNote: "Researched and moved from names-new.js 2026-09-17. Kines /search/artemus/ is an explicit no-match; Garrigues has none; the registry has one Artemus Street, grid 634J5, which is ours. ⚠ ARTEMUS WARD WAS CHECKED AND IS UNSUPPORTED — Charles Farrar Browne's pen name surfaces in general search with no Los Angeles connection whatever, so it is not recorded in `refuted` either: nothing was pursued and died, there was simply never anything under it. ⚠ ONE PATTERN, OFFERED AS OBSERVATION NOT EVIDENCE: this sheet letters Anderson, Artemus and Azusa together, three A-names on one plat, which weakens rather than strengthens the case that Artemus commemorates a particular person. See `azusa`.",
    possiblySameAs: null, aliases: []
  },

  "mission-road": {
    spellings: [{ forms: ["Mission Road"] }],
    namedAfter: "{{Mission San Gabriel Arcángel}}, which the road ran to from the pueblo",
    namedAfterLink: "https://en.wikipedia.org/wiki/Mission_San_Gabriel_Arc%C3%A1ngel",
    categories: ["place", "destination"],
    sources: [],
    basis: "lexical",
    disputed: false,
    note: "Lettered on Tract No. 5301 of Feb. 1926 (documents/tr0122-053-p3) and still Mission Road. The road is far older than the sheet: it is the route from the pueblo out to Mission San Gabriel, and the tracts along it record a name already long in use.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. `lexical` and not `attested`: the referent is determinate — there is one mission this road goes to, and the name is a bare statement of destination — but no source in this corpus states it, and the road's naming long predates every document we hold for it. ⚠ THIS ENTITY'S ROWS ATTEST AN ABSORPTION, NOT AN ORIGIN, like `sunset-boulevard`: the 1926 sheet letters Mission Road over ground the Clement Tract lettered ANDERSON STREET in 1887 (documents/mr017-041), so on this stretch Mission Road is the later name. A change row between them is waiting.",
    possiblySameAs: null, aliases: []
  },

  "stevenson-ave": {
    spellings: [{ forms: ["Stevenson Avenue"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [
      { title: "Los Angeles Herald, Oct. 11, 1888 — the special committee's street-name list, which disposes of two Stevensons: “Diamond St., Lake Shore Ave. and Stevenson Ave., changed to Second St.” and “Stevenson St. and Stevenson Ave., in blocks 58 and 59 H. S., changed to Wisconsin St.”",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3" }
    ],
    basis: "none",
    searched: "partial",
    disputed: false,
    note: "Lettered “STEVENSON AVE.” on documents/tr0013-168-p2. Nothing found says who Stevenson was.",
    internalNote: "Researched and moved from names-new.js 2026-09-17. ⚠ NO ROWS AT PRESENT — the entity was minted in review from tr0013-168-p2 but carries no row in the corpus, so its ground is unfixed and none of the identifications below can be tested against it. That is the first thing to fix. ⚠ AT LEAST TWO OTHER STEVENSONS were in the city in 1888 and documents/lah-1888-10-11 culls both — one folded into Second Street, one into Wisconsin Street in Hancock blocks 58 and 59 — so a Stevenson hit in any source is worthless without ground to place it on. Not searched further until the row exists.",
    possiblySameAs: null, aliases: []
  },

  // ======================================================================
  // THE BIGELOW TRACT — a railway written across three streets
  // ======================================================================

  "atchison-st": {
    spellings: [{ forms: ["Atchison Street"] }],
    namedAfter: "The {{Atchison, Topeka and Santa Fe Railway}}, whose subsidiary the California Central had reached Los Angeles five months before this tract was recorded beside its depot",
    namedAfterLink: "https://en.wikipedia.org/wiki/Atchison,_Topeka_and_Santa_Fe_Railway",
    categories: ["company"],
    sources: [
      { title: "Wikipedia: California Central Railway — “The California Central Railway was incorporated on April 23, 1887… On June 30, 1888, it began operations as a subsidiary of the Atchison, Topeka and Santa Fe Railway”, and the May 20, 1887 purchase of the Los Angeles and San Gabriel Valley Railroad “complet[ed] the rail line from Chicago to Los Angeles through the San Gabriel Valley”",
        url: "https://en.wikipedia.org/wiki/California_Central_Railway" },
      { title: "L.A. Street Names: Atchison Street — Macpherson's 1887 Pasadena Highland tract named “Atchison, Topeka, and Santa Fe streets for the Atchison, Topeka & Santa Fe Railway”, alongside Erie, Denver and Rio Grande streets “after famous railroads”",
        url: "https://lastreetnames.com/street/atchison-street/" },
      { title: "Los Angeles Herald, Oct. 11, 1888 — the special committee's street-name list: “Third St. from San Pedro to Wolfskill Ave. and Georgia St., changed to Atchison St.”",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3" }
    ],
    basis: "pattern",
    sharesWarrantWith: ["topeka-st", "freight-st"],
    disputed: false,
    note: "Lettered on the Subdivision of the Bigelow Tract Adjoining the California Central Depot Grounds, recorded Oct. 14, 1887 (documents/mr024-081), on what is now 3rd Street near the river. The tract letters Atchison, Topeka and Freight Streets together beside the depot of a railway that had become the Santa Fe's route into Los Angeles five months earlier. A year later the city council's street-name committee proposed extending the name west over Third Street and Georgia Street.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. ★★ THE STRONGEST `pattern` IN THIS BATCH, and it is a three-part argument: the tract's own title says it adjoins the California Central Depot Grounds; the California Central was incorporated April 1887 and was an ATSF subsidiary, completing the Chicago–Los Angeles line through the San Gabriel Valley in May 1887; and Kines documents the IDENTICAL naming habit in the same year a few miles away, where Macpherson's Pasadena Highland tract lettered Atchison, Topeka AND Santa Fe streets for the railway. ⚠ NO SOURCE STATES IT FOR THIS TRACT — that is why it is `pattern` and not `attested`, and Kines's Pasadena page must not be cited as if it were about this street. ⚠ THE 1888 COMMITTEE LINE IS A DIFFERENT STRETCH, west of the river; whether it took is not established. ⚠ BIGELOW HIMSELF IS UNIDENTIFIED: Kines /search/bigelow/ is an explicit no-match, Garrigues has none, and the one lead — a Calisphere record titled “Bigelow, L. M. - Downtown Los Angeles parcel” — is robots-blocked and was never opened, so “L. M. Bigelow” is an unverified string from a search-result title and nothing more. The name is gone from the city registry.",
    possiblySameAs: null, aliases: []
  },

  "topeka-st": {
    spellings: [{ forms: ["Topeka Street"] }],
    namedAfter: "The {{Atchison, Topeka and Santa Fe Railway}}, whose subsidiary the California Central had reached Los Angeles five months before this tract was recorded beside its depot",
    namedAfterLink: "https://en.wikipedia.org/wiki/Atchison,_Topeka_and_Santa_Fe_Railway",
    categories: ["company"],
    sources: [
      { title: "Los Angeles Herald, Oct. 11, 1888 — the special committee's street-name list: “Topeka St., near river, changed to Davies St.”",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3" }
    ],
    basis: "pattern",
    sharesWarrantWith: ["atchison-st", "freight-st"],
    disputed: false,
    note: "Lettered on the Subdivision of the Bigelow Tract Adjoining the California Central Depot Grounds, recorded Oct. 14, 1887 (documents/mr024-081), a block north of the tract's Atchison Street on what is now 2nd Street. In Oct. 1888 the city council's street-name committee proposed changing it to Davies Street.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. See `atchison-st` for the full argument and its limits. ★ THE 1888 LINE PLACES IT: “Topeka St., near river” is this street and not Garrigues's other Topeka, which he puts “bet. Compton & Santa Fe Aves.” and makes part of East 55th Street, four miles south. Two Topekas, and the committee culled ours within a year of its being platted — which fits a duplicate rather than a dislike. ⚠ Whether Davies Street ever took is not established; the ground is 2nd Street now. Gone from the city registry (its one Topeka is a Valley drive).",
    possiblySameAs: null, aliases: []
  },

  "freight-st": {
    spellings: [{ forms: ["Freight Street"] }],
    namedAfter: "The {{freight}} business of the California Central depot the tract adjoined",
    namedAfterLink: null,
    categories: ["abstract", "descriptive"],
    sources: [],
    basis: "pattern",
    sharesWarrantWith: ["atchison-st", "topeka-st"],
    disputed: false,
    note: "Lettered on the Subdivision of the Bigelow Tract Adjoining the California Central Depot Grounds, recorded Oct. 14, 1887 (documents/mr024-081), between the tract's Atchison and Topeka Streets. It is gone.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. The third member of the set, and the one that shows what the set is FOR: a tract laid out against a depot's freight yards, with the parent railway's two Kansas towns on the through streets and the traffic itself on the one between. `pattern` shares its warrant with the other two rather than standing alone, since “Freight” read by itself would be a bare descriptive. ⚠ Garrigues has a different Freight Street — “leading one block east from Avery, is abandoned (13)” — which is not this one. Gone from the city registry.",
    possiblySameAs: null, aliases: []
  },

  // ======================================================================
  // THE WITMER STREET ABSORPTIONS — three names the 1888 committee lost
  // ======================================================================
  //
  // ★★ documents/lah-1888-10-11 carries "Witmer St., Nichols St. and Logan Ave.,
  // changed to NICHOLS St." Three separate 1885–87 tract names lie on the line
  // of modern Witmer Street — Bryan, Nichols and Logan — and the city council's
  // committee wanted the whole thing called Nichols. THE GROUND SAYS WITMER
  // WON. That is one of the clearest instances in the corpus of a committee
  // proposal losing to a name already in use, and it is why this file grades
  // 1888 lines as intentions rather than acts.

  "nichols-ave": {
    spellings: [{ forms: ["Nichols Avenue"] }],
    namedAfter: "{{John Gregg Nichols}} (1812–1898), mayor of Los Angeles, or his son John Jr. (1851–1916) — the family that owned this ground before it was subdivided",
    namedAfterLink: "https://en.wikipedia.org/wiki/John_G._Nichols",
    categories: ["person", "politician", "mayor", "landowner"],
    sources: [
      { title: "L.A. Street Names: Union Avenue — of the adjoining Crown Hill land, “The land's previous owners were mayors Prudent Beaudry and John G. Nichols.”",
        url: "https://lastreetnames.com/street/union-avenue/" },
      { title: "L.A. Street Names: Nichols Canyon Road — “Named for John Gregg Nichols (1812-1898) and/or his son John Jr. (1851-1916). The elder Nichols… wagoned out to California in 1849 and settled in Los Angeles the following year… wound up serving three terms as mayor.”",
        url: "https://lastreetnames.com/street/nichols-canyon-road/" },
      { title: "Los Angeles Herald, Oct. 11, 1888 — the special committee's street-name list: “Witmer St., Nichols St. and Logan Ave., changed to Nichols St.”",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3" }
    ],
    basis: "inferred",
    disputed: false,
    note: "Lettered on Colina Park in Nov. 1885 (documents/mr007-036-p2), on Bentley & Crippen's subdivision of Apr. 1886 (documents/mr007-096-p2) and again in Oct. 1889 (documents/mr037-078), along what is now Witmer Street. A separate sheet of 1887 is titled Nichols' Addition to West Los Angeles, and Kines names John G. Nichols as a previous owner of the adjoining Crown Hill land. In Oct. 1888 the city council's street-name committee proposed folding Witmer Street and Logan Avenue into it; Witmer is the name that survived.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. `inferred`, not `attested` or `eponymous`: the anchor is independently sourced — John Gregg Nichols is documented, and Kines places him as a prior owner of this exact ground — but no source states the naming, and the plat this street is on is not the one titled with his name. ⚠ FATHER OR SON IS UNRESOLVED and Kines does not resolve it for Nichols Canyon either; both are carried in `namedAfter` rather than picking one. ⚠ NICHOLS CANYON IS A DIFFERENT STREET, in the Hollywood Hills, and only the FAMILY is shared — do not merge. ⚠ A SOURCE CONFLICT worth knowing: Kines says three terms as mayor, Wikipedia gives two separate periods (1852–53 and 1856–59); reconcilable if the second is counted as annual terms, and flagged rather than smoothed. ★ See `logan-ave` and `bryan-st`, the two other names on this line.",
    possiblySameAs: null, aliases: []
  },

  "logan-ave": {
    spellings: [{ forms: ["Logan Avenue"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [
      { title: "Los Angeles Herald, Oct. 11, 1888 — the special committee's street-name list: “Witmer St., Nichols St. and Logan Ave., changed to Nichols St.”",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3" }
    ],
    basis: "none",
    searched: "partial",
    disputed: false,
    note: "Lettered on Orange Heights in June 1887 (documents/mr018-063), George R. Shatto's tract, along what is now Witmer Street. In Oct. 1888 the city council's street-name committee proposed folding it, with Witmer Street, into Nichols Street. Nothing found says who Logan was.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. ⚠ THE OBVIOUS CANDIDATE IS UNSUPPORTED AND IS DELIBERATELY NOT IN `namedAfter`: John A. Logan, the Union general and 1884 vice-presidential candidate, died in Dec. 1886, six months before this sheet, which is suggestive timing and nothing more. No source connects him to it. ★ AND SURVEYLA GIVES A RIVAL READING THAT DID NOT EXIST BEFORE 2026-09-17: Orange Heights was George Rufus Shatto's tract, so a Shatto-circle personal name is now equally live. Two live readings and no evidence is exactly what `none` is for. Absent from Kines (ten unrelated hits) and from Garrigues. See `shatto-st`.",
    possiblySameAs: null, aliases: []
  },

  "bryan-st": {
    spellings: [{ forms: ["Bryan Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    basis: "none",
    searched: "partial",
    disputed: false,
    note: "Lettered on the Kennedy Tract of Jan. 1885 (documents/mr006-193), along what is now Witmer Street. Nothing found says who Bryan was.",
    internalNote: "Researched and moved from names-new.js 2026-09-17. ⚠ GARRIGUES HAS TWO BRYANS AND NEITHER IS THIS ONE: “Bryan or Byran or Byram St., bet. 10th (present Olympic) & 11th Sts., 3 blocks west of Figueroa is under the 110 (17)” and “Bryan bet. Bellevue & Marathon is part of Lafayette Park Place (26)”. Ours is at 8th, on the Witmer line. Kines has no Bryan Street page; his Bryan is Elden Bryan of the 1902 Westmoreland tract, a different man and place. ⭐ THE LEAD IS THE TRACT, NOT THE NAME: Bryan, Holmes and Lincoln Place were all lettered on one sheet, the Kennedy Tract, surveyed May 1884 by E. T. Wright — and KENNEDY IS UNIDENTIFIED TOO. One title block would probably settle all four. See `holmes-st` and `lincoln-place`.",
    possiblySameAs: null, aliases: []
  },

  "holmes-st": {
    spellings: [{ forms: ["Holmes Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [
      { title: "L.A. Street Names: Garland Avenue — “Also in 1897, the former Holmes Street was renamed Garland Avenue on one of Garland's tracts.”",
        url: "https://lastreetnames.com/street/garland-avenue/" }
    ],
    basis: "none",
    searched: "partial",
    disputed: false,
    note: "Lettered on the Kennedy Tract of Jan. 1885 (documents/mr006-193) and renamed Garland Avenue in 1897, on one of William May Garland's tracts. Nothing found says who Holmes was.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. ★★ THE SUCCESSION IS SOURCED AND DATED, which is unusual for a name with no namesake: Kines states the Holmes → Garland renaming outright and dates it to 1897, and documents/mr060-088, the Garland Tract sheet, is recorded April 1897 — the two agree independently. See `garland`. ⚠ ON THE MAN, nothing: Kines has no Holmes Street page, and Garrigues's only Holmes is a South Los Angeles street (Cadena/Cadina → Holmes Ave.) that is not this one. Same Kennedy Tract problem as `bryan-st` — the subdivider is the lead.",
    possiblySameAs: null, aliases: []
  },

  "lincoln-place": {
    spellings: [{ forms: ["Lincoln Place"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    basis: "none",
    searched: "partial",
    disputed: false,
    note: "Lettered on the Kennedy Tract of Jan. 1885 (documents/mr006-193), on what are now 8th Street and 8th Place. Nothing found says whether the president, a family or something else was meant.",
    internalNote: "Researched and moved from names-new.js 2026-09-17. ⚠ ABRAHAM LINCOLN IS THE OBVIOUS READING AND IT IS DELIBERATELY NOT IN `namedAfter`, because a Lincoln on an 1885 Los Angeles plat could equally be a surname, a place borrowed from the east, or a family name of the unidentified Kennedy — and twenty years after the assassination the president is no longer a datable occasion. `none` with no categories accordingly. ⚠ NOT `lincoln-street`, half a mile east on Potter's Subdivision of Nichols' Addition (documents/mr021-087), although BOTH became parts of West 8th Place, which is a genuine trap. Garrigues has a single entry — “Lincoln St., east & west of Francisco St., is W. 8th Place (17)” — and Francisco Street is at lon −118.2605, which is the OTHER street; he either did not know about this one or conflated the two. That locator is the only thing separating them in any source.",
    possiblySameAs: null, aliases: []
  },

  "lincoln-street": {
    spellings: [{ forms: ["Lincoln Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [
      { title: "George Garrigues, What Ever Became of Those Old L.A. City Streets? — “Lincoln St., east & west of Francisco St., is W. 8th Place (17).”",
        url: "https://stevemorse.org/census/changes/LosAngelesChanges2.htm" }
    ],
    basis: "none",
    searched: "partial",
    disputed: false,
    note: "Lettered on Potter's Subdivision of Block 3 of Nichols' Addition to West Los Angeles, Aug. 1887 (documents/mr021-087), on what is now 8th Place. Nothing found says whether the president, a family or something else was meant.",
    internalNote: "Researched and moved from names-new.js 2026-09-17. Garrigues's locator “east & west of Francisco St.” places his single Lincoln entry on THIS street rather than on `lincoln-place`, which is half a mile west and also became 8th Place — see that entity for the trap. ⚠ Same reasoning for `none`: Lincoln in 1887 Los Angeles is as likely a surname or a borrowed eastern place-name as the president, and nothing chooses.",
    possiblySameAs: null, aliases: []
  },

  // ======================================================================
  // The rest of the Westlake batch
  // ======================================================================

  "garland": {
    spellings: [{ forms: ["Garland Avenue"] }],
    namedAfter: "{{William May Garland}} (1866–1948), the real-estate man who subdivided this tract and who later brought the 1932 Olympic Games to Los Angeles",
    namedAfterLink: "https://lastreetnames.com/street/garland-avenue/",
    categories: ["person", "alive", "landowner"],
    sources: [
      { title: "L.A. Street Names: Garland Avenue — “William May Garland (1866-1948) was a Mainer who came to L.A. in 1890… in 1893 he turned to real estate… Also in 1897, the former Holmes Street was renamed Garland Avenue on one of Garland's tracts.”",
        url: "https://lastreetnames.com/street/garland-avenue/" },
      { title: "Contemporary biography of William May Garland — “In 1890, because of a threatened break in his health, Mr. Garland came to Los Angeles and accepted a position as auditor of the Pacific Cable Railway Company”; “Mr. Garland subdivided and sold the Wilshire Boulevard tract, and the Garland tract and a few other subdivisions”",
        url: "https://goldennuggetlibrary.sfgenealogy.org/lagar2.htm" }
    ],
    basis: "eponymous",
    disputed: false,
    note: "Lettered on the Map of the Garland Tract of April 1897 (documents/mr060-088) and again on Tract No. 2905 of 1915 (documents/tr0030-069), and still Garland Avenue. Garland came to Los Angeles from Maine in 1890 as an auditor for a streetcar company, turned to real estate in 1893, and in 1897 — the year this tract was recorded — sold Harrison Gray Otis the Wilshire Boulevard property that became the Otis College of Art and Design. He is better remembered for securing the 1932 Summer Olympics for Los Angeles, which he had pushed for almost singlehandedly since 1920.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. `eponymous` on the plat's own title — the Map of the Garland Tract — and the role is doubly attested, since a contemporary biography names “the Garland tract” among his own subdivisions. ★ THE DATES INTERLOCK EXACTLY: Garland went solo in real estate in 1894, this tract is April 1897, and Kines independently dates the Holmes → Garland renaming to 1897. See `holmes-st`, the name it replaced. Garrigues has no Garland entry, which for his list means unchanged since the 1903 map — correct, it survives.",
    possiblySameAs: null, aliases: []
  },

  "ventura-ingraham": {
    spellings: [{ forms: ["Ventura Street"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [
      { title: "Los Angeles Herald, Oct. 11, 1888 — the special committee's street-name list: “Ventura St., changed to Ingraham St.”",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3" }
    ],
    basis: "none",
    searched: "partial",
    disputed: false,
    note: "Lettered on Orange Heights in June 1887 (documents/mr018-063), George R. Shatto's tract, on what is now Ingraham Street. In Oct. 1888 the city council's street-name committee proposed the change to Ingraham, and the name took. Nothing found says whether the county, the town or something else was meant.",
    internalNote: "Researched and moved from names-new.js 2026-09-17; prose drafted by Claude the same day and unreviewed. ★★ ONE OF THE FEW 1888 COMMITTEE PROPOSALS IN THIS CORPUS THAT DEMONSTRABLY TOOK — the entity id was minted `ventura-ingraham` on the strength of the alignment alone, and documents/lah-1888-10-11 now says it in the committee's own words. ⚠ ON VENTURA, nothing: Kines's Ventura entries are all San Fernando Valley and Ventura County, Garrigues has none. ⚠ AND INGRAHAM IS A FIRM NEGATIVE from three directions — Kines /search/ingraham/ returns nothing found, Garrigues has none, and SurveyLA mentions Ingraham only as a 1929 building address — so the successor's own namesake is untraced too. The street survives, grid 634D3.",
    possiblySameAs: null, aliases: []
  },

  "hartford-ave": {
    spellings: [{ forms: ["Hartford Avenue"] }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    basis: "none",
    searched: "partial",
    disputed: false,
    note: "Lettered on Tract No. 2905 of Oct. 1915 (documents/tr0030-069). Hartford Avenue still exists in the same neighbourhood; this short stretch is gone. Nothing found says who or what it was named for.",
    internalNote: "Researched and moved from names-new.js 2026-09-17. ✔ ONE STREET, NOT A COINCIDENTAL DUPLICATE: the registry has exactly one Hartford Avenue, grid 634D3, whose grid-mates are Maryland, Union Drive, Lucas, Ingraham, Columbia Place, Columbia Avenue and Miramar — this neighbourhood. SurveyLA cites addresses at 718 and 475 S. Hartford Ave. from 1906 and 1909, so the street was built out before this 1915 sheet, which therefore attests an existing name. ⚠ NOTHING ON THE NAMESAKE: Kines has no Hartford entry (his one hit is Greenleaf Avenue, on the poet Whittier); Garrigues has none. The Connecticut capital is the obvious reading and no source gives it. ⚠ documents/lah-1888-10-11's “Wilson St., in S. part of city, changed to Hartford St.” is an EARLIER AND DIFFERENT street, and no source connects them.",
    possiblySameAs: null, aliases: []
  },

  "willow-golden": {
    spellings: [{ forms: ["Willow Street"], disambiguation: "Truman Tract, later Golden Avenue" }],
    namedAfter: null,
    namedAfterLink: null,
    categories: [],
    sources: [],
    basis: "none",
    searched: "partial",
    disputed: false,
    note: "Lettered on the Plan of the Truman Tract of Jan. 1884 (documents/mr005-405), on what is now Golden Avenue. Nothing found says why the tree was chosen here.",
    internalNote: "Researched and moved from names-new.js 2026-09-17. ⚠⚠ NOT `willow`, which is the Goodwin Tract's Willow Street of Oct. 1886, two and a half kilometres south-east by the river and still Willow Street today — and that one IS gradeable, because it belongs to a tree set (Palm, Spruce, Tulip, Willow). THIS one stands alone on its sheet with no tree beside it, so the same word earns a different grade, which is the clearest illustration in the file of what `pattern` is actually doing. An authored `disambiguation` is carried because both render as “Willow Street”. ✔ THE REGISTRY SEPARATES THEM CLEANLY: the surviving public Willow Street is grid 634J5 (the river side) and Golden Avenue is 634D4, which is where this one was. Kines has no Willow Street entry; Garrigues has no Willow at all, so he covers neither. ⭐ THE LEAD IS THE TRACT: Truman is unidentified, but Kines says of his own 1874 Truman Street that Benjamin Cummings Truman (1835–1916) “wasn't just the only guy named Truman in Los Angeles when this street was named” — which makes the journalist and Los Angeles Star publisher the overwhelmingly likely Truman behind an 1883–84 tract too. That is about a different street and is NOT recorded here as a finding; it is the next thing to check.",
    possiblySameAs: null, aliases: []
  },
'''


def main():
    s = io.open("names.js", encoding="utf-8").read()
    if MARKER not in s:
        sys.exit("names.js marker not found")
    if '"colina-ave"' in s:
        sys.exit("already applied?")
    s = s.replace(MARKER, "\n" + BLOCK.rstrip() + MARKER, 1)
    io.open("names.js", "w", encoding="utf-8").write(s)

    n = len(re.findall(r'^  "[a-z0-9-]+": \{$', BLOCK, re.M))
    print("inserted %d entities" % n)


main()
