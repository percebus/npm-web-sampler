FROM nikolaik/python-nodejs:python3.10-nodejs16
WORKDIR /usr/project
COPY . .
# RUN sed -i 's/\r$//' ./scripts/**/*.sh
RUN ls -la
RUN npm run setup:ci && npm ci
RUN npm run verify
CMD ["npm", "run", "start"]
