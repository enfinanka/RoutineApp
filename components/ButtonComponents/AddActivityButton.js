import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function AddActivityButton(props) {

<<<<<<< HEAD
  const { addNewActivity, setShowModal, history } = props


=======
  const { addNewActivity } = props
>>>>>>> d0178b6bc5bb79fc7d8fae39cf3f05ac5226a482

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
    bottom: 10,
  },
  button: {
    backgroundColor: '#EBB000',
    color: '#fff',
    minHeight: 42,
    width: 250,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }
});