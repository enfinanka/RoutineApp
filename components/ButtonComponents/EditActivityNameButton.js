import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import NewActivityModal from '../ModalComponent/NewActivityModal'

export default function EditActivityNameButton(props) {
  const { setShowTextInput, showTextInput } = props

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowTextInput(!showTextInput)
        }
      >
        <Icon name="edit" size={25} color="#EBB000" />
      </TouchableOpacity>
    </View>
  );
}

