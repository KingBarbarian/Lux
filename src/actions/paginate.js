import { createRequestTypes } from "./actionHelper";

const PAGINATE_INIT = createRequestTypes("PAGINATE_INIT");
const PAGINATE_REFRESH = createRequestTypes("PAGINATE_REFRESH");
const PAGINATE_RESET = createRequestTypes("PAGINATE_RESET");
const PAGINATE_LOAD_NEXT = createRequestTypes("PAGINATE_LOAD_NEXT");
const PAGINATE_CHANGE_STATE = "PAGINATE_CHANGE_STATE";

export const createPaginateActionCreator = type => {
  const init = action => ({
    ...action,
    type: PAGINATE_INIT.REQUEST,
    target: type
  });
  const refresh = action => ({
    ...action,
    type: PAGINATE_REFRESH.REQUEST,
    target: type
  });
  const reset = action => ({
    ...action,
    type: PAGINATE_RESET.REQUEST,
    target: type
  });
  const loadNext = action => ({
    ...action,
    type: PAGINATE_LOAD_NEXT.REQUEST,
    target: type
  });

  return {
    init,
    refresh,
    reset,
    loadNext
  };
};

export const createPaginateActionCreatorS = (type, func, pageSize = 10) => {
  const init = (...args) => ({
    ...func(0, pageSize, ...args),
    type: PAGINATE_INIT.REQUEST,
    target: type
  });
  const refresh = (...args) => ({
    ...func(0, pageSize, ...args),
    type: PAGINATE_REFRESH.REQUEST,
    target: type
  });
  const reset = (...args) => ({
    ...func(0, pageSize, ...args),
    type: PAGINATE_RESET.REQUEST,
    target: type
  });
  const loadNext = (...args) => ({
    ...func(0, pageSize, ...args),
    type: PAGINATE_LOAD_NEXT.REQUEST,
    target: type
  });

  return {
    init,
    refresh,
    reset,
    loadNext
  };
};

export default {
  PAGINATE_INIT,
  PAGINATE_REFRESH,
  PAGINATE_RESET,
  PAGINATE_LOAD_NEXT,
  PAGINATE_CHANGE_STATE,
  createPaginateActionCreator
};
