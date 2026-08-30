#!/bin/bash
# Double-click me. Serves this folder and opens the document tool in a browser.
#
# The tools have to be SERVED rather than opened as file:// — the File System
# Access API (the Save dialog) needs a secure context, and loading a document
# by id fetches from documents/. localhost counts as secure; file:// does not.
#
# This window IS the server. Leave it open while you work; close it (or press
# Ctrl-C) to stop.

cd "$(dirname "$0")" || { echo "Could not find the project folder."; exit 1; }

PAGE="document-tool.html"
PORT=8000
MAXPORT=8010

if ! command -v python3 >/dev/null 2>&1; then
  echo "python3 is not installed."
  echo "On macOS, running  xcode-select --install  in Terminal will provide it."
  echo
  read -r -p "Press return to close."
  exit 1
fi

if [ ! -f "$PAGE" ]; then
  echo "Can't see $PAGE in $(pwd)."
  echo "This script needs to live in the project folder, beside $PAGE."
  echo
  read -r -p "Press return to close."
  exit 1
fi

# Is something already serving this folder? If a server on this port can hand
# back our own page, reuse it rather than starting a second one. If the port is
# busy with something else, move up until we find one that's free.
REUSE=""
while [ "$PORT" -le "$MAXPORT" ]; do
  CODE=$(curl -s -o /dev/null -m 1 -w "%{http_code}" "http://localhost:$PORT/$PAGE" 2>/dev/null)
  if [ "$CODE" = "200" ]; then REUSE="yes"; break; fi          # already ours
  if [ -z "$CODE" ] || [ "$CODE" = "000" ]; then break; fi      # nothing there — free
  PORT=$((PORT + 1))                                            # someone else's
done

if [ "$PORT" -gt "$MAXPORT" ]; then
  echo "Ports 8000-$MAXPORT are all busy. Close whatever is using them and try again."
  echo
  read -r -p "Press return to close."
  exit 1
fi

# The tool needs to be able to TELL you which folder to connect: a directory
# picker shows names only, and a served page cannot see the filesystem it came
# from. So write the name here, where the page can fetch it.
printf '{ "folder": %s, "path": %s, "note": "written by start-tools.command" }\n' \
  "\"$(basename "$(pwd)")\"" "\"$(pwd)\"" > project-info.json

BASE="http://localhost:$PORT"
echo
echo "  Streetymology tools — serving $(pwd)"
echo
echo "    document tool   $BASE/document-tool.html"
echo "    map preview     $BASE/preview.html"
echo "    live map        $BASE/index.html"
echo "    old aligner     $BASE/attic/align.html"
echo

# Open in Chrome if it's there (the File System Access API is a Chrome
# feature), otherwise whatever the default browser is.
if [ -d "/Applications/Google Chrome.app" ]; then
  ( sleep 1; open -a "Google Chrome" "$BASE/$PAGE" ) &
else
  echo "  (Google Chrome not found — opening the default browser. The Save"
  echo "   dialog needs Chrome; other browsers will fall back to Downloads.)"
  echo
  ( sleep 1; open "$BASE/$PAGE" ) &
fi

if [ -n "$REUSE" ]; then
  echo "  A server was already running on port $PORT — reusing it."
  echo "  Close ITS window to stop serving. This one can be closed now."
  echo
  read -r -p "Press return to close."
  exit 0
fi

echo "  Leave this window open while you work. Ctrl-C (or closing it) stops the server."
echo
python3 -m http.server "$PORT"
