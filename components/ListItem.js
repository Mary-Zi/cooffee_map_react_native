import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';
import Address from './Address';

export default function ListItem({ el }) {
  return (
    <View style={styles.view}>
        <View>
          <Image style={styles.coffeePreview} source={el.img} />
          <Address name={el.text} address={el.address} />
          <Text style={styles.description}>{el.description}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view:{
    paddingBottom: 10,
  },
  coffeePreview: {
    height: 300,
    aspectRatio: 16/9,
  },
  address: {
    backgroundColor: 'white',
    alignSelf: 'flex-end'
  },
  description: {
    backgroundColor: 'white',
    fontSize: 10,
    marginHorizontal: 5
  },
});
