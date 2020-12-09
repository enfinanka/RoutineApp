import AsyncStorage from '@react-native-async-storage/async-storage';

async function storeNewState (newState) {
  try {
    await AsyncStorage.setItem(
      'Activities',
      JSON.stringify(newState)
    );
  } catch (error) {
    console.log('error in storeNewState:', error) 
  }
};


export const InitalStoreDataToAsyncStorage = async () => {
  const activities = [
    {completed: false, activity: 'oscar', type: 'health', alert: true, alertWhen: '12:00'},
    {completed: false, activity: 'eat pizza', type: 'health', alert: true, alertWhen: '11:59'},
    {completed: false, activity: 'change dipers', type: 'family', alert: false, alertWhen: '20:00'},
    {completed: false, activity: 'hit boss in eye', type: 'work', alert: false, alertWhen: '00:00'}
  ]
  storeNewState (activities)
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
//updateKeyInAsyncStorage({activity: "oscar", keyToUpdate: "completed", newValue:true})
export const updateKeyInAsyncStorage = async (objToUpdate) => {
  const {activity, keyToUpdate, newValue } = objToUpdate
  async function updateStorage(prevState) {
    const newState = prevState.map(obj => obj.activity !== activity ? obj : {...obj, [keyToUpdate]: newValue})
    storeNewState(newState)
  }
  retrieveDataFromAsyncStorage()
  .then(data => updateStorage(data))
};


//kalla på denna likt detta för att plocka bort en aktivitet ur:
//deleteAnActivityFromAsyncStorage("oscar")
export const deleteAnActivityFromAsyncStorage = async (activity) => {
  async function updateStorage(prevState) {
    const newState = prevState.filter(obj => obj.activity !== activity )
    storeNewState(newState)
  }
  retrieveDataFromAsyncStorage()
  .then(data => updateStorage(data))
};


//kalla på denna likt detta för att helt byta ut ett object med samma "namn" på activity.
//replaceObjectInAsyncStorage({completed: false, activity: 'oscar', type: 'funstuff', alert: true, alertWhen: '00:12'})

// Vill man byta namn och redigera skcickar man med en sträng med det gamla namnet så funktionen vet vilken den ska byta ut i arrayen.
//replaceObjectInAsyncStorage({completed: false, activity: 'oscar', type: 'funstuff', alert: true, alertWhen: '00:12'}, "nyttAktivitetsNamn")
export const replaceObjectInAsyncStorage = async (objToUpdate, previousActivityName) => {

  async function updateStorage(prevState) {

    if(!previousActivityName) {
      const newState = prevState.map(obj => obj.activity === objToUpdate.activity ? objToUpdate : obj)
      storeNewState(newState)
    } 
    else {
      const newState = prevState.map(obj => obj.activity !== previousActivityName ? obj : objToUpdate)
      storeNewState(newState)
    }
  }
  retrieveDataFromAsyncStorage()
  .then(data => updateStorage(data))
};


//kalla på denna likt detta för att lägga till ett objekt:
//addObjectInAsyncStorage({completed: false, activity: 'oscar', type: 'funstuff', alert: true, alertWhen: '00:12'})
export const addObjectInAsyncStorage = async (newObj) => {
  async function updateStorage(prevState) {
    const newState = [...prevState, newObj]
    storeNewState(newState)
  }
  retrieveDataFromAsyncStorage()
  .then(data => updateStorage(data))
};