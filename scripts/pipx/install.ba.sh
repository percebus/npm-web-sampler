#!/bin/bash

set -e
set -v

# i.e. pipx install "awscli >= 1.0, < 2.0"
cat requirements.pipx.txt | sed 's/.*/"&"/' | xargs -n 1 pipx install

set +v
set +e
