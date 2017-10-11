const CustomerLinkedType = new Map();
CustomerLinkedType.set("", "全部的客户");
CustomerLinkedType.set(0, "我的客户");
CustomerLinkedType.set(1, "我下属的客户");
CustomerLinkedType.set(2, "我可见的其他客户");

const CUSTOMER_LINKED_TYPE = {
  ALL: {
    key: "",
    value: "全部"
  },
  MY_CUSTOMER: {
    key: 0,
    value: "我的客户"
  },
  SUBORDINATE: {
    key: 1,
    value: "我下属的"
  },
  SUBORDINATE_PARTICIPATED: {
    key: 2,
    value: "下属参与的"
  }
};

const CustomerType = new Map();
CustomerType.set(0, "农户");
CustomerType.set(1, "农机手");
CustomerType.set(9, "其他");

const CustomerSourceType = new Map();
// CustomerSourceType.set('0', '地面推广');
// CustomerSourceType.set('1', '经销商介绍');
// CustomerSourceType.set('2', '经销商活动');
// CustomerSourceType.set('3', '客户介绍');
// CustomerSourceType.set('4', '政府活动');
// CustomerSourceType.set('5', '政府介绍');
// CustomerSourceType.set('6', '农分期活动');
// CustomerSourceType.set('6', '农分期活动');
// CustomerSourceType.set('6', '农分期活动');
// CustomerSourceType.set('6', '农分期活动');
CustomerSourceType.set(0, "地面推广"),
  CustomerSourceType.set(1, "经销商介绍"),
  CustomerSourceType.set(4, "政府介绍"),
  CustomerSourceType.set(3, "客户介绍"),
  CustomerSourceType.set(26, "营销活动"),
  CustomerSourceType.set(27, "电话&线上");
//
//   CustomerSourceType.set(0x002, "经销商活动"
// ), CustomerSourceType.set(0x003, "客户介绍"
// ), CustomerSourceType.set(0x005, "政府活动"
// ), CustomerSourceType.set(0x007, "联络点介绍"
// ), CustomerSourceType.set(0x008, "村干部介绍"
// ), CustomerSourceType.set(0x009, "广告资源"
//
// ), CustomerSourceType.set(0x00b, "线上询价"
// ), CustomerSourceType.set(0x00c, "展会资源"
// ), CustomerSourceType.set(0x00d, "厂家活动");

const CustomerTrackType = new Map();
CustomerTrackType.set(0, "初步了解");
CustomerTrackType.set(1, "跟进洽谈");
CustomerTrackType.set(2, "确定意向");
CustomerTrackType.set(3, "  成交  ");
CustomerTrackType.set(4, " 未达成 ");

/**
 * 跟进方向
 * @type {Map}
 */
const CustomerTrackDirection = new Map();
CustomerTrackDirection.set(1, "农机购买");
CustomerTrackDirection.set(2, "土壤检测");
CustomerTrackDirection.set(3, "农贷分期");
CustomerTrackDirection.set(4, "农资购买");

/**
 * 跟进类型
 * @type {Map}
 */
const CustomerTrackMode = new Map();
CustomerTrackMode.set(1, "打电话");
CustomerTrackMode.set(17, "上门拜访");
CustomerTrackMode.set(33, "商务宴请");
CustomerTrackMode.set(34, "邀请活动");

const CustomerLevelType = new Map();
CustomerLevelType.set(3, "优质客户");
CustomerLevelType.set(4, "重要客户");
CustomerLevelType.set(2, "一般客户");
CustomerLevelType.set(1, "劣质客户");
CustomerLevelType.set(66, "征信不达标");
CustomerLevelType.set(99, "黑名单客户");

const CustomerForce = new Map();
CustomerForce.set(0, "影响力大");
CustomerForce.set(1, "影响力中");
CustomerForce.set(2, "影响力小");

// 婚姻状态
const MaritalState = new Map();
MaritalState.set(0, "未婚"),
  MaritalState.set(1, "已婚"),
  MaritalState.set(2, "离婚"),
  MaritalState.set(3, "丧偶"),
  MaritalState.set(4, "再婚");
// 工作类型
const WorkState = new Map();
WorkState.set(0, "参与生意"),
  WorkState.set(1, "务农"),
  WorkState.set(2, "单独经营"),
  WorkState.set(3, "工作"),
  WorkState.set(4, "年幼"),
  WorkState.set(5, "上学"),
  WorkState.set(6, "无事");
// 居住类型
const ResideType = new Map();
ResideType.set(0, "其他"),
  ResideType.set(1, "自有住宅"),
  ResideType.set(2, "租赁"),
  ResideType.set(3, "按揭住宅"),
  ResideType.set(4, "经营场所"),
  ResideType.set(5, "与亲属共住");

// 关系类型
const RelationType = new Map();
RelationType.set(1, "儿子"),
  RelationType.set(2, "女儿"),
  RelationType.set(3, "父亲"),
  RelationType.set(4, "母亲"),
  RelationType.set(5, "丈夫"),
  RelationType.set(6, "妻子");
RelationType.set(7, "哥哥");
RelationType.set(8, "弟弟");
RelationType.set(9, "姐姐");
RelationType.set(10, "妹妹");
RelationType.set(11, "朋友");
RelationType.set(12, "亲戚");
RelationType.set(13, "邻居");
//敏感等级
const FeedbackLevel = new Map();
FeedbackLevel.set(1, "正常");
FeedbackLevel.set(2, "乐观");
FeedbackLevel.set(3, "可能逾期");
FeedbackLevel.set(4, "可能坏账");

//日程类型
const ScheduleType = new Map();
ScheduleType.set(1, "获客");
ScheduleType.set(2, "跟进");
ScheduleType.set(3, "机会");
ScheduleType.set(4, "回访");
ScheduleType.set(5, "反馈");

//回访方式
const VisitType = new Map();
VisitType.set(1, "上门");
VisitType.set(2, "电话");

//贷后针对于计划的回访类型
const RevisitType = new Map();
RevisitType.set(1, "贷后首次回访");
RevisitType.set(2, "重新回访");

//贷后审核状态
const PlanAuditState = new Map();
PlanAuditState.set(0, "未审核");
PlanAuditState.set(1, "已审核");

const WorkRegion = new Map();
WorkRegion.set(1, "本区域");
WorkRegion.set(2, "跨区域");
WorkRegion.set(3, "其他");

const RepaymentVisitVerifyType = new Map();
RepaymentVisitVerifyType.set(1, "正常");
RepaymentVisitVerifyType.set(2, "异常");

//机会业务
const businessOpportunity = new Map();
businessOpportunity.set(1, "肥宝宝");

// 认证状态
const AuthState = new Map();
AuthState.set(1, "已认证");
AuthState.set(0, "未认证");

const SignState = new Map();
SignState.set(1, "已签署");
SignState.set(0, "未签署");

// 是否双人
const DualType = new Map();
DualType.set(true, "双人");
DualType.set(false, "单人");

const ContractState = new Map();
ContractState.set("17", "风控通过");
ContractState.set("32", "平台预审");
ContractState.set("33", "平台预审通过");
ContractState.set("34", "平台预审不通过");
ContractState.set("48", "合同已提交");
ContractState.set("49", "合同审核通过");
ContractState.set("50", "合同审核不通过");
ContractState.set("64", "下款中");
ContractState.set("65", "已下款");
ContractState.set("66", "下款失败");

// 合同状态
// {
//   "status_key": {
//     key: "id_string",
//     value: "cn_string"
//   }
// }
const CONTRACTSTATE = [
  "RISK_ACCEPT",
  "HADES_WAIT",
  "HADES_ACCEPT",
  "HADES_REJECT",
  "CONT_COMMITTED",
  "CONT_ACCEPT",
  "CONT_REJECT",
  "LOAN_WAIT",
  "LOANED",
  "LOAN_FAIL"
].reduce((acc, key, index) => {
  acc[key] = {
    key: Array.from(ContractState.keys())[index],
    value: Array.from(ContractState.values())[index]
  };
  return acc;
}, {});

const ApplyPreCommitUseType = new Map();
ApplyPreCommitUseType.set(1, "买农机");
ApplyPreCommitUseType.set(2, "买农资");
ApplyPreCommitUseType.set(3, "土地租金");

const PayeeType = new Map();
PayeeType.set(16, "个人");
PayeeType.set(17, "农机经销商");
PayeeType.set(18, "企业");
PayeeType.set(19, "个体经商户");
PayeeType.set(20, "厂家");
PayeeType.set(21, "合作社");

/**
 * 是否委托
 * @type {Map}
 */
const PayeeEntrustType = new Map();
PayeeEntrustType.set(0, "否");
PayeeEntrustType.set(1, "是");

/**
 * 经销商贴息
 */
const AllowanceInterests = new Map();
AllowanceInterests.set(0, "否");
AllowanceInterests.set(2, "是");

/**
 * 经营信息-收入来源
 * @type {Map}
 */
const IncomeType = new Map();
IncomeType.set(1, "承包种植");
IncomeType.set(2, "操作农机");
IncomeType.set(99, "其他");

/**
 * 经营信息-农户种类
 * @type {Map}
 */
const farmerType = new Map();
farmerType.set(0, "包田大户");
farmerType.set(1, "农机操作");
farmerType.set(2, "其他");

/**
 * 经营信息-种植类型
 * @type {Map}
 */
const PlantingType = new Map();
PlantingType.set(0, "玉米");
PlantingType.set(1, "小麦");
PlantingType.set(2, "水稻");
PlantingType.set(3, "经济作物");
PlantingType.set(4, "其他");

/**
 * 经营信息-操作区域
 * @type {Map}
 */
const OperatingArea = new Map();
OperatingArea.set(0, "本地");
OperatingArea.set(1, "跨区域");

/**
 * 经营类型
 */
const OperateType = new Map();
OperateType.set(0, "粮食作物");
OperateType.set(1, "经济作物");
OperateType.set(2, "混合作物");

/**
 * 其他--经营规模
 */
const operationScale = new Map();
operationScale.set(0, "较小规模");
operationScale.set(1, "一般规模");
operationScale.set(2, "较大规模");

/**
 * 其他-经营类别
 */
const WorkingroupCategory = new Map();
WorkingroupCategory.set(0, "粮食经纪");
WorkingroupCategory.set(1, "粮食加工");
WorkingroupCategory.set(2, "农资经营");
WorkingroupCategory.set(3, "农机经营");
WorkingroupCategory.set(4, "养殖");
WorkingroupCategory.set(5, "其他");

/**
 * 支出信息
 * @type {Map}
 */
const OutcomeType = new Map();
OutcomeType.set(3, "建房");
OutcomeType.set(4, "买房");
OutcomeType.set(5, "定亲礼金");
OutcomeType.set(6, "结婚");
OutcomeType.set(7, "生子");
OutcomeType.set(8, "医疗");
OutcomeType.set(9, "购买大额消费品");
OutcomeType.set(10, "教育投资");
OutcomeType.set(99, "其他");

/**
 * 地址类型
 */
const AddressType = new Map();
AddressType.set(2, "经营地址");
AddressType.set(3, "其他地址");

/**
 * 家庭农场
 */
const HomeFarm = new Map();
HomeFarm.set(0, "是");
HomeFarm.set(1, "否");
HomeFarm.set(2, "进行中");

/**
 * 粮食作物-种植种类
 */
const GrainCrop = new Map();
GrainCrop.set(1, "水稻");
GrainCrop.set(2, "小麦");
GrainCrop.set(3, "玉米");
GrainCrop.set(4, "大豆");

/**
 * 经济作物-种植种类
 */
const CashCrop = new Map();
CashCrop.set(11, "葡萄");
CashCrop.set(12, "草莓");
CashCrop.set(13, "西瓜");
CashCrop.set(14, "大蒜");
CashCrop.set(15, "大葱");
CashCrop.set(16, "蔬菜大棚");
CashCrop.set(17, "其他");

/**
 * 混合-种植种类
 */
const MixtureCrop = new Map();
MixtureCrop.set(1, "水稻");
MixtureCrop.set(2, "小麦");
MixtureCrop.set(3, "玉米");
MixtureCrop.set(4, "大豆");
MixtureCrop.set(11, "葡萄");
MixtureCrop.set(12, "草莓");
MixtureCrop.set(13, "西瓜");
MixtureCrop.set(14, "大蒜");
MixtureCrop.set(15, "大葱");
MixtureCrop.set(16, "蔬菜大棚");
MixtureCrop.set(18, "其他");

/**
 * 销售阶段
 * @type {{apply_info: string, repayment: string, payee: string, self_bank: string, contract_info: string, contract_photo: string, withholding: string}}
 */
const salesStage = new Map();
salesStage.set(1, "初步洽谈");
salesStage.set(2, "达成意向");
salesStage.set(3, "成单");
salesStage.set(4, "丢单");

const ApplyItem = {
  apply_info: "0000001",
  repayment: "0000008",
  payee: "0000010",
  self_bank: "0000014",
  contract_info: "0000011",
  contract_photo: "0000012",
  withholding: "0000013"
};

const regionSetCode = new Map();
regionSetCode.set(178, "河南区域");
regionSetCode.set(179, "江苏区域");
regionSetCode.set(180, "安徽区域");
regionSetCode.set(181, "江西区域");
regionSetCode.set(306, "湖北区域");
regionSetCode.set(344, "河北区域");
regionSetCode.set(376, "山东区域");

const regionCode = {
  178: "河南区域",
  179: "江苏区域",
  180: "安徽区域",
  181: "江西区域",
  306: "湖北区域",
  344: "河北区域",
  376: "山东区域"
  // 292:"客户服务中心"
};

// 贷后回访状态
const VISIT_STATES = {
  NOTSTART: {
    key: 0,
    value: "未开始"
  },
  DOING: {
    key: 1,
    value: "进行中"
  },
  DONE: {
    key: 2,
    value: "已完成"
  },
  OVERDUE: {
    key: 3,
    value: "已过期"
  }
};

// 合同关系类型
const CONTRACT_LINK_TYPE = {
  ALL: {
    key: "",
    value: "全部的合同"
  },
  OWN: {
    key: 0,
    value: "自己的合同"
  },
  SUBORDINATE: {
    key: 1,
    value: "下属的合同"
  }
};

// 还款状态
const REPAYMENT_STATES = {
  REPAYMENT: {
    key: 0,
    value: "已还款"
  },
  OVERDUE: {
    key: 1,
    value: "已逾期"
  },
  NOT_REPAYMENT: {
    key: 2,
    value: "未还款"
  }
};

// 合同类型
const ContractTypeName = new Map();
ContractTypeName.set(1, "农分期纸质合同");
ContractTypeName.set(17, "云南信托纸质合同");
ContractTypeName.set(18, "云南信托电子合同");
ContractTypeName.set(33, "众安纸质合同");
ContractTypeName.set(49, "苏宁纸质合同");
ContractTypeName.set(65, "微神马纸质合同");
ContractTypeName.set(66, "微神马收割贷合同");
ContractTypeName.set(67, "微神马电子合同");
ContractTypeName.set(81, "铜板街纸质合同");
ContractTypeName.set(82, "铜板街电子合同");

// 时间筛选
const timeFilter = new Map();
timeFilter.set("today", "今日");
timeFilter.set("yestoday", "昨日");
timeFilter.set("thisWeek", "本周");
timeFilter.set("lastWeek", "上周");
timeFilter.set("thisMonth", "本月");
timeFilter.set("lastMonth", "上月");

// 时间筛选
const timeFilterOcen = new Map();
timeFilterOcen.set("today", "今日");
timeFilterOcen.set("thisWeek", "本周");
timeFilterOcen.set("thisMonth", "本月");

const Constant = {
  dev: false,
  getApiUrl() {
    return this.dev
      ? "http://api.dev.nongfenqi.com"
      : "http://apinrb.nongfenqi.net";
  },
  getFileUrl() {
    return this.dev
      ? "http://file.dev.nongfenqi.com"
      : "http://apifile.nongfenqi.net";
  },
  getGalenUrl() {
    return this.dev
      ? "http://galen.dev.nongfenqi.com"
      : "http://apigalen.nongfenqi.net";
  },
  getImageUrl(fileId, width, height) {
    if (width && height) {
      return `${this.getFileUrl()}/pic/${fileId}?w=${width}&h=${height}`;
    } else {
      return `${this.getFileUrl()}/pic/${fileId}`;
    }
  },
  // 资金方系统
  getFunderUrl() {
    return this.dev
      ? "http://192.168.10.6:8090"
      : "http://apihades.nongfenqi.net";
  },
  events: {
    TIP_FAIL: "tip_fail",
    TIP_SUCCESS: "tip_success",
    TIP_LOADING: "tip_loading",
    TIP_DISMISS: "tip_dismiss",
    LOGOUT: "logout",
    LOGIN: "login"
  },
  keys: {
    USER: "user"
  },
  imageCompressQuality: 0.8,
  CompressedImageSize: 2000,
  MaritalState,
  WorkState,
  ResideType,
  DualType,
  RelationType,
  AuthState,
  CustomerType,
  CustomerLinkedType,
  CustomerSourceType,
  ScheduleType,
  CustomerTrackType,
  CustomerTrackDirection,
  CustomerTrackMode,
  getNameById(id, array, defaultValue) {
    for (let item of array) {
      if (id == item.id) {
        return item.name;
      }
    }
    return defaultValue || "";
  },
  CustomerLevelType,
  FeedbackLevel,
  VisitType,
  WorkRegion,
  RepaymentVisitVerifyType,
  businessOpportunity,
  ContractState,
  ApplyItem,
  ApplyPreCommitUseType,
  PayeeType,
  PayeeEntrustType,
  AllowanceInterests,
  IncomeType,
  farmerType,
  OperateType,
  PlantingType,
  OperatingArea,
  OutcomeType,
  AddressType,
  operationScale,
  HomeFarm,
  GrainCrop,
  CashCrop,
  MixtureCrop,
  WorkingroupCategory,
  CustomerForce,
  salesStage,
  timeFilter,
  SignState,
  regionSetCode,
  RevisitType,
  PlanAuditState,
  ContractTypeName,
  timeFilterOcen,
  bankMapping: {
    "01009999": { bankCode: "403", bankName: "邮政储蓄银行", iconFile: null },
    "01040000": { bankCode: "104", bankName: "中国银行", iconFile: null },
    "03080000": { bankCode: "308", bankName: "招商银行", iconFile: null },
    "05083000": { bankCode: "380", bankName: "江苏银行", iconFile: null },
    "01030000": { bankCode: "103", bankName: "中国农业银行", iconFile: null },
    "03010000": { bankCode: "301", bankName: "交通银行", iconFile: null },
    "01050000": { bankCode: "105", bankName: "建设银行", iconFile: null },
    "04403600": { bankCode: "319", bankName: "徽商银行", iconFile: null },
    "03050000": { bankCode: "305", bankName: "民生银行", iconFile: null },
    "01020000": { bankCode: "102", bankName: "中国工商银行", iconFile: null },
    "03100000": { bankCode: "310", bankName: "上海浦东发展银行", iconFile: null }
  },
  regionCode,
  CONTRACTSTATE,
  CUSTOMER_LINKED_TYPE,
  VISIT_STATES,
  CONTRACT_LINK_TYPE,
  REPAYMENT_STATES
};

module.exports = Constant;
