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

var debugMode = false;

export default class HerbsList extends React.Component {
  constructor(props) {
    super();
    this.state = ({
      herbsList: {}
    })
  }
  componentDidMount() {
    fetch('http://192.168.50.1:3000/api/data')
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
      <Image
        source={require('../img/background.jpg')}
        resizeMode='cover'
      >
      <FlatList
        style={{height: 500}}
        data={this.state.herbsList}
        renderItem={({item, idx}) =>
      <SingleHerbList {...item}/>
    }
    />
    </Image>
  );
}
}