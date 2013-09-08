/**
 * Module dependencies
 */

/**
 * Module exports
 */

exports = module.exports = override;

/**
 * Override
 */

function override(key) {
  key = key || "_method";
  return function(next){
    return function*(){
      var body = yield this.parseUrlencoded;

      if (body && body[key]) {
        this.originalMethod = this.method;
        this.method = body[key].toLowerCase();
      }

      if (this.req.headers['x-http-method-override']) {
        this.method = this.req.headers['x-http-method-override'].toLowerCase();
      }

      return yield next;
    };
  };
}