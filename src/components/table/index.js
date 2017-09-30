import React from "react";
import PropTypes from "prop-types";
// import Sorter from "./sorter";
// import Filter from "./filter";
import WebListView from "../list-view";

const noop = () => {};

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
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
  onFilterChange: noop,
};

class Table extends React.Component {

  componentDidMount() {
    this.onRefresh();
  }

  onRefresh = () => {
    this.props.onRefresh();
    // this.props.onRefresh({
    //   sorter: this.state.sorter,
    //   filter: this.state.filter
    // });
  };

  onEndReached = () => {
    this.props.onEndReached();
    // this.props.onEndReached({
    //   sorter: this.state.sorter,
    //   filter: this.state.filter
    // });
  };

  render() {
    const {
      dataList,
      totalCount,
      isRefreshing,
      isFetching,
      renderRow
    } = this.props;
    return (
      <div>
        <WebListView
          dataList={data}
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
