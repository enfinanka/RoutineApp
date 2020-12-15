import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment-timezone/moment-timezone'

export default function Header(props) {

  const { title } = props;
  var todaysDate = moment().format('MMMM Do YYYY');

  return (
    <View >
      <Text style={styles.header}>{title}</Text>
      <View>
        <Text style={styles.date}>{todaysDate}</Text>
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