import { createPaginateActionCreatorS } from "./paginate";
import { StringUtil, DateUtil } from "@/utils";
import _ from "lodash";

/**
 * 获取客户列表
 */
const getCustomerList = (startIndex, pageSize, value) => {
  let obj = { startIndex, pageSize, type: 0, sorts: "-CREATED_TIME" };
  value &&
    value.length > 0 &&
    value.map(rows => {
      if (_.isObject(rows)) {
        if (rows.id === "sorts") {
          obj.sorts = rows.value;
        }
        if (rows.id === "type") {
          obj.type = rows.value;
        }
        if (rows.id === "customerTraceStage") {
          obj.customerTraceStage = rows.value;
        }
        if (rows.id === "customerInfluence") {
          obj.customerInfluence = rows.value;
        }
        if (rows.id === "authState") {
          obj.authState = rows.value;
        }
        if (rows.id === "signState") {
          obj.signState = rows.value;
        }
        if (rows.id === "customerStar") {
          obj.star = rows.value;
        }
        if (rows.id === "createTime") {
          const result = DateUtil.dateOperate(rows.value);
          obj.customerAddBeginTime = result.startTime;
          obj.customerAddEndTime = result.endTime;
        }
        if (rows.id === "traceTime") {
          const result = DateUtil.dateOperate(rows.value);
          obj.beginCreatedOrLastTraceTime = result.startTime;
          obj.endCreatedOrLastTraceTime = result.endTime;
        }
        if (rows.id === "ocenTime") {
          const result = DateUtil.dateOperate(rows.value);
          obj.beginExpectFallIntoTime = result.startTime;
          obj.endExpectFallIntoTime = result.endTime;
        }
        if (rows.id === "keyword") {
          if (StringUtil.isPhone(rows.value)) {
            obj.phone = rows.value;
          } else {
            obj.fuzzyCustomerName = rows.value;
          }
        }
      }

      return null;
    });
  return {
    endpoint: "/customer/private",
    data: obj,
    method: "GET"
  };
};

class Customer {
  /**
   * 客户列表分页器
   */
  listPaginator = createPaginateActionCreatorS("customers", getCustomerList);
  
}

export default {
  Customer: new Customer()
};
