if (typeof process !== 'undefined') {
  module.exports = require('./node')
} else {
  module.exports = require('./browser')
}
