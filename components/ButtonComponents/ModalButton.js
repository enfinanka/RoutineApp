import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from '../ModalComponent/Modal.js'

export default function ModalButton(props) {
  const [showModal, setShowModal] = useState(false);
  
  const { addExampleItem, history } = props

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowModal(true)}
      >
        <Icon name="ios-add" size={50} color="#F4F7F8" />
      </TouchableOpacity>

      <Modal showModal={showModal} setShowModal={setShowModal} addExampleItem={addExampleItem} history={history}/>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#EBB000',
    color: '#fff',
    minHeight: 42,
    height: 70,
    borderRadius: 50,
    width: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 57,
    color: '#fff',
    textAlign: 'center'
  }
});