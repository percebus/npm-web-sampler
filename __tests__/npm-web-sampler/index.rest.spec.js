describe('IO.GitHub.percebus/npm-web-sampler/index.html', () => {
  'use strict'
  const _ = require('lodash')
  const config = require('./config')
  const host = config.host
  const frisby = config.frisby

  const templates = {
    url: _.template('<%= protocol %>://<%= uri %><%= path %>')
  }

  describe('GET', () => {
    _.forEach(host.protocols, (protocol) => {
      describe(protocol, () => {
        _.forEach(['', '/', '/index.html'], (path) => {
          describe(path, () => {
            const url = templates.url({ protocol, uri: host.uri, path })
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
                  .expect('bodyContains', '.png')
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
})
