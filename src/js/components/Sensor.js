import React from "react";

export default class Sensor extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { complete, edit, value, type } = this.props;

    const icon = complete ? "\u2714" : "\u2716"

    if (edit) {
      return (
        <li>
          <input value={type} focus="focused"/>
        </li>
      );
    }

    return (
      <li>
        <span>{type}</span>
        <span>{icon}</span>
      </li>
    );
  }
}
