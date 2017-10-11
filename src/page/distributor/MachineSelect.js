import React from "react";
import { connect } from "react-redux";
import { NavBar, PickerView, WhiteSpace } from "antd-mobile";
import { modal } from "@/utils/decorators";
import { Distributor } from "@/actions"
import _ from "lodash"

const seasons = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

@connect(state => ({
  machineData: _.get(state, "distributor.machines")
}))
@modal({ popup: true, animationType: "slide-up" })
class MachineSelect extends React.Component {
  componentDidMount() {
    
  }

  state = {
    selectValue: "",
    machine: []
  }

  onChange = value => {
    console.log("value", value)
  }

  onScrollChange = value => {
    this.setState({
      selectedValue: value
    })
  }

  render() {
    return (
      <div>
        <NavBar
          leftContent="关闭"
          mode="light"
          onLeftClick={() => this.props.onClose()}
          rightContent="确定"
          onRightClick={() => this.props.onClose()}
        >
          选择机型
        </NavBar>
        <PickerView
          data={seasons}
          value={this.state.selectedValue}
          onChange={this.onChange}
          onScrollChange={this.onScrollChange}
        >
        </PickerView>
      </div>
    );
  }
}

export default MachineSelect;
