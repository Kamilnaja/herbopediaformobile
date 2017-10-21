import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
  ScrollView,
  
} from 'react-native';
import HerbsList from './components/HerbsList';
import TopBar from './components/TopBar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <TopBar/>
      <ScrollView>
      <HerbsList/>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
