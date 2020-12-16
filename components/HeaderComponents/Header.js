import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationDays from './NavigationDays';
import moment from 'moment-timezone/moment-timezone';



export default function Header(props) {

  const { title, today, dayToDisplay } = props;
  const dayStartsWith = today.substring(0,3);
  var todaysDate = moment().format('MMMM Do YYYY');

  return (
    <View >
      <Text style={styles.header}>{dayStartsWith === dayToDisplay ? 'Todays activities' : dayToDisplay + " activities"}</Text>
      <View>
        {/* <Text style={styles.date}>{todaysDate}</Text>  */}
        {dayStartsWith === dayToDisplay ? 
        <Text style={styles.date}>{today}</Text>
        : null
        }
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