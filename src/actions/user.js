import { createRequestTypes } from "./actionHelper";

class User {
  USER_TOKEN = createRequestTypes("USER_TOKEN");
  getToken() {
    return {
      type: this.USER_TOKEN.REQUEST,
      host: "http://file.dev.nongfenqi.com",
      endpoint: "/group/1231231",
      method: "GET"
    };
  }
}

export default {
  User: new User()
};
