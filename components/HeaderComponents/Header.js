import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header(props) {

  const { title} = props;
  const [today, setToday] = useState('')

  useEffect(() => {
    const options = { weekday: 'long', month: 'long', day: 'numeric', hour12: false };
    const prnDt = new Date().toLocaleDateString('us', options);
    setToday(prnDt)
  }, []);

  return (
    <View >
      <Text style={styles.header}>{title}</Text>
        <View>
          <Text style={styles.date}>{today}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 20,
  },
  header: {
    color: '#85BCA9',
    fontSize: 35,
    paddingLeft: 20,
    fontWeight: 'bold',
    marginTop: 40
  },
  date: {
    color: '#85BCA9',
    paddingLeft: 20,
    marginTop: 5,
    fontSize: 20
  }
});