// @flow

const path = require('path')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.config.common.js')

module.exports = merge(common, {
  mode: 'production',

  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
})
