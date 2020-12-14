import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function BackButton(props) {
  const { setShow, chosenTime, title } = props

  return (
    <View>
      <TouchableOpacity
      style={styles.button}
      onPress={()=>setShow(true)}
      >
        <Ionicon name="ios-time" size={20} color="#fff"/>
        <Text style={styles.buttonText}>{chosenTime ? chosenTime : title }</Text>
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