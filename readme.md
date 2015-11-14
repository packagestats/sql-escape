### sql-escape [![npm](http://img.shields.io/npm/v/sql-escape.svg)](https://npmjs.org/package/sql-escape) [![npm](http://img.shields.io/npm/dm/sql-escape.svg)](https://npmjs.org/package/sql-escape)

> Escape SQL special characters and quotes in strings

Just publishing code taken from http://stackoverflow.com/a/7760578/700897 for use in JS projects. I take no credit for this code.

`npm install sql-escape`

Usage:

```js
var escape = require('sql-escape');

var result = escape('my sweet "string"'); // my sweet \\"string\\"
```

