const config = require("../config.rest.js")

module.exports = {
  frisby: config.frisby,
  environment: "production", // what was used when built and deployed
  host: {
    protocols: ["http", "https"],
    uri: "percebus.GitHub.IO/npm-web-sampler"
  }
}
