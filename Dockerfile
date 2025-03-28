FROM nikolaik/python-nodejs:python3.12-nodejs22 AS base

FROM base AS project
WORKDIR /usr/project
COPY . .
RUN ls -la
RUN bash _scripts/clean.ba.sh

FROM project AS dev
RUN npm run setup:Dockerfile:dev && npm ci

FROM project AS release
RUN npm run pip:install:release && npm ci --production

FROM dev AS tested
RUN npm test --ignore-scripts

FROM dev AS dist
RUN npm run dist
RUN ls -la dist

FROM release AS webapp
COPY --from=dist /usr/project/dist ./dist
RUN ls -la dist
CMD ["npm", "run", "start:dist"]
