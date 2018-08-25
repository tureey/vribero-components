import React from 'react'
import PropTypes from 'prop-types'
import { AvatarBasicStyled } from './styles'

const AvatarBasic = ({
  url,
  size,
  shape,
  isBordered,
  borderColor,
  theme
}) => (
    <AvatarBasicStyled
      role='status'
      src={url}
      size={size}
      shape={shape}
      isBordered={isBordered}
      borderColor={borderColor}
      theme={theme} />
  )

AvatarBasic.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']).isRequired,
  shape: PropTypes.oneOf(['square', 'rounded', 'circle']).isRequired,
  isBordered: PropTypes.bool,
  borderColor: PropTypes.oneOf([
    'primary',
    'secondary',
    'system',
    'grey',
  ]),

  theme: PropTypes.object,
}

AvatarBasic.defaultProps = {
  size: 'small',
  isBordered: false,
  borderColor: 'grey',
  shape: 'circle',
};

export default AvatarBasic