import { AsyncStorage } from 'react-native';

export const Activities = [
  {completed: false, activity: 'oscar', type: 'health', alert: true, alertWhen: '12:00'},
  {completed: false, activity: 'eat pizza', type: 'health', alert: true, alertWhen: '11:59'},
  {completed: false, activity: 'change dipers', type: 'family', alert: false, alertWhen: '20:00'},
  {completed: false, activity: 'hit boss in eye', type: 'work', alert: false, alertWhen: '00:00'}
]

const passedExamples = JSON.stringify(Activities)

export const retrieveData = async () => {
  console.log('retrivedata ran');
  try {
    const value = await AsyncStorage.getItem('Activities');
    if (value !== null) {
      // We have data!!
      console.log('value from asyncstorage:', JSON.parse(value));
      return value
    }
  } catch (error) {
    console.log('error retrieveData', error)

    return []
    // Error retrieving data
  }
};

export const storeData = async () => {
  console.log('Storedata ran');
  try {
    await AsyncStorage.setItem(
      'Activities',
      passedExamples
    );
  } catch (error) {
    console.log('error storeData', error) 
    // Error saving data
  }
};

