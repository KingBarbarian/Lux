import { Message } from "@/actions";

const defaultState = {
  content: "",
  type: Message.TYPE_NONE,
  // 消息池数量
  count: 0,
  isShowing: false
};

module.exports = (state = defaultState, action) => {
  switch (action.type) {
    case Message.SHOW:
      return {
        content: action.payload.content || state.content,
        type: action.payload.type,
        count: state.count + 1,
        isShowing: true
      };
    case Message.DISMISS:
      const count = state.count - 1 < 1 ? 0 : state.count - 1;
      return {
        ...state,
        count,
        isShowing: count !== 0
      };
    case Message.CLEAR:
      return defaultState;
    default:
      return state;
  }
};
