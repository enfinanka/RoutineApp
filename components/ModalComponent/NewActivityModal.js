import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SwitchToggle from '../ButtonComponents/SwitchToggle.js';
import AddActivityButton from '../ButtonComponents/AddActivityButton.js';
import { TextInput } from 'react-native-paper';
import { ActivitiesContext } from '../../contexts'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import TimeButton from '../ButtonComponents/TimeButton'
import { addObjectInAsyncStorage } from '../../utils/asyncStorage'
import Toast from 'react-native-toast-message';
import { activityLongerThanZero, activityAlreadyExists } from '../../utils/validation';
import { LinearGradient } from 'expo-linear-gradient';


export default function NewActivityModal(props) {

  const { showModal, setShowModal, history, refresh, setRefresh } = props;

  const [inputActivity, setInputActivity] = React.useState('');
  const [inputCategory, setInputCategory] = React.useState('');
  const [chosenTime, setChosenTime] = React.useState('');
  const [alert, setAlert] = React.useState(false);
  const [show, setShow] = React.useState(false);
  
  const { activities } = React.useContext(ActivitiesContext);


  const clearValues = () => {
    setInputActivity('')
    setInputCategory('')
    setChosenTime(null)
    setAlert(false)
    setShowModal(false);
  }

  const addNewActivity = () => {
    const newActivity = {
      completed: false,
      activity: inputActivity,
      category: inputCategory,
      type: 'work',
      alert: alert,
      alertWhen: chosenTime
    }
    if (activityAlreadyExists(activities, inputActivity)) {
      Toast.show({
        text1: 'Denied!',
        text2: `Activity ${inputActivity} already exists!`,
        type: 'error',
        visibilityTime: 2000,
      })
      return;
    }

    if (activityLongerThanZero(newActivity.activity)) {
      Toast.show({
        text1: 'No input!',
        text2: 'Activity must contain atleast 1 Character!',
        type: 'error',
        visibilityTime: 2000,
      })      
      return;
    }
    Toast.show({
      text1: 'Success!',
      text2: `Activity ${inputActivity} is added to the list!`,
      visibilityTime: 2000,
    })
    addObjectInAsyncStorage(newActivity)
    clearValues();
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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                clearValues();
              }}>
                <LinearGradient
                  colors={['#FC9054', '#EB5500']} 
                  style={{
                    padding: 2, 
                    height: 50, 
                    width: 50, 
                    alignItems: 'center', 
                    borderRadius: 20, 
                    justifyContent: 'center'
                  }}> 
                <Icon name="ios-close" size={40} color="#F4F7F8" />
              </LinearGradient>
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
              <Text style={styles.modalText}>Notifications</Text>
              <SwitchToggle disabled={!chosenTime} setAlert={setAlert} alert={alert} />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.modalText} >{ chosenTime ? "Selected time" :  "Select Time"}</Text>              
              <TimeButton chosenTime={chosenTime} show={show} setShow={setShow} />
            </View>

            {show &&
              <View>
                <DateTimePickerModal
                  isVisible={show}
                  mode="time"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                  locale="gb" // Use "en_GB" here
                  is24Hour={true}
                  headerTextIOS="Select Time"
                />
              </View>
            }
            <AddActivityButton history={history} addNewActivity={addNewActivity} setShowModal={setShowModal} />
          </View>
        </View>
        </Modal>
      </View>  
      )}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    display: 'flex',
    alignItems: 'center',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 100,
    backgroundColor: '#3f4155',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.8,
    shadowRadius: 15,
  },
  closeButton: {
    position: "absolute",
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
  },
  textContainer: {
    margin: 10,
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 30
  },
  container: {
    paddingBottom: 30,
  },
  input: {
    height: 50,
    margin: 10,
    width: 350,
    color: '#fff',
  },
});