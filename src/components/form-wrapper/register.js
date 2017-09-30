import React from "react";
import { Field } from "redux-form";

const fields = {};

export const setField = (type, component) => {
  fields[type] = component;
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
