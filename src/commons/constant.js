
const FarmWorkType = new Map();
FarmWorkType.set(0, "植保");
FarmWorkType.set(1, "收割");
FarmWorkType.set(2, "耕地");

const Practices = new Map();
Practices.set(0, "深耕");
Practices.set(1, "浅耕");


const CustomerLinkedType = new Map();
CustomerLinkedType.set("", "全部的客户");
CustomerLinkedType.set(0, "我的客户");
CustomerLinkedType.set(1, "我下属的客户");
CustomerLinkedType.set(2, "我可见的其他客户");


const CustomerType = new Map();
CustomerType.set(0, "农户");
CustomerType.set(1, "农机手");
CustomerType.set(9, "其他");


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

// 认证状态
const AuthState = new Map();
AuthState.set(1, "已认证");
AuthState.set(0, "未认证");

const SignState = new Map();
SignState.set(1, "已签署");
SignState.set(0, "未签署");

const Constant = {
  CustomerType,
  CustomerLinkedType,
  CustomerTrackType,
  CustomerTrackDirection,
  CustomerTrackMode,
  AuthState,
  SignState,
  getNameById(id, array, defaultValue) {
    for (let item of array) {
      if (id == item.id) {
        return item.name;
      }
    }
    return defaultValue || "";
  },
  CustomerLevelType,
  CustomerForce,
  timeFilter,
  timeFilterOcen,
  FarmWorkType,
  Practices
};

module.exports = Constant;
