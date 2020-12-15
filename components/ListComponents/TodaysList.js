import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SwipeListView } from 'react-native-swipe-list-view';
import EditActivityModal from '../ModalComponent/EditActivityModal';
import Toast from 'react-native-toast-message';
import { Easing } from 'react-native-reanimated';

export default function TodaysList(props) {

  const { activities, setActivities, refresh, setRefresh } = props;

  const [showEditModal, setShowEditModal] = React.useState(false);
  const [activityName, setActivityName] = React.useState('');
  const [chosenTime, setChosenTime] = React.useState('');
  const [chosenDays, setChosenDays] = React.useState([chosenDays]);
  const [alert, setAlert] = React.useState(false);

  const key = Math.floor(Math.random()*100000000);
  
  const spinValue = new Animated.Value(0);
  const transValue = new Animated.Value(0);

  Animated.timing(spinValue, {
    toValue: 1,
    duration: 300,
    //easing: Easing.linear,
    useNativeDriver: true,
    bounciness: 0,
    //delay: 300,
  }).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  Animated.timing(transValue, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: true,
    delay: 500,
  }).start();

  const editActivity = (activityName, notificationAlert, alertWhen, daysToAlert) => {
    setShowEditModal(true);
    setActivityName(activityName);
    setAlert(notificationAlert);
    setChosenTime(alertWhen);
    setChosenDays(daysToAlert);
  }

  const handleCompleted = (activity, completed) => {
    setActivities({ type: 'SET_COMPLETED', payload: activity})
    setRefresh(!refresh)
  }

  const renderItem = (data) => {
    return (
      <Animated.View
        style={data.item.completed ? {
         transValue
        }: null}
      >
        <View style={data.item.completed ? styles.listItemDone : styles.listItem}>
          <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <Text style={styles.activityText}>{data.item.activity}</Text>
            <View
              style={{
                display: 'flex', 
                justifyContent: 'flex-start', 
                flexDirection: 'row', 
                alignItems: 'center'
              }}>
              {data.item.alert ? <Ionicons style={styles.notifyIcon} name="ios-notifications" size={20} color="#EBB000"/> : null}
              {data.item.alertWhen ?
                <Text
                  style={{
                  color: data.item.completed ? '#F5F4F8' : '#85BCA9',
                  fontSize: 14,
                  marginLeft: data.item.alert ? 10 : 20,
                  marginTop: 10
                  }}
                  >{data.item.alertWhen}</Text>
              : null}
            </View>
          </View>
            <TouchableOpacity style={styles.checkIcon} onPress={() => handleCompleted(data.item.activity, data.item.completed)}>
              {data.item.completed ?
                <Animated.View
                  style={{
                    transform: [
                      { rotate: spin}
                    ]
                  }}
                >
                  <AntDesign name="checkcircleo" size={50} color="#F5F4F8"/>
                </Animated.View>
                :
                <Feather name="circle" size={50} color="#85BCA9"/>
              }
            </TouchableOpacity>
        </View>
      </Animated.View>
    )
  };
  
  const renderHiddenItem = (data, rowMap) => (
    
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={styles.leftButton}
        onPress={() => editActivity(data.item.activity, data.item.alert, data.item.alertWhen, data.item.daysToAlert )}
      >
        <Text style={{ color: '#F5F4F8' }}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backRightBtnRight}
        onPress={() => {
          setActivities({ type: 'REMOVE_ACTIVITY', payload: data.item.activity })
          Toast.show({
            text1: `Activity Deleted`,
            type: 'error',
            visibilityTime: 2000
          })
        }}
      >
        <Text style={{ color: "#F5F4F8" }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        data={activities}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-75}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        friction={4}
        key={key}
        keyExtractor={(item, index) => index.toString()}
      />
      <EditActivityModal 
        activityName={activityName} 
        activities={activities} 
        setShowEditModal={setShowEditModal} 
        showEditModal={showEditModal} 
        refresh={refresh}
        setRefresh={setRefresh}
        setAlert={setAlert}
        alert={alert}
        chosenTime={chosenTime}
        setChosenTime={setChosenTime}
        chosenDays={chosenDays}
        setChosenDays={setChosenDays}
      />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 50,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 66,
    marginTop: 15,
    margin: 10,
    borderRadius: 15,
    backgroundColor: '#3f4155',
    color: "#F5F4F8",
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 4
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  listItemDone: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 66,
    marginTop: 15,
    margin: 10,
    borderRadius: 15,
    backgroundColor: '#85BCA9',
    color: "#F5F4F8"
  },
  rowBack: {
    alignItems: 'center',
    flex: 1,
    height: 66,
    marginTop: 15,
    margin: 10,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
  },
  backRightBtnRight: {
    backgroundColor: '#EB5500',
    right: 0,
    borderRadius: 100,
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 66,
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  activityText: {
    color: '#F4F7F8',
    fontSize: 20,
    marginLeft: 20,
  },
  leftButton: {
    borderRadius: 100,
    backgroundColor: '#5E6170',
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 66,
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  checkIcon: {
    marginRight: 10
  },
  notifyIcon: {
    marginTop: 10,
    marginLeft: 20
  },
  days: {
    display: 'flex', 
    justifyContent: 'flex-start', 
    flexDirection: 'row', 
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 5,
  }
});