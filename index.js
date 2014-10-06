/**
 * Module dependencies.
 */

var Emitter = require('events').EventEmitter;
var assert = require('assert');
var debug = require('debug');

/**
 * Expose 'Aggregate'.
 */

exports = module.exports = Store;

/**
 * 'Aggregate' prototype.
 */

var store = Store.prototype;

/**
 * Create a new 'Store'.
 *
 * @param {String} name
 * @api public
 */

function Store(name) {
  if (!(this instanceof Store)) return new Store(name);

  assert('string' == typeof name, 'Name should be a string');

  this.debug = debug('store:' + name);
  this._name = name;

  return this;
};

/**
 * Inherit from `Emitter.prototype`.
 */

Store.prototype.__proto__ = Emitter.prototype;

/**
 * Get the current value.
 *
 * @param {String} namespace
 * @return {Object[]}
 * @api public
 */

store.get = function(namespace) {
  var id = !namespace
    ? 'get'
    : 'silent' == namespace
    ? 'get'
    : 'get:' + namespace;

  this.emit(id, this._value);
  if ('silent' != namespace) this.debug('get ', this._value);
  return this._value;
};

/**
 * Update the current value.
 *
 * @param {Any} value
 * @api public
 */

store.set = function(value) {
  var oldValue = this._value;
  this._value = value;
  this.debug('set ', this._value, oldValue);
  this.emit('change', this._value, oldValue);
};
