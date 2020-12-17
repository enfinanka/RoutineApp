export const sortActivities = (d, newDay) => {

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const dayOfTheWeek = weekdays[new Date().getDay()-1]
let todaysActivities

  if (d === undefined) {
    return []
  }
  
  const dAllFalse = d.map((activity) => {
    return {...activity, completed: false}
  })

  if (!newDay){
    todaysActivities = d.filter((act) => act.daysToAlert.find((weekday) => {
        return weekday.chosen === true && weekday.day === dayOfTheWeek
      })
    )
  }

  if (newDay){
    const dAllFalse = d.map((activity) => {
      return {...activity, completed: false}
    })
    todaysActivities = dAllFalse.filter((act) => act.daysToAlert.find((weekday) => {
        return weekday.chosen === true && weekday.day === dayOfTheWeek
      })
    )
  }

  const notCompleted = todaysActivities.filter((a) => !a.completed)
  const completed = todaysActivities.filter((a) => a.completed)

  const notCompletedNoTime = notCompleted.filter((a)=> !a.alertWhen)
  const completedNoTime = completed.filter((a)=> !a.alertWhen)

  const completedAndHasTime = completed.filter((a)=> a.alertWhen)
  const notCompletedAndHasTime = notCompleted.filter((a)=> a.alertWhen)

  //Convert to numbers to be able to sort.
  const notCompletedAndHasTimeAsNumber = notCompletedAndHasTime.map((a)=> {
    const timeAsNumberWOColon = parseInt(a.alertWhen.replace(':','')) 
    return {...a, alertWhen: timeAsNumberWOColon}
  })
  const completedAndHasTimeAsNumber = completedAndHasTime.map((a)=> {
    const timeAsNumberWOColon = parseInt(a.alertWhen.replace(':','')) 
    return {...a, alertWhen: timeAsNumberWOColon}
  })

  //Sorting.
  const notCompletedSortedByTime = notCompletedAndHasTimeAsNumber.sort((a,b) => a.alertWhen - b.alertWhen) 
  const completedSortedByTime = completedAndHasTimeAsNumber.sort((a,b) => a.alertWhen - b.alertWhen) 

  //Turning numbers to strings again to render properly.
  const sortedHasTimeNotCompleted = notCompletedSortedByTime.map((act)=> notCompletedAndHasTime.find((obj)=> obj.activity === act.activity))
  const sortedHasTimeCompleted = completedSortedByTime.map((act)=> completedAndHasTime.find((obj)=> obj.activity === act.activity))

  return [...sortedHasTimeNotCompleted, ...notCompletedNoTime, ...sortedHasTimeCompleted, ...completedNoTime]
}