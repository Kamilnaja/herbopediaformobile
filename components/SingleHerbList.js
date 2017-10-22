import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import styles from '../Style';
import ListElemMoreInfo from './ListElemMoreInfo';
export default class SingleHerbList extends React.Component {
  constructor(props) {
    super();
    this.state = ({
      isOpened: false,
    })
  }
  openItem () {
    this.setState({
      isOpened: !this.state.isOpened,
    })
    console.log(this.state.isOpened)
  }
  
  render () {
    return (
      <View 
        style={styles.listElemWrapper}
        >
        <View
          key={this.props.id}
          style={styles.listElem}
        >
          <Text 
            style={styles.circle} 
            key={this.props.id}
          >
            {this.props.id}
          </Text>
          <TouchableHighlight>
          <Text 
            style={styles.textItem} 
            key={this.props.textItem}
            onPress={this.openItem.bind(this)}
          >
          {this.props.name}
          </Text>
          </TouchableHighlight>
      </View>
      {
        this.state.isOpened && (
        <ListElemMoreInfo 
          opened={this.state.isOpened} 
          info={this.props.info}
        />
    )
  }
      </View>
    )
  }
}