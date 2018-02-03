const Base64 = require('base-64');

const b64_lite = {
  atob(base64) {
    return Base64.decode(base64)
  },
  btoa(byteString) {
    return Base64.encode(byteString)
  }
}

module.exports = b64_lite;
