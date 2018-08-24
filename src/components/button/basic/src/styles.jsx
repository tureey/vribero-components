import styled from 'styled-components'
import { lighten, darken } from 'polished'

const ButtonBasicStyled = styled.button`
  border: ${props => `1px solid ${props.theme.colors.grey_light}`};
  background: none;
  cursor: pointer;
  outline: none;
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

  ${({ size, theme }) =>
    size === 'small'
      ? `
        font-size: ${theme.font.size.s};
        padding-right: ${theme.spacing.padd.s};
        padding-left: ${theme.spacing.padd.s};
        min-width: 32px;
      `
      : size === 'medium'
        ? `
        font-size: ${theme.font.size.m};
        padding-right: ${theme.spacing.padd.m}  ;
        padding-left: ${theme.spacing.padd.m} ;
      `
        : size === 'large'
          ? `
        font-size: ${theme.font.size.l};
        padding-right: ${theme.spacing.padd.l};
        padding-left: ${theme.spacing.padd.l};
        min-width: 48px;
      ` : ``
  };

  ${({ shape }) =>
    shape === 'square'
      ? `border-radius: 0;`
      : shape === 'rounded'
        ? `border-radius: 3px`
        : shape === 'pill'
          ? `border-radius: 500px` : ``
  };

  ${({ type, importance, theme }) =>
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
          border-color: ${darken(0.2, theme.colors.primary)}
          color: ${darken(0.2, theme.colors.primary)}
        }
      `:
        type === 'primary' && importance === 'terciary'
          ? `
        color: ${theme.colors.primary};
        background-color: transparent;
        border-color: transparent;
        &:hover {
          color: ${darken(0.2, theme.colors.primary)}
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
        &:hover {
          background-color: ${darken(0.2, theme.colors.accent)}
        }
      `:
              type === 'secondary' && importance === 'terciary'
                ? `
        color: ${theme.colors.accent};
        background-color: transparent;
        border-color: transparent;
        &:hover {
          background-color: ${darken(0.2, theme.colors.accent)}
        }
      `:
                type === 'grey' && importance === 'primary'
                  ? `
        color: white;
        background-color: ${theme.colors.grey};
        border-color: ${theme.colors.grey};
        &:hover {
          background-color: ${darken(0.2, theme.colors.grey)}
          border-color: ${darken(0.2, theme.colors.grey)} 
         }
      `:
                  type === 'grey' && importance === 'secondary'
                    ? `
        color: ${theme.colors.grey};
        background-color: transparent;
        border-color: ${theme.colors.grey};
        &:hover {
          background-color: ${darken(0.2, theme.colors.grey)}
          color: ${darken(0.2, theme.colors.grey)}
        }
      `:
                    type === 'grey' && importance === 'terciary'
                      ? `
        color: ${theme.colors.grey};
        background-color: transparent;
        border-color: transparent;
        &:hover {
          color: ${darken(0.2, theme.colors.grey)}
        }
      `: ``
  };
`
const LinkStyled = styled.a`
  border: ${props => `1px solid ${props.theme.colors.grey_light}`};
  background: none;
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
  ${({ size, theme }) =>
    size === 'small'
      ? `
        font-size: ${theme.font.size.s};
        padding-right: ${theme.spacing.padd.s};
        padding-left: ${theme.spacing.padd.s};
        min-width: 32px;
      `
      : size === 'medium'
        ? `
        font-size: ${theme.font.size.m};
        padding-right: ${theme.spacing.padd.m}  ;
        padding-left: ${theme.spacing.padd.m} ;
      `
        : size === 'large'
          ? `
        font-size: ${theme.font.size.l};
        padding-right: ${theme.spacing.padd.l};
        padding-left: ${theme.spacing.padd.l};
        min-width: 48px;
      ` : ``
  };

  ${({ shape }) =>
    shape === 'square'
      ? `border-radius: 0;`
      : shape === 'rounded'
        ? `border-radius: 3px`
        : shape === 'pill'
          ? `border-radius: 500px` : ``
  };

  ${({ type, importance, theme }) =>
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
          border-color: ${darken(0.2, theme.colors.primary)}
          color: ${darken(0.2, theme.colors.primary)}
        }
      `:
        type === 'primary' && importance === 'terciary'
          ? `
        color: ${theme.colors.primary};
        background-color: transparent;
        border-color: transparent;
        &:hover {
          color: ${darken(0.2, theme.colors.primary)}
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
        &:hover {
          border-color: ${darken(0.2, theme.colors.accent)}
          color: ${darken(0.2, theme.colors.accent)}
        }
      `:
              type === 'secondary' && importance === 'terciary'
                ? `
        color: ${theme.colors.accent};
        background-color: transparent;
        border-color: transparent;
        &:hover {
          color: ${lighten(0.2, theme.colors.accent)}
        }
      `: ``
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