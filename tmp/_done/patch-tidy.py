# -*- coding: utf-8 -*-
"""Fix the paths and provenance notes that the 2026-09-17 tidy-up made stale."""
import io, sys

def edit(path, pairs):
    s = io.open(path, encoding="utf-8").read()
    for old, new in pairs:
        n = s.count(old)
        if n != 1:
            sys.exit("%s: %d matches for %r" % (path, n, old[:90]))
        s = s.replace(old, new, 1)
    io.open(path, "w", encoding="utf-8").write(s)
    print("patched", path)


# ───────────────────────────────────────────────────────────────── CLAUDE.md
edit("CLAUDE.md", [
 ("""  inbox/                        raw downloads not yet made into documents
  generated/  legacy/           generator output; the frozen pre-model data
  attic/                        superseded but kept (align.html)""",
  """  inbox/                        raw downloads not yet made into documents
  clippings/                    newspaper cuttings that back a NAMESAKE but say
                                nothing about the ground — evidence for
                                names.js, not documents. Has its own README
                                indexing every file to the entity it supports.
  generated/  legacy/           generator output; the frozen pre-model data
  attic/                        superseded but kept (align.html)"""),

 ("      - `inbox/newmark-1916.txt` — Harris Newmark, *Sixty Years in Southern",
  "      - `documents/newmark-1916/newmark-1916.txt` — Harris Newmark, *Sixty Years in Southern"),

 ("      - the Guinn PDF in `inbox/`, behind `documents/guinn-1912`.",
  "      - `documents/guinn-1912/guinn-1912.pdf`.\n"
  "    Both are `type: \"history\"` documents with no rows: secondary scholarship\n"
  "    about the people, not records of the ground. That is the pattern to copy\n"
  "    for any further book."),
])

# ───────────────────────────────────────────────────────── handbook/CDNC-QUERIES
edit("handbook/CDNC-QUERIES.md", [
 ("a plain-text conversion sits beside it at **`inbox/newmark-1916.txt`** (1.5 MB,",
  "the whole book is now a document of its own: **`documents/newmark-1916/`**, whose\n"
  "`newmark-1916.txt` is the tag-stripped full text (1.5 MB,"),
])

# ────────────────────────────────────────────────────── handbook/research-leads
edit("handbook/research-leads.md", [
 ("`inbox/newmark-1916.txt` is the whole book, greppable, no network. Unread:",
  "`documents/newmark-1916/newmark-1916.txt` is the whole book, greppable, no\nnetwork. Unread:"),
])

# ───────────────────────────────────────── documents/lah-1888-10-11/…​.js
edit("documents/lah-1888-10-11/lah-1888-10-11.js", [
 ("""// PROVENANCE. Tail column supplied by Kenny 2026-09-06; the two full columns
// 2026-09-17, both from CDNC phrase searches. Read at full size and transcribed
// 2026-09-17.""",
  """// PROVENANCE, AND A LESSON IN IT. The scan beside this file — 2213 x 6425,
// covering ALL THREE columns of the item — was supplied by Kenny on 2026-09-06
// and has been in this folder ever since. The Sept. header said the list was read
// "at column scale" and stopped at a dozen lines; that was never a limit of the
// clipping, only of the reading. Kenny re-clipped two narrower columns on
// 2026-09-17, which is what prompted the full transcription, and those crops have
// since been deleted as strictly smaller than what was already here.
//
// ⚠ SO: BEFORE ASKING FOR A CLIPPING, OPEN THE ONE IN THE FOLDER AT FULL SIZE.
// The same thing was true of documents/lah-1897-12-07 on the same day."""),
])

# ───────────────────────────────────────── documents/lah-1897-12-07/…​.js
edit("documents/lah-1897-12-07/lah-1897-12-07.js", [
 ("""// ✔ NOW TRANSCRIBED END TO END. The tail of the column — ten further changes, from
// Castello Street to Basil Street — was missing until Kenny supplied the full
// column on 2026-09-17; it is the `tail-list` excerpt below.""",
  """// ✔ NOW TRANSCRIBED END TO END. The tail of the column — ten further changes, from
// Castello Street to Basil Street — is the `tail-list` excerpt below.
//
// ⚠ IT WAS NEVER MISSING FROM THE SCAN. The clipping in this folder always ran to
// the closing rule of the article; the Sept. header's "PARTIALLY TRANSCRIBED" was
// a limit of the reading, not of the image. Same lesson as
// documents/lah-1888-10-11 on the same day: open the clipping at full size before
// asking for another one."""),

 ("""// PROVENANCE. Two clippings supplied by Kenny, 2026-09-06 (CDNC phrase search);
// the full column 2026-09-17, crop 2128,1496,743,3573 beside this file.""",
  """// PROVENANCE. Clippings supplied by Kenny, 2026-09-06 and 2026-09-17, from CDNC
// phrase searches. Three beside this file, all from LAH18971207.1.11:
//   • `-clip.jpg`      crop 2128,1496,743,3573 — the engineer's report, entire
//   • `-clip-tail.jpg` crop 2185,6034,663,529  — further down the same column
//   • `-clip-naud.jpg` crop 2836,464,649,118   — the Naud Street referral, next
//                                                column over"""),
])

# ───────────────────────────────────────── documents/lah-1896-09-03/…​.js
edit("documents/lah-1896-09-03/lah-1896-09-03.js", [
 ("""// PROVENANCE. Two clippings supplied by Kenny, 2026-09-06, from CDNC —
// LAH18960903.1.3, crops 1580,4497,658,1690 (the article) and 2249,350,639,99
// (its last two lines, which run over to the next column). Both beside this
// file.""",
  """// PROVENANCE. Two clippings supplied by Kenny, 2026-09-06, from CDNC —
// LAH18960903.1.3, crops 1580,4497,658,1690 (the article) and, for its last two
// lines which run over to the next column, 2252,349,631,97 (a wider re-clip
// supplied 2026-09-17, which replaced the original 2249,350,639,99). Both beside
// this file."""),
])
