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
import CheckboxDays from './Checkbox';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';




export default function NewActivityModal(props) {

  const { showModal, setShowModal, history, refresh, setRefresh } = props;

  const [inputActivity, setInputActivity] = React.useState('');
  const [inputCategory, setInputCategory] = React.useState('');
  const [chosenTime, setChosenTime] = React.useState('');
  const [chosenDays, setChosenDays] = React.useState([]);
  const [checkAll, setCheckAll] = React.useState(false);
  const [alert, setAlert] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const [days, setDays] = React.useState([
    {day: 'Mon', chosen: false}, 
    {day: 'Tue', chosen: false}, 
    {day: 'Wed', chosen: false}, 
    {day: 'Thu', chosen: false}, 
    {day: 'Fri', chosen: false},
    {day: 'Sat', chosen: false},
    {day: 'Sun', chosen: false}
  ]);

  const { activities } = React.useContext(ActivitiesContext);

  const clearValues = () => {
    setInputActivity('')
    setInputCategory('')
    setChosenTime(null)
    setAlert(false)
    setShowModal(false);
    setDays([
      {day: 'Mon', chosen: false}, 
      {day: 'Tue', chosen: false}, 
      {day: 'Wed', chosen: false}, 
      {day: 'Thu', chosen: false}, 
      {day: 'Fri', chosen: false},
      {day: 'Sat', chosen: false},
      {day: 'Sun', chosen: false}
    ]);
    setCheckAll(false);
    setChosenDays([]);
  }

  const addNewActivity = () => {
    const newActivity = {
      completed: false,
      activity: inputActivity,
      category: inputCategory,
      type: 'work',
      daysToAlert: chosenDays === [] ? chosenDays : days,
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
                maxLength={25}
              />
            </View>
            <View>
              <CheckboxDays days={days} setChosenDays={setChosenDays} checkAll={checkAll} setCheckAll={setCheckAll}/>
            </View>

            <View style={styles.timeContainer}>
              <TouchableOpacity style={styles.button} onPress={()=>setShow(true)}>
                <Text style={styles.buttonText}>{ chosenTime ? "Change time" :  "Select time"}</Text>
              </TouchableOpacity>   
              <View style={styles.time}>
                <TimeButton chosenTime={chosenTime} show={show} setShow={setShow} />
                { chosenTime ? <MaterialIcon style={styles.clearTime} name="clear" size={25} color="#fff" onPress={() => setChosenTime('')}/> : null}      
              </View>           
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.modalText}>Notifications</Text>
              <SwitchToggle disabled={!chosenTime} setAlert={setAlert} alert={alert} />
            </View>


            {show ?
              <View>
                <DateTimePickerModal
                  isVisible={show}
                  mode="time"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                  locale="gb"
                  is24Hour={true}
                  headerTextIOS="Select Time"
                  minuteInterval={5}
                />
              </View>
            :null}
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
    elevation: 3
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
    marginTop: 10,
    width: 330,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20
  },
  container: {
    paddingBottom: 20,
  },
  input: {
    height: 50,
    margin: 10,
    width: 350,
    color: '#fff',
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100
  },
  checkboxes: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50
  },
  days: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold'
  },
  timeContainer: {
    marginTop: 10,
    width: 330,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 20
  },
  time: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    color: '#fff',
    backgroundColor: '#3f4155',
    minHeight: 42,
    borderRadius: 15,
    borderColor: '#EBB000',
    borderWidth: 2,
    padding: 10,
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#EBB000',
    textAlign: 'center',
    // fontWeight: 'bold'
  },
  clearTime: {
    borderRadius: 20,
    marginLeft: 10,
  },  
});