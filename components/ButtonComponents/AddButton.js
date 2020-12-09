import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function AddButton(props) {

  const { history } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => history.push('newActivity')}
      >
        <Icon name="ios-add" size={50} color="#F4F7F8" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#111324',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 5 
  },
  button: {
    backgroundColor: '#EBB000',
    minHeight: 42,
    height: 70,
    borderRadius: 50,
    width: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});