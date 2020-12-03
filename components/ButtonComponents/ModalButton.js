import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function ModalButton() {

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('kuk')}
      >
        <Icon name="ios-add" size={50} color="#F4F7F8" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#EBB000',
    color: '#fff',
    minHeight: 42,
    height: 70,
    borderRadius: 50,
    width: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 57,
    color: '#fff',
    textAlign: 'center'
  }
});