// @flow

import React from 'react'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import Tabs from './TabsStack'
import Modal from './ModalStack'
import InitialRoute from '../Screens/InitialRouteScreen'
import SignInScreen from '../Screens/SignInScreen'

const appPages = {
  Tabs: {
    screen: Tabs,
    path: 'tabs'
  },

  Modal: {
    screen: Modal,
    path: 'modal'
  }
}

const authPages = {
  SignIn: {
    screen: SignInScreen,
    path: 'sign-in'
  }
}

const config = {
  mode: 'modal',
  headerMode: 'none'
}

const AppStack = createStackNavigator(appPages, config)
const AuthStack = createStackNavigator(authPages, config)

export default createSwitchNavigator(
  {
    InitialRoute: InitialRoute,
    App: {
      screen: AppStack,
      path: 'app'
    },
    Auth: {
      screen: AuthStack,
      path: 'auth'
    }
  },
  {
    initialRouteName: 'InitialRoute'
  }
)
