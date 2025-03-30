const config = require("../config.rest.js")

module.exports = {
  frisby: config.frisby,
  host: {
    protocols: ["http", "https"],
    uri: "percebus.GitHub.IO/npm-web-sampler"
  }
}
