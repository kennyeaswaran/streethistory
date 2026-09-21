// names-browser-test fixture: the sheet that DOES letter fixture-miscited (so
// the warning on that entity can name where the name really is) and
// fixture-pending (so the Docs column has something to count).
module.exports = {
  id: "fixture-lettered",
  title: "Fixture sheet B", shortTitle: "Fixture sheet B",
  url: "http://fixture.invalid/sheet-b",
  date: { on: "1885" }, type: "tract-map", attests: "planned-by",
  rows: [
    { kind: "state", asWritten: "FIXTURE ST", street: "Fixture Street",
      name: "fixture-miscited", confirmed: true },
    { kind: "state", asWritten: "PENDING ST", street: "Pending Street",
      name: "fixture-pending", confirmed: true }
  ]
};
