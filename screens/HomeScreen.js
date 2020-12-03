import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import  Header  from '../components/HeaderComponents/Header';
import  AddButton  from '../components/ButtonComponents/AddButton';



export default function HomeScreen() {
  
  const exampleToDos = [
    { activity: 'walk the dog', type: 'health', alert: true, alertWhen: '12:00'},
    { activity: 'eat pizza', type: 'health', alert: true, alertWhen: '11:59'},
    { activity: 'change dipers', type: 'family', alert: false, alertWhen: '20:00'},
    { activity: 'hit boss in eye', type: 'work', alert: false, alertWhen: '00:00'}
  ]

  return (
    <View style={styles.container}>
      <Header title="Today's activities"/>
      <AddButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingTop: 20
  },
  addButton: {}
});
