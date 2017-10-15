import React from 'react';
import {Text, View, FlatList } from 'react-native';

export default class HerbsList extends React.Component {
render() {

    return (
      <View>
        <View>
          <FlatList
            data={this.props.herbsList}
            renderItem={({item}) => <Text>id: {item.id} | name: {item.name}</Text>}
          />
        </View>
      </View>
    );
  }
}