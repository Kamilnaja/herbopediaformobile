import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
  ScrollView
} from 'react-native';
import HerbsList from './components/HerbsList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Herbopedia</Text>
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
  },
});
