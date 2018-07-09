import React from 'react'
import { Button, Text, View } from 'react-native'
import styles from '../styles'

export default class Tab2Screen1 extends React.Component {
  static navigationOptions = {
    title: 'Tab 2 Screen 1'
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.paragraph}>
          <Text>Tab 2 Screen 1</Text>
        </View>

        <Button
          title="Go to Tab 2 Screen 2"
          onPress={() =>
            this.props.navigation.navigate('Tab2Screen2', {
              title: 'Tab 2 Screen 2'
            })
          }
        />
      </View>
    )
  }
}
