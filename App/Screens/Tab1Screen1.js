// @flow

import React from 'react'
import { AsyncStorage, Button, Text, View } from 'react-native'
import styles from '../styles'

export default class Tab1Screen1 extends React.Component {
  static navigationOptions = {
    title: 'Tab 1 Screen 1'
  }

  signOutAsync = async () => {
    await AsyncStorage.clear()
    this.props.navigation.navigate('Auth')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Tab 1 Screen 1</Text>

        <View style={styles.buttonWrapper}>
          <Button
            title="Go to Tab 1 Screen 2"
            onPress={() =>
              this.props.navigation.navigate('Tab1Screen2', {
                title: 'Tab 1 Screen 2',
                text: 'Screen text'
              })
            }
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            title="Open Modal"
            onPress={() => this.props.navigation.navigate('Modal')}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            title="Sign me out"
            onPress={this.signOutAsync}
            color="tomato"
          />
        </View>
      </View>
    )
  }
}
