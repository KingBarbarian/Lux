import React from "react";
import { connect } from "react-redux";
import { formValueSelector } from "redux-form";
import { rctForm } from "rct-form";
import UNUSED from "../form";
console.log(rctForm);

@connect(state => {
  return { state };
})
@rctForm
class FormWrapper extends React.Component {
  componentDidMount() {
    this.props.bindSubmit(this.props.submit);
  }
  isNeed(formName, field) {
    const dependencies = field.dependencies;
    let need = true;
    if (
      dependencies &&
      Array.isArray(dependencies) &&
      dependencies.length > 0
    ) {
      //遍历所有dependence,最外层为【且】，只要有一个不满足，则不显示
      for (const dependence of dependencies) {
        if (!this.validateDependence(dependence, formName)) {
          need = false;
          break;
        }
      }
    }
    return need;
  }

  validateDependence = ({ type, rules }, formName) => {
    let result = false;
    if (rules && Array.isArray(rules) && rules.length > 0) {
      for (const rule of rules) {
        switch (rule.type) {
          case "regular":
            const selector = formValueSelector(formName);
            const formValue = selector(this.props.state, rule.fieldName);
            const regex = new RegExp(rule.value);
            result = regex.test(String(formValue));
            break;
          default:
            break;
        }
        if (type === "or" && result) {
          break;
        }
      }
    }
    return result;
  };
  render() {
    const { getField, formProp } = this.props;
    // DSL resolve
    const cmps = formProp.sections.map((section, index) => (
      <div key={index}>
        {section.fields.map(field => {
          const CMP = getField(field.fieldType);
          if (CMP) {
            if (this.isNeed(formProp.formName, field)) {
              return <CMP {...field} key={field.name} />;
            } else {
              return null;
            }
          } else {
            return null;
          }
        })}
      </div>
    ));
    return <div>{cmps}</div>;
  }
}

export default FormWrapper;
