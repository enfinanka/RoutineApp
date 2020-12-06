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
    default:
      return state;
  }
} 