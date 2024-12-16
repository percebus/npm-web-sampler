describe('IO.GitHub.percebus', () => {
  'use strict'
  const _ = require('lodash')
  const frisby = require('frisby')

  _.forEach(['http', 'https'], (protocol) => {
    describe('/npm-web-sampler', () => {
      const templates = {
        url: _.template('<%= protocol %>://percebus.GitHub.IO/npm-web-sampler')
      }

      describe('GET', () => {
        describe(protocol, () => {
          const url = templates.url({ protocol })

          it('returns contains expected content', () => {
            return (
              frisby
                .get(url)
                .expect('status', 200)
                //
                // text
                .expect('bodyContains', 'Lorem Ipsum')
                //
                // tags
                .expect('bodyContains', 'src="img/percebus.png"')
                //
                // LICENSES
                .expect('bodyContains', 'LICENSE')
                .expect('bodyContains', 'LICENSES')
            )
          })
        })
      })
    })
  })
})
