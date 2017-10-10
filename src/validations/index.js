import _ from "lodash";

export const addMachineValidate = values => {
  const errors = {};
  if (!values.customer) {
    _.set(errors, "customer", "必填项");
  }
  if (!values.dealerse) {
    _.set(errors, "dealers", "必填项");
  }
  if (!values.models) {
    _.set(errors, "models", "必填项");
  }
  if (!values.totalPrice) {
    _.set(errors, "totalPrice", "必填项");
  }
  if (!values.capital) {
    _.set(errors, "capital", "必填项");
  }
  if (!values.applyAmount) {
    _.set(errors, "applyAmount", "必填项");
  }
  if (!values.remark) {
    _.set(errors, "remark", "必填项");
  }
  return errors;
};
