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

function override() {
  return function(next){
    return function*(){
      var body = yield this.parseUrlencoded;
      if (body && body._method) {
        this._method = this.method;
        this.method = body._method;
      }
      return yield next;
    };
  };
}