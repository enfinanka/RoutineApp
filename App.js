import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import moment from 'moment-timezone/moment-timezone'
import Toast from 'react-native-toast-message';
import HomeScreen from './screens/HomeScreen';
import { ActivitiesContext } from './contexts'
import { activitiesReducer } from './reducers'
import { retrieveDataFromAsyncStorage } from './utils/asyncStorage';

export default function App() {

  const [activities, setActivities] = React.useReducer(activitiesReducer, [])
  const activitiesProviderValue = React.useMemo(() => ({ activities, setActivities }), [activities, setActivities])
  const [cleanCompleted, setCleanCompleted] = React.useState(false);
  let startUpInterval;

  const checkIfNextDay = () => {
    const currentTime = moment().format("HH:mm");
    const endOfDay = '14:13';
    if (currentTime === endOfDay) {
      console.log("unchecking completed");
      retrieveDataFromAsyncStorage()
        .then((data) => {
          data.map((activity) => {
            if (activity.completed === true) {
              activity.completed = false;
              console.log(activity);
            }
          })
        })
      clearInterval(startUpInterval);
      console.log("clean interval");
      setTimeout(() => {
        setCleanCompleted(!cleanCompleted)
      }, 65000);
      console.log("after setTimeout");
    }
  }

  React.useEffect(() => {
    console.log("useeffect interval start");
    startUpInterval = setInterval(checkIfNextDay, 5000);
  }, [cleanCompleted])

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