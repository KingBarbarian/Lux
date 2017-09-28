import Rx from "rxjs";
import { baseRequest } from '@/utils/axios';
import { getToken } from '@/reducers/selectors';

// without succee and fail
export const simpleAjax = (action, store) => {
  const token = getToken(store.getState());
  const { endpoint, method, isFormData, host, data, timeout } = action;
  return Rx.Observable.fromPromise(
    baseRequest(data, endpoint, token, method, timeout, host, isFormData)
  );
};

export const simpleAjaxWithToken = (action) => {
  const { endpoint, method, isFormData, host, data, timeout } = action;
  return Rx.Observable.fromPromise(
    baseRequest(data, endpoint, null, method, timeout, host, isFormData)
  );
};
