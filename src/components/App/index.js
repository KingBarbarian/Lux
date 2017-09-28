import React from "react";
import { List, WhiteSpace, Result, Icon, ImagePicker } from "antd-mobile";
import { withRouter } from "react-router-dom";
import invoke from "react-native-webview-invoke/browser";
import classNames from "classnames/bind";
import styles from "./index.css";
let cx = classNames.bind(styles);

//调用rn的方法，判断进入下一个页面
const next = invoke.default.bind("next");
//调用rn的方法，获得参数
const getParamers = invoke.default.bind("getParamers");

const Item = List.Item;
const Brief = Item.Brief;

const data = [
  {
    url: "https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg",
    id: "2121"
  },
  {
    url: "https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg",
    id: "2122"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      info: "",
      files: data
    };
    this.onChange = this.onChange.bind(this);
  }

  toNext() {
    next(1).then(() => {
      console.log("跳转成功");
    });
    this.props.history.push("/next");
  }

  componentDidMount() {
    getParamers().then(data => {
      console.log(data);
      console.log(this);
      console.log(this.state.info);
      this.setState({ info: data });
    });
  }

  onChange(files, type, index) {
    console.log(files);
    this.setState({
      files
    });
  }

  render() {
    const { files } = this.state;
    return (
      <div>
        <List renderHeader={() => "路由演示"} className="my-list">
          <Result
            img={
              <Icon
                type="check-circle"
                className={cx("icon")}
                style={{ fill: "#1F90E6" }}
              />
            }
            title="成功"
            message={this.state.info}
          />
          <WhiteSpace />
          <Item
            arrow="horizontal"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
            onClick={() => this.toNext()}
          >
            跳转 <Brief>下一个页面</Brief>
          </Item>
        </List>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => alert(fs)}
          selectable={files.length < 5}
        />
        <List renderHeader={() => "Basic Style"} className="my-list">
          <Item extra={"extra content"}>Title</Item>
        </List>
        <List renderHeader={() => "Subtitle"} className="my-list">
          <Item arrow="horizontal" multipleLine>
            Title <Brief>subtitle</Brief>
          </Item>
          <Item
            arrow="horizontal"
            multipleLine
            onClick={() => {}}
            platform="android"
          >
            ListItem （Android）<Brief>
              There may have water ripple effect of <br /> material if you set
              the click event.
            </Brief>
          </Item>
        </List>
        <List
          renderHeader={() =>
            "Customized Right Side（Empty Content / Text / Image）"}
          className="my-list"
        >
          <Item>Title</Item>
          <Item arrow="horizontal" onClick={() => {}}>
            Title
          </Item>
          <Item extra="extra content" arrow="horizontal" onClick={() => {}}>
            Title
          </Item>
          <Item
            extra="10:30"
            align="top"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
          >
            Title <Brief>subtitle</Brief>
          </Item>
        </List>
        <List renderHeader={() => "Align Vertical Center"} className="my-list">
          <Item multipleLine extra="extra content">
            Title <Brief>subtitle</Brief>
          </Item>
        </List>
        <List renderHeader={() => "Icon in the left"}>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => {}}
          >
            My wallet
          </Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            arrow="horizontal"
          >
            My Cost Ratio
          </Item>
        </List>
        <List renderHeader={() => "Text Wrapping"} className="my-list">
          <Item data-seed="logId">
            Single line，long text will be hidden with ellipsis；
          </Item>
          <Item wrap>
            Multiple line，long text will wrap；Long Text Long Text Long Text Long
            Text Long Text Long Text
          </Item>
          <Item extra="extra content" multipleLine align="top" wrap>
            Multiple line and long text will wrap. Long Text Long Text Long Text
          </Item>
          <Item extra="no arrow" arrow="empty" className="spe" wrap>
            In rare cases, the text of right side will wrap in the single line
            with long text. long text long text long text
          </Item>
        </List>
        <List renderHeader={() => "Other"} className="my-list">
          <Item
            disabled={this.state.disabled}
            extra=""
            onClick={() => {
              console.log("click", this.state.disabled);
              this.setState({ disabled: true });
            }}
          >
            Click to disable
          </Item>
          <Item>
            <select defaultValue="1">
              <option value="1">html select element</option>
              <option value="2" disabled>
                Unable to select
              </option>
              <option value="3">option 3</option>
            </select>
          </Item>
        </List>
      </div>
    );
  }
}

export default withRouter(App);
