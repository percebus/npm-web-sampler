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

failed=0
while IFS= read -r pkg || [[ -n "$pkg" ]]; do
  # skip empty lines and comments
  [[ -z "$pkg" || "$pkg" =~ ^# ]] && continue
  echo ">>> pipx install ${pkg}"
  if ! pipx install "$pkg"; then
    echo "WARNING: pipx install ${pkg} failed"
    failed=1
  fi
done < "$filename"

pipx list

if [[ $failed -ne 0 ]]; then
  echo "ERROR: one or more pipx packages failed to install"
  exit 1
fi

set +e
