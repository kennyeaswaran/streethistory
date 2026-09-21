# Shopping list — primary sources for the modern renamings (2026-09-18)

Five entities carried over from the legacy map have a renaming that only a web
page dates (Kines, LAist, Wikipedia). Each has a primary record that is
findable online, so the corpus need not decide whether to draw from secondary
sources at all. This is the brief for whoever pulls them — Kenny, or a browser
instance (the Council File Index and NavigateLA are JavaScript apps; fetch
tools see nothing). Written for a fresh thread: paste from "The job" down.

| entity (exists) | the claim to source | from → to (entities) | year |
|---|---|---|---|
| `astronaut-ellison-s-onizuka-street` | Weller Street renamed for Onizuka | `weller-street` (to mint) → `astronaut-ellison-s-onizuka-street` | 1988 |
| `cesar-e-chavez-avenue` | Macy Street (with Brooklyn Ave and a Sunset connector) united as Cesar E. Chavez Avenue, Mar. 31, 1994 | `macy-street` (to mint) → `cesar-e-chavez-avenue` | 1994 |
| `judge-john-aiso-street` | the northernmost block of San Pedro Street renamed for Aiso | `san-pedro-street` → `judge-john-aiso-street`, **qualified** (one block) | 1997 |
| `james-m-wood-boulevard` | 9th Street, Figueroa to Western, renamed for Wood | `ninth-street` → `james-m-wood-boulevard`, **qualified** (Figueroa to Western) | 1997 |
| `olympic-boulevard` | 10th Street renamed Olympic Boulevard (asked July 1929, done 1935); 9th east of Central absorbed by 1945 | `tenth-street` → `olympic-boulevard`; later `ninth-street` → `olympic-boulevard`, **qualified** (east of Central) | 1935; ≤1945 |

## The job

Read CLAUDE.md, handbook/RENAMING-SOURCES.md and handbook/change-rows-amendment.md
§§2–5. Another session owns `tools/generate.js`, `check-*.js`, `data/site-config.js`,
`handbook/SWITCHOVER.md` and `handbook/MODEL-IMPLEMENTATION.md`; do not edit
those.

**1. The four 1988–1997 names — the City Clerk's Council File Index.**
`https://cityclerk.lacity.org/lacityclerkconnect/` → Council File search.
Search by the new name and by the old ("Onizuka", "Weller"; "Cesar E. Chavez",
"Macy"; "Aiso"; "James M. Wood", "Ninth Street Figueroa"), with the year
bracketed. A street renaming is a council file with: the motion or request,
the **City Engineer's / Bureau of Engineering report** (which states the
extent in cross-streets — the qualified wording the row needs), the Board of
Public Works transmittal, the council action, and the **ordinance**, with its
number and its adopted / approved / published dates. Save, per name: the
council file number; the ordinance number; the three dates; the ordinance's
own sentence naming the street and extent, verbatim; the PDF (or a screenshot
of the operative page) into `documents/<id>/`. Chavez may have a County Board
of Supervisors action beside the city's (Brooklyn Avenue was partly county;
Molina was a Supervisor) — the city ordinance on Macy Street is the one for
our ground. Pair each with the L.A. Times item (full text online from 1985 at
latimes.com; search the new name and the month), the way the Herald pairs
with the 1890s ordinances.

**2. Olympic, 1935 — three routes, take the first that answers.**
- **NavigateLA cadastral sheet.** Search an address on Olympic between
  Figueroa and Central; in the report window open the **Cadastral Map**. The
  BOE annotates former names with the ordinance: expect "OLYMPIC BLVD
  (formerly 10th St) Ord. No. …". That number is the document to ask for.
- **Kimball, *Street Names of Los Angeles* (Bureau of Engineering, 1988)** —
  LAPL, not online; the compendium of name changes from city records, and the
  source of Kines's 1935. Carries ordinance numbers.
- **L.A. Times, 1935**, via LAPL's ProQuest. The 1929 petition is already in
  the corpus (`lae-1929-08-21`); CDNC's papers stop in 1931, so the adoption
  is a Times item.
With the ordinance number in hand, the ordinance text comes from the City
Archives (Piper Center) or the Clerk. The 9th-east-of-Central absorption
(≤1945) is a second act; the cadastral sheet east of Central will name it.

**3. Make the documents.** One folder per instrument, `type: "ordinance"`,
`form: "textual"`, dated `{ on: <adopted> }` with the approval and publication
in the note, `excerpts` for the title, the operative section and the
certification (verbatim), the scan or PDF beside it, `readBy: "human"` only if
a person read it. The L.A. Times item is its own `news-report` document.

**4. Write the rows**, all `confirmed: false`: whole-name where the ordinance
names the whole street (Onizuka, Chavez on Macy); `scope: "extent"` with the
modern `street`, `fromCross`/`toCross` from that street's crossings and the
`wording` verbatim where it names a stretch (Aiso, Wood, Olympic's 9th).
Mint `weller-street` and `macy-street` in `data/names.js` from what the ordinance
says (`basis: "none"`, `searched: "none"`, `internalNote` naming the
document); the legacy map's namesake for Macy ("pioneer merchants Obed and
Oscar Macy") is a lead for the internal note, not a `namedAfter`. Never write
the `*Approved` fields. Then `node tools/check-model.js` per document, `node
tools/generate.js` at the end, and read "Revived names" and "Row problems" in
`generated/report.md`. Kenny confirms the rows and verifies each qualified
extent against a map.

**5. Then retire the interim prose.** Each entity's `note` currently carries
the renaming as a sentence with the web citation; once the row is confirmed
the generator prints the history from the row, and the sentence can go.

End by listing every file changed and the boldest claim made.
