import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default function EditActivityNameButton(props) {  
  const { showTextInput, setShowTextInput } = props

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowTextInput(!showTextInput)}>
        <Icon name="edit" size={25} color="#EBB000" />
      </TouchableOpacity>
    </View>
  );
}

