// @flow

import React from 'react'
import { createStackNavigator } from 'react-navigation'

// Screens in stack
import Tab2Screen1 from '../Screens/Tab2Screen1'
import SharedScreen from '../Screens/SharedScreen'

const Tab2Stack = createStackNavigator({
  Tab2Screen1: {
    screen: Tab2Screen1,
    path: 'tab-2-screen-1'
  },

  Tab2Screen2: {
    screen: SharedScreen,
    path: 'tab-2-screen-2'
  }
})

export default Tab2Stack
