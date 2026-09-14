# Tracing a street named for somebody's daughter

Written 2026-09-13 at Kenny's suggestion, from a Fable sub-agent's playbook, after a
run of entities where "named for a relative of the subdivider" is the obvious reading
and nobody can name the relative: **Ruth**, **Gladys**, **Agatha**, **Ida**,
**William**, **Helena**, **Elmore**.

This is method, not answers. The point of writing it down is that the naive move —
search a genealogy site for "Ruth Wolfskill" — is the *last* step, not the first, and
run on its own it produces false positives that are very hard to unpick later.

## The evidence standard, first

Grade every claim before you go looking, so you know what you are hunting:

| | what it takes |
|---|---|
| **A** | A contemporaneous record states the naming. |
| **B** | A person of that exact name, existing **before** the plat, in the **nuclear family of a signatory**, plus pattern evidence on the same plat or a property link. |
| **C** | Consistent but not established. |
| **D** | Coincidence: born after the plat, a collateral line, or a common given name with only a surname match. |

**B is the working standard for writing `namedAfter` with a hedge.** Anything less
stays null. `agatha` is currently the closest thing in this file to a B and is the
template to finish first, because it is the one case with a named candidate.

**Name rarity shifts the weight.** Gladys was uncommon in the United States in 1887, so
a pre-1887 Gladys anywhere near the Wolfskills is strong; a Ruth or a William is weak
on the same evidence, and a Gladys born in 1892 proves nothing at all.

## The order, and why it is this order

### Phase 0 — fix the record before looking for a person
Pull the recorded map itself (pre-1888 in the Recorder's *Miscellaneous Records*, later
in *Map Books*; scans through LA County Public Works' Land Records viewer and
NavigateLA). It settles three things nothing else does:

- **who signed the owners' certificate** — the *namers*, who are not necessarily the
  people the tract is named for;
- the date the name was assigned;
- whether the plat lettering is the name you think you are researching.

Two consequences bite immediately in our cases:

- **The tract name usually honours the prior owner; the streets were named by the
  signatories.** "Valenzuela Tract" tells us nothing about any Valenzuela until the
  signatures are read — and our own observation that Elmore and Helena are Anglo names
  on a Spanish-surname tract is exactly what that gap looks like.
- **"Resubdivision" means there is a parent map.** `ida-street` is on a resubdivision;
  if Ida is already on the parent sheet, the namers are the earlier signatories.

Then inventory every street on the plat. A sheet whose other streets are all family
names is the best circumstantial evidence there is — and it is the argument already
carrying `regent-street`/`wall-street` and the Goodwin tree names.

### Phase 1 — build the signatories' household as of the plat date
The target is *"who were the women in this signatory's nuclear family on that day"*,
not *"did a Ruth Wolfskill ever exist"*. Sources that list families as units: the
**1880 census** (first with relationship-to-head, free on FamilySearch), the
signatory's **probate** (heir lists with married names), parents' **obituaries**, the
1889 *Illustrated History of Los Angeles County* and Guinn mug-book sketches, and
family papers — for us, Iris Higbie Wilson's 1965 Wolfskill biography, the Wolfskill
papers at the Huntington, and the Seaver Center.

### Phase 2 — close the 1880–1900 gap
This gets its own phase because **the 1890 census is lost** and a child born 1885–88 —
exactly our boom-tract window — sits in the blind spot. Tools: the **1900 census**
(birth month and year, and the "children born / children living" counts, the only
routine signal that a dead child existed); the **California Death Index 1940–97**,
searchable by mother's maiden name with no given name; CDI 1905–39; LA County pre-1905
registers and **Catholic sacramental registers**; cemetery interment books; the
*Herald* free on CDNC and the *Times* through an LAPL card; LAPL's digitised **city
directories**, where adult daughters appear as "Miss ——" at the father's address.

### Phase 3 — look for a record linking the name to the person
The honest answer is that **no 1880s record required a subdivider to say why a street
was named.** In descending value: deeds from the signatory to the person of lots *on
the eponymous street* (especially gifts "for love and affection"); a decree of
distribution assigning lots by street to named heirs; assessment rolls; boom-year
newspaper advertising for the tract; City Clerk files on street acceptance; surveyor's
field books, rare but the only place the naming act itself was ever written down.

### Phase 4 — break your own answer
Run the same household reconstruction for the **surveyor**, the **selling agent** and
any **co-owner**. Test the name as a place, a tree, a public figure, or a paired set —
Helena and Elmore as a couple or siblings; Helena as Elena. Log the negatives.

## Californio families need a different route

For **Botiller, Ybarrondo, Valenzuela** — and for the Wolfskills too, since William
Wolfskill married Magdalena Lugo and the children were Catholic:

- Given names are multiple and mobile. **Adelaida → "Ida" is a hypothesis to test in a
  baptismal register, not a finding.**
- Surnames shift with marriage; "Vicenta B. de Ybarrondo" is a married form.
- **The baptismal register is the birth record**, and it names godparents — so
  *compadrazgo* means an honoree can be a goddaughter rather than a blood relative.
- Land, probate and partition records are richer than the Anglo press.

For Anglo settler families the press and the mug books are productive, probate is the
anchor, and the **circular-citation risk in user-submitted trees is at its highest** —
an Ancestry or WikiTree tree that agrees with your hypothesis may simply be repeating
it.

## Search formulations that actually work

- FamilySearch 1880 census: leave **name blank**, set sex female, **Parent: Joseph
  Wolfskill**, residence Los Angeles. Repeat with Wolfskil / Wolfskell / `Wol*sk*`.
- Ancestry 1900 census: surname Wolfskill "sounds like", **Father: Joseph Wolfskill**,
  birth 1875 ±10 — then read the whole household image, including the children-born
  columns.
- California Death Index 1940–97: **name blank**, mother's last name Wolfskill, birth
  1860–1890.
- CDNC: `"Wolfskill" AND "Ruth"` 1885–1915; `"Ruth avenue" AND Wolfskill` 1887–1890.

## The traps, listed so they can be checked off

Reversed chronology (person born after the plat) · the wrong branch · **tract namesake
≠ namer** · circular user-submitted trees · a street renamed since, so you are chasing
the wrong name · the dead child who never reached a census · and stopping at the first
person who fits.

## Where this leaves our seven

`agatha` is at B-minus and should be finished first as the template. `ruth-ave` and
`gladys` need Phase 1 on Joseph Wolfskill. `ida-street` needs the parent sheet of the
1888 resubdivision and then a baptismal register. `william` is now a different problem
— there are two Williams in the Childs family and the question is which, not whether.
`helena-ave` and `elmore-ave` are stuck at Phase 0: nobody has read the June 1887
signatures.

---

# Worked example: the Wolfskill Orchard Tract, run 2026-09-13/14

The first run of this playbook. It found one person, killed one long-standing guess,
and — the part that matters for method — **Phase 0 changed the question before any
genealogy was done at all.**

## What Phase 0 turned up

Nobody had read the sheets' own text blocks. Two crops at 300 and 100 dpi gave:

**Sheet 1, title block.** "Map of the Wolfskill Orchard Tract situated in the City of
Los Angeles Cal. **Surveyed by J. H. Dockweiler in July & August 1887.** Scale one
hundred and twenty feet to one inch." — so survey 1887, recording Jan. 1888, and
several entities in `names.js` had been conflating the two.

**Sheet 5, recorder's certificate.** "A full true and correct copy of the original
(reduced to two thirds size) recorded Jany. 11th 1888 at 22 min past 9 a.m. **at
request of Los Angeles Land Bureau.** Frank A. Gibson, Co. Recorder, by Wm. E.
Johnston, Deputy."

**The filing party is a company, not the Wolfskills.** That is exactly the trap this
playbook warns about — *the tract name honours the prior owner; the streets were named
by the signatories* — and it reframed the whole search before a single census was
opened. The Los Angeles Land Bureau styled itself "a Corporation" at No. 20 West First
Street, its president was **George W. Frink**, its auctioneers **Easton, Eldridge &
Co.**, and it advertised the tract at private sale in the *Los Angeles Daily Herald*
from 31 July to 8 August 1887.

## What Phases 1–2 produced

**Ruth is real.** Joseph William Wolfskill (1843–1928) and Elena de Pedrorena had a
daughter **Ruth R. Wolfskill, born 23 November 1881**, buried in the Wolfskill plot at
Calvary Cemetery. She was five when Dockweiler surveyed. **Grade B** — right name,
right family, alive before the plat, on her father's land, with the Agatha precedent
on adjoining family land nine years later.

**Gladys is not.** Eleven recorded children, and no Gladys among them — nor anywhere on
the open web as a Wolfskill.

## The two things worth generalising

**1. Rarity can argue *for* a person, not just against one.** About **forty girls in the
entire United States** were named Gladys in 1881 (SSA; decade rank #151, against Ruth
at #66). The playbook's rule said a rare name near the family would be strong evidence.
The inverse turned out to be just as useful: in 1887 Gladys was an exotic Welsh literary
import, not a generic pretty name — so Gladys Avenue is **more** likely to honour a real
specific person, and the search moves to the developer's side rather than closing.

**2. A mixed tract is normal.** These five sheets carry Ruth (the owner's daughter),
Ceres (a harvest goddess over an orchard), Poplar (a tree), Omar (untraced) and Gladys
(nobody in the family). Do not expect a plat's street names to come from one source.
Testing each name against the family and stopping when one fails would have lost Ruth.

## What the run did not do

- **The census check was not completed** — FamilySearch wanted a login. Ruth rests on
  Find a Grave, which is contributor-submitted: internally consistent across four
  memorials in one physical plot, but possibly one upstream compiler. **Phase 1 is not
  finished until the 1900 census household is read**, where Elena's "children born /
  children living" counts also test for a child who died young.
- **George W. Frink's household is untraced** — no biography, no Find a Grave, no
  census reached. That is now the live question for Gladys.
- **The Agatha control wobbled.** Kines gives her 1871–1963; Find a Grave's Sabichi plot
  gives 1881–1963. Unresolved, and it matters — on the 1881 reading Agatha and Ruth are
  first cousins both born in 1881, each with a street on her own father's land.

## Method note worth keeping

Chronicling America's page viewer and OCR endpoints return 403, but **the underlying
ALTO XML is openly fetchable**: get the issue's file list from
`https://www.loc.gov/item/<lccn>/<date>/ed-1/?fo=json`, take the Nth
`storage-services/…/NNNN.xml` for page N, and fetch it directly. That is full OCR text,
and it is how the Land Bureau advertisements were recovered. The *Herald* on
Chronicling America (`sn85042460`, 1884–1890) is the same UCR digitisation as CDNC, so
this is a second door into the corpus when CDNC is unreachable.
