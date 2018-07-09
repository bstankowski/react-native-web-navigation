// @flow

import React from 'react'
import AppNavigator from './AppNavigator'

type Props = {
  setNavigatorRef: Function,
  uriPrefix: string
}

class Routing extends React.PureComponent<Props> {
  render() {
    return (
      <AppNavigator
        ref={this.props.setNavigatorRef}
        uriPrefix={this.props.uriPrefix}
      />
    )
  }
}

export default Routing
