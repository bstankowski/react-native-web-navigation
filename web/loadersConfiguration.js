// @flow

const path = require('path')
const rootDirectory = path.resolve(__dirname, '../')

module.exports = {
  // This is needed for webpack to compile JavaScript.
  // Many OSS React Native packages are not compiled to ES5 before being
  // published. If you depend on uncompiled packages they may cause webpack build
  // errors. To fix this webpack can be configured to compile to the necessary
  // `node_module`.
  babel: {
    test: /\.js$/,
    // Add every directory that needs to be compiled by Babel during the build.
    include: [
      path.resolve('index.web.js'),
      path.resolve(rootDirectory, 'App'),
      path.resolve(rootDirectory, 'node_modules/react-navigation'),
      path.resolve(rootDirectory, 'node_modules/react-native-drawer-layout'),
      path.resolve(rootDirectory, 'node_modules/react-native-dismiss-keyboard'),
      path.resolve(rootDirectory, 'node_modules/react-native-safe-area-view'),
      path.resolve(rootDirectory, 'node_modules/react-native-tab-view')
    ],
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: false,
        // Babel configuration (or use .babelrc)
        plugins: [
          // This is needed to polyfill ES6 async code in some of the above modules
          'babel-polyfill',

          // This aliases 'react-native' to 'react-native-web' to fool modules
          // that only know about the former into some kind of compatibility.
          'react-native-web'
        ],
        // The 'react-native' preset is recommended to match React Native's packager
        presets: ['react-native']
      }
    }
  },

  images: {
    test: /\.(gif|jpe?g|png|svg)$/,
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }
  },

  css: {
    test: /\.css$/,
    loader: ['style-loader', 'css-loader']
  }
}
