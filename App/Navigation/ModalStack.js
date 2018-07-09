// @flow

import React from 'react'
import { createStackNavigator } from 'react-navigation'

// Screens in modal
import ModalScreen1 from '../Screens/ModalScreen1'
import SharedScreen from '../Screens/SharedScreen'

const NewBadgeTaskStack = createStackNavigator({
  ModalScreen1: {
    screen: ModalScreen1,
    path: 'modal-screen-1'
  },

  ModalScreen2: {
    screen: SharedScreen,
    path: 'modal-screen-2'
  }
})

export default NewBadgeTaskStack
