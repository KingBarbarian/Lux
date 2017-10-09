/**
   * 字符串过滤emoji or space
   * @param str 字符串
   * @returns {string}
   */
  const filterString = str => {
    let str_filter_emoji = str.replace(
      /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g,
      ""
    );
    let str_filter_space = str_filter_emoji.replace(/(^\s*)|(\s*$)/g, "");
    return str_filter_space;
  };
  export default {
    /**
     * 是否包含汉字
     * @param str 字符串
     * @returns {boolean}
     */
    containChinese(str) {
      if (str) {
        return /.*[\u4e00-\u9fa5]+.*$/.test(str);
      }
      return false;
    },
    isPhone(str) {
      if (str) {
        return /^1[34578]\d{9}$/.test(str);
      }
      return false;
    },
    /**
     * object过滤emoji or space
     * @param key 字符串 value 字符串
     * @returns {object}
     */
    filterEmojiOrSpace: (key, value) => {
      if (typeof value === "string") {
        value = filterString(value);
        return value;
      }
      return value;
    },
    /**
     * 身份证号码
     * @param card
     * @returns {boolean}
     */
    sCardNo: card => {
      // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
      const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (card) {
        return reg.test(card);
      }
      return false;
    }
  };
  