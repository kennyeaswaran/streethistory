#!/bin/bash
# Double-click me. Turns a scan sitting in inbox/ into a document folder that
# the document tool can open: documents/<id>/<id>.pdf + <id>-100dpi.png.
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

cd "$(dirname "$0")" || { echo "Could not find the project folder."; exit 1; }

echo
echo "  New document from a scan in inbox/"
echo

shopt -s nullglob
files=(inbox/*.pdf inbox/*.PDF inbox/*.png inbox/*.jpg inbox/*.jpeg inbox/*.tif inbox/*.tiff)
if [ ${#files[@]} -eq 0 ]; then
  echo "  inbox/ is empty. Download a scan into it first."
  echo; read -r -p "Press return to close."; exit 0
fi

i=1
for f in "${files[@]}"; do printf "   %2d) %s\n" "$i" "$(basename "$f")"; i=$((i+1)); done
echo
read -r -p "  Which one? (number, or return to cancel) " pick
[ -z "$pick" ] && exit 0
case "$pick" in (*[!0-9]*|"") echo "  Not a number."; read -r -p "Press return."; exit 1;; esac
[ "$pick" -ge 1 ] && [ "$pick" -le ${#files[@]} ] || { echo "  Out of range."; read -r -p "Press return."; exit 1; }
src="${files[$((pick-1))]}"

# Suggest an id from the filename: lowercase, spaces and dots to hyphens.
base=$(basename "$src"); base="${base%.*}"
suggest=$(echo "$base" | tr '[:upper:]' '[:lower:]' | tr ' ._' '-' | tr -cd 'a-z0-9-')
echo
read -r -p "  Document id [$suggest]: " id
id="${id:-$suggest}"

ext="${src##*.}"; ext=$(echo "$ext" | tr '[:upper:]' '[:lower:]')

# --- how many pages? ------------------------------------------------------
pages=1
if [ "$ext" = "pdf" ]; then
  if ! command -v pdftoppm >/dev/null 2>&1; then
    echo
    echo "  pdftoppm isn't installed, so I can't make the render."
    echo "  Install it with:   brew install poppler"
    echo; read -r -p "Press return to close."; exit 1
  fi
  if command -v pdfinfo >/dev/null 2>&1; then
    pages=$(pdfinfo "$src" 2>/dev/null | awk '/^Pages:/ {print $2}')
  fi
  [ -z "$pages" ] && pages=1
fi

# --- which pages do we want? ----------------------------------------------
# One document per page, so ask before making folders nobody wants. A sheet
# with nothing on it worth recording is common in a recorded map: index
# sheets, certificate pages, blocks that were never built.
wanted=(1)
if [ "$pages" -gt 1 ]; then
  echo
  echo "  $(basename "$src") has $pages pages."
  echo "  Each page becomes its own document — one alignment and one coverage"
  echo "  polygon per sheet is all the model can hold."
  echo
  read -r -p "  Which pages? (e.g. 1 3, or return for all $pages) " picks
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
      echo "  Page numbers must be between 1 and $pages."
      echo; read -r -p "Press return to close."; exit 1
    fi
  fi
fi

# --- check every folder BEFORE creating any of them ------------------------
made=()
for n in "${wanted[@]}"; do
  did="$id"; [ "$pages" -gt 1 ] && did="$id-p$n"
  if [ -e "documents/$did" ]; then
    echo "  documents/$did already exists — pick another id, or move the old one aside."
    echo; read -r -p "Press return to close."; exit 1
  fi
done

renders=()
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
    shopt -s nullglob
    for f in "$dir/$did-100dpi"-*.png; do mv "$f" "$dir/$did-100dpi.png"; done
    renders+=("$dir/$did-100dpi.png")
  else
    renders+=("$dir/$did.$ext")
  fi
done
rm -f "$src"

echo
for r in "${renders[@]}"; do echo "  → $r"; done
if [ "$pages" -gt 1 ]; then
  echo
  echo "  $pages-page scan → ${#made[@]} document(s): ${made[*]}"
  echo "  They share a title and a url; give each its own shortTitle (\"… sheet 2\")."
  if [ "${#wanted[@]}" -lt "$pages" ]; then
    echo "  Pages you skipped are gone from inbox/ but still inside each .pdf."
  fi
fi
echo
echo
echo "  Next: start-tools.command, then in the tool's Open box paste"
if [ "${#renders[@]}" -gt 1 ]; then
  echo "  ONE of these, align it, and come back for the next:"
else
  echo "  this path:"
fi
echo
for r in "${renders[@]}"; do echo "      $r"; done
echo
echo "  Align it, trace the coverage polygon, fill the header, Save."
echo
read -r -p "Press return to close."
