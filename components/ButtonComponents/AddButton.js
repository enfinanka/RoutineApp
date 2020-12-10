import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NewActivityModal from '../ModalComponent/NewActivityModal'

export default function AddButton(props) {
  const [showModal, setShowModal] = useState(false);
  const { refresh, setRefresh, history } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowModal(true)}
      >
        <Icon name="ios-add" size={50} color="#F4F7F8" />
      </TouchableOpacity>

      <NewActivityModal
        refresh={refresh}
        setRefresh={setRefresh}
        showModal={showModal}
        setShowModal={setShowModal}
        history={history} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 1,
    shadowRadius: 1,
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