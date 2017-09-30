import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import TXT from "../form";
import { getField } from "./register";

class FieldWrapper extends Component {
  render() {
    const { field, formName } = this.props;
    // switch (field.fieldType) {
    //   case "inputItem":
    //     return <InputItemField {...field} dispatch={dispatch} formName={formName}/>;
    //   case "selectItem":
    //     return <SelectItemField {...field} dispatch={dispatch} formName={formName}/>;
    //   default:
    //     console.warn("filed type is invalid,", field);
    //     return <div />;
    // }
    const CMP = getField(field.fieldType);
    if (CMP) {
      return <CMP {...field} />;
    } else {
      return null;
    }
  }
}

export default FieldWrapper;
