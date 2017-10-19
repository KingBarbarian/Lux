import { createRequestTypes } from "./actionHelper";

const CREDIT_ADD = createRequestTypes("CREDIT_ADD");

/**
 * 新增农机信贷
 */
const addCreditMachine = (info, templateId) => {
  return {
    type: CREDIT_ADD.REQUEST,
    endpoint: `/apply/use/machine?templateId=${templateId}`,
    data: info,
    method: "POST"
  };
};

/**
 * 新增农补信贷
 */
const addCreditFillFarmers = (info, templateId) => {
  return {
    type: CREDIT_ADD.REQUEST,
    endpoint: `/apply/use/form-subsidy?templateId=${templateId}`,
    data: info,
    method: "POST"
  };
};

/**
 * 新增地租信贷
 */
const addCreditRent = (info, templateId) => {
  return {
    type: CREDIT_ADD.REQUEST,
    endpoint: `/apply/use/land?templateId=${templateId}`,
    data: info,
    method: "POST"
  };
};

/**
 * 新增农活信贷
 */
const addCreditFarmWork = (info, templateId) => {
  return {
    type: CREDIT_ADD.REQUEST,
    endpoint: `/apply/use/farm-work?templateId=${templateId}`,
    data: info,
    method: "POST"
  };
};

/**
 * 新增粮食信贷
 */
const addCreditFood = (info, templateId) => {
  return {
    type: CREDIT_ADD.REQUEST,
    endpoint: `/apply/use/foodstuff?templateId=${templateId}`,
    data: info,
    method: "POST"
  };
};

/**
 * 新增人工信贷
 */
const addCreditLabor = (info, templateId) => {
  return {
    type: CREDIT_ADD.REQUEST,
    endpoint: `/apply/use/artificial?templateId=${templateId}`,
    data: info,
    method: "POST"
  };
};

export default {
  CREDIT_ADD,
  addCreditMachine,
  addCreditFillFarmers,
  addCreditRent,
  addCreditFarmWork,
  addCreditFood,
  addCreditLabor
};
