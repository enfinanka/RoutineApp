import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import NewActivityModal from '../ModalComponent/NewActivityModal'

export default function EditActivityNameButton(props) {  
  const { setShowTextInput } = props

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowTextInput(true)
        }
      >
        <Icon name="edit" size={25} color="#EBB000" />
      </TouchableOpacity>
    </View>
  );
}
