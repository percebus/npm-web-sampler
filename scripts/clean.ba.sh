#!/bin/bash

set -e
set -v

find ./* -path ./repositories -prune -o -type f -exec sed -i 's/\r$//' {} \;

set +v
set +e
