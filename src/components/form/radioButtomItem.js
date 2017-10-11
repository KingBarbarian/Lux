import React from "react";
import PropTypes from "prop-types";
import { Button, List } from "antd-mobile";
import Radio from "../radio";
import { fieldHOC } from "../form-wrapper/register";

const Item = List.Item;
const Brief = Item.Brief;

const propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  multipleLine: PropTypes.bool,
  wrap: PropTypes.bool,
  brief: PropTypes.bool
};

const defaultProps = {
  placeholder: "请选择",
  label: "标题",
  multipleLine: false,
  wrap: false,
  brief: false
};
@fieldHOC("radioButtonItem")
class RadioButtonItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extra: "",
      errorExtra: "必选项",
      selectedOption: this.props.options[
        this.props.isSelected ? this.props.isSelected : 0
      ]
    };
  }

  //radio按钮的回调
  setSelectedOption = selectedOption => {
    this.setState({
      selectedOption
    });
    const { input } = this.props;
    input.onChange(selectedOption.id);
  };

  renderOption = (option, selected, onSelect, index) => {
    return (
      <Button
        type={selected ? "primary" : "ghost"}
        onClick={onSelect}
        inline
        size="small"
        style={{ marginRight: "6px" }}
        key={index}
      >
        {option.name}
      </Button>
    );
  };

  renderContainer = optionNodes => {
    return <div>{optionNodes}</div>;
  };

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
      multipleLine,
      wrap,
      meta: { error, touched },
      options
    } = this.props;
    return (
      <Item
        multipleLine={multipleLine}
        error={error && touched ? true : false}
        wrap={wrap}
        extra={error && touched ? this.state.errorExtra : this.state.extra}
      >
        {label}
        <Brief>
          <Radio
            options={options}
            onSelection={this.setSelectedOption}
            selectedOption={this.state.selectedOption}
            renderOption={this.renderOption}
            renderContainer={this.renderContainer}
          />
        </Brief>
      </Item>
    );
  }
}

RadioButtonItem.prototypes = propTypes;
RadioButtonItem.defaultProps = defaultProps;

export default RadioButtonItem;
