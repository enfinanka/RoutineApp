import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function BackButton(props) {

const { history } = props;

  return (
    <View>
        <Button 
            title="Go Back"
            onPress={() => history.push('/')}
            color="#EBB000"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    color: '#fff',
    minHeight: 42,
    borderRadius: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
  buttonText: {
    fontSize: 57,
    color: '#fff',
    textAlign: 'center'
  }
});