// legacy/accepted-differences.js — findings of `node tools/check-legacy.js` that a
// PERSON has looked at and waived, each with the reason. An entry here is the
// only thing that turns a HARD finding green; the harness never decides for
// itself. Match on the legacy street key, the legacy segment label ("*" for
// a whole-street entry, or for every segment of that street), and the check
// (coverage / names / namesake / dates / sources / street).
//
// 2026-09-17, Kenny: the six whole streets no sheet reaches are accepted for
// coverage until after the changeover (their sheets are Boyle Heights /
// east-of-the-river work); the freeways, the ExpressLanes and the two plazas
// are legacy-only ground by design (ROADMAP §7) and their former names are
// not going to be lettered on any sheet. NAMESAKES are deliberately NOT
// accepted here — those move into names.js as entities (research-leads.md,
// "Settled and open at the switchover").

const COVERAGE_LATER = "no sheet reaches this street yet; deferred until after the changeover (Kenny, 2026-09-17)";
const LEGACY_GROUND = "freeway / plaza: legacy-only ground by design (ROADMAP §7) — no recorded map will ever letter it";
const acc = (street, check, reason) => ({ street, label: "*", check, reason });

module.exports = [
  // Six whole streets with no document, deferred.
  ...["Myers Street", "Anderson Street", "Utah Street", "Keller Street", "Conway Place", "18th Street"]
    .map(s => acc(s, "coverage", COVERAGE_LATER)),
  ...["Keller Street", "Conway Place"].map(s => acc(s, "dates", COVERAGE_LATER)),

  // Freeways, ExpressLanes, plazas: coverage and dates (their planned/built
  // years came from secondary sources the document model does not encode).
  ...["Harbor Freeway", "Santa Ana Freeway", "Hollywood Freeway", "Santa Monica Freeway",
      "San Bernardino Freeway", "Arroyo Seco Parkway", "I-10 Metro ExpressLanes",
      "Plaza Del Sol", "Toriumi Plaza"]
    .flatMap(s => [acc(s, "coverage", LEGACY_GROUND), acc(s, "dates", LEGACY_GROUND)]),

  // The freeways' former names (Ramona Boulevard / Parkway / Freeway; the
  // Pasadena Freeway) — accepted as names; the histories stay in the legacy
  // file and in whatever entity carries the freeway's namesake.
  acc("San Bernardino Freeway", "names", "Ramona Boulevard → Parkway → Freeway: freeway naming history, no sheet letters it (Kenny, 2026-09-17)"),
  acc("Arroyo Seco Parkway", "names", "Pasadena Freeway: the state's 1954–2010 name, no sheet letters it (Kenny, 2026-09-17)"),

  // Never a street name: "De La Guerra Street" stood only in the DRAFT of
  // Ord. 4093; Toll's floor motion changed it to Boylston before adoption
  // (documents/ord-4093, the figueroa-gov → boylston row's note). The legacy
  // file recorded the draft name as a period. (Kenny, 2026-09-17)
  acc("Boylston Street", "names", "De La Guerra Street was never in force — draft name only, amended to Boylston on the floor (ord-4093)"),

  // Pre-Ord names no map will ever letter (there is no street-labelled plan of
  // the pueblo before 1849; the ayuntamiento records are text). The legacy
  // file itself marked Spring's two "unverified". Guinn 1912 does say North
  // Spring was "in the early years of the last century Calle Caridad" — if
  // that is ever drawn it is a state row from documents/guinn-1912, not a map.
  // (Kenny, 2026-09-17)
  acc("Spring Street", "names", "Calle Cuidado and Calle de Caridad: pre-Ord names, unverified in the legacy file itself; the Ord sheets letter PRIMAVERA. Caridad on North Spring rests on Guinn 1912 and can return as a textual state row"),
  acc("Main Street", "names", "Calle Real: the colonial designation of a principal road, not a documented name of this street; no source letters it"),

  // The legacy namedAfter was itself a sentence saying there is no namesake
  // ("Nothing specific — chosen as a pleasant replacement for Charity"); the
  // entity says the same with namedAfter: null and tells the story in its
  // note. (Kenny, 2026-09-18)
  acc("Grand Avenue", "namesake", "the old namedAfter said 'nothing specific'; grand-ave records that properly as null, basis none, with the petition story in its note"),
  // The old map named the Arctic explorer George W. De Long. The name was
  // assigned by Ordinance No. 48 in 1889, five years after his death and
  // repatriation, and no source connects him to any Los Angeles street; the
  // reading is kept in the entity's internal note as a lead. (Kenny, 2026-09-18)
  acc("Delong Street", "namesake", "the De Long-the-explorer reading has nothing behind it but the surname; demoted to an internal lead, basis none"),

  // The freeways and the ExpressLanes: legacy-only ground (coverage and dates
  // accepted above), and the namesakes were never deep research — a few
  // minutes with the standard sources reconstructs them whenever entities are
  // wanted. (Kenny, 2026-09-18)
  ...["Harbor Freeway", "Santa Ana Freeway", "Hollywood Freeway", "Santa Monica Freeway",
      "San Bernardino Freeway", "Arroyo Seco Parkway", "I-10 Metro ExpressLanes"]
    .map(s => acc(s, "namesake", "freeway / ExpressLanes namesake: shallow research, reconstructible from the standard sources in minutes; no entity until one is wanted (Kenny, 2026-09-18)")),

  // The last ten coverage gaps, compared stretch by stretch with the old map
  // on 2026-09-19: on every one the old claim was the whole-street entity
  // claim (namesake, Kines/Wikipedia citation, a renaming sentence), which the
  // entity still carries onto the grey stretch; no stretch-specific sighting
  // ever existed there. Grey means "no sheet yet", which is the truth, and
  // the corridors stay on the shopping list as work after the flip.
  // (Kenny, 2026-09-19)
  ...[["Georgia Street", "*"], ["Willow Street", "*"], ["Jesse Street", "*"], ["7th Place", "*"],
      ["Vignes Street", "*"], ["3rd Street", "west of Bixel"], ["3rd Street", "Boylston to Figueroa"],
      ["17th Street", "*"], ["Olympic Boulevard", "east of Central Ave (former 9th St)"],
      ["Cesar E Chavez Avenue", "*"]]
    .map(([street, label]) => ({ street, label, check: "coverage",
      reason: "no sheet reaches this ground yet; the old claim here was the whole-street entity claim, which the entity still carries — research queue, not a loss (Kenny, 2026-09-19)" })),

  // Two former-name histories the old map had from Kines alone and the new
  // map cannot yet draw: each is a chain of council actions across several
  // rowless documents, which is what the proceedings model (ROADMAP §2) is
  // for. Kenny has chosen to design that after the changeover. The ground is
  // blue and the current names and namesakes are on the map; only the chain
  // waits. (Kenny, 2026-09-19)
  { street: "Broadway", label: "north of Cesar Chavez (Chinatown)", check: "names",
    reason: "Buena Vista Road/Street: Eternidad → Buena Vista (1888 survey extension) → North Broadway (1909), across lah-1896-05-16, min-1893-04-10, lah-1899-05-06, lah-1908-09-22 and Guinn — proceedings work, after the changeover" },
  { street: "Miramar Street", label: "*", check: "names",
    reason: "Ocean View Avenue → Nob Hill Avenue (1896) → Ocean View (1897) → Miramar (1915): Kines's chain, with lah-1896-05-16 and min-1893-04-10 mentioning Ocean View and no rows — proceedings work, after the changeover" },
];
