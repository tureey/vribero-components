import React from 'react'
import PropTypes from 'prop-types'
import {LinkStyled} from './styles'

const Link = ({url, children, theme, ...props}) => (
  <LinkStyled href={url} theme={theme} {...props}>
    {children}
  </LinkStyled>
)

Link.propTypes = {
  url: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
  underlined: PropTypes.bool,

  theme: PropTypes.object,
}

Link.defaultProps = {
  color: 'secondary',
  underlined: false,
}

export default Link