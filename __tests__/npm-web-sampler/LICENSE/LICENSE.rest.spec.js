describe("IO.GitHub.percebus/npm-web-sampler/LICENSE.md", () => {
  "use strict"
  const _ = require("lodash")
  const config = require("../config")
  const host = config.host
  const frisby = config.frisby

  const templates = {
    url: _.template("<%= protocol %>://<%= uri %>/LICENSE.md")
  }

  describe("GET", () => {
    _.forEach(host.protocols, (protocol) => {
      describe(protocol, () => {
        const url = templates.url({ protocol, uri: host.uri })
        it("contains the expected LICENSES", () => {
          return frisby
            .get(url)
            .expect("status", 200)
            .expect("bodyContains", "The UnLicense")
        })
      })
    })
  })
})
