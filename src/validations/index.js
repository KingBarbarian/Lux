import _ from "lodash";

export const addCreditValidate = values => {
  const errors = {};
  if (!values.user || !values.user.username) {
    _.set(errors, "user.username", "必填项");
  }
  if (!values.user || !values.user.password) {
    _.set(errors, "user.password", "必填项");
  }
  if (!values.user || !values.user.phone) {
    _.set(errors, "user.phone", "必填项");
  }
  return errors;
};
