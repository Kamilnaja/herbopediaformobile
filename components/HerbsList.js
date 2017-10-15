import React from 'react';
import {Text, View, FlatList } from 'react-native';
import SingleHerbList from "./SingleHerbList";

export default class HerbsList extends React.Component {
render() {

    return (
      <View>
        <View>
          <FlatList
            data={this.props.herbsList}
            renderItem={({item}) =>
              <SingleHerbList {...item}/>
            }
          />
        </View>
      </View>
    );
  }
}