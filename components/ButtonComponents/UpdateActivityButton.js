import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function UpdateActivityButton(props) {

  const { editActivity, setShowTextInput, hasSelectedDay } = props

  const updateActivity = () => {
    if (!hasSelectedDay) {
      return
    }
    editActivity();
    setShowTextInput(false);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={updateActivity}>
        <LinearGradient
            colors={hasSelectedDay ? ['#E5C564', '#EBB000'] : ['#8B8A8A', '#8B8A8A'] }
          style={styles.button}> 
          <Text style={hasSelectedDay ? styles.buttonText : styles.disabled}>Update Activity</Text>
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
    backgroundColor: '#EBB000',
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