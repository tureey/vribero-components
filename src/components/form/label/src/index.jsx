import React from 'react'
import PropTypes from 'prop-types'
import { LabelStyled } from './styles'

const Label = props => (
  <LabelStyled for={props.forInput} {...props}>
    {props.children}
  </LabelStyled>
)

Label.propTypes = {
  forInput: PropTypes.string.isRequired,

  theme: PropTypes.object,
}

export default Label