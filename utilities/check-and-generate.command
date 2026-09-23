#!/bin/bash
# Double-click me before committing. Runs, in order, what the deploy will run
# after you push (.github/workflows/deploy.yml), so a problem shows up here
# rather than as a red X in the Actions tab:
#
#   1. node tools/check-model.js                    names.js, names-new.js, documents/
#   2. node tools/generate.js                       rebuilds generated/
#   3. node tools/check-data.js --require-generated the map's contract
#
# and then says whether generated/ changed, which means it goes into your
# commit along with the rest (handbook/PUBLISHING.md).
#
# Warnings are counted, not printed, because there are always a hundred or so.
# Type w at the end to read them.

# It lives in utilities/, so everything below runs from the PROJECT FOLDER one
# level up, which is where the tools expect to be run.
cd "$(dirname "$0")/.." || { echo "Could not find the project folder."; exit 1; }

pause_exit() { echo; read -r -p "  Press return to close."; exit "${1:-0}"; }

# A double-clicked script doesn't always get the PATH your Terminal has, so
# look where node is usually installed on a Mac as well.
export PATH="$PATH:/opt/homebrew/bin:/usr/local/bin:$HOME/.volta/bin"
if ! command -v node >/dev/null 2>&1 && [ -d "$HOME/.nvm/versions/node" ]; then
  latest=$(ls "$HOME/.nvm/versions/node" | sort -V | tail -1)
  [ -n "$latest" ] && export PATH="$PATH:$HOME/.nvm/versions/node/$latest/bin"
fi
if ! command -v node >/dev/null 2>&1; then
  echo "  node isn't installed (or I can't find it)."
  echo "  Install it from https://nodejs.org or with:   brew install node"
  pause_exit 1
fi

LOG=$(mktemp "${TMPDIR:-/tmp}/streetymology-check.XXXXXX")
nwarn=0

# Run one step; show everything except warnings; append the full output to LOG.
run() {                                   # $1 = label, rest = command
  local label="$1"; shift
  echo
  echo "  ── $label"
  local out code w
  out=$("$@" 2>&1); code=$?
  printf '\n== %s\n%s\n' "$label" "$out" >> "$LOG"
  printf '%s\n' "$out" | grep -v '^warn:' | sed 's/^/     /'
  w=$(printf '%s\n' "$out" | grep -c '^warn:')
  nwarn=$((nwarn + w))
  [ "$w" -gt 0 ] && echo "     ($w warning(s) — type w at the end to read them)"
  return $code
}

echo
echo "  Streetymology — check and generate"

if ! run "1/3  Checking names and documents" node tools/check-model.js; then
  echo
  echo "  ✗ The model check found errors (the ERROR lines above). Nothing was"
  echo "    regenerated. Fix them and run me again; a push now would not deploy."
  status=1
else
  # generate.js exits 1 whenever a row can't be placed on the geometry. Those
  # rows are dropped and listed in generated/report.md, a few are normal, and
  # the deploy doesn't mind them. What matters is that it finished: it prints
  # "Generated ..." as its last act.
  run "2/3  Generating the map data" node tools/generate.js
  if ! grep -q '^Generated ' "$LOG"; then
    echo
    echo "  ✗ The generator didn't finish. A push now would not deploy."
    status=1
  elif ! run "3/3  Checking the generated map data" node tools/check-data.js --require-generated; then
    echo
    echo "  ✗ The generated data fails the map's checks (the ERROR lines above)."
    echo "    A push now would not deploy."
    status=1
  else
    status=0
    echo
    echo "  ✓ All three checks pass."
    if command -v git >/dev/null 2>&1 && [ -d .git ]; then
      changed=$(git --no-optional-locks status --porcelain -- generated/streets-data.js generated/search-index.js)
      if [ -n "$changed" ]; then
        echo "    The map data changed. Commit these along with your edits:"
        printf '%s\n' "$changed" | sed 's/^.. /      /'
      else
        echo "    The map data is unchanged since your last commit."
      fi
    fi
  fi
fi

if [ "$nwarn" -gt 0 ]; then
  echo
  read -r -p "  $nwarn warning(s) in all. Type w and return to read them, or just return to close. " ans
  if [ "$ans" = "w" ] || [ "$ans" = "W" ]; then
    grep -e '^== ' -e '^warn:' "$LOG" | less
  fi
  exit "$status"
fi
pause_exit "$status"
