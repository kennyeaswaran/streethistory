#!/bin/bash
# Double-click to undo the dry run: unparks the original mr066-035 document
# (with its traced coverage, its alignment and its two benchmark rows) and
# removes whatever the dry run produced.
cd "$(dirname "$0")" || exit 1
echo
if [ ! -d "documents/_mr066-035-original" ]; then
  echo "  Nothing parked — the original is already restored (or gone)."
  echo; read -r -p "Press return to close."; exit 0
fi
if [ -d "documents/mr066-035" ]; then
  ts=$(date +%Y%m%d-%H%M%S)
  mkdir -p attic
  mv "documents/mr066-035" "attic/mr066-035-dryrun-$ts"
  echo "  Dry-run output moved to attic/mr066-035-dryrun-$ts (nothing deleted)."
fi
mv "documents/_mr066-035-original" "documents/mr066-035"
rm -f inbox/MR066-035.pdf
echo "  Restored documents/mr066-035/ — original coverage, alignment and rows."
echo
echo "  Then, to confirm:  node check-model.js && node generate.js"
echo
read -r -p "Press return to close."
