import React from "react";
import { List, InputItem } from "antd-mobile";
import { withRouter } from "react-router-dom";

class AddCredit extends React.Component {
  render() {
    return (
      <div>
        <List>
          <InputItem
            type={"money"}
            placeholder="start from left"
            clear
            moneyKeyboardAlign="left"
          >
            光标在左
          </InputItem>
          <InputItem type={"money"} placeholder="start from right" clear>
            光标在右
          </InputItem>
          <InputItem
            type={"money"}
            placeholder="start from left"
            clear
            moneyKeyboardAlign="left"
          >
            光标在左
          </InputItem>
          <InputItem type={"money"} placeholder="start from right" clear>
            光标在右
          </InputItem>
        </List>
      </div>
    );
  }
}

export default withRouter(AddCredit);
