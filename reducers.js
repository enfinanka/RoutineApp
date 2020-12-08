
export const activitiesReducer = (state, action) => {
  switch (action.type) {

    case 'SET_COMPLETED':
      return state.map((obj) => obj.activity === action.payload ? { ...obj, completed: !obj.completed } : obj)

    case 'SET_ALERT':
      return state.map((obj) => obj.alert === action.payload ? { ...obj, alert: !obj.alert } : obj)

    case 'SET_TIME':
      return state.map((obj) => obj.alertWhen === action.payload ? { ...obj, alertWhen: !obj.alertWhen } : obj)

    case 'ADD_ACTIVITY':
      return [...state, action.payload]

    case 'REMOVE_ACTIVITY':
      return state.filter((obj) => obj.activity !== action.payload)
    
    case 'ADD_FROM_ASYNCSTORAGE':
      return action.payload

    default:
    return state;
  }
} 