var assert = require('assert');
var koa = require('koa');
var request = require('request');
var bodyParser = require('koa-body-parser');
var methodOverride = require('..');

describe('method override', function() {

  it('should override post method with put', function(done) {
    var app = koa();
    app.context(bodyParser);
    app.use(methodOverride());

    app.use(function(next) {
      return function * () {
        assert(this.method === "put");
        done();
      };
    });

    request.post('http://localhost:9090', {
      form: {
        _method: 'PUT'
      }
    }, function(error, response, body) {

    });


    app.listen(9090);
  });

  it('should override post method with patch', function(done) {
    var app = koa();
    app.context(bodyParser);
    app.use(methodOverride());

    app.use(function(next) {
      return function * () {
        assert(this.method === "patch");
        done();
      };
    });

    request.post('http://localhost:9091', {
      form: {
        _method: 'PATCH'
      }
    }, function(error, response, body) {

    });

    app.listen(9091);
  });

});