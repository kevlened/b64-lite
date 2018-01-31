const Base64 = require('base-64');

const b64_lite = {
  atob(base64) {
    return Base64.decode(base64)
  },
  btoa(byteString) {
    return Base64.encode(byteString)
  },
  toBase64(string) {
    return b64_lite.btoa(unescape(encodeURIComponent(string)))
  },
  fromBase64(b64) {
    return decodeURIComponent(escape(b64_lite.atob(b64)))
  }
}

module.exports = b64_lite;
