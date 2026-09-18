# -*- coding: utf-8 -*-
"""The two Calle Caridads are two streets, and Guinn 1912 says so. Kenny's
reading, 2026-09-17, confirmed against both papers and Ord's own sheet."""
import io, sys


def sub(path, pairs):
    s = io.open(path, encoding="utf-8").read()
    for old, new in pairs:
        if s.count(old) != 1:
            sys.exit("%s: %d matches for %r" % (path, s.count(old), old[:110]))
        s = s.replace(old, new, 1)
    io.open(path, "w", encoding="utf-8").write(s)
    print("patched", path)


# ── guinn-1895: the "contradiction" is resolved ─────────────────────────────
sub("documents/guinn-1895/guinn-1895.js", [
 ('''      note: "⚠⚠ THIS CONTRADICTS THE LIST ABOVE, in the same paper. The concordance gives Calle de " +
            "Las Caridad as the street that became GRAND AVENUE; here the same Spanish name is " +
            "Spring Street's own earlier name. Both can be true only if the name moved, or if one of " +
            "the two is Guinn's slip. Nothing here decides it, and no entity should lean on either " +
            "until something does. ★ Note also that Guinn marks his own hedge on Calle Cuidado — " +
            "“which I have not been able to verify by written record” — which is how to read " +
            "everything in this paper that he does not so mark." },''',
  '''      note: "✔ RESOLVED — TWO STREETS, NOT A CONTRADICTION, and Guinn's own 1912 paper decides it " +
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
            "Caridad claim is NOT so marked." },'''),
])

# ── guinn-1912: notes on the two passages ───────────────────────────────────
sub("documents/guinn-1912/guinn-1912.js", [
 ('''    { id: "oldest-streets",
      text: "San Fernando street (formerly Upper Main), North Main (once Alegro or Junction street) and North Spring street, in the early years of the last century Calle Caridad (Charity street), are the oldest streets of the city.",''',
  '''    { id: "oldest-streets",
      text: "San Fernando street (formerly Upper Main), North Main (once Alegro or Junction street) and North Spring street, in the early years of the last century Calle Caridad (Charity street), are the oldest streets of the city.",
      note: "★★ THIS IS THE SENTENCE THAT SEPARATES THE TWO CARIDADS, and it is why `charity` and " +
            "any Caridad on the Spring line are two entities and not one. Guinn names THREE streets " +
            "as the city's oldest, all of them north of the plaza, and gives NORTH SPRING the name " +
            "Calle Caridad in the early 1800s. The Caridad of `ord-survey-names` below — the one " +
            "that became Grand Avenue — is a different street, christened by the Ord Survey in 1849 " +
            "and two blocks west of Olive. ★ IT ALSO RESOLVES documents/guinn-1895, where the same " +
            "author writes loosely that “Spring street, sixty or seventy years ago was known as the " +
            "Calle de Las Caridad”: the next paragraph here says the streets south of First date " +
            "from the Ord Survey, so downtown Spring did not exist to be named in the 1830s and the " +
            "north end is the only candidate. (Kenny read it this way on 2026-09-17, before the " +
            "1912 text was checked; the paper says it in so many words.) ⭐ TWO MORE LINEAGES IN " +
            "ONE SENTENCE, neither yet an entity: SAN FERNANDO STREET was formerly UPPER MAIN, and " +
            "NORTH MAIN was once ALEGRO or JUNCTION STREET — the “Calle de Las Allegria — Junction " +
            "street” of the 1895 paper." },'''),

 ('''    { id: "ord-survey-names",
      text: "All the streets south of First street to Twelfth street and all west of Main street to Figueroa, date their existence from the Ord Survey, made in 1849. They were christened both in English and Spanish. The Spanish names long since ceased to be used and are forgotten. Forten, Caridad and Chapules have been changed to Broadway, Grand avenue and Figueroa.",''',
  '''    { id: "ord-survey-names",
      text: "All the streets south of First street to Twelfth street and all west of Main street to Figueroa, date their existence from the Ord Survey, made in 1849. They were christened both in English and Spanish. The Spanish names long since ceased to be used and are forgotten. Forten, Caridad and Chapules have been changed to Broadway, Grand avenue and Figueroa.",
      note: "★ A DATING RULE FOR THE WHOLE DOWNTOWN GRID, and the most useful single sentence in " +
            "either Guinn paper for this corpus: nothing south of First or west of Main existed " +
            "before 1849. Any claim that a street in that rectangle carried a name earlier than the " +
            "Ord Survey is wrong about the street. That is what resolves the Caridad tangle — see " +
            "`oldest-streets` above. ⚠ “Forten” is Fortin (Calle Fortin, Fort Street); the OCR and " +
            "possibly the printer mangled it. documents/guinn-1895 gives the full concordance of " +
            "which this is a three-item summary." },'''),
])

# ── names.js ────────────────────────────────────────────────────────────────
sub("names.js", [
 ('    internalNote: "streets-data.js also records Calle de Caridad as an unverified early name for SPRING Street. If that is ever confirmed it is a second entity that spells alike, not this one.",',
  '    internalNote: "streets-data.js also records Calle de Caridad as an early name for SPRING Street. '
  '✔✔ CONFIRMED 2026-09-17, AND THE PREDICTION IN THIS NOTE WAS RIGHT: it is a second entity that '
  'spells alike, not this one. documents/guinn-1912 states that “North Spring street, in the early '
  'years of the last century Calle Caridad (Charity street)” is among “the oldest streets of the '
  'city”, while THIS street is the Ord Survey\'s own 1849 christening — and the same paper adds that '
  'everything south of First and west of Main “date their existence from the Ord Survey, made in '
  '1849”, so the pre-1849 Caridad cannot be on downtown Spring at all. ⚠ THE OTHER CARIDAD HAS NO '
  'ENTITY YET and should not be folded in here: it is a pre-Ord organic name on the NORTH SPRING '
  'line through Chinatown, attested only in Guinn, with no document in this corpus lettering it. '
  'Compare West Market Street, which is in the same position. ✔ ORD\'S OWN SHEET KEEPS THEM APART: '
  'M.R. 53-68 labels Spring “Calle Primavera” and carries “Charity St / Calle de Caridad” as a '
  'separate street on the same sheet.",'),

 ('    note: "Lettered “Calle Primavera” on the 1849 survey. The nickname story is the usual explanation and is not documented; the season is the plainer reading. Two earlier names are reported for this street — Calle Cuidado (“Caution”) and Calle de Caridad (“Charity”) — but neither is verified.",',
  '    note: "Lettered “Calle Primavera” on the 1849 survey. The nickname story is the usual '
  'explanation and is not documented; the season is the plainer reading. Two earlier names are '
  'reported for this street. Calle de Caridad (“Charity”) belongs to the northern end, through what '
  'is now Chinatown: Guinn calls North Spring Street “in the early years of the last century Calle '
  'Caridad” and one of the oldest streets in the city, while everything south of First Street dates '
  'from the 1849 survey. Calle Cuidado (“Caution”), for the washes cutting across it, is a tradition '
  'Guinn could not verify.",'),

 ('    internalNote: "namedAfter is hedged on purpose: Kines gives the Ortega story without a record. Category keeps `unknown` alongside `person` so the map does not present a guess as an answer.",',
  '    internalNote: "namedAfter is hedged on purpose: Kines gives the Ortega story without a record. '
  'Category keeps `unknown` alongside `person` so the map does not present a guess as an answer. '
  '✔ THE CARIDAD REPORT IS NOW VERIFIED AND LOCATED, 2026-09-17 (Kenny\'s reading, confirmed in the '
  'text): documents/guinn-1912 puts Calle Caridad on NORTH SPRING STREET in the early 1800s, and the '
  'same paper dates everything south of First to the Ord Survey of 1849 — so downtown Spring did not '
  'exist to carry the name, and documents/guinn-1895\'s looser “Spring street, sixty or seventy years '
  'ago was known as the Calle de Las Caridad” is about the north end. ⚠ THAT IS A DIFFERENT LINEAGE '
  'FROM `charity`, the Ord street that became Grand Avenue, and it is not this entity either: it is '
  'an unminted third thing, on ground north of First, attested only in Guinn and lettered on no '
  'document here. Minting it is a judgement call for Kenny — the same call as West Market Street. '
  '⚠ CALLE CUIDADO IS STILL UNVERIFIED and should stay that way: Guinn flags it himself as “a '
  'tradition, which I have not been able to verify by written record”, which is the only such hedge '
  'he marks in that paper.",'),
])
