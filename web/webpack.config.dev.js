// @flow

const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.config.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    compress: false,
    port: 3002,
    host: 'localhost',
    historyApiFallback: true
  }
})
