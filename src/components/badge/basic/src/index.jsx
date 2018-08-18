import React from 'react'
import PropTypes from 'prop-types'
import { BadgeBasicStyled } from './styles'

const BadgeBasic = props => (
  <BadgeBasicStyled
    role='status'
    {...props}>
    <span>{props.children}</span>
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