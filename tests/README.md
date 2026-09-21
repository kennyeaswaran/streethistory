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
| `browser-test.js` | `utilities/map-tool.html` in a real browser: panels visible, buttons working, `TASK.md` naming every row kind | `utilities/map-tool.html` | Playwright (assistant's sandbox) |
| `names-browser-test.js` | `utilities/names-tool.html` in a real browser, on a temp copy of the project | `utilities/names-tool.html` | Playwright (sandbox) |
| `preview-test.js` | `index.html` over the generated data: reads the polyline colours back | `index.html`, `tools/generate.js` | Playwright + `npm install leaflet@1.9.4 --no-save` (sandbox) |

Kenny's machine has no Playwright, so the last three run in an assistant's
sandbox. There they need the two 100 dpi renders the git clone lacks
(`documents/mr006-138/mr006-138-100dpi.png`, `documents/mr066-035/mr066-035-100dpi.png`).
They also need `utilities/project-info.json`, which is gitignored (the launchers write it). Without it, four
failures come from the sandbox, not the code: browser-test's
"every file the page asks for exists" and "it names the folder to pick", and
names-browser-test's two 404s.

**Check that the pass count went up, not just that the suite is green.** A
suite that throws early, or an assertion that measures nothing, also looks
clean (see CLAUDE.md).

The data **checkers** (`check-model`, `check-data`, `check-legacy`; the first
two gate the deploy) are not here. They live in `tools/` with the other command-line
helpers.
