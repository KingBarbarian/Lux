import { FormUtil } from "@/utils";
import { Constant } from "@/commons";

export default {
  name: "CustomerOcen",
  data: [
    {
      id: "type",
      index: 1,
      headerDisplay: true,
      type: "select",
      options: FormUtil.convertMap2List(Constant.CustomerLinkedType)
    },
    {
      id: "sorts",
      headerDisplay: true,
      type: "select",
      options: [
        {
          id: "-CREATED_TIME",
          name: "创建时间降序"
        },
        {
          id: "CREATED_TIME",
          name: "创建时间升序"
        },
        {
          id: "-POOL_UPDATE_TIME",
          name: "更新时间降序"
        },
        {
          id: "POOL_UPDATE_TIME",
          name: "更新时间升序"
        }
      ]
    },
    {
      id: "customerTraceStage",
      name: "跟进阶段",
      headerDisplay: false,
      type: "select",
      options: FormUtil.convertMap2List(Constant.CustomerTrackType)
    },
    {
      id: "customerInfluence",
      name: "客户影响力",
      headerDisplay: false,
      type: "select",
      options: FormUtil.convertMap2List(Constant.CustomerForce)
    },
    {
      id: "authState",
      name: "是否实名认证",
      headerDisplay: false,
      type: "select",
      options: FormUtil.convertMap2List(Constant.AuthState)
    },
    {
      id: "signState",
      name: "是否签署居间协议",
      headerDisplay: false,
      type: "select",
      options: FormUtil.convertMap2List(Constant.SignState)
    },
    {
      id: "customerStar",
      name: "客户质量",
      headerDisplay: false,
      type: "select",
      options: FormUtil.convertMap2List(Constant.CustomerLevelType)
    },
    {
      id: "createTime",
      name: "客户创建时间",
      headerDisplay: false,
      type: "select",
      options: FormUtil.convertMap2List(Constant.timeFilter)
    },
    {
      id: "traceTime",
      name: "跟进时间",
      headerDisplay: false,
      type: "select",
      options: FormUtil.convertMap2List(Constant.timeFilter)
    },
    {
      id: "ocenTime",
      name: "预计掉入公海时间",
      value: 0,
      headerDisplay: false,
      type: "select",
      options: FormUtil.convertMap2List(Constant.timeFilterOcen)
    }
  ]
};
