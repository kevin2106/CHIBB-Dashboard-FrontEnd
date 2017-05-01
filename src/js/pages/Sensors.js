import React from "react";

import Sensor from "../components/Sensor";
import * as SensorActions from "../actions/SensorActions";
import SensorStore from "../stores/SensorStore";

export default class Sensors extends React.Component {
  constructor(){
    super();
    this.state = {
      sensors: SensorStore.getAll(),
    };
  }

  componentWillMount(){
      SensorStore.on("change", () => {
        this.setState({
          sensors: SensorStore.getAll(),
        });
      });
  }

  reloadSensors(){
    SensorActions.reloadSensors();
  }

  render() {
    const { sensors } = this.state;

    const SensorComponents = sensors.map((sensor) => {
      return <Sensor key={sensor.id} {...sensor}/>;
    });

    return (
      <div>
      <button onClick={this.reloadSensors.bind(this)}>Reload!</button>
        <h1>Sensors</h1>
        <ul>{SensorComponents}</ul>
      </div>
    );
  }
};
