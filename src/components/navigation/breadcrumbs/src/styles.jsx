import styled from 'styled-components'
import { lighten, darken } from 'polished'

const BadgeBasicStyled = styled.span`
  border: ${props => `1px solid ${props.theme.colors.grey_light}`};
  background: none;
  outline: none;
  font-size: 15px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-right: ${props => props.theme.spacing.padd.m};
  padding-left: ${props => props.theme.spacing.padd.m};
  user-select: none;
  border: 1px solid;
  border-radius: 2px;
  box-sizing: border-box;
  display: inline-block;
  font-family: ${props => props.theme.font.family.main};
  font-size: ${props => props.theme.font.size.m};
  font-weight: 300;
  line-height: normal;
  outline: 0;
  white-space: nowrap;
  transition: .15s ease all;
  opacity: ${({disabled}) => disabled ? 0.3 : 1};

  ${({size, theme}) =>
    size === 'small'
      ? `
        font-size: ${theme.font.size.xs};
        padding-right: ${theme.spacing.padd.s};
        padding-left: ${theme.spacing.padd.s};
      `
    : size === 'medium'
      ? `
        font-size: ${theme.font.size.s};
        padding-right: ${theme.spacing.padd.m}  ;
        padding-left: ${theme.spacing.padd.m} ;
      `
    :  size === 'large'
      ? `
        font-size: ${theme.font.size.m};
        padding-right: ${theme.spacing.padd.l};
        padding-left: ${theme.spacing.padd.l};
      ` :``
  };

  ${({shape}) =>
    shape === 'square'
      ? `border-radius: 0;`
    : shape === 'rounded'
      ? `border-radius: 3px`
    : shape === 'pill'
      ? `border-radius: 500px` : ``
  };

  ${({type, theme}) =>
    type === 'primary'
      ? `
        color: white;
        fill: white;
        background-color: ${theme.colors.primary};
      `:
    type === 'secondary'
      ? `
        color: white;
        fill: white;
        background-color: ${theme.colors.accent};
      `:
    type === 'success'
      ? `
      color: white;
      fill: white;
      background-color: ${theme.colors.success};
      `:
    type === 'danger'
      ? `
      color: white;
      fill: white;
      background-color: ${theme.colors.danger};
      `:``
  };
`
export {
  BadgeBasicStyled
}