// @flow

import React from 'react'
import { AsyncStorage, Button, Text, View } from 'react-native'
import styles from '../styles'

class SignInScreen extends React.Component {
  signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc')
    this.props.navigation.navigate('App')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in" onPress={this.signInAsync} />
      </View>
    )
  }
}

export default SignInScreen
