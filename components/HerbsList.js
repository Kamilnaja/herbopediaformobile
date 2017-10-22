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
      <View
        source={require('../img/background.jpg')}
        resizeMode='stretch'
        style={{flex: 1}}
      >
      <View style={styles.listTitleWrapper}>
        <Text style={{paddingLeft: 15, color: "white"}}>
          Lista ziół
        </Text>
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