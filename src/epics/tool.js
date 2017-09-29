import Rx from "rxjs";
import * as API from '@/server'


// without succee and fail
export const simpleAjax = (action, store) => {
  const { endpoint, method, isFormData, host, data, timeout } = action;
  return Rx.Observable.fromPromise(
    API.getSceneInfo(endpoint, method, isFormData, host, data, timeout)
  );
};

export const createErrorProcessStream = (action, failureType, error) =>
  createErrorStream(action, failureType, error)
    .concat(Rx.Observable.of(console.log("打开错误信息")))
    .concat(Rx.Observable.of(console.log("关闭错误信息")));

