#!/bin/bash

set -e

release_name=$1

errors=0
if [ -z "${release_name}" ]; then
  echo "Error: release_name is required"
  errors=$((errors + 1))
fi

if [ -z "${HELM_NAMESPACE}" ]; then
  echo "Error: HELM_NAMESPACE is required"
  errors=$((errors + 1))
fi

if [ $errors -gt 0 ]; then
  echo "Got $errors errors! exiting..."
  exit 1
fi

set -x
helm install ${release_name} ./helm/ --create-namespace --namespace ${HELM_NAMESPACE}
set -x

set +v
helm list --namespace ${HELM_NAMESPACE} | grep ${release_name}
set -v

set +e
