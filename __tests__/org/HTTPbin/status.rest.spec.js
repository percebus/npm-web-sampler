describe("org.HTTPbin", () => {
  const _ = require("lodash")
  const frisby = require("frisby")
  const templates = {
    url: _.template("<%= protocol %>://HTTPbin.org/status/<%= status %>"),
  }

  _.forEach(["http", "https"], (protocol) => {
    describe(protocol, () => {
      describe("/status", () => {
        describe("GET", () => {
          describe("/200", () => {
            it('returns 200: "OK"', () => {
              const url = templates.url({ protocol, status: 200 })
              return frisby.get(url).expect("status", 200)
            })
          })

          describe("/418", () => {
            it('returns "Im a teapot"', () => {
              /*
               *  -=[ teapot ]=-
               *
               *     _...._
               *   .'  _ _ `.
               *  | ."` ^ `". _,
               *  \_;`"---"`|//
               *    |       ;/
               *    \_     _/
               *      `"""`
               */
              const url = templates.url({ protocol, status: 418 })
              return frisby
                .get(url)
                .expect("status", 418)
                .expect("bodyContains", "teapot")
            })
          })
        })
      })
    })
  })
})
