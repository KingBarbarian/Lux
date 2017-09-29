import _ from "lodash";
export const getToken = state => _.get(state, "user.token");
