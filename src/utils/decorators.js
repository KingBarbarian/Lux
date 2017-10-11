import React from "react";
import { Modal } from "antd-mobile";

/**
 * 把一个组件变成Modal
 * @param {Object} modalConfig 允许antd自带modal可以接受的参数
 */
export const modal = modalConfig => Component =>
  class ModalWrapper extends React.Component {
    render() {
      return (
        <Modal visible={this.props.visible} {...modalConfig}>
          <Component {...this.props} />
        </Modal>
      );
    }
  };

/**
 * 把组件与传入的Modal组合
 * modal主动关闭调用close：可以传入回传的数据：close(result)
 * 打开modal：show(modaName)(params)
 * 当前组件关闭modal：由modal自己控制关闭
 * modal返回数据：在props.modalResult中
 * @param {Object} modals 需要传入Object，因为需要知道每个modal名，返回的数据也是存在对应的modal名下
 */
export const combineModal = modals => Component =>
  class ModalComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        params: {},
        modalResults: {},
        modalParams: {}
      };
      Object.keys(modals).forEach(name => {
        this.state[name] = false;
        this.state.modalResults[name] = {};
      });
    }

    show = ModalName => params => {
      this.setState({
        [ModalName]: true,
        modalParams: {
          ...this.state.modalParams,
          [ModalName]: params
        }
      });
    };

    close = ModalName => result => {
      this.setState({
        [ModalName]: false
      });
      if (result) {
        this.setState({
          modalResults: { ...this.state.modalResults, [ModalName]: result }
        });
      }
    };

    render() {
      return (
        <div>
          <Component
            show={this.show}
            modalResults={this.state.modalResults}
            {...this.props}
          />
          {Object.keys(modals).map(modalName => {
            let Modal = modals[modalName];
            Modal.displayName = modalName;
            return (
              <Modal
                key={modalName}
                {...this.state.modalParams[modalName]}
                visible={this.state[modalName]}
                onClose={this.close(modalName)}
              />
            );
          })}
        </div>
      );
    }
  };
