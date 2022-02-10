FROM nikolaik/python-nodejs:python3.7-nodejs14
WORKDIR /usr/project
COPY . .
# RUN sed -i 's/\r$//' ./scripts/**/*.sh
RUN npm run setup:ci && npm ci
RUN npm run verify
CMD npm run start
