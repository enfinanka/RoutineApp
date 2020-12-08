import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import  Header  from '../components/HeaderComponents/Header';
import  AddButton  from '../components/ButtonComponents/AddButton';
import TodaysList from '../components/ListComponents/TodaysList';
import {ActivitiesContext} from '../contexts'
import NoActivities from '../components/ListComponents/NoActivities';

export default function HomeScreen({history}) {
  const { activities, setActivities } = React.useContext(ActivitiesContext);

  React.useEffect(() => {
    setActivities({type: 'LOAD_ASYNC_STORAGE'})
  },[activities])

  return (
    <View style={styles.container}>
      <Header title="Today's activities"/>
      {activities ?
        <TodaysList />
        : 
        <NoActivities /> 
      }      
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
