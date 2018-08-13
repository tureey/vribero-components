import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {InputFlatStyled} from './styles'

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
      shape,
      appearance,
      value,
      placeholder,
      disabled,
      required,
    } = this.props;

    return (
      <Fragment>
        {appearance === 'standard' && (
          <input
            id={id}
            name={name}
            type={type}
            value={value}
            shape={shape}
            appearance={appearance}
            placeholder={placeholder}
            disabled={disabled}
            aria-required={required}
            required={required}
            onChange={this._handleOnChange}
            {...this.props}
          />
        )}
        {appearance === 'flat' && (
          <InputFlatStyled
            id={id}
            name={name}
            type={type}
            value={value}
            shape={shape}
            appearance={appearance}
            placeholder={placeholder}
            disabled={disabled}
            aria-required={required}
            required={required}
            onChange={this._handleOnChange}
            {...this.props}
          />
        )}
      </Fragment>
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
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(['square','rounded','pill']).isRequired,
  appearance: PropTypes.oneOf(['flat', 'standard']),
  onChange: PropTypes.func,

  disabled: PropTypes.bool,
  required: PropTypes.bool,

  theme: PropTypes.object,
}

Input.defaultProps = {
  appearance: 'standard',
  type: 'text',
  shape: 'rounded',
  appearance: 'flat',
  disabled: false,
  required: false,
}

export default Input