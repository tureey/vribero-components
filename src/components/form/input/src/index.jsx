import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { InputFlatStyled } from './styles'

class Input extends Component {
  constructor(props) {
    super(props)
    this._handleOnChange = this._handleOnChange.bind(this)
  }

  render() {
    const {
      id,
      name,
      type,
      size,
      shape,
      appearance,
      value,
      placeholder,
      disabled,
      required,
    } = this.props;

    return (
      <InputFlatStyled
        id={id}
        name={name}
        type={type}
        value={value}
        size={size}
        shape={shape}
        appearance={appearance}
        placeholder={placeholder}
        disabled={disabled}
        aria-required={required}
        required={required}
        onChange={this._handleOnChange}
        {...this.props}
      />
    )
  }

  _handleOnChange(event) {
    this.props.onchange(event.target.value)
  }
}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(['square', 'rounded', 'pill']).isRequired,
  appearance: PropTypes.oneOf(['white', 'grey']),
  onChange: PropTypes.func,

  disabled: PropTypes.bool,
  required: PropTypes.bool,

  theme: PropTypes.object,
}

Input.defaultProps = {
  appearance: 'white',
  type: 'text',
  size: 'medium',
  shape: 'rounded',
  appearance: 'flat',
  disabled: false,
  required: false,
}

export default Input