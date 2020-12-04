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

const rowSwipeAnimatedValues = {};
Array(20)
    .fill('')
    .forEach((_, i) => {
        rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
    });
    //VAD GÖR DENNA

export default function TodaysList() {

  const exampleToDos = [
    { activity: 'walk the dog', type: 'health', alert: true, alertWhen: '12:00', key: "1"},
    { activity: 'eat pizza', type: 'health', alert: true, alertWhen: '11:59', key: "2"},
    { activity: 'change dipers', type: 'family', alert: false, alertWhen: '20:00', key: "3"},
    { activity: 'hit boss in eye', type: 'work', alert: false, alertWhen: '00:00', key: "4"}
  ]

  const [listData, setListData] = useState(exampleToDos);
  const [checked, setChecked] = useState(false);

  const [checkedColor, setCheckedColor] = useState('#3f4155');

  const closeRow = (rowMap, rowKey) => {
    console.log('rowmap,', rowMap)
      if (rowMap[rowKey]) {
          rowMap[rowKey].closeRow();
      }
  };

  const activityDone = (rowMap, rowKey) => {
    setChecked(!checked)
    if (rowMap[rowKey] && checkedColor === '#3f4155') {
      setCheckedColor('#85BCA9')
      rowMap[rowKey].activityDone();

  } else {
    setCheckedColor('#3f4155')
  }
  }

  const deleteRow = (rowMap, rowKey) => {
      closeRow(rowMap, rowKey);
      const newData = [...listData];
      const prevIndex = listData.findIndex(item => item.key === rowKey);
      newData.splice(prevIndex, 1);
      setListData(newData);
  };

  // const onRowDidOpen = rowKey => {
  //     console.log('This row opened', rowKey);
  // };

  const onSwipeValueChange = swipeData => {
      const { key, value } = swipeData;
      rowSwipeAnimatedValues[key].setValue(Math.abs(value));
  };

  const renderItem = (data) => {
    return(
      // <TouchableHighlight
      //     onPress={(e) => console.log('runs')}
      //     style={styles.rowFront}
      //     underlayColor={'#AAA'}
      // >
      <View style={styles.rowFront}>
        <Text style={styles.activityText}>{data.item.activity}</Text>
      </View>
      // </TouchableHighlight>
  )};

  const renderHiddenItem = (data, rowMap) => (
      <View style={styles.rowBack}>
        <TouchableOpacity style={styles.leftButtonContainer} onPress={() => setChecked(!checked)}>
        {/* <TouchableOpacity style={styles.leftButtonContainer} onPress={() => activityDone(rowMap, data.item.key)}> */}
        {checked ? 
          <AntDesign name="checkcircleo" size={50} color="#85BCA9" /> 
          : <Feather name="circle" size={50} color="#85BCA9" />
        }
        </TouchableOpacity>
          <TouchableOpacity
              style={[styles.backRightBtn, styles.backRightBtnLeft]}
              onPress={() => closeRow(rowMap, data.item.key)}
          >
              <Text style={{color: '#F5F4F8'}}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={[styles.backRightBtn, styles.backRightBtnRight]}
              onPress={() => deleteRow(rowMap, data.item.key)}
          >
            <Text style={{color: "#F5F4F8"}}>Trash</Text>
          </TouchableOpacity>
      </View>
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        // onRowDidOpen={onRowDidOpen}
        onSwipeValueChange={onSwipeValueChange}
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
    justifyContent: 'center',
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
    backgroundColor: '#EB7100',
    right: 0,
    borderRadius: 100,
    // color: "#fff"
  },
  trash: {
    height: 25,
    width: 25,
  },

  activityText: {
    color: '#F4F7F8',
    fontSize: 20,
    marginLeft: 30,
  },
  leftButtonContainer: {
    borderRadius: 100,
    width: 100
  }
});