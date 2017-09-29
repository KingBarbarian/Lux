import React, { Component } from "react";
import _ from "lodash";
import { InputItemField, SelectItemField } from "../form";
import { connect } from "react-redux";

@connect(state => {
  return {
    state
  };
})
class FieldWrapper extends Component {
  render() {
    const { field, dispatch,formName } = this.props;
    switch (field.fieldType) {
      case "inputItem":
        return <InputItemField {...field} dispatch={dispatch} formName={formName}/>;
      case "selectItem":
        return <SelectItemField {...field} dispatch={dispatch} formName={formName}/>;
      default:
        console.warn("filed type is invalid,", field);
        return <div />;
    }
  }
}

export default FieldWrapper;
