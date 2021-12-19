import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';

export default function Address({ name, address }) {
  return (
    <View style={styles.root}>
        <Text style={styles.text}>{name}</Text> 
        <View style={styles.addressCont}>
            <Image style={styles.pin} source={require('../assets/pin.png')}/>
            <Text style={styles.address}>{address}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent:'space-between',
        height: 50,
        marginHorizontal: 10
    },
    text: {
        fontSize: 30
    },
    pin: {
        marginLeft: 50,
    },
    address: {
        height: 30,
        lineHeight: 25,
    },
    addressCont: {
        flexDirection: 'row',
        marginVertical: 10,
    }
});
