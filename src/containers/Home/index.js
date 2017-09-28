import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import App from "@/components/App";
import { User } from "@/actions";

@connect()
class AppContainer extends Component {
  componentDidMount() {
    this.props.dispatch(User.getToken());
  }
  render() {
    const { children } = this.props;
    return <App children={children} />;
  }
}

export default AppContainer;
