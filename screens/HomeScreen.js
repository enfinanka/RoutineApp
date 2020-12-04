import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../components/HeaderComponents/Header';
import AddButton from '../components/ButtonComponents/AddButton';
import { useTheme } from '../themes/ThemeContext';

export default function HomeScreen(props) {
  const { colors, setScheme, isDark } = useTheme();
  const { history } = props;

  const containerStyle = {
    backgroundColor: colors.background,
    // width: '100%',
    // height: '100%',
    // paddingTop: 50,
  };

  const changeTheme = () => {
    isDark ? setScheme('light') : setScheme('dark');
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <Header title="Today's activities" />
      <View style={styles.addButton}>
        <AddButton history={history} />
        <Button title={"Hello"} onPress={changeTheme}></Button>
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
