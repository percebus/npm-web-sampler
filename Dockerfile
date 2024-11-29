FROM nikolaik/python-nodejs:python3.12-nodejs22 AS base
WORKDIR /usr/project
COPY . .
# RUN sed -i 's/\r$//' ./scripts/**/*.sh
RUN ls -la

FROM builder as test
RUN npm test

FROM base as builder
RUN npm run setup:ci && npm ci
RUN npm run verify

FROM builder as webapp
CMD ["npm", "run", "start"]
