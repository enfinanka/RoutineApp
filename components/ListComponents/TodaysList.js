import React, { useState, useEffect } from 'react';
import {
    Animated,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { SwipeListView } from 'react-native-swipe-list-view';
import {ActivitiesContext} from '../../contexts'


const rowSwipeAnimatedValues = {};
// Array(20)
//     .fill('')
//     .forEach((_, i) => {
//         rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
//     });
    //VAD GÖR DENNA

export default function TodaysList() {

  const { activities, setActivities } = React.useContext(ActivitiesContext);
  const [checked, setChecked] = useState(false);

  // const onSwipeValueChange = swipeData => {
  //   console.log('swipeData', swipeData);
  //     // const { key, value } = swipeData;
  //     // rowSwipeAnimatedValues[key].setValue(Math.abs(value));
  // };

  const editActivity = () => {

  }

  const deleteActivity = () => {

  }

  const renderItem = (data) => {
    return(
      <View style={styles.rowFront}>
        <Text style={styles.activityText}>{data.item.activity}</Text>
        <TouchableOpacity style={styles.checkIcon} onPress={() => setChecked(!checked)}> 
        {checked ? 
          <AntDesign name="checkcircleo" size={50} color="#85BCA9" /> 
          : <Feather name="circle" size={50} color="#85BCA9" />
        }
        </TouchableOpacity>
      </View>
  )};

  const renderHiddenItem = (data, rowMap) => (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={styles.leftButtonContainer}
          onPress={() => editActivity(rowMap, data.key)}
        >
          <Text style={{color: '#F5F4F8'}}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={() => deleteActivity(rowMap, data.key)}
        >
          <Text style={{color: "#F5F4F8"}}>Delete</Text>
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
        // onRowDidOpen={onRowDidOpen}
        // onSwipeValueChange={onSwipeValueChange}
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
  rowFront: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 66,
    marginTop: 15,
    margin: 10,
    borderRadius: 15,
    backgroundColor: '#3f4155',
    color: "#fff"
  },
 
  rowFrontDone: {
    display: 'flex',
    justifyContent: 'center',
    height: 66,
    marginTop: 15,
    margin: 10,
    borderRadius: 15,
    backgroundColor: "#85BCA9",
    color: "#fff"
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
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 66,
  },
  backRightBtnLeft: {
    backgroundColor: '#5E6170',
    right: 75,
    borderRadius: 100,
    color: 'red',
  },
  backRightBtnRight: {
    backgroundColor: '#EB5500',
    right: 0,
    borderRadius: 100,
  },
  // trash: {
  //   height: 25,
  //   width: 25,
  // },
  activityText: {
    color: '#F4F7F8',
    fontSize: 20,
    marginLeft: 30,
  },
  leftButtonContainer: {
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
  }
});