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
 * @param {Object} opts
 * @api public
 */

function Store(defaultValue, opts) {
  if (!(this instanceof Store)) return new Store(defaultValue, opts);

  var optsError = 'Opts should be an object';
  assert('object' == typeof opts || 'undefined' == typeof opts, optsError);

  this._value = this._defaultValue = defaultValue;
  this._opts = opts || {};
  this._opts.name = this._opts.name || 'store';

  return this;
};

/**
 * Inherit from `Emitter.prototype`.
 */

Store.prototype.__proto__ = Emitter.prototype;

/**
 * Get the current value.
 *
 * @api public
 */

store.get = function() {
  return this._value;
}

/**
 * Update the current value.
 *
 * @param {Any} value
 * @api public
 */

store.update = function(value) {
  this._value = value;
  this.emit('change', value, this._value);
  debug('Updated \'' + this._opts.name + '\'', value);
}

/**
 * Reset to the default value.
 *
 * @api public
 */

store.reset = function() {
  this._value = this._defaultValue;
  this.emit('change', this._defaultValue, this._value);
  debug('Updated \'' + this._opts.name + '\'', this._value);
}
