import { createPaginateActionCreatorS } from "./paginate";
import { createRequestTypes } from "./actionHelper";
import { GALEN_API } from "@/config";

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
      pageSize
    },
    method: "GET"
  };
};

/**
 * 获取农机列表
 */
const getMachines = (startIndex, pageSize, ...params) => ({
  host: GALEN_API,
  endpoint: "/agr/machine-list",
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
}

export default {
  Distributor: new Distributor()
};
