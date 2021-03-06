import React from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  Button
} from 'react-native';
import SingleHerbList from "./SingleHerbList";
import styles from '../Style';

var debugMode = false;
export default class HerbsList extends React.Component {
  constructor(props) {
    super();
    this.state = ({
      herbsList: {}
    })
  }
  componentDidMount() {
    fetch('http://192.168.50.1:8080/api/data')
    .then((response) => response.json())
    .then((responseJSON) => {
      this.setState({
        herbsList:  responseJSON
      });
      // if(debugMode)console.log(this.state.herbsList)
    })
    .catch((error) => {
      console.warn(error)
    })
  }
  
  render() {
    return (
      <View>
      <View style={styles.listTitleWrapper}>
        <Text style={styles.listTitleText}>
          Lista ziół 
        </Text>
        <Text></Text>
      </View>
      <FlatList
        data={this.state.herbsList}
        renderItem={({item, idx}) =>
      <SingleHerbList {...item} key={idx}/>
    }
    />
    </View>
  );
}
}