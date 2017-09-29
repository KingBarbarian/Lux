import React from "react";
import PropTypes from "prop-types";
import { Field, change } from "redux-form";
import { Toast, List } from "antd-mobile";
import { combineModal } from "@/utils/decorators";
import CustomerSelect from "@/page/customer";
const Item = List.Item;
const Brief = Item.Brief;

const propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  arrow: PropTypes.string,
  multipleLine: PropTypes.bool,
  wrap: PropTypes.bool,
  platform: PropTypes.string,
  brief: PropTypes.bool
};

const defaultProps = {
  placeholder: "请选择",
  label: "标题",
  arrow: "horizontal",
  multipleLine: false,
  wrap: false,
  platform: "ios",
  brief: false
};

class InnerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extra: props.placeholder
    };
  }

  onChange = value => {
    const { input } = this.props;
    input.onChange(value);
  };
  onErrorClick = info => {
    Toast.info(info);
  };
  openModal = info => {
    this.props.show("CustomerSelect")();
  };

  componentWillReceiveProps(nextProps) {
    const { bindName, dispatch, formName,input,modalResults,sceneName } = nextProps;
    if(modalResults[sceneName].data){
      input.onChange(modalResults[sceneName].data?modalResults[sceneName].data:null);
    }
    dispatch(change(formName, bindName, "魏建伟123"));
  }

  componentDidMount() {
    const {input} = this.props;
    if(input.value){
      this.setState({extra:input.value})
      input.onChange(input.value);
    }
  }
  

  render() {
    const {
      label,
      arrow,
      multipleLine,
      wrap,
      platform,
      meta,
      brief,
      input
    } = this.props;
    return (
      <Item
        arrow={arrow}
        multipleLine={multipleLine}
        wrap={wrap}
        platform={platform}
        extra={
          !brief
            ? this.props.modalResults[this.props.sceneName].data
              ? this.props.modalResults[this.props.sceneName].data
              : this.state.extra
            : null
        }
        onClick={this.openModal}
      >
        {label} {brief ? <Brief>{this.state.extra}</Brief> : null}
      </Item>
    );
  }
}

@combineModal({ CustomerSelect })
class SelectItemField extends React.Component {
  render() {
    return (
      <Field
        name={this.props.name}
        props={this.props}
        component={InnerComponent}
      />
    );
  }
}

SelectItemField.prototypes = propTypes;
SelectItemField.defaultProps = defaultProps;

export default SelectItemField;
