import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function AddActivityButton() {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('activity Added')}
      >
        <Text style={styles.buttonText}>Add Activity</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
  },
  button: {
    backgroundColor: '#EBB000',
    color: '#fff',
    minHeight: 42,
    width: 250,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }
});