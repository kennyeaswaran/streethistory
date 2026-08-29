#!/bin/bash
# Double-click me. Turns a scan sitting in inbox/ into a document folder that
# the document tool can open: documents/<id>/<id>.pdf + <id>-100dpi.png.
#
# Everything about one document lives in one folder (see CLAUDE.md, "Folder
# layout") — that folder is the unit you hand to another AI system later.

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

dir="documents/$id"
if [ -e "$dir" ]; then
  echo "  $dir already exists — pick another id, or move the old one aside."
  echo; read -r -p "Press return to close."; exit 1
fi

mkdir -p "$dir"
ext="${src##*.}"; ext=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
mv "$src" "$dir/$id.$ext"
echo
echo "  → $dir/$id.$ext"

render=""
if [ "$ext" = "pdf" ]; then
  if ! command -v pdftoppm >/dev/null 2>&1; then
    echo
    echo "  pdftoppm isn't installed, so I can't make the render."
    echo "  Install it with:   brew install poppler"
    echo "  Then run this script again, or render by hand:"
    echo "     pdftoppm -png -r 100 \"$dir/$id.pdf\" \"$dir/$id-100dpi\""
    echo; read -r -p "Press return to close."; exit 1
  fi
  # 100 dpi is the project's alignment convention: every stored pixel
  # coordinate is meaningless against a render at another resolution.
  pdftoppm -png -r 100 "$dir/$id.pdf" "$dir/$id-100dpi"
  pages=("$dir/$id-100dpi"*.png)
  if [ ${#pages[@]} -eq 1 ]; then
    mv "${pages[0]}" "$dir/$id-100dpi.png"
    render="$dir/$id-100dpi.png"
  else
    render="${pages[0]}"
    echo "  → ${#pages[@]} pages rendered; the tool aligns one page at a time."
  fi
else
  render="$dir/$id.$ext"
fi

echo "  → $render"
echo
echo "  Next: start-tools.command, then in the tool paste this into"
echo "  \"start fresh from a render\":"
echo
echo "      $render"
echo
echo "  Align it, trace the coverage polygon, fill the header, Save."
echo
read -r -p "Press return to close."
