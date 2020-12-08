import AsyncStorage from '@react-native-async-storage/async-storage';
import { activitiesReducer } from '../reducers';

export const InitalStoreDataToAsyncStorage = async () => {

  const activities = [
    {completed: false, activity: 'oscar', type: 'health', alert: true, alertWhen: '12:00'},
    {completed: false, activity: 'eat pizza', type: 'health', alert: true, alertWhen: '11:59'},
    {completed: false, activity: 'change dipers', type: 'family', alert: false, alertWhen: '20:00'},
    {completed: false, activity: 'hit boss in eye', type: 'work', alert: false, alertWhen: '00:00'}
  ]

  try {
    await AsyncStorage.setItem(
      'Activities',
      JSON.stringify(activities)
    );
  } catch (error) {
    console.log('error InitalStoreDataToAsyncStorage:', error) 
  }
};

export const clearAllAsyncStorage = async () => {

  try {
    await AsyncStorage.clear()
  } catch (error) {
    console.log('error clearAllAsyncStorage:', error) 
  }
};

export const retrieveDataFromAsyncStorage = async () => {

  try {
    const value = await AsyncStorage.getItem('Activities');
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.log('error retrieveDataFromAsyncStorage:', error)
  }
};


//kalla på denna likt detta:
//storeDataToAsyncStorage({activity: "oscar", keyToUpdate: "completed", newValue:true})
export const storeDataToAsyncStorage = async (objToUpdate) => {

  const {activity, keyToUpdate, newValue } = objToUpdate

  async function updateStorage(prevState) {
    console.log('prevState in updateState', prevState);
    const newState = JSON.stringify(prevState.map(obj => obj.activity !== activity ? obj : {...obj, [keyToUpdate]: newValue}))
    console.log('newstate', newState)

    async function storeNewState () {
      console.log('newState in storeNewState', newState);
        try {
          await AsyncStorage.setItem(
            'Activities',
            newState
          );
        } catch (error) {
          console.log('error storeDataToAsyncStorage:', error) 
        }
      };
      storeNewState()
  }

  retrieveDataFromAsyncStorage()
  .then(data => updateStorage(data))
};


//kalla på denna likt detta:
//storeDataToAsyncStorage({activity: "oscar", keyToUpdate: "completed", newValue:true})
export const deleteAnActivityFromAsyncStorage = async (activity) => {
  console.log('activity:', activity)

  async function updateStorage(prevState) {
    const newState = JSON.stringify(prevState.filter(obj => obj.activity !== activity ))
    console.log('newstate deleteAnActivityFromAsyncStorage', newState)

    async function storeNewState () {
      console.log('newState in storeNewState', newState);
        try {
          await AsyncStorage.setItem(
            'Activities',
            newState
          );
        } catch (error) {
          console.log('error deleteAnActivityFromAsyncStorage:', error) 
        }
      };
      storeNewState()
  }

  retrieveDataFromAsyncStorage()
  .then(data => updateStorage(data))
};




