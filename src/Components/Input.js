import React, { Component } from 'react';

const propTypes = {
  inputValue: React.PropTypes.string.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
};


class Input extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          id="tweedr-input"
          value={this.props.inputValue}
          onChange={this.props.handleChange}
        />
        <input
          type="submit"
          id="button"
          value="Submit"
        />
      </form>
    );
  }
}

Input.propTypes = propTypes;

export default Input;
