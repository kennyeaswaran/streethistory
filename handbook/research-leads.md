# Research leads

> **Path note.** This is a dated log, so old entries name things that have
> since moved or gone: `align.html` (now `attic/align.html`), `georef.py` and
> `overlay-trial/` (retired 2026-09), `tracts/` (now `inbox/` and
> `documents/<id>/`), and the loose `omnibus-*.md` files (now inside
> `documents/ord-4093/`). Left as written rather than rewritten.
>
> **Where a finding lands.** This file predates the document model, so it talks
> about `streets-data.js`. A finding now goes to one of two places: *where* a
> name applied becomes rows on a document in `documents/`, read in with the map
> tool; *who or what* it was named after becomes an entity in `names.js`
> (NAME-RESEARCH.md). `names-new.js` is the queue of names waiting on the
> second.


Unverified hunches, patterns, and open questions — things NOT yet solid enough
for streets-data.js. Rule of thumb: a claim with a citable source goes straight
into the data (partial entries are fine); anything inferred, remembered, or
pattern-based waits here until verified.

Workflow: when doing a street's full pass, check here first and consume its
leads (verify → into the entry; debunk → delete, noting why if instructive).
Periodically sweep the whole file. Keep entries dated.

## The 1897 ordinance — status as of 2026-08

- **✔ IDENTIFIED: Ordinance No. 4093 (New Series), Ordinance Book IV p. 337**
  (adopted Feb. 23, 1897; the vetoed Feb. 2 version is at p. 331). From City
  Council minutes, Record Series R05.557, transcribed in
  `omnibus-1897-renaming-council-minutes.md` (ChatGPT transcription of the
  City Clerk's scans, obtained by Kenny 2026-08; not yet spot-checked against
  the images — the first application of any line from it owes that check). The
  ⭐ target is no longer "find the ordinance" but "get two known ledger
  pages": **request with the City Archivist is in flight (Kenny, 2026-08).**
- **The two Herald items — NEGATIVE (2026-09-04):** Kenny read
  `LAH18970219.2.24` ("A Storm of Words") and `LAH18970221.2.28` ("Talking
  Retrenchment"); neither helps the renaming data. They stay cited in names.js
  for what they do carry — the Feb. 19 piece is the source for `georgia-bell`'s
  prose-dated spelling period. Full note in
  `documents/ord-4093/omnibus-1897-renaming-full.md`. Don't re-run this;
  CDNC now costs a person's time.
- **Directory route — NEGATIVE (2026-08):** the 1898 city directory carries no
  list of changes; the 1897 directory says it already incorporates the 326
  council changes but doesn't print them as a table. Don't re-run this.
  Recorded in SERIAL-SOURCES.md too.
- **Still open, unchanged:** the Dec. 27, 1897 supplementary renaming
  ordinance (city engineer's cleanup batch, list never printed) — same
  archives trail, and presumably findable the same way now, by ordinance
  number in the same books.
- **What the minutes changed in what was already banked** (full table in the
  new file): a dozen Herald OCR corrections, the Escalon/Zaragoza conflict
  settled, the "Lacy vs. Canada → Avenue 33" conflict resolved as a genuine
  duplicate, and the Feb. 23 floor amendments recorded for the first time
  (De La Guerra→Boylston, Nevada→Georgia, Manitou St→Ave, Broadway St→Canal
  St, Stanley→Tropico, Dana→Stanley, Wood Ave→Griffin Ave).
- **⚠ Downgrade — 3rd Street, east of Mission Rd:** the "Mono street … had
  been changed to Third … restored" HOT LEAD below rests on the Feb. 19
  Herald. The manuscript's corresponding line reads **Moore**, not Mono, so
  the lead is probably an OCR artifact. Don't build a segment story on it
  until a Mono Street is independently located.
- **Apply pass owed:** the in-coverage lines (Figueroa/Boylston, Georgia,
  Central, 4th, 5th, Marion, Stanford/Ruth) are already in the data from the
  Herald; what the manuscript adds is that each can now name the instrument —
  Ordinance No. 4093 (N.S.) — and cite a manuscript record. Not yet applied
  as of 2026-08.

## ✔ SOLVED — Fort Street → Broadway, by Feb. 20, 1890 (2026-09-04)

`documents/lah-1890-02-20/` — the Herald, under the headline "BROADWAY. Fort
Street Is No Longer in Existence": *"The ordinance changing its name to
Broadway has gone into effect, having been signed by Mayor Hazard and published
as required by law."* Unqualified, and the enactment is reported rather than
asked for.

**The ordinance itself is missing and may not survive.** The council minutes
for the relevant dates are not in the City Clerk's holdings — the first gap
this project has hit in that series, and the reason a newspaper is the only
record of this change. handbook/RENAMING-SOURCES.md §2a records the gap and
what to do about it. The Mar. 10, 1890 volume was also checked page by page
(not there either), but its clerk writes "Fort street (now Broadway)" in
passing, which corroborates the bracket.

Dated `{ before: "1890-02-20" }`: the ordinance was already in force when the
paper described it, so Feb. 20 is a ceiling, not the day.

## ✘ Broadway south of Tenth — the 1890 prediction did NOT happen (2026-09-04)

The Herald item that reports the Fort Street renaming
(`documents/lah-1890-02-20/`) goes on to predict a second one:

> "It is hinted that in a short time a part of Main street, from Tenth street
> south, will be called Broadway … as soon as Broadway is extended. An
> examination of the city map will show that Main street makes a bend at
> Seventh street, and that when Broadway is cut through that portion south of
> Tenth street will be nearly in a straight line with Broadway."

**It did not happen** (Kenny, from the modern map), and the geometry says why.
Measured off `streets-geometry.js`, as dLon per dLat — how hard a street angles
west as it runs south:

```
Main Street   7th → Olympic      1.53      the "bend at Seventh"
Broadway      1st → 9th          0.93
Broadway      9th → Olympic      0.96
Broadway      Olympic → Pico     0.99
```

**The paper's reasoning was sound.** Project Main's post-7th-Street bearing
south and it arrives within **59 m** of where Broadway actually runs at Pico —
"nearly in a straight line", exactly as claimed.

**What defeated it is that neither street did what the projection assumed.**
Main does not hold that bearing south of Olympic; it straightens, and ends up
95 m *east* of Broadway at Pico. Broadway, meanwhile, was cut through on an
alignment of its own, turning gradually west (0.93 → 0.96 → 0.99) rather than
meeting Main's line. Two streets, both still there, ~95 m apart.

So: no renaming to look for, and the entry that used to sit here asking for one
is withdrawn. What remains true and worth keeping is the *reason* Broadway runs
where it does south of downtown — it was cut through, not inherited from Main —
and that the 1890 press expected otherwise.

⚠ Do not read this as "Main Street south of Tenth was never renamed". It says
only that it was not renamed **Broadway**, which is what the article predicted.

## ✔ SOLVED — the Fort Street petitioner, Feb. 3, 1890 (2026-09-04)

`documents/min-1890-02-03/` — council minutes, ledger p. 240: "126. From Fred
L. Alles et al, asking that the name of Fort street be changed to Broadway.
Referred to the Board of Public Works."

Sources a claim `names.js` had carried on nothing. Two corrections it brings:
the clerk writes **Fred L. Alles**, not Fred Lind Alles, and says nothing about
his being a printer. It also brackets the renaming to **seventeen days** —
petition Feb. 3, in force by Feb. 20 — and the minutes for that window are the
ones that are missing.

Note the referral went to the **Board of Public Works**, where the 1874
petition went to a special committee with the City Attorney. Two routes to the
same kind of act, sixteen years apart.

## ✔ SOLVED — Virgin → Alpine, Aug. 22, 1887 (2026-09-04)

`documents/ord-1887-08-22/`, found in the council minutes on the first look —
the method in handbook/RENAMING-SOURCES.md, run from a month in a `note`
sentence. Three things worth carrying forward:

- **The ordinance number is blank.** The clerk wrote "Ordinance No." and left
  it empty, as in Feb. 1874. A renaming before the 1890s may have no number at
  all, so the ledger page is the citation and "find the ordinance number" is
  the wrong instinct for this period.
- **The same session gave the street an EXTENT.** A grading resolution on the
  facing page describes "said Virgin street, from its intersection with Yale
  street to the intersection with Beaudry street" — the only statement of where
  Virgin ran outside the 1849 survey, and it resolves cleanly (modern Alpine
  meets both Yale Street and Beaudry Avenue). **Look at the whole session, not
  just the renaming item**: grading, sewer and lighting resolutions describe
  streets by their intersections, which is exactly the extent evidence the
  model is short of.
- **It corroborates 1874.** A street called Yale exists here in 1887, thirteen
  years after Wasp Street was renamed to it.

## ✔ SOLVED — Castelar and Yale, enacted Feb. 26, 1874 (2026-09-04)

The instrument is found: **"An Ordinance Changing the names of Certain Streets
in the City of Los Angeles"**, adopted by the Common Council Feb. 26, 1874,
council minutes ledger p. 621. Transcribed at `documents/ord-1874-02-26/`.

One ordinance renamed all three streets — Grasshopper → Pearl, Bull → Castelar,
Wasp → Yale — and states no extent for any of them, so all three are
unqualified changes. Two things worth keeping from the hunt:

- **The Herald under-reported it.** Its Feb. 27 account says "An ordinance
  changing Grasshopper street to Pearl street was carried" — one street of
  three, the morning after. A newspaper report is a lead about what an
  instrument did, never a census of it.
- **The petition asked for something else.** Feb. 13 asked that Grasshopper
  become Union Avenue; the ordinance says Pearl. Stage 1 and stage 3 disagree
  in the record (handbook/RENAMING-SOURCES.md).

⚠ **`names.js` still says "by petition".** `bull`'s note reads "Renamed
Castelar Street by petition in February 1874" and `hornet`'s the same for Yale.
The outcome was right; the mechanism was not — a petition asked, an ordinance
did it, and the ordinance is now citable. Both notes are PUBLIC prose and are
Kenny's to reword.

## Bunker Hill Avenue, 1874 — an unplaced name (2026-09-04)

The same Herald column that reports the Grasshopper → Pearl renaming
(`documents/lah-1874-02-27/`, CDNC `LAH18740227.2.10`) carries three other
council items, read off the scan by Kenny:

- "the grade of **Fort street** from Temple street to Second street"
- "the grade of **Temple** from Fort to **Bunker Hill Avenue**"
- "defining the lines of **Bunker Hill Avenue** and declaring it a public avenue"

Fort Street is modern Broadway (renamed Feb. 1890), so the second item puts
Bunker Hill Avenue somewhere west of Broadway along Temple — which in modern
terms is Hill, Olive, Grand or Hope. **That is as far as the text goes.**
Hill Street is the tempting reading and is not the only one, and settling it by
which name sounds right is the failure mode rule 2 exists to stop.

Deliberately NOT entered as an attestation from that document: the document is
`sweptFully` for the one renaming it reports, and a row here would claim a name
on ground the text does not identify. What would settle it: a pre-1890 map or
survey of the Temple/Fort block naming the avenue, or the 1874 council minutes
themselves (Record Series R05.557 — the same series that produced the 1897
transcription), which would give the "defining the lines" item its metes and
bounds.

Also worth noting for whoever picks this up: "declaring it a public avenue" in
1874 dates the pavement, so whichever modern street it is gains an existence
claim as well as a name one.

## The "ordinance changing" search, continued — 21 clippings, 1883–1889 (2026-09-06)

Kenny ran the CDNC phrase search across more years and came back with twenty-one
clippings. None is a document yet and none of the stages is verified against the
minutes; the worklist for that is **handbook/MINUTES-TO-CHECK.md**, which is the
deliverable from this batch. What the reading found:

### ★★★ Ordinance No. 48 (New Series) — the 1889 omnibus, in full

Six columns of the Herald of May 10, 1889. **212 changes**, every one qualified
by an extent, adopted **Apr. 22, 1889**, approved by Mayor Hazard **May 8**, in
force on publication **May 10**. Its title states the purpose: streets "WHICH,
WHILE FORMING ONE PRACTICALLY CONTINUOUS STREET, HAVE DIFFERENT NAMES."

This is the 1889 predecessor of Ord. 4093 and the largest untranscribed thing
the project has — and unlike 4093 its text is not missing. Transcribing it is a
session of its own.

**And it resolves the Georgia conflict from the last batch.** May 10, 1889 is
exactly Gen. Forman's date, and it is now an instrument rather than a
recollection, so the 1889 structure in `georgia-bell` stands. The 1883 report
using the same new name six years earlier is the thing now needing explanation.

### ★★ The chain behind it, meeting by meeting

Oct. 1888: a special committee, "for the past six or eight months … at work"
publishes a ~300-item summary list (Herald, Oct. 11) — "ORDER BROUGHT FROM
CHAOS". Feb. 5, 1889: an ordinance is adopted. Feb. 18: **Mayor Bryson vetoes
it** on the spot, asking that property owners be heard. Feb. 25: the vote is
**reconsidered** and it goes back to the Street-Naming Committee, with hearings
advertised. Apr. 22: re-adopted, 212 changes, Clerk told to have it re-written
before it goes to the mayor. May 8: approved. May 10: published.

That is the first time this project has seen the whole legislative arc of a
renaming, veto included — and it is a warning: **an adopted ordinance is not
necessarily law.** The Feb. 1889 version was adopted and never took effect.

### Entities this batch touches directly

- **`william`** — ✔ SOLVED. **Ordinance No. 207**, adopted Jan. 6, 1886,
  approved Jan. 14: "William street, situated in the Childs Tract … changed to
  Santee street." Six months after the Childs sheet drew it. The same ordinance
  renames a SECOND William Street, in the L.A. Improvement Company's
  subdivision, to Goss — so this was a duplicate-name fix, and it also dates
  `santee-street`'s arrival on this ground precisely, where Kines had only 1886.
- **`guadalupe`** — ✔ END DATE. **Ordinance No. 242**, adopted July 19, 1886:
  "extending from Alameda street to Geary street and known as Guadalupe street …
  changed to **Davies street**."
- **`castelar`** — the same ordinance: "extending from Temple street to Bellevue
  avenue and known as Cemetery avenue … changed to Castelar street." The name
  spreading north twelve years after the 1874 ordinance coined it on Bull Street.
- **`sixteenth-street`** and **`fifteenth-street`** — the Nov. 1889 numbering
  ordinance has "from **Pine** and Rowland to Sixteenth street" and "from
  **Laurel** and Adele to Fifteenth street". The Miguel Subdivision's
  parenthetical predecessors, four years early. Check whether its "Laura" is
  a misreading of Laurel.
- **`diamond-street`** — ⚠ **Ordinance No. 364**, adopted Sept. 16, 1889:
  "that portion of Diamond street from Canal street to Lakeshore avenue, and
  that portion of Second street from Lakeshore avenue to the west city line …
  changed to **First street**." That is a third stretch, becoming a third modern
  street, and it bears on the identity decision of 2026-08-30. Do not act on it
  without the geometry.
- **`earl-st`** — the Oct. 1888 committee list: "Earl St. and San Julian Ave.,
  changed to San Julian St." The absorption this project logged as undated.
- **`botiller-street`** — same list: "Botiller St. and Santee St., changed to
  **Martin St.**" — which did NOT happen. A draft-list line that was dropped,
  and a clean example of why a committee list is not an instrument (amendment
  §10, form 5).
- **`regent-street`** — same list: "Maple Ave. and Los Angeles St.: from
  Washington St. south, changed to Regent St." The 1876 name being revived
  twelve years later, somewhere else.
- **`morgan-lane`** — same list: "Morgan Lane and Mayo St., changed to Mayo St.",
  confirming that both names were live at once in 1888.
- **`aztec-avenue`** — same list: "Aztec Ave. changed to **Girard St.**", where
  Kines has Aztec becoming Belmont. Another draft-vs-outcome case; and the
  Herald of Jan. 4, 1887 has "Texas street to Belmont avenue" adopted, which is
  a third candidate for where Belmont came from.

### Other names worth knowing existed

High → Walters (Sept. 1886, and WANTED P3 had it undated); Texas → Belmont
(Jan. 1887); Deep Water → Bartlett, Beaudry to Philadelphia (June 1887); Ozier
Lane → Winston, POSTPONED (June 1887); Le Convieur → Ashland (Jan. 1888);
Friend → Montague, Ord. 285 (July 1889); Downey Ave west of the river →
Olympia, carried 8–1 over the objection that it was "too classic for the Eighth
ward" (Dec. 1889).

### What this does to the method

Step 2b said the published ordinances are searchable. This batch shows the
search finds **the whole arc** — committee reports, adoptions, vetoes,
reconsiderations and the published texts — and that reading only the adoption
would have been wrong twice (Feb. 1889 vetoed; the 1888 committee list amended
before passage). Two rules follow, and they are now in MINUTES-TO-CHECK.md:
never build a row from a §3 report alone, and never treat a committee list as
an instrument.
## Every clipping is now a document — 88 of them (2026-09-06)

The inbox is empty of clippings; all 88 are documents under `documents/`, each
with its transcription and its image beside it, and the consumed files are in
`_to_delete/inbox-consumed-2026-09-06/`. The corpus went from 61 documents to
146 in one pass, 83 of them newspaper text from 1883 to 1897. **No rows were
added** — that is deliberate, and the reason is in the first bullet.

- **★ ADOPTION IS NOT LAW, and this pass proved it six times.** The Ashland
  ordinance was defeated 8–5 (Jan. 1888); the duplicate-names ordinance was
  vetoed by Mayor Bryson (Feb. 1889); the twenty-one-change ordinance was vetoed
  by Mayor Hazard (Nov. 1890); Adobe → Harvard was vetoed because there was
  already a Harvard Avenue (Dec. 1892); Loomis → Sixth was withdrawn at the
  council's own request (Mar. 1893); and the Feb. 2, 1897 version of what became
  Ordinance No. 4093 was returned. A change row built from a "§3 Adopted" report
  would be wrong roughly one time in six.

- **★★ THE ORIGIN OF THE NUMBERING SYSTEM, in its advocate's own words.**
  `documents/lah-1896-05-16`: Gen. M. T. Allen before the Board of Public Works,
  May 1896 — "The change of names in the southerly portion of the city to
  numbered streets is expected to prove of great benefit, and it is thought that
  a change in the northerly portion to numbered avenues will be a convenience …
  The only objection which can be urged to this change is the fact that the
  streets south of First street are numbered with the same numbers, but it is
  believed that the designation of those north of First street as avenues will
  be sufficient to prevent confusion." Streets south of First, avenues north of
  it, stated as a decision with its objection anticipated. The same document
  proposes Buena Vista Street and Pasadena Avenue as PASADENA BOULEVARD —
  thirteen years before Buena Vista became North Broadway (WANTED.md P2).

- **★★ FORT → BROADWAY HAS ITS ACT** (`documents/lah-1890-02-18`), and a second
  street nobody knew about: "An ordinance changing the name of BROADWAY STREET
  TO TOBERMAN STREET and changing the name of Fort street to Broadway was read
  and adopted." There was already a Broadway, and it had to be moved first. The
  minutes for those dates are still missing; the newspaper carried the act all
  along.

- **Entities this pass touches, with dates:** `william` → Santee by Ordinance
  No. 207, adopted Jan. 6, 1886 (and a *second* William Street → Goss in the
  same instrument — it was a duplicate fix). `guadalupe` → Davies by Ordinance
  No. 242, July 19, 1886, then Davies → Second in Oct. 1890. `castelar` takes
  Cemetery Avenue in 1886 and begins losing ground to Hill Street in July 1894 —
  sixty-six years before the date Kines gives. `regent-street` → Maple Avenue by
  Ordinance No. 482, Dec. 9, 1889. `myrtle` → Wall Street by Ordinance No. 1915,
  Nov. 13, 1893. `waters-street` → Douglas and Walters → Ord in the vetoed Oct.
  1890 list, for the stated reason that "Water, Waters and Walters streets …
  were so much alike as to be confusing". `botiller-street` → Santee moved twice
  in Jan. 1892. `willow` loses its Eighth-to-Ninth block to Golden Avenue in
  1894. `arnold` has a portion renamed in 1896. `alpine` was proposed as Eighth
  Avenue in 1896 and survived.

- **★ THE "MATEO, OR SHAFER, STREET" PUZZLE IS SOLVED.** `documents/lah-1896-08-11`:
  three weeks before Ordinance No. 3829 made that stretch Molino, another
  ordinance had made it SHAFER. The drafter hedged because the street had two
  current names. Mateo → Shafer (Aug. 10) → Molino (Aug. 31) — a name that
  lasted twenty-one days.

- **★ BUNKER HILL AVENUE IS PLACEABLE AGAIN.** In May 1896 a portion of it and
  Sand Street became CALIFORNIA STREET (`documents/lah-1896-05-05`). The 1874
  items in this file could only put it somewhere west of Fort Street along
  Temple; California Street is findable.

- **Three names in four months, on one stretch:** South Street → Western Avenue
  (Aug. 1896) → Union Avenue (Dec. 1896, passed twice, the second time as
  "Western avenue (formerly South street)"). And the city attorney explaining in
  May 1896 why it was all so confused: until then the office DRAFTING renaming
  ordinances was not the office holding the maps.

- **Shapes the model still has no room for**, all newly evidenced: a restoration
  (Aliso → Pleasant, 1890, and Second → Lakeshore inside Ordinance No. 482); a
  standing rule about unnamed future ground (the 1895 Hoover Street ordinance);
  a name reserved "for any future extension of this street eastward" (Ordinance
  No. 48); an ordinance that failed; and a name abolished in 1893 still being
  used as a landmark in 1894 and 1896 (Wyoming, Cooper).

**What is not done.** Ordinance No. 48's 212 changes and the Oct. 1888
committee's ~300 proposals are transcribed only in the lines that touch entities
this project holds; both want a session of their own. Six clippings from Feb.
1897 arrived after this pass closed and are still in the inbox — they cover
exactly the gap between the Feb. 2 adoption and Ordinance No. 4093 of Feb. 23.

## The 1883 clippings — Step 2b works, and it reaches back a decade (2026-09-06)

Kenny searched CDNC for the phrase **"ordinance changing"** — the method written
up as RENAMING-SOURCES.md Step 2b a few hours earlier — and came back with seven
clippings from 1883, all Herald p. 3, all council reports. Six documents:
`lah-1883-05-13`, `-06-17`, `-08-19`, `-08-26`, `-09-02`, `-10-21`. They are the
corpus's first 1880s textual documents and they change three things.

- **★★ GEORGIA → GEORGIA BELL WAS ADOPTED IN SEPTEMBER 1883, not 1889 — or so
  one contemporary report says.** The Herald of Sept. 2: *"Ordinance changing
  the names of certain streets: Turner street to Sonora street; Pine to Cherry
  street; **Georgia to Georgia Bell street**; Elm to Bush street; Rose street,
  East Los Angeles, to Kuhrts street. Adopted."*

  ⚠ **Nothing in names.js has been changed.** The 1889 date there is sourced —
  Gen. Forman's dated history in the Herald of Feb. 19, 1897, "renamed Georgia
  Bell May 10, 1889" — and a contemporary report normally beats a recollection
  but not automatically when the two may be about different events. names.js
  itself describes the 1889 act as FOLDING IN the stretches platted Nevada in
  1886. If the name was coined in 1883 and the Nevada stretches were folded into
  it in 1889, both dates are right about different things and Forman is
  recalling the later one. That is tidy, which is a reason to distrust it. The
  conflict is recorded on `georgia-bell` and `georgia-east`; the ordinance book
  for Sept. 1883, or the minutes for Sept. 1, 1883 and May 10, 1889, settles it.

- **And the name nearly wasn't Georgia Bell at all.** Two weeks earlier the
  Board of Public Works recommended "Georgia street, **in same addition**, to
  **Alabama** street" — the addition being Bell's, named two lines above. So the
  choice was between moving the street into a southern-states run and appending
  the addition's name to the one it had. The second won. That is the third time
  this corpus has caught a name changing between the order and the act (Union
  Avenue → Pearl, 1874; Alabama → Georgia Bell, 1883), and it is why an
  instruction to draft can never be read as a renaming.

  ⚠ Not established: that the Georgia Street in "Bell's addition" is the
  west-downtown Georgia. Obvious, but matching a tract to an entity by the
  owner's surname is a rule-2 step and the addition is not located here.

- **★ MORGAN LANE HAS A SEQUEL, fourteen months after the sheet that minted it.**
  Oct. 21, 1883: the Council agrees to accept Morgan Lane as a public street,
  widen it to sixty feet and rename it **Mayo Street**. So the corridor reads
  Morgan Lane (1882) → Mayo Street (ordered 1883) → … → 3rd Street, with the
  middle step ordered rather than confirmed. No `mayo` entity minted for that
  reason. Acceptance-and-renaming in one motion is itself a shape worth having.

- **Turner Street was cut in half in one year.** East end (First to Alameda) →
  Jackson Street, ordinance passed May 12, 1883. West end (west of Main) →
  Sonora Street, recommended Aug. 18 and in the Sept. 1 ordinance. One street,
  two successors, four months apart. No row: modern Jackson Street is a Little
  Tokyo fragment that reaches neither First (289 m) nor Alameda (338 m), so the
  1883 stretch is longer than what survives and neither end resolves.

- **Two adoptions of overlapping lists.** Aug. 26 reports an ordinance renaming
  *Turner, Pacific, Elm, Pine, Georgia and Rose* adopted, with no new names.
  Sept. 2 reports *Turner, Pine, Georgia, Elm, Rose* with new names — Pacific
  gone, Georgia's new name different from the recommendation. Something was
  re-passed or amended between the two Saturdays and newspaper reports cannot
  say which.

- **Smaller things worth having**: Polyxena Street → Clay Street ordered drafted
  (June 1883) — a clean stage-2 document, which this corpus had barely any of;
  Chavez Street → Main Street referred to the Board (Aug. 1883), Main absorbing
  a named street to the north; a THIRD Pine Street (Bell's addition → Cherry),
  after 16th Street's predecessor and the 1896 southwest one; and "In matter of
  Figueroa street ask one week's further time" — the Board had something about
  Figueroa before it in Aug. 1883, fourteen years before Ord. 4093 moved that
  name onto Pearl's ground. Worth a look in the following weeks.

**Method note.** Every one of these is a council-proceedings item in the news
columns, not a published ordinance in the legal notices — so the phrase search
finds the *reporting* as well as the instruments, which is more than Step 2b
predicted. It also reaches a decade earlier than any minutes volume this project
has looked at. Cheapest next search: the same phrase for 1884-1895, and
"changing the name of" for the same span.

## September 1896 — the renaming campaign has a stated motive (2026-09-06)

Three more meetings from Kenny, three more documents: `min-1896-09-08`,
`min-1896-09-14`, `min-1896-09-21`. Together with Aug. 31 they turn what looked
like a run of separate ordinances into one campaign with a purpose.

- **★ THE MOTIVE, in the petitioners' own words.** Sept. 14, petition No. 816
  from Geo. Harlan et al asks that the names of certain streets in the South
  Side Tract "be changed **so as to make them compare with the names of the
  streets on the north side of Pico Street**." That is the argument behind the
  whole of 1896–97: a street running on both sides of a line should carry one
  name, and where the north side had numbers the south side should get the same
  numbers. It came from property owners, not from the City Engineer.

  It changes how Ordinance No. 4093 should be read. The Feb. 1897 omnibus has
  always looked like a single administrative act by the city; it is the END of
  a campaign that residents were pushing for, and the Sept. 3 Herald piece
  already said another ordinance was in preparation.

- **A second renaming ordinance, eight days after the first.** Sept. 8:
  **Ordinance No. 3847 (New Series)**, nine changes "in the southwest portion of
  the city", recorded **Ordinance Book 11 page 496** — thirty-six pages after
  Ord. 3829 in the same book. Freeman → Twentieth, Olivia → Twenty-first,
  Bryant *and* Cypress → Twenty-second, Maxwell → Twenty-third, Forrester *and*
  Pine → Twenty-fourth, Clinton *and* Kenwood → Twenty-fifth. Nine names, six
  numbers, three of the numbers taking two streets each — which is petition 816
  being carried out: two parallel streets either side of a line getting one
  number so it runs through.

- **✘ RETRACTED WITHIN THE HOUR — and the retraction is worth more than the
  claim.** On the minutes alone Ord. 3847 looked UNQUALIFIED — "Vine Street to
  Twenty-fourth Street", bare — eight days after an ordinance that gave every
  change an extent, which read as proof that the qualified/unqualified split is
  a per-instrument choice. Then Kenny produced the Herald of Sept. 9
  (documents/lah-1896-09-09), which prints the same ordinance with a stretch on
  every one of the nine changes: *"Freeman street, from Hoover street to Budlong
  avenue, change to Twentieth street."*

  **The ordinance was qualified; the minute book abridged it.** That is the
  first case in this corpus where a minutes copy of an instrument is
  demonstrably not the instrument's words in full, and it puts a caution on
  documents/ord-1874-02-26, which is also a minutes copy and also reads as
  complete. It may be complete. It can no longer be assumed to be.

- **⚠ AND THE SEVENTH NAME IS VINE, NOT PINE.** The manuscript is faint; the
  printed ordinance settles it. Two consequences. The Pine-vs-Pine warning below
  evaporates — but a worse trap replaces it: **this Vine Street is not the Vine
  Street on the WANTED list.** That one runs First to Second by Central Avenue
  and becomes Central Avenue in Feb. 1897 (documents/ord-4093); this one runs
  Vermont to Rosedale in the southwest and becomes Twenty-fourth Street five
  months earlier. Two lineages, one spelling, five months apart.

- **The extents show the design.** Vermont Avenue is the seam: each number is
  one street east of it plus, where there is one, a second street west of it —
  Bryant (Hoover–Vermont) + Cypress (Vermont–Rosedale) both become Twenty-second;
  Forrester + Vine both become Twenty-fourth; Clinton + Kenwood both become
  Twenty-fifth. Read with petition No. 816 six days later, this is that petition
  being carried out: give the two halves one number so it runs through.

- **A name moving sideways.** Sept. 21, petition No. 829: "the name of Stearns
  Avenue be changed to Albion Street, and Albion Street from Stearns Avenue to
  east Main Street be changed to West Albion Street." One street takes its
  neighbour's name and the neighbour keeps a modified form of it — a shape the
  amendment's §10 list does not have, and one whose two halves have to be
  applied in the right order or they collide. Referred to the Board of Public
  Works, which is the route the Fort Street petition took to an ordinance in
  seventeen days. The Sept. 23, 24 and 25 volumes are already in the inbox.

- **Names worth having, dated in passing**: Requena Street and Wilmington
  Street alive in Sept. 1896 (Fire District No. 4's boundary); Kysor, Perry and
  Park Avenue bounding a proposed park on Central Avenue, with Kysor Street
  named for the man making the offer — the tract-owner pattern happening in
  real time; Mott Street still a street name in 1894, a generation after the
  Mott Tract; and H. Gaylord Wilshire petitioning about Sixth Street west of
  Carondelet, thirteen years before the boulevard.

**No rows on any of the three.** The Sept. 8 ordinance is unambiguous but not
one of its fifteen names — nine old, six new — is in the OSM extract, so rows
would need fifteen entities minted blind with no sighting behind any of them
and would draw nothing; the nine changes are quoted verbatim instead and are a
transcription away once the southwest is encoded. The other two documents are
petitions, and a petition is a request (the Feb. 1874 one asked for Union
Avenue and got Pearl).

**Four documents for this ordinance, not one.** The adoption is in
`min-1896-09-08`, the text with extents in `lah-1896-09-09`, the campaign's
motive in `min-1896-09-14`, and the Aug. 31 ordinance that started it in
`min-1896-08-31` / `lah-1896-09-03`. That is a decent test corpus on its own for
whatever the textual-document tool turns out to be.

## Ordinance No. 3829, Aug. 31, 1896 — fourteen renamings, and the first qualified ones (2026-09-06)

Kenny found a Herald clipping and the minutes page behind it. Both are now
documents: `documents/min-1896-08-31/` (the adoption, the number, and the
citation **Ordinance Book 11 page 460**) and `documents/lah-1896-09-03/` (the
list of what it changed). What they add:

- **The first EXTENT-QUALIFIED renamings in the corpus.** Every one of the
  fourteen names a stretch — "Tulip street, *from Willow to Seventh*, be
  changed to Santa Fe avenue". Until now every instrument here has been
  unqualified (1874, 1887, 1893, 1897 all rename the street-as-named and state
  no extent). This is the document `scope: "extent"` was designed for, and the
  first row of that kind is entered.

- **★ It corrects a public claim.** The `tulip` note said the street "lasted a
  matter of months" and took the railway's name in May 1887. Wrong by nine
  years: May 1887 is when SANTA FE AVENUE itself was named, at the depot by 1st
  Street (Kines), and Tulip Street survived until this ordinance extended that
  name south over it. Corrected, with the correction and its cause recorded in
  the entity's internalNote. Worth remembering as a failure mode: a tidy
  inference ("the railway arrived, so the street was renamed") had quietly
  become a claim in public prose.

- **It closes the Molino lead** — see the ✔ entry above.

- **Thirteen changes are parked, and all are quoted.** Nine are on ground
  outside the OSM extract (the 35th–38th Street block, Jefferson/Vermont in
  what the paper still calls West Los Angeles, McConnell/Griffin in Lincoln
  Heights). Four are on ground we have but name a cross street we do not —
  "Short", "Orange", "Mesquite". Each is an excerpt, so the row is a
  transcription away once the ground is encoded.

- **Two streets with two names at once**, which the model has no way to express
  and the ordinance settles by fiat: "Mateo, or Shafer, street" and "Olin, or
  Jefferson, street". Worth watching for — it is the same shape as
  Bellevue "avenue or street)".

- **The last line is a forward pointer**: *"Another ordinance is in course of
  preparation making numerous changes, which will come up in a few days."*
  That is the run-up to Ordinance No. 4093 of Feb. 1897. The 1896–97 renaming
  came in waves, and the Feb. 1897 omnibus was not the first of them — which
  means the 1897 material should be read as the END of a campaign, not the
  whole of it.

- **Method, confirmed again.** This is the second instrument found through the
  newspaper rather than the minutes, after Ord. 1613 the same day
  (RENAMING-SOURCES.md Step 2b). Here the minutes DO exist and are what supply
  the number and the book-and-page; the paper supplies the contents. Between
  them they do everything but quote the ordinance's own words.

**One row entered, and it is a proposal.** `tulip → santa-fe-ave`, extent, Santa
Fe Avenue from Willow Street to 7th Street (both crosses resolve at 0 m), marked
`confirmed: false` and so held back from the map until a human confirms it.

## Map-pass names, 2026-09-06 (second batch)

- **✔ Whisler Street → Mrs. Lourena Whisler.** The Whisler Subdivision sheet
  (documents/mr012-064) is "subdivided at request of Mrs. Lourena Whisler,
  Nov. 25th 1886" and was recorded three weeks later at her request. Owner's
  name on her own ground — the third such identification after Clark Avenue and
  Morgan Lane, and the first where the owner is a woman. Moved into names.js.
  Kines has no page. Its surveyor, John Goldsworthy, County Surveyor-elect,
  turns up twice more in this corner of the corpus.

- **⚠ TRANSCRIPTION FIX WANTED: mr006-039 reads "Earl St.", not "Euclid St."**
  The Rowan Tract row's `asWritten` says "Euclid St."; the sheet, read at 400
  dpi, letters **Earl** above the block and **St.** below it, in the same hand
  and the same corridor as the Goldsworthy, Beck and Moran sheets. The row's
  entity (`earl-st`) is right and the label is not. Left for Kenny to fix in
  the tool rather than edited behind him.

- **The San Julian corridor is a patchwork.** With this batch, four sheets
  letter **Earl** along it (Rowan 1884, Goldsworthy 8th St. 1886, Beck 1886,
  Moran 1887), one letters **Whisler** (1886), and the Moran sheet letters
  **San Julian** south of Ninth on the same page as Earl north of it. So the
  corridor carried at least three names at once in the mid-1880s and San Julian
  later took all of it. When, and by what instrument, is not known — and it now
  belongs on the list of undated absorptions with the other nine.

## Council minutes, Monday Apr. 10, 1893 — read in full (2026-09-06)

Kenny pulled one meeting (ledger pp. 527-560, 34 scanned pages) and an instance
read all of it. Unlike July 1850 this one is thick with streets — a single 1893
meeting names three dozen — but almost all of it is grade, sewer and sidewalk
work rather than naming. Seven items are worth keeping, and the first is the
reason the meeting was worth reading.

- **★ FRED L. ALLES IS BACK, AND HE IS PUSHING BROADWAY NORTH.** Petition
  **No. 465**: *"From Fred L. Alles et al. asking Council to appropriate the sum
  of $25,000. to assist in the Opening of Broadway North to Buena Vista street.
  Which was referred to the Board of Public Works."* (ledger p. 555.) This is
  the same man whose petition No. 126 of Feb. 3, 1890 asked that Fort Street be
  renamed Broadway (documents/min-1890-02-03) — three years on, asking the city
  to spend money pushing that street north until it reaches **Buena Vista
  Street**, the street that becomes North Broadway in Nov. 1909 (WANTED.md P2).
  The 1909 renaming has always looked like an administrative tidy-up; this says
  somebody was working toward it sixteen years earlier, and names him. Where it
  leads: the Board of Public Works' report back on petition 465, and whatever
  appropriation followed, in the weeks after Apr. 10, 1893.

- **16th Street ordered opened between Maple Avenue and San Pedro Street**
  (p. 545), by a 7-0 vote of the Street Superintendent's motion. Three weeks
  after the Miguel Subdivision (documents/mr053-016, Mar. 25, 1893) letters
  "16th ST. (formerly Pine St)" one block west. An extent- and date-bearing
  attestation for the new `sixteenth-street` entity, and the two together date
  the number's arrival on this ground fairly tightly.

- **Alpine Street between Centennial Avenue and Upper Main Street** (petition
  No. 473, Poindexter and List, a cement sidewalk by private contract, p. 556).
  Both ends resolve to modern geometry at 0 m — Centennial Street (generic
  drift, avenue→street) and Main Street. This is a SECOND extent-bearing
  attestation for `alpine`, six years after the Aug. 1887 grading resolution
  that gave it Yale-to-Beaudry (documents/ord-1887-08-22), and it is the stretch
  EAST of that one. Between them the name is now attested from Beaudry to Main.

- **Ocean View Avenue from Alvarado Street to Bonnie Brae Street** — final
  ordinance establishing the grade, referred to the Councilman from the Third
  Ward (p. 553). Ocean View Avenue is the corridor that became Beverly
  Boulevard, which is what the 1884 Glassell plat's **Diamond Street** also
  became through its own tract (`diamond-street`). Two names on one modern
  corridor, and where one stopped and the other started is exactly the question
  that entity's identity decision turns on. A sheet covering the Alvarado /
  Bonnie Brae block would settle it.

- **"the intersection of Fremont avenue and Diamond Street"** (a wooden culvert,
  p. 539). Modern Diamond Street and Fremont Avenue meet at 0 m
  (34.05890, -118.25260), so this is the SURVIVING Diamond Street, not the
  Glassell tract's stretch — an 1893 attestation of the eastern half of that
  entity, nine years after the plat. It does not settle the merge either way,
  but it is the first evidence outside the plat that the name was in live use.

- **15th Street from the westerly line of Grand Avenue to the easterly line of
  Hope Street** — ordinance of intention to grade, per petition No. 460 from
  A. J. Bradish (p. 552). A west-side block of `fifteenth-street`, whose only
  other sighting is on the far side of downtown.

- **Twenty-first Street from Bonsallo Avenue to Balboa Street — opening
  ABANDONED** (protest No. 434 of W. Cole, Trustee, sustained; p. 545). Two
  things: a street opening that did not happen, which is a shape the model has
  no row for; and **Balboa Street**, a name that is not in the corpus and is
  outside the OSM extract. Worth knowing it existed in 1893 near Bonsallo.

### ✔ Both documents now exist, and a fourth renaming instrument turned up (2026-09-06)

`documents/min-1893-04-10/` carries the meeting as **excerpts with no rows** —
Kenny's call: several items are extent-bearing but every one has a soft end
("Upper Main street" may be historic or modern Main; "Centennial avenue" is a
generic away from modern Centennial Street; a street *ordered opened* is not a
street lettered on a plat), so the sentences go in and the rows wait for a pass
that settles the ends.

And the clipping Kenny pulled the same evening is the prize:
**`documents/ord-1613/` — Ordinance No. 1613 (New Series), adopted Apr. 3,
1893**, which abolished **Wyoming Avenue** and **Cooper Street** and made them
one street called **Scott Avenue**. Three things follow.

- **It is the corpus's first MERGER.** Not two renamings side by side: two names
  abolished and one put in their place. Two change rows into one `to`, which
  the model took without any new machinery. Entities `scott-avenue`,
  `wyoming-avenue` and `cooper-street` are minted; the namesake is Kines's
  (P. M. and Elizabeth Scott, who lived on the street), and what this project
  adds is the instrument behind the 1893 date he gives.
- **Its minutes are missing too** — the second case after Fort Street in 1890.
  The Apr. 10 minutes prove the Apr. 3 meeting happened ("The minutes of the
  last meeting of April 3rd 1893 were read and approved"), and the ordinance
  itself survives only because it was printed.
- **★ Which is the real find.** Section 2 of every renaming ordinance in this
  corpus makes publication in a named newspaper a CONDITION of the ordinance
  taking effect — 1874, 1887 and 1893 all say so. So every renaming that took
  effect is in print, in full, over the clerk's certification, in a paper CDNC
  has OCR'd. The minutes are unsearchable; the print is not. Written up as
  **handbook/RENAMING-SOURCES.md § Step 2b**, and it is the method to try first
  on the six undated renamings in WANTED.md P3.

Nothing here draws: Scott Avenue is in Echo Park and Silver Lake, north of the
OSM extract, and neither old name is on any sheet. The rows record the act and
land on no ground, exactly as ord-4093's georgia-bell row does.

**What this says about method.** The July 1850 measurement said the minutes are
a bad place to *look* and a good place to *land*. This meeting does not overturn
that — it was found by date, and its one big item turned up because the project
already knew who Fred L. Alles was. A reader without that context would have
skimmed past petition 465 as one more appropriation request. The value is in the
index, not the sweep.

## Names moved out of names-new.js — what the move left open (2026-09-06)

All twenty-one entities in `names-new.js` were researched and moved into
`names.js`; the file is now empty. Five came back with a namesake (Temple,
Clark Avenue, Botiller Street, 15th, 16th) and the rest carry a null
`namedAfter` with the checks recorded in `internalNote`. Four things surfaced
in the pass that are leads rather than entries:

- **Laura Street and Pine Street, predecessors of 15th and 16th.** The Miguel
  Subdivision (`documents/mr053-016`, Mar. 1893) letters each numbered street
  beside a parenthetical former name — "(formerly Laura St)", "(formerly Pine
  St)". Both are naming lineages with no entity and no change row: the ink sits
  in the rows' `asWritten` and nothing else in the corpus mentions either. What
  would settle them: an earlier sheet of this ground, or the tract that laid
  them out. NB neither name is related to the Arts District's 1886 tree-and-plant
  run (Palm, Spruce, Tulip, Willow) — different ground, and Pine is not in it.

- **The "Maple Ave Tract".** The 1888 Widow Botiller resubdivision
  (`documents/mr029-026`) letters the adjoining land with that name — a tract
  named after the street, which means its own recorded sheet may date Maple
  Avenue. Maple is one of the four names on the O. W. Childs Tract with no
  documented origin, and this is the cheapest lead among them.

- **Six undated absorptions, all in the same few blocks.** Every one of these
  is a name that our sheets letter and the modern map has replaced, with no
  document anywhere in the corpus recording the change: Botiller → Santee,
  William → Santee, Myrtle → Wall, Ida → Cecelia, Clark → Crocker, Court House
  → Community Terrace. Five of the six are between 8th and 12th east of Main,
  in tracts recorded 1885-1893, so one city action may well have taken several
  at once — the same shape as the 1874 and 1897 ordinances. Worth a look in the
  ordinance-ledger indexes (handbook/RENAMING-SOURCES.md) before hunting them
  one at a time. NB Kines dates Santee Street's *naming* to 1886, two years
  before the Botiller sheet letters Botiller Street on ground that is Santee
  today, so on that one the two names demonstrably ran in parallel for a while.

- **Wesley Clark's dates.** The Clark and Bryan Tract sheet gives his address
  (127 West 3rd Street, Nov. 1893) but nothing else places him; no Wikipedia
  article, no Kines page. His partner Elden P. Bryan (1852-1925) is documented
  by the Homestead Museum. A city directory of the early 1890s would probably
  settle Clark in one line — SERIAL-SOURCES.md.

### Addendum, same day: four more names, and one clobbered file

Four more entities were minted in review while the above was being written —
`earl-st` and `regent-street` from the Moran and Moreno Vineyard tracts, then
`morgan-lane` and `boyd-street` from the Orchard Tract — and all four were
researched and moved the same way. One has a namesake: **Morgan Lane** is
G. W. Morgan's, from the Orchard Tract's own title block. What the second pass
added:

- **⚠ names-new.js was overwritten at 18:33 on 2026-09-06**, three minutes after
  the map tool saved `morgan-lane` and `boyd-street` into it, by an assistant
  that had read the file before that save. Both entities were rebuilt from
  `documents/mr005-005`'s rows in the tool's own minting format and lose nothing
  the rows carry — but a display form or note typed by hand at minting would not
  have survived, so both want a glance. The lesson is mechanical: the map tool
  owns names-new.js, and anything that rewrites the file must re-read it
  immediately before writing, not before doing the work.

- **The undated absorptions are now nine, not six.** Add Regent → Maple Avenue
  (5th to 6th), Earl → San Julian Street (north of Ninth), and Morgan Lane →
  3rd Street to Botiller → Santee, William → Santee, Myrtle → Wall, Ida →
  Cecelia, Clark → Crocker and Court House → Community Terrace. All nine are in
  the same few blocks east of Main between 3rd and 12th, from tracts recorded
  1876-1893. The Moran Tract shows one of them mid-seam: in April 1887 it
  letters Earl Street north of Ninth and San Julian Street south of it, on one
  page, so the corridor genuinely carried two names at once and San Julian later
  took the whole thing.

- **Wall Street is twelve years older in the corpus than it was this morning.**
  The Moreno Vineyard sheet (recorded Mar. 1876) letters it, and letters Regent
  Street two blocks away — New York's and London's best-known commercial streets
  on one page of building lots sold on their nearness to the new railway depot.
  That is the only argument either name has, and it is worth more than either
  would be alone.

- **Three tracts named as predecessors on the Orchard Tract sheet**: the
  "Chapman Tract", the "Hunter Tract" and the "Damisch Tract", all absorbed by
  July 1882. None is in the corpus. Any of them would date this ground earlier
  than 1882 and might account for Boyd Street, which nothing on the Orchard
  sheet does.

- **H. W. Mills, third owner of the Orchard Tract.** This file already carries a
  "Mills and Wicks Subdn." lead from the Bliss Tract's margin (M.R. 13-87/88,
  1886-87). Whether that Mills is this one is unchecked and would be worth five
  minutes: a shared owner would tie two widely separated pockets of the corpus
  together.

- **A document question for the Moreno Vineyard sheets.** `date` is recorded as
  1875-05-01, but the sheet's own recorder's note reads "Recorded Mar 1 1876 at
  11:00 AM at request of J. S. Cranford", and the title advertises lots near a
  depot whose land the Council only procured in September 1875. Worth checking
  where the May 1875 date came from, and whether this is a case for the optional
  `recorded` field (MODEL-SPEC §4).

## July 1850 council minutes — read in full, checked and cleared (2026-09-05)

Kenny downloaded all eight July 1850 meetings (M07031850, M07051850, M07061850,
M07101850, M07171850, M07201850, M07271850, M07311850 — 50 ledger pages) to test
whether reading the council minutes straight through is worth doing. **It is
not**, and the measurement is written up in RENAMING-SOURCES.md § "Is it worth
reading the minutes straight through?". This entry records what the month
actually yielded so that nobody reads it again.

**Not one street is named anywhere in the month** — no row is enterable from any
of the 50 pages. Two items touch streets obliquely and are recorded here rather
than as document rows, because neither says where anything is:

- **July 17, 1850** (ledger 30–31): *"The President proposed the appointment of
  a provisional Committee for the purpose of fixing the property lines of
  parties wishing to build, which should be done in conformity with the
  alignment and division into streets and blocks as shown by the maps of this
  City. Proposition admitted and approved, Messrs Temple and Aguilar being
  placed on that Committee."* — the council binding new construction to the
  surveyed grid less than a year after Ord finished it. This is context for
  when the Ord survey became *operative* rather than merely drawn, and it is
  the only dated statement of that in the corpus so far. It names no street, so
  it attests nothing about any particular pavement.
- **July 20, 1850** (ledger 31): *"A petition of Dª Concepción Navarro, asking
  for the vacant space which exists between her house and the streetline, was
  referred to a special Committee…"* — a streetline encroachment request. The
  street is not named and the house is not located; it would only become useful
  if the committee's report survives and names either.

The rest of the month, by page count: ~11 pages of oaths of office, ~10 of the
Council's own Rules and Regulations, ~6 of zanja and water regulation, ~10 of
salaries, jail, courthouse and school petitions, the remainder lot auctions and
treasurer's statements.

**Consequence for method:** the minutes are a good place to *land* once a date
is already known (three renaming instruments were found that way on 2026-09-04)
and a bad place to *look*. Take the date from the searchable newspapers first.

## Serial-source leads (Sanborn atlases & city directories, 2026-08)

Two source families new to the project, brought in by Kenny 2026-08 and
written up in SERIAL-SOURCES.md. Nothing below has been run yet.

- **~~⭐ The 1897 and 1898 city directories as a route to the renaming
  ordinance~~ — RUN, NEGATIVE (Kenny, 2026-08):** the 1898 directory has no
  list of changes, and the 1897 directory states it already incorporates the
  326 council changes without printing them as a table. The hypothesis was
  that a publisher absorbing 326 changes would print a concordance; it didn't.
  Don't re-run. (The directories remain valuable for their annual street
  guides — the extent-and-bracket use below — just not for the ordinance.)
- **Sanborn index-sheet gazetteer, 1888 / 1894 / 1906 / 1950** (2026-08):
  each volume carries a street index and a key map, so the indexes read
  across editions give a per-year existence timeline for every street in the
  city — from roughly a dozen images, all of them text rather than plat ink.
  Do this BEFORE reading any Sanborn sheets: it is the prioritization tool,
  and it says which streets have a question at all. Needs a human/browser
  download step (LOC returns 403 to automated fetching of its search, JSON
  API and IIIF manifests; item pages read fine).
- **The 1894 + 1906 Sanborn pair as the bracket for the "presumably folded in
  during the Feb. 1897 renaming" hedges** (2026-08): three nameHistory items
  currently rest on that presumption with no source naming the stretch —
  2nd Street (east-of-Alameda/Guadalupe lineage) and 3rd Street's
  "Bixel to Boylston (Arnold St)" and "Alameda to Santa Fe (Georgia St)"
  segments. Sanborn sheets covering those blocks in 1894 and 1906 would
  replace the presumption with a dated bracket on the exact blocks, whether
  or not the ordinance itself ever turns up. Same trick applies wholesale to
  the 96 "not yet researched" field values in streets-data.js as of 2026-08
  (34 `planned`, 59 `built`, 3 elsewhere).
- **ProQuest Digital Sanborn Maps (1867–1970), via an LAPL card** (2026-08):
  many more L.A. years than LOC has online, including the 1929/1930 and
  1960s editions. Authenticated, so it is a human-only path — worth a session
  of Kenny's time if the LOC editions leave a bracket too wide.
- **Annexed-city Sanborn volumes** (2026-08): Hollywood, Highland Park,
  San Pedro, Venice, Eagle Rock and the rest were published under their OWN
  city names before annexation — search LOC that way when coverage grows past
  Downtown. Annexation is itself a renaming event class (duplicate names with
  existing L.A. streets had to be resolved), so the pre- and post-annexation
  editions of an annexed town are a natural bracket for that whole class.
- **Checker follow-up** (2026-08): `check-data.js`'s `PRIMARY` regex doesn't
  recognize `loc.gov` or `rescarta.lapl.org`, so the primary-anchor count will
  under-report once Sanborn/directory sources land. Add them with the first
  such source.

## Segment-review flags (2026-07) — obsolete by construction

> **Closed 2026-09.** Seven flags lived here — Figueroa south of Pico, Hill
> south of Cesar Chavez, Garey, Mateo, Olive, Santa Fe and Pico — and every one
> of them said the same thing: *a citation had been applied to more of a street
> than the document actually covers, so the entry was hedged with prose and
> might want a split later.*
>
> That whole class of problem no longer exists. A row carries its own extent, a
> document carries its own coverage polygon, and the generator segments a
> street from the rows. A sheet that documents 200 m of Santa Fe Avenue now
> produces a segment covering 200 m; the rest of the street stays grey, because
> nothing speaks about it. There is nothing left to hedge and no split to
> schedule — the geometry does it.
>
> Two of the seven asked a real question underneath the bookkeeping: **how far
> south of the Plaza did the 1849 grid actually reach**, for Hill Street and for
> Olive Street? That is now a lookup rather than a research task. The six
> Hutton/Ord sheets are all swept, so what the survey attests about any street
> is exactly what their rows say and their coverage polygons reach — including
> `absent` rows where the survey covers ground and draws nothing. Read
> `documents/mr053-06*/` rather than researching it afresh.

## Findings from the first alignments (2026-07)

> **Applied and closed.** The georeferenced identifications this section used
> to list — MR066-035's Third→Miramar and Arnold→3rd, and MR006-138's State→
> Colton, Home→Rockwood, Hobart→Lake Shore Terrace, Waters→Douglas, Lake→
> Glendale and Aztec→Belmont — are all rows in `documents/` now, with the
> sheets swept. The reading of them is in git if it is ever wanted. Two things
> that were open then are still open and kept below.

- **Old Home Street ≈ modern Rockwood Street** — a real correspondence about
  43 m off, because the block was recut at a different angle. When it was
  realigned is unpinned; it needs a map between 1884 and today.
- **Montezuma Avenue = Dawson Street** has no entity: Dawson was dropped from
  MR006-138 as polygon overshoot, so it needs its own document.


- **MR006-138 name entities — research pass** (2026-08-30). Eleven entities
  were minted in review; ten remain in `names-new.js`. What was checked:
  - **Patton Street — SOLVED, moved into `names.js`.** Kines: "This 1883 street
    was named for its developer, attorney George Smith Patton (1856-1927)."
    Patton was **Andrew Glassell's nephew** and replaced George Hugh Smith in
    Glassell's firm (Kines's Glassell Street page; Wikipedia). Glassell
    subdivided this tract the following year, so the tract name really did
    lead somewhere.
  - **Hobart Street — NOT Hobart Boulevard.** Kines dates Koreatown's Hobart
    Blvd to 1887 and names it for Hobart Addison Stewart (1868-1915), a Flint
    dairy farmer, on someone else's subdivision. Different roadway, three years
    later. Kept separate; noted in the entity.
  - **Lake Avenue — two candidates, neither sourced.** Echo Park Lake (the
    reservoir predates 1884 and the street runs at it) is the simple reading.
    The other is a coincidence worth recording: Patton married **Ruth Wilson**
    in 1884, and Pasadena's Lake Avenue is named for her father's **Lake
    Vineyard** (Kines). Wants a contemporary source.
  - **Aztec Avenue — SOLVED, moved into `names.js`.** Kenny noticed that a block
    outside coverage the same street meets **Cortez Street**, with **Pizarro
    Street** 206 m away — a naming scheme, not a coincidence. Kines's Cortez
    Street page confirms it: Cortez (1884, *Glassell's Subdivision No. 2*,
    Andrew Glassell) is Hernán Cortés, and "what is now **Belmont Avenue** was
    called **Aztec Avenue** and what is now **Dawson Street** was called
    **Montezuma Avenue** … Glassell was clearly going for a theme here." That
    also confirms Aztec = Belmont **independently of our alignment**, which is
    the first outside check the AI pass has had. Follow-ups: *Montezuma Avenue =
    Dawson Street* has no entity yet (Dawson was dropped from MR006-138 as
    polygon overshoot, so it needs its own document); Pizarro has no Kines page;
    and it is worth pinning down how "Glassell's Subdivision No. 2" relates to
    M.R. 6-138's "Glassell's Subdivision of Lot 7 etc."
  - **Council, Home, Waters, Welcome, Diamond, Court** — not covered by Kines.
    His Echo Park index (34 streets, both pages read) contains none of them;
    Patton is the only one of ours he has. Web search found nothing usable.
  - The 1897 omnibus in `documents/ord-4093/` does **not** cover these
    renamings — grepped, no hits. The full 326-change list was never printed,
    so State→Colton, Home→Rockwood, Hobart→Lake Shore Terrace, Waters→Douglas,
    Lake→Glendale, Aztec→Belmont and Diamond→Beverly are all still undated.
    **That is the next real target**: one source would date seven renamings.
    The city engineer's Oct. 26, 1897 second list is a candidate; so are the
    city directories and Sanborn sheets.
  - **Identity decisions taken** (Kenny): `diamond-street` is ONE entity
    spanning the plat's Diamond (modern Beverly Blvd here) and the modern
    Diamond Street 869 m east — roughly collinear, ~30 m apart, one naming that
    lost its middle. `state-street` was **renamed `state-colton`** so it cannot
    collide with Boyle Heights' State Street, which is a different naming and
    must get its own disambiguated id when that area is encoded.

## Open leads — extents and dates

- **Moneta Avenue → Broadway (1925–26)** (2026-07): much of Moneta Ave. was
  renamed Broadway in 1925–26, well south of current coverage. Banked for
  whenever that area is added — it will want its own documents and a
  `moneta-avenue` entity; nothing to do until the neighbourhood exists.

- **Arts District warehouse-pocket streets** (2026-07): two batch passes done.
  Batch 1 — Mateo, Traction, Colyton, Santa Fe (full Kines sources); Hewitt
  (partial: formerly Carolina Street per the Colyton page, own namesake/rename
  date open); Palmetto, Factory Place, Willow, Molino, Merrick, Imperial
  (`unknown`, web search exhausted, not covered by Kines). Batch 2 — Seaton
  (full Kines source, shares the Colyton/Howard-tract page); Myers, Anderson,
  Mill, Utah, Decatur, Jesse, Mesquit (`unknown`, same story — nothing found,
  not covered by Kines; Mill/Utah/Decatur/Mesquit each carry a flagged
  speculative note — mill history, state-name tract pattern, Stephen Decatur,
  mesquite — none confirmed). Next step for all `unknown` entries in this
  pocket: a CDNC sweep (Feb.–Apr. 1897 renaming ordinance is the top target
  already flagged above; also try 1880s Herald tract-sale notices) and/or
  L.A. County tract-map lookups via NavigateLA — both need a real browser,
  not fetch tools.
- **Arts District warehouse-pocket streets, batch 3** (2026-07): Keller Street
  now has a full source (L.A. Revisited: promoted by Matthew Keller — the same
  "Don Mateo" of Mateo Street — as part of the 1869 Aliso Tract; geographically
  just north of the Arts District core, near Ramirez St/Piper Tech, not inside
  the Arts District bbox proper but thematically tied to Mateo). 4th Place and
  7th Place entered as spurs of the numbered grid (category "number"), not
  distinct namesakes. Channing St, Conway Place, Lawrence St, Avery St, Plaza
  Del Sol all `unknown` — web search exhausted, not covered by Kines. Same
  CDNC/tract-map follow-up as the rest of the pocket applies.

- **Larkin/Short St extent (4th St) and Lugo St extent (5th St)** (2026-07,
  partially resolved 2026-07, segments split 2026-07): Kenny's hunch — check
  828 E 4th St (the building now SCI-Arc) and 1129 E 5th St (Frederick
  Preston Howard tract, which also produced Seaton/Colyton) — paid off
  geographically. Both addresses land in the same recorded tract, F.P.
  Howard & Co.'s Subdivision of the Bliss Tract (M.R. 12-42, 1886, between
  Alameda and the Santa Fe grounds): 828 E 4th St's parcel fronted "Huber
  Street," 1100 E 5th St's parcel (1129 doesn't currently exist as an
  address; 1100 is the same block) fronted "Poplar Street," one block apart
  — the right spacing and corridor for Larkin/Short and Lugo respectively.
  Both streets have now been split into segments (west of Alameda / Alameda–
  Hewitt / east of Hewitt) with the Huber→4th and Poplar→5th story living in
  the middle segment's nameHistory. NOT yet proven: no source directly
  documents Huber→Larkin/Short or Poplar→Lugo by name — that link still needs
  a CDNC or city-directory search from the 1890s (search for "Huber street"
  and "Poplar street" renamed, or for "Larkin street"/"Lugo street" with a
  cross-street to confirm the same location). The "east of Hewitt" segments
  on both streets are still "not yet researched" placeholders — the Boyle
  Heights 2nd St→4th and 4th St→5th transfers (see below) belong somewhere
  further east than Hewitt, exact extent unknown.
  Complication found while reading the omnibus files: there appear to be *two*
  distinct "Lugo street" mentions in the 1897 sources — the Feb. 21 committee
  report's "Lugo street → Fifth street" (an existing street elsewhere), versus
  the Feb. 18 joint-session item where the ordinance had floated "Lugo street"
  as the new name for Boyle Heights' Second St (rejected after Workman's
  protest, which became Fourth St instead). These may or may not be the same
  street — worth keeping in mind when the CDNC search is done.
- **Wolfskill Ave / original-Central Ave boundary**: still open — this stretch
  is south of Vernon, outside current map coverage (NEIGHBORHOODS bbox ends at
  lat 34.033). Not actionable until a South L.A. neighborhood is added.
  (2026-07 migration: trimmed a duplicate of this same open question from the
  segment's own note; also displaced from that note — Central Ave's stretch
  through South L.A. became the heart of Black Los Angeles in the 20th
  century, a history outside current coverage, worth a proper mention once
  that stretch is added.)
- **9th→Olympic renaming date, east of Central** (2026-07): Olympic absorbed
  9th's continuation east of Central Ave sometime 1935–1945. Pin the ordinance
  (City Archives / L.A. Times archive) — this one is L.A. Times, 1935–1945
  (LAPL ProQuest access), not CDNC.
- **Figueroa south of Pico, pre-1897** (2026-07): Pearl ended at Pico; the
  entry's southern segment is open. Old maps (1880s Baist/Sanborn) should show
  what that stretch was called.
- **Georgia St → Georgia Bell renaming date** (2026-07): unsettled — Kines says
  1883; Forman's 1897 testimony says Sept. 11, 1890 (or 1880, OCR unclear).
  Council ordinance books would settle it. (Trimmed from Georgia Street's note;
  re-trimmed 2026-07 migration — a duplicate of this same sentence had crept
  back into the entry's note.)
- **Santa Fe Ave "Tulip" extent** (2026-07): the Goodwin Tract citation covers
  only the stretch south of 6th. Whether the same "Tulip"-era name applied
  further north (toward 1st/3rd, where the depots sat) is unchecked. (Trimmed
  from Santa Fe Avenue's note.)
- **Court Street (Angelino Heights) as a lost eastern stretch of Temple
  Street?** (2026-07, Kenny's hunch): Temple Street has two visible bends on
  the map — one at Fremont Ave, one at Edgeware Rd. Continue Court Street's
  own alignment straight past its eastern end and it lines up with the
  Temple/Fremont intersection, closer to matching the eastern stretch of
  Temple than anything Court currently connects to. Worth pulling tract maps
  for that stretch of Temple (between Fremont and downtown) to check whether
  it was ever platted as "Court Street" before Temple absorbed it — same
  Glassell's Subdivision (M.R. 6-138, sourced into Court Street's entry this
  pass) or an adjacent tract might show it. Not yet checked.
## Sourced finds awaiting entries

Also of note in the Feb. 27, 1874 article
(https://cdnc.ucr.edu/?a=d&d=LAH18740227.2.10): the same council session
established Fort Street's grade and declared Bunker Hill Avenue a public
street (40 ft wide, ~3,000 ft) — context for Broadway/Hill-area entries.

## Open leads — Arts District, and the undated renamings

> Three bullets closed here (2026-09): the Court/Olympic/Pico tract batch and
> the MR066-035 Third↔Arnold correction are both applied and encoded — the
> correction is now Rule 2 in CLAUDE.md and the reason MR066-035 is the
> benchmark sheet. Spruce Street is answered: `names.js` records it as modern
> Mateo Street, with a row on `documents/mr011-042/`.

- **Goodwin/Thomas/Mills-Wicks batch, loose ends** (2026-07): reading the three
  downloaded tracts closely (Kenny's tip — read the local PDFs directly rather
  than the browser viewer, much easier for side-by-side comparison) confirmed
  Hewitt's segment split, 2nd St's "Guadalupe" stretch, Traction Ave's "Second
  St" predecessor, and Imperial/Santa Fe's "Palm"/"Tulip" predecessors (all
  now in streets-data.js). Three loose ends remain:
  - **Second unnamed "STREET" on the Thomas Tract's north sheet (M.R. 3-61)**:
    the sheet shows TWO unlabeled N-S streets between "Guadalupe" and
    "Georgia." One is very likely [[Rose Street|Rose]] (flagged in that
    entry, geographically plausible but not a literal label match — confirmed
    Rose St crosses E 2nd St right at the Guadalupe/Georgia band, and a
    nearby parcel at Alameda/Traction/Rose shows all three streets meeting,
    though that parcel's own Tract/Map-Ref is a 20th-century resubdivision,
    not the 1875 Thomas Tract, so it's positional evidence only). The OTHER
    unnamed street (further east, lots 13-22 on that sheet) is still
    completely unidentified — not checked against any modern street yet.
  - **4th Place west of Hewitt**: Kenny's read of the downloaded Mills and
    Wicks tract suggested 4th Place (west of Hewitt) AND 4th St (east of
    Hewitt) were both once "Third St." Close re-examination of M.R. 13-87
    (the Apr.–May 1886 sheet) shows the "Third" band — including Lot 77,
    confirmed via NavigateLA as 813 E 4th Place — sitting entirely EAST of
    Hewitt (Lot B/C/D, the area west of Hewitt on this same sheet, are large
    unsubdivided lots with no through street drawn at all). Applied the part
    that checks out (4th Place AND 4th St's "east of Hewitt" segment both
    trace to this same "Third" band, immediately adjacent to Hewitt) to both
    entries. The "west of Hewitt" half of the claim doesn't have a source in
    the three tracts on hand — possibly it's on the Bliss Tract (M.R. 12-42,
    already cited elsewhere for Huber/Poplar/Carolina/Colyton/Seaton/
    Palmetto but not re-examined this pass) or possibly a mix-up given how
    disorienting the diagonal, non-north-up plat pages are. Worth Kenny
    double-checking directly, or downloading MR012-042.pdf for a fresh look,
    before treating "west of Hewitt" as resolved either way.


- **"Mills and Wicks Subdn."** (2026-07, partially resolved 2026-07): while
  re-checking the F.P. Howard/Bliss Tract map (M.R. 12-42) for Molino/Hewitt
  content, its margin note names the neighboring subdivision immediately east
  of Carolina St (now Hewitt) as "Mills and Wicks Subdn." Found via an
  unrelated NavigateLA lookup (813 E 4th Place, tract-batch pass): this is the
  "Mills and Wicks Extension of Second St. and adjoining subdivision," M.R.
  13-87/88 — a big two-page filing. Page 87 (Apr.–May 1886) covers the
  Georgia/Second/Third/Hewitt/Huber grid, north of the Bliss Tract; page 88
  (the "additional subdivisions," Jan. 1887) covers the block bordering "O.H.
  Bliss," and DOES show Mateo Street directly, right against a "Keller Est."
  label — added as Mateo's primary source. Molino still doesn't appear on
  either page — that lead stays open; the only remaining unexplored angle is
  whatever lies between this sheet and the Bliss Tract's own drawn extent.
  Also: the same page 87 shows Hewitt St by name directly (Apr.–May 1886,
  same year as but a few months before the Bliss Tract's "Carolina Street" —
  added to Hewitt's entry as a complication, since the two tracts apparently
  used different names for the same street corridor in the same year).
- **✔ SOLVED 2026-09-06 — Molino Street was Mateo (or Shafer) Street until Aug. 31, 1896.** Ordinance No. 3829, as printed in the Herald of Sept. 3: *"Mateo, or Shafer, street, from Palmetto to Short, be changed to Molino street"* (documents/lah-1896-09-03). The date the tract search could not reach is now exact, and the name it replaced turns out to be one this corpus already has. Still open underneath it: which stretch — "Short" is in no geometry here — and who or what Molino was named for. The original lead is kept below because its dead ends are still true.
- **Molino Street tract lookup — blocked by modern redevelopment** (2026-07):
  tried multiple addresses (530 S Molino St and others); NavigateLA returns
  only one giant modern parcel, Tract TR 060507-C / M.B. 1313-4/5 (the
  "Molino Street Lofts" apartment complex, 91 old APNs merged into one lot
  spanning the entire 5th–Palmetto block front). The original small-lot
  fabric and any old M.R./tract reference for this block have been erased by
  that development — this street can't be dated via NavigateLA. The "Mills
  and Wicks" lead above is the next avenue, not another NavigateLA pass.
- **Dunigan Tract lookup — blocked by modern redevelopment** (2026-09-06): the
  same species as Molino above, one step worse. Carleton and Summerfield's Sub
  of the Dunigan Tract carries the `nevada-1886` stretch of Georgia Street, and
  it has no Map-Ref obtainable from NavigateLA at all. **Every** parcel the
  assessor holds in the tract is DELETED — 1317 Georgia St struck 09/24/1987,
  1355 Georgia 11/17/1987, 1358 and 1407 Georgia 03/28/1988 — the Convention
  Center expansion eating the block. A Map-Ref lookup resolves a *live* parcel,
  so with none left there is nothing to answer with; 1317 and 1355 Georgia both
  geocode back to 1099 Georgia, the last addressed parcel on the street. So
  that stretch of Georgia Street is pavement that no longer exists: it can
  never be confirmed by a modern parcel, and its extent has to come from plats
  and directories alone. The Huntington has no Dunigan, Carleton or Summerfield
  sheet either (checked 2026-09-06). Don't re-run the NavigateLA pass.
- **San Julian below Ninth — NEGATIVE, no tract map exists** (2026-09-06): the
  parcel there reports the City Lands of Los Angeles (M R 2-504/505, Patent
  3-64/65) with an *unnumbered* lot and 167 addresses on it — unsubdivided
  remnant of the original city survey, never platted by a private subdivider.
  Kenny read the sheet: nothing usable for this project. So San Julian's name
  on that stretch cannot have come from a tract map. Don't look it up again.

---

## The Herald run carried to 1927 — 49 more clippings, 192 documents (2026-09-06)

Kenny finished the CDNC phrase search on *"ordinance changing"* in the Los
Angeles Herald and supplied every remaining result that touched street names.
All 49 are now documents with transcriptions. The corpus is **192 documents**;
`node check-model.js` and `node check-data.js` both pass. No rows were written —
these are reading material for the textual-document tool, and the confirming is
Kenny's step.

The date-by-date worklist and the answer to Kenny's question about where full
ordinance text is likely to be found are in `handbook/MINUTES-TO-CHECK.md §
Third pass`. The short version: **after about 1890 the Herald never prints a
list**, so the minutes are the only route to the names — but the Herald is the
only source that tells us which of these ordinances *died*, and six large ones
did. Newspaper first, minutes second.

### Findings worth their own entry

**★ Wilshire Boulevard was named in Dec. 1897** — "Sixth street, Hoover street
to west city boundary, changed to Wilshire boulevard"
(`documents/lah-1897-12-07`). That is fifteen months after H. G. Wilshire's own
petition to the council about that street (`documents/min-1896-09-21`), which
we already had and could not connect to anything. It connects now.

**★ Los Angeles' tilted grid, explained by the city in 1905.** The Herald of
May 18, 1905 (`documents/lah-1905-05-18`) traces the whole south-side numbering
mess to the original survey: *"Lieutenant Hancock of the United States engineer
corps laid out the pueblo of Los Angeles in 1849 under orders from the city
council, and for some reason not now plain, he adopted a system of running his
streets on an angle of twenty-eight degrees instead of north and south … This
was done despite the fact that the land lines of the pueblo were run north and
south, and comprised an area six miles square."* This is the year before our
July 1850 assessment work, and "twenty-eight degrees" is a claim we can test
against our own geometry. Worth doing.

**★ The seniority rule, then the annexation rule.** Pasadena, 1899: *"the
council decided that since the former street was the first to receive the name
it was entitled to retain it over the other street"* (`lah-1899-10-11`). Los
Angeles, 1910, as standing policy: *"In nearly all cases the names of the
streets in the original city are to be left as they are and those in the
annexed portions changed"* (`lah-1910-09-30`). So when two streets share a name
across an annexation boundary, the default expectation is that the **annexed**
one changed. That is a prior we can use.

**★ What a renaming cost.** Assistant city engineer J. J. Johnson, 1910: about
**$100 per street** to change the name on the department's records, maps,
profiles and other documents (`lah-1910-09-30`). That is the engineering
department's standing reason for resisting sentimental renamings, and it
explains the tone of every engineer's objection in the run.

**★ A legal reason for delay between a decision and its ordinance.** Sept. 1908:
the Fort/Buena Vista/Downey → Broadway ordinance could not be presented until
the paving of Downey avenue was finished, because a mid-project name change
*"would conflict with the Vrooman act, under which the paving is being done"*
(`lah-1908-09-22`). Whenever a council decision here has no ordinance behind it,
check whether the street was under improvement.

**★ A name that changed and changed back, both instruments dated.** About June
30, 1908 the council renamed Orange street (Figueroa to Alvarado) to Wilshire
boulevard and **sign posts went up**; in Dec. 1908 the ordinance was repealed
and *"Orange street is still Orange street"* (`lah-1908-07-14`,
`lah-1908-12-05`). Roughly five months in which the name stood in law and on
the street. Any document from that window may show it.

**★ Official name vs. used name, with the post office as tiebreaker.** The same
Dec. 1908 story: the petitioners for Sunset place say the block *"has always
been known as Sunset place"*, that owners believed that was its real name
*"until signs were posted on the corners calling it Orange street"*, and that
the post office knows it as Sunset place and will not deliver mail addressed to
Orange. A useful reminder that our `spellings[]` are what was *written*, which
is not always what was *used*.

**★ Three names for one street at once.** Feb. 1903: an ordinance changing *"the
name of East Jefferson street, Virginia street or Thirtieth street, between
Eureka street and Central avenue, to Thirty-eighth street"*
(`lah-1903-02-17`). The council's own "or" — it did not know which name was
correct either. A model case for `aliases`.

### The 1905 ninety-street ordinance — do not write rows from it

Four documents (`lah-1905-05-13`, `-05-16`, `-05-17`, `-05-18`) cover one
instrument across six days: City Engineer Stafford's renaming and renumbering
of **ninety cross streets** in the Fifth and Sixth wards; passed May 8; in
Mayor McAleer's hands May 13; **recalled from the mayor by the council May 15**
after the Sixth ward protested; and on May 18 the Herald reports it *"considered
likely that the present ordinance will be entirely done away with and some new
plan adopted."*

The objection was not to renaming as such — it was to the burden falling on one
side of town: *"none wish all of the changes made on one side of the city. They
desire that the changes be divided between the wards evenly."* What probably
became of it is the ordinance Mayor Harper **signed on Mar. 12, 1908**
(`lah-1908-03-13`), covering the same southwestern district, endorsed in advance
by the Fifth and Sixth ward improvement associations, and explicitly *differing*
from the engineer's own draft. That one took effect thirty days later.

The 1905 list should not be treated as a source of changes until the May 22,
1905 meeting is read.

### Two documents that are Pasadena, not Los Angeles

`lah-1899-07-26` and `lah-1899-10-11` are Pasadena council news carried by the
Herald. Both carry a Pasadena coverage polygon and a warning in the header.
Rule 2 (match by geometry, never by name) would have caught this eventually,
but only after wasted work: Los Angeles has its own Locust Street, Columbia
Street and Union Avenue.

### One clipping that could not be read

`documents/lah-1911-02-08` was supplied at **93 pixels wide** — the page crop
was 743 px but the saved JPEG is downsampled by a factor of eight. The headline
("Plan to Rename Wesley Ave. Goes to Committee") is legible; the body is not,
and upsampling recovers nothing. The document says so in its header and quotes
only the headline. A re-crop is in `handbook/WANTED.md`.

### ⚠ One transcription contains a racial slur

`documents/lah-1917-02-14` records the council ordering the Chinatown alley
renamed, *"declaring the name … a slur upon the colored people."* The old name
is transcribed because excerpts are `asWritten` (MODEL-SPEC §12), and the
document header says plainly that it must not be reproduced in any public
`note`. If this ever becomes a row, the public wording is Kenny's to write.

### Still untranscribed, unchanged from the last pass

Ordinance No. 48's 212 changes (`lah-1889-05-10`), the Oct. 1888 committee's
~300 proposals (`lah-1888-10-11`), and the Feb. 2, 1897 commission report
(`lah-1897-02-02`, read from an 84-px crop).

---

## Two more papers — the Daily News and the Evening Express, 1923–1935 (2026-09-06)

Kenny carried the *"ordinance changing"* search into two more CDNC titles and supplied
34 clippings across the day, in batches, while the Herald run was being written up. All
34 are now documents. **The corpus is 226 documents**; `check-model.js` and
`check-data.js` both pass. No rows written.

⚠ **Paper identification is provisional.** The CDNC codes are DNLA (read as the Daily
News, Los Angeles) and LAE / LAEVEX (both read as the Los Angeles Evening Express).
None was checked against a masthead, and the two Express codes may be two different
titles. One check would settle it for 34 documents; logged in `handbook/WANTED.md`.

### ★★ Two long-standing questions closed

**Main Street was never renamed — and now we know why, twice over.**
`documents/lah-1927-06-29` left the file with a contradiction: the Herald said Main
street was about to become Huntington drive, and Main Street is still Main Street.
Two clippings close it.

- `documents/dnla-1927-06-30`, one day later: *"Passage of the ordinance … was
  indefinitely postponed yesterday by the city council on advice of the city
  attorney."* The reason: notices of pending improvements describe property by street
  name, so a change *"might make proceedings illegal."*
- `documents/lae-1927-10-18`, four months later: *"The drafting of an ordinance
  changing the name of Main street to Huntington boulevard was ordered by the former
  council, but the measure was withheld."*

The full arc is five documents in three papers, and the opposition is a roll-call of
1927 Los Angeles: J. A. Graves of the Farmers & Merchants National Bank at the head of
1500 signatures, Judge William P. James of the federal district court, Bishop John J.
Cantwell, and the Native Sons and Native Daughters of the Golden West. Also: three
papers say Huntington **boulevard** and only the Herald says **drive**.

**Orange Street did become Wilshire Boulevard — sixteen years after the first attempt.**
The 1908 renaming was passed, signposted, and repealed under protest
(`lah-1908-07-14`, `lah-1908-12-05`). On **Apr. 1, 1924** the council passed it again
**unanimously** (`laevex-1924-04-01`, front page), and Mayor George E. Cryer signed it
on **Apr. 11, 1924** (`lae-1924-04-12`), having first deferred a few days to look into
a viaduct across Westlake Park (`lae-1924-04-07`).

What changed was the ARGUMENT, not the personnel. In 1908 the case against was that
Orange street was not a boulevard. In 1924 the case for was that this was the last link
in *"a continuous thoroughfare from the heart of the business district of the city to
the ocean."* **When a renaming fails and then succeeds years later, look for the change
in argument.**

### New mechanisms this batch put on the record

**★★ Emergency provisions — a name can be law the next day.** Sawtelle's residents, in
`documents/laevex-1925-09-15`, say the council renamed the whole Old Soldiers' Home
district *"without warning"*, under emergency provisions, so *"the new names became
effective the day aftr the ordinances were adopted."* No thirty-day wait as in
`lah-1908-03-13`. Any dating that assumes a waiting period can be a month wrong. Also
note **"ordinances", plural** — the 1919 Sawtelle renaming (`lah-1919-09-30`) was more
than one instrument. The residents *"don't know whether we live in California or
Halifax."*

**★ A veto is not the end.** `documents/dnla-1932-03-22` and `-03-23`: Mayor John C.
Porter vetoed the Pasadena avenue renaming; the council **overrode him 11 to 4 the next
day**, and North Figueroa Street is on the map today. Everywhere else in this corpus a
mayor's veto kills a renaming. The corollary to *adoption is not law* is *veto is not
the end either* — always read the following meeting.

**★★ The historic-preservation case, stated by a mayor in 1932.** Porter's veto message
(`dnla-1932-03-22`) is the best short statement of why any of this matters: *"The
elimination of old landmarks or historical names in a city with a background of color
and romance, such as we have here in Los Angeles, is not for the best interests of the
people. History has been enriched through the preservation of street names which carry
a distinctive significance, and should be encouraged."*

He also states the **destination principle** with five examples: *"We have streets
leading from Los Angeles carrying such names as Wilmington boulevard, Santa Monica
boulevard, Long Beach boulevard, Redondo boulevard and Venice boulevard — all
indicating the destination of the highway."* Pasa Hambra boulevard
(`dnla-1924-01-04`) and Avalon boulevard (`lae-1926-07-23`) belong to the same family.

**★ Petition percentages, and what they are worth.** The city measured these precisely
and the numbers do not behave the way one would guess:

| Petition | Change | Outcome |
|---|---|---|
| 100% for restoration | Esmeralda → East Rose Hill | recommended (`lae-1929-10-21`) |
| 57.4% for | Hollenbeck ave → Eighth st | council declared in favor (`lae-1930-11-13`) |
| 74% against | Sherman way → Van Nuys blvd | hearing only (`lah-1926-06-08`) |
| 60% of frontage against | Pasadena ave → N. Figueroa | **passed over a veto** (`dnla-1932-03-22`) |

A large majority against does not stop a renaming. Only unanimity clearly moves the
council.

**★ Suspension of the rules — the one-vote delay.** `documents/dnla-1925-07-16`:
Councilman Criswell alone voted against suspension of the rules and laid the Venice
Boulevard ordinance over a week, *"All of the other councilmen voted in favor."* Three
councilmen do the same to the Pasadena avenue ordinance in 1932 (`dnla-1932-02-17`).
This explains gaps of exactly one or two weeks between a decision and its ordinance,
and it is a delay, never a defeat.

**★ Inter-city coordination — Los Angeles renames first.** `lae-1930-06-11`: Angeles
Mesa drive becomes Crenshaw boulevard to the city limits, and *"the city of Inglewood
will be asked to continue the change."* `dnla-1930-08-05`: 128th street becomes El
Segundo boulevard *"although El Segundo, Hawthorne and Lynwood have yet to take action
to make the change uniform."* When a boulevard name crosses a municipal line, the Los
Angeles ordinance is likely to be the earliest, and the neighbours' are in their own
records.

**★ A restoration, in the paper's own words.** `documents/lae-1929-10-21`: *"an
ordinance changing the name of Esmeralda street **back to** East Rose Hill drive."* The
headline is "'Esmeralda' Reverts to 'East Rose Hill'". This is the clearest warrant in
the corpus for Kenny's rule (decision log, 2026-08-24) that **a revived name resumes its
old entity** — one entity, three `spellings[]` periods. The earlier change, East Rose
Hill → Esmeralda, is not in hand and should be searched for.

**Suffix changes are not renamings.** Waverly avenue → Waverly Drive
(`lae-1926-06-08`) and Adams street → Adams Boulevard (`lae-1928-08-06`) come to the
council in the same language as a renaming (*"an ordinance changing the name of"*) but
under MODEL-SPEC §3 they are one entity with two `spellings[]` periods. Together they
show the 1920s upgrading of ordinary streets to "boulevards" as a municipal habit.
Note that `lae-1930-06-11` still says "Adams street" two years after the Adams
Boulevard recommendation — so either it did not pass, or the paper kept the old form.

### Boulevards assembled out of other streets

A pattern the Herald run only hinted at is unmistakable here: the great east–west and
north–south arterials of Los Angeles were **built by renaming**, segment by segment,
mostly between 1923 and 1934, and contested nearly every time.

| Boulevard | Assembled from | Where |
|---|---|---|
| **Venice** | Sixteenth Street, Main to the west city limits | `dnla-1925-07-16` |
| **Wilshire** | Sixth st (1897); Orange st, Alvarado–Figueroa (1924) | `lah-1897-12-07`, `laevex-1924-04-01` |
| **Broadway** | Fort st, Buena Vista, Downey ave (1908); Moneta ave, 93rd–113th (1926) | `lah-1908-09-22`, `dnla-1926-09-30` |
| **Avalon** | South Park avenue + Canal street | `lae-1926-07-23` |
| **Beverly** | First street, Commonwealth–Glendale (east end) | `dnla-1927-07-27` |
| **Sunset** | Beverly boulevard west of Beverly Hills (west end) | `dnla-1934-02-03` |
| **Gage** | Merrill ave, 63rd st, 63rd pl, 64th st, Hyde Park blvd | `lae-1930-05-03` |
| **Crenshaw** | Angeles Mesa drive, Adams to 79th | `lae-1930-06-11` |
| **North Figueroa** | Pasadena avenue + Annandale boulevard | `dnla-1932-03-23` |
| **Olympic** | Country Club drive (from Tenth Street) | `lae-1929-08-21` |
| **El Segundo** | 128th street, Figueroa–Vermont | `dnla-1930-08-05` |
| **Bridge** | portions of Macy, Prospect pl, Yosemite, Pennsylvania | `lah-1908-10-27` |

`lae-1930-05-03` says it plainly: *"With slight jogs the various thoroughfares involved
make one through highway across the city."* That is why so many Los Angeles arterials
jog.

### One that was ordered and never happened

`documents/lae-1928-08-18`: the council voted **8 to 5** to draft an ordinance making
Sunset boulevard, **from the Plaza to Hillhurst avenue**, into Hollywood Boulevard —
and first rejected, 8 to 5, the planning committee's recommendation that property
owners be consulted. Sunset still runs from the Plaza today.

The opposition is the striking part: Hollywood's **own** Chamber of Commerce (Carl
Bush), its **own** Boulevard Improvement Association (Harry Bain), and C. E. Toberman.
The prestigious street refusing to share its name with a longer, plainer one — exactly
the 1908 Wilshire fight (`lah-1908-07-14`). Councilman Randall's retort, that the
arguments against *"are based on materialism,"* is the same complaint from the other
side.

This is the most valuable kind of document we can hold: **evidence that a change did
NOT occur.** Without it, a 1928 reference to "Hollywood Boulevard" downtown would be
unexplainable.

### Small things worth keeping

- **Robertson Boulevard** is named for **G. F. Robertson** — the ordinance says so
  outright, *"as a compliment to"* (`dnla-1926-08-05`). A clean `namedAfter` when
  confirmed.
- **Zahn Avenue**, for sitting Councilman Otto J. Zahn, carved out of South Sherman Way
  (`dnla-1926-05-06`). There is no Zahn Avenue today.
- **Marion Davies** got Claire drive and Linda drive renamed Davies drive by protesting
  against the city's proposed fix for a duplicate name, *"Clairaly drive"*
  (`dnla-1933-09-06`). Her letter was filed under her legal name, Marion Douras. A
  protest against a proposed name is itself a naming mechanism — and "Clairaly" is a
  good specimen of what the engineer's office produced when it needed a unique string
  rather than a meaningful name.
- **A cascade that did not complete.** Childs avenue → Griffith Park boulevard was
  adopted, and *"as a result of this change it is probable Griffin avenue will be
  changed to Montecito drive"* (`laevex-1925-10-16`). Griffin Avenue still exists, so
  it did not follow. **A predicted follow-on renaming is not evidence that it
  occurred.**
- **★ Childs avenue** is very likely named for **O. W. Childs**, whose tract is already
  in `names.js`. If so, `laevex-1925-10-16` records the loss of the last street
  carrying his name. Check against the Childs Tract geometry (rule 2) before writing
  anything.
- **"Swanking up."** Freitas terrace → Londonderry place, and the Daily News says the
  quiet part: *"Dear old Freitas terrace may be swanked up a bit today"*
  (`dnla-1935-09-10`). A Portuguese surname replaced by a British place name in the
  Hollywood Hills. Worth watching for as a pattern; not a conclusion from one case.
- **The city planning committee** replaces the board of public works as the usual mover
  of renamings by the late 1920s (`dnla-1927-07-27`, `lae-1928-08-06`,
  `lae-1928-08-18`, `dnla-1934-02-03`, `lae-1929-10-21`).

---

## Coverage audit — did the newspapers find what we already knew? (2026-09-06)

Kenny asked what fraction of the renamings we knew from **maps or Kines** actually
turned up in the newspaper sweeps. Measured rather than guessed.

**Method.** The denominator is `names.js` as it stood at commit `de8172b`
(2026-09-03), *before* any newspaper work — 72 entities, of which 18 carry a public
`note` asserting a renaming, each resting on the 1849 Ord survey, a tract plat, or
Kines, with no document behind it. The numerator is what the 176 newspaper documents
now in `documents/` say about each. Every pair was grep-checked against the excerpt
text, not against my memory.

| # | renaming, as we knew it | newspaper result |
|---|---|---|
| 1 | Bull → Castelar, Feb. 1874 | ✔ corroborated (`lah-1874-02-13`, `-02-27`); **act** is in the minutes (`ord-1874-02-26`) |
| 2 | Hornet → Yale, Feb. 1874 | ✔ corroborated, same pair of documents |
| 3 | Virgin → Alpine, Aug. 1887 | ✘ found in the **minutes** first try (`ord-1887-08-22`); papers only mention it in passing |
| 4 | Fort → Broadway, Feb. 1890 | ★ **newspaper-exclusive** — minutes missing; `lah-1890-02-20` carries the change row |
| 5 | Charity → Grand, 1886–87 | ✘ **zero** — "Charity" appears nowhere in 176 documents |
| 6 | High → Walters, 1886 | ✔ `lah-1886-09-21`, verbatim: "Presented an ordinance changing name of High street to Walters street. Adopted." |
| 7 | Walters → Ord, 1890 | ✔ **and corrected** — `lah-1890-10-28` has it in a 21-change omnibus that Mayor Hazard **vetoed** on Nov. 8. The 1890 date needs a different instrument. |
| 8 | Eternity → Buena Vista, 1888 | ✔ **attested — CORRECTED 2026-09-07.** Scored ✘ here because I searched the *old* name; the successor is in `lah-1896-05-16` and `lah-1908-09-22`. See the Cemetery/Eternity section below. |
| 9 | Buena Vista → North Broadway, Nov. 1909 | ✔ **and explained** — `lah-1908-09-22` orders it 8–1 in Sept. 1908, with the ordinance delayed for the **Vrooman act** until the Downey avenue paving finished. That is the gap to late 1909. |
| 10 | Georgia → Georgia Bell, 1889 | ★ richly — Ordinance No. 48 text (`lah-1889-05-10`), plus Major Horace Bell's own account of the naming (`lah-1897-02-05`) |
| 11 | Ruth → Stanford, after Feb. 1897 | ✘ not the renaming — but see the new lead below |
| 12 | Stanford → Crocker, undated | ✘ **zero** — "Crocker" appears nowhere |
| 13 | Tulip → Santa Fe, 1887 | ✔ **and corrected** — the real end is Ord. 3829, Aug. 31, 1896 (`lah-1896-09-03`), not "a matter of months" in 1887 |
| 14 | Palm → Imperial, undated | ✘ not found (two unrelated Palm streets appear) |
| 15 | Alexander Lane → Lebanon, 1917 | ✘ **zero** — the only "Alexander" in the corpus is Marion Davies's attorney |
| 16 | Tenth → Olympic, 1935 (asked 1929) | ~ the **ask** only: `lae-1929-08-21`, the Tenth Street Improvement Association's petition. The 1935 act is not found. |
| 17 | San Pedro → Avalon, undated | ✘ not found (Avalon appears once, from South Park ave and Canal st) |
| 18 | San Pedro → Judge John Aiso, 1997 | ✘ outside the searched period |

**The score.** ⚠ *Revised 2026-09-07 — see "Is Cemetery Avenue the same street as Eternity?" below; item 8 was mis-scored and the corrected totals are 7 attested / 6 with no trace.* Of 18 prior claims: **6 got a newspaper document that attests or
materially corrects the change** (4, 6, 7, 9, 10, 13); **2 more were corroborated**
while the act itself came from the minutes (1, 2); **1 is partial** (16); **1 was a
minutes find** (3); and **8 left no trace at all** in 176 newspaper documents (5, 8,
11, 12, 14, 15, 17, 18).

So roughly **a third confirmed, a half touched in some way, and a solid 44% invisible.**

### Why the misses are the interesting half

The eight that produced nothing are not randomly distributed. Six of the eight are
**undated in our own notes** — Stanford → Crocker, Palm → Imperial, San Pedro →
Avalon have no year at all, and Ruth → Stanford has only "after Feb. 1897". A search
of a *searchable* corpus that returns nothing for a street name is real evidence that
the name is not there, and the likeliest reason is that the change happened **outside
the window we swept** (the phrase search was densest 1883–1935 in the Herald and
1923–1935 in the Examiner and Daily News) or in a paper CDNC does not hold.

⚠ **Superseded 2026-09-07:** Eternity → Buena Vista IS attested under its successor name; only Charity → Grand remains in this category. Original text follows.

Charity → Grand and Eternity → Buena Vista are the two that should worry us most.
Both are 1849-survey names with a decade attached (1886–87, 1888) that sits squarely
inside the swept window, and **neither old name occurs even once** in 176 documents.
Two readings: the renamings happened in an unsearched paper, or — worth entertaining —
the dates from Kines are wrong and these belong somewhere else entirely.

### The asymmetry is the real finding

The audit measures the wrong direction to be flattering. Turned around: the newspaper
corpus names roughly **240 distinct old → new street-name pairs** (crude regex over
excerpt text, so call it 200+ after noise), in **107 of the 176 documents** — and that
is *before* transcribing Ordinance No. 48's 212 changes (`lah-1889-05-10`) and the
Oct. 1888 committee's ~300 proposals (`lah-1888-10-11`).

Against a prior inventory of **18** renamings.

So the honest summary is not "the newspapers confirmed a third of what we knew." It is
that **the newspapers found roughly an order of magnitude more renamings than we had,
and confirmed a third of the ones we came in with.** The prior list was never a sample
of Los Angeles renamings; it was a list of the ones that had a story attached — a
namesake worth a paragraph in Kines, or a Spanish name on the 1849 survey. The
hundreds we did not know about are the ordinary ones: duplicates resolved, streets
made continuous, named streets folded into the numbered grid.

That also means **the map-and-Kines inventory is not a good check on the newspaper
work**, and the newspaper work is not primarily a way of confirming it. They are
sampling different populations.

### Two new leads this audit turned up

**★ There was another Stanford Street, and it may not be Ruth's.** Our note says Ruth
Avenue "took the Stanford name later" than Feb. 1897. But:

- `lah-1896-03-31` refers to **"Stanford street"** as an existing street in Mar. 1896,
  ten months *before* the commission left Ruth alone.
- `lah-1897-12-07`: **"Bellard street, in the Washington-street tract, should be
  changed to Stanford"** — a Stanford being created in Dec. 1897 out of Bellard street.

So by rule 2 (match by geometry, never by name) we cannot assume the Stanford that
Ruth became is either of these. Before anything is written about Ruth → Stanford,
the Washington-street-tract Stanford and the 1896 Stanford need locating. This is
exactly the two-Vine-Streets trap in `handbook/WANTED.md`.

**Palm Street, twice, neither obviously ours.** `lah-1896-05-16` ("Central avenue and
Palm streets") and `lah-1896-09-09` ("Kenwood avenue, from Vermont avenue to Palm
street") both name a Palm street on the west side. The Goodwin Tract Palm — the one
that became Imperial Street — ran along modern Imperial Street in the Arts District.
Different ground; do not merge.

---

## Is Cemetery Avenue the same street as Eternity? — no, and the asking fixed an error (2026-09-07)

Kenny noticed Cemetery Avenue turning up in the renamings and asked whether it could
be Eternity, reasoning by the Wasp/Hornet precedent: the 1849 survey letters some
streets with an English name that is *not* a translation of the Spanish one, so
"Calle de la Eternidad" might have gone by "Cemetery" in English.

**The answer is no, on three independent grounds — but the question exposed a mistake
in yesterday's coverage audit, and that correction matters more than the answer.**

### Why Cemetery ≠ Eternity

**1. The bilingual mechanism does not apply here.** Hornet works as a precedent
because the two halves of that label *disagree*: `CALLE DE LAS AVISPAS` means wasps,
and the English half says `HORNET ST.` — and the 1874 petition, as the Herald printed
it, asks for "**Wasp street** to Yale street" (`lah-1874-02-13`), so both English
forms were in live use. Eternity has no such gap: `mr053-073` letters it
`ETERNITY ST.` **and** `CALLE DE LA ETERNIDAD`, and the two halves agree exactly.
There is no English-side slippage to exploit.

**2. Geometry puts them on different corridors** (rule 2 — match by geometry, never by
name). Our own alignment of the Ord survey has:

- `eternity` → **Broadway**, running south from Cottage Home Street (34.0673)
- `bull` → **Hill Street**, running south from Bamboo Lane

Cemetery Avenue became **Castelar** (Ord. No. 242, `lah-1886-07-23`), and Castelar is
the *Bull* line: minted from the Feb. 1874 ordinance, and confirmed downstream when a
portion of Castelar becomes **Hill Street** in July 1894 (`lah-1894-07-24`). Broadway
and Hill cross Temple about 120 m apart. Two parallel streets, one block apart.

**3. "Temple to Bellevue" is not a fingerprint.** It looked like one — Cemetery Avenue
ran Temple→Bellevue in 1886, and in 1908 Councilman Dromgold says Buena Vista "would
still retain its name from Temple to Bellevue" (`lah-1908-09-22`). But
`lah-1897-12-07` has "**Fudigar street, Temple to Bellevue, changed to Sugg street**",
a third street on the same stretch. At least three parallel streets ran Temple to
Bellevue over that high ground, so a shared extent there identifies nothing.

**The plainer reading** is that there were two burying grounds and two streets named
for them — Eternity leading north to Calvary (established 1844), and Cemetery Avenue
beside the older city cemetery on the Temple–Bellevue high ground. That the two
streets are one block apart and both named for the dead is a fact about that hillside,
not evidence that they are the same street. *(The city-cemetery location is asserted
from general knowledge, not from anything in this corpus — worth confirming before it
is written into a public note.)*

### ★★ The correction: Eternity → Buena Vista IS attested, and I scored it wrong

Yesterday's audit listed **Eternity → Buena Vista** as one of eight claims with "zero
trace" in 176 newspaper documents, and flagged it as one of the two that should worry
us most. That was **wrong, and wrong for a stupid reason**: I searched for the string
"Eternity", which of course does not appear, because by the time the searchable papers
begin the street had not been called Eternity for decades.

Searching the **successor** name finds it twice:

- `lah-1896-05-16` — "an ordinance changing the names of **Buena Vista street from
  Bellevue avenue north to the river** and Pasadena avenue from thence north to the
  city limits to Pasadena boulevard"
- `lah-1908-09-22` — "**Buena Vista, from Bellevue to the river**" → Broadway

Bellevue-north-to-the-river on the Broadway corridor is exactly where our Ord-survey
alignment puts Eternity. So the whole Kines chain — **Eternity → Buena Vista → North
Broadway** — is corroborated by two documents and by our own geometry, and the 1896
item adds a failed intermediate: the same stretch was nearly named **Pasadena
Boulevard** in 1896. (Which is its own small joke: in 1932 Pasadena Avenue itself
became North Figueroa — `dnla-1932-03-23`.)

### The methodological lesson, which is general

**Searching a corpus for the OLD name of a renamed street is the wrong search.** The
newspapers begin, in practice, in 1883; any street renamed before that appears only
under its new name. Every "zero trace" result in the audit has to be re-run on the
successor name before it means anything.

Re-run on that basis, the audit changes:

| claim | was | now |
|---|---|---|
| Eternity → Buena Vista | ✘ zero trace | ✔ **attested twice** (`lah-1896-05-16`, `lah-1908-09-22`) |
| Charity → Grand | ✘ zero trace | still ✘ for the change itself — but Grand's *spread* is attested: **Philadelphia street → Grand avenue**, petition No. 639 of J. E. Fay et al., 1895 (`lah-1895-07-02`) |
| Stanford → Crocker | ✘ zero | still ✘ — "Crocker" occurs nowhere |
| Palm → Imperial | ✘ zero | still ✘ — "Imperial" occurs nowhere |
| Alexander Lane → Lebanon | ✘ zero | still ✘ — "Lebanon" occurs nowhere |
| San Pedro → Avalon | ✘ zero | still ✘ — Avalon appears once, from South Park ave and Canal st |

**Revised score: 7 of 18 attested or materially corrected** (was 6), 2 more
corroborated with the act elsewhere, 2 partial, 1 found in the minutes instead, and
**6 with no trace under either name** (was 8).

### Two things this adds to the file

**★ Grand Avenue was assembled, like the boulevards.** `lah-1895-07-02`: the city
attorney is instructed to prepare "the necessary ordinance changing the name of
**Philadelphia street to Grand avenue**, as petitioned for by J. E. Fay et al., No.
639." So Grand grew by absorbing at least one other street, exactly as Castelar took
Cemetery Avenue and Broadway took Fort and Buena Vista. Whatever happened to Charity,
the Grand name did not arrive in one act.

**★ "Wasp street" is in the newspaper record.** The Feb. 13, 1874 petition, as printed,
asks for "Bull street to Castelar, and **Wasp street** to Yale street"
(`lah-1874-02-13`) — while the ordinance and the survey say Hornet. That is the
Spanish/English divergence surviving into live civic use twenty-five years after the
survey, and it is the best evidence we have that Kenny's underlying instinct — that
one street could go by two unrelated English names — is sound. It just does not happen
to be what Cemetery Avenue is.
