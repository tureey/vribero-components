import React from 'react'
import PropTypes from 'prop-types'
import { ButtonBasicStyled, LinkStyled, ButtonInnerStyled } from './styles'

const ButtonBasic = ({
  link,
  disabled,
  onClick,
  leftIcon,
  rightIcon,
  href,
  theme,
  children,
}) => {
  return !link
    ? (
      <ButtonBasicStyled disabled={disabled} onClick={onClick} theme={theme}>
        <ButtonInnerStyled>
          {leftIcon}
          <span>{children}</span>
          {rightIcon}
        </ButtonInnerStyled>
      </ButtonBasicStyled>
    ) : (
      <LinkStyled href={href}>
        <ButtonInnerStyled>
          {leftIcon}
          <span>{children}</span>
          {rightIcon}
        </ButtonInnerStyled>
      </LinkStyled>
    )
}

ButtonBasic.propTypes = {
  type: PropTypes.oneOf([
    'primary',
    'secondary',
  ]).isRequired,
  importance: PropTypes.oneOf([
    'primary',
    'secondary',
    'terciary',
  ]).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  shape: PropTypes.oneOf(['square', 'rounded', 'pill']).isRequired,
  disabled: PropTypes.bool,
  link: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,

  theme: PropTypes.object,
}

ButtonBasic.defaultProps = {
  type: 'primary',
  importance: 'primary',
  size: 'medium',
  shape: 'rounded',
};

export default ButtonBasic