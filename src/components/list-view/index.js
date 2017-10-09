import React from "react";
import PropTypes from "prop-types";
import { RefreshControl, ListView } from "antd-mobile";
import ReactDOM from "react-dom";
import ListEmpty from "../list-empty";

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
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.state = {
      height: document.documentElement.clientHeight
    };
  }

  componentDidMount() {
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

  onRefresh = () => {
    setTimeout(() => {
      this.props.onRefresh();
      this.setState({
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
    if (this.props.totalCount === 0) {
      return this.props.renderEmpty();
    }
    return null;
  };

  render() {
    const { renderRow } = this.props;
    return (
      <div>
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
              refreshing={this.props.isRefreshing}
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
