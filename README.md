# b64-lite [![NPM](https://img.shields.io/npm/v/b64-lite.svg)](https://npmjs.com/package/b64-lite) [![Build](https://travis-ci.org/kevlened/b64-lite.svg?branch=master)](https://travis-ci.org/kevlened/b64-lite)

Node, React Native, and browser (86 bytes) base64 library

## Usage

```javascript
const b64 = require('b64-lite');

// Base64 in ASCII to byte string
b64.atob('aGkgdGhlcmU=');
// hi there

// byte string to Base64 in ASCII
b64.btoa('hi there');
// aGkgdGhlcmU=
```

## Can it be smaller?

If you use ES6 imports with a bundler that supports tree-shaking, yes!

```javascript
import { atob } from 'b64-lite'
```

## License

MIT
