import { createPaginateActionCreatorS } from "./paginate";

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
    data: {},
    method: "GET"
  };
};

class Distributor {
  /**
   * 客户列表分页器
   */
  listPaginator = createPaginateActionCreatorS(
    "distributors",
    getDistributorList
  );
}

export default {
  Distributor: new Distributor()
};
