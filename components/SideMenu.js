import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native'

export default class SideMenu extends Component {
  render () {
    return (
      <View style={styles.modal}>
        <Text>Modal jest widoczny</Text>
      </View>
    )
  }
}