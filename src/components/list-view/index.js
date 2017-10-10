import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { RefreshControl, ListView } from "antd-mobile";
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

    this.setState({
      text: value,
      value: value,
      activity: value
    });

    setTimeout(
      () =>
        this.setState({
          height: this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop
        }),
      0
    );
    this.lv.getInnerViewNode().addEventListener(
      "touchstart",
      (this.ts = e => {
        this.tsPageY = e.touches[0].pageY;
      })
    );
    const scrollNode = document.scrollingElement
      ? document.scrollingElement
      : document.body;
    this.lv.getInnerViewNode().addEventListener(
      "touchmove",
      (this.tm = e => {
        this.tmPageY = e.touches[0].pageY;
        if (
          this.tmPageY > this.tsPageY &&
          this.scrollerTop <= 0 &&
          scrollNode.scrollTop > 0
        ) {
          this.domScroller.options.preventDefaultOnTouchMove = false;
        } else {
          this.domScroller.options.preventDefaultOnTouchMove = undefined;
        }
      })
    );
  }

  componentWillUnmount() {
    this.lv.getInnerViewNode().removeEventListener("touchstart", this.ts);
    this.lv.getInnerViewNode().removeEventListener("touchmove", this.tm);
  }

  onScroll = e => {
    this.scrollerTop = e.scroller.getValues().top;
    this.domScroller = e;
  };

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

  scrollingComplete = () => {
    if (this.scrollerTop >= -1) {
      this.setState({ showFinishTxt: false });
    }
  };

  renderCustomIcon() {
    return [
      <div key="0" className="am-refresh-control-pull">
        <span>{this.state.showFinishTxt ? "刷新完毕" : "下拉可以刷新"}</span>
      </div>,
      <div key="1" className="am-refresh-control-release">
        <span>松开立即刷新</span>
      </div>
    ];
  }

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
          initialListSize={5}
          pageSize={5}
          style={{
            height: this.state.height
          }}
          scrollerOptions={{
            scrollbars: true,
            scrollingComplete: this.scrollingComplete
          }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
              icon={this.renderCustomIcon()}
            />
          }
          onScroll={this.onScroll}
          scrollRenderAheadDistance={200}
          scrollEventThrottle={20}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={10}
        />
      </div>
    );
  }
}

WebListView.propTypes = propTypes;
WebListView.defaultProps = defaultProps;

export default WebListView;
