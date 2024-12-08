#!/bin/bash

set -e
set -v

# FIXME add quotes
# i.e. pipx install "awscli >= 1.0, < 2.0"
# SRC: https://unix.stackexchange.com/questions/172481/how-to-quote-arguments-with-xargs
cat requirements.pipx.txt | xargs -n 1 pipx install

set +v
set +e
