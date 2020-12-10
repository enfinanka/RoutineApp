import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function AddActivityButton(props) {

  const { addNewActivity, setShowModal, history } = props

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={addNewActivity}
      >
        <Text style={styles.buttonText}>Add Activity</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 40,
  },
  button: {
    backgroundColor: '#EBB000',
    color: '#fff',
    minHeight: 42,
    width: 250,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }
});