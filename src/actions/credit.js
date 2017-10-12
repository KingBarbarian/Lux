import { createRequestTypes } from "./actionHelper";

/**
 * 新增农机信贷
 */
const ADD_CREDIT_MACHINE = createRequestTypes("ADD_CREDIT_MACHINE");
const addCreditMachine = info => {
  return {
    type: ADD_CREDIT_MACHINE.REQUEST,
    endpoint: "/schedule/trace-record",
    data: info,
    method: "POST"
  };
};

/**
 * 新增农补信贷
 */
const ADD_CREDIT_FILLFARMERS = createRequestTypes("ADD_CREDIT_FILLFARMERS");
const addCreditFillFarmers = info => {
  return {
    type: ADD_CREDIT_FILLFARMERS.REQUEST,
    endpoint: "/schedule/trace-record",
    data: info,
    method: "POST"
  };
};

/**
 * 新增地租信贷
 */
const ADD_CREDIT_RENT = createRequestTypes("ADD_CREDIT_RENT");
const addCreditRent = info => {
  return {
    type: ADD_CREDIT_RENT.REQUEST,
    endpoint: "/schedule/trace-record",
    data: info,
    method: "POST"
  };
};

/**
 * 新增农活信贷
 */
const ADD_CREDIT_FARMWORK = createRequestTypes("ADD_CREDIT_FARMWORK");
const addCreditFarmWork = info => {
  return {
    type: ADD_CREDIT_FARMWORK.REQUEST,
    endpoint: "/schedule/trace-record",
    data: info,
    method: "POST"
  };
};

/**
 * 新增粮食信贷
 */
const ADD_CREDIT_FOOD = createRequestTypes("ADD_CREDIT_FOOD");
const addCreditFood = info => {
  return {
    type: ADD_CREDIT_FARMWORK.REQUEST,
    endpoint: "/schedule/trace-record",
    data: info,
    method: "POST"
  };
};

/**
 * 新增人工信贷
 */
const ADD_CREDIT_LABOR = createRequestTypes("ADD_CREDIT_LABOR");
const addCreditLabor = info => {
  return {
    type: ADD_CREDIT_LABOR.REQUEST,
    endpoint: "/schedule/trace-record",
    data: info,
    method: "POST"
  };
};

export default {
  ADD_CREDIT_MACHINE,
  addCreditMachine,
  ADD_CREDIT_FILLFARMERS,
  addCreditFillFarmers,
  ADD_CREDIT_RENT,
  addCreditRent,
  ADD_CREDIT_FARMWORK,
  addCreditFarmWork,
  ADD_CREDIT_FOOD,
  addCreditFood,
  ADD_CREDIT_LABOR,
  addCreditLabor
};
