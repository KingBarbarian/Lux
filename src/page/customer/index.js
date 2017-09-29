import React from "react";
import { RefreshControl, ListView, SearchBar } from "antd-mobile";
import { connect } from "react-redux";
import { modal } from "@/utils/decorators";
import ReactDOM from "react-dom";

const data = [
  {
    title: "还款计划-肥宝宝",
    des: "18913372392"
  },
  {
    title: "还款计划-肥宝宝",
    des: "189133723921"
  },
  {
    title: "还款计划-肥宝宝",
    des: "18913372392"
  }
];
let index = data.length - 1;

const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataArr = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    dataArr.push(`row - ${pIndex * NUM_ROWS + i}`);
  }
  return dataArr;
}

@connect()
@modal()
class CustomerSelect extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.state = {
      dataSource,
      refreshing: true,
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
          console.log("start pull to refresh");
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
    console.log("onRefresh");
    if (!this.manuallyRefresh) {
      this.setState({ refreshing: true });
    } else {
      this.manuallyRefresh = false;
    }

    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        refreshing: false,
        showFinishTxt: true
      });
      if (this.domScroller) {
        this.domScroller.scroller.options.animationDuration = 500;
      }
    }, 600);
  };

  onEndReached = event => {
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log("reach end", event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = [...this.rData, ...genData(++pageIndex)];
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false
      });
    }, 1000);
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

  render() {
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div
          key={rowID}
          style={{
            backgroundColor: "white",
            borderBottom: "1px solid #ECECED"
          }}
          onClick={() =>this.props.onClose({data:obj.des})}
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
              src={
                "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png"
              }
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
                {obj.title}
              </div>
              <div style={{ fontSize: "14px", color: "#888" }}>{obj.des}</div>
            </div>
          </div>
        </div>
      );
    };
    return (
      <div>
        <SearchBar placeholder="搜索" maxLength={8} />
        <ListView
          ref={el => (this.lv = el)}
          dataSource={this.state.dataSource}
          renderFooter={() => (
            <div style={{ padding: 30, textAlign: "center" }}>
              {this.state.isLoading ? "加载中..." : "加载结束"}
            </div>
          )}
          renderRow={row}
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

export default CustomerSelect;
