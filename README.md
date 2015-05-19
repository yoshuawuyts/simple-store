# simple-store
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Event emitting data store.

## Installation
```sh
$ npm install simple-store
```

## Usage
```js
const store = require('simple-store')
const user = store('user')

user.on('data', val => console.log(val))
user({name: 'Tobi', age: 12})

user()
// => {name: 'Tobi', age: 12}
```

## API
### s = store(name)
Initialize a store with a name.

### s(value)
Set the store to contain a value. Emits a `data` event. Alias: `.set(value)`.

### s()
Get a value from the store. Alias: `.get()`.

## Events
```txt
data - emitted whenever the value in the store is set
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/simple-store.svg?style=flat-square
[npm-url]: https://npmjs.org/package/simple-store
[travis-image]: https://img.shields.io/travis/yoshuawuyts/simple-store.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/simple-store
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/simple-store.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/simple-store?branch=master
[downloads-image]: http://img.shields.io/npm/dm/simple-store.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/simple-store
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
