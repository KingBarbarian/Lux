import React, { Component } from "react";
import FieldWrapper from "./FieldWrapper";
import _ from "lodash";

const refPrefix = "field";

class SectionWrapper extends Component {
  handleSubmitEditing = index => {
    try {
      this.refs[`${refPrefix}-${index + 1}`].focus();
    } catch (error) {
      console.warn("focus error,", error);
    }
  };

  render() {
    const { fields, formName, dispatch } = this.props;
    return (
      <div>
        {fields.map((field, index) => {
          const props = {};
          const meta = { field };
          const multiLine = _.get(meta, "multiLine") || false;
          if (["text", "location"].includes(field.type) && !multiLine) {
            if (index < fields.length - 1) {
              props.returnKeyType = "next";
              props.onSubmitEditing = () => {
                this.handleSubmitEditing(index);
              };
            } else {
              props.returnKeyType = "done";
            }
          }
          return (
            <FieldWrapper
              field={field}
              key={field.name}
              formName={formName}
              dispatch={dispatch}
              ref={`${refPrefix}-${index}`}
              {...props}
            />
          );
        })}
      </div>
    );
  }
}

export default SectionWrapper;
