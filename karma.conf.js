const webpack = require('webpack')

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'test/spec.js'
    ],
    preprocessors: {
      'test/spec.js': ['webpack']
    },
    webpack: {
      node: false
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    // config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless']
  })
}
