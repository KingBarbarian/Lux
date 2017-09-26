import _ from "lodash";

const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

export function createRequestTypes(base){
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

/**
 * 浅层对对象作裁剪
 * @param {*} srcObject
 * @param {*} templateObj
 */
export const trim = (srcObject, templateObj) => {
  return _.mapValues(templateObj, (value, key) => {
    return srcObject[key];
  });
};

/**
 * 深层对对象作裁剪
 * @param {*} srcObject
 * @param {*} templateObj
 */
export const deepTrim = (srcObject, templateObj) => {
  let key, srcValue, tempValue, result;

  for (key in srcObject) {
    if (templateObj.hasOwnProperty(key)) {
      tempValue = templateObj[key];
      srcValue = srcObject[key];

      let isSrcObj = typeof srcValue === "object";
      let isTempObj = typeof tempValue === "object";
      let isSrcEmpty = JSON.stringify(srcValue) === "{}";
      let isTempEmpty = JSON.stringify(tempValue) === "{}";

      if (isSrcObj && isTempObj) {
        srcObject[key] = deepTrim(srcValue, tempValue);
      }
      if (
        (isSrcObj && !isTempObj) ||
        (!isSrcObj && isTempObj) ||
        isSrcEmpty ||
        isTempEmpty
      ) {
        srcObject = _.omit(srcObject, [key]);
      }
    } else {
      srcObject = _.omit(srcObject, [key]);
    }
  }
  result = emptyTrim(srcObject);
  return result;
};

/**
 * 除去空对象
 * @param {*} srcObject
 */
const emptyTrim = srcObject => {
  let key, value, isEmptyObj;
  for (key in srcObject) {
    value = srcObject[key];
    isEmptyObj = JSON.stringify(value) === "{}";
    if (isEmptyObj) {
      srcObject = _.omit(srcObject, [key]);
    }
  }
  return srcObject;
};
