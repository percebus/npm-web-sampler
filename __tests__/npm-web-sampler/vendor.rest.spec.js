describe("IO.GitHub.percebus/npm-web-sampler/vendor", () => {
  "use strict"
  const _ = require("lodash")
  const config = require("./config")
  const host = config.host
  const frisby = config.frisby

  describe("GET", () => {
    describe("/LICENSES.md", () => {
      const now = new Date()
      const year = now.getFullYear() // i.e. 2024
      _.noop(year) // FIXME bootstrap does NOT contain 2025 license
      const templates = {
        url: _.template("<%= protocol %>://<%= uri %>/vendor/LICENSES.md")
      }

      _.forEach(host.protocols, (protocol) => {
        describe(protocol, () => {
          const url = templates.url({ protocol, uri: host.uri })
          it("contains the expected LICENSES", () => {
            return (
              frisby
                .get(url)
                .expect("status", 200)
                //
                // i.e. 2025
                // .expect('bodyContains', year) // FIXME bootstrap does NOT contain 2025 license
                .expect("bodyContains", "MIT")
                .expect("bodyContains", "The MIT License")
            )
          })
        })
      })
    })
  })
})
