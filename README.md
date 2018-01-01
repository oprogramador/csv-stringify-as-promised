[![MIT License](https://img.shields.io/badge/license-mit-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/oprogramador/csv-stringify-as-promised.svg?branch=master)](https://travis-ci.org/oprogramador/csv-stringify-as-promised
)

[![NPM status](https://nodei.co/npm/csv-stringify-as-promised.png?downloads=true&stars=true)](https://npmjs.org/package/csv-stringify-as-promised)


# csv-stringify-as-promised

The [`csv-stringify`](http://npmjs.com/csv-stringify) is great, but it doesn't support promises! This module is a lightweight promise wrapper around it. The only prod dependency is `csv-stringify`.

## Usage

```js
const stringify = require('csv-stringify-as-promised');
const assert = require('assert');

const input = [ [ '1', '2', '3', '4' ], [ 'a', 'b', 'c', 'd' ] ];

stringify(input).then((output) => {
  assert.equal(output,
`1,2,3,4
a,b,c,d
`);
}).catch((err) => {
  assert.fail(err);
});
```

You can pass any [`csv-stringify` options](http://csv.adaltas.com/stringify/) by passing an object as the second argument.

```js
const stringify = require('csv-stringify-as-promised');
const assert = require('assert');
const options = { quotedString: true }
const input = [ [ '1', '2', '3', '4' ], [ 'a', 'b', 'c', 'd' ] ];

stringify(input, options).then((output) => {
  assert.equal(output,
`"1","2","3","4"
"a","b","c","d"
`);
}).catch((err) => {
  assert.fail(err);
});
```


### Use your own promise library

By default, this module uses Node's builtin `Promise` object, but if you prefer to use a different promise library, you can do so simply by overwriting the `Promise` property on the module.

```js
const stringify = require('csv-stringify-as-promised');
const bluebird = require('bluebird');

stringify.Promise = bluebird;

const input = [ [ '1', '2', '3', '4' ], [ 'a', 'b', 'c', 'd' ] ];

stringify(input).then((output) => {
  // uses bluebird instead of Promise
}).catch((err) => {
  // handle error
});
```

### Use your own csv-stringify library

By default, this module uses `csv-stringify` library, but if you prefer to use a different CSV library, you can do so simply by overwriting the `csvStringify` property on the module.

```js
const stringify = require('csv-stringify-as-promised');

stringify.csvStringify = yourCustomLibrary;
```

## Requirements

This module requires NodeJS 8 or greater

## Tests

```
npm t
```
