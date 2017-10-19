import { createPaginateActionCreatorS } from "./paginate";
import { GALEN_API, API_ROOT } from "@/config";

/**
 * 获取经销商列表
 */
const getDistributorList = (
  startIndex,
  pageSize,
  { sorts = "", queryName = null }
) => {
  return {
    endpoint: "/distributor",
    data: {
      startIndex,
      pageSize,
      queryName
    },
    method: "GET"
  };
};

/**
 * 获取农机列表
 */
const getMachines = (startIndex, pageSize, params) => ({
  host: GALEN_API,
  endpoint: "/agr/machine-list",
  data: {
    startIndex,
    pageSize,
    ...params
  },
  method: "GET"
});

/**
 * 获取收粮品种列表
 */
const getGrows = (startIndex, pageSize, params) => ({
  host: API_ROOT,
  endpoint: "/agr/grow-product",
  data: {
    startIndex,
    pageSize,
    ...params
  },
  method: "GET"
});

class Distributor {
  /**
   * 客户列表分页器
   */
  listPaginator = createPaginateActionCreatorS(
    "distributors",
    getDistributorList
  );
  machinesPaginator = createPaginateActionCreatorS("machines", getMachines);
  growsPaginator = createPaginateActionCreatorS("grows", getGrows);
}

export default {
  Distributor: new Distributor()
};
