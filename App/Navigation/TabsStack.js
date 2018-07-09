// @flow

import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

// Stacks
import Tab1Stack from './Tab1Stack'
import Tab2Stack from './Tab2Stack'

const Tabs = createBottomTabNavigator({
  Tab1: {
    screen: Tab1Stack,
    path: 'tab-1-stack'
  },

  Tab2: {
    screen: Tab2Stack,
    path: 'tab-2-stack'
  }
})

export default Tabs
