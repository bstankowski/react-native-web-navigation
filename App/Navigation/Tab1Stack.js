// @flow

import React from 'react'
import { createStackNavigator } from 'react-navigation'

// Screens in stack
import Tab1Screen1 from '../Screens/Tab1Screen1'
import SharedScreen from '../Screens/SharedScreen'

const Tab1Stack = createStackNavigator({
  Tab1Screen1: {
    screen: Tab1Screen1,
    path: 'tab-1-screen-1'
  },

  Tab1Screen2: {
    screen: SharedScreen,
    path: 'tab-1-screen-2'
  }
})

export default Tab1Stack
