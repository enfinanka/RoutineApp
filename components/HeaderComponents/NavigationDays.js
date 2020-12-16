import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import WavyHeader from './WaveHeader';

export default function NavigationDays(props) {

  const { today } = props;
  console.log(today,' today')
  const dayStartsWith = today.substring(0,3);
  const [activeDay, setActiveDay] = useState(dayStartsWith);

  React.useEffect(() => {
    setActiveDay(dayStartsWith)
  }, [today])

  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const showDayList = (oneDay) => {
    console.log(oneDay)
    setActiveDay(oneDay)
  }

  return (
    <View style={styles.container}>
      {weekdays.map((oneDay, i) => {
        return(
        <TouchableOpacity onPress={() => showDayList(oneDay)} key={i}>
          <Text style={activeDay === oneDay ? styles.activeDay : styles.weekdays}>{oneDay}</Text> 
        </TouchableOpacity>
        )
      })} 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 20
  },
  weekdays: {
    color: '#fff',
    fontSize: 14,
  },
  activeDay: {
    color: '#EBB000',
    fontWeight: 'bold',
    fontSize: 14,
  },
});