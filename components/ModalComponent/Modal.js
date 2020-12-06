import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Modal, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from './Input.js';
import SwitchToggle from '../ButtonComponents/SwitchToggle.js';
import AddActivityButton from '../ButtonComponents/AddActivityButton.js';
import { TextInput } from 'react-native-paper';
import {ActivitiesContext} from '../../contexts'




export default function ModalButton(props) {  
  const { showModal, setShowModal, history } = props;
  
  const { activities, setActivities } = React.useContext(ActivitiesContext);
  const [inputActivity, setInputActivity] = React.useState('');
  const [inputCategory, setInputCategory] = React.useState('');

  const activityAlreadyExists = () => activities.some((obj)=> obj.activity === inputActivity)

  const addNewActivity = () => {
      // more valitators??
    if (activityAlreadyExists()) {
      Alert.alert(`You already have an activity called: ${inputActivity}`)
    } 
    else {
      const newActivity = {
      completed: false, 
      activity: inputActivity, 
      category: inputCategory,
      type: 'work', 
      alert: false, 
      alertWhen: '00:00'
    }
      setActivities({type: 'ADD_ACTIVITY', payload: newActivity})
      setShowModal(false);
      history.push('/');
    }

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
              <SwitchToggle />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.modalText} >Select Time</Text>
              <Icon size={25} name="ios-calendar"></Icon>
            </View>
            <AddActivityButton history={history} addNewActivity={addNewActivity} setShowModal={setShowModal}/>
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
    marginTop: 20,
    marginLeft: 10,
    fontSize: 40,
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
    alignContent: 'space-around',
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
});