import React, { Component } from "react";
import { reduxForm } from "redux-form";
import SectionWrapper from "./SectionWrapper";

class FormView extends Component {
  componentDidMount() {
    this.props.bindSubmit(this.props.submit);
  }

  render() {
    const { formProp, dispatch } = this.props;
    const { formName, sections } = formProp;
    return (
      <div>
        {sections.map(({ name, fields }, index) => {
          return (
            <SectionWrapper
              name={name}
              key={`section-${index}`}
              topMargin={index > 0}
              fields={fields}
              formName={formName}
              dispatch={dispatch}
            />
          );
        })}
      </div>
    );
  }
}

class FormWrapper extends Component {
  constructor(props) {
    super(props);
    const { formProp, validate } = props;
    const FormComponent = reduxForm({ form: formProp.formName, validate })(
      FormView
    );
    this.temp = p => <FormComponent {...p} />;
  }

  render() {
    const { formProp } = this.props;
    if (!formProp || !formProp.formName) {
      console.warn("formName is invalid, formProp:", formProp);
      return null;
    }
    return this.temp(this.props);
  }
}

export default FormWrapper;
