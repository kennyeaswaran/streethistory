# -*- coding: utf-8 -*-
"""Put the Orange/Wilshire ordinance numbers everywhere they will be wanted."""
import io, sys


def prepend_header(path, text):
    """Insert a block at the top of the file's leading comment."""
    s = io.open(path, encoding="utf-8").read()
    if not s.startswith("//"):
        sys.exit(path + ": does not open with a comment")
    if "ORDINANCE NUMBERS" in s:
        sys.exit(path + ": already has an ordinance block")
    io.open(path, "w", encoding="utf-8").write(text + s)
    print("patched", path)


def sub(path, pairs):
    s = io.open(path, encoding="utf-8").read()
    for old, new in pairs:
        if s.count(old) != 1:
            sys.exit("%s: %d matches for %r" % (path, s.count(old), old[:110]))
        s = s.replace(old, new, 1)
    io.open(path, "w", encoding="utf-8").write(s)
    print("patched", path)


BLOCK = """// ★★ ORDINANCE NUMBERS FOR THIS ARC, read off two plat annotations 2026-09-18 and
// recorded in every document of the arc so that whichever one you open, you have them:
//
//     ORD. 16790        Orange St. → Wilshire Blvd.   (~June 1908; the signs went up)
//     ORD. 16915 / 16916  the repeal; Orange restored (Dec. 1908)
//     ORD. 48435        Orange St. → Wilshire Blvd.   (April 1924; this one held)
//
// WHERE THEY COME FROM. The county recorder's copies of two plats carry the change as
// an annotation and then strike it off again: documents/mr005-566 (recorded 1889) and
// documents/mr055-014 (surveyed 1893) both show a cursive "Wilshire … Blvd." tagged
// "ORD 16790", every word struck through, with an unstruck "ord.16915" / "ord 16916"
// beside the surviving Orange. mr005-566 adds a clean later marginal note: "Orange St.
// changed to Wilshire Blvd. Ord. 48435".
//
// ⚠ WHICH NUMBER IS WHICH IS INFERRED FROM WHERE THE PEN STRUCK, not from the ordinance
// index — no source in this corpus dates any of the four. The newspapers below give the
// dates and no numbers; the plats give the numbers and no dates. The City Clerk's
// ordinance index would join them in one lookup (handbook/WANTED.md).
//
// ⚠ AND TWO NUMBERS FOR ONE REPEAL is unexplained: 16915 and 16916 are on different
// sheets covering adjacent stretches, so they may be consecutive ordinances for
// different segments rather than a single act.
//
// A CHANGE ROW orange-st-wilshire → wilshire is still unwritten and wants one of these
// ordinances as its document, not a newspaper report of it (handbook/RENAMING-SOURCES.md
// step 3: only the instrument may carry a change row).
//
"""

for d in ["lah-1908-07-14", "lah-1908-12-05",
          "laevex-1924-04-01", "lae-1924-04-04", "lae-1924-04-07", "lae-1924-04-12"]:
    prepend_header("documents/%s/%s.js" % (d, d), BLOCK)


# ── WANTED.md ───────────────────────────────────────────────────────────────
sub("handbook/WANTED.md", [
 ("""## P1 — Ordinance No. 4093 (N.S.), Ordinance Book IV p. 337""",
  """## P1 — Four ordinances by number: 16790, 16915/16916 and 48435 (Orange → Wilshire)

**Found as numbers 2026-09-18, off plat annotations. Never yet read as text.**

| Ordinance | What it should say | Status |
|---|---|---|
| **16790** | Orange Street, Figueroa to Alvarado → Wilshire Boulevard, ~June 1908 | struck off both plats after the repeal |
| **16915** and **16916** | the repeal; Orange restored, Dec. 1908 | unstruck on the plats, beside the surviving Orange |
| **48435** | Orange Street, Alvarado to Figueroa → Wilshire Boulevard, April 1924 | the one that held |

**What they unblock.** The change row `orange-st-wilshire` → `wilshire`, which is
still unwritten. Six newspaper documents report this renaming
(`lah-1908-07-14`, `lah-1908-12-05`, `laevex-1924-04-01`, `lae-1924-04-04`,
`lae-1924-04-07`, `lae-1924-04-12`) and **not one of them is the instrument** —
by RENAMING-SOURCES.md step 3, only the ordinance may carry the row. Ord. 48435
is the document that finally does it.

**Why this is unusually cheap.** We are not searching for an unknown document.
We have four numbers. The City Clerk's ordinance index turns them into dates and
Ordinance Book pages in one lookup, and the same lookup resolves the one thing
the plats cannot: **which number is which.** The assignment above is read off
where the pen struck, not from any index.

**Where to look.** Los Angeles City Archives & Records Center (Erwin Piper
Technical Center) — Ordinance Books, New Series. Same visit as Ordinance No.
4093 below.

⭐ **And the technique generalises**, which may matter more than these four
ordinances: **county plat copies carry ordinance numbers as marginal annotations**.
Where a newspaper gives a date and no number, the plat over that ground may give
the number. See handbook/RENAMING-SOURCES.md. Three more numbers were sitting on
the same two sheets unexamined — Kip Street established by **Ord. 36214**, a
portion of Kip Street vacated by **Ord. 46278** (both on `mr005-566`), and an
alley vacated by **Ord. 33107** with **Ord. 5347** beside it (on `mr055-014`).

## P1 — Ordinance No. 4093 (N.S.), Ordinance Book IV p. 337"""),
])


# ── RENAMING-SOURCES.md — the technique ─────────────────────────────────────
sub("handbook/RENAMING-SOURCES.md", [
 ("""## Step 1 — read the newspaper item for which stage it reports""",
  """## Step 0 — look at the plats over that ground first ⭐

Added 2026-09-18, after two plats handed over four ordinance numbers that six
newspaper articles had not mentioned once.

**County recorder's copies of plats are annotated, sometimes for decades after
recording, and the annotations cite ordinance numbers.** A renaming that touches
a platted block gets written onto the recorder's copy — and if the renaming is
later repealed, the annotation is *struck through* and a second number written
in. So a plat can tell you three things a newspaper cannot:

1. **The number of the instrument.** `documents/mr005-566` carries a clean
   marginal note, "Orange St. changed to Wilshire Blvd. Ord. 48435", and
   `documents/mr055-014` carries "ord 16916" beside a re-lettered Orange.
2. **Which of two competing accounts won**, because the loser is crossed out.
   Both those sheets show "Wilshire … Blvd." with "ORD 16790" struck through —
   the June 1908 change, cancelled after the December 1908 repeal.
3. **Vacations and establishments**, in the same hand: "Por. of Kip St. vacated
   Ord. 46278", "Name of Kip St. established Ord. 36214".

**So the order of work is:** identify the ground, list the plats the corpus
already holds over it, read their margins and their street labels at full size —
*then* go to the newspapers. It is free, it is offline, and the numbers it yields
turn an archive visit from a search into a retrieval.

⚠ **What a plat annotation does NOT give you is a date.** Which number is which
is read off where the pen struck; only the ordinance index confirms it. And ⚠ an
annotation is not the instrument — it still cannot carry a `change` row (step 3
below). It tells you what to ask for.

## Step 1 — read the newspaper item for which stage it reports"""),
])
