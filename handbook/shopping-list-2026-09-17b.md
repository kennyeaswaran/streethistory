# Download shopping list — 2026-09-17b (north of the plaza, Traction, the southwest)

The corridors `node tools/check-legacy.js --verbose` still names grey and that
**neither the 09-15 list (Alameda to the river, 4th–7th Pl) nor the 09-17
list (Crown Hill / Figueroa–Bixel on 2nd–7th; east of Alameda on 2nd and 4th)
reached**, plus the two ordinance-assigned names Kenny wants a sheet for.
The parcel layers only answer from a browser (TRACT-RESEARCH.md, "Skip the UI
entirely"), and this session's browser pane would not open, so this list is
the **corridors and the query, ready to run**, plus everything the corpus
already knows about each target. Whoever runs it: paste the snippet at the
end into a NavigateLA console, then follow the 09-17 list's format (group by
`MAP_REF`, skip refs already in `documents/` — prefix-match, parked
`_` folders included — build the `misc/MR{bbb}/MR{bbb}-{ppp}.pdf` or
`tract/MB{bbbb}/TR{bbbb}-{ppp}{A|B}.pdf` URL, existence-check it).

## The corridors (±80 m along the grey ground)

| grey segment | centre (lat, lon) | band |
|---|---|---|
| Georgia Street — part of (discontinuous) | 34.04588, -118.26688 | 34.0391 → end |
| Traction Avenue — part of | 34.04679, -118.23793 | end → -118.2371 |
| Vignes Street — part of (discontinuous) | 34.05889, -118.23228 | 34.0529 → end |
| 8th Street — part of | 34.05132, -118.27083 | end → -118.2694 |
| 8th Street — beyond Francisco | 34.04927, -118.26381 | -118.2664 → -118.2627 |
| 8th Street — part of | 34.03123, -118.24043 | -118.2431 → end |
| 10th Street — part of | 34.03277, -118.24681 | -118.2486 → end |
| 17th Street — beyond Figueroa | 34.03658, -118.27111 | -118.2721 → -118.2708 |
| 17th Street — east of Hope (discontinuous) | 34.03417, -118.26546 | -118.2708 → end |
| James M Wood Boulevard — part of | 34.04978, -118.27081 | end → -118.2699 |
| James M Wood Boulevard — part of | 34.04742, -118.26561 | -118.2669 → -118.2646 |
| Ord Street — beyond Spring | 34.05957, -118.23715 | -118.2379 → end |
| Cesar E Chavez Avenue — part of | 34.06015, -118.24313 | -118.2435 → -118.2428 |
| Cesar E Chavez Avenue — beyond Broadway | 34.05865, -118.24040 | -118.241 → -118.2402 |
| Cesar E Chavez Avenue — beyond Lyon | 34.05788, -118.23636 | -118.239 → -118.2309 |
| Cesar E Chavez Avenue — part of | 34.05507, -118.22741 | -118.2305 → end |

Three of these are not sheet problems:
- **8th Street "part of" at 34.0312** and the south end of **10th** sit on
  the neighbourhood's southern edge (`s: 34.033`) — the same bbox issue the
  09-17 list flagged for Olympic east of Central. Widen the bbox before
  spending a download on them.
- **Willow, Jesse and 7th Place "east of Mission Rd"** are across the river
  — Boyle Heights, deferred until after the changeover; accept.
- **Vignes "part of (discontinuous)"** at 34.0589 is the northern stub by the
  rail yards; the 09-17 sweep's `M R 24-81` Bigelow Tract reaches the
  southern Vignes only.

## What the corpus already knows, per target

**Walters Street (→ Ord Street).** Not a tract name: **High Street was renamed
Walters Street by an ordinance adopted Sept. 1886** (`lah-1886-09-21`,
excerpt `high-walters`), and the Oct. 1890 renaming ordinance turned
"Walters street to Ord street" (`lah-1890-10-28`) — the ordinance Mayor
Hazard returned unsigned (`lah-1890-11-09`, `-11-11`); whether it was
passed over the veto is proceedings work. So a sheet lettering WALTERS is one
**recorded 1886–1890 on Ord Street east of Spring** (the grey stretch). Both
Herald items are `news-report` documents and may carry the change rows
(`high-street-chinatown → walters-street` 1886; `walters-street →
ord-street` 1890) once a `walters-street` entity exists — that is the
cheaper route to the name, and the sheet then confirms it.

**Stephenson Avenue (→ Traction Avenue).** Likewise assigned, not platted:
the same Oct. 1890 ordinance made "**Second street, from Alameda to east city
line**, … Stephenson avenue" (`lah-1890-10-28`). Traction's grey stretch
(centre 34.04679, −118.23793) is that ground. A sheet lettering STEPHENSON
would be **post-1890** — and only if the ordinance survived the veto; the
1894 Sanborn would settle that in one look when the serial sources come in.
Until then the two Herald items carry it as a change row with the veto in
its note.

**Cesar E Chavez Avenue (Macy Street).** Four grey stretches from Broadway to
the river. `lah-1908-10-27` mentions Macy (rows 0). The founding plats north
of the plaza are Misc Records; the corridor query is the way in. Note the
westernmost stub is the legacy's unconfirmed Calle Corta guess (research-leads).

**Ord Street beyond Spring** — the Walters stretch above; one corridor serves
both.

**Georgia Street.** 10 % attested; the one grey corridor runs 34.0447–34.0470
along −118.267. The corpus has fifteen Herald items and eight sheets that
*mention* Georgia (the two Georgias, ord-4093) but none letters this ground.
The 09-17 sweep's corridors stopped at 8th; this is 9th–Olympic west of
Figueroa.

**8th "beyond Francisco", James M Wood (both stretches), 10th "part of".** The
same southwest hole, 8th to 10th west of Figueroa to the bbox edge. One
legacy citation is not yet in the corpus and is a known sheet on this ground:
**M.R. 59-60, Thomas S. Ewing's Replat of part of Block B, Dunkelberger
Tract (surveyed Mar. 1896)** — letters "Tenth St" a block west of the
M.R. 3-32/33 Williams subdivision. URL by the pattern,
`https://pw.lacounty.gov/sur/nas/landrecords/misc/MR059/MR059-060.pdf`
(**not existence-checked** — the fetch tool needed an approval this session
did not get).

**17th Street.** "beyond Figueroa" (34.0366, −118.2711) and "east of Hope"
(34.0342, −118.2655). South-west corner of the neighbourhood, Pico-Union
edge; nothing in the corpus reaches it.


## Results, part 1 — the Map Book half (run 2026-09-18 from Chrome)

The City parcel layer (`maps.lacity.org`, the one that reports Misc Records
refs) was **down — 502 through NavigateLA's own proxy as well**, which is
also what Kenny's console attempt hit (a 502 carries no CORS header, so the
browser reports it as a CORS failure). The County's tract-footprint layer
answered, so this is the **Map Book** half: every recorded tract filing whose
footprint touches a corridor, with the page-letter suffix and the recording
year; one already held (`tr0926-086`) skipped. **The Misc Records half —
the 1870s–90s founding plats, which is where the names in question live — is
still to run**: the snippet below works unchanged once the City service is
back, and its output is what completes this list.

URLs are built by the standard pattern and **not existence-checked**:
`pw.lacounty.gov` refuses cross-origin requests, and the fetch tool wants an
approval per URL. A 404 on a lettered page means the filing is under the
other letter; try it.

**Pre-1930 filings (53) — the ones that can letter a pre-1900 name:**

| Map-Ref | Filing | Recorded | Corridor(s) | PDF |
|---|---|---|---|---|
| TR0001-037 | MALLARD HOME TRACT | 1901 | 8th Street; James M Wood Boulevard | [TR0001-037](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0001/TR0001-037.pdf) |
| TR0001-038A | R W POINDEXTER SUB | 1901 | James M Wood Boulevard | [TR0001-038A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0001/TR0001-038A.pdf) |
| TR0001-056A | WILLARD TRACT | 1901 | James M Wood Boulevard | [TR0001-056A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0001/TR0001-056A.pdf) |
| TR0002-008B | HAMPTONS SUB | 1902 | 8th Street (south edge) | [TR0002-008B](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0002/TR0002-008B.pdf) |
| TR0002-033A | WILLIS TRACT | 1902 | 8th Street (south edge) | [TR0002-033A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0002/TR0002-033A.pdf) |
| TR0002-062A | NIEMEYER ESTATE | 1902 | 10th Street | [TR0002-062A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0002/TR0002-062A.pdf) |
| TR0004-010A | POINDEXTER TRACT | 1903 | 8th Street (south edge) | [TR0004-010A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0004/TR0004-010A.pdf) |
| TR0005-042B | E. M. CROWS REPLAT OF BLOCK 6 | 1904 | 8th Street | [TR0005-042B](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0005/TR0005-042B.pdf) |
| TR0005-065 | E. N. FLETCHER TRACT | 1904 | 10th Street | [TR0005-065](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0005/TR0005-065.pdf) |
| TR0006-051A | AGNES L. CLINE TRACT | 1904 | Cesar E Chavez Avenue (east) | [TR0006-051A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0006/TR0006-051A.pdf) |
| TR0009-085 | PIERRE NICOLAS LOT | 1906 | Ord Street | [TR0009-085](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0009/TR0009-085.pdf) |
| TR0010-055 | MAIN–SAN FERNANDO ST. TRACT | 1906 | Ord Street; Cesar E Chavez Avenue | [TR0010-055](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0010/TR0010-055.pdf) |
| TR0012-088A | CATHEDRAL PROPERTY | 1907 | 8th Street; James M Wood Boulevard | [TR0012-088A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0012/TR0012-088A.pdf) |
| TR0013-008 | TR 54 | 1907 | 8th Street | [TR0013-008](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0013/TR0013-008.pdf) |
| TR0013-060 | KAHN TRACT | 1907 | Cesar E Chavez Avenue (east) | [TR0013-060](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0013/TR0013-060.pdf) |
| TR0013-123 | TR 166 | 1908 | Ord Street | [TR0013-123](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0013/TR0013-123.pdf) |
| TR0014-013B | TR 235 | 1908 | 8th Street | [TR0014-013B](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0014/TR0014-013B.pdf) |
| TR0014-033 | TR 49 | 1908 | Ord Street | [TR0014-033](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0014/TR0014-033.pdf) |
| TR0014-200A | OIL WELL SUPPLY COMPANY TRACT | 1909 | Vignes Street; Cesar E Chavez Avenue | [TR0014-200A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0014/TR0014-200A.pdf) |
| TR0015-037A | TONONI MAIN AND OLVERA STREET TRACT | 1909 | Cesar E Chavez Avenue | [TR0015-037A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-037A.pdf) |
| TR0015-086B | TR 548 | 1909 | Vignes Street; Cesar E Chavez Avenue | [TR0015-086B](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-086B.pdf) |
| TR0015-161B | TR 680 | 1910 | Cesar E Chavez Avenue (east) | [TR0015-161B](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-161B.pdf) |
| TR0015-168B | TR 183 | 1910 | Vignes Street | [TR0015-168B](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-168B.pdf) |
| TR0015-188 | TR 766 | 1910 | Vignes Street | [TR0015-188](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-188.pdf) |
| TR0016-089 | TR 841 | 1910 | 17th Street | [TR0016-089](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0016/TR0016-089.pdf) |
| TR0016-125A | TR 878 | 1910 | 10th Street | [TR0016-125A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0016/TR0016-125A.pdf) |
| TR0016-128B | BRIQUET TRACT | 1910 | Cesar E Chavez Avenue (east) | [TR0016-128B](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0016/TR0016-128B.pdf) |
| TR0016-141B | TR 922 | 1910 | Vignes Street | [TR0016-141B](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0016/TR0016-141B.pdf) |
| TR0017-006A | TR 975 | 1910 | 10th Street | [TR0017-006A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0017/TR0017-006A.pdf) |
| TR0017-121A | TR 1161 | 1911 | 8th Street | [TR0017-121A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0017/TR0017-121A.pdf) |
| TR0018-017B | TR 1148 | 1911 | 17th Street | [TR0018-017B](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0018/TR0018-017B.pdf) |
| TR0018-024B | TR 1151 | 1911 | 17th Street | [TR0018-024B](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0018/TR0018-024B.pdf) |
| TR0018-181B | TR 1300 | 1911 | Vignes Street | [TR0018-181B](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0018/TR0018-181B.pdf) |
| TR0020-132A | TR 1413 | 1912 | James M Wood Boulevard | [TR0020-132A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0020/TR0020-132A.pdf) |
| TR0021-105A | TR 1555 | 1912 | Cesar E Chavez Avenue | [TR0021-105A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0021/TR0021-105A.pdf) |
| TR0021-138A | TR 1996 | 1912 | 17th Street | [TR0021-138A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0021/TR0021-138A.pdf) |
| TR0021-144A | TR 2097 | 1913 | Traction Avenue | [TR0021-144A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0021/TR0021-144A.pdf) |
| TR0023-058A | TR 2343 | 1913 | 17th Street | [TR0023-058A](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0023/TR0023-058A.pdf) |
| TR0030-057 | TR 2934 | 1915 | 17th Street | [TR0030-057](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0030/TR0030-057.pdf) |
| TR0031-024 | TR 3061 | 1916 | Cesar E Chavez Avenue (east) | [TR0031-024](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0031/TR0031-024.pdf) |
| TR0029-058 | TR 2520 | 1916 | Ord Street | [TR0029-058](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0029/TR0029-058.pdf) |
| TR0032-042 | TR 2497 | 1916 | 8th Street (south edge) | [TR0032-042](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0032/TR0032-042.pdf) |
| TR0035-023 | TR 2624 | 1917 | 17th Street | [TR0035-023](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0035/TR0035-023.pdf) |
| TR0035-050 | TR 2951 | 1917 | Vignes Street | [TR0035-050](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0035/TR0035-050.pdf) |
| TR0034-041 | TR 2913 | 1918 | 17th Street | [TR0034-041](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0034/TR0034-041.pdf) |
| TR0039-006 | TR 3600 | 1920 | 17th Street | [TR0039-006](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0039/TR0039-006.pdf) |
| TR0043-059 | TR 4088 | 1921 | 17th Street | [TR0043-059](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0043/TR0043-059.pdf) |
| TR0049-078 | TR 4629 | 1921 | Cesar E Chavez Avenue | [TR0049-078](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0049/TR0049-078.pdf) |
| TR0058-004 | TR 5431 | 1922 | 10th Street | [TR0058-004](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0058/TR0058-004.pdf) |
| TR0082-050 | TR 8036 | 1924 | 8th Street | [TR0082-050](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0082/TR0082-050.pdf) |
| TR0130-049 | TR 9356 | 1926 | Cesar E Chavez Avenue (east) | [TR0130-049](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0130/TR0130-049.pdf) |
| TR0147-027 | TR 9520 | 1928 | Cesar E Chavez Avenue (east) | [TR0147-027](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0147/TR0147-027.pdf) |
| TR0157-045 | TR 10151 | 1929 | Vignes Street; Cesar E Chavez Avenue | [TR0157-045](https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0157/TR0157-045.pdf) |

Three of these are worth flagging. **TR0021-144A, TR 2097 (1913), Traction
Avenue** is the one sheet on the Stephenson corridor between the 1890
omnibus and Kines's 1915 Stephenson → Traction: if any sheet letters
STEPHENSON, it is this one. **TR0009-085 (Pierre Nicolas lot, 1906),
TR0014-033 (1908) and TR0029-058 (1916)** are on Ord Street beyond Spring —
post-1891, so they will say ORD, the other end of the Walters bracket.
~~**TR0015-037A, Tononi Main and Olvera Street tract (1909)** sits on the
Chavez/Macy corridor at the plaza and will letter MACY.~~ **Checked by Kenny
2026-09-18: it letters only Main and Olvera.** A footprint touching a corridor
is not a sheet lettering the street — the flags in this section are guesses
from the layer's footprint and recording date, nothing more, and the other
two flags above should be read the same way until someone opens the PDF.

**1931–1944 (8), and the modern tail:** TR0176-040 TR 10418 (1931, Chavez) · TR0180-029 TR 8781 (1932, Chavez) · TR0181-016 TR 8540 (1932, 8th; Wood) · TR0206-042 TR 11190 (1938, Chavez) · TR0236-050 TR 12390 (1941, 8th) · TR0244-034 TR 11667 (1941, Vignes) · TR0255-042 TR 11915 (1943, Chavez) · TR0261-009 TR 11515 (1944, Vignes; Chavez) · then 1961–2019: TR0667-055, TR0720-024, TR0791-019, TR0814-066, TR0850-070, TR1034-052, TR1042-048, TR1098-083, TR1236-098, TR1241-027, TR1287-039, TR1312-005, TR1312-052, TR1313-062, TR1321-006, TR1325-007, TR1332-024, TR1386-029, TR1392-084, TR1412-027 (Georgia, Traction, Vignes, 8th, Chavez, Wood, 17th — modern replats and condo tracts, useful only for a `built`/`absent` date).

## The query

```js
// Paste into the DevTools console on any https://navigatela.lacity.org/ page
// (the PIN report is a light one). Runs one corridor at a time; ~2 s each.
const CORRIDORS = [
  {name:"Georgia Street — part of (discontinuous)", ring:[[-118.26885,34.04452],[-118.26873,34.04469],[-118.26822,34.04545],[-118.26815,34.04556],[-118.26802,34.04576],[-118.26771,34.04616],[-118.26755,34.04634],[-118.26747,34.04641],[-118.26738,34.04652],[-118.26726,34.04671],[-118.2671,34.04696],[-118.26671,34.04755],[-118.26652,34.04783],[-118.265,34.04714],[-118.26519,34.04686],[-118.26557,34.04627],[-118.26574,34.04602],[-118.26588,34.04579],[-118.26607,34.04555],[-118.26621,34.04543],[-118.26626,34.04537],[-118.26653,34.04501],[-118.26664,34.04485],[-118.2667,34.04476],[-118.26721,34.044],[-118.26734,34.04381],[-118.26885,34.04452]]},
  {name:"Traction Avenue — part of", ring:[[-118.23789,34.04753],[-118.23772,34.0475],[-118.23749,34.04741],[-118.23734,34.04733],[-118.23662,34.04686],[-118.2377,34.04573],[-118.23842,34.0462],[-118.23837,34.04617],[-118.2382,34.04611],[-118.23832,34.04614],[-118.23789,34.04753]]},
  {name:"Vignes Street — part of (discontinuous)", ring:[[-118.23388,34.05309],[-118.23286,34.05619],[-118.23264,34.05696],[-118.23263,34.05735],[-118.23269,34.05769],[-118.23276,34.05801],[-118.23288,34.0583],[-118.23296,34.05843],[-118.23387,34.05927],[-118.23435,34.05964],[-118.23495,34.06021],[-118.23475,34.06019],[-118.23525,34.0605],[-118.23569,34.06073],[-118.23476,34.06195],[-118.23423,34.06167],[-118.23343,34.06113],[-118.23345,34.06093],[-118.23311,34.06065],[-118.23262,34.06026],[-118.23161,34.05934],[-118.23128,34.05887],[-118.23108,34.05837],[-118.23098,34.05792],[-118.2309,34.05741],[-118.23093,34.05674],[-118.23118,34.05582],[-118.2322,34.05271],[-118.23388,34.05309]]},
  {name:"8th Street — part of", ring:[[-118.27178,34.05295],[-118.27147,34.05282],[-118.27117,34.05269],[-118.2707,34.05248],[-118.27046,34.05233],[-118.27024,34.05208],[-118.27013,34.05184],[-118.27007,34.0517],[-118.27002,34.05157],[-118.27,34.05152],[-118.26987,34.05137],[-118.26976,34.05133],[-118.2696,34.05126],[-118.26952,34.05123],[-118.26924,34.0511],[-118.26964,34.05047],[-118.26964,34.05047],[-118.27004,34.04983],[-118.27032,34.04995],[-118.27039,34.04998],[-118.27064,34.05009],[-118.27107,34.05033],[-118.27146,34.05074],[-118.27165,34.05107],[-118.27171,34.05125],[-118.27175,34.05132],[-118.27181,34.05145],[-118.27169,34.05131],[-118.27157,34.05123],[-118.272,34.05143],[-118.27227,34.05154],[-118.27258,34.05168],[-118.27178,34.05295]]},
  {name:"8th Street — beyond Francisco", ring:[[-118.26632,34.05045],[-118.266,34.05046],[-118.26564,34.05044],[-118.2653,34.05039],[-118.26489,34.0503],[-118.26475,34.05027],[-118.26443,34.05021],[-118.26412,34.05014],[-118.2637,34.05002],[-118.26344,34.04992],[-118.26335,34.04988],[-118.26308,34.04977],[-118.26288,34.04968],[-118.2627,34.04959],[-118.26246,34.04945],[-118.26242,34.04943],[-118.26226,34.04934],[-118.26274,34.04874],[-118.26274,34.04874],[-118.26321,34.04814],[-118.26338,34.04823],[-118.26347,34.04828],[-118.26367,34.0484],[-118.26372,34.04842],[-118.26387,34.04849],[-118.26412,34.04859],[-118.26418,34.04862],[-118.26433,34.04868],[-118.26464,34.04877],[-118.26485,34.04881],[-118.26517,34.04887],[-118.26533,34.04891],[-118.26568,34.04898],[-118.26585,34.04901],[-118.26601,34.04902],[-118.26624,34.04901],[-118.26632,34.05045]]},
  {name:"8th Street — part of", ring:[[-118.24227,34.03376],[-118.24216,34.03368],[-118.24115,34.03285],[-118.241,34.03273],[-118.23981,34.03174],[-118.23908,34.03112],[-118.23889,34.03095],[-118.23896,34.03101],[-118.24005,34.02989],[-118.24014,34.02996],[-118.24032,34.03011],[-118.24105,34.03073],[-118.24223,34.03171],[-118.24237,34.03183],[-118.24338,34.03266],[-118.24336,34.03264],[-118.24227,34.03376]]},
  {name:"10th Street — part of", ring:[[-118.24746,34.03394],[-118.24681,34.03361],[-118.24679,34.0336],[-118.24665,34.03353],[-118.24649,34.03345],[-118.24636,34.03338],[-118.24616,34.03328],[-118.24573,34.03306],[-118.2441,34.03216],[-118.24399,34.0321],[-118.24496,34.0309],[-118.24507,34.03096],[-118.24668,34.03186],[-118.24707,34.03205],[-118.24727,34.03215],[-118.24739,34.03222],[-118.24756,34.0323],[-118.2477,34.03237],[-118.24772,34.03238],[-118.24836,34.03271],[-118.24746,34.03394]]},
  {name:"17th Street — beyond Figueroa", ring:[[-118.27143,34.03754],[-118.27103,34.03736],[-118.27069,34.03721],[-118.27069,34.03721],[-118.27044,34.0371],[-118.27127,34.03583],[-118.27153,34.03595],[-118.27153,34.03595],[-118.27186,34.0361],[-118.27226,34.03628],[-118.27143,34.03754]]},
  {name:"17th Street — east of Hope (discontinuous)", ring:[[-118.27048,34.0371],[-118.26771,34.0363],[-118.26735,34.036],[-118.26658,34.03564],[-118.26638,34.03554],[-118.26629,34.0355],[-118.26552,34.03508],[-118.26539,34.03501],[-118.26498,34.03477],[-118.26465,34.0346],[-118.26454,34.03454],[-118.26428,34.03439],[-118.26392,34.03417],[-118.26374,34.03407],[-118.26367,34.03402],[-118.26298,34.03362],[-118.26267,34.03345],[-118.26365,34.03226],[-118.26397,34.03244],[-118.26467,34.03285],[-118.26475,34.0329],[-118.26493,34.033],[-118.26529,34.03321],[-118.26554,34.03336],[-118.26556,34.03338],[-118.26594,34.03357],[-118.26639,34.03383],[-118.26647,34.03388],[-118.26723,34.03429],[-118.26729,34.03432],[-118.26745,34.0344],[-118.26837,34.03483],[-118.26837,34.03497],[-118.27105,34.03574],[-118.27048,34.0371]]},
  {name:"James M Wood Boulevard — part of", ring:[[-118.27237,34.0513],[-118.27229,34.05127],[-118.27189,34.05109],[-118.2718,34.05105],[-118.27155,34.05094],[-118.27101,34.05069],[-118.27092,34.05065],[-118.27039,34.05041],[-118.27039,34.05041],[-118.2701,34.05028],[-118.2701,34.05028],[-118.26964,34.05007],[-118.26966,34.05008],[-118.26953,34.05002],[-118.26994,34.04939],[-118.26994,34.04939],[-118.27034,34.04875],[-118.27047,34.0488],[-118.27048,34.04881],[-118.27094,34.04902],[-118.27094,34.04902],[-118.27122,34.04915],[-118.27122,34.04915],[-118.27176,34.04939],[-118.27183,34.04943],[-118.27238,34.04967],[-118.27263,34.04978],[-118.2727,34.04981],[-118.27311,34.05],[-118.27318,34.05003],[-118.27237,34.0513]]},
  {name:"James M Wood Boulevard — part of", ring:[[-118.26629,34.04769],[-118.26594,34.04834],[-118.26549,34.04818],[-118.26541,34.04815],[-118.26534,34.04812],[-118.26529,34.0481],[-118.26519,34.04805],[-118.26519,34.04805],[-118.26506,34.04799],[-118.26506,34.04799],[-118.265,34.04796],[-118.26491,34.04792],[-118.26429,34.04764],[-118.26471,34.04701],[-118.26471,34.04701],[-118.26513,34.04638],[-118.26575,34.04666],[-118.26584,34.0467],[-118.2659,34.04673],[-118.2659,34.04673],[-118.26603,34.04679],[-118.26603,34.04679],[-118.26613,34.04683],[-118.26618,34.04686],[-118.26612,34.04683],[-118.2662,34.04686],[-118.26665,34.04703],[-118.26629,34.04769],[-118.26629,34.04769]]},
  {name:"Ord Street — beyond Spring", ring:[[-118.23748,34.06047],[-118.23712,34.06034],[-118.23701,34.0603],[-118.23683,34.06024],[-118.23679,34.06022],[-118.23681,34.06023],[-118.23661,34.06016],[-118.23647,34.06012],[-118.23711,34.05878],[-118.23727,34.05883],[-118.23748,34.05891],[-118.23751,34.05891],[-118.2375,34.05891],[-118.23768,34.05897],[-118.23782,34.05902],[-118.23818,34.05916],[-118.23748,34.06047]]},
  {name:"Cesar E Chavez Avenue — part of", ring:[[-118.24347,34.06035],[-118.24296,34.06093],[-118.24273,34.06079],[-118.24275,34.0608],[-118.24263,34.06074],[-118.24264,34.06074],[-118.24243,34.06062],[-118.24292,34.06003],[-118.24292,34.06003],[-118.24342,34.05944],[-118.24362,34.05955],[-118.24362,34.05955],[-118.24373,34.05962],[-118.24375,34.05963],[-118.24398,34.05977],[-118.24347,34.06035],[-118.24347,34.06035]]},
  {name:"Cesar E Chavez Avenue — beyond Broadway", ring:[[-118.24088,34.05891],[-118.24039,34.0595],[-118.24027,34.05943],[-118.24029,34.05944],[-118.23994,34.05926],[-118.23991,34.05924],[-118.23977,34.05917],[-118.24022,34.05856],[-118.24022,34.05856],[-118.24068,34.05795],[-118.24082,34.05802],[-118.24086,34.05804],[-118.24122,34.05823],[-118.24125,34.05824],[-118.24138,34.05831],[-118.24088,34.05891],[-118.24088,34.05891]]},
  {name:"Cesar E Chavez Avenue — beyond Lyon", ring:[[-118.23899,34.05895],[-118.23873,34.05895],[-118.23801,34.05898],[-118.23757,34.05896],[-118.2371,34.05885],[-118.23682,34.05878],[-118.23661,34.05872],[-118.23607,34.05856],[-118.23448,34.05811],[-118.2329,34.05765],[-118.23248,34.05753],[-118.23242,34.05752],[-118.23155,34.05727],[-118.23063,34.057],[-118.23092,34.05632],[-118.23092,34.05632],[-118.23121,34.05564],[-118.23212,34.05591],[-118.23298,34.05615],[-118.23304,34.05617],[-118.23347,34.05629],[-118.23505,34.05675],[-118.23664,34.0572],[-118.23719,34.05736],[-118.23734,34.05741],[-118.23759,34.05747],[-118.23788,34.05754],[-118.23798,34.05754],[-118.23867,34.05751],[-118.23895,34.05751],[-118.23899,34.05895]]},
  {name:"Cesar E Chavez Avenue — part of", ring:[[-118.23034,34.05612],[-118.23001,34.05679],[-118.22943,34.05659],[-118.22919,34.05651],[-118.22917,34.05651],[-118.22802,34.05609],[-118.22802,34.05609],[-118.22739,34.05586],[-118.22701,34.05571],[-118.22642,34.05545],[-118.2257,34.05513],[-118.2257,34.05513],[-118.22536,34.05497],[-118.22536,34.05498],[-118.22471,34.05469],[-118.22458,34.05463],[-118.22539,34.05336],[-118.22552,34.05342],[-118.22618,34.0537],[-118.22618,34.05371],[-118.22653,34.05386],[-118.22653,34.05386],[-118.22724,34.05418],[-118.2278,34.05443],[-118.22811,34.05455],[-118.22872,34.05477],[-118.22872,34.05477],[-118.22986,34.05519],[-118.22984,34.05518],[-118.23009,34.05526],[-118.23066,34.05545],[-118.23034,34.05612],[-118.23034,34.05612]]}
];
const out = {};
for (const c of CORRIDORS) {
  const body = new URLSearchParams({ f: "json",
    geometry: JSON.stringify({ rings: [c.ring], spatialReference: { wkid: 4326 } }),
    geometryType: "esriGeometryPolygon", inSR: "4326", spatialRel: "esriSpatialRelIntersects",
    outFields: "TRACT,MAP_REF", returnGeometry: "false", resultRecordCount: "3000" });
  const j = await (await fetch("https://maps.lacity.org/arcgis/rest/services/Core/Master_landbase/MapServer/2/query", { method: "POST", body })).json();
  const c2 = {}; for (const f of j.features || []) { const k = (f.attributes.MAP_REF || "?") + " | " + (f.attributes.TRACT || "?"); c2[k] = (c2[k] || 0) + 1; }
  out[c.name] = { parcels: (j.features || []).length, exceeded: j.exceededTransferLimit, error: j.error, refs: c2 };
  console.log(c.name, out[c.name]);
}
copy(JSON.stringify(out, null, 1)); // → clipboard

```

Then, for each new Map-Ref, layer 8 gives the suffix and recording date:
`https://dpw.gis.lacounty.gov/dpw/rest/services/landrecords_mapviewer/MapServer/8/query?f=json&where=REFERENCE+LIKE+'TR0014-129%25'&outFields=REFERENCE,SUB_NAME,RCRD_DATE`
(CORS-open; Misc Records refs are not in it — construct those URLs directly).
