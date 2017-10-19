import _ from "lodash";

export const addMachineValidate = values => {
  const errors = {};
  if (!values.customer) {
    _.set(errors, "customer", "必填项");
  }
  if (!values.dealers) {
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
  return errors;
};

export const addCreditFillFarmersValidate = values => {
  const errors = {};
  if (!values.customer) {
    _.set(errors, "customer", "必填项");
  }
  if (!values.dealers) {
    _.set(errors, "dealers", "必填项");
  }
  if (!values.models) {
    _.set(errors, "models", "必填项");
  }
  if (!values.totalPrice) {
    _.set(errors, "totalPrice", "必填项");
  }
  if (!values.applyAmount) {
    _.set(errors, "applyAmount", "必填项");
  }
  if (!values.subsidies) {
    _.set(errors, "subsidies", "必填项");
  }
  return errors;
};

export const addRentValidate = values => {
  const errors = {};
  if (!values.customer) {
    _.set(errors, "customer", "必填项");
  }
  if (!values.year) {
    _.set(errors, "year", "必填项");
  }
  if (!values.area) {
    _.set(errors, "area", "必填项");
  }
  if (!values.totalPrice) {
    _.set(errors, "totalPrice", "必填项");
  }
  if (!values.applyAmount) {
    _.set(errors, "applyAmount", "必填项");
  }
  return errors;
};

export const addCreditFarmWorkValidate = values => {
  const errors = {};
  if (!values.customer) {
    _.set(errors, "customer", "必填项");
  }
  if (!values.farmWorkType) {
    _.set(errors, "farmWorkType", "必填项");
  }
  if (!values.practices) {
    _.set(errors, "practices", "必填项");
  }
  if (!values.breed) {
    _.set(errors, "breed", "必填项");
  }
  if (!values.area) {
    _.set(errors, "area", "必填项");
  }
  if (!values.totalPrice) {
    _.set(errors, "totalPrice", "必填项");
  }
  if (!values.applyAmount) {
    _.set(errors, "applyAmount", "必填项");
  }
  return errors;
};

export const addCreditFoodValidate = values => {
  const errors = {};
  if (!values.customer) {
    _.set(errors, "customer", "必填项");
  }
  if (!values.grow) {
    _.set(errors, "grow", "必填项");
  }
  if (!values.tonnage) {
    _.set(errors, "tonnage", "必填项");
  }
  if (!values.totalPrice) {
    _.set(errors, "totalPrice", "必填项");
  }
  if (!values.applyAmount) {
    _.set(errors, "applyAmount", "必填项");
  }
  return errors;
};

export const addCreditLaborValidate = values => {
  const errors = {};
  if (!values.customer) {
    _.set(errors, "customer", "必填项");
  }
  if (!values.content) {
    _.set(errors, "content", "必填项");
  }
  if (!values.totalPrice) {
    _.set(errors, "totalPrice", "必填项");
  }
  if (!values.applyAmount) {
    _.set(errors, "applyAmount", "必填项");
  }
  return errors;
};
