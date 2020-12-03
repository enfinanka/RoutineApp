import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import  Header  from '../components/HeaderComponents/Header';
import  AddButton  from '../components/ButtonComponents/AddButton';
import ModalButton from '../components/ButtonComponents/ModalButton';
import BackButton from '../components/ButtonComponents/BackButton';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function NewActivityScreen({history}) {
  
  const exampleToDos = [
    { activity: 'walk the dog', type: 'health', alert: true, alertWhen: '12:00'},
    { activity: 'eat pizza', type: 'health', alert: true, alertWhen: '11:59'},
    { activity: 'change dipers', type: 'family', alert: false, alertWhen: '20:00'},
    { activity: 'hit boss in eye', type: 'work', alert: false, alertWhen: '00:00'}
  ]

  return (
    <View style={styles.container}>
      <View style={styles.BackButton}>
        <BackButton history={history}/>
      </View>
       <Header title="New Activity" />

       <FlatList
        ItemSeparatorComponent={
          Platform.OS !== 'android' &&
          (({ highlighted }) => (
            <View
              style={[
                style.separator,
                highlighted && { marginLeft: 0 }
              ]}/>
          ))}
        data={exampleToDos}
        renderItem={({ item, index, separators }) => (
          <TouchableOpacity
            style={styles.listItem}
            key={index}
            onPress={() => this._onPress(item)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            
            <Text style={styles.listText}>{item.activity}</Text>
            
          </TouchableOpacity>
        )}
      />

       <View style={styles.ModalButton}>
        <ModalButton />
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 50,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'center',
    height: 66,
    marginTop: 15,
    margin: 10,
    borderRadius: 15,
    backgroundColor: '#3f4155',
  },
  listText: {
    color: '#F4F7F8',
    fontSize: 20,
    marginLeft: 30,
  },
  ModalButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: 'center'
  },
  BackButton: {
   position: "absolute",
   right: 10,
   top: 30, 
   zIndex: 999
  }
});
