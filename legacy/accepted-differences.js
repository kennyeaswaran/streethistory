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
];
