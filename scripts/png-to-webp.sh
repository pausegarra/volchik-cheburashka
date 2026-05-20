#!/usr/bin/env bash
set -u

SRC_DIR="src/content"

if ! command -v magick >/dev/null 2>&1; then
  echo "Error: ImageMagick no encontrado (comando: magick)" >&2
  exit 1
fi

if [ ! -d "$SRC_DIR" ]; then
  echo "Error: no existe directorio $SRC_DIR" >&2
  exit 1
fi

find "$SRC_DIR" -type f -name '*.png' -print0 |
while IFS= read -r -d '' input; do
  output="${input%.png}.webp"
  echo "Convirtiendo: $input -> $output"

  if magick "$input" "$output" && [ -s "$output" ]; then
    rm "$input"
    echo "OK: eliminado $input"
  else
    echo "Fallo: $input (png conservado)" >&2
    rm -f "$output"
  fi
done
