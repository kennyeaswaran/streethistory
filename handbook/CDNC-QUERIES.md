# Searches for a human: CDNC, Newmark, and the other blocked sources

Every search here failed only because the site refuses automated fetching. None
needs judgement — just a person with a browser. Phrases are given exactly as
they should be typed, in quotation marks where the quotation marks matter.

> **STATUS, 2026-09-17.** Kenny ran most of the CDNC list and fetched Newmark.
> What came back is recorded below, query by query. **Nine of the twelve phrase
> searches are done**; the results are in `documents/` and in `names.js`, and
> the clippings are in `inbox/`. The Newmark section is now a results table, not
> a wish list — the book is in the repo and greppable.

---

## Harris Newmark, *Sixty Years in Southern California* (1916) — ✔ DONE

✔ **THE BOOK IS IN THE REPO.** Kenny fetched the Gutenberg HTML on 2026-09-17;
the whole book is now a document of its own: **`documents/newmark-1916/`**, whose
`newmark-1916.txt` is the tag-stripped full text (1.5 MB,
whole book including the index). Grep it directly — no fetching, no rate limit,
no stale cache. This is the source that archive.org's full-text endpoint was
silently lying about for weeks; see the note in CLAUDE.md.

**Newmark was a merchant in this exact circle and knew all of these men, so a
zero here is evidence, not a gap.** Counts are whole-word matches over the full
text, index included.

| Name | Hits | What it settled |
|---|---|---|
| **Potts** | 3 | ★★ **CRACKED IT.** p. 61: *"Temple Street had not then been opened by **Beaudry and Potts**"* — the Beaudry link `potts-st` said did not exist. p. 126 is a biography of **J. Wesley Potts** (Texas 1852, hauled dirt, peddled fruit, first local sweet potatoes, later "widely known as a 'weather prophet'"), and Newmark's index runs the two together. `potts-st` went `none` → `inferred`. |
| **Teed** | 2 | ★ p. 614: **M. Teed** is one of nine men who met on Aug. 2, 1897 to found an Old Settlers' Society, with J. M. Guinn. Third sighting; see CDNC #6. |
| **Weill / Weil** | **0 / 0** | ✔ A real negative. Newmark names 33 Sainsevains and knew Alameda Street door to door; a Weill of any standing would be in him. It also kills the "Weil Block" spelling lead — that would be in Newmark too. |
| **Labory / Labury** | **0 / 0** | ✔ Real negative, and it did not matter — CDNC found the man instead (#5). Fits a rancher on the circle's edge. |
| **Alanis** | **0** | ✔ Real negative. The vineyard tract's own family is absent from the book that should have it. |
| **Kiefer** | **0** | ✔ Real negative (#8). |
| **Bliss** | **0** | ✔ Real negative — but CDNC had him (#9). |
| **Millar** | **0** | ✔ Real negative (#1). Consistent with E. B. Millar being a Chicago grocer investing at a distance, not a resident. |
| **Chadwick** | **0** | ✔ Real negative — but CDNC had him (#7). |
| **Wingerter, Reeve, Kincaid, Boteller, Glowner** | **0** | ✔ Real negatives, all. |
| **Amelia** | 2 | ✘ Not the street's; two unrelated uses. `amelia` stays `none`. |
| **Lazard** | **59** | ⭐ **UNMINED.** `lazard-street` is `attested` but hedged with "Probably", and fifty-nine passages have not been read. Highest-value unopened seam in the book. |
| **Requena** | **30** | ⭐ **UNMINED.** `requena-street` rests on Guinn; Newmark knew him. |
| **Beaudry** | **51** | ⭐ **UNMINED**, and the Potts find came out of exactly one of them. |
| **Wolfskill** | **61** | ⭐ **UNMINED.** |
| **Ducommun** | 15 | Attested already; may add a date. |
| **Vignes** | 15 | Bears on `labory-lane`, `sainsevain-street`, `vignes-st`. |
| **Sabichi, Harvey, Solano** | 8 each | Untouched. |
| **Botiller, Koster, Wilde** | 2 each | Thin; check anyway, they are cheap. |

**⚠ THE OBVIOUS NEXT JOB** is not another fetch, it is reading the 59 Lazard,
51 Beaudry, 61 Wolfskill and 30 Requena passages already sitting on disk. That
is a session's work with `grep -n` and no network at all.

---

## CDNC — cdnc.ucr.edu

**How to search.** Go to `https://cdnc.ucr.edu`, use the search box, then narrow
with the facets on the results page (newspaper = *Los Angeles Herald*, and the
date range). The advanced-search form takes a phrase in quotes and a date
range directly, which is the fastest route for everything below.

**Direct article URLs follow the pattern** `https://cdnc.ucr.edu/?a=d&d=LAH<YYYYMMDD>.<page>.<article>`.

| URL | Status |
|---|---|
| `https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3` | ✔ **GOT IT** — the Oct. 1888 duplicate cull, all 199 items, now `documents/lah-1888-10-11` with a full transcription. (The `.2.11` guess in the old version of this file was the wrong article id.) |
| `https://cdnc.ucr.edu/?a=d&d=LAH18861223.2.66.5` | ✘ still unopened — matched **"Sapphire street"**. Less urgent now: `sapphire`'s fate is settled by `documents/lah-1919-11-27`, so this would only bear on the tract's subdivider. |

### Phrase searches, in priority order

| # | Search for | Status and result |
|---|---|---|
| 1 | `"E. B. Millar"` | ✔ **DONE, partial win.** Herald 1887-02-05 carries *"For Sale. The E. B. Millar Property"* — 26 lots bounded by **Seventh Street, Alameda St. and Lemon St.**, "first-class vineyard", "Just near the famous Wolfskill Orchard", agents **Byram & Poindexter, 27 W. First St.** That independently confirms this project's alignment of the tract (its eastern boundary on Lemon Street had rested on the sheet alone), but names no street inside it, so Channing, Lawrence and Warren are still untraced. ⭐ **NEW LEAD: Byram & Poindexter** — the selling agent's own advertisements may carry the lot plan with the street names on it. Hits remain unopened at 1887-02-01, 03-08, 04-17 and 07-26. |
| 2 | `"Sapphire street"` | ✔ **SETTLED FROM ANOTHER DIRECTION.** Herald 1919-11-27 has the council ordering Sapphire Street and the north end of Boylston Avenue to become **Huntley Drive** — now `documents/lah-1919-11-27`. Garrigues was right and is now sourced. The 1886 hit above is still worth opening for the subdivider. |
| 3 | `"F. B. Wilde"`, then `"Wilde & Strong"` | ✘ **NOT YET RUN.** `wilde-st` is still `eponymous` with the man untraced. Newmark has 2 hits, unchecked. |
| 4 | `"F. H. Wright"` | ✘ **NOT YET RUN.** Kenny read the cartouche: M.R. 5-431 was recorded at F. H. Wright's request. Different initials from E. T. Wright the county surveyor. Still the cleanest untried search on the list. |
| 5 | `"Labory"` | ✔ **CRACKED IT.** Three clippings. Herald 1887-05-20, *"A Reunion of Old Friends"*: **Antonio Labory**, "a hale looking Frenchman, over whose head sixty-eight summers have passed", schoolmate of Vital F. Vignes in **Bordeaux**, landed San Francisco 1844, in Los Angeles ever since. Herald 1874-03-04: he sells 4,000 sheep and rents out his ranch. Herald 1887-08-03: an **H. Labory** in the vintage business at the Aliso "in company with such men as Pedro Sansevine". `labory-lane` went `none` → `inferred`. |
| 6 | `"Teed"` | ✔ **CRACKED IT.** Herald 1873-10-03, a display ad: *"M. TEED, CONTRACTOR AND BUILDER, Shop on First Street, Between Main and Spring."* Herald 1873-10-10: he is on the **Common Council**, present with Sabichi, Mullaly, **Beaudry**, Workman, De Celis and Dockweiler. Plus Newmark p. 614. `teed-street` went `none` → `inferred`. ✔ **AND HIS GIVEN NAME IS NOW KNOWN, 2026-09-18: MATTHEW TEED** (1828–1904), Common Council 1870–73, 1874–76 and 1880–88 — found in one web search, not in the Council rolls this line sent us to. ✘ And `rosas-street` did **not** come with it; that half of the prediction failed. |
| 7 | `"Chadwick"` | ✔ **DONE, thin.** Herald 1886-05-04 real-estate transfers: **J. S. Chadwick** buying Hollenbeck Tract lots from Myron H. Raymond, and 14 acres in the **Blow tract** from W. R. Huff and R. A. Ling for $14,000. So Chadwick was an active buyer in 1886, the year his subdivision was recorded — but nothing about the streets on it. |
| 8 | `"Kiefer tract"` | ✔ **DONE, thin.** Herald 1887-06-17, a for-sale column: *"Pacific avenue, Kiefer tract, lot 40x140 to an alley; $750, one-half cash"*, alongside Goodwin Tract and Weisendanger Tract lots. Confirms the tract existed and was selling; Kiefer the man is still untraced, and Newmark has zero. |
| 9 | `"O. H. Bliss"` / `"Bliss tract"` | ✔ **DONE, useful.** Herald 1886-10-19, court decrees: *"Oliver H Bliss vs Joseph Wolfskill, administrator of Lewis Wolfskill, deceased … Decree quieting title to part of **O H Bliss tract on E side Alameda street**."* So the Bliss Tract is east of Alameda and Bliss litigated it out of the Wolfskill estate. The Oct. 1888 committee list independently names it ("Huber St., in Bliss tract, changed to Mendocino St."). No entity yet. |
| 10 | `"Molino"` | ✘ **NOT YET RUN.** |
| 15 | `"Clement tract"` ⭐ | **NEW, and the highest-value newspaper search on the list.** Six untraced names come off that one 1887 sheet and no digitised copy of it exists anywhere reachable. A boom-era real-estate column naming the subdivider would settle `clementina-street`, `myers`, `anderson`, `grace` and `shenandoah-avenue` together. |
| 16 | `"Colina Park"` ⭐ | Same shape: twelve streets, a Spanish naming scheme nobody states, an unnamed subdivider. SurveyLA gives only "In 1885, the Colina Park tract was developed adjacent to the western terminus of the proposed 2nd Street cable railway." |
| 17 | `"Bigelow tract"` | Would name the Bigelow behind Atchison, Topeka and Freight Streets. |
| 18 | `"Kennedy tract"` | Bryan, Holmes and Lincoln Place come off this 1885 sheet; Kennedy is untraced. |
| 19 | `"Byram & Poindexter"` | The agents who sold the E. B. Millar Property in Feb. 1887, from 27 W. First St. Their own advertisements may carry the lot plan with the street names on it — the one live lead on Channing, Lawrence and Warren. |
| 11 | `"Harvey tract"` | ✘ **NOT YET RUN.** Would give Adele Street a family. Newmark has 8 unchecked Harveys. |
| 12 | `"Soda Water street"` | ✘ **NOT YET RUN.** Guinn says it intersected **Lemon Street** near Moran's Lane — would date Lemon Street decades before our 1887 sheets. |

### Results of the 2026-09-17 name batch, for the record

Forty-three entities were researched on 2026-09-17 using the sources above. What
is worth adding here is the **negatives**, because each one is a search somebody
would otherwise run again. All were taken with both a nonsense control and, where
the endpoint supports it, a positive control.

**Kines has NO PAGE AT ALL** for: Loma Drive, Collado, Colina (or Colina Park, or
Crown Hill), Arch Street, Crown Hill Avenue, Acacia (downtown), Shenandoah *(any,
anywhere — he has never written the word)*, Artemus, Clementina, Myers Street,
Anderson Street, Kearney Street, Bigelow, Atchison/Topeka/Freight *in Los Angeles*
(his Atchison is Pasadena), Nichols Avenue, Logan, Ventura *(this ground)*,
Ingraham, Hartford, Willow Street, Bryan Street *(this ground)*, Holmes Street,
Kennedy, Strelitz *(he mentions the man only in passing, on the Union Avenue page)*.

**Garrigues has NO ENTRY** for: Arch, Texas, North, Vernon, Loma, Crown, Union,
Downey, Clementina, Clement, Myers, Anderson, Shenandoah, Grace, Artemus, Atchison,
Garland, Kennedy, Ingraham, Hartford, Ventura, Logan, Nichols, Willow *(any)*,
Strelitz, Maryland.

**Gone from the city registry** (so: retired names, not surviving streets):
Clementina, Shenandoah *(east side)*, Strelitz, Collado, Gravilla, Atchison,
Freight, Topeka *(the city's one Topeka is a Valley drive)*.

⚠ **Two registry findings that reverse the obvious assumption**, both worth
keeping: the city holds exactly ONE **Azusa Street** and it is the Boyle Heights
one, not the Little Tokyo alley of the 1906 revival — the famous street no longer
carries an official name. And **Clarence Street still exists** (grid 634J5)
despite Garrigues putting it under Paseo El Coronel; only its northern stretch is
gone.

### Two new searches the 1888 list generates

| # | Search for | Why |
|---|---|---|
| 13 | `"Weill tract"` or `"A. Weill"` | ⭐⭐ **NOW THE BEST LEAD ON THE LIST.** The Oct. 1888 committee names an **"A. Weill tract"** with a Cedar Street in it. That is a recorded subdivision, which means a County filing with the man's full name in its title block — a findable object, unlike a surname search. Newmark's zero makes the map books, not the newspapers, the place to look; **NavigateLA or the County map-book index** is the route, and it may belong in `handbook/IN-PERSON.md` rather than here. |
| 14 | `"Ordinance No. 48"` / `"street names"` May 1889 | ⭐ The Oct. 1888 list is a **committee proposal** and at least four of its 199 lines did not survive. `documents/lah-1889-05-10` is the ordinance it became. Until that is transcribed, every line taken from the 1888 list is an intention, not an act — which is now the single largest source of qualified claims in the corpus. |

**A caution that applies to all of these:** several names in this corpus turn
out to have two or three unrelated Los Angeles streets (Virginia, Lafayette,
Jackson, Ida, Pine, Crescent). The Oct. 1888 list makes this vivid — four
Virginias, three Williams, three Grants, two Aurora Streets four Hancock blocks
apart. A hit is only useful if the article gives a cross-street or a tract, so
capture enough surrounding text to place it.

---

## Other blocked sites a browser could open

- **`https://www.jmaw.org/lazard-jewish-los-angeles/`** — Jewish Museum of the
  American West's page on Solomon Lazard. Returns *"Your Host has been locked
  out"* to our fetch tools. ⚠ See the note in CLAUDE.md about not hammering a
  site — if this is a rate-limit rather than a block, it may simply need
  leaving alone for a while. **Lower priority now**: Newmark has 59 Lazard
  passages sitting unread on disk, and they cost nothing.
- **ResCarta / LAPL city directories** — JavaScript-only. See
  handbook/IN-PERSON.md for the specific lookups. ⭐ A city directory would
  expand **A. Weill** to a full name. (✔ **M. Teed no longer needs this** — he is Matthew Teed, closed 2026-09-18 from a keyboard.)
- **NavigateLA** — JavaScript-only; the route to tract Map-Refs, and now the
  route to the **A. Weill tract** filing (#13).
- ✔ **CLOSED 2026-09-17. A Facebook thread**,
  `facebook.com/groups/echoparkhistory/posts/1741372899282840/`, titled *"What is
  the origin of Diamond Street's name in Los Angeles?"* Kenny supplied it in
  full. **It gives no namesake** — the gemstone set is untouched — but it did two
  other things. (1) Its attached image is a published **"Map of Los Angeles
  Railway and Railroad circa 1889"**, now `clippings/1889-la-railway-map.jpg`,
  which glosses seven streets with their modern names and independently
  corroborates Texas → Belmont. (2) The post contradicts itself about what
  Diamond Street became — its author says Beverly Blvd., the railway society it
  quotes says West First Street — and **this corpus's own rows arbitrate**: the
  eleven `diamond-street` rows fall into three contiguous longitude bands, west
  to east, on Beverly Boulevard, 1st Street and the surviving Diamond Street,
  with `mr007-056` handing over between the first two at −118.26042. One street,
  three modern names, and both published claims true of different thirds.
- ✔ **CLOSED 2026-09-17. `crownhillchronicles.blogspot.com`** — Kenny saved all
  five substantive posts (`clippings/crown-hill-chronicles/`). ✘ **It does not
  name the Colina Park subdividers**, which was the whole reason for wanting it.
  ★ The sheet's own title block did, the same afternoon, from a PDF already in
  `documents/mr007-036-p2/` — see `handbook/IN-PERSON.md` §3a, which is a lesson
  about checking the folder before writing down a lead. ⚠⚠ And the blog is a weak
  source in any case: its commenters correct its photo datings by a decade and its
  Witmer chronology contradicts Kines. Only `the-real-o.g.pdf`'s account of the
  Witmers naming their own street survived into `witmer-street`.
- **Calisphere item pages** are robots-blocked as well as its search
  (2026-09-17). The one thing wanted behind it is a record titled
  *"Bigelow, L. M. - Downtown Los Angeles parcel"*.
