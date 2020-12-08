import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SwipeListView } from 'react-native-swipe-list-view';
import { ActivitiesContext } from '../../contexts'

export default function TodaysList() {

  const { activities, setActivities } = React.useContext(ActivitiesContext);
<<<<<<< HEAD
  const [checked, setChecked] = useState(false);

  // console.log('activities', activities)

  // const onSwipeValueChange = swipeData => {
  //   console.log('swipeData', swipeData);
  //     // const { key, value } = swipeData;
  //     // rowSwipeAnimatedValues[key].setValue(Math.abs(value));
  // };

  // console.log('activities in list:', activities)
  const editActivity = () => {

  }

  const deleteActivity = (rowMap, data) => {
    console.log(rowMap, data.item)
  }
=======
>>>>>>> d0178b6bc5bb79fc7d8fae39cf3f05ac5226a482

  const renderItem = (data) => {
    return (
      <View style={data.item.completed ? styles.listItemDone : styles.listItem}>
        <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <Text style={styles.activityText}>{data.item.activity}</Text>
          <View style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'row'}}>
            {data.item.alert ? 
              <Ionicons style={styles.notifyIcon} name="ios-notifications" size={20} color="#EBB000"/>
            : null}
            {data.item.alertWhen ? 
              <Text
              style={{
                color: data.item.completed ? '#F5F4F8' : '#85BCA9',
                fontSize: 12,
                marginLeft: data.item.alert ? 10 : 20,
                marginTop: 10
                }}
                >{data.item.alertWhen}</Text>
            : null}
          </View>
        </View>
        <TouchableOpacity style={styles.checkIcon} onPress={() => setActivities({ type: 'SET_COMPLETED', payload: data.item.activity })}>
          {data.item.completed ?
            <AntDesign name="checkcircleo" size={50} color="#F5F4F8" />
            : 
            <Feather name="circle" size={50} color="#85BCA9" />
          }
        </TouchableOpacity>
      </View>
    )
  };

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={styles.leftButton}
        onPress={() => editActivity(rowMap, data.key)}
      >
        <Text style={{ color: '#F5F4F8' }}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backRightBtnRight}
        onPress={() => setActivities({ type: 'REMOVE_ACTIVITY', payload: data.item.activity })}
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
        keyExtractor={(item, index) => index.toString()}
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
    color: "#F5F4F8"
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
  },
  checkIcon: {
    marginRight: 10
  },
  notifyIcon: {
    marginTop: 5,
    marginLeft: 20
  }
});