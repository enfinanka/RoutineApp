import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header(props) {

  const { title, date = true } = props;
  const [today, setToday] = useState('')

  useEffect(() => {
    const options = { weekday: 'long', month: 'long', day: 'numeric', hour12: false };
    const prnDt = new Date().toLocaleDateString('us', options);
    setToday(prnDt)
  }, []);

  return (
    <View >
      <Text style={styles.header}>{title}</Text>
      {date === true ?
        <View>
          <Text style={styles.date}>{today}</Text>
        </View>
        : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',

    backgroundColor: '#1E2036',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingLeft: 20,
  },
  header: {
    color: '#85BCA9',
    fontSize: 35,
    paddingLeft: 20,
    fontWeight: 'bold'
  },
  date: {
    color: '#85BCA9',
    paddingLeft: 20,
    marginTop: 5
  }
});