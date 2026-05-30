#!/bin/bash

set -e
set -v

find ./ -type f \
	\( \
	-path "repositories/commons/scripts/*" \
	-o -path "./scripts/*" \
	-o -path "./_scripts/*" \
	-o -path "./*" \
	-o -path "./.venv/*" \
	\) \
	-exec sed -i 's/\r$//' {} \;

set +v
set +e
