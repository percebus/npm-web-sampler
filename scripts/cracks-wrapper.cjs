/**
 * Promise-based wrapper for the `cracks` semantic-release plugin.
 *
 * The `cracks` package uses an old callback-based API that is incompatible
 * with semantic-release v24+ (which expects promise-based plugins).
 * This wrapper adapts the callback interface to a promise interface.
 */
"use strict"

const cracks = require("cracks")

function verifyRelease(pluginConfig, context) {
  return new Promise((resolve, reject) => {
    const opts = {
      paths: pluginConfig.paths || ["tests"],
      silent: pluginConfig.silent !== undefined ? pluginConfig.silent : true
    }

    cracks(opts, context, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

module.exports = { verifyRelease }
