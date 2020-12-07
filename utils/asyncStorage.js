import AsyncStorage from '@react-native-async-storage/async-storage';

export const activities = JSON.stringify([
  {completed: false, activity: 'oscar', type: 'health', alert: true, alertWhen: '12:00'},
  {completed: false, activity: 'eat pizza', type: 'health', alert: true, alertWhen: '11:59'},
  {completed: false, activity: 'change dipers', type: 'family', alert: false, alertWhen: '20:00'},
  {completed: false, activity: 'hit boss in eye', type: 'work', alert: false, alertWhen: '00:00'}
])

export const retrieveDataFromAsyncStorage = async () => {
  try {
    const value = await AsyncStorage.getItem('Activities');
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.log('error retrieveData', error)
  }
};

export const storeDataToAsyncStorage = async () => {
  let updatedState = {}
  retrieveDataFromAsyncStorage()
  .then(data => updatedState = data)
  .then((data) => console.log('updatedState:', updatedState))
  // prevAS.then(data => console.log('prevAS.then: data in storeDataToAsyncStorage', data))



  // try {
  //   const prevAS = await retrieveDataFromAsyncStorage()
  //   if (prevAS !== null ) {
  //     return JSON.parse(prevAS);
  //   }
  //   await AsyncStorage.setItem(
  //     'Activities',
  //     passedExamples
  //   );
  // } catch (error) {
  //   console.log('error storeData', error) 

  // }
};

export const InitalStoreDataToAsyncStorage = async () => {
  try {
    await AsyncStorage.setItem(
      'Activities',
      activities
    );
  } catch (error) {
    console.log('error storeData', error) 
  }
};
