import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NewActivityModal from '../ModalComponent/NewActivityModal';
import { LinearGradient } from 'expo-linear-gradient';


export default function AddButton(props) {
  const [showModal, setShowModal] = useState(false);
  const { refresh, setRefresh, history } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setShowModal(true)}>
        <LinearGradient
          colors={['#E5C564', '#EBB000']}
          style={styles.button}> 
        <Icon name="ios-add" size={50} color="#F4F7F8" />
        </LinearGradient>
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
    shadowOpacity: 0.3,
    shadowRadius: 0.5,
  },
  button: {
    backgroundColor: 'red',
    minHeight: 42,
    height: 70,
    borderRadius: 30,
    width: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});