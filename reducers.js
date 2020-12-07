import { AsyncStorage } from 'react-native';

export const exampleToDos = [
  {completed: false, activity: 'oscar', type: 'health', alert: true, alertWhen: '12:00'},
  {completed: false, activity: 'eat pizza', type: 'health', alert: true, alertWhen: '11:59'},
  {completed: false, activity: 'change dipers', type: 'family', alert: false, alertWhen: '20:00'},
  {completed: false, activity: 'hit boss in eye', type: 'work', alert: false, alertWhen: '00:00'}
]

export const activitiesReducer = (state, action) => {
  switch (action.type) {

    case 'SET_COMPLETED':
      return state.map((obj) => obj.activity === action.payload ? {...obj, completed: !obj.completed} : obj)

    case 'ADD_ACTIVITY':
      return [...state, action.payload]

    case 'REMOVE_ACTIVITY':
      return state.filter((obj) => obj.activity !== action.payload)

    case 'SAVE_ASYNC_STORAGE': 
      try {
        AsyncStorage.setItem(
          'Activities',
          state
        );
      } catch (error) {
        console.log('error storeData') 
      }

    case 'LOAD_ASYNC_STORAGE': 
    console.log('LOAD_ASYNC_STORAGE ran');
    let newState;
    async () => {
      console.log('LOAD_ASYNC_STORAGE ran');
      try {
        const value = await AsyncStorage.getItem('Activities');
        if (value !== null) {
          console.log('value from asyncstorage:', JSON.parse(value));
          newState = JSON.parse(value);
        }
      } catch (error) {
        console.log('error retrieveData', error)
      }
      return newState ?? []
    }
    
    // console.log('LOAD_ASYNC_STORAGE ran');
    // const savedActivities = await AsyncStorage.getItem('Activities');
    //   try {
    //     const state = AsyncStorage.getItem('Activities');
    //     console.log(state);
    //     if (state !== null) 
    //       console.log('value from asyncstorage:', JSON.parse(state));
    //       return JSON.parse(state)
    //     }
    //   catch (error) {
    //     console.log('error retrieveData')
    //   }

    default:
      return state;
  }
} 