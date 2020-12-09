import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';

export default function BackButton(props) {
  const { setShow, chosenTime } = props

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>setShow(true)}
      >
          <Text style={styles.buttonText}>{chosenTime ? chosenTime : "Choose time"}</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  button: {
    color: '#fff',
    backgroundColor: '#EBB000',
    minHeight: 42,
    borderRadius: 3,
    minWidth: 120,
    padding: 6,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center'
  }
});