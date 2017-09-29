import React, { Component } from "react";
import _ from "lodash";
// import Scene from "Thrall/src/pages/scenesRegister";
import { InputItemField } from "../form";
import { formValueSelector } from "redux-form";
import { connect } from "react-redux";

@connect(state => {
  return {
    state
  };
})
class FieldWrapper extends Component {
  render() {
    const { field, formName, dispatch } = this.props;
    const {
      fieldType,
      name,
      type,
      value,
      defaultValue,
      placeholder,
      editable,
      disabled,
      clear,
      maxLength,
      error,
      extra,
      label,
      labelNumber,
      updatePlaceholder,
      moneyKeyboardAlign,
      bindName,
      sceneName,
      meta
    } = field;
    const baseProps = {
      name,
      type,
      value,
      defaultValue,
      placeholder,
      editable,
      disabled,
      clear,
      maxLength,
      error,
      extra,
      label,
      labelNumber,
      updatePlaceholder,
      moneyKeyboardAlign,
      ref: ref => (this.field = ref)
    };
    switch (fieldType) {
      case "inputItem":
        return <InputItemField {...baseProps} dispatch={dispatch}/>;
      default:
        console.warn("filed type is invalid,", field);
        return <div />;
    }
  }
}

export default FieldWrapper;
