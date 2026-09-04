# Researching a name: where the evidence comes from, and what may be written down

A **name entity** (`names.js`, MODEL-SPEC §3) is a naming *lineage*, and this
file is about filling one in: finding out who or what a street was named after,
and what may honestly be claimed once you have.

It is not about finding out where a name applied — that is the map tool's job
(MAP-TOOL-GUIDE.md), and the document corpus answers it. This file starts where
that leaves off: `names-new.js` holds entities the tool minted because a plat
lettered something nobody had entered, each waiting for a namesake. Its
`sightings` field lists every sheet in the corpus that letters the name, with
the ink each one uses. That is where to start on one.

## The primary-anchor principle

**Every entity should ultimately carry at least one primary-record source** —
the Ord/Hutton survey, a Council ordinance or its minutes, a contemporary
newspaper report of the action, or a recorded tract map.

Not every name had a Council action: organic pre-1849 names and tract-map names
never did. But every *dated claim* traces to one of these trails. Secondary
sources are fine as interim citations; upgrading to a primary anchor is
standing work.

## Where documents come from

- **City Council ordinances and minutes** — every official renaming
  (Wolfskill→Central 1897, Castelar→Hill 1960) was a Council action. The L.A.
  City Archives & Records Center (Erwin Piper Technical Center) holds minutes
  and indexes back to 1850; recent decades are searchable online through the
  City Clerk's Council File Index.
- **Newspaper reports of Council actions** — often the easiest linkable proxy
  for the ordinance itself. The California Digital Newspaper Collection
  (cdnc.ucr.edu) has the Herald from the 1870s–1900s, free. The L.A. Times
  archive through LAPL/ProQuest covers the rest. **For instances:** CDNC pages
  are JavaScript-rendered, so fetch tools see empty pages — reading them needs
  a browser or a human.
- **Recorded tract maps** — new streets, and their first names, appear on
  recorded subdivision maps. Street → tract → scanned map:
  **TRACT-RESEARCH.md**.
- **Sanborn fire insurance atlases** (1888, 1894, 1906, 1950…) — the same
  ground re-surveyed every few years, so a pair of editions brackets a renaming
  on the exact blocks each sheet covers. Free at LOC. **SERIAL-SOURCES.md**.
- **City directories** (LAPL, 1873–1907) — annual street guides listing each
  street's extent in cross-streets: the tightest brackets available, and the
  likeliest surviving home for a mass-renaming concordance. Also
  SERIAL-SOURCES.md; ResCarta is JavaScript-rendered, so browser or human only.
- **Bernice Kimball, "Street Names of Los Angeles"** (Bureau of Engineering,
  1988) — the BOE's own compendium of name changes, compiled from city records.
  Not online; LAPL holds it, and Kines relies on it. Worth consulting to pin
  dates the web cannot.

### Secondary sources worth knowing

- **L.A. Street Names (Kines)**, lastreetnames.com — the standing reference,
  street by street. We cite it rather than duplicating its prose. Its coverage
  is uneven: several entities in `names-new.js` are marked "NOT COVERED BY
  KINES", checked and recorded so nobody checks twice.
- **Los Angeles Revisited**, losangelesrevisited.blogspot.com — long, sourced
  neighbourhood deep-dives, and repeatedly the only source that has traced a
  particular name. It settled Cameron Lane, and it is worth searching before
  concluding a namesake is untraceable.
- Homestead Museum, SurveyLA, and LAPL's photo collection have each answered a
  question the others could not. None of them is systematic; try them when a
  name resists.

## What may be written down

- **Fact-focused, not narrative.** An entity states years, names and links.
  Extended prose is Kines's specialty, and we cite it instead of competing
  with it.
- **No methodology narration.** An entity says what a document shows and links
  it — not the process by which it was read. The one exception is an
  identification resting on map *alignment* rather than a label or lot match,
  which earns a short "(identified by map alignment)" in the source title.
- **Every year and name claim is justified by a linked source.** Uncertainty is
  stated, never papered over: "unverified", "no namesake documented", "not yet
  researched" are all legitimate values, and a null `namedAfter` with
  `categories: ["unknown"]` is an honest answer.
- **`note` is public; `internalNote` is not** (MODEL-SPEC §3). Working notes,
  dead ends and "checked Kines on this date, nothing there" go in
  `internalNote`, where they save the next person the same search.

## Two conventions for particular classes of name

- **Freeways are in scope.** For most, `namedAfter` is the route number's
  meaning in its numbering system — the 5, the 10 and the 405 are meaningful
  Interstate identifiers even along stretches with no other name. The older
  routes (Arroyo Seco Parkway, and the Harbor, Hollywood and Santa Ana
  freeways) predate the Interstate plan and have genuine name histories
  deserving full entries.
- **Numbered streets** are one entity per number, named after the ordinal
  position in the downtown grid, with the numbering in place by 1849 (claims of
  1846 are doubtful — see `first-street`). The ordinal meaning only
  *originates* on the Ord-grid stretch: every other stretch of a numbered
  street joined it by extension or renaming, and renamings flow both ways
  (10th → Olympic Blvd 1935; 9th west of Figueroa → James M. Wood Blvd 1997).
  A numbered street can be a donor or an absorber like any other.

## Working at scale

- **A batch is a set of documents, not a set of streets.** Research proceeds
  document-by-document because that is how the evidence is shaped: renaming
  petitions covered several streets at once, families named clusters of
  streets, and one plat routinely documents its neighbours. Sometimes the
  *question* is a street — a gap someone will notice, a lead worth closing —
  and that is still document-first underneath: find the documents that cover
  it, then apply each one fully rather than only to the street you came for.
- **Sourced beats complete.** A claim that arrives incidentally goes into the
  data with its citation, even for a name that has not had a full pass. Only
  *unsourced* material — inferences, patterns, recollections — waits in
  `research-leads.md`.
- **`research-leads.md` is the parking lot** for hunches and open questions,
  dated, one bullet each. Consume the relevant ones when applying a document,
  and sweep the file periodically.
- **Separate author from reviewer.** Draft in one session or sub-agent, review
  in another: run `node check-model.js`, and spot-check the boldest claim of
  the batch against its source.
