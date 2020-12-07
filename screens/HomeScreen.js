import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import  Header  from '../components/HeaderComponents/Header';
import  AddButton  from '../components/ButtonComponents/AddButton';
import TodaysList from '../components/ListComponents/TodaysList';
import {ActivitiesContext} from '../contexts'

export default function HomeScreen({history}) {
  const { activities, setActivities } = React.useContext(ActivitiesContext);

  React.useEffect(() => {
    console.log('useEffect ran');
    setActivities({type: 'LOAD_ASYNC_STORAGE'})
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
