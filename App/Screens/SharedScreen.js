// @flow

import React from 'react'
import { Button, Text, View } from 'react-native'
import styles from '../styles'

export default class Tab1Screen1 extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title || 'Shared Screen'
    }
  }

  render() {
    const text = this.props.navigation.state.params
      ? this.props.navigation.state.params.text
      : null

    return (
      <View style={styles.container}>
        {text ? <Text style={styles.paragraph}>{text}</Text> : null}

        <View style={styles.buttonWrapper}>
          <Button title="Back" onPress={() => this.props.navigation.goBack()} />
        </View>
      </View>
    )
  }
}
