// @flow

import React from 'react'
import { View } from 'react-native'
import NavigationService, { uriPrefix } from './Services/NavigationService'
import Routing from './Navigation/Routing'
import styles from './styles'

class ApplicationRoot extends React.Component<Props, State> {
  setNavigatorRef = (navigatorRef: any) => {
    NavigationService.setTopLevelNavigator(navigatorRef)
  }

  onNavigationStateChange = (prevState: any, currentState: any) => {}

  render() {
    return (
      <Routing
        onNavigationStateChange={this.onNavigationStateChange}
        setNavigatorRef={this.setNavigatorRef}
        uriPrefix={uriPrefix}
      />
    )
  }
}

export default ApplicationRoot
