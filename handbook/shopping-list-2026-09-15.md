# Download shopping list — 2026-09-15

Opened for **Alameda to the L.A. River, 4th Street south to 7th Place** (the
Arts District / warehouse district) and for **the Wilde / Industrial / Kohler /
Central block**.

Swept by the "Skip the UI entirely" method in TRACT-RESEARCH.md: two polygons,
the city parcel layer for `TRACT`/`MAP_REF`, the County tract-footprint layer
for the page-letter suffix and the recording date. **Every URL below was
existence-checked** (HTTP 200 + `application/pdf`); the byte count is given
because it is the only cheap signal of a multi-sheet filing.

One change to the recipe, worth keeping: the handbook says to go through
NavigateLA's `esriproxysvc` proxy. That proxy **404s on a long URL** — a 66-point
polygon in the query string blows IIS's URL limit. `maps.lacity.org` answers
CORS-open anyway, so **POST the query directly** and skip the proxy. Both regions
came back in one query each, no `exceededTransferLimit`.

---

## Region A — Alameda to the river, 4th Street to 7th Place

929 parcels, 35 distinct Map-Refs. Polygon followed the 4th Street and 7th Place
centrelines, Alameda on the west, the river (lon ≈ −118.2282) on the east.

**Already in the corpus — skip:** `M R 11-42` Goodwin Tract (`documents/mr011-042`),
`M R 13-87/88` Mills and Wicks (`documents/mr013-087-p1`; sheet 2 is parked at
`_mr013-087-p2`).

### Misc Records — the 19th-century founding plats

| Map-Ref | Tract | Parcels | Streets on the footprint | PDF (KB) |
|---|---|---|---|---|
| **M R 12-42** | **F. P. Howard & Co's Subdivision of the Bliss Tract** | 146 | Colyton, Seaton, Hewitt, Palmetto, Alameda, 4th, 4th Pl, 5th | [MR012-042](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR012/MR012-042.pdf) (69) |
| **M R 15-52** | **Wingerter Tract** | 144 | Mateo, Mesquit, Santa Fe, Imperial, Jesse, Industrial, Conway Pl, 7th | [MR015-052](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR015/MR015-052.pdf) (95) |
| **M R 18-25** | **M. L. Wicks Subdivision of Kiefer Tract** | 46 | Mateo, Imperial, Wilson, 7th, 7th Pl | [MR018-025](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR018/MR018-025.pdf) (113) |
| **M R 53-83** | **Arthur Tract** | 41 | Mateo, Palmetto, Santa Fe, Willow | [MR053-083](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-083.pdf) (83) |
| **M R 16-73** | **M. L. Wicks Subdivision of the Garbolino-Cooper and South and Porter Tracts** | 38 | Mesquit, Santa Fe, 7th, 7th Pl | [MR016-073](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR016/MR016-073.pdf) (280 — probably several sheets) |
| **M R 13-91** | **E. B. Millar Tract** | 27 | Channing, Decatur, Lawrence, Mill, Wilson, Alameda, 7th, 7th Pl | [MR013-091](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-091.pdf) (54) |
| M R 4-511 | Blow Tract | 2 | 4th St, at the river end | [MR004-511](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR004/MR004-511.pdf) (57) |
| M R 2-504/505 | City Lands of Los Angeles | 44 | scattered leftovers across the whole region | [MR002-504](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR002/MR002-504.pdf) (213) |

`MR002-505.pdf` 404s — `MR002-504.pdf` carries both sheets, exactly as
TRACT-RESEARCH.md predicts for a two-page M.R. filing.

### Map Book — the 20th-century stages of the same names

Suffixes are from the County footprint layer, not guessed.

| Map-Ref | Tract | Recorded | Parcels | Streets | PDF (KB) |
|---|---|---|---|---|---|
| **M B 12-101** | **Industrial Center Tract** | 1907-04-11 | 150 | Colyton, Seaton, Hewitt, Mill, Palmetto, Factory Pl, Alameda, 6th | [TR0012-101](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0012/TR0012-101.pdf) (149) |
| **M B 159-32/33** | TR 10542 | 1929-02-28 | 29 | Mateo, Mill, Jesse, Industrial, Conway Pl, 6th | [TR0159-032](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0159/TR0159-032.pdf) (472) |
| **M B 5-56** | **Industrial Tract** | 1904-03-15 | 16 | Channing, Decatur, Lawrence, Mill, Wilson, Jesse, Mateo, Industrial, Conway Pl, Alameda, 7th | [TR0005-056A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0005/TR0005-056A.pdf) (181) |
| M B 319-1/2 | TR 14928 | 1948-03-01 | 5 | Palmetto, Willow, Santa Fe, 6th | [TR0319-001](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0319/TR0319-001.pdf) (412) |
| M B 187-44 | Guasti Tract | 1935-03-01 | 4 | Palmetto, Hewitt, Factory Pl | [TR0187-044](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0187/TR0187-044.pdf) (312) |
| M B 12-186 | TR 35 | 1907-07-17 | 3 | Mateo, Palmetto, Santa Fe, 4th, 4th Pl | [TR0012-186](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0012/TR0012-186.pdf) (142) |
| M B 20-53 | TR 1687 | 1912-04-15 | 3 | Mateo, Imperial, Conway Pl | [TR0020-053B](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0020/TR0020-053B.pdf) (77) |
| M B 17-124 | TR 1182 | 1911-02-28 | 2 | Alameda | [TR0017-124B](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0017/TR0017-124B.pdf) (41) |
| M B 18-187 | TR 877 | 1911-11-29 | 1 | — | [TR0018-187](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0018/TR0018-187.pdf) (81) |
| M B 23-43 | TR 2401 | 1913-07-25 | 1 | — | [TR0023-043A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0023/TR0023-043A.pdf) (76) |
| M B 23-54/55 | TR 1836 | 1913-05-23 | 1 | — | [TR0023-054C](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0023/TR0023-054C.pdf) (61) |
| M B 159-21/22 | TR 8772 | 1929-02-28 | 1 | — | [TR0159-021](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0159/TR0159-021.pdf) (372) |
| M B 751-38 | TR 29338 | 1966-01-04 | 1 | — | [TR0751-038](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0751/TR0751-038.pdf) (377) |

**Two filings whose footprint is in the region but whose parcels now cite a
later map** — they would be missed by a parcel-only sweep, and they are the
oldest Map Book sheets here:

| Tract | Recorded | PDF (KB) |
|---|---|---|
| **Southern Pacific and Santa Fe Warehouse Tract** | 1905-12-06 | [TR0008-113A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0008/TR0008-113A.pdf) (115) |
| TR 1879 | 1913-06-07 | [TR0023-066](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0023/TR0023-066.pdf) (149) |

### Modern consolidation and condominium maps (1997–2025)

All exist and all are large. Listed for completeness; none is likely to letter a
street name that the sheets above don't already carry, so these are the ones to
skip unless a specific question sends you to them.

TR 52046-01 1997 · [TR1225-028](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB1225/TR1225-028.pdf) (491 KB) — TR 54050 2004 · [TR1290-008](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB1290/TR1290-008.pdf) (2.0 MB) — TR 60507 2005 · [TR1313-004](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB1313/TR1313-004.pdf) (587 KB) — TR 61360 2006 · [TR1325-018](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB1325/TR1325-018.pdf) (615 KB) — TR 63027 2007 · [TR1335-072](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB1335/TR1335-072.pdf) (581 KB) — TR 66674 2007 · [TR1339-072](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB1339/TR1339-072.pdf) (472 KB) — TR 74529 2022 · [TR1437-001](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB1437/TR1437-001.pdf) (2.5 MB) — TR 74537 2023 · [TR1446-025](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB1446/TR1446-025.pdf) (1.2 MB) — TR 74309 2025 · [TR1455-092](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB1455/TR1455-092.pdf) (806 KB)

### Two refs with no URL

- **`DM 630-191` — S. P. R. R. Co's Arcade Depot Grounds** (2 parcels at 4th and
  Alameda). "DM" is a series the DPW land-records site does not expose under
  `misc/` or `tract/`. Given the name it is the railroad's own depot survey and
  probably worth chasing separately — the Arcade Depot stood at Alameda and 5th.
- **`BK 154-54/55` — P M 5297-C** (1 parcel). Parcel-map series; two guessed URL
  patterns (`/parcel/PM0154/…`, `/pm/PM0154/…`) both returned the DPW
  Page-Not-Found HTML. The project already holds `documents/pm017-045`, so the
  pattern is known somewhere — check how that one was obtained.

---

## Region B — Wilde / Industrial / Kohler / Central

162 parcels, 10 Map-Refs, in one small block group.

**Already in the corpus — skip:** `M R 30-9/13` Wolfskill Orchard Tract
(`mr030-009-p1`…`p5`), `M B 1-46` Mariana W. de Coronel Home Place
(`tr0001-046`). Also already held for adjoining ground: `mr021-046`
(W. J. Fisher's Subdivision of the Kohler and Frohling Tract) and `mr054-051`
(Kohler Tract).

| Map-Ref | Tract | Recorded | Parcels | Streets | PDF (KB) |
|---|---|---|---|---|---|
| **★ M R 55-81** | **F. B. Wilde's Subdivision of a part of the Coronel Tract** | — | 52 | **Wilde**, Kohler, Industrial, Merchant, Central, 7th | [MR055-081](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR055/MR055-081.pdf) (55) |
| **★ M R 37-91** | **W. J. Fisher's Addition No. 1 to Kohler and Frohling Tract** | — | 9 | Kohler, Industrial, Merchant, 7th | [MR037-091](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR037/MR037-091.pdf) (43) |
| **M R 107-97** | **George K. Frink Subdivision of the western portion of Block No. 1 of the Coronel Tract** | — | 7 | Central, Industrial, 7th | [MR107-097](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR107/MR107-097.pdf) (40) |
| **M B 1-72** | **Culver Tract** (County spells it "CILVER") | 1902-01-29 | 16 | Ceres, Kohler, Industrial, Wilde | [TR0001-072](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0001/TR0001-072.pdf) (49) |
| **M B 9-75** | **Power Plant Tract No. 1** | 1906-02-17 | 6 | Central, Alameda, Industrial, Wilde, 6th | [TR0009-075](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0009/TR0009-075.pdf) (108) |
| M B 11-196 | Slauson Property, Lot A | 1907-01-29 | 1 | — | [TR0011-196](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0011/TR0011-196.pdf) (72) |
| M B 33-15 | TR 2632 | 1917-02-21 | 1 | — | [TR0033-015](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0033/TR0033-015.pdf) (227) |
| M B 273-17 | TR 13301 | 1946-02-27 | 1 | — | [TR0273-017](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0273/TR0273-017.pdf) (228) |
| M R 2-504/505 | City Lands of Los Angeles | — | 5 | Kohler, Wilde | same PDF as Region A |

---

## What to take first

1. **M R 55-81 — F. B. Wilde's Subdivision of a part of the Coronel Tract.**
   This is the reason the Region B block was worth sweeping. **Wilde Street has
   no entity in data/names.js or data/names-new.js**, and the only Wilde the project holds
   is `mr066-064`, *Wilde and Strong's Subdivision of the Frank Sabichi Tract*
   over by San Pedro — a surname with no first name attached. This sheet gives
   an initialled **F. B. Wilde** subdividing the very block Wilde Street runs
   through, which is as close to a namesake as a plat gets. 52 parcels, so it is
   the block's principal filing.
2. **M R 12-42 — F. P. Howard & Co's Subdivision of the Bliss Tract.** The Bliss
   Tract is cited in TRACT-RESEARCH.md as the sheet that "alone gives Seaton,
   Colyton, Carolina/Hewitt, Huber, Poplar and Palmetto" — and it is **not in the
   corpus**. 146 parcels across Colyton, Seaton, Hewitt and Palmetto.
3. **M R 15-52 Wingerter** and **M R 18-25 Wicks/Kiefer** — 190 parcels between
   them, and together they carry Mateo, Mesquit, Imperial, Jesse, Industrial,
   Conway Place and Wilson, none of which the corpus letters from this side.
4. **M B 12-101 Industrial Center Tract (1907)** and **M B 5-56 Industrial Tract
   (1904)** — the 20th-century stage for the same ground, and the obvious place
   to look for where *Industrial Street* and *Factory Place* come from.
5. **M R 37-91 — W. J. Fisher's Addition No. 1.** The corpus already has
   Fisher's *Subdivision* (`mr021-046`) and the *Kohler Tract* re-subdivision
   (`mr054-051`); this is the third filing in that family and closes the set.
   Note `kohler` in data/names.js carries a ⚠ about **two** Kohler Streets — the
   original running where 9th Street now runs — so a third Fisher sheet is worth
   reading against that.

---
---

# Batch 2, same day — seven named streets

Boylston, Delong, Judge John Aiso, Astronaut Ellison Onizuka, Ducommun, Toriumi
Plaza and Cleveland. Not a contiguous area, so this was run as **one buffered
corridor polygon per street** — each street's OSM polyline offset ±40 m,
ordered along its principal axis (Toriumi Plaza is a loop, so it got a plain
buffered box instead). Same two layers, POSTed direct. **All 62 URLs below were
existence-checked**; none 404ed.

The "already covers it" lines come from testing each street's corridor against
every document's coverage polygon in the registry.

## ★ Cleveland Street — and the open question in research-leads closes

**The corridor's principal filing is `M R 7-62/63`, "Portion of the Beaudry
Tract No. 2 lying east of Pearl St." — 78 of the 102 parcels on the street.**
That is almost certainly the plat behind the name: the 2026-09-15 note in
research-leads has Kines dating Cleveland Street to a Beaudry tract named
**January 1886**, with no documentary evidence offered.

**And the rival hypothesis is already dead in our own data.** That note leaves
open "which street?" — a legacy positional guess tying Cleveland to the Ord
Survey's *Calle de las Adobes*. `documents/mr053-073` (Plan de la Ciudad de Los
Angeles, **swept**) settles it two ways at once:

- it letters CALLE DE LAS ADOBES as a `state` row on modern **Adobe Street**, a
  different street; and
- it carries an explicit **`absent` row for Cleveland Street** — "the modern run
  crosses mapped lots, cultivated ground, hillside, or structures; no two-edge
  roadway is shown on this alignment."

So the Ord Survey covers that ground and draws no street there, which is exactly
what Kines's 1886-tract account predicts. There is one Cleveland Street, not
two, and it post-dates Ord. **This needs writing into research-leads** — the
"two entities" worry can be struck.

| Map-Ref | Tract | Parcels | PDF (KB) |
|---|---|---|---|
| **★ M R 7-62/63** | **Portion of the Beaudry Tract No. 2 lying east of Pearl St.** | 78 | [MR007-062](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-062.pdf) (182) |
| M R 3-240 | Block 35½, being an extension of Ord's Survey | 11 | [MR003-240](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-240.pdf) (86) |
| M B 14-101 | Orsatti and Vitagliano Tract (1909-01-26) | 4 | [TR0014-101A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0014/TR0014-101A.pdf) (67) |
| M B 26-74 | TR 2643 (1914-06-03) | 2 | [TR0026-074](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0026/TR0026-074.pdf) (104) |
| M B 771-36/37 | TR 26170-C (1968-02-20) | 1 | [TR0771-036](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0771/TR0771-036.pdf) (401) |

Already covering it: `mr053-073` (Ord Survey; `M R 53-66/73` also shows on 5
parcels). No URL: `DM 715-14`, "Part of Block 35½ Ord's Survey".

## Ducommun Street

Two big early Misc Records filings, neither in the corpus. Only `mr053-073`
(Ord Survey) currently reaches this corridor.

| Map-Ref | Tract | Parcels | PDF (KB) |
|---|---|---|---|
| **★ M R 2-526/527** | **Subdivision of the Alanis Vineyard Tract** | 27 | [MR002-526](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR002/MR002-526.pdf) (131) |
| **★ M R 4-12/13** | **Subdivision of the Aliso Tract** | 23 | [MR004-012](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR004/MR004-012.pdf) (217) |
| M B 110-48 | TR 8701 (1925-03-18) | 3 | [TR0110-048](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0110/TR0110-048.pdf) (302) |
| M B 18-29 | TR 1153 (1911-05-31) | 2 | [TR0018-029A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0018/TR0018-029A.pdf) (94) |
| M B 201-1/2 | TR 11189 (1937-06-01) | 2 | [TR0201-001](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0201/TR0201-001.pdf) (452) |
| M B 33-81 | TR 2963 (1917-06-04) | 1 | [TR0033-081](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0033/TR0033-081.pdf) (134) |

Footprint-only (parcels now cite a later map, so a parcel sweep misses these):
Mathilde Raynal Place 1905 · [TR0008-006](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0008/TR0008-006.pdf) (108) — TR 320 1908 · [TR0014-111B](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0014/TR0014-111B.pdf) (96) — TR 1152 1911 · [TR0018-025A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0018/TR0018-025A.pdf) (87) — TR 8011 1924 · [TR0100-025](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0100/TR0100-025.pdf) (778)

No URL: parcel maps `BK 2-27` (P M 349), `BK 112-21/22` (P M 4255),
`BK 407-44/45` (P M 2014-2769).

## Judge John Aiso Street, Astronaut Ellison Onizuka Street, Toriumi Plaza

These three sit on top of each other in Little Tokyo and **the corpus already
holds the sheets that matter** — which is the same evidence base the alignment
worry of 2026-09-14 turns on:

- **Aiso:** `M R 3-146/147` Requena (`mr003-146-p1`/`-p2`), `M R 10-8` Murat
  (`mr010-008`), `M B 20-196` TR 1101 (`tr0020-196b`), plus `mr053-071` and
  `tr0885-030-p2` overlapping.
- **Onizuka:** `M R 10-8` Murat is 17 of the 33 parcels — `mr010-008` again,
  plus `mr053-069`/`mr053-071`.
- **Toriumi Plaza:** Murat 27, City Lands 13, Requena 9 — all held.

So nothing new is needed to letter these corridors; what is new is small:

| Map-Ref | Tract | On | Parcels | PDF (KB) |
|---|---|---|---|---|
| **M R 6-308** | **A portion of the Alvarado Tract** | Toriumi | 9 | [MR006-308](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-308.pdf) (42) |
| M R 52-20 | Property of Cacilie Johannsen | Aiso, Toriumi | 1+1 | [MR052-020](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR052/MR052-020.pdf) (82) |
| M B 15-137 | TR 648 (1910-01-17) | Aiso, Toriumi | 1+1 | [TR0015-137B](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-137B.pdf) (70) |
| M B 12-23 | Axcelrod and Winogura Property, Lot "A" (1907-02-19) | Toriumi | 1 | [TR0012-023A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0012/TR0012-023A.pdf) (59) |
| M B 35-22 | TR 2918 (1917-09-08) | Onizuka | 2 | [TR0035-022](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0035/TR0035-022.pdf) (294) |
| M B 856-50/51 | TR 30213 (1975-08-26) | Onizuka | 6 | [TR0856-050](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0856/TR0856-050.pdf) (536) |

Footprint-only around Onizuka, and the interesting ones here because they are
early and name-bearing: O'Leary Property 1904 · [TR0005-175C](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0005/TR0005-175C.pdf) (74) — Bisbee Tract 1910 · [TR0016-005](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0016/TR0016-005.pdf) (90) — TR 520 1910 · [TR0017-001B](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0017/TR0017-001B.pdf) (128) — TR 1666 1912 · [TR0020-060A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0020/TR0020-060A.pdf) (66) — Deakers Tract 1912 · [TR0020-136A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0020/TR0020-136A.pdf) (94)

No URL: `DM 737-155` (2 parcels on Aiso).

## Delong Street

**Almost nothing survives.** 41 parcels on the corridor and **29 of them have an
empty `TRACT`** — which TRACT-RESEARCH.md reads as freeway right-of-way and
vacated street. Delong runs right against the Harbor Freeway by the Convention
Center. **No document in the corpus covers this corridor at all.**

| Map-Ref | Tract | Parcels | PDF (KB) |
|---|---|---|---|
| **M R 10-77** | **Harvey Tract** | 5 | [MR010-077](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR010/MR010-077.pdf) (62) |
| M R 5-431 | Wright's Subdivision of the Sisters of Charity Tract | 2 | [MR005-431](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-431.pdf) (51) |
| M R 2-108/111 | Hancock's Survey | 3 | [MR002-108](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR002/MR002-108.pdf) (641) |
| M B 30-86 | Whiffen Tract (1915-12-02) | — | [TR0030-086](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0030/TR0030-086.pdf) (190) |

No URL: `O M B 5-38/40`, Official Map No. 2 — an Official Map Book series the
DPW site doesn't expose under `misc/` or `tract/`.

## Boylston Street — long, and worth splitting

Boylston runs roughly 2 km, from about 6th Street up through Angeleno Heights,
in three OSM pieces (South Boylston, North Boylston, Boylston) with the 101
cutting the middle. 267 parcels, 31 Map-Refs. Listed **south to north** by the
latitude band its parcels occupy, so the segments stay separable.

**One thing the corpus already says about this street:** `documents/mr066-035`
(Compromise Subdivision of a portion of the O.T. Johnson tract, known as the
Washington Tract, surveyed Mar. 1894) letters modern **Boylston Street as
"FIGUEROA ST."** — a Figueroa that is not today's Figueroa. Worth holding in
mind while reading anything below. `mr003-569` (Nichols Addition) also overlaps
the southern end.

### Misc Records

| Band (lat) | Map-Ref | Tract | Parcels | PDF (KB) |
|---|---|---|---|---|
| 34.0526 | M R 5-400 | Galpin Tract | 3 | [MR005-400](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-400.pdf) (43) |
| 34.0528 | M R 78-55/56 | Replat of a portion of the Subdivision of the Lands of St. Paul's School | 2 | [MR078-055](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR078/MR078-055.pdf) (75) |
| 34.0535–68 | **M R 3-46/47** | **Plan of Subdivision B of Lot 8, Block 38 Hancock's Survey (known as the Washington Tract)** | 21 | [MR003-046](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-046.pdf) (128) |
| 34.0562 | M R 16-59 | Chadwick Subdivision of Blocks 1, 2 and 12, Woolen Mill Tract | 8 | [MR016-059](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR016/MR016-059.pdf) (71) |
| 34.0570 | M R 66-35/36 | Compromise Subdivision — **already `documents/mr066-035`** | 3 | — |
| 34.0583 | M R 2-209/211 | L. A. Canal and Reservoir Company's Resubdivision of a portion of Hancock's Survey | 7 | [MR002-209](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR002/MR002-209.pdf) (318) |
| 34.0583 | M R 6-115 (Map 2110) | Subdivision of 35-acre Lot 1, Block 38 Hancock's Survey and part of Woolen Mill | 12 | [MR006-115](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-115.pdf) (74) |
| 34.0587 | M R 10-81 | Los Angeles Improvement Co's Subdivision of part of Lot 1, Block 38 Hancock's Survey | 3 | [MR010-081](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR010/MR010-081.pdf) (91) |
| 34.0601–64 | **M R 7-26/27** | **Park Tract** — the single biggest filing on the street | 44 | [MR007-026](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-026.pdf) (353) |
| 34.0602 | M R 2-108/111 | Hancock's Survey | 11 | [MR002-108](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR002/MR002-108.pdf) (641) |
| 34.0603–35 | **M R 5-69** | **Subdivision Map of Lot 8, Block 39 Hancock Survey** | 19 | [MR005-069](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-069.pdf) (72) |
| 34.0636 | M R 6-429 | Beauvoir Tract | 7 | [MR006-429](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-429.pdf) (30) |
| 34.0643 | M R 6-391 | Byram's Subdivision of a part of Lot 1, Block 39, Hancock's Survey | 5 | [MR006-391](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-391.pdf) (32) |
| 34.0650–75 | **M R 12-25** | **Blocks 23, 24 and 25, Angeleno Heights** | 13 | [MR012-025](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR012/MR012-025.pdf) (83) |
| 34.0670–81 | **M R 10-63/66** | **Angeleno Heights** | 14 | [MR010-063](https://pw.lacounty.gov/sur/nas/landrecords/misc/MR010/MR010-063.pdf) (469 — multi-sheet) |

### Map Book

| Map-Ref | Tract | Recorded | PDF (KB) |
|---|---|---|---|
| **M B 17-143** | **Boylston Heights Tract** (33 parcels) | 1911-04-22 | [TR0017-143B](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0017/TR0017-143B.pdf) (119) |
| M B 1-52 | Allison Barlow's Subdivision | 1901-12-03 | [TR0001-052](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0001/TR0001-052.pdf) (58) |
| M B 6-150 | Allison Barlow Tract | 1905-03-01 | [TR0006-150A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0006/TR0006-150A.pdf) (106) |
| — | Arthur G. Newton's (footprint only) | 1906-09-05 | [TR0010-175A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0010/TR0010-175A.pdf) (81) |
| M B 14-97 | TR 365 | 1909-01-04 | [TR0014-097B](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0014/TR0014-097B.pdf) (78) |
| M B 20-82/83 | TR 1644 | 1912-04-01 | [TR0020-082A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0020/TR0020-082A.pdf) (89) |
| M B 21-136 | TR 2059 | 1913-01-03 | [TR0021-136B](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0021/TR0021-136B.pdf) (94) |
| M B 22-117 | TR 1533 | 1913-05-23 | [TR0022-117A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0022/TR0022-117A.pdf) (76) |
| M B 35-92 | TR 3085 | 1918-03-07 | [TR0035-092](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0035/TR0035-092.pdf) (146) |
| M B 43-32 | TR 4071 | 1921-02-17 | [TR0043-032](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0043/TR0043-032.pdf) (166) |
| M B 63-98/99 | TR 3791 | 1923-02-16 | [TR0063-098](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0063/TR0063-098.pdf) (327) |
| M B 87-77/78 | TR 6797 | 1924-05-08 | [TR0087-077](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0087/TR0087-077.pdf) (187) |
| — | TR 6912 (footprint only) | 1924-06-03 | [TR0096-062](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0096/TR0096-062.pdf) (143) |
| — | TR 10152 (footprint only) | 1928-02-14 | [TR0146-041](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0146/TR0146-041.pdf) (296) |
| — | TR 9697 (footprint only) | 1939-09-28 | [TR0221-009](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0221/TR0221-009.pdf) (401) |
| — | TR 14297 (footprint only) | 1947-09-18 | [TR0309-019](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0309/TR0309-019.pdf) (274) |
| — | TR 14505 (footprint only) | 1951-10-02 | [TR0417-049](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0417/TR0417-049.pdf) (398) |
| M B 588-55 | TR 21497 | 1956-01-03 | [TR0588-055](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0588/TR0588-055.pdf) (557) |
| M B 713-93/94 | TR 26922 | 1963-12-06 | [TR0713-093](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0713/TR0713-093.pdf) (481) |

No URL on Boylston: `DM 42-409/410` (Subdivision of Lots 500–503 of the
Reservoir Lands, known as the Woolen Mill — **18 parcels**, so a real gap) and
`BK 76-75/76` (P M 3033).

## What to take first, batch 2

1. **M R 7-62/63, Beaudry Tract No. 2 east of Pearl St.** — closes Cleveland
   Street, which has been open since the category-tree pass.
2. **M R 2-526/527 Alanis Vineyard** and **M R 4-12/13 Aliso Tract** — 50
   parcels on Ducommun between them, and only the Ord Survey reaches that
   ground today.
3. **M R 7-26/27 Park Tract** (44 parcels) and **M B 17-143 Boylston Heights
   Tract** (33) — the two filings that carry most of Boylston.
4. **M R 10-77 Harvey Tract** — the only substantial survivor on Delong, where
   29 of 41 parcels are freeway right-of-way and nothing in the corpus reaches.
5. The Little Tokyo three need **nothing**; `mr003-146`, `mr010-008` and
   `tr0020-196b` already letter them. If the 2026-09-14 alignment worry is still
   live, `M R 6-308` (Alvarado Tract) is the one new sheet that might add an
   independent check on that ground.
