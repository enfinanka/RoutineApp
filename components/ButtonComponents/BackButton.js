import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function BackButton(props) {

  const { history } = props;

  return (
    <View>
      <Button
        title="Go Back"
        onPress={() => history.push('/')}
        color="#EBB000"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    color: '#fff',
    minHeight: 42,
    borderRadius: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
  buttonText: {
    fontSize: 57,
    color: '#fff',
    textAlign: 'center'
  }
});