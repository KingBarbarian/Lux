import React from "react";
import { Result } from "antd-mobile";
import classNames from 'classnames/bind'
import styles from './index.css'
let cx = classNames.bind(styles)
const customIcon = src => (
  <img src={src}  className={cx('icon')} alt="icon" />
);

class ListEmpty extends React.Component {
  render() {
    return (
      <div style={{ flex: 1 }}>
        <Result
          img={customIcon(
            "https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg"
          )}
          title="没有内容"
          message="请尝试重新刷新"
        />
      </div>
    );
  }
}

export default ListEmpty;
