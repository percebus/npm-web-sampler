# trixie
FROM nikolaik/python-nodejs:python3.13-nodejs24 AS base

FROM base AS project
WORKDIR /usr/project
COPY . .
RUN ls -la
RUN bash _scripts/clean.ba.sh

FROM project AS dev
RUN npm run setup:Dockerfile:dev
# TODO add helm
# TODO add terraform
RUN npm ci

FROM dev AS tested
RUN npm test --ignore-scripts
