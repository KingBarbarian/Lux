import { deepTrim, createRequestTypes } from "./actionHelper";
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
    endpoint: "/customer/list",
    data: obj,
    method: "GET"
  };
};

const getCustomerBankCardList = (startIndex, pageSize, customerId) => {
  const obj = { startIndex, pageSize };
  return {
    endpoint: `/customer/${customerId}/bankcard/list`,
    data: obj,
    method: "GET"
  };
};

/**
 * 查询客户经营信息--2.8.0修改
 */
const getOperationList = (startIndex, pageSize, customerId) => {
  const obj = { startIndex, pageSize, customerId };
  return {
    endpoint: `/operation/info`,
    data: obj,
    method: "GET"
  };
};

class Customer {
  CUSTOMER_DETAIL = createRequestTypes("CUSTOMER_DETAIL");
  CUSTOMER_INFO = createRequestTypes("CUSTOMER_INFO");
  CUSTOMER_EDIT = createRequestTypes("CUSTOMER_EDIT");
  CUSTOMER_ADD = createRequestTypes("CUSTOMER_ADD");
  CUSTOMER_CHANGE_TRACE = createRequestTypes("CUSTOMER_CHANGE_TRACE");

  CUSTOMER_RELEVANT = createRequestTypes("CUSTOMER_RELEVANT");
  /**
   * 客户关联模块
   */
  CUSTOMER_MODULE = createRequestTypes("CUSTOMER_MODULE");

  CUSTOMER_LIST = createRequestTypes("CUSTOMER_LIST");
  CUSTOMER_NEARLY_LIST = createRequestTypes("CUSTOMER_NEARLY_LIST");
  CUSTOMER_ID_VERIFICATION = createRequestTypes("CUSTOMER_ID_VERIFICATION");
  CUSTOMER_RECENT_TRACE_RECORD = "CUSTOMER_RECENT_TRACE_RECORD";
  CUSTOMER_RECENT_BUSINESS_RECORD = "CUSTOMER_RECENT_BUSINESS_RECORD";
  CUSTOMER_REPAYMENT_RECORD = "CUSTOMER_REPAYMENT_RECORD";

  CUSTOMER_FOLLOW_LIST = createRequestTypes("CUSTOMER_FOLLOW_LIST");
  CUSTOMER_RECORD_LIST = createRequestTypes("CUSTOMER_RECORD_LIST");
  CUSTOMER_CHANGE_MANAGER = createRequestTypes("CUSTOMER_CHANGE_MANAGER");
  CUSTOMER_CREATE_TRACE = createRequestTypes("CUSTOMER_CREATE_TRACE");

  // 携带默认数据到客户表单页面
  CUSTOMER_BRING_TO_FORM = "CUSTOMER_BRING_TO_FORM";

  RELATION_UPDATE = createRequestTypes("RELATION_UPDATE");
  RELATION_CREATE = createRequestTypes("RELATION_CREATE");
  RELATION_DELETE = createRequestTypes("RELATION_DELETE");

  CUSTOMER_DUPICATION_LIST = createRequestTypes("CUSTOMER_DUPICATION_LIST");

  CUSTOMER_DUPICATION_MERGE = createRequestTypes("CUSTOMER_DUPICATION_MERGE");

  CUSTOMER_BANK_CARD_ADD = createRequestTypes("BANK_CARD_ADD");
  CUSTOMER_BANK_CARD_DELETE = createRequestTypes("BANK_CARD_DELETE");

  //新增客户地址信息
  CUSTOMER_ADDRESS_ADD = createRequestTypes("CUSTOMER_ADDRESS_ADD");

  //删除客户地址信息
  CUSTOMER_ADDRESS_DELETE = createRequestTypes("CUSTOMER_ADDRESS_DELETE");

  CUSTOMER_SOCIAL_INFO_UPDATE = createRequestTypes(
    "CUSTOMER_SOCIAL_INFO_UPDATE"
  );

  //更新标签
  CUSTOMER_IMPRESSION_UPDATE = createRequestTypes("CUSTOMER_IMPRESSION_UPDATE");

  //获取常用标签
  CUSTOMER_COMMONTAGS = createRequestTypes("CUSTOMER_COMMONTAGS");

  //新增收支
  CUSTOMER_OPERATEINFO_CREATE = createRequestTypes(
    "CUSTOMER_OPERATEINFO_CREATE"
  );

  //删除收支
  CUSTOMER_OPERATEINFO_DELETE = createRequestTypes(
    "CUSTOMER_OPERATEINFO_DELETE"
  );

  //获取相关联系人列表
  CUSTOMER_RELEVANT_LIST = createRequestTypes("CUSTOMER_RELEVANT_LIST");

  // 公海领取客户
  CUSTOMER_RECEIVE = createRequestTypes("CUSTOMER_RECEIVE");

  // 客户查重modal
  CUSTOMER_MODAL_VISIBLE = "CUSTOMER_MODAL_VISIBLE";

  // 客户掉落公海
  CUSTOMER_RECYCLE = createRequestTypes("CUSTOMER_RECYCLE");

  //新增经营信息 - 2.8.0
  CUSTOMER_CREATE_OPERATE = createRequestTypes("CUSTOMER_CREATE_OPERATE");

  //编辑经营信息 - 2.8.0
  CUSTOMER_EDIT_OPERATE = createRequestTypes("CUSTOMER_EDIT_OPERATE");

  //删除经营信息 - 2.8.0
  CUSTOMER_DELETE_OPERATE = createRequestTypes("CUSTOMER_DELETE_OPERATE");

  //包田大户--新增种植
  FARM_PLANT_CREATE = createRequestTypes("FARM_PLANT_CREATE");

  //包田大户--查询种植
  FARM_PLANT_QUERY = createRequestTypes("FARM_PLANT_QUERY");

  //包田大户--删除种植
  FARM_PLANT_DELETE = createRequestTypes("FARM_PLANT_DELETE");

  //包田大户--编辑种植
  FARM_PLANT_EDIT = createRequestTypes("FARM_PLANT_EDIT");

  //同时创建销售机会
  TRACE_SALES_INFO = createRequestTypes("TRACE_SALES_INFO");

  //创建销售机会
  TRACE_SALES_INFO_CREATE = createRequestTypes("TRACE_SALES_INFO_CREATE");

  // 电子签约--客户签署居间服务协议
  CUSTOMER_ELECTRONIC_ENTRUST_CONTRACT = createRequestTypes(
    "CUSTOMER_ELECTRONIC_ENTRUST_CONTRACT"
  );

  ENTRUE_ACTIONSHEET = createRequestTypes("ENTRUE_ACTIONSHEET");

  //用户信息--导出到通讯录
  EXPROT_TO_DIRECTORY = "EXPROT_TO_DIRECTORY";

  //经营品种 - 2.8.0
  CUSTOMER_GROW_OPERATE = createRequestTypes("CUSTOMER_GROW_OPERATE");

  //查询地区品种的收获季 - 2.8.0
  GROW_OPERATE_SEASON = createRequestTypes("GROW_OPERATE_SEASON");

  /**
   * 客户列表分页器
   */
  listPaginator = createPaginateActionCreatorS("customers", getCustomerList);
  // 客户银行卡分页器
  bankCardPaginator = createPaginateActionCreatorS(
    "bankCardList",
    getCustomerBankCardList
  );
  /**
   * 客户搜索列表分页器
   */
  searchListPaginator = createPaginateActionCreatorS(
    "customerSearchList",
    getCustomerList
  );
  /**
   * 客户查重查询
   * @param {*} info 客户信息
   */
  customerDuplicationList(info) {
    let data;
    if (info.phone) {
      data = { phone: info.phone };
    }
    if (info.cardId) {
      data = { cardId: info.cardId };
    }
    return {
      type: this.CUSTOMER_DUPICATION_LIST.REQUEST,
      endpoint: `/customer/duplication-check/v2.2.0`,
      method: "GET",
      payload: info,
      data: data
    };
  }

  /**
   * 客户查重modal
   * @param {*} visible modal是否显示
   */
  customerModal(visible) {
    return {
      type: this.CUSTOMER_MODAL_VISIBLE,
      payload: visible
    };
  }

  /**
   * 客户合并
   * @param {*} info 合并信息
   */
  customerDuplicationMerge(info) {
    const data = info;
    return {
      type: this.CUSTOMER_DUPICATION_MERGE.REQUEST,
      endpoint: `/customer/merge`,
      method: "PUT",
      payload: info,
      data
    };
  }
  /**
   * 客户身份验证
   * @param {*} info 客户信息
   */
  customerIdVerification(info) {
    return {
      type: this.CUSTOMER_ID_VERIFICATION.REQUEST,
      data: info,
      endpoint: `/customer/authentication`,
      method: "PUT"
    };
  }
  /**
 * 客户跟进记录查询
 * @param customerId
 * @param startIndex
 * @param pageSize
 * @returns {{}}
 */
  customerFollowList(customerId, startIndex, pageSize) {
    return {
      type: this.CUSTOMER_FOLLOW_LIST.REQUEST,
      endpoint: `/customer/${customerId}/traces`,
      data: {
        customerId,
        startIndex,
        pageSize
      },
      method: "GET"
    };
  }

  /**
 * 客户修改记录查询
 * @param customerId
 * @param startIndex
 * @param pageSize
 * @returns {{}}
 */
  customerRecordList(customerId, startIndex, pageSize) {
    return {
      type: this.CUSTOMER_RECORD_LIST.REQUEST,
      endpoint: `/customer/${customerId}/change`,
      data: {
        customerId,
        startIndex,
        pageSize
      },
      method: "GET"
    };
  }

  /**
   * 附近客户查询
   * @param {*} lon 
   * @param {*} lat 
   * @param {*} dist 半径范围，单位公里
   */
  nearlyList(lon, lat, dist, filters = {}) {
    return {
      type: this.CUSTOMER_NEARLY_LIST.REQUEST,
      endpoint: `/customer/location/nearly`,
      data: {
        lon,
        lat,
        dist,
        ...filters
      },
      method: "GET"
    };
  }

  customerBringToForm(info) {
    return {
      type: this.CUSTOMER_BRING_TO_FORM,
      payload: info
    };
  }
  /**
   * 添加客户
   * @param {*} info 客户信息
   */
  customerAdd(info) {
    return {
      type: this.CUSTOMER_ADD.REQUEST,
      endpoint: "/customer/basis",
      data: info,
      method: "POST"
    };
  }
  /**
   * 编辑客户基本信息
   * @param {*} info 客户信息
   */
  customerEdit(info) {
    return {
      type: this.CUSTOMER_EDIT.REQUEST,
      endpoint: `/customer/${info.customerId}/basis`,
      data: info,
      method: "PUT"
    };
  }
  /**
   * 变更客户跟进阶段
   * @param {*} info 客户信息
   */
  changeTrace(info) {
    return {
      type: this.CUSTOMER_CHANGE_TRACE.REQUEST,
      endpoint: `/customer/${info.customerId}/basis`,
      data: info,
      method: "PUT"
    };
  }
  /**
   * 获取客户详细信息
   * @param {*} id 客户id
   */
  customerDetail(id) {
    return {
      type: this.CUSTOMER_DETAIL.REQUEST,
      endpoint: `/customer/${id}/detail`,
      data: {},
      method: "GET"
    };
  }
  /**
   * 客户基本信息
   * @param {*} id 客户id
   */
  customerInfo(id) {
    return {
      type: this.CUSTOMER_INFO.REQUEST,
      endpoint: `/customer/${id}/info`,
      data: {},
      method: "GET"
    };
  }
  /**
   * 变更客户负责人
   * @param {*} customerId 
   * @param {*} userId 
   */
  changeManager(customerId, userId) {
    return {
      type: this.CUSTOMER_CHANGE_MANAGER.REQUEST,
      endpoint: `/customer/${customerId}/user-relation/manager/_change`,
      data: { userId },
      method: "PUT"
    };
  }
  /**
   * 添加客户跟进
   * @param {*} param0 客户跟进信息
   */
  customerCreateTrace({
    customerId,
    content,
    traceDirections,
    traceStage,
    type,
    location,
    images,
    personId,
    personName,
    relationName
  }) {
    const param = {
      content,
      type: type,
      traceStage: traceStage,
      traceDirections: traceDirections,
      location: {
        lat: location.latitude,
        lon: location.longitude,
        address: location.fullAddress
      },
      personId,
      personName,
      relationName
    };
    return {
      type: this.CUSTOMER_CREATE_TRACE.REQUEST,
      endpoint: `/customer/${customerId}/trace/_create`,
      data: param,
      method: "POST",
      payload: images,
      customerId
    };
  }

  /**
   * 客户社交信息修改
   * @param socialType
   * @returns {{}}
   */
  socialInfoUpdate(customerId, data) {
    return {
      type: this.CUSTOMER_SOCIAL_INFO_UPDATE.REQUEST,
      endpoint: `/customer/${customerId}/social-info`,
      data: data,
      method: "PUT"
    };
  }

  /*
  * 银行卡添加
  */
  bankCardAdd(customerId, cardInfo) {
    return {
      type: this.CUSTOMER_BANK_CARD_ADD.REQUEST,
      endpoint: `/customer/${customerId}/bankcard`,
      data: cardInfo,
      method: "POST"
    };
  }

  /*
  * 银行卡删除
  */
  bankCardDelete(customerId, bankCardId) {
    return {
      type: this.CUSTOMER_BANK_CARD_DELETE.REQUEST,
      endpoint: `/customer/${customerId}/bankcard/${bankCardId}`,
      method: "DELETE"
    };
  }

  /*
   * 添加关联人
   * @param {*} info 
   */
  relationCreate(info) {
    return {
      type: this.RELATION_CREATE.REQUEST,
      endpoint: `/customer/${info.customerId}/relevant/person`,
      data: deepTrim(info, {
        address: {
          address: "雨花台铁心桥大街6号",
          areaCode: "110101001000",
          fullAreaName: "江苏省南京市雨花台区",
          lat: 0,
          lon: 0
        },
        authState: 0,
        id: "U123456789",
        name: "张三",
        phone: "13813098907",
        relationType: {
          id: 0,
          name: "string"
        }
      }),
      method: "POST"
    };
  }

  /**
   * 更新关联人
   * @param {*} info 
   */
  relationUpdate(info) {
    return {
      type: this.RELATION_UPDATE.REQUEST,
      endpoint: `/customer/${info.customerId}/relevant/person`,
      data: deepTrim(info, {
        address: {
          address: "雨花台铁心桥大街6号",
          areaCode: "110101001000",
          fullAreaName: "江苏省南京市雨花台区",
          lat: 0,
          lon: 0
        },
        authState: 0,
        id: "U123456789",
        name: "张三",
        phone: "13813098907",
        relationType: {
          id: 0,
          name: "string"
        }
      }),
      method: "PUT"
    };
  }
  /**
   * 删除关联客户
   * @param {*} param0 
   */
  relationDelete({ customerId, id }) {
    return {
      type: this.RELATION_DELETE.REQUEST,
      endpoint: `/customer/${customerId}/relevant/person/${id}`,
      method: "DELETE"
    };
  }

  /**
   * 获取相关信息
   * @param {*} customerId
   */
  relevantInfo(customerId) {
    return {
      type: this.CUSTOMER_RELEVANT.REQUEST,
      endpoint: `/customer/${customerId}/relevant-info/v2.9.0`,
      method: "GET"
    };
  }

  /**
   * 新增收支
   * @param {*} customerId
   * @param {*} info
   * @param {*} type
   */
  customerOperateCreate(customerId, info, type) {
    const param = {
      amount: info.amount || info.proAmount,
      finishState: {
        id: info.finishState.id,
        name: "string"
      },
      operateTime: info.operateTime || info.proOperateTime,
      scene: {
        id: info.scene.id,
        name: info.scene.name
      },
      type: {
        id: type.id,
        name: type.name
      }
    };
    return {
      type: this.CUSTOMER_OPERATEINFO_CREATE.REQUEST,
      endpoint: `/customer/${customerId}/operation`,
      data: deepTrim(param, {
        amount: 0,
        finishState: {
          id: 0,
          name: "string"
        },
        id: 1123,
        operateTime: "2017-04-28 09:59:24",
        scene: {
          id: 0,
          name: "string"
        },
        type: {
          id: 0,
          name: "string"
        }
      }),
      method: "POST"
    };
  }

  /**
   * 删除收支
   * @param {*} customerId
   * @param {*} operationId
   */
  customerOperateDelete(customerId, operationId) {
    return {
      type: this.CUSTOMER_OPERATEINFO_DELETE.REQUEST,
      endpoint: `/customer/${customerId}/operation/${operationId}`,
      method: "DELETE"
    };
  }

  /**
   * 新增客户地址信息
   * @param {*} info 地址信息
   */
  customerAddressAdd(customerId, info) {
    return {
      type: this.CUSTOMER_ADDRESS_ADD.REQUEST,
      endpoint: `/customer/${customerId}/address`,
      data: deepTrim(info, {
        address: {
          address: "string",
          areaCode: "string",
          fullAreaName: "string",
          lat: 0,
          lon: 0
        },
        id: 0,
        remark: "string",
        type: {
          id: 0,
          name: "string"
        }
      }),
      method: "POST"
    };
  }

  /**
   * 删除客户地址信息
   * @param {*} info 地址信息
   */
  customerAddressDelete(customerId, addressId) {
    return {
      type: this.CUSTOMER_ADDRESS_DELETE.REQUEST,
      endpoint: `/customer/${customerId}/address/${addressId}`,
      method: "DELETE"
    };
  }
  /**
   * 更新客户标签
   * @param {*} customerId
   * @param {*} info
   */
  impressLabelUpdate(customerId, info) {
    return {
      type: this.CUSTOMER_IMPRESSION_UPDATE.REQUEST,
      endpoint: `/customer/${customerId}/label`,
      data: info,
      method: "PUT"
    };
  }

  /**
   * 获取常用标签
   * @param {*} topNum
   */
  commonTags(topNum) {
    return {
      type: this.CUSTOMER_COMMONTAGS.REQUEST,
      endpoint: `/customer/hot-label/list`,
      data: topNum,
      method: "GET"
    };
  }

  /**
   * 获取关联模块信息
   * @param {*} customerId 
   */
  moduleInfo(customerId) {
    return {
      type: this.CUSTOMER_MODULE.REQUEST,
      endpoint: `/customer/${customerId}/relevant-module`,
      method: "GET"
    };
  }

  /**

   * 获取相关联系人列表（沟通对象）
   * @param {*} customerId
   * @param {*} includeSelf
   */
  relevantList(customerId, includeSelf) {
    return {
      type: this.CUSTOMER_RELEVANT_LIST.REQUEST,
      endpoint: `/customer/${customerId}/relevant/person/list`,
      data: { includeSelf },
      method: "GET"
    };
  }

  /**
   * 客户公海分页
   */
  customerOceanPaginator = createPaginateActionCreatorS(
    "customerOceanList",
    (startIndex, pageSize, value) => {
      const obj = { startIndex, pageSize };
      value &&
        value.length > 0 &&
        value.map(rows => {
          if (_.isObject(rows)) {
            if (rows.id === "sorts") {
              obj.sorts = rows.value;
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
              obj.fallIntoCustomerPoolBeginTime = result.startTime;
              obj.fallIntoCustomerPoolEndTime = result.endTime;
            }
            if (rows.id === "regionalId") {
              obj.regionalId = rows.value;
            }
            if (rows.id === "areaCode") {
              obj.locationType = 0;
              obj.areaCode = rows.value;
            }
            if (rows.id === "keyword") {
              if (StringUtil.isPhone(rows.value)) {
                obj.phone = rows.value;
              } else if (StringUtil.sCardNo(rows.value)) {
                obj.cardId = rows.value;
              } else if (StringUtil.containChinese(rows.value)) {
                obj.fuzzyCustomerName = rows.value;
              } else {
                obj.fuzzyCustomerName = rows.value;
              }
            }
          }
          return null;
        });

      return {
        endpoint: "/customer/public",
        data: obj,
        method: "GET"
      };
    }
  );

  /**
   * 客户公海搜索
   */
  customerOceanSearchPaginator = createPaginateActionCreatorS(
    "customerOceanSearchList",
    (startIndex, pageSize, searchStr) => {
      const obj = { startIndex, pageSize };
      if (searchStr) {
        if (/^1\d{10}$/.test(searchStr)) {
          obj.phone = searchStr;
        } else {
          obj.fuzzyCustomerName = searchStr;
        }
      }
      // 这里先暂时只搜索现居住地址
      obj.locationType = 0;
      return {
        endpoint: "/customer/public",
        data: obj,
        method: "GET"
      };
    }
  );

  /**
   * 领取客户（抢）
   * @param customerId
   * @param suceessCallback
   * @param failedCallback
   */
  recieve(customerId, refreshAction) {
    return {
      type: this.CUSTOMER_RECEIVE.REQUEST,
      endpoint: `/customer/public/${customerId}/_receive`,
      method: "PUT",
      customerId,
      refreshAction
    };
  }
  /**
   * 获取相关联系人列表（沟通对象）
   * @param {*} customerId
   * @param {*} includeSelf
   */
  relevantList(customerId, includeSelf) {
    return {
      type: this.CUSTOMER_RELEVANT_LIST.REQUEST,
      endpoint: `/customer/${customerId}/relevant/person/list`,
      data: { includeSelf },
      method: "GET"
    };
  }
  /**
   * 客户掉落公海
   * @param {*} customerId
   */
  recycle(data) {
    return {
      type: this.CUSTOMER_RECYCLE.REQUEST,
      endpoint: `/customer/private/${data.customerId}/_recycle`,
      data: data,
      method: "PUT"
    };
  }

  /**
   * 客户经营信息分页器
   */
  operateListPaginator = createPaginateActionCreatorS(
    "operationList",
    getOperationList
  );

  /**
   * 新增客户经营信息--2.8.0修改
   */
  operationCreate(data) {
    const date = new Date().getFullYear();
    const year = data.year.id === 1 ? date : date + 1;
    const info = {
      location: data.addressLocation.address,
      area: data.area,
      year: year,
      growCropId: data.growTypeSelect.growCropId,
      growCropName: data.growTypeSelect.growCropName,
      growProductId: data.growTypeSelect.id,
      growProductName: data.growTypeSelect.name,
      growTypeId: data.growTypeSelect.growTypeId,
      growTypeName: data.growTypeSelect.growTypeName,
      seasonType: data.seasonDate,
      customerId: data.customerId
    };
    return {
      type: this.CUSTOMER_CREATE_OPERATE.REQUEST,
      endpoint: `/operation/info`,
      data: info,
      method: "POST"
    };
  }

  /**
   * 编辑经营信息
   */
  operationEdit(data) {
    const date = new Date().getFullYear();
    const year = data.year.id === 1 ? date : date + 1;
    const info = {
      id: data.id,
      location: data.addressLocation.address,
      area: data.area,
      year: year,
      growCropId: data.growTypeSelect.growCropId,
      growCropName: data.growTypeSelect.growCropName,
      growProductId: data.growTypeSelect.id,
      growProductName: data.growTypeSelect.name,
      growTypeId: data.growTypeSelect.growTypeId,
      growTypeName: data.growTypeSelect.growTypeName,
      seasonType: data.seasonDate,
      customerId: data.customerId
    };
    return {
      type: this.CUSTOMER_EDIT_OPERATE.REQUEST,
      endpoint: `/operation/info`,
      data: info,
      method: "PUT"
    };
  }

  /**
   * 删除经营信息
   */
  operationDelete(customerId, id) {
    return {
      type: this.CUSTOMER_DELETE_OPERATE.REQUEST,
      endpoint: `/operation/${customerId}/${id}/info`,
      method: "DELETE"
    };
  }

  /**
   * 包田大户--新增种植
   * @param  info
   * @returns {{type: string, payload: *}}
   */
  plantCreate(data) {
    return {
      type: this.FARM_PLANT_CREATE.REQUEST,
      endpoint: `/plantation/info`,
      data: data,
      method: "POST"
    };
  }

  /**
   * 包田大户--编辑种植
   * @returns {{type: *, endpoint: string, method: string}}
   */
  plantEdit(data) {
    return {
      type: this.FARM_PLANT_EDIT.REQUEST,
      endpoint: `/plantation/info`,
      data: data,
      method: "PUT"
    };
  }

  /**
   * 包田大户--查询种植
   * @returns {{type: *, endpoint: string, method: string}}
   */
  plantQuery(customerId, largeFieldId, type) {
    return {
      type: this.FARM_PLANT_QUERY.REQUEST,
      endpoint: `/plantation/${customerId}/${largeFieldId}/${type}/info`,
      method: "GET"
    };
  }

  /**
   * 包田大户--删除种植
   * @returns {{type: *, endpoint: string, method: string}}
   */
  plantDelete(customerId, plantationId, id) {
    return {
      type: this.FARM_PLANT_DELETE.REQUEST,
      endpoint: `/plantation/${customerId}/${plantationId}/${id}/info`,
      method: "DELETE"
    };
  }

  /**
   * 查询销售机会信息
   * @param  info customerId
   */
  traceSales(customerId) {
    return {
      type: this.TRACE_SALES_INFO.REQUEST,
      endpoint: `/customer/${customerId}/opportunity`,
      method: "GET"
    };
  }

  /**
   * 新增销售机会信息
   * @param  info customerId
   */
  traceSalesCreate(info) {
    return {
      type: this.TRACE_SALES_INFO_CREATE.REQUEST,
      endpoint: `/customer/opportunity`,
      data: info,
      method: "POST"
    };
  }

  /**
   * 电子签约--客户签署居间服务协议
   * @param info
   */
  entrustContract(info) {
    const customerId = info.customerId;
    return {
      type: this.CUSTOMER_ELECTRONIC_ENTRUST_CONTRACT.REQUEST,
      endpoint: `/customer/entrust-contract`,
      data: { customerId },
      payload: info,
      method: "GET"
    };
  }

  /**
   * 预签约成功打开ActionSheet
   * @param {*} visible
   */
  entrustContractActionSheet(visible) {
    return {
      type: this.ENTRUE_ACTIONSHEET,
      payload: visible
    };
  }

  /** 联系人信息导出到通讯录
   * @returns {{type: *, customerName: string, customerPhone: string}}
   */
  exportToDirectoryAction(customerName, customerPhone) {
    return {
      type: this.EXPROT_TO_DIRECTORY,
      payload: {
        customerName,
        customerPhone
      }
    };
  }

  /** 查询种植类型
   *
   */
  customerGrowOperate(growTypeId, growCropId) {
    let endpoint = `/agr/grow-type`;
    let data = {};
    if (growTypeId && growCropId) {
      endpoint = `/agr/grow-product`;
      data = { growTypeId, growCropId };
    } else if (growTypeId) {
      endpoint = `/agr/grow-crop`;
      data = { growTypeId };
    }

    return {
      type: this.CUSTOMER_GROW_OPERATE.REQUEST,
      endpoint: endpoint,
      data: data,
      method: "GET"
    };
  }

  /** 查询地区品种的收获季
   *
   */
  growOperateSeason(areaCode, growProductId) {
    return {
      type: this.GROW_OPERATE_SEASON.REQUEST,
      endpoint: `/agr/season/grow-product`,
      data: { areaCode, growProductId },
      method: "GET"
    };
  }
}

export default {
  Customer: new Customer()
};
