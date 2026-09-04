# Trial result — Claude Sonnet agent, 2026-07-10

Conditions: agent received only INSTRUCTIONS.md + the 8 PNGs; barred from
the rest of the repo; used PIL cropping/zooming and pixel-level tracing
(connected components, skeletonization) on the red network. Verbatim final
report follows.

---

## Sheet 1: MR066-035 — "Compromise Subdivision" / Washington Tract (1894)

**Labels read on clean scan:** BIXEL ST, THIRD ST, an unlabeled "ST." (continuation of the Third St. edge past a bend), ARNOLD ST, FIGUEROA ST.

| label on scan | modern street | confidence | evidence |
|---|---|---|---|
| BIXEL ST | Bixel Street | high | Red line hugs the Bixel edge from its corner with Third St. down past the Arnold crossing, continuing on the same heading; the "Bixel Street" label sits on this same line just past that crossing. |
| THIRD ST (+ unlabeled "ST." continuation) | Miramar Street | medium-high | Red line hugs the Third St. edge tightly through its bend and the unlabeled continuation; the label sitting on this line beyond the block is **"Miramar Street," not "3rd Street"** — a clear name-matching trap. |
| ARNOLD ST | 3rd Street | medium | Red line tracks the Arnold edge closely for roughly its western two-thirds; a "3rd Street" label sits on the fitted continuation of that line, but the red coverage becomes patchy/breaks before reaching the Figueroa end, so full-length confirmation is incomplete. |
| FIGUEROA ST | no purple label visible in frame | medium (geometry only) | A line hugs the Figueroa edge tightly for its whole visible length, but it crosses through/near the "4th Street" and "Boylston St" labels without resting on either — no label confirms a name for this line within the image. |

## Sheet 2: TR0015-166a — "Crownwood" (1909)

**Labels read on clean scan:** "ST." (top, = 2nd St per the surveyor's note), "AVENUE" (unnamed on this instance of the label; per the note, likely Lucas Ave), WITMER, "STREET" (crossed out, with note **"Name establ. por. of 3rd St. Ord. 39,578"**), COLUMBIA/"Glumbia Ave.", CROWN HILL AVE.

| label on scan | modern street | confidence | evidence |
|---|---|---|---|
| "ST." (=2nd St, top edge) | 2nd St[reet] (label cut off at frame edge) | high | Red line hugs the top edge tightly; label sits directly on it before the line bends away north of the block. |
| "AVENUE" (likely Lucas Ave, unconfirmed) | no purple label visible in frame | medium (geometry only) | A line hugs this corridor tightly its whole length, bending to also match the "Lot A Belmont Grounds" diagonal — but no purple label appears on it. |
| WITMER | Witmer Street | high | Vertical red line hugs the Witmer edge; label sits right at its corner with the top street. |
| **STREET** (renamed by Ord. 39,578 to "3rd St.") | **Miramar Street** | medium-high | Red line hugs this edge tightly; the label on it reads "Miramar Street," **not** "3rd Street" — despite the map's own ordinance note naming it 3rd St. |
| COLUMBIA / "Glumbia Ave." | Columbia Avenue | high | Vertical line matches this corridor's whole visible length (both the upper and lower drawn segments); label sits at its crossing with the "STREET" corridor. |
| **CROWN HILL AVE** | **3rd Street** | medium-high | Red line tracks the Crown Hill Ave. corridor closely, continuing past its crossing with Witmer; "3rd Street" label sits right there — a second, more striking name trap (Crown Hill Ave., not the ordinance-named street, is what now carries the "3rd Street" name). |

**Ordinance note transcribed:** *"Name establ. por. of 3rd St. Ord. 39,578"* — applies to the horizontal "STREET" corridor pictured, which (per the geometry) is now Miramar Street, not 3rd Street.

## Sheet 3: MR011-042 — "The Goodwin Tract" (1886)

**Labels read on clean scan:** Willow...St, "St." (west boundary, unnamed there), Sixth...St, Spruce (same west corridor, named further south), Palm, Tulip, Mesquit, plus an unnamed east boundary.

| label on scan | modern street | confidence | evidence |
|---|---|---|---|
| Willow St | Willow Street | high | Direct tight hug along the whole top edge; label sits on it. |
| Sixth St | 6th Street | high | Direct tight hug along the whole middle edge; label sits on it. |
| Mesquit | Mesquit Street | high | Line hugs the Mesquit corridor (including its jog near the top) for its whole length; label sits directly below its south end. |
| Spruce (west boundary) | unclear — no confident single match | low | Line runs the corridor's length but its south end converges into a junction with Palm's line right where "Conway Place" sits; can't confirm Conway Place is Spruce's own name vs. a distinct cross-connector. |
| Palm | possibly Conway Place, or a distinct cross-street — unresolved | low | Same ambiguous junction as above; two candidate readings, not disambiguated by geometry alone. |
| Tulip | Palmetto Street | medium | A line continues Tulip's alignment north through Sixth St into the Willow block, reaching the "Palmetto Street" label above "Willow St"; south-end behavior not fully confirmed (an illegible second label overlaps "Imperial Street" near there). |
| (unnamed east boundary) | no confident match identified | low | "Imperial Street" and an illegible overlapping label sit near the south ends of Tulip/Mesquit's block; not cleanly resolved to this edge. |

The four labels clustered north of the tract (4th Place, Santa Fe Avenue, Molino Street, 4th Street) sit well north of "Willow St" with no drawn old corridor there — no match applies. No ordinance note on this sheet (only a recorder's certificate).

## Sheet 4: MR059-060 — Thomas S. Ewing's Replat, Block B, Dunkelberger Tr. (1896)

**Labels read on clean scan:** BUCKLEY ST., TENTH ST, unnamed "ST." (right edge), ALLEY, BLAINE.

| label on scan | modern street | confidence | evidence |
|---|---|---|---|
| TENTH ST | no modern counterpart visible | high (negative) | Only one red line crosses it, diagonally (labeled "Olympic," cut off) — a classic boulevard-cut, not a corridor track. |
| BUCKLEY ST. | no modern counterpart visible | high (negative) | Same diagonal "Olympic"-labeled line crosses it at an angle with a large, systematic offset from the drawn edge — not a match. |
| ALLEY | no modern counterpart visible | high | No red line follows this corridor at all. |
| unnamed "ST." (right edge) + BLAINE | Blaine Street | high | One continuous red line hugs both the unnamed edge and the Blaine edge tightly for their whole length (bending at the same corner the drawn edges bend); "Blaine Street" label sits on it. |

The "11th Street" label crosses near Blaine's label but its line runs the wrong direction to match Buckley or Tenth — left unmatched. No ordinance note on this sheet.

## Ambiguity notes (summary)

- **Sheets 1 and 2 both contain deliberate name-matching traps**: an old street literally named "Third/3rd St." (or explicitly renamed to "3rd St." by ordinance) is matched by geometry to modern **Miramar Street**, while a *different* old corridor (Arnold St. in sheet 1, Crown Hill Ave. in sheet 2) is what geometrically lines up with modern **3rd Street**. These were resolved by tracing the connected red-line pixels through skeletonization rather than trusting label proximity.
- Several corridors (Figueroa in sheet 1; Spruce/Palm/Tulip's south ends in sheet 3) have a confidently-matching red line but no cleanly-resting purple label in frame, or two candidate labels sitting at an ambiguous junction — these are marked low/medium confidence rather than guessed.
- On sheet 4, I distinguished a genuine corridor match (Blaine) from a diagonal "boulevard cut" (Olympic) crossing two other corridors without tracking them — per the instructions' explicit warning about this pattern.
- Where dilated/overlapping purple text could not be read cleanly even at 4-5x magnification (e.g., the second label overlapping "Imperial Street" in sheet 3), I left it untranscribed rather than guess.

---

## Grade (against the corrected key)

~10/13 gradeable rows correct, including EVERY ★ trap answered — two of
them (Crown-Hill-bottom→3rd; the Goodwin Tract identity) against the
original answer key, which the agent's geometry proved wrong. Errors:
Tulip→"Palmetto" (wrong-confident; a nearest-label grab at the end of a
long trace — the one documented pitfall it fell for). Honest-uncertain:
Figueroa→Boylston and Palm→Imperial (named the correct street among
candidates but wouldn't commit). Sheet 4 Tenth: "no counterpart" is
faithful to the overlay but misses the realignment reading (see key
caveat). Zero name-matching failures; zero hallucinated labels.
