import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from '../ModalComponent/Modal.js'

<<<<<<< HEAD
export default function ModalButton() {
  const [showModal, setShowModal] = useState(false);
=======
export default function ModalButton(props) {

  const { addExampleItem } = props
>>>>>>> 3f5829ee26b54fcd8d86a03720e93d2c1bcae941

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
<<<<<<< HEAD
        onPress={() => setShowModal(true)}
=======
        onPress={addExampleItem}
>>>>>>> 3f5829ee26b54fcd8d86a03720e93d2c1bcae941
      >
        <Icon name="ios-add" size={50} color="#F4F7F8" />
      </TouchableOpacity>

      <Modal showModal={showModal} setShowModal={setShowModal} />
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