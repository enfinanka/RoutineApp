import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function EditActivityNameButton(props) {
  const { setShowTextInput } = props

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowTextInput(true)
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