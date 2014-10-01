/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var should = require('should');
var store = require('./index');

/**
 * Test
 */

describe('store()', function() {
  it('should catch errors', function() {
    store.bind(store, null, 123)
      .should.throw('Name should be a string');
  });

  it('should set a name', function() {
    store('foo')._name.should.eql('foo');
    store('bar')._name.should.eql('bar');
  });

  it('should emit events', function(done) {
    var x = store('x');
    x._value = 'foo';
    x.on('get', function(val) {
      val.should.eql('foo');
      done();
    });
    x.get();
  });

  it('should emit namespaced events', function(done) {
    var x = store('x');
    x._value = 'foo';
    x.on('get:bar', function(val) {
      val.should.eql('foo');
      done();
    });
    x.get('bar');
  });
});

describe('.get()', function() {
  it('should return the current value', function() {
    var x = store('x');
    x._value = 123;
    x.get().should.eql(123);
  });

  it('should emit a \'get\' event', function(done) {
    var x = store('x');
    x._value = 123;

    x.on('get', function(val) {
      val.should.eql(123);
      done();
    });

    x.get();
  });

  it('should accept getter namespaces', function(done) {
    var x = store('x');
    x._value = 123;

    x.on('get:derp', function(val) {
      val.should.eql(123);
      done();
    });

    x.get('derp');
  });

  it('should accept a \'silent\' namespace', function(done) {
    var x = store('x');
    x._value = 123;

    x.on('get', function(val) {
      val.should.eql(123);
      done();
    });

    x.get('silent');
  });
});
