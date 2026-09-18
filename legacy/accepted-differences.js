// legacy/accepted-differences.js — findings of `node check-legacy.js` that a
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
// accepted here — those move into names.js as entities (SWITCHOVER.md §4).

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
];
