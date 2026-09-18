# -*- coding: utf-8 -*-
"""The 1889 transit map, and the notes that go with the 2026-09-17 late batch."""
import io, re, sys


def sub(path, pairs):
    s = io.open(path, encoding="utf-8").read()
    for old, new in pairs:
        if s.count(old) != 1:
            sys.exit("%s: %d matches for %r" % (path, s.count(old), old[:110]))
        s = s.replace(old, new, 1)
    io.open(path, "w", encoding="utf-8").write(s)
    print("patched", path)


MAP1889 = ('Map of Los Angeles Railway and Railroad circa 1889 — a published transit map, supplied with '
           'the Echo Park History thread, which glosses the streets of the two cable lines with their '
           'modern names: “Texas St. (Belmont Ave.)”, “Diamond St. (Beverly Blvd.)”, “Lake Shore Ave. '
           '(Glendale Blvd.)”, “Fort St. (Broadway)”, “San Fernando St. (N. Spring)”, “Downey Ave. '
           '(N. Broadway)”, “Pritchard St. (Lincoln Park Ave.)”',
           'https://www.facebook.com/groups/echoparkhistory/posts/1741372899282840/')

# ── diamond-street: the arbitration, with numbers ───────────────────────────
# ── IN-PERSON §3a: the correction ───────────────────────────────────────────
sub("handbook/IN-PERSON.md", [
 ('''## 3a. County map books — FIVE TITLE BLOCKS, and they are the best leads we have ⭐

Added 2026-09-17, after a 43-entity research batch in which the same answer
came back over and over: *the subdivider is not on the open web, and the sheet's
own title block would name him.* These are recorded filings — findable objects,
not searches — and each one would settle several entities at a stroke. The route
is **NavigateLA** (JavaScript-only, so a browser) or the County map books
directly.''',
  '''## 3a. ✔ MOSTLY CLOSED THE SAME DAY — and the lesson is embarrassing

This section was written on 2026-09-17 listing five title blocks as in-person
leads, on the reasoning that *the subdivider is not on the open web, and the
sheet's own title block would name him.* **Four of the five sheets were already
in `documents/` as PDFs**, and were read that afternoon in about ten minutes.
CLAUDE.md's own rule says it plainly — *"Downloads first: if a map is already in
`inbox/` or `documents/<id>/`, read it locally"* — and this section broke it.
**Check the folder before writing down a trip.**

What the four title blocks actually said is below. Read them before planning
anything: the pattern is that a title block gives the **surveyor** and the
person who **requested recording**, and not necessarily the person the tract is
named for.

| Sheet | What its title block gave |
|---|---|
| **Colina Park**, M.R. 7-36 | ★★★ **Six owners by name** — surveyed Nov. 1884 by **E. T. Wright**, recorded Nov. 28, 1885 "at request of **W. J. Bradshaw, Mrs M. A. Hoadley, J. W. Ellis, W. A. Boring, N. W. Stowell and H. C. Witmer**." Three are already in this corpus: Ellis is the subdivider of the 1886 sheets on the same ground, Witmer is `witmer-street`, Bradshaw is presumably "Kurts & Bradshaw's sub" of 1897. ⭐ **W. A. Boring** may be the architect William A. Boring, of Ellis Island — untested. ⚠ Says nothing about the Spanish street names. |
| **Bigelow Tract**, M.R. 24-81 | Recorded Oct. 14, 1887 "at request of **A. W. Francisco**" — Andrew Wiggins Francisco, already in this file as `francisco`. ⚠ Bigelow himself still unidentified. |
| **Clement Tract**, M.R. 17-41 | Surveyed May 1–6, 1887 by **John Goldsworthy Co. Sur.**, recorded May 25 "at request of **B. E. Day**" (initials cramped). ⚠ **No Clement.** |
| **Kennedy Tract**, M.R. 6-193 | Surveyed May 1884 by **E. T. Wright**, recorded Jan. 14, 1885 "at request of **E. W. Jones**". ⚠ **No Kennedy.** |
| **Truman Tract**, M.R. 5-405 | Surveyed June 1883 by **Geo. Butler Griffin C.E.**, re-arranged Jan. 1884 by **W. R. Blackman**, recorded "at request of **E. Bouton**". ★ It also letters its neighbours: **H. C. Sigler, Nichols, Jones, Mallard**. |

### What is still genuinely a map-book trip ⭐

Only one of the five, and it is the best of them anyway. The route is
**NavigateLA** (JavaScript-only, so a browser) or the County map books
directly.'''),

 ('''| Sheet | Would settle |
|---|---|
| **The A. Weill tract** ⭐⭐ | `weill` has no first name, an `extensive` empty search behind it, and a confirmed ZERO in Newmark. The Oct. 1888 committee names an "A. Weill tract" with a Cedar Street in it — so the man filed a subdivision, and its title block has his full name. Not the sheet Weill Street sits on; a sibling. |
| **Map of the Clement Tract**, M.R. 17-41 (1887) | ⭐ Six names, none identified: Anderson, Clementina, Grace, Myers, Rio, Shenandoah. No digitised copy exists in ANY reachable catalogue — not Calisphere, not LMU, not UCLA's tract-map index, not the OAC finding aid. The title block is the only route. |
| **Map of Colina Park**, M.R. 7-36 (1885) | ⭐ Twelve streets, a Spanish naming scheme nobody states, and an unnamed subdivider. SurveyLA dates the tract and says nothing more. |
| **Map of the Kennedy Tract**, M.R. 6-193 (1885) | Bryan, Holmes and Lincoln Place all come off this one sheet and Kennedy himself is untraced. Four entities, one title block. |
| **Subdivision of the Bigelow Tract**, M.R. 24-81 (1887) | Bigelow is untraced. ⚠ One unopened lead: a Calisphere record titled *"Bigelow, L. M. - Downtown Los Angeles parcel"* — robots-blocked, never seen, so "L. M. Bigelow" is a string from a search result and nothing more. |''',
  '''| Sheet | Would settle |
|---|---|
| **The A. Weill tract** ⭐⭐ | `weill` has no first name, an `extensive` empty search behind it, and a confirmed ZERO in Newmark. The Oct. 1888 committee names an "A. Weill tract" with a Cedar Street in it — so the man filed a subdivision, and its title block has his full name. **This is the one sheet of the five that is NOT already on disk.** Not the sheet Weill Street sits on; a sibling. |

### And seven names to run down, which is what the title blocks actually produced

None needs a library — they need a city directory, a census, or one good search:
**B. E. Day** (Clement Tract) · **E. W. Jones** (Kennedy Tract) · **E. Bouton**
(Truman Tract) · **W. A. Boring**, **N. W. Stowell**, **Mrs M. A. Hoadley**,
**W. J. Bradshaw** (Colina Park). Any one of them that turns out to be the
tract's principal settles a cluster of names at once.'''),

 # §4 — Guinn 1895 obtained
 ('''The companion piece is worth having if it is easy: **J. M. Guinn, "The Plan of
Old Los Angeles and the Story of Its Highways and Byways," Annual Publication
of the Historical Society of Southern California, Vol. III (1895)** — Guinn
refers readers to it for "the history of many of the old streets and the
changes in name", so it is the longer version of the 1912 paper.''',
  '''✔ **Guinn, "The Plan of Old Los Angeles and the Story of Its Highways and
Byways" (1895)** — Kenny obtained this 2026-09-17 too. It is now
`documents/guinn-1895`, and it turned out to be the more valuable of the two: it
prints **Ord's 1849 street names in both languages**, seventeen of them, with
four etymologies stated outright, and bounds Ord's survey (north First, east
Main, south Twelfth, west Pearl). **Nothing further needed at JSTOR.**'''),
])
