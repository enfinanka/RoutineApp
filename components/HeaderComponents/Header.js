import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationDays from './NavigationDays';
import moment from 'moment-timezone/moment-timezone';



export default function Header(props) {

  const { title, today } = props;
  var todaysDate = moment().format('MMMM Do YYYY');
  console.log(todaysDate)

  return (
    <View >
      <Text style={styles.header}>{title}</Text>
      <View>
        {/* <Text style={styles.date}>{todaysDate}</Text>  */}
        <Text style={styles.date}>{today}</Text>
      </View>
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