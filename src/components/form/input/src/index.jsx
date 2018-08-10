import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Input extends Component {
  render() {
    const {
      id, name, type, value, placeholder, disabled, required
    } = this.props;

    return (
      <input
        id={id}
        name={name}
        type={type || 'text'}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        onChange={this._handleOnChange}
      />
    )
  }

  _handleOnChange = event => {
    this.props.onchange(event.target.value)
  }
}

export default Input

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,

  theme: PropTypes.object,
}