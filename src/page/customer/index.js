import React from "react";
import { connect } from "react-redux";
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
  
  onEndReached = ({value}) => {
    this.props.dispatch(Customer.listPaginator.loadNext(value));
  };

  onRefresh = ({value}) => {
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
        onClick={() => this.props.onClose({ data: rowData.des })}
      >
        <div
          style={{ display: "-webkit-box", display: "flex", padding: "15px" }}
        >
          <img
            style={{
              height: "40px",
              width: "40px",
              marginRight: "15px",
              borderRadius: "40px"
            }}
            src={"https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png"}
            alt="icon"
          />
          <div style={{ display: "inline-block" }}>
            <div
              style={{
                color: "#000",
                fontSize: "16px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "250px",
                paddingBottom: "5px"
              }}
            >
              {rowData.title}
            </div>
            <div style={{ fontSize: "14px", color: "#888" }}>{rowData.des}</div>
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
        <Table
          dataList={entities}
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
