// @flow

const path = require('path')
const webpack = require('webpack')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// const rootDirectory = path.resolve(__dirname, '../')
// const appDirectory = path.resolve(__dirname, '../App')

const loadersConfiguration = require('./loadersConfiguration')

module.exports = {
  // web-specific entry file
  entry: [
    // Need babel polyfills before we include the bundle
    'babel-polyfill',
    // Bundle has to come second
    path.resolve('index.web.js')
  ],

  // where the build ends up
  output: {
    filename: '[name].bundle.web.js',
    chunkFilename: '[name].bundle.web.js',
    path: path.resolve('./', 'public'),
    publicPath: '/'
    // publicPath: 'https://example.com/assets'
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  // ...the rest of your config
  module: {
    rules: [
      loadersConfiguration.babel,
      loadersConfiguration.images,
      loadersConfiguration.css
    ]
  },

  plugins: [
    // `process.env.NODE_ENV === 'production'` must be `true` for production
    // builds to eliminate development checks and reduce build size. You may
    // wish to include additional optimizations.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),

      __DEV__: process.env.NODE_ENV === 'production' || true
    })

    // new BundleAnalyzerPlugin()
  ],

  resolve: {
    // Web-specific module implementations in .web.js files
    extensions: ['.web.js', '.js']
  }
}
