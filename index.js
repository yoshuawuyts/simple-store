/**
 * Module dependencies.
 */

var debug = require('debug')('simple-store');
var Emitter = require('events').EventEmitter;
var assert = require('assert');

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
 * @param {Any} defaultValue
 * @api public
 */

function Store(defaultValue) {
  assert(emitters, 'Emitters should be an object');
  if (!(this instanceof Store)) return new Store(defaultValue);
  this._value = this._defaultValue = defaultValue;

  return this;
};

/**
 * Inherit from `Emitter.prototype`.
 */

Store.prototype.__proto__ = Emitter.prototype;

/**
 * Get.
 *
 * @api public
 */

store.get = function() {
  return this._value;
}

/**
 * Update.
 *
 * @param {Any} value
 * @api public
 */

store.update = function(value) {
  this.emit('change', value, this._value);
  this._value = value;
}

/**
 * Remove.
 *
 * @api public
 */

store.reset = function() {
  this.emit('change', this._defaultValue, this._value);
  this._value = this._defaultValue;
}
