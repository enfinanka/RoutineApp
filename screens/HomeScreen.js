import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../components/HeaderComponents/Header';
import AddButton from '../components/ButtonComponents/AddButton';
import { useTheme } from '../themes/ThemeContext';

export default function HomeScreen(props) {
  const { colors } = useTheme();
  const { history } = props;

  const containerStyle = {
    backgroundColor: colors.background
  };

  return (
    <View style={[containerStyle, styles.container]}>
      <Header title="Today's activities" />
      <View style={styles.addButton}>
        <AddButton history={history} />
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
