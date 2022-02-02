describe('com.google.*', () => {
  const frisby = require('frisby')
  describe('GET', () => {
    it('returns Google Search page', () => {
      return frisby
        .get('https://google.com')
        .expect('status', 200)
        .expect('bodyContains', 'Google')
    })
  })
})
