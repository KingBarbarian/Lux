import { createPaginateActionCreatorS } from "./paginate";
import { createRequestTypes } from "./distributor";

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


class Distributor {
  /**
   * 客户列表分页器
   */
  listPaginator = createPaginateActionCreatorS(
    "distributors",
    getDistributorList
  );

  /**
   * 获取农机品牌（级联）
   */
  GET_MACHINE_BRAND = createRequestTypes("GET_MACHINE_BRAND")
  machineBrand = (type = 1, machineTypeId) => ({
    type: this.GET_MACHINE_BRAND.REQUEST,
    origin: this.GET_MACHINE_BRAND,
    endpoint: "/agr/brands",
    method: "GET",
    data: {
      type,
      machineTypeId
    }
  })

  /**
   * 获取农机类型
   */
  GET_MACHINE_TYPES = createRequestTypes("GET_MACHINE_TYPES")
  machineTypes = brandId => ({
    type: this.GET_MACHINE_TYPES.REQUEST,
    origin: this.GET_MACHINE_TYPES,
    endpoint: "/agr/machine-types",
    method: "GET",
    data: {
      brandId
    }
  })

  /**
   * 获取农机型号
   */
  GET_MACHINE_CODE = createRequestTypes("GET_MACHINE_CODE")
  machineCode = (brandId, machineId) => ({
    type: this.GET_MACHINE_CODE.REQUEST,
    origin: this.GET_MACHINE_CODE,
    endpoint: "/agr/machines",
    method: "GET",
    data: {
      brandId,
      machineId
    }
  })
}

export default {
  Distributor: new Distributor()
};
