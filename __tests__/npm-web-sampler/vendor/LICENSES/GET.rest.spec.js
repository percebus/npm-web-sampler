describe('IO.GitHub.percebus', () => {
  'use strict'
  const _ = require('lodash')
  const frisby = require('frisby')

  _.forEach(['http', 'https'], (protocol) => {
    describe('/npm-web-sampler', () => {
      describe('/vendor', () => {
        const templates = {
          url: _.template(
            '<%= protocol %>://percebus.GitHub.IO/npm-web-sampler/vendor/LICENSES.md'
          )
        }

        describe('LICENSES.md', () => {
          describe('GET', () => {
            describe(protocol, () => {
              const url = templates.url({ protocol })
              it('contains the expected LICENSES', () => {
                return frisby
                  .get(url)
                  .expect('status', 200)
                  .expect('bodyContains', 'MIT')
                  .expect('bodyContains', 'The MIT License')
              })
            })
          })
        })
      })
    })
  })
})
