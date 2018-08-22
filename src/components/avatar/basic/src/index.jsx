import React from 'react'
import PropTypes from 'prop-types'
import { AvatarBasicStyled } from './styles'

const AvatarBasic = ({ url, ...props }) => (
  <AvatarBasicStyled src={url} {...props} />
)

AvatarBasic.propTypes = {
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']).isRequired,
  shape: PropTypes.oneOf(['square', 'rounded', 'circle']).isRequired,
  isBordered: PropTypes.bool,
  borderColor: PropTypes.oneOf([
    'primary', 'secondary', 'grey', 'system'
  ]).isRequired,

  theme: PropTypes.object,
}

AvatarBasic.defaultProps = {
  size: 'small',
  shape: 'circle',
  isBordered: false,
  borderColor: 'grey',
};

export default AvatarBasic