import React from "react";
import { withRouter } from "react-router-dom";
import { List, Result, Icon, WhiteSpace } from "antd-mobile";
import invoke from "react-native-webview-invoke/browser";
import classNames from "classnames/bind";
import styles from "./index.css";
let cx = classNames.bind(styles);

//调用rn的方法，判断返回页面
const back = invoke.default.bind("back");

const Item = List.Item;
const Brief = Item.Brief;

class Next extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    };
  }
  goBack() {
    back(2).then(() => {
      console.log("返回成功");
    });
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <List renderHeader={() => "路由演示"} className="my-list">
          <Result
            img={
              <Icon
                type="cross-circle-o"
                className={cx("icon")}
                style={{ fill: "#F13642" }}
              />
            }
            title="成功"
            message="我是第二个页面"
          />
          <WhiteSpace />
          <Item
            arrow="horizontal"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
            onClick={() => this.goBack()}
          >
            跳转 <Brief>返回上一个页面</Brief>
          </Item>
        </List>
      </div>
    );
  }
}
export default withRouter(Next);
