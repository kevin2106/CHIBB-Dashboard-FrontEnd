import {EventEmitter} from "events";

import dispatcher from "../dispatcher";

class SensorStore extends EventEmitter {
  constructor(){
    super()
    this.sensors = [
      {
        id: 127222727,
        type: "Temperature",
        value: 19.2
      },
      {
        id: 284822477,
        type: "Humidity",
        value: 49
      }
    ]
  }

createSensor(text) {
  const id = Date.now();
  this.sensors.push({
    id,
    type: text,
    value: 0.1,
  });
  this.emit("change");
}
  getAll(){
    return this.sensors;
  }

  handleActions(action) {
    switch(action.type){
      case "CREATE_SENSOR": {
        this.createSensor(action.text);
      }
      case "RECEIVE_SENSORS": {
        this.sensors = action.sensors;
        this.emit("change");
      }
    }
  }
}

const sensorStore = new SensorStore;
dispatcher.register(sensorStore.handleActions.bind(sensorStore));
window.dispatcher = dispatcher;
export default sensorStore;
