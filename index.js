var Emitter = require('events').EventEmitter
var debug = require('debug')

module.exports = store

// create a store
// str -> obj
function store (name) {
  const log = debug(name ? 'store:' + name : 'store')
  const emitter = new Emitter()
  var value = null

  set.on = on
  set.set = set
  set.get = get

  return set

  // update the current value
  // emits: 'data' (new, old)
  // any -> null
  function set (nw) {
    if (!arguments.length) return get()
    const old = value
    value = nw
    log('set ', nw, old)
    emitter.emit('data', nw, old)
  }

  // get the current value
  // null -> any
  function get () {
    return value
  }

  // set a change listener
  // str, fn -> null
  function on (event, cb) {
    return emitter.on(event, cb)
  }
}
