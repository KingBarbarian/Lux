// high order modal

// ModalComponent => (props, )

@modal(Modal)
class Component {
  componentWillRecieveProps(nextProps) {
    if(nextProps.modalResult !== this.props.modalResult) {
      this.refresh();
    }
  }
  onClick() {
    this.props.show(param);
  }
  render() {
    return (
      <View>
      </View>
    )
  }
}

Component => Modal => class Wrapper {
  state = {
    visiable: false
  }

  show = (param) => {
    this.setState({visiable: true, param: param})
  }

  close = (modalResult) => {
    this.setState({visiable: false, modalResult: modalResult})
  }
  
  render() {
    return (
      <View>
        <Component show={this.show} modalResult={this.state.modalResult}/>
        <Modal param={this.param} visiable={this.state.visiable} onClose={this.close}/>
      </View>
    )
  }
}

class MyModal {
  static propTypes = {

  };
  static defaultProps = {
    visiable: false,
    onClose: () => null,
  }
  render() {
    return (
      <View></View>
    )
  }
}