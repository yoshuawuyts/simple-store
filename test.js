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
  it('should initialize with a default value', function() {
    store.bind(store)
      .should.not.throw();

    store('foo')
      ._value.should.eql('foo');

    store('foo')
      ._defaultValue.should.eql('foo');
  });
});

describe('.get()', function() {
  it('should return the current value', function() {
    var x = store();
    x._value = 123;
    x.get().should.eql(123);
  });
});

describe('.update()', function() {
  it('should update the value', function() {
    var x = store();
    x._value = 123;
    x._value.should.eql(123);
    x.update('hello');
    x._value.should.eql('hello');
  });
});

describe('.reset()', function() {
  it('should reset the current value to the defaultValue', function() {
    var x = store();
    x._value = 123;
    x._defaultValue = 'howdy';
    x._value.should.eql(123);
    x.reset();
    x._value.should.eql('howdy');
  });
});
