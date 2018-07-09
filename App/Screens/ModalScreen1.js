import React from 'react'
import { Button, Text, View } from 'react-native'
import styles from '../styles'

export default class ModalScreen1 extends React.Component {
  static navigationOptions = {
    title: 'Modal Screen 1'
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonWrapper}>
          <Button
            title="Go to Modal Screen 2"
            onPress={() =>
              this.props.navigation.navigate('ModalScreen2', {
                title: 'Modal screen 2'
              })
            }
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            title="Close Modal"
            onPress={() => this.props.navigation.goBack(null)}
          />
        </View>
      </View>
    )
  }
}
