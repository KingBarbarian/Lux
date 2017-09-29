import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CustomerSelect from "@/page/customer";
class CustomerSelectContainer extends Component {
  render() {
    const { children } = this.props;
    return <CustomerSelect children={children} />;
  }
}

export default withRouter(CustomerSelectContainer);
