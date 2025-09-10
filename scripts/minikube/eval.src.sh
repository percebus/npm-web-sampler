#!/bin/bash

set -e
set -v

eval $(minikube docker-env)

echo DOCKER_TLS_VERIFY: ${DOCKER_TLS_VERIFY}
echo DOCKER_HOST: ${DOCKER_HOST}
echo DOCKER_CERT_PATH: ${DOCKER_CERT_PATH}
echo MINIKUBE_ACTIVE_DOCKERD: ${MINIKUBE_ACTIVE_DOCKERD}

set +v
set +e
