import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import styles from '../Style';

export default class SingleHerbList extends React.Component {
  openItem () {
    {/* fire up function */}
  }
  render () {
    return (
      <View key={this.props.id} style={styles.listElem}>
        <Text style={styles.circle} key={this.props.id}>
          {this.props.id}
        </Text>
        <Text style={styles.textItem} key={this.props.textItem}>
          {this.props.name}
        </Text>
      </View>
    )
  }
}