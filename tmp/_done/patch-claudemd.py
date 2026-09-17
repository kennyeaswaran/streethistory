# -*- coding: utf-8 -*-
import io, sys

P = "CLAUDE.md"
s = io.open(P, encoding="utf-8").read()

old = """  - **Downloads first:** if a map is already in `inbox/` or `documents/<id>/`,
    read it locally (`pdftoppm -png -r 150`, then Read the PNGs). Never squint
    at a PDF in a browser viewer when a local copy exists."""

new = """  - **Downloads first:** if a map is already in `inbox/` or `documents/<id>/`,
    read it locally (`pdftoppm -png -r 150`, then Read the PNGs). Never squint
    at a PDF in a browser viewer when a local copy exists.
  - ⭐ **BOOKS LIVE IN THE REPO, NOT ON A SEARCH ENDPOINT.** Two of the sources
    this project leans on hardest are now plain text on disk, and grepping them
    is free, instant, exact and honest — everything the remote full-text search
    was not:
      - `inbox/newmark-1916.txt` — Harris Newmark, *Sixty Years in Southern
        California* (1916), whole book and index. **The archive.org full-text
        endpoint had been returning zero for names that are plainly in this
        book** (Potts appears three times; the endpoint said nothing), which is
        the clearest proof yet of the "sources that lie" problem above. Never
        record a Newmark negative from a remote search again — grep the file.
      - the Guinn PDF in `inbox/`, behind `documents/guinn-1912`.
    If a book matters to a name, get it into `inbox/` as text and search it
    there. Project Gutenberg and the Internet Archive both serve whole files
    fine; it is only their SEARCH that is broken."""

if old not in s:
    sys.exit("anchor not found in CLAUDE.md")
s = s.replace(old, new, 1)
io.open(P, "w", encoding="utf-8").write(s)
print("patched CLAUDE.md")
