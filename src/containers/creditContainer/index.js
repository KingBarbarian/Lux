import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AddCredit from "@/page/addCredit";
class CreditContainer extends Component {
  render() {
    const { children } = this.props;
    return <AddCredit children={children} />;
  }
}

export default withRouter(CreditContainer);
