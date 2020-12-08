import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Modal, Alert} from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import SwitchToggle from '../ButtonComponents/SwitchToggle';
import TimeButton from '../ButtonComponents/TimeButton';
import UpdateActivityButton from '../ButtonComponents/UpdateActivityButton';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { replaceObjectInAsyncStorage } from '../../utils/asyncStorage';

export default function EditActivityModal(props) {
  
  const [inputActivity, setInputActivity] = React.useState('');
  const [show, setShow] = React.useState(false);
  const [alert, setAlert] = React.useState(false);
  const [chosenTime, setChosenTime] = React.useState('');

  const { setShowEditModal, showEditModal, activities, setActivities, activityName } = props;  

  const activityAlreadyExists = () => activities.some((obj) => obj.activity === inputActivity)

  const editActivity = () => {
    // more valitators??
    if (activityAlreadyExists()) {
      //Alert.alert(`You already have an activity called: ${inputActivity}`)
    }
    else {
      const changeActivity = {
        completed: false,
        activity: inputActivity,
        type: 'work',
        alert: alert,
        alertWhen: chosenTime
      }
      console.log(changeActivity)
      replaceObjectInAsyncStorage({changeActivity});
      setShowEditModal(false);
      //history.push('/');
    }
  }

  const handleConfirm = (time) => {
    console.log(time, 'time');
    let chosenTime = time.toLocaleTimeString().slice(0, 5);

    setShow(false);
    setChosenTime(chosenTime);
  }

  const hideDatePicker = () => {
    setShow(false);
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showEditModal}
        onRequestClose={() => {
          setShowEditModal(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
            <TouchableHighlight
              style={styles.closeButton}
              onPress={() => {
                setShowEditModal(false);
              }}>
              <Icon name="ios-close" size={50} color="#F4F7F8" />
            </TouchableHighlight>
            
            <Text style={styles.modalHeader}> {activityName} </Text>

            <TextInput style={styles.input}
              label="Change your activity here"
              onChangeText={text => setInputActivity(text)}
              value={inputActivity}
              maxLength={16}              
            />
            
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
            <UpdateActivityButton editActivity={editActivity} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
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
    backgroundColor: '#EB7100',
    borderRadius: 50,
    width: 70,
    padding: 10,
    position: "absolute",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },
  modalHeader: {
    position: "absolute",
    margin: 25,
    fontSize: 35,
    textAlign: "center",
    textTransform: "capitalize",   
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
    marginTop: 30,
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-around',
  },
  input: {
    height: 50,
    margin: 10,
    width: 350,
    color: '#fff',
    textAlign: 'center',
  },
  container: {
    paddingBottom: 50,
  },
});