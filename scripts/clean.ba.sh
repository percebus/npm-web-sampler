#!/bin/bash

set -e
set -v

find ./ -type f \
  -not -path "./.git/*" \
  -not -path "./repositories/percebus-assets/*" \
  -exec sed -i 's/\r$//' {} \;

set +v
set +e
