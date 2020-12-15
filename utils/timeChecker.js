export const checkIfNextDay = () => {
  const currentTime = moment().format("HH:mm");
  const endOfDay = '14:08';
  if (currentTime === endOfDay) {
    console.log("unchecking completed");
    retrieveDataFromAsyncStorage()
      .then((data) => {
        data.forEach((activity) => {
          if (activity.completed == true) {
            // activity.completed = false;

            updateKeyInAsyncStorage({ activity: activity.activity, keyToUpdate: "completed", newValue: false });
            retrieveDataFromAsyncStorage()
              .then((d) => console.log(d));
          }
        })
      })
    clearInterval(startUpInterval);
    setTimeout(() => {
      setCleanCompleted(!cleanCompleted)
    }, 65000);
  }
}