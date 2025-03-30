describe("com.google.*", () => {
  const _ = require("lodash")
  const frisby = require("frisby")
  const templates = {
    url: _.template("<%= protocol %>://google.com")
  }

  describe("GET", () => {
    _.forEach(["https"], (protocol) => {
      describe(protocol, () => {
        const url = templates.url({ protocol })
        it("returns Google Search page", () => {
          return frisby
            .get(url)
            .expect("status", 200)
            .expect("bodyContains", "Google")
        })
      })
    })
  })
})
