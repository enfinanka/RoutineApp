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


//kalla på denna likt detta:
//storeDataToAsyncStorage({activity: "oscar", keyToUpdate: "completed", newValue:true})
export const storeDataToAsyncStorage = async (objToUpdate) => {

  const {activity, keyToUpdate, newValue } = objToUpdate

  async function updateState(prevState) {
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
          console.log('error storeData', error) 
        }
      };
      storeNewState()
  }

  retrieveDataFromAsyncStorage()
  .then(data => updateState(data))

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
