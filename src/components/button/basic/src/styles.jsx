import styled from 'styled-components'
import { darken } from 'polished'

const ButtonBasicStyled = styled.button`
  border: ${props => `1px solid ${props.theme.colors.grey_light}`};
  background: none;
  min-width: 40px;
  font-size: 15px;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: ${props => props.theme.spacing.padd.m};
  padding-left: ${props => props.theme.spacing.padd.m};
  user-select: none;
  border-radius: 2px;
  box-sizing: border-box;
  display: inline-block;
  font-family: ${props => props.theme.font.family.main};
  font-size: ${props => props.theme.font.size.m};
  font-weight: 300;
  height: 40px;
  line-height: normal;
  min-width: 40px;
  outline: 0;
  white-space: nowrap;
  transition: .15s ease all;
  opacity: ${({ disabled }) => disabled ? 0.3 : 1};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};

  ${({ shape }) => stylesShape(shape)};
  ${({ size, theme }) => sylesSize(size, theme)};
  ${({ type, importance, theme }) => stylesColors(type, importance, theme)};
`
const LinkStyled = styled.a`
  border: ${props => `1px solid ${props.theme.colors.grey_light}`};
  background: none;
  min-width: 40px;
  font-size: 15px;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: ${props => props.theme.spacing.padd.m};
  padding-left: ${props => props.theme.spacing.padd.m};
  user-select: none;
  border-radius: 2px;
  box-sizing: border-box;
  display: inline-block;
  font-family: ${props => props.theme.font.family.main};
  font-size: ${props => props.theme.font.size.m};
  font-weight: 300;
  height: 40px;
  line-height: normal;
  min-width: 40px;
  outline: 0;
  white-space: nowrap;
  transition: .15s ease all;
  opacity: ${({ disabled }) => disabled ? 0.3 : 1};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  text-decoration: none;

  ${({ shape }) => stylesShape(shape)};
  ${({ size, theme }) => sylesSize(size, theme)};
  ${({ type, importance, theme }) => stylesColors(type, importance, theme)};
 `

const ButtonInnerStyled = styled.span`
  align-items: center;
  display: inline-flex;
  height: 100%;
  pointer-events: none;

  img:first-child,
  i:first-child,
  svg:first-child {
    margin-right: ${props => props.theme.spacing.marg.s};
  }
`

const stylesShape = shape =>
  shape === 'square'
    ? `border-radius: 0;`
    : shape === 'rounded'
      ? `border-radius: 3px`
      : shape === 'pill'
        ? `border-radius: 500px` : ``

const sylesSize = (size, theme) =>
  size === 'small' ? `
    font-size: ${theme.font.size.s};
    padding-right: ${theme.spacing.padd.s};
    padding-left: ${theme.spacing.padd.s};
    min-width: 32px;
  `
    : size === 'medium' ? `
    font-size: ${theme.font.size.m};
    padding-right: ${theme.spacing.padd.m}  ;
    padding-left: ${theme.spacing.padd.m} ;
  `
      : size === 'large' ? `
    font-size: ${theme.font.size.l};
    padding-right: ${theme.spacing.padd.l};
    padding-left: ${theme.spacing.padd.l};
    min-width: 48px;
  ` : ``

const stylesColors = (type, importance, theme) =>
  type === 'primary' && importance === 'primary'
    ? `${stylesImportancePrimaryOf(theme.colors.primary)}`
    : type === 'primary' && importance === 'secondary'
      ? `${stylesImportanceSecondaryOf(theme.colors.primary)}`
      : type === 'primary' && importance === 'terciary'
        ? `${stylesImportanceTerciaryOf(theme.colors.primary)}`
        : type === 'secondary' && importance === 'primary'
          ? `${stylesImportancePrimaryOf(theme.colors.accent)}`
          : type === 'secondary' && importance === 'secondary'
            ? `${stylesImportanceSecondaryOf(theme.colors.accent)}`
            : type === 'secondary' && importance === 'terciary'
              ? `${stylesImportanceTerciaryOf(theme.colors.accent)}`
              : ``

const colorAndFill = color => `
  color: ${color}
  fill: ${color}
`

const stylesImportancePrimaryOf = color => `
  ${colorAndFill('white')}
  background-color: ${color};
  border-color: ${color};
  &:hover {
    background-color: ${darken(0.05, color)}
    border-color: ${darken(0.05, color)} 
  }
`

const stylesImportanceSecondaryOf = color => `
  ${colorAndFill(color)}
  background-color: transparent;
  border-color: ${color};
  &:hover {
    border-color: ${darken(0.15, color)}
    ${colorAndFill(darken(0.15, color))}
  }
`

const stylesImportanceTerciaryOf = color => `
  ${colorAndFill(color)}
  background-color: transparent;
  border-color: transparent;
  &:hover {
    ${colorAndFill(darken(0.15, color))}
  }
`

export {
  ButtonBasicStyled,
  LinkStyled,
  ButtonInnerStyled,
}