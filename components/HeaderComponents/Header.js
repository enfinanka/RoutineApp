import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationDays from './NavigationDays';


export default function Header(props) {

  const { title, today } = props;

  return (
    <View style={styles.container}>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.date}>{today}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  header: {
    color: '#85BCA9',
    fontSize: 30,
    paddingLeft: 20,
    fontWeight: 'bold',
    paddingBottom: 5
  },
  date: {
    color: '#85BCA9',
    paddingLeft: 20,
    fontSize: 16
  }
});