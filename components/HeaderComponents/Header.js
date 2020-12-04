import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header(props) {

  const { title } = props;

  return (
    <View >
      <Text style={styles.header}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    
    backgroundColor: '#1E2036',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingLeft: 20,
  },
  header: {
    color: '#85BCA9',
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    paddingLeft: 20,
  }
});