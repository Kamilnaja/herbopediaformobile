import React from 'react';
import {Text, View } from 'react-native';

export default class HerbsList extends React.Component {
render() {

    return (
      <View>
        {console.log(Object.keys(this.props.herbsList))}
        <View>
          {
            Object.keys(this.props.herbsList).map((item, idx) => <Text>{this.props.herbsList[idx].name}</Text>)
          }
        </View>
      </View>
    );
  }
}