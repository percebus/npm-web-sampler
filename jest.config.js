module.exports = {
  bail: 0,
  verbose: true,
  reporters: [
    'default',
    // 'github-actions', // FIXME
    'jest-junit'
  ]
}
