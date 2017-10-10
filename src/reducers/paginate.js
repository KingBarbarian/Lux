import {
  PAGINATE_INIT,
  PAGINATE_REFRESH,
  PAGINATE_RESET,
  PAGINATE_LOAD_NEXT,
  PAGINATE_CHANGE_STATE
} from "@/actions";
export const defaultState = {
  currentPage: 0,
  isFetching: false,
  isRefreshing: false,
  isReachEnd: true,
  entities: [],
  totalCount: 0,
  pageSize: 0
};

// 如果需要再做数据转换怎么办？
export const paginateReducer = (state = {}, action) => {
  switch (action.type) {
    case PAGINATE_INIT.REQUEST:
      return {
        ...state,
        [action.target]: {
          ...defaultState
        }
      };
    case PAGINATE_RESET.REQUEST:
    case PAGINATE_REFRESH.REQUEST:
      if (state[action.target]) {
        // 不需要初始化
        return state;
      }
      return {
        ...state,
        [action.target]: {
          ...defaultState
        }
      };
    case PAGINATE_RESET.SUCCESS:
    case PAGINATE_INIT.SUCCESS:
    case PAGINATE_REFRESH.SUCCESS:
      return {
        ...state,
        [action.target]: {
          ...state[action.target],
          isRefreshing: false,
          // 如果当前接口不是普通的分页接口，那么isReachEnd必须为True
          isReachEnd: Array.isArray(action.payload.items)
            ? action.payload.items.length ===
              action.payload.totalCount
            : true,
          currentPage: 1,
          entities: Array.isArray(action.payload.items)
            ? action.payload.items
            : action.payload,
          pageSize: action.payload.pageSize,
          totalCount: action.payload.totalCount
        }
      };
    case PAGINATE_LOAD_NEXT.SUCCESS:
      let newState = {
        ...state,
        [action.target]: {
          ...state[action.target],
          isRefreshing: false,
          isFetching: false,
          currentPage: state[action.target].currentPage + 1,
          entities: [...state[action.target].entities].concat(
            action.payload.items
          ),
          pageSize: action.payload.pageSize,
          totalCount: action.payload.totalCount
        }
      };
      if (
        newState[action.target].entities.length ===
        newState[action.target].totalCount
      ) {
        newState[action.target].isReachEnd = true;
      }
      return newState;
    case PAGINATE_LOAD_NEXT.FAILURE:
    case PAGINATE_RESET.FAILURE:
    case PAGINATE_REFRESH.FAILURE:
    case PAGINATE_INIT.FAILURE:
      return {
        ...state,
        [action.target]: {
          ...state[action.target],
          isRefreshing: false,
          isFetching: false
        }
      };
    case PAGINATE_CHANGE_STATE:
      return {
        ...state,
        [action.target]: {
          ...state[action.target],
          isRefreshing: action.payload.isRefreshing,
          isFetching: action.payload.isFetching
        }
      };
    default:
      return state;
  }
};

export default paginateReducer;
