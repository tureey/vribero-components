import React from 'react'
import PropTypes from 'prop-types'
import { LinkStyled } from './styles'

const Link = props => (
  <LinkStyled
    href={props.url}
    target={props.target}
    theme={props.theme}
    {...props}
  >
    {props.children}
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