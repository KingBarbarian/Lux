import axios from "axios";
import { API_ROOT } from "@/config";
export default function(options) {
  let DefaultParams = {
    url: "",
    method: "get",
    credentials: "include"
  };
  options = Object.assign({}, DefaultParams, options);
  try {
    return axios(options).then(response => {
      let { headers, data } = response;
      let contentType = headers["content-type"];
      if (contentType && contentType.indexOf("application/json") !== -1) {
        let { status, message } = data;
        if (status !== 0) {
          return Promise.reject(new Error(message));
        }
        return Promise.resolve(data);
      } else {
        return Promise.reject(new Error("the response is not JSON"));
      }
    });
  } catch (e) {
    console.error("axios error: ", e);
  }
}

export const baseRequest = (
  data,
  url,
  token,
  type = "POST",
  timeout = 10000,
  root = API_ROOT,
  isFormData
) => {
  const headers = { "Content-Type": "application/json" };
  if (token) {
    headers["x-auth-token"] = token;
  }
  if (isFormData) {
    headers["Content-Type"] = "multipart/form-data";
  }
  const options = {
    url: url,
    method: type,
    baseURL: root,
    headers: headers,
    timeout: timeout
  };
  // no patch
  if (type === "GET" || type === "DELETE") {
    options.params = data;
  } else {
    options.data = data;
  }

  return axios(options).then(response => {
    let { headers, data, status } = response;
    let contentType = headers["content-type"];
    if (status !== 200) {
      return Promise.reject(new Error("服务器请求失败"));
    }
    if (contentType && contentType.indexOf("application/json") !== -1) {
      let { retCode, retMsg } = data;
      if (retCode !== 0) {
        return Promise.reject(new Error(retMsg));
      }
      return Promise.resolve(data.data);
    } else {
      return Promise.reject(new Error("the response is not JSON"));
    }
  });
};
