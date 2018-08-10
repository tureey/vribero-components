import styled from 'styled-components'
import { lighten, darken } from 'polished'

const ButtonBasicStyled = styled.button`
  border: ${props => `1px solid ${props.theme.colors.grey_light}`};
  background: none;
  cursor: pointer;
  outline: none;
  min-width: 40px;
  font-size: 15px;
  padding: 0;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: ${props => props.theme.spacing.padd.m};
  padding-left: ${props => props.theme.spacing.padd.m};
  user-select: none;
  border: 1px solid;
  border-radius: 2px;
  box-sizing: border-box;
  display: inline-block;
  font-family: ${props => props.theme.fonts.family.main};
  font-size: ${props => props.theme.fonts.size.m};
  font-weight: 300;
  height: 40px;
  line-height: normal;
  min-width: 40px;
  outline: 0;
  white-space: nowrap;
  transition: .15s ease all;
  opacity: ${({disabled}) => disabled ? 0.3 : 1};
  cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};


  ${({size, theme}) =>
    size === 'small'
      ? `
        font-size: ${theme.fonts.size.s};
        padding-right: ${theme.spacing.padd.s};
        padding-left: ${theme.spacing.padd.s};
        min-width: 32px;
      `
    : size === 'medium'
      ? `
        font-size: ${theme.fonts.size.m};
        padding-right: ${theme.spacing.padd.m}  ;
        padding-left: ${theme.spacing.padd.m} ;
      `
    :  size === 'large'
      ? `
        font-size: ${theme.fonts.size.l};
        padding-right: ${theme.spacing.padd.l};
        padding-left: ${theme.spacing.padd.l};
        min-width: 48px;
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

  ${({type, importance, theme}) =>
    type === 'primary' && importance === 'primary'
      ? `
        color: white;
        background-color: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
        &:hover {
         background-color: ${darken(0.2, theme.colors.primary)}
         border-color: ${darken(0.2, theme.colors.primary)} 
        }
      `:
    type === 'primary' && importance === 'secondary'
      ? `
        color: ${theme.colors.primary};
        background-color: transparent;
        border-color: ${theme.colors.primary};
        &:hover {
          background-color: ${lighten(0.4, theme.colors.primary)}
         }
      `:
    type === 'primary' && importance === 'terciary'
      ? `
        color: ${theme.colors.primary};
        background-color: transparent;
        border-color: transparent;
        &:hover {
          background-color: ${lighten(0.4, theme.colors.primary)}
         }
      `:
    type === 'secondary' && importance === 'primary'
      ? `
        color: white;
        background-color: ${theme.colors.accent};
        border-color: ${theme.colors.accent};
        &:hover {
          background-color: ${darken(0.2, theme.colors.accent)}
          border-color: ${darken(0.2, theme.colors.accent)} 
         }
      `:
    type === 'secondary' && importance === 'secondary'
      ? `
        color: ${theme.colors.accent};
        background-color: transparent;
        border-color: ${theme.colors.accent};
      `:
    type === 'secondary' && importance === 'terciary'
      ? `
        color: ${theme.colors.accent};
        background-color: transparent;
        border-color: transparent;
      `:``
  };
`
const LinkStyled = styled.a`
border: ${props => `1px solid ${props.theme.colors.grey_light}`};
background: none;
cursor: pointer;
outline: none;
min-width: 40px;
font-size: 15px;
padding: 0;
padding-top: 0;
padding-bottom: 0;
padding-right: ${props => props.theme.spacing.padd.m};
padding-left: ${props => props.theme.spacing.padd.m};
user-select: none;
border: 1px solid;
border-radius: 2px;
box-sizing: border-box;
display: inline-block;
font-family: ${props => props.theme.fonts.family.main};
font-size: ${props => props.theme.fonts.size.m};
font-weight: 300;
height: 40px;
line-height: normal;
min-width: 40px;
outline: 0;
white-space: nowrap;
transition: .15s ease all;
opacity: ${({disabled}) => disabled ? 0.3 : 1};
cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};
text-decoration: none;
${({size, theme}) =>
  size === 'small'
    ? `
      font-size: ${theme.fonts.size.s};
      padding-right: ${theme.spacing.padd.s};
      padding-left: ${theme.spacing.padd.s};
      min-width: 32px;
    `
  : size === 'medium'
    ? `
      font-size: ${theme.fonts.size.m};
      padding-right: ${theme.spacing.padd.m}  ;
      padding-left: ${theme.spacing.padd.m} ;
    `
  :  size === 'large'
    ? `
      font-size: ${theme.fonts.size.l};
      padding-right: ${theme.spacing.padd.l};
      padding-left: ${theme.spacing.padd.l};
      min-width: 48px;
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

${({type, importance, theme}) =>
  type === 'primary' && importance === 'primary'
    ? `
      color: white;
      background-color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      &:hover {
       background-color: ${darken(0.2, theme.colors.primary)}
       border-color: ${darken(0.2, theme.colors.primary)} 
      }
    `:
  type === 'primary' && importance === 'secondary'
    ? `
      color: ${theme.colors.primary};
      background-color: transparent;
      border-color: ${theme.colors.primary};
      &:hover {
        background-color: ${lighten(0.4, theme.colors.primary)}
       }
    `:
  type === 'primary' && importance === 'terciary'
    ? `
      color: ${theme.colors.primary};
      background-color: transparent;
      border-color: transparent;
      &:hover {
        background-color: ${lighten(0.4, theme.colors.primary)}
       }
    `:
  type === 'secondary' && importance === 'primary'
    ? `
      color: white;
      background-color: ${theme.colors.accent};
      border-color: ${theme.colors.accent};
      &:hover {
        background-color: ${darken(0.2, theme.colors.accent)}
        border-color: ${darken(0.2, theme.colors.accent)} 
       }
    `:
  type === 'secondary' && importance === 'secondary'
    ? `
      color: ${theme.colors.accent};
      background-color: transparent;
      border-color: ${theme.colors.accent};
    `:
  type === 'secondary' && importance === 'terciary'
    ? `
      color: ${theme.colors.accent};
      background-color: transparent;
      border-color: transparent;
    `:``
};
`

const ButtonInnerStyled = styled.span`
  align-items: center;
  display: inline-flex;
  height: 100%;
  pointer-events: none;
`

export {
  ButtonBasicStyled,
  LinkStyled,
  ButtonInnerStyled,
}