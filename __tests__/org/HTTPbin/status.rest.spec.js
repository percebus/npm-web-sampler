describe('org.HTTPbin/', () => {
  const frisby = require('frisby')
  describe('status/', () => {
    describe('GET', () => {
      describe('418', () => {
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
          return frisby
            .get('http://HTTPbin.org/status/418')
            .expect('status', 418)
            .expect('bodyContains', 'teapot')
        })
      })
    })
  })
})
