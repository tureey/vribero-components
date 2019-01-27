import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputStyled } from "./styles";

class Input extends Component {
  constructor(props) {
    super(props);
    this._handleOnChange = this._handleOnChange.bind(this);
  }

  render() {
    const {
      id,
      name,
      type,
      value,
      size,
      shape,
      appearance,
      placeholder,
      required,
      disabled,
      isInvalid
    } = this.props;

    return (
      <InputStyled
        id={id}
        name={name}
        type={type}
        value={value}
        size={size}
        shape={shape}
        appearance={appearance}
        placeholder={placeholder}
        aria-required={required}
        required={required}
        disabled={disabled}
        aria-invalid={isInvalid}
        onChange={this._handleOnChange}
        {...this.props}
      />
    );
  }

  _handleOnChange(event) {
    this.props.onChange(event.target.value);
  }
}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["square", "rounded", "pill"]).isRequired,
  appearance: PropTypes.oneOf(["white", "grey"]),
  onChange: PropTypes.func,

  disabled: PropTypes.bool,
  required: PropTypes.bool,
  isInvalid: PropTypes.bool,

  theme: PropTypes.object
};

Input.defaultProps = {
  appearance: "grey",
  type: "text",
  size: "medium",
  shape: "rounded",
  disabled: false,
  required: false
};

export default Input;
