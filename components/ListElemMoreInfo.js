import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../Style';

export default class listElemMoreInfo extends Component {
  render () {
    return (
      <View style={styles.listElemMoreInfo}>
        <Text style={styles.listElemMoreInfoText}>
            {
              !this.props.info && (
                <Text>Nie mamy więcej informacji</Text>
              )
            }
            {this.props.info}
        </Text>
    </View>

    )
  }
}

    