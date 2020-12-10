import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from './Input.js';
import SwitchToggle from '../ButtonComponents/SwitchToggle.js';
import AddActivityButton from '../ButtonComponents/AddActivityButton.js';
import { TextInput } from 'react-native-paper';
import { ActivitiesContext } from '../../contexts'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import TimeButton from '../ButtonComponents/TimeButton'
import { addObjectInAsyncStorage } from '../../utils/asyncStorage';
// import { BlurView } from 'expo-blur';



export default function NewActivityModal(props) {
  const { showModal, setShowModal, history, refresh, setRefresh } = props;

  const { activities, setActivities } = React.useContext(ActivitiesContext);
  const [inputActivity, setInputActivity] = React.useState('');
  const [inputCategory, setInputCategory] = React.useState('');
  const [alert, setAlert] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [chosenTime, setChosenTime] = React.useState('');

  const activityAlreadyExists = () => activities.some((obj) => obj.activity === inputActivity)
  const activityLongerThanZero = (activity) => activity.length === 0 ? true : false;


  const addNewActivity = () => {
    const newActivity = {
      completed: false,
      activity: inputActivity,
      category: inputCategory,
      type: 'work',
      alert: alert,
      alertWhen: chosenTime
    }
    // more valitators??
    if (activityAlreadyExists()) {
      Alert.alert(`You already have an activity called: ${inputActivity}`)
      return;
    }

    if (activityLongerThanZero(newActivity.activity)) {
      Alert.alert(`Name must be longer than 0 characters.`)
      return;
    }

    addObjectInAsyncStorage(newActivity)
    setShowModal(false);
    setRefresh(!refresh)
  }

  const handleConfirm = (time) => {
    let chosenTime = time.toLocaleTimeString().slice(0, 5);

    setShow(false);
    setChosenTime(chosenTime);
  }

  const hideDatePicker = () => {
    setShow(false);
  }

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false);
        }}
      >
        {/* <BlurView  
        intensity={100} 
        style={StyleSheet.absoluteFill}
        tint="dark"> */}

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setShowModal(false);
              }}>

              <Icon name="ios-close" size={40} color="#F4F7F8" />
            </TouchableOpacity>

            <Text style={styles.modalHeader}>New activity</Text>
            <View style={styles.container}>
              <TextInput
                label="Type your Activity"
                style={styles.input}
                theme={{ colors: {primary: '#1E2036'} }}
                onChangeText={text => setInputActivity(text)}
                value={inputActivity}
                maxLength={16}
              />
              <TextInput
                label="Category"
                style={styles.input}
                theme={{ colors: {primary: '#1E2036'} }}
                onChangeText={text => setInputCategory(text)}
                value={inputCategory}
              />
            </View>
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
                  locale="gb" // Use "en_GB" here
                  is24Hour={true}
                />
              </View>
              : null}
            <AddActivityButton history={history} addNewActivity={addNewActivity} setShowModal={setShowModal} />
          </View>
        </View>
        {/* </BlurView> */}
      </Modal>
    </View>
  )}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    // position: 'absolute',
    // width: '100%',
    // height: '100%',
    // justifyContent: 'center',
    // backgroundColor: 'rgba(200,200,200, 0.5)',
    // backgroundColor: '#000'
    // padding: 20,
  },
  modalView: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 100,
    backgroundColor: '#5E6170',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10
  },
  closeButton: {
    backgroundColor: '#EB5500',
    borderRadius: 100,
    width: 50,
    height: 50,
    position: "absolute",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
  },
  modalHeader: {
    position: "absolute",
    marginTop: 40,
    marginLeft: 10,
    fontSize: 30,
    textAlign: "center",
    color: '#F4F7F8',
    width: 300,
  },
  modalText: {
    color: '#F4F7F8',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textContainer: {
    margin: 10,
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
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
  nonBlurredContent: {

  }
});