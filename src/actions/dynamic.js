import { createRequestTypes } from "./actionHelper";
import { createPaginateActionCreator } from "./paginate";

const DYNAMIC_LIST = createRequestTypes("DYNAMIC_LIST");
const listPaginator = createPaginateActionCreator("dynamics");

const dynamicList = (startIndex, pageSize) => {
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
  dynamicList
};
