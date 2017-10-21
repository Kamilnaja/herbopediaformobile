import React, {Component} from 'react';
const SideMenu = require('react-native-side-menu');

class ContentView extends React {
  render () {
    return (
      <View>
        <Text>Welcome in herbopedia</Text>
        <Text>
        To get started, wciśnij przycisk
        </Text>
        <Text>
          Wciśnij ctrl + r aby przeładować stronę
        </Text>
      </View>
    )
  }
}