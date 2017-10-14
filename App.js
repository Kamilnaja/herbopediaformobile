import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import HerbsList from './components/HerbsList';

export default class App extends React.Component {
  
  render() {
    var herbs = [
      {
        id: 1,
        name: 'rumianek' 
      },
      {
        id: 2,
        name: 'mięta'
      }, {
        id: 3,
        name: 'melisa'
      }]

      return (
        <View>
        <Text>Herbopedia</Text>
          <HerbsList herbsList={herbs}/>
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
  