import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import styles from '../Style';

export default class SingleHerbList extends React.Component {
  constructor(props) {
    super();
    this.state = ({
      isOpened: false,
      height: 50
    })
  }
  openItem () {
    if (this.state.isOpened) {
      this.setState({height: 150})
    } else {
      this.setState({height: 50 })
    }
    this.setState({
      isOpened: !this.state.isOpened,
    })
    console.log(this.state.isOpened)
  }

listElemStyle (option) {
  return {
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    flexDirection: 'row',
    display: 'flex',
    paddingLeft: 5,
    height: option,
    alignItems: 'center',
  }
}

  render () {
    return (
      <View
        key={this.props.id}
        style={this.listElemStyle(this.state.height)}
      >
        <Text 
          style={styles.circle} 
          key={this.props.id}
          >
          {this.props.id}
        </Text>
        <Text 
          style={styles.textItem} 
          key={this.props.textItem}
          onPress={this.openItem.bind(this)}
          >
          {this.props.name}
      
        </Text>
      </View>
    )
  }
}