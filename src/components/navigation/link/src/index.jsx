import React from 'react'
import PropTypes from 'prop-types'
import { LinkStyled } from './styles'

const Link = ({ url, target, theme, children, ...other }) => (
  <LinkStyled
    href={url}
    target={target}
    theme={theme}
    {...other}
  >
    {children}
  </LinkStyled>
)

Link.propTypes = {
  url: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
  title: PropTypes.string,
  underlined: PropTypes.bool,
  target: PropTypes.oneOf(['_self', '_blank']),

  theme: PropTypes.object,
}

Link.defaultProps = {
  color: 'primary',
  underlined: false,
  target: '_blank'
}

export default Link