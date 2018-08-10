import React from 'react'
import PropTypes from 'prop-types'
import {ButtonBasicStyled, LinkStyled, ButtonInnerStyled} from './styles'

const ButtonBasic = ({
  children, leftIcon, rightIcon, disabled, onClick, link, href, ...props
}) => {
  return !link
    ? (
      <ButtonBasicStyled {...props} disabled={disabled} onClick={onClick}>
        <ButtonInnerStyled>
          {leftIcon}
          <span>{children}</span>
          {rightIcon}
        </ButtonInnerStyled>
      </ButtonBasicStyled>
    ) : (
      <LinkStyled {...props} href={href}>
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
    'terciary',
  ]).isRequired,
  importance: PropTypes.oneOf([
    'primary',
    'secondary',
    'terciary',
  ]).isRequired,
  size: PropTypes.oneOfType(['small','medium','large']).isRequired,
  shape: PropTypes.oneOfType(['square','rounded','pill']).isRequired,
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
  shapew: 'rounded',
};

export default ButtonBasic