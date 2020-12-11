

export const sortActivities = (d) => {

  const notCompleted = d.filter((a) => !a.completed)
  const completed = d.filter((a) => a.completed)

  const completedAndHasTime = completed.filter((a)=> a.alertWhen)
  const notCompletedAndHasTime = notCompleted.filter((a)=> a.alertWhen)

  const notCompletedNoTime = notCompleted.filter((a)=> !a.alertWhen)
  const completedNoTime = completed.filter((a)=> !a.alertWhen)

  const notCompletedAndHasTimeAsNumber = notCompletedAndHasTime.map((a)=> {
    const timeAsNumberWOColon = parseInt(a.alertWhen.replace(':','')) 
    return {...a, alertWhen: timeAsNumberWOColon}
  })

  const completedAndHasTimeAsNumber = completedAndHasTime.map((a)=> {
    const timeAsNumberWOColon = parseInt(a.alertWhen.replace(':','')) 
    return {...a, alertWhen: timeAsNumberWOColon}
  })

  const notCompletedSortedByTime = notCompletedAndHasTimeAsNumber.sort((a,b) => a.alertWhen - b.alertWhen) 
  const completedSortedByTime = completedAndHasTimeAsNumber.sort((a,b) => a.alertWhen - b.alertWhen) 

  const notCompletedSortedByTimeAsString = notCompletedSortedByTime.map((a)=> {
    let timeAsString = a.alertWhen.toString()
    if(timeAsString.length < 4) {
      timeAsString = 0 + timeAsString
    }
    timeAsString = timeAsString.substring(0,2) + ":" + timeAsString.substring(2, timeAsString.length)
    return {...a, alertWhen: timeAsString}
  })

  const completedSortedByTimeAsString = completedSortedByTime.map((a)=> {
    let timeAsString = a.alertWhen.toString()
    if(timeAsString.length < 4) {
      timeAsString = 0 + timeAsString
    }
    timeAsString = timeAsString.substring(0,2) + ":" + timeAsString.substring(2, timeAsString.length)
    return {...a, alertWhen: timeAsString}
  })

  return [...notCompletedSortedByTimeAsString, ...notCompletedNoTime, ...completedSortedByTimeAsString, ...completedNoTime ]
  
}