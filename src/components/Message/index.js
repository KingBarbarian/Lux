import React from "react";
import { Message as Msg } from "@/actions";
import { Toast } from "antd-mobile";

export default class Message extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      if (nextProps.visiable === true) {
        if (nextProps.type === Msg.TYPE_ERROR) {
          Toast.fail(nextProps.content, 0);
        } else if (nextProps.type === Msg.TYPE_SUCCESS) {
          Toast.success(nextProps.content, 0);
        } else if (nextProps.type === Msg.TYPE_LOADING) {
          Toast.loading(nextProps.content, 0);
        }
      } else {
        Toast.hide();
      }
    }
  }
  render() {
    return <div />;
  }
}
