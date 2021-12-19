import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
        <Text style={styles.header}>Tallinn Good Coffee Map</Text>
        <Text style={styles.headerDescription}>This is a map where you can find coffee shops.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    textAlign: 'center',
    fontSize: 30
  },
  headerDescription: {
    backgroundColor: "white",
    textAlign: 'center',
    marginVertical: 5,
    marginBottom: 10
  }
});
