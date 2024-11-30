FROM nikolaik/python-nodejs:python3.12-nodejs22 AS base
WORKDIR /usr/project
COPY . .
# RUN sed -i 's/\r$//' ./scripts/**/*.sh
RUN ls -la

FROM base AS builder
RUN npm run setup:ci && npm ci

FROM builder AS test
RUN npm test

FROM test AS dist
RUN npm run dist

FROM builder AS webapp
CMD ["npm", "run", "start"]
