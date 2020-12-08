import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';


export default function EditActivityModal() {
    
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <TouchableHighlight
              style={styles.closeButton}
              onPress={() => {
                setShowModal(false);
              }}>

              <Icon name="ios-close" size={50} color="#F4F7F8" />
            </TouchableHighlight>

            <Text style={styles.modalHeader}>New activity</Text>
            <View style={styles.container}>
              <TextInput
                label="Type your Activity"
                style={styles.input}
                onChangeText={text => setInputActivity(text)}
                value={inputActivity}
              />
              <TextInput
                label="Category"
                style={styles.input}
                onChangeText={text => setInputCategory(text)}
                value={inputCategory}
              />
            </View>
            {/* <Input /> */}
            <View style={styles.textContainer}>
              <Text style={styles.modalText} >Notifications</Text>
              <SwitchToggle setAlert={setAlert} alert={alert} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.modalText} >Select Time</Text>
              <TimeButton show={show} setShow={setShow} />
            </View>
            {show ?
              <View>
                <DateTimePickerModal
                  isVisible={show}
                  mode="time"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                  locale="en_GB"
                  is24Hour={true}
                />
              </View>
              : null}
            <AddActivityButton history={history} addNewActivity={addNewActivity} setShowModal={setShowModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingBottom: 50,
  },
  input: {
   height: 50,
   margin: 10,
   width: 350,
   color: '#fff',
   textAlign: 'center',
  },
});