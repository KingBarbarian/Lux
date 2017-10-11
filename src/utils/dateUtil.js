const format = (date, format) => {
  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, //小时
    "H+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  };
  var week = {
    "0": "/u65e5",
    "1": "/u4e00",
    "2": "/u4e8c",
    "3": "/u4e09",
    "4": "/u56db",
    "5": "/u4e94",
    "6": "/u516d"
  };
  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  if (/(E+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (RegExp.$1.length > 1
        ? RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468"
        : "") + week[date.getDay() + ""]
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return format;
};

/**
   * 本周，上周，本月，上月
   *param {int} type: 本周1，上周2，本月3，上月4
   *@param {Date} date
   */
const gettDateDetail = (type, date = new Date()) => {
  let value = {};
  let start = null;
  let end = null;
  let year = date.getFullYear();
  const month = date.getMonth();
  const week = date.getDay();
  const day = date.getDate();

  year += year < 2000 ? 1900 : 0;

  if (type === "thisWeek") {
    start = new Date(year, month, day - week + 1);
    end = new Date(year, month, day + (7 - week));
  } else if (type === "lastWeek") {
    start = new Date(year, month, day - week - 6);
    end = new Date(year, month, day - week);
  } else if (type === "thisMonth") {
    const maxDay = new Date(year, month + 1, 0).getDate();
    start = new Date(year, month, 1);
    end = new Date(year, month, maxDay);
  } else {
    const maxDay = new Date(year, month, 0).getDate();
    start = new Date(year, month - 1, 1);
    end = new Date(year, month - 1, maxDay);
  }

  value.startTime = start;
  value.endTime = end;
  return value;
};

const dateUtil = {
  /**
     * 格式化日期
     * @param date js的Date类型
     * @param format 需要格式化的输出
     * @returns {*}
     */
  format: format,
  /**
     * 格式化日期
     * @param date string类型的日期,如: 2016-01-06 00:00:00
     * @param formatStr
     * @returns {*}
     */
  formatFromString: (date, formatStr) => {
    const d = new Date(Date.parse(date.replace(/-/g, "/")));
    return format(d, formatStr);
  },
  /**
     * 将string转换成date
     * @param date
     * @returns {Date}
     */
  convertToDate: date => {
    if (date) {
      return new Date(Date.parse(date.replace(/-/g, "/")));
    }
    return new Date();
  },
  /**
     * 获取某年某月的最大天数
     * @param year 年份
     * @param month 月份
     * @returns {number}
     */
  getMaxDayOfMonth: (year, month) => {
    return new Date(year, month, 0).getDate();
  },
  convertWeek: week => {
    switch (week) {
      case 0:
        return "星期日";
      case 1:
        return "星期一";
      case 2:
        return "星期二";
      case 3:
        return "星期三";
      case 4:
        return "星期四";
      case 5:
        return "星期五";
      default:
        return "星期六";
    }
  },
  /**
     * 计算相差几天
     * @date   2016-11-04
     * @author niko
     * @param  {Date}   from
     * @param  {Date}   to
     */
  dayOffset: (from, to) => {
    let fromDate = format(from, "yyyy-MM-dd");
    let toDate = format(to, "yyyy-MM-dd");
    let offset =
      (new Date(toDate).getTime() - new Date(fromDate).getTime()) /
      1000 /
      60 /
      60 /
      24;
    return offset;
  },
  shortDate: date => {
    if (date) {
      return date.substr(0, 10);
    } else {
      return date;
    }
  },

  /**
     * 获取两个日期相差的月份数
     * @param {Date} startDate
     * @param {Date} endDate
     */
  diffMonth: (startDate, endDate) => {
    return (
      endDate.getFullYear() * 12 +
      endDate.getMonth() -
      startDate.getFullYear() * 12 -
      startDate.getMonth()
    );
  },

  /**
     * 给定相差的天数，返回具体日期
     * @param {Date} date
     * @param {number} days
     */
  addDate: (date = new Date(), days = 0) => {
    if (typeof date === "string") {
      date = dateUtil.convertToDate(date);
    }
    if (date && date instanceof Date) {
      date.setDate(date.getDate() + days);
    }
    return date;
  },

  /**
     * 处理 今日，昨日，本周，上周，本月，上月
     * @param {*} type
     */
  dateOperate: (type, nowDate = new Date()) => {
    let dataAnd = {};
    let result = {};
    let formatDate = "yyyy-MM-dd 00:00:00";

    switch (type) {
      case "today":
        result.startTime = format(nowDate, formatDate);
        result.endTime = format(dateUtil.addDate(new Date(), 1), formatDate);
        break;
      case "yestoday":
        result.startTime = format(dateUtil.addDate(new Date(), -1), formatDate);
        result.endTime = format(new Date(), formatDate);
        break;
      case "thisWeek":
        dataAnd = gettDateDetail(type);
        result.startTime = format(dataAnd.startTime, formatDate);
        result.endTime = format(
          dateUtil.addDate(dataAnd.endTime, 1),
          formatDate
        );
        break;
      case "lastWeek":
        dataAnd = gettDateDetail(type);
        result.startTime = format(dataAnd.startTime, formatDate);
        result.endTime = format(
          dateUtil.addDate(dataAnd.endTime, 1),
          formatDate
        );
        break;
      case "thisMonth":
        dataAnd = gettDateDetail(type);
        result.startTime = format(dataAnd.startTime, formatDate);
        result.endTime = format(
          dateUtil.addDate(dataAnd.endTime, 1),
          formatDate
        );
        break;
      case "lastMonth":
        dataAnd = gettDateDetail(type);
        result.startTime = format(dataAnd.startTime, formatDate);
        result.endTime = format(
          dateUtil.addDate(dataAnd.endTime, 1),
          formatDate
        );
        break;
      default:
        result.startTime = null;
        result.endTime = null;
        break;
    }
    return result;
  }
};

export default dateUtil;
