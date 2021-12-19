import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, Image } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';

export default function App() {

  const [listOfItems, setListOfItems] = useState([
    {
      text: 'Kokomo', 
      description: 'KOKOMO is the freshest micro roastery in Estonia, introducing' +
      'different characters from various coffee origins by constantly' +
      'sourcing fresh crops. Great coffee is not a secret shared only' +
      'among the café folk. It should It be a common knowledge.',
      address: 'Marati, 5',
      img: require('./assets/kokomo.png'), 
      index: 1
    },
    {
      text: 'Fika', 
      description: 'KOKOMO is the freshest micro roastery in Estonia, introducing' +
      'different characters from various coffee origins by constantly' +
      'sourcing fresh crops. Great coffee is not a secret shared only' +
      'among the café folk. It should It be a common knowledge.',
      address: 'Marati, 5',
      img: require('./assets/fika.jpeg'), 
      index: 2
    },
    {
      text: 'Papermill', 
      description: 'KOKOMO is the freshest micro roastery in Estonia, introducing' +
      'different characters from various coffee origins by constantly' +
      'sourcing fresh crops. Great coffee is not a secret shared only' +
      'among the café folk. It should It be a common knowledge.',
      address: 'Marati, 5',
      img: require('./assets/papermill.jpeg'), 
      index: 3
    }
  ]);

  return (
    <SafeAreaView style={{backgroundColor: 'white', marginBottom: 150}}>
      <Header />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (<ListItem el={item} />)} />
      </View>
    </SafeAreaView>
  );
}