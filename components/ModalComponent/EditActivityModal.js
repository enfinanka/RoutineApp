import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Alert} from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import SwitchToggle from '../ButtonComponents/SwitchToggle';
import TimeButton from '../ButtonComponents/TimeButton';
import UpdateActivityButton from '../ButtonComponents/UpdateActivityButton';
import EditActivityNameButton from '../ButtonComponents/EditActivityNameButton';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { replaceObjectInAsyncStorage } from '../../utils/asyncStorage';
import Toast from 'react-native-toast-message';
import { activityAlreadyExists } from '../../utils/validation';
import { LinearGradient } from 'expo-linear-gradient';


export default function EditActivityModal(props) {
  const [inputActivity, setInputActivity] = React.useState();
  const [show, setShow] = React.useState(false);
  const [showTextInput, setShowTextInput] = React.useState(false);

  const { setShowEditModal, showEditModal, activityName, refresh, setRefresh, setAlert, alert, chosenTime, setChosenTime, activities } = props;  

  const editActivity = () => {
    
    const changeActivity = {
      completed: false,
      activity: inputActivity ? inputActivity : activityName,
      type: 'work',
      alert: chosenTime ? alert : false,
      alertWhen: alert ? chosenTime : null 
    }

    if (!inputActivity) {
      replaceObjectInAsyncStorage(changeActivity);
      setShowEditModal(false);
      setRefresh(!refresh);
      return;
    }
    if (activityAlreadyExists(activities, inputActivity)) {
      Toast.show({
        text1:'Denied!',
        text2: `Activity ${inputActivity} already exists`,
        type: 'error',
        visibilityTime: 2000,
      })
      return;
    }

    Toast.show({
      text1:'Success!',
      text2: `Activity ${activityName} has been changed`,
      visibilityTime: 2000,
    })

    replaceObjectInAsyncStorage(changeActivity, activityName);
    setShowEditModal(false);
    setRefresh(!refresh);
    setInputActivity('');
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
            
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setInputActivity('');
                setShowEditModal(false);
                setShowTextInput(false);
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
          
            <View style={styles.modalHeadContainer}>
              <Text style={styles.modalHeader}> {activityName} </Text>
              <EditActivityNameButton showTextInput={showTextInput} setShowTextInput={setShowTextInput} />
            </View>
            
            {showTextInput &&
              <TextInput style={styles.input}
                onChangeText={text => setInputActivity(text)}
                value={inputActivity}
                maxLength={16}
                autoFocus
                theme={{ colors: {primary: '#1E2036'} }}
                clearButtonMode="always"          
              />
            }
            
            <View style={styles.textContainer}>
              <Text style={styles.modalText}>Notifications</Text>
              <SwitchToggle setAlert={setAlert} alert={alert} />
            </View>

            {alert && 
            <View style={styles.textContainer}>
              <Text style={styles.modalText} >{ chosenTime ? "Selected time" :  "Select Time"}</Text>              
              <TimeButton chosenTime={chosenTime} setShow={setShow} />
            </View>}
            
            {show &&
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
            }
            <UpdateActivityButton editActivity={editActivity} setShowTextInput={setShowTextInput} />
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
    fontSize: 30,
    marginRight: 20,
    textAlign: "center",
    textTransform: "capitalize",
    color: '#F4F7F8',
  },
  modalHeadContainer: {
    position: 'absolute',
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 500
  },
  modalText: {
    color: '#F4F7F8',
    fontSize: 20,
  },
  textContainer: {
    margin: 10,
    marginTop: 30,
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 30
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