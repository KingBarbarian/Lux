import React from "react";
import { connect } from "react-redux";
import { modal } from "@/utils/decorators";
import { Distributor } from "@/actions";
import { createPaginateSelector } from "@/reducers/selectors";
import tables from "@/tables";
import Table from "@/components/table";

const distributorSelector = createPaginateSelector("distributors");

@modal({ title: "选择经销商" })
class DistributorSelect extends React.Component {
  onEndReached = ({ value = {} }) => {
    this.props.dispatch(
      Distributor.listPaginator.loadNext(this.handleValue(value))
    );
  };

  onRefresh = ({ value = {} }) => {
    this.props.dispatch(
      Distributor.listPaginator.refresh(this.handleValue(value))
    );
  };

  handleValue = value => {
    let params = {};
    const keyword = value.find(item => item.id === "keyword");
    if (keyword) {
      params["queryName"] = keyword.value;
    }
    return params;
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
export { default as FoodBreedSelect } from "./FoodBreedSelect";
