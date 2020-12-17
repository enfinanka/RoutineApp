import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function NavigationDays(props) {

  const { setDayToDisplay, dayStartsWith } = props;
  const [activeDay, setActiveDay] = useState(dayStartsWith);
  
  React.useEffect(() => {
    setDayToDisplay(dayStartsWith);
    setActiveDay(dayStartsWith)

  }, [dayStartsWith])

  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const showDayList = (oneDay) => {
    setDayToDisplay(oneDay)
    setActiveDay(oneDay)
  }

  return (
    <View style={styles.container}>
      {weekdays.map((oneDay, i) => {
        return( 
        <TouchableOpacity onPress={() => showDayList(oneDay)} key={i}>
          <Text style={activeDay === oneDay ? styles.activeDay : styles.weekdays}>{dayStartsWith === oneDay  ? 'Today' : oneDay}</Text> 
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