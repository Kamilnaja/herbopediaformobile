import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native'
import styles from '../Style';

export default class SideMenu extends Component {
  render () {
    return (
      <View style={styles.modal}>
        <Text style={styles.textItem}>Menu</Text>
        <FlatList 
          data={[{key : 'item1'}, {key: 'item2'}, {key: 'item3'}]}
          renderItem={({item, idx}) => 
          <Text key={idx}>
            {item.key}
          </Text>
        }
        >
        
        </FlatList>
      </View>
    )
  }
}