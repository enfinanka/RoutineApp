import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import {NativeRouter, Switch, Route } from 'react-router-native';
import Toast from 'react-native-toast-message';
import HomeScreen from './screens/HomeScreen';
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
          </Switch>
          <Toast ref={(ref) => Toast.setRef(ref)} />
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