// @flow

import React from 'react'
import { YellowBox } from 'react-native'
import ApplicationRoot from './ApplicationRoot'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

export default class App extends React.Component<{}> {
  render() {
    return <ApplicationRoot />
  }
}
