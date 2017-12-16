const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const pkg = require('./package.json')
const node_modules = require('webpack-node-externals')()

module.exports = [
  // minified browser
  {
    entry: path.join(__dirname, 'mjs/browser.mjs'),
    output: {
      library: 'b64Lite',
      libraryTarget: 'umd',
      filename: `${pkg.name}.min.js`
    },
    module: {
      rules: [
        {
          test: /\.(js|mjs)$/,
          use: {
            loader: 'babel-loader',
            options: {
              forceEnv: 'browser'
            }
          }
        }
      ]
    },
    plugins: [
      new UglifyJSPlugin()
    ]
  },

  // transpiled browser using commonjs
  {
    entry: path.join(__dirname, 'mjs/browser.mjs'),
    output: {
      library: 'b64Lite',
      libraryTarget: 'umd',
      filename: `browser.js`
    },
    node: false,
    externals: [node_modules],
    module: {
      rules: [
        {
          test: /\.(js|mjs)$/,
          use: {
            loader: 'babel-loader',
            options: {
              forceEnv: 'browser'
            }
          }
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.join(__dirname, 'mjs/index.js')
        }
      ])
    ]
  },

  // transpiled node.js
  {
    entry: path.join(__dirname, 'mjs/node.mjs'),
    output: {
      libraryTarget: 'commonjs',
      filename: `node.js`
    },
    target: 'node',
    externals: [node_modules],
    module: {
      rules: [
        {
          test: /\.(js|mjs)$/,
          use: {
            loader: 'babel-loader',
            options: {
              forceEnv: 'node'
            }
          }
        }
      ]
    }
  }
]
