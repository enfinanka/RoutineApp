import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Platform } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import HomeScreen from './screens/HomeScreen';
import NewActivityScreen from './screens/NewActivityScreen';
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider } from './themes/ThemeContext';

export default function App() {
  return (
    <NativeRouter>
      <AppearanceProvider>
        <ThemeProvider>
          <SafeAreaView style={[styles.container, styles.AndroidSafeArea]}>
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route path="/newActivity" component={NewActivityScreen} />
            </Switch>
          </SafeAreaView>
        </ThemeProvider>
      </AppearanceProvider>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    // backgroundColor: '#1E2036',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
});