import React from 'react';
import { StyleSheet, View, Button, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BackButton(props) {
  const { setShow } = props

  return (
    <View>
      {/* <Icon style={styles.button} name="ios-time" size={40} onPress={() => setShow(true)}
        color="#1E2036"/> */}

      <Button
        title="Choose time"
        onPress={() => setShow(true)}
        color="#EBB000"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // button: {
  //   // color: '#fff',
  //   // minHeight: 42,
  //   // borderRadius: 3,
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   // position: 'absolute'
  //   marginRight: 10
  // },
  buttonText: {
    fontSize: 57,
    color: '#fff',
    textAlign: 'center'
  }
});