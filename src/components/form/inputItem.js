import React from "react";
import PropTypes from "prop-types";
import { InputItem, Toast, List, TextareaItem } from "antd-mobile";
import { fieldHOC } from "../form-wrapper/register";
const Item = List.Item;

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
  moneyKeyboardAlign: PropTypes.string,
  textArea: PropTypes.bool,
  rows: PropTypes.number,
  count: PropTypes.number
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
  moneyKeyboardAlign: "right",
  textArea: false,
  rows: 5,
  count: 0
};

@fieldHOC("inputItem")
class InputItemField extends React.Component {
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
      meta: { error, touched },
      input,
      textArea,
      rows,
      count
    } = this.props;
    return (
      <div>
        {textArea ? (
          <TextareaItem
            title={label}
            value={input.value ? input.value : null}
            placeholder={placeholder}
            rows={rows}
            count={count}
            data-seed="logId"
            autoHeight
            error={error && touched ? true : false}
            onErrorClick={() => this.onErrorClick(error)}
            onChange={this.onChange}
          />
        ) : (
          <Item>
            <InputItem
              type={type}
              placeholder={placeholder}
              value={input.value ? input.value : null}
              editable={editable}
              disabled={disabled}
              clear={clear}
              maxLength={maxLength}
              error={error && touched ? true : false}
              onErrorClick={() => this.onErrorClick(error)}
              extra={extra}
              onChange={this.onChange}
            >
              {label}
            </InputItem>
          </Item>
        )}
      </div>
    );
  }
}

InputItemField.prototypes = propTypes;
InputItemField.defaultProps = defaultProps;

export default InputItemField;
