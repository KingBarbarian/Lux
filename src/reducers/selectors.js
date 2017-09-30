import _ from "lodash";
import { defaultState as paginateDefaultState } from "./paginate";
export const getToken = state => _.get(state, "user.token");
export const createPaginateSelector = target => state =>
state.paginate
  ? state.paginate[target] || paginateDefaultState
  : paginateDefaultState;
