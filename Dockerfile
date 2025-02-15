FROM nikolaik/python-nodejs:python3.12-nodejs22 AS base

FROM base AS project
WORKDIR /usr/project
COPY . .
RUN ls -la
RUN bash _scripts/clean.ba.sh

FROM project AS dev
RUN npm run setup:ci --ignore-scripts && npm ci

FROM project AS release
RUN npm run setup:release --ignore-scripts && npm ci --production

FROM dev AS test
RUN npm test

FROM dev AS dist
RUN npm run dist

FROM release AS webapp
COPY --from=dist /usr/project/dist ./dist
CMD ["npm", "run", "start"]
