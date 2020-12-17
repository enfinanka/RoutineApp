import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function AddActivityButton(props) {

  const { addNewActivity, hasSelectedDay } = props

  const addActivity = () => {
    if (!hasSelectedDay) {
      return
    }
    addNewActivity();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={addActivity}
      >
        <LinearGradient
          colors={hasSelectedDay ? ['#E5C564', '#EBB000'] : ['#8B8A8A', '#8B8A8A'] }
          style={styles.button}> 
        <Text style={hasSelectedDay ? styles.buttonText : styles.disabled}>Add Activity</Text>
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
  },
  disabled: {
    fontSize: 20,
    color: 'lightgrey',
  }
});