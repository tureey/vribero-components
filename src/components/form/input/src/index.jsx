import React from "react";
import PropTypes from "prop-types";
import { InputStyled } from "./styles";

function Input(props) {
  return (
    <InputStyled
      id={props.id}
      name={props.name}
      type={props.type}
      value={props.value}
      size={props.size}
      shape={props.shape}
      appearance={props.appearance}
      placeholder={props.placeholder}
      aria-required={props.required}
      required={props.required}
      isInvalid={props.isInvalid}
      disabled={props.disabled}
      onChange={event => props.onchange(event.target.value)}
      theme={props.theme}
    />
  );
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
