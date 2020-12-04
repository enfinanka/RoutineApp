import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import  Header  from '../components/HeaderComponents/Header';
import ModalButton from '../components/ButtonComponents/ModalButton';
import BackButton from '../components/ButtonComponents/BackButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ActivitiesContext } from '../contexts';


export default function NewActivityScreen({history}) {
  const { activities, setActivities } = React.useContext(ActivitiesContext);
  const anotherActivity = { activity: 'add activity to list', type: 'work', alert: true, alertWhen: '12:34'}

  const addExampleItem = () => setActivities((previousActivities) => [...previousActivities, anotherActivity])
  


  return (
    <View style={styles.container}>
      <View style={styles.BackButton}>
        <BackButton history={history}/>
      </View>
      <Header title="New Activity" date={false} />

      <FlatList
        data={activities}
        renderItem={({ item, index, separators }) => (
          <TouchableOpacity
            style={styles.listItem}
            key={index}
            onPress={() => this.onPress(item)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            
            <Text style={styles.listText}>{item.activity}</Text>
            
          </TouchableOpacity>
        )}
      />

      <View style={styles.ModalButton}>
      <ModalButton addExampleItem={addExampleItem} history={history} />
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
