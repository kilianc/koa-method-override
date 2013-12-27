/**
 * Middleware: overrides HTTP methods
 * based on connect method-override
 */

module.exports = function (key) {
  key = key || "_method"
  return function *override(next) {
    this.originalMethod = this.originalMethod || this.method

    if (key in this.query) {
      this.method = this.query[key].toLowerCase()
      delete this.query[key]
    }

    // check X-HTTP-Method-Override
    if (this.header['x-http-method-override']) {
      this.method = this.header['x-http-method-override'].toLowerCase()
    }

    // replace
    this.method = this.method.toUpperCase()

    yield next
  }
}