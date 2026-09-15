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
   no entity in names.js or names-new.js**, and the only Wilde the project holds
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
   Note `kohler` in names.js carries a ⚠ about **two** Kohler Streets — the
   original running where 9th Street now runs — so a third Fisher sheet is worth
   reading against that.
