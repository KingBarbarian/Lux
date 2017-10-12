import React from "react";
import { connect } from "react-redux";
import { NavBar } from "antd-mobile";
import { modal } from "@/utils/decorators";
import { Distributor } from "@/actions";
import { createPaginateSelector } from "@/reducers/selectors";
import tables from "@/tables";
import Table from "@/components/table";

const distributorSelector = createPaginateSelector("distributors");

@connect(state => ({
  distributors: distributorSelector(state)
}))
@modal()
class DistributorSelect extends React.Component {
  onEndReached = ({ value = {} }) => {
    this.props.dispatch(Distributor.listPaginator.loadNext(value));
  };

  onRefresh = ({ value = {} }) => {
    this.props.dispatch(Distributor.listPaginator.refresh(value));
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
            data: {
              key: rowData.distributorId,
              value: rowData.companyName
            }
          })}
      >
        <div style={{ display: "flex", padding: "15px" }}>
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
              {rowData.companyName}
            </div>
            <div style={{ fontSize: "14px", color: "#888", textAlign: "left" }}>
              {rowData.distributorId}
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
    } = this.props.distributors;
    return (
      <div>
        <NavBar
          leftContent="关闭"
          mode="light"
          onLeftClick={() => this.props.onClose()}
        >
          选择经销商
        </NavBar>
        <Table
          dataList={entities || []}
          totalCount={totalCount}
          isRefreshing={isRefreshing}
          isFetching={isFetching}
          onRefresh={this.onRefresh}
          onEndReached={this.onEndReached}
          renderRow={this.renderRow}
          config={tables.distributorList}
          placeholder="请选择经销商"
        />
      </div>
    );
  }
}

export default DistributorSelect;
export { default as MachineSelect } from "./MachineSelect";
