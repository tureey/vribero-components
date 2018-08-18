import React from 'react'
import PropTypes from 'prop-types'
import { BadgeBasicStyled } from './styles'

const BadgeBasic = ({ type, size, shape, children, theme }) => (
  <BadgeBasicStyled
    role='status'
    type={type}
    size={size}
    shape={shape}
    theme={theme}>
    <span>{children}</span>
  </BadgeBasicStyled>
)

BadgeBasic.propTypes = {
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
  ]).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  shape: PropTypes.oneOf(['square', 'rounded', 'pill']).isRequired,

  theme: PropTypes.object,
}

BadgeBasic.defaultProps = {
  type: 'primary',
  size: 'small',
  shape: 'rounded',
};

export default BadgeBasic