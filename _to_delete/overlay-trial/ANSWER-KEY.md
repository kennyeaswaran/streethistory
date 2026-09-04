# ANSWER KEY — do NOT give this to the agents being tested

Ground truth from human alignment + lot-level verification (streets-data.js,
research-leads.md, 2026-07), CORRECTED after the first trial run: the
original key had two errors (sheet 3's tract misidentified as the Bliss
Tract; sheet 2's Crown Hill row matched by name — exactly the trap this
trial tests). Traps marked ★ — rows where name-continuity gives the WRONG
answer.

## Sheet 1: MR066-035 — Compromise Subdivision / "Washington Tract" (surv. Mar. 1894)

| label on scan | correct modern street | note |
|---|---|---|
| Bixel (St) | Bixel Street | unchanged name |
| Third St | **Miramar Street** | ★ NOT modern 3rd Street |
| Arnold St | **3rd Street** | ★ the reverse pairing |
| Figueroa (St) | **Boylston Street** | ★ old Figueroa (renamed De La Guerra → Boylston, 1897); NOT modern Figueroa |

## Sheet 2: TR0015-166a — "Crownwood," Witmer's Subdivision (surv. Nov. 1909)

| label on scan | correct modern street | note |
|---|---|---|
| W. 2nd (St) | 2nd Street | traced at 3 points, 4–16 m |
| Columbia Ave | Columbia Avenue | unchanged |
| Witmer (St) | Witmer Street | real jog; two OSM pieces |
| "W. 3rd … STREET" corridor annotated "Name establ. por. of 3rd St. Ord. 39,578" | **Miramar Street** | ★ NOT modern 3rd Street |
| Crown Hill Ave — first plat segment (E–W, two blocks) | **3rd Street** | ★ CORRECTED, and confirmed by Kenny 2026-07-10: the plat has TWO segments labeled Crown Hill Ave; this one corresponds to two blocks of modern 3rd Street. The original key said "Crown Hill Avenue" — a name-match error. |
| Crown Hill Ave — second plat segment (past the bend) | Crown Hill Avenue | one block of modern Crown Hill Ave (Kenny 2026-07-10; matches the batch-2 alignment finding, 3–20 m) |
| "AVENUE" (upper-left diagonal, by Lot A Belmont Grounds) | not pre-verified (candidate: Lucas Ave per the sheet's own F.B. note) | grade leniently |

## Sheet 3: MR011-042 — **The Goodwin Tract** (recorded Oct. 6, 1886)

(CORRECTED: previously mislabeled as the F.P. Howard/Bliss Tract, which is
M.R. **12**-42, a different map.)

| label on scan | correct modern street | note |
|---|---|---|
| Willow St | Willow Street | unchanged |
| Sixth St | 6th Street | unchanged |
| Mesquit (St) | Mesquit Street | unchanged |
| Tulip (St) | **Santa Fe Avenue** | ★ renamed 1887 for the railway (documented Imperial–Mesquit, south of 6th) |
| Palm (St) | **Imperial Street** | ★ renamed (date not researched) |
| Spruce (St) | not pre-verified | grade against the overlay |

## Sheet 4: MR059-060 — Thomas S. Ewing's Replat, Block B, Dunkelberger Tract (surv. Mar. 1896)

| label on scan | correct modern street | note |
|---|---|---|
| Tenth St | **Olympic Boulevard** | ★ CONFIRMED (Kenny, 2026-07-10): Olympic runs precisely down the CENTER of the drawn Tenth St corridor. It "looks distant" from the ink only because the plat draws the street wide — the corridor's center is far from both edge lines. Graders and agents alike misread this on the v1 all-red overlay; the single-street image makes it unmistakable. "No counterpart" is WRONG here; "10th Street" is the name trap. |
| Blaine (+ unnamed St at right edge) | Blaine Street | one line hugs both, bending with the block |
| Buckley St, Alley | not pre-verified | grade against the overlay |

## Corridor-width pitfall (added after v1 grading)

Plats draw streets as TWO parallel edge lines with the name lettered
between them. A correct modern centerline runs down the MIDDLE — far from
both edges on wide streets. Both the v1 agent and the original grader
misread "line not touching the ink" as "no match" on MR059-060's Tenth St.
v2's rules state this explicitly.

## v2 expected verdicts (single-street images, overlay-trial/v2/)

One image per modern street per sheet; the automatic in-sheet extents are
in each sheet folder's modern-extents.tsv. Known rows (others "not
pre-verified" — grade against the images yourself):

- **MR066-035**: 3rd Street → FULL, Arnold St corridor ★; Miramar Street →
  FULL, Third St corridor ★; Bixel Street → FULL, Bixel St; Boylston
  Street → FULL, Figueroa St corridor ★. Not pre-verified: 4th, Beaudry,
  Emerald, Huntley, 2nd, Emerald Dr (edge clippers likely CROSSING/NONE).
- **TR0015-166a**: 2nd Street → FULL, "W. 2nd"; Witmer Street → FULL,
  Witmer (with the real jog); Miramar Street → FULL, the "STREET"/"W. 3rd"
  corridor with the Ord. 39,578 note ★; 3rd Street → FULL/PARTIAL, first
  Crown Hill Ave plat segment (two blocks, E–W) ★; Crown Hill Avenue →
  PARTIAL, second Crown Hill Ave plat segment past the bend; Columbia
  Avenue → FULL, Columbia. Not pre-verified: Loma Drive.
- **MR011-042 (Goodwin Tract)**: Santa Fe Avenue → FULL, Tulip corridor ★;
  Imperial Street → FULL, Palm corridor ★; 6th Street → FULL, Sixth;
  Mesquit Street → FULL, Mesquit; Willow Street → FULL, Willow. Not
  pre-verified: Mateo (candidate for the unnamed east boundary), Conway
  Place, Spruce corridor's match, and the northern cluster (4th Pl, 4th,
  Palmetto, Molino, Jesse, Whittier, Industrial, 7th — mostly expected
  NONE, north of the tract).
- **MR059-060**: Olympic Boulevard → FULL, Tenth St corridor (center of
  the wide corridor) ★; Blaine Street → FULL, Blaine + the unnamed St at
  the right edge. Not pre-verified: 11th (candidate for Buckley?), Albany,
  Connecticut, Harbor Fwy.

## Scoring

Per row: correct / wrong-confident / honest-uncertain (right street among
named candidates at low confidence). The ★ rows are the signal — an agent
that gets unchanged names right but ★ rows wrong is name-matching, not
reading geometry. Also record: hallucinated labels, nearest-label-grabbing,
and diagonal-crosser acceptance.

## First result on record (Claude Sonnet agent, 2026-07-10)

See results-claude-sonnet.md. Summary: ~10/13 gradeable rows correct
including every ★ trap it answered (Third→Miramar, Arnold→3rd, Ord-stretch→
Miramar, Crown-Hill-bottom→3rd — the last two against the then-wrong key);
1 wrong-confident (Tulip→"Palmetto," a nearest-label grab at the end of a
long trace); honest-uncertain on Figueroa→Boylston and Palm→Imperial (named
the right candidates but wouldn't commit); sheet 4 Tenth read as "no
counterpart" (faithful to the overlay, missed the realignment reading).
Zero name-matching failures.
