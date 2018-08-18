import React from 'react'
import PropTypes from 'prop-types'
import { ButtonBasicStyled, LinkStyled, ButtonInnerStyled } from './styles'

const ButtonBasic = props => {
  return !link
    ? (
      <ButtonBasicStyled {...props} disabled={props.disabled} onClick={props.onClick}>
        <ButtonInnerStyled>
          {props.leftIcon}
          <span>{props.children}</span>
          {props.rightIcon}
        </ButtonInnerStyled>
      </ButtonBasicStyled>
    ) : (
      <LinkStyled {...props} href={props.href}>
        <ButtonInnerStyled>
          {props.leftIcon}
          <span>{props.children}</span>
          {props.rightIcon}
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