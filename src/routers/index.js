import React from "react";
import { connect } from "react-redux";
import { HashRouter, Route, browserHistory } from "react-router-dom";
import Message from "@/components/Message";
import { User } from "@/actions";
import CreditContainer from "@/containers/creditContainer";

class Router extends React.Component {
  // componentDidMount = () => {
  //   this.props.dispatch(User.getToken());
  // };
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
