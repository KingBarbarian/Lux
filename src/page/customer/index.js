import React from "react";
import { connect } from "react-redux";
import { NavBar } from "antd-mobile";
import { modal } from "@/utils/decorators";
import { Customer } from "@/actions";
import { createPaginateSelector } from "@/reducers/selectors";
import tables from "@/tables";
import Table from "@/components/table";

const customersSelector = createPaginateSelector("customers");

@connect(state => {
  return {
    customers: customersSelector(state)
  };
})
@modal()
class CustomerSelect extends React.Component {
  onEndReached = ({ value }) => {
    this.props.dispatch(Customer.listPaginator.loadNext(value));
  };

  onRefresh = ({ value }) => {
    this.props.dispatch(Customer.listPaginator.refresh(value));
  };

  renderRow = (rowData, sectionID, rowID) => {
    return (
      <div
        key={rowID}
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #ECECED"
        }}
        onClick={() =>
          this.props.onClose({
            data: { key: rowData.customerId, value: rowData.customerName }
          })}
      >
        <div
          style={{ display: "-webkit-box", display: "flex", padding: "15px" }}
        >
          <div style={{ display: "inline-block" }}>
            <div
              style={{
                color: "#000",
                fontSize: "16px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "250px",
                paddingBottom: "5px",
                textAlign: "left"
              }}
            >
              {rowData.customerName}
            </div>
            <div style={{ fontSize: "14px", color: "#888" }}>
              {rowData.customerId}
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const {
      entities,
      totalCount,
      isRefreshing,
      isFetching
    } = this.props.customers;
    return (
      <div>
        <NavBar
          leftContent="关闭"
          mode="light"
          onLeftClick={() => this.props.onClose()}
        >
          选择客户
        </NavBar>
        <Table
          dataList={entities ? entities : []}
          totalCount={totalCount}
          isRefreshing={isRefreshing}
          isFetching={isFetching}
          onRefresh={this.onRefresh}
          onEndReached={this.onEndReached}
          renderRow={this.renderRow}
          config={tables.customerList}
          placeholder="请输入客户名/手机号"
        />
      </div>
    );
  }
}

export default CustomerSelect;
