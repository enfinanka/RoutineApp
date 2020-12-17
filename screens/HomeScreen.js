import React, { useState } from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import Header from '../components/HeaderComponents/Header';
import TodaysList from '../components/ListComponents/TodaysList';
import { ActivitiesContext } from '../contexts';
import NoActivities from '../components/ListComponents/NoActivities';
import { retrieveDataFromAsyncStorage } from '../utils/asyncStorage';
import { sortActivities } from '../utils/sortingActivities';
import AddButton from '../components/ButtonComponents/AddButton';
import NavigationDays from '../components/HeaderComponents/NavigationDays';
import Welcome from './Welcome';
import moment from 'moment-timezone/moment-timezone'

export default function HomeScreen({ history }) {
  const { activities, setActivities } = React.useContext(ActivitiesContext);
  const [today, setToday] = useState('')
  const dayStartsWith = today.substring(0,3);

  const [refresh, setRefresh] = React.useState(false)
  const [cleanCompleted, setCleanCompleted] = React.useState(false);
  const [dayToDisplay, setDayToDisplay] = React.useState(today);

  const clearCompletedIfNextDay = () => {
    const currentTime = moment().format("HH:mm");
    const endOfDay = '00:00';
    if (currentTime === endOfDay) {
      retrieveDataFromAsyncStorage()
        .then((d) => setActivities({ type: 'ADD_FROM_ASYNCSTORAGE', payload: sortActivities(d, true)}))
        .then(() => setCleanCompleted(!cleanCompleted))
    }
  }

  React.useEffect(() => {
    const startUpInterval = setInterval(clearCompletedIfNextDay, 5000);
    return () => clearInterval(startUpInterval)
  }, [cleanCompleted])

  React.useEffect(() => {
    const options = { weekday: 'long', month: 'long', day: 'numeric', hour12: false };
    const prnDt = new Date().toLocaleDateString('us', options);
    setToday(prnDt);

    const timer = setTimeout(() => {
      retrieveDataFromAsyncStorage()
        .then((d) => setActivities({ type: 'ADD_FROM_ASYNCSTORAGE', payload: sortActivities(d, false, dayToDisplay) }))
    }, 0)
    return () => clearTimeout(timer)
  }, [refresh, dayToDisplay])

  return (
    <View style={styles.container}>
      <NavigationDays dayToDisaply={dayToDisplay} dayStartsWith={dayStartsWith} today={today} setActivities={setActivities} setDayToDisplay={setDayToDisplay}/>
        <Header today={today} dayToDisplay={dayToDisplay}/>

     {/* <View style={styles.welcomeContainer}>
      <Welcome />
     </View> */}

      { activities.length === 0 ?
        <NoActivities today={today}/>
        :
        <TodaysList
          activities={activities}
          setActivities={setActivities}
          refresh={refresh}
          setRefresh={setRefresh} />
      }
      <View style={styles.addButton}>
        <AddButton refresh={refresh} setRefresh={setRefresh} history={history} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: 'center'
  },
  welcomeContainer:{
    display: 'flex',
    marginTop: 200,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
