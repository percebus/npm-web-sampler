#!/bin/bash

set -e
set -v

find ./ -type f -name "*.sh" -exec sed -i 's/\r$//' {} \;

set +v
set +e
