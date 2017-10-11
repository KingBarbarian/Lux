import React from "react";
import { Tabs } from "antd-mobile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  FarmWork,
  FillFarmers,
  Food,
  Labor,
  Machine,
  Rent
} from "./form-childen";
const height = window.innerHeight;

const tabs = [
  { title: "农机", sub: "1" },
  { title: "农补", sub: "2" },
  { title: "地租", sub: "3" },
  { title: "农活", sub: "4" },
  { title: "粮食", sub: "5" },
  { title: "人工", sub: "6" }
];

@connect()
class AddCredit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 1
    };
  }

  render() {
    return (
      <div>
        <Tabs
          tabs={tabs}
          initialPage={0}
          tabBarPosition="top"
          swipeable={false}
          renderTab={tab => <span>{tab.title}</span>}
        >
          <div style={{ height: `${height - 43.5}px` }}>
            <Machine />
          </div>
          <div style={{ height: `${height - 43.5}px` }}>
            <FillFarmers />
          </div>
          <div style={{ height: `${height - 43.5}px` }}>
            <Rent />
          </div>
          <div style={{ height: `${height - 43.5}px` }}>
            <FarmWork />
          </div>
          <div style={{ height: `${height - 43.5}px` }}>
            <Food />
          </div>
          <div style={{ height: `${height - 43.5}px` }}>
            <Labor />
          </div>
        </Tabs>
      </div>
    );
  }
}

export default withRouter(AddCredit);
