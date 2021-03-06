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
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import CheckboxDays from './Checkbox';



export default function EditActivityModal(props) {

  const [inputActivity, setInputActivity] = React.useState();
  const [show, setShow] = React.useState(false);
  const [showTextInput, setShowTextInput] = React.useState(false);
  const [checkAll, setCheckAll] = React.useState(false);
  const [hasSelectedDay, setHasSelectedDay] = React.useState(true);

  const { 
    setShowEditModal,
    showEditModal, 
    activityName, 
    refresh, 
    setRefresh, 
    setAlert, 
    alert, 
    chosenTime, 
    setChosenTime, 
    activities, 
    daysToAlert, 
    chosenDays, 
    setChosenDays 
  } = props;  

  const [days, setDays] = React.useState();

  const editActivity = () => {
    
    const changeActivity = {
      completed: false,
      activity: inputActivity ? inputActivity : activityName,
      type: 'work',
      daysToAlert: chosenDays,
      alert: alert,
      alertWhen: chosenTime
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
    setCheckAll(false);
    setChosenDays('');
    setHasSelectedDay(false)
  }

  const handleConfirm = (time) => {
    let chosenTime = time.toLocaleTimeString().slice(0, 5);
    setShow(false);
    setChosenTime(chosenTime);
  }

  const hideDatePicker = () => {
    setShow(false);
  }

  const clearTime = () => {
    setChosenTime('')
    setAlert(false);
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
            
            {showTextInput ?
              <TextInput style={styles.input}
                onChangeText={text => setInputActivity(text)}
                value={inputActivity}
                maxLength={25}
                autoFocus
                theme={{ colors: {primary: '#1E2036'} }}
                clearButtonMode="always"          
              />
            : null}

            <View style={styles.textContainer}>
            <CheckboxDays 
              days={days} 
              chosenDays={chosenDays} 
              setChosenDays={setChosenDays} 
              checkAll={checkAll} 
              setCheckAll={setCheckAll} 
              daysToAlert={daysToAlert}
              setHasSelectedDay={setHasSelectedDay}
            />
            </View>

            <View style={styles.timeContainer}>
              <TouchableOpacity style={styles.button} onPress={()=>setShow(true)}>
                <Text style={styles.buttonText}>{ chosenTime ? "Change time" :  "Select time"}</Text>
              </TouchableOpacity>   
              <View style={styles.time}>
                <TimeButton chosenTime={chosenTime} show={show} setShow={setShow} />
                { chosenTime ? <MaterialIcon style={styles.clearTime} name="clear" size={25} color="#fff" onPress={() => clearTime()}/> : null}      
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
            <UpdateActivityButton hasSelectedDay={hasSelectedDay} editActivity={editActivity} setShowTextInput={setShowTextInput} />
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
    elevation: 3
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
    marginTop: 10,
    width: 330,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20
  },
  input: {
    height: 50,
    margin: 10,
    width: 350,
    color: '#fff',
  },
  container: {
    paddingBottom: 50,
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
    paddingBottom: 30
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
  },
  clearTime: {
    borderRadius: 20,
    marginLeft: 10,
  },  
});