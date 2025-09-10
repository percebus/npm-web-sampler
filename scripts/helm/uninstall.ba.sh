#!/bin/bash

set -e

release_name=$1

errors=0
if [ -z "${release_name}" ]; then
	echo "Error: release_name is required"
	errors=$((errors + 1))
fi

if [ $errors -gt 0 ]; then
	echo "Got $errors errors! exiting..."
	exit 1
fi

set -x

helm uninstall "${release_name}" --namespace "${HELM_NAMESPACE}"

set +x
set +e
