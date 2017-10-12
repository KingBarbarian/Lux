import React from "react";
import PropTypes from "prop-types";
import { Toast, List } from "antd-mobile";
import { combineModal } from "@/utils/decorators";
import CustomerSelect from "@/page/customer";
import DistributorSelect, { MachineSelect } from "@/page/distributor";
import { rctField as fieldHOC } from "rct-form";

const Item = List.Item;

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
@fieldHOC("selectItem")
@combineModal({ CustomerSelect, DistributorSelect, MachineSelect })
class SelectItemField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extra: props.placeholder,
      errorExtra: "必选项"
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
    this.props.show(this.props.sceneName)();
  };

  componentWillReceiveProps(nextProps) {
    const { input, modalResults, sceneName } = nextProps;
    if (modalResults[sceneName] && modalResults[sceneName].data) {
      this.setState({ extra: modalResults[sceneName].data.value });
      input.onChange(
        modalResults[sceneName].data ? modalResults[sceneName].data : null
      );
    }
  }

  componentDidMount() {
    const { input } = this.props;
    if (input.value) {
      this.setState({ extra: input.value });
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
      meta: { error, touched }
    } = this.props;
    return (
      <Item
        arrow={arrow}
        multipleLine={multipleLine}
        error={error && touched ? true : false}
        wrap={wrap}
        platform={platform}
        onClick={this.openModal}
        extra={error && touched ? this.state.errorExtra : this.state.extra}
      >
        {label}
      </Item>
    );
  }
}

SelectItemField.prototypes = propTypes;
SelectItemField.defaultProps = defaultProps;

export default SelectItemField;
