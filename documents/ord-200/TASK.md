# ord-200 — what is missing

**Two renamings, no rows.**

| clause | change | qualifier | why no row |
|---|---|---|---|
| Sec. 1 | Wilhart street → **Hayes street** | "in the Pioneer Building Association tract" | no `wilhart`, no `hayes` entity |
| Sec. 2 | Sumner street → **Walnut street** | "in the Pioneer Building Association tract" | no `sumner`, no `walnut` entity |

⚠ Two near-misses in `names.js` that must **not** be used:

- **`sumner-place`** is a place off Bellevue Avenue on the west side — Res. 480
  of this volume grades "Bellevue avenue, from Montreal street to Sumner place".
  It is not this Sumner Street.
- **`willow`, `spruce`, `tulip`, `palm-st-arts-district`** are the Arts District
  tree set. There is no Walnut among them and this Walnut is east of the river.

## What would unblock it

1. **Four entities** — Wilhart, Hayes, Sumner (Pioneer Building Association) and
   Walnut (Pioneer Building Association). Recommended in
   `documents/teed-1887/FINDINGS.md` §5.
2. **Geometry**: Hoff, Kuhrts and Chavez streets are outside the current `dtla`
   extract, so even a resolved extent would draw nothing today.
3. **The tract itself.** "Pioneer Building Association tract" is a searchable
   name; a recorded map under it would letter Wilhart and Sumner and fix the
   whole thing at once (handbook/TRACT-RESEARCH.md).

## Extents already in hand, for when the entities exist

- **Res. 408** (p. 495) — "Hayes street, from Hoff to Kuhrts street"
- **Res. 415** (p. 502) — "Walnut street, from Hoff street to Kuhrts street"
- GENERAL INDEX, Walnut street: grade at Hoff street, at Kuhrts street, at
  Chavez street, from Hoff street to Kuhrts street

Two parallel streets between the same pair of crosses — which is what the
Pioneer Building Association tract looks like from outside.
