import React from "react";
import { connect } from "react-redux";
import { modal } from "@/utils/decorators";
import { Distributor } from "@/actions";
import { createPaginateSelector } from "@/reducers/selectors";
import Table from "@/components/table";
import tables from "@/tables";

const growsSelector = createPaginateSelector("grows");

@connect(state => ({
  machineData: growsSelector(state)
}))
@modal({ title: "选择品种" })
class FoodBreedSelect extends React.Component {
  onEndReached = ({ value = {} }) => {
    this.props.dispatch(
      Distributor.growsPaginator.loadNext(this.handleValue(value))
    );
  };

  onRefresh = ({ value = {} }) => {
    this.props.dispatch(
      Distributor.growsPaginator.refresh(this.handleValue(value))
    );
  };

  handleValue = value => {
    let params = {};
    if (!Array.isArray(value)) return params;
    const keyword = value.find(item => item.id === "keyword");
    if (keyword) {
      params["fuzzyProductName"] = keyword.value;
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
              key: rowData.id,
              value: rowData.name,
              ...rowData
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
              {rowData.growModel}
            </div>
            <div style={{ fontSize: "14px", color: "#888", textAlign: "left" }}>
              {rowData.id}
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
    } = this.props.machineData;
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
          placeholder="请选择收粮品种"
        />
      </div>
    );
  }
}

export default FoodBreedSelect;
