import React from "react";
import PropTypes from "prop-types";
import WebListView from "../list-view";

const noop = () => {};

const propTypes = {
  renderRow: PropTypes.func,
  onRefresh: PropTypes.func,
  onEndReached: PropTypes.func
};

const defaultProps = {
  renderRow: noop,
  onRefresh: noop,
  onEndReached: noop,
  onFilterChange: noop
};

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    };
    this.keyword = null;
  }

  componentDidMount = () => {
    this.onRefresh();
  }
  

  onRefresh = value => {
    let requestValue = null;
    if (value) {
      requestValue = value;
    } else {
      requestValue = this.state.value;
    }

    this.props.onRefresh({
      value: requestValue
    });
  };

  onEndReached = () => {
    this.props.onEndReached({
      value: this.state.text
    });
  };

  render() {
    const {
      dataList,
      totalCount,
      isRefreshing,
      isFetching,
      renderRow,
      placeholder
    } = this.props;
    return (
      <div>
        <WebListView
          placeholder={placeholder}
          dataList={dataList}
          totalCount={totalCount}
          isRefreshing={isRefreshing}
          isFetching={isFetching}
          onRefresh={this.onRefresh}
          onEndReached={this.onEndReached}
          renderRow={renderRow}
        />
      </div>
    );
  }
}

// Table.Sorter = Sorter;
// Table.Filter = Filter;

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
