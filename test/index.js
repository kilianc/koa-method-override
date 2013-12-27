var assert = require('chai').assert
  , get = require('request').defaults({ json: true }).get
  , app = require('koa')()
  , mount = require('koa-mount')
  , override = require('../')

describe('override()', function () {
  before(function (done) {
    app.use(override('m'))
    app.use(mount('/test', function *() {
      this.body = this.method
    }))
    app.listen(3000, done)
  })

  it('should override method / querystring', function (done) {
    get('http://localhost:3000/test?m=put', function (err, res, body) {
      if (err) done(err)
      assert.equal(body, 'PUT')
      done()
    })
  })

  it('should override method / x-http-method-override', function (done) {
    get('http://localhost:3000/test?m=put', {
      headers: { 'x-http-method-override': 'DELETE' }
    }, function (err, res, body) {
      if (err) done(err)
      assert.equal(body, 'DELETE')
      done()
    })
  })
})