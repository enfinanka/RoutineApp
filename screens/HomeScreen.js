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

  //kommentera fram InitalStoreDataToAsyncStorage() för att lägga in exemplen i asyncStorage.
  React.useEffect(() => {
    const timer = setTimeout(() => {
      // InitalStoreDataToAsyncStorage()
      retrieveDataFromAsyncStorage()
        .then((d) => setActivities({ type: 'ADD_FROM_ASYNCSTORAGE', payload: d }))
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
