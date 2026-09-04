# The pipeline: how a document becomes map data

Orientation. Every stage below has its own document; this one exists so that a
reader who has just arrived — or come back after a month — can see the shape
before opening any of them.

The claim the whole thing rests on: **the unit of evidence is the document, and
the unit of data is the segment.** Nobody edits a street's history directly.
Documents are read into `documents/`, and `generate.js` computes what the map
says from them. A stretch of street is blue because some document speaks about
that ground and grey because none does — which is a fact about the corpus, not
a gap somebody forgot to fill.

## The four stages

**1. Find it.** A street needs answering, or a neighbourhood needs coverage;
you work out which recorded map, ordinance, atlas sheet or directory would say
something, and get hold of it. → **TRACT-RESEARCH.md** for tract maps
(NavigateLA → tract name and Map-Ref → the recorder's scan),
**SERIAL-SOURCES.md** for Sanborn atlases and city directories,
**NAME-RESEARCH.md** for the trails a namesake question runs down.

Most of this stage needs a browser: NavigateLA, the Assessor portal, CDNC and
ResCarta are JavaScript apps that fetch tools see nothing of. Downloading is a
human click.

**2. Read it in.** `utilities/new-map.command` turns a scan in `inbox/` into
`documents/<id>/`. A human aligns it against the modern street grid, traces the
coverage polygon, and saves — which writes the document, its alignment, the
modern street geometry in the scan's own pixel space, and a `TASK.md` brief. An
AI pass reads the render against that brief and writes rows. A human confirms
each row and sweeps the document. → **MAP-TOOL-GUIDE.md** to use the tool,
**MAP-TOOL-SPEC.md** for why it is built the way it is.

Alignment is the human bottleneck, and deliberately so: every georeferencing
error in this project's history came from something estimating pixel
coordinates instead of a person fitting a scan by eye.

**3. Name it.** A plat letters ink; a *name entity* is a naming lineage.
Deciding which lineage a label belongs to is review's job, and can only be done
against the whole corpus. Finding out who or what the name honoured is separate
work, done later, from a different set of sources. → **NAME-RESEARCH.md**;
`names-new.js` is the queue, and each entry's `sightings` lists every sheet
that letters it.

**4. Generate.** `node check-model.js && node generate.js` validates the corpus
and computes segments, timelines, planned/built dates, sources and the search
index into `generated/`. → **MODEL-SPEC.md** is the contract;
**MODEL-IMPLEMENTATION.md** records what was built and what remains before the
switchover.

Textual documents — an ordinance, a newspaper column, a directory's street
section — go through stages 1, 3 and 4 but not 2: they have no sheet to align
(MODEL-SPEC §4.1a). Reading them in is by hand for now, and a tool for written
evidence is the obvious next one to build.

## Conventions that cross every stage

**Resolution.** A pixel coordinate is meaningless without the render it was
measured on. Renders are `pdftoppm -png -r <dpi>`, and **100 dpi is the
project's alignment convention** — every stored pixel in `documents/` is
against a `<id>-100dpi.png`. Re-render at 300 dpi when you need to *read* fine
label text, but align against the 100 dpi copy.

**Downloads first.** Before opening a map PDF in a browser viewer, check
`inbox/` and `documents/*/` — if it is already here, read it locally. Local
reading is faster, the resolution is yours to choose, and comparing sheets side
by side is possible. Browser time is for collecting Map-Refs, not for squinting
at plats.

**A document opened for one street gets read for all of them.** One subdivision
map routinely names four to six streets; the sweep gate exists to make
finishing the sheet the default rather than an act of virtue. Re-opening a scan
later is far more expensive than reading it through the first time.

**Nothing is committed that can be re-derived.** Scans and renders regenerate
from the recorder's PDF and stay out of git. Alignments, transcriptions and
documents are hand work, and are committed.

## Where the work actually is

| stage | who | scale |
|---|---|---|
| find and download | browser instance for the lookup, human for the click | batch |
| align + trace coverage | **human**, seconds to minutes per sheet | the bottleneck |
| read rows off the sheet | an AI pass, from `TASK.md` and `<id>-streets.json` | batch |
| confirm and sweep | **human**, in review mode | the other bottleneck |
| research a namesake | any instance, from NAME-RESEARCH.md's trails | batch |
| generate | `node generate.js` | instant |

The two human steps are the two that carry judgement: where a scan sits on the
earth, and whether a row's claim is true. Everything on either side of them is
mechanical, and has been automated in proportion.
