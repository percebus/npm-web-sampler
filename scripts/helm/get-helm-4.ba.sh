#!/bin/bash

set -e
set -x

# SRC: https://helm.sh/docs/intro/install/#from-script
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-4
chmod 700 get_helm.sh
bash ./get_helm.sh

helm version

set +x
set +e
