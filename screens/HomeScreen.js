import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import  Header  from '../components/HeaderComponents/Header';
import  AddButton  from '../components/ButtonComponents/AddButton';
import TodaysList from '../components/ListComponents/TodaysList';
import {ActivitiesContext} from '../contexts'
import { retrieveDataFromAsyncStorage, InitalStoreDataToAsyncStorage } from '../utils/asyncStorage'


export default function HomeScreen({history}) {

  const { setActivities } = React.useContext(ActivitiesContext);

  //kommentera fram InitalStoreDataToAsyncStorage() för att lägga in exemplen i asyncStorage.
  React.useEffect(() => {
  const timer = setTimeout( ()=> {
    //InitalStoreDataToAsyncStorage()
    retrieveDataFromAsyncStorage()
    .then((d)=> setActivities({type: 'ADD_FROM_ASYNCSTORAGE', payload: d}))
  },0)

    return ()=> clearTimeout(timer)
  },[])

  return (
    <View style={styles.container}>
      <Header title="Today's activities"/>
      <TodaysList />
      <View style={styles.addButton}>
        <AddButton history={history}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 50
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: 'center'
  }
});
