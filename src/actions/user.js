import {createRequestTypes} from './actionHelper';

class User {
  USER_TOKEN = createRequestTypes('USER_TOKEN');
  getToken() {
    return {
      type: this.USER_TOKEN.REQUEST,
    }
  }
}

export default {
  User: new User()
}