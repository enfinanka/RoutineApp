import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import Header from '../components/HeaderComponents/Header';
import TodaysList from '../components/ListComponents/TodaysList';
import { ActivitiesContext } from '../contexts';
import NoActivities from '../components/ListComponents/NoActivities';
import { retrieveDataFromAsyncStorage, InitalStoreDataToAsyncStorage } from '../utils/asyncStorage';
import AddButton from '../components/ButtonComponents/AddButton';

export default function HomeScreen({ history }) {

  const { activities, setActivities } = React.useContext(ActivitiesContext);
  const [refresh, setRefresh] = React.useState(false)

  const sortAndSetActivities = (d) => {

    const notCompleted = d.filter((a) => !a.completed)
    const completed = d.filter((a) => a.completed)

    const completedAndHasTime = completed.filter((a)=> a.alertWhen)
    const notCompletedAndHasTime = notCompleted.filter((a)=> a.alertWhen)

    const notCompletedNoTime = notCompleted.filter((a)=> !a.alertWhen)
    const completedNoTime = completed.filter((a)=> !a.alertWhen)

    const notCompletedAndHasTimeAsNumber = notCompletedAndHasTime.map((a)=> {
      const timeAsNumberWOColon = parseInt(a.alertWhen.replace(':','')) 
      return {...a, alertWhen: timeAsNumberWOColon}
    })

    const completedAndHasTimeAsNumber = completedAndHasTime.map((a)=> {
      const timeAsNumberWOColon = parseInt(a.alertWhen.replace(':','')) 
      return {...a, alertWhen: timeAsNumberWOColon}
    })

    const notCompletedSortedByTime = notCompletedAndHasTimeAsNumber.sort((a,b) => a.alertWhen - b.alertWhen) 
    const completedSortedByTime = completedAndHasTimeAsNumber.sort((a,b) => a.alertWhen - b.alertWhen) 

    const notCompletedSortedByTimeAsString = notCompletedSortedByTime.map((a)=> {
      let timeAsString = a.alertWhen.toString()
      if(timeAsString.length < 4) {
        timeAsString = 0 + timeAsString
      }
      timeAsString = timeAsString.substring(0,2) + ":" + timeAsString.substring(2, timeAsString.length)
      return {...a, alertWhen: timeAsString}
    })

    const completedSortedByTimeAsString = completedSortedByTime.map((a)=> {
      let timeAsString = a.alertWhen.toString()
      if(timeAsString.length < 4) {
        timeAsString = 0 + timeAsString
      }
      timeAsString = timeAsString.substring(0,2) + ":" + timeAsString.substring(2, timeAsString.length)
      return {...a, alertWhen: timeAsString}
    })

    const sorted = [...notCompletedSortedByTimeAsString, ...notCompletedNoTime, ...completedSortedByTimeAsString, ...completedNoTime ]
    
    setActivities({ type: 'ADD_FROM_ASYNCSTORAGE', payload: sorted })
  }

  //kommentera fram InitalStoreDataToAsyncStorage() för att lägga in exemplen i asyncStorage.
  React.useEffect(() => {
    const timer = setTimeout(() => {
      // InitalStoreDataToAsyncStorage()
      retrieveDataFromAsyncStorage()
        .then((d) => sortAndSetActivities(d))
    }, 0)
    return () => clearTimeout(timer)
  }, [refresh])

  return (
    <View style={styles.container}>
      <Header title="Today's activities" />
      { activities.length === 0 ?
        <NoActivities />
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
    width: '100%',
    height: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: 'center'
  }
});
