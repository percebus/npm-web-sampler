#!/bin/bash

set -e
set -v

# https://medium.com/@dsharma182/install-minikube-on-windows-10-home-edition-with-virtualbox-48d1b33909f3
eval $(minikube docker-env)

echo DOCKER_TLS_VERIFY: ${DOCKER_TLS_VERIFY}
echo DOCKER_HOST: ${DOCKER_HOST}
echo DOCKER_CERT_PATH: ${DOCKER_CERT_PATH}
echo MINIKUBE_ACTIVE_DOCKERD: ${MINIKUBE_ACTIVE_DOCKERD}

set +v
set +e
