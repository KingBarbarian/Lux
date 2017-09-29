import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import { InputItem, Toast } from "antd-mobile";

const propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  editable: PropTypes.bool,
  disabled: PropTypes.bool,
  clear: PropTypes.bool,
  maxLength: PropTypes.number,
  extra: PropTypes.string,
  label: PropTypes.string,
  labelNumber: PropTypes.number,
  updatePlaceholder: PropTypes.bool,
  moneyKeyboardAlign: PropTypes.string
};

const defaultProps = {
  type: "text",
  value: null,
  defaultValue: "212121",
  placeholder: "请输入",
  editable: true,
  disabled: false,
  clear: false,
  maxLength: null,
  extra: "",
  label: "标题",
  labelNumber: null,
  updatePlaceholder: false,
  moneyKeyboardAlign: "right"
};

class InnerComponent extends React.Component {
  onChange = value => {
    const { input } = this.props;
    input.onChange(value);
  };
  onErrorClick = info => {
    Toast.info(info);
  };

  render() {
    const {
      type,
      placeholder,
      editable,
      disabled,
      clear,
      maxLength,
      extra,
      label,
      labelNumber,
      updatePlaceholder,
      moneyKeyboardAlign,
      meta
    } = this.props;
    return (
      <div>
        <InputItem
          type={type}
          placeholder={placeholder}
          editable={editable}
          disabled={disabled}
          clear={clear}
          maxLength={maxLength}
          error={(meta.error&&meta.touched) ? true : false}
          onErrorClick={() => this.onErrorClick(meta.error)}
          extra={extra}
          labelNumber={labelNumber}
          updatePlaceholder={updatePlaceholder}
          moneyKeyboardAlign={moneyKeyboardAlign}
          onChange={this.onChange}
        >
          {label}
        </InputItem>
      </div>
    );
  }
}

class InputItemField extends React.Component {
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

InputItemField.prototypes = propTypes;
InputItemField.defaultProps = defaultProps;

export default InputItemField;
