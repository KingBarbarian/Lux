class Message {
  SHOW = "MESSAGE_SHOW";
  DISMISS = "MESSAGE_DISMISS";
  CLEAR = "MESSAGE_CLEAR";
  // 显示类型
  TYPE_ERROR = "ERROR";
  TYPE_SUCCESS = "SUCCESS";
  TYPE_NONE = "NONE";
  TYPE_LOADING = "LOADING";

  show(content, type = this.TYPE_LOADING) {
    return {
      type: this.SHOW,
      payload: {
        type: type,
        content: content
      }
    };
  }

  dismiss() {
    return {
      type: this.DISMISS
    };
  }

  clear() {
    return {
      type: this.CLEAR
    };
  }
}

export default {
  Message: new Message()
};
