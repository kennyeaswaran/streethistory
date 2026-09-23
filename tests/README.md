# tests/

The test suites. Run from the project root (`node tests/<name>.js`); each
script resolves the project root for itself, so the working directory doesn't
matter. None of them writes to project data. The browser suites drop a
screenshot (`review-mode.png`, `preview-colours.png`) in the working directory.

| suite | what it tests | run it after changing | needs |
|---|---|---|---|
| `test-doc-geometry.js` | the geometry core (`data/doc-geometry.js`), against the live MR066-035 alignment and real street geometry | `data/doc-geometry.js`, alignment maths | node |
| `test-review.js` | map-tool's review model, **extracted from `utilities/map-tool.html`**, not copied | `utilities/map-tool.html` (review mode) | node |
| `test-names-tool.js` | names-tool's surgical save: an exact round trip on the real `data/names.js`, plus promotion, rename and edit composed | `utilities/names-tool.html` | node |
| `browser-test.js` | `utilities/map-tool.html` in a real browser: panels visible, buttons working, `TASK.md` naming every row kind. Reads no real document: every sheet it opens is a fixture | `utilities/map-tool.html` | Playwright (assistant's sandbox) |
| `names-browser-test.js` | `utilities/names-tool.html` in a real browser, on a throwaway copy of the project whose name files and documents are made up (`fixtures/names-tool/`) | `utilities/names-tool.html` | Playwright (sandbox) |
| `preview-test.js` | `index.html` over the generated data: reads the polyline colours back (all three colour schemes), and drives the search box and permalinks | `index.html`, `tools/generate.js` | Playwright + `npm install leaflet@1.9.4 --no-save` (sandbox) |

Kenny's machine has no Playwright, so the last three run in an assistant's
sandbox. They need `utilities/project-info.json`, which is gitignored (the
launchers write it). Without it, four failures come from the sandbox, not the code: browser-test's
"every file the page asks for exists" and "it names the folder to pick", and
names-browser-test's two 404s.

**Don't test against the live corpus.** A check that needs a particular
stretch, label or gap in `documents/` fails as soon as a sheet is added or
reviewed, even when the code is fine. Seven did, by 2026-09-20. Build the
situation synthetically, or state the rule and check it across the whole map
(preview-test's colour checks). browser-test does both:
- **plain function calls on made-up runs**: the "which run a row is about"
  and "answering a gap on awkward geometry" sections;
- **made-up sheets over made-up streets**, for everything that needs the page
  itself: the review model, the popup, its buttons, the sweep list.

The sheets live in **`tests/fixtures/`**, committed, and browser-test's server
hands them to the map tool as if they were in `documents/`: a request for
`documents/_x/…` is answered from `tests/fixtures/_x/` when that folder
exists. Nothing is written into the real `documents/`, and the suite passes
with `documents/` empty (checked 2026-09-20).

| fixture | what it's for |
|---|---|
| `_main-test` | the sheet the run opens first and keeps coming back to: popup, confirm, trace, split, Tab, the brief and its name candidates |
| `_gaps-test` | stretches no row speaks for: the sweep list, the gap card and its buttons, re-classifying and deleting rows |
| `_shapes-test` | branches and rings |
| `_bare-test` | a document file written the old broken way |
| `names-tool/` | for names-browser-test: a small `names.js` and `names-new.js` in the real files' shape (each entity notes which check it serves), and two sheets, one of them cited by an entity it does not letter |
| `streets.js` | every made-up street, in metres, with each sheet's place in that layout |
| `entities.js` | the made-up name entities the fixtures' rows use |

The streets and entities are added to the page at the start of the run. They
must never go into `data/streets-geometry.js` or `data/names.js`. The sheet
images are blank placeholders, and only their size matters. Scan pixels are
metres, so a row's `{px}` extent can be read straight off `streets.js`. Where
two made-up streets cross, give them a shared vertex, as OSM ways share a
node: the tool finds "where X meets Y" from the vertices, and a crossing
between vertices is 25 m off the line.

To test a new shape end to end, add a street to `streets.js` and a row to
whichever sheet it lies on. Opening a sheet takes the view to it, so a
fixture out in the bay is on screen as soon as it loads.

**Where real data is the point.** `test-doc-geometry.js` reads the live
M.R. 66-35 alignment and the real street geometry on purpose. It checks that
the map tool puts real ground where it belongs (3rd × Bixel, the streets
inside that sheet), and it derives every expectation from the current
alignment, so re-aligning the sheet can't break it. `test-names-tool.js` round-trips
the real `names.js` because that file's hand formatting is what the surgical save
must preserve. **Checks on the corpus itself** (redundant sources, citations
of the wrong sheet) belong in `tools/check-model.js`, which runs on the real
data every time, not in a browser test.

Before trusting a new check, break the code it guards and watch it fail. Every
check in the synthetic sections was tried that way on 2026-09-20.

**Check that the pass count went up, not just that the suite is green.** A
suite that throws early, or an assertion that measures nothing, also looks
clean (see CLAUDE.md).

The data **checkers** (`check-model`, `check-data`, `check-legacy`; the first
two gate the deploy) are not here. They live in `tools/` with the other command-line
helpers.
