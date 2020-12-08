import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, AsyncStorage } from 'react-native';
import {NativeRouter, Switch, Route } from 'react-router-native';
import TodaysList from './components/ListComponents/TodaysList';
import HomeScreen from './screens/HomeScreen';
import NewActivityScreen from './screens/NewActivityScreen';

import { ActivitiesContext } from './contexts'
import { activitiesReducer } from './reducers'

export default function App() {

const [ activities, setActivities ] = React.useReducer(activitiesReducer, [])
const activitiesProviderValue = React.useMemo(() => ({ activities, setActivities }), [activities, setActivities])

  return (
    <ActivitiesContext.Provider value={activitiesProviderValue}>
      <NativeRouter>
        <SafeAreaView style={[styles.container, styles.AndroidSafeArea]}>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/newActivity" component={NewActivityScreen} />
          </Switch>
        </SafeAreaView>
      </NativeRouter>
    </ActivitiesContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#1E2036',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
});