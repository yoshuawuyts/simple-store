# simple-store
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Simple event emitting data store. It lends itself well to store
single-instance variables such as the current url being viewed or configuration
of the page.

## Installation
```sh
npm install simple-store
```
## Overview
```js
var store = require('simple-store');
var user = store('user');

user.set({name: 'Tobi', age: 12});

user.get()
// => {name: 'Tobi'}
```

## Debug
To enable debugging set in the browser console:
```
❯ localStorage.debug = '*';
```

## API
#### store(name)
Initialize the store with a given name.
```js
var simpleStore = require('simple-store');
var store = simpleStore('myStore');
```

#### .set(value)
Set the store to contain a value. Emits a `change` event.
```js
store.set('foo');
```

#### .get(namespace)
Get a value from the store. Emits a `get` event which can
be namespaced to allow for specific listeners.
```js
store.get();
// => 'foo'

store.on('get:myNamespace', console.log);
store.get('myNamespace');
// emit => 'foo'
```

## Events
#### get[:namespace]
Emits the current value in the store. Can optionally be namespaced to allow for
specific listeners (and prevent conflicts between modules), which makes it as
useful as callbacks to pass values around. If you want to suppress `debug`
messages you can pass in a `silent` namespace.
```js
store.on('get:jane', function() {
  console.log('jolly ranchers');
});

store.on('get:tobi', function() {
  console.log('furry ferrets');
});

store.get('tobi');
// emit => 'furry ferrets';
```

#### change(newValue, oldValue)
When the value inside the store is updated the store emits a `change` event.
```js
store.on('change', function(newValue, oldValue) {
  console.log(newValue, oldValue);
});
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
