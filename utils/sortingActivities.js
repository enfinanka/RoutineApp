export const sortActivities = (d) => {

  if (d === undefined) {
    d = []
  }


  const notCompleted = d.filter((a) => !a.completed)
  const completed = d.filter((a) => a.completed)

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

  if (d === []) {
    return []
  }
  return [...sortedHasTimeNotCompleted, ...notCompletedNoTime, ...sortedHasTimeCompleted, ...completedNoTime]
}