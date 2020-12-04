import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Platform } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import HomeScreen from './screens/HomeScreen';
import NewActivityScreen from './screens/NewActivityScreen';
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider, useTheme } from './themes/ThemeContext';
import { ActivitiesContext } from './contexts'

const exampleToDos = [
  { activity: 'walk the cat', type: 'health', alert: true, alertWhen: '12:00' },
  { activity: 'eat pizza', type: 'health', alert: true, alertWhen: '11:59' },
  { activity: 'change dipers', type: 'family', alert: false, alertWhen: '20:00' },
  { activity: 'hit boss in eye', type: 'work', alert: false, alertWhen: '00:00' }
]

export default function App() {

  const [activities, setActivities] = React.useState(exampleToDos)
  const activitiesProviderValue = React.useMemo(() => ({ activities, setActivities }), [activities, setActivities])
  const { colors } = useTheme();

  const bg = {
    backgroundColor: colors.background,
  };

  return (
    <ActivitiesContext.Provider value={activitiesProviderValue}>
      <NativeRouter>
        <AppearanceProvider>
          <ThemeProvider>
            <SafeAreaView style={[styles.container, bg, styles.AndroidSafeArea]}>
              <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route path="/newActivity" component={NewActivityScreen} />
              </Switch>
            </SafeAreaView>
          </ThemeProvider>
        </AppearanceProvider>
      </NativeRouter>
    </ActivitiesContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
});