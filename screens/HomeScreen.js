import React, { useState } from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import Header from '../components/HeaderComponents/Header';
import TodaysList from '../components/ListComponents/TodaysList';
import { ActivitiesContext } from '../contexts';
import NoActivities from '../components/ListComponents/NoActivities';
import { retrieveDataFromAsyncStorage, InitalStoreDataToAsyncStorage, clearAllAsyncStorage } from '../utils/asyncStorage';
import { sortActivities } from '../utils/sortingActivities';
import AddButton from '../components/ButtonComponents/AddButton';
import NavigationDays from '../components/HeaderComponents/NavigationDays';
import Welcome from './Welcome';

export default function HomeScreen({ history }) {

  const { activities, setActivities } = React.useContext(ActivitiesContext);
  const [refresh, setRefresh] = React.useState(false);
  const [today, setToday] = useState('')


  React.useEffect(() => {
    const options = { weekday: 'long', month: 'long', day: 'numeric', hour12: false };
    const prnDt = new Date().toLocaleDateString('us', options);
    setToday(prnDt);

    const timer = setTimeout(() => {
      // InitalStoreDataToAsyncStorage()
      // clearAllAsyncStorage()
      retrieveDataFromAsyncStorage()
        .then((d) => setActivities({ type: 'ADD_FROM_ASYNCSTORAGE', payload: sortActivities(d) }))
    }, 0)
    return () => clearTimeout(timer)
  }, [refresh])

  return (
    <View style={styles.container}>
      <NavigationDays today={today}/>
        <Header title="Today's activities" today={today}/>

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
