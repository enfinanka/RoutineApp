import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BackButton(props) {
  const { setShow, chosenTime } = props

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>setShow(true)}
      >
        <Icon name="ios-time" size={20} color="#fff"/>
        <Text style={styles.buttonText}>{chosenTime ? chosenTime : "Choose time"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    color: '#fff',
    backgroundColor: '#5E6170',
    minHeight: 42,
    borderRadius: 15,
    minWidth: 120,
    padding: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginLeft: 10,
  }
});