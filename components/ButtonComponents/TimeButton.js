import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function BackButton(props) {
  const { setShow, chosenTime } = props

  return (
    <View>
      <View
      style={styles.button}
      >
        <Ionicon name="ios-time" size={20} color="#fff"/>
        <Text style={styles.buttonText}>{chosenTime ? chosenTime : 'No time' }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    color: '#fff',
    minHeight: 42,
    borderRadius: 15,
    padding: 8,
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginLeft: 10,
  },
});