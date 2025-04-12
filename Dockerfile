FROM nikolaik/python-nodejs:python3.12-nodejs22 AS base

FROM base AS project
WORKDIR /usr/project
COPY . .
RUN ls -la
RUN bash _scripts/clean.ba.sh

FROM project AS dev
RUN npm run setup:Dockerfile:dev && npm ci

FROM dev AS tested
RUN npm test --ignore-scripts

FROM dev AS dist
RUN npm run dist
RUN ls -la dist

# FROM project AS release # 2.1GB
# node:22-slim # 312MBs
FROM node:22-slim AS release
WORKDIR /opt/app
COPY --from=dist /usr/project/dist ./dist
COPY --from=project /usr/project/package*.json .
RUN npm run setup:Dockerfile:prd
# RUN npm ci # Only needed for node apps. This is a static app.

FROM release AS webapp
RUN ls -la dist
CMD ["npm", "run", "start:dist"]
