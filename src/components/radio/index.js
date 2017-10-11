import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  options: PropTypes.array.isRequired,
  testOptionEqual: PropTypes.func,
  renderOption: PropTypes.func,
  renderContainer: PropTypes.func,
  onSelection: PropTypes.func
};

const defaultProps = {
  testOptionEqual(a, b) {
    return JSON.stringify(a) == JSON.stringify(b);
  },
  onSelection(option) {}
};

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      selectedIndex: null
    };
  }

  copySelectedOptionFromProps({ selectedOption, selectedIndex }) {
    this.setState({
      selectedOption,
      selectedIndex
    });
  }

  componentWillMount() {
    this.copySelectedOptionFromProps(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.copySelectedOptionFromProps(newProps);
  }

  selectOption(selectedOption, selectedIndex) {
    this.setState({
      selectedOption,
      selectedIndex
    });
    this.props.onSelection(selectedOption, selectedIndex);
  }

  render() {
    const { selectedOption, selectedIndex } = this.state;
    const children = this.props.options.map(
      function(option, index) {
        const isSelected =
          selectedIndex === index ||
          this.props.testOptionEqual(selectedOption, option);
        const onSelection = this.selectOption.bind(this, option, index);
        return this.props.renderOption(option, isSelected, onSelection, index);
      }.bind(this)
    );
    return this.props.renderContainer(children);
  }
}

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;
