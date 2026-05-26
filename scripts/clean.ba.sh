#!/bin/bash

set -e
set -v

find ./ -type f \
	\( \
	-path "./.venv/*" \
	-o -path "repositories/commons/scripts/*" \
	-o -path "./scripts/*" \
	-o -path "./_scripts/*" \
	\) \
	-exec sed -i 's/\r$//' {} \;

set +v
set +e
