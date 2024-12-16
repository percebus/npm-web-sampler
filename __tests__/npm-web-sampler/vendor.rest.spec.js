describe('IO.GitHub.percebus/npm-web-sampler', () => {
  'use strict'
  const _ = require('lodash')
  const frisby = require('frisby')

  describe('/vendor', () => {
    describe('/LICENSES.md', () => {
      const now = new Date()
      const year = now.getFullYear() // i.e. 2024
      const templates = {
        url: _.template(
          '<%= protocol %>://percebus.GitHub.IO/npm-web-sampler/vendor/LICENSES.md'
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
                .expect('bodyContains', 'MIT')
                .expect('bodyContains', 'The MIT License')
                .expect('bodyContains', year)
            })
          })
        })
      })
    })
  })
})
