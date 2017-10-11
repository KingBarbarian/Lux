import React from "react";
import PropTypes from "prop-types";
import { SearchBar } from "antd-mobile";

const noop = () => {};

const propTypes = {
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func
};

const defaultProps = {
  placeholder: "请输入",
  onChangeText: noop,
  onSubmitEditing: noop
};

class SearchInput extends React.Component {
  render() {
    const { placeholder, onChangeText, onSubmitEditing } = this.props;
    return (
      <div>
        <SearchBar
          placeholder={placeholder}
          maxLength={8}
          onChange={onChangeText}
          onSubmit={onSubmitEditing}
        />
      </div>
    );
  }
}

SearchInput.propTypes = propTypes;
SearchInput.defaultProps = defaultProps;

export default SearchInput;
