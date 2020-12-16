import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import WavyHeader from './WaveHeader';
import { sortActivities } from '../../utils/sortingActivities';
import { retrieveDataFromAsyncStorage } from '../../utils/asyncStorage';



export default function NavigationDays(props) {

  const { today, setActivities, setDayToDisplay } = props;
  const dayStartsWith = today.substring(0,3);
  const [activeDay, setActiveDay] = useState(dayStartsWith);
  const [renderActivites, setRenderActiveDay] = useState(dayStartsWith);

  // React.useEffect(() => {
  //   setActiveDay(dayStartsWith)
  // }, [today])

  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  // const allActivities = ['All activities'];


  const showDayList = (oneDay) => {
    setDayToDisplay(oneDay)
    // retrieveDataFromAsyncStorage()
    //   .then((d) => setActivities({ type: 'ADD_FROM_ASYNCSTORAGE', payload: sortActivities(d, false, oneDay)}))
    // setActivities({ type: 'ADD_FROM_ASYNCSTORAGE', payload: sortActivities(oneDay, true)})
    setActiveDay(oneDay)
  }

  return (
    <View style={styles.container}>
      {weekdays.map((oneDay, i) => {
        return( 
        <TouchableOpacity onPress={() => showDayList(oneDay)} key={i}>
          <Text style={activeDay === oneDay ? styles.activeDay : styles.weekdays}>{dayStartsWith === oneDay ? 'Today' : oneDay}</Text> 
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