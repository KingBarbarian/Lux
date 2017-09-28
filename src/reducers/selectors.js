import _ from 'lodash';
export const getAccessToken = state => _.get(state, "user.token");
