import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { PullToRefresh, ListView } from "antd-mobile";
import ReactDOM from "react-dom";
import ListEmpty from "../list-empty";
import SearchInput from "../search-input";

const propTypes = {
  dataList: PropTypes.array,
  renderRow: PropTypes.func.isRequired,
  renderEmpty: PropTypes.func,
  onEndReached: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  totalCount: PropTypes.number
};

const defaultProps = {
  renderEmpty: () => <ListEmpty />,
  totalCount: 0
};

/**
 * 下拉刷新、上拉加载的listView
 */
class WebListView extends React.Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    const data = this.props.config.data;
    this.state = {
      text: data.map(rows => {
        if (rows.headerDisplay && rows.index) {
          return rows.index;
        } else if (rows.value) {
          return 1;
        } else if (rows.headerDisplay) {
          return 0;
        } else {
          return -1;
        }
      }),
      value: [],
      activity: [],
      selectIndex: data.map(rows => {
        if (rows.headerDisplay && rows.index) {
          return rows.index;
        } else if (rows.value) {
          return 1;
        } else if (rows.headerDisplay) {
          return 0;
        } else {
          return -1;
        }
      }),
      refreshing: true,
      height: document.documentElement.clientHeight
    };
  }

  componentDidMount() {
    const data = this.props.config.data;
    let addValue = {};
    let value = data.map((rows, key) => {
      let _index = 0;
      const options = _.get(rows, "options") || [];
      options.map((item, index) => {
        if (item.id === rows.value) {
          _index = index;
        }
        return item;
      });
      if (rows.value && rows.type === "select") {
        addValue.id = rows.id;
        addValue.headerDisplay = rows.headerDisplay;
        addValue.value = rows.value;
        addValue.activityIndex = key;
        addValue.defaultValue = rows.value;
        addValue.name = `${rows.name}：${rows.options[_index].name}`;
        return addValue;
      } else {
        return -1;
      }
    });
    this.props.onRefresh();

    this.setState({
      text: value,
      value: value,
      activity: value
    });

    const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      this.setState({
        height: hei,
        refreshing: false
      });
    }, 2000);
  }

  handleTextChange = text => {
    this.keyword = text;
    this.handleSearch();
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

    this.props.onRefresh(value);
  };

  onRefresh = () => {
    if (!this.manuallyRefresh) {
      this.setState({ refreshing: true });
    } else {
      this.manuallyRefresh = false;
    }
    setTimeout(() => {
      this.props.onRefresh();
      this.setState({
        refreshing: false,
        showFinishTxt: true
      });
      if (this.domScroller) {
        this.domScroller.scroller.options.animationDuration = 500;
      }
    }, 600);
  };

  onEndReached = event => {
    this.props.onEndReached();
  };

  renderFooter = () => {
    if (this.props.isFetching) {
      return <div style={{ padding: 30, textAlign: "center" }}>{"加载中..."}</div>;
    }
    if (!this.state.showFinishTxt && this.props.totalCount === 0) {
      return this.props.renderEmpty();
    }
    return null;
  };

  render() {
    const { renderRow, placeholder } = this.props;
    return (
      <div>
        <SearchInput
          placeholder={placeholder}
          onChangeText={this.handleTextChange}
          onSubmitEditing={this.handleSearch}
        />
        <ListView
          ref={el => (this.lv = el)}
          dataSource={this.ds.cloneWithRows(this.props.dataList)}
          renderFooter={this.renderFooter}
          renderRow={renderRow}
          style={{
            height: this.state.height
          }}
          pullToRefresh={
            <PullToRefresh
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
          onEndReached={this.onEndReached}
          pageSize={5}
        />
      </div>
    );
  }
}

WebListView.propTypes = propTypes;
WebListView.defaultProps = defaultProps;

export default WebListView;
