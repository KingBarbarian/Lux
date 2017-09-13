import React from "react";
import { DatePickerView } from "antd-mobile";
import enUs from "antd-mobile/lib/date-picker-view/locale/en_US";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  onChange(value) {
    console.log(value);
    this.setState({ value });
  }
  onValueChange(date) {
    console.log(date);
  }

  render() {
    return (
      <div>
        <div className="sub-title">Start DateTime</div>
        <DatePickerView
          value={this.state.value}
          onChange={() => this.onChange}
          onValueChange={this.onValueChange}
        />
        <div className="sub-title">End DateTime</div>
        <DatePickerView
          locale={enUs}
          value={this.state.value}
          onChange={() => this.onChange}
          onValueChange={this.onValueChange}
        />
      </div>
    );
  }
}
