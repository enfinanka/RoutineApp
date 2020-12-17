import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(props) {

  const { today, dayToDisplay } = props;
  const dayStartsWith = today.substring(0,3);
  const [header, setHeader] = React.useState('')

  React.useEffect(() => {
    if(dayToDisplay === 'Mon'){
      setHeader('Monday')
    }
    if(dayToDisplay === 'Tue'){
      setHeader('Tuesday')
    }
    if(dayToDisplay === 'Wed'){
      setHeader('Wednesday')
    }
    if(dayToDisplay === 'Thu'){
      setHeader('Thursday')
    }
    if(dayToDisplay === 'Fri'){
      setHeader('Friday')
    }
    if(dayToDisplay === 'Sat'){
      setHeader('Saturday')
    }
    if(dayToDisplay === 'Sun'){
      setHeader('Sunday')
    }
  }, [dayToDisplay])


  return (
    <View >
      <Text style={styles.header}>{dayStartsWith === dayToDisplay ? 'Todays activities' : header + "'s activities"}</Text>
      <View>
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