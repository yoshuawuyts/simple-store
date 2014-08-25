# simple-store
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Simple event emitting data store. Acts as the little brother to [dad][dad].
It lends itself well to store single-instance variables such as the current url
being viewed or configuration of the page.

## Installation
```bash
$ npm i --save simple-store
```
## Overview
```js
// Init store with a default value.
var store = require('simple-store');
var user = store({name: 'John', age: 26});

user.update({name: 'Tobi', age: 12});
user.get()
// => {name: 'Tobi'}

user.reset()
user.get()
// => {name: 'John', age: 26}
```

## API
#### store(defaultValue)
Initialize the store with a default value.
```js
var simpleStore = require('simple-store');
var store = simpleStore('/');
```

#### .get()
Get a value from the store.
```js
store.get();
// => '/'
```

#### .update(value)
Update the store with a value. Emits a `change` event.
```js
store.update('/404');
```

#### .reset()
Reset the store to its default value. Emits a `change` event.
```js
store.reset();
```

## Events
#### change[newValue, oldValue]
When the store is updated it emits a `change` event, providing
`newValue, oldValue` as arguments.

## License
[MIT](https://tldrlegal.com/license/mit-license) ©
[Yoshua Wuyts](yoshuawuyts.com)

[npm-image]: https://img.shields.io/npm/v/simple-store.svg?style=flat-square
[npm-url]: https://npmjs.org/package/simple-store
[travis-image]: https://img.shields.io/travis/yoshuawuyts/simple-store.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/simple-store
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/simple-store.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/simple-store?branch=master

[dad]: http://github.com/yoshuawuyts/dad
