import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class SingleHerbList extends React.Component {
  render () {
    return (
      <View key={this.props.id} style={styles.listElem}>
        <Text style={styles.circle}>
          {this.props.id}
        </Text>
        <Text style={styles.textItem}>
          {this.props.name}
        </Text>
      </View>
    )
  }
}

var styles = StyleSheet.create ({
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    lineHeight: 25,
    marginRight: 20,
    marginLeft: 10
  },
  listElem: {
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    flexDirection: 'row',
    display: 'flex',
    paddingLeft: 5,
    height: 50,
    alignItems: 'center'
  },
});