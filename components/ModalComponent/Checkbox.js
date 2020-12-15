import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function CheckboxDays(props) {

  const { setChosenDays, days, checkAll, setCheckAll, chosenDays } = props;
  const [checked, setChecked] = React.useState(false);  

  const handleDays = (e) => {
    days.find((obj) => {
      if(obj.day === e) {
        obj.chosen = !obj.chosen;
        return obj;
      }  
    });
    // const trueDays = days.filter((day) => day.chosen === true)
    // const daysAsString = trueDays.map((day) => day.day);
    setChosenDays(days);
    setChecked(!checked);
  };

  const handleAllDays = (days) => {
    setCheckAll(!checkAll)
    days.map((day) => {
      if(checkAll === false){
        day.chosen = true;
        return day;
      }
      if(checkAll === true){
        day.chosen = false;
        return day;
      }
    })

    setChosenDays(days)
    setChecked(!checked);
  }

  const editDays = (e) => {
    chosenDays.find((obj) => {
      if(obj.day === e) {
        obj.chosen = !obj.chosen;
        return obj;
      }  
    });

    setChosenDays(chosenDays);
    setChecked(!checked);
  };

  return (
    <View>
      <View style={styles.checkboxContainer}>
      {chosenDays ? 
        chosenDays.map((obj, index) => {
          return (
          <View style={styles.checkboxes} key={index}>
            <Text style={styles.days}>{obj.day}</Text>
            <CheckBox
              center
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checkedColor='#EBB000'
              checked={obj.chosen}
              onPress={() => editDays(obj.day)}
            />
          </View>
          )
        })
        : 
        days.map((obj, index) => {
          return (
          <View style={styles.checkboxes} key={index}>
            <Text style={styles.days}>{obj.day}</Text>
            <CheckBox
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checkedColor='#EBB000'
              checked={obj.chosen}
              onPress={() => handleDays(obj.day)}
            />
          </View>)
        })
      }
      </View>
      {!chosenDays ?
        <View style={styles.allDays}>
          <Text style={styles.selectAll}>Select all days</Text>
          <CheckBox
            iconRight
            right
            checkedColor='#EBB000'
            checked={checkAll}
            size={30}
            onPress={() => handleAllDays(days)}
          />
        </View>
        : null}
    </View>
  )}

const styles = StyleSheet.create({
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  selectAll: {
    color: '#F4F7F8',
    fontSize: 20,
  },
  allDays: {
    width: 330,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});