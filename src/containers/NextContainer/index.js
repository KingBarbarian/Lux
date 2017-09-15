import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Next from "@/components/Next";
class NextContainer extends Component {
  render() {
    const { children } = this.props;
    return <Next children={children} />;
  }
}

export default withRouter(connect()(NextContainer));
