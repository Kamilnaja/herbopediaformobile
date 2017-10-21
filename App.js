import React from 'react';
import { 
  Text, 
  View, 
  FlatList,
  ScrollView,  
} from 'react-native';
import styles from './Style';

import HerbsList from './components/HerbsList';
import TopBar from './components/TopBar';
import SideMenu from './components/SideMenu';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalVisible : false
    }
  }
  toggleMenu () {
    console.log("works");
    this.setState({
    modalVisible: !this.state.modalVisible
  })
}
  render() {
    return (
      <View style={styles.container}>
      <TopBar toggleMenu={this.toggleMenu.bind(this)} />
      <ScrollView>
        <HerbsList/>
      </ScrollView>
      {
        this.state.modalVisible && (
          <SideMenu/>
        )
      }
      </View>
    );
  }
}