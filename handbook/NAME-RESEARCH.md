# Researching a name: where the evidence comes from, and what may be written down

A **name entity** (`data/names.js`, MODEL-SPEC §3) is a naming *lineage*, and this
file is about filling one in: finding out who or what a street was named after,
and what may honestly be claimed once you have.

It is not about finding out where a name applied — that is the map tool's job
(MAP-TOOL-GUIDE.md), and the document corpus answers it. This file starts where
that leaves off: `data/names-new.js` holds entities the tool minted because a plat
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
  archive through LAPL/ProQuest covers the rest. **For instances:** CDNC is
  robots-disallowed as well as JavaScript-rendered, so searching it is a human
  step; RENAMING-SOURCES.md, "Searching CDNC", has the query and URL forms.
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
  dates the web cannot; the lookups waiting on it are in IN-PERSON.md §2.

### Secondary sources worth knowing

- **L.A. Street Names (Kines)**, lastreetnames.com — the standing reference,
  street by street. We cite it rather than duplicating its prose. Its coverage
  is uneven: several entities in `data/names-new.js` are marked "NOT COVERED BY
  KINES", checked and recorded so nobody checks twice.
- **Los Angeles Revisited**, losangelesrevisited.blogspot.com — long, sourced
  neighbourhood deep-dives, and repeatedly the only source that has traced a
  particular name. It settled Cameron Lane, and it is worth searching before
  concluding a namesake is untraceable.
- Homestead Museum, SurveyLA, and LAPL's photo collection have each answered a
  question the others could not. None of them is systematic; try them when a
  name resists. **SurveyLA's historic-context statements and the neighbourhood
  preservation plans on planning.lacity.org are better than their reputation**
  and have been decisive twice: the Angelino Heights Preservation Plan states
  that tract's naming scheme outright, and the Industrial Development context
  statement dates the idea behind Industrial Street.

### Four tools that answer "which street is this, and does it still exist"

Namesake work keeps turning into identity work — is the modern street the same
one, is this a second street of the same name, what did it become. These four
answer that faster than any amount of prose-hunting, and none was in this
handbook before 2026-09-17.

- **The City's own street registry**, `https://data.lacity.org/resource/hntu-mwxc.json?$q=<term>`
  — the Bureau of Engineering's list of every official street name, with a
  Thomas Bros. grid reference that works as a coarse locator. **The single most
  useful tool found so far.** It answers "does this name survive" definitively,
  and a record whose `tbm_map` is `"NA"` is a *retired* name, which is how
  Weller Street was confirmed gone. Throttle to about three at a time or it 429s.
- **The Census geocoder**,
  `https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=<addr>&benchmark=Public_AR_Current&format=json`
  — free, no key, precise lat/long for a surviving address, which turns a
  registry hit into a point you can compare against a row. ⚠ Short industrial
  blocks often have no address range, so NO MATCH is not evidence of absence.
- **LMU's Hurley/Wright Surveyors Map Collection**, at
  `https://digitalcollections.lmu.edu/Documents/Detail/<slug>/<id>` — original
  linen drawings of many recorded L.A. tract maps, **with the boundary streets
  transcribed in the catalogue record**. That transcription is the useful part:
  it pinned New Cincinnati Street to Edgeware Road without anyone reading a
  scan. Its own search endpoint 404s, so arrive via web search.
- **George Garrigues, "What Ever Became of Those Old L.A. City Streets?"**
  `https://stevemorse.org/census/changes/LosAngelesChanges2.htm` — old street
  name → what absorbed it, with cross-street extents. Repeatedly the
  highest-yield single page for vanished names. There is no page 1; it 404s.
  ⚠ **The parenthesised numbers are ZIP suffixes, not years** — "(26)" means
  90026 — and the list compares the 1904 Chamber of Commerce map (drawn 1903 by
  Félix Violé) against the 2002 Thomas Guide, so **it dates nothing**. A name's
  absence means either the street kept its name or it was gone before 1904.
  Pull it in alphabet slices to get entries verbatim rather than summarised.

⚠ **Some sources answer without searching.** `lastreetnames.com/?s=` serves a
stale cached page — use `https://lastreetnames.com/search/<term>/`; the
Los Angeles Revisited RSS `?q=` and archive.org's `advancedsearch.php` and
`fulltext/inside.php` have all been seen ignoring the query and returning
defaults. **Always run a nonsense control term first.** A negative from an
unrun search is worse than no answer, because it gets recorded as `searched`.
For proving Kines does NOT cover a name, walk `/neighborhoods/<slug>/`, which
is complete; `/alpha/<letter>/` paginates at 20 and will lie to you.

### One name, several streets

Many Los Angeles names belonged to two, three or four unrelated streets, often at
the same time — Virginia, Lafayette, Jackson, Ida, Pine, Crescent among them; the
Oct. 1888 committee list alone has four Virginias, three Williams, three Grants,
and two Aurora Streets four Hancock blocks apart. A source that names the street
without a cross-street, a tract or an extent cannot be attached to an entity.
RENAMING-SOURCES.md, "Recurring names — each a trap", keeps the fuller list.

### A name attested nowhere is probably a misreading

**When a name is attested nowhere at all — not as a surname, a place or a word,
in any source — suspect the transcription before concluding the name is
obscure.** A real but rare name leaves some trace; a misread letter leaves none.
The rule was on its third instance by 2026-09-17; two are recorded: Labury was
Labory, and Gravitta on M.R. 7-36 was **GRAVILLA** (the street's dashed
centreline runs through the word, which made the doubled letter look plausible;
Kenny read the ink). Go back to the sheet at full resolution before searching
further.

## Libraries and licensed databases

Standing access facts, checked 2026-09-18. The day-of-trip sheet, with call
numbers and what to look up, is IN-PERSON.md.

**UCLA.**

- **Library Special Collections (LSC) is weekday-only — closed every Saturday**,
  in every week checked. Anything there is a weekday errand, permanently.
- **Items shelved at SRLF as "Non-Circ Request at UCLA YRL Special Collections"**
  (`JS…` call numbers) are off-site *and* non-circulating: they need an LSC
  request at least **two business days** ahead. Register the LSC account first
  (https://speccoll.library.ucla.edu/).
- **UCLA LSC does not lend through interlibrary loan at all**
  (https://ucla.libanswers.com/lsc/faq/380952).
- **The Law Library is effectively closed to the public.** Its policy admits the
  general public only to the Federal Depository collection, by advance
  reservation. Write first: govdocs@law.ucla.edu, (310) 825-3166; bring
  government photo ID. Its superseded-materials copies (`KFX…`) are a different,
  easier lending category than Special Collections.
- **Campus IP unlocks licensed databases** invisible from home: Gale's *Making of
  Modern Law* (the compiled ordinances, `u=uclosangeles`) and Ancestry Library
  Edition (city directories).
- **UCLA's georeferenced viewer** (`uclalibrary.oldmapsonline.org`) serves ~1000 px
  thumbnails and gates exports behind an upgraded account, not a campus
  address.
- **There is no LA City Council minute run at UCLA**, print or film. The nearest
  is *Chronological record of Los Angeles city officials, 1850–1938* (SRLF→LSC,
  `JS1001 .A4 1966`), a roster, not proceedings.
- Hours change by quarter: https://calendar.library.ucla.edu/hours.

**UC Irvine** (Kenny is on campus constantly; UC request machinery reaches UCLA
and SRLF).

- **Scanning Service** — free scans of book chapters, requested from UC Library
  Search, 2–3 business days: https://www.lib.uci.edu/scanning-service. For
  pre-1930 (public-domain) books say so in the request and ask for the chapter
  complete plus the index pages; the usual one-chapter / 10% cap is a copyright
  limit.
- **Interlibrary Loan** — free, ~5–10 working days, unlimited for SRLF-stored
  items: https://www.lib.uci.edu/interlibrary-loan · libill@uci.edu. Circulating
  UCLA/SRLF items can be requested for pickup at UCI.
- **For Special Collections items that cannot be lent**, the UC systemwide
  *Interlibrary Loan Needs Statement for UC Special Collections* says reproduction
  "will be funded by the ILL budget to provide a surrogate for loan" —
  https://libraries.universityofcalifornia.edu/rsc/interlibrary-loan-needs-statement-for-uc-special-collections/
  Cite it in the request. Untested whether UCI applies it routinely.
- **Databases UCI licenses:** ProQuest Historical Newspapers (*L.A. Times*,
  1881–); Fire Insurance Maps Online, described as including real-estate atlases
  and plat books; HeinOnline (no municipal ordinances — useful only for state
  session laws amending the LA charter). **Not** Ancestry. Whether UCI has Gale's
  *Making of Modern Law* is unchecked: https://libguides.law.uci.edu/az/databases
  · refdesk@law.uci.edu.

**Elsewhere.**

- **Orange County Public Library card** (ocpl.org) — free access to Ancestry
  Library Edition and HeritageQuest, the cheap way to the city directories.
- **Sherman Library, Corona del Mar** (~20 min from UCI, open daily 10:30–4) — a
  Southern California research library with particular strength in California
  city directories, including street-address directories. It runs a fee-based
  lookup service, so a query can be posted rather than driven:
  https://thesherman.org/library/
- **The LA as Subject directory** (https://laassubject.org/directory) is the
  index for "who holds this LA map" before committing to any drive. Chapman
  University is a member.

## What may be written down

- **Fact-focused, not narrative.** An entity states years, names and links.
  Extended prose is Kines's specialty, and we cite it instead of competing
  with it.
- **No methodology narration.** An entity says what a document shows and links
  it — not the process by which it was read. The one exception is an
  identification resting on map *alignment* rather than a label or lot match,
  which earns a short "(identified by map alignment)" in the source title.
- **Every year and name claim is justified by a linked source.** Uncertainty is
  stated, never papered over — but it is stated in the `basis` field now, not in
  the prose and not by leaving the answer out. See below.
- **`note` is public; `internalNote` is not** (MODEL-SPEC §3). Working notes,
  dead ends and "checked Kines on this date, nothing there" go in
  `internalNote`, where they save the next person the same search. ⚠ `note` is
  not the only public prose — **`namedAfter` is read far more often**, since the
  map prints it as the street's origin line. Both are writing for a reader.
- ⚠ **The " — " in `namedAfter` is a separator.** `tools/generate.js` keeps only the
  text before the first em-dash-with-spaces when a stretch did not originate
  under the name, so a hedge written after the dash will not reach those
  popups. Put the namesake first and the qualifier after; the `basis` badge is
  what carries the hedge where the tail is dropped.

## Grading what you found: `basis`, and the rule that goes with it

Every entity carries a **`basis`** (MODEL-SPEC §3.1) saying how strongly the
identification is grounded: `intrinsic`, `attested`, `eponymous`, `pattern`,
`inferred`, `lexical`, `guess`, `none`. It grades the **warrant, not the
plausibility** — a very likely guess is still a guess — and it grades **what you
came back with, not what you pursued**: a genealogical hunt that found nobody
scores `none`, and how hard you looked goes in `searched`.

**The grade is published.** It rides beside the namesake in the map popup and it
is a filter in the Highlight list. That changes what you should write down:

> **A name should have a `basis` other than `"none"` if and only if it has a
> `namedAfter` and at least one category** — barring rare, deliberate
> exceptions. Both checkers enforce the "only if" half as an error and warn on
> the rest.

The reason is not tidiness. Before the grade was visible, withholding a reading
from `namedAfter` looked like caution; now it just hides the reading from the
map, where `a guess` would have qualified it for the reader in three words.
Sixteen entities were filled in on that argument in September 2026 — Wall,
Regent, Broadway, Yale, Banning, Nevada and the rest — every one of which had
its reading sitting in the prose already. If you have a candidate, write it in
`namedAfter`, hedge it in words, and let the grade carry the rest.

The rare exception runs the other way: an entity whose namesake genuinely has no
candidate and no kind (`arnold`, `bixel`) is `basis: "none"` with `namedAfter:
null` and **no categories at all**. Tagging `place` on a street whose namesake is
unknown would assert more than the file knows. Silence is the honest entry.

`parker-drive` is the shape of a deliberate exception in the other direction:
`basis: "eponymous"` and `categories: ["landowner"]`, because the plat is titled
"J. B. Parker Subdivision" — the ROLE is attested even though the man is
untraced. An `eponymous` entity must say `landowner` or `family`; that is what
the plat attests, and tools/check-model.js errors if neither is there.

## Whose sentences are these: approved text

`note` and `namedAfter` reach readers, and most of their prose now starts life
as an agent's draft. `namedAfterApproved` / `noteApproved`, with their `…On`
dates, record **the last version a person wrote** (MODEL-SPEC §3.2). They start
absent, which means "never approved" — true of nearly everything.

In `utilities/names-tool.html` each of the two fields carries a panel underneath: the
approved text, an **Approve this text** button, and a word-level diff as soon as
the live text drifts from it. Approving is a person's act and takes one click;
the date comes along automatically.

**If you are an agent: write `note` and `namedAfter` freely, and never write the
approved fields.** They are the only record of which published sentences are
Kenny's, and an agent that fills them in has destroyed that record while
appearing to be helpful. Absent is the honest value. The same rule is at the top
of `data/names.js`.

A practical habit that follows: when you draft public prose, say so in
`internalNote` — who drafted it, on what date, and on what argument. The
approved fields tell a reader *that* a sentence is unreviewed; the internal note
tells them what to check when they review it.

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
  in another: run `node tools/check-model.js`, and spot-check the boldest claim of
  the batch against its source.
