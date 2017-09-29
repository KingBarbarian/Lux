import React from "react";
import { connect } from "react-redux";
import { HashRouter, Route, browserHistory } from "react-router-dom";
import Message from "@/components/Message";
import CreditContainer from "@/containers/creditContainer";

@connect(state => ({
  visiable: state.message.isShowing,
  content: state.message.content,
  type: state.message.type
}))
class Router extends React.Component {
  render() {
    const { visiable, content, type } = this.props;
    return (
      <div>
        <HashRouter history={browserHistory}>
          <div>
            <Route exact path="/" component={CreditContainer} />
            {/* <Route path="/next" component={NextContainer} /> */}
          </div>
        </HashRouter>
        <Message visiable={visiable} content={content} type={type} />
      </div>
    );
  }
}

export default Router;
