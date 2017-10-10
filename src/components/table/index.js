import React from "react";
import PropTypes from "prop-types";
// import Sorter from "./sorter";
// import Filter from "./filter";
import WebListView from "../list-view";
import SearchInput from "../search-input";

const noop = () => {};

const data = [
  {
    img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
    title: "Meet hotel",
    des: "不是所有的兼职汪都需要风吹日晒"
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    title: "McDonald's invites you",
    des: "不是所有的兼职汪都需要风吹日晒"
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png",
    title: "Eat the week",
    des: "不是所有的兼职汪都需要风吹日晒"
  }
];

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

  handleTextChange = text => {
    this.keyword = text;
    const value = this.state.value;
    const data = this.props.config.data;

    if (
      (text === null || text === "" || text === undefined) &&
      value.length > data.length
    ) {
      this.handleSearch();
    }
  };

  handleSearch = () => {
    const data = this.props.config.data;
    let keyword = {};
    let value = this.state.value;

    keyword.id = "keyword";
    keyword.value = this.keyword;
    keyword.headerDisplay = "false";

    value[data.length] = keyword;

    this.setState({
      value: value
    });

    this.onRefresh(value);
  };

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
        <SearchInput
          placeholder={placeholder}
          onChangeText={this.handleTextChange}
          onSubmitEditing={this.handleSearch}
        />
        <WebListView
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
