#!/bin/bash

set -e
set -v

find ./* -not -path './repositories/*' -type f -exec sed -i 's/\r$//' {} \;

set +v
set +e
