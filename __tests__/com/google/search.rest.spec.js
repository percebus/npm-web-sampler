describe("com.google.*", () => {
  const _ = require("lodash")
  const frisby = require("frisby")
  const templates = {
    url: _.template("<%= protocol %>://google.com"),
  }

  _.forEach(["http", "https"], (protocol) => {
    const url = templates.url({ protocol })
    describe(protocol, () => {
      describe("GET", () => {
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
