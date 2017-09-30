import { createRequestTypes } from "./actionHelper";
import { createPaginateActionCreator } from "./paginate";

const DYNAMIC_LIST = createRequestTypes("DYNAMIC_LIST");
const DYNAMIC_DETAIL = createRequestTypes("DYNAMIC_DETAIL");
const DYNAMIC_COUNT = createRequestTypes("DYNAMIC_COUNT");
const listPaginator = createPaginateActionCreator("dynamics");

const dynamicList = (startIndex, pageSize) => {
    console.log(1111)
  const obj = {
    startIndex,
    pageSize
  };
  let endpoint = `/customer/activity/list`;
  return {
    type: DYNAMIC_LIST.REQUEST,
    endpoint: endpoint,
    data: obj,
    method: "GET"
  };
};

/**
 * 动态详情
 * @param id 编号
 * @param customerId 客户编号
 * @returns {{type: *, endpoint: string, data: {}, method: string}}
 */
const dynamicDetail = (id, customerId) => {
  return {
    type: DYNAMIC_DETAIL.REQUEST,
    endpoint: `/customer/${customerId}/activity/${id}`,
    data: {},
    method: "GET"
  };
};

/**
 * 动态t统计
 */
const dynamicCount = customerId => {
  return {
    type: DYNAMIC_COUNT.REQUEST,
    endpoint: `/customer/${customerId}/activity/count`,
    method: "GET"
  };
};

const dynamicListPaginator = {};
dynamicListPaginator.init = (...args) =>
  listPaginator.init(dynamicList(0, 10, ...args));
dynamicListPaginator.refresh = (...args) =>
  listPaginator.refresh(dynamicList(0, 10, ...args));
dynamicListPaginator.reset = (...args) =>
  listPaginator.reset(dynamicList(0, 10, ...args));
dynamicListPaginator.loadNext = (...args) =>
  listPaginator.loadNext(dynamicList(0, 10, ...args));

export default {
  dynamicListPaginator,
  dynamicList,
  dynamicDetail,
  DYNAMIC_DETAIL,
  DYNAMIC_COUNT,
  dynamicCount
};
