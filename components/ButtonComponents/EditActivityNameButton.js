import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import NewActivityModal from '../ModalComponent/NewActivityModal'

export default function EditActivityNameButton(props) {  
  const { showTextInput, setShowTextInput } = props

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowTextInput(!showTextInput)
        }
      >
        <Icon name="edit" size={30} color="#EBB000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
   
  },
});