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
    backgroundColor: '#3F4153',
    minHeight: 42,
    width: 150,
    borderRadius: 15,
    // border:'1px solid #EBB000',
    borderColor: '#EBB000',
    borderWidth: 2,
    padding: 8,
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#EBB000',
    textAlign: 'center',
    marginLeft: 10,
  },
});