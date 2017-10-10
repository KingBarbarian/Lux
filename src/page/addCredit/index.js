import React from "react";
import {
  Tabs,
  List,
  InputItem,
  WhiteSpace,
  TextareaItem,
  Button,
  Stepper,
  SegmentedControl
} from "antd-mobile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addCreditValidate } from "@/validations";
import FormWrapper from "@/components/form-wrapper";
import Forms from "../../forms";
const height = window.innerHeight;
const Item = List.Item;
const Brief = Item.Brief;

const tabs = [
  { title: "农机", sub: "1" },
  { title: "农补", sub: "2" },
  { title: "地租", sub: "3" },
  { title: "农活", sub: "4" },
  { title: "粮食", sub: "5" },
  { title: "人工", sub: "6" }
];

@connect()
class AddCredit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 1
    };
  }

  onChange(val) {
    this.setState({ val });
  }

  handleSubmit = () => {
    this.submit();
  };

  handleBindSubmit = submit => {
    this.submit = submit;
  };

  handleOnSubmit = values => {
    const { dispatch, location } = this.props;
    console.log(values);
  };

  _initialValues() {
    let initialValues = {};
    initialValues = {
      user: {
        customer: "肥宝宝",
        username: "魏建伟",
        password: "jian025574",
        phone: "18913372392"
      }
    };
    return initialValues;
  }

  render() {
    const { dispatch } = this.props;
    let formProp = Forms.Machine;
    return (
      <div>
        <Tabs
          tabs={tabs}
          initialPage={0}
          tabBarPosition="top"
          swipeable={false}
          renderTab={tab => <span>{tab.title}</span>}
        >
          <div style={{ height: `${height - 43.5}px` }}>
            <List renderHeader={() => "农机信贷"}>
              <FormWrapper
                formProp={formProp}
                initialValues={this._initialValues()}
                bindSubmit={this.handleBindSubmit}
                onSubmit={this.handleOnSubmit}
                dispatch={dispatch}
                validate={addCreditValidate}
              />
              <WhiteSpace />
              <div>
                <Button
                  type="primary"
                  style={{ marginRight: "15px", marginLeft: "15px" }}
                >
                  保存
                </Button>
              </div>
              <WhiteSpace />
              <WhiteSpace />
              <WhiteSpace />
            </List>
          </div>
          <div style={{ height: `${height - 43.5}px` }}>
            <List renderHeader={() => "农补信贷"}>
              <Item arrow="horizontal" multipleLine onClick={() => {}}>
                客户 <Brief>请选择客户</Brief>
              </Item>
              <Item arrow="horizontal" multipleLine onClick={() => {}}>
                经销商 <Brief>请选择经销商</Brief>
              </Item>
              <Item arrow="horizontal" multipleLine onClick={() => {}}>
                购买机型 <Brief>请选择购买机型</Brief>
              </Item>
              <Item>
                <InputItem placeholder="0.00" extra="¥">
                  总价
                </InputItem>
              </Item>
              <Item>
                <InputItem placeholder="0.00" extra="¥">
                  申请金额
                </InputItem>
              </Item>
              <Item>
                <InputItem placeholder="0.00" extra="¥">
                  补贴金额
                </InputItem>
              </Item>
              <TextareaItem
                title="备注"
                placeholder="请输入备注信息"
                rows={5}
                count={100}
                data-seed="logId"
                autoHeight
              />
              <WhiteSpace />
              <div>
                <Button
                  type="primary"
                  style={{ marginRight: "15px", marginLeft: "15px" }}
                >
                  保存
                </Button>
              </div>
              <WhiteSpace />
              <WhiteSpace />
              <WhiteSpace />
            </List>
          </div>
          <div style={{ height: `${height - 43.5}px` }}>
            <List renderHeader={() => "地租信贷"}>
              <Item arrow="horizontal" multipleLine onClick={() => {}}>
                客户 <Brief>请选择客户</Brief>
              </Item>
              <Item
                wrap
                extra={
                  <Stepper
                    style={{ width: "100%", minWidth: "100px" }}
                    showNumber
                    max={1000}
                    min={1}
                    value={this.state.val}
                    onChange={val => this.onChange(val)}
                  />
                }
              >
                承包亩数
              </Item>
              <Item arrow="horizontal" multipleLine onClick={() => {}}>
                承包年限 <Brief>请选择承包年限</Brief>
              </Item>
              <Item>
                <InputItem placeholder="0.00" extra="¥">
                  总价
                </InputItem>
              </Item>
              <Item>
                <InputItem placeholder="0.00" extra="¥">
                  申请金额
                </InputItem>
              </Item>
              <Item>
                <InputItem placeholder="0.00" extra="¥">
                  补贴金额
                </InputItem>
              </Item>
              <TextareaItem
                title="备注"
                placeholder="请输入备注信息"
                rows={5}
                count={100}
                data-seed="logId"
                autoHeight
              />
              <WhiteSpace />
              <div>
                <Button
                  type="primary"
                  style={{ marginRight: "15px", marginLeft: "15px" }}
                >
                  保存
                </Button>
              </div>
              <WhiteSpace />
              <WhiteSpace />
              <WhiteSpace />
            </List>
          </div>
          <div style={{ height: `${height - 43.5}px` }}>
            <List renderHeader={() => "农活信贷"}>
              <Item arrow="horizontal" multipleLine onClick={() => {}}>
                客户 <Brief>请选择客户</Brief>
              </Item>
              <Item
                wrap
                extra={
                  <SegmentedControl
                    selectedIndex={1}
                    values={["植保", "收割", "耕地"]}
                  />
                }
              >
                农活类型
              </Item>
              <Item
                wrap
                extra={
                  <SegmentedControl selectedIndex={1} values={["深耕", "浅耕"]} />
                }
              >
                作业方式
              </Item>
              <Item arrow="horizontal" multipleLine onClick={() => {}}>
                品种 <Brief>请选择品种</Brief>
              </Item>
              <Item
                wrap
                extra={
                  <SegmentedControl selectedIndex={1} values={["人工", "机械"]} />
                }
              >
                作业方式
              </Item>
              <Item
                wrap
                extra={
                  <Stepper
                    style={{ width: "100%", minWidth: "100px" }}
                    showNumber
                    max={1000}
                    min={1}
                    value={this.state.val}
                    onChange={val => this.onChange(val)}
                  />
                }
              >
                亩数
              </Item>
              <Item>
                <InputItem placeholder="0.00" extra="¥">
                  总价
                </InputItem>
              </Item>
              <Item>
                <InputItem placeholder="0.00" extra="¥">
                  申请金额
                </InputItem>
              </Item>
              <TextareaItem
                title="备注"
                placeholder="请输入备注信息"
                rows={5}
                count={100}
                data-seed="logId"
                autoHeight
              />
              <WhiteSpace />
              <div>
                <Button
                  type="primary"
                  style={{ marginRight: "15px", marginLeft: "15px" }}
                >
                  保存
                </Button>
              </div>
              <WhiteSpace />
              <WhiteSpace />
              <WhiteSpace />
            </List>
          </div>
          <div style={{ height: `${height - 43.5}px` }}>
            <List renderHeader={() => "粮食信贷"}>
              <Item arrow="horizontal" multipleLine onClick={() => {}}>
                客户 <Brief>请选择客户</Brief>
              </Item>
              <Item arrow="horizontal" multipleLine onClick={() => {}}>
                收粮品种 <Brief>请选择收粮品种</Brief>
              </Item>
              <Item>
                <InputItem placeholder="0.00" extra="kg">
                  重量
                </InputItem>
              </Item>
              <Item>
                <InputItem placeholder="0.00" extra="¥">
                  总价
                </InputItem>
              </Item>
              <Item>
                <InputItem placeholder="0.00" extra="¥">
                  申请金额
                </InputItem>
              </Item>
              <TextareaItem
                title="备注"
                placeholder="请输入备注信息"
                rows={5}
                count={100}
                data-seed="logId"
                autoHeight
              />
              <WhiteSpace />
              <div>
                <Button
                  type="primary"
                  style={{ marginRight: "15px", marginLeft: "15px" }}
                >
                  保存
                </Button>
              </div>
              <WhiteSpace />
              <WhiteSpace />
              <WhiteSpace />
            </List>
          </div>
          <div style={{ height: `${height - 43.5}px` }}>
            <List renderHeader={() => "粮食信贷"}>
              <Item arrow="horizontal" multipleLine onClick={() => {}}>
                客户 <Brief>请选择客户</Brief>
              </Item>
              <Item>
                <InputItem clear placeholder="请输入用途描述">
                  用途描述
                </InputItem>
              </Item>
              <Item>
                <InputItem placeholder="0.00" extra="¥">
                  总价
                </InputItem>
              </Item>
              <Item>
                <InputItem placeholder="0.00" extra="¥">
                  申请金额
                </InputItem>
              </Item>
              <TextareaItem
                title="备注"
                placeholder="请输入备注信息"
                rows={5}
                count={100}
                data-seed="logId"
                autoHeight
              />
              <WhiteSpace />
              <div>
                <Button
                  type="primary"
                  style={{ marginRight: "15px", marginLeft: "15px" }}
                >
                  保存
                </Button>
              </div>
              <WhiteSpace />
              <WhiteSpace />
            </List>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default withRouter(AddCredit);
