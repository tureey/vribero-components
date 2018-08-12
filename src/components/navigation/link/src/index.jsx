import React from 'react'
import PropTypes from 'prop-types'
import {LinkStyled} from './styles'

const Link = ({url, children, target, theme, ...props}) => (
  <LinkStyled
    href={url}
    target={target}
    theme={theme}
    {...props}
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
  color: 'secondary',
  underlined: false,
  target: '_blank'
}

export default Link