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


FROM node:22-alpine AS release
WORKDIR /opt/app
COPY --from=dist /usr/project/dist ./dist
COPY --from=project /usr/project/package*.json .
RUN npm run setup:Dockerfile:prd

FROM release AS web-app
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001
USER nodejs
# Add a simple HEALTHCHECK so orchestrators can detect unhealthy containers
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 CMD wget -qO- http://127.0.0.1:8080/ || exit 1
EXPOSE 8080
CMD ["/opt/app/node_modules/.bin/http-server", "./dist", "--port", "8080"]
