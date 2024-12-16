describe('IO.GitHub.percebus/npm-web-sampler', () => {
  'use strict'
  const _ = require('lodash')
  const frisby = require('frisby')

  describe('/LICENSE.md', () => {
    const templates = {
      url: _.template(
        '<%= protocol %>://percebus.GitHub.IO/npm-web-sampler/LICENSE.md'
      )
    }

    describe('GET', () => {
      _.forEach(['http', 'https'], (protocol) => {
        describe(protocol, () => {
          const url = templates.url({ protocol })
          it('contains the expected LICENSES', () => {
            return frisby
              .get(url)
              .expect('status', 200)
              .expect('bodyContains', 'The UnLicense')
          })
        })
      })
    })
  })
})
