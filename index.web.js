// @flow

import React from 'react'
import { AppRegistry } from 'react-native'
import WebApp from './App/App'

AppRegistry.registerComponent('App', () => WebApp)

AppRegistry.runApplication('App', {
  rootTag: document.getElementById('react-app')
})
