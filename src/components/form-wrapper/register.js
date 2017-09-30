import React from "react";
import { Field } from "redux-form";

const fields = {};

export const setField = (type, component) => {
  console.log(type);
  fields[type] = component;
  console.log(fields);
};

export const getField = type => fields[type];

export const fieldHOC = type => InnerComponent => {
  class InnerWrapper extends React.Component {
    render() {
      return <Field {...this.props} component={InnerComponent} />;
    }
  }
  setField(type, InnerWrapper);
  return InnerWrapper;
};
