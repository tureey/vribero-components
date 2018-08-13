import React from 'react'
import PropTypes from 'prop-types'
import {HelpTextStyled} from './styles'

const HelpText = ({children} = props) => (
  <HelpTextStyled {...props}>
    {children}
  </HelpTextStyled>
)

HelpText.propTypes = {
  theme: PropTypes.object,
}

export default HelpText