import React, { Component } from 'react';
import { 
  Text, 
  View,
  Button,
} from 'react-native';
import SideMenu from './SideMenu';
import styles from '../Style';
export default class TopBar extends Component {


  render () {
    return (
      <View style={styles.topBar}>
        <Text style={{color: "white"}}>
        Herbopedia
        </Text>
      <Button
        title="menu"
        onPress={this.props.toggleMenu.bind(this)}
        color="darkslategrey"
      />
      </View>
    )
  }
}