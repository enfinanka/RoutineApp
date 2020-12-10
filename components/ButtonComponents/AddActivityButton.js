import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function AddActivityButton(props) {

  const { addNewActivity } = props

  const addActivity = () => {
    addNewActivity();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={addActivity}
      >
        <LinearGradient
          colors={['#E5C564', '#EBB000']}
          style={styles.button}> 
        <Text style={styles.buttonText}>Add Activity</Text>
        </LinearGradient>
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
    color: '#fff',
    minHeight: 42,
    width: 250,
    borderRadius: 15, 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  }
});