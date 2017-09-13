import React from "react";
import { Button, InputItem, WhiteSpace, NavBar, Icon } from "antd-mobile";
import invoke from "react-native-webview-invoke/browser";

const webWannaSet = invoke.default.bind("set");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  onClick_() {
    console.log(this.state.value);
    webWannaSet();
  }
  render() {
    return (
      <div>
        <NavBar
          leftContent="back"
          mode="light"
          onLeftClick={() => console.log("onLeftClick")}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
            <Icon key="1" type="ellipsis" />
          ]}
        >
          NavBar
        </NavBar>
        <InputItem
          type="number"
          placeholder="click to show number keyboard"
          onBlur={value => this.setState({ value })}
        >
          数字键盘
        </InputItem>
        <Button type="primary" onClick={() => this.onClick_()}>
          primary
        </Button>
        <WhiteSpace />
      </div>
    );
  }
}
