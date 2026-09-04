# fixtures/

Frozen copies of real project data, used by the tests.

They are copies on purpose. `test-doc-geometry.js` once read the live
`documents/mr066-035/` alignment and broke the moment that document was parked
for a dry run — a test should fail because the code is wrong, not because
someone reorganised a folder.

- `mr066-035-alignment.json` — the human alignment of the Compromise
  Subdivision sheet (the adversarial benchmark: its "Third St" is modern
  Miramar). Copied 2026-08-26. If the real alignment is ever improved, copy it
  here again deliberately and expect the tolerance numbers to move.
