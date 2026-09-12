#!/bin/bash
# Double-click me. Turns scans sitting in inbox/ into document folders that
# the map tool can open: documents/<id>/<id>.pdf + <id>-100dpi.png.
#
# It keeps going until inbox/ is empty or you tell it to stop: pick one scan or
# several at once ("1 3 4"), answer the questions for each, and it comes back
# with the shortened list. No need to close and reopen it per map.
#
# MAPS ONLY. A textual document — an ordinance, a newspaper column, a
# directory's street section — has no sheet to align (MODEL-SPEC §4.1a) and
# nothing here applies to it.
#
# Everything about one document lives in one folder (see CLAUDE.md, "Folder
# layout") — that folder is the unit you hand to another AI system later.
#
# A MULTI-PAGE PDF becomes one document PER PAGE: documents/<id>-p1/,
# documents/<id>-p2/, and so on. That is not a filing preference, it is what
# the model can express — a document carries ONE alignment and ONE coverage
# polygon (MODEL-SPEC §4.4, §4.6), and two sheets have two of each. Putting
# both pages in one folder means the tool's outputs (<id>.js, the alignment,
# the streets bundle) collide on the second sheet and quietly overwrite the
# first. The two sheets share a title and a url; that is what makes them one
# recorded map bibliographically, and it is enough.
#
# Before asking which pages you want, it opens a contact sheet of every page
# in your browser — a recorded map's PDF is often a map sheet plus certificate
# pages and index sheets, and page numbers alone do not say which is which.

# It lives in utilities/, so everything below runs from the PROJECT
# FOLDER one level up — that is where documents/, inbox/ and the tools are.
cd "$(dirname "$0")/.." || { echo "Could not find the project folder."; exit 1; }

shopt -s nullglob

# --- helpers ----------------------------------------------------------------
pause_exit() { echo; read -r -p "Press return to close."; exit "${1:-0}"; }

# Every page of a PDF at thumbnail size, on one HTML page, opened in the
# browser. Only poppler is needed; nothing else is assumed to be installed.
contact_sheet() {                     # $1 = pdf, $2 = page count
  local src="$1" pages="$2" dir base
  dir=$(mktemp -d "${TMPDIR:-/tmp}/new-map-thumbs.XXXXXX") || return 1
  base=$(basename "$src")
  # -scale-to bounds the longer side, so a 24×36 inch sheet and a letter-size
  # certificate come out the same size on the sheet.
  pdftoppm -png -scale-to 360 "$src" "$dir/p" 2>/dev/null || return 1
  {
    echo "<!doctype html><meta charset='utf-8'><title>$base — pages</title>"
    echo "<style>body{font:14px Georgia,serif;background:#fffef7;color:#2b241c;margin:18px}"
    echo "h1{font-size:16px;font-weight:normal;margin:0 0 12px}"
    echo ".g{display:flex;flex-wrap:wrap;gap:14px}"
    echo "figure{margin:0;width:260px}img{width:260px;border:1px solid #bbb;background:#fff}"
    echo "figcaption{text-align:center;font-weight:bold;margin-top:4px}</style>"
    echo "<h1>$base — $pages page(s). Which are map sheets? Answer in the Terminal window.</h1><div class='g'>"
    local n=1 f
    # pdftoppm zero-pads the page number to the width of the page count, so
    # sort the files by that number rather than by name.
    for f in $(ls "$dir"/p-*.png | sort -t- -k2 -n); do
      echo "<figure><img src='$(basename "$f")'><figcaption>page $n</figcaption></figure>"
      n=$((n+1))
    done
    echo "</div>"
  } > "$dir/index.html"
  # macOS `open` hands it to the default browser; anywhere else, say where it is.
  if ! { command -v open >/dev/null 2>&1 && open "$dir/index.html" 2>/dev/null; }; then
    echo "  (thumbnails are at $dir/index.html)"
  fi
  return 0
}

made_all=()      # every document made this run, for the summary at the end
renders_all=()

# --- one scan -> one or more document folders --------------------------------
process_one() {                       # $1 = path in inbox/
  local src="$1"
  echo
  echo "  ── $(basename "$src")"

  # Suggest an id from the filename: lowercase, spaces and dots to hyphens.
  local base suggest id ext
  base=$(basename "$src"); base="${base%.*}"
  suggest=$(echo "$base" | tr '[:upper:]' '[:lower:]' | tr ' ._' '-' | tr -cd 'a-z0-9-')
  read -r -p "  Document id [$suggest] (or s to skip this one): " id
  id="${id:-$suggest}"
  [ "$id" = "s" ] && { echo "  skipped."; return 0; }

  ext="${src##*.}"; ext=$(echo "$ext" | tr '[:upper:]' '[:lower:]')

  # --- how many pages? ----------------------------------------------------
  local pages=1
  if [ "$ext" = "pdf" ]; then
    if ! command -v pdftoppm >/dev/null 2>&1; then
      echo
      echo "  pdftoppm isn't installed, so I can't make the render."
      echo "  Install it with:   brew install poppler"
      return 1
    fi
    if command -v pdfinfo >/dev/null 2>&1; then
      pages=$(pdfinfo "$src" 2>/dev/null | awk '/^Pages:/ {print $2}')
    fi
    [ -z "$pages" ] && pages=1
  fi

  # --- which pages do we want? --------------------------------------------
  # One document per page, so ask before making folders nobody wants. A sheet
  # with nothing on it worth recording is common in a recorded map: index
  # sheets, certificate pages, blocks that were never built.
  local wanted=(1) picks n ok
  if [ "$pages" -gt 1 ]; then
    echo
    echo "  $(basename "$src") has $pages pages — opening thumbnails of them."
    contact_sheet "$src" "$pages" || echo "  (could not render the thumbnails; carrying on without)"
    echo "  Each page becomes its own document — one alignment and one coverage"
    echo "  polygon per sheet is all the model can hold."
    echo
    read -r -p "  Which pages? (e.g. 1 3, return for all $pages, s to skip this scan) " picks
    [ "$picks" = "s" ] && { echo "  skipped."; return 0; }
    if [ -z "$picks" ]; then
      wanted=(); for ((n=1; n<=pages; n++)); do wanted+=("$n"); done
    else
      wanted=(); ok=yes
      for n in $picks; do
        case "$n" in (*[!0-9]*|"") ok=no;; esac
        [ "$ok" = yes ] && { [ "$n" -ge 1 ] && [ "$n" -le "$pages" ] || ok=no; }
        wanted+=("$n")
      done
      if [ "$ok" != yes ]; then
        echo "  Page numbers must be between 1 and $pages. Nothing made for this scan."
        return 1
      fi
    fi
  fi

  # --- check every folder BEFORE creating any of them ----------------------
  local did dir
  for n in "${wanted[@]}"; do
    did="$id"; [ "$pages" -gt 1 ] && did="$id-p$n"
    if [ -e "documents/$did" ]; then
      echo "  documents/$did already exists — pick another id, or move the old one aside."
      echo "  Nothing made for this scan."
      return 1
    fi
  done

  local made=() renders=() f
  for n in "${wanted[@]}"; do
    did="$id"; [ "$pages" -gt 1 ] && did="$id-p$n"
    dir="documents/$did"
    mkdir -p "$dir"
    # The scan is copied into every page's folder rather than shared, so each
    # folder stays something you can hand over whole.
    cp "$src" "$dir/$did.$ext"
    made+=("$did")
    if [ "$ext" = "pdf" ]; then
      # 100 dpi is the project's alignment convention: every stored pixel
      # coordinate is meaningless against a render at another resolution.
      pdftoppm -png -r 100 -f "$n" -l "$n" "$dir/$did.pdf" "$dir/$did-100dpi"
      # pdftoppm appends the page number even with -f/-l; fold it back in, so
      # the render is named exactly as the rest of the toolchain expects.
      for f in "$dir/$did-100dpi"-*.png; do mv "$f" "$dir/$did-100dpi.png"; done
      renders+=("$dir/$did-100dpi.png")
    else
      renders+=("$dir/$did.$ext")
    fi
  done
  rm -f "$src"

  for f in "${renders[@]}"; do echo "  → $f"; done
  if [ "$pages" -gt 1 ]; then
    echo "  $pages-page scan → ${#made[@]} document(s): ${made[*]}"
    echo "  They share a title and a url; give each its own shortTitle (\"… sheet 2\")."
    if [ "${#wanted[@]}" -lt "$pages" ]; then
      echo "  Pages you skipped are gone from inbox/ but still inside each .pdf."
    fi
  fi
  made_all+=("${made[@]}"); renders_all+=("${renders[@]}")
  return 0
}

# --- the loop: list inbox/, pick, process, list again -------------------------
echo
echo "  New documents from scans in inbox/"
while :; do
  files=(inbox/*.pdf inbox/*.PDF inbox/*.png inbox/*.jpg inbox/*.jpeg inbox/*.tif inbox/*.tiff)
  echo
  if [ ${#files[@]} -eq 0 ]; then
    if [ ${#made_all[@]} -eq 0 ]; then echo "  inbox/ is empty. Download a scan into it first."
    else echo "  inbox/ is empty now."; fi
    break
  fi
  i=1
  for f in "${files[@]}"; do printf "   %2d) %s\n" "$i" "$(basename "$f")"; i=$((i+1)); done
  echo
  read -r -p "  Which? (one or more numbers, \"all\", or return to finish) " pick
  [ -z "$pick" ] && break
  [ "$pick" = "all" ] && { pick=""; for ((n=1; n<=${#files[@]}; n++)); do pick="$pick $n"; done; }
  chosen=(); bad=no
  for n in $pick; do
    case "$n" in (*[!0-9]*|"") bad=yes;; esac
    [ "$bad" = yes ] || { [ "$n" -ge 1 ] && [ "$n" -le ${#files[@]} ] || bad=yes; }
    [ "$bad" = yes ] && break
    chosen+=("${files[$((n-1))]}")
  done
  if [ "$bad" = yes ]; then echo "  Numbers between 1 and ${#files[@]}, please."; continue; fi
  # Resolve every pick to a path before touching anything: processing removes
  # files from inbox/, which would renumber the list under a second pick.
  for src in "${chosen[@]}"; do process_one "$src"; done
done

# --- summary ---------------------------------------------------------------------
if [ ${#made_all[@]} -gt 0 ]; then
  echo
  echo "  Made ${#made_all[@]} document folder(s):"
  for r in "${renders_all[@]}"; do echo "      $r"; done
  echo
  echo "  Next: double-click utilities/start-map-tools.command. Each shows up in the"
  echo "  tool's Open box under \"needs aligning and coverage\" — take one, align it,"
  echo "  trace the coverage polygon, fill the header, Save, and come back for the next."
fi
pause_exit 0
