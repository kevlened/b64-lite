# b64-lite [![NPM](https://img.shields.io/npm/v/b64-lite.svg)](https://npmjs.com/package/b64-lite) [![Build](https://travis-ci.org/kevlened/b64-lite.svg?branch=master)](https://travis-ci.org/kevlened/b64-lite)

Node, browser (152 bytes), and React Native base64 library

## Usage

```javascript
const b64 = require('b64-lite');

// Base64 in ASCII to byte string
b64.atob('aGkgdGhlcmU=');
// hi there

// byte string to Base64 in ASCII
b64.btoa('hi there');
// aGkgdGhlcmU=

// convert unicode to b64
b64.toBase64('hello 你好');
// aGVsbG8g5L2g5aW9

// decode b64 to unicode
b64.fromBase64('aGVsbG8g5L2g5aW9');
// hello 你好
```

## Can it be smaller?

If you use ES6 imports with a bundler that supports tree-shaking, yes!

```javascript
import { toBase64 } from 'b64-lite'
```

## License

MIT
