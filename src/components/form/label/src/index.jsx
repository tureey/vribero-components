import React from 'react'
import PropTypes from 'prop-types'
import { LabelStyled } from './styles'

const Label = props => (
  <LabelStyled htmlFor={props.htmlFor} {...props}>
    {props.children}
  </LabelStyled>
)

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,

  theme: PropTypes.object,
}

export default Label