import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function UpdateActivityButton(props) {

  const { editActivity, setShowTextInput, disabled } = props

  const updateActivity = () => {
    editActivity();
    setShowTextInput(false);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={disabled ? updateActivity : null}>
        <LinearGradient
          colors={['#E5C564', '#EBB000']}
          style={styles.button}> 
          <Text style={styles.buttonText}>Update Activity</Text>
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
    fontWeight: 'bold'
  }
});