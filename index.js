const Emitter = require('events').EventEmitter
const debug = require('debug')
const from = require('from2')

module.exports = store

// create a store
// str -> obj
function store (name) {
  const log = debug(name ? 'store:' + name : 'store')
  const emitter = new Emitter()
  var value = null
  var tmp = null
  var rs = null

  set.createReadStream = createReadStream()
  set.set = set
  set.get = get
  set.on = on

  return set

  // update the current value
  // emits: 'data' (new, old)
  // any -> null
  function set (nw) {
    if (!arguments.length) return get()
    const old = value
    value = nw
    log('set ', nw, old)
    if (rs) {
      tmp = nw
      rs.push(nw)
    }
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

  // create a readable stream
  // obj -> stream
  function createReadStream (opts) {
    return from.ctor({}, read)

    // readableStream read function
    // number -> null
    function read (size, next) {
      console.log('tmp', tmp)
      if (!tmp || tmp.length <= 0) return this.push(null)

      var chunk = tmp.slice(0, size)
      tmp = tmp.slice(size)

      next(null, chunk)
    }
  }
}
