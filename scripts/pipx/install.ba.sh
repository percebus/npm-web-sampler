#!/bin/bash

set -e

filename="requirements.pipx.txt"
if [[ -z $(grep '[^[:space:]]' $filename) ]]; then
  echo "${filename} is empty, skipping..."
  exit 0
fi

set -x
cat ${filename}
set +x

# Strip comments, blank lines, and install each package safely
grep -v '^#' "${filename}" | grep -v '^$' | while read -r package; do
    set -x
    pipx install "${package}"
    set +x
done

set +e
