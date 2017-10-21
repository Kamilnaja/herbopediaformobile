import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
} from 'react-native';

export default class TopBar extends Component {
  render () {
    return (
      <View style={styles.topBar}>
        <Text style={{color: "white"}}>
        Herbopedia
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  topBar: {
    height: 80,
    backgroundColor: 'cornflowerblue',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
})

