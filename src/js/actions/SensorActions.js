import dispatcher from "../dispatcher";

export function createSensor(text) {
    dispatcher.dispatch({
      type: "CREATE_SENSOR",
      text,
    });
  }

export function deleteSensor(id) {
    dispatcher.dispatch({
      type: "DELETE_SENSOR",
      id,
    });
  }

export function reloadSensors() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  dispatcher.dispatch({type: "FETCH_SENSORS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_SENSORS", sensors: [
      {
        id: 8192319238,
        type: "Temperature2",
        value: 21.0
      },
      {
        id: 45345435,
        type: "Humidity2",
        value: 52
      },
    ]});
  }, 1000);
}
