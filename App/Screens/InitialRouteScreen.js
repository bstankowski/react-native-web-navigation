// @flow

import React from 'react'
import { AsyncStorage } from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation'

class InitialRouteScreen extends React.Component {
  constructor(props) {
    super(props)
    this.bootstrapAsync()
  }

  bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken')
    this.props.navigation.navigate(userToken ? 'App' : 'Auth')
  }

  render() {
    return null
  }
}

export default InitialRouteScreen
