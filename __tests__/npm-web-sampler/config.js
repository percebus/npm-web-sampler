const config = require("../config.rest.js")

module.exports = {
  frisby: config.frisby,
  environment: "production", // what was used when built and deployed
  host: {
    // parcel
    // npm start
    // TODO move to .env or something
    // protocols: ["http"],
    // uri: "localhost:1234"

    // percebus.GitHub.IO
    protocols: ["http", "https"],
    uri: "percebus.GitHub.IO/npm-web-sampler"
  }
}
