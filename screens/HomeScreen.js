import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../components/HeaderComponents/Header';
import TodaysList from '../components/ListComponents/TodaysList';
import { ActivitiesContext } from '../contexts'
import { retrieveDataFromAsyncStorage, InitalStoreDataToAsyncStorage } from '../utils/asyncStorage'
import ModalButton from '../components/ButtonComponents/ModalButton';


export default function HomeScreen({ history }) {

  const { activities, setActivities } = React.useContext(ActivitiesContext);

  //kommentera fram InitalStoreDataToAsyncStorage() för att lägga in exemplen i asyncStorage.
  React.useEffect(() => {
    const timer = setTimeout(() => {
      //InitalStoreDataToAsyncStorage()
      retrieveDataFromAsyncStorage()
        .then((d) => setActivities({ type: 'ADD_FROM_ASYNCSTORAGE', payload: d }))
    }, 0)

    return ()=> clearTimeout(timer)
  },[activities])

  return (
    <View style={styles.container}>
      <Header title="Today's activities"/>
      <TodaysList activities={activities} setActivities={setActivities}/>
      <View style={styles.addButton}>
        <ModalButton history={history} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 50,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: 'center'
  }
});
