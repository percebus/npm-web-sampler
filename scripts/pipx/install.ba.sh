#!/bin/bash

# XXX use commons/scripts instead

set -e
set -v

cat requirements.pipx.txt | sed 's/.*/"&"/' | xargs -n 1 pipx install
pipx list

set +v
set +e
